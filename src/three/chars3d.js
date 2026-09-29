// 3D White Bear and Claude Pet, built from the shared specs.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import { BEAR_TALL, PET, COLORS } from '../chars/spec.js';
import { drawBearFace, drawPetFace } from '../chars/faces.js';
import { drawPawPrint } from '../chars/draw2d.js';
import { Deformer, inked, GRAD } from './materials.js';

const INK = 0x2a2321;
const PET_INK = 0x3a2520;
export const PET_SCALE = 1.25; // 3D pet is drawn a little larger than true scale

// ------------------------------------------------------------ helpers
function smoothGeo(g) {
  g.deleteAttribute('uv');
  const m = mergeVertices(g, 1e-5);
  m.computeVertexNormals();
  return m;
}

function bearBodyGeometry(spec) {
  const pts = spec.dense.map(([y, r]) => new THREE.Vector2(Math.max(r, 1e-4), y));
  const g = new THREE.LatheGeometry(pts, 80, Math.PI, Math.PI * 2);
  g.scale(1, 1, spec.depth);
  return smoothGeo(g);
}

function puckGeometry(r, t) {
  const pts = [];
  const n = 10;
  for (let i = 0; i <= n; i++) {
    const a = -Math.PI / 2 + (i / n) * Math.PI;
    pts.push(new THREE.Vector2(r * 0.8 + Math.cos(a) * r * 0.2, Math.sin(a) * t));
  }
  pts.unshift(new THREE.Vector2(0.0001, -t));
  pts.push(new THREE.Vector2(0.0001, t));
  const g = new THREE.LatheGeometry(pts, 48);
  g.rotateX(Math.PI / 2);
  return smoothGeo(g);
}

function canvasTex(w, h) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return { canvas: c, ctx: c.getContext('2d'), tex };
}

/** closed strap loop hugging the lathe body, returned as a ribbon geometry */
function strapGeometry(spec, width = 0.05, off = 0.012) {
  const surf = (x, y, z) => Math.hypot(x, z / spec.depth) - spec.radiusAt(y);
  const A = new THREE.Vector3(spec.radiusAt(spec.strap.sy) * 0.55, spec.strap.sy, 0);
  const B = new THREE.Vector3(spec.bag.x * 0.8, spec.strap.hy, 0);
  const C = A.clone().add(B).multiplyScalar(0.5);
  const u = B.clone().sub(A).normalize();
  const v = new THREE.Vector3(0, 0, 1);
  const N = 96;
  const pts = [];
  const normals = [];
  for (let i = 0; i < N; i++) {
    const phi = (i / N) * Math.PI * 2;
    const dir = u.clone().multiplyScalar(Math.cos(phi)).add(v.clone().multiplyScalar(Math.sin(phi)));
    let lo = 0, hi = 1.5;
    for (let k = 0; k < 40; k++) {
      const m = (lo + hi) / 2;
      const p = C.clone().addScaledVector(dir, m);
      if (surf(p.x, p.y, p.z) < 0) lo = m; else hi = m;
    }
    const p = C.clone().addScaledVector(dir, lo);
    const e = 0.002;
    const n = new THREE.Vector3(
      surf(p.x + e, p.y, p.z) - surf(p.x - e, p.y, p.z),
      surf(p.x, p.y + e, p.z) - surf(p.x, p.y - e, p.z),
      surf(p.x, p.y, p.z + e) - surf(p.x, p.y, p.z - e),
    ).normalize();
    pts.push(p.addScaledVector(n, off));
    normals.push(n);
  }
  const pos = [], nor = [], idx = [];
  for (let i = 0; i < N; i++) {
    const p = pts[i];
    const tng = pts[(i + 1) % N].clone().sub(pts[(i + N - 1) % N]).normalize();
    const w = new THREE.Vector3().crossVectors(tng, normals[i]).normalize().multiplyScalar(width / 2);
    pos.push(p.x + w.x, p.y + w.y, p.z + w.z, p.x - w.x, p.y - w.y, p.z - w.z);
    nor.push(...normals[i].toArray(), ...normals[i].toArray());
  }
  for (let i = 0; i < N; i++) {
    const a = i * 2, b = ((i + 1) % N) * 2;
    idx.push(a, b, a + 1, b, b + 1, a + 1);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setIndex(idx);
  return { geometry: g, points: pts };
}

/** decal grid hugging the lathe surface around the front */
function bearDecalGeometry(spec, thetaMax, y0, y1, eps = 0.004, nx = 48, ny = 32) {
  const pos = [], uv = [], idx = [];
  for (let j = 0; j <= ny; j++) {
    const y = y0 + ((y1 - y0) * j) / ny;
    const r = spec.radiusAt(y) + eps;
    for (let i = 0; i <= nx; i++) {
      const th = -thetaMax + (2 * thetaMax * i) / nx;
      pos.push(r * Math.sin(th), y, r * Math.cos(th) * spec.depth);
      uv.push(i / nx, j / ny);
    }
  }
  for (let j = 0; j < ny; j++)
    for (let i = 0; i < nx; i++) {
      const a = j * (nx + 1) + i;
      idx.push(a, a + 1, a + nx + 1, a + 1, a + nx + 2, a + nx + 1);
    }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

/** z of the rounded-box front surface at (x,y) (box centred at origin) */
function roundedFrontZ(x, y, W, H, D, R) {
  const dx = Math.max(Math.abs(x) - (W / 2 - R), 0);
  const dy = Math.max(Math.abs(y) - (H / 2 - R), 0);
  const q = R * R - dx * dx - dy * dy;
  return D / 2 - R + Math.sqrt(Math.max(q, 0));
}

function blobShadowTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const x = c.getContext('2d');
  const g = x.createRadialGradient(64, 64, 4, 64, 64, 62);
  g.addColorStop(0, 'rgba(70,50,80,0.55)');
  g.addColorStop(0.55, 'rgba(70,50,80,0.28)');
  g.addColorStop(1, 'rgba(70,50,80,0)');
  x.fillStyle = g;
  x.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
let SHADOW_TEX = null;
export function blobShadow(rx, rz) {
  SHADOW_TEX ||= blobShadowTexture();
  const m = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1),
    new THREE.MeshBasicMaterial({ map: SHADOW_TEX, transparent: true, depthWrite: false }),
  );
  m.rotation.x = -Math.PI / 2;
  m.scale.set(rx * 2, rz * 2, 1);
  m.renderOrder = 1;
  return m;
}

// ------------------------------------------------------------ White Bear
export const BEAR3D_POSE = () => ({
  x: 0, y: 0, z: 0, rotY: 0, tiltZ: 0, tiltX: 0,
  squash: 1, bendX: 0, bendZ: 0, twist: 0,
  armL: 0, armR: 0, armLSwing: 0, armRSwing: 0,
  legL: 0, legR: 0, legLSwing: 0, legRSwing: 0,
  bagSwing: 0, tailWag: 0,
  face: { expr: 'neutral' },
  hold: null, visible: true, shadow: 1,
});

export class Bear3D {
  constructor(spec = BEAR_TALL) {
    this.spec = spec;
    this.root = new THREE.Group();
    this.def = new Deformer(spec.bend);
    const d = this.def;
    d.u.uRimStrength.value = 0.18;
    d.u.uRim.value.set(0xfff4ec);
    const white = d.toon(0xffffff, GRAD.soft);
    const ink = d.outline(INK);
    const inner = d.toon(new THREE.Color(COLORS.earInner), GRAD.soft);
    const black = d.toon(0x2b2624, GRAD.soft);
    this.materials = { white, ink, inner, black };

    this.body = inked(bearBodyGeometry(spec), white, ink, this.root);

    // ears
    this.ears = [-1, 1].map((side) => {
      const e = inked(new THREE.SphereGeometry(spec.ear.r, 32, 20), white, ink, this.root);
      e.position.set(side * spec.ear.x, spec.ear.y, -0.015);
      e.scale.set(1, 1, 0.6);
      e.rotation.z = -side * 0.2;
      const ie = inked(new THREE.SphereGeometry(spec.ear.r * 0.55, 24, 16), inner, null, e);
      ie.position.set(side * 0.006, 0.006, spec.ear.r * 0.72);
      ie.scale.set(1, 1, 0.35);
      return e;
    });

    // arms (pivot at the shoulder, inside the body contour)
    const shX = spec.radiusAt(spec.arm.y) - spec.arm.r * 0.45;
    const Lc = spec.arm.len - spec.arm.r;
    const armGeo = new THREE.CapsuleGeometry(spec.arm.r, Lc, 10, 28);
    this.arms = [-1, 1].map((side) => {
      const pivot = new THREE.Group();
      pivot.position.set(side * shX, spec.arm.y, 0.03);
      this.root.add(pivot);
      const m = inked(armGeo, white, ink, pivot);
      m.position.y = -Lc / 2;
      const hand = new THREE.Group();
      hand.position.y = -spec.arm.len + spec.arm.r * 0.6;
      pivot.add(hand);
      return { side, pivot, mesh: m, hand };
    });

    // legs
    const legLc = spec.leg.len - spec.leg.r;
    const legGeo = new THREE.CapsuleGeometry(spec.leg.r, legLc, 10, 24);
    this.legs = [-1, 1].map((side) => {
      const pivot = new THREE.Group();
      pivot.position.set(side * spec.leg.x, spec.leg.len, 0);
      this.root.add(pivot);
      const m = inked(legGeo, white, ink, pivot);
      m.position.y = -legLc / 2 - spec.leg.r * 0.02;
      return { side, pivot, mesh: m };
    });

    // tail
    const tr = spec.tail.r;
    this.tail = inked(new THREE.SphereGeometry(tr, 24, 16), white, ink, this.root);
    this.tail.position.set(0, spec.tail.y, -spec.radiusAt(spec.tail.y) * spec.depth - tr * 0.35);

    // strap
    const strap = strapGeometry(spec);
    const strapMat = d.toon(0x262120, GRAD.soft);
    this.strap = new THREE.Mesh(strap.geometry, strapMat);
    this.strap.frustumCulled = false;
    this.root.add(this.strap);

    // bag: hangs from the strap near the hip
    this.bagPivot = new THREE.Group();
    const surfZ = spec.radiusAt(spec.bag.y) * spec.depth;
    this.bagPivot.position.set(spec.bag.x + 0.01, spec.bag.y + spec.bag.r * 0.75, surfZ * 0.55);
    this.bagPivot.rotation.y = -0.55;
    this.root.add(this.bagPivot);
    const bag = inked(puckGeometry(spec.bag.r, 0.055), black, ink, this.bagPivot);
    bag.position.set(0, -spec.bag.r * 0.75, 0.06);
    const pawC = canvasTex(256, 256);
    pawC.ctx.translate(128, 128);
    pawC.ctx.scale(1100, -1100);
    drawPawPrint(pawC.ctx, 0, 0.004, 1.0, '#ffffff');
    pawC.tex.needsUpdate = true;
    const paw = new THREE.Mesh(new THREE.PlaneGeometry(spec.bag.r * 1.6, spec.bag.r * 1.6),
      d.basic({ map: pawC.tex, transparent: true, depthWrite: false }));
    paw.position.set(0, 0, 0.0565);
    paw.renderOrder = 3;
    paw.frustumCulled = false;
    bag.add(paw);
    this.bag = bag;

    // face decal (canvas texture repainted when the expression changes)
    this.faceY0 = spec.face.y - 0.22;
    this.faceY1 = spec.face.y + 0.2;
    this.faceTheta = 1.05;
    const rf = spec.radiusAt(spec.face.y);
    this.facePhysW = 2 * this.faceTheta * rf;
    const fh = Math.round((1024 * (this.faceY1 - this.faceY0)) / this.facePhysW);
    this.faceC = canvasTex(1024, fh);
    this.face = new THREE.Mesh(
      bearDecalGeometry(spec, this.faceTheta, this.faceY0, this.faceY1),
      d.basic({ map: this.faceC.tex, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4 }),
    );
    this.face.renderOrder = 2;
    this.face.frustumCulled = false;
    this.root.add(this.face);
    this.faceKey = '';

    // props that can be held (right hand = +x side)
    this.mic = makeMic(d);
    this.arms[1].hand.add(this.mic);
    this.wand = makeWand(d);
    this.arms[1].hand.add(this.wand);

    this.shadow = blobShadow(0.55 * (spec.height / 2 + 0.3), 0.4);
    this.pose = BEAR3D_POSE();
  }

  paintFace(face, time) {
    const key = JSON.stringify([face.expr, (face.open || 0).toFixed(2), (face.blink || 0).toFixed(2),
      (face.lookX || 0).toFixed(2), (face.lookY || 0).toFixed(2), (face.blush ?? -1), (face.sweat || 0).toFixed(2),
      (face.gloom || 0).toFixed(2), face.tremble ? time.toFixed(2) : 0, face.sweat ? time.toFixed(2) : 0]);
    if (key === this.faceKey) return;
    this.faceKey = key;
    const { canvas, ctx, tex } = this.faceC;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const px = canvas.width / this.facePhysW;
    const cy = canvas.height * (1 - (this.spec.face.y - this.faceY0) / (this.faceY1 - this.faceY0));
    ctx.translate(canvas.width / 2, cy);
    ctx.scale(px * this.spec.face.scale, -px * this.spec.face.scale);
    drawBearFace(ctx, { time, ...face });
    tex.needsUpdate = true;
  }

  /** apply a pose (see BEAR3D_POSE) */
  apply(p, time = 0) {
    this.pose = p;
    const s = this.spec;
    this.root.visible = p.visible !== false;
    this.root.position.set(p.x, p.y, p.z);
    this.root.rotation.set(p.tiltX || 0, p.rotY || 0, p.tiltZ || 0, 'YXZ');
    const u = this.def.u;
    u.uSquash.value = p.squash ?? 1;
    u.uBend.value.set(p.bendX || 0, p.bendZ || 0);
    u.uTwist.value = p.twist || 0;
    for (const a of this.arms) {
      const raise = a.side < 0 ? p.armL : p.armR;
      const swing = a.side < 0 ? p.armLSwing : p.armRSwing;
      a.pivot.rotation.set(-(swing || 0), 0, a.side * (s.arm.splay3d + (raise || 0)), 'ZXY');
    }
    for (const l of this.legs) {
      const lift = l.side < 0 ? p.legL : p.legR;
      const swing = l.side < 0 ? p.legLSwing : p.legRSwing;
      l.pivot.position.y = s.leg.len + (lift || 0);
      l.pivot.rotation.x = -(swing || 0);
    }
    this.bagPivot.rotation.z = p.bagSwing || 0;
    this.tail.position.x = Math.sin(p.tailWag || 0) * 0.03;
    this.mic.visible = p.hold === 'mic';
    this.wand.visible = p.hold === 'wand';
    this.paintFace(p.face || {}, time);
    this.root.updateMatrixWorld(true);
    this.def.syncRoot(this.root);
    // blob shadow on the ground
    this.shadow.visible = this.root.visible && (p.shadow ?? 1) > 0;
    const hgt = Math.max(0, p.y - (p.groundY ?? 0));
    const k = 1 / (1 + hgt * 1.5);
    this.shadow.position.set(p.x, (p.groundY ?? 0) + 0.004, p.z);
    this.shadow.material.opacity = (p.shadow ?? 1) * k;
    this.shadow.scale.set(0.62 * (s.height / 2 + 0.6) * k, 0.62 * k, 1);
  }

  /** keep outline width constant in screen pixels */
  updateOutline(camera, px = 3.2, screenH = 1080) {
    const head = new THREE.Vector3(0, this.spec.height * 0.6, 0).applyMatrix4(this.root.matrixWorld);
    const dist = camera.position.distanceTo(head);
    const world = (2 * dist * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2)) / screenH;
    this.def.u.uOutline.value = px * world;
  }
}

function makeMic(d) {
  const g = new THREE.Group();
  const ink = d.outline(INK);
  const handle = inked(new THREE.CylinderGeometry(0.03, 0.022, 0.26, 20), d.toon(0x4b4f5c, GRAD.soft), ink, g);
  handle.position.y = 0.06;
  const head = inked(new THREE.SphereGeometry(0.07, 24, 16), d.toon(0xdfe3ea, GRAD.soft), ink, g);
  head.position.y = 0.22;
  g.rotation.set(0.5, 0, -0.35);
  g.position.set(0, 0.0, 0.07);
  return g;
}

function makeWand(d) {
  const g = new THREE.Group();
  const ink = d.outline(INK);
  const stick = inked(new THREE.CylinderGeometry(0.014, 0.014, 0.34, 12), d.toon(0xffcf6b, GRAD.soft), ink, g);
  stick.position.y = 0.1;
  const ring = inked(new THREE.TorusGeometry(0.075, 0.016, 12, 40), d.toon(0xff9fc0, GRAD.soft), ink, g);
  ring.position.y = 0.34;
  g.rotation.set(0.35, 0, -0.25);
  g.position.set(0, 0, 0.06);
  g.ring = ring;
  return g;
}

// ------------------------------------------------------------ Claude Pet
export const PET3D_POSE = () => ({
  x: 0, y: 0, z: 0, rotY: 0, tiltZ: 0, tiltX: 0,
  squash: 1, bendX: 0, bendZ: 0, twist: 0,
  armL: 0, armR: 0, armLSwing: 0, armRSwing: 0,
  walk: 0, stepPhase: 0, legLift: 0,
  face: { expr: 'normal' }, ears: 0, hold: null, visible: true, shadow: 1,
});

export class Pet3D {
  constructor() {
    this.root = new THREE.Group();
    this.def = new Deformer(PET.bend);
    const d = this.def;
    d.u.uSpec.value = 0.85;
    d.u.uRimStrength.value = 0.22;
    d.u.uRim.value.set(0xffd9c4);
    const orange = d.toon(new THREE.Color(COLORS.orange), GRAD.pet);
    const orangeDark = d.toon(new THREE.Color('#c96a4c'), GRAD.pet);
    const ink = d.outline(PET_INK);
    const white = d.toon(0xffffff, GRAD.soft);
    const inner = d.toon(new THREE.Color(COLORS.earInner), GRAD.soft);
    this.materials = { orange, ink };

    const { width: W, height: H, depth: D, radius: R } = PET;
    this.body = inked(new RoundedBoxGeometry(W, H, D, 8, R), orange, ink, this.root);
    this.body.position.y = PET.centerY;

    // legs
    const L = PET.leg;
    const legLc = PET.lift + 0.06 - 2 * L.r;
    const legGeo = new THREE.CapsuleGeometry(L.r, Math.max(0.02, legLc), 8, 20);
    this.legs = L.xs.map((x, i) => {
      const pivot = new THREE.Group();
      pivot.position.set(x, PET.lift + 0.06, 0.02);
      this.root.add(pivot);
      const m = inked(legGeo, orangeDark, ink, pivot);
      m.position.y = -(legLc / 2 + L.r) + 0.0;
      return { i, pivot, mesh: m };
    });

    // arm nubs
    const A = PET.arm;
    const armGeo = new THREE.CapsuleGeometry(A.r, A.len, 8, 20);
    this.arms = [-1, 1].map((side) => {
      const pivot = new THREE.Group();
      pivot.position.set(side * (A.x - 0.1), A.y, 0);
      this.root.add(pivot);
      const m = inked(armGeo, orange, ink, pivot);
      m.rotation.z = Math.PI / 2;
      m.position.x = side * (A.len / 2 + 0.1);
      const hand = new THREE.Group();
      hand.position.x = side * (A.len + 0.14);
      pivot.add(hand);
      return { side, pivot, mesh: m, hand };
    });

    // face decal on the front face
    const fw = W * 0.98, fh = H * 0.92;
    const nx = 40, ny = 26;
    const pos = [], uv = [], idx = [];
    for (let j = 0; j <= ny; j++)
      for (let i = 0; i <= nx; i++) {
        const x = -fw / 2 + (fw * i) / nx, y = -fh / 2 + (fh * j) / ny;
        pos.push(x, y + PET.centerY, roundedFrontZ(x, y, W, H, D, R) + 0.004);
        uv.push(i / nx, j / ny);
      }
    for (let j = 0; j < ny; j++)
      for (let i = 0; i < nx; i++) {
        const a = j * (nx + 1) + i;
        idx.push(a, a + 1, a + nx + 1, a + 1, a + nx + 2, a + nx + 1);
      }
    const fg = new THREE.BufferGeometry();
    fg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    fg.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    fg.setIndex(idx);
    this.facePhys = [fw, fh];
    this.faceC = canvasTex(1024, Math.round((1024 * fh) / fw));
    this.face = new THREE.Mesh(fg, d.basic({ map: this.faceC.tex, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4 }));
    this.face.renderOrder = 2;
    this.face.frustumCulled = false;
    this.root.add(this.face);
    this.faceKey = '';

    // bear-ears headband (chorus)
    this.earBand = new THREE.Group();
    this.earBand.position.set(0, PET.lift + PET.height, 0);
    this.root.add(this.earBand);
    for (const side of [-1, 1]) {
      const e = inked(new THREE.SphereGeometry(0.085, 28, 18), white, ink, this.earBand);
      e.position.set(side * 0.25, 0.045, 0);
      e.scale.set(1, 1, 0.55);
      const ie = inked(new THREE.SphereGeometry(0.047, 20, 12), inner, null, e);
      ie.position.set(0, -0.004, 0.062);
      ie.scale.set(1, 1, 0.35);
    }
    const bandCurve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(-W / 2 + 0.02, -0.12, 0), new THREE.Vector3(0, 0.1, 0), new THREE.Vector3(W / 2 - 0.02, -0.12, 0));
    const band = inked(new THREE.TubeGeometry(bandCurve, 32, 0.016, 8), d.toon(0x4a3a36, GRAD.soft), null, this.earBand);
    band.position.z = 0.02;

    // bubble wand the pet can hold (right nub)
    this.wand = makeWand(d);
    this.wand.rotation.set(0, 0, 0.35);
    this.wand.position.set(0.02, 0.0, 0.05);
    this.wand.scale.setScalar(0.9);
    this.arms[1].hand.add(this.wand);

    this.shadow = blobShadow(0.55, 0.38);
    this.pose = PET3D_POSE();
  }

  paintFace(face, time) {
    const key = JSON.stringify([face.expr, (face.open || 0).toFixed(2), (face.blink || 0).toFixed(2),
      (face.lookX || 0).toFixed(2), (face.lookY || 0).toFixed(2), face.blush ?? -1, (face.sweat || 0).toFixed(2),
      face.tremble ? time.toFixed(2) : 0, face.sweat ? time.toFixed(2) : 0]);
    if (key === this.faceKey) return;
    this.faceKey = key;
    const { canvas, ctx, tex } = this.faceC;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const px = canvas.width / this.facePhys[0];
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.scale(px, -px);
    drawPetFace(ctx, { time, ...face });
    tex.needsUpdate = true;
  }

  apply(p, time = 0) {
    this.pose = p;
    this.root.visible = p.visible !== false;
    this.root.position.set(p.x, p.y, p.z);
    this.root.rotation.set(p.tiltX || 0, p.rotY || 0, p.tiltZ || 0, 'YXZ');
    const sc = p.scale ?? PET_SCALE;
    this.root.scale.setScalar(sc);
    const u = this.def.u;
    u.uSquash.value = p.squash ?? 1;
    u.uBend.value.set(p.bendX || 0, p.bendZ || 0);
    u.uTwist.value = p.twist || 0;
    for (const a of this.arms) {
      const raise = a.side < 0 ? p.armL : p.armR;
      const swing = a.side < 0 ? p.armLSwing : p.armRSwing;
      a.pivot.rotation.set(0, a.side * (swing || 0), a.side * (raise || 0), 'YXZ');
    }
    for (const l of this.legs) {
      const ph = (p.stepPhase || 0) * Math.PI * 2 + (l.i % 2 ? Math.PI : 0);
      const lift = Math.max(0, Math.sin(ph)) * 0.06 * (p.walk || 0) + (p.legLift || 0);
      l.pivot.position.y = PET.lift + 0.06 + lift;
      l.pivot.rotation.x = Math.cos(ph) * 0.35 * (p.walk || 0);
    }
    this.wand.visible = p.hold === 'wand';
    const ears = Math.max(0, p.ears || 0);
    this.earBand.visible = ears > 0.001;
    this.earBand.scale.setScalar(Math.max(ears, 0.001));
    this.paintFace(p.face || {}, time);
    this.root.updateMatrixWorld(true);
    this.def.syncRoot(this.root);
    this.shadow.visible = this.root.visible && (p.shadow ?? 1) > 0;
    const hgt = Math.max(0, p.y - (p.groundY ?? 0));
    const k = 1 / (1 + hgt * 2.5);
    this.shadow.position.set(p.x, (p.groundY ?? 0) + 0.005, p.z);
    this.shadow.material.opacity = (p.shadow ?? 1) * k;
    this.shadow.scale.set(1.05 * k * sc, 0.75 * k * sc, 1);
  }

  updateOutline(camera, px = 3.0, screenH = 1080) {
    const c = new THREE.Vector3(0, PET.centerY, 0).applyMatrix4(this.root.matrixWorld);
    const dist = camera.position.distanceTo(c);
    const world = (2 * dist * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2)) / screenH;
    this.def.u.uOutline.value = (px * world) / this.root.scale.x;
  }
}
