(()=>{var yu=0,vc=1,xu=2;var zr=1,bu=2,Ws=3,Ui=0,Ft=1,yn=2,ei=0,Fi=1,Xs=2,yc=3,xc=4,Mu=5;var ns=100,Su=101,wu=102,Tu=103,Eu=104,Au=200,Ru=201,Cu=202,Pu=203,bc=204,Mc=205,Iu=206,Lu=207,Du=208,Nu=209,Uu=210,Fu=211,Ou=212,Bu=213,ku=214,Ba=0,ka=1,za=2,Ps=3,Ga=4,Va=5,Ha=6,Wa=7,Sc=0,zu=1,Gu=2,kn=0,wc=1,Tc=2,Ec=3,Ac=4,Rc=5,Cc=6,Pc=7;var Ic=300,Oi=301,is=302,To=303,Eo=304,Gr=306,Xa=1e3,Zn=1001,qa=1002,Nt=1003,Vu=1004;var Vr=1005;var Zt=1006,Ao=1007;var Bi=1008;var un=1009,Lc=1010,Dc=1011,qs=1012,Ro=1013,zn=1014,Tn=1015,Gn=1016,Co=1017,Po=1018,Ys=1020,Nc=35902,Uc=35899,Fc=1021,Oc=1022,fn=1023,Jn=1026,ki=1027,Io=1028,Lo=1029,zi=1030,Do=1031;var No=1033,Hr=33776,Wr=33777,Xr=33778,qr=33779,Uo=35840,Fo=35841,Oo=35842,Bo=35843,ko=36196,zo=37492,Go=37496,Vo=37488,Ho=37489,Yr=37490,Wo=37491,Xo=37808,qo=37809,Yo=37810,Zo=37811,Jo=37812,$o=37813,Ko=37814,Qo=37815,jo=37816,el=37817,tl=37818,nl=37819,il=37820,sl=37821,rl=36492,al=36494,ol=36495,ll=36283,cl=36284,Zr=36285,hl=36286;var yr=2300,Ya=2301,Fa=2302,uc=2303,fc=2400,dc=2401,pc=2402;var Hu=3200;var ul=0,Wu=1,fi="",Dt="srgb",xr="srgb-linear",br="linear",ut="srgb";var Oa=7680;var Xu=519,qu=512,Yu=513,Zu=514,fl=515,Ju=516,$u=517,dl=518,Ku=519,Bc=35044;var kc="300 es",On=2e3,Is=2001;function Ed(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ad(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Mr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Qu(){let n=Mr("canvas");return n.style.display="block",n}var Wh={},Ls=null;function Sr(...n){let e="THREE."+n.shift();Ls?Ls("log",e,...n):console.log(e,...n)}function ju(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ne(...n){n=ju(n);let e="THREE."+n.shift();if(Ls)Ls("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ue(...n){n=ju(n);let e="THREE."+n.shift();if(Ls)Ls("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function $i(...n){let e=n.join(" ");e in Wh||(Wh[e]=!0,Ne(...n))}function ef(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var tf={[Ba]:ka,[za]:Ha,[Ga]:Wa,[Ps]:Va,[ka]:Ba,[Ha]:za,[Wa]:Ga,[Va]:Ps},$n=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xh=1234567,mr=Math.PI/180,Ds=180/Math.PI;function ci(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function Ze(n,e,t){return Math.max(e,Math.min(t,n))}function zc(n,e){return(n%e+e)%e}function Rd(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Cd(n,e,t){return n!==e?(t-n)/(e-n):0}function gr(n,e,t){return(1-t)*n+t*e}function Pd(n,e,t,i){return gr(n,e,1-Math.exp(-t*i))}function Id(n,e=1){return e-Math.abs(zc(n,e*2)-e)}function Ld(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Dd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Nd(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Ud(n,e){return n+Math.random()*(e-n)}function Fd(n){return n*(.5-Math.random())}function Od(n){n!==void 0&&(Xh=n);let e=Xh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Bd(n){return n*mr}function kd(n){return n*Ds}function zd(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Gd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Vd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Hd(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),f=r((e-i)/2),u=a((e-i)/2),d=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*h,l*f,l*u,o*c);break;case"YZY":n.set(l*u,o*h,l*f,o*c);break;case"ZXZ":n.set(l*f,l*u,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*d,o*c);break;case"YXY":n.set(l*d,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*d,o*h,o*c);break;default:Ne("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Fn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function dt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var pl={DEG2RAD:mr,RAD2DEG:Ds,generateUUID:ci,clamp:Ze,euclideanModulo:zc,mapLinear:Rd,inverseLerp:Cd,lerp:gr,damp:Pd,pingpong:Id,smoothstep:Ld,smootherstep:Dd,randInt:Nd,randFloat:Ud,randFloatSpread:Fd,seededRandom:Od,degToRad:Bd,radToDeg:kd,isPowerOfTwo:zd,ceilPowerOfTwo:Gd,floorPowerOfTwo:Vd,setQuaternionFromProperEuler:Hd,normalize:dt,denormalize:Fn},qc=class qc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};qc.prototype.isVector2=!0;var _e=qc,_n=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3],u=r[a+0],d=r[a+1],g=r[a+2],_=r[a+3];if(f!==_||l!==u||c!==d||h!==g){let m=l*u+c*d+h*g+f*_;m<0&&(u=-u,d=-d,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){let S=Math.acos(m),E=Math.sin(S);p=Math.sin(p*S)/E,o=Math.sin(o*S)/E,l=l*p+u*o,c=c*p+d*o,h=h*p+g*o,f=f*p+_*o}else{l=l*p+u*o,c=c*p+d*o,h=h*p+g*o,f=f*p+_*o;let S=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=S,c*=S,h*=S,f*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[a],u=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+h*f+l*d-c*u,e[t+1]=l*g+h*u+c*f-o*d,e[t+2]=c*g+h*d+o*u-l*f,e[t+3]=h*g-o*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),f=o(r/2),u=l(i/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"YZX":this._x=u*h*f+c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f-u*d*g;break;case"XZY":this._x=u*h*f-c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f+u*d*g;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=i+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>f){let d=2*Math.sqrt(1+i-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-i-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Yc=class Yc{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),f=2*(r*i-a*t);return this.x=t+l*c+a*f-o*h,this.y=i+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zl.copy(this).projectOnVector(e),this.sub(zl)}reflect(e){return this.sub(zl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Yc.prototype.isVector3=!0;var I=Yc,zl=new I,qh=new _n,Zc=class Zc{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],u=i[2],d=i[5],g=i[8],_=s[0],m=s[3],p=s[6],S=s[1],E=s[4],y=s[7],b=s[2],M=s[5],A=s[8];return r[0]=a*_+o*S+l*b,r[3]=a*m+o*E+l*M,r[6]=a*p+o*y+l*A,r[1]=c*_+h*S+f*b,r[4]=c*m+h*E+f*M,r[7]=c*p+h*y+f*A,r[2]=u*_+d*S+g*b,r[5]=u*m+d*E+g*M,r[8]=u*p+d*y+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,g=t*f+i*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=f*_,e[1]=(s*c-h*i)*_,e[2]=(o*i-s*a)*_,e[3]=u*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return $i("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Gl.makeScale(e,t)),this}rotate(e){return $i("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Gl.makeRotation(-e)),this}translate(e,t){return $i("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Gl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Zc.prototype.isMatrix3=!0;var Be=Zc,Gl=new Be,Yh=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zh=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wd(){let n={enabled:!0,workingColorSpace:xr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ut&&(s.r=hi(s.r),s.g=hi(s.g),s.b=hi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ut&&(s.r=Cs(s.r),s.g=Cs(s.g),s.b=Cs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===fi?br:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return $i("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return $i("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[xr]:{primaries:e,whitePoint:i,transfer:br,toXYZ:Yh,fromXYZ:Zh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Dt},outputColorSpaceConfig:{drawingBufferColorSpace:Dt}},[Dt]:{primaries:e,whitePoint:i,transfer:ut,toXYZ:Yh,fromXYZ:Zh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Dt}}}),n}var et=Wd();function hi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Cs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var us,Za=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{us===void 0&&(us=Mr("canvas")),us.width=e.width,us.height=e.height;let s=us.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=us}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Mr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=hi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(hi(t[i]/255)*255):t[i]=hi(t[i]);return{data:t,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Xd=0,Ns=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=ci(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Vl(s[a].image)):r.push(Vl(s[a]))}else r=Vl(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Vl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Za.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}var qd=0,Hl=new I,an=class n extends $n{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Zn,s=Zn,r=Zt,a=Bi,o=fn,l=un,c=n.DEFAULT_ANISOTROPY,h=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=ci(),this.name="",this.source=new Ns(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Hl).x}get height(){return this.source.getSize(Hl).y}get depth(){return this.source.getSize(Hl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ne(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ne(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ic)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xa:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case qa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xa:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case qa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Ic;an.DEFAULT_ANISOTROPY=1;var Jc=class Jc{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,y=(d+1)/2,b=(p+1)/2,M=(h+u)/4,A=(f+_)/4,v=(g+m)/4;return E>y&&E>b?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=M/i,r=A/i):y>b?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=M/s,r=v/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=A/r,s=v/r),this.set(i,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(f-_)/S,this.z=(u-h)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Jc.prototype.isVector4=!0;var wt=Jc,Ja=class extends $n{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new an(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ns(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},hn=class extends Ja{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},wr=class extends an{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var $a=class extends an{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var wo=class wo{constructor(e,t,i,s,r,a,o,l,c,h,f,u,d,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,f,u,d,g,_,m)}set(e,t,i,s,r,a,o,l,c,h,f,u,d,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wo().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/fs.setFromMatrixColumn(e,0).length(),r=1/fs.setFromMatrixColumn(e,1).length(),a=1/fs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=a*h,d=a*f,g=o*h,_=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,d=l*f,g=c*h,_=c*f;t[0]=u+_*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=_+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,d=l*f,g=c*h,_=c*f;t[0]=u-_*o,t[4]=-a*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=_-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,d=a*f,g=o*h,_=o*f;t[0]=l*h,t[4]=g*c-d,t[8]=u*c+_,t[1]=l*f,t[5]=_*c+u,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-u*f,t[8]=g*f+d,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*f+g,t[10]=u-_*f}else if(e.order==="XZY"){let u=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+_,t[5]=a*h,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*h,t[10]=_*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yd,e,Zd)}lookAt(e,t,i){let s=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Si.crossVectors(i,mn),Si.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Si.crossVectors(i,mn)),Si.normalize(),da.crossVectors(mn,Si),s[0]=Si.x,s[4]=da.x,s[8]=mn.x,s[1]=Si.y,s[5]=da.y,s[9]=mn.y,s[2]=Si.z,s[6]=da.z,s[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],u=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],S=i[3],E=i[7],y=i[11],b=i[15],M=s[0],A=s[4],v=s[8],w=s[12],R=s[1],P=s[5],L=s[9],N=s[13],D=s[2],z=s[6],F=s[10],X=s[14],Q=s[3],Y=s[7],ee=s[11],ie=s[15];return r[0]=a*M+o*R+l*D+c*Q,r[4]=a*A+o*P+l*z+c*Y,r[8]=a*v+o*L+l*F+c*ee,r[12]=a*w+o*N+l*X+c*ie,r[1]=h*M+f*R+u*D+d*Q,r[5]=h*A+f*P+u*z+d*Y,r[9]=h*v+f*L+u*F+d*ee,r[13]=h*w+f*N+u*X+d*ie,r[2]=g*M+_*R+m*D+p*Q,r[6]=g*A+_*P+m*z+p*Y,r[10]=g*v+_*L+m*F+p*ee,r[14]=g*w+_*N+m*X+p*ie,r[3]=S*M+E*R+y*D+b*Q,r[7]=S*A+E*P+y*z+b*Y,r[11]=S*v+E*L+y*F+b*ee,r[15]=S*w+E*N+y*X+b*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15],S=l*d-c*u,E=o*d-c*f,y=o*u-l*f,b=a*d-c*h,M=a*u-l*h,A=a*f-o*h;return t*(_*S-m*E+p*y)-i*(g*S-m*b+p*M)+s*(g*E-_*b+p*A)-r*(g*y-_*M+m*A)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],S=t*o-i*a,E=t*l-s*a,y=t*c-r*a,b=i*l-s*o,M=i*c-r*o,A=s*c-r*l,v=h*_-f*g,w=h*m-u*g,R=h*p-d*g,P=f*m-u*_,L=f*p-d*_,N=u*p-d*m,D=S*N-E*L+y*P+b*R-M*w+A*v;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/D;return e[0]=(o*N-l*L+c*P)*z,e[1]=(s*L-i*N-r*P)*z,e[2]=(_*A-m*M+p*b)*z,e[3]=(u*M-f*A-d*b)*z,e[4]=(l*R-a*N-c*w)*z,e[5]=(t*N-s*R+r*w)*z,e[6]=(m*y-g*A-p*E)*z,e[7]=(h*A-u*y+d*E)*z,e[8]=(a*L-o*R+c*v)*z,e[9]=(i*R-t*L-r*v)*z,e[10]=(g*M-_*y+p*S)*z,e[11]=(f*y-h*M-d*S)*z,e[12]=(o*w-a*P-l*v)*z,e[13]=(t*P-i*w+s*v)*z,e[14]=(_*E-g*b-m*S)*z,e[15]=(h*b-f*E+u*S)*z,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,g=r*f,_=a*h,m=a*f,p=o*f,S=l*c,E=l*h,y=l*f,b=i.x,M=i.y,A=i.z;return s[0]=(1-(_+p))*b,s[1]=(d+y)*b,s[2]=(g-E)*b,s[3]=0,s[4]=(d-y)*M,s[5]=(1-(u+p))*M,s[6]=(m+S)*M,s[7]=0,s[8]=(g+E)*A,s[9]=(m-S)*A,s[10]=(1-(u+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=fs.set(s[0],s[1],s[2]).length(),o=fs.set(s[4],s[5],s[6]).length(),l=fs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Ln.copy(this);let c=1/a,h=1/o,f=1/l;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=h,Ln.elements[5]*=h,Ln.elements[6]*=h,Ln.elements[8]*=f,Ln.elements[9]*=f,Ln.elements[10]*=f,t.setFromRotationMatrix(Ln),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=On,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===On)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Is)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=On,l=!1){let c=this.elements,h=2/(t-e),f=2/(i-s),u=-(t+e)/(t-e),d=-(i+s)/(i-s),g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===On)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===Is)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};wo.prototype.isMatrix4=!0;var nt=wo,fs=new I,Ln=new nt,Yd=new I(0,0,0),Zd=new I(1,1,1),Si=new I,da=new I,mn=new I,Jh=new nt,$h=new _n,Bn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Jh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $h.setFromEuler(this),this.setFromQuaternion($h,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bn.DEFAULT_ORDER="XYZ";var Tr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Jd=0,Kh=new I,ds=new _n,ii=new nt,pa=new I,ar=new I,$d=new I,Kd=new _n,Qh=new I(1,0,0),jh=new I(0,1,0),eu=new I(0,0,1),tu={type:"added"},Qd={type:"removed"},ps={type:"childadded",child:null},Wl={type:"childremoved",child:null},Jt=class n extends $n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new I,t=new Bn,i=new _n,s=new I(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new nt},normalMatrix:{value:new Be}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.multiply(ds),this}rotateOnWorldAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.premultiply(ds),this}rotateX(e){return this.rotateOnAxis(Qh,e)}rotateY(e){return this.rotateOnAxis(jh,e)}rotateZ(e){return this.rotateOnAxis(eu,e)}translateOnAxis(e,t){return Kh.copy(e).applyQuaternion(this.quaternion),this.position.add(Kh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qh,e)}translateY(e){return this.translateOnAxis(jh,e)}translateZ(e){return this.translateOnAxis(eu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?pa.copy(e):pa.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(ar,pa,this.up):ii.lookAt(pa,ar,this.up),this.quaternion.setFromRotationMatrix(ii),s&&(ii.extractRotation(s.matrixWorld),ds.setFromRotationMatrix(ii),this.quaternion.premultiply(ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ue("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tu),ps.child=e,this.dispatchEvent(ps),ps.child=null):Ue("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qd),Wl.child=e,this.dispatchEvent(Wl),Wl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tu),ps.child=e,this.dispatchEvent(ps),ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,e,$d),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,Kd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Jt.DEFAULT_UP=new I(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var st=class extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}},jd={type:"move"},Us=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new st,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new st,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new st,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new st;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},nf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},ma={h:0,s:0,l:0};function Xl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Fe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=et.workingColorSpace){if(e=zc(e,1),t=Ze(t,0,1),i=Ze(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Xl(a,r,e+1/3),this.g=Xl(a,r,e),this.b=Xl(a,r,e-1/3)}return et.colorSpaceToWorking(this,s),this}setStyle(e,t=Dt){function i(r){r!==void 0&&parseFloat(r)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ne("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){let i=nf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}copyLinearToSRGB(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return et.workingToColorSpace(jt.copy(this),e),Math.round(Ze(jt.r*255,0,255))*65536+Math.round(Ze(jt.g*255,0,255))*256+Math.round(Ze(jt.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(jt.copy(this),t);let i=jt.r,s=jt.g,r=jt.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Dt){et.workingToColorSpace(jt.copy(this),e);let t=jt.r,i=jt.g,s=jt.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(wi),this.setHSL(wi.h+e,wi.s+t,wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(wi),e.getHSL(ma);let i=gr(wi.h,ma.h,t),s=gr(wi.s,ma.s,t),r=gr(wi.l,ma.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},jt=new Fe;Fe.NAMES=nf;var Er=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Fe(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ar=class extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Dn=new I,si=new I,ql=new I,ri=new I,ms=new I,gs=new I,nu=new I,Yl=new I,Zl=new I,Jl=new I,$l=new wt,Kl=new wt,Ql=new wt,li=class n{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Dn.subVectors(e,t),s.cross(Dn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Dn.subVectors(s,t),si.subVectors(i,t),ql.subVectors(e,t);let a=Dn.dot(Dn),o=Dn.dot(si),l=Dn.dot(ql),c=si.dot(si),h=si.dot(ql),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ri.x),l.addScaledVector(a,ri.y),l.addScaledVector(o,ri.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return $l.setScalar(0),Kl.setScalar(0),Ql.setScalar(0),$l.fromBufferAttribute(e,t),Kl.fromBufferAttribute(e,i),Ql.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector($l,r.x),a.addScaledVector(Kl,r.y),a.addScaledVector(Ql,r.z),a}static isFrontFacing(e,t,i,s){return Dn.subVectors(i,t),si.subVectors(e,t),Dn.cross(si).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),Dn.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;ms.subVectors(s,i),gs.subVectors(r,i),Yl.subVectors(e,i);let l=ms.dot(Yl),c=gs.dot(Yl);if(l<=0&&c<=0)return t.copy(i);Zl.subVectors(e,s);let h=ms.dot(Zl),f=gs.dot(Zl);if(h>=0&&f<=h)return t.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(ms,a);Jl.subVectors(e,r);let d=ms.dot(Jl),g=gs.dot(Jl);if(g>=0&&d<=g)return t.copy(r);let _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(gs,o);let m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return nu.subVectors(r,s),o=(f-h)/(f-h+(d-g)),t.copy(s).addScaledVector(nu,o);let p=1/(m+_+u);return a=_*p,o=u*p,t.copy(i).addScaledVector(ms,a).addScaledVector(gs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Kn=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Nn):Nn.fromBufferAttribute(r,a),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ga.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ga.copy(i.boundingBox)),ga.applyMatrix4(e.matrixWorld),this.union(ga)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(or),_a.subVectors(this.max,or),_s.subVectors(e.a,or),vs.subVectors(e.b,or),ys.subVectors(e.c,or),Ti.subVectors(vs,_s),Ei.subVectors(ys,vs),qi.subVectors(_s,ys);let t=[0,-Ti.z,Ti.y,0,-Ei.z,Ei.y,0,-qi.z,qi.y,Ti.z,0,-Ti.x,Ei.z,0,-Ei.x,qi.z,0,-qi.x,-Ti.y,Ti.x,0,-Ei.y,Ei.x,0,-qi.y,qi.x,0];return!jl(t,_s,vs,ys,_a)||(t=[1,0,0,0,1,0,0,0,1],!jl(t,_s,vs,ys,_a))?!1:(va.crossVectors(Ti,Ei),t=[va.x,va.y,va.z],jl(t,_s,vs,ys,_a))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ai=[new I,new I,new I,new I,new I,new I,new I,new I],Nn=new I,ga=new Kn,_s=new I,vs=new I,ys=new I,Ti=new I,Ei=new I,qi=new I,or=new I,_a=new I,va=new I,Yi=new I;function jl(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Yi.fromArray(n,r);let o=s.x*Math.abs(Yi.x)+s.y*Math.abs(Yi.y)+s.z*Math.abs(Yi.z),l=e.dot(Yi),c=t.dot(Yi),h=i.dot(Yi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Lt=new I,ya=new _e,ep=0,tn=class extends $n{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ep++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Bc,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ya.fromBufferAttribute(this,t),ya.applyMatrix3(e),this.setXY(t,ya.x,ya.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Fn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Rr=class extends tn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Cr=class extends tn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ge=class extends tn{constructor(e,t,i){super(new Float32Array(e),t,i)}},tp=new Kn,lr=new I,ec=new I,Ri=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):tp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lr.subVectors(e,this.center);let t=lr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(lr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ec.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lr.copy(e.center).add(ec)),this.expandByPoint(lr.copy(e.center).sub(ec))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},np=0,Mn=new nt,tc=new Jt,xs=new I,gn=new Kn,cr=new Kn,Xt=new I,Tt=class n extends $n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ed(e)?Cr:Rr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Be().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,t,i){return Mn.makeTranslation(e,t,i),this.applyMatrix4(Mn),this}scale(e,t,i){return Mn.makeScale(e,t,i),this.applyMatrix4(Mn),this}lookAt(e){return tc.lookAt(e),tc.updateMatrix(),this.applyMatrix4(tc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ge(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ri);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];cr.setFromBufferAttribute(o),this.morphTargetsRelative?(Xt.addVectors(gn.min,cr.min),gn.expandByPoint(Xt),Xt.addVectors(gn.max,cr.max),gn.expandByPoint(Xt)):(gn.expandByPoint(cr.min),gn.expandByPoint(cr.max))}gn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Xt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Xt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Xt.fromBufferAttribute(o,c),l&&(xs.fromBufferAttribute(e,c),Xt.add(xs)),s=Math.max(s,i.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new tn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new I,l[v]=new I;let c=new I,h=new I,f=new I,u=new _e,d=new _e,g=new _e,_=new I,m=new I;function p(v,w,R){c.fromBufferAttribute(i,v),h.fromBufferAttribute(i,w),f.fromBufferAttribute(i,R),u.fromBufferAttribute(r,v),d.fromBufferAttribute(r,w),g.fromBufferAttribute(r,R),h.sub(c),f.sub(c),d.sub(u),g.sub(u);let P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(P),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(P),o[v].add(_),o[w].add(_),o[R].add(_),l[v].add(m),l[w].add(m),l[R].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let v=0,w=S.length;v<w;++v){let R=S[v],P=R.start,L=R.count;for(let N=P,D=P+L;N<D;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let E=new I,y=new I,b=new I,M=new I;function A(v){b.fromBufferAttribute(s,v),M.copy(b);let w=o[v];E.copy(w),E.sub(b.multiplyScalar(b.dot(w))).normalize(),y.crossVectors(M,w);let P=y.dot(l[v])<0?-1:1;a.setXYZW(v,E.x,E.y,E.z,P)}for(let v=0,w=S.length;v<w;++v){let R=S[v],P=R.start,L=R.count;for(let N=P,D=P+L;N<D;N+=3)A(e.getX(N+0)),A(e.getX(N+1)),A(e.getX(N+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,f=new I;if(e)for(let u=0,d=e.count;u<d;u+=3){let g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let p=0;p<h;p++)u[g++]=c[d++]}return new tn(u,h,f)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=e(u,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Bc,this.updateRanges=[],this.version=0,this.uuid=ci()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},rn=new I,Fs=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Fn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Fn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Sr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new tn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Sr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},nc=new I,ip=new I,sp=new Be,Un=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=nc.subVectors(i,t).cross(ip.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(nc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||sp.getNormalMatrix(e),s=this.coplanarPoint(nc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},rp=0,ui=class extends $n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=ci(),this.name="",this.type="Material",this.blending=Fi,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bc,this.blendDst=Mc,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oa,this.stencilZFail=Oa,this.stencilZPass=Oa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ne(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ne(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Fe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Un().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new _e().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new _e().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ki=class extends ui{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},bs,hr=new I,Ms=new I,Ss=new I,ws=new _e,ur=new _e,sf=new nt,xa=new I,fr=new I,ba=new I,iu=new _e,ic=new _e,su=new _e,Os=class extends Jt{constructor(e=new Ki){if(super(),this.isSprite=!0,this.type="Sprite",bs===void 0){bs=new Tt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Pr(t,5);bs.setIndex([0,1,2,0,2,3]),bs.setAttribute("position",new Fs(i,3,0,!1)),bs.setAttribute("uv",new Fs(i,2,3,!1))}this.geometry=bs,this.material=e,this.center=new _e(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ue('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ms.setFromMatrixScale(this.matrixWorld),sf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ss.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ms.multiplyScalar(-Ss.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;Ma(xa.set(-.5,-.5,0),Ss,a,Ms,s,r),Ma(fr.set(.5,-.5,0),Ss,a,Ms,s,r),Ma(ba.set(.5,.5,0),Ss,a,Ms,s,r),iu.set(0,0),ic.set(1,0),su.set(1,1);let o=e.ray.intersectTriangle(xa,fr,ba,!1,hr);if(o===null&&(Ma(fr.set(-.5,.5,0),Ss,a,Ms,s,r),ic.set(0,1),o=e.ray.intersectTriangle(xa,ba,fr,!1,hr),o===null))return;let l=e.ray.origin.distanceTo(hr);l<e.near||l>e.far||t.push({distance:l,point:hr.clone(),uv:li.getInterpolation(hr,xa,fr,ba,iu,ic,su,new _e),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ma(n,e,t,i,s,r){ws.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(ur.x=r*ws.x-s*ws.y,ur.y=s*ws.x+r*ws.y):ur.copy(ws),n.copy(e),n.x+=ur.x,n.y+=ur.y,n.applyMatrix4(sf)}var oi=new I,sc=new I,Sa=new I,wa=new I,Ka=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,t),oi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){sc.copy(e).add(t).multiplyScalar(.5),Sa.copy(t).sub(e).normalize(),wa.copy(this.origin).sub(sc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Sa),o=wa.dot(this.direction),l=-wa.dot(Sa),c=wa.lengthSq(),h=Math.abs(1-a*a),f,u,d,g;if(h>0)if(f=a*l-o,u=a*o-l,g=r*h,f>=0)if(u>=-g)if(u<=g){let _=1/h;f*=_,u*=_,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(sc).addScaledVector(Sa,u),d}intersectSphere(e,t){if(e.radius<0)return null;oi.subVectors(e.center,this.origin);let i=oi.dot(this.direction),s=oi.dot(oi)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=e.x-a.x,u=e.y-a.y,d=e.z-a.z,g=t.x-a.x,_=t.y-a.y,m=t.z-a.z,p=i.x-a.x,S=i.y-a.y,E=i.z-a.z,y=Math.abs(l),b=Math.abs(c),M=Math.abs(h),A,v,w,R,P,L,N,D,z,F,X,Q;if(y>=b&&y>=M?(w=l,L=f,z=g,Q=p,l>=0?(A=c,v=h,R=u,P=d,N=_,D=m,F=S,X=E):(A=h,v=c,R=d,P=u,N=m,D=_,F=E,X=S)):b>=M?(w=c,L=u,z=_,Q=S,c>=0?(A=h,v=l,R=d,P=f,N=m,D=g,F=E,X=p):(A=l,v=h,R=f,P=d,N=g,D=m,F=p,X=E)):(w=h,L=d,z=m,Q=E,h>=0?(A=l,v=c,R=f,P=u,N=g,D=_,F=p,X=S):(A=c,v=l,R=u,P=f,N=_,D=g,F=S,X=p)),w===0)return null;let Y=A/w,ee=v/w,ie=1/w,Le=R-Y*L,Pe=P-ee*L,gt=N-Y*z,tt=D-ee*z,ot=F-Y*Q,J=X-ee*Q,ne=ot*tt-J*gt,Me=Le*J-Pe*ot,ze=gt*Pe-tt*Le;if(s){if(ne<0||Me<0||ze<0)return null}else if((ne<0||Me<0||ze<0)&&(ne>0||Me>0||ze>0))return null;let xe=ne+Me+ze;if(xe===0)return null;let Je=ie*(ne*L+Me*z+ze*Q);return(xe>0?Je<0:Je>0)?null:this.at(Je/xe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Sn=class extends ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=Sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ru=new nt,Zi=new Ka,Ta=new Ri,au=new I,Ea=new I,Aa=new I,Ra=new I,rc=new I,Ca=new I,ou=new I,Pa=new I,rt=class extends Jt{constructor(e=new Tt,t=new Sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ca.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(rc.fromBufferAttribute(f,e),a?Ca.addScaledVector(rc,h):Ca.addScaledVector(rc.sub(t),h))}t.add(Ca)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ta.copy(i.boundingSphere),Ta.applyMatrix4(r),Zi.copy(e.ray).recast(e.near),!(Ta.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(Ta,au)===null||Zi.origin.distanceToSquared(au)>(e.far-e.near)**2))&&(ru.copy(r).invert(),Zi.copy(e.ray).applyMatrix4(ru),!(i.boundingBox!==null&&Zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Zi)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let m=u[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),E=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=S,b=E;y<b;y+=3){let M=o.getX(y),A=o.getX(y+1),v=o.getX(y+2);s=Ia(this,p,e,i,c,h,f,M,A,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let S=o.getX(m),E=o.getX(m+1),y=o.getX(m+2);s=Ia(this,a,e,i,c,h,f,S,E,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let m=u[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),E=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=S,b=E;y<b;y+=3){let M=y,A=y+1,v=y+2;s=Ia(this,p,e,i,c,h,f,M,A,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let S=m,E=m+1,y=m+2;s=Ia(this,a,e,i,c,h,f,S,E,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function ap(n,e,t,i,s,r,a,o){let l;if(e.side===Ft?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Ui,o),l===null)return null;Pa.copy(o),Pa.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Pa);return c<t.near||c>t.far?null:{distance:c,point:Pa.clone(),object:n}}function Ia(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Ea),n.getVertexPosition(l,Aa),n.getVertexPosition(c,Ra);let h=ap(n,e,t,i,Ea,Aa,Ra,ou);if(h){let f=new I;li.getBarycoord(ou,Ea,Aa,Ra,f),s&&(h.uv=li.getInterpolatedAttribute(s,o,l,c,f,new _e)),r&&(h.uv1=li.getInterpolatedAttribute(r,o,l,c,f,new _e)),a&&(h.normal=li.getInterpolatedAttribute(a,o,l,c,f,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new I,materialIndex:0};li.getNormal(Ea,Aa,Ra,u.normal),h.face=u,h.barycoord=f}return h}var Qi=class extends an{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Nt,h=Nt,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bs=class extends tn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ts=new nt,lu=new nt,La=[],cu=new Kn,op=new nt,dr=new rt,pr=new Ri,ji=class extends rt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Bs(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,op)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Kn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ts),cu.copy(e.boundingBox).applyMatrix4(Ts),this.boundingBox.union(cu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ri),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ts),pr.copy(e.boundingSphere).applyMatrix4(Ts),this.boundingSphere.union(pr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(dr.geometry=this.geometry,dr.material=this.material,dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pr.copy(this.boundingSphere),pr.applyMatrix4(i),e.ray.intersectsSphere(pr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ts),lu.multiplyMatrices(i,Ts),dr.matrixWorld=lu,dr.raycast(e,La);for(let a=0,o=La.length;a<o;a++){let l=La[a];l.instanceId=r,l.object=this,t.push(l)}La.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Bs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Qi(new Float32Array(s*this.count),s,this.count,Io,Tn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ji=new Ri,lp=new _e(.5,.5),Da=new I,ks=class{constructor(e=new Un,t=new Un,i=new Un,s=new Un,r=new Un,a=new Un){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=On,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],g=r[8],_=r[9],m=r[10],p=r[11],S=r[12],E=r[13],y=r[14],b=r[15];if(s[0].setComponents(c-a,d-h,p-g,b-S).normalize(),s[1].setComponents(c+a,d+h,p+g,b+S).normalize(),s[2].setComponents(c+o,d+f,p+_,b+E).normalize(),s[3].setComponents(c-o,d-f,p-_,b-E).normalize(),i)s[4].setComponents(l,u,m,y).normalize(),s[5].setComponents(c-l,d-u,p-m,b-y).normalize();else if(s[4].setComponents(c-l,d-u,p-m,b-y).normalize(),t===On)s[5].setComponents(c+l,d+u,p+m,b+y).normalize();else if(t===Is)s[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){Ji.center.set(0,0,0);let t=lp.distanceTo(e.center);return Ji.radius=.7071067811865476+t,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Da.x=s.normal.x>0?e.max.x:e.min.x,Da.y=s.normal.y>0?e.max.y:e.min.y,Da.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Da)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ir=class extends an{constructor(e=[],t=Oi,i,s,r,a,o,l,c,h){super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Qn=class extends an{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ci=class extends an{constructor(e,t,i=zn,s,r,a,o=Nt,l=Nt,c,h=Jn,f=1){if(h!==Jn&&h!==ki)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ns(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Qa=class extends Ci{constructor(e,t=zn,i=Oi,s,r,a=Nt,o=Nt,l,c=Jn){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Lr=class extends an{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Pi=class n extends Tt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,d=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ge(c,3)),this.setAttribute("normal",new Ge(h,3)),this.setAttribute("uv",new Ge(f,2));function g(_,m,p,S,E,y,b,M,A,v,w){let R=y/A,P=b/v,L=y/2,N=b/2,D=M/2,z=A+1,F=v+1,X=0,Q=0,Y=new I;for(let ee=0;ee<F;ee++){let ie=ee*P-N;for(let Le=0;Le<z;Le++){let Pe=Le*R-L;Y[_]=Pe*S,Y[m]=ie*E,Y[p]=D,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[m]=0,Y[p]=M>0?1:-1,h.push(Y.x,Y.y,Y.z),f.push(Le/A),f.push(1-ee/v),X+=1}}for(let ee=0;ee<v;ee++)for(let ie=0;ie<A;ie++){let Le=u+ie+z*ee,Pe=u+ie+z*(ee+1),gt=u+(ie+1)+z*(ee+1),tt=u+(ie+1)+z*ee;l.push(Le,Pe,tt),l.push(Pe,gt,tt),Q+=6}o.addGroup(d,Q,w),d+=Q,u+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Ii=class n extends Tt{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,f=Math.PI/2*e,u=t,d=2*f+u,g=i*2+r,_=s+1,m=new I,p=new I;for(let S=0;S<=g;S++){let E=0,y=0,b=0,M=0;if(S<=i){let w=S/i,R=w*Math.PI/2;y=-h-e*Math.cos(R),b=e*Math.sin(R),M=-e*Math.cos(R),E=w*f}else if(S<=i+r){let w=(S-i)/r;y=-h+w*t,b=e,M=0,E=f+w*u}else{let w=(S-i-r)/i,R=w*Math.PI/2;y=h+e*Math.sin(R),b=e*Math.cos(R),M=e*Math.sin(R),E=f+u+w*f}let A=Math.max(0,Math.min(1,E/d)),v=0;S===0?v=.5/s:S===g&&(v=-.5/s);for(let w=0;w<=s;w++){let R=w/s,P=R*Math.PI*2,L=Math.sin(P),N=Math.cos(P);p.x=-b*N,p.y=y,p.z=b*L,o.push(p.x,p.y,p.z),m.set(-b*N,M,b*L),m.normalize(),l.push(m.x,m.y,m.z),c.push(R+v,A)}if(S>0){let w=(S-1)*_;for(let R=0;R<s;R++){let P=w+R,L=w+R+1,N=S*_+R,D=S*_+R+1;a.push(P,L,N),a.push(L,D,N)}}}this.setIndex(a),this.setAttribute("position",new Ge(o,3)),this.setAttribute("normal",new Ge(l,3)),this.setAttribute("uv",new Ge(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},zs=class n extends Tt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new I,h=new _e;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){let d=i+f/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Ge(a,3)),this.setAttribute("normal",new Ge(o,3)),this.setAttribute("uv",new Ge(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},on=class n extends Tt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],g=0,_=[],m=i/2,p=0;S(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Ge(f,3)),this.setAttribute("normal",new Ge(u,3)),this.setAttribute("uv",new Ge(d,2));function S(){let y=new I,b=new I,M=0,A=(t-e)/i;for(let v=0;v<=r;v++){let w=[],R=v/r,P=R*(t-e)+e;for(let L=0;L<=s;L++){let N=L/s,D=N*l+o,z=Math.sin(D),F=Math.cos(D);b.x=P*z,b.y=-R*i+m,b.z=P*F,f.push(b.x,b.y,b.z),y.set(z,A,F).normalize(),u.push(y.x,y.y,y.z),d.push(N,1-R),w.push(g++)}_.push(w)}for(let v=0;v<s;v++)for(let w=0;w<r;w++){let R=_[w][v],P=_[w+1][v],L=_[w+1][v+1],N=_[w][v+1];(e>0||w!==0)&&(h.push(R,P,N),M+=3),(t>0||w!==r-1)&&(h.push(P,L,N),M+=3)}c.addGroup(p,M,0),p+=M}function E(y){let b=g,M=new _e,A=new I,v=0,w=y===!0?e:t,R=y===!0?1:-1;for(let L=1;L<=s;L++)f.push(0,m*R,0),u.push(0,R,0),d.push(.5,.5),g++;let P=g;for(let L=0;L<=s;L++){let D=L/s*l+o,z=Math.cos(D),F=Math.sin(D);A.x=w*F,A.y=m*R,A.z=w*z,f.push(A.x,A.y,A.z),u.push(0,R,0),M.x=z*.5+.5,M.y=F*.5*R+.5,d.push(M.x,M.y),g++}for(let L=0;L<s;L++){let N=b+L,D=P+L;y===!0?h.push(D,D+1,N):h.push(D+1,D,N),v+=3}c.addGroup(p,v,y===!0?1:2),p+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ne("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],u=i[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new _e:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new I,s=[],r=[],a=[],o=new I,l=new nt;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Ze(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Ze(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Dr=class extends wn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new _e){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ja=class extends Dr{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Gc(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var hu=new I,uu=new I,ac=new Gc,oc=new Gc,lc=new Gc,eo=class extends wn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new I){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(uu.subVectors(s[0],s[1]).add(s[0]),c=uu);let f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(hu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=hu),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),ac.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,g,_,m),oc.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,g,_,m),lc.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(ac.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),oc.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),lc.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return i.set(ac.calc(l),oc.calc(l),lc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function fu(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function cp(n,e){let t=1-n;return t*t*e}function hp(n,e){return 2*(1-n)*n*e}function up(n,e){return n*n*e}function _r(n,e,t,i){return cp(n,e)+hp(n,t)+up(n,i)}function fp(n,e){let t=1-n;return t*t*t*e}function dp(n,e){let t=1-n;return 3*t*t*n*e}function pp(n,e){return 3*(1-n)*n*n*e}function mp(n,e){return n*n*n*e}function vr(n,e,t,i,s){return fp(n,e)+dp(n,t)+pp(n,i)+mp(n,s)}var to=class extends wn{constructor(e=new _e,t=new _e,i=new _e,s=new _e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new _e){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(vr(e,s.x,r.x,a.x,o.x),vr(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},no=class extends wn{constructor(e=new I,t=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(vr(e,s.x,r.x,a.x,o.x),vr(e,s.y,r.y,a.y,o.y),vr(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},io=class extends wn{constructor(e=new _e,t=new _e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new _e){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new _e){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},so=class extends wn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ro=class extends wn{constructor(e=new _e,t=new _e,i=new _e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new _e){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(_r(e,s.x,r.x,a.x),_r(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},es=class extends wn{constructor(e=new I,t=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new I){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(_r(e,s.x,r.x,a.x),_r(e,s.y,r.y,a.y),_r(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ao=class extends wn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new _e){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return i.set(fu(o,l.x,c.x,h.x,f.x),fu(o,l.y,c.y,h.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new _e().fromArray(s))}return this}},gp=Object.freeze({__proto__:null,ArcCurve:ja,CatmullRomCurve3:eo,CubicBezierCurve:to,CubicBezierCurve3:no,EllipseCurve:Dr,LineCurve:io,LineCurve3:so,QuadraticBezierCurve:ro,QuadraticBezierCurve3:es,SplineCurve:ao});var Gs=class n extends Tt{constructor(e=[new _e(0,-.5),new _e(.5,0),new _e(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Ze(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,f=new I,u=new _e,d=new I,g=new I,_=new I,m=0,p=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:m=e[S+1].x-e[S].x,p=e[S+1].y-e[S].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[S+1].x-e[S].x,p=e[S+1].y-e[S].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(g)}for(let S=0;S<=t;S++){let E=i+S*h*s,y=Math.sin(E),b=Math.cos(E);for(let M=0;M<=e.length-1;M++){f.x=e[M].x*y,f.y=e[M].y,f.z=e[M].x*b,a.push(f.x,f.y,f.z),u.x=S/t,u.y=M/(e.length-1),o.push(u.x,u.y);let A=l[3*M+0]*y,v=l[3*M+1],w=l[3*M+0]*b;c.push(A,v,w)}}for(let S=0;S<t;S++)for(let E=0;E<e.length-1;E++){let y=E+S*e.length,b=y,M=y+e.length,A=y+e.length+1,v=y+1;r.push(b,M,v),r.push(A,v,M)}this.setIndex(r),this.setAttribute("position",new Ge(a,3)),this.setAttribute("uv",new Ge(o,2)),this.setAttribute("normal",new Ge(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var jn=class n extends Tt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,f=e/o,u=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let S=p*u-a;for(let E=0;E<c;E++){let y=E*f-r;g.push(y,-S,0),_.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){let E=S+c*p,y=S+c*(p+1),b=S+1+c*(p+1),M=S+1+c*p;d.push(E,y,M),d.push(y,b,M)}this.setIndex(d),this.setAttribute("position",new Ge(g,3)),this.setAttribute("normal",new Ge(_,3)),this.setAttribute("uv",new Ge(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ut=class n extends Tt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new I,u=new I,d=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){let S=[],E=p/i,y=a+E*o,b=e*Math.cos(y),M=Math.sqrt(e*e-b*b),A=0;p===0&&a===0?A=.5/t:p===i&&l===Math.PI&&(A=-.5/t);for(let v=0;v<=t;v++){let w=v/t,R=s+w*r;f.x=-M*Math.cos(R),f.y=b,f.z=M*Math.sin(R),g.push(f.x,f.y,f.z),u.copy(f).normalize(),_.push(u.x,u.y,u.z),m.push(w+A,1-E),S.push(c++)}h.push(S)}for(let p=0;p<i;p++)for(let S=0;S<t;S++){let E=h[p][S+1],y=h[p][S],b=h[p+1][S],M=h[p+1][S+1];(p!==0||a>0)&&d.push(E,y,M),(p!==i-1||l<Math.PI)&&d.push(y,b,M)}this.setIndex(d),this.setAttribute("position",new Ge(g,3)),this.setAttribute("normal",new Ge(_,3)),this.setAttribute("uv",new Ge(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ts=class n extends Tt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],f=[],u=new I,d=new I,g=new I;for(let _=0;_<=i;_++){let m=a+_/i*o;for(let p=0;p<=s;p++){let S=p/s*r;d.x=(e+t*Math.cos(m))*Math.cos(S),d.y=(e+t*Math.cos(m))*Math.sin(S),d.z=t*Math.sin(m),c.push(d.x,d.y,d.z),u.x=e*Math.cos(S),u.y=e*Math.sin(S),g.subVectors(d,u).normalize(),h.push(g.x,g.y,g.z),f.push(p/s),f.push(_/i)}}for(let _=1;_<=i;_++)for(let m=1;m<=s;m++){let p=(s+1)*_+m-1,S=(s+1)*(_-1)+m-1,E=(s+1)*(_-1)+m,y=(s+1)*_+m;l.push(p,S,y),l.push(S,E,y)}this.setIndex(l),this.setAttribute("position",new Ge(c,3)),this.setAttribute("normal",new Ge(h,3)),this.setAttribute("uv",new Ge(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Nr=class n extends Tt{constructor(e=new es(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new I,l=new I,c=new _e,h=new I,f=[],u=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Ge(f,3)),this.setAttribute("normal",new Ge(u,3)),this.setAttribute("uv",new Ge(d,2));function _(){for(let E=0;E<t;E++)m(E);m(r===!1?t:0),S(),p()}function m(E){h=e.getPointAt(E/t,h);let y=a.normals[E],b=a.binormals[E];for(let M=0;M<=s;M++){let A=M/s*Math.PI*2,v=Math.sin(A),w=-Math.cos(A);l.x=w*y.x+v*b.x,l.y=w*y.y+v*b.y,l.z=w*y.z+v*b.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,f.push(o.x,o.y,o.z)}}function p(){for(let E=1;E<=t;E++)for(let y=1;y<=s;y++){let b=(s+1)*(E-1)+(y-1),M=(s+1)*E+(y-1),A=(s+1)*E+y,v=(s+1)*(E-1)+y;g.push(b,M,v),g.push(M,A,v)}}function S(){for(let E=0;E<=t;E++)for(let y=0;y<=s;y++)c.x=E/t,c.y=y/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new gp[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function ss(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(du(s))s.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(du(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function nn(n){let e={};for(let t=0;t<n.length;t++){let i=ss(n[t]);for(let s in i)e[s]=i[s]}return e}function du(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function _p(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Vc(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}var rf={clone:ss,merge:nn},vp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,kt=class extends ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vp,this.fragmentShader=yp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ss(e.uniforms),this.uniformsGroups=_p(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Fe().setHex(s.value);break;case"v2":this.uniforms[i].value=new _e().fromArray(s.value);break;case"v3":this.uniforms[i].value=new I().fromArray(s.value);break;case"v4":this.uniforms[i].value=new wt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Be().fromArray(s.value);break;case"m4":this.uniforms[i].value=new nt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},oo=class extends kt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Vs=class extends ui{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Fe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ul,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var lo=class extends ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},co=class extends ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Es(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function cc(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Li=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ho=class extends Li{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fc,endingEnd:fc}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case dc:r=e,o=2*t-i;break;case pc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case dc:a=e,l=2*i-t;break;case pc:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,p=-u*m+2*u*_-u*g,S=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*g+1,E=(-1-d)*m+(1.5+d)*_+.5*g,y=d*m-d*_;for(let b=0;b!==o;++b)r[b]=p*a[h+b]+S*a[c+b]+E*a[l+b]+y*a[f+b];return r}},uo=class extends Li{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},fo=class extends Li{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},po=class extends Li{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(i-t)/(s-t),_=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*_+a[l+m]*g;return r}let u=o*2,d=e-1;for(let g=0;g!==o;++g){let _=a[c+g],m=a[l+g],p=d*u+g*2,S=f[p],E=f[p+1],y=e*u+g*2,b=h[y],M=h[y+1],A=bp(i,t,S,b,s);r[g]=af(A,_,E,M,m)}return r}};function af(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function xp(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function bp(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=af(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let l=xp(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var vn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Es(t,this.TimeBufferType),this.values=Es(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Es(e.times,Array),values:Es(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),cc(e.settings)&&(i.settings={inTangents:Es(e.settings.inTangents,Array),outTangents:Es(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new fo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new uo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ho(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new po(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case yr:t=this.InterpolantFactoryMethodDiscrete;break;case Ya:t=this.InterpolantFactoryMethodLinear;break;case Fa:t=this.InterpolantFactoryMethodSmooth;break;case uc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ne("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yr;case this.InterpolantFactoryMethodLinear:return Ya;case this.InterpolantFactoryMethodSmooth:return Fa;case this.InterpolantFactoryMethodBezier:return uc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;cc(this.settings)&&(pu(this.settings.inTangents,e),pu(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ue("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ue("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ue("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ue("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Ad(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ue("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Fa,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*i,u=f-i,d=f+i;for(let g=0;g!==i;++g){let _=t[f+g];if(_!==t[u+g]||_!==t[d+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*i,u=a*i;for(let d=0;d!==i;++d)t[u+d]=t[f+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,cc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function pu(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}vn.prototype.ValueTypeName="";vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=Ya;var Di=class extends vn{constructor(e,t,i){super(e,t,i)}};Di.prototype.ValueTypeName="bool";Di.prototype.ValueBufferType=Array;Di.prototype.DefaultInterpolation=yr;Di.prototype.InterpolantFactoryMethodLinear=void 0;Di.prototype.InterpolantFactoryMethodSmooth=void 0;var mo=class extends vn{constructor(e,t,i,s){super(e,t,i,s)}};mo.prototype.ValueTypeName="color";var go=class extends vn{constructor(e,t,i,s){super(e,t,i,s)}};go.prototype.ValueTypeName="number";var _o=class extends Li{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)_n.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ur=class extends vn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new _o(this.times,this.values,this.getValueSize(),e)}};Ur.prototype.ValueTypeName="quaternion";Ur.prototype.InterpolantFactoryMethodSmooth=void 0;var Ni=class extends vn{constructor(e,t,i){super(e,t,i)}};Ni.prototype.ValueTypeName="string";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=yr;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var vo=class extends vn{constructor(e,t,i,s){super(e,t,i,s)}};vo.prototype.ValueTypeName="vector";var yo=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},of=new yo,xo=class{constructor(e){this.manager=e!==void 0?e:of,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};xo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Fr=class extends Jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Or=class extends Fr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},hc=new nt,mu=new I,gu=new I,bo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ks,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;mu.setFromMatrixPosition(e.matrixWorld),t.position.copy(mu),gu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){hc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(hc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Is||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(hc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Na=new I,Ua=new _n,Yn=new I,Br=class extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Na,Ua,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Na,Ua,Yn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Na,Ua,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Na,Ua,Yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ai=new I,_u=new _e,vu=new _e,en=class extends Br{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(mr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ds*2*Math.atan(Math.tan(mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z)}getViewSize(e,t){return this.getViewBounds(e,_u,vu),t.subVectors(vu,_u)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(mr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Hs=class extends Br{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},mc=class extends bo{constructor(){super(new Hs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},kr=class extends Fr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.shadow=new mc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var As=-90,Rs=1,Mo=class extends Jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new en(As,Rs,e,t);s.layers=this.layers,this.add(s);let r=new en(As,Rs,e,t);r.layers=this.layers,this.add(r);let a=new en(As,Rs,e,t);a.layers=this.layers,this.add(a);let o=new en(As,Rs,e,t);o.layers=this.layers,this.add(o);let l=new en(As,Rs,e,t);l.layers=this.layers,this.add(l);let c=new en(As,Rs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===On)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Is)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},So=class extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Hc="\\[\\]\\.:\\/",Mp=new RegExp("["+Hc+"]","g"),Wc="[^"+Hc+"]",Sp="[^"+Hc.replace("\\.","")+"]",wp=/((?:WC+[\/:])*)/.source.replace("WC",Wc),Tp=/(WCOD+)?/.source.replace("WCOD",Sp),Ep=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wc),Ap=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wc),Rp=new RegExp("^"+wp+Tp+Ep+Ap+"$"),Cp=["material","materials","bones","map"],gc=class{constructor(e,t,i){let s=i||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},bt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Mp,"")}static parseTrackName(e){let t=Rp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Cp.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ne("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ue("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ue("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ue("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ue("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ue("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ue("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};bt.Composite=gc;bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var U3=new Float32Array(1);var $c=class $c{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};$c.prototype.isMatrix2=!0;var _c=$c;function Xc(n,e,t,i){let s=Pp(i);switch(t){case Fc:return n*e;case Io:return n*e/s.components*s.byteLength;case Lo:return n*e/s.components*s.byteLength;case zi:return n*e*2/s.components*s.byteLength;case Do:return n*e*2/s.components*s.byteLength;case Oc:return n*e*3/s.components*s.byteLength;case fn:return n*e*4/s.components*s.byteLength;case No:return n*e*4/s.components*s.byteLength;case Hr:case Wr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Xr:case qr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fo:case Bo:return Math.max(n,16)*Math.max(e,8)/4;case Uo:case Oo:return Math.max(n,8)*Math.max(e,8)/2;case ko:case zo:case Vo:case Ho:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Go:case Yr:case Wo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Yo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Zo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Jo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case $o:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ko:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Qo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case jo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case el:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case tl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case nl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case il:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case sl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case rl:case al:case ol:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ll:case cl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Zr:case hl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Pp(n){switch(n){case un:case Lc:return{byteLength:1,components:1};case qs:case Dc:case Gn:return{byteLength:2,components:1};case Co:case Po:return{byteLength:2,components:4};case zn:case Ro:case Tn:return{byteLength:4,components:1};case Nc:case Uc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Cf(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Up(n){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){let h=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){let g=f[u],_=f[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,f[u]=_)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){let _=f[d];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Fp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Op=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Bp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Xp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Jp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$p=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,t0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,n0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,i0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,s0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,r0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,a0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,o0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,l0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,c0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,h0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,u0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f0="gl_FragColor = linearToOutputTexel( gl_FragColor );",d0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,p0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,m0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,g0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,v0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,y0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,x0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,b0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,M0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,S0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,w0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,T0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,E0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,A0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,R0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,C0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,P0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,I0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,L0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,D0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,N0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,U0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,F0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,O0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,B0=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,k0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,z0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,H0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,W0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,X0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,q0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Z0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,J0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,K0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,j0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,t1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,n1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,r1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,a1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,o1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,l1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,c1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,h1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,u1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,f1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,d1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,p1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,m1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,g1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,v1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,y1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,x1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,b1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,M1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,S1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,w1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,T1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,E1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,A1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,R1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,C1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,P1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,I1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,L1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,D1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,N1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,U1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,F1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,O1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,H1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,W1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,X1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Y1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,J1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,K1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,em=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,im=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,am=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,om=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,um=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:Fp,alphahash_pars_fragment:Op,alphamap_fragment:Bp,alphamap_pars_fragment:kp,alphatest_fragment:zp,alphatest_pars_fragment:Gp,aomap_fragment:Vp,aomap_pars_fragment:Hp,batching_pars_vertex:Wp,batching_vertex:Xp,begin_vertex:qp,beginnormal_vertex:Yp,bsdfs:Zp,iridescence_fragment:Jp,bumpmap_pars_fragment:$p,clipping_planes_fragment:Kp,clipping_planes_pars_fragment:Qp,clipping_planes_pars_vertex:jp,clipping_planes_vertex:e0,color_fragment:t0,color_pars_fragment:n0,color_pars_vertex:i0,color_vertex:s0,common:r0,cube_uv_reflection_fragment:a0,defaultnormal_vertex:o0,displacementmap_pars_vertex:l0,displacementmap_vertex:c0,emissivemap_fragment:h0,emissivemap_pars_fragment:u0,colorspace_fragment:f0,colorspace_pars_fragment:d0,envmap_fragment:p0,envmap_common_pars_fragment:m0,envmap_pars_fragment:g0,envmap_pars_vertex:_0,envmap_physical_pars_fragment:R0,envmap_vertex:v0,fog_vertex:y0,fog_pars_vertex:x0,fog_fragment:b0,fog_pars_fragment:M0,gradientmap_pars_fragment:S0,lightmap_pars_fragment:w0,lights_lambert_fragment:T0,lights_lambert_pars_fragment:E0,lights_pars_begin:A0,lights_toon_fragment:C0,lights_toon_pars_fragment:P0,lights_phong_fragment:I0,lights_phong_pars_fragment:L0,lights_physical_fragment:D0,lights_physical_pars_fragment:N0,lights_fragment_begin:U0,lights_fragment_maps:F0,lights_fragment_end:O0,lightprobes_pars_fragment:B0,logdepthbuf_fragment:k0,logdepthbuf_pars_fragment:z0,logdepthbuf_pars_vertex:G0,logdepthbuf_vertex:V0,map_fragment:H0,map_pars_fragment:W0,map_particle_fragment:X0,map_particle_pars_fragment:q0,metalnessmap_fragment:Y0,metalnessmap_pars_fragment:Z0,morphinstance_vertex:J0,morphcolor_vertex:$0,morphnormal_vertex:K0,morphtarget_pars_vertex:Q0,morphtarget_vertex:j0,normal_fragment_begin:e1,normal_fragment_maps:t1,normal_pars_fragment:n1,normal_pars_vertex:i1,normal_vertex:s1,normalmap_pars_fragment:r1,clearcoat_normal_fragment_begin:a1,clearcoat_normal_fragment_maps:o1,clearcoat_pars_fragment:l1,iridescence_pars_fragment:c1,opaque_fragment:h1,packing:u1,premultiplied_alpha_fragment:f1,project_vertex:d1,dithering_fragment:p1,dithering_pars_fragment:m1,roughnessmap_fragment:g1,roughnessmap_pars_fragment:_1,shadowmap_pars_fragment:v1,shadowmap_pars_vertex:y1,shadowmap_vertex:x1,shadowmask_pars_fragment:b1,skinbase_vertex:M1,skinning_pars_vertex:S1,skinning_vertex:w1,skinnormal_vertex:T1,specularmap_fragment:E1,specularmap_pars_fragment:A1,tonemapping_fragment:R1,tonemapping_pars_fragment:C1,transmission_fragment:P1,transmission_pars_fragment:I1,uv_pars_fragment:L1,uv_pars_vertex:D1,uv_vertex:N1,worldpos_vertex:U1,background_vert:F1,background_frag:O1,backgroundCube_vert:B1,backgroundCube_frag:k1,cube_vert:z1,cube_frag:G1,depth_vert:V1,depth_frag:H1,distance_vert:W1,distance_frag:X1,equirect_vert:q1,equirect_frag:Y1,linedashed_vert:Z1,linedashed_frag:J1,meshbasic_vert:$1,meshbasic_frag:K1,meshlambert_vert:Q1,meshlambert_frag:j1,meshmatcap_vert:em,meshmatcap_frag:tm,meshnormal_vert:nm,meshnormal_frag:im,meshphong_vert:sm,meshphong_frag:rm,meshphysical_vert:am,meshphysical_frag:om,meshtoon_vert:lm,meshtoon_frag:cm,points_vert:hm,points_frag:um,shadow_vert:fm,shadow_frag:dm,sprite_vert:pm,sprite_frag:mm},de={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},ni={basic:{uniforms:nn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:nn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Fe(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:nn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:nn([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:nn([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:nn([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:nn([de.points,de.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:nn([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:nn([de.common,de.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:nn([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:nn([de.sprite,de.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:nn([de.common,de.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:nn([de.lights,de.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};ni.physical={uniforms:nn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};var ml={r:0,b:0,g:0},gm=new nt,Pf=new Be;Pf.set(-1,0,0,0,1,0,0,0,1);function _m(n,e,t,i,s,r){let a=new Fe(0),o=s===!0?0:1,l,c,h=null,f=0,u=null;function d(S){let E=S.isScene===!0?S.background:null;if(E&&E.isTexture){let y=S.backgroundBlurriness>0;E=e.get(E,y)}return E}function g(S){let E=!1,y=d(S);y===null?m(a,o):y&&y.isColor&&(m(y,1),E=!0);let b=n.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(S,E){let y=d(E);y&&(y.isCubeTexture||y.mapping===Gr)?(c===void 0&&(c=new rt(new Pi(1,1,1),new kt({name:"BackgroundCubeMaterial",uniforms:ss(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,M,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(gm.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Pf),c.material.toneMapped=et.getTransfer(y.colorSpace)!==ut,(h!==y||f!==y.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,u=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new rt(new jn(2,2),new kt({name:"BackgroundMaterial",uniforms:ss(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=et.getTransfer(y.colorSpace)!==ut,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,u=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,E){S.getRGB(ml,Vc(n)),t.buffers.color.setClear(ml.r,ml.g,ml.b,E,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,E=1){a.set(S),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:g,addToRenderList:_,dispose:p}}function vm(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(P,L,N,D,z){let F=!1,X=f(P,D,N,L);r!==X&&(r=X,c(r.object)),F=d(P,D,N,z),F&&g(P,D,N,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,y(P,L,N,D),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return n.createVertexArray()}function c(P){return n.bindVertexArray(P)}function h(P){return n.deleteVertexArray(P)}function f(P,L,N,D){let z=D.wireframe===!0,F=i[L.id];F===void 0&&(F={},i[L.id]=F);let X=P.isInstancedMesh===!0?P.id:0,Q=F[X];Q===void 0&&(Q={},F[X]=Q);let Y=Q[N.id];Y===void 0&&(Y={},Q[N.id]=Y);let ee=Y[z];return ee===void 0&&(ee=u(l()),Y[z]=ee),ee}function u(P){let L=[],N=[],D=[];for(let z=0;z<t;z++)L[z]=0,N[z]=0,D[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:D,object:P,attributes:{},index:null}}function d(P,L,N,D){let z=r.attributes,F=L.attributes,X=0,Q=N.getAttributes();for(let Y in Q)if(Q[Y].location>=0){let ie=z[Y],Le=F[Y];if(Le===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(Le=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(Le=P.instanceColor)),ie===void 0||ie.attribute!==Le||Le&&ie.data!==Le.data)return!0;X++}return r.attributesNum!==X||r.index!==D}function g(P,L,N,D){let z={},F=L.attributes,X=0,Q=N.getAttributes();for(let Y in Q)if(Q[Y].location>=0){let ie=F[Y];ie===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(ie=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(ie=P.instanceColor));let Le={};Le.attribute=ie,ie&&ie.data&&(Le.data=ie.data),z[Y]=Le,X++}r.attributes=z,r.attributesNum=X,r.index=D}function _(){let P=r.newAttributes;for(let L=0,N=P.length;L<N;L++)P[L]=0}function m(P){p(P,0)}function p(P,L){let N=r.newAttributes,D=r.enabledAttributes,z=r.attributeDivisors;N[P]=1,D[P]===0&&(n.enableVertexAttribArray(P),D[P]=1),z[P]!==L&&(n.vertexAttribDivisor(P,L),z[P]=L)}function S(){let P=r.newAttributes,L=r.enabledAttributes;for(let N=0,D=L.length;N<D;N++)L[N]!==P[N]&&(n.disableVertexAttribArray(N),L[N]=0)}function E(P,L,N,D,z,F,X){X===!0?n.vertexAttribIPointer(P,L,N,z,F):n.vertexAttribPointer(P,L,N,D,z,F)}function y(P,L,N,D){_();let z=D.attributes,F=N.getAttributes(),X=L.defaultAttributeValues;for(let Q in F){let Y=F[Q];if(Y.location>=0){let ee=z[Q];if(ee===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(ee=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(ee=P.instanceColor)),ee!==void 0){let ie=ee.normalized,Le=ee.itemSize,Pe=e.get(ee);if(Pe===void 0)continue;let gt=Pe.buffer,tt=Pe.type,ot=Pe.bytesPerElement,J=tt===n.INT||tt===n.UNSIGNED_INT||ee.gpuType===Ro;if(ee.isInterleavedBufferAttribute){let ne=ee.data,Me=ne.stride,ze=ee.offset;if(ne.isInstancedInterleavedBuffer){for(let xe=0;xe<Y.locationSize;xe++)p(Y.location+xe,ne.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let xe=0;xe<Y.locationSize;xe++)m(Y.location+xe);n.bindBuffer(n.ARRAY_BUFFER,gt);for(let xe=0;xe<Y.locationSize;xe++)E(Y.location+xe,Le/Y.locationSize,tt,ie,Me*ot,(ze+Le/Y.locationSize*xe)*ot,J)}else{if(ee.isInstancedBufferAttribute){for(let ne=0;ne<Y.locationSize;ne++)p(Y.location+ne,ee.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ne=0;ne<Y.locationSize;ne++)m(Y.location+ne);n.bindBuffer(n.ARRAY_BUFFER,gt);for(let ne=0;ne<Y.locationSize;ne++)E(Y.location+ne,Le/Y.locationSize,tt,ie,Le*ot,Le/Y.locationSize*ne*ot,J)}}else if(X!==void 0){let ie=X[Q];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(Y.location,ie);break;case 3:n.vertexAttrib3fv(Y.location,ie);break;case 4:n.vertexAttrib4fv(Y.location,ie);break;default:n.vertexAttrib1fv(Y.location,ie)}}}}S()}function b(){w();for(let P in i){let L=i[P];for(let N in L){let D=L[N];for(let z in D){let F=D[z];for(let X in F)h(F[X].object),delete F[X];delete D[z]}}delete i[P]}}function M(P){if(i[P.id]===void 0)return;let L=i[P.id];for(let N in L){let D=L[N];for(let z in D){let F=D[z];for(let X in F)h(F[X].object),delete F[X];delete D[z]}}delete i[P.id]}function A(P){for(let L in i){let N=i[L];for(let D in N){let z=N[D];if(z[P.id]===void 0)continue;let F=z[P.id];for(let X in F)h(F[X].object),delete F[X];delete z[P.id]}}}function v(P){for(let L in i){let N=i[L],D=P.isInstancedMesh===!0?P.id:0,z=N[D];if(z!==void 0){for(let F in z){let X=z[F];for(let Q in X)h(X[Q].object),delete X[Q];delete z[F]}delete N[D],Object.keys(N).length===0&&delete i[L]}}}function w(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:M,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function ym(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function xm(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==fn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let v=A===Gn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==un&&A!==Tn&&!v&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ne("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),M=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:y,maxSamples:b,samples:M}}function bm(n){let e=this,t=null,i=0,s=!1,r=!1,a=new Un,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){let g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let S=r?0:i,E=S*4,y=p.clippingState||null;l.value=y,y=h(g,u,E,d);for(let b=0;b!==E;++b)y[b]=t[b];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,u,d,g){let _=f!==null?f.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=d+_*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,y=d;E!==_;++E,y+=4)a.copy(f[E]).applyMatrix4(S,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var Js=4,Mm=6,Sm=20,wm=256,Jr=new Hs,lf=new Fe,Kc=null,Qc=0,jc=0,eh=!1,Tm=new I,rs=new I,_l=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=Tm}=r;Kc=this._renderer.getRenderTarget(),Qc=this._renderer.getActiveCubeFace(),jc=this._renderer.getActiveMipmapLevel(),eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Kc,Qc,jc),this._renderer.xr.enabled=eh,e.scissorTest=!1,Zs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Oi||e.mapping===is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kc=this._renderer.getRenderTarget(),Qc=this._renderer.getActiveCubeFace(),jc=this._renderer.getActiveMipmapLevel(),eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Gn,format:fn,colorSpace:xr,depthBuffer:!1},s=cf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cf(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Em(r)),this._blurMaterial=Rm(r,e,t),this._ggxMaterial=Am(r,e,t)}return s}_compileMaterial(e){let t=new rt(new Tt,e);this._renderer.compile(t,Jr)}_sceneToCubeUV(e,t,i,s,r){let l=new en(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(lf),f.toneMapping=kn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new rt(new Pi,new Sn({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,p=!1,S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,p=!0):(m.color.copy(lf),p=!0);for(let E=0;E<6;E++){let y=E%3;y===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):y===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));let b=this._cubeSize;Zs(s,y*b,E>2?b:0,b,b),f.setRenderTarget(s),p&&f.render(_,l),f.render(e,l)}f.toneMapping=d,f.autoClear=u,e.background=S}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Oi||e.mapping===is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=uf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Zs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Jr)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=c*1.25,d=f*u,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-Js?i-g+Js:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=g-t,Zs(r,m,p,3*_,2*_),s.setRenderTarget(r),s.render(o,Jr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Zs(e,m,p,3*_,2*_),s.setRenderTarget(e),s.render(o,Jr)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],f=3*h*(s>this._lodMax-Js?s-this._lodMax+Js:0),u=4*(this._cubeSize-h);Zs(t,f,u,3*h,2*h),a.setRenderTarget(t),a.render(l,Jr)}};function Em(n){let e=[],t=[],i=n,s=n-Js+1+Mm;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,d=3,g=new Float32Array(d*u*f),_=new Float32Array(d*u*f);for(let p=0;p<f;p++){let S=p%3*2/3-1,E=p>2?0:-1,y=[S,E,0,S+2/3,E,0,S+2/3,E+1,0,S,E,0,S+2/3,E+1,0,S,E+1,0];g.set(y,d*u*p);for(let b=0;b<u;b++){let M=h[b*2]*2-1,A=h[b*2+1]*2-1;p===0?rs.set(1,A,M):p===1?rs.set(-M,1,-A):p===2?rs.set(-M,A,1):p===3?rs.set(-1,A,-M):p===4?rs.set(-M,-1,A):rs.set(M,A,-1),rs.toArray(_,(p*u+b)*d)}}let m=new Tt;m.setAttribute("position",new tn(g,d)),m.setAttribute("outputDirection",new tn(_,d)),t.push(new rt(m,null)),i>Js&&i--}return{lodMeshes:t,sizeLods:e}}function cf(n,e,t){let i=new hn(n,e,t);return i.texture.mapping=Gr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Zs(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Am(n,e,t){return new kt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:wm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Rm(n,e,t){return new kt({name:"SphericalGaussianBlur",defines:{SAMPLES:Sm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:xl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function hf(){return new kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function uf(){return new kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function xl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var vl=class extends hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ir(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Pi(5,5,5),r=new kt({name:"CubemapFromEquirect",uniforms:ss(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ft,blending:ei});r.uniforms.tEquirect.value=t;let a=new rt(s,r),o=t.minFilter;return t.minFilter===Bi&&(t.minFilter=Zt),new Mo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}};function Cm(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===To||d===Eo)if(e.has(u)){let g=e.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let _=new vl(g.height);return _.fromEquirectangularTexture(n,u),e.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let d=u.mapping,g=d===To||d===Eo,_=d===Oi||d===is;if(g||_){let m=t.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new _l(n)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let S=u.image;return g&&S&&S.height>0||_&&S&&l(S)?(i===null&&(i=new _l(n)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,d){return d===To?u.mapping=Oi:d===Eo&&(u.mapping=is),u}function l(u){let d=0,g=6;for(let _=0;_<g;_++)u[_]!==void 0&&d++;return d===g}function c(u){let d=u.target;d.removeEventListener("dispose",c);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function Pm(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&$i("WebGLRenderer: "+i+" extension not supported."),s}}}function Im(n,e,t,i){let s={},r=new WeakMap;function a(f){let u=f.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let d=r.get(u);d&&(e.remove(d),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(f){let u=f.attributes;for(let d in u)e.update(u[d],n.ARRAY_BUFFER)}function c(f){let u=[],d=f.index,g=f.attributes.position,_=0;if(g===void 0)return;if(d!==null){let S=d.array;_=d.version;for(let E=0,y=S.length;E<y;E+=3){let b=S[E+0],M=S[E+1],A=S[E+2];u.push(b,M,M,A,A,b)}}else{let S=g.array;_=g.version;for(let E=0,y=S.length/3-1;E<y;E+=3){let b=E+0,M=E+1,A=E+2;u.push(b,M,M,A,A,b)}}let m=new(g.count>=65535?Cr:Rr)(u,1);m.version=_;let p=r.get(f);p&&e.remove(p),r.set(f,m)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Lm(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){n.drawElements(i,u,r,f*a),t.update(u,i,1)}function c(f,u,d){d!==0&&(n.drawElementsInstanced(i,u,r,f*a,d),t.update(u,i,d))}function h(f,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,d);let _=0;for(let m=0;m<d;m++)_+=u[m];t.update(_,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Dm(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Ue("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Nm(n,e,t){let i=new WeakMap,s=new wt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==f){let w=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],E=0;d===!0&&(E=1),g===!0&&(E=2),_===!0&&(E=3);let y=o.attributes.position.count*E,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let M=new Float32Array(y*b*4*f),A=new wr(M,y,b,f);A.type=Tn,A.needsUpdate=!0;let v=E*4;for(let R=0;R<f;R++){let P=m[R],L=p[R],N=S[R],D=y*b*4*R;for(let z=0;z<P.count;z++){let F=z*v;d===!0&&(s.fromBufferAttribute(P,z),M[D+F+0]=s.x,M[D+F+1]=s.y,M[D+F+2]=s.z,M[D+F+3]=0),g===!0&&(s.fromBufferAttribute(L,z),M[D+F+4]=s.x,M[D+F+5]=s.y,M[D+F+6]=s.z,M[D+F+7]=0),_===!0&&(s.fromBufferAttribute(N,z),M[D+F+8]=s.x,M[D+F+9]=s.y,M[D+F+10]=s.z,M[D+F+11]=N.itemSize===4?s.w:1)}}u={count:f,texture:A,size:new _e(y,b)},i.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Um(n,e,t,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Fm={[wc]:"LINEAR_TONE_MAPPING",[Tc]:"REINHARD_TONE_MAPPING",[Ec]:"CINEON_TONE_MAPPING",[Ac]:"ACES_FILMIC_TONE_MAPPING",[Cc]:"AGX_TONE_MAPPING",[Pc]:"NEUTRAL_TONE_MAPPING",[Rc]:"CUSTOM_TONE_MAPPING"};function Om(n,e,t,i,s,r){let a=new hn(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Tt;c.setAttribute("position",new Ge([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ge([0,2,0,0,2,0],2));let h=new oo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new rt(c,h),u=new Hs(-1,1,1,-1,0,1),d=null,g=null,_=!1,m,p=null,S=[],E=!1;this.setSize=function(y,b){a.setSize(y,b),o!==null&&o.setSize(y,b),l!==null&&l.setSize(y,b);for(let M=0;M<S.length;M++){let A=S[M];A.setSize&&A.setSize(y,b)}},this.setEffects=function(y){S=y,E=S.length>0&&S[0].isRenderPass===!0;let b=a.width,M=a.height;S.length>0&&o===null&&(o=new hn(b,M,{type:Gn,depthBuffer:!1,stencilBuffer:!1}),l=new hn(b,M,{type:Gn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<S.length;A++){let v=S[A];v.setSize&&v.setSize(b,M)}},this.begin=function(y,b){if(_||y.toneMapping===kn&&S.length===0)return!1;if(p=b,b!==null){let M=b.width,A=b.height;(a.width!==M||a.height!==A)&&this.setSize(M,A)}return E===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=kn,!0},this.hasRenderPass=function(){return E},this.end=function(y,b){y.toneMapping=m,_=!0;let M=a,A=o;for(let v=0;v<S.length;v++){let w=S[v];w.enabled!==!1&&(w.render(y,A,M,b),w.needsSwap!==!1&&(M=A,A=A===o?l:o))}if(d!==y.outputColorSpace||g!==y.toneMapping){d=y.outputColorSpace,g=y.toneMapping,h.defines={},et.getTransfer(d)===ut&&(h.defines.SRGB_TRANSFER="");let v=Fm[g];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,y.setRenderTarget(p),y.render(f,u),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var If=new an,ih=new Ci(1,1),Lf=new wr,Df=new $a,Nf=new Ir,ff=[],df=[],pf=new Float32Array(16),mf=new Float32Array(9),gf=new Float32Array(4);function Ks(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=ff[s];if(r===void 0&&(r=new Float32Array(s),ff[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Gt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function bl(n,e){let t=df[e];t===void 0&&(t=new Int32Array(e),df[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Bm(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function km(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2fv(this.addr,e),Gt(t,e)}}function zm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;n.uniform3fv(this.addr,e),Gt(t,e)}}function Gm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4fv(this.addr,e),Gt(t,e)}}function Vm(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(zt(t,i))return;gf.set(i),n.uniformMatrix2fv(this.addr,!1,gf),Gt(t,i)}}function Hm(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(zt(t,i))return;mf.set(i),n.uniformMatrix3fv(this.addr,!1,mf),Gt(t,i)}}function Wm(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(zt(t,i))return;pf.set(i),n.uniformMatrix4fv(this.addr,!1,pf),Gt(t,i)}}function Xm(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function qm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2iv(this.addr,e),Gt(t,e)}}function Ym(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3iv(this.addr,e),Gt(t,e)}}function Zm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4iv(this.addr,e),Gt(t,e)}}function Jm(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function $m(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2uiv(this.addr,e),Gt(t,e)}}function Km(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3uiv(this.addr,e),Gt(t,e)}}function Qm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4uiv(this.addr,e),Gt(t,e)}}function jm(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(ih.compareFunction=t.isReversedDepthBuffer()?dl:fl,r=ih):r=If,t.setTexture2D(e||r,s)}function e2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Df,s)}function t2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Nf,s)}function n2(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Lf,s)}function i2(n){switch(n){case 5126:return Bm;case 35664:return km;case 35665:return zm;case 35666:return Gm;case 35674:return Vm;case 35675:return Hm;case 35676:return Wm;case 5124:case 35670:return Xm;case 35667:case 35671:return qm;case 35668:case 35672:return Ym;case 35669:case 35673:return Zm;case 5125:return Jm;case 36294:return $m;case 36295:return Km;case 36296:return Qm;case 35678:case 36198:case 36298:case 36306:case 35682:return jm;case 35679:case 36299:case 36307:return e2;case 35680:case 36300:case 36308:case 36293:return t2;case 36289:case 36303:case 36311:case 36292:return n2}}function s2(n,e){n.uniform1fv(this.addr,e)}function r2(n,e){let t=Ks(e,this.size,2);n.uniform2fv(this.addr,t)}function a2(n,e){let t=Ks(e,this.size,3);n.uniform3fv(this.addr,t)}function o2(n,e){let t=Ks(e,this.size,4);n.uniform4fv(this.addr,t)}function l2(n,e){let t=Ks(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function c2(n,e){let t=Ks(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function h2(n,e){let t=Ks(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function u2(n,e){n.uniform1iv(this.addr,e)}function f2(n,e){n.uniform2iv(this.addr,e)}function d2(n,e){n.uniform3iv(this.addr,e)}function p2(n,e){n.uniform4iv(this.addr,e)}function m2(n,e){n.uniform1uiv(this.addr,e)}function g2(n,e){n.uniform2uiv(this.addr,e)}function _2(n,e){n.uniform3uiv(this.addr,e)}function v2(n,e){n.uniform4uiv(this.addr,e)}function y2(n,e,t){let i=this.cache,s=e.length,r=bl(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),Gt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=ih:a=If;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function x2(n,e,t){let i=this.cache,s=e.length,r=bl(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),Gt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Df,r[a])}function b2(n,e,t){let i=this.cache,s=e.length,r=bl(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),Gt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Nf,r[a])}function M2(n,e,t){let i=this.cache,s=e.length,r=bl(t,s);zt(i,r)||(n.uniform1iv(this.addr,r),Gt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Lf,r[a])}function S2(n){switch(n){case 5126:return s2;case 35664:return r2;case 35665:return a2;case 35666:return o2;case 35674:return l2;case 35675:return c2;case 35676:return h2;case 5124:case 35670:return u2;case 35667:case 35671:return f2;case 35668:case 35672:return d2;case 35669:case 35673:return p2;case 5125:return m2;case 36294:return g2;case 36295:return _2;case 36296:return v2;case 35678:case 36198:case 36298:case 36306:case 35682:return y2;case 35679:case 36299:case 36307:return x2;case 35680:case 36300:case 36308:case 36293:return b2;case 36289:case 36303:case 36311:case 36292:return M2}}var sh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=i2(t.type)}},rh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=S2(t.type)}},ah=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},th=/(\w+)(\])?(\[|\.)?/g;function _f(n,e){n.seq.push(e),n.map[e.id]=e}function w2(n,e,t){let i=n.name,s=i.length;for(th.lastIndex=0;;){let r=th.exec(i),a=th.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){_f(t,c===void 0?new sh(o,n,e):new rh(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new ah(o),_f(t,f)),t=f}}}var $s=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);w2(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function vf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var T2=37297,E2=0;function A2(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var yf=new Be;function R2(n){et._getMatrix(yf,et.workingColorSpace,n);let e=`mat3( ${yf.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(n)){case br:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function xf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+A2(n.getShaderSource(e),o)}else return r}function C2(n,e){let t=R2(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var P2={[wc]:"Linear",[Tc]:"Reinhard",[Ec]:"Cineon",[Ac]:"ACESFilmic",[Cc]:"AgX",[Pc]:"Neutral",[Rc]:"Custom"};function I2(n,e){let t=P2[e];return t===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var gl=new I;function L2(){et.getLuminanceCoefficients(gl);let n=gl.x.toFixed(4),e=gl.y.toFixed(4),t=gl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function D2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kr).join(`
`)}function N2(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function U2(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Kr(n){return n!==""}function bf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var F2=/^[ \t]*#include +<([\w\d./]+)>/gm;function oh(n){return n.replace(F2,B2)}var O2=new Map;function B2(n,e){let t=Ye[e];if(t===void 0){let i=O2.get(e);if(i!==void 0)t=Ye[i],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return oh(t)}var k2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sf(n){return n.replace(k2,z2)}function z2(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var G2={[zr]:"SHADOWMAP_TYPE_PCF",[Ws]:"SHADOWMAP_TYPE_VSM"};function V2(n){return G2[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var H2={[Oi]:"ENVMAP_TYPE_CUBE",[is]:"ENVMAP_TYPE_CUBE",[Gr]:"ENVMAP_TYPE_CUBE_UV"};function W2(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":H2[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var X2={[is]:"ENVMAP_MODE_REFRACTION"};function q2(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":X2[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Y2={[Sc]:"ENVMAP_BLENDING_MULTIPLY",[zu]:"ENVMAP_BLENDING_MIX",[Gu]:"ENVMAP_BLENDING_ADD"};function Z2(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Y2[n.combine]||"ENVMAP_BLENDING_NONE"}function J2(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function $2(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=V2(t),c=W2(t),h=q2(t),f=Z2(t),u=J2(t),d=D2(t),g=N2(r),_=s.createProgram(),m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Kr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Kr).join(`
`),p.length>0&&(p+=`
`)):(m=[wf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kr).join(`
`),p=[wf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kn?"#define TONE_MAPPING":"",t.toneMapping!==kn?Ye.tonemapping_pars_fragment:"",t.toneMapping!==kn?I2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,C2("linearToOutputTexel",t.outputColorSpace),L2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Kr).join(`
`)),a=oh(a),a=bf(a,t),a=Mf(a,t),o=oh(o),o=bf(o,t),o=Mf(o,t),a=Sf(a),o=Sf(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let E=S+m+a,y=S+p+o,b=vf(s,s.VERTEX_SHADER,E),M=vf(s,s.FRAGMENT_SHADER,y);s.attachShader(_,b),s.attachShader(_,M),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(P){if(n.debug.checkShaderErrors){let L=s.getProgramInfoLog(_)||"",N=s.getShaderInfoLog(b)||"",D=s.getShaderInfoLog(M)||"",z=L.trim(),F=N.trim(),X=D.trim(),Q=!0,Y=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,b,M);else{let ee=xf(s,b,"vertex"),ie=xf(s,M,"fragment");Ue("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+ee+`
`+ie)}else z!==""?Ne("WebGLProgram: Program Info Log:",z):(F===""||X==="")&&(Y=!1);Y&&(P.diagnostics={runnable:Q,programLog:z,vertexShader:{log:F,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(b),s.deleteShader(M),v=new $s(s,_),w=U2(s,_)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(_,T2)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=E2++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=M,this}var K2=0,lh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new ch(e),t.set(e,i)),i}},ch=class{constructor(e){this.id=K2++,this.code=e,this.usedTimes=0}};function Q2(n){return n===zi||n===Yr||n===Zr}function j2(n,e,t,i,s,r){let a=new Tr,o=new lh,l=new Set,c=[],h=new Map,f=i.logarithmicDepthBuffer,u=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,w,R,P,L,N){let D=P.fog,z=L.geometry,F=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,X=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Q=e.get(v.envMap||F,X),Y=Q&&Q.mapping===Gr?Q.image.height:null,ee=d[v.type];v.precision!==null&&(u=i.getMaxPrecision(v.precision),u!==v.precision&&Ne("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let ie=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Le=ie!==void 0?ie.length:0,Pe=0;z.morphAttributes.position!==void 0&&(Pe=1),z.morphAttributes.normal!==void 0&&(Pe=2),z.morphAttributes.color!==void 0&&(Pe=3);let gt,tt,ot,J;if(ee){let vt=ni[ee];gt=vt.vertexShader,tt=vt.fragmentShader}else{gt=v.vertexShader,tt=v.fragmentShader;let vt=o.getVertexShaderStage(v),ct=o.getFragmentShaderStage(v);o.update(v,vt,ct),ot=vt.id,J=ct.id}let ne=n.getRenderTarget(),Me=n.state.buffers.depth.getReversed(),ze=L.isInstancedMesh===!0,xe=L.isBatchedMesh===!0,Je=!!v.map,Bt=!!v.matcap,$e=!!Q,at=!!v.aoMap,_t=!!v.lightMap,je=!!v.bumpMap&&v.wireframe===!1,St=!!v.normalMap,Wt=!!v.displacementMap,cn=!!v.emissiveMap,Et=!!v.metalnessMap,Pt=!!v.roughnessMap,B=v.anisotropy>0,$t=v.clearcoat>0,ft=v.dispersion>0,C=v.retroreflectivity>0,x=v.iridescence>0,k=v.sheen>0,W=v.transmission>0,Z=B&&!!v.anisotropyMap,re=$t&&!!v.clearcoatMap,ae=$t&&!!v.clearcoatNormalMap,$=$t&&!!v.clearcoatRoughnessMap,te=x&&!!v.iridescenceMap,le=x&&!!v.iridescenceThicknessMap,Re=k&&!!v.sheenColorMap,fe=k&&!!v.sheenRoughnessMap,ce=!!v.specularMap,Ce=!!v.specularColorMap,De=!!v.specularIntensityMap,He=W&&!!v.transmissionMap,O=W&&!!v.thicknessMap,he=!!v.gradientMap,j=!!v.alphaMap,ue=v.alphaTest>0,ve=!!v.alphaHash,se=!!v.extensions,Ie=kn;v.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Ie=n.toneMapping);let Te={shaderID:ee,shaderType:v.type,shaderName:v.name,vertexShader:gt,fragmentShader:tt,defines:v.defines,customVertexShaderID:ot,customFragmentShaderID:J,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:xe,batchingColor:xe&&L._colorsTexture!==null,instancing:ze,instancingColor:ze&&L.instanceColor!==null,instancingMorph:ze&&L.morphTexture!==null,outputColorSpace:ne===null?n.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:et.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Je,matcap:Bt,envMap:$e,envMapMode:$e&&Q.mapping,envMapCubeUVHeight:Y,aoMap:at,lightMap:_t,bumpMap:je,normalMap:St,displacementMap:Wt,emissiveMap:cn,normalMapObjectSpace:St&&v.normalMapType===Wu,normalMapTangentSpace:St&&v.normalMapType===ul,packedNormalMap:St&&v.normalMapType===ul&&Q2(v.normalMap.format),metalnessMap:Et,roughnessMap:Pt,anisotropy:B,anisotropyMap:Z,clearcoat:$t,clearcoatMap:re,clearcoatNormalMap:ae,clearcoatRoughnessMap:$,dispersion:ft,retroreflection:C,iridescence:x,iridescenceMap:te,iridescenceThicknessMap:le,sheen:k,sheenColorMap:Re,sheenRoughnessMap:fe,specularMap:ce,specularColorMap:Ce,specularIntensityMap:De,transmission:W,transmissionMap:He,thicknessMap:O,gradientMap:he,opaque:v.transparent===!1&&v.blending===Fi&&v.alphaToCoverage===!1,alphaMap:j,alphaTest:ue,alphaHash:ve,combine:v.combine,mapUv:Je&&g(v.map.channel),aoMapUv:at&&g(v.aoMap.channel),lightMapUv:_t&&g(v.lightMap.channel),bumpMapUv:je&&g(v.bumpMap.channel),normalMapUv:St&&g(v.normalMap.channel),displacementMapUv:Wt&&g(v.displacementMap.channel),emissiveMapUv:cn&&g(v.emissiveMap.channel),metalnessMapUv:Et&&g(v.metalnessMap.channel),roughnessMapUv:Pt&&g(v.roughnessMap.channel),anisotropyMapUv:Z&&g(v.anisotropyMap.channel),clearcoatMapUv:re&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ae&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:le&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:fe&&g(v.sheenRoughnessMap.channel),specularMapUv:ce&&g(v.specularMap.channel),specularColorMapUv:Ce&&g(v.specularColorMap.channel),specularIntensityMapUv:De&&g(v.specularIntensityMap.channel),transmissionMapUv:He&&g(v.transmissionMap.channel),thicknessMapUv:O&&g(v.thicknessMap.channel),alphaMapUv:j&&g(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(St||B),vertexNormals:!!z.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!z.attributes.uv&&(Je||j),fog:!!D,useFog:v.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||z.attributes.normal===void 0&&St===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Me,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:Pe,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ie,decodeVideoTexture:Je&&v.map.isVideoTexture===!0&&et.getTransfer(v.map.colorSpace)===ut,decodeVideoTextureEmissive:cn&&v.emissiveMap.isVideoTexture===!0&&et.getTransfer(v.emissiveMap.colorSpace)===ut,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===yn,flipSided:v.side===Ft,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:se&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&v.extensions.multiDraw===!0||xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function m(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let R in v.defines)w.push(R),w.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(p(w,v),S(w,v),w.push(n.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function p(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function S(v,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function E(v){let w=d[v.type],R;if(w){let P=ni[w];R=rf.clone(P.uniforms)}else R=v.uniforms;return R}function y(v,w){let R=h.get(w);return R!==void 0?++R.usedTimes:(R=new $2(n,w,v,s),c.push(R),h.set(w,R)),R}function b(v){if(--v.usedTimes===0){let w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function M(v){o.remove(v)}function A(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:E,acquireProgram:y,releaseProgram:b,releaseShaderCache:M,programs:c,dispose:A}}function eg(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function tg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Tf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ef(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,g,_,m,p){let S=n[e];return S===void 0?(S={id:u.id,object:u,geometry:d,material:g,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:p},n[e]=S):(S.id=u.id,S.object=u,S.geometry=d,S.material=g,S.materialVariant=a(u),S.groupOrder=_,S.renderOrder=u.renderOrder,S.z=m,S.group=p),e++,S}function l(u,d,g,_,m,p,S){S.reversedDepth===!0&&(m=-m);let E=o(u,d,g,_,m,p);g.transmission>0?i.push(E):g.transparent===!0?s.push(E):t.push(E)}function c(u,d,g,_,m,p){let S=o(u,d,g,_,m,p);g.transmission>0?i.unshift(S):g.transparent===!0?s.unshift(S):t.unshift(S)}function h(u,d){t.length>1&&t.sort(u||tg),i.length>1&&i.sort(d||Tf),s.length>1&&s.sort(d||Tf)}function f(){for(let u=e,d=n.length;u<d;u++){let g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function ng(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Ef,n.set(i,[a])):s>=r.length?(a=new Ef,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function ig(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new I,color:new Fe};break;case"SpotLight":t={position:new I,direction:new I,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function sg(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var rg=0;function ag(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function og(n){let e=new ig,t=sg(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let s=new I,r=new nt,a=new nt;function o(c){let h=0,f=0,u=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,S=0,E=0,y=0,b=0,M=0,A=0,v=0,w=0,R=0;c.sort(ag);for(let L=0,N=c.length;L<N;L++){let D=c[L],z=D.color,F=D.intensity,X=D.distance,Q=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===zi?Q=D.shadow.map.texture:Q=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=z.r*F,f+=z.g*F,u+=z.b*F;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(D.sh.coefficients[Y],F);R++}else if(D.isSunLight){let Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let ee=D.shadow,ie=t.get(D);ie.shadowIntensity=ee.intensity,ie.shadowBias=ee.bias,ie.shadowNormalBias=ee.normalBias,ie.shadowRadius=ee.radius,ie.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),i.sunShadow[g]=ie,i.sunShadowMap[g]=Q;let Le=ee.getViewportCount();for(let Pe=0;Pe<Le;Pe++)i.sunShadowMatrix[_+Pe]=ee.getMatrix(Pe),i.sunShadowCascade[_+Pe]=ee._cascadeData[Pe];_+=Le,g++}i.sun[d]=Y,d++}else if(D.isDirectionalLight){let Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let ee=D.shadow,ie=t.get(D);ie.shadowIntensity=ee.intensity,ie.shadowBias=ee.bias,ie.shadowNormalBias=ee.normalBias,ie.shadowRadius=ee.radius,ie.shadowMapSize=ee.mapSize,i.directionalShadow[m]=ie,i.directionalShadowMap[m]=Q,i.directionalShadowMatrix[m]=D.shadow.matrix,b++}i.directional[m]=Y,m++}else if(D.isSpotLight){let Y=e.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(z).multiplyScalar(F),Y.distance=X,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,i.spot[S]=Y;let ee=D.shadow;if(D.map&&(i.spotLightMap[v]=D.map,v++,ee.updateMatrices(D),D.castShadow&&w++),i.spotLightMatrix[S]=ee.matrix,D.castShadow){let ie=t.get(D);ie.shadowIntensity=ee.intensity,ie.shadowBias=ee.bias,ie.shadowNormalBias=ee.normalBias,ie.shadowRadius=ee.radius,ie.shadowMapSize=ee.mapSize,i.spotShadow[S]=ie,i.spotShadowMap[S]=Q,A++}S++}else if(D.isRectAreaLight){let Y=e.get(D);Y.color.copy(z).multiplyScalar(F),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),i.rectArea[E]=Y,E++}else if(D.isPointLight){let Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){let ee=D.shadow,ie=t.get(D);ie.shadowIntensity=ee.intensity,ie.shadowBias=ee.bias,ie.shadowNormalBias=ee.normalBias,ie.shadowRadius=ee.radius,ie.shadowMapSize=ee.mapSize,ie.shadowCameraNear=ee.camera.near,ie.shadowCameraFar=ee.camera.far,i.pointShadow[p]=ie,i.pointShadowMap[p]=Q,i.pointShadowMatrix[p]=D.shadow.matrix,M++}i.point[p]=Y,p++}else if(D.isHemisphereLight){let Y=e.get(D);Y.skyColor.copy(D.color).multiplyScalar(F),Y.groundColor.copy(D.groundColor).multiplyScalar(F),i.hemi[y]=Y,y++}}E>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;let P=i.hash;(P.sunLength!==d||P.directionalLength!==m||P.pointLength!==p||P.spotLength!==S||P.rectAreaLength!==E||P.hemiLength!==y||P.numSunShadows!==g||P.numDirectionalShadows!==b||P.numPointShadows!==M||P.numSpotShadows!==A||P.numSpotMaps!==v||P.numLightProbes!==R)&&(i.sun.length=d,i.directional.length=m,i.spot.length=S,i.rectArea.length=E,i.point.length=p,i.hemi.length=y,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.pointShadowMatrix.length=M,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+v-w,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,P.sunLength=d,P.directionalLength=m,P.pointLength=p,P.spotLength=S,P.rectAreaLength=E,P.hemiLength=y,P.numSunShadows=g,P.numDirectionalShadows=b,P.numPointShadows=M,P.numSpotShadows=A,P.numSpotMaps=v,P.numLightProbes=R,i.version=rg++)}function l(c,h){let f=0,u=0,d=0,g=0,_=0,m=0,p=h.matrixWorldInverse;for(let S=0,E=c.length;S<E;S++){let y=c[S];if(y.isSunLight){let b=i.sun[f];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(p),f++}else if(y.isDirectionalLight){let b=i.directional[u];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),u++}else if(y.isSpotLight){let b=i.spot[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),g++}else if(y.isRectAreaLight){let b=i.rectArea[_];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let b=i.point[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){let b=i.hemi[m];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function Af(n){let e=new og(n),t=[],i=[],s=[];function r(u){f.camera=u,t.length=0,i.length=0,s.length=0}function a(u){t.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let f={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function lg(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Af(n),e.set(s,[o])):r>=a.length?(o=new Af(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var cg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ug=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],fg=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Rf=new nt,$r=new I,nh=new I;function dg(n,e,t){let i=new ks,s=new _e,r=new _e,a=new wt,o=new lo,l=new co,c={},h=t.maxTextureSize,f={[Ui]:Ft,[Ft]:Ui,[yn]:yn},u=new kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:cg,fragmentShader:hg}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new Tt;g.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new rt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zr;let p=this.type;this.render=function(M,A,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===bu&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=zr);let w=n.getRenderTarget(),R=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),L=n.state;L.setBlending(ei),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let N=p!==this.type;N&&A.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(z=>z.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,z=M.length;D<z;D++){let F=M[D],X=F.shadow;if(X===void 0){Ne("WebGLShadowMap:",F,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let Q=X.getFrameExtents();s.multiply(Q),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,X.mapSize.y=r.y));let Y=n.state.buffers.depth.getReversed();if(X.camera._reversedDepth=Y,X.map===null||N===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Ws){if(F.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new hn(s.x,s.y,{format:zi,type:Gn,minFilter:Zt,magFilter:Zt,generateMipmaps:!1}),X.map.texture.name=F.name+".shadowMap",X.map.depthTexture=new Ci(s.x,s.y,Tn),X.map.depthTexture.name=F.name+".shadowMapDepth",X.map.depthTexture.format=Jn,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Nt,X.map.depthTexture.magFilter=Nt}else F.isPointLight?(X.map=new vl(s.x),X.map.depthTexture=new Qa(s.x,zn)):(X.map=new hn(s.x,s.y),X.map.depthTexture=new Ci(s.x,s.y,zn)),X.map.depthTexture.name=F.name+".shadowMap",X.map.depthTexture.format=Jn,this.type===zr?(X.map.depthTexture.compareFunction=Y?dl:fl,X.map.depthTexture.minFilter=Zt,X.map.depthTexture.magFilter=Zt):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Nt,X.map.depthTexture.magFilter=Nt);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let ee=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();F.isPointLight!==!0&&X.updateMatrices(F,v);for(let ie=0;ie<ee;ie++){let Le=X.getCamera(ie);if(F.isPointLight){let Pe=X.camera,gt=X.matrix,tt=F.distance||Pe.far;tt!==Pe.far&&(Pe.far=tt,Pe.updateProjectionMatrix()),$r.setFromMatrixPosition(F.matrixWorld),Pe.position.copy($r),nh.copy(Pe.position),nh.add(ug[ie]),Pe.up.copy(fg[ie]),Pe.lookAt(nh),Pe.updateMatrixWorld(),gt.makeTranslation(-$r.x,-$r.y,-$r.z),Rf.multiplyMatrices(Pe.projectionMatrix,Pe.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Rf,Pe.coordinateSystem,Pe.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)n.setRenderTarget(X.map,ie),n.clear();else{ie===0&&(n.setRenderTarget(X.map),n.clear());let Pe=X.getViewport(ie);a.set(r.x*Pe.x,r.y*Pe.y,r.x*Pe.z,r.y*Pe.w),L.viewport(a)}i=X.getFrustum(ie),y(A,v,Le,F,this.type)}X.isPointLightShadow!==!0&&this.type===Ws&&S(X,v),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(w,R,P)};function S(M,A){let v=e.update(_);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null?M.mapPass=new hn(s.x,s.y,{format:zi,type:Gn}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),u.uniforms.shadow_pass.value=M.map.depthTexture,u.uniforms.resolution.value.set(M.map.width,M.map.height),u.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(A,null,v,u,_,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(A,null,v,d,_,null)}function E(M,A,v,w){let R=null,P=v.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)R=P;else if(R=v.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let L=R.uuid,N=A.uuid,D=c[L];D===void 0&&(D={},c[L]=D);let z=D[N];z===void 0&&(z=R.clone(),D[N]=z,A.addEventListener("dispose",b)),R=z}if(R.visible=A.visible,R.wireframe=A.wireframe,w===Ws?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:f[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let L=n.properties.get(R);L.light=v}return R}function y(M,A,v,w,R){if(M.visible===!1)return;if(M.layers.test(A.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&R===Ws)&&(!M.frustumCulled||M.intersectsFrustum(i))){M.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,M.matrixWorld);let N=e.update(M),D=M.material;if(Array.isArray(D)){let z=N.groups;for(let F=0,X=z.length;F<X;F++){let Q=z[F],Y=D[Q.materialIndex];if(Y&&Y.visible){let ee=E(M,Y,w,R);M.onBeforeShadow(n,M,A,v,N,ee,Q),n.renderBufferDirect(v,null,N,ee,M,Q),M.onAfterShadow(n,M,A,v,N,ee,Q)}}}else if(D.visible){let z=E(M,D,w,R);M.onBeforeShadow(n,M,A,v,N,z,null),n.renderBufferDirect(v,null,N,z,M,null),M.onAfterShadow(n,M,A,v,N,z,null)}}let L=M.children;for(let N=0,D=L.length;N<D;N++)y(L[N],A,v,w,R)}function b(M){M.target.removeEventListener("dispose",b);for(let v in c){let w=c[v],R=M.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function pg(n,e){function t(){let O=!1,he=new wt,j=null,ue=new wt(0,0,0,0);return{setMask:function(ve){j!==ve&&!O&&(n.colorMask(ve,ve,ve,ve),j=ve)},setLocked:function(ve){O=ve},setClear:function(ve,se,Ie,Te,vt){vt===!0&&(ve*=Te,se*=Te,Ie*=Te),he.set(ve,se,Ie,Te),ue.equals(he)===!1&&(n.clearColor(ve,se,Ie,Te),ue.copy(he))},reset:function(){O=!1,j=null,ue.set(-1,0,0,0)}}}function i(){let O=!1,he=!1,j=null,ue=null,ve=null;return{setReversed:function(se){if(he!==se){let Ie=e.get("EXT_clip_control");se?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),he=se;let Te=ve;ve=null,this.setClear(Te)}},getReversed:function(){return he},setTest:function(se){se?ne(n.DEPTH_TEST):Me(n.DEPTH_TEST)},setMask:function(se){j!==se&&!O&&(n.depthMask(se),j=se)},setFunc:function(se){if(he&&(se=tf[se]),ue!==se){switch(se){case Ba:n.depthFunc(n.NEVER);break;case ka:n.depthFunc(n.ALWAYS);break;case za:n.depthFunc(n.LESS);break;case Ps:n.depthFunc(n.LEQUAL);break;case Ga:n.depthFunc(n.EQUAL);break;case Va:n.depthFunc(n.GEQUAL);break;case Ha:n.depthFunc(n.GREATER);break;case Wa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=se}},setLocked:function(se){O=se},setClear:function(se){ve!==se&&(ve=se,he&&(se=1-se),n.clearDepth(se))},reset:function(){O=!1,j=null,ue=null,ve=null,he=!1}}}function s(){let O=!1,he=null,j=null,ue=null,ve=null,se=null,Ie=null,Te=null,vt=null;return{setTest:function(ct){O||(ct?ne(n.STENCIL_TEST):Me(n.STENCIL_TEST))},setMask:function(ct){he!==ct&&!O&&(n.stencilMask(ct),he=ct)},setFunc:function(ct,In,Xn){(j!==ct||ue!==In||ve!==Xn)&&(n.stencilFunc(ct,In,Xn),j=ct,ue=In,ve=Xn)},setOp:function(ct,In,Xn){(se!==ct||Ie!==In||Te!==Xn)&&(n.stencilOp(ct,In,Xn),se=ct,Ie=In,Te=Xn)},setLocked:function(ct){O=ct},setClear:function(ct){vt!==ct&&(n.clearStencil(ct),vt=ct)},reset:function(){O=!1,he=null,j=null,ue=null,ve=null,se=null,Ie=null,Te=null,vt=null}}}let r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},f={},u={},d=new WeakMap,g=[],_=null,m=!1,p=null,S=null,E=null,y=null,b=null,M=null,A=null,v=new Fe(0,0,0),w=0,R=!1,P=null,L=null,N=null,D=null,z=null,F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,Q=0,Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=Q>=1):Y.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=Q>=2);let ee=null,ie={},Le=n.getParameter(n.SCISSOR_BOX),Pe=n.getParameter(n.VIEWPORT),gt=new wt().fromArray(Le),tt=new wt().fromArray(Pe);function ot(O,he,j,ue){let ve=new Uint8Array(4),se=n.createTexture();n.bindTexture(O,se),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ie=0;Ie<j;Ie++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(he,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(he+Ie,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return se}let J={};J[n.TEXTURE_2D]=ot(n.TEXTURE_2D,n.TEXTURE_2D,1),J[n.TEXTURE_CUBE_MAP]=ot(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[n.TEXTURE_2D_ARRAY]=ot(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),J[n.TEXTURE_3D]=ot(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(n.DEPTH_TEST),a.setFunc(Ps),je(!1),St(vc),ne(n.CULL_FACE),at(ei);function ne(O){h[O]!==!0&&(n.enable(O),h[O]=!0)}function Me(O){h[O]!==!1&&(n.disable(O),h[O]=!1)}function ze(O,he){return u[O]!==he?(n.bindFramebuffer(O,he),u[O]=he,O===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=he),O===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=he),!0):!1}function xe(O,he){let j=g,ue=!1;if(O){j=d.get(he),j===void 0&&(j=[],d.set(he,j));let ve=O.textures;if(j.length!==ve.length||j[0]!==n.COLOR_ATTACHMENT0){for(let se=0,Ie=ve.length;se<Ie;se++)j[se]=n.COLOR_ATTACHMENT0+se;j.length=ve.length,ue=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,ue=!0);ue&&n.drawBuffers(j)}function Je(O){return _!==O?(n.useProgram(O),_=O,!0):!1}let Bt={[ns]:n.FUNC_ADD,[Su]:n.FUNC_SUBTRACT,[wu]:n.FUNC_REVERSE_SUBTRACT};Bt[Tu]=n.MIN,Bt[Eu]=n.MAX;let $e={[Au]:n.ZERO,[Ru]:n.ONE,[Cu]:n.SRC_COLOR,[bc]:n.SRC_ALPHA,[Uu]:n.SRC_ALPHA_SATURATE,[Du]:n.DST_COLOR,[Iu]:n.DST_ALPHA,[Pu]:n.ONE_MINUS_SRC_COLOR,[Mc]:n.ONE_MINUS_SRC_ALPHA,[Nu]:n.ONE_MINUS_DST_COLOR,[Lu]:n.ONE_MINUS_DST_ALPHA,[Fu]:n.CONSTANT_COLOR,[Ou]:n.ONE_MINUS_CONSTANT_COLOR,[Bu]:n.CONSTANT_ALPHA,[ku]:n.ONE_MINUS_CONSTANT_ALPHA};function at(O,he,j,ue,ve,se,Ie,Te,vt,ct){if(O===ei){m===!0&&(Me(n.BLEND),m=!1);return}if(m===!1&&(ne(n.BLEND),m=!0),O!==Mu){if(O!==p||ct!==R){if((S!==ns||b!==ns)&&(n.blendEquation(n.FUNC_ADD),S=ns,b=ns),ct)switch(O){case Fi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xs:n.blendFunc(n.ONE,n.ONE);break;case yc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case xc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ue("WebGLState: Invalid blending: ",O);break}else switch(O){case Fi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case yc:Ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xc:Ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ue("WebGLState: Invalid blending: ",O);break}E=null,y=null,M=null,A=null,v.set(0,0,0),w=0,p=O,R=ct}return}ve=ve||he,se=se||j,Ie=Ie||ue,(he!==S||ve!==b)&&(n.blendEquationSeparate(Bt[he],Bt[ve]),S=he,b=ve),(j!==E||ue!==y||se!==M||Ie!==A)&&(n.blendFuncSeparate($e[j],$e[ue],$e[se],$e[Ie]),E=j,y=ue,M=se,A=Ie),(Te.equals(v)===!1||vt!==w)&&(n.blendColor(Te.r,Te.g,Te.b,vt),v.copy(Te),w=vt),p=O,R=!1}function _t(O,he){O.side===yn?Me(n.CULL_FACE):ne(n.CULL_FACE);let j=O.side===Ft;he&&(j=!j),je(j),O.blending===Fi&&O.transparent===!1?at(ei):at(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let ue=O.stencilWrite;o.setTest(ue),ue&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),cn(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ne(n.SAMPLE_ALPHA_TO_COVERAGE):Me(n.SAMPLE_ALPHA_TO_COVERAGE)}function je(O){P!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),P=O)}function St(O){O!==yu?(ne(n.CULL_FACE),O!==L&&(O===vc?n.cullFace(n.BACK):O===xu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Me(n.CULL_FACE),L=O}function Wt(O){O!==N&&(X&&n.lineWidth(O),N=O)}function cn(O,he,j){O?(ne(n.POLYGON_OFFSET_FILL),(D!==he||z!==j)&&(D=he,z=j,a.getReversed()&&(he=-he),n.polygonOffset(he,j))):Me(n.POLYGON_OFFSET_FILL)}function Et(O){O?ne(n.SCISSOR_TEST):Me(n.SCISSOR_TEST)}function Pt(O){O===void 0&&(O=n.TEXTURE0+F-1),ee!==O&&(n.activeTexture(O),ee=O)}function B(O,he,j){j===void 0&&(ee===null?j=n.TEXTURE0+F-1:j=ee);let ue=ie[j];ue===void 0&&(ue={type:void 0,texture:void 0},ie[j]=ue),(ue.type!==O||ue.texture!==he)&&(ee!==j&&(n.activeTexture(j),ee=j),n.bindTexture(O,he||J[O]),ue.type=O,ue.texture=he)}function $t(){let O=ie[ee];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ft(){try{n.compressedTexImage2D(...arguments)}catch(O){Ue("WebGLState:",O)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(O){Ue("WebGLState:",O)}}function x(){try{n.texSubImage2D(...arguments)}catch(O){Ue("WebGLState:",O)}}function k(){try{n.texSubImage3D(...arguments)}catch(O){Ue("WebGLState:",O)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(O){Ue("WebGLState:",O)}}function Z(){try{n.compressedTexSubImage3D(...arguments)}catch(O){Ue("WebGLState:",O)}}function re(){try{n.texStorage2D(...arguments)}catch(O){Ue("WebGLState:",O)}}function ae(){try{n.texStorage3D(...arguments)}catch(O){Ue("WebGLState:",O)}}function $(){try{n.texImage2D(...arguments)}catch(O){Ue("WebGLState:",O)}}function te(){try{n.texImage3D(...arguments)}catch(O){Ue("WebGLState:",O)}}function le(O){return f[O]!==void 0?f[O]:n.getParameter(O)}function Re(O,he){f[O]!==he&&(n.pixelStorei(O,he),f[O]=he)}function fe(O){gt.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),gt.copy(O))}function ce(O){tt.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),tt.copy(O))}function Ce(O,he){let j=c.get(he);j===void 0&&(j=new WeakMap,c.set(he,j));let ue=j.get(O);ue===void 0&&(ue=n.getUniformBlockIndex(he,O.name),j.set(O,ue))}function De(O,he){let ue=c.get(he).get(O);l.get(he)!==ue&&(n.uniformBlockBinding(he,ue,O.__bindingPointIndex),l.set(he,ue))}function He(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},ee=null,ie={},u={},d=new WeakMap,g=[],_=null,m=!1,p=null,S=null,E=null,y=null,b=null,M=null,A=null,v=new Fe(0,0,0),w=0,R=!1,P=null,L=null,N=null,D=null,z=null,gt.set(0,0,n.canvas.width,n.canvas.height),tt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ne,disable:Me,bindFramebuffer:ze,drawBuffers:xe,useProgram:Je,setBlending:at,setMaterial:_t,setFlipSided:je,setCullFace:St,setLineWidth:Wt,setPolygonOffset:cn,setScissorTest:Et,activeTexture:Pt,bindTexture:B,unbindTexture:$t,compressedTexImage2D:ft,compressedTexImage3D:C,texImage2D:$,texImage3D:te,pixelStorei:Re,getParameter:le,updateUBOMapping:Ce,uniformBlockBinding:De,texStorage2D:re,texStorage3D:ae,texSubImage2D:x,texSubImage3D:k,compressedTexSubImage2D:W,compressedTexSubImage3D:Z,scissor:fe,viewport:ce,reset:He}}function mg(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _e,h=new WeakMap,f=new Set,u,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,x){return g?new OffscreenCanvas(C,x):Mr("canvas")}function m(C,x,k){let W=1,Z=ft(C);if((Z.width>k||Z.height>k)&&(W=k/Math.max(Z.width,Z.height)),W<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let re=Math.floor(W*Z.width),ae=Math.floor(W*Z.height);u===void 0&&(u=_(re,ae));let $=x?_(re,ae):u;return $.width=re,$.height=ae,$.getContext("2d").drawImage(C,0,0,re,ae),Ne("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+re+"x"+ae+")."),$}else return"data"in C&&Ne("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),C;return C}function p(C){return C.generateMipmaps}function S(C){n.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(C,x,k,W,Z,re=!1){if(C!==null){if(n[C]!==void 0)return n[C];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ae;W&&(ae=e.get("EXT_texture_norm16"),ae||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=x;if(x===n.RED&&(k===n.FLOAT&&($=n.R32F),k===n.HALF_FLOAT&&($=n.R16F),k===n.UNSIGNED_BYTE&&($=n.R8),k===n.UNSIGNED_SHORT&&ae&&($=ae.R16_EXT),k===n.SHORT&&ae&&($=ae.R16_SNORM_EXT)),x===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&($=n.R8UI),k===n.UNSIGNED_SHORT&&($=n.R16UI),k===n.UNSIGNED_INT&&($=n.R32UI),k===n.BYTE&&($=n.R8I),k===n.SHORT&&($=n.R16I),k===n.INT&&($=n.R32I)),x===n.RG&&(k===n.FLOAT&&($=n.RG32F),k===n.HALF_FLOAT&&($=n.RG16F),k===n.UNSIGNED_BYTE&&($=n.RG8),k===n.UNSIGNED_SHORT&&ae&&($=ae.RG16_EXT),k===n.SHORT&&ae&&($=ae.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&($=n.RG8UI),k===n.UNSIGNED_SHORT&&($=n.RG16UI),k===n.UNSIGNED_INT&&($=n.RG32UI),k===n.BYTE&&($=n.RG8I),k===n.SHORT&&($=n.RG16I),k===n.INT&&($=n.RG32I)),x===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&($=n.RGB8UI),k===n.UNSIGNED_SHORT&&($=n.RGB16UI),k===n.UNSIGNED_INT&&($=n.RGB32UI),k===n.BYTE&&($=n.RGB8I),k===n.SHORT&&($=n.RGB16I),k===n.INT&&($=n.RGB32I)),x===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&($=n.RGBA8UI),k===n.UNSIGNED_SHORT&&($=n.RGBA16UI),k===n.UNSIGNED_INT&&($=n.RGBA32UI),k===n.BYTE&&($=n.RGBA8I),k===n.SHORT&&($=n.RGBA16I),k===n.INT&&($=n.RGBA32I)),x===n.RGB&&(k===n.UNSIGNED_SHORT&&ae&&($=ae.RGB16_EXT),k===n.SHORT&&ae&&($=ae.RGB16_SNORM_EXT),k===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&($=n.R11F_G11F_B10F)),x===n.RGBA){let te=re?br:et.getTransfer(Z);k===n.FLOAT&&($=n.RGBA32F),k===n.HALF_FLOAT&&($=n.RGBA16F),k===n.UNSIGNED_BYTE&&($=te===ut?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT&&ae&&($=ae.RGBA16_EXT),k===n.SHORT&&ae&&($=ae.RGBA16_SNORM_EXT),k===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function b(C,x){let k;return C?x===null||x===zn||x===Ys?k=n.DEPTH24_STENCIL8:x===Tn?k=n.DEPTH32F_STENCIL8:x===qs&&(k=n.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===zn||x===Ys?k=n.DEPTH_COMPONENT24:x===Tn?k=n.DEPTH_COMPONENT32F:x===qs&&(k=n.DEPTH_COMPONENT16),k}function M(C,x){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Nt&&C.minFilter!==Zt?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function A(C){let x=C.target;x.removeEventListener("dispose",A),w(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&f.delete(x)}function v(C){let x=C.target;x.removeEventListener("dispose",v),P(x)}function w(C){let x=i.get(C);if(x.__webglInit===void 0)return;let k=C.source,W=d.get(k);if(W){let Z=W[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&R(C),Object.keys(W).length===0&&d.delete(k)}i.remove(C)}function R(C){let x=i.get(C);n.deleteTexture(x.__webglTexture);let k=C.source,W=d.get(k);delete W[x.__cacheKey],a.memory.textures--}function P(C){let x=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(x.__webglFramebuffer[W]))for(let Z=0;Z<x.__webglFramebuffer[W].length;Z++)n.deleteFramebuffer(x.__webglFramebuffer[W][Z]);else n.deleteFramebuffer(x.__webglFramebuffer[W]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[W])}else{if(Array.isArray(x.__webglFramebuffer))for(let W=0;W<x.__webglFramebuffer.length;W++)n.deleteFramebuffer(x.__webglFramebuffer[W]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let W=0;W<x.__webglColorRenderbuffer.length;W++)x.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[W]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let k=C.textures;for(let W=0,Z=k.length;W<Z;W++){let re=i.get(k[W]);re.__webglTexture&&(n.deleteTexture(re.__webglTexture),a.memory.textures--),i.remove(k[W])}i.remove(C)}let L=0;function N(){L=0}function D(){return L}function z(C){L=C}function F(){let C=L;return C>=s.maxTextures&&Ne("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,C}function X(C){let x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function Q(C,x){let k=i.get(C);if(C.isVideoTexture&&B(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){let W=C.image;if(W===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(k,C,x);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+x)}function Y(C,x){let k=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){Me(k,C,x);return}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+x)}function ee(C,x){let k=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){Me(k,C,x);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+x)}function ie(C,x){let k=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&k.__version!==C.version){ze(k,C,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+x)}let Le={[Xa]:n.REPEAT,[Zn]:n.CLAMP_TO_EDGE,[qa]:n.MIRRORED_REPEAT},Pe={[Nt]:n.NEAREST,[Vu]:n.NEAREST_MIPMAP_NEAREST,[Vr]:n.NEAREST_MIPMAP_LINEAR,[Zt]:n.LINEAR,[Ao]:n.LINEAR_MIPMAP_NEAREST,[Bi]:n.LINEAR_MIPMAP_LINEAR},gt={[qu]:n.NEVER,[Ku]:n.ALWAYS,[Yu]:n.LESS,[fl]:n.LEQUAL,[Zu]:n.EQUAL,[dl]:n.GEQUAL,[Ju]:n.GREATER,[$u]:n.NOTEQUAL};function tt(C,x){if(x.type===Tn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Zt||x.magFilter===Ao||x.magFilter===Vr||x.magFilter===Bi||x.minFilter===Zt||x.minFilter===Ao||x.minFilter===Vr||x.minFilter===Bi)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,Le[x.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,Le[x.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,Le[x.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,Pe[x.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,Pe[x.minFilter]),x.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,gt[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Nt||x.minFilter!==Vr&&x.minFilter!==Bi||x.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function ot(C,x){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",A));let W=x.source,Z=d.get(W);Z===void 0&&(Z={},d.set(W,Z));let re=X(x);if(re!==C.__cacheKey){Z[re]===void 0&&(Z[re]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Z[re].usedTimes++;let ae=Z[C.__cacheKey];ae!==void 0&&(Z[C.__cacheKey].usedTimes--,ae.usedTimes===0&&R(x)),C.__cacheKey=re,C.__webglTexture=Z[re].texture}return k}function J(C,x,k){return Math.floor(Math.floor(C/k)/x)}function ne(C,x,k,W){let re=C.updateRanges;if(re.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,k,W,x.data);else{re.sort((Re,fe)=>Re.start-fe.start);let ae=0;for(let Re=1;Re<re.length;Re++){let fe=re[ae],ce=re[Re],Ce=fe.start+fe.count,De=J(ce.start,x.width,4),He=J(fe.start,x.width,4);ce.start<=Ce+1&&De===He&&J(ce.start+ce.count-1,x.width,4)===De?fe.count=Math.max(fe.count,ce.start+ce.count-fe.start):(++ae,re[ae]=ce)}re.length=ae+1;let $=t.getParameter(n.UNPACK_ROW_LENGTH),te=t.getParameter(n.UNPACK_SKIP_PIXELS),le=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let Re=0,fe=re.length;Re<fe;Re++){let ce=re[Re],Ce=Math.floor(ce.start/4),De=Math.ceil(ce.count/4),He=Ce%x.width,O=Math.floor(Ce/x.width),he=De,j=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,He),t.pixelStorei(n.UNPACK_SKIP_ROWS,O),t.texSubImage2D(n.TEXTURE_2D,0,He,O,he,j,k,W,x.data)}C.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,$),t.pixelStorei(n.UNPACK_SKIP_PIXELS,te),t.pixelStorei(n.UNPACK_SKIP_ROWS,le)}}function Me(C,x,k){let W=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(W=n.TEXTURE_3D);let Z=ot(C,x),re=x.source;t.bindTexture(W,C.__webglTexture,n.TEXTURE0+k);let ae=i.get(re);if(re.version!==ae.__version||Z===!0){if(t.activeTexture(n.TEXTURE0+k),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let j=et.getPrimaries(et.workingColorSpace),ue=x.colorSpace===fi?null:et.getPrimaries(x.colorSpace),ve=x.colorSpace===fi||j===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve)}t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let te=m(x.image,!1,s.maxTextureSize);te=$t(x,te);let le=r.convert(x.format,x.colorSpace),Re=r.convert(x.type),fe=y(x.internalFormat,le,Re,x.normalized,x.colorSpace,x.isVideoTexture);tt(W,x);let ce,Ce=x.mipmaps,De=x.isVideoTexture!==!0,He=ae.__version===void 0||Z===!0,O=re.dataReady,he=M(x,te);if(x.isDepthTexture)fe=b(x.format===ki,x.type),He&&(De?t.texStorage2D(n.TEXTURE_2D,1,fe,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,fe,te.width,te.height,0,le,Re,null));else if(x.isDataTexture)if(Ce.length>0){De&&He&&t.texStorage2D(n.TEXTURE_2D,he,fe,Ce[0].width,Ce[0].height);for(let j=0,ue=Ce.length;j<ue;j++)ce=Ce[j],De?O&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,ce.width,ce.height,le,Re,ce.data):t.texImage2D(n.TEXTURE_2D,j,fe,ce.width,ce.height,0,le,Re,ce.data);x.generateMipmaps=!1}else De?(He&&t.texStorage2D(n.TEXTURE_2D,he,fe,te.width,te.height),O&&ne(x,te,le,Re)):t.texImage2D(n.TEXTURE_2D,0,fe,te.width,te.height,0,le,Re,te.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){De&&He&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,fe,Ce[0].width,Ce[0].height,te.depth);for(let j=0,ue=Ce.length;j<ue;j++)if(ce=Ce[j],x.format!==fn)if(le!==null)if(De){if(O)if(x.layerUpdates.size>0){let ve=Xc(ce.width,ce.height,x.format,x.type);for(let se of x.layerUpdates){let Ie=ce.data.subarray(se*ve/ce.data.BYTES_PER_ELEMENT,(se+1)*ve/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,se,ce.width,ce.height,1,le,Ie)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,ce.width,ce.height,te.depth,le,ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,fe,ce.width,ce.height,te.depth,0,ce.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,ce.width,ce.height,te.depth,le,Re,ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,j,fe,ce.width,ce.height,te.depth,0,le,Re,ce.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{De&&He&&t.texStorage2D(n.TEXTURE_2D,he,fe,Ce[0].width,Ce[0].height);for(let j=0,ue=Ce.length;j<ue;j++)ce=Ce[j],x.format!==fn?le!==null?De?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,ce.width,ce.height,le,ce.data):t.compressedTexImage2D(n.TEXTURE_2D,j,fe,ce.width,ce.height,0,ce.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?O&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,ce.width,ce.height,le,Re,ce.data):t.texImage2D(n.TEXTURE_2D,j,fe,ce.width,ce.height,0,le,Re,ce.data)}else if(x.isDataArrayTexture)if(De){if(He&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,fe,te.width,te.height,te.depth),O)if(x.layerUpdates.size>0){let j=Xc(te.width,te.height,x.format,x.type);for(let ue of x.layerUpdates){let ve=te.data.subarray(ue*j/te.data.BYTES_PER_ELEMENT,(ue+1)*j/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ue,te.width,te.height,1,le,Re,ve)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,le,Re,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,fe,te.width,te.height,te.depth,0,le,Re,te.data);else if(x.isData3DTexture)De?(He&&t.texStorage3D(n.TEXTURE_3D,he,fe,te.width,te.height,te.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,le,Re,te.data)):t.texImage3D(n.TEXTURE_3D,0,fe,te.width,te.height,te.depth,0,le,Re,te.data);else if(x.isFramebufferTexture){if(He)if(De)t.texStorage2D(n.TEXTURE_2D,he,fe,te.width,te.height);else{let j=te.width,ue=te.height;for(let ve=0;ve<he;ve++)t.texImage2D(n.TEXTURE_2D,ve,fe,j,ue,0,le,Re,null),j>>=1,ue>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){let j=n.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),te.parentNode!==j){j.appendChild(te),f.add(x),j.onpaint=ue=>{let ve=ue.changedElements;for(let se of f)ve.includes(se.image)&&(se.needsUpdate=!0)},j.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,te);else{let ve=n.RGBA,se=n.RGBA,Ie=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ve,se,Ie,te)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ce.length>0){if(De&&He){let j=ft(Ce[0]);t.texStorage2D(n.TEXTURE_2D,he,fe,j.width,j.height)}for(let j=0,ue=Ce.length;j<ue;j++)ce=Ce[j],De?O&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,le,Re,ce):t.texImage2D(n.TEXTURE_2D,j,fe,le,Re,ce);x.generateMipmaps=!1}else if(De){if(He){let j=ft(te);t.texStorage2D(n.TEXTURE_2D,he,fe,j.width,j.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le,Re,te)}else t.texImage2D(n.TEXTURE_2D,0,fe,le,Re,te);p(x)&&S(W),ae.__version=re.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function ze(C,x,k){if(x.image.length!==6)return;let W=ot(C,x),Z=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+k);let re=i.get(Z);if(Z.version!==re.__version||W===!0){t.activeTexture(n.TEXTURE0+k);let ae=et.getPrimaries(et.workingColorSpace),$=x.colorSpace===fi?null:et.getPrimaries(x.colorSpace),te=x.colorSpace===fi||ae===$?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let le=x.isCompressedTexture||x.image[0].isCompressedTexture,Re=x.image[0]&&x.image[0].isDataTexture,fe=[];for(let se=0;se<6;se++)!le&&!Re?fe[se]=m(x.image[se],!0,s.maxCubemapSize):fe[se]=Re?x.image[se].image:x.image[se],fe[se]=$t(x,fe[se]);let ce=fe[0],Ce=r.convert(x.format,x.colorSpace),De=r.convert(x.type),He=y(x.internalFormat,Ce,De,x.normalized,x.colorSpace),O=x.isVideoTexture!==!0,he=re.__version===void 0||W===!0,j=Z.dataReady,ue=M(x,ce);tt(n.TEXTURE_CUBE_MAP,x);let ve;if(le){O&&he&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,He,ce.width,ce.height);for(let se=0;se<6;se++){ve=fe[se].mipmaps;for(let Ie=0;Ie<ve.length;Ie++){let Te=ve[Ie];x.format!==fn?Ce!==null?O?j&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,0,0,Te.width,Te.height,Ce,Te.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,He,Te.width,Te.height,0,Te.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,0,0,Te.width,Te.height,Ce,De,Te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,He,Te.width,Te.height,0,Ce,De,Te.data)}}}else{if(ve=x.mipmaps,O&&he){ve.length>0&&ue++;let se=ft(fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,He,se.width,se.height)}for(let se=0;se<6;se++)if(Re){O?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,fe[se].width,fe[se].height,Ce,De,fe[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,He,fe[se].width,fe[se].height,0,Ce,De,fe[se].data);for(let Ie=0;Ie<ve.length;Ie++){let vt=ve[Ie].image[se].image;O?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,0,0,vt.width,vt.height,Ce,De,vt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,He,vt.width,vt.height,0,Ce,De,vt.data)}}else{O?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ce,De,fe[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,He,Ce,De,fe[se]);for(let Ie=0;Ie<ve.length;Ie++){let Te=ve[Ie];O?j&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,0,0,Ce,De,Te.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,He,Ce,De,Te.image[se])}}}p(x)&&S(n.TEXTURE_CUBE_MAP),re.__version=Z.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function xe(C,x,k,W,Z,re){let ae=r.convert(k.format,k.colorSpace),$=r.convert(k.type),te=y(k.internalFormat,ae,$,k.normalized,k.colorSpace),le=i.get(x),Re=i.get(k);if(Re.__renderTarget=x,!le.__hasExternalTextures){let fe=Math.max(1,x.width>>re),ce=Math.max(1,x.height>>re);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,re,te,fe,ce,x.depth,0,ae,$,null):t.texImage2D(Z,re,te,fe,ce,0,ae,$,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),Pt(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,Z,Re.__webglTexture,0,Et(x)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,Z,Re.__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Je(C,x,k){if(n.bindRenderbuffer(n.RENDERBUFFER,C),x.depthBuffer){let W=x.depthTexture,Z=W&&W.isDepthTexture?W.type:null,re=b(x.stencilBuffer,Z),ae=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Pt(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Et(x),re,x.width,x.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,Et(x),re,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,re,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,C)}else{let W=x.textures;for(let Z=0;Z<W.length;Z++){let re=W[Z],ae=r.convert(re.format,re.colorSpace),$=r.convert(re.type),te=y(re.internalFormat,ae,$,re.normalized,re.colorSpace);Pt(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Et(x),te,x.width,x.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,Et(x),te,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,te,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Bt(C,x,k){let W=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=i.get(x.depthTexture);if(Z.__renderTarget=x,(!Z.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,x.depthTexture.addEventListener("dispose",A)),Z.__webglTexture===void 0){Z.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),tt(n.TEXTURE_CUBE_MAP,x.depthTexture);let le=r.convert(x.depthTexture.format),Re=r.convert(x.depthTexture.type),fe;x.depthTexture.format===Jn?fe=n.DEPTH_COMPONENT24:x.depthTexture.format===ki&&(fe=n.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,fe,x.width,x.height,0,le,Re,null)}}else Q(x.depthTexture,0);let re=Z.__webglTexture,ae=Et(x),$=W?n.TEXTURE_CUBE_MAP_POSITIVE_X+k:n.TEXTURE_2D,te=x.depthTexture.format===ki?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===Jn)Pt(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,$,re,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,te,$,re,0);else if(x.depthTexture.format===ki)Pt(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,$,re,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,te,$,re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $e(C){let x=i.get(C),k=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){let W=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),W){let Z=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,W.removeEventListener("dispose",Z)};W.addEventListener("dispose",Z),x.__depthDisposeCallback=Z}x.__boundDepthTexture=W}if(C.depthTexture&&!x.__autoAllocateDepthBuffer)if(k)for(let W=0;W<6;W++)Bt(x.__webglFramebuffer[W],C,W);else{let W=C.texture.mipmaps;W&&W.length>0?Bt(x.__webglFramebuffer[0],C,0):Bt(x.__webglFramebuffer,C,0)}else if(k){x.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[W]),x.__webglDepthbuffer[W]===void 0)x.__webglDepthbuffer[W]=n.createRenderbuffer(),Je(x.__webglDepthbuffer[W],C,!1);else{let Z=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=x.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,re)}}else{let W=C.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Je(x.__webglDepthbuffer,C,!1);else{let Z=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,re)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function at(C,x,k){let W=i.get(C);x!==void 0&&xe(W.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&$e(C)}function _t(C){let x=C.texture,k=i.get(C),W=i.get(x);C.addEventListener("dispose",v);let Z=C.textures,re=C.isWebGLCubeRenderTarget===!0,ae=Z.length>1;if(ae||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=x.version,a.memory.textures++),re){k.__webglFramebuffer=[];for(let $=0;$<6;$++)if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[$]=[];for(let te=0;te<x.mipmaps.length;te++)k.__webglFramebuffer[$][te]=n.createFramebuffer()}else k.__webglFramebuffer[$]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let $=0;$<x.mipmaps.length;$++)k.__webglFramebuffer[$]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(ae)for(let $=0,te=Z.length;$<te;$++){let le=i.get(Z[$]);le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&Pt(C)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let $=0;$<Z.length;$++){let te=Z[$];k.__webglColorRenderbuffer[$]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[$]);let le=r.convert(te.format,te.colorSpace),Re=r.convert(te.type),fe=y(te.internalFormat,le,Re,te.normalized,te.colorSpace,C.isXRRenderTarget===!0),ce=Et(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,fe,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.RENDERBUFFER,k.__webglColorRenderbuffer[$])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),Je(k.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),tt(n.TEXTURE_CUBE_MAP,x);for(let $=0;$<6;$++)if(x.mipmaps&&x.mipmaps.length>0)for(let te=0;te<x.mipmaps.length;te++)xe(k.__webglFramebuffer[$][te],C,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+$,te);else xe(k.__webglFramebuffer[$],C,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);p(x)&&S(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let $=0,te=Z.length;$<te;$++){let le=Z[$],Re=i.get(le),fe=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(fe=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,Re.__webglTexture),tt(fe,le),xe(k.__webglFramebuffer,C,le,n.COLOR_ATTACHMENT0+$,fe,0),p(le)&&S(fe)}t.unbindTexture()}else{let $=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&($=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture($,W.__webglTexture),tt($,x),x.mipmaps&&x.mipmaps.length>0)for(let te=0;te<x.mipmaps.length;te++)xe(k.__webglFramebuffer[te],C,x,n.COLOR_ATTACHMENT0,$,te);else xe(k.__webglFramebuffer,C,x,n.COLOR_ATTACHMENT0,$,0);p(x)&&S($),t.unbindTexture()}C.depthBuffer&&$e(C)}function je(C){let x=C.textures;for(let k=0,W=x.length;k<W;k++){let Z=x[k];if(p(Z)){let re=E(C),ae=i.get(Z).__webglTexture;t.bindTexture(re,ae),S(re),t.unbindTexture()}}}let St=[],Wt=[];function cn(C){if(C.samples>0){if(Pt(C)===!1){let x=C.textures,k=C.width,W=C.height,Z=n.COLOR_BUFFER_BIT,re=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=i.get(C),$=x.length>1;if($)for(let le=0;le<x.length;le++)t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);let te=C.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let le=0;le<x.length;le++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),$){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ae.__webglColorRenderbuffer[le]);let Re=i.get(x[le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Re,0)}n.blitFramebuffer(0,0,k,W,0,0,k,W,Z,n.NEAREST),l===!0&&(St.length=0,Wt.length=0,St.push(n.COLOR_ATTACHMENT0+le),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(St.push(re),Wt.push(re),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Wt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,St))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),$)for(let le=0;le<x.length;le++){t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,ae.__webglColorRenderbuffer[le]);let Re=i.get(x[le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,Re,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let x=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Et(C){return Math.min(s.maxSamples,C.samples)}function Pt(C){let x=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function B(C){let x=a.render.frame;h.get(C)!==x&&(h.set(C,x),C.update())}function $t(C,x){let k=C.colorSpace,W=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==xr&&k!==fi&&(et.getTransfer(k)===ut?(W!==fn||Z!==un)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ue("WebGLTextures: Unsupported texture color space:",k)),x}function ft(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=N,this.getTextureUnits=D,this.setTextureUnits=z,this.setTexture2D=Q,this.setTexture2DArray=Y,this.setTexture3D=ee,this.setTextureCube=ie,this.rebindTextures=at,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=cn,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Pt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function gg(n,e){function t(i,s=fi){let r,a=et.getTransfer(s);if(i===un)return n.UNSIGNED_BYTE;if(i===Co)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Po)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Nc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Uc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Lc)return n.BYTE;if(i===Dc)return n.SHORT;if(i===qs)return n.UNSIGNED_SHORT;if(i===Ro)return n.INT;if(i===zn)return n.UNSIGNED_INT;if(i===Tn)return n.FLOAT;if(i===Gn)return n.HALF_FLOAT;if(i===Fc)return n.ALPHA;if(i===Oc)return n.RGB;if(i===fn)return n.RGBA;if(i===Jn)return n.DEPTH_COMPONENT;if(i===ki)return n.DEPTH_STENCIL;if(i===Io)return n.RED;if(i===Lo)return n.RED_INTEGER;if(i===zi)return n.RG;if(i===Do)return n.RG_INTEGER;if(i===No)return n.RGBA_INTEGER;if(i===Hr||i===Wr||i===Xr||i===qr)if(a===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Uo||i===Fo||i===Oo||i===Bo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Uo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Oo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Bo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ko||i===zo||i===Go||i===Vo||i===Ho||i===Yr||i===Wo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ko||i===zo)return a===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Go)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Vo)return r.COMPRESSED_R11_EAC;if(i===Ho)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Yr)return r.COMPRESSED_RG11_EAC;if(i===Wo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Xo||i===qo||i===Yo||i===Zo||i===Jo||i===$o||i===Ko||i===Qo||i===jo||i===el||i===tl||i===nl||i===il||i===sl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Xo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===qo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Zo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Jo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$o)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ko)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Qo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===jo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===el)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===tl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===nl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===il)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===sl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===rl||i===al||i===ol)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===rl)return a===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===al)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ol)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ll||i===cl||i===Zr||i===hl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ll)return r.COMPRESSED_RED_RGTC1_EXT;if(i===cl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ys?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var _g=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,hh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Lr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new kt({vertexShader:_g,fragmentShader:vg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rt(new jn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},uh=class extends $n{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,g=null,_=typeof XRWebGLBinding<"u",m=new hh,p={},S=t.getContextAttributes(),E=null,y=null,b=[],M=[],A=new _e,v=null,w=null,R=new en;R.viewport=new wt;let P=new en;P.viewport=new wt;let L=[R,P],N=new So,D=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ne=b[J];return ne===void 0&&(ne=new Us,b[J]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(J){let ne=b[J];return ne===void 0&&(ne=new Us,b[J]=ne),ne.getGripSpace()},this.getHand=function(J){let ne=b[J];return ne===void 0&&(ne=new Us,b[J]=ne),ne.getHandSpace()};function F(J){let ne=M.indexOf(J.inputSource);if(ne===-1)return;let Me=b[ne];Me!==void 0&&(Me.update(J.inputSource,J.frame,c||a),Me.dispatchEvent({type:J.type,data:J.inputSource}))}function X(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",Q);for(let J=0;J<b.length;J++){let ne=M[J];ne!==null&&(M[J]=null,b[J].disconnect(ne))}D=null,z=null,m.reset();for(let J in p)delete p[J];if(e.setRenderTarget(E),d=null,u=null,f=null,s=null,y=null,ot.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(A.width,A.height,!1),w!==null){let J=w.camera;J.fov=w.fov,J.zoom=w.zoom,J.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",X),s.addEventListener("inputsourceschange",Q),S.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,ze=null,xe=null;S.depth&&(xe=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=S.stencil?ki:Jn,ze=S.stencil?Ys:zn);let Je={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Je),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new hn(u.textureWidth,u.textureHeight,{format:fn,type:un,depthTexture:new Ci(u.textureWidth,u.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Me={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Me),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new hn(d.framebufferWidth,d.framebufferHeight,{format:fn,type:un,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ot.setContext(s),ot.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(J){for(let ne=0;ne<J.removed.length;ne++){let Me=J.removed[ne],ze=M.indexOf(Me);ze>=0&&(M[ze]=null,b[ze].disconnect(Me))}for(let ne=0;ne<J.added.length;ne++){let Me=J.added[ne],ze=M.indexOf(Me);if(ze===-1){for(let Je=0;Je<b.length;Je++)if(Je>=M.length){M.push(Me),ze=Je;break}else if(M[Je]===null){M[Je]=Me,ze=Je;break}if(ze===-1)break}let xe=b[ze];xe&&xe.connect(Me)}}let Y=new I,ee=new I;function ie(J,ne,Me){Y.setFromMatrixPosition(ne.matrixWorld),ee.setFromMatrixPosition(Me.matrixWorld);let ze=Y.distanceTo(ee),xe=ne.projectionMatrix.elements,Je=Me.projectionMatrix.elements,Bt=xe[14]/(xe[10]-1),$e=xe[14]/(xe[10]+1),at=(xe[9]+1)/xe[5],_t=(xe[9]-1)/xe[5],je=(xe[8]-1)/xe[0],St=(Je[8]+1)/Je[0],Wt=Bt*je,cn=Bt*St,Et=ze/(-je+St),Pt=Et*-je;if(ne.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Pt),J.translateZ(Et),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),xe[10]===-1)J.projectionMatrix.copy(ne.projectionMatrix),J.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let B=Bt+Et,$t=$e+Et,ft=Wt-Pt,C=cn+(ze-Pt),x=at*$e/$t*B,k=_t*$e/$t*B;J.projectionMatrix.makePerspective(ft,C,x,k,B,$t),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Le(J,ne){ne===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ne.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ne=J.near,Me=J.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(Me=m.depthFar)),N.near=P.near=R.near=ne,N.far=P.far=R.far=Me,(D!==N.near||z!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),D=N.near,z=N.far),N.layers.mask=J.layers.mask|6,R.layers.mask=N.layers.mask&-5,P.layers.mask=N.layers.mask&-3;let ze=J.parent,xe=N.cameras;Le(N,ze);for(let Je=0;Je<xe.length;Je++)Le(xe[Je],ze);xe.length===2?ie(N,R,P):N.projectionMatrix.copy(R.projectionMatrix),w===null&&J.isPerspectiveCamera&&(w={camera:J,fov:J.fov,zoom:J.zoom}),Pe(J,N,ze)};function Pe(J,ne,Me){Me===null?J.matrix.copy(ne.matrixWorld):(J.matrix.copy(Me.matrixWorld),J.matrix.invert(),J.matrix.multiply(ne.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ne.projectionMatrix),J.projectionMatrixInverse.copy(ne.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ds*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(J){return p[J]};let gt=null;function tt(J,ne){if(h=ne.getViewerPose(c||a),g=ne,h!==null){let Me=h.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let ze=!1;Me.length!==N.cameras.length&&(N.cameras.length=0,ze=!0);for(let $e=0;$e<Me.length;$e++){let at=Me[$e],_t=null;if(d!==null)_t=d.getViewport(at);else{let St=f.getViewSubImage(u,at);_t=St.viewport,$e===0&&(e.setRenderTargetTextures(y,St.colorTexture,St.depthStencilTexture),e.setRenderTarget(y))}let je=L[$e];je===void 0&&(je=new en,je.layers.enable($e),je.viewport=new wt,L[$e]=je),je.matrix.fromArray(at.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(at.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(_t.x,_t.y,_t.width,_t.height),$e===0&&(N.matrix.copy(je.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),ze===!0&&N.cameras.push(je)}let xe=s.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){f=i.getBinding();let $e=f.getDepthInformation(Me[0]);$e&&$e.isValid&&$e.texture&&m.init($e,s.renderState)}if(xe&&xe.includes("camera-access")&&_){e.state.unbindTexture(),f=i.getBinding();for(let $e=0;$e<Me.length;$e++){let at=Me[$e].camera;if(at){let _t=p[at];_t||(_t=new Lr,p[at]=_t);let je=f.getCameraImage(at);_t.sourceTexture=je}}}}for(let Me=0;Me<b.length;Me++){let ze=M[Me],xe=b[Me];ze!==null&&xe!==void 0&&xe.update(ze,ne,c||a)}gt&&gt(J,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}let ot=new Cf;ot.setAnimationLoop(tt),this.setAnimationLoop=function(J){gt=J},this.dispose=function(){}}},yg=new nt,Uf=new Be;Uf.set(-1,0,0,0,1,0,0,0,1);function xg(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Vc(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,E,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ft&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ft&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=e.get(p),E=S.envMap,y=S.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(yg.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Uf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ft&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function bg(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){let M=b.program;i.uniformBlockBinding(y,M)}function c(y,b){let M=s[y.id];M===void 0&&(m(y),M=h(y),s[y.id]=M,y.addEventListener("dispose",S));let A=b.program;i.updateUBOMapping(y,A);let v=e.render.frame;r[y.id]!==v&&(u(y),r[y.id]=v)}function h(y){let b=f();y.__bindingPointIndex=b;let M=n.createBuffer(),A=y.__size,v=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,A,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,M),M}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let b=s[y.id],M=y.uniforms,A=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let v=0,w=M.length;v<w;v++){let R=M[v];if(Array.isArray(R))for(let P=0,L=R.length;P<L;P++)d(R[P],v,P,A);else d(R,v,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(y,b,M,A){if(_(y,b,M,A)===!0){let v=y.__offset,w=y.value;if(Array.isArray(w)){let R=0;for(let P=0;P<w.length;P++){let L=w[P],N=p(L);g(L,y.__data,R),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(R+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,y.__data)}}function g(y,b,M){typeof y=="number"||typeof y=="boolean"?b[0]=y:y.isMatrix3?(b[0]=y.elements[0],b[1]=y.elements[1],b[2]=y.elements[2],b[3]=0,b[4]=y.elements[3],b[5]=y.elements[4],b[6]=y.elements[5],b[7]=0,b[8]=y.elements[6],b[9]=y.elements[7],b[10]=y.elements[8],b[11]=0):ArrayBuffer.isView(y)?b.set(new y.constructor(y.buffer,y.byteOffset,b.length)):y.toArray(b,M)}function _(y,b,M,A){let v=y.value,w=b+"_"+M;if(A[w]===void 0)return typeof v=="number"||typeof v=="boolean"?A[w]=v:ArrayBuffer.isView(v)?A[w]=v.slice():A[w]=v.clone(),!0;{let R=A[w];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return A[w]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function m(y){let b=y.uniforms,M=0,A=16;for(let w=0,R=b.length;w<R;w++){let P=Array.isArray(b[w])?b[w]:[b[w]];for(let L=0,N=P.length;L<N;L++){let D=P[L],z=Array.isArray(D.value)?D.value:[D.value];for(let F=0,X=z.length;F<X;F++){let Q=z[F],Y=p(Q),ee=M%A,ie=ee%Y.boundary,Le=ee+ie;M+=ie,Le!==0&&A-Le<Y.storage&&(M+=A-Le),D.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=M,M+=Y.storage}}}let v=M%A;return v>0&&(M+=A-v),y.__size=M,y.__cache={},this}function p(y){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",y),b}function S(y){let b=y.target;b.removeEventListener("dispose",S);let M=a.indexOf(b.__bindingPointIndex);a.splice(M,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function E(){for(let y in s)n.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:E}}var Mg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ti=null;function Sg(){return ti===null&&(ti=new Qi(Mg,16,16,zi,Gn),ti.name="DFG_LUT",ti.minFilter=Zt,ti.magFilter=Zt,ti.wrapS=Zn,ti.wrapT=Zn,ti.generateMipmaps=!1,ti.needsUpdate=!0),ti}var yl=class{constructor(e={}){let{canvas:t=Qu(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=un}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let _=d,m=new Set([No,Do,Lo]),p=new Set([un,zn,qs,Ys,Co,Po]),S=new Uint32Array(4),E=new Int32Array(4),y=new I,b=null,M=null,A=[],v=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,L=null,N=null,D=null,z=null;this._outputColorSpace=Dt;let F=0,X=0,Q=null,Y=-1,ee=null,ie=new wt,Le=new wt,Pe=null,gt=new Fe(0),tt=0,ot=t.width,J=t.height,ne=1,Me=null,ze=null,xe=new wt(0,0,ot,J),Je=new wt(0,0,ot,J),Bt=!1,$e=new ks,at=!1,_t=!1,je=new nt,St=new I,Wt=new wt,cn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Et=!1;function Pt(){return Q===null?ne:1}let B=i;function $t(T,U){return t.getContext(T,U)}let ft,C,x,k,W,Z,re,ae,$,te,le,Re,fe,ce,Ce,De,He,O,he,j,ue,ve,se;try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",vt,!1),t.addEventListener("webglcontextrestored",ct,!1),t.addEventListener("webglcontextcreationerror",In,!1),B===null){let U="webgl2";if(B=$t(U,T),B===null)throw $t(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ie()}catch(T){throw t.removeEventListener("webglcontextlost",vt,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",In,!1),Ue("WebGLRenderer: "+T.message),T}function Ie(){ft=new Pm(B),ft.init(),ue=new gg(B,ft),C=new xm(B,ft,e,ue),x=new pg(B,ft),C.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),N=B.createFramebuffer(),D=B.createFramebuffer(),z=B.createFramebuffer(),k=new Dm(B),W=new eg,Z=new mg(B,ft,x,W,C,ue,k),re=new Cm(R),ae=new Up(B),ve=new vm(B,ae),$=new Im(B,ae,k,ve),te=new Um(B,$,ae,ve,k),O=new Nm(B,C,Z),Ce=new bm(W),le=new j2(R,re,ft,C,ve,Ce),Re=new xg(R,W),fe=new ng,ce=new lg(ft),He=new _m(R,re,x,te,g,l),De=new dg(R,te,C),se=new bg(B,k,C,x),he=new ym(B,ft,k),j=new Lm(B,ft,k),k.programs=le.programs,R.capabilities=C,R.extensions=ft,R.properties=W,R.renderLists=fe,R.shadowMap=De,R.state=x,R.info=k}_!==un&&(w=new Om(_,t.width,t.height,o,s,r));let Te=new uh(R,B);this.xr=Te,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let T=ft.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ft.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(T){T!==void 0&&(ne=T,this.setSize(ot,J,!1))},this.getSize=function(T){return T.set(ot,J)},this.setSize=function(T,U,q=!0){if(Te.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}ot=T,J=U,t.width=Math.floor(T*ne),t.height=Math.floor(U*ne),q===!0&&(t.style.width=T+"px",t.style.height=U+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(ot*ne,J*ne).floor()},this.setDrawingBufferSize=function(T,U,q){ot=T,J=U,ne=q,t.width=Math.floor(T*q),t.height=Math.floor(U*q),this.setViewport(0,0,T,U)},this.setEffects=function(T){if(_===un){Ue("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let U=0;U<T.length;U++)if(T[U].isOutputPass===!0){Ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(ie)},this.getViewport=function(T){return T.copy(xe)},this.setViewport=function(T,U,q,G){T.isVector4?xe.set(T.x,T.y,T.z,T.w):xe.set(T,U,q,G),x.viewport(ie.copy(xe).multiplyScalar(ne).round())},this.getScissor=function(T){return T.copy(Je)},this.setScissor=function(T,U,q,G){T.isVector4?Je.set(T.x,T.y,T.z,T.w):Je.set(T,U,q,G),x.scissor(Le.copy(Je).multiplyScalar(ne).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(T){x.setScissorTest(Bt=T)},this.setOpaqueSort=function(T){Me=T},this.setTransparentSort=function(T){ze=T},this.getClearColor=function(T){return T.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(T=!0,U=!0,q=!0){let G=0;if(T){let V=!1;if(Q!==null){let ge=Q.texture.format;V=m.has(ge)}if(V){let ge=Q.texture.type,be=p.has(ge),pe=He.getClearColor(),Se=He.getClearAlpha(),Ee=pe.r,qe=pe.g,Ke=pe.b;be?(S[0]=Ee,S[1]=qe,S[2]=Ke,S[3]=Se,B.clearBufferuiv(B.COLOR,0,S)):(E[0]=Ee,E[1]=qe,E[2]=Ke,E[3]=Se,B.clearBufferiv(B.COLOR,0,E))}else G|=B.COLOR_BUFFER_BIT}U&&(G|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(G|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&B.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),L=T},this.dispose=function(){t.removeEventListener("webglcontextlost",vt,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",In,!1),He.dispose(),fe.dispose(),ce.dispose(),W.dispose(),re.dispose(),te.dispose(),ve.dispose(),se.dispose(),le.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Uh),Te.removeEventListener("sessionend",Fh),Xi.stop()};function vt(T){T.preventDefault(),Sr("WebGLRenderer: Context Lost."),P=!0}function ct(){Sr("WebGLRenderer: Context Restored."),P=!1;let T=k.autoReset,U=De.enabled,q=De.autoUpdate,G=De.needsUpdate,V=De.type;Ie(),k.autoReset=T,De.enabled=U,De.autoUpdate=q,De.needsUpdate=G,De.type=V}function In(T){Ue("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Xn(T){let U=T.target;U.removeEventListener("dispose",Xn),yd(U)}function yd(T){xd(T),W.remove(T)}function xd(T){let U=W.get(T).programs;U!==void 0&&(U.forEach(function(q){le.releaseProgram(q)}),T.isShaderMaterial&&le.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,q,G,V,ge){U===null&&(U=cn);let be=V.isMesh&&V.matrixWorld.determinantAffine()<0,pe=Sd(T,U,q,G,V);x.setMaterial(G,be);let Se=q.index,Ee=1;if(G.wireframe===!0){if(Se=$.getWireframeAttribute(q),Se===void 0)return;Ee=2}let qe=q.drawRange,Ke=q.attributes.position,we=qe.start*Ee,ht=(qe.start+qe.count)*Ee;ge!==null&&(we=Math.max(we,ge.start*Ee),ht=Math.min(ht,(ge.start+ge.count)*Ee)),Se!==null?(we=Math.max(we,0),ht=Math.min(ht,Se.count)):Ke!=null&&(we=Math.max(we,0),ht=Math.min(ht,Ke.count));let It=ht-we;if(It<0||It===1/0)return;ve.setup(V,G,pe,q,Se);let xt,mt=he;if(Se!==null&&(xt=ae.get(Se),mt=j,mt.setIndex(xt)),V.isMesh)G.wireframe===!0?(x.setLineWidth(G.wireframeLinewidth*Pt()),mt.setMode(B.LINES)):mt.setMode(B.TRIANGLES);else if(V.isLine){let Kt=G.linewidth;Kt===void 0&&(Kt=1),x.setLineWidth(Kt*Pt()),V.isLineSegments?mt.setMode(B.LINES):V.isLineLoop?mt.setMode(B.LINE_LOOP):mt.setMode(B.LINE_STRIP)}else V.isPoints?mt.setMode(B.POINTS):V.isSprite&&mt.setMode(B.TRIANGLES);if(V.isBatchedMesh)if(ft.get("WEBGL_multi_draw"))mt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Kt=V._multiDrawStarts,ye=V._multiDrawCounts,sn=V._multiDrawCount,it=Se?ae.get(Se).bytesPerElement:1,bn=W.get(G).currentProgram.getUniforms();for(let qn=0;qn<sn;qn++)bn.setValue(B,"_gl_DrawID",qn),mt.render(Kt[qn]/it,ye[qn])}else if(V.isInstancedMesh)mt.renderInstances(we,It,V.count);else if(q.isInstancedBufferGeometry){let Kt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ye=Math.min(q.instanceCount,Kt);mt.renderInstances(we,It,ye)}else mt.render(we,It)};function Nh(T,U,q,G){L!==null&&T.isNodeMaterial&&L.setObject(G,T),at===!0&&Ce.setState(T,q,!1),T.transparent===!0&&T.side===yn&&T.forceSinglePass===!1?(T.side=Ft,T.needsUpdate=!0,fa(T,U,G),T.side=Ui,T.needsUpdate=!0,fa(T,U,G),T.side=yn):fa(T,U,G)}this.compile=function(T,U,q=null){q===null&&(q=T),L!==null&&L.renderStart(T,U,q),M=ce.get(q),M.init(U),v.push(M),q.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(M.pushLight(V),V.castShadow&&M.pushShadow(V))}),T!==q&&T.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(M.pushLight(V),V.castShadow&&M.pushShadow(V))}),M.setupLights(),L!==null&&L.updateLights(M.state.lightsArray),_t=this.localClippingEnabled,at=Ce.init(this.clippingPlanes,_t),at===!0&&Ce.setGlobalState(this.clippingPlanes,U),L!==null&&De.render(M.state.shadowsArray,q,U);let G=new Set;return T.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let ge=V.material;if(ge)if(Array.isArray(ge))for(let be=0;be<ge.length;be++){let pe=ge[be];Nh(pe,q,U,V),G.add(pe)}else Nh(ge,q,U,V),G.add(ge)}),M=v.pop(),L!==null&&L.renderEnd(),G},this.compileAsync=function(T,U,q=null){let G=this.compile(T,U,q);return new Promise(V=>{function ge(){if(G.forEach(function(be){let Se=W.get(be).currentProgram;(Se===void 0||Se.isReady())&&G.delete(be)}),G.size===0){V(T);return}setTimeout(ge,10)}ft.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Bl=null;function bd(T){Bl&&Bl(T)}function Uh(){Xi.stop()}function Fh(){Xi.start()}let Xi=new Cf;Xi.setAnimationLoop(bd),typeof self<"u"&&Xi.setContext(self),this.setAnimationLoop=function(T){Bl=T,Te.setAnimationLoop(T),T===null?Xi.stop():Xi.start()},Te.addEventListener("sessionstart",Uh),Te.addEventListener("sessionend",Fh),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){Ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;L!==null&&L.renderStart(T,U);let q=Te.enabled===!0&&Te.isPresenting===!0,G=w!==null&&(Q===null||q)&&w.begin(R,Q);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(U),U=Te.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,U,Q),M=ce.get(T,v.length),M.init(U),M.state.textureUnits=Z.getTextureUnits(),v.push(M),je.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$e.setFromProjectionMatrix(je,On,U.reversedDepth),_t=this.localClippingEnabled,at=Ce.init(this.clippingPlanes,_t),b=fe.get(T,A.length),b.init(),A.push(b),Te.enabled===!0&&Te.isPresenting===!0){let be=R.xr.getDepthSensingMesh();be!==null&&kl(be,U,-1/0,R.sortObjects)}kl(T,U,0,R.sortObjects),b.finish(),L!==null&&L.updateLights(M.state.lightsArray),R.sortObjects===!0&&b.sort(Me,ze),Et=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,Et&&He.addToRenderList(b,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),at===!0&&Ce.beginShadows();let V=M.state.shadowsArray;if(De.render(V,T,U),at===!0&&Ce.endShadows(),(G&&w.hasRenderPass())===!1){let be=b.opaque,pe=b.transmissive;if(M.setupLights(),U.isArrayCamera){let Se=U.cameras;if(pe.length>0)for(let Ee=0,qe=Se.length;Ee<qe;Ee++){let Ke=Se[Ee];Bh(be,pe,T,Ke)}Et&&He.render(T);for(let Ee=0,qe=Se.length;Ee<qe;Ee++){let Ke=Se[Ee];Oh(b,T,Ke,Ke.viewport)}}else pe.length>0&&Bh(be,pe,T,U),Et&&He.render(T),Oh(b,T,U)}Q!==null&&X===0&&(Z.updateMultisampleRenderTarget(Q),Z.updateRenderTargetMipmap(Q)),G&&w.end(R),T.isScene===!0&&T.onAfterRender(R,T,U),ve.resetDefaultState(),Y=-1,ee=null,v.pop(),v.length>0?(M=v[v.length-1],Z.setTextureUnits(M.state.textureUnits),at===!0&&Ce.setGlobalState(R.clippingPlanes,M.state.camera)):M=null,A.pop(),A.length>0?b=A[A.length-1]:b=null,L!==null&&L.renderEnd()};function kl(T,U,q,G){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLightProbeGrid)M.pushLightProbeGrid(T);else if(T.isLight)M.pushLight(T),T.castShadow&&M.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum($e)){G&&Wt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(je);let be=te.update(T),pe=T.material;pe.visible&&b.push(T,be,pe,q,Wt.z,null,U)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum($e))){let be=te.update(T),pe=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Wt.copy(T.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Wt.copy(be.boundingSphere.center)),Wt.applyMatrix4(T.matrixWorld).applyMatrix4(je)),Array.isArray(pe)){let Se=be.groups;for(let Ee=0,qe=Se.length;Ee<qe;Ee++){let Ke=Se[Ee],we=pe[Ke.materialIndex];we&&we.visible&&b.push(T,be,we,q,Wt.z,Ke,U)}}else pe.visible&&b.push(T,be,pe,q,Wt.z,null,U)}}let ge=T.children;for(let be=0,pe=ge.length;be<pe;be++)kl(ge[be],U,q,G)}function Oh(T,U,q,G){let{opaque:V,transmissive:ge,transparent:be}=T;M.setupLightsView(q),at===!0&&Ce.setGlobalState(R.clippingPlanes,q),G&&x.viewport(ie.copy(G)),V.length>0&&ua(V,U,q),ge.length>0&&ua(ge,U,q),be.length>0&&ua(be,U,q),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Bh(T,U,q,G){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[G.id]===void 0){let we=ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[G.id]=new hn(1,1,{generateMipmaps:!0,type:we?Gn:un,minFilter:Bi,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:et.workingColorSpace})}let ge=M.state.transmissionRenderTarget[G.id],be=G.viewport||ie;ge.setSize(be.z*R.transmissionResolutionScale,be.w*R.transmissionResolutionScale);let pe=R.getRenderTarget(),Se=R.getActiveCubeFace(),Ee=R.getActiveMipmapLevel();R.setRenderTarget(ge),R.getClearColor(gt),tt=R.getClearAlpha(),tt<1&&R.setClearColor(16777215,.5),R.clear(),Et&&He.render(q);let qe=R.toneMapping;R.toneMapping=kn;let Ke=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),M.setupLightsView(G),at===!0&&Ce.setGlobalState(R.clippingPlanes,G),ua(T,q,G),Z.updateMultisampleRenderTarget(ge),Z.updateRenderTargetMipmap(ge),ft.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let ht=0,It=U.length;ht<It;ht++){let xt=U[ht],{object:mt,geometry:Kt,material:ye,group:sn}=xt;if(ye.side===yn&&mt.layers.test(G.layers)){let it=ye.side;ye.side=Ft,ye.needsUpdate=!0,kh(mt,q,G,Kt,ye,sn),ye.side=it,ye.needsUpdate=!0,we=!0}}we===!0&&(Z.updateMultisampleRenderTarget(ge),Z.updateRenderTargetMipmap(ge))}R.setRenderTarget(pe,Se,Ee),R.setClearColor(gt,tt),Ke!==void 0&&(G.viewport=Ke),R.toneMapping=qe}function ua(T,U,q){let G=U.isScene===!0?U.overrideMaterial:null;for(let V=0,ge=T.length;V<ge;V++){let be=T[V],{object:pe,geometry:Se,group:Ee}=be,qe=be.material;qe.allowOverride===!0&&G!==null&&(qe=G),pe.layers.test(q.layers)&&kh(pe,U,q,Se,qe,Ee)}}function kh(T,U,q,G,V,ge){L!==null&&V.isNodeMaterial&&L.setObject(T,V),T.onBeforeRender(R,U,q,G,V,ge),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(R,U,q,G,T,ge),V.transparent===!0&&V.side===yn&&V.forceSinglePass===!1?(V.side=Ft,V.needsUpdate=!0,R.renderBufferDirect(q,U,G,V,T,ge),V.side=Ui,V.needsUpdate=!0,R.renderBufferDirect(q,U,G,V,T,ge),V.side=yn):R.renderBufferDirect(q,U,G,V,T,ge),T.onAfterRender(R,U,q,G,V,ge)}function fa(T,U,q){U.isScene!==!0&&(U=cn);let G=W.get(T),V=M.state.lights,ge=M.state.shadowsArray,be=V.state.version,pe=le.getParameters(T,V.state,ge,U,q,M.state.lightProbeGridArray),Se=le.getProgramCacheKey(pe),Ee=G.programs;G.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;let qe=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;G.envMap=re.get(T.envMap||G.environment,qe),G.envMapRotation=G.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Ee===void 0&&(T.addEventListener("dispose",Xn),Ee=new Map,G.programs=Ee);let Ke=Ee.get(Se);if(Ke!==void 0){if(G.currentProgram===Ke&&G.lightsStateVersion===be)return Gh(T,pe),Ke}else pe.uniforms=le.getUniforms(T),L!==null&&T.isNodeMaterial&&L.build(T,q,pe),T.onBeforeCompile(pe,R),Ke=le.acquireProgram(pe,Se),Ee.set(Se,Ke),G.uniforms=pe.uniforms;let we=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(we.clippingPlanes=Ce.uniform),Gh(T,pe),G.needsLights=Td(T),G.lightsStateVersion=be,G.needsLights&&(we.ambientLightColor.value=V.state.ambient,we.lightProbe.value=V.state.probe,we.sunLights.value=V.state.sun,we.sunLightShadows.value=V.state.sunShadow,we.directionalLights.value=V.state.directional,we.directionalLightShadows.value=V.state.directionalShadow,we.spotLights.value=V.state.spot,we.spotLightShadows.value=V.state.spotShadow,we.rectAreaLights.value=V.state.rectArea,we.ltc_1.value=V.state.rectAreaLTC1,we.ltc_2.value=V.state.rectAreaLTC2,we.pointLights.value=V.state.point,we.pointLightShadows.value=V.state.pointShadow,we.hemisphereLights.value=V.state.hemi,we.sunShadowMatrix.value=V.state.sunShadowMatrix,we.sunShadowCascade.value=V.state.sunShadowCascade,we.directionalShadowMatrix.value=V.state.directionalShadowMatrix,we.spotLightMatrix.value=V.state.spotLightMatrix,we.spotLightMap.value=V.state.spotLightMap,we.pointShadowMatrix.value=V.state.pointShadowMatrix),G.lightProbeGrid=M.state.lightProbeGridArray.length>0,G.currentProgram=Ke,G.uniformsList=null,Ke}function zh(T){if(T.uniformsList===null){let U=T.currentProgram.getUniforms();T.uniformsList=$s.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Gh(T,U){let q=W.get(T);q.outputColorSpace=U.outputColorSpace,q.batching=U.batching,q.batchingColor=U.batchingColor,q.instancing=U.instancing,q.instancingColor=U.instancingColor,q.instancingMorph=U.instancingMorph,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function Md(T,U){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;y.setFromMatrixPosition(U.matrixWorld);for(let q=0,G=T.length;q<G;q++){let V=T[q];if(V.texture!==null&&V.boundingBox.containsPoint(y))return V}return null}function Sd(T,U,q,G,V){U.isScene!==!0&&(U=cn),Z.resetTextureUnits();let ge=U.fog,be=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,pe=Q===null?R.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:et.workingColorSpace,Se=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ee=re.get(G.envMap||be,Se),qe=G.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ke=!!q.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),we=!!q.morphAttributes.position,ht=!!q.morphAttributes.normal,It=!!q.morphAttributes.color,xt=kn;G.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(xt=R.toneMapping);let mt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Kt=mt!==void 0?mt.length:0,ye=W.get(G),sn=M.state.lights;if(at===!0&&(_t===!0||T!==ee)){let yt=T===ee&&G.id===Y;Ce.setState(G,T,yt)}let it=!1;G.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==sn.state.version||ye.outputColorSpace!==pe||V.isBatchedMesh&&ye.batching===!1||!V.isBatchedMesh&&ye.batching===!0||V.isBatchedMesh&&ye.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&ye.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&ye.instancing===!1||!V.isInstancedMesh&&ye.instancing===!0||V.isSkinnedMesh&&ye.skinning===!1||!V.isSkinnedMesh&&ye.skinning===!0||V.isInstancedMesh&&ye.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&ye.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&ye.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&ye.instancingMorph===!1&&V.morphTexture!==null||ye.envMap!==Ee||G.fog===!0&&ye.fog!==ge||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Ce.numPlanes||ye.numIntersection!==Ce.numIntersection)||ye.vertexAlphas!==qe||ye.vertexTangents!==Ke||ye.morphTargets!==we||ye.morphNormals!==ht||ye.morphColors!==It||ye.toneMapping!==xt||ye.morphTargetsCount!==Kt||!!ye.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(it=!0):(it=!0,ye.__version=G.version);let bn=ye.currentProgram;it===!0&&(bn=fa(G,U,V),L&&G.isNodeMaterial&&L.onUpdateProgram(G,bn,ye));let qn=!1,xi=!1,cs=!1,pt=bn.getUniforms(),Ct=ye.uniforms;if(x.useProgram(bn.program)&&(qn=!0,xi=!0,cs=!0),G.id!==Y&&(Y=G.id,xi=!0),ye.needsLights){let yt=Md(M.state.lightProbeGridArray,V);ye.lightProbeGrid!==yt&&(ye.lightProbeGrid=yt,xi=!0)}if(qn||ee!==T){x.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),pt.setValue(B,"projectionMatrix",T.projectionMatrix),pt.setValue(B,"viewMatrix",T.matrixWorldInverse);let Mi=pt.map.cameraPosition;Mi!==void 0&&Mi.setValue(B,St.setFromMatrixPosition(T.matrixWorld)),C.logarithmicDepthBuffer&&pt.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&pt.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),ee!==T&&(ee=T,xi=!0,cs=!0)}if(ye.needsLights&&(sn.state.sunShadowMap.length>0&&pt.setValue(B,"sunShadowMap",sn.state.sunShadowMap,Z),sn.state.directionalShadowMap.length>0&&pt.setValue(B,"directionalShadowMap",sn.state.directionalShadowMap,Z),sn.state.spotShadowMap.length>0&&pt.setValue(B,"spotShadowMap",sn.state.spotShadowMap,Z),sn.state.pointShadowMap.length>0&&pt.setValue(B,"pointShadowMap",sn.state.pointShadowMap,Z)),V.isSkinnedMesh){pt.setOptional(B,V,"bindMatrix"),pt.setOptional(B,V,"bindMatrixInverse");let yt=V.skeleton;yt&&(yt.boneTexture===null&&yt.computeBoneTexture(),pt.setValue(B,"boneTexture",yt.boneTexture,Z))}V.isBatchedMesh&&(pt.setOptional(B,V,"batchingTexture"),pt.setValue(B,"batchingTexture",V._matricesTexture,Z),pt.setOptional(B,V,"batchingIdTexture"),pt.setValue(B,"batchingIdTexture",V._indirectTexture,Z),pt.setOptional(B,V,"batchingColorTexture"),V._colorsTexture!==null&&pt.setValue(B,"batchingColorTexture",V._colorsTexture,Z));let bi=q.morphAttributes;if((bi.position!==void 0||bi.normal!==void 0||bi.color!==void 0)&&O.update(V,q,bn),(xi||ye.receiveShadow!==V.receiveShadow)&&(ye.receiveShadow=V.receiveShadow,pt.setValue(B,"receiveShadow",V.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(Ct.envMapIntensity.value=U.environmentIntensity),Ct.dfgLUT!==void 0&&(Ct.dfgLUT.value=Sg()),xi){if(pt.setValue(B,"toneMappingExposure",R.toneMappingExposure),ye.needsLights&&wd(Ct,cs),ge&&G.fog===!0&&Re.refreshFogUniforms(Ct,ge),Re.refreshMaterialUniforms(Ct,G,ne,J,M.state.transmissionRenderTarget[T.id]),ye.needsLights&&ye.lightProbeGrid){let yt=ye.lightProbeGrid;Ct.probesSH.value=yt.texture,Ct.probesMin.value.copy(yt.boundingBox.min),Ct.probesMax.value.copy(yt.boundingBox.max),Ct.probesResolution.value.copy(yt.resolution)}$s.upload(B,zh(ye),Ct,Z)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&($s.upload(B,zh(ye),Ct,Z),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&pt.setValue(B,"center",V.center),pt.setValue(B,"modelViewMatrix",V.modelViewMatrix),pt.setValue(B,"normalMatrix",V.normalMatrix),pt.setValue(B,"modelMatrix",V.matrixWorld),G.uniformsGroups!==void 0){let yt=G.uniformsGroups;for(let Mi=0,hs=yt.length;Mi<hs;Mi++){let Hh=yt[Mi];se.update(Hh,bn),se.bind(Hh,bn)}}return bn}function wd(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.sunLights.needsUpdate=U,T.sunLightShadows.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function Td(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(T,U,q){let G=W.get(T);G.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),W.get(T.texture).__webglTexture=U,W.get(T.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:q,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,U){let q=W.get(T);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,q=0){Q=T,F=U,X=q;let G=null,V=!1,ge=!1;if(T){let pe=W.get(T);if(pe.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(B.FRAMEBUFFER,pe.__webglFramebuffer),ie.copy(T.viewport),Le.copy(T.scissor),Pe=T.scissorTest,x.viewport(ie),x.scissor(Le),x.setScissorTest(Pe),Y=-1;return}else if(pe.__webglFramebuffer===void 0)Z.setupRenderTarget(T);else if(pe.__hasExternalTextures)Z.rebindTextures(T,W.get(T.texture).__webglTexture,W.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let qe=T.depthTexture;if(pe.__boundDepthTexture!==qe){if(qe!==null&&W.has(qe)&&(T.width!==qe.image.width||T.height!==qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(T)}}let Se=T.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(ge=!0);let Ee=W.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ee[U])?G=Ee[U][q]:G=Ee[U],V=!0):T.samples>0&&Z.useMultisampledRTT(T)===!1?G=W.get(T).__webglMultisampledFramebuffer:Array.isArray(Ee)?G=Ee[q]:G=Ee,ie.copy(T.viewport),Le.copy(T.scissor),Pe=T.scissorTest}else ie.copy(xe).multiplyScalar(ne).floor(),Le.copy(Je).multiplyScalar(ne).floor(),Pe=Bt;if(q!==0&&(G=N),x.bindFramebuffer(B.FRAMEBUFFER,G)&&x.drawBuffers(T,G),x.viewport(ie),x.scissor(Le),x.setScissorTest(Pe),V){let pe=W.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+U,pe.__webglTexture,q)}else if(ge){let pe=U;for(let Se=0;Se<T.textures.length;Se++){let Ee=W.get(T.textures[Se]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Se,Ee.__webglTexture,q,pe)}}else if(T!==null&&q!==0){let pe=W.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,pe.__webglTexture,q)}Y=-1};function Vh(T){let U=W.get(T);return(U.__readFormat!==T.format||U.__readType!==T.type)&&(U.__readFormat=T.format,U.__readType=T.type,U.__formatReadable=C.textureFormatReadable(T.format),U.__typeReadable=C.textureTypeReadable(T.type)),U}this.readRenderTargetPixels=function(T,U,q,G,V,ge,be,pe=0){if(!(T&&T.isWebGLRenderTarget)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=W.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&be!==void 0&&(Se=Se[be]),Se){x.bindFramebuffer(B.FRAMEBUFFER,Se);try{let Ee=T.textures[pe],qe=Ee.format,Ke=Ee.type;T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+pe);let we=Vh(Ee);if(we.__formatReadable===!1){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(we.__typeReadable===!1){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-G&&q>=0&&q<=T.height-V&&B.readPixels(U,q,G,V,ue.convert(qe),ue.convert(Ke),ge)}finally{let Ee=Q!==null?W.get(Q).__webglFramebuffer:null;x.bindFramebuffer(B.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(T,U,q,G,V,ge,be,pe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=W.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&be!==void 0&&(Se=Se[be]),Se)if(U>=0&&U<=T.width-G&&q>=0&&q<=T.height-V){x.bindFramebuffer(B.FRAMEBUFFER,Se);let Ee=T.textures[pe],qe=Ee.format,Ke=Ee.type;T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+pe);let we=Vh(Ee);if(we.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(we.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ht=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ht),B.bufferData(B.PIXEL_PACK_BUFFER,ge.byteLength,B.STREAM_READ),B.readPixels(U,q,G,V,ue.convert(qe),ue.convert(Ke),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let It=Q!==null?W.get(Q).__webglFramebuffer:null;x.bindFramebuffer(B.FRAMEBUFFER,It);let xt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await ef(B,xt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ht),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ge),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(ht),B.deleteSync(xt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,U=null,q=0){let G=Math.pow(2,-q),V=Math.floor(T.image.width*G),ge=Math.floor(T.image.height*G),be=U!==null?U.x:0,pe=U!==null?U.y:0;Z.setTexture2D(T,0),B.copyTexSubImage2D(B.TEXTURE_2D,q,0,0,be,pe,V,ge),x.unbindTexture()},this.copyTextureToTexture=function(T,U,q=null,G=null,V=0,ge=0){let be,pe,Se,Ee,qe,Ke,we,ht,It,xt=T.isCompressedTexture?T.mipmaps[ge]:T.image;if(q!==null)be=q.max.x-q.min.x,pe=q.max.y-q.min.y,Se=q.isBox3?q.max.z-q.min.z:1,Ee=q.min.x,qe=q.min.y,Ke=q.isBox3?q.min.z:0;else{let Ct=Math.pow(2,-V);be=Math.floor(xt.width*Ct),pe=Math.floor(xt.height*Ct),T.isDataArrayTexture?Se=xt.depth:T.isData3DTexture?Se=Math.floor(xt.depth*Ct):Se=1,Ee=0,qe=0,Ke=0}G!==null?(we=G.x,ht=G.y,It=G.z):(we=0,ht=0,It=0);let mt=ue.convert(U.format),Kt=ue.convert(U.type),ye;U.isData3DTexture?(Z.setTexture3D(U,0),ye=B.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Z.setTexture2DArray(U,0),ye=B.TEXTURE_2D_ARRAY):(Z.setTexture2D(U,0),ye=B.TEXTURE_2D),x.activeTexture(B.TEXTURE0),x.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,U.flipY),x.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),x.pixelStorei(B.UNPACK_ALIGNMENT,U.unpackAlignment);let sn=x.getParameter(B.UNPACK_ROW_LENGTH),it=x.getParameter(B.UNPACK_IMAGE_HEIGHT),bn=x.getParameter(B.UNPACK_SKIP_PIXELS),qn=x.getParameter(B.UNPACK_SKIP_ROWS),xi=x.getParameter(B.UNPACK_SKIP_IMAGES);x.pixelStorei(B.UNPACK_ROW_LENGTH,xt.width),x.pixelStorei(B.UNPACK_IMAGE_HEIGHT,xt.height),x.pixelStorei(B.UNPACK_SKIP_PIXELS,Ee),x.pixelStorei(B.UNPACK_SKIP_ROWS,qe),x.pixelStorei(B.UNPACK_SKIP_IMAGES,Ke);let cs=T.isDataArrayTexture||T.isData3DTexture,pt=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){let Ct=W.get(T),bi=W.get(U),yt=W.get(Ct.__renderTarget),Mi=W.get(bi.__renderTarget);x.bindFramebuffer(B.READ_FRAMEBUFFER,yt.__webglFramebuffer),x.bindFramebuffer(B.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let hs=0;hs<Se;hs++)cs&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,W.get(T).__webglTexture,V,Ke+hs),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,W.get(U).__webglTexture,ge,It+hs)),B.blitFramebuffer(Ee,qe,be,pe,we,ht,be,pe,B.DEPTH_BUFFER_BIT,B.NEAREST);x.bindFramebuffer(B.READ_FRAMEBUFFER,null),x.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(V!==0||T.isRenderTargetTexture||W.has(T)){let Ct=W.get(T),bi=W.get(U);x.bindFramebuffer(B.READ_FRAMEBUFFER,D),x.bindFramebuffer(B.DRAW_FRAMEBUFFER,z);for(let yt=0;yt<Se;yt++)cs?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ct.__webglTexture,V,Ke+yt):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ct.__webglTexture,V),pt?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,bi.__webglTexture,ge,It+yt):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,bi.__webglTexture,ge),V!==0?B.blitFramebuffer(Ee,qe,be,pe,we,ht,be,pe,B.COLOR_BUFFER_BIT,B.NEAREST):pt?B.copyTexSubImage3D(ye,ge,we,ht,It+yt,Ee,qe,be,pe):B.copyTexSubImage2D(ye,ge,we,ht,Ee,qe,be,pe);x.bindFramebuffer(B.READ_FRAMEBUFFER,null),x.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else pt?T.isDataTexture||T.isData3DTexture?B.texSubImage3D(ye,ge,we,ht,It,be,pe,Se,mt,Kt,xt.data):U.isCompressedArrayTexture?B.compressedTexSubImage3D(ye,ge,we,ht,It,be,pe,Se,mt,xt.data):B.texSubImage3D(ye,ge,we,ht,It,be,pe,Se,mt,Kt,xt):T.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ge,we,ht,be,pe,mt,Kt,xt.data):T.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ge,we,ht,xt.width,xt.height,mt,xt.data):B.texSubImage2D(B.TEXTURE_2D,ge,we,ht,be,pe,mt,Kt,xt);x.pixelStorei(B.UNPACK_ROW_LENGTH,sn),x.pixelStorei(B.UNPACK_IMAGE_HEIGHT,it),x.pixelStorei(B.UNPACK_SKIP_PIXELS,bn),x.pixelStorei(B.UNPACK_SKIP_ROWS,qn),x.pixelStorei(B.UNPACK_SKIP_IMAGES,xi),ge===0&&U.generateMipmaps&&B.generateMipmap(ye),x.unbindTexture()},this.initRenderTarget=function(T){W.get(T).__webglFramebuffer===void 0&&Z.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Z.setTextureCube(T,0):T.isData3DTexture?Z.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Z.setTexture2DArray(T,0):Z.setTexture2D(T,0),x.unbindTexture()},this.resetState=function(){F=0,X=0,Q=null,x.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}};var me=(n,e=0,t=1)=>n<e?e:n>t?t:n,oe=(n,e,t)=>n+(e-n)*t,Rt=(n,e,t)=>me((t-n)/(e-n)),Ff=n=>n-Math.floor(n),lt=Math.PI*2;var K={linear:n=>n,inQuad:n=>n*n,outQuad:n=>1-(1-n)*(1-n),inOutQuad:n=>n<.5?2*n*n:1-Math.pow(-2*n+2,2)/2,inCubic:n=>n*n*n,outCubic:n=>1-Math.pow(1-n,3),inOutCubic:n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2,outQuart:n=>1-Math.pow(1-n,4),inOutQuart:n=>n<.5?8*n*n*n*n:1-Math.pow(-2*n+2,4)/2,outExpo:n=>n>=1?1:1-Math.pow(2,-10*n),inExpo:n=>n<=0?0:Math.pow(2,10*n-10),inOutSine:n=>-(Math.cos(Math.PI*n)-1)/2,outSine:n=>Math.sin(n*Math.PI/2),inSine:n=>1-Math.cos(n*Math.PI/2),outBack:(n,e=1.70158)=>1+(e+1)*Math.pow(n-1,3)+e*Math.pow(n-1,2),inBack:(n,e=1.70158)=>(e+1)*n*n*n-e*n*n,outElastic:n=>n<=0?0:n>=1?1:Math.pow(2,-10*n)*Math.sin((n*10-.75)*(2*Math.PI/3))+1,outBounce:n=>n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375,smooth:n=>n*n*(3-2*n)},ke=(n,e,t,i=K.inOutCubic)=>i(Rt(e,t,n));function Vt(n,e){if(n<=e[0][0])return e[0][1];let t=e[e.length-1];if(n>=t[0])return t[1];let i=1;for(;e[i][0]<n;)i++;let[s,r]=e[i-1],[a,o,l=K.inOutCubic]=e[i],c=l((n-s)/(a-s));return Array.isArray(r)?r.map((h,f)=>h+(o[f]-h)*c):r+(o-r)*c}function We(n){let e=Math.sin(n*127.1+311.7)*43758.5453123;return e-Math.floor(e)}function Qe(n,e=0){let t=Math.floor(n),i=n-t,s=i*i*(3-2*i);return oe(We(t+e*101.3),We(t+1+e*101.3),s)*2-1}function fh(n){let e=n>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Of(n,e=3.2,t=5){return n<=0?0:1-Math.exp(-t*n)*Math.cos(lt*e*n)}function di(n,e=5,t=6){return n<0?0:Math.exp(-t*n)*Math.sin(lt*e*n)}var Ae={ink:"#2a2321",bearWhite:"#ffffff",bearShade:"#e9e4df",bearShade2:"#d6cfc9",earInner:"#f1dcd6",bag:"#1f1b1a",tongue:"#f28b9a",mouth:"#4a2426",blush:"#ff9fb0",orange:"#d97757",orangeLight:"#eb946f",orangeDark:"#b95b3d",petInk:"#3a2520",eye:"#1c1716"};function wg(n,e=8){let t=[];for(let i=0;i<n.length-1;i++){let s=n[Math.max(0,i-1)],r=n[i],a=n[i+1],o=n[Math.min(n.length-1,i+2)];for(let l=0;l<e;l++){let c=l/e,h=c*c,f=h*c,u=(d,g,_,m)=>.5*(2*g+(-d+_)*c+(2*d-5*g+4*_-m)*h+(-d+3*g-3*_+m)*f);t.push([u(s[0],r[0],a[0],o[0]),u(s[1],r[1],a[1],o[1])])}}return t.push(n[n.length-1]),t}function Bf(n){let e=wg(n.profile,10);for(let i=1;i<e.length;i++)e[i][0]=Math.max(e[i][0],e[i-1][0]+1e-5);for(let i of e)i[1]=Math.max(0,i[1]);return{...n,dense:e,radiusAt:i=>{if(i<=e[0][0])return e[0][1];for(let s=1;s<e.length;s++)if(e[s][0]>=i){let[r,a]=e[s-1],[o,l]=e[s];return oe(a,l,(i-r)/(o-r))}return 0}}}var pi=Bf({name:"tall",height:2,depth:.86,profile:[[.24,0],[.245,.1],[.28,.235],[.35,.318],[.47,.356],[.64,.358],[.9,.336],[1.16,.31],[1.42,.29],[1.63,.276],[1.79,.262],[1.87,.245],[1.935,.205],[1.975,.14],[1.996,.065],[2,0]],face:{y:1.725,scale:1},ear:{x:.172,y:1.948,r:.074},arm:{x:.232,y:1.38,len:.74,r:.09,splay:.09,splay3d:.19},leg:{x:.135,len:.33,r:.094},tail:{y:.5,r:.086},bag:{x:-.345,y:.5,r:.14},strap:{sx:.2,sy:1.53,hy:.53},bend:{base:.45,len:1.5}}),dh=Bf({name:"short",height:1.3,depth:.9,profile:[[.17,0],[.175,.12],[.21,.27],[.28,.345],[.4,.375],[.55,.372],[.72,.35],[.88,.325],[1.02,.3],[1.12,.278],[1.2,.24],[1.255,.18],[1.287,.1],[1.3,0]],face:{y:1.06,scale:1.05},ear:{x:.2,y:1.235,r:.078},arm:{x:.27,y:.84,len:.42,r:.092,splay:.14,splay3d:.3},leg:{x:.15,len:.24,r:.1},tail:{y:.38,r:.09},bag:{x:-.36,y:.38,r:.13},strap:{sx:.22,sy:.98,hy:.4},bend:{base:.3,len:1}}),Ve={width:.86,height:.54,depth:.6,radius:.15,lift:.12,leg:{xs:[-.3,-.16,.16,.3],r:.046,len:.16},arm:{x:.43,y:.34,len:.075,r:.068},eye:{x:.195,y:.065,w:.072,h:.14},bend:{base:.15,len:.55}};Ve.centerY=Ve.lift+Ve.height/2;function ph(n,e,t,i){let s=i.squash,r=1/Math.sqrt(Math.max(s,.05));e*=s,n*=r,t*=r;let a=me((e-i.base)/i.len,0,1.6),o=i.twist*a,l=Math.cos(o),c=Math.sin(o),h=l*n+c*t,f=-c*n+l*t,u=a*a;return[h+i.bendX*u,e-(i.bendX*i.bendX+i.bendZ*i.bendZ)*u*.35/i.len,f+i.bendZ*u]}var kf=`
uniform float uSquash;
uniform vec2 uBend;
uniform float uTwist;
uniform float uBendBase;
uniform float uBendLen;
uniform mat4 uRoot;
uniform mat4 uRootInv;
vec3 deformPoint(vec3 p){
  float s = uSquash;
  float inv = inversesqrt(max(s, 0.05));
  p.y *= s; p.x *= inv; p.z *= inv;
  float h = clamp((p.y - uBendBase) / uBendLen, 0.0, 1.6);
  float a = uTwist * h;
  float ca = cos(a), sa = sin(a);
  vec3 q = vec3(ca * p.x + sa * p.z, p.y, -sa * p.x + ca * p.z);
  float hh = h * h;
  q.x += uBend.x * hh;
  q.z += uBend.y * hh;
  q.y -= dot(uBend, uBend) * hh * 0.35 / uBendLen;
  return q;
}
`;function mh(n=[.62,.84,1]){let e=new Uint8Array(n.length*4);n.forEach((i,s)=>{let r=Math.round(i*255);e.set([r,r,r,255],s*4)});let t=new Qi(e,n.length,1,fn);return t.minFilter=t.magFilter=Nt,t.generateMipmaps=!1,t.needsUpdate=!0,t}var Ht={soft:null,pet:null};function zf(){Ht.soft=mh([.72,.88,1]),Ht.pet=mh([.66,.86,1]),Ht.world=mh([.7,.87,1])}var Tg=(n,e)=>`
  vec4 dfW = modelMatrix * vec4(transformed, 1.0);
  vec3 dfL = (uRootInv * dfW).xyz;
  ${n?`
  vec3 dfN = normalize(inverse(transpose(mat3(modelMatrix))) * normal);
  dfL += normalize(mat3(uRootInv) * dfN) * uOutline;`:""}
  vec3 dfP = deformPoint(dfL);
  ${n||!e?"":`
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
`,Qr=class{constructor(e){this.u={uSquash:{value:1},uBend:{value:new _e},uTwist:{value:0},uBendBase:{value:e.base},uBendLen:{value:e.len},uRoot:{value:new nt},uRootInv:{value:new nt},uOutline:{value:.012},uRim:{value:new Fe(16777215)},uRimStrength:{value:.25},uSpec:{value:0},uLightDir:{value:new I(-.4,.7,.6).normalize()}}}patch(e,{outline:t=!1,lit:i=!0}={}){let s=this.u;return e.onBeforeCompile=r=>{for(let a in s)r.uniforms[a]=s[a];r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
${kf}
uniform float uOutline;`).replace("#include <project_vertex>",Tg(t,i)),i&&!t&&(r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
            uniform vec3 uRim; uniform float uRimStrength; uniform float uSpec; uniform vec3 uLightDir;`).replace("#include <opaque_fragment>",`
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
            #include <opaque_fragment>`))},e.customProgramCacheKey=()=>`deform-${t?"o":"f"}-${i?"l":"u"}`,e}toon(e,t=Ht.soft,i={}){return this.patch(new Vs({color:e,gradientMap:t,...i}))}outline(e=2761505){return this.patch(new Sn({color:e,side:Ft}),{outline:!0,lit:!1})}basic(e){return this.patch(new Sn(e),{lit:!1})}syncRoot(e){this.u.uRoot.value.copy(e.matrixWorld),this.u.uRootInv.value.copy(e.matrixWorld).invert()}};function qt(n,e,t,i){let s=new rt(n,e);if(s.frustumCulled=!1,i&&i.add(s),t){let r=new rt(n,t);r.frustumCulled=!1,s.add(r)}return s}function Qs(n,e={}){return new Vs({color:n,gradientMap:Ht.world,...e})}var Eg=`
uniform float uThick;
void main() {
  vec3 n = normalize(normalMatrix * normal);
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  // constant-ish screen thickness
  mv.xyz += n * uThick * max(-mv.z, 1.0) * 0.0025;
  gl_Position = projectionMatrix * mv;
}`,Ag=`
uniform vec3 uColor;
uniform float uAlpha;
void main() { gl_FragColor = vec4(uColor, uAlpha); }`;function Rg(n=3878976,e=1,t=1){return new kt({uniforms:{uThick:{value:e},uColor:{value:new Fe(n)},uAlpha:{value:t}},vertexShader:Eg,fragmentShader:Ag,side:Ft,transparent:t<1})}function Gf(n,e,t,{outline:i=3878976,thick:s=1,extra:r={}}={}){let a=new rt(n,Qs(e,r));return i!==null&&a.add(new rt(n,Rg(i,s))),t&&t.add(a),a}var jr=new I;function En(n,e,t,i,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;jr.copy(e),jr[i]=0,jr.normalize();let c=.5*a/(a+o),h=1-jr.angleTo(n)/l;return Math.sign(jr[t])===1?h*c:o/(a+o)+c+c*(1-h)}var Sl=class n extends Pi{constructor(e=1,t=1,i=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,i/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:i,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new I,c=new I,h=new I(e,t,i).divideScalar(2).subScalar(r),f=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,g=f.length/6,_=new I,m=.5/a;for(let p=0,S=0;p<f.length;p+=3,S+=2)switch(l.fromArray(f,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),f[p+0]=h.x*Math.sign(l.x)+c.x*r,f[p+1]=h.y*Math.sign(l.y)+c.y*r,f[p+2]=h.z*Math.sign(l.z)+c.z*r,u[p+0]=c.x,u[p+1]=c.y,u[p+2]=c.z,Math.floor(p/g)){case 0:_.set(1,0,0),d[S+0]=En(_,c,"z","y",r,i),d[S+1]=1-En(_,c,"y","z",r,t);break;case 1:_.set(-1,0,0),d[S+0]=1-En(_,c,"z","y",r,i),d[S+1]=1-En(_,c,"y","z",r,t);break;case 2:_.set(0,1,0),d[S+0]=1-En(_,c,"x","z",r,e),d[S+1]=En(_,c,"z","x",r,i);break;case 3:_.set(0,-1,0),d[S+0]=1-En(_,c,"x","z",r,e),d[S+1]=1-En(_,c,"z","x",r,i);break;case 4:_.set(0,0,1),d[S+0]=1-En(_,c,"x","y",r,e),d[S+1]=1-En(_,c,"y","x",r,t);break;case 5:_.set(0,0,-1),d[S+0]=En(_,c,"x","y",r,e),d[S+1]=1-En(_,c,"y","x",r,t);break}}static fromJSON(e){return new n(e.width,e.height,e.depth,e.segments,e.radius)}};function Hf(n,e=!1){let t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new Tt,c=0;for(let h=0;h<n.length;++h){let f=n[h],u=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(e){let d;if(t)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0,f=[];for(let u=0;u<n.length;++u){let d=n[u].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+h);h+=n[u].attributes.position.count}l.setIndex(f)}for(let h in r){let f=Vf(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in a){let f=a[h][0].length;if(f!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let _=0;_<a[h].length;++_)d.push(a[h][_][u]);let g=Vf(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function Vf(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new tn(a,t,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let f=l/t;for(let u=0,d=h.count;u<d;u++)for(let g=0;g<t;g++){let _=h.getComponent(u,g);o.setComponent(u+f,g,_)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}function Wf(n,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},i=n.getIndex(),s=n.getAttribute("position"),r=i?i.count:s.count,a=0,o=Object.keys(n.attributes),l={},c={},h=[],f=["getX","getY","getZ","getW"],u=["setX","setY","setZ","setW"];for(let S=0,E=o.length;S<E;S++){let y=o[S],b=n.attributes[y];l[y]=new b.constructor(new b.array.constructor(b.count*b.itemSize),b.itemSize,b.normalized);let M=n.morphAttributes[y];M&&(c[y]||(c[y]=[]),M.forEach((A,v)=>{let w=new A.array.constructor(A.count*A.itemSize);c[y][v]=new A.constructor(w,A.itemSize,A.normalized)}))}let d=e*.5,g=Math.log10(1/e),_=Math.pow(10,g),m=d*_;for(let S=0;S<r;S++){let E=i?i.getX(S):S,y="";for(let b=0,M=o.length;b<M;b++){let A=o[b],v=n.getAttribute(A),w=v.itemSize;for(let R=0;R<w;R++)y+=`${Math.trunc(v[f[R]](E)*_+m)},`}if(y in t)h.push(t[y]);else{for(let b=0,M=o.length;b<M;b++){let A=o[b],v=n.getAttribute(A),w=n.morphAttributes[A],R=v.itemSize,P=l[A],L=c[A];for(let N=0;N<R;N++){let D=f[N],z=u[N];if(P[z](a,v[D](E)),w)for(let F=0,X=w.length;F<X;F++)L[F][z](a,w[F][D](E))}}t[y]=a,h.push(a),a++}}let p=n.clone();for(let S in n.attributes){let E=l[S];if(p.setAttribute(S,new E.constructor(E.array.slice(0,a*E.itemSize),E.itemSize,E.normalized)),S in c)for(let y=0;y<c[S].length;y++){let b=c[S][y];p.morphAttributes[S][y]=new b.constructor(b.array.slice(0,a*b.itemSize),b.itemSize,b.normalized)}}return p.setIndex(h),p}function ea(n,e,t,i,s,r){r=Math.min(r,i/2,s/2),n.beginPath(),n.moveTo(e+r,t),n.lineTo(e+i-r,t),n.arcTo(e+i,t,e+i,t+r,r),n.lineTo(e+i,t+s-r),n.arcTo(e+i,t+s,e+i-r,t+s,r),n.lineTo(e+r,t+s),n.arcTo(e,t+s,e,t+s-r,r),n.lineTo(e,t+r),n.arcTo(e,t,e+r,t,r),n.closePath()}function An(n,e,t,i,s,r){n.beginPath(),n.ellipse(e,t,Math.max(i,1e-4),Math.max(s,1e-4),0,0,Math.PI*2),n.fillStyle=r,n.fill()}function Ot(n,e,t=Ae.eye){n.lineWidth=e,n.strokeStyle=t,n.lineCap="round",n.lineJoin="round",n.stroke()}function Xf(n,e,t,i,s){s<=0||(n.save(),n.globalAlpha*=s,n.beginPath(),n.moveTo(e,t+.05*i),n.bezierCurveTo(e+.026*i,t+.004*i,e+.03*i,t-.03*i,e,t-.03*i),n.bezierCurveTo(e-.03*i,t-.03*i,e-.026*i,t+.004*i,e,t+.05*i),n.fillStyle="#9fd8f5",n.fill(),Ot(n,.007*i,"#4f9cc6"),An(n,e-.008*i,t-.012*i,.006*i,.009*i,"rgba(255,255,255,0.9)"),n.restore())}function js(n,e={}){let t=e.expr||"neutral",i=e.time||0,s=me(e.open||0),r=me(e.blink||0),a=e.tremble||0,o=(e.lookX||0)*.014+a*Qe(i*40,1)*.004,l=(e.lookY||0)*.01+a*Qe(i*40,2)*.004,c=.066,h=.074,f=me(e.blush??(t==="cute"||t==="laugh"?.8:0));if(f>0){n.save(),n.globalAlpha*=.55*f;for(let y of[-1,1])An(n,y*.128+o*.5,-.012,.038,.02,Ae.blush);n.restore()}let u=me(e.gloom??0);if(u>0){n.save(),n.globalAlpha*=u*.7;for(let y=-2;y<=2;y++)n.beginPath(),n.moveTo(y*.035,.24),n.lineTo(y*.035,.24-.07-(y%2===0?.03:0)),Ot(n,.008,"#8a7fc0");n.restore()}let d=r>.85?"closed":t==="cute"?"chevron":t==="laugh"?"arc":"dot";for(let y of[-1,1]){let b=y*c+o,M=h+l;if(d==="dot"){let A=.0185,v=.027*(1-r*.9);if(t==="surprised"&&(A*=1.12,v*=1.12),t==="scared"&&(A*=.9,v*=.92),An(n,b,M,A,v,Ae.eye),v>.012){let w=t==="scared"?1.35:1;An(n,b-.006,M+.01,.0062*w,.0072*w,"#ffffff"),An(n,b+.007,M-.011,.0028,.0028,"rgba(255,255,255,0.85)")}t==="angry"&&(n.beginPath(),n.moveTo(y*.098+o,.122+l),n.lineTo(y*.036+o,.098+l),Ot(n,.013)),t==="scared"&&(n.beginPath(),n.moveTo(y*.094+o,.098+l),n.quadraticCurveTo(y*.07+o,.118+l,y*.04+o,.122+l),Ot(n,.008))}else d==="closed"?(n.beginPath(),n.moveTo(b-.02,M),n.quadraticCurveTo(b,M-.012,b+.02,M),Ot(n,.0095)):d==="arc"?(n.beginPath(),n.moveTo(b-.021,M-.008),n.quadraticCurveTo(b,M+.03,b+.021,M-.008),Ot(n,.011)):d==="chevron"&&(n.beginPath(),n.moveTo(b-y*.018,M+.019),n.lineTo(b+y*.016,M),n.lineTo(b-y*.018,M-.019),Ot(n,.0115))}let g=o*.6,_=l*.5;n.beginPath(),n.moveTo(g-.026,_+.012),n.quadraticCurveTo(g,_+.02,g+.026,_+.012),n.quadraticCurveTo(g+.03,_+.006,g+.012,_-.011),n.quadraticCurveTo(g,_-.021,g-.012,_-.011),n.quadraticCurveTo(g-.03,_+.006,g-.026,_+.012),n.fillStyle=Ae.eye,n.fill(),An(n,g-.008,_+.007,.006,.0035,"rgba(255,255,255,0.55)");let m=g,p=_-.016,S=()=>{n.beginPath(),n.moveTo(m,p),n.lineTo(m,p-.012),n.moveTo(m-.036,p-.006),n.bezierCurveTo(m-.034,p-.026,m-.004,p-.028,m,p-.012),n.bezierCurveTo(m+.004,p-.028,m+.034,p-.026,m+.036,p-.006),Ot(n,.0085)},E=(y,b,M=p-.02)=>{n.save(),n.beginPath(),n.moveTo(m-y/2,M),n.quadraticCurveTo(m,M+.006,m+y/2,M),n.bezierCurveTo(m+y/2,M-b*.9,m+y*.2,M-b,m,M-b),n.bezierCurveTo(m-y*.2,M-b,m-y/2,M-b*.9,m-y/2,M),n.closePath(),n.fillStyle=Ae.mouth,n.fill(),n.clip(),An(n,m,M-b*1.02,y*.36,b*.55,Ae.tongue),n.restore(),n.beginPath(),n.moveTo(m-y/2,M),n.quadraticCurveTo(m,M+.006,m+y/2,M),n.bezierCurveTo(m+y/2,M-b*.9,m+y*.2,M-b,m,M-b),n.bezierCurveTo(m-y*.2,M-b,m-y/2,M-b*.9,m-y/2,M),Ot(n,.0075)};if(t==="surprised"){n.beginPath(),n.moveTo(m,p),n.lineTo(m,p-.012),Ot(n,.0085);let y=.6+s*.6;An(n,m,p-.038,.016*y,.021*y,Ae.mouth),n.beginPath(),n.ellipse(m,p-.038,.016*y,.021*y,0,0,Math.PI*2),Ot(n,.0075)}else if(t==="scared"){n.beginPath();let y=p-.03;n.moveTo(m-.042,y);for(let b=1;b<=12;b++){let M=m-.042+.084*b/12;n.lineTo(M,y+Math.sin(b*Math.PI*.5+i*30*(e.tremble?1:0))*.006)}Ot(n,.0085),s>.05&&E(.03+s*.02,.02+s*.03,p-.036)}else if(t==="angry")n.beginPath(),n.moveTo(m,p),n.lineTo(m,p-.014),n.moveTo(m-.032,p-.046),n.quadraticCurveTo(m,p-.012,m+.032,p-.046),Ot(n,.0085);else if(t==="happy"||t==="laugh")S(),E(t==="laugh"?.07:.056,(t==="laugh"?.05:.04)+s*.02,p-.018);else if(t==="sing")S(),s>.04&&E(.042+s*.024,.014+s*.052,p-.019);else if(t==="cute"){S(),n.beginPath(),n.moveTo(m-.014,p-.018),n.lineTo(m-.014,p-.04),n.quadraticCurveTo(m-.014,p-.06,m,p-.06),n.quadraticCurveTo(m+.014,p-.06,m+.014,p-.04),n.lineTo(m+.014,p-.018),n.fillStyle=Ae.tongue,n.fill(),Ot(n,.0065),n.beginPath(),n.moveTo(m,p-.03),n.lineTo(m,p-.046),Ot(n,.004,"#c9606f");for(let y=0;y<3;y++)An(n,.15+y*.018,.035,.0045,.0045,Ae.eye)}else S(),n.save(),n.beginPath(),n.moveTo(m-.012,p-.022),n.quadraticCurveTo(m,p-.04,m+.012,p-.022),n.closePath(),n.fillStyle=Ae.tongue,n.fill(),Ot(n,.0055),n.restore();Xf(n,.19,.12-i*.6%1*.05*(e.sweat>0?1:0),1,me(e.sweat||0))}function er(n,e={}){let t=e.expr||"normal",i=e.time||0,s=me(e.blink||0),r=me(e.open||0),a=e.tremble||0,o=(e.lookX||0)*.03+a*Qe(i*45,3)*.006,l=(e.lookY||0)*.02+a*Qe(i*45,4)*.006,c=.195,h=.065,f=me(e.blush??(t==="happy"||t==="cute"?.85:.35));if(f>0){n.save(),n.globalAlpha*=.5*f;for(let d of[-1,1])An(n,d*.305+o*.4,-.045,.055,.028,"#ff8a8a");n.restore()}for(let d of[-1,1]){let g=d*c+o,_=h+l,m=s>.85?"closed":t==="happy"?"arc":t==="cute"?"chevron":"rect";if(m==="rect"){let p=t==="wide"?1:0,S=.072+p*.012,E=(.14+p*.025)*(1-s*.88);if(n.fillStyle=Ae.eye,ea(n,g-S/2,_-E/2,S,E,S*.45),n.fill(),E>.05){let y=1+p*.35;n.fillStyle="#ffffff",ea(n,g-.024,_+E/2-.05*y,.022*y,.036*y,.011*y),n.fill(),An(n,g+.014,_-E/2+.024,.0075*y,.0075*y,"rgba(255,255,255,0.8)")}}else m==="closed"?(n.beginPath(),n.moveTo(g-.035,_-.005),n.quadraticCurveTo(g,_-.022,g+.035,_-.005),Ot(n,.022)):m==="arc"?(n.beginPath(),n.moveTo(g-.04,_-.02),n.quadraticCurveTo(g,_+.06,g+.04,_-.02),Ot(n,.026)):(n.beginPath(),n.moveTo(g-d*.036,_+.045),n.lineTo(g+d*.03,_),n.lineTo(g-d*.036,_-.045),Ot(n,.026))}let u=t==="sing"?r:t==="happy"?Math.max(r,.35):r;if(u>.04){let d=.05+u*.03,g=.012+u*.05,_=-.045+l*.5;n.save(),n.beginPath(),n.moveTo(o*.5-d/2,_),n.quadraticCurveTo(o*.5,_+.008,o*.5+d/2,_),n.bezierCurveTo(o*.5+d/2,_-g,o*.5-d/2,_-g,o*.5-d/2,_),n.fillStyle="#3b1717",n.fill(),n.clip(),An(n,o*.5,_-g,d*.3,g*.5,Ae.tongue),n.restore()}else if(t==="cute"){n.beginPath();let d=-.05+l*.5;n.moveTo(o*.5-.03,d+.006),n.quadraticCurveTo(o*.5-.015,d-.014,o*.5,d+.002),n.quadraticCurveTo(o*.5+.015,d-.014,o*.5+.03,d+.006),Ot(n,.012)}Xf(n,.37,.17-i*.7%1*.05,1.3,me(e.sweat||0))}function gh(n,e,t,i,s=0){n.translate(e,t),s&&n.rotate(s),n.scale(i,-i)}function ta(n,e,t=!0){n.beginPath(),n.moveTo(e[0][0],e[0][1]);for(let i=1;i<e.length;i++)n.lineTo(e[i][0],e[i][1]);t&&n.closePath()}function Cg(n){let e=0;for(let t=1;t<n.length;t++)e+=Math.hypot(n[t][0]-n[t-1][0],n[t][1]-n[t-1][1]);return e}function Vn(n,e,t,i=1,s=Ae.ink,r=!0){if(!(i<=0)){if(ta(n,e,r),n.lineWidth=t,n.strokeStyle=s,n.lineJoin="round",n.lineCap="round",i<1){let a=Cg(e)+(r?Math.hypot(e[0][0]-e.at(-1)[0],e[0][1]-e.at(-1)[1]):0);n.setLineDash([a*i,a*2])}n.stroke(),n.setLineDash([])}}function xn(n,e,t,i,s){n.beginPath(),n.moveTo(e[0],e[1]),n.lineTo(t[0],t[1]),n.lineWidth=i,n.strokeStyle=s,n.lineCap="round",n.stroke()}function na(n,e,t,i=14){let s=e[0]-n[0],r=e[1]-n[1],a=Math.hypot(s,r)||1,o=s/a,l=r/a,c=-l,h=o,f=[[n[0]+c*t,n[1]+h*t],[e[0]+c*t,e[1]+h*t]];for(let u=1;u<i;u++){let d=u/i*Math.PI,g=Math.cos(d),_=Math.sin(d);f.push([e[0]+(c*g+o*_)*t,e[1]+(h*g+l*_)*t])}return f.push([e[0]-c*t,e[1]-h*t],[n[0]-c*t,n[1]-h*t]),f}function Hn(n,e,t,i,s="#ffffff",r=0){n.save(),n.translate(e,t),n.rotate(r),n.fillStyle=s,n.beginPath(),n.moveTo(0,.02*i),n.bezierCurveTo(.045*i,.02*i,.06*i,-.035*i,.03*i,-.045*i),n.bezierCurveTo(.012*i,-.05*i,-.012*i,-.05*i,-.03*i,-.045*i),n.bezierCurveTo(-.06*i,-.035*i,-.045*i,.02*i,0,.02*i),n.fill();let a=[[-.058,.034,-.35],[-.022,.062,-.12],[.022,.062,.12],[.058,.034,.35]];for(let[o,l,c]of a)n.beginPath(),n.ellipse(o*i,l*i,.017*i,.022*i,c,0,Math.PI*2),n.fill();n.restore()}function Pg(n,e,t,i,s=1){n.save(),n.translate(e,t),n.rotate(i),xn(n,[0,-.02*s],[0,.17*s],.062*s,Ae.ink),xn(n,[0,-.02*s],[0,.17*s],.04*s,"#4b4f5c"),n.beginPath(),n.arc(0,.2*s,.058*s,0,Math.PI*2),n.fillStyle="#dfe3ea",n.fill(),n.lineWidth=.016*s,n.strokeStyle=Ae.ink,n.stroke(),n.beginPath(),n.moveTo(-.04*s,.2*s),n.lineTo(.04*s,.2*s),n.moveTo(0,.16*s),n.lineTo(0,.24*s),n.lineWidth=.006*s,n.strokeStyle="#9aa1ad",n.stroke(),n.restore()}function _h(n,e,t,i,s=1){n.save(),n.translate(e,t),n.rotate(i),xn(n,[0,-.02*s],[0,.22*s],.034*s,Ae.ink),xn(n,[0,-.02*s],[0,.22*s],.018*s,"#ffcf6b"),n.beginPath(),n.arc(0,.29*s,.07*s,0,Math.PI*2),n.lineWidth=.034*s,n.strokeStyle=Ae.ink,n.stroke(),n.lineWidth=.018*s,n.strokeStyle="#ff9fc0",n.stroke(),n.restore()}var vh=()=>({squash:1,bendX:0,armL:0,armR:0,legL:0,legR:0,bagSwing:0,face:{expr:"neutral"},hold:null,reveal:1,fill:1,boil:0,time:0,lw:.02,shadow:1});function qf(n,e=pi,t=vh()){let i={squash:t.squash??1,bendX:t.bendX||0,bendZ:0,twist:0,base:e.bend.base,len:e.bend.len},s=t.lw??.02,r=t.reveal??1,a=me(t.fill??1),o=t.boil||0,l=Math.floor((t.time||0)*12),c=(F,X)=>o?Qe(F*.61+l*17.3,X)*o*.006:0,h=(F,X)=>{let Q=ph(F,X,0,i);return[Q[0],Q[1]]},f=[],u=e.dense;for(let F=0;F<u.length;F++)f.push(h(u[F][1]+c(F,1),u[F][0]));for(let F=u.length-1;F>=0;F--)f.push(h(-u[F][1]+c(F,2),u[F][0]));let d=e.leg,g=[[-1,t.legL||0],[1,t.legR||0]].map(([F,X])=>({a:h(F*d.x,d.len+.06),b:[F*d.x/Math.sqrt(i.squash),d.r+X]})),_=e.ear,m=[-1,1].map(F=>({side:F,c:h(F*_.x,_.y)})),p=e.arm,S=e.radiusAt(p.y)-p.r*1.05,E=[[-1,t.armL||0,"L"],[1,t.armR||0,"R"]].map(([F,X,Q])=>{let Y=h(F*S,p.y),ee=p.splay+X,ie=[F*Math.sin(ee),-Math.cos(ee)],Le=[Y[0]+ie[0]*(p.len-p.r),Y[1]+ie[1]*(p.len-p.r)];return{side:F,key:Q,sh:Y,dir:ie,hand:Le}}),y={};for(let F of E)y[F.key]={hand:F.hand,dir:F.dir,ang:Math.atan2(F.dir[1],F.dir[0])};let b=e.strap,M=h(e.bag.x+.02,e.bag.y+e.bag.r*.7),A=h(e.radiusAt(b.sy)+.02,b.sy),v=h((b.sx+e.bag.x)*.5+.02,(b.sy+b.hy)*.5-.03);if((t.shadow??1)>0&&a>0&&(n.save(),n.globalAlpha*=.16*a*(t.shadow??1),n.beginPath(),n.ellipse(0,0,e.profile[4][1]*1.35,.055,0,0,Math.PI*2),n.fillStyle="#6b6275",n.fill(),n.restore()),a<1&&r>0){n.save(),n.globalAlpha*=1-a;for(let Q of g)Vn(n,na(Q.a,Q.b,d.r+s/2),s,r,Ae.ink,!1);for(let Q of m){let Y=[];for(let ee=0;ee<=40;ee++){let ie=-Math.PI/2-Q.side*(ee/40)*Math.PI*2;Y.push([Q.c[0]+Math.cos(ie)*_.r,Q.c[1]+Math.sin(ie)*_.r])}Vn(n,Y,s,r,Ae.ink,!1)}Vn(n,f,s,r);for(let Q of E){let Y=[Q.sh[0]+Q.dir[0]*.06,Q.sh[1]+Q.dir[1]*.06];Vn(n,na(Y,Q.hand,p.r+s/2),s,r,Ae.ink,!1)}Vn(n,[A,M],s*2.2,r,Ae.bag,!1);let X=[];for(let Q=0;Q<=40;Q++){let Y=Q/40*Math.PI*2;X.push([M[0]-.01+Math.cos(Y)*e.bag.r,M[1]-e.bag.r*.72+Math.sin(Y)*e.bag.r])}Vn(n,X,s,r,Ae.ink,!1),n.restore()}if(a<=0)return y;n.save(),n.globalAlpha*=a;for(let F of g)xn(n,F.a,F.b,2*d.r+2*s,Ae.ink),xn(n,F.a,F.b,2*d.r,Ae.bearWhite);for(let F of g)n.save(),n.globalAlpha*=.5,xn(n,[F.a[0],F.a[1]-.02],[F.a[0],F.a[1]-.14],2*d.r*.9,"#ebe6e2"),n.restore();for(let F of m)n.beginPath(),n.arc(F.c[0],F.c[1],_.r+s,0,Math.PI*2),n.fillStyle=Ae.ink,n.fill(),n.beginPath(),n.arc(F.c[0],F.c[1],_.r,0,Math.PI*2),n.fillStyle=Ae.bearWhite,n.fill(),n.beginPath(),n.arc(F.c[0]+F.side*.008,F.c[1]+.01,_.r*.5,0,Math.PI*2),n.fillStyle=Ae.earInner,n.fill();ta(n,f),n.lineWidth=2*s,n.strokeStyle=Ae.ink,n.lineJoin="round",n.stroke();for(let F of E)xn(n,F.sh,F.hand,2*p.r+2*s,Ae.ink);ta(n,f),n.fillStyle=Ae.bearWhite,n.fill(),n.save(),n.clip();let w=h(0,e.profile[2][0]+.02),R=e.profile[4][1],P=n.createRadialGradient(w[0],w[1]-.05,.02,w[0],w[1]-.05,R*1.25);P.addColorStop(0,"rgba(206,198,193,0.85)"),P.addColorStop(.55,"rgba(222,215,210,0.55)"),P.addColorStop(1,"rgba(235,230,226,0)"),n.fillStyle=P,n.beginPath(),n.ellipse(w[0],w[1]-.05,R*1.3,.22*e.height/2,0,0,Math.PI*2),n.fill();let L=n.createLinearGradient(-R-.05,0,R+.05,0);L.addColorStop(0,"rgba(225,219,214,0.6)"),L.addColorStop(.2,"rgba(255,255,255,0)"),L.addColorStop(.8,"rgba(255,255,255,0)"),L.addColorStop(1,"rgba(225,219,214,0.6)"),n.fillStyle=L,n.fillRect(-1,0,2,e.height+.1),n.restore(),n.save(),ta(n,f),n.clip(),n.beginPath(),n.moveTo(A[0],A[1]),n.quadraticCurveTo(v[0],v[1],M[0],M[1]),n.strokeStyle=Ae.bag,n.lineWidth=.046*(e.height/2+.5)/1.5,n.lineCap="round",n.stroke(),n.restore();for(let F of E)xn(n,F.sh,F.hand,2*p.r,Ae.bearWhite);for(let F of E){let X=[F.sh[0]+F.dir[0]*.07,F.sh[1]+F.dir[1]*.07],Q=na(X,F.hand,p.r+s/2);Vn(n,Q,s,1,Ae.ink,!1)}t.hold==="mic"&&Pg(n,y.R.hand[0]-.02,y.R.hand[1]+.02,t.micAng??.35,e.height/2),t.hold==="wand"&&_h(n,y.R.hand[0],y.R.hand[1],t.wandAng??.3,e.height/2);let N=h(0,e.face.y);n.save(),n.translate(N[0],N[1]),n.scale(e.face.scale,e.face.scale),js(n,{time:t.time,...t.face}),n.restore();let D=e.bag;n.save(),n.translate(M[0],M[1]),n.rotate(t.bagSwing||0);let z=D.r;return n.beginPath(),n.arc(-.01,-z*.72,z,0,Math.PI*2),n.fillStyle=Ae.bag,n.fill(),n.save(),n.scale(1,-1),Hn(n,-.01,z*.72,z/.14*.95,"#ffffff"),n.restore(),n.beginPath(),n.arc(-.055,-z*.72+.065,.022,0,Math.PI*2),n.fillStyle="rgba(255,255,255,0.2)",n.fill(),n.restore(),n.restore(),y}var yh=()=>({squash:1,bendX:0,armL:0,armR:0,walk:0,stepPhase:0,legLift:0,face:{expr:"normal"},ears:0,reveal:1,fill:1,boil:0,time:0,lw:.02,shadow:1});function Ig(n,e,t,i,s,r=10){let a=[],o=[[n+t/2-s,e-i/2+s,-Math.PI/2],[n+t/2-s,e+i/2-s,0],[n-t/2+s,e+i/2-s,Math.PI/2],[n-t/2+s,e-i/2+s,Math.PI]];for(let[l,c,h]of o)for(let f=0;f<=r;f++){let u=h+f/r*(Math.PI/2);a.push([l+Math.cos(u)*s,c+Math.sin(u)*s])}return a}function Lg(n,e,t,i){if(!(t<=0))for(let s of[-1,1]){let r=e(s*.26,Ve.lift+Ve.height+.03);n.save(),n.translate(r[0],r[1]),n.scale(t,t),n.beginPath(),n.arc(0,0,.085,0,Math.PI*2),n.fillStyle="#ffffff",n.fill(),n.lineWidth=i,n.strokeStyle=Ae.ink,n.stroke(),n.beginPath(),n.arc(0,-.005,.045,0,Math.PI*2),n.fillStyle=Ae.earInner,n.fill(),n.restore()}}function Yf(n,e=yh()){let t={squash:e.squash??1,bendX:e.bendX||0,bendZ:0,twist:0,base:Ve.bend.base,len:Ve.bend.len},i=e.lw??.02,s=e.reveal??1,r=me(e.fill??1),a=e.boil||0,o=Math.floor((e.time||0)*12),l=(v,w)=>a?Qe(v*.53+o*11.7,w)*a*.006:0,c=(v,w)=>{let R=ph(v,w,0,t);return[R[0],R[1]]},h=Ve.leg,f=h.xs.map((v,w)=>{let R=(e.stepPhase||0)*Math.PI*2+(w%2?Math.PI:0),P=Math.max(0,Math.sin(R))*.07*(e.walk||0)+(e.legLift||0);return{a:c(v*.95,Ve.lift+.05),b:[v/Math.sqrt(t.squash),h.r+P]}}),u=Ve.arm,d=[[-1,e.armL||0,"L"],[1,e.armR||0,"R"]].map(([v,w,R])=>{let P=c(v*(u.x-.08),u.y),L=[v*Math.cos(w),Math.sin(w)],N=[P[0]+L[0]*(u.len+.08),P[1]+L[1]*(u.len+.08)];return{key:R,root:P,tip:N,dir:L}}),g={};for(let v of d)g[v.key]={hand:v.tip,dir:v.dir};let m=Ig(0,Ve.centerY,Ve.width,Ve.height,Ve.radius+.02,12).map(([v,w],R)=>c(v+l(R,1),w+l(R,2)));if((e.shadow??1)>0&&r>0&&(n.save(),n.globalAlpha*=.16*r*(e.shadow??1),n.beginPath(),n.ellipse(0,0,Ve.width*.62,.045,0,0,Math.PI*2),n.fillStyle="#6b4e4e",n.fill(),n.restore()),r<1&&s>0){n.save(),n.globalAlpha*=1-r;for(let v of f)Vn(n,na(v.a,v.b,h.r+i/2),i,s,Ae.petInk,!1);for(let v of d)Vn(n,na(v.root,v.tip,u.r+i/2),i,s,Ae.petInk,!1);Vn(n,m,i,s,Ae.petInk),n.restore()}if(r<=0)return g;n.save(),n.globalAlpha*=r;let p=Ae.orange;for(let v of f)xn(n,v.a,v.b,2*h.r+2*i,Ae.petInk),xn(n,v.a,v.b,2*h.r,"#cf6c4d");for(let v of d)xn(n,v.root,v.tip,2*u.r+2*i,Ae.petInk),xn(n,v.root,v.tip,2*u.r,p);Lg(n,c,e.ears||0,i),ta(n,m);let S=c(0,Ve.lift+Ve.height),E=n.createLinearGradient(0,S[1],0,Ve.lift);E.addColorStop(0,Ae.orangeLight),E.addColorStop(.55,p),E.addColorStop(1,"#c9654a"),n.fillStyle=E,n.fill(),n.save(),n.clip();let y=c(-.2,Ve.lift+Ve.height-.1),b=n.createRadialGradient(y[0],y[1],.01,y[0],y[1],.3);b.addColorStop(0,"rgba(255,236,224,0.75)"),b.addColorStop(.4,"rgba(255,220,200,0.22)"),b.addColorStop(1,"rgba(255,220,200,0)"),n.fillStyle=b,n.fillRect(-1,0,2,1.2);let M=n.createLinearGradient(0,Ve.lift+.12,0,Ve.lift);if(M.addColorStop(0,"rgba(150,60,40,0)"),M.addColorStop(1,"rgba(150,60,40,0.3)"),n.fillStyle=M,n.fillRect(-1,0,2,1.2),n.restore(),Vn(n,m,i,1,Ae.petInk),(e.ears||0)>0){let v=c(-.36,Ve.lift+Ve.height-.07),w=c(0,Ve.lift+Ve.height+.012),R=c(.36,Ve.lift+Ve.height-.07);n.beginPath(),n.moveTo(v[0],v[1]),n.quadraticCurveTo(w[0],w[1]+.03,R[0],R[1]),n.lineWidth=.024*e.ears,n.strokeStyle="#4a3a36",n.lineCap="round",n.stroke()}let A=c(0,Ve.centerY);return n.save(),n.translate(A[0],A[1]),er(n,{time:e.time,...e.face}),n.restore(),n.restore(),g}var bh=2761505,Dg=3810592,Ng=1.25;function Jf(n){n.deleteAttribute("uv");let e=Wf(n,1e-5);return e.computeVertexNormals(),e}function Ug(n){let e=n.dense.map(([i,s])=>new _e(Math.max(s,1e-4),i)),t=new Gs(e,80,Math.PI,Math.PI*2);return t.scale(1,1,n.depth),Jf(t)}function Fg(n,e){let t=[];for(let r=0;r<=10;r++){let a=-Math.PI/2+r/10*Math.PI;t.push(new _e(n*.8+Math.cos(a)*n*.2,Math.sin(a)*e))}t.unshift(new _e(1e-4,-e)),t.push(new _e(1e-4,e));let s=new Gs(t,48);return s.rotateX(Math.PI/2),Jf(s)}function xh(n,e){let t=document.createElement("canvas");t.width=n,t.height=e;let i=new Qn(t);return i.colorSpace=Dt,i.anisotropy=4,{canvas:t,ctx:t.getContext("2d"),tex:i}}function Og(n,e=.05,t=.012){let i=(m,p,S)=>Math.hypot(m,S/n.depth)-n.radiusAt(p),s=new I(n.radiusAt(n.strap.sy)*.55,n.strap.sy,0),r=new I(n.bag.x*.8,n.strap.hy,0),a=s.clone().add(r).multiplyScalar(.5),o=r.clone().sub(s).normalize(),l=new I(0,0,1),c=96,h=[],f=[];for(let m=0;m<c;m++){let p=m/c*Math.PI*2,S=o.clone().multiplyScalar(Math.cos(p)).add(l.clone().multiplyScalar(Math.sin(p))),E=0,y=1.5;for(let v=0;v<40;v++){let w=(E+y)/2,R=a.clone().addScaledVector(S,w);i(R.x,R.y,R.z)<0?E=w:y=w}let b=a.clone().addScaledVector(S,E),M=.002,A=new I(i(b.x+M,b.y,b.z)-i(b.x-M,b.y,b.z),i(b.x,b.y+M,b.z)-i(b.x,b.y-M,b.z),i(b.x,b.y,b.z+M)-i(b.x,b.y,b.z-M)).normalize();h.push(b.addScaledVector(A,t)),f.push(A)}let u=[],d=[],g=[];for(let m=0;m<c;m++){let p=h[m],S=h[(m+1)%c].clone().sub(h[(m+c-1)%c]).normalize(),E=new I().crossVectors(S,f[m]).normalize().multiplyScalar(e/2);u.push(p.x+E.x,p.y+E.y,p.z+E.z,p.x-E.x,p.y-E.y,p.z-E.z),d.push(...f[m].toArray(),...f[m].toArray())}for(let m=0;m<c;m++){let p=m*2,S=(m+1)%c*2;g.push(p,S,p+1,S,S+1,p+1)}let _=new Tt;return _.setAttribute("position",new Ge(u,3)),_.setAttribute("normal",new Ge(d,3)),_.setIndex(g),{geometry:_,points:h}}function Bg(n,e,t,i,s=.004,r=48,a=32){let o=[],l=[],c=[];for(let f=0;f<=a;f++){let u=t+(i-t)*f/a,d=n.radiusAt(u)+s;for(let g=0;g<=r;g++){let _=-e+2*e*g/r;o.push(d*Math.sin(_),u,d*Math.cos(_)*n.depth),l.push(g/r,f/a)}}for(let f=0;f<a;f++)for(let u=0;u<r;u++){let d=f*(r+1)+u;c.push(d,d+1,d+r+1,d+1,d+r+2,d+r+1)}let h=new Tt;return h.setAttribute("position",new Ge(o,3)),h.setAttribute("uv",new Ge(l,2)),h.setIndex(c),h.computeVertexNormals(),h}function kg(n,e,t,i,s,r){let a=Math.max(Math.abs(n)-(t/2-r),0),o=Math.max(Math.abs(e)-(i/2-r),0),l=r*r-a*a-o*o;return s/2-r+Math.sqrt(Math.max(l,0))}function zg(){let n=document.createElement("canvas");n.width=n.height=128;let e=n.getContext("2d"),t=e.createRadialGradient(64,64,4,64,64,62);t.addColorStop(0,"rgba(70,50,80,0.55)"),t.addColorStop(.55,"rgba(70,50,80,0.28)"),t.addColorStop(1,"rgba(70,50,80,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);let i=new Qn(n);return i.colorSpace=Dt,i}var Zf=null;function $f(n,e){Zf||=zg();let t=new rt(new jn(1,1),new Sn({map:Zf,transparent:!0,depthWrite:!1}));return t.rotation.x=-Math.PI/2,t.scale.set(n*2,e*2,1),t.renderOrder=1,t}var Mh=()=>({x:0,y:0,z:0,rotY:0,tiltZ:0,tiltX:0,squash:1,bendX:0,bendZ:0,twist:0,armL:0,armR:0,armLSwing:0,armRSwing:0,legL:0,legR:0,legLSwing:0,legRSwing:0,bagSwing:0,tailWag:0,face:{expr:"neutral"},hold:null,visible:!0,shadow:1}),wl=class{constructor(e=pi){this.spec=e,this.root=new st,this.def=new Qr(e.bend);let t=this.def;t.u.uRimStrength.value=.18,t.u.uRim.value.set(16774380);let i=t.toon(16777215,Ht.soft),s=t.outline(bh),r=t.toon(new Fe(Ae.earInner),Ht.soft),a=t.toon(2827812,Ht.soft);this.materials={white:i,ink:s,inner:r,black:a},this.body=qt(Ug(e),i,s,this.root),this.ears=[-1,1].map(b=>{let M=qt(new Ut(e.ear.r,32,20),i,s,this.root);M.position.set(b*e.ear.x,e.ear.y,-.015),M.scale.set(1,1,.6),M.rotation.z=-b*.2;let A=qt(new Ut(e.ear.r*.55,24,16),r,null,M);return A.position.set(b*.006,.006,e.ear.r*.72),A.scale.set(1,1,.35),M});let o=e.radiusAt(e.arm.y)-e.arm.r*.45,l=e.arm.len-e.arm.r,c=new Ii(e.arm.r,l,10,28);this.arms=[-1,1].map(b=>{let M=new st;M.position.set(b*o,e.arm.y,.03),this.root.add(M);let A=qt(c,i,s,M);A.position.y=-l/2;let v=new st;return v.position.y=-e.arm.len+e.arm.r*.6,M.add(v),{side:b,pivot:M,mesh:A,hand:v}});let h=e.leg.len-e.leg.r,f=new Ii(e.leg.r,h,10,24);this.legs=[-1,1].map(b=>{let M=new st;M.position.set(b*e.leg.x,e.leg.len,0),this.root.add(M);let A=qt(f,i,s,M);return A.position.y=-h/2-e.leg.r*.02,{side:b,pivot:M,mesh:A}});let u=e.tail.r;this.tail=qt(new Ut(u,24,16),i,s,this.root),this.tail.position.set(0,e.tail.y,-e.radiusAt(e.tail.y)*e.depth-u*.35);let d=Og(e),g=t.toon(2498848,Ht.soft);this.strap=new rt(d.geometry,g),this.strap.frustumCulled=!1,this.root.add(this.strap),this.bagPivot=new st;let _=e.radiusAt(e.bag.y)*e.depth;this.bagPivot.position.set(e.bag.x+.01,e.bag.y+e.bag.r*.75,_*.55),this.bagPivot.rotation.y=-.55,this.root.add(this.bagPivot);let m=qt(Fg(e.bag.r,.055),a,s,this.bagPivot);m.position.set(0,-e.bag.r*.75,.06);let p=xh(256,256);p.ctx.translate(128,128),p.ctx.scale(1100,-1100),Hn(p.ctx,0,.004,1,"#ffffff"),p.tex.needsUpdate=!0;let S=new rt(new jn(e.bag.r*1.6,e.bag.r*1.6),t.basic({map:p.tex,transparent:!0,depthWrite:!1}));S.position.set(0,0,.0565),S.renderOrder=3,S.frustumCulled=!1,m.add(S),this.bag=m,this.faceY0=e.face.y-.22,this.faceY1=e.face.y+.2,this.faceTheta=1.05;let E=e.radiusAt(e.face.y);this.facePhysW=2*this.faceTheta*E;let y=Math.round(1024*(this.faceY1-this.faceY0)/this.facePhysW);this.faceC=xh(1024,y),this.face=new rt(Bg(e,this.faceTheta,this.faceY0,this.faceY1),t.basic({map:this.faceC.tex,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4})),this.face.renderOrder=2,this.face.frustumCulled=!1,this.root.add(this.face),this.faceKey="",this.mic=Gg(t),this.arms[1].hand.add(this.mic),this.wand=Kf(t),this.arms[1].hand.add(this.wand),this.shadow=$f(.55*(e.height/2+.3),.4),this.pose=Mh()}paintFace(e,t){let i=JSON.stringify([e.expr,(e.open||0).toFixed(2),(e.blink||0).toFixed(2),(e.lookX||0).toFixed(2),(e.lookY||0).toFixed(2),e.blush??-1,(e.sweat||0).toFixed(2),(e.gloom||0).toFixed(2),e.tremble?t.toFixed(2):0,e.sweat?t.toFixed(2):0]);if(i===this.faceKey)return;this.faceKey=i;let{canvas:s,ctx:r,tex:a}=this.faceC;r.setTransform(1,0,0,1,0,0),r.clearRect(0,0,s.width,s.height);let o=s.width/this.facePhysW,l=s.height*(1-(this.spec.face.y-this.faceY0)/(this.faceY1-this.faceY0));r.translate(s.width/2,l),r.scale(o*this.spec.face.scale,-o*this.spec.face.scale),js(r,{time:t,...e}),a.needsUpdate=!0}apply(e,t=0){this.pose=e;let i=this.spec;this.root.visible=e.visible!==!1,this.root.position.set(e.x,e.y,e.z),this.root.rotation.set(e.tiltX||0,e.rotY||0,e.tiltZ||0,"YXZ");let s=this.def.u;s.uSquash.value=e.squash??1,s.uBend.value.set(e.bendX||0,e.bendZ||0),s.uTwist.value=e.twist||0;for(let o of this.arms){let l=o.side<0?e.armL:e.armR,c=o.side<0?e.armLSwing:e.armRSwing;o.pivot.rotation.set(-(c||0),0,o.side*(i.arm.splay3d+(l||0)),"ZXY")}for(let o of this.legs){let l=o.side<0?e.legL:e.legR,c=o.side<0?e.legLSwing:e.legRSwing;o.pivot.position.y=i.leg.len+(l||0),o.pivot.rotation.x=-(c||0)}this.bagPivot.rotation.z=e.bagSwing||0,this.tail.position.x=Math.sin(e.tailWag||0)*.03,this.mic.visible=e.hold==="mic",this.wand.visible=e.hold==="wand",this.paintFace(e.face||{},t),this.root.updateMatrixWorld(!0),this.def.syncRoot(this.root),this.shadow.visible=this.root.visible&&(e.shadow??1)>0;let a=1/(1+Math.max(0,e.y-(e.groundY??0))*1.5);this.shadow.position.set(e.x,(e.groundY??0)+.004,e.z),this.shadow.material.opacity=(e.shadow??1)*a,this.shadow.scale.set(.62*(i.height/2+.6)*a,.62*a,1)}updateOutline(e,t=3.2,i=1080){let s=new I(0,this.spec.height*.6,0).applyMatrix4(this.root.matrixWorld),a=2*e.position.distanceTo(s)*Math.tan(pl.degToRad(e.fov)/2)/i;this.def.u.uOutline.value=t*a}};function Gg(n){let e=new st,t=n.outline(bh),i=qt(new on(.03,.022,.26,20),n.toon(4935516,Ht.soft),t,e);i.position.y=.06;let s=qt(new Ut(.07,24,16),n.toon(14672874,Ht.soft),t,e);return s.position.y=.22,e.rotation.set(.5,0,-.35),e.position.set(0,0,.07),e}function Kf(n){let e=new st,t=n.outline(bh),i=qt(new on(.014,.014,.34,12),n.toon(16764779,Ht.soft),t,e);i.position.y=.1;let s=qt(new ts(.075,.016,12,40),n.toon(16752576,Ht.soft),t,e);return s.position.y=.34,e.rotation.set(.35,0,-.25),e.position.set(0,0,.06),e.ring=s,e}var Sh=()=>({x:0,y:0,z:0,rotY:0,tiltZ:0,tiltX:0,squash:1,bendX:0,bendZ:0,twist:0,armL:0,armR:0,armLSwing:0,armRSwing:0,walk:0,stepPhase:0,legLift:0,face:{expr:"normal"},ears:0,hold:null,visible:!0,shadow:1}),Tl=class{constructor(){this.root=new st,this.def=new Qr(Ve.bend);let e=this.def;e.u.uSpec.value=.85,e.u.uRimStrength.value=.22,e.u.uRim.value.set(16767428);let t=e.toon(new Fe(Ae.orange),Ht.pet),i=e.toon(new Fe("#c96a4c"),Ht.pet),s=e.outline(Dg),r=e.toon(16777215,Ht.soft),a=e.toon(new Fe(Ae.earInner),Ht.soft);this.materials={orange:t,ink:s};let{width:o,height:l,depth:c,radius:h}=Ve;this.body=qt(new Sl(o,l,c,8,h),t,s,this.root),this.body.position.y=Ve.centerY;let f=Ve.leg,u=Ve.lift+.06-2*f.r,d=new Ii(f.r,Math.max(.02,u),8,20);this.legs=f.xs.map((R,P)=>{let L=new st;L.position.set(R,Ve.lift+.06,.02),this.root.add(L);let N=qt(d,i,s,L);return N.position.y=-(u/2+f.r)+0,{i:P,pivot:L,mesh:N}});let g=Ve.arm,_=new Ii(g.r,g.len,8,20);this.arms=[-1,1].map(R=>{let P=new st;P.position.set(R*(g.x-.1),g.y,0),this.root.add(P);let L=qt(_,t,s,P);L.rotation.z=Math.PI/2,L.position.x=R*(g.len/2+.1);let N=new st;return N.position.x=R*(g.len+.14),P.add(N),{side:R,pivot:P,mesh:L,hand:N}});let m=o*.98,p=l*.92,S=40,E=26,y=[],b=[],M=[];for(let R=0;R<=E;R++)for(let P=0;P<=S;P++){let L=-m/2+m*P/S,N=-p/2+p*R/E;y.push(L,N+Ve.centerY,kg(L,N,o,l,c,h)+.004),b.push(P/S,R/E)}for(let R=0;R<E;R++)for(let P=0;P<S;P++){let L=R*(S+1)+P;M.push(L,L+1,L+S+1,L+1,L+S+2,L+S+1)}let A=new Tt;A.setAttribute("position",new Ge(y,3)),A.setAttribute("uv",new Ge(b,2)),A.setIndex(M),this.facePhys=[m,p],this.faceC=xh(1024,Math.round(1024*p/m)),this.face=new rt(A,e.basic({map:this.faceC.tex,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4})),this.face.renderOrder=2,this.face.frustumCulled=!1,this.root.add(this.face),this.faceKey="",this.earBand=new st,this.earBand.position.set(0,Ve.lift+Ve.height,0),this.root.add(this.earBand);for(let R of[-1,1]){let P=qt(new Ut(.085,28,18),r,s,this.earBand);P.position.set(R*.25,.045,0),P.scale.set(1,1,.55);let L=qt(new Ut(.047,20,12),a,null,P);L.position.set(0,-.004,.062),L.scale.set(1,1,.35)}let v=new es(new I(-o/2+.02,-.12,0),new I(0,.1,0),new I(o/2-.02,-.12,0)),w=qt(new Nr(v,32,.016,8),e.toon(4864566,Ht.soft),null,this.earBand);w.position.z=.02,this.wand=Kf(e),this.wand.rotation.set(0,0,.35),this.wand.position.set(.02,0,.05),this.wand.scale.setScalar(.9),this.arms[1].hand.add(this.wand),this.shadow=$f(.55,.38),this.pose=Sh()}paintFace(e,t){let i=JSON.stringify([e.expr,(e.open||0).toFixed(2),(e.blink||0).toFixed(2),(e.lookX||0).toFixed(2),(e.lookY||0).toFixed(2),e.blush??-1,(e.sweat||0).toFixed(2),e.tremble?t.toFixed(2):0,e.sweat?t.toFixed(2):0]);if(i===this.faceKey)return;this.faceKey=i;let{canvas:s,ctx:r,tex:a}=this.faceC;r.setTransform(1,0,0,1,0,0),r.clearRect(0,0,s.width,s.height);let o=s.width/this.facePhys[0];r.translate(s.width/2,s.height/2),r.scale(o,-o),er(r,{time:t,...e}),a.needsUpdate=!0}apply(e,t=0){this.pose=e,this.root.visible=e.visible!==!1,this.root.position.set(e.x,e.y,e.z),this.root.rotation.set(e.tiltX||0,e.rotY||0,e.tiltZ||0,"YXZ");let i=e.scale??Ng;this.root.scale.setScalar(i);let s=this.def.u;s.uSquash.value=e.squash??1,s.uBend.value.set(e.bendX||0,e.bendZ||0),s.uTwist.value=e.twist||0;for(let l of this.arms){let c=l.side<0?e.armL:e.armR,h=l.side<0?e.armLSwing:e.armRSwing;l.pivot.rotation.set(0,l.side*(h||0),l.side*(c||0),"YXZ")}for(let l of this.legs){let c=(e.stepPhase||0)*Math.PI*2+(l.i%2?Math.PI:0),h=Math.max(0,Math.sin(c))*.06*(e.walk||0)+(e.legLift||0);l.pivot.position.y=Ve.lift+.06+h,l.pivot.rotation.x=Math.cos(c)*.35*(e.walk||0)}this.wand.visible=e.hold==="wand";let r=Math.max(0,e.ears||0);this.earBand.visible=r>.001,this.earBand.scale.setScalar(Math.max(r,.001)),this.paintFace(e.face||{},t),this.root.updateMatrixWorld(!0),this.def.syncRoot(this.root),this.shadow.visible=this.root.visible&&(e.shadow??1)>0;let o=1/(1+Math.max(0,e.y-(e.groundY??0))*2.5);this.shadow.position.set(e.x,(e.groundY??0)+.005,e.z),this.shadow.material.opacity=(e.shadow??1)*o,this.shadow.scale.set(1.05*o*i,.75*o*i,1)}updateOutline(e,t=3,i=1080){let s=new I(0,Ve.centerY,0).applyMatrix4(this.root.matrixWorld),a=2*e.position.distanceTo(s)*Math.tan(pl.degToRad(e.fov)/2)/i;this.def.u.uOutline.value=t*a/this.root.scale.x}};var wh={day:{skyTop:"#f5bfd3",skyMid:"#fcdcca",skyHor:"#fff4e4",glow:"#fff6e0",glowAmt:.35,ground:"#cdeed9",fog:"#fdeee3",hemiSky:"#fff3ec",hemiGround:"#d9c6e8",hemi:1.45,key:"#fff8f0",keyI:1.9,rim:.18,bokeh:.55,prop:1,char:1},golden:{skyTop:"#f4b5c8",skyMid:"#fdd2b6",skyHor:"#fff0d6",glow:"#ffe7b8",glowAmt:.6,ground:"#d4ecd0",fog:"#fde6d6",hemiSky:"#fff0e0",hemiGround:"#dcc3e0",hemi:1.4,key:"#fff0dc",keyI:2,rim:.25,bokeh:.65,prop:1,char:1},party:{skyTop:"#cdb2f4",skyMid:"#f8bfd9",skyHor:"#ffe7d2",glow:"#ffe1f0",glowAmt:.5,ground:"#c9ecdc",fog:"#f7e0ec",hemiSky:"#fff0f6",hemiGround:"#cdbbeb",hemi:1.5,key:"#fff6fb",keyI:2,rim:.3,bokeh:.8,prop:1,char:1},dusk:{skyTop:"#34566a",skyMid:"#eaa0a8",skyHor:"#ffe0b6",glow:"#fff2d2",glowAmt:1.1,ground:"#243a42",fog:"#e9b4a8",hemiSky:"#d9959a",hemiGround:"#1c2f36",hemi:.42,key:"#ffb999",keyI:.15,rim:1,bokeh:1,prop:.22,char:.13}},mi=n=>new Fe(n);function Vg(n=!0){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d"),i=t.createRadialGradient(128,128,0,128,128,126);n?(i.addColorStop(0,"rgba(255,255,255,0.55)"),i.addColorStop(.72,"rgba(255,255,255,0.7)"),i.addColorStop(.9,"rgba(255,255,255,0.95)"),i.addColorStop(1,"rgba(255,255,255,0)")):(i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(.5,"rgba(255,255,255,0.6)"),i.addColorStop(1,"rgba(255,255,255,0)")),t.fillStyle=i,t.fillRect(0,0,256,256);let s=new Qn(e);return s.colorSpace=Dt,s}var Hg=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}`,Wg=`
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
}`,Al=class{constructor(e){this.scene=e,this.group=new st,e.add(this.group),this.mood={...wh.day},this.hemi=new Or(16777215,16777215,1.4),this.key=new kr(16777215,2),this.key.position.set(-4,7,6),e.add(this.hemi,this.key),e.fog=new Er(16777215,18,90),this.skyU={uTop:{value:mi("#fff")},uMid:{value:mi("#fff")},uHor:{value:mi("#fff")},uGlow:{value:mi("#fff")},uGlowDir:{value:new I(0,.25,-1)},uGlowAmt:{value:.3}},this.sky=new rt(new Ut(400,48,24),new kt({uniforms:this.skyU,vertexShader:Hg,fragmentShader:Wg,side:Ft,depthWrite:!1,fog:!1})),this.sky.renderOrder=-10,this.sky.frustumCulled=!1,e.add(this.sky);let t=Vg(!0),i=fh(7),s=["#ffc4d6","#ffd9c4","#a8f0dc","#fff2d6","#f9b8cf","#c9f5e6","#ffe3b3"];this.bokeh=[];for(let l=0;l<84;l++){let c=l<40?-Math.PI/2+(i()-.5)*1.9:i()*Math.PI*2,h=l<40?.05+i()*.45:.08+i()*.75,f=70+i()*110,u=new Os(new Ki({map:t,color:mi(s[l%s.length]),transparent:!0,depthWrite:!1,fog:!1}));u.userData={base:new I(Math.cos(c)*Math.cos(h)*f,Math.sin(h)*f+4,Math.sin(c)*Math.cos(h)*f),size:(4+i()*12)*(f/120),seed:i()*100,alpha:.35+i()*.5},u.renderOrder=-5,this.bokeh.push(u),this.group.add(u)}let r=new zs(90,160,0,Math.PI*2);r.rotateX(-Math.PI/2);let a=r.attributes.position,o=[];for(let l=0;l<a.count;l++){let c=a.getX(l),h=a.getZ(l),f=Math.hypot(c,h),u=me((f-9)/14)*(Qe(c*.07,3)*.5+.5)*3.2+me((f-30)/30)*4;a.setY(l,u);let d=.93+.07*(Qe(c*.35+3,5)*Qe(h*.35,6));o.push(d,d,d)}r.setAttribute("color",new Ge(o,3)),r.computeVertexNormals(),this.groundMat=Qs(16777215,{vertexColors:!0}),this.ground=new rt(r,this.groundMat),this.group.add(this.ground),this.groundHeight=(l,c)=>{let h=Math.hypot(l,c);return me((h-9)/14)*(Qe(l*.07,3)*.5+.5)*3.2+me((h-30)/30)*4},this.props=new st,this.group.add(this.props),this.propMats=[],this.buildProps()}_prop(e,t,i,s){let r=Gf(e,t,i||this.props,s);return r.material.userData.base=r.material.color.clone(),this.propMats.push(r.material),r}tree(e,t,i,s,r=1){let a=new st;a.position.set(e,this.groundHeight(e,t),t),a.scale.setScalar(r);let o=this._prop(new on(.13,.19,i,14),"#e9c9a6",a);o.position.y=i/2;let l=this._prop(new Ut(.95,32,22),s,a);l.position.y=i+.6,l.scale.set(1,.92,1),this._prop(new Ut(.55,24,16),s,a).position.set(.55,i+.25,.35);let h=this._prop(new Ut(.22,16,12),"#ffffff",a,{outline:null});return h.position.set(-.4,i+1.05,.62),h.material.transparent=!0,h.material.opacity=.45,this.props.add(a),a}bush(e,t,i,s){let r=new st;r.position.set(e,this.groundHeight(e,t),t),r.scale.setScalar(i);let a=[[0,.42,0,.55],[-.5,.32,.1,.42],[.52,.3,.05,.44],[.1,.3,.35,.4]];for(let[o,l,c,h]of a)this._prop(new Ut(h,26,18),s,r).position.set(o,l,c);return this.props.add(r),r}buildProps(){let e=fh(21),t=["#ffc2d6","#bff0dc","#ffd6b8","#f8b4cb","#d4c4f7","#c8f2e0"];this.heroTreeL=this.tree(-4.6,-4.6,1.9,"#ffbfd4",1.2),this.heroTreeR=this.tree(4.6,-4.2,2.1,"#bdeedd",1.25),this.heroBush=this.bush(2.35,-.4,1,"#a8e2c3"),this.bearBush=this.bush(-2.7,-1.2,2.05,"#b4e8cb"),this.bush(-2.2,.6,.7,"#b8ebcc"),this.bush(-5.2,-1,.9,"#a8e2c3");let i=this.props,s=new st;this.group.add(s),this.props=s;for(let w=0;w<40;w++){let R=e()*Math.PI*2,P=11+e()*34,L=Math.cos(R)*P,N=Math.sin(R)*P;N>-2&&Math.abs(L)<16||this.tree(L,N,1.4+e()*1.6,t[w%t.length],.9+e()*.8)}for(let w=0;w<26;w++){let R=e()*Math.PI*2,P=7+e()*26,L=Math.cos(R)*P,N=Math.sin(R)*P;N>0&&Math.abs(L)<9||this.bush(L,N,.6+e()*.7,e()>.5?"#a8e2c3":"#c3efd3")}this.props=i,this.bake(s,this.props),this.stump=new st;let r=this._prop(new on(.95,1.05,.36,40),"#dcaa7e",this.stump);r.position.y=.18;let a=document.createElement("canvas");a.width=a.height=256;let o=a.getContext("2d");o.fillStyle="#f3d3a8",o.fillRect(0,0,256,256),o.strokeStyle="#d9ab7c",o.lineWidth=5;for(let w=20;w<128;w+=22)o.beginPath(),o.arc(128,128,w,0,Math.PI*2),o.stroke();let l=new Qn(a);l.colorSpace=Dt;let c=new rt(new zs(.95,40),Qs(16777215,{map:l}));c.material.userData.base=c.material.color.clone(),this.propMats.push(c.material),c.rotation.x=-Math.PI/2,c.position.y=.361,this.stump.add(c),this.stumpTop=.36,this.props.add(this.stump),this.micStand=new st;let h=this._prop(new on(.018,.018,1.45,10),"#4b4f5c",this.micStand);h.position.y=.73;let f=this._prop(new on(.18,.2,.04,20),"#4b4f5c",this.micStand);f.position.y=.02;let u=new st;u.position.y=1.45,u.rotation.x=-1.05,this.micStand.add(u);let d=this._prop(new on(.028,.02,.22,14),"#4b4f5c",u);d.position.y=.08;let g=this._prop(new Ut(.068,20,14),"#e6e9ef",u);g.position.y=.22,this.micStand.position.set(.36,this.stumpTop,.55),this.micStand.rotation.y=-.75,this.props.add(this.micStand);let _=new kt({uniforms:{uA:{value:0}},vertexShader:`varying float vY; varying vec3 vN; varying vec3 vV;
        void main(){ vY = uv.y; vec4 mv = modelViewMatrix*vec4(position,1.0); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix*mv; }`,fragmentShader:`uniform float uA; varying float vY; varying vec3 vN; varying vec3 vV;
        void main(){ float f = abs(dot(normalize(vN), normalize(vV))); float a = uA * pow(vY, 1.6) * smoothstep(0.0, 0.7, f) * 0.09;
          gl_FragColor = vec4(1.0, 0.95, 0.82, a); }`,transparent:!0,depthWrite:!1,blending:Xs,side:yn});this.spotCone=new rt(new on(.25,1.35,6.5,40,1,!0),_),this.spotCone.position.set(0,3.25+.36,0),this.spotCone.renderOrder=7,this.spotCone.visible=!1,this.group.add(this.spotCone),this.groundWand=new st;let m=this._prop(new on(.016,.016,.36,10),"#ffcf6b",this.groundWand);m.rotation.z=Math.PI/2;let p=this._prop(new ts(.075,.018,10,32),"#ff9fc0",this.groundWand);p.rotation.x=Math.PI/2,p.position.x=.25,this.groundWand.position.set(.95,.03,.95),this.groundWand.rotation.y=.5,this.groundWand.visible=!1,this.props.add(this.groundWand);let S=new on(.075,.075,.012,10),E=["#ffffff","#ffd1e0","#fff0b3","#ffc9b0"],y=420;this.flowers=new ji(S,Qs(16777215),y),this.flowerCenters=new ji(new Ut(.03,8,6),Qs("#ffc94d"),y);let b=new nt,M=new _n;for(let w=0;w<y;w++){let R=e()*Math.PI*2,P=1.6+Math.pow(e(),.7)*26,L=Math.cos(R)*P,N=Math.sin(R)*P,D=this.groundHeight(L,N)+.02,z=.7+e()*.8;M.setFromEuler(new Bn((e()-.5)*.3,e()*6,(e()-.5)*.3)),b.compose(new I(L,D,N),M,new I(z,z,z)),this.flowers.setMatrixAt(w,b),this.flowers.setColorAt(w,mi(E[w%E.length])),b.compose(new I(L,D+.015*z,N),M,new I(z,z*.6,z)),this.flowerCenters.setMatrixAt(w,b)}for(let w of[this.flowers,this.flowerCenters])w.material.userData.base=w.material.color.clone(),this.propMats.push(w.material),this.props.add(w);this.clouds=new st;for(let w=0;w<8;w++){let R=new st,P=-Math.PI*.95+w*.28+e()*.1,L=70+e()*40;R.position.set(Math.cos(P)*L,16+e()*18,Math.sin(P)*L),R.scale.setScalar(3+e()*3);for(let N=0;N<4;N++)this._prop(new Ut(.6+e()*.4,20,14),"#ffffff",R,{outline:null}).position.set((N-1.5)*.7,e()*.3,e()*.3);this.clouds.add(R)}this.group.add(this.clouds);let A=new st;for(;this.clouds.children.length;)A.add(this.clouds.children[0]);this.group.add(A),this.bake(A,this.clouds);let v=new Set;this.group.traverse(w=>{w.isMesh&&w.material.isMeshToonMaterial&&w.material.userData.base&&v.add(w.material)}),this.propMats=[...v]}bake(e,t){e.updateMatrixWorld(!0);let i=new Map;e.traverse(s=>{if(!s.isMesh||!s.material.isMeshToonMaterial)return;let r=s.material,a=s.children.find(h=>h.isMesh&&h.material.isShaderMaterial),o=[(r.userData.base||r.color).getHexString(),r.transparent?r.opacity:1,!!a].join("|"),l=i.get(o);l||i.set(o,l={geos:[],mat:r,outline:a});let c=s.geometry.clone().applyMatrix4(s.matrixWorld);for(let h of Object.keys(c.attributes))h!=="position"&&h!=="normal"&&c.deleteAttribute(h);l.geos.push(c)}),e.removeFromParent();for(let s of i.values()){let r=Hf(s.geos),a=new rt(r,s.mat);s.outline&&a.add(new rt(r,s.outline.material)),t.add(a)}}setMood(e,t=e,i=0){let s=typeof e=="string"?wh[e]:e,r=typeof t=="string"?wh[t]:t,a={};for(let o in s)typeof s[o]=="number"?a[o]=oe(s[o],r[o],i):a[o]=mi(s[o]).lerp(mi(r[o]),i);this.mood=a,this.skyU.uTop.value.copy(a.skyTop),this.skyU.uMid.value.copy(a.skyMid),this.skyU.uHor.value.copy(a.skyHor),this.skyU.uGlow.value.copy(a.glow),this.skyU.uGlowAmt.value=a.glowAmt,this.scene.fog.color.copy(a.fog),this.hemi.color.copy(a.hemiSky),this.hemi.groundColor.copy(a.hemiGround),this.hemi.intensity=a.hemi,this.key.color.copy(a.key),this.key.intensity=a.keyI,this.groundMat.color.copy(a.ground);for(let o of this.propMats)o.color.copy(o.userData.base).multiplyScalar(a.prop).lerp(a.ground,(1-a.prop)*.5);return a}update(e,t,i=0){this.sky.position.copy(t.position);let s=this.mood;for(let r of this.bokeh){let a=r.userData;r.position.set(a.base.x+Qe(e*.08+a.seed,1)*4,a.base.y+Qe(e*.1+a.seed,2)*3,a.base.z);let o=1+i*.07*(.5+.5*Math.sin(a.seed));r.scale.setScalar(a.size*o),r.material.opacity=a.alpha*s.bokeh*(.8+.2*Qe(e*.5+a.seed,3))}this.clouds.rotation.y=e*.004}},Xg=`
varying vec3 vN; varying vec3 vV;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vN = normalize(normalMatrix * normal);
  vV = normalize(-mv.xyz);
  gl_Position = projectionMatrix * mv;
}`,qg=`
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
}`,Rl=class{constructor(e,t=90){this.geo=new Ut(1,28,18),this.pool=[];for(let i=0;i<t;i++){let s=new rt(this.geo,new kt({uniforms:{uOpacity:{value:1},uPhase:{value:Math.random()}},vertexShader:Xg,fragmentShader:qg,transparent:!0,depthWrite:!1}));s.visible=!1,s.renderOrder=5,e.add(s),this.pool.push(s)}}set(e){for(let t=0;t<this.pool.length;t++){let i=this.pool[t],s=e[t];if(!s||s.r<=.001||s.a<=.001){i.visible=!1;continue}i.visible=!0,i.position.set(s.x,s.y,s.z),i.scale.set(s.r*(s.sx||1),s.r*(s.sy||1),s.r),i.material.uniforms.uOpacity.value=s.a,i.material.uniforms.uPhase.value=s.phase||0}}};function ia(n,e){let t=[];if(n<e.t0)return t;let i=Math.floor((Math.min(n,e.t1)-e.t0)*e.rate)+1,s=(r,a)=>{let o=Math.sin((r+1)*12.9898+(e.seed||0)*78.233+a*37.719)*43758.5453;return o-Math.floor(o)};for(let r=0;r<i;r++){let a=e.t0+r/e.rate,o=n-a,l=e.life*(.75+.5*s(r,1));if(o<0||o>l+.15)continue;let c=e.origin(a,r),h=e.spread??.3,f=e.vel[0]+(s(r,2)-.5)*h,u=e.vel[1]+(s(r,3)-.5)*h*.6,d=e.vel[2]+(s(r,4)-.5)*h,g=e.size[0]+(e.size[1]-e.size[0])*s(r,5),_=Math.min(1,o/.25),m=Math.sin(o*3+r)*.08,p=1,S=g*(.3+.7*_),E=1+Math.sin(o*9+r)*.05,y=1-Math.sin(o*9+r)*.05;if(o>l){let b=(o-l)/.15;S*=1+b*.6,p=1-b}t.push({x:c[0]+f*o+m,y:c[1]+u*o+Math.sin(o*2+r)*.05,z:c[2]+d*o,r:S,a:p,sx:E,sy:y,phase:s(r,6)+o*.15,popped:o>l})}return t}function El(n,e=128){let t=document.createElement("canvas");t.width=t.height=e;let i=t.getContext("2d");i.translate(e/2,e/2),n(i,e/2);let s=new Qn(t);return s.colorSpace=Dt,s}function Qf(){let n=El((s,r)=>{let a=s.createRadialGradient(0,0,0,0,0,r);a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(.2,"rgba(255,255,255,0.8)"),a.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=a,s.beginPath();for(let o=0;o<8;o++){let l=o/8*Math.PI*2,c=o%2===0?r:r*.18;s.lineTo(Math.cos(l)*c,Math.sin(l)*c)}s.closePath(),s.fill()}),e=El((s,r)=>{s.scale(r/60,r/60),s.beginPath(),s.moveTo(0,38),s.bezierCurveTo(-60,-5,-38,-52,0,-22),s.bezierCurveTo(38,-52,60,-5,0,38),s.fillStyle="#ffffff",s.fill(),s.lineWidth=7,s.strokeStyle="rgba(58,37,32,0.9)",s.stroke()}),t=El((s,r)=>{s.scale(r/60,r/60),s.fillStyle="#ffffff",s.strokeStyle="rgba(58,37,32,0.95)",s.lineWidth=6,s.beginPath(),s.ellipse(-18,28,16,12,-.4,0,Math.PI*2),s.ellipse(24,18,16,12,-.4,0,Math.PI*2),s.fill(),s.stroke(),s.beginPath(),s.moveTo(-4,26),s.lineTo(-4,-38),s.lineTo(38,-48),s.lineTo(38,16),s.lineWidth=8,s.stroke()}),i=El((s,r)=>{let a=s.createRadialGradient(0,0,0,0,0,r);a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=a,s.fillRect(-r,-r,2*r,2*r)});return{star:n,heart:e,note:t,glow:i}}var Cl=class{constructor(e,t,i=160){this.tex=t,this.pool=[];for(let s=0;s<i;s++){let r=new Os(new Ki({map:t.star,transparent:!0,depthWrite:!1,fog:!1}));r.visible=!1,r.renderOrder=6,e.add(r),this.pool.push(r)}}set(e){for(let t=0;t<this.pool.length;t++){let i=this.pool[t],s=e[t];if(!s||s.a<=.001||s.s<=1e-4){i.visible=!1;continue}i.visible=!0;let r=i.material;r.map!==this.tex[s.tex]&&(r.map=this.tex[s.tex],r.needsUpdate=!0),r.color.set(s.color||"#ffffff"),r.opacity=s.a,r.rotation=s.rot||0,r.blending=s.add?Xs:Fi,i.position.set(s.x,s.y,s.z),i.scale.set(s.s,s.s,1)}}},Pl=class{constructor(e,t=260){this.max=t;let i=new jn(.07,.11);this.mesh=new ji(i,new Sn({side:yn}),t),this.mesh.frustumCulled=!1,this.mesh.renderOrder=4;let s=["#ff8fb1","#ffd36e","#8ee6c9","#b9a4ff","#ff9d6e","#ffffff","#d97757"];for(let r=0;r<t;r++)this.mesh.setColorAt(r,mi(s[r%s.length]));this.mesh.count=0,e.add(this.mesh),this._m=new nt,this._q=new _n,this._e=new Bn,this._v=new I,this._s=new I(1,1,1)}update(e,t){let i=0;for(let s of t){let r=e-s.t0;if(!(r<0||r>3.2))for(let a=0;a<s.n&&i<this.max;a++,i++){let o=m=>{let p=Math.sin((a+1)*91.7+s.seed*13.1+m*7.3)*43758.5;return p-Math.floor(p)},l=o(1)*Math.PI*2,c=.5+o(2)*.8,h=(.6+o(3))*(s.power||2.2),f=1-Math.exp(-r*2.2),u=s.x+Math.cos(l)*h*f*.8+Math.sin(r*3+a)*.15*r,d=s.z+Math.sin(l)*h*f*.5,g=s.y+c*h*f*1.1-r*r*.55-r*.3;this._e.set(r*(4+o(4)*6),r*(3+o(5)*5),o(6)*6),this._q.setFromEuler(this._e);let _=r>2.6?1-(r-2.6)/.6:1;this._s.setScalar(_),this._m.compose(this._v.set(u,g,d),this._q,this._s),this.mesh.setMatrixAt(i,this._m)}}this.mesh.count=i,this.mesh.instanceMatrix.needsUpdate=!0}};var tr={duration:78.32,bpm:114.0131,beat:.526255,offset:.1478,fps:60,kick:[0,0,0,0,0,5,12,11,10,54,95,99,89,80,72,65,59,53,48,43,39,35,31,28,25,23,21,19,17,15,14,12,11,10,9,8,7,7,6,5,5,4,4,4,3,3,3,2,2,2,2,2,1,8,17,15,36,92,98,99,89,80,72,65,59,53,48,43,39,35,31,28,26,23,21,19,17,15,14,12,11,10,9,8,7,7,6,5,5,4,4,4,3,3,3,2,2,2,2,2,2,7,7,6,5,5,4,4,4,3,3,3,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,9,21,19,55,95,99,89,80,72,65,59,53,48,43,39,35,31,28,25,23,21,19,17,15,14,12,11,10,9,8,7,7,6,5,5,4,4,4,3,3,3,2,2,2,2,2,1,3,5,5,39,93,98,89,80,72,65,58,53,47,43,39,35,31,28,25,23,21,19,17,15,14,12,11,10,9,8,7,7,6,5,5,4,4,4,3,3,3,2,2,2,2,2,1,1,1,2,3,3,3,2,2,2,4,7,13,27,33,29,26,24,22,19,17,16,14,13,12,10,9,8,8,7,6,6,5,5,10,13,47,94,98,89,80,72,65,58,53,47,43,39,35,31,28,25,23,21,19,17,15,14,12,11,10,9,8,7,7,6,5,5,4,4,4,3,3,3,2,2,2,2,2,1,1,5,7,24,89,98,99,89,80,72,65,59,53,48,43,39,35,31,28,26,23,21,19,17,15,14,12,11,10,9,8,7,7,6,5,5,4,4,4,3,3,3,2,2,2,2,2,1,7,9,8,7,6,6,5,5,4,4,3,3,3,3,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,0,0,5,22,24,21,65,96,99,89,80,72,65,59,53,48,43,39,35,31,28,25,23,21,19,17,15,14,12,11,10,9,8,7,7,6,5,5,4,4,4,3,3,3,2,2,2,2,2,2,14,23,21,38,93,98,89,80,72,65,58,53,47,43,39,35,31,28,25,23,21,19,17,15,14,12,11,10,9,8,7,7,6,5,5,4,4,4,3,3,3,2,2,2,2,2,1,1,3,5,5,5,4,4,4,3,3,5,14,19,20,18,16,15,13,12,11,10,9,8,7,6,6,5,5,4,4,3,3,9,15,14,61,95,99,89,80,72,65,59,53,48,43,39,35,31,28,25,23,21,19,17,15,14,12,11,10,9,8,7,7,6,5,5,4,4,4,3,3,3,2,2,2,2,2,1,4,11,10,9,51,94,99,89,80,72,65,59,53,48,43,39,35,31,28,25,23,21,19,17,15,14,12,11,10,9,8,7,7,8,9,8,7,7,6,5,5,4,4,4,3,3,3,2,7,17,19,17,16,14,13,12,10,9,8,8,7,6,6,5,10,14,13,12,11,10,9,8,7,6,6,5,5,4,4,13,69,80,72,65,96,86,78,70,63,57,51,46,42,37,34,30,27,25,22,23,21,19,17,15,14,12,11,10,9,8,7,7,8,7,6,7,7,10,9,8,7,6,6,5,5,4,4,59,95,85,77,91,82,73,66,60,54,48,44,39,35,32,29,26,23,21,19,17,15,14,13,11,10,9,8,7,7,6,5,10,9,8,11,10,9,8,7,7,6,5,5,4,4,4,7,16,14,13,11,23,20,18,17,18,16,15,23,29,26,24,21,19,17,16,14,13,11,10,9,8,8,7,6,6,5,4,27,49,60,95,99,89,80,72,65,59,53,48,43,39,35,31,28,25,23,21,19,17,15,14,12,11,10,9,8,7,7,6,12,14,12,11,10,9,8,7,7,6,5,5,4,4,4,28,70,73,66,96,97,88,79,71,64,58,52,47,42,38,34,31,28,25,23,20,18,17,15,16,14,13,12,10,9,8,8,7,7,7,6,6,5,5,4,4,3,3,3,3,2,2,11,35,31,28,26,23,21,19,17,15,14,12,11,10,9,8,7,7,6,5,5,4,4,4,3,5,8,7,7,6,5,5,53,94,99,89,80,72,65,59,53,48,43,39,35,31,28,25,23,21,19,17,15,14,12,11,10,13,11,10,9,8,8,7,6,6,6,7,6,6,5,5,4,4,3,3,3,3,2,15,51,59,95,99,89,80,72,65,59,53,48,43,39,35,31,28,25,23,21,19,17,15,14,12,11,10,9,8,7,7,6,6,13,27,29,26,24,21,19,17,16,14,13,11,10,9,8,9,16,14,13,15,16,14,13,11,10,13,16,30,27,25,22,20,18,16,15,13,12,11,10,10,9,8,7,7,6,5,17,77,77,70,96,99,89,80,72,65,59,53,48,43,39,35,31,28,25,23,21,19,17,15,14,12,11,10,9,8,7,7,6,12,10,9,8,8,7,6,6,5,5,4,4,3,3,5,47,63,57,51,68,90,81,73,66,60,54,48,44,39,35,32,29,26,23,21,19,17,15,14,12,11,10,9,8,7,7,6,7,13,12,11,10,9,8,7,6,6,5,5,4,4,3,3,8,7,7,6,5,5,4,4,4,3,3,3,2,2,2,2,5,4,4,3,3,3,3,2,3,2,2,2,2,2,13,79,97,99,99,99,89,80,72,65,59,53,48,43,39,35,31,28,26,23,21,19,17,15,14,12,14,12,11,10,9,8,7,20,22,20,18,16,14,13,12,10,9,8,8,7,6,6,41,93,84,76,97,87,78,71,64,57,52,47,42,38,34,31,28,25,22,20,18,16,15,13,12,11,10,9,8,7,6,6,5,7,6,6,5,5,4,4,3,3,3,2,2,2,2,2,11,14,12,11,10,9,8,9,8,8,7,9,23,21,19,17,15,14,12,11,10,9,8,7,7,6,5,5,4,4,4,29,84,76,80,97,87,79,71,64,58,52,47,42,38,34,31,28,25,23,20,18,17,15,13,12,11,10,9,8,7,6,6,5,8,8,7,6,6,5,4,4,4,3,3,3,2,2,17,81,97,99,99,89,80,72,65,59,53,48,43,39,35,31,28,26,23,21,19,17,15,14,12,11,10,9,8,7,7,6,5,8,15,13,12,11,10,9,8,7,6,6,5,7,6,5,5,7,6,5,5,4,4,4,5,4,4,3,3,3,2,2,2,2,3,3,2,2,2,2,2,2,2,2,2,1,1,21,79,79,71,64,96,99,89,80,72,65,59,53,48,43,39,35,31,28,25,23,21,19,17,15,14,12,11,10,9,8,7,9,18,16,15,13,12,11,10,9,8,7,6,6,5,5,4,44,94,84,98,99,89,80,72,65,59,53,48,43,39,35,31,28,26,23,21,19,17,15,14,12,11,10,9,8,7,7,6,12,14,12,11,10,9,8,7,7,6,5,5,4,4,4,3,18,28,25,23,20,18,17,20,32,29,26,24,28,29,26,24,21,19,17,16,14,13,11,10,9,8,8,7,6,6,11,76,97,99,99,89,98,88,80,72,65,58,52,47,43,38,35,31,28,25,23,21,19,17,15,14,12,11,10,9,8,7,7,6,5,5,4,4,3,3,3,3,2,2,2,2,2,2,24,67,96,99,99,89,80,72,65,59,53,48,43,39,35,31,28,26,23,21,19,17,15,14,12,11,10,9,8,7,7,6,5,5,4,4,4,3,3,3,2,2,2,2,2,2,2,2,11,15,14,12,11,10,9,8,7,7,6,5,5,4,4,4,3,3,3,2,2,2,2,2,3,4,3,3,3,2,6,86,98,99,99,99,89,80,72,65,59,53,48,43,39,35,31,28,26,23,21,19,17,15,14,12,11,11,10,9,8,8,7,6,6,5,4,4,4,3,3,3,2,2,2,2,2,1,17,91,98,99,99,89,80,72,65,59,53,48,43,39,35,31,28,26,23,21,19,17,15,14,12,11,10,9,8,7,7,6,5,5,4,4,4,3,3,3,2,2,2,2,2,3,3,3,2,6,8,7,6,12,11,10,11,12,10,16,23,21,19,17,15,14,12,11,10,9,8,7,7,6,5,5,4,4,4,17,77,97,99,99,89,80,72,65,59,53,48,43,39,35,31,28,26,23,21,19,17,15,14,12,11,10,9,8,7,7,6,5,5,4,4,4,3,3,3,2,2,2,2,2,1,1,8,50,94,99,99,89,80,72,65,59,53,48,43,39,35,31,28,26,23,21,19,17,15,14,12,11,10,25,22,20,18,16,15,13,12,11,10,9,8,7,6,6,5,5,4,4,3,3,5,9,8,7,7,6,5,5,4,4,4,3,3,3,2,2,2,4,3,3,3,2,2,2,2,4,3,3,3,3,2,13,90,98,99,99,89,80,72,65,59,53,48,43,39,35,31,28,26,23,21,19,17,15,14,12,11,10,9,8,7,7,6,5,5,4,4,4,3,3,3,2,2,2,2,2,1,1,1,44,93,98,99,99,89,80,72,65,59,53,48,43,39,35,31,28,26,23,21,19,17,15,14,12,14,24,21,19,17,16,14,13,11,10,9,8,7,7,6,5,5,4,4,4,3,3,3,12,13,12,11,10,9,8,7,6,6,5,5,4,4,3,5,10,9,8,7,7,6,5,5,6,5,5,4,4,3,6,60,95,86,77,70,63,57,51,46,41,37,34,30,27,25,22,20,18,16,15,13,12,11,10,9,8,9,10,9,8,8,7,6,10,9,8,7,7,6,5,5,4,4,4,3,3,3,21,84,93,83,75,68,61,55,50,45,40,36,33,29,27,24,22,19,17,16,14,13,12,10,9,8,8,7,6,6,5,5,4,5,4,4,3,3,3,3,2,2,2,2,2,1,1,1,8,16,14,13,12,10,9,8,8,7,6,6,5,5,4,4,7,6,5,5,4,4,4,3,3,3,2,2,2,2,2,20,91,92,83,75,67,61,55,49,44,40,36,32,29,26,24,21,19,17,16,14,13,11,10,17,15,13,16,15,13,12,11,10,9,8,7,6,6,5,5,4,4,3,3,3,3,2,12,82,97,88,79,71,64,58,52,47,42,38,34,31,28,25,23,20,18,17,15,13,12,11,10,9,19,18,16,14,13,12,10,9,8,8,7,6,6,5,5,4,4,3,3,3,2,2,2,4,9,8,7,6,6,5,8,13,12,11,10,9,8,7,8,11,10,9,8,7,6,6,5,5,4,4,3,3,3,6,34,58,95,99,89,80,72,65,59,53,48,43,39,35,31,28,25,23,21,19,17,15,14,12,11,21,22,19,18,16,14,13,12,10,9,8,8,7,6,6,5,5,4,4,3,3,4,69,96,87,78,70,63,57,51,46,42,38,34,31,28,25,22,20,18,16,15,13,12,11,10,9,8,7,6,6,5,5,4,4,3,4,3,3,3,2,2,2,2,2,1,1,1,1,1,13,12,10,9,8,8,7,6,6,5,5,4,4,3,3,3,2,2,2,2,2,1,1,3,4,3,3,3,2,2,2,63,95,86,77,70,63,57,51,46,41,37,34,30,27,25,22,20,18,16,15,21,19,17,15,14,13,11,18,16,14,13,12,10,9,8,8,7,6,6,5,5,4,4,3,3,3,2,22,91,98,89,80,72,65,58,53,47,43,38,35,31,28,25,23,21,19,17,15,14,12,11,10,9,8,7,7,6,5,5,4,4,4,3,3,3,2,2,2,2,2,1,1,1,1,1,4,10,9,8,7,7,6,5,5,10,12,17,26,27,24,22,20,18,16,14,13,12,11,9,9,8,7,6,6,5,5,27,92,83,75,67,61,55,49,44,40,36,32,29,26,24,21,19,17,16,14,13,11,10,9,10,9,15,13,12,11,10,9,8,7,6,6,5,5,4,4,3,3,3,3,2,2,2,13,72,96,87,78,70,63,57,52,46,42,38,34,31,28,25,22,20,18,16,15,13,12,11,10,9,8,7,6,6,5,5,4,4,3,5,5,4,4,3,3,3,2,2,2,2,2,4,3,6,6,5,5,4,4,3,3,3,2,2,2,2,2,1,2,2,2,2,2,1,1,1,3,4,4,3,3,3,2,15,55,57,87,97,87,79,71,64,58,52,47,42,38,34,31,28,25,23,20,18,16,15,21,22,20,18,16,14,13,12,11,9,9,8,7,6,6,5,5,4,4,3,3,3,2,2,6,61,95,86,98,99,89,80,72,65,59,53,48,43,39,35,31,28,26,23,21,19,17,15,15,14,12,11,10,9,8,7,7,6,5,5,4,4,4,3,3,3,2,2,2,2,2,1,2,6,5,4,4,4,3,3,3,12,10,15,19,25,27,24,22,20,18,16,14,13,12,10,9,8,8,7,6,6,5,5,45,89,81,97,88,79,71,64,58,52,47,42,38,34,31,28,25,23,20,18,17,15,13,12,11,10,9,8,7,6,6,5,5,4,4,3,3,3,3,2,2,2,2,2,1,1,2,43,93,98,89,80,72,65,58,53,47,43,39,35,31,28,25,23,21,19,17,15,14,12,11,17,15,14,12,11,10,9,8,7,7,6,5,5,4,4,4,3,3,3,2,2,2,2,2,14,29,26,24,21,19,17,16,14,13,11,10,9,8,8,7,6,6,5,4,4,4,3,3,3,2,2,2,2,2,1,20,69,74,95,86,77,70,63,57,51,46,41,37,34,30,27,25,22,20,18,16,15,13,12,11,10,15,14,13,11,10,9,8,7,7,6,5,5,4,4,4,3,3,3,2,2,2,15,61,84,98,99,89,80,72,65,59,53,48,43,39,35,31,38,34,31,28,25,23,20,18,17,20,18,17,15,13,12,11,10,9,8,7,6,6,5,5,4,4,3,3,3,3,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,5,4,4,4,3,3,3,2,2,2,2,3,2,2,2,2,2,1,6,27,89,98,88,80,72,65,58,52,47,43,38,35,31,28,25,23,21,19,17,15,14,12,11,10,9,8,7,7,6,5,5,4,4,3,3,3,3,2,2,2,2,2,3,3,3,2,2,3,2,2,2,2,3,3,3,2,2,2,2,2,1,6,33,38,34,31,28,25,23,20,18,16,15,13,12,11,10,9,8,7,6,6,5,7,6,6,5,5,4,4,3,5,4,4,4,3,3,3,2,2,8,7,7,6,5,5,4,4,4,3,3,3,2,3,2,2,2,2,2,1,1,1,1,1,2,27,47,42,38,34,31,28,25,23,20,18,17,15,13,12,11,10,9,8,7,7,6,5,5,4,4,3,3,3,3,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,2,5,4,4,3,3,3,2,2,2,2,2,1,4,3,3,12,23,21,19,17,15,14,12,11,10,9,8,10,9,8,7,6,7,6,6,9,8,7,6,6,5,5,6,5,8,7,6,6,5,5,8,7,6,6,5,10,9,8,7,6,6,5,5,4,4,3,3,3,2,6,6,8,7,7,6,5,5,4,5,32,42,38,34,31,28,25,23,20,18,17,15,13,12,11,10,9,8,7,6,6,5,5,4,4,3,3,3,5,4,4,3,3,3,3,2,2,2,2,2,1,5,4,6,6,5,5,4,4,3,6,5,6,6,5,5,6,6,6,5,5,4,9,33,52,47,42,38,34,31,28,25,23,20,18,17,15,13,15,14,12,11,10,9,8,7,7,6,5,5,9,20,18,16,15,13,12,11,10,9,8,7,8,7,7,6,5,5,6,9,8,7,8,7,6,6,5,5,5,4,4,3,3,3,2,2,47,75,67,61,55,49,44,40,36,32,29,26,24,21,19,17,16,14,13,11,10,9,8,8,7,6,6,5,4,4,8,12,11,10,9,8,7,7,6,5,5,4,4,4,3,3,17,15,13,12,11,10,9,8,7,9,8,7,6,6,5,5,4,10,41,42,37,34,30,27,25,22,20,18,16,15,13,12,11,10,9,8,19,17,16,14,13,11,10,9,8,8,7,6,10,9,8,7,12,11,10,9,8,7,6,6,5,5,9,13,11,10,9,8,8,7,6,6,5,4,4,4,3,3,3,35,93,98,99,89,80,72,65,91,98,89,80,72,89,80,72,65,89,81,73,65,59,53,48,43,39,35,32,28,26,23,21,19,17,15,14,12,11,10,9,8,7,7,6,5,5,4,4,4,12,10,9,8,9,8,7,90,98,99,89,80,72,65,59,68,62,55,50,45,41,37,33,30,27,24,22,20,18,16,14,91,98,99,89,80,72,65,59,53,48,43,39,35,31,28,26,23,21,19,34,38,34,31,28,25,23,20,18,17,15,13,12,11,10,9,8,7,7,6,5,5,4,4,3,3,3,29,92,98,99,89,80,72,65,59,53,48,43,39,35,31,28,26,23,21,19,17,15,14,12,11,16,27,24,22,19,18,16,14,13,12,10,9,17,16,14,13,12,10,9,8,15,14,12,11,10,9,8,7,7,6,5,73,96,99,89,80,72,65,59,53,48,43,39,35,31,28,25,23,21,19,24,21,19,17,24,92,98,99,89,80,72,65,82,74,67,60,54,49,44,40,36,32,29,26,24,21,19,17,16,24,21,19,17,19,17,15,14,12,11,15,16,14,13,12,10,23,21,19,17,15,14,12,60,95,99,99,89,80,72,65,59,53,48,43,89,80,72,65,59,53,48,43,39,35,31,28,25,61,55,49,44,40,36,33,29,26,24,21,19,17,16,14,13,11,10,9,8,8,7,6,6,5,4,4,4,6,5,9,90,98,99,89,80,72,65,59,53,48,53,48,43,39,42,38,34,31,28,25,22,20,18,61,95,99,89,80,72,65,59,53,48,43,39,35,31,28,25,23,21,19,17,15,15,14,12,20,18,16,15,13,12,11,10,9,8,9,9,8,7,7,6,6,5,5,4,4,3,4,3,3,3,2,2,2,2,2,1,1,1,1,1,1,1,1,1,3,3,3,2,2,2,2,2,1,1,1,1,1,1,1,2,5,5,4,4,3,3,3,2,2,2,2,2,1,1,1,1,3,2,2,2,2,2,1,1,1,1,1,1,1,1,1,3,4,3,3,3,3,2,2,2,2,2,1,1,1,1,1,9,10,9,8,8,7,6,6,5,4,4,4,3,3,3,2,4,3,3,3,2,2,2,2,4,3,3,3,3,2,2,2,3,3,2,2,2,2,2,1,4,4,4,3,3,3,2,5,67,96,86,78,70,96,87,78,70,63,57,51,46,42,38,34,31,28,25,22,20,18,16,15,13,12,11,10,9,8,7,6,6,5,5,4,4,3,3,3,3,2,2,2,2,1,1,12,90,98,99,89,80,72,65,59,53,48,43,39,35,31,28,26,23,21,19,17,15,14,12,11,10,16,14,13,11,10,9,8,8,7,6,6,5,4,4,4,3,3,3,2,2,2,2,2,4,4,4,3,3,3,2,2,2,2,2,1,1,3,2,2,2,2,2,1,1,1,1,1,2,2,2,1,1,1,16,75,97,99,89,80,72,65,59,53,48,43,39,35,31,28,25,23,21,19,17,15,14,12,11,10,9,8,7,7,6,5,5,4,4,4,3,3,3,2,2,2,2,2,1,1,1,3,63,95,99,99,89,80,72,65,59,53,48,43,39,35,31,28,26,23,21,19,17,15,14,12,11,10,9,8,7,7,6,5,5,4,4,4,3,3,3,2,2,2,2,2,1,1,1,1,6,9,8,7,6,6,5,5,5,5,8,27,31,28,25,22,20,18,16,15,13,12,11,10,9,8,7,6,6,5,5,80,97,99,89,80,72,65,59,53,48,43,39,35,31,28,26,23,21,19,17,15,14,12,11,10,9,8,7,7,6,5,5,4,4,4,3,3,3,2,2,2,2,2,1,1,1,2,22,91,98,99,89,80,72,65,59,53,48,43,39,35,31,28,26,23,21,19,17,15,14,12,11,10,9,8,7,7,6,5,5,4,4,4,3,3,3,2,2,2,2,2,1,1,1,1,1,2,2,2,2,2,2,2,2,5,5,5,4,4,3,3,3,3,2,2,2,2,1,1,1,1,1,1,1,1,2,57,95,99,99,89,80,72,65,59,53,48,43,39,35,31,28,26,23,21,19,17,15,14,12,11,10,9,8,7,7,6,5,5,4,4,4,3,3,3,2,2,2,2,2,1,1,1,21,91,98,99,89,80,72,65,59,53,48,43,39,35,31,28,26,23,21,19,17,15,14,12,11,10,9,8,7,7,6,5,5,4,4,4,3,3,3,2,2,2,2,2,1,1,1,1,3,8,8,7,6,6,5,4,4,4,15,28,25,23,20,18,17,15,13,12,11,10,9,8,7,6,6,5,5,4,4,10,52,59,84,97,88,79,71,64,58,52,47,42,38,34,31,28,25,23,20,18,17,15,13,12,11,10,9,8,7,6,6,11,10,9,8,7,7,6,5,5,4,4,4,3,3,3,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],hat:[0,0,0,0,1,4,11,13,11,9,7,6,5,4,3,3,2,2,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,4,61,87,71,57,46,38,31,25,20,16,13,11,9,7,6,5,5,10,8,6,5,4,3,3,2,2,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18,58,77,89,73,59,48,39,32,26,21,17,14,11,9,7,58,95,77,63,51,41,34,27,22,18,15,12,10,8,6,5,4,3,3,2,2,1,1,1,1,1,1,0,0,0,0,0,8,12,10,8,6,5,4,3,3,2,2,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,42,83,68,55,60,49,40,32,26,21,17,14,11,9,7,6,5,12,10,8,6,5,4,3,3,2,2,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,14,57,75,85,69,56,45,37,30,24,20,16,13,11,9,7,6,5,4,3,2,2,2,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,2,2,2,2,7,6,5,4,3,3,3,2,2,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,62,71,58,47,38,31,25,20,17,13,11,9,7,6,5,4,12,14,11,9,7,6,5,4,3,3,2,2,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,3,26,58,95,99,80,65,53,43,35,28,23,19,15,12,10,10,59,72,58,47,38,31,25,21,17,14,11,9,7,6,5,4,3,3,2,2,1,3,7,5,4,4,3,2,2,2,1,2,12,13,11,9,7,6,5,4,3,3,2,2,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,3,40,66,54,44,35,29,23,19,15,12,10,8,7,5,4,4,7,11,9,7,6,5,4,3,3,2,2,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,23,56,64,52,42,34,28,23,18,15,12,10,8,6,5,4,3,9,7,6,5,4,3,3,2,2,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,8,10,8,7,5,4,4,3,2,2,2,1,1,1,1,1,0,0,0,0,0,0,0,5,26,21,17,14,11,9,8,79,97,99,80,65,53,43,35,28,23,19,15,12,10,8,7,5,15,12,10,8,6,5,4,7,18,14,12,9,8,6,5,12,23,18,15,12,10,8,6,16,22,18,14,12,9,8,13,53,83,97,79,64,52,42,34,28,23,18,15,12,10,8,12,62,95,77,63,51,41,34,27,22,18,15,12,10,8,6,5,4,3,3,2,2,1,1,4,23,18,15,12,10,8,7,15,41,33,27,22,18,14,12,9,8,6,5,4,3,3,2,10,17,14,11,9,7,6,5,11,14,12,9,8,6,5,49,94,98,80,65,53,43,35,28,23,19,15,12,10,8,7,5,27,31,25,20,16,13,11,9,7,6,5,4,3,3,2,2,15,31,25,20,16,13,11,9,29,36,29,24,19,16,13,71,96,78,63,51,42,34,28,22,18,15,12,10,8,6,5,51,94,95,77,63,51,41,34,27,22,18,15,12,10,8,6,5,7,6,5,4,3,2,7,38,31,25,20,17,14,11,9,28,35,29,23,19,15,13,10,8,7,5,4,4,3,2,2,2,1,1,1,1,1,0,5,18,15,12,10,8,6,21,91,98,99,80,65,53,43,35,28,23,19,15,12,10,8,7,22,43,35,28,23,19,15,12,10,8,7,5,4,4,3,2,16,46,37,30,24,20,16,13,26,51,41,33,27,22,18,31,92,98,80,65,53,43,35,28,23,19,15,12,10,8,7,23,74,88,71,58,47,38,31,25,20,17,13,11,9,7,6,5,4,3,3,2,2,1,1,11,42,34,28,23,18,15,12,33,52,42,34,28,23,18,15,12,10,8,6,5,4,3,3,7,10,8,7,5,4,3,7,20,17,13,11,9,7,9,90,98,99,80,65,53,43,35,28,23,19,15,12,10,8,7,16,45,47,38,31,25,20,16,13,11,9,7,6,5,4,3,6,44,36,29,24,19,16,13,14,51,41,34,27,22,18,20,91,98,99,80,65,53,43,35,28,23,19,15,12,10,8,12,62,93,75,61,50,40,33,27,22,18,14,12,9,8,6,5,7,5,4,4,3,2,2,5,25,20,17,13,11,9,7,16,37,30,24,20,16,13,10,8,7,6,5,4,3,2,2,2,3,5,4,3,4,3,3,2,25,20,16,13,11,9,61,95,99,80,65,53,43,35,28,23,19,15,12,10,8,7,5,23,28,23,18,15,12,10,8,6,5,4,3,3,2,2,2,25,40,32,26,21,17,14,11,34,42,34,28,23,18,15,88,98,80,65,52,43,35,28,23,18,15,12,10,8,7,5,46,94,76,62,50,41,33,27,22,18,14,12,9,8,6,5,4,3,3,2,2,1,1,1,16,35,28,23,19,15,12,10,43,43,35,28,23,19,15,12,10,8,7,5,4,4,3,3,11,9,7,6,5,4,3,9,21,17,14,11,9,7,21,91,98,99,80,65,53,43,35,28,23,19,15,12,10,8,7,27,37,30,24,20,16,13,11,9,7,6,5,4,3,2,2,13,38,31,25,21,17,14,11,23,45,36,29,24,19,16,45,94,98,80,65,53,43,35,28,23,19,15,12,10,8,7,24,83,67,55,44,36,29,24,19,16,13,10,8,7,6,4,4,6,5,4,3,3,2,2,14,25,21,17,14,11,9,7,23,34,27,22,18,15,12,10,8,6,5,4,3,3,2,2,1,1,1,1,1,1,1,2,14,18,15,12,10,8,15,91,98,99,80,65,53,43,35,28,23,19,15,12,10,8,7,20,45,36,30,24,19,16,13,10,8,7,6,5,4,3,2,3,23,19,15,12,10,8,7,10,33,27,22,18,14,12,25,92,98,80,65,53,43,35,28,23,19,15,12,10,8,7,23,87,98,79,64,52,42,34,28,23,18,15,12,10,8,7,5,4,3,3,2,2,2,1,6,25,29,23,19,15,13,10,16,44,35,29,23,19,15,13,10,8,7,5,4,4,3,2,5,9,8,6,5,4,3,3,13,18,15,12,10,8,6,45,94,98,99,80,65,53,43,35,28,23,19,15,12,10,8,7,30,36,29,24,19,16,13,10,8,7,5,4,4,3,2,2,21,31,25,20,16,13,11,9,39,41,34,27,22,18,15,70,96,99,80,65,53,43,35,28,23,19,15,12,10,8,9,62,95,77,63,51,41,34,27,22,18,15,12,10,8,6,5,10,8,7,5,4,3,3,2,14,21,17,14,11,9,7,12,42,34,28,22,18,15,12,10,8,6,5,4,3,3,2,2,1,4,5,4,3,3,2,2,15,12,10,8,6,5,22,91,98,99,80,65,53,43,35,28,23,19,15,12,10,8,7,19,28,22,18,15,12,10,8,6,9,7,6,5,4,3,3,17,44,35,29,23,19,15,12,19,34,27,22,18,15,12,38,93,98,80,65,53,43,35,28,23,19,15,12,10,8,7,29,76,61,50,40,33,27,22,18,14,12,9,8,6,5,4,3,3,2,2,1,1,1,1,11,31,25,20,16,13,11,9,38,53,43,35,28,23,19,15,12,10,8,7,5,4,4,3,16,13,11,9,7,6,5,4,20,16,13,11,9,7,12,90,98,99,80,65,53,43,35,28,23,19,15,12,10,8,7,25,46,37,30,24,20,16,13,11,9,7,6,5,4,3,2,11,55,44,36,29,24,19,16,13,40,33,26,21,17,14,22,90,96,78,64,52,42,34,28,22,18,15,12,10,8,6,12,90,98,80,65,53,43,35,28,23,19,15,12,10,8,7,5,4,4,3,2,2,2,1,11,26,21,17,14,11,9,7,38,64,52,42,34,28,22,18,15,12,10,8,6,5,4,3,3,2,2,1,1,1,1,1,11,18,14,12,9,8,17,66,96,99,80,65,53,43,35,28,23,19,15,12,10,8,7,13,51,42,34,27,22,18,15,12,10,8,6,5,4,3,3,2,18,28,23,18,15,12,10,8,37,30,24,20,16,13,11,61,95,77,63,51,41,34,27,22,18,15,12,10,8,6,9,61,95,77,63,51,41,34,27,22,18,15,12,10,8,6,5,4,3,3,2,2,1,1,1,16,24,20,16,13,11,9,17,52,42,34,28,22,18,15,12,10,8,6,5,4,3,3,3,9,7,6,5,4,3,3,9,13,11,9,7,6,6,41,93,98,99,80,65,53,43,35,28,23,19,15,12,10,8,7,40,57,46,38,31,25,20,16,13,11,9,7,6,5,4,3,20,44,36,29,24,19,16,13,40,52,42,34,28,23,18,52,94,99,80,65,53,43,35,28,23,19,15,12,10,8,7,39,93,76,61,50,40,33,27,22,18,14,12,9,8,6,5,8,11,9,7,6,5,4,3,19,31,26,21,17,14,11,9,60,81,66,53,43,35,28,23,19,15,12,10,8,7,5,4,4,3,2,5,4,3,2,2,12,19,16,13,10,8,9,59,95,99,80,65,53,43,35,28,23,19,15,12,10,8,7,29,61,50,40,33,27,22,17,14,12,9,8,6,5,4,3,17,54,44,36,29,24,19,16,13,45,37,30,24,20,16,18,76,92,75,61,49,40,33,26,21,17,14,11,9,8,6,7,90,98,80,65,52,43,35,28,23,19,15,12,10,8,18,91,98,99,80,65,53,43,93,98,99,80,65,53,43,35,28,23,19,15,12,10,8,7,5,4,4,21,17,14,11,9,7,6,5,7,6,5,4,3,3,3,3,2,2,1,1,3,42,93,98,80,65,53,43,35,28,23,19,65,96,99,80,65,53,43,35,28,23,19,15,12,10,8,7,5,4,4,3,2,4,27,36,29,24,19,16,13,10,29,29,24,19,16,13,10,58,95,77,63,51,41,33,27,22,18,15,12,10,8,6,5,50,94,76,62,50,41,33,27,22,18,14,12,10,8,6,5,61,95,77,63,51,41,63,95,99,80,65,53,43,35,28,37,52,42,34,28,23,18,15,12,10,8,6,5,4,3,3,2,3,12,26,21,17,14,11,9,16,52,94,99,80,65,53,43,93,76,62,50,41,33,27,22,18,14,12,9,8,6,5,26,37,30,24,20,16,13,11,9,7,6,7,5,4,4,3,18,38,31,25,20,16,13,11,13,23,19,15,12,10,8,28,79,81,66,53,43,35,29,23,19,15,12,10,8,7,7,34,91,74,60,49,40,32,26,21,17,14,11,9,38,93,98,99,80,65,53,43,35,93,98,99,80,65,53,72,58,47,38,31,77,62,51,41,33,27,22,18,15,12,10,8,6,5,4,6,10,8,7,5,4,4,5,10,8,7,5,4,4,11,85,98,99,80,65,53,43,35,28,23,19,15,12,10,8,10,18,29,23,19,15,12,10,8,7,5,4,4,3,2,2,2,9,30,25,20,16,13,11,9,14,47,38,31,25,20,16,13,83,97,79,64,52,42,34,28,23,18,15,12,10,8,6,5,65,94,76,62,50,41,33,27,22,18,14,12,10,8,6,10,15,12,10,8,6,5,4,5,27,22,18,14,12,9,8,37,58,47,38,31,25,21,17,14,11,9,7,6,5,4,3,3,3,2,2,2,1,1,3,15,18,15,12,10,8,22,86,98,99,80,65,53,43,35,28,23,19,15,12,10,8,7,13,48,39,32,26,21,17,14,11,9,7,6,5,4,3,3,7,43,45,37,30,24,20,16,13,23,24,19,16,13,14,11,44,76,62,50,41,33,27,22,55,95,99,80,65,53,43,35,28,49,94,76,62,50,41,33,27,22,18,14,12,10,8,6,5,4,3,5,4,3,3,9,23,18,15,12,10,8,6,5,20,16,13,10,8,7,6,5,4,4,4,3,2,2,2,8,10,8,7,5,4,4,3,8,24,19,16,13,10,8,24,91,98,80,65,53,43,35,28,23,19,15,12,10,8,7,5,30,44,35,29,23,19,15,12,10,8,7,5,4,4,3,2,5,18,14,12,9,13,11,9,9,21,17,14,11,9,7,47,94,98,80,65,53,43,35,28,23,19,15,12,10,8,7,12,90,98,80,65,53,43,35,28,23,19,15,54,94,99,80,65,53,43,35,28,23,19,91,98,99,80,65,53,43,35,28,23,24,19,16,13,10,8,7,6,4,4,5,4,3,3,3,2,2,2,2,1,1,3,8,9,7,6,5,4,3,8,90,98,80,65,53,43,35,28,23,19,15,12,10,8,7,5,20,31,25,20,17,13,11,9,7,6,5,4,3,3,2,2,11,41,33,27,22,18,14,12,15,41,33,27,22,18,14,19,80,91,74,60,48,39,32,26,21,17,14,11,9,7,6,22,91,98,79,64,52,42,34,28,23,18,15,12,10,8,7,5,4,3,3,2,2,2,1,8,24,20,16,13,11,9,7,37,58,47,38,31,25,20,17,13,11,9,7,6,5,5,4,3,10,8,7,6,4,4,14,26,21,17,14,11,9,7,39,93,98,80,65,53,43,35,28,23,19,15,12,10,12,10,8,24,19,16,13,10,8,7,8,6,5,4,16,13,11,9,7,6,5,4,6,5,4,3,4,3,3,2,2,1,1,1,3,3,2,2,1,3,5,4,3,3,2,2,1,1,1,1,3,2,2,1,1,2,2,1,1,2,2,1,1,1,1,4,5,4,4,3,2,2,2,4,8,7,5,4,4,3,2,2,6,5,4,3,3,2,2,1,1,1,1,1,2,4,4,3,2,2,2,3,3,2,2,1,1,1,1,1,1,4,3,2,2,2,1,1,1,1,1,1,2,10,17,17,14,11,9,7,6,5,4,3,3,2,2,1,1,1,1,1,0,2,13,25,34,34,28,23,18,15,12,10,8,6,5,4,3,3,5,4,3,2,2,2,8,6,5,4,3,3,2,2,1,2,6,5,4,3,3,3,2,2,2,1,1,1,1,18,76,97,78,64,52,42,34,28,22,18,15,12,10,8,6,5,4,3,3,2,2,1,1,1,1,1,1,0,0,0,0,0,4,20,36,29,24,19,16,13,10,8,7,6,4,4,3,2,2,2,1,1,1,1,1,5,11,9,7,6,5,4,3,3,2,3,4,3,2,3,3,2,2,1,1,1,1,1,1,8,20,22,18,15,12,10,8,6,5,4,6,5,4,3,3,2,3,3,2,2,1,1,4,3,3,4,4,3,2,3,2,2,2,3,3,2,2,2,1,1,1,1,1,0,3,2,2,5,4,3,2,2,2,1,1,1,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,2,1,1,1,3,8,8,7,6,5,4,3,2,2,2,1,1,2,2,2,1,1,1,1,1,2,2,1,1,1,1,2,2,2,2,3,2,2,2,2,2,2,1,1,1,1,1,0,1,1,1,0,0,5,14,19,15,12,10,8,7,5,4,4,3,2,2,2,7,9,7,6,5,4,3,3,3,2,2,1,1,1,1,4,3,2,2,2,1,1,1,2,5,4,3,3,2,10,47,75,61,49,40,33,26,21,17,14,11,9,8,6,5,4,3,3,2,2,1,4,6,5,4,3,3,2,2,1,6,5,4,3,9,14,12,13,10,8,7,5,8,9,7,6,5,4,3,3,2,2,1,1,1,1,1,4,3,3,2,2,1,1,1,1,2,3,3,2,2,1,1,1,1,1,0,0,0,0,2,12,16,13,11,9,7,6,5,4,3,3,2,2,1,1,1,4,4,3,2,2,2,1,1,3,2,2,2,2,1,1,3,5,4,4,3,2,2,2,1,1,3,4,3,2,3,4,3,3,2,3,2,2,1,2,1,1,1,1,1,2,3,3,2,2,1,1,1,1,1,1,0,0,2,2,2,3,3,2,4,3,3,2,2,1,3,5,4,3,3,2,2,1,1,1,4,8,7,6,4,4,3,2,2,2,1,1,1,1,3,4,3,2,2,3,4,3,3,2,2,2,2,2,1,1,30,92,75,61,49,40,33,26,21,17,14,11,9,8,6,5,8,16,13,11,9,7,6,5,4,3,3,2,2,1,1,7,54,95,77,62,51,41,33,27,22,18,14,12,10,8,6,27,55,83,67,55,44,36,29,24,47,53,43,35,29,23,19,15,22,62,50,41,33,27,22,18,14,23,18,15,12,10,8,39,92,75,61,49,40,32,26,21,17,14,11,9,8,6,5,20,91,74,60,49,40,32,26,21,17,14,11,9,7,6,5,20,41,33,27,22,18,14,12,9,17,14,11,9,7,6,13,78,87,71,58,47,38,31,25,20,16,13,11,9,7,6,9,28,37,30,24,20,16,13,11,14,11,9,7,6,5,9,47,94,98,80,65,53,43,35,28,23,19,15,12,10,8,7,11,31,25,21,17,14,11,9,39,66,54,44,36,29,23,19,15,54,44,36,29,24,19,16,13,10,8,7,6,4,4,4,62,75,61,50,40,33,27,22,18,14,12,9,8,6,5,11,90,98,80,65,53,43,35,28,23,19,15,12,10,8,7,10,43,35,28,23,19,15,12,16,48,39,32,26,21,17,14,62,95,77,63,51,41,34,27,22,18,15,12,10,8,17,14,11,19,16,13,10,8,7,6,4,4,3,3,3,2,2,2,44,94,76,62,50,41,33,27,22,18,14,12,9,8,6,34,61,49,40,33,26,21,17,14,52,42,34,28,23,18,15,12,65,77,62,51,41,33,27,22,18,15,12,10,8,6,5,57,94,77,62,50,41,33,27,22,18,14,12,10,8,6,12,60,95,77,63,51,41,34,27,22,18,15,12,10,8,6,5,14,25,20,16,13,11,9,7,13,15,12,10,8,7,5,19,53,43,35,29,23,19,15,12,10,8,7,5,4,4,3,12,22,18,15,12,10,8,6,5,4,3,3,2,2,1,5,46,72,58,47,38,31,25,21,17,14,11,9,7,6,5,6,21,22,17,14,12,9,8,6,5,4,3,3,2,2,1,6,34,41,34,27,22,18,15,12,19,21,17,14,11,9,7,10,43,35,28,23,18,15,12,10,18,15,12,10,8,7,5,8,10,8,6,5,4,3,3,15,26,21,17,14,11,9,7,39,72,59,48,39,31,26,21,36,46,37,30,25,20,16,13,11,9,7,9,8,6,5,4,3,3,2,2,1,1,1,1,1,1,2,2,1,1,1,1,2,12,10,8,7,5,4,23,58,95,99,80,65,53,43,35,28,23,19,15,12,10,8,7,17,43,35,28,23,19,15,12,10,8,7,5,4,4,3,2,2,21,24,19,16,13,10,8,9,37,30,24,20,16,13,10,56,95,99,80,65,53,43,35,28,23,19,15,12,10,8,13,83,97,79,64,52,42,34,28,23,18,15,12,10,8,6,5,4,3,3,2,2,2,1,5,32,34,27,22,18,15,12,14,34,27,22,18,15,12,10,8,6,5,4,3,3,2,2,11,32,26,21,17,14,11,9,11,16,13,11,9,7,6,29,92,98,80,65,53,43,35,28,23,19,15,12,10,8,7,9,53,43,35,28,23,19,15,12,10,8,7,5,4,4,3,2,14,32,26,21,17,14,11,9,23,39,32,26,21,17,14,75,97,78,64,52,42,34,28,22,18,15,12,10,8,6,5,47,94,76,62,50,41,33,27,22,18,14,12,9,8,6,5,4,6,5,4,3,3,2,2,28,44,36,29,23,19,15,13,61,49,40,33,26,21,17,14,11,9,8,6,5,4,3,3,2,2,1,1,1,1,1,8,17,14,12,9,8,6,28,81,97,99,80,65,53,43,35,28,23,19,15,12,10,8,7,25,40,32,26,21,17,14,11,9,7,6,5,4,3,3,2,4,21,17,14,11,9,7,6,20,46,37,30,25,20,16,36,93,98,80,65,53,43,35,28,23,19,15,12,10,8,7,20,61,68,56,45,37,30,24,20,16,13,11,9,7,6,5,4,14,12,9,8,6,5,4,11,31,25,20,16,13,11,9,43,66,54,44,35,29,23,19,15,13,10,8,7,5,4,4,3,5,4,3,2,2,2,5,16,13,11,9,7,6,9,50,94,99,80,65,53,43,35,28,23,19,15,12,10,8,7,12,43,35,29,23,19,15,12,10,8,7,5,4,4,3,2,2,34,27,22,18,15,12,10,8,28,23,19,15,12,10,13,70,96,99,80,65,53,43,35,28,23,19,15,12,10,8,7,34,59,48,39,31,26,21,17,14,11,9,7,6,5,4,3,3,2,2,1,1,1,1,1,0,0,0,0,0,0,1,23,52,42,34,28,23,18,15,12,10,8,7,5,4,3,3,2,2,2,1,1,1,1,1,12,13,11,9,7,6,21,52,94,99,80,65,53,43,35,28,23,19,15,12,10,8,7,5,4,4,3,2,2,2,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],energy:[7,10,14,18,22,26,30,35,39,43,47,51,54,55,56,56,55,54,52,51,48,46,43,40,38,35,32,30,27,25,23,22,21,21,21,20,20,19,18,17,16,15,15,14,13,13,14,16,18,21,24,27,31,35,40,44,49,53,57,61,64,64,64,62,60,58,55,52,49,47,44,41,38,35,32,30,27,24,23,22,22,22,22,21,20,19,18,16,15,14,14,13,13,12,11,11,10,10,10,11,12,14,15,17,18,19,20,20,20,19,18,17,15,14,12,10,8,7,5,4,3,2,2,1,1,3,6,9,13,18,22,27,32,37,42,46,50,55,58,61,63,63,63,61,59,57,54,51,48,45,42,39,36,33,30,27,25,24,23,22,22,22,22,21,20,19,17,16,16,15,14,14,14,14,15,16,18,21,24,28,32,37,41,45,50,54,57,59,60,60,59,57,55,53,51,48,45,42,39,36,33,31,28,26,24,23,23,22,22,22,22,20,19,18,16,15,15,14,13,12,12,12,13,13,14,16,18,20,22,25,27,29,32,34,35,35,35,34,32,30,28,26,24,22,20,17,15,13,11,9,8,8,10,13,16,20,24,28,32,37,41,46,50,54,58,61,62,62,61,60,57,54,52,49,46,42,39,36,33,30,27,24,22,20,20,20,20,20,20,20,19,18,17,16,15,14,14,13,13,14,16,18,20,24,27,31,35,40,44,48,52,56,60,62,63,62,61,59,56,53,50,47,44,42,39,36,33,30,27,25,23,21,21,20,20,20,20,19,18,16,15,14,14,13,13,12,12,11,10,10,10,10,12,13,15,17,18,19,20,21,21,21,20,19,17,16,14,12,10,8,7,5,4,3,2,2,1,3,5,8,11,16,20,25,30,35,40,45,50,54,58,62,64,65,65,64,62,60,57,54,50,47,44,40,37,34,31,28,26,23,22,21,20,20,20,19,19,18,16,15,14,14,13,13,12,13,15,16,18,21,24,27,31,36,40,45,49,53,57,59,60,60,60,58,56,54,52,49,47,44,41,38,36,33,30,28,26,24,23,23,22,22,21,20,19,17,16,15,14,13,12,12,12,12,13,14,15,18,20,23,26,29,31,33,36,37,39,40,39,38,36,33,31,28,25,22,20,17,15,13,11,10,8,8,9,11,14,17,21,25,30,34,39,44,49,53,57,61,64,65,64,63,61,59,56,54,51,47,44,41,38,34,31,29,26,25,25,25,26,27,28,29,30,30,30,29,29,28,28,27,26,25,25,25,25,26,27,29,32,36,39,44,48,52,55,58,60,61,60,60,58,56,54,51,48,45,42,38,35,32,29,27,25,24,24,24,25,25,25,25,24,23,23,22,22,22,22,21,20,19,19,19,19,20,21,22,23,25,25,26,27,28,29,29,28,26,25,23,21,19,17,15,14,13,12,11,10,9,8,9,11,15,18,22,27,32,36,40,44,48,51,55,58,62,64,64,62,60,58,55,52,50,48,46,44,42,40,38,36,33,31,30,30,31,31,32,33,33,32,30,29,27,25,24,23,22,21,21,21,21,22,23,26,29,33,38,42,46,50,54,57,60,60,60,59,57,55,53,50,48,45,42,39,36,34,31,29,27,25,24,24,24,23,23,23,22,21,20,20,19,19,18,18,18,17,17,17,17,18,19,21,23,26,28,31,33,35,37,39,41,42,41,41,39,38,35,33,30,27,25,22,20,18,16,14,12,12,13,14,17,20,24,29,33,37,41,45,49,52,56,60,61,61,61,59,57,54,52,49,47,45,42,40,37,34,32,29,27,27,27,28,28,29,29,28,27,26,24,23,22,21,20,19,19,20,22,24,27,30,34,38,42,46,50,54,58,62,66,67,66,65,63,60,56,53,50,47,44,42,39,37,35,32,30,27,26,25,25,25,25,25,25,25,24,23,22,22,21,21,21,20,19,18,18,17,17,18,18,19,20,20,21,21,21,22,22,22,21,20,19,18,16,15,14,12,11,11,10,10,9,9,8,10,12,16,21,26,31,37,42,47,52,56,61,64,68,71,71,70,67,64,61,57,54,50,47,44,40,37,35,33,31,29,28,27,28,28,29,30,31,30,30,29,27,26,24,23,22,22,21,23,24,27,30,33,37,42,47,52,57,62,66,71,74,75,74,72,69,65,61,58,54,51,47,44,41,38,35,33,30,28,27,26,26,26,27,27,27,26,25,24,23,22,21,21,21,19,19,18,18,18,18,20,21,23,25,27,30,32,35,37,40,41,41,41,40,38,36,34,32,30,27,25,22,20,18,15,13,13,14,17,21,26,31,37,42,47,51,55,59,63,66,70,71,71,70,67,64,61,57,54,52,50,48,46,45,43,42,40,37,36,36,36,36,37,37,37,36,35,33,31,30,29,27,26,25,25,25,26,28,30,32,36,39,43,47,51,56,60,64,68,69,69,68,66,65,63,61,60,58,56,54,52,50,48,46,44,43,42,42,41,41,40,39,38,37,35,34,33,32,32,31,29,28,26,25,25,24,24,24,25,25,25,25,25,25,25,25,25,24,23,22,21,21,20,20,21,21,22,23,24,26,27,28,29,32,35,38,41,46,50,53,56,59,61,64,66,67,69,71,71,69,67,64,61,58,55,53,50,48,47,45,43,41,39,38,36,36,36,36,36,36,36,35,34,32,31,30,29,28,27,26,26,28,29,32,35,39,42,46,50,54,57,61,64,67,70,70,69,68,65,63,59,57,55,53,51,50,48,47,46,45,44,43,42,42,41,41,41,40,39,38,37,36,35,35,35,34,33,32,31,30,29,29,29,30,32,33,34,36,37,38,39,40,41,41,41,40,39,37,35,33,30,27,24,22,19,17,15,13,12,13,15,18,22,27,32,37,42,47,52,56,61,65,69,73,75,75,74,72,70,67,64,62,59,57,55,52,50,48,45,42,39,37,36,36,36,36,36,35,34,32,31,29,28,27,26,25,25,26,27,29,32,36,40,44,49,53,58,62,67,71,75,77,77,76,73,70,66,63,59,56,54,51,49,47,45,43,41,40,39,39,39,39,40,40,40,39,38,37,36,36,35,35,34,33,31,30,28,27,27,26,26,27,26,26,26,25,25,25,24,24,23,22,21,20,19,19,19,19,20,20,21,23,25,26,28,29,33,36,40,43,47,51,54,56,59,62,65,67,68,70,71,70,68,66,64,61,58,55,52,49,46,43,40,38,36,34,31,30,30,30,31,31,31,31,30,29,28,26,24,23,22,21,20,20,21,22,24,27,31,36,41,46,51,56,60,64,68,71,72,71,70,67,64,61,58,54,51,48,45,43,40,38,36,33,31,31,30,30,30,31,31,30,28,27,25,24,23,23,23,22,20,19,19,18,19,19,21,23,25,27,29,32,34,36,39,41,42,42,42,41,39,37,35,33,31,28,26,23,21,19,16,14,14,15,17,20,24,30,36,42,48,54,60,66,72,79,85,89,92,94,95,96,96,95,95,94,92,91,90,89,87,85,83,81,79,76,74,71,69,66,62,58,54,50,46,42,37,33,29,28,27,27,29,31,35,39,44,49,55,61,67,73,79,85,89,92,93,94,94,93,92,91,90,88,87,85,84,82,80,78,75,73,70,67,65,62,59,56,53,49,46,43,40,37,35,32,30,29,27,26,25,25,25,26,26,27,27,27,26,26,26,26,26,25,24,22,21,20,19,18,18,18,19,19,20,22,23,25,27,31,36,41,46,52,56,61,66,70,74,78,81,85,88,91,92,93,92,91,90,89,88,87,86,86,85,85,84,82,80,78,76,74,72,70,67,65,61,58,54,50,46,42,39,35,32,30,29,30,31,33,36,40,44,49,54,60,65,70,76,81,86,89,91,92,92,92,91,90,89,87,86,85,83,82,80,78,75,73,70,67,64,62,59,56,53,50,46,43,41,38,36,34,32,31,30,29,29,29,30,31,32,33,34,35,36,37,38,39,39,39,39,37,36,34,31,29,27,24,22,19,17,15,13,11,11,12,15,19,23,29,35,41,47,53,59,66,72,78,85,90,94,96,97,97,96,95,94,93,93,92,90,89,87,86,83,81,79,76,74,72,69,66,62,59,54,50,46,42,38,34,30,27,26,25,26,28,31,34,39,44,49,54,60,66,72,78,84,88,90,92,92,92,91,90,89,87,86,84,83,81,79,77,75,73,70,67,65,62,60,57,54,51,49,46,43,40,37,35,33,31,30,29,28,27,27,27,27,27,27,27,27,27,27,28,27,27,26,25,23,22,22,21,21,21,21,22,22,24,25,26,28,30,34,38,43,47,52,57,61,65,69,73,77,80,84,88,90,92,93,93,93,92,91,91,90,89,87,86,85,84,83,81,78,76,73,70,67,64,61,57,53,48,43,38,33,29,25,22,21,21,23,25,28,33,37,43,48,54,60,66,72,78,84,87,89,90,90,89,88,87,85,84,82,81,79,77,75,73,70,65,61,58,55,52,49,46,43,40,36,32,28,25,22,20,19,18,17,16,16,15,15,15,16,16,16,16,15,15,15,15,14,13,13,11,10,9,8,7,6,6,6,6,6,7,7,7,7,8,11,14,18,22,26,31,34,37,39,42,44,47,49,52,53,53,52,50,49,47,46,45,45,45,45,45,45,44,44,43,42,42,41,41,41,40,40,39,37,35,33,30,28,25,23,21,20,20,21,21,22,24,26,28,30,33,35,37,39,41,43,45,45,44,44,43,42,41,41,41,42,42,42,42,42,42,42,41,41,41,40,40,40,40,39,39,39,39,38,39,39,39,39,39,39,39,38,38,38,38,39,39,40,41,41,42,42,42,43,42,42,41,40,38,37,36,34,33,32,31,30,29,28,28,27,27,29,32,35,38,41,44,45,47,48,49,49,50,50,51,52,51,49,48,46,45,43,43,43,43,44,45,46,47,48,49,50,50,50,51,51,52,52,52,51,50,49,47,45,44,42,40,38,37,38,38,39,41,42,44,45,47,48,51,53,56,59,62,64,65,65,65,64,64,64,64,65,65,65,64,63,62,60,57,54,51,49,47,45,43,42,40,39,37,36,35,34,33,34,35,35,36,37,38,39,41,42,44,45,46,47,47,48,49,49,48,47,46,44,42,39,37,35,33,31,29,28,26,25,24,23,23,23,25,28,31,35,38,41,44,46,48,49,51,53,54,56,57,56,56,54,53,51,50,50,50,50,50,51,51,51,51,50,49,48,47,47,46,46,45,44,43,42,41,40,39,38,38,38,39,41,42,44,46,49,50,51,52,53,53,54,54,55,55,54,53,51,50,48,47,46,46,46,47,47,48,48,48,47,47,46,45,45,45,44,44,43,42,41,40,39,38,37,37,36,36,36,35,35,34,34,34,34,35,35,36,36,36,37,37,37,36,36,35,34,33,32,31,30,29,28,27,26,25,25,24,24,23,24,26,29,32,35,38,41,43,44,46,47,49,50,52,53,53,52,50,49,46,45,44,43,43,44,44,45,46,46,47,47,47,47,47,47,47,47,46,45,44,42,41,39,37,36,35,34,33,33,34,35,37,39,41,42,44,45,47,48,50,51,53,55,56,55,54,53,51,49,48,47,46,46,45,44,43,41,39,38,36,35,35,35,35,35,35,34,33,32,32,31,30,29,29,28,28,28,28,28,29,30,31,32,33,34,34,35,36,37,37,37,37,36,35,33,31,29,27,26,24,22,20,18,17,15,13,13,14,16,19,22,25,28,30,32,34,36,37,39,41,43,44,43,42,40,39,37,35,35,35,35,35,36,36,37,37,36,36,36,36,36,37,37,38,37,36,35,33,30,28,26,24,22,21,21,23,24,26,28,31,33,35,37,40,42,44,46,49,50,50,48,46,44,42,41,41,41,42,42,43,43,43,43,42,42,42,41,41,41,41,41,40,39,38,37,37,36,35,34,33,32,30,29,28,27,26,26,26,27,27,28,29,31,32,34,36,37,37,37,37,37,36,36,35,34,34,33,32,32,31,30,30,29,30,32,35,37,40,43,45,46,47,47,48,49,50,51,52,51,51,49,48,46,44,43,43,43,43,44,44,44,43,43,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,43,44,45,47,48,51,53,54,56,57,59,60,62,64,66,68,68,68,68,67,66,65,65,65,64,64,64,63,62,60,58,55,52,51,49,48,47,46,45,44,42,41,40,39,39,39,39,39,39,40,40,40,41,42,44,44,45,46,46,46,46,46,47,46,45,44,42,40,38,36,35,33,31,30,28,27,27,26,25,25,26,27,30,32,35,37,40,42,44,45,47,49,51,53,54,55,54,53,52,51,50,50,49,50,50,50,50,51,51,51,50,50,50,50,50,49,48,47,46,45,43,42,41,39,38,37,36,37,38,40,42,44,46,47,48,49,50,51,52,53,54,55,54,52,51,49,48,47,47,46,46,47,47,47,46,46,45,44,43,43,43,42,42,41,40,39,38,37,36,35,34,33,33,32,32,31,31,30,30,30,30,31,31,32,32,33,33,34,34,34,34,34,34,34,33,33,32,31,30,29,29,29,29,29,29,30,31,32,34,37,39,42,44,46,47,48,49,49,50,51,51,51,50,49,48,47,46,46,45,45,45,44,44,43,42,41,40,39,38,38,38,38,38,38,38,37,37,37,37,37,37,37,37,37,38,39,40,41,43,45,46,47,47,47,47,47,48,48,48,47,45,43,41,40,38,38,38,38,39,40,41,42,42,43,43,43,42,42,41,40,39,38,37,36,34,33,31,30,29,28,27,27,27,27,26,26,26,25,25,25,25,24,24,24,23,23,23,23,23,23,23,23,23,24,24,24,25,25,25,25,26,26,26,25,25,25,25,25,25,24,24,24,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,22,22,22,22,22,21,21,21,20,20,18,17,16,15,13,12,11,10,9,8,7,6,6,5,5,5,6,6,6,6,6,6,6,6,6,7,9,12,16,21,26,32,38,43,47,51,54,57,60,62,64,65,66,66,65,63,61,58,56,55,53,53,53,52,52,51,49,48,47,46,45,45,45,45,46,47,47,47,47,46,45,44,42,41,38,36,34,32,30,29,28,28,28,28,30,31,32,33,33,34,34,35,36,36,37,37,36,36,35,34,32,31,31,31,31,31,31,31,32,32,33,33,33,34,35,36,37,38,39,40,41,41,41,41,41,40,40,41,42,43,45,47,49,50,51,52,53,55,56,57,58,58,58,57,56,55,53,51,48,46,43,41,40,40,40,40,41,42,42,42,43,43,43,45,46,47,48,48,47,46,45,45,44,44,43,43,43,44,44,45,45,46,46,46,46,46,46,46,47,47,48,49,50,50,51,51,52,52,52,52,52,51,51,50,49,48,47,45,44,42,41,40,40,40,40,41,41,41,41,40,40,40,40,41,41,41,41,41,41,41,41,41,42,42,44,45,46,48,49,51,52,53,54,55,55,55,54,54,53,52,51,50,49,49,48,47,47,46,46,46,46,47,48,49,49,50,51,51,52,52,52,53,53,53,53,53,53,53,52,52,52,53,53,54,54,55,55,56,56,56,57,58,59,59,60,59,58,57,56,56,55,55,54,54,54,54,53,53,53,53,53,54,55,55,56,56,56,56,56,55,55,54,52,50,49,47,45,43,41,40,39,39,39,40,40,41,42,42,42,42,41,41,41,40,40,39,38,38,37,37,37,37,38,39,40,42,43,45,47,48,50,52,53,55,56,57,57,58,59,60,61,62,62,62,62,62,61,61,60,60,60,61,61,62,63,64,64,65,66,67,68,69,70,71,72,73,74,74,74,74,72,71,69,66,64,62,61,60,60,60,60,60,60,59,59,60,60,62,63,65,66,66,66,65,63,62,61,60,59,59,59,59,59,58,58,58,59,59,60,61,61,62,63,64,65,66,67,67,68,69,70,71,71,71,71,70,69,69,68,67,66,66,65,64,63,62,61,60,59,58,57,56,55,54,53,52,51,50,49,47,46,45,44,44,43,43,43,43,43,44,44,45,46,46,47,48,48,49,49,50,51,51,51,51,51,51,50,50,50,51,51,51,51,51,51,51,50,50,50,50,51,51,51,51,51,51,50,49,48,48,48,50,52,56,59,62,64,67,70,73,76,79,83,86,89,92,93,92,91,89,88,86,84,82,80,79,77,75,73,72,70,69,68,67,67,66,66,66,66,66,65,65,65,65,65,64,63,61,59,57,55,52,51,49,48,47,48,49,52,54,57,60,62,64,66,69,71,73,74,75,75,74,72,69,66,62,59,56,54,53,53,54,56,58,61,63,66,68,70,73,76,78,80,82,82,80,78,75,72,69,67,64,61,58,56,54,53,52,51,51,52,52,52,52,52,52,53,53,54,54,54,53,52,51,49,47,47,48,50,53,56,59,62,64,67,69,72,75,78,81,85,86,86,85,82,80,77,74,72,69,67,65,62,60,58,57,56,55,54,54,54,55,55,56,56,57,58,58,59,59,59,60,60,60,60,59,59,58,57,56,55,55,56,57,59,61,63,64,65,66,67,68,70,71,72,73,73,72,70,68,66,63,60,58,56,55,55,55,57,59,61,63,64,66,67,69,72,74,76,78,79,79,78,76,73,71,69,67,65,63,61,59,56,54,53,51,50,49,48,48,48,48,48,48,48,48,48,48,48,48,48,48,47,48,50,53,57,60,63,66,69,72,74,77,80,82,84,86,87,87,85,83,81,79,76,74,72,71,70,68,67,67,66,66,65,66,66,66,66,67,68,68,68,68,68,68,68,67,66,65,63,62,60,58,57,56,55,54,54,55,57,58,60,63,65,66,67,69,70,71,72,72,72,72,70,68,67,64,62,60,58,57,56,58,60,62,65,68,70,71,72,72,73,74,75,76,76,75,73,71,67,64,62,59,57,55,54,53,53,52,53,53,54,54,55,55,55,55,55,55,55,55,55,54,53,52,50,48,45,42,40,38,37,35,34,33,32,31,30,30,30,30,30,31,31,32,32,32,31,31,31,30,29,28,26,25,23,21,20,18,16,16,16,16,16,17,17,17,18,19,20,21,22,23,24,25,26,26,26,26,26,26,26,25,25,24,24,23,23,22,21,19,18,18,18,18,18,18,19,19,19,20,21,21,22,24,25,26,26,27,27,27,28,28,29,29,29,30,30,30,31,31,31,30,30,29,28,27,27,26,26,25,25,24,24,24,24,24,25,25,25,26,26,26,27,27,27,27,28,28,28,28,28,28,28,28,28,30,32,34,37,40,43,46,49,53,56,60,64,68,72,75,77,79,80,81,82,82,83,83,84,84,83,83,82,80,78,75,73,70,67,65,62,60,56,53,49,44,40,36,33,29,27,25,25,26,28,30,33,37,41,46,51,57,62,68,73,79,83,86,87,88,89,89,88,88,87,86,86,85,85,84,83,81,78,75,71,68,66,63,60,58,54,50,46,42,38,35,32,30,28,27,26,25,25,24,25,25,26,26,27,27,28,28,28,29,28,27,26,25,24,23,23,23,22,23,23,24,25,26,27,28,28,30,32,35,38,41,44,47,50,52,55,59,62,66,70,73,76,77,78,79,79,79,80,80,80,81,81,80,80,78,77,75,73,71,69,68,65,63,60,57,53,49,45,41,37,34,31,28,27,28,29,31,34,38,42,46,51,56,61,66,71,76,82,85,86,87,87,87,86,86,85,85,84,84,83,82,80,78,75,72,69,66,63,60,58,54,51,47,43,39,36,34,32,30,29,28,27,27,28,28,30,31,33,34,35,36,36,37,38,39,39,39,38,37,35,33,31,29,26,24,22,21,19,18,17,15,14,14,16,18,21,24,29,33,38,43,48,54,59,65,71,76,80,83,85,86,87,88,88,89,89,88,88,87,87,86,84,83,80,78,75,73,70,67,64,61,57,53,48,44,39,35,31,27,25,25,25,26,28,30,34,37,41,46,50,55,60,66,71,75,77,79,80,80,81,81,81,81,81,80,80,79,78,76,74,71,68,64,62,59,56,53,50,46,43,39,36,33,30,28,27,26,25,25,24,24,24,24,25,25,26,27,27,27,27,26,26,26,25,24,23,22,21,21,21,21,21,21,22,23,24,26,27,29,31,34,38,41,45,48,51,54,57,60,63,66,69,72,75,76,77,77,77,76,76,76,76,76,75,75,75,74,73,72,70,68,66,64,61,59,57,54,50,46,42,38,34,30,26,23,21,21,23,24,27,30,34,37,42,47,52,58,63,69,74,78,79,80,81,81,80,79,79,79,79,78,78,78,76,75,73,69,66,63,61,58,56,54,50,47,42,37,32,28,24,21,19,18,16,15,15,15,15,16,18,20,22,24,26,28,30,32,34,35,35,35,34,32,30,28,27,25,23,21,19,17,16,14,12,12,13,15,18,21,25,28,31,33,35,36,38,39,41,43,43,42,39,36,33,29,26,24,23,21,20,19,18,17,16,14,14,15,16,18,20,22,24,26,27,27,27,27,26,26,26,25,23,21,18,15,11,8,6,4,3,3,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],vocal:[0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,14,28,36,31,26,22,19,16,13,11,10,8,7,6,5,4,4,3,3,2,2,2,1,2,2,2,2,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,3,18,33,28,24,20,17,14,12,10,9,7,6,5,4,4,6,5,5,6,5,4,4,4,3,3,2,2,2,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,9,19,24,21,17,15,12,11,9,8,6,5,5,4,3,3,2,2,2,1,1,1,1,2,2,2,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,9,23,27,23,20,17,14,12,10,9,7,6,5,4,4,3,3,2,2,2,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,8,14,15,13,11,9,8,7,6,5,4,3,3,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,6,14,19,16,14,12,10,8,7,6,5,4,4,3,3,5,5,4,4,5,5,4,4,4,3,3,2,2,2,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,5,13,19,16,13,11,10,8,7,6,5,4,4,3,3,2,2,2,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,12,27,36,30,26,22,18,16,13,11,9,8,7,6,5,4,3,3,2,2,2,2,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,2,6,7,6,5,4,3,3,13,42,71,88,95,80,68,57,49,41,35,29,25,21,18,15,13,11,9,8,7,6,5,4,6,8,7,6,5,4,3,3,6,9,8,7,6,5,4,3,9,12,10,9,7,6,5,6,34,63,70,60,50,43,36,31,26,22,19,16,13,11,10,8,25,43,37,31,35,30,31,26,22,19,16,13,11,10,8,7,6,5,4,4,3,3,2,2,2,2,1,1,1,1,1,2,5,6,5,4,4,3,3,3,2,2,2,2,1,1,1,4,7,6,5,4,3,3,2,8,13,11,9,8,7,6,13,44,77,90,76,65,55,46,39,33,28,24,20,17,14,12,10,9,7,6,5,4,4,3,3,5,7,6,5,5,4,3,3,3,4,3,3,2,2,2,1,4,6,5,5,4,3,3,22,52,66,56,47,40,34,29,24,21,17,15,13,11,9,8,11,27,36,36,31,26,22,19,16,13,11,10,8,7,6,5,4,4,3,3,2,2,2,1,1,1,1,1,1,0,0,0,3,5,4,3,3,2,3,3,3,2,2,2,1,1,1,1,1,1,1,1,1,1,0,4,12,14,12,10,8,7,6,18,47,63,66,56,47,40,34,29,24,21,17,15,12,11,9,8,6,5,5,4,3,3,2,4,4,4,3,3,2,2,2,3,6,5,4,3,3,2,2,3,6,5,5,4,3,3,12,44,71,76,65,55,46,39,33,28,24,20,17,14,12,10,9,21,28,24,20,17,14,12,10,9,7,6,5,4,4,3,3,2,2,2,1,1,1,1,1,1,1,1,0,0,0,0,2,6,7,6,5,4,3,4,4,3,3,2,2,2,1,3,10,14,12,10,9,7,6,5,11,14,12,10,9,7,6,13,40,64,75,64,54,46,39,33,28,23,20,17,14,12,10,9,7,6,5,4,4,3,4,6,8,7,6,5,4,3,3,4,9,10,8,7,6,5,4,4,5,6,5,4,3,3,6,40,74,89,75,64,54,46,39,33,28,23,20,17,14,12,10,18,27,23,19,16,14,12,10,8,7,6,5,4,4,3,3,2,2,2,1,1,1,1,1,2,2,1,1,1,1,1,1,4,3,3,4,7,11,14,15,13,11,11,11,12,12,13,15,17,18,18,19,19,16,18,24,28,24,20,17,14,12,16,46,78,91,96,81,69,58,49,42,35,30,25,21,18,15,13,11,9,8,7,7,10,13,17,21,18,15,13,11,9,8,7,10,19,21,18,15,13,14,15,18,20,17,14,12,10,9,10,16,29,24,20,17,15,12,10,9,8,6,5,5,4,3,12,30,26,22,26,22,19,16,13,11,10,8,7,6,5,4,4,3,3,2,2,2,1,1,1,1,1,1,1,1,1,1,4,7,6,5,4,3,3,2,2,2,1,1,1,1,1,5,15,21,18,15,15,13,14,19,23,19,16,14,12,10,8,28,57,82,70,59,50,42,36,30,26,22,18,16,13,11,9,8,7,6,6,7,8,10,12,15,16,13,11,10,8,7,6,7,15,20,17,15,12,13,14,15,13,11,9,8,7,6,17,66,86,73,62,52,44,37,32,27,23,19,16,14,12,10,8,19,28,31,34,29,24,20,17,15,12,11,9,8,6,5,5,4,3,3,2,2,2,1,2,3,2,2,2,1,1,1,3,5,4,6,9,12,15,18,15,13,14,14,14,14,14,12,13,14,15,15,13,13,11,14,21,22,19,16,13,11,10,24,59,63,54,45,38,33,28,23,20,17,14,12,10,9,7,6,7,7,8,8,8,10,13,16,19,16,14,12,10,8,7,6,6,10,13,14,12,12,12,15,20,22,19,16,14,11,10,11,27,45,38,32,27,23,19,16,14,12,10,8,7,6,5,10,16,14,14,15,16,19,16,14,12,10,8,7,6,5,4,4,3,3,2,2,2,1,1,2,2,2,2,1,1,1,2,4,4,3,3,2,2,2,3,2,2,2,1,1,1,2,7,11,9,8,7,6,5,4,12,18,16,13,11,9,8,25,69,87,74,62,53,45,38,32,27,23,19,16,14,12,10,8,7,6,5,4,4,3,3,4,7,8,7,6,5,4,4,3,5,6,5,4,3,3,2,2,4,6,5,4,4,3,6,44,77,90,76,65,55,46,39,33,28,24,20,17,14,12,10,20,34,37,31,26,22,19,16,13,11,10,8,7,6,5,4,4,3,3,2,2,2,1,2,5,4,4,3,3,2,2,2,4,8,15,25,21,18,15,13,11,9,8,8,7,7,8,8,7,7,8,8,6,7,6,8,10,9,7,6,5,4,14,50,79,91,96,81,69,58,49,42,35,30,25,21,18,15,13,11,11,23,25,22,18,15,16,16,14,11,10,8,7,6,5,4,4,4,5,5,5,5,4,5,6,5,4,4,3,3,13,29,38,32,27,23,20,17,14,12,10,9,7,6,5,4,8,26,34,29,24,21,21,18,15,13,11,9,8,7,6,5,4,3,3,2,2,2,1,1,1,2,2,2,1,1,1,1,3,6,10,17,14,12,10,8,7,6,5,4,4,3,3,2,4,5,4,5,6,7,7,9,13,11,9,8,7,6,8,33,40,55,81,83,70,59,50,43,36,30,26,22,18,16,13,11,9,13,15,17,14,12,10,10,13,11,10,8,7,6,5,4,5,6,5,6,6,5,5,6,6,5,5,4,3,3,9,21,34,39,33,28,24,20,17,14,12,10,9,7,6,5,4,16,27,27,23,19,16,14,12,10,8,7,6,5,4,4,3,3,2,2,2,1,1,1,1,2,2,1,1,1,1,1,1,4,10,15,18,15,13,11,9,8,9,10,8,7,7,7,7,6,5,6,5,5,4,4,6,8,7,6,5,4,3,22,41,70,87,74,63,53,45,38,32,27,23,19,16,14,12,10,8,7,9,13,11,9,8,10,12,10,8,7,6,5,4,4,4,5,4,3,3,2,2,2,2,2,2,1,1,1,3,21,67,86,73,62,52,44,37,32,27,23,19,16,14,12,10,10,19,16,14,12,17,19,16,14,12,10,8,7,6,5,4,4,3,3,2,2,2,1,1,1,2,2,2,1,1,1,2,5,7,10,9,7,6,5,4,4,3,3,2,2,2,1,1,2,2,2,1,1,1,1,2,4,3,3,2,2,2,13,43,66,80,67,57,48,41,35,29,25,21,18,15,13,11,9,8,7,10,8,7,6,5,4,4,3,3,2,2,2,1,1,1,2,1,1,1,1,1,1,1,1,1,1,0,0,1,18,58,78,66,56,47,40,34,29,24,21,17,15,12,11,9,8,21,23,20,23,19,16,14,12,10,8,7,6,5,4,4,3,3,2,2,2,1,1,1,1,1,1,1,1,1,0,0,4,21,43,48,41,35,29,25,21,18,15,13,11,9,8,7,6,5,4,3,3,2,2,2,4,4,4,4,3,3,2,9,53,80,89,75,64,54,46,39,33,28,23,20,17,14,12,10,9,7,6,5,4,4,3,3,2,2,2,1,1,1,1,3,21,42,49,42,35,30,25,21,18,15,13,11,9,8,11,39,75,63,54,45,38,33,28,23,20,17,14,12,10,9,9,30,54,60,51,43,37,31,26,22,19,26,27,22,19,16,14,12,10,8,7,6,5,4,4,3,3,2,2,2,1,1,2,6,5,4,8,14,12,10,8,7,6,5,4,5,6,6,6,7,6,6,7,8,8,8,10,11,9,8,7,6,5,14,33,53,73,62,52,44,38,32,27,23,19,16,14,12,10,8,7,6,5,4,7,21,36,38,32,33,28,30,31,34,36,31,33,28,23,20,17,14,12,10,9,7,6,5,4,4,4,20,51,73,87,73,62,53,45,38,32,27,23,19,16,14,15,34,58,59,50,42,36,30,25,22,18,19,16,14,11,10,8,7,6,5,4,4,3,3,2,2,2,1,1,1,1,1,1,3,3,5,11,15,18,15,13,11,9,8,6,5,5,4,5,4,5,4,4,4,5,4,4,7,6,5,4,4,3,6,16,37,45,47,40,33,28,24,20,17,15,18,20,17,15,25,28,24,20,23,19,16,14,12,10,8,7,6,5,4,4,3,8,26,44,49,42,35,30,25,21,18,15,13,11,9,8,18,44,67,72,61,52,44,37,31,27,23,19,16,14,12,10,18,35,29,25,21,22,27,32,33,28,24,20,17,14,12,10,9,7,6,5,5,4,3,3,2,2,2,1,1,1,1,1,6,15,22,24,26,30,26,22,18,16,13,11,9,11,11,9,10,14,17,18,19,16,19,21,25,25,21,18,15,13,11,18,38,56,72,78,66,56,47,40,34,29,24,20,17,15,12,16,18,21,29,35,30,31,27,23,25,26,26,27,23,24,20,21,18,15,13,11,9,8,7,6,5,4,3,3,2,2,23,68,87,88,75,63,54,45,38,33,28,23,20,17,14,12,12,35,50,42,36,30,26,22,18,16,13,11,9,8,7,6,5,4,3,3,2,2,2,2,2,1,1,1,1,1,1,1,1,4,4,3,3,2,2,2,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,5,36,74,89,95,80,68,58,49,41,35,30,25,21,18,15,13,11,9,8,7,6,5,4,3,3,2,2,2,1,1,1,1,1,4,15,29,31,26,22,19,16,14,11,10,8,7,6,8,20,33,28,32,27,23,19,16,14,12,10,8,7,6,5,4,7,12,10,8,13,15,15,13,11,9,8,8,7,6,5,7,17,19,16,14,12,10,8,9,10,9,7,6,5,8,13,16,13,11,17,32,39,33,28,24,20,17,14,12,10,9,7,6,5,6,5,4,8,15,15,13,11,9,8,7,6,5,10,32,64,83,70,59,50,43,36,31,35,29,25,21,18,15,13,18,22,24,25,21,26,30,31,26,27,23,20,22,24,20,17,15,12,10,9,7,6,5,5,8,10,9,7,6,5,7,15,26,32,39,33,28,24,20,17,14,12,10,9,7,8,9,18,32,44,51,51,43,36,31,26,22,19,16,13,11,10,8,7,6,5,4,4,3,3,2,2,2,1,1,1,1,1,1,3,5,9,17,21,22,19,16,18,18,19,19,16,18,18,19,16,18,18,19,21,22,22,22,23,24,25,26,22,18,16,17,44,74,82,69,58,49,42,35,30,25,21,18,15,13,14,17,20,17,14,16,16,17,15,12,14,17,23,25,21,18,15,13,11,22,44,60,51,43,36,31,26,22,19,16,13,11,10,23,38,41,35,29,25,21,18,18,15,13,11,9,8,7,11,31,45,38,32,27,23,19,16,14,12,10,11,27,43,43,36,38,32,27,23,19,16,14,12,10,8,7,6,5,4,4,6,9,13,20,25,26,22,19,16,13,11,10,8,7,6,5,4,4,3,4,6,5,5,4,3,3,2,2,2,1,2,13,55,81,92,78,66,56,47,40,34,29,24,21,17,15,12,16,19,19,21,17,19,16,13,11,11,10,12,17,17,14,12,10,9,11,18,19,16,14,14,14,14,12,13,14,14,12,10,8,7,6,7,7,6,5,5,4,3,4,4,4,4,4,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,3,3,2,2,2,1,2,2,2,2,2,2,2,2,1,1,2,2,3,2,2,2,1,1,1,1,2,2,2,2,1,1,1,1,1,1,2,2,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,10,37,52,44,37,32,37,42,36,30,26,22,23,20,20,21,21,22,19,16,17,18,21,25,28,24,25,25,25,22,18,19,29,51,80,88,74,63,53,45,38,32,27,23,20,17,14,12,10,8,7,6,10,12,13,14,12,10,9,7,6,5,4,7,12,13,14,12,10,8,7,6,5,4,4,3,3,2,2,3,6,11,15,19,24,26,22,19,16,19,27,23,19,16,14,18,27,32,27,29,36,57,82,92,96,82,69,58,49,42,35,52,63,53,45,38,32,27,28,29,24,21,17,15,13,11,18,45,70,81,82,69,59,50,52,56,48,40,34,29,24,25,26,22,19,20,22,23,19,16,19,19,16,16,14,12,14,18,25,33,28,24,20,17,21,25,26,22,19,16,13,11,13,14,17,25,34,28,24,20,17,15,12,10,11,11,12,14,14,14,19,20,26,32,27,29,30,25,21,25,30,34,29,30,36,48,61,68,58,49,41,35,30,33,41,34,29,31,37,47,53,45,38,41,47,39,33,28,30,38,40,33,28,31,32,27,23,19,21,27,28,24,20,17,17,20,21,18,20,17,14,12,10,29,48,53,56,64,74,62,66,67,67,57,48,51,53,54,46,39,40,43,47,51,55,47,47,47,40,45,61,77,82,92,96,98,99,99,99,99,84,71,60,51,57,49,41,35,30,25,21,18,21,23,20,17,19,22,19,16,14,12,10,8,7,6,5,12,13,11,10,10,9,10,11,10,8,7,6,6,9,14,22,29,39,51,54,46,39,41,44,37,40,43,45,38,39,33,36,37,31,32,36,39,41,46,55,71,88,88,75,63,54,62,66,66,56,48,40,44,47,50,42,43,36,31,26,22,19,16,37,66,83,90,76,65,55,58,49,51,43,44,37,41,44,44,37,39,33,34,35,29,35,41,45,38,32,35,37,39,41,47,48,50,42,46,47,48,40,34,29,25,28,23,26,31,34,29,30,33,36,30,26,22,23,19,16,17,19,24,24,20,23,33,37,43,36,31,31,33,34,34,29,31,32,27,29,33,42,47,52,57,48,41,34,29,42,47,49,42,43,36,31,35,36,39,45,49,41,47,50,42,36,39,33,43,37,31,35,41,55,47,40,34,28,24,20,17,15,12,14,16,14,12,17,27,53,75,64,54,46,39,33,28,33,37,39,42,46,48,51,43,45,45,54,60,60,51,58,61,64,67,68,57,60,61,77,90,96,98,98,99,99,99,84,93,97,98,83,70,59,50,43,36,31,26,22,19,23,29,39,65,78,66,56,48,40,34,29,24,25,27,22,19,16,14,12,10,8,7,6,5,4,11,31,63,84,71,60,51,43,36,38,39,33,33,34,35,30,33,72,88,95,97,98,83,70,74,79,91,96,98,98,99,84,71,77,84,91,77,65,55,67,75,63,73,62,52,44,37,32,27,39,67,79,67,56,48,40,34,29,24,28,33,37,40,41,35,30,35,40,44,37,32,32,35,40,44,37,37,39,44,49,75,89,95,97,98,83,70,60,51,52,44,38,32,27,31,26,22,19,16,13,11,10,13,27,57,75,76,64,55,46,39,33,28,31,34,40,58,49,42,35,30,25,21,21,18,25,40,60,79,91,94,80,67,57,48,41,45,38,39,41,34,37,32,27,67,86,94,97,82,69,59,50,42,43,45,48,54,46,48,62,70,59,50,42,36,38,39,47,52,44,46,39,33,28,24,43,67,72,61,51,44,37,39,43,44,37,42,45,45,52,58,58,49,49,53,56,57,57,57,48,54,59,62,63,66,68,81,92,96,98,99,99,84,91,96,98,98,83,71,60,51,43,36,31,26,22,19,20,17,18,42,58,64,54,46,39,33,28,24,20,24,27,23,19,16,14,12,10,8,9,7,6,5,8,32,66,75,64,54,46,39,39,33,35,36,37,32,27,23,35,73,89,95,97,98,83,86,73,76,89,95,97,98,99,99,99,84,86,86,88,74,83,92,96,81,69,58,49,42,35,30,25,21,18,19,16,14,12,12,13,14,12,12,10,9,7,8,8,7,8,7,6,5,4,3,3,3,3,2,2,2,1,1,7,20,28,24,20,17,14,12,10,9,7,6,5,4,4,6,14,19,16,14,12,10,8,7,6,7,6,5,4,4,3,3,8,17,14,12,10,9,7,6,5,4,5,5,5,5,4,9,21,31,26,22,19,16,13,17,18,18,16,13,11,9,8,7,7,9,10,8,7,6,5,7,13,19,16,14,11,10,8,11,20,23,20,17,14,12,10,10,15,20,17,14,12,10,9,7,6,8,10,11,12,10,9,7,6,5,4,4,3,3,2,2,2,1,2,2,2,1,1,2,4,4,3,3,2,2,4,31,68,76,64,54,46,39,33,28,24,20,17,14,12,10,9,7,8,10,15,13,11,9,8,7,6,5,4,3,3,2,2,2,1,2,1,1,1,1,1,1,1,1,1,1,1,1,5,12,44,75,64,54,46,39,33,28,23,20,17,14,12,10,9,18,42,44,37,31,27,22,19,25,26,22,19,16,13,11,10,8,7,6,5,4,4,3,3,2,3,2,2,2,1,1,1,3,4,10,8,7,6,5,4,4,3,3,2,2,2,1,2,3,3,2,2,2,1,1,1,2,2,1,1,1,1,12,21,62,84,71,60,51,43,36,31,26,22,19,16,13,11,10,8,10,10,13,11,10,8,7,6,5,4,4,3,3,2,2,2,2,2,1,1,1,1,1,2,4,3,3,2,2,3,8,34,61,52,44,37,31,27,23,19,16,14,12,10,8,7,17,33,42,35,30,25,21,18,15,13,11,9,8,7,6,5,4,4,4,3,3,2,2,2,1,1,1,1,1,1,0,1,6,11,13,20,17,14,12,10,9,7,6,5,5,4,3,3,2,2,2,1,1,1,1,3,7,9,7,6,5,4,13,50,79,91,96,98,83,70,59,50,42,36,30,26,22,18,16,13,11,9,10,9,7,6,5,4,5,5,4,3,3,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,31,64,69,59,50,42,36,30,26,22,18,16,13,11,9,10,29,40,34,28,31,27,22,19,16,14,12,10,8,7,6,5,4,4,3,3,2,2,2,2,4,3,3,2,2,2,1,3,5,4,3,3,2,2,2,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,3,13,64,85,91,77,65,55,47,39,33,28,24,20,17,15,12,10,9,10,9,7,6,5,5,4,3,3,2,2,2,1,1,1,1,1,1,1,1,1,0,0,2,2,2,2,1,1,4,48,79,91,77,65,55,47,39,33,28,24,20,17,15,12,10,9,9,8,7,6,5,4,3,3,2,2,2,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,5,5,4,4,3,3,3,3,3,3,3,4,4,3,3,2,2,2,2,2,2,1,1,3,4,4,3,3,2,3,35,74,89,95,80,68,58,49,41,35,30,25,21,18,15,13,11,9,8,7,6,5,4,3,3,2,2,2,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};var Yg=[{who:"bear",end:37.15,words:[["I",33.92],["want",35.2],["to",35.52],["sing",35.84],["a",36.4],["song",36.56]]},{who:"bear",end:39.05,words:[["I",37.44],["want",37.6],["to",37.76],["sing",37.92],["a",38.3],["song",38.48]]},{who:"bear",end:42.1,words:[["I",39.36],["am",39.52],["so",39.92],["scary",40.16],["of",40.96],["you",41.44]]},{who:"pet",end:45.5,words:[["I'm",43.36],["scary",43.68],["of",44.4],["for",44.78],["you",45.12]]},{who:"bear",end:47.25,words:[["You",45.76],["are",45.92],["so",46.16],["scary",46.4]]},{who:"pet",end:50.3,words:[["I",47.84],["am",48.08],["afraid",48.64],["of",49.68]]},{who:"both",end:54.9,words:[["We",51.76],["are",52.08],["cute,",52.48],["we",53.12],["are",53.36],["bear",53.76]]},{who:"both",end:59.1,words:[["We",56],["are",56.24],["cute,",56.64],["we",57.36],["are",57.64],["bear",58]]},{who:"both",end:63.3,words:[["We",60.24],["are",60.48],["cute,",60.88],["we",61.6],["are",61.9],["bear",62.16]]},{who:"both",end:67.4,words:[["We",64.5],["are",64.72],["cute,",65.04],["we",65.76],["are",65.96],["bear",66.4]]}],gi=Yg.map(n=>{let e=n.words.map(([t,i],s)=>{let r=n.words[s+1],a=i+-.05,o=r?r[1]+-.05:n.end+-.05;return{text:t,start:a,end:o}});return{who:n.who,start:e[0].start,end:n.end+-.05,text:e.map(t=>t.text).join(" "),words:e}});var as=78.36,sa=tr.beat,Th=tr.offset,Zg=sa*4,Yt=n=>(n-Th)/sa,At=n=>Th+n*sa,H=n=>Th+n*Zg,jf=n=>Ff(Yt(n));function ed(n,e){let t=e*tr.fps,i=Math.floor(t),s=t-i,r=n.length-1,a=n[me(i,0,r)],o=n[me(i+1,0,r)];return(a+(o-a)*s)/99}var _i=n=>ed(tr.kick,n);var Jg=n=>ed(tr.vocal,n);function ln(n,e){for(let t of gi)if(!(t.who!==e&&t.who!=="both")&&!(n<t.start-.1||n>t.end+.1)){for(let i of t.words){if(n<i.start-.03||n>i.end)continue;let s=Math.max(.12,i.end-i.start),r=(n-i.start+.03)/s,a=Math.min(1,r*7)*Math.min(1,(1-r)*5),o=i.text.length>4?.75+.25*Math.cos(r*Math.PI*4):1,l=.55+.45*Jg(n);return me(a*o*l*(i.text.length<=1?.75:1))}return 0}return 0}function td(n,e){for(let t of gi){if(t.who!==e&&t.who!=="both")continue;let i=Rt(t.start-.3,t.start,n),s=1-Rt(t.end,t.end+.4,n),r=Math.min(i,s);if(r>0)return r}return 0}function Mt(n,e=0){let i=Math.floor((n+e*1.7)/3.1),s=We(i*3.3+e)*(3.1-.4),r=n+e*1.7-i*3.1-s,a=l=>l>0&&l<.16?1-Math.abs(l-.08)/.08:0,o=a(r);return We(i*7.1+e)>.7&&(o=Math.max(o,a(r-.22))),me(o*1.4)}var os=(n,e=.012,t=2.1)=>1+Math.sin(n*t)*e;function dn(n,e,t,i,s=.14){let r=0,a=1,o=0;if(n<e-s)return{y:r,squash:a,air:o};if(n<e){let l=K.inOutSine(Rt(e-s,e,n));a=1-.16*Math.sin(l*Math.PI*.5)}else if(n<e+t){let l=(n-e)/t;r=i*4*l*(1-l),o=1;let c=1-2*l;a=1+.14*Math.abs(c)*(l<.15?l/.15:1)}else{let l=n-(e+t);a=1-.2*Math.exp(-l*9)*Math.cos(l*22)}return{y:r,squash:a,air:o}}function Rn(n,e=1){let t=jf(n),i=Yt(n),s=Math.pow(Math.sin(t*Math.PI),1.5);return{squash:1-.035*e*Math.exp(-t*7)+.02*e*s,bob:.03*e*s,sway:Math.sin((i%2+t)*Math.PI)*.06*e}}function nd(n,e=1,t=1){let s=Yt(n)*t*.5*lt,r=Math.sin(s),a=Math.abs(Math.sin(s));return{legLSwing:r*.55*e,legRSwing:-r*.55*e,legL:Math.max(0,Math.sin(s))*.06*e,legR:Math.max(0,-Math.sin(s))*.06*e,armLSwing:-r*.45*e,armRSwing:r*.45*e,bob:a*.07*e,squash:1+(a-.5)*.05*e,bendX:Math.sin(s)*.035*e,bagSwing:Math.sin(s-.8)*.28*e,tailWag:Math.sin(s*2)*e}}function Il(n,e=1,t=2){let i=Yt(n)*t*.5,s=i*lt;return{walk:e,stepPhase:i,bob:Math.abs(Math.sin(s))*.035*e,tiltZ:Math.sin(s)*.05*e,squash:1+Math.abs(Math.sin(s))*.04*e}}function Eh(n,e=.18,t=1){let i=Yt(n)/t,s=i-Math.floor(i),r=.62;if(s<r){let o=s/r;return{y:e*4*o*(1-o),squash:1+.12*Math.abs(1-2*o)}}let a=(s-r)/(1-r);return{y:0,squash:1-.18*Math.sin(a*Math.PI)}}var Ah=(n,e=0,t=1)=>({lookX:Qe(n*.7,e)*t,lookY:Qe(n*.5,e+5)*t*.5}),Cn=(n,e=.012,t=0)=>Qe(n*38,t)*e,Ll=(n,e,t=.15,i=4.5,s=7)=>di(n-e,i,s)*t;function Gi(n,e,t=0,i=.13,s=.2,r=1){let a=e.length,o=r*sa,l=n-At(t)+i,c=Math.floor(l/o),h=l-c*o,f=e[((c-1)%a+a)%a],u=e[(c%a+a)%a],d=K.outBack(me(h/(i+s)),1.9),g={};for(let _ in u){let m=f[_]??u[_];g[_]=typeof u[_]=="number"?oe(m,u[_],d):d>.5?u[_]:m}return g}function vi(n,e,t,i=0,s=0){let r=Vt(e,t.map(l=>[l[0],l[1],l[4]])),a=Vt(e,t.map(l=>[l[0],l[2],l[4]])),o=Vt(e,t.map(l=>[l[0],l[3],l[4]]));n.cam(r,a,o,s,i,e)}var $g=n=>gi.filter(e=>e.who===n||e.who==="both").flatMap(e=>e.words);function Kg(n,e,t,i,s=[.35,.8,.15]){let r=["#ffb3cf","#ffd27a","#9ee8cf","#f3a07e","#c9b3ff"];$g(t).forEach((a,o)=>{let l=e-a.start;if(l<0||l>1.8)return;let c=o%2?1:-1,h=K.outBack(me(l/.25));n.spriteList.push({tex:"note",x:i[0]+s[0]*l*c*.8+Math.sin(l*4+o)*.08,y:i[1]+s[1]*l,z:i[2]+s[2]*l,s:.24*h,a:1-me((l-1.3)/.5),rot:Math.sin(l*3+o)*.3,color:r[o%r.length]})})}function yi(n,e,t,i,s=12,r=.7,a=["#fff3a0","#ffffff","#ffc2da"],o=.34,l=1){let c=e-t;if(!(c<0||c>.9))for(let h=0;h<s;h++){let f=We(h+l)*lt,u=(We(h*3.3+l)-.3)*1.6,d=K.outCubic(me(c/.6))*r*(.5+We(h*7.1+l)*.7);n.spriteList.push({tex:"star",add:!0,x:i[0]+Math.cos(f)*Math.cos(u)*d,y:i[1]+Math.sin(u)*d,z:i[2]+Math.sin(f)*Math.cos(u)*d,s:o*(1-c/.9)*(.6+We(h*9+l)*.8),a:1,rot:c*3+h,color:a[h%a.length]})}}function nr(n,e,t,i,s,r=4,a=.6,o=2){if(e<t)return;let l=Math.floor((Math.min(e,i)-t)*r)+1;for(let c=0;c<l;c++){let h=t+c/r,f=e-h;if(f<0||f>2.2)continue;let u=K.outBack(me(f/.3));n.spriteList.push({tex:"heart",x:s[0]+(We(c+o)-.5)*a+Math.sin(f*3+c)*.1,y:s[1]+f*.55,z:s[2]+(We(c*5+o)-.5)*a*.5,s:.22*u*(.7+We(c*3+o)*.6),a:1-me((f-1.6)/.6),rot:Math.sin(f*2+c)*.3,color:["#ff8fb8","#ffb0cb","#ff7aa3","#ffd0dd"][c%4]})}}function Vi(n,e,t,i=3,s=26,r=5,a="#fff6d8",o=.07){for(let l=0;l<s;l++){let c=t[0]+(We(l+r)-.5)*i*2+Qe(e*.3+l,1)*.4,h=t[1]+We(l*3+r)*i+Qe(e*.25+l,2)*.3,f=t[2]+(We(l*7+r)-.5)*i+Qe(e*.3+l,3)*.4,u=.5+.5*Math.sin(e*(2+We(l)*3)+l);n.spriteList.push({tex:"glow",add:!0,x:c,y:h,z:f,s:o*(.6+u*.8),a:.35+.5*u,color:a})}}function Hi(n,e,t=0){let i=n.bearPose;return i.squash=os(e),i.bendX=Qe(e*.4,t)*.02,i.armL=.02+Qe(e*.5,t+1)*.03,i.armR=.02+Qe(e*.5,t+2)*.03,i.face={expr:"neutral",blink:Mt(e,t),...Ah(e,t,.6)},i}function Wi(n,e,t=3){let i=n.petPose;return i.squash=os(e,.02,2.8),i.bendX=Qe(e*.5,t)*.03,i.face={expr:"normal",blink:Mt(e,t),...Ah(e,t,.7)},i}var Wn=[2.5,0,-1.2],Pn=[-2.7,0,-2.75],id=.36,Dl=[{name:"stroll",start:H(4)-.4,end:H(8),update(n,e){e.world.setMood("day"),e.petPose.visible=!1;let t=e.bearPose,i=-4.2,s=1.6,r=H(5),a=H(6)+.1,o=Vt(n,[[r,i],[a,i+1.5,K.inOutSine]]),l=n>r&&n<a?1:0,c=me(Rt(r,r+.25,n))*(1-me(Rt(a-.3,a,n)));Hi(e,n,1),t.x=o,t.z=s,t.rotY=Vt(n,[[H(5)-.35,.15],[H(5)+.15,1.25,K.inOutCubic],[H(6)-.1,1.25],[H(6)+.35,.55,K.inOutCubic]]),t.face.expr="happy";let h=pn(n,H(4)-.4,H(5)-.2,.2,.3);if(t.armR=oe(t.armR,2.35+Math.sin(n*9)*.35,h),t.armRSwing=.25*h,l){let g=nd(n,c);Object.assign(t,{legLSwing:g.legLSwing,legRSwing:g.legRSwing,legL:g.legL,legR:g.legR,armLSwing:g.armLSwing,armRSwing:g.armRSwing,bagSwing:g.bagSwing,tailWag:g.tailWag}),t.y=g.bob,t.squash*=g.squash,t.bendX+=g.bendX}else{let g=Rn(n,.5);t.squash*=g.squash,t.bendX+=g.sway*.5,t.bagSwing=Ll(n,a,.25,2.2,3)}let f=pn(n,H(6)+.2,H(6)+.95,.25,.25);if(t.armL+=f*.35,t.armLSwing+=f*.5,n>H(6)+.75){t.hold="wand";let g=ke(n,H(6)+.75,H(6)+1.2,K.outBack);t.armRSwing=oe(0,1.95,g),t.armR=oe(0,-.62,g),t.face={expr:n>H(6)+1.25?"surprised":"happy",open:.25,blink:Mt(n,1),lookX:.2},t.bendZ=.03*g}if(yi(e,n,H(6)+.75,[t.x+.35,1.25,t.z+.4],12,.5),n>H(6)+1.2){e.bear.apply(t,n);let g=e.bear.wand.ring.getWorldPosition(e.tmp),_=[g.x,g.y,g.z];e.bubbleList.push(...ia(n,{t0:H(6)+1.3,t1:H(8)-.3,rate:5.5,seed:11,life:5.5,origin:()=>_,vel:[.72,.16,-.18],spread:.35,size:[.09,.2]}))}let d=t.x;vi(e,n,[[H(4)-.4,[i+.05,1.55,s+2.4],[i,1.5,s],36],[H(5)-.1,[i+1.1,2,s+6],[i+.5,1.1,s],36,K.inOutCubic],[H(5)+1,[i+1.9,1.55,s+4.6],[i+.95,1.05,s],35,K.inOutSine],[H(6),[i+2.5,1.55,s+4.5],[i+1.45,1.1,s],35,K.inOutSine],[H(6)+.6,[i+3.9,1.75,s+4.2],[i+1.55,1.45,s],34,K.inOutCubic],[H(7),[i+4.1,1.8,s+4.4],[i+1.7,1.45,s],34,K.linear],[H(8),[i+6.4,1.3,s+3.2],[i+5.6,.95,s-1.6],36,K.inOutSine]]),Vi(e,n,[-2,.3,0],4,22,3)}},{name:"pet-intro",start:H(8),end:H(12),update(n,e){e.world.setMood("day","golden",ke(n,H(8),H(12),K.linear)*.5);let t=e.bearPose;t.visible=!1;let i=Wi(e,n,3);i.rotY=0,e.bubbleList.push(...ia(n,{t0:H(8)-4,t1:H(12),rate:3.2,seed:21,life:6,origin:(g,_)=>[-1.4+We(_)*.8,.9+We(_*3)*.8,.2+We(_*5)*.8],vel:[.55,.05,.02],spread:.25,size:[.07,.15]}));let s=At(34),r=s+.5;if(n<s-.15)i.x=Wn[0],i.z=Wn[2],i.y=-.2;else{let g=dn(n,s,.52,1,.12),_=ke(n,s,r,K.inOutSine);i.x=oe(Wn[0],2,_),i.z=oe(Wn[2],.55,_),i.y=oe(-.2,0,_)+g.y,i.squash*=g.squash}let a=H(9)+.05,o=At(37)+.05,l=o+.33;i.twist=Vt(n,[[r,0],[r+.25,.45,K.outBack],[r+.55,.45],[r+.8,-.45,K.outBack],[a-.1,-.45],[a+.15,.15,K.outBack]]),n>a&&n<l+.1&&(i.face={expr:"wide",blink:0,lookX:-.3,lookY:.5});let c=dn(n,o,.62,.62,.16);n>o-.2&&(i.y+=c.y,i.squash*=c.squash,i.armR=Vt(n,[[o,0],[o+.15,1.1,K.outBack],[o+.5,1.2],[o+.8,.1]])),n>l+.1&&(i.face={expr:"happy",blink:0,blush:1},i.twist=Math.sin((n-l)*12)*.25*Math.exp(-(n-l-.4)*1.2)*(n>l+.4?1:0));let h={x:oe(.4,2.15,ke(n,H(8)+.3,l,K.linear)),y:1.02+Math.sin(n*2)*.05,z:.6};n<l?e.bubbleList.push({x:h.x,y:h.y,z:h.z,r:.19,a:1,phase:n*.2}):n<l+.15&&e.bubbleList.push({x:h.x,y:h.y,z:h.z,r:.19*(1+(n-l)*4),a:1-(n-l)/.15}),yi(e,n,l,[h.x,h.y,h.z],16,.8,void 0,.36,4);let f=H(10);if(n>f){let g=ke(n,f,H(12),K.linear),_=Il(n,1,2);i.x=oe(2,-1.2,g),i.z=oe(.55,2.1,g),i.rotY=Vt(n,[[f,0],[f+.3,-1.25,K.inOutCubic]]),i.twist=.25,Object.assign(i,{walk:_.walk,stepPhase:_.stepPhase,tiltZ:_.tiltZ}),i.y=_.bob,i.face={expr:"normal",blink:Mt(n,4),lookX:.6,lookY:.4};for(let p of[At(44),At(46)]){let S=dn(n,p,.42,.34,.1);i.y+=S.y,i.squash*=S.squash}let m=At(46)+.22;yi(e,n,m,[oe(2,-1.2,ke(m,f,H(12),K.linear))-.1,.95,oe(.55,2.1,ke(m,f,H(12),K.linear))],12,.6,void 0,.3,9),n>At(46)&&n<At(47)&&(i.armL=Vt(n,[[At(46),0],[At(46)+.15,1.1,K.outBack],[At(46)+.45,0]]))}let u=i.x;vi(e,n,[[H(8),[1.2,.5,3.6],[2.2,.55,0],32],[H(9)-.2,[1.35,.55,3.2],[2.1,.5,.3],32,K.inOutSine],[H(9)+.4,[.8,.75,3.9],[1.8,.75,.4],34,K.inOutCubic],[H(10),[.9,.8,4],[1.85,.7,.5],34,K.linear],[H(10)+.6,[1.4,.6,5],[1.3,.45,1.2],34,K.inOutCubic],[H(12),[-.9,.6,5.4],[-1.2,.45,2],34,K.linear]]);let d=n<s?Math.max(0,Math.sin((n-H(8))*18))*me(Rt(H(8)+.2,s,n)):0;e.world.heroBush.scale.setScalar(1+d*.05+(n>s?Ll(n,s,.08,4,5):0)),Vi(e,n,[1.5,.2,.5],3,22,7)}},{name:"stage",start:H(16)-.5,end:39.25,update(n,e){e.world.setMood("golden"),e.world.heroBush.scale.setScalar(1),e.world.micStand.visible=!0,e.world.spotCone.visible=!0,e.world.spotCone.material.uniforms.uA.value=.8+_i(n)*.4;let t=Hi(e,n,1);t.y=id,t.groundY=id,t.z=-.05;let i=Rn(n,.8);t.squash*=i.squash,t.bendX=i.sway*.7,t.twist=Qe(n*.6,2)*.12;let s=ln(n,"bear"),r=td(n,"bear");t.face={expr:"sing",open:s,blink:Math.max(Mt(n,1),/song/.test(Qg(n,"bear"))?.95:0),lookX:.1},t.armRSwing=1*r+.1,t.armR=-.2*r,t.armL=.25+.55*r*(.5+.5*Math.sin(Yt(n)*Math.PI*.5)),t.armLSwing=.3*r,t.bagSwing=Math.sin(Yt(n)*Math.PI)*.12,Kg(e,n,"bear",[.15,2.25,.6]);let a=Wi(e,n,5),o=Math.max(pn(n,35.1,35.95,.2,.18),pn(n,36.55,37.3,.18,.2)),l=37.45,c=38.95;if(n<l)a.x=oe(Wn[0]+.15,1.7,o),a.z=Wn[2],a.bendX=-.12*o,a.face={expr:"normal",blink:Mt(n,5),lookX:-.8,lookY:.3};else{let h=ke(n,l,c,K.inOutSine);a.x=oe(1.7,.45,h),a.z=oe(Wn[2],-1.25,h),a.rotY=Vt(n,[[l,-.6],[c,-.3]]);let f=Il(n,.8,1);Object.assign(a,{walk:f.walk*(1-me(Rt(c-.2,c,n))),stepPhase:f.stepPhase}),a.y=f.bob*1.6,a.squash=1.06,a.face={expr:"normal",blink:Mt(n,6),lookX:-.5,lookY:.6}}n<37.3?vi(e,n,[[H(16)-.5,[.2,1.9,7.4],[.35,1.55,0],32],[37.3,[.2,1.95,5.6],[.35,1.62,0],32,K.inOutSine]]):vi(e,n,[[37.3,[-3.6,1.55,5.4],[.55,1.1,-.3],34],[39.25,[-3.1,1.7,4.8],[.45,1.15,-.4],33,K.inOutSine]]),Vi(e,n,[0,1.5,0],2.2,30,9,"#fff2c4",.06)}},{name:"peekaboo",start:42.25,end:45.62,update(n,e){e.world.setMood("golden","day",.4),e.world.groundWand.visible=!0;let t=Hi(e,n,2);t.x=Pn[0],t.z=Pn[2],t.rotY=.35;let i=Math.max(pn(n,42.7,43.2,.12,.12),pn(n,44.3,44.72,.1,.08),pn(n,45.05,45.62,.15,.1)*.85);t.squash=oe(.84,1.26,i)+Cn(n,.01,1),t.face={expr:"scared",blink:0,lookX:.9,lookY:-.2,sweat:1,gloom:.7,tremble:1},n>44.3&&n<44.8&&(t.face.expr="surprised"),t.armL=.3,t.armR=.3,t.armLSwing=.9,t.armRSwing=.9;let s=Wi(e,n,7);s.x=Wn[0]-.05,s.z=Wn[2]+.1,s.rotY=-.5;let r=Math.max(pn(n,43.25,43.85,.12,.15),pn(n,44.3,44.72,.1,.08),pn(n,45,45.62,.15,.1)*.8);s.y=oe(-.25,.52,r),s.squash=1+Cn(n,.02,3),s.face={expr:"wide",blink:0,lookX:-.9,sweat:1,tremble:1,open:ln(n,"pet")},ln(n,"pet")>.05&&(s.face.expr="sing");for(let[f,u]of[[0,[-2.7,2.3,-2.2]],[1,[2.4,1.2,-.8]]]){let d=(n*1.3+f*.5)%1;e.spriteList.push({tex:"glow",x:u[0]+(f?-.2:.25),y:u[1]+d*.3,z:u[2],s:.12,a:(1-d)*.8,color:"#a8dcff"})}let a=Vt(n,[[42.25,0],[42.62,-1,K.outCubic],[43.15,-1],[43.25,1,K.outCubic],[43.9,1],[44.25,0,K.outCubic]]),o=Vt(n,[[42.25,0],[42.62,1,K.outCubic],[43.15,1],[43.9,1],[44.25,0,K.outCubic]]),l=a<0?oe(0,-2.6,-a):oe(0,2.3,a),c=a<0?oe(.9,1.75,-a):oe(.9,.55,a),h=a<0?oe(1,2.05,-a):oe(1,.75,a);e.cam([l*.45-.2,1.65-o*.1,5.4-o*1.2],[l*.95-.2,h,-1.5],42-o*12,0,n>44.3&&n<44.8?.05:0,n)}},{name:"boop",start:47.62,end:H(24),update(n,e){e.world.setMood("golden","day",.3);let t=48.6;e.world.groundWand.visible=n<t;let i=Wi(e,n,8),s=ke(n,47.7,48.55,K.inOutSine);i.x=oe(Wn[0]-.4,1.35,s),i.z=oe(Wn[2]+.3,.75,s),i.rotY=Vt(n,[[47.62,-.6],[48.55,-.9],[49,-1.1]]);let r=Il(n,.7*(1-me(Rt(48.4,48.55,n))),1.5);Object.assign(i,{walk:r.walk,stepPhase:r.stepPhase}),i.squash=1+Cn(n,.02,4)*(n<48.6?1:.3),i.face={expr:"sing",open:ln(n,"pet"),blink:Mt(n,8),lookX:-.6,tremble:n<48.6?1:0},n>t&&(i.hold="wand",i.armR=Vt(n,[[t,0],[t+.2,.9,K.outBack],[48.95,.7],[49.15,1.2],[49.35,.6],[49.55,1]]));let a=Hi(e,n,2);a.x=Pn[0],a.z=Pn[2],a.rotY=.45;let o=ke(n,49.2,49.6,K.outBack);a.squash=oe(.84,1.3,o),a.face={expr:"scared",lookX:.8,lookY:-.3,sweat:.6};let l=49.95;n>l&&(a.face={expr:"surprised",lookX:0}),n>l+.3&&(a.face={expr:"cute",blush:1}),n>l&&(a.squash+=Ll(n,l,.1,5,6)),e.pet.apply(i,n);let c=n>t?e.pet.wand.ring.getWorldPosition(e.tmp).clone():null;if(c&&n<l+.15){let h=ke(n,48.95,49.3,K.outBack),f=ke(n,49.3,l,K.inOutSine),u=[Pn[0]+.1,1.725*1.3+.02,Pn[2]+.24],d=oe(c.x,u[0],f),g=oe(c.z,u[2],f),_=oe(c.y+.15,u[1],f)+Math.sin(f*Math.PI)*.6,m=.3*h;n<l?e.bubbleList.push({x:d,y:_,z:g,r:m,a:1,phase:n*.3}):e.bubbleList.push({x:d,y:_,z:g,r:m*(1+(n-l)*5),a:1-(n-l)/.15})}yi(e,n,l,[Pn[0]+.1,2.25,Pn[2]+.3],18,.9,["#fff3a0","#ffffff","#ffb3d1","#b8f5e2"],.4,12),n>l+.2&&nr(e,n,l+.2,l+.8,[Pn[0]+.1,2.65,Pn[2]+.3],5,.5),n<48.85?vi(e,n,[[47.62,[2.9,.75,3.5],[1.6,.45,.3],34],[48.85,[2.6,.8,3.2],[1.35,.45,.6],33,K.inOutSine]]):vi(e,n,[[48.85,[.9,2,5.6],[-.6,1.4,-.9],40],[49.5,[-.2,2.35,3.2],[-1.6,1.95,-1.6],36,K.inOutSine],[l-.05,[-1.1,2.4,1.2],[-2.55,2.2,-2.4],32,K.inOutSine],[H(24),[-1.3,2.45,.9],[-2.6,2.2,-2.5],30,K.outCubic]])}},{name:"ears",start:H(24),end:H(26),update(n,e){let t=ke(n,H(24),H(25)+.5,K.inOutSine);e.world.setMood("golden","party",t);let i=Hi(e,n,3),s=H(24)+.05,r=dn(n,s,.62,1.25,.14);n<s-.14&&(i.squash=1.3);let a=ke(n,s,s+.62,K.linear);i.x=oe(Pn[0],-.5,a),i.z=oe(Pn[2],1.65,a),i.y=r.y,i.squash=r.squash*os(n),i.rotY=Vt(n,[[s,.4],[s+.62,.95],[52.5,.95],[52.8,.3,K.inOutCubic]]),i.face={expr:n<s+.7?"laugh":"happy",blink:Mt(n,3)},r.air&&(i.armL=1.8,i.armR=1.8,i.legLSwing=.5,i.legRSwing=-.3);let o=pn(n,51.2,52.45,.3,.3);i.armLSwing=oe(i.armLSwing,1.35,o),i.armRSwing=oe(i.armRSwing,1.35,o),i.armL=oe(i.armL,-.25,o),i.armR=oe(i.armR,-.25,o),i.bendZ=.12*o;let l=pn(n,53,H(26),.2,.15);i.armL=oe(i.armL,2.75,l),i.armR=oe(i.armR,2.75,l),i.armLSwing=oe(i.armLSwing,.35,l),i.armRSwing=oe(i.armRSwing,.35,l);let c=dn(n,53.62,.4,.3,.1);i.y+=c.y,i.squash*=c.squash,n>52.3&&(i.face={expr:n>53?"laugh":"happy",blink:Mt(n,3),open:ln(n,"bear")});let h=Wi(e,n,9);h.x=.75,h.z=1.9,h.rotY=Vt(n,[[H(24),-1.1],[51,-.9],[52.5,-.9],[52.8,-.25,K.inOutCubic]]);let f=52.03;h.ears=n<f?0:Of(n-f,2.2,6),h.face={expr:n>f?"happy":"wide",blink:Mt(n,9),open:ln(n,"pet"),blush:n>f?1:.3},h.squash*=1+di(n-f,4,5)*.12;let u=dn(n,53.62,.4,.35,.1);h.y=u.y,h.squash*=u.squash,l>0&&(h.armL=1.2*l,h.armR=1.2*l),yi(e,n,f,[.75,.95,1.95],16,.7,void 0,.3,21),yi(e,n,53.71,[.15,1.8,1.8],20,1.2,["#fff3a0","#ffffff","#ffb3d1","#b8f5e2"],.42,22),nr(e,n,53.71,54.6,[.15,1.5,1.8],7,1.6,3),e.bursts.push({t0:53.71,x:.15,y:1.2,z:1.9,n:110,power:2.6,seed:1}),vi(e,n,[[H(24),[-1.3,2.45,.9],[-2.6,2.2,-2.5],30],[H(24)+.55,[-.4,1.7,6.6],[-.7,1.25,.6],38,K.inOutCubic],[51.6,[.15,1.35,5.6],[.15,1,1.7],36,K.inOutCubic],[53,[.35,1.3,5.3],[.2,1.1,1.7],36,K.linear],[H(26),[.2,1.55,6.3],[.2,1.25,1.7],38,K.outCubic]],n>53.71&&n<54?.04:0),Vi(e,n,[0,1,.5],3,30,13,"#ffe7f3",.07)}},{name:"dance",start:H(26),end:H(28),update(n,e){e.world.setMood("party");let t=[{x:-.72,bendX:-.1,armL:1,armR:.25,armLSwing:.4,armRSwing:-.2,legL:.08,legR:0,squash:.95,twist:.15},{x:-.48,bendX:.1,armL:.25,armR:1,armLSwing:-.2,armRSwing:.4,legL:0,legR:.08,squash:.95,twist:-.15},{x:-.72,bendX:-.1,armL:1,armR:.25,armLSwing:.4,armRSwing:-.2,legL:.08,legR:0,squash:.95,twist:.15},{x:-.6,bendX:0,armL:2.7,armR:2.7,armLSwing:.2,armRSwing:.2,legL:0,legR:0,squash:1.08,twist:0}],i=[{x:.55,bendX:.12,armL:.9,armR:-.2,tiltZ:-.1,squash:.92,twist:-.2},{x:.85,bendX:-.12,armL:-.2,armR:.9,tiltZ:.1,squash:.92,twist:.2},{x:.55,bendX:.12,armL:.9,armR:-.2,tiltZ:-.1,squash:.92,twist:-.2},{x:.7,bendX:0,armL:1.3,armR:1.3,tiltZ:0,squash:1.1,twist:0}],s=Math.round(Yt(H(26))),r=Hi(e,n,4);Object.assign(r,Gi(n,t,s)),r.z=1.75,r.rotY=.12;let a=Rn(n,1);r.y=a.bob,r.squash*=a.squash,r.face={expr:"happy",open:ln(n,"bear"),blink:Mt(n,4)};let o=Wi(e,n,10);Object.assign(o,Gi(n,i,s)),o.z=1.9,o.rotY=-.15,o.ears=1;let l=Eh(n,.12);o.y=l.y,o.squash*=l.squash,o.face={expr:"happy",open:ln(n,"pet"),blink:Mt(n,10)};let c=pn(n,56.45,57.25,.12,.2);c>0&&(r.armL=oe(r.armL,-.35,c),r.armR=oe(r.armR,-.35,c),r.armLSwing=oe(r.armLSwing,2.1,c),r.armRSwing=oe(r.armRSwing,2.1,c),r.bendX=oe(r.bendX,.12,c),r.face.expr="cute",o.tiltZ=oe(o.tiltZ||0,-.25,c),o.face.expr="cute");let h=57.9,f=dn(n,h,.55,.55,.12),u=dn(n,h+.03,.55,.7,.12);n>h-.15&&n<h+.9&&(r.y+=f.y,r.squash*=f.squash,o.y+=u.y,o.squash*=u.squash,f.air&&(r.armL=2.8,r.armR=2.8,o.armL=1.3,o.armR=1.3,r.face.expr="laugh")),e.bursts.push({t0:h+.2,x:0,y:1.6,z:1.9,n:140,power:2.8,seed:2}),yi(e,n,h+.2,[0,1.9,1.9],18,1.3,["#fff3a0","#ffffff","#ffb3d1","#b8f5e2"],.42,31),nr(e,n,H(26),H(28),[0,1.2,1.5],3,2.6,5),e.bubbleList.push(...ia(n,{t0:H(26)-3,t1:H(28),rate:4,seed:41,life:5,origin:(m,p)=>[-3+We(p)*6,.2+We(p*2)*.6,-1.5+We(p*3)],vel:[.1,.45,.12],spread:.3,size:[.07,.17]}));let d=ke(n,H(26),H(28),K.inOutSine),g=oe(-.55,.55,d),_=5.6-_i(n)*.06;e.cam([Math.sin(g)*_,1.35+d*.45,1.8+Math.cos(g)*_],[0,1.2,1.8],38,0,n>h+.15&&n<h+.45?.03:0,n),Vi(e,n,[0,1,.8],3.5,34,17,"#ffe7f3",.07)}},{name:"lift",start:H(30)-.3,end:H(32),update(n,e){e.world.setMood("party","golden",ke(n,66,H(32),K.linear)*.6);let t=Hi(e,n,5);t.z=1.65;let i=Wi(e,n,11);i.ears=1;let s=63.3,r=64.45,a=65.62,o=66.33,l=67.1,c=ke(n,r-.05,r+.45,K.outBack),h=ke(n,s,s+.7,K.inOutCubic);t.rotY=Vt(n,[[s-.3,.6],[s+.2,0,K.inOutCubic],[a,0],[o-.05,lt,K.inOutCubic]]),t.armLSwing=oe(0,1.45,h)*(1-c)+c*.15,t.armRSwing=t.armLSwing,t.armL=oe(0,-.2,h)*(1-c)+c*2.85,t.armR=t.armL,t.face={expr:"happy",open:ln(n,"bear"),blink:Mt(n,5)};let f=Rn(n,.6);t.squash*=f.squash;let u=[0,1.02,t.z+.55],d=[0,2.1,t.z+.12],g=oe(.9,u[0],h),_=oe(0,u[1],h),m=oe(t.z+.3,u[2],h);g=oe(g,d[0],c),_=oe(_,d[1],c),m=oe(m,d[2],c),i.rotY=Vt(n,[[s-.3,-.7],[s+.4,0,K.inOutCubic],[a,0],[o-.05,lt,K.inOutCubic]]),h>0&&h<1&&(i.legLift=.03);let p=dn(n,o,.7,.45,.12);if(n>o-.15&&(t.y=p.y,t.squash*=p.squash),n>o){let E=me((n-o)/(l-o)),y=Math.sin(K.outSine(E)*Math.PI);_=oe(d[1],2.02,K.inOutSine(E))+y*1.25,m=oe(d[2],t.z-.02,E),i.rotY=lt+K.inOutCubic(E)*lt,t.armL=oe(2.85,2.2,K.outCubic(E))-(E>.85?(E-.85)*8:0),t.armR=t.armL,n>l&&(_=2.02+t.y,t.armL=.9+Math.sin(n*8)*.3,t.armR=2.4+Math.sin(n*8+1)*.3)}i.x=g,i.y=_,i.z=m,i.groundY=0,i.face={expr:"happy",open:ln(n,"pet"),blink:0,blush:1},c>.5&&(i.armL=1.25+Math.sin(n*10)*.2,i.armR=1.25+Math.sin(n*10+1)*.2),n>l&&(i.squash*=1+di(n-l,4,5)*.2),yi(e,n,r+.15,[0,2.5,1.75],18,1.1,void 0,.38,41),yi(e,n,o+.1,[0,3,1.75],24,1.6,["#fff3a0","#ffffff","#ffb3d1","#b8f5e2"],.5,42),e.bursts.push({t0:o+.05,x:0,y:2.4,z:1.85,n:160,power:3.2,seed:3}),e.bursts.push({t0:r+.1,x:0,y:2.2,z:1.85,n:60,power:2,seed:4}),nr(e,n,r,H(32),[0,2,1.5],4,2.2,7);let S=ke(n,o,o+.6,K.outBack);if(S>0)for(let E=0;E<26;E++){let y=E/26*lt,b=16*Math.pow(Math.sin(y),3),M=13*Math.cos(y)-5*Math.cos(2*y)-2*Math.cos(3*y)-Math.cos(4*y),A=.085*S;e.bubbleList.push({x:b*A,y:2.3+M*A+Math.sin(n*2+E)*.03,z:.2,r:.13+.03*Math.sin(E),a:1,phase:E*.1+n*.2})}vi(e,n,[[H(30)-.3,[1.7,1.35,6.4],[.3,1.15,1.65],36],[r,[1,1.1,6.3],[.05,1.55,1.65],38,K.inOutSine],[o,[.6,1.2,6.7],[0,2.05,1.6],40,K.inOutSine],[o+.7,[.3,1.9,7.4],[0,2.4,1.5],42,K.outCubic],[H(32),[.2,2.1,7.6],[0,2.2,1.5],42,K.linear]],n>o&&n<o+.3?.035:0),Vi(e,n,[0,1.5,.5],3.5,34,19,"#ffe7f3",.07)}},{name:"sunset",start:H(32),end:H(36)+.8,update(n,e){let t=ke(n,H(32),H(32)+1.5,K.outCubic);e.world.setMood("party","dusk",t),e.world.stump.visible=!1,e.bear.def.u.uRimStrength.value=oe(.18,1.35,t),e.pet.def.u.uRimStrength.value=oe(.22,1.25,t),e.bear.def.u.uRim.value.set(16765616),e.pet.def.u.uRim.value.set(16763304);let i=Hi(e,n,6),s=Wi(e,n,12),r=-8.5,a=Rn(n,.5);i.x=-.42,i.z=r,i.rotY=Math.PI,i.y=-.22,i.legLSwing=1.35,i.legRSwing=1.35,i.bendZ=-.03,i.bendX=a.sway*.8,i.hold="wand",i.armRSwing=1.35+Math.sin(n*1.3)*.05,i.armR=-.35,i.armL=.25,i.face={expr:"happy",blink:Mt(n,6)},s.x=.58,s.z=r+.1,s.rotY=Math.PI,s.y=-.06+Eh(n,.05,2).y,s.ears=1,s.bendX=-a.sway*.8,s.armL=.3+Math.max(0,Math.sin((n-H(32))*5.4))*.9*pn(n,H(32)+1.2,H(34)-.2,.3,.3);let o=ke(n,H(34),H(34)+.8,K.inOutSine);s.x-=o*.2,s.tiltZ=o*.24,i.tiltZ=-o*.05;let l=ke(n,H(35),H(35)+.8,K.inOutCubic);i.twist=l*.6,s.twist=-l*.65,l>.5&&(i.face={expr:"laugh",blink:0,blush:1},s.face={expr:"happy",blush:1}),nr(e,n,H(34)+.4,H(34)+.55,[.08,1.75,r],10,.25,9),nr(e,n,H(35)+.7,H(35)+1.1,[.08,1.9,r],10,.45,10),e.bear.apply(i,n);let c=e.bear.wand.ring.getWorldPosition(e.tmp).clone();e.bubbleList.push(...ia(n,{t0:H(32)-1,t1:H(36)+1,rate:5,seed:61,life:7,origin:()=>[c.x,c.y,c.z],vel:[.05,.45,-.7],spread:.55,size:[.09,.22]})),Vi(e,n,[0,.6,r+1],3.2,36,23,"#ffe9b0",.06),Vi(e,n,[0,3.5,r-6],9,30,29,"#fff3dd",.12),vi(e,n,[[H(32),[.9,.6,r+5.6],[.05,2.3,r-10],36],[H(35),[.3,.75,r+4.4],[.05,2.2,r-10],34,K.inOutSine],[H(36)+.8,[.1,1.05,r+4.9],[.05,2.5,r-10],35,K.inOutSine]]),e.world.skyU.uGlowDir.value.set(.02,.1,-1)}}];function pn(n,e,t,i,s){let r=i>0?K.smooth(me((n-e)/i)):n>=e?1:0,a=s>0?K.smooth(me((t-n)/s)):n<t?1:0;return Math.min(r,a)}function Qg(n,e){for(let t of gi)if(!(t.who!==e&&t.who!=="both")){for(let i of t.words)if(n>=i.start&&n<i.end)return i.text}return""}var Xe=1920,Oe=1080,Rh=null;function Ch(){if(Rh)return Rh;let n=document.createElement("canvas");n.width=Xe,n.height=Oe;let e=n.getContext("2d");e.fillStyle="#fbf6ee",e.fillRect(0,0,Xe,Oe);let t=e.getImageData(0,0,Xe,Oe),i=t.data;for(let r=0;r<i.length;r+=4){let a=(We(r*.618)-.5)*10;i[r]+=a,i[r+1]+=a,i[r+2]+=a*.9}e.putImageData(t,0,0),e.fillStyle="rgba(160,140,130,0.16)";for(let r=30;r<Oe;r+=44)for(let a=30;a<Xe;a+=44)e.beginPath(),e.arc(a,r,1.6,0,lt),e.fill();let s=e.createRadialGradient(Xe/2,Oe/2,Oe*.35,Xe/2,Oe/2,Oe*1);return s.addColorStop(0,"rgba(0,0,0,0)"),s.addColorStop(1,"rgba(120,90,70,0.16)"),e.fillStyle=s,e.fillRect(0,0,Xe,Oe),Rh=n,n}var sd=new Map;function ad(n,e=.25,t="60,30,40"){let i=e+"|"+t,s=sd.get(i);if(!s){s=document.createElement("canvas"),s.width=Xe/2,s.height=Oe/2;let r=s.getContext("2d"),a=r.createRadialGradient(Xe/4,Oe/4,Oe*.225,Xe/4,Oe/4,Oe*.525);a.addColorStop(0,`rgba(${t},0)`),a.addColorStop(1,`rgba(${t},${e})`),r.fillStyle=a,r.fillRect(0,0,Xe/2,Oe/2),sd.set(i,s)}n.drawImage(s,0,0,Xe,Oe)}function Nl(n,e,t,i,s,r,a,o=34,l=9,c=0,h=0){n.fillStyle=a,n.fillRect(e,t,i,s),n.fillStyle=r;let f=c*20%o;for(let u=t-o;u<t+s+o;u+=o){let d=Math.round((u-t)/o);for(let g=e-o;g<e+i+o;g+=o){let _=g+(d%2?o/2:0)+f,m=.4+.6*((u-t)/s),p=l*m*(1+h*.35);n.beginPath(),n.arc(_,u+f,p,0,lt),n.fill()}}}function ra(n,e,t,i,s,r,a=0,o=2400){n.fillStyle=s,n.fillRect(0,0,Xe,Oe),n.fillStyle=r;for(let l=0;l<i;l++){let c=a+l/i*lt,h=c+lt/i*.5;n.beginPath(),n.moveTo(e,t),n.lineTo(e+Math.cos(c)*o,t+Math.sin(c)*o),n.lineTo(e+Math.cos(h)*o,t+Math.sin(h)*o),n.closePath(),n.fill()}}function Ul(n,e,t,i,s="rgba(40,20,30,0.85)",r=90,a=330){n.fillStyle=s;let o=Math.floor(i*24);for(let l=0;l<r;l++){let c=l/r*lt+We(l+o*.13)*.05,h=a+We(l*3.1+o)*220,f=.004+We(l*7.7+o)*.012;n.beginPath(),n.moveTo(e+Math.cos(c)*h,t+Math.sin(c)*h),n.lineTo(e+Math.cos(c-f)*2400,t+Math.sin(c-f)*2400),n.lineTo(e+Math.cos(c+f)*2400,t+Math.sin(c+f)*2400),n.closePath(),n.fill()}}function jg(n,e,t,i,s,r=0,a=5,o=.45,l="#3a2520",c=5){n.save(),n.translate(e,t),n.rotate(r),n.beginPath();for(let h=0;h<a*2;h++){let f=h/(a*2)*lt-Math.PI/2,u=h%2===0?i:i*o;n.lineTo(Math.cos(f)*u,Math.sin(f)*u)}n.closePath(),n.fillStyle=s,n.fill(),l&&(n.lineWidth=c,n.lineJoin="round",n.strokeStyle=l,n.stroke()),n.restore()}function Ph(n,e,t,i,s,r=0,a="#3a2520",o=5){n.save(),n.translate(e,t),n.rotate(r),n.scale(i/60,i/60),n.beginPath(),n.moveTo(0,38),n.bezierCurveTo(-62,-4,-38,-54,0,-22),n.bezierCurveTo(38,-54,62,-4,0,38),n.fillStyle=s,n.fill(),a&&(n.lineWidth=o*60/i,n.lineJoin="round",n.strokeStyle=a,n.stroke()),n.beginPath(),n.ellipse(-20,-14,9,6,-.6,0,lt),n.fillStyle="rgba(255,255,255,0.6)",n.fill(),n.restore()}function e3(n,e,t,i,s,r=0){n.save(),n.translate(e,t),n.rotate(r),n.scale(i/60,i/60),n.lineWidth=7,n.strokeStyle="#3a2520",n.fillStyle=s,n.beginPath(),n.ellipse(-18,28,16,12,-.4,0,lt),n.fill(),n.stroke(),n.beginPath(),n.ellipse(24,18,16,12,-.4,0,lt),n.fill(),n.stroke(),n.beginPath(),n.moveTo(-3,26),n.lineTo(-3,-38),n.lineTo(39,-48),n.lineTo(39,16),n.lineWidth=8,n.lineJoin="round",n.stroke(),n.restore()}function od(n,e,t,i,s="#ffffff",r=1){r<=0||i<=0||(n.save(),n.globalAlpha*=r,n.translate(e,t),n.beginPath(),n.moveTo(0,-i),n.quadraticCurveTo(0,0,i,0),n.quadraticCurveTo(0,0,0,i),n.quadraticCurveTo(0,0,-i,0),n.quadraticCurveTo(0,0,0,-i),n.fillStyle=s,n.fill(),n.restore())}function aa(n,e,t,i,s="!",r="#ff6f91",a=0){n.save(),n.translate(e,t),n.rotate(a),n.font=`700 ${Math.round(i)}px Fredoka, sans-serif`,n.textAlign="center",n.textBaseline="middle",n.lineJoin="round",n.lineWidth=i*.16,n.strokeStyle="#3a2520",n.strokeText(s,0,0),n.fillStyle=r,n.fillText(s,0,0),n.restore()}function oa(n,e,t,i=1.4){for(let s of t){let r=e-s.t;if(r<0||r>i)continue;let a=K.outBack(me(r/.25),2.2),o=1-me((r-i+.3)/.3),l=s.s*a,c=Math.sin(r*5+s.x)*6;n.save(),n.globalAlpha*=o;let h=s.rot+Math.sin(r*3+s.y)*.15;s.kind==="note"?e3(n,s.x,s.y-r*30+c,l,s.color,h):s.kind==="heart"?Ph(n,s.x,s.y-r*25+c,l,s.color,h):s.kind==="star"?jg(n,s.x,s.y+c,l*.6,s.color,h+r):s.kind==="twinkle"?od(n,s.x,s.y,l*.6*(1-r/i),s.color,1):s.kind==="paw"&&(n.translate(s.x,s.y),n.rotate(h),n.scale(l*5,-l*5),Hn(n,0,0,1,s.color)),n.restore()}}function la(n,e,t,i,s,r=12,a=180,o=["#fff6a8","#ffffff","#ffc2d8"],l=1){let c=e-t;if(!(c<0||c>1))for(let h=0;h<r;h++){let f=h/r*lt+We(h+l)*.5,u=K.outCubic(me(c/.7))*a*(.6+We(h*3+l)*.6),d=26*(1-c)*(.6+We(h*7+l)*.8);od(n,i+Math.cos(f)*u,s+Math.sin(f)*u,d,o[h%o.length],1-c*.8)}}function ir(n,e){n.beginPath(),n.moveTo(e[0][0],e[0][1]);for(let t=1;t<e.length;t++)n.lineTo(e[t][0],e[t][1]);n.closePath()}function Ih(n,e,t=12){ir(n,e),n.lineJoin="round",n.lineWidth=t+16,n.strokeStyle="#ffffff",n.stroke(),n.lineWidth=t,n.strokeStyle="#2a2321",n.stroke()}function Fl(n,e,t="#ffffff"){e<=0||(n.save(),n.globalAlpha=me(e),n.fillStyle=t,n.fillRect(0,0,Xe,Oe),n.restore())}function t3(n,e,t,i){let s=new DOMMatrix().translate(e,t).scale(i,i),r=new Path2D;r.ellipse(0,.12,.5,.42,0,0,lt);let a=[[-.56,-.38,.19,.24],[-.21,-.66,.2,.26],[.21,-.66,.2,.26],[.56,-.38,.19,.24]];for(let[o,l,c,h]of a)r.moveTo(o+c,l),r.ellipse(o,l,c,h,0,0,lt);return{path:r,matrix:s}}function ld(n,e,t=Xe/2,i=Oe/2,s="#2a2321",r="circle"){if(e>=1)return;n.save();let a=Math.max(1e-4,e)*1400,o=new Path2D;if(o.rect(0,0,Xe,Oe),r==="paw"){let{path:l,matrix:c}=t3(n,t,i,a*1.5);o.addPath(l,c)}else o.moveTo(t+a,i),o.arc(t,i,a,0,lt,!0);n.fillStyle=s,n.fill(o,"evenodd"),n.restore()}function cd(n,e,t,i,s=3){let r=(e-t)/i;if(r<=0||r>=1)return;let a=70;for(let o=0;o<a;o++){let l=We(o*1.3+s),c=We(o*2.7+s),h=We(o*5.1+s),f=We(o*9.1+s)*.35,u=me((r-f)/.4);if(u<=0)continue;let d=me((r-.62-h*.2)/.08),g=l*Xe,_=Oe*1.1-c*Oe*1.3-u*200,m=(60+h*170)*K.outBack(u)*(1+d*.3),p=1-d;if(p<=0)continue;n.save(),n.globalAlpha*=p;let S=n.createRadialGradient(g-m*.3,_-m*.3,m*.1,g,_,m);S.addColorStop(0,"rgba(255,255,255,0.95)"),S.addColorStop(.6,"rgba(255,236,246,0.9)"),S.addColorStop(.9,`hsla(${h*360|0},90%,85%,0.95)`),S.addColorStop(1,"rgba(255,255,255,1)"),n.fillStyle=S,n.beginPath(),n.arc(g,_,m,0,lt),n.fill(),n.lineWidth=3,n.strokeStyle="rgba(255,255,255,0.9)",n.stroke(),n.restore()}}var rd=new Map;function n3(n){let e=rd.get(n);if(!e){e=document.createElement("canvas"),e.width=e.height=128;let t=e.getContext("2d"),i=t.createRadialGradient(64,64,0,64,64,63);i.addColorStop(0,`rgba(${n},0.8)`),i.addColorStop(.8,`rgba(${n},1)`),i.addColorStop(1,`rgba(${n},0)`),t.fillStyle=i,t.fillRect(0,0,128,128),rd.set(n,e)}return e}function hd(n,e,t=1,i=1,s=["255,200,220","255,230,200","180,245,225"]){if(!(t<=0)){n.save(),n.globalCompositeOperation="screen";for(let r=0;r<8;r++){let a=(We(r+i)*Xe*1.2-Xe*.1+e*(10+We(r*3)*20))%(Xe*1.2)-Xe*.1,o=We(r*7+i)*Oe+Qe(e*.2+r,4)*40,l=60+We(r*11+i)*140;n.globalAlpha=Math.min(1,.22*t),n.drawImage(n3(s[r%s.length]),a-l,o-l,2*l,2*l)}n.restore()}}function ca(n,e,t,i,s,r,{color:a="#2a2321",font:o="Gaegu",weight:l=700,align:c="center",stroke:h=null,lw:f=10,wobble:u=0,t:d=0}={}){n.save(),n.font=`${l} ${s}px ${o}, "Comic Sans MS", cursive`,n.textBaseline="alphabetic";let g=[...e],_=g.map(E=>n.measureText(E).width),m=_.reduce((E,y)=>E+y,0),p=c==="center"?t-m/2:t,S=g.length;return g.forEach((E,y)=>{let b=me(r*S-y);if(b<=0)return;let M=K.outBack(b,2.5),A=i+Math.sin(d*3+y*.7)*u;n.save(),n.translate(p+_[y]/2,A-s*.35),n.scale(M,M),n.rotate((1-b)*.4+Math.sin(y*2.3)*.03),n.globalAlpha*=me(b*2),h&&(n.lineWidth=f,n.lineJoin="round",n.strokeStyle=h,n.strokeText(E,-_[y]/2,s*.35)),n.fillStyle=a,n.fillText(E,-_[y]/2,s*.35),n.restore(),p+=_[y]}),n.restore(),m}function sr(n,e,t,i,s,r,a){n.save(),gh(n,e,t,i);let o=Object.assign(vh(),r);o.time=a;let l=qf(n,s,o);return n.restore(),l}function rr(n,e,t,i,s,r){n.save(),gh(n,e,t,i);let a=Object.assign(yh(),s);a.time=r,Yf(n,a),n.restore()}function i3(n,e,t,i,s){let r=i>0?K.smooth(me((n-e)/i)):n>=e?1:0,a=s>0?K.smooth(me((t-n)/s)):n<t?1:0;return Math.min(r,a)}function s3(n,e,t){t<=0||n.translate(Qe(e*40,1)*t,Qe(e*40,2)*t)}function ls(n,e,t,i,s=["note","heart","star","twinkle"],r=["#ffb3cf","#ffd27a","#9ee8cf","#f3a07e"]){let a=[];for(let o=n;o<e;o++){let l=c=>We(o*13.7+t*3.1+c);a.push({t:At(o),x:i[0]+l(1)*(i[2]-i[0]),y:i[1]+l(2)*(i[3]-i[1]),kind:s[o%s.length],color:r[o*3%r.length],s:44+l(3)*34,rot:(l(4)-.5)*.8})}return a}var r3=[...ls(12,16,1,[150,380,560,760]),...ls(12,16,2,[1380,380,1780,760])],a3={name:"sketch",start:0,end:H(4),opaque:()=>!0,draw(n,e){n.drawImage(Ch(),0,0);let t=740,i=1015,s=272,r=1190,a=345,o=ke(e,H(4)-.75,H(4),K.inCubic),l=[t,i-1.45*s];n.translate(l[0],l[1]),n.scale(1+o*1.9,1+o*1.9),n.translate(-l[0]+(Xe/2-l[0])*o*.55,-l[1]+(Oe/2-l[1])*o*.55),ca(n,"White Bear",960,200,150,ke(e,.2,1.6,K.linear),{t:e,wobble:2});let c=ke(e,At(3),At(3)+.3,K.outBack);c>0&&(n.save(),n.translate(1348,128),n.rotate(.25),n.scale(c*240,-c*240),Hn(n,0,0,1,"#2a2321"),n.restore()),ca(n,"& Claude Pet",960,312,96,ke(e,H(2),H(2)+.9,K.linear),{t:e,color:Ae.orange,wobble:2});let h=ke(e,H(2)+1,H(2)+1.6);h>0&&(n.save(),n.globalAlpha=h,n.font="600 30px Fredoka, sans-serif",n.textAlign="center",n.fillStyle="#8a7a74",n.fillText("~  we are cute, we are bear  ~",960,366),n.restore());let f=e>H(3),u=Rn(e,f?1:.3),d=f?2.3+Math.sin(e*9)*.4:0,g=f?dn(e,At(14),.4,.2):{y:0,squash:1};sr(n,t,i-g.y*s,s,pi,{reveal:ke(e,.9,3.2,K.inOutSine),fill:ke(e,3,3.7),boil:1,squash:os(e)*u.squash*g.squash,bendX:u.sway*.5,armR:oe(0,d,ke(e,H(3),H(3)+.3)),armL:.05,face:{expr:f?"happy":"neutral",blink:e<3.9?0:Mt(e,1),lookX:f?.3:0}},e);let _=f?dn(e,At(13),.36,.3):{y:0,squash:1},m=f?dn(e,At(15),.36,.3):{y:0,squash:1};rr(n,r,i-(_.y+m.y)*a,a,{reveal:ke(e,H(2)+.1,H(2)+1.3,K.inOutSine),fill:ke(e,H(2)+1.1,H(2)+1.7),boil:1,squash:os(e,.02,2.6)*_.squash*m.squash*u.squash,armL:f?.6+Math.sin(e*8)*.4:0,armR:f?.6+Math.sin(e*8+2)*.4:0,face:{expr:f?"happy":"normal",blink:Mt(e,4),lookX:f?-.4:0}},e),la(n,e,H(2)+1.65,r,i-.4*a,12,200,["#ffd27a","#ffffff","#ffb3cf"],3),la(n,e,3.65,t,i-1.2*s,12,260,["#ffd27a","#ffffff","#ffb3cf"],5),oa(n,e,r3),n.setTransform(1,0,0,1,0,0),Fl(n,ke(e,H(4)-.25,H(4),K.inQuad))}},o3=[{armL:2.6,armR:.3,bendX:-.09,squash:1.02,legL:0,legR:.07,dy:0,expr:"happy"},{armL:.3,armR:2.6,bendX:.09,squash:1.02,legL:.07,legR:0,dy:0,expr:"happy"},{armL:1.5,armR:1.5,bendX:0,squash:.86,legL:0,legR:0,dy:0,expr:"laugh"},{armL:2.85,armR:2.85,bendX:0,squash:1.13,legL:.1,legR:.1,dy:70,expr:"laugh"},{armL:.95,armR:.15,bendX:-.13,squash:.98,legL:.06,legR:0,dy:0,expr:"happy"},{armL:.15,armR:.95,bendX:.13,squash:.98,legL:0,legR:.06,dy:0,expr:"happy"},{armL:2.2,armR:2.2,bendX:.1,squash:1,legL:0,legR:.05,dy:20,expr:"happy"},{armL:.05,armR:.05,bendX:0,squash:.9,legL:0,legR:0,dy:0,expr:"cute"}],l3=[{armL:1.2,armR:-.3,bendX:.12,squash:.95,dx:-30,dy:0,rot:-.08,expr:"happy"},{armL:-.3,armR:1.2,bendX:-.12,squash:.95,dx:30,dy:0,rot:.08,expr:"happy"},{armL:.2,armR:.2,bendX:0,squash:.8,dx:0,dy:0,rot:0,expr:"cute"},{armL:1.3,armR:1.3,bendX:0,squash:1.15,dx:0,dy:110,rot:0,expr:"happy"},{armL:1,armR:.2,bendX:.14,squash:1,dx:-40,dy:0,rot:-.12,expr:"normal"},{armL:.2,armR:1,bendX:-.14,squash:1,dx:40,dy:0,rot:.12,expr:"normal"},{armL:1.3,armR:1.3,bendX:0,squash:1.05,dx:0,dy:50,rot:0,expr:"happy"},{armL:0,armR:0,bendX:0,squash:.88,dx:0,dy:0,rot:0,expr:"cute"}],c3={name:"split",start:H(12)-.22,end:H(16)+.1,opaque:n=>n>H(12)+.08&&n<H(16)-.45,draw(n,e){let t=K.outBack(me(Rt(H(12)-.22,H(12)+.08,e)),1.3),i=K.inBack(me(Rt(H(16)-.5,H(16)+.05,e)),1.4),s=-1150*(1-t)-1150*i,r=1150*(1-t)+1150*i,a=Math.round(Yt(H(12))),o=e>H(14),l=H(15)+.2,c=e>H(16)-.95,h=c?H(16)-.95:e,f=[[-40,-40],[1010,-40],[905,1120],[-40,1120]].map(([y,b])=>[y+s,b]);n.save(),ir(n,f),n.clip();let u=_i(e);o?ra(n,470+s,640,18,"#ffe0ec","#ffd0e2",e*.25):(n.fillStyle="#ffe3ee",n.fillRect(0,0,Xe,Oe)),Nl(n,-40+s,-40,1060,1160,"rgba(255,160,196,0.55)","rgba(0,0,0,0)",38,8,e,u);let d=Gi(h,o3,a);e>l&&(d={armL:.1,armR:1.35,bendX:-.03,squash:1,legL:0,legR:0,dy:0,expr:"neutral"});let g=e>l?Math.exp(-((e-At(Math.floor(Yt(e))))*9)):0,_=Rn(h,.8);if(sr(n,470+s,1010-d.dy,360,pi,{armL:d.armL,armR:d.armR+(e>l?g*.12:0),bendX:d.bendX+_.sway*.3,squash:d.squash*_.squash,legL:d.legL,legR:d.legR,hold:e>l?"mic":null,micAng:.55,bagSwing:Math.sin(Yt(h)*Math.PI)*.3,face:{expr:e>l?"happy":d.expr,blink:Mt(h,2),lookX:e>l?.5:0}},h),la(n,e,l-.05,720+s,1010-1.05*360,12,160,void 0,7),e>l+.3&&e<H(16)-.5)for(let y of[At(a+13),At(a+14)]){let b=e-y;b>0&&b<.45&&aa(n,800+s,330-b*60,70,"tap!","#ffd27a",-.15)}n.restore();let m=[[1040,-40],[1960,-40],[1960,1120],[935,1120]].map(([y,b])=>[y+r,b]);n.save(),ir(n,m),n.clip(),o?ra(n,1440+r,700,18,"#dcf7ec","#c8f1e2",-e*.25):(n.fillStyle="#dff7ee",n.fillRect(0,0,Xe,Oe)),Nl(n,900+r,-40,1100,1160,"rgba(120,214,180,0.5)","rgba(0,0,0,0)",38,8,-e,u);let p=Gi(h,l3,a+(o?0:2)),S=e>l+.4;S&&(p={armL:.1,armR:.1,bendX:-.1,squash:1.02,dx:-30,dy:0,rot:-.06,expr:"normal"});let E=Rn(h,.8);n.save(),n.translate(1440+r+p.dx,930-p.dy),n.rotate(p.rot),n.translate(-(1440+r+p.dx),-(930-p.dy)),rr(n,1440+r+p.dx,930-p.dy,560,{armL:p.armL,armR:p.armR,bendX:p.bendX,squash:p.squash*E.squash,face:{expr:p.expr,blink:Mt(h,5),lookX:S?-1:0,lookY:S?.3:0}},h),n.restore(),S&&e<H(16)-.5&&aa(n,1250+r,470+Math.sin(e*6)*8,110*K.outBack(me((e-l-.4)/.3)),"?","#9ee8cf",-.2),n.restore(),Ih(n,f,12),Ih(n,m,12),c||oa(n,e,h3)}},h3=[...ls(50,62,3,[80,140,820,420]),...ls(50,62,4,[1100,120,1840,380],["star","heart","twinkle","note"])],u3={name:"shock",start:39.25,end:42.25,opaque:()=>!0,draw(n,e){let i=(e<39.7?22*(1-(e-39.25)/.45):0)+Math.max(0,12*(1-Math.abs(e-40.12)/.25));n.save(),s3(n,e,i),ra(n,960,560,24,"#fff6cf","#ffe79a",e*.4,2600),Ul(n,960,560,e,"rgba(60,35,45,0.75)",80,420);let s=(u,d,g)=>{let _=u-39.25-d;return _<0?0:_<.2?g*K.outCubic(_/.2):_<.75?g+Math.sin((_-.2)*20)*4:_<1.65?g*(1-K.inQuad((_-.75)/.9)):-di(_-1.65,3,7)*30},r=e>39.25+1.65,a=s(e,0,150),o=s(e,.06,190),l=r?1+di(e-39.25-1.65,4,6)*.15:1.14,c=ke(e,41.3,41.55,K.outBack);sr(n,610,1e3-a,300,pi,{armL:oe(2.7,.35,r?1:0),armR:oe(oe(2.7,.4,r?1:0),1.45,c),legL:r?0:.12,legR:r?0:.08,squash:l+Cn(e,.012),bendX:r?Cn(e,.02,3):0,bagSwing:Math.sin(e*20)*.3,face:r?{expr:"scared",sweat:1,gloom:1,tremble:1,lookX:1}:{expr:"surprised",open:1,lookX:.6}},e),rr(n,1340,960-o,500,{armL:r?oe(.2,.25,c):1.3,armR:r?.2:1.3,legLift:r?0:.05,squash:(r?1+di(e-39.25-1.71,4,6)*.18:1.16)+Cn(e,.015,5),face:{expr:"wide",sweat:1,tremble:1,lookX:-1}},e);let h=K.outBack(me((e-39.25-.05)/.25),2.5);h>0&&e<41.2&&(aa(n,850,330-a*.8,150*h,"!!","#ff6f91",.15+Math.sin(e*30)*.04),aa(n,1640,470-o*.8,140*h,"!?","#ffb070",.18+Math.sin(e*30+1)*.04));for(let u=0;u<10;u++){let d=e-39.25-.05;if(d<0||d>.8)continue;let g=-Math.PI/2+(We(u)-.5)*2.4,_=u<5?610:1340,m=u<5?460-a:740-o,p=60+d*520;n.save(),n.globalAlpha=1-d/.8,n.translate(_+Math.cos(g)*p,m+Math.sin(g)*p),n.rotate(g+Math.PI/2),n.beginPath(),n.moveTo(0,-22),n.bezierCurveTo(14,-2,14,14,0,14),n.bezierCurveTo(-14,14,-14,-2,0,-22),n.fillStyle="#a8dcff",n.fill(),n.lineWidth=4,n.strokeStyle="#4f9cc6",n.stroke(),n.restore()}let f=e-39.25;f>0&&f<1.2&&(n.save(),n.translate(820+f*950,330-f*520+f*f*300),n.scale(360,-360),_h(n,0,0,f*14,1),n.restore()),n.restore(),e<39.25+.085&&(n.save(),n.globalCompositeOperation="difference",n.fillStyle="#ffffff",n.fillRect(0,0,Xe,Oe),n.restore())}},f3={name:"scary",start:45.62,end:47.72,opaque:n=>n>46.18&&n<47.42,draw(n,e){let t=K.outCubic(me((e-45.62)/.2)),i=K.outCubic(me((e-45.98)/.2)),s=K.inCubic(me((e-47.38)/.3)),r=-Oe*(1-t)-Oe*s,a=Oe*(1-i)+Oe*s,o=(g,_)=>{let m=[];for(let p=0;p<=12;p++)m.push([g+(p%2?26:-26),-40+p*(Oe+80)/12+_]);return m},l=ke(e,45.62,47.6,K.linear),c=[[-40,-40+r],...o(960,r),[-40,Oe+40+r]];n.save(),ir(n,c),n.clip(),n.fillStyle="#2d2340",n.fillRect(0,0,Xe,Oe),Ul(n,480,520+r,e,"rgba(160,140,220,0.35)",60,260),n.save(),n.translate(Cn(e,8,1),Cn(e,8,2)+r);let h=1450+l*180;sr(n,480,540+1.74*h-.02*h,h,pi,{face:{expr:"scared",sweat:1,gloom:1,tremble:1,lookX:1,open:ln(e,"bear")},shadow:0,lw:.012},e),n.restore(),n.restore();let f=[[Xe+40,-40+a],...o(960,a),[Xe+40,Oe+40+a]];n.save(),ir(n,f),n.clip(),n.fillStyle="#2d2340",n.fillRect(0,0,Xe,Oe),Ul(n,1440,540+a,e,"rgba(255,170,140,0.3)",60,260),n.save(),n.translate(Cn(e,8,3),Cn(e,8,4)+a);let u=1500+l*180;rr(n,1440,560+.39*u,u,{face:{expr:"wide",sweat:1,tremble:1,lookX:-1},shadow:0,lw:.012},e),n.restore(),n.restore();let d=g=>{n.beginPath(),n.moveTo(g[0][0],g[0][1]);for(let _ of g)n.lineTo(_[0],_[1]);n.lineJoin="round",n.lineWidth=26,n.strokeStyle="#ffffff",n.stroke(),n.lineWidth=10,n.strokeStyle="#2a2321",n.stroke()};i>.3&&s<.5&&d(o(960,0))}},d3=[["#ffd1e3","#ffbcd4"],["#d4f7e9","#b7eed9"],["#fff1b8","#ffe28f"],["#e5dcff","#d3c5ff"]],p3=[{armL:2.4,armR:.3,bendX:-.1,squash:1,legL:0,legR:.06,dy:0,dx:-20,expr:"happy"},{armL:.3,armR:2.4,bendX:.1,squash:1,legL:.06,legR:0,dy:0,dx:20,expr:"happy"},{armL:2.4,armR:.3,bendX:-.1,squash:1,legL:0,legR:.06,dy:0,dx:-20,expr:"happy"},{armL:2.6,armR:2.6,bendX:0,squash:1.1,legL:.06,legR:.06,dy:60,dx:0,expr:"laugh"}],m3=[{armL:1.1,armR:-.2,bendX:.12,squash:.96,dx:-30,dy:0,rot:-.08},{armL:-.2,armR:1.1,bendX:-.12,squash:.96,dx:30,dy:0,rot:.08},{armL:1.1,armR:-.2,bendX:.12,squash:.96,dx:-30,dy:0,rot:-.08},{armL:1.3,armR:1.3,bendX:0,squash:1.12,dx:0,dy:90,rot:0}],g3=ls(112,120,9,[120,110,1800,420],["heart","star","heart","twinkle"],["#ff8fb8","#ffd27a","#ff9fc0","#ffffff"]),_3={name:"popart",start:H(28)-.12,end:H(30),opaque:n=>n>H(28)+.2,draw(n,e){let t=K.outCubic(me((e-(H(28)-.12))/.34));n.save(),t<1&&(n.beginPath(),n.arc(Xe/2,Oe/2,t*1200,0,lt),n.clip());let i=Yt(e),s=d3[Math.floor((i-Yt(H(28)))/2+.001)%4<0?0:Math.floor((i-Yt(H(28)))/2+.001)%4];ra(n,Xe/2,620,20,s[0],s[1],e*.35),n.save(),n.globalAlpha=.35;let r=e*60%180;for(let d=-180;d<Oe+180;d+=180)for(let g=-180;g<Xe+180;g+=180)n.save(),n.translate(g+r+d/180%2*90,d+r),n.scale(260,-260),Hn(n,0,0,1,"#ffffff",.3),n.restore();n.restore(),Nl(n,0,0,Xe,Oe,"rgba(255,255,255,0.35)","rgba(0,0,0,0)",46,7,e,_i(e));let a=Math.round(Yt(H(28))),o=Gi(e,p3,a),l=Gi(e,m3,a),c=i3(e,60.75,61.5,.1,.15),h=Rn(e,1);sr(n,690+o.dx,960-o.dy,500,dh,{armL:oe(o.armL,1.2,c),armR:oe(o.armR,1.2,c),bendX:oe(o.bendX,.1,c)+h.sway*.3,squash:o.squash*h.squash,legL:o.legL,legR:o.legR,bagSwing:Math.sin(i*Math.PI)*.3,face:{expr:c>.5?"cute":o.expr,open:ln(e,"bear"),blink:Mt(e,6)}},e),n.save();let f=1270+l.dx,u=950-l.dy;n.translate(f,u),n.rotate(l.rot+c*-.12),n.translate(-f,-u),rr(n,f,u,580,{armL:l.armL,armR:l.armR,bendX:l.bendX,squash:l.squash*h.squash,ears:1,face:{expr:c>.5?"cute":"happy",open:ln(e,"pet"),blink:Mt(e,7)}},e),n.restore(),oa(n,e,g3,1.6),la(n,e,62.11,960,450,16,380,["#ffffff","#fff3a0","#ffb3d1"],11),n.restore(),t<1&&(n.beginPath(),n.arc(Xe/2,Oe/2,t*1200,0,lt),n.lineWidth=14,n.strokeStyle="#ffffff",n.stroke())}},v3={name:"endcard",start:H(36)-.05,end:99,opaque:n=>n>H(36)+.5,draw(n,e){let t=H(36)-.05,i=ke(e,t,t+.55,K.inOutSine);if(n.globalAlpha=i,n.drawImage(Ch(),0,0),n.globalAlpha=1,i<.85)return;let s=ke(e,t+.5,t+1.15,K.inOutSine),r=ke(e,t+1.05,t+1.4),a=Rn(e,.6);sr(n,800,1e3,430,dh,{reveal:s,fill:r,boil:1,squash:a.squash,armR:2.2+Math.sin(e*8)*.35*r,armL:.1,face:{expr:"happy",blink:Mt(e,8)}},e),rr(n,1150,1e3,440,{reveal:s,fill:r,boil:1,ears:r,squash:a.squash,armL:.9+Math.sin(e*8+1)*.3*r,armR:.3,face:{expr:"happy",blink:Mt(e,9)}},e);let o=K.outBack(me((e-t-1.2)/.35),2);o>0&&Ph(n,985,420+Math.sin(e*4)*8,120*o*(1+_i(e)*.08),"#ff8fb8",0),ca(n,"We are cute, we are bear",960,185,112,ke(e,t+.5,t+1.4,K.linear),{t:e,wobble:2}),ca(n,"White Bear  &  Claude Pet",960,275,64,ke(e,t+1,t+1.6,K.linear),{t:e,color:Ae.orange});let l=K.outBack(me((e-77.45)/.25),2.4);l>0&&(n.save(),n.translate(1560,820),n.rotate(-.2),n.scale(l,l),n.beginPath(),n.arc(0,0,118,0,lt),n.fillStyle="rgba(217,119,87,0.12)",n.fill(),n.lineWidth=8,n.strokeStyle=Ae.orange,n.stroke(),n.save(),n.scale(300,-300),Hn(n,0,.1,.95,Ae.orange),n.restore(),n.font="700 44px Gaegu, sans-serif",n.textAlign="center",n.fillStyle=Ae.orange,n.fillText("the end",0,70),n.restore()),oa(n,e,y3,2.2)}},y3=ls(145,150,12,[200,380,560,700]).concat(ls(145,150,13,[1380,380,1700,640])),ud=[a3,c3,u3,f3,_3,v3],x3=[[H(4),H(12)],[H(16)-.4,39.25],[42.25,45.62],[47.62,H(28)],[H(30),H(36)+.5]],b3=n=>x3.some(([e,t])=>n>=e&&n<t),fd=[{start:H(4),end:H(4)+.7,draw:(n,e)=>Fl(n,1-ke(e,H(4),H(4)+.7,K.outCubic))},{start:0,end:99,draw:(n,e)=>{if(!b3(e))return;ad(n,.2,"70,40,60");let t=ke(e,H(32),H(33),K.linear);hd(n,e,.5+t*.7,3,t>.5?["255,210,170","255,180,200","190,245,225"]:void 0)}},{start:42.25,end:42.6,draw:(n,e)=>Fl(n,.8*(1-ke(e,42.25,42.6)))},{start:H(30)-.35,end:H(30)+.45,draw:(n,e)=>{let t=H(30),i=e<t?1-K.inCubic(me((e-(t-.35))/.35)):K.outCubic(me((e-t)/.45));ld(n,i*1.1,Xe/2,Oe/2+40,"#2a2321","paw")}},{start:H(32)-.75,end:H(32)+.6,draw:(n,e)=>cd(n,e,H(32)-.75,1.3,5)}];var dd='700 78px Fredoka, "Baloo 2", system-ui, sans-serif',M3=.55,S3=.45,w3=gi.map((n,e)=>{let t=gi[e-1],i=Math.max(n.start-M3,t?t.end+.05:-1/0);return{line:n,from:i}}).map((n,e,t)=>{let i=t[e+1],s=n.line.end+S3,r=i?Math.min(s,i.from):s;return{...n,to:r,cut:r<s}}),T3={bear:["#ff8fb8","#ff6fa3"],pet:["#f0a07c","#d97757"],both:["#ff9fc0","#d97757"]},Lh=new Map;function E3(n,e){let t=e;return Lh.has(t)||(n.font=dd,Lh.set(t,n.measureText(e).width)),Lh.get(t)}function Dh(n,e,t,i,s,r){n.save(),n.translate(t,i),n.scale(s,s),n.beginPath(),n.arc(0,0,46,0,Math.PI*2),n.fillStyle=e==="pet"?"#ffe6da":"#ffffff",n.fill(),n.lineWidth=6,n.strokeStyle="#3a2520",n.stroke(),n.save(),n.beginPath(),n.arc(0,0,43,0,Math.PI*2),n.clip(),e==="pet"?(n.fillStyle=Ae.orange,ea(n,-40,-26,80,64,16),n.fill(),n.translate(0,4),n.scale(95,-95),er(n,{expr:"normal",time:r,blink:r%2.7<.12?1:0})):(n.fillStyle="#ffffff",n.fillRect(-50,-50,100,100),n.translate(0,8),n.scale(300,-300),js(n,{expr:"sing",open:.5+.5*Math.sin(r*14),time:r})),n.restore(),n.restore()}function pd(n,e,t,i,s={}){let r=w3.find(A=>e>=A.from&&e<A.to);if(!r)return;let a=r.line,o=K.outBack(me(Rt(r.from,r.from+.35,e))),l=me(Rt(r.to-(r.cut?.12:.3),r.to,e)),c=(s.alpha??1)*me(Rt(r.from,r.from+.2,e))*(1-l);if(c<=0)return;n.save(),n.font=dd,n.textBaseline="alphabetic",n.lineJoin="round";let h=24,f=a.words.map(A=>E3(n,A.text)),u=f.reduce((A,v)=>A+v,0)+h*(f.length-1),d=s.y??i-92,g=t/2+(a.who==="both"?50:38),_=g-u/2,m=T3[a.who];n.globalAlpha=c,n.translate(g,d-26);let p=.8+.2*o;n.scale(p,p),n.translate(-g,-(d-26)+l*20),n.save(),n.globalAlpha=c*.28,n.fillStyle="#3a2520",ea(n,_-150,d-86,u+190+(a.who==="both"?40:0),118,59),n.fill(),n.restore();let S=_-78,E=e-a.start,y=.85+.05*Math.sin(E*8);a.who==="both"?(Dh(n,"pet",S-22,d-26,y*.78,e),Dh(n,"bear",S+26,d-26,y*.78,e)):Dh(n,a.who,S,d-26,y,e);let b=[];a.words.forEach((A,v)=>{let w=_,R=f[v],P=me(Rt(A.start,A.start+Math.max(.12,(A.end-A.start)*.9),e)),L=e>=A.start?Math.exp(-(e-A.start)*7):0,N=s.style==="shaky"&&/scar|afraid/i.test(A.text)?1:0,D=N?Math.sin(e*60+v)*2.5:0,z=N?Math.cos(e*55+v)*2.5:0;n.save(),n.translate(w+R/2+D,d-26-L*14+z);let F=1+L*.16;if(n.scale(F,F),n.translate(-(w+R/2),-(d-26)),n.lineWidth=15,n.strokeStyle="#3a2520",n.strokeText(A.text,w,d),n.fillStyle="#fffaf5",n.fillText(A.text,w,d),P>0){n.save(),n.beginPath(),n.rect(w-6,d-90,(R+12)*P,120),n.clip();let X=n.createLinearGradient(0,d-60,0,d+8);X.addColorStop(0,"#fff0f5"),X.addColorStop(.28,m[0]),X.addColorStop(1,m[1]),n.fillStyle=X,n.fillText(A.text,w,d),n.restore()}n.restore(),b.push({x:w+R/2,start:A.start}),_+=R+h});let M=b[0];if(e>=M.start-.5){let A,v,w=d-104;if(e<M.start){let R=K.outQuad(me(Rt(M.start-.5,M.start,e)));A=oe(M.x-120,M.x,R),v=w-Math.sin(R*Math.PI)*50+(1-R)*0}else{let R=b.length-1;for(;R>0&&b[R].start>e;)R--;let P=b[R],L=b[R+1];if(L){let N=me(Rt(P.start,L.start,e));A=oe(P.x,L.x,K.inOutSine(N)),v=w-Math.sin(N*Math.PI)*Math.min(60,20+Math.abs(L.x-P.x)*.25)}else{let N=me((e-P.start)/.6);A=P.x,v=w-Math.sin(Math.min(N,1)*Math.PI)*26*(1-N)}}n.save(),n.translate(A,v),n.scale(210,-210),n.beginPath(),n.arc(0,.005,.12,0,Math.PI*2),n.fillStyle="#3a2520",n.fill(),Hn(n,0,-.005,1.3,a.who==="pet"?"#ffb28f":"#ffc2d8"),n.restore()}n.restore()}var Ol=class{constructor({gl:e,scene2d:t,overlay:i}){zf(),this.renderer=new yl({canvas:e,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(1),this.renderer.setSize(Xe,Oe,!1),this.renderer.setClearColor(16641763,1),this.scene=new Ar,this.camera=new en(35,Xe/Oe,.1,1200),this.world=new Al(this.scene),this.bear=new wl,this.pet=new Tl,this.scene.add(this.bear.root,this.bear.shadow,this.pet.root,this.pet.shadow),this.bubbles=new Rl(this.scene,110),this.icons=Qf(),this.sprites=new Cl(this.scene,this.icons,180),this.confetti=new Pl(this.scene,320),this.extra={},this.ctx=t.getContext("2d"),this.octx=i.getContext("2d"),this.tmp=new I,this.lastShot3d=null}cam(e,t,i=35,s=0,r=0,a=0){let o=this.camera,l=r?Qe(a*30,11)*r:0,c=r?Qe(a*30,12)*r:0;o.position.set(e[0]+l,e[1]+c,e[2]),o.up.set(Math.sin(s),Math.cos(s),0),o.lookAt(t[0]+l*.5,t[1]+c*.5,t[2]),o.fov!==i&&(o.fov=i,o.updateProjectionMatrix())}reset3d(){this.bubbleList=[],this.spriteList=[],this.bursts=[],this.bearPose=Mh(),this.petPose=Sh(),this.bearPose.visible=!0,this.petPose.visible=!0,this.world.micStand.visible=!1,this.world.stump.visible=!0,this.world.spotCone.visible=!1,this.world.groundWand.visible=!1;for(let e in this.extra)this.extra[e].isObject3D&&(this.extra[e].visible=!1);this.world.setMood("day"),this.world.skyU.uGlowDir.value.set(0,.25,-1),this.bear.def.u.uRim.value.set(16774380),this.pet.def.u.uRim.value.set(16767428),this.bear.def.u.uRimStrength.value=.18,this.pet.def.u.uRimStrength.value=.22}commit3d(e){let i=this.world.mood.char??1;this.bear.materials.white.color.setScalar(i),this.bear.materials.inner.color.set("#f1dcd6").multiplyScalar(i),this.pet.materials.orange.color.set("#d97757").multiplyScalar(.2+.8*i),this.bear.apply(this.bearPose,e),this.pet.apply(this.petPose,e),this.bear.updateOutline(this.camera),this.pet.updateOutline(this.camera),this.bubbles.set(this.bubbleList),this.sprites.set(this.spriteList),this.confetti.update(e,this.bursts),this.world.update(e,this.camera,_i(e))}renderAt(e){let t=this.ctx;t.setTransform(1,0,0,1,0,0),t.clearRect(0,0,Xe,Oe);let i=!1,s=!1;for(let a of ud)e>=a.start&&e<a.end&&(t.save(),a.draw(t,e,this),t.restore(),s=!0,a.opaque&&a.opaque(e)&&(i=!0));let r=s?"visible":"hidden";if(t.canvas.style.visibility!==r&&(t.canvas.style.visibility=r),!i){let a=Dl.find(o=>e>=o.start&&e<o.end);a||(a=[...Dl].reverse().find(o=>o.start<=e)||Dl[0]),this.reset3d(),a.update(e,this),this.commit3d(e),this.renderer.render(this.scene,this.camera),this.lastShot3d=a}this.drawOverlay(e)}drawOverlay(e){let t=this.octx;t.setTransform(1,0,0,1,0,0),t.clearRect(0,0,Xe,Oe);for(let i of fd)e>=i.start&&e<i.end&&(t.save(),i.draw(t,e,this),t.restore());pd(t,e,Xe,Oe,{style:e>39&&e<50.5?"shaky":"normal"})}};var md="data:font/woff2;base64,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";var gd="data:font/woff2;base64,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";var _d="data:font/woff2;base64,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";var vd="data:font/woff2;base64,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";var ha=new URLSearchParams(location.search),I3=ha.has("render");async function L3(){let n=[new FontFace("Fredoka",`url(${md})`,{weight:"600"}),new FontFace("Fredoka",`url(${gd})`,{weight:"700"}),new FontFace("Gaegu",`url(${_d})`,{weight:"400"}),new FontFace("Gaegu",`url(${vd})`,{weight:"700"})];await Promise.all(n.map(e=>e.load().then(t=>document.fonts.add(t))))}function D3(){let n=document.getElementById("stage"),e=t=>{let i=document.createElement("canvas");return i.width=1920,i.height=1080,i.className="layer "+t,n.appendChild(i),i};return{stage:n,gl:e("gl"),scene2d:e("s2d"),overlay:e("ovl")}}async function N3(){await L3();let{stage:n,gl:e,scene2d:t,overlay:i}=D3(),s=new Ol({gl:e,scene2d:t,overlay:i});if(I3){document.body.classList.add("render"),window.__renderAt=E=>(s.renderAt(E),!0),s.renderAt(0),window.__ready=!0;return}let r=document.getElementById("song"),a={play:document.getElementById("play"),big:document.getElementById("bigplay"),bar:document.getElementById("bar"),fill:document.getElementById("fill"),time:document.getElementById("time"),full:document.getElementById("full"),controls:document.getElementById("controls")},o=ha.has("t")?parseFloat(ha.get("t")):0,l=ha.has("t"),c=7.6,h=performance.now(),f=-1,u=E=>`${Math.floor(E/60)}:${String(Math.floor(E%60)).padStart(2,"0")}`,d=E=>{document.body.classList.toggle("playing",E),a.play.setAttribute("aria-label",E?"Pause":"Play")},g=()=>{r.paused?((r.ended||o>=as-.05)&&(r.currentTime=0),r.play()):r.pause()};r.addEventListener("play",()=>{l=!0,d(!0)}),r.addEventListener("pause",()=>d(!1)),r.addEventListener("ended",()=>d(!1)),a.play.addEventListener("click",g),a.big.addEventListener("click",g),n.addEventListener("click",g);let _=E=>{let y=a.bar.getBoundingClientRect(),b=Math.min(1,Math.max(0,(E.clientX-y.left)/y.width));r.currentTime=b*as,o=r.currentTime,l=!0},m=!1;a.bar.addEventListener("pointerdown",E=>{m=!0,a.bar.setPointerCapture(E.pointerId),_(E)}),a.bar.addEventListener("pointermove",E=>m&&_(E)),a.bar.addEventListener("pointerup",()=>{m=!1}),a.full.addEventListener("click",()=>{let E=document.documentElement;document.fullscreenElement?document.exitFullscreen():(E.requestFullscreen||E.webkitRequestFullscreen)?.call(E)}),window.addEventListener("keydown",E=>{E.code==="Space"&&(E.preventDefault(),g()),E.code==="ArrowRight"&&(r.currentTime=Math.min(as,r.currentTime+5),l=!0),E.code==="ArrowLeft"&&(r.currentTime=Math.max(0,r.currentTime-5),l=!0),E.key==="f"&&a.full.click()}),ha.has("t")&&(r.currentTime=o);let p=()=>{let E=Math.min(window.innerWidth/1920,window.innerHeight/1080);n.style.transform=`translate(-50%, -50%) scale(${E})`};window.addEventListener("resize",p),p();let S=E=>{r.paused?o=r.currentTime:(r.currentTime!==f&&(f=r.currentTime,h=E),o=f+(E-h)/1e3),o=Math.min(Math.max(o,0),as),s.renderAt(l?o:c),a.fill.style.width=`${o/as*100}%`,a.time.textContent=`${u(o)} / ${u(as)}`,requestAnimationFrame(S)};requestAnimationFrame(S),document.body.classList.add("ready")}N3();})();
