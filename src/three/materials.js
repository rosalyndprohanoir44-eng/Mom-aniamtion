// Toon materials with character deformation (squash/stretch, bend, twist),
// inverted-hull ink outlines, and a crisp specular for the glossy pet.
import * as THREE from 'three';
import { DEFORM_GLSL } from '../chars/spec.js';

export function gradientMap(levels = [0.62, 0.84, 1.0]) {
  const data = new Uint8Array(levels.length * 4);
  levels.forEach((l, i) => {
    const v = Math.round(l * 255);
    data.set([v, v, v, 255], i * 4);
  });
  const tex = new THREE.DataTexture(data, levels.length, 1, THREE.RGBAFormat);
  tex.minFilter = tex.magFilter = THREE.NearestFilter;
  tex.generateMipmaps = false;
  tex.needsUpdate = true;
  return tex;
}

export const GRAD = { soft: null, pet: null };
export function initGradients() {
  GRAD.soft = gradientMap([0.72, 0.88, 1.0]);
  GRAD.pet = gradientMap([0.66, 0.86, 1.0]);
  GRAD.world = gradientMap([0.7, 0.87, 1.0]);
}

const VERTEX_DEFORM = (outline, lit) => /* glsl */ `
  vec4 dfW = modelMatrix * vec4(transformed, 1.0);
  vec3 dfL = (uRootInv * dfW).xyz;
  ${outline ? `
  vec3 dfN = normalize(inverse(transpose(mat3(modelMatrix))) * normal);
  dfL += normalize(mat3(uRootInv) * dfN) * uOutline;` : ''}
  vec3 dfP = deformPoint(dfL);
  ${outline || !lit ? '' : `
  #ifndef FLAT_SHADED
  {
    // rotate normals by the local twist so lighting follows the turn
    float dfh = clamp((dfL.y * uSquash - uBendBase) / uBendLen, 0.0, 1.6);
    float dfa = uTwist * dfh;
    vec3 nL = mat3(uRootInv) * normalize(inverse(transpose(mat3(modelMatrix))) * normal);
    nL = vec3(cos(dfa) * nL.x + sin(dfa) * nL.z, nL.y, -sin(dfa) * nL.x + cos(dfa) * nL.z);
    vNormal = normalize(mat3(viewMatrix) * (mat3(uRoot) * nL));
  }
  #endif`}
  vec4 mvPosition = viewMatrix * (uRoot * vec4(dfP, 1.0));
  gl_Position = projectionMatrix * mvPosition;
`;

/**
 * Holds the per-character deformation uniforms. Every material of a
 * character is patched with the same uniform objects.
 */
export class Deformer {
  constructor(bend) {
    this.u = {
      uSquash: { value: 1 },
      uBend: { value: new THREE.Vector2() },
      uTwist: { value: 0 },
      uBendBase: { value: bend.base },
      uBendLen: { value: bend.len },
      uRoot: { value: new THREE.Matrix4() },
      uRootInv: { value: new THREE.Matrix4() },
      uOutline: { value: 0.012 },
      uRim: { value: new THREE.Color(0xffffff) },
      uRimStrength: { value: 0.25 },
      uSpec: { value: 0.0 },
      uLightDir: { value: new THREE.Vector3(-0.4, 0.7, 0.6).normalize() },
    };
  }

  /** patch a MeshToonMaterial / MeshBasicMaterial in place */
  patch(mat, { outline = false, lit = true } = {}) {
    const u = this.u;
    mat.onBeforeCompile = (shader) => {
      for (const k in u) shader.uniforms[k] = u[k];
      shader.vertexShader = shader.vertexShader
        .replace('#include <common>', `#include <common>\n${DEFORM_GLSL}\nuniform float uOutline;`)
        .replace('#include <project_vertex>', VERTEX_DEFORM(outline, lit));
      if (lit && !outline) {
        shader.fragmentShader = shader.fragmentShader
          .replace('#include <common>', `#include <common>
            uniform vec3 uRim; uniform float uRimStrength; uniform float uSpec; uniform vec3 uLightDir;`)
          .replace('#include <opaque_fragment>', `
            {
              vec3 vd = normalize(vViewPosition);
              vec3 nn = normalize(vNormal);
              float fres = 1.0 - clamp(dot(nn, vd), 0.0, 1.0);
              outgoingLight += uRim * smoothstep(0.55, 0.95, fres) * uRimStrength;
              if (uSpec > 0.0) {
                vec3 L = normalize((viewMatrix * vec4(uLightDir, 0.0)).xyz);
                vec3 H = normalize(L + vd);
                float s = pow(max(dot(nn, H), 0.0), 70.0);
                outgoingLight += vec3(1.0, 0.97, 0.94) * smoothstep(0.35, 0.42, s) * uSpec;
                outgoingLight += vec3(1.0, 0.9, 0.85) * pow(max(dot(nn, H), 0.0), 12.0) * uSpec * 0.18;
              }
            }
            #include <opaque_fragment>`);
      }
    };
    mat.customProgramCacheKey = () => `deform-${outline ? 'o' : 'f'}-${lit ? 'l' : 'u'}`;
    return mat;
  }

  toon(color, grad = GRAD.soft, extra = {}) {
    return this.patch(new THREE.MeshToonMaterial({ color, gradientMap: grad, ...extra }));
  }

  outline(color = 0x2a2321) {
    return this.patch(new THREE.MeshBasicMaterial({ color, side: THREE.BackSide }), { outline: true, lit: false });
  }

  basic(params) {
    return this.patch(new THREE.MeshBasicMaterial(params), { lit: false });
  }

  /** update root matrices from the character root object (after updateMatrixWorld) */
  syncRoot(root) {
    this.u.uRoot.value.copy(root.matrixWorld);
    this.u.uRootInv.value.copy(root.matrixWorld).invert();
  }
}

/** mesh + optional outline twin sharing the geometry */
export function inked(geometry, material, outlineMat, parent) {
  const m = new THREE.Mesh(geometry, material);
  m.frustumCulled = false;
  if (parent) parent.add(m);
  if (outlineMat) {
    const o = new THREE.Mesh(geometry, outlineMat);
    o.frustumCulled = false;
    m.add(o);
  }
  return m;
}

// ------------------------------------------------------------ world toon
/** plain toon material + outline for static props (no deformation) */
export function worldToon(color, extra = {}) {
  return new THREE.MeshToonMaterial({ color, gradientMap: GRAD.world, ...extra });
}

const OUTLINE_VS = /* glsl */ `
uniform float uThick;
void main() {
  vec3 n = normalize(normalMatrix * normal);
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  // constant-ish screen thickness
  mv.xyz += n * uThick * max(-mv.z, 1.0) * 0.0025;
  gl_Position = projectionMatrix * mv;
}`;
const OUTLINE_FS = /* glsl */ `
uniform vec3 uColor;
uniform float uAlpha;
void main() { gl_FragColor = vec4(uColor, uAlpha); }`;

export function worldOutline(color = 0x3b3040, thick = 1.0, alpha = 1) {
  return new THREE.ShaderMaterial({
    uniforms: { uThick: { value: thick }, uColor: { value: new THREE.Color(color) }, uAlpha: { value: alpha } },
    vertexShader: OUTLINE_VS,
    fragmentShader: OUTLINE_FS,
    side: THREE.BackSide,
    transparent: alpha < 1,
  });
}

export function propMesh(geometry, color, parent, { outline = 0x3b3040, thick = 1, extra = {} } = {}) {
  const m = new THREE.Mesh(geometry, worldToon(color, extra));
  if (outline !== null) m.add(new THREE.Mesh(geometry, worldOutline(outline, thick)));
  if (parent) parent.add(m);
  return m;
}
