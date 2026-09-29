// The Director renders any moment of the video: it picks the active 3D shot
// and 2D shots, poses everything for time t, and composites three layers:
//   WebGL canvas (3D)  <  2D scene canvas  <  overlay canvas (lyrics, fx)
import * as THREE from 'three';
import { initGradients } from './three/materials.js';
import { Bear3D, Pet3D, BEAR3D_POSE, PET3D_POSE } from './three/chars3d.js';
import { World, Bubbles, SpritePool, Confetti, makeIcons } from './three/world.js';
import { SHOTS3D } from './shots/shots3d.js';
import { SHOTS2D, OVERLAYS } from './shots/shots2d.js';
import { drawLyrics } from './overlay/lyrics.js';
import { W, H } from './fx/fx2d.js';
import { kick } from './core/music.js';
import { noise } from './core/util.js';

export class Director {
  constructor({ gl, scene2d, overlay }) {
    initGradients();
    this.renderer = new THREE.WebGLRenderer({ canvas: gl, antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(1);
    this.renderer.setSize(W, H, false);
    this.renderer.setClearColor(0xfdeee3, 1);
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(35, W / H, 0.1, 1200);
    this.world = new World(this.scene);
    this.bear = new Bear3D();
    this.pet = new Pet3D();
    this.scene.add(this.bear.root, this.bear.shadow, this.pet.root, this.pet.shadow);
    this.bubbles = new Bubbles(this.scene, 110);
    this.icons = makeIcons();
    this.sprites = new SpritePool(this.scene, this.icons, 180);
    this.confetti = new Confetti(this.scene, 320);
    this.extra = {}; // shot-specific props created lazily
    this.ctx = scene2d.getContext('2d');
    this.octx = overlay.getContext('2d');
    this.tmp = new THREE.Vector3();
    this.lastShot3d = null;
  }

  /** set camera: pos [x,y,z], target [x,y,z], fov, roll, shake */
  cam(pos, target, fov = 35, roll = 0, shake = 0, t = 0) {
    const c = this.camera;
    const sx = shake ? noise(t * 30, 11) * shake : 0;
    const sy = shake ? noise(t * 30, 12) * shake : 0;
    c.position.set(pos[0] + sx, pos[1] + sy, pos[2]);
    c.up.set(Math.sin(roll), Math.cos(roll), 0);
    c.lookAt(target[0] + sx * 0.5, target[1] + sy * 0.5, target[2]);
    if (c.fov !== fov) {
      c.fov = fov;
      c.updateProjectionMatrix();
    }
  }

  reset3d() {
    this.bubbleList = [];
    this.spriteList = [];
    this.bursts = [];
    this.bearPose = BEAR3D_POSE();
    this.petPose = PET3D_POSE();
    this.bearPose.visible = true;
    this.petPose.visible = true;
    this.world.micStand.visible = false;
    this.world.stump.visible = true;
    this.world.spotCone.visible = false;
    this.world.groundWand.visible = false;
    for (const k in this.extra) if (this.extra[k].isObject3D) this.extra[k].visible = false;
    this.world.setMood('day');
    this.world.skyU.uGlowDir.value.set(0, 0.25, -1);
    this.bear.def.u.uRim.value.set(0xfff4ec);
    this.pet.def.u.uRim.value.set(0xffd9c4);
    this.bear.def.u.uRimStrength.value = 0.18;
    this.pet.def.u.uRimStrength.value = 0.22;
  }

  commit3d(t) {
    const m = this.world.mood;
    // silhouette dimming for dusk
    const cb = m.char ?? 1;
    this.bear.materials.white.color.setScalar(cb);
    this.bear.materials.inner.color.set('#f1dcd6').multiplyScalar(cb);
    this.pet.materials.orange.color.set('#d97757').multiplyScalar(0.2 + 0.8 * cb);
    this.bear.apply(this.bearPose, t);
    this.pet.apply(this.petPose, t);
    this.bear.updateOutline(this.camera);
    this.pet.updateOutline(this.camera);
    this.bubbles.set(this.bubbleList);
    this.sprites.set(this.spriteList);
    this.confetti.update(t, this.bursts);
    this.world.update(t, this.camera, kick(t));
  }

  /** render the full frame for song time t */
  renderAt(t) {
    const ctx = this.ctx;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, W, H);
    let opaque = false;
    let drew = false;
    for (const s of SHOTS2D) {
      if (t >= s.start && t < s.end) {
        ctx.save();
        s.draw(ctx, t, this);
        ctx.restore();
        drew = true;
        if (s.opaque && s.opaque(t)) opaque = true;
      }
    }
    // a canvas that is only cleared may keep showing a stale buffer: hide it instead
    const vis = drew ? 'visible' : 'hidden';
    if (ctx.canvas.style.visibility !== vis) ctx.canvas.style.visibility = vis;
    if (!opaque) {
      let shot = SHOTS3D.find((s) => t >= s.start && t < s.end);
      if (!shot) shot = [...SHOTS3D].reverse().find((s) => s.start <= t) || SHOTS3D[0];
      this.reset3d();
      shot.update(t, this);
      this.commit3d(t);
      this.renderer.render(this.scene, this.camera);
      this.lastShot3d = shot;
    }
    this.drawOverlay(t);
  }

  drawOverlay(t) {
    const o = this.octx;
    o.setTransform(1, 0, 0, 1, 0, 0);
    o.clearRect(0, 0, W, H);
    for (const ov of OVERLAYS) {
      if (t >= ov.start && t < ov.end) {
        o.save();
        ov.draw(o, t, this);
        o.restore();
      }
    }
    drawLyrics(o, t, W, H, { style: t > 39 && t < 50.5 ? 'shaky' : 'normal' });
  }
}
