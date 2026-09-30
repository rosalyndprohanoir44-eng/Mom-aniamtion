// Pose library (angles in radians, authored facing right in the body's side
// plane). Grounded poses use planted feet via fB/fF = foot x offsets relative to
// the pelvis (converted to world positions when keyframed); airborne and kicking
// poses use leg angles. `front: true` poses face the camera (yaw PI/2) and use
// the lateral spreads (aBz/aFz/lBz/lFz) so both arms and legs read.
import { TAU, lerp, noise } from './util.js';

export const POSES = {
  // ---------------------------------------------------------------- basics
  stand: { y: 0.49, lean: 0.02, head: 0.02, aB: [0.1, 0.25], aF: [0.16, 0.32], fB: -0.08, fF: 0.09 },
  relaxed: { y: 0.485, lean: -0.02, head: -0.05, aB: [-0.1, 0.35], aF: [0.25, 0.45], fB: -0.1, fF: 0.12 },
  armsCrossed: { y: 0.49, lean: -0.06, head: -0.3, aB: [0.55, 2.35], aF: [0.7, 2.2], fB: -0.1, fF: 0.12 },
  hipHand: { y: 0.49, lean: -0.03, head: -0.12, aB: [-0.55, 2.3], aF: [0.4, 0.3], fB: -0.14, fF: 0.08 },
  guard: { y: 0.42, lean: 0.2, head: 0.14, aB: [0.95, 2.05], aF: [1.3, 1.8], fB: -0.3, fF: 0.24 },
  guardLow: { y: 0.37, lean: 0.35, head: 0.1, aB: [0.6, 1.9], aF: [1.1, 1.6], fB: -0.38, fF: 0.3 },
  ready: { y: 0.45, lean: 0.1, head: 0.08, aB: [0.35, 0.7], aF: [0.6, 1.0], fB: -0.22, fF: 0.2 },
  kneelFlower: { y: 0.24, lean: 0.5, head: 0.5, aB: [-0.05, 0.9], aF: [0.3, 0.5], fB: -0.32, fF: 0.14 },
  lookUp: { y: 0.26, lean: 0.15, head: -0.35, aB: [-0.1, 0.5], aF: [0.35, 0.9], fB: -0.32, fF: 0.14 },
  // strikes
  jab: { y: 0.43, lean: 0.24, head: 0.12, aB: [0.95, 2.1], aF: [1.6, 0.02], fB: -0.34, fF: 0.3 },
  cross: { y: 0.42, lean: 0.4, head: 0.1, aB: [1.62, 0.02], aF: [0.6, 1.9], fB: -0.42, fF: 0.28 },
  palm: { y: 0.4, lean: 0.45, head: 0.1, aB: [-0.7, 0.5], aF: [1.55, 0.0], fB: -0.46, fF: 0.34 },
  uppercutLow: { y: 0.34, lean: 0.45, head: 0.15, aB: [0.8, 2.1], aF: [0.1, 1.2], fB: -0.3, fF: 0.24 },
  uppercut: { y: 0.55, lean: -0.2, head: -0.25, aB: [0.5, 1.7], aF: [3.0, 0.4], lB: [-0.35, 0.5], lF: [0.9, 1.5] },
  kickChamber: { y: 0.5, lean: -0.05, head: 0.05, aB: [0.9, 1.9], aF: [0.25, 1.4], fB: -0.04, lF: [1.9, 2.3] },
  kickFront: { y: 0.5, lean: -0.3, head: 0.25, aB: [0.7, 1.4], aF: [-0.5, 0.6], fB: -0.12, lF: [1.62, 0.04] },
  kickSide: { y: 0.52, lean: -0.75, head: 0.55, aB: [0.5, 1.5], aF: [-0.9, 0.4], fB: -0.26, lF: [2.15, 0.03] },
  roundhouse: { y: 0.53, lean: -0.55, head: 0.4, aB: [1.1, 1.6], aF: [-0.7, 0.7], fB: -0.2, lF: [2.35, 0.3] },
  axeUp: { y: 0.52, lean: -0.32, head: 0.2, aB: [0.4, 0.9], aF: [0.6, 0.7], fB: -0.1, lF: [2.95, 0.05] },
  axeDown: { y: 0.44, lean: 0.4, head: 0.2, aB: [1.2, 1.2], aF: [0.8, 1.0], fB: -0.42, lF: [1.05, 0.05] },
  spinBack: { y: 0.52, lean: -0.6, head: 0.45, aB: [1.2, 1.4], aF: [0.2, 1.1], fB: 0.12, lF: [2.25, 0.06] },
  sweep: { y: 0.2, lean: 0.62, head: 0.25, aB: [0.05, 0.2], aF: [-0.25, 0.4], lB: [-0.4, 2.5], lF: [1.5, 0.02] },
  slashBack: { y: 0.43, lean: -0.12, head: 0.1, aB: [0.6, 1.2], aF: [-2.3, -0.3], fB: -0.36, fF: 0.3 },
  slashFollow: { y: 0.38, lean: 0.45, head: 0.1, aB: [-0.5, 0.4], aF: [2.05, 0.08], fB: -0.46, fF: 0.36 },
  iaiReady: { y: 0.34, lean: 0.5, head: 0.15, aB: [0.25, 1.4], aF: [0.15, 1.55], fB: -0.45, fF: 0.3 },
  iaiFollow: { y: 0.3, lean: 0.62, head: -0.05, aB: [-1.0, 0.2], aF: [1.78, 0.02], fB: -0.6, fF: 0.45 },
  superLand: { y: 0.2, lean: 0.78, head: 0.25, aB: [-2.3, 0.3], aF: [-0.3, 0.25], fB: -0.38, fF: 0.22 },
  landCrouch: { y: 0.3, lean: 0.45, head: 0.15, aB: [-0.6, 0.5], aF: [0.4, 0.5], fB: -0.22, fF: 0.22 },
  blockX: { y: 0.43, lean: 0.12, head: 0.2, aB: [1.25, 2.4], aF: [1.5, 2.25], fB: -0.32, fF: 0.24 },
  shieldKneel: { y: 0.26, lean: 1.0, head: 0.35, aB: [-0.55, 0.9], aF: [-0.3, 0.75], fB: -0.34, fF: 0.12 },
  point: { y: 0.49, lean: 0.05, head: 0.0, aB: [0.2, 0.3], aF: [1.55, 0.0], fB: -0.12, fF: 0.12 },
  flusteredPoint: { y: 0.48, lean: -0.1, head: -0.1, aB: [0.4, 1.8], aF: [1.4, 0.15], fB: -0.14, fF: 0.12 },
  // airborne
  jumpRise: { y: 0.8, lean: 0.1, head: -0.1, aB: [-0.6, 0.6], aF: [2.5, 0.4], lB: [-0.3, 0.9], lF: [0.9, 1.5] },
  tuck: { y: 0.8, lean: 0.5, head: 0.4, aB: [1.3, 1.5], aF: [1.5, 1.4], lB: [1.9, 2.4], lF: [2.1, 2.5] },
  airKick: { y: 0.9, lean: -0.45, head: 0.3, aB: [1.2, 1.3], aF: [-0.6, 0.6], lB: [0.4, 1.9], lF: [1.9, 0.05] },
  airKick2: { y: 0.9, lean: -0.2, head: 0.2, aB: [-0.4, 0.8], aF: [1.0, 1.2], lB: [1.7, 0.05], lF: [0.3, 1.8] },
  diveKick: { y: 1.0, rot: 0.55, lean: 0.3, head: 0.1, aB: [-1.3, 0.3], aF: [-0.9, 0.4], lB: [-0.1, 1.7], lF: [1.0, 0.04] },
  spinOut: { y: 0.5, lean: 0.0, head: 0.0, aB: [1.6, 0.15], aF: [1.55, 0.1], fB: -0.06, lF: [1.7, 0.1] },
  hurt: { y: 0.6, lean: -0.7, head: -0.5, aB: [-1.4, 0.7], aF: [1.8, 0.5], lB: [0.5, 0.6], lF: [1.0, 1.0] },
  down: { y: 0.12, rot: -1.45, lean: 0.1, head: 0.2, aB: [0.3, 0.3], aF: [-0.4, 0.4], lB: [0.2, 0.3], lF: [0.5, 0.6] },
  getUp: { y: 0.3, lean: 0.7, head: 0.3, aB: [0.2, 0.5], aF: [-0.1, 0.3], fB: -0.3, fF: 0.25 },
  wipeCheek: { y: 0.43, lean: 0.12, head: 0.2, aB: [0.4, 0.5], aF: [0.7, 2.6], fB: -0.3, fF: 0.24 },
  // front view (for close-ups)
  frontStand: { front: true, y: 0.48, lean: 0, head: 0, aB: [0.05, 0.15], aF: [0.05, 0.15], aBz: 0.35, aFz: 0.35, lB: [0, 0.02], lF: [0, 0.02], lBz: 0.12, lFz: 0.12 },
  frontArmsCrossed: { front: true, y: 0.48, lean: 0, head: -0.08, aB: [0.25, 1.75], aF: [0.3, 1.7], aBz: -0.55, aFz: -0.5, lB: [0, 0.02], lF: [0, 0.02], lBz: 0.12, lFz: 0.12 },
  frontPoint: { front: true, y: 0.48, lean: 0, head: -0.1, aB: [0.05, 0.15], aF: [1.45, 0.05], aBz: 0.35, aFz: 0.15, lB: [0, 0.02], lF: [0, 0.02], lBz: 0.14, lFz: 0.14 },
  frontShout: { front: true, y: 0.47, lean: -0.05, head: -0.15, aB: [0.6, 1.9], aF: [0.6, 1.9], aBz: 0.9, aFz: 0.9, lB: [0, 0.05], lF: [0, 0.05], lBz: 0.2, lFz: 0.2 },

  uppercutHit: { y: 0.47, lean: 0.1, head: -0.05, aB: [0.6, 1.8], aF: [1.8, 0.55], fB: -0.32, fF: 0.24 },
  axeHit: { y: 0.55, lean: 0.12, head: 0.25, aB: [0.9, 1.0], aF: [0.6, 0.9], fB: -0.2, lF: [2.25, 0.05] },
  dash: { y: 0.36, lean: 0.8, head: -0.25, aB: [-1.35, 0.3], aF: [-1.15, 0.35], fB: -0.52, fF: 0.3 },
  skid: { y: 0.3, lean: 0.25, head: 0.1, aB: [1.1, 1.9], aF: [1.4, 1.7], fB: -0.5, fF: 0.3 },
  handSkid: { y: 0.27, lean: 0.62, head: 0.0, aB: [-0.8, 0.3], aF: [0.25, 0.1], fB: -0.46, fF: 0.3 },
  kneeTouch: { y: 0.24, lean: 0.62, head: 0.55, aB: [-0.12, 0.8], aF: [0.38, 0.25], fB: -0.3, fF: 0.14 },
  standSoft: { y: 0.49, lean: 0.06, head: 0.28, aB: [0.05, 0.2], aF: [0.1, 0.25], fB: -0.07, fF: 0.08 },
  lookBack: { y: 0.49, lean: -0.04, head: -0.12, aB: [0.1, 0.3], aF: [0.2, 0.3], fB: -0.1, fF: 0.1 },
  powerUp: { y: 0.44, lean: -0.08, head: -0.2, aB: [-0.25, 0.2], aF: [-0.2, 0.25], fB: -0.32, fF: 0.3 },
  handBlade: { y: 0.4, lean: 0.35, head: 0.1, aB: [-0.4, 0.3], aF: [1.45, 0.0], fB: -0.46, fF: 0.36 },
  heelDrop: { y: 0.9, lean: 0.35, head: 0.2, aB: [-0.8, 0.5], aF: [-0.6, 0.6], lB: [0.3, 1.9], lF: [1.3, 0.05] },
  flipTuck: { y: 0.85, rot: -2.2, lean: 0.4, head: 0.3, aB: [1.2, 1.5], aF: [1.3, 1.4], lB: [2.0, 2.4], lF: [2.2, 2.5] },
  sideKickLow: { y: 0.47, lean: -0.55, head: 0.45, aB: [0.5, 1.5], aF: [-0.7, 0.4], fB: -0.22, lF: [1.75, 0.03] },
  risingKick: { y: 0.6, lean: -0.45, head: 0.3, aB: [0.9, 1.2], aF: [-0.8, 0.5], lB: [-0.2, 0.3], lF: [2.7, 0.05] },
  kneelCross: { y: 0.24, lean: 0.06, head: -0.38, aB: [0.55, 2.35], aF: [0.7, 2.2], fB: -0.32, fF: 0.14 },

  // ---------------------------------------------------------------- SG vs 67
  // 6-7 gesture base: elbows bent, forearms forward, palms up (hands bob via g67)
  sixSeven: { y: 0.48, lean: 0.02, head: -0.05, aB: [0.25, 1.35], aF: [0.25, 1.35], aBz: 0.35, aFz: 0.35, fB: -0.12, fF: 0.12 },
  sixSevenFront: { front: true, y: 0.48, lean: 0, head: -0.05, aB: [0.25, 1.35], aF: [0.25, 1.35], aBz: 0.55, aFz: 0.55, lB: [0, 0.03], lF: [0, 0.03], lBz: 0.14, lFz: 0.14 },
  sit: { y: 0.3, lean: 0.05, head: 0.05, aB: [0.6, 1.2], aF: [0.7, 1.1], lB: [1.45, 1.5], lF: [1.5, 1.45] },
  throwWind: { y: 0.45, lean: -0.1, head: 0.05, aB: [0.6, 0.6], aF: [-1.2, 2.2], fB: -0.3, fF: 0.22 },
  throwRelease: { y: 0.42, lean: 0.35, head: 0.1, aB: [-0.6, 0.5], aF: [1.7, -0.1], fB: -0.4, fF: 0.3 },
  bound: { y: 0.49, lean: 0.0, head: -0.1, aB: [0.02, 0.05], aF: [0.02, 0.05], aBz: 0.02, aFz: 0.02, fB: -0.03, fF: 0.03 },
  chargeLow: { y: 0.36, lean: 0.15, head: 0.1, aB: [-0.75, 1.9], aF: [-0.7, 1.95], fB: -0.46, fF: 0.36 },
  fireBoth: { y: 0.38, lean: 0.32, head: 0.05, aB: [1.55, 0.02], aF: [1.5, 0.02], aBz: 0.05, aFz: 0.05, fB: -0.52, fF: 0.38 },
  dunkUp: { y: 1.0, lean: -0.15, head: -0.3, aB: [2.8, 0.2], aF: [3.0, 0.1], lB: [-0.3, 0.9], lF: [0.8, 1.6] },
  dunkDown: { y: 0.9, lean: 0.5, head: 0.2, aB: [1.2, 0.2], aF: [1.4, 0.1], lB: [-0.4, 1.1], lF: [0.5, 1.4] },
  stagger: { y: 0.46, lean: -0.4, head: -0.35, aB: [0.9, 1.3], aF: [-0.6, 0.9], fB: -0.34, fF: 0.12 },
  kneeHurt: { y: 0.27, lean: 0.45, head: 0.25, aB: [0.2, 0.5], aF: [0.9, 0.9], fB: -0.3, fF: 0.18 },
  lieBack: { y: 0.07, rot: -1.5, lean: 0.06, head: 0.1, aB: [2.75, 0.3], aF: [0.4, 0.45], lB: [0.2, 0.45], lF: [0.75, 1.35] },
  wallKick: { y: 0.5, lean: -0.2, head: 0.1, aB: [1.2, 1.0], aF: [-0.5, 0.6], lB: [-0.9, 1.4], lF: [2.3, 0.1] },
  flyingKnee: { y: 0.8, lean: 0.1, head: 0.05, aB: [-0.8, 1.0], aF: [1.0, 1.6], lB: [-0.5, 0.9], lF: [1.9, 2.4] },
  clashPush: { y: 0.36, lean: 0.55, head: 0.15, aB: [1.35, 0.05], aF: [1.3, 0.05], aBz: 0.06, aFz: 0.06, fB: -0.6, fF: 0.35 },
  carry: { y: 0.49, lean: 0.02, head: 0.05, aB: [0.1, 0.3], aF: [0.45, 1.15], fB: -0.08, fF: 0.09 },
  shock: { y: 0.5, lean: -0.18, head: -0.22, aB: [0.55, 0.9], aF: [0.5, 1.15], fB: -0.14, fF: 0.1 },
  standTall: { y: 0.5, lean: -0.04, head: 0.32, aB: [0.05, 0.2], aF: [0.08, 0.2], fB: -0.1, fF: 0.1 },
  lookUpStand: { y: 0.48, lean: -0.12, head: -0.5, aB: [0.12, 0.3], aF: [0.2, 0.35], fB: -0.12, fF: 0.1 },
  sitGesture: { y: 0.3, lean: 0.02, head: -0.05, aB: [0.25, 1.35], aF: [0.25, 1.35], aBz: 0.35, aFz: 0.35, lB: [1.45, 1.5], lF: [1.5, 1.45] },
  flick: { y: 0.47, lean: 0.12, head: 0.05, aB: [-0.2, 0.4], aF: [1.2, 0.25], fB: -0.2, fF: 0.16 },
  flickWind: { y: 0.48, lean: -0.05, head: 0.1, aB: [0.1, 0.3], aF: [0.3, 2.2], fB: -0.16, fF: 0.12 },
  thumb: { y: 0.49, lean: -0.03, head: -0.08, aB: [0.1, 0.3], aF: [0.9, 1.6], fB: -0.1, fF: 0.1 },
  placePlate: { y: 0.4, lean: 0.45, head: 0.2, aB: [0.1, 0.4], aF: [1.0, 0.5], fB: -0.18, fF: 0.2 },
  crackKnuckles: { y: 0.48, lean: 0.06, head: 0.1, aB: [0.7, 1.9], aF: [0.8, 1.8], aBz: -0.3, aFz: -0.3, fB: -0.14, fF: 0.14 },
  dribble: { y: 0.44, lean: 0.25, head: 0.1, aB: [-0.3, 0.5], aF: [0.5, 0.4], fB: -0.3, fF: 0.25 },
  wallRun: { y: 0.47, lean: 0.45, head: 0.1, aB: [-1.1, 0.3], aF: [-0.95, 0.35] },
  hang: { y: 0.5, lean: 0.1, head: -0.2, aB: [2.9, 0.1], aF: [2.9, 0.1], lB: [0.1, 0.2], lF: [0.25, 0.3] },
  throwOver: { y: 0.4, lean: 0.7, head: 0.3, aB: [2.2, 0.5], aF: [2.4, 0.4], fB: -0.4, fF: 0.3 },
  swat: { y: 0.45, lean: 0.25, head: 0.1, aB: [-0.3, 0.6], aF: [1.9, 0.2], aFz: 0.3, fB: -0.34, fF: 0.3 },
  bigPunch: { y: 0.42, lean: 0.45, head: 0.1, aB: [-0.6, 0.7], aF: [1.62, 0.02], fB: -0.5, fF: 0.36 },
  clap: { y: 0.48, lean: 0.02, head: 0.0, aB: [1.3, 0.35], aF: [1.3, 0.35], aBz: -0.28, aFz: -0.28, fB: -0.14, fF: 0.14 },
  fistUp: { y: 0.49, lean: -0.05, head: -0.25, aB: [0.1, 0.3], aF: [2.9, 0.2], fB: -0.12, fF: 0.12 },
  lieSide: { y: 0.08, rot: -1.5, lean: 0.1, head: 0.35, aB: [2.2, 0.8], aF: [0.6, 1.2], lB: [0.3, 0.5], lF: [0.9, 1.4] },
  headUp: { y: 0.07, rot: -1.5, lean: 0.25, head: 0.9, aB: [2.75, 0.3], aF: [0.4, 0.45], lB: [0.2, 0.45], lF: [0.75, 1.35] },

  // ---------------------------------------------------------------- brawler poses
  eStand: { y: 0.48, lean: 0.12, head: 0.18, aB: [0.08, 0.25], aF: [0.12, 0.3], fB: -0.12, fF: 0.12 },
  eGuard: { y: 0.44, lean: 0.22, head: 0.1, aB: [0.7, 1.6], aF: [1.05, 1.45], fB: -0.28, fF: 0.22 },
  eWindup: { y: 0.45, lean: -0.08, head: 0.05, aB: [0.95, 1.7], aF: [-0.7, 1.3], fB: -0.3, fF: 0.24 },
  ePunch: { y: 0.41, lean: 0.4, head: 0.1, aB: [-0.5, 0.8], aF: [1.6, 0.04], fB: -0.42, fF: 0.36 },
  eRaise: { y: 0.46, lean: -0.18, head: -0.1, aB: [2.7, 0.5], aF: [3.05, 0.25], fB: -0.26, fF: 0.26 },
  eSwing: { y: 0.38, lean: 0.55, head: 0.15, aB: [1.1, 0.35], aF: [1.25, 0.08], fB: -0.42, fF: 0.42 },
  eSwingSide: { y: 0.42, lean: 0.3, head: 0.1, aB: [0.6, 0.9], aF: [1.7, 0.1], fB: -0.36, fF: 0.3 },
  eLeap: { y: 0.95, lean: 0.2, head: 0.0, aB: [2.4, 0.4], aF: [2.8, 0.3], lB: [-0.5, 1.2], lF: [0.8, 1.4] },
  eFlinch: { y: 0.46, lean: -0.35, head: -0.3, aB: [1.8, 1.6], aF: [2.0, 1.5], fB: -0.26, fF: 0.2 },
  eGrab: { y: 0.44, lean: 0.35, head: 0.1, aB: [1.45, 0.3], aF: [1.5, 0.2], fB: -0.36, fF: 0.3 },
  eCheer: { y: 0.5, lean: -0.1, head: -0.2, aB: [2.6, 0.3], aF: [2.9, 0.2], fB: -0.14, fF: 0.14 },
  eLaugh: { y: 0.47, lean: -0.3, head: -0.45, aB: [0.3, 1.6], aF: [0.5, 1.5], fB: -0.14, fF: 0.12 },
  eStomp: { y: 0.5, lean: -0.1, head: 0.3, aB: [0.3, 0.5], aF: [0.5, 0.6], fB: -0.12, lF: [0.9, 1.0] },
  eScared: { y: 0.45, lean: -0.3, head: -0.2, aB: [1.3, 1.9], aF: [1.5, 1.8], fB: -0.3, fF: 0.05 },
  eRun: { y: 0.46, lean: 0.4, head: 0.1, aB: [0.8, 1.4], aF: [-0.6, 1.2], fB: -0.3, fF: 0.3 },
  eDrag: { y: 0.46, lean: 0.25, head: 0.2, aB: [0.1, 0.3], aF: [-0.25, 0.1], fB: -0.2, fF: 0.2 },
  eBlockClub: { y: 0.44, lean: 0.1, head: 0.1, aB: [1.2, 1.2], aF: [1.3, 1.1], fB: -0.3, fF: 0.26 },
  eKnee: { y: 0.3, lean: 0.5, head: 0.4, aB: [0.5, 0.6], aF: [0.8, 0.4], fB: -0.3, fF: 0.2 },
  eLie: { y: 0.1, rot: -1.5, lean: 0.06, head: 0.1, aB: [2.75, 0.3], aF: [0.4, 0.45], lB: [0.2, 0.45], lF: [0.75, 1.35] },
  eRoar: { y: 0.47, lean: -0.25, head: -0.35, aB: [2.2, 0.6], aF: [2.5, 0.4], fB: -0.3, fF: 0.3 },
  eBackhand: { y: 0.42, lean: 0.2, head: 0.05, aB: [2.0, 0.2], aF: [-0.4, 0.8], fB: -0.34, fF: 0.3 },
};

/** run cycle (phase 0..1), fast anime run with arms back ("ninja") or pumping */
export function runPose(phase, speed = 1, ninja = false) {
  const a = phase * TAU;
  const s = Math.sin(a), c = Math.cos(a);
  const lean = 0.32 + 0.08 * speed + (ninja ? 0.25 : 0);
  const hipF = 0.15 + 0.85 * s, hipB = 0.15 - 0.85 * s;
  const kneeF = 0.35 + 1.35 * Math.max(0, Math.sin(a + 1.2)) + 0.3 * (1 - s) * 0.5;
  const kneeB = 0.35 + 1.35 * Math.max(0, Math.sin(a + 1.2 + Math.PI)) + 0.3 * (1 + s) * 0.5;
  const arms = ninja
    ? { aB: [-1.1 + 0.08 * s, 0.25], aF: [-0.95 - 0.08 * s, 0.3] }
    : { aB: [0.3 + 0.95 * s, 1.5], aF: [0.3 - 0.95 * s, 1.55] };
  return {
    y: 0.44 + 0.045 * Math.abs(c), lean, head: 0.12,
    lB: [hipB, kneeB], lF: [hipF, kneeF], fB: null, fF: null, ...arms,
  };
}

/** walk cycle (phase 0..1) */
export function walkPose(phase, menace = 0) {
  const a = phase * TAU;
  const s = Math.sin(a);
  return {
    y: 0.475 + 0.012 * Math.abs(Math.cos(a)),
    lean: 0.06 + menace * 0.1, head: 0.05 + menace * 0.12,
    lB: [-0.02 - 0.34 * s, 0.1 + 0.55 * Math.max(0, -Math.sin(a + 0.6))],
    lF: [-0.02 + 0.34 * s, 0.1 + 0.55 * Math.max(0, Math.sin(a + 0.6))],
    aB: [0.1 + 0.28 * s, 0.35], aF: [0.1 - 0.28 * s, 0.4],
    fB: null, fF: null,
  };
}

/** limb flail for a flying body; v = velocity, u = time since launch */
export function flailPose(u, seed, speed = 1) {
  const n = (k, f = 7) => noise(u * f + seed * 3.1, seed * 7 + k);
  const drag = Math.min(1, speed / 4);
  return {
    lean: -0.2 + 0.25 * n(1, 3),
    head: -0.3 + 0.3 * n(2, 4),
    aB: [2.2 * drag + 0.5 * n(3), 0.6 + 0.5 * n(4)],
    aF: [-1.6 * drag + 0.5 * n(5), 0.5 + 0.5 * n(6)],
    lB: [-0.6 * drag + 0.5 * n(7), 0.5 + 0.5 * n(8)],
    lF: [0.9 * drag + 0.5 * n(9), 0.7 + 0.5 * n(10)],
    fB: null, fF: null,
  };
}

/**
 * lying on the ground after a knock-down. side +1 = face down (body rot +pi/2,
 * where "forward" points into the ground), -1 = on the back (rot -pi/2).
 */
export function lyingPose(seed, side = -1, twitch = 0) {
  const n = (k) => noise(seed * 5 + k, seed) * 0.15;
  if (side < 0) {
    return {
      y: 0.06, lean: 0.06 + n(1) * 0.3, head: 0.1 + n(2) + twitch * 0.12,
      aB: [2.75 + n(3), 0.3 + n(4)], aF: [0.4 + n(5), 0.45 + n(6)],
      lB: [0.2 + n(7), 0.45 + n(8)], lF: [0.75 + n(9), 1.35 + n(10)],
      fB: null, fF: null,
    };
  }
  return {
    y: 0.06, lean: -0.06 + n(1) * 0.3, head: -0.12 + n(2) - twitch * 0.1,
    aB: [-2.85 + n(3), -0.15 + n(4)], aF: [-0.12 + n(5), -0.1 + n(6)],
    lB: [-0.08 + n(7), 0.2 + n(8)], lF: [-0.2 + n(9), 0.95 + n(10)],
    fB: null, fF: null,
  };
}

export const breathe = (t, seed = 0, amt = 1) => ({
  dy: Math.sin(t * 2.4 + seed) * 0.006 * amt,
  dl: Math.sin(t * 2.4 + seed + 0.6) * 0.012 * amt,
});
