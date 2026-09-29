// The 3D world: pastel sky with bokeh (inspired by the song's cover art),
// a soft meadow with lollipop trees, bushes, flowers, a tree-stump stage,
// and moods that blend from day to party to dusk.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { propMesh, worldToon, worldOutline, GRAD } from './materials.js';
import { rng, lerp, clamp, noise } from '../core/util.js';

export const MOODS = {
  day: {
    skyTop: '#f5bfd3', skyMid: '#fcdcca', skyHor: '#fff4e4', glow: '#fff6e0', glowAmt: 0.35,
    ground: '#cdeed9', fog: '#fdeee3', hemiSky: '#fff3ec', hemiGround: '#d9c6e8', hemi: 1.45,
    key: '#fff8f0', keyI: 1.9, rim: 0.18, bokeh: 0.55, prop: 1.0, char: 1.0,
  },
  golden: {
    skyTop: '#f4b5c8', skyMid: '#fdd2b6', skyHor: '#fff0d6', glow: '#ffe7b8', glowAmt: 0.6,
    ground: '#d4ecd0', fog: '#fde6d6', hemiSky: '#fff0e0', hemiGround: '#dcc3e0', hemi: 1.4,
    key: '#fff0dc', keyI: 2.0, rim: 0.25, bokeh: 0.65, prop: 1.0, char: 1.0,
  },
  party: {
    skyTop: '#cdb2f4', skyMid: '#f8bfd9', skyHor: '#ffe7d2', glow: '#ffe1f0', glowAmt: 0.5,
    ground: '#c9ecdc', fog: '#f7e0ec', hemiSky: '#fff0f6', hemiGround: '#cdbbeb', hemi: 1.5,
    key: '#fff6fb', keyI: 2.0, rim: 0.3, bokeh: 0.8, prop: 1.0, char: 1.0,
  },
  dusk: {
    skyTop: '#34566a', skyMid: '#eaa0a8', skyHor: '#ffe0b6', glow: '#fff2d2', glowAmt: 1.1,
    ground: '#243a42', fog: '#e9b4a8', hemiSky: '#d9959a', hemiGround: '#1c2f36', hemi: 0.42,
    key: '#ffb999', keyI: 0.15, rim: 1.0, bokeh: 1.0, prop: 0.22, char: 0.13,
  },
};

const C = (h) => new THREE.Color(h);

function softCircleTexture(rim = true) {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const x = c.getContext('2d');
  const g = x.createRadialGradient(128, 128, 0, 128, 128, 126);
  if (rim) {
    g.addColorStop(0, 'rgba(255,255,255,0.55)');
    g.addColorStop(0.72, 'rgba(255,255,255,0.7)');
    g.addColorStop(0.9, 'rgba(255,255,255,0.95)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
  } else {
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.5, 'rgba(255,255,255,0.6)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
  }
  x.fillStyle = g;
  x.fillRect(0, 0, 256, 256);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

const SKY_VS = /* glsl */ `
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}`;
const SKY_FS = /* glsl */ `
uniform vec3 uTop, uMid, uHor, uGlow;
uniform vec3 uGlowDir;
uniform float uGlowAmt;
varying vec3 vDir;
void main() {
  vec3 d = normalize(vDir);
  float h = d.y;
  vec3 c = mix(uMid, uTop, smoothstep(0.08, 0.75, h));
  c = mix(uHor, c, smoothstep(-0.05, 0.22, h));
  float g = max(dot(d, normalize(uGlowDir)), 0.0);
  c += uGlow * (pow(g, 6.0) * 0.55 + pow(g, 40.0) * 0.6) * uGlowAmt;
  gl_FragColor = vec4(c, 1.0);
  #include <colorspace_fragment>
}`;

export class World {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    scene.add(this.group);
    this.mood = { ...MOODS.day };

    // ---- lights
    this.hemi = new THREE.HemisphereLight(0xffffff, 0xffffff, 1.4);
    this.key = new THREE.DirectionalLight(0xffffff, 2);
    this.key.position.set(-4, 7, 6);
    scene.add(this.hemi, this.key);
    scene.fog = new THREE.Fog(0xffffff, 18, 90);

    // ---- sky dome (follows the camera)
    this.skyU = {
      uTop: { value: C('#fff') }, uMid: { value: C('#fff') }, uHor: { value: C('#fff') },
      uGlow: { value: C('#fff') }, uGlowDir: { value: new THREE.Vector3(0, 0.25, -1) }, uGlowAmt: { value: 0.3 },
    };
    this.sky = new THREE.Mesh(
      new THREE.SphereGeometry(400, 48, 24),
      new THREE.ShaderMaterial({ uniforms: this.skyU, vertexShader: SKY_VS, fragmentShader: SKY_FS, side: THREE.BackSide, depthWrite: false, fog: false }),
    );
    this.sky.renderOrder = -10;
    this.sky.frustumCulled = false;
    scene.add(this.sky);

    // ---- bokeh discs in the sky
    const bokehTex = softCircleTexture(true);
    const R = rng(7);
    const palette = ['#ffc4d6', '#ffd9c4', '#a8f0dc', '#fff2d6', '#f9b8cf', '#c9f5e6', '#ffe3b3'];
    this.bokeh = [];
    for (let i = 0; i < 84; i++) {
      // half of them cluster toward -z (the sunset glow), the rest all around
      const az = i < 40 ? -Math.PI / 2 + (R() - 0.5) * 1.9 : R() * Math.PI * 2;
      const el = i < 40 ? 0.05 + R() * 0.45 : 0.08 + R() * 0.75;
      const dist = 70 + R() * 110;
      const s = new THREE.Sprite(new THREE.SpriteMaterial({
        map: bokehTex, color: C(palette[i % palette.length]), transparent: true, depthWrite: false, fog: false,
      }));
      s.userData = {
        base: new THREE.Vector3(Math.cos(az) * Math.cos(el) * dist, Math.sin(el) * dist + 4, Math.sin(az) * Math.cos(el) * dist),
        size: (4 + R() * 12) * (dist / 120), seed: R() * 100, alpha: 0.35 + R() * 0.5,
      };
      s.renderOrder = -5;
      this.bokeh.push(s);
      this.group.add(s);
    }

    // ---- ground (soft rolling meadow)
    const gg = new THREE.CircleGeometry(90, 160, 0, Math.PI * 2);
    gg.rotateX(-Math.PI / 2);
    const pos = gg.attributes.position;
    const col = [];
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), z = pos.getZ(i);
      const r = Math.hypot(x, z);
      const hill = clamp((r - 9) / 14) * (noise(x * 0.07, 3) * 0.5 + 0.5) * 3.2 + clamp((r - 30) / 30) * 4;
      pos.setY(i, hill);
      const v = 0.93 + 0.07 * (noise(x * 0.35 + 3, 5) * noise(z * 0.35, 6));
      col.push(v, v, v);
    }
    gg.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    gg.computeVertexNormals();
    this.groundMat = worldToon(0xffffff, { vertexColors: true });
    this.ground = new THREE.Mesh(gg, this.groundMat);
    this.group.add(this.ground);
    this.groundHeight = (x, z) => {
      const r = Math.hypot(x, z);
      return clamp((r - 9) / 14) * (noise(x * 0.07, 3) * 0.5 + 0.5) * 3.2 + clamp((r - 30) / 30) * 4;
    };

    this.props = new THREE.Group();
    this.group.add(this.props);
    this.propMats = [];
    this.buildProps();
  }

  _prop(geo, color, parent, opts) {
    const m = propMesh(geo, color, parent || this.props, opts);
    m.material.userData.base = m.material.color.clone();
    this.propMats.push(m.material);
    return m;
  }

  tree(x, z, h, color, scale = 1) {
    const g = new THREE.Group();
    g.position.set(x, this.groundHeight(x, z), z);
    g.scale.setScalar(scale);
    const trunk = this._prop(new THREE.CylinderGeometry(0.13, 0.19, h, 14), '#e9c9a6', g);
    trunk.position.y = h / 2;
    const canopy = this._prop(new THREE.SphereGeometry(0.95, 32, 22), color, g);
    canopy.position.y = h + 0.6;
    canopy.scale.set(1, 0.92, 1);
    const puff = this._prop(new THREE.SphereGeometry(0.55, 24, 16), color, g);
    puff.position.set(0.55, h + 0.25, 0.35);
    const hl = this._prop(new THREE.SphereGeometry(0.22, 16, 12), '#ffffff', g, { outline: null });
    hl.position.set(-0.4, h + 1.05, 0.62);
    hl.material.transparent = true;
    hl.material.opacity = 0.45;
    this.props.add(g);
    return g;
  }

  bush(x, z, s, color) {
    const g = new THREE.Group();
    g.position.set(x, this.groundHeight(x, z), z);
    g.scale.setScalar(s);
    const parts = [[0, 0.42, 0, 0.55], [-0.5, 0.32, 0.1, 0.42], [0.52, 0.3, 0.05, 0.44], [0.1, 0.3, 0.35, 0.4]];
    for (const [px, py, pz, r] of parts) {
      const m = this._prop(new THREE.SphereGeometry(r, 26, 18), color, g);
      m.position.set(px, py, pz);
    }
    this.props.add(g);
    return g;
  }

  buildProps() {
    const R = rng(21);
    const canopies = ['#ffc2d6', '#bff0dc', '#ffd6b8', '#f8b4cb', '#d4c4f7', '#c8f2e0'];
    // hero set pieces near the centre
    this.heroTreeL = this.tree(-4.6, -4.6, 1.9, '#ffbfd4', 1.2);
    this.heroTreeR = this.tree(4.6, -4.2, 2.1, '#bdeedd', 1.25);
    this.heroBush = this.bush(2.35, -0.4, 1.0, '#a8e2c3');
    this.bearBush = this.bush(-2.7, -1.2, 2.05, '#b4e8cb');
    this.bush(-2.2, 0.6, 0.7, '#b8ebcc');
    this.bush(-5.2, -1.0, 0.9, '#a8e2c3');
    // scattered trees/bushes are built into a temporary group and baked into
    // a handful of merged meshes (far fewer draw calls)
    const heroProps = this.props;
    const scatter = new THREE.Group();
    this.group.add(scatter);
    this.props = scatter;
    for (let i = 0; i < 40; i++) {
      const a = R() * Math.PI * 2;
      const r = 11 + R() * 34;
      const x = Math.cos(a) * r, z = Math.sin(a) * r;
      if (z > -2 && Math.abs(x) < 16) continue; // keep the camera side open
      this.tree(x, z, 1.4 + R() * 1.6, canopies[i % canopies.length], 0.9 + R() * 0.8);
    }
    for (let i = 0; i < 26; i++) {
      const a = R() * Math.PI * 2;
      const r = 7 + R() * 26;
      const x = Math.cos(a) * r, z = Math.sin(a) * r;
      if (z > 0 && Math.abs(x) < 9) continue;
      this.bush(x, z, 0.6 + R() * 0.7, R() > 0.5 ? '#a8e2c3' : '#c3efd3');
    }
    this.props = heroProps;
    this.bake(scatter, this.props);

    // tree-stump stage
    this.stump = new THREE.Group();
    const stumpBody = this._prop(new THREE.CylinderGeometry(0.95, 1.05, 0.36, 40), '#dcaa7e', this.stump);
    stumpBody.position.y = 0.18;
    const ringC = document.createElement('canvas');
    ringC.width = ringC.height = 256;
    const rx = ringC.getContext('2d');
    rx.fillStyle = '#f3d3a8';
    rx.fillRect(0, 0, 256, 256);
    rx.strokeStyle = '#d9ab7c';
    rx.lineWidth = 5;
    for (let r = 20; r < 128; r += 22) {
      rx.beginPath();
      rx.arc(128, 128, r, 0, Math.PI * 2);
      rx.stroke();
    }
    const ringTex = new THREE.CanvasTexture(ringC);
    ringTex.colorSpace = THREE.SRGBColorSpace;
    const top = new THREE.Mesh(new THREE.CircleGeometry(0.95, 40), worldToon(0xffffff, { map: ringTex }));
    top.material.userData.base = top.material.color.clone();
    this.propMats.push(top.material);
    top.rotation.x = -Math.PI / 2;
    top.position.y = 0.361;
    this.stump.add(top);
    this.stumpTop = 0.36;
    this.props.add(this.stump);

    // mic stand for the stage
    this.micStand = new THREE.Group();
    const pole = this._prop(new THREE.CylinderGeometry(0.018, 0.018, 1.45, 10), '#4b4f5c', this.micStand);
    pole.position.y = 0.73;
    const base = this._prop(new THREE.CylinderGeometry(0.18, 0.2, 0.04, 20), '#4b4f5c', this.micStand);
    base.position.y = 0.02;
    const arm = new THREE.Group();
    arm.position.y = 1.45;
    arm.rotation.x = -1.05;
    this.micStand.add(arm);
    const mh = this._prop(new THREE.CylinderGeometry(0.028, 0.02, 0.22, 14), '#4b4f5c', arm);
    mh.position.y = 0.08;
    const head = this._prop(new THREE.SphereGeometry(0.068, 20, 14), '#e6e9ef', arm);
    head.position.y = 0.22;
    this.micStand.position.set(0.36, this.stumpTop, 0.55);
    this.micStand.rotation.y = -0.75;
    this.props.add(this.micStand);

    // soft stage spotlight cone (shown during the song on the stump)
    const coneMat = new THREE.ShaderMaterial({
      uniforms: { uA: { value: 0.0 } },
      vertexShader: `varying float vY; varying vec3 vN; varying vec3 vV;
        void main(){ vY = uv.y; vec4 mv = modelViewMatrix*vec4(position,1.0); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix*mv; }`,
      fragmentShader: `uniform float uA; varying float vY; varying vec3 vN; varying vec3 vV;
        void main(){ float f = abs(dot(normalize(vN), normalize(vV))); float a = uA * pow(vY, 1.6) * smoothstep(0.0, 0.7, f) * 0.09;
          gl_FragColor = vec4(1.0, 0.95, 0.82, a); }`,
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
    });
    this.spotCone = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 1.35, 6.5, 40, 1, true), coneMat);
    this.spotCone.position.set(0, 3.25 + 0.36, 0);
    this.spotCone.renderOrder = 7;
    this.spotCone.visible = false;
    this.group.add(this.spotCone);

    // a bubble wand lying in the grass (dropped in the scare)
    this.groundWand = new THREE.Group();
    const gs = this._prop(new THREE.CylinderGeometry(0.016, 0.016, 0.36, 10), '#ffcf6b', this.groundWand);
    gs.rotation.z = Math.PI / 2;
    const gr = this._prop(new THREE.TorusGeometry(0.075, 0.018, 10, 32), '#ff9fc0', this.groundWand);
    gr.rotation.x = Math.PI / 2;
    gr.position.x = 0.25;
    this.groundWand.position.set(0.95, 0.03, 0.95);
    this.groundWand.rotation.y = 0.5;
    this.groundWand.visible = false;
    this.props.add(this.groundWand);

    // flowers (instanced)
    const petal = new THREE.CylinderGeometry(0.075, 0.075, 0.012, 10);
    const flowerCols = ['#ffffff', '#ffd1e0', '#fff0b3', '#ffc9b0'];
    const N = 420;
    this.flowers = new THREE.InstancedMesh(petal, worldToon(0xffffff), N);
    this.flowerCenters = new THREE.InstancedMesh(new THREE.SphereGeometry(0.03, 8, 6), worldToon('#ffc94d'), N);
    const m4 = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    for (let i = 0; i < N; i++) {
      const a = R() * Math.PI * 2;
      const r = 1.6 + Math.pow(R(), 0.7) * 26;
      const x = Math.cos(a) * r, z = Math.sin(a) * r;
      const y = this.groundHeight(x, z) + 0.02;
      const s = 0.7 + R() * 0.8;
      q.setFromEuler(new THREE.Euler((R() - 0.5) * 0.3, R() * 6, (R() - 0.5) * 0.3));
      m4.compose(new THREE.Vector3(x, y, z), q, new THREE.Vector3(s, s, s));
      this.flowers.setMatrixAt(i, m4);
      this.flowers.setColorAt(i, C(flowerCols[i % flowerCols.length]));
      m4.compose(new THREE.Vector3(x, y + 0.015 * s, z), q, new THREE.Vector3(s, s * 0.6, s));
      this.flowerCenters.setMatrixAt(i, m4);
    }
    for (const m of [this.flowers, this.flowerCenters]) {
      m.material.userData.base = m.material.color.clone();
      this.propMats.push(m.material);
      this.props.add(m);
    }

    // clouds
    this.clouds = new THREE.Group();
    for (let i = 0; i < 8; i++) {
      const g = new THREE.Group();
      const a = -Math.PI * 0.95 + i * 0.28 + R() * 0.1;
      const d = 70 + R() * 40;
      g.position.set(Math.cos(a) * d, 16 + R() * 18, Math.sin(a) * d);
      g.scale.setScalar(3 + R() * 3);
      for (let k = 0; k < 4; k++) {
        const m = this._prop(new THREE.SphereGeometry(0.6 + R() * 0.4, 20, 14), '#ffffff', g, { outline: null });
        m.position.set((k - 1.5) * 0.7, R() * 0.3, R() * 0.3);
      }
      this.clouds.add(g);
    }
    this.group.add(this.clouds);
    const cloudParts = new THREE.Group();
    while (this.clouds.children.length) cloudParts.add(this.clouds.children[0]);
    this.group.add(cloudParts);
    this.bake(cloudParts, this.clouds);
    // materials that follow the mood tint
    const mats = new Set();
    this.group.traverse((o) => { if (o.isMesh && o.material.isMeshToonMaterial && o.material.userData.base) mats.add(o.material); });
    this.propMats = [...mats];
  }

  /** merge all static meshes of `group` into one mesh per material colour */
  bake(group, target) {
    group.updateMatrixWorld(true);
    const buckets = new Map();
    group.traverse((o) => {
      if (!o.isMesh || !o.material.isMeshToonMaterial) return;
      const m = o.material;
      const outline = o.children.find((c) => c.isMesh && c.material.isShaderMaterial);
      const key = [(m.userData.base || m.color).getHexString(), m.transparent ? m.opacity : 1, !!outline].join('|');
      let b = buckets.get(key);
      if (!b) buckets.set(key, (b = { geos: [], mat: m, outline }));
      const g = o.geometry.clone().applyMatrix4(o.matrixWorld);
      for (const name of Object.keys(g.attributes)) if (name !== 'position' && name !== 'normal') g.deleteAttribute(name);
      b.geos.push(g);
    });
    group.removeFromParent();
    for (const b of buckets.values()) {
      const geo = mergeGeometries(b.geos);
      const mesh = new THREE.Mesh(geo, b.mat);
      if (b.outline) mesh.add(new THREE.Mesh(geo, b.outline.material));
      target.add(mesh);
    }
  }

  /** blend between two moods (names or objects) */
  setMood(a, b = a, k = 0) {
    const A = typeof a === 'string' ? MOODS[a] : a;
    const B = typeof b === 'string' ? MOODS[b] : b;
    const m = {};
    for (const key in A) {
      if (typeof A[key] === 'number') m[key] = lerp(A[key], B[key], k);
      else m[key] = C(A[key]).lerp(C(B[key]), k);
    }
    this.mood = m;
    this.skyU.uTop.value.copy(m.skyTop);
    this.skyU.uMid.value.copy(m.skyMid);
    this.skyU.uHor.value.copy(m.skyHor);
    this.skyU.uGlow.value.copy(m.glow);
    this.skyU.uGlowAmt.value = m.glowAmt;
    this.scene.fog.color.copy(m.fog);
    this.hemi.color.copy(m.hemiSky);
    this.hemi.groundColor.copy(m.hemiGround);
    this.hemi.intensity = m.hemi;
    this.key.color.copy(m.key);
    this.key.intensity = m.keyI;
    this.groundMat.color.copy(m.ground);
    for (const pm of this.propMats) pm.color.copy(pm.userData.base).multiplyScalar(m.prop).lerp(m.ground, (1 - m.prop) * 0.5);
    return m;
  }

  update(t, camera, kick = 0) {
    this.sky.position.copy(camera.position);
    const m = this.mood;
    for (const s of this.bokeh) {
      const u = s.userData;
      s.position.set(
        u.base.x + noise(t * 0.08 + u.seed, 1) * 4,
        u.base.y + noise(t * 0.1 + u.seed, 2) * 3,
        u.base.z,
      );
      const pulse = 1 + kick * 0.07 * (0.5 + 0.5 * Math.sin(u.seed));
      s.scale.setScalar(u.size * pulse);
      s.material.opacity = u.alpha * m.bokeh * (0.8 + 0.2 * noise(t * 0.5 + u.seed, 3));
    }
    this.clouds.rotation.y = t * 0.004;
  }
}

// ------------------------------------------------------------ bubbles
const BUBBLE_VS = /* glsl */ `
varying vec3 vN; varying vec3 vV;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vN = normalize(normalMatrix * normal);
  vV = normalize(-mv.xyz);
  gl_Position = projectionMatrix * mv;
}`;
const BUBBLE_FS = /* glsl */ `
uniform float uOpacity; uniform float uPhase;
varying vec3 vN; varying vec3 vV;
void main() {
  vec3 n = normalize(vN);
  float f = 1.0 - abs(dot(n, normalize(vV)));
  float rim = pow(f, 1.8);
  vec3 irid = 0.55 + 0.45 * cos(6.2831 * (f * 1.3 + uPhase + vec3(0.0, 0.33, 0.67)));
  vec3 col = mix(vec3(1.0), irid, 0.65);
  float a = rim * 0.95 + 0.1;
  vec3 L = normalize(vec3(-0.45, 0.6, 0.65));
  float spec = pow(max(dot(reflect(-L, n), normalize(vV)), 0.0), 60.0);
  col += spec * 1.2;
  a += spec;
  gl_FragColor = vec4(col, clamp(a, 0.0, 1.0) * uOpacity);
  #include <colorspace_fragment>
}`;

export class Bubbles {
  constructor(scene, max = 90) {
    this.geo = new THREE.SphereGeometry(1, 28, 18);
    this.pool = [];
    for (let i = 0; i < max; i++) {
      const m = new THREE.Mesh(this.geo, new THREE.ShaderMaterial({
        uniforms: { uOpacity: { value: 1 }, uPhase: { value: Math.random() } },
        vertexShader: BUBBLE_VS, fragmentShader: BUBBLE_FS, transparent: true, depthWrite: false,
      }));
      m.visible = false;
      m.renderOrder = 5;
      scene.add(m);
      this.pool.push(m);
    }
  }
  /** list: [{x,y,z,r,a,phase}] */
  set(list) {
    for (let i = 0; i < this.pool.length; i++) {
      const m = this.pool[i];
      const b = list[i];
      if (!b || b.r <= 0.001 || b.a <= 0.001) { m.visible = false; continue; }
      m.visible = true;
      m.position.set(b.x, b.y, b.z);
      m.scale.set(b.r * (b.sx || 1), b.r * (b.sy || 1), b.r);
      m.material.uniforms.uOpacity.value = b.a;
      m.material.uniforms.uPhase.value = b.phase || 0;
    }
  }
}

/**
 * Deterministic bubble stream. Returns bubble states at time t.
 * opts: t0, t1 (emission window), rate (per s), origin(ts)->[x,y,z], vel [vx,vy,vz],
 *       size [min,max], life, seed, spread, popAt (optional fn(i)->time)
 */
export function bubbleStream(t, o) {
  const out = [];
  if (t < o.t0) return out;
  const n = Math.floor((Math.min(t, o.t1) - o.t0) * o.rate) + 1;
  const R = (i, k) => {
    const s = Math.sin((i + 1) * 12.9898 + (o.seed || 0) * 78.233 + k * 37.719) * 43758.5453;
    return s - Math.floor(s);
  };
  for (let i = 0; i < n; i++) {
    const ts = o.t0 + i / o.rate;
    const age = t - ts;
    const life = o.life * (0.75 + 0.5 * R(i, 1));
    if (age < 0 || age > life + 0.15) continue;
    const org = o.origin(ts, i);
    const sp = o.spread ?? 0.3;
    const vx = o.vel[0] + (R(i, 2) - 0.5) * sp;
    const vy = o.vel[1] + (R(i, 3) - 0.5) * sp * 0.6;
    const vz = o.vel[2] + (R(i, 4) - 0.5) * sp;
    const r = o.size[0] + (o.size[1] - o.size[0]) * R(i, 5);
    const grow = Math.min(1, age / 0.25);
    const wob = Math.sin(age * 3 + i) * 0.08;
    let a = 1, rr = r * (0.3 + 0.7 * grow);
    let sx = 1 + Math.sin(age * 9 + i) * 0.05, sy = 1 - Math.sin(age * 9 + i) * 0.05;
    if (age > life) {
      const k = (age - life) / 0.15;
      rr *= 1 + k * 0.6;
      a = 1 - k;
    }
    out.push({
      x: org[0] + vx * age + wob, y: org[1] + vy * age + Math.sin(age * 2 + i) * 0.05, z: org[2] + vz * age,
      r: rr, a, sx, sy, phase: R(i, 6) + age * 0.15, popped: age > life,
    });
  }
  return out;
}

// ------------------------------------------------------------ sprites
function iconTexture(draw, size = 128) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const x = c.getContext('2d');
  x.translate(size / 2, size / 2);
  draw(x, size / 2);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export function makeIcons() {
  const star = iconTexture((x, r) => {
    const g = x.createRadialGradient(0, 0, 0, 0, 0, r);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.2, 'rgba(255,255,255,0.8)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    x.fillStyle = g;
    x.beginPath();
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      const rr = i % 2 === 0 ? r : r * 0.18;
      x.lineTo(Math.cos(a) * rr, Math.sin(a) * rr);
    }
    x.closePath();
    x.fill();
  });
  const heart = iconTexture((x, r) => {
    x.scale(r / 60, r / 60);
    x.beginPath();
    x.moveTo(0, 38);
    x.bezierCurveTo(-60, -5, -38, -52, 0, -22);
    x.bezierCurveTo(38, -52, 60, -5, 0, 38);
    x.fillStyle = '#ffffff';
    x.fill();
    x.lineWidth = 7;
    x.strokeStyle = 'rgba(58,37,32,0.9)';
    x.stroke();
  });
  const note = iconTexture((x, r) => {
    x.scale(r / 60, r / 60);
    x.fillStyle = '#ffffff';
    x.strokeStyle = 'rgba(58,37,32,0.95)';
    x.lineWidth = 6;
    x.beginPath();
    x.ellipse(-18, 28, 16, 12, -0.4, 0, Math.PI * 2);
    x.ellipse(24, 18, 16, 12, -0.4, 0, Math.PI * 2);
    x.fill();
    x.stroke();
    x.beginPath();
    x.moveTo(-4, 26); x.lineTo(-4, -38); x.lineTo(38, -48); x.lineTo(38, 16);
    x.lineWidth = 8;
    x.stroke();
  });
  const glow = iconTexture((x, r) => {
    const g = x.createRadialGradient(0, 0, 0, 0, 0, r);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    x.fillStyle = g;
    x.fillRect(-r, -r, 2 * r, 2 * r);
  });
  return { star, heart, note, glow };
}

export class SpritePool {
  constructor(scene, textures, max = 160) {
    this.tex = textures;
    this.pool = [];
    for (let i = 0; i < max; i++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: textures.star, transparent: true, depthWrite: false, fog: false }));
      s.visible = false;
      s.renderOrder = 6;
      scene.add(s);
      this.pool.push(s);
    }
  }
  /** list: [{tex:'star'|'heart'|'note'|'glow', x,y,z, s, a, rot, color}] */
  set(list) {
    for (let i = 0; i < this.pool.length; i++) {
      const sp = this.pool[i];
      const o = list[i];
      if (!o || o.a <= 0.001 || o.s <= 0.0001) { sp.visible = false; continue; }
      sp.visible = true;
      const m = sp.material;
      if (m.map !== this.tex[o.tex]) { m.map = this.tex[o.tex]; m.needsUpdate = true; }
      m.color.set(o.color || '#ffffff');
      m.opacity = o.a;
      m.rotation = o.rot || 0;
      m.blending = o.add ? THREE.AdditiveBlending : THREE.NormalBlending;
      sp.position.set(o.x, o.y, o.z);
      sp.scale.set(o.s, o.s, 1);
    }
  }
}

// ------------------------------------------------------------ confetti
export class Confetti {
  constructor(scene, max = 260) {
    this.max = max;
    const g = new THREE.PlaneGeometry(0.07, 0.11);
    this.mesh = new THREE.InstancedMesh(g, new THREE.MeshBasicMaterial({ side: THREE.DoubleSide }), max);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 4;
    const cols = ['#ff8fb1', '#ffd36e', '#8ee6c9', '#b9a4ff', '#ff9d6e', '#ffffff', '#d97757'];
    for (let i = 0; i < max; i++) this.mesh.setColorAt(i, C(cols[i % cols.length]));
    this.mesh.count = 0;
    scene.add(this.mesh);
    this._m = new THREE.Matrix4();
    this._q = new THREE.Quaternion();
    this._e = new THREE.Euler();
    this._v = new THREE.Vector3();
    this._s = new THREE.Vector3(1, 1, 1);
  }
  /** bursts: [{t0, x,y,z, n, power, seed}] */
  update(t, bursts) {
    let k = 0;
    for (const b of bursts) {
      const age = t - b.t0;
      if (age < 0 || age > 3.2) continue;
      for (let i = 0; i < b.n && k < this.max; i++, k++) {
        const h = (j) => { const s = Math.sin((i + 1) * 91.7 + b.seed * 13.1 + j * 7.3) * 43758.5; return s - Math.floor(s); };
        const a = h(1) * Math.PI * 2;
        const up = 0.5 + h(2) * 0.8;
        const sp = (0.6 + h(3)) * (b.power || 2.2);
        const drag = 1 - Math.exp(-age * 2.2);
        const x = b.x + Math.cos(a) * sp * drag * 0.8 + Math.sin(age * 3 + i) * 0.15 * age;
        const z = b.z + Math.sin(a) * sp * drag * 0.5;
        const y = b.y + up * sp * drag * 1.1 - age * age * 0.55 - age * 0.3;
        this._e.set(age * (4 + h(4) * 6), age * (3 + h(5) * 5), h(6) * 6);
        this._q.setFromEuler(this._e);
        const fade = age > 2.6 ? 1 - (age - 2.6) / 0.6 : 1;
        this._s.setScalar(fade);
        this._m.compose(this._v.set(x, y, z), this._q, this._s);
        this.mesh.setMatrixAt(k, this._m);
      }
    }
    this.mesh.count = k;
    this.mesh.instanceMatrix.needsUpdate = true;
  }
}
