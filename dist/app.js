(()=>{var wc="160",qi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Yi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pp=0,Hh=1,mp=2;var Dd=1,Ac=2,Yn=3,Nn=0,nn=1,Ut=2;var Dn=0,Es=1,Sa=2,Vh=3,Gh=4,gp=5,Ni=100,_p=101,xp=102,Wh=103,Xh=104,vp=200,yp=201,bp=202,Mp=203,zl=204,kl=205,Sp=206,Ep=207,Tp=208,wp=209,Ap=210,Rp=211,Cp=212,Pp=213,Lp=214,Ip=0,Dp=1,Np=2,Ea=3,Up=4,Fp=5,Op=6,Bp=7,Nd=0,zp=1,kp=2,hi=0,Rc=1,Cc=2,Pc=3,wr=4,Hp=5,Lc=6,qh="attached",Vp="detached",Ud=300,As=301,Rs=302,Hl=303,Vl=304,mo=306,jn=1e3,cn=1001,or=1002,Tt=1003,Ta=1004;var Qs=1005;var Jt=1006,Ic=1007;var di=1008;var ui=1009,Gp=1010,Wp=1011,Dc=1012,Fd=1013,li=1014,Kn=1015,wn=1016,Od=1017,Bd=1018,Oi=1020,Xp=1021,pn=1023,qp=1024,Yp=1025,Bi=1026,Cs=1027,Kp=1028,zd=1029,Zp=1030,kd=1031,Hd=1033,nl=33776,il=33777,sl=33778,rl=33779,Yh=35840,Kh=35841,Zh=35842,jh=35843,Vd=36196,Jh=37492,$h=37496,Qh=37808,eu=37809,tu=37810,nu=37811,iu=37812,su=37813,ru=37814,au=37815,ou=37816,lu=37817,cu=37818,hu=37819,uu=37820,du=37821,al=36492,fu=36494,pu=36495,jp=36283,mu=36284,gu=36285,_u=36286;var Ps=2300,ki=2301,ol=2302,xu=2400,vu=2401,yu=2402,Jp=2500;var Gd=0,go=1,Ar=2,Wd=3e3,zi=3001,$p=3200,Qp=3201,Xd=0,em=1,mn="",pt="srgb",Ct="srgb-linear",Nc="display-p3",_o="display-p3-linear",wa="linear",ot="srgb",Aa="rec709",Ra="p3";var es=7680;var bu=519,tm=512,nm=513,im=514,qd=515,sm=516,rm=517,am=518,om=519,Gl=35044;var Mu="300 es",Wl=1035,Zn=2e3,Ca=2001,Un=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Su=1234567,er=Math.PI/180,Ls=180/Math.PI;function gn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]).toLowerCase()}function wt(i,e,t){return Math.max(e,Math.min(t,i))}function Uc(i,e){return(i%e+e)%e}function lm(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function cm(i,e,t){return i!==e?(t-i)/(e-i):0}function tr(i,e,t){return(1-t)*i+t*e}function hm(i,e,t,n){return tr(i,e,1-Math.exp(-t*n))}function um(i,e=1){return e-Math.abs(Uc(i,e*2)-e)}function dm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function fm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function pm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function mm(i,e){return i+Math.random()*(e-i)}function gm(i){return i*(.5-Math.random())}function _m(i){i!==void 0&&(Su=i);let e=Su+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xm(i){return i*er}function vm(i){return i*Ls}function Xl(i){return(i&i-1)===0&&i!==0}function ym(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Pa(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function bm(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function In(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function at(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var xo={DEG2RAD:er,RAD2DEG:Ls,generateUUID:gn,clamp:wt,euclideanModulo:Uc,mapLinear:lm,inverseLerp:cm,lerp:tr,damp:hm,pingpong:um,smoothstep:dm,smootherstep:fm,randInt:pm,randFloat:mm,randFloatSpread:gm,seededRandom:_m,degToRad:xm,radToDeg:vm,isPowerOfTwo:Xl,ceilPowerOfTwo:ym,floorPowerOfTwo:Pa,setQuaternionFromProperEuler:bm,normalize:at,denormalize:In},K=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ye=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],y=s[1],x=s[4],b=s[7],C=s[2],T=s[5],A=s[8];return r[0]=a*_+o*y+l*C,r[3]=a*m+o*x+l*T,r[6]=a*p+o*b+l*A,r[1]=c*_+h*y+u*C,r[4]=c*m+h*x+u*T,r[7]=c*p+h*b+u*A,r[2]=d*_+f*y+g*C,r[5]=d*m+f*x+g*T,r[8]=d*p+f*b+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(s*c-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=d*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ll.makeScale(e,t)),this}rotate(e){return this.premultiply(ll.makeRotation(-e)),this}translate(e,t){return this.premultiply(ll.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ll=new Ye;function Yd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function lr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Mm(){let i=lr("canvas");return i.style.display="block",i}var Eu={};function nr(i){i in Eu||(Eu[i]=!0,console.warn(i))}var Tu=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),wu=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Gr={[Ct]:{transfer:wa,primaries:Aa,toReference:i=>i,fromReference:i=>i},[pt]:{transfer:ot,primaries:Aa,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[_o]:{transfer:wa,primaries:Ra,toReference:i=>i.applyMatrix3(wu),fromReference:i=>i.applyMatrix3(Tu)},[Nc]:{transfer:ot,primaries:Ra,toReference:i=>i.convertSRGBToLinear().applyMatrix3(wu),fromReference:i=>i.applyMatrix3(Tu).convertLinearToSRGB()}},Sm=new Set([Ct,_o]),tt={enabled:!0,_workingColorSpace:Ct,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Sm.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Gr[e].toReference,s=Gr[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Gr[i].primaries},getTransfer:function(i){return i===mn?wa:Gr[i].transfer}};function Ts(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function cl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ts,La=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ts===void 0&&(ts=lr("canvas")),ts.width=e.width,ts.height=e.height;let n=ts.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ts}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=lr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ts(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ts(t[n]/255)*255):t[n]=Ts(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Em=0,Ia=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=gn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(hl(s[a].image)):r.push(hl(s[a]))}else r=hl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function hl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?La.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Tm=0,kt=class i extends Un{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=cn,s=cn,r=Jt,a=di,o=pn,l=ui,c=i.DEFAULT_ANISOTROPY,h=mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=gn(),this.name="",this.source=new Ia(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new K(0,0),this.repeat=new K(1,1),this.center=new K(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(nr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===zi?pt:mn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ud)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jn:e.x=e.x-Math.floor(e.x);break;case cn:e.x=e.x<0?0:1;break;case or:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jn:e.y=e.y-Math.floor(e.y);break;case cn:e.y=e.y<0?0:1;break;case or:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return nr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===pt?zi:Wd}set encoding(e){nr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===zi?pt:mn}};kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=Ud;kt.DEFAULT_ANISOTROPY=1;var lt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,b=(f+1)/2,C=(p+1)/2,T=(h+d)/4,A=(u+_)/4,U=(g+m)/4;return x>b&&x>C?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=A/n):b>C?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=T/s,r=U/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=A/r,s=U/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ql=class extends Un{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(nr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===zi?pt:mn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new kt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ia(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},$t=class extends ql{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Da=class extends kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yl=class extends kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ft=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-o,p=l*d+c*f+h*g+u*_,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let C=Math.sqrt(x),T=Math.atan2(C,p*y);m=Math.sin(m*T)/C,o=Math.sin(o*T)/C}let b=o*y;if(l=l*m+d*b,c=c*m+f*b,h=h*m+g*b,u=u*m+_*b,m===1-o){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Au.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Au.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ul.copy(this).projectOnVector(e),this.sub(ul)}reflect(e){return this.sub(ul.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ul=new R,Au=new Ft,_n=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Mn):Mn.fromBufferAttribute(r,a),Mn.applyMatrix4(e.matrixWorld),this.expandByPoint(Mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wr.copy(n.boundingBox)),Wr.applyMatrix4(e.matrixWorld),this.union(Wr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gs),Xr.subVectors(this.max,Gs),ns.subVectors(e.a,Gs),is.subVectors(e.b,Gs),ss.subVectors(e.c,Gs),ii.subVectors(is,ns),si.subVectors(ss,is),Ci.subVectors(ns,ss);let t=[0,-ii.z,ii.y,0,-si.z,si.y,0,-Ci.z,Ci.y,ii.z,0,-ii.x,si.z,0,-si.x,Ci.z,0,-Ci.x,-ii.y,ii.x,0,-si.y,si.x,0,-Ci.y,Ci.x,0];return!dl(t,ns,is,ss,Xr)||(t=[1,0,0,0,1,0,0,0,1],!dl(t,ns,is,ss,Xr))?!1:(qr.crossVectors(ii,si),t=[qr.x,qr.y,qr.z],dl(t,ns,is,ss,Xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Hn=[new R,new R,new R,new R,new R,new R,new R,new R],Mn=new R,Wr=new _n,ns=new R,is=new R,ss=new R,ii=new R,si=new R,Ci=new R,Gs=new R,Xr=new R,qr=new R,Pi=new R;function dl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Pi.fromArray(i,r);let o=s.x*Math.abs(Pi.x)+s.y*Math.abs(Pi.y)+s.z*Math.abs(Pi.z),l=e.dot(Pi),c=t.dot(Pi),h=n.dot(Pi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var wm=new _n,Ws=new R,fl=new R,hn=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):wm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ws.subVectors(e,this.center);let t=Ws.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ws,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ws.copy(e.center).add(fl)),this.expandByPoint(Ws.copy(e.center).sub(fl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Vn=new R,pl=new R,Yr=new R,ri=new R,ml=new R,Kr=new R,gl=new R,fi=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vn.copy(this.origin).addScaledVector(this.direction,t),Vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){pl.copy(e).add(t).multiplyScalar(.5),Yr.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(pl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Yr),o=ri.dot(this.direction),l=-ri.dot(Yr),c=ri.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(pl).addScaledVector(Yr,d),f}intersectSphere(e,t){Vn.subVectors(e.center,this.origin);let n=Vn.dot(this.direction),s=Vn.dot(Vn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Vn)!==null}intersectTriangle(e,t,n,s,r){ml.subVectors(t,e),Kr.subVectors(n,e),gl.crossVectors(ml,Kr);let a=this.direction.dot(gl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ri.subVectors(this.origin,e);let l=o*this.direction.dot(Kr.crossVectors(ri,Kr));if(l<0)return null;let c=o*this.direction.dot(ml.cross(ri));if(c<0||l+c>a)return null;let h=-o*ri.dot(gl);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ke=class i{constructor(e,t,n,s,r,a,o,l,c,h,u,d,f,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,_,m)}set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/rs.setFromMatrixColumn(e,0).length(),r=1/rs.setFromMatrixColumn(e,1).length(),a=1/rs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){let d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Am,e,Rm)}lookAt(e,t,n){let s=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),ai.crossVectors(n,on),ai.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),ai.crossVectors(n,on)),ai.normalize(),Zr.crossVectors(on,ai),s[0]=ai.x,s[4]=Zr.x,s[8]=on.x,s[1]=ai.y,s[5]=Zr.y,s[9]=on.y,s[2]=ai.z,s[6]=Zr.z,s[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],x=n[7],b=n[11],C=n[15],T=s[0],A=s[4],U=s[8],M=s[12],w=s[1],O=s[5],W=s[9],re=s[13],D=s[2],B=s[6],V=s[10],j=s[14],Z=s[3],X=s[7],te=s[11],ie=s[15];return r[0]=a*T+o*w+l*D+c*Z,r[4]=a*A+o*O+l*B+c*X,r[8]=a*U+o*W+l*V+c*te,r[12]=a*M+o*re+l*j+c*ie,r[1]=h*T+u*w+d*D+f*Z,r[5]=h*A+u*O+d*B+f*X,r[9]=h*U+u*W+d*V+f*te,r[13]=h*M+u*re+d*j+f*ie,r[2]=g*T+_*w+m*D+p*Z,r[6]=g*A+_*O+m*B+p*X,r[10]=g*U+_*W+m*V+p*te,r[14]=g*M+_*re+m*j+p*ie,r[3]=y*T+x*w+b*D+C*Z,r[7]=y*A+x*O+b*B+C*X,r[11]=y*U+x*W+b*V+C*te,r[15]=y*M+x*re+b*j+C*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+_*(+t*l*f-t*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+m*(+t*c*u-t*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-t*l*u+t*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=u*m*c-_*d*c+_*l*f-o*m*f-u*l*p+o*d*p,x=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,b=h*_*c-g*u*c+g*o*f-a*_*f-h*o*p+a*u*p,C=g*u*l-h*_*l-g*o*d+a*_*d+h*o*m-a*u*m,T=t*y+n*x+s*b+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return e[0]=y*A,e[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*A,e[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*p+n*l*p)*A,e[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*A,e[4]=x*A,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*A,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*A,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*f+t*l*f)*A,e[8]=b*A,e[9]=(g*u*r-h*_*r-g*n*f+t*_*f+h*n*p-t*u*p)*A,e[10]=(a*_*r-g*o*r+g*n*c-t*_*c-a*n*p+t*o*p)*A,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*f-t*o*f)*A,e[12]=C*A,e[13]=(h*_*s-g*u*s+g*n*d-t*_*d-h*n*m+t*u*m)*A,e[14]=(g*o*s-a*_*s-g*n*l+t*_*l+a*n*m-t*o*m)*A,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*d+t*o*d)*A,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,_=a*h,m=a*u,p=o*u,y=l*c,x=l*h,b=l*u,C=n.x,T=n.y,A=n.z;return s[0]=(1-(_+p))*C,s[1]=(f+b)*C,s[2]=(g-x)*C,s[3]=0,s[4]=(f-b)*T,s[5]=(1-(d+p))*T,s[6]=(m+y)*T,s[7]=0,s[8]=(g+x)*A,s[9]=(m-y)*A,s[10]=(1-(d+_))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=rs.set(s[0],s[1],s[2]).length(),a=rs.set(s[4],s[5],s[6]).length(),o=rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Sn.copy(this);let c=1/r,h=1/a,u=1/o;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=u,Sn.elements[9]*=u,Sn.elements[10]*=u,t.setFromRotationMatrix(Sn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Zn){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),f,g;if(o===Zn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ca)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Zn){let l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(a-r),d=(t+e)*c,f=(n+s)*h,g,_;if(o===Zn)g=(a+r)*u,_=-2*u;else if(o===Ca)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},rs=new R,Sn=new ke,Am=new R(0,0,0),Rm=new R(1,1,1),ai=new R,Zr=new R,on=new R,Ru=new ke,Cu=new Ft,Hi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ru.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ru,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cu.setFromEuler(this),this.setFromQuaternion(Cu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Hi.DEFAULT_ORDER="XYZ";var Na=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Cm=0,Pu=new R,as=new Ft,Gn=new ke,jr=new R,Xs=new R,Pm=new R,Lm=new Ft,Lu=new R(1,0,0),Iu=new R(0,1,0),Du=new R(0,0,1),Im={type:"added"},Dm={type:"removed"},mt=class i extends Un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new R,t=new Hi,n=new Ft,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ke},normalMatrix:{value:new Ye}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Na,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,t){return as.setFromAxisAngle(e,t),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis(Lu,e)}rotateY(e){return this.rotateOnAxis(Iu,e)}rotateZ(e){return this.rotateOnAxis(Du,e)}translateOnAxis(e,t){return Pu.copy(e).applyQuaternion(this.quaternion),this.position.add(Pu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lu,e)}translateY(e){return this.translateOnAxis(Iu,e)}translateZ(e){return this.translateOnAxis(Du,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?jr.copy(e):jr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Xs,jr,this.up):Gn.lookAt(jr,Xs,this.up),this.quaternion.setFromRotationMatrix(Gn),s&&(Gn.extractRotation(s.matrixWorld),as.setFromRotationMatrix(Gn),this.quaternion.premultiply(as.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Im)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dm)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,e,Pm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,Lm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};mt.DEFAULT_UP=new R(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var En=new R,Wn=new R,_l=new R,Xn=new R,os=new R,ls=new R,Nu=new R,xl=new R,vl=new R,yl=new R,Jr=!1,Fi=class i{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),En.subVectors(e,t),s.cross(En);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){En.subVectors(s,t),Wn.subVectors(n,t),_l.subVectors(e,t);let a=En.dot(En),o=En.dot(Wn),l=En.dot(_l),c=Wn.dot(Wn),h=Wn.dot(_l),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getUV(e,t,n,s,r,a,o,l){return Jr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Jr=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xn.x),l.addScaledVector(a,Xn.y),l.addScaledVector(o,Xn.z),l)}static isFrontFacing(e,t,n,s){return En.subVectors(n,t),Wn.subVectors(e,t),En.cross(Wn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),En.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Jr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Jr=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;os.subVectors(s,n),ls.subVectors(r,n),xl.subVectors(e,n);let l=os.dot(xl),c=ls.dot(xl);if(l<=0&&c<=0)return t.copy(n);vl.subVectors(e,s);let h=os.dot(vl),u=ls.dot(vl);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(os,a);yl.subVectors(e,r);let f=os.dot(yl),g=ls.dot(yl);if(g>=0&&f<=g)return t.copy(r);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ls,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Nu.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Nu,o);let p=1/(m+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(os,a).addScaledVector(ls,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Kd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},$r={h:0,s:0,l:0};function bl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Se=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=tt.workingColorSpace){if(e=Uc(e,1),t=wt(t,0,1),n=wt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=bl(a,r,e+1/3),this.g=bl(a,r,e),this.b=bl(a,r,e-1/3)}return tt.toWorkingColorSpace(this,s),this}setStyle(e,t=pt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pt){let n=Kd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}copyLinearToSRGB(e){return this.r=cl(e.r),this.g=cl(e.g),this.b=cl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pt){return tt.fromWorkingColorSpace(qt.copy(this),e),Math.round(wt(qt.r*255,0,255))*65536+Math.round(wt(qt.g*255,0,255))*256+Math.round(wt(qt.b*255,0,255))}getHexString(e=pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(qt.copy(this),t);let n=qt.r,s=qt.g,r=qt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=pt){tt.fromWorkingColorSpace(qt.copy(this),e);let t=qt.r,n=qt.g,s=qt.b;return e!==pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(oi),this.setHSL(oi.h+e,oi.s+t,oi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(oi),e.getHSL($r);let n=tr(oi.h,$r.h,t),s=tr(oi.s,$r.s,t),r=tr(oi.l,$r.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qt=new Se;Se.NAMES=Kd;var Nm=0,sn=class extends Un{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=gn(),this.name="",this.type="Material",this.blending=Es,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zl,this.blendDst=kl,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=Ea,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=es,this.stencilZFail=es,this.stencilZPass=es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zl&&(n.blendSrc=this.blendSrc),this.blendDst!==kl&&(n.blendDst=this.blendDst),this.blendEquation!==Ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ea&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==es&&(n.stencilFail=this.stencilFail),this.stencilZFail!==es&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==es&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},gt=class extends sn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Nd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Et=new R,Qr=new K,bt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Gl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qr.fromBufferAttribute(this,t),Qr.applyMatrix3(e),this.setXY(t,Qr.x,Qr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=In(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=In(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=In(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=In(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=In(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array),r=at(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gl&&(e.usage=this.usage),e}};var Ua=class extends bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Fa=class extends bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var it=class extends bt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Um=0,fn=new ke,Ml=new mt,cs=new R,ln=new _n,qs=new _n,Nt=new R,ct=class i extends Un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=gn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yd(e)?Fa:Ua)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,n){return fn.makeTranslation(e,t,n),this.applyMatrix4(fn),this}scale(e,t,n){return fn.makeScale(e,t,n),this.applyMatrix4(fn),this}lookAt(e){return Ml.lookAt(e),Ml.updateMatrix(),this.applyMatrix4(Ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new it(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _n);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(ln.min,qs.min),ln.expandByPoint(Nt),Nt.addVectors(ln.max,qs.max),ln.expandByPoint(Nt)):(ln.expandByPoint(qs.min),ln.expandByPoint(qs.max))}ln.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Nt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Nt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Nt.fromBufferAttribute(o,c),l&&(cs.fromBufferAttribute(e,c),Nt.add(cs)),s=Math.max(s,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bt(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let w=0;w<o;w++)c[w]=new R,h[w]=new R;let u=new R,d=new R,f=new R,g=new K,_=new K,m=new K,p=new R,y=new R;function x(w,O,W){u.fromArray(s,w*3),d.fromArray(s,O*3),f.fromArray(s,W*3),g.fromArray(a,w*2),_.fromArray(a,O*2),m.fromArray(a,W*2),d.sub(u),f.sub(u),_.sub(g),m.sub(g);let re=1/(_.x*m.y-m.x*_.y);isFinite(re)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-_.y).multiplyScalar(re),y.copy(f).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(re),c[w].add(p),c[O].add(p),c[W].add(p),h[w].add(y),h[O].add(y),h[W].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let w=0,O=b.length;w<O;++w){let W=b[w],re=W.start,D=W.count;for(let B=re,V=re+D;B<V;B+=3)x(n[B+0],n[B+1],n[B+2])}let C=new R,T=new R,A=new R,U=new R;function M(w){A.fromArray(r,w*3),U.copy(A);let O=c[w];C.copy(O),C.sub(A.multiplyScalar(A.dot(O))).normalize(),T.crossVectors(U,O);let re=T.dot(h[w])<0?-1:1;l[w*4]=C.x,l[w*4+1]=C.y,l[w*4+2]=C.z,l[w*4+3]=re}for(let w=0,O=b.length;w<O;++w){let W=b[w],re=W.start,D=W.count;for(let B=re,V=re+D;B<V;B+=3)M(n[B+0]),M(n[B+1]),M(n[B+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new R,r=new R,a=new R,o=new R,l=new R,c=new R,h=new R,u=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new bt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Uu=new ke,Li=new fi,ea=new hn,Fu=new R,hs=new R,us=new R,ds=new R,Sl=new R,ta=new R,na=new K,ia=new K,sa=new K,Ou=new R,Bu=new R,zu=new R,ra=new R,aa=new R,Ne=class extends mt{constructor(e=new ct,t=new gt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ta.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Sl.fromBufferAttribute(u,e),a?ta.addScaledVector(Sl,h):ta.addScaledVector(Sl.sub(t),h))}t.add(ta)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(r),Li.copy(e.ray).recast(e.near),!(ea.containsPoint(Li.origin)===!1&&(Li.intersectSphere(ea,Fu)===null||Li.origin.distanceToSquared(Fu)>(e.far-e.near)**2))&&(Uu.copy(r).invert(),Li.copy(e.ray).applyMatrix4(Uu),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Li)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,C=x;b<C;b+=3){let T=o.getX(b),A=o.getX(b+1),U=o.getX(b+2);s=oa(this,p,e,n,c,h,u,T,A,U),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let y=o.getX(m),x=o.getX(m+1),b=o.getX(m+2);s=oa(this,a,e,n,c,h,u,y,x,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=y,C=x;b<C;b+=3){let T=b,A=b+1,U=b+2;s=oa(this,p,e,n,c,h,u,T,A,U),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let y=m,x=m+1,b=m+2;s=oa(this,a,e,n,c,h,u,y,x,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Fm(i,e,t,n,s,r,a,o){let l;if(e.side===nn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Nn,o),l===null)return null;aa.copy(o),aa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(aa);return c<t.near||c>t.far?null:{distance:c,point:aa.clone(),object:i}}function oa(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,hs),i.getVertexPosition(l,us),i.getVertexPosition(c,ds);let h=Fm(i,e,t,n,hs,us,ds,ra);if(h){s&&(na.fromBufferAttribute(s,o),ia.fromBufferAttribute(s,l),sa.fromBufferAttribute(s,c),h.uv=Fi.getInterpolation(ra,hs,us,ds,na,ia,sa,new K)),r&&(na.fromBufferAttribute(r,o),ia.fromBufferAttribute(r,l),sa.fromBufferAttribute(r,c),h.uv1=Fi.getInterpolation(ra,hs,us,ds,na,ia,sa,new K),h.uv2=h.uv1),a&&(Ou.fromBufferAttribute(a,o),Bu.fromBufferAttribute(a,l),zu.fromBufferAttribute(a,c),h.normal=Fi.getInterpolation(ra,hs,us,ds,Ou,Bu,zu,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new R,materialIndex:0};Fi.getNormal(hs,us,ds,u.normal),h.face=u}return h}var Qt=class i extends ct{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(u,2));function g(_,m,p,y,x,b,C,T,A,U,M){let w=b/A,O=C/U,W=b/2,re=C/2,D=T/2,B=A+1,V=U+1,j=0,Z=0,X=new R;for(let te=0;te<V;te++){let ie=te*O-re;for(let _e=0;_e<B;_e++){let G=_e*w-W;X[_]=G*y,X[m]=ie*x,X[p]=D,c.push(X.x,X.y,X.z),X[_]=0,X[m]=0,X[p]=T>0?1:-1,h.push(X.x,X.y,X.z),u.push(_e/A),u.push(1-te/U),j+=1}}for(let te=0;te<U;te++)for(let ie=0;ie<A;ie++){let _e=d+ie+B*te,G=d+ie+B*(te+1),ne=d+(ie+1)+B*(te+1),xe=d+(ie+1)+B*te;l.push(_e,G,xe),l.push(G,ne,xe),Z+=6}o.addGroup(f,Z,M),f+=Z,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Is(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function jt(i){let e={};for(let t=0;t<i.length;t++){let n=Is(i[t]);for(let s in n)e[s]=n[s]}return e}function Om(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Zd(i){return i.getRenderTarget()===null?i.outputColorSpace:tt.workingColorSpace}var bi={clone:Is,merge:jt},Bm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ot=class extends sn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bm,this.fragmentShader=zm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Is(e.uniforms),this.uniformsGroups=Om(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Oa=class extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=Zn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},At=class extends Oa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ls*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(er*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ls*2*Math.atan(Math.tan(er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(er*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},fs=-90,ps=1,Kl=class extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new At(fs,ps,e,t);s.layers=this.layers,this.add(s);let r=new At(fs,ps,e,t);r.layers=this.layers,this.add(r);let a=new At(fs,ps,e,t);a.layers=this.layers,this.add(a);let o=new At(fs,ps,e,t);o.layers=this.layers,this.add(o);let l=new At(fs,ps,e,t);l.layers=this.layers,this.add(l);let c=new At(fs,ps,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ca)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ba=class extends kt{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:As,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Zl=class extends $t{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(nr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===zi?pt:mn),this.texture=new Ba(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qt(5,5,5),r=new Ot({name:"CubemapFromEquirect",uniforms:Is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:Dn});r.uniforms.tEquirect.value=t;let a=new Ne(s,r),o=t.minFilter;return t.minFilter===di&&(t.minFilter=Jt),new Kl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},El=new R,km=new R,Hm=new Ye,Tn=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=El.subVectors(n,t).cross(km.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(El),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Hm.getNormalMatrix(e),s=this.coplanarPoint(El).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ii=new hn,la=new R,cr=class{constructor(e=new Tn,t=new Tn,n=new Tn,s=new Tn,r=new Tn,a=new Tn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zn){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],y=s[13],x=s[14],b=s[15];if(n[0].setComponents(l-r,d-c,m-f,b-p).normalize(),n[1].setComponents(l+r,d+c,m+f,b+p).normalize(),n[2].setComponents(l+a,d+h,m+g,b+y).normalize(),n[3].setComponents(l-a,d-h,m-g,b-y).normalize(),n[4].setComponents(l-o,d-u,m-_,b-x).normalize(),t===Zn)n[5].setComponents(l+o,d+u,m+_,b+x).normalize();else if(t===Ca)n[5].setComponents(o,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ii)}intersectsSprite(e){return Ii.center.set(0,0,0),Ii.radius=.7071067811865476,Ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ii)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(la.x=s.normal.x>0?e.max.x:e.min.x,la.y=s.normal.y>0?e.max.y:e.min.y,la.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(la)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function jd(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Vm(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,h){let u=c.array,d=c.usage,f=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,d),c.onUploadCallback();let _;if(u instanceof Float32Array)_=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=i.SHORT;else if(u instanceof Uint32Array)_=i.UNSIGNED_INT;else if(u instanceof Int32Array)_=i.INT;else if(u instanceof Int8Array)_=i.BYTE;else if(u instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function r(c,h,u){let d=h.array,f=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,c),f.count===-1&&g.length===0&&i.bufferSubData(u,0,d),g.length!==0){for(let _=0,m=g.length;_<m;_++){let p=g[_];t?i.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):i.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(t?i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}var rn=class i extends ct{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let y=p*d-a;for(let x=0;x<c;x++){let b=x*u-r;g.push(b,-y,0),_.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let x=y+c*p,b=y+c*(p+1),C=y+1+c*(p+1),T=y+1+c*p;f.push(x,b,T),f.push(b,C,T)}this.setIndex(f),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(_,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Gm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wm=`#ifdef USE_ALPHAHASH
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
#endif`,Xm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ym=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Km=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zm=`#ifdef USE_AOMAP
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
#endif`,jm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jm=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,$m=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Qm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ng=`#ifdef USE_IRIDESCENCE
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
#endif`,ig=`#ifdef USE_BUMPMAP
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
#endif`,sg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ag=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,og=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ug=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,dg=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,fg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pg=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_g=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vg="gl_FragColor = linearToOutputTexel( gl_FragColor );",yg=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,bg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Mg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sg=`#ifdef USE_ENVMAP
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
#endif`,Eg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ag=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pg=`#ifdef USE_GRADIENTMAP
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
}`,Lg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ig=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ng=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ug=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
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
#endif`,Fg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,Og=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Vg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gg=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Zg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,jg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$g=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Qg=`#if defined( USE_POINTS_UV )
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
#endif`,e0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,t0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,n0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,i0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,s0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,r0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,a0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,o0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,l0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,u0=`#ifdef USE_NORMALMAP
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
#endif`,d0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,f0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,p0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,m0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,g0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,x0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,v0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,y0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,M0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,S0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,E0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,T0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,w0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,A0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,R0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,C0=`#ifdef USE_SKINNING
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
#endif`,P0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L0=`#ifdef USE_SKINNING
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
#endif`,I0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,D0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,N0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,U0=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,F0=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,O0=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,V0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,G0=`uniform sampler2D t2D;
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
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Y0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K0=`#include <common>
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
}`,Z0=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,j0=`#define DISTANCE
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
}`,J0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Q0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e_=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,t_=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,n_=`#include <common>
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
}`,i_=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,s_=`#define LAMBERT
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
}`,r_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,a_=`#define MATCAP
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
}`,o_=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,l_=`#define NORMAL
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
}`,c_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,h_=`#define PHONG
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
}`,u_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,d_=`#define STANDARD
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
}`,f_=`#define STANDARD
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
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,p_=`#define TOON
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
}`,m_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,g_=`uniform float size;
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
}`,__=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,x_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,v_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,y_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,b_=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,qe={alphahash_fragment:Gm,alphahash_pars_fragment:Wm,alphamap_fragment:Xm,alphamap_pars_fragment:qm,alphatest_fragment:Ym,alphatest_pars_fragment:Km,aomap_fragment:Zm,aomap_pars_fragment:jm,batching_pars_vertex:Jm,batching_vertex:$m,begin_vertex:Qm,beginnormal_vertex:eg,bsdfs:tg,iridescence_fragment:ng,bumpmap_pars_fragment:ig,clipping_planes_fragment:sg,clipping_planes_pars_fragment:rg,clipping_planes_pars_vertex:ag,clipping_planes_vertex:og,color_fragment:lg,color_pars_fragment:cg,color_pars_vertex:hg,color_vertex:ug,common:dg,cube_uv_reflection_fragment:fg,defaultnormal_vertex:pg,displacementmap_pars_vertex:mg,displacementmap_vertex:gg,emissivemap_fragment:_g,emissivemap_pars_fragment:xg,colorspace_fragment:vg,colorspace_pars_fragment:yg,envmap_fragment:bg,envmap_common_pars_fragment:Mg,envmap_pars_fragment:Sg,envmap_pars_vertex:Eg,envmap_physical_pars_fragment:Fg,envmap_vertex:Tg,fog_vertex:wg,fog_pars_vertex:Ag,fog_fragment:Rg,fog_pars_fragment:Cg,gradientmap_pars_fragment:Pg,lightmap_fragment:Lg,lightmap_pars_fragment:Ig,lights_lambert_fragment:Dg,lights_lambert_pars_fragment:Ng,lights_pars_begin:Ug,lights_toon_fragment:Og,lights_toon_pars_fragment:Bg,lights_phong_fragment:zg,lights_phong_pars_fragment:kg,lights_physical_fragment:Hg,lights_physical_pars_fragment:Vg,lights_fragment_begin:Gg,lights_fragment_maps:Wg,lights_fragment_end:Xg,logdepthbuf_fragment:qg,logdepthbuf_pars_fragment:Yg,logdepthbuf_pars_vertex:Kg,logdepthbuf_vertex:Zg,map_fragment:jg,map_pars_fragment:Jg,map_particle_fragment:$g,map_particle_pars_fragment:Qg,metalnessmap_fragment:e0,metalnessmap_pars_fragment:t0,morphcolor_vertex:n0,morphnormal_vertex:i0,morphtarget_pars_vertex:s0,morphtarget_vertex:r0,normal_fragment_begin:a0,normal_fragment_maps:o0,normal_pars_fragment:l0,normal_pars_vertex:c0,normal_vertex:h0,normalmap_pars_fragment:u0,clearcoat_normal_fragment_begin:d0,clearcoat_normal_fragment_maps:f0,clearcoat_pars_fragment:p0,iridescence_pars_fragment:m0,opaque_fragment:g0,packing:_0,premultiplied_alpha_fragment:x0,project_vertex:v0,dithering_fragment:y0,dithering_pars_fragment:b0,roughnessmap_fragment:M0,roughnessmap_pars_fragment:S0,shadowmap_pars_fragment:E0,shadowmap_pars_vertex:T0,shadowmap_vertex:w0,shadowmask_pars_fragment:A0,skinbase_vertex:R0,skinning_pars_vertex:C0,skinning_vertex:P0,skinnormal_vertex:L0,specularmap_fragment:I0,specularmap_pars_fragment:D0,tonemapping_fragment:N0,tonemapping_pars_fragment:U0,transmission_fragment:F0,transmission_pars_fragment:O0,uv_pars_fragment:B0,uv_pars_vertex:z0,uv_vertex:k0,worldpos_vertex:H0,background_vert:V0,background_frag:G0,backgroundCube_vert:W0,backgroundCube_frag:X0,cube_vert:q0,cube_frag:Y0,depth_vert:K0,depth_frag:Z0,distanceRGBA_vert:j0,distanceRGBA_frag:J0,equirect_vert:$0,equirect_frag:Q0,linedashed_vert:e_,linedashed_frag:t_,meshbasic_vert:n_,meshbasic_frag:i_,meshlambert_vert:s_,meshlambert_frag:r_,meshmatcap_vert:a_,meshmatcap_frag:o_,meshnormal_vert:l_,meshnormal_frag:c_,meshphong_vert:h_,meshphong_frag:u_,meshphysical_vert:d_,meshphysical_frag:f_,meshtoon_vert:p_,meshtoon_frag:m_,points_vert:g_,points_frag:__,shadow_vert:x_,shadow_frag:v_,sprite_vert:y_,sprite_frag:b_},pe={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new K(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new K(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Ln={basic:{uniforms:jt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:jt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Se(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:jt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:jt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:jt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Se(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:jt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:jt([pe.points,pe.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:jt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:jt([pe.common,pe.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:jt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:jt([pe.sprite,pe.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:jt([pe.common,pe.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:jt([pe.lights,pe.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Ln.physical={uniforms:jt([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new K(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new K},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new K},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var ca={r:0,b:0,g:0};function M_(i,e,t,n,s,r,a){let o=new Se(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(m,p){let y=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?_(o,l):x&&x.isColor&&(_(x,1),y=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===mo)?(h===void 0&&(h=new Ne(new Qt(1,1,1),new Ot({name:"BackgroundCubeMaterial",uniforms:Is(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=tt.getTransfer(x.colorSpace)!==ot,(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ne(new rn(2,2),new Ot({name:"BackgroundMaterial",uniforms:Is(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=tt.getTransfer(x.colorSpace)!==ot,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(ca,Zd(i)),n.buffers.color.setClear(ca.r,ca.g,ca.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(o,l)},render:g}}function S_(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=m(null),c=l,h=!1;function u(D,B,V,j,Z){let X=!1;if(a){let te=_(j,V,B);c!==te&&(c=te,f(c.object)),X=p(D,j,V,Z),X&&y(D,j,V,Z)}else{let te=B.wireframe===!0;(c.geometry!==j.id||c.program!==V.id||c.wireframe!==te)&&(c.geometry=j.id,c.program=V.id,c.wireframe=te,X=!0)}Z!==null&&t.update(Z,i.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,U(D,B,V,j),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(D){return n.isWebGL2?i.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?i.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function _(D,B,V){let j=V.wireframe===!0,Z=o[D.id];Z===void 0&&(Z={},o[D.id]=Z);let X=Z[B.id];X===void 0&&(X={},Z[B.id]=X);let te=X[j];return te===void 0&&(te=m(d()),X[j]=te),te}function m(D){let B=[],V=[],j=[];for(let Z=0;Z<s;Z++)B[Z]=0,V[Z]=0,j[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:V,attributeDivisors:j,object:D,attributes:{},index:null}}function p(D,B,V,j){let Z=c.attributes,X=B.attributes,te=0,ie=V.getAttributes();for(let _e in ie)if(ie[_e].location>=0){let ne=Z[_e],xe=X[_e];if(xe===void 0&&(_e==="instanceMatrix"&&D.instanceMatrix&&(xe=D.instanceMatrix),_e==="instanceColor"&&D.instanceColor&&(xe=D.instanceColor)),ne===void 0||ne.attribute!==xe||xe&&ne.data!==xe.data)return!0;te++}return c.attributesNum!==te||c.index!==j}function y(D,B,V,j){let Z={},X=B.attributes,te=0,ie=V.getAttributes();for(let _e in ie)if(ie[_e].location>=0){let ne=X[_e];ne===void 0&&(_e==="instanceMatrix"&&D.instanceMatrix&&(ne=D.instanceMatrix),_e==="instanceColor"&&D.instanceColor&&(ne=D.instanceColor));let xe={};xe.attribute=ne,ne&&ne.data&&(xe.data=ne.data),Z[_e]=xe,te++}c.attributes=Z,c.attributesNum=te,c.index=j}function x(){let D=c.newAttributes;for(let B=0,V=D.length;B<V;B++)D[B]=0}function b(D){C(D,0)}function C(D,B){let V=c.newAttributes,j=c.enabledAttributes,Z=c.attributeDivisors;V[D]=1,j[D]===0&&(i.enableVertexAttribArray(D),j[D]=1),Z[D]!==B&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,B),Z[D]=B)}function T(){let D=c.newAttributes,B=c.enabledAttributes;for(let V=0,j=B.length;V<j;V++)B[V]!==D[V]&&(i.disableVertexAttribArray(V),B[V]=0)}function A(D,B,V,j,Z,X,te){te===!0?i.vertexAttribIPointer(D,B,V,Z,X):i.vertexAttribPointer(D,B,V,j,Z,X)}function U(D,B,V,j){if(n.isWebGL2===!1&&(D.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let Z=j.attributes,X=V.getAttributes(),te=B.defaultAttributeValues;for(let ie in X){let _e=X[ie];if(_e.location>=0){let G=Z[ie];if(G===void 0&&(ie==="instanceMatrix"&&D.instanceMatrix&&(G=D.instanceMatrix),ie==="instanceColor"&&D.instanceColor&&(G=D.instanceColor)),G!==void 0){let ne=G.normalized,xe=G.itemSize,we=t.get(G);if(we===void 0)continue;let Me=we.buffer,Ue=we.type,Oe=we.bytesPerElement,Te=n.isWebGL2===!0&&(Ue===i.INT||Ue===i.UNSIGNED_INT||G.gpuType===Fd);if(G.isInterleavedBufferAttribute){let Be=G.data,L=Be.stride,ce=G.offset;if(Be.isInstancedInterleavedBuffer){for(let q=0;q<_e.locationSize;q++)C(_e.location+q,Be.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Be.meshPerAttribute*Be.count)}else for(let q=0;q<_e.locationSize;q++)b(_e.location+q);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let q=0;q<_e.locationSize;q++)A(_e.location+q,xe/_e.locationSize,Ue,ne,L*Oe,(ce+xe/_e.locationSize*q)*Oe,Te)}else{if(G.isInstancedBufferAttribute){for(let Be=0;Be<_e.locationSize;Be++)C(_e.location+Be,G.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Be=0;Be<_e.locationSize;Be++)b(_e.location+Be);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let Be=0;Be<_e.locationSize;Be++)A(_e.location+Be,xe/_e.locationSize,Ue,ne,xe*Oe,xe/_e.locationSize*Be*Oe,Te)}}else if(te!==void 0){let ne=te[ie];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(_e.location,ne);break;case 3:i.vertexAttrib3fv(_e.location,ne);break;case 4:i.vertexAttrib4fv(_e.location,ne);break;default:i.vertexAttrib1fv(_e.location,ne)}}}}T()}function M(){W();for(let D in o){let B=o[D];for(let V in B){let j=B[V];for(let Z in j)g(j[Z].object),delete j[Z];delete B[V]}delete o[D]}}function w(D){if(o[D.id]===void 0)return;let B=o[D.id];for(let V in B){let j=B[V];for(let Z in j)g(j[Z].object),delete j[Z];delete B[V]}delete o[D.id]}function O(D){for(let B in o){let V=o[B];if(V[D.id]===void 0)continue;let j=V[D.id];for(let Z in j)g(j[Z].object),delete j[Z];delete V[D.id]}}function W(){re(),h=!0,c!==l&&(c=l,f(c.object))}function re(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:W,resetDefaultState:re,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:O,initAttributes:x,enableAttribute:b,disableUnusedAttributes:T}}function E_(i,e,t,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,u){i.drawArrays(r,h,u),t.update(u,r,1)}function l(h,u,d){if(d===0)return;let f,g;if(s)f=i,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),t.update(u,r,d)}function c(h,u,d){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function T_(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,b=a||e.has("OES_texture_float"),C=x&&b,T=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:b,floatVertexTextures:C,maxSamples:T}}function w_(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Tn,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,x=y*4,b=p.clippingState||null;l.value=b,b=h(g,d,x,f);for(let C=0;C!==x;++C)b[C]=t[C];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=f+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,b=f;x!==_;++x,b+=4)a.copy(u[x]).applyMatrix4(y,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function A_(i){let e=new WeakMap;function t(a,o){return o===Hl?a.mapping=As:o===Vl&&(a.mapping=Rs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Hl||o===Vl)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Zl(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var pi=class extends Oa{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},bs=4,ku=[.125,.215,.35,.446,.526,.582],Ui=20,Tl=new pi,Hu=new Se,wl=null,Al=0,Rl=0,Di=(1+Math.sqrt(5))/2,ms=1/Di,Vu=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,Di,ms),new R(0,Di,-ms),new R(ms,0,Di),new R(-ms,0,Di),new R(Di,ms,0),new R(-Di,ms,0)],za=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){wl=this._renderer.getRenderTarget(),Al=this._renderer.getActiveCubeFace(),Rl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wl,Al,Rl),e.scissorTest=!1,ha(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===As||e.mapping===Rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wl=this._renderer.getRenderTarget(),Al=this._renderer.getActiveCubeFace(),Rl=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:wn,format:pn,colorSpace:Ct,depthBuffer:!1},s=Gu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=R_(r)),this._blurMaterial=C_(r,e,t)}return s}_compileMaterial(e){let t=new Ne(this._lodPlanes[0],e);this._renderer.compile(t,Tl)}_sceneToCubeUV(e,t,n,s){let o=new At(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Hu),h.toneMapping=hi,h.autoClear=!1;let f=new gt({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),g=new Ne(new Qt,f),_=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Hu),_=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):y===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let x=this._cubeSize;ha(s,y*x,p>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===As||e.mapping===Rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ne(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;ha(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Tl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Vu[(s-1)%Vu.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ne(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ui-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Ui;m>Ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ui}`);let p=[],y=0;for(let A=0;A<Ui;++A){let U=A/_,M=Math.exp(-U*U/2);p.push(M),A===0?y+=M:A<m&&(y+=2*M)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;let b=this._sizeLods[s],C=3*b*(s>x-bs?s-x+bs:0),T=4*(this._cubeSize-b);ha(t,C,T,3*b,2*b),l.setRenderTarget(t),l.render(u,Tl)}};function R_(i){let e=[],t=[],n=[],s=i,r=i-bs+1+ku.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-bs?l=ku[a-i+bs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*f),x=new Float32Array(m*g*f),b=new Float32Array(p*g*f);for(let T=0;T<f;T++){let A=T%3*2/3-1,U=T>2?0:-1,M=[A,U,0,A+2/3,U,0,A+2/3,U+1,0,A,U,0,A+2/3,U+1,0,A,U+1,0];y.set(M,_*g*T),x.set(d,m*g*T);let w=[T,T,T,T,T,T];b.set(w,p*g*T)}let C=new ct;C.setAttribute("position",new bt(y,_)),C.setAttribute("uv",new bt(x,m)),C.setAttribute("faceIndex",new bt(b,p)),e.push(C),s>bs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Gu(i,e,t){let n=new $t(i,e,t);return n.texture.mapping=mo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ha(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function C_(i,e,t){let n=new Float32Array(Ui),s=new R(0,1,0);return new Ot({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Wu(){return new Ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fc(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Xu(){return new Ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Fc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function P_(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Hl||l===Vl,h=l===As||l===Rs;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new za(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){t===null&&(t=new za(i));let d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function L_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function I_(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)e.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],i.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,_=0;if(f!==null){let y=f.array;_=f.version;for(let x=0,b=y.length;x<b;x+=3){let C=y[x+0],T=y[x+1],A=y[x+2];d.push(C,T,T,A,A,C)}}else if(g!==void 0){let y=g.array;_=g.version;for(let x=0,b=y.length/3-1;x<b;x+=3){let C=x+0,T=x+1,A=x+2;d.push(C,T,T,A,A,C)}}else return;let m=new(Yd(d)?Fa:Ua)(d,1);m.version=_;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function D_(i,e,t,n){let s=n.isWebGL2,r;function a(f){r=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function h(f,g){i.drawElements(r,g,o,f*l),t.update(g,r,1)}function u(f,g,_){if(_===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,o,f*l,_),t.update(g,r,_)}function d(f,g,_){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(f[p]/l,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,o,f,0,_);let p=0;for(let y=0;y<_;y++)p+=g[y];t.update(p,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function N_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function U_(i,e){return i[0]-e[0]}function F_(i,e){return Math.abs(e[1])-Math.abs(i[1])}function O_(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new lt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let d=c.morphTargetInfluences;if(e.isWebGL2===!0){let f=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=f!==void 0?f.length:0,_=r.get(h);if(_===void 0||_.count!==g){let D=function(){W.dispose(),r.delete(h),h.removeEventListener("dispose",D)};_!==void 0&&_.texture.dispose();let y=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,C=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],A=h.morphAttributes.color||[],U=0;y===!0&&(U=1),x===!0&&(U=2),b===!0&&(U=3);let M=h.attributes.position.count*U,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let O=new Float32Array(M*w*4*g),W=new Da(O,M,w,g);W.type=Kn,W.needsUpdate=!0;let re=U*4;for(let B=0;B<g;B++){let V=C[B],j=T[B],Z=A[B],X=M*w*4*B;for(let te=0;te<V.count;te++){let ie=te*re;y===!0&&(a.fromBufferAttribute(V,te),O[X+ie+0]=a.x,O[X+ie+1]=a.y,O[X+ie+2]=a.z,O[X+ie+3]=0),x===!0&&(a.fromBufferAttribute(j,te),O[X+ie+4]=a.x,O[X+ie+5]=a.y,O[X+ie+6]=a.z,O[X+ie+7]=0),b===!0&&(a.fromBufferAttribute(Z,te),O[X+ie+8]=a.x,O[X+ie+9]=a.y,O[X+ie+10]=a.z,O[X+ie+11]=Z.itemSize===4?a.w:1)}}_={count:g,texture:W,size:new K(M,w)},r.set(h,_),h.addEventListener("dispose",D)}let m=0;for(let y=0;y<d.length;y++)m+=d[y];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",p),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),u.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{let f=d===void 0?0:d.length,g=n[h.id];if(g===void 0||g.length!==f){g=[];for(let x=0;x<f;x++)g[x]=[x,0];n[h.id]=g}for(let x=0;x<f;x++){let b=g[x];b[0]=x,b[1]=d[x]}g.sort(F_);for(let x=0;x<8;x++)x<f&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(U_);let _=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let x=0;x<8;x++){let b=o[x],C=b[0],T=b[1];C!==Number.MAX_SAFE_INTEGER&&T?(_&&h.getAttribute("morphTarget"+x)!==_[C]&&h.setAttribute("morphTarget"+x,_[C]),m&&h.getAttribute("morphNormal"+x)!==m[C]&&h.setAttribute("morphNormal"+x,m[C]),s[x]=T,p+=T):(_&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}let y=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",y),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function B_(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var ka=class extends kt{constructor(e,t,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:Bi,h!==Bi&&h!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Bi&&(n=li),n===void 0&&h===Cs&&(n=Oi),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Tt,this.minFilter=l!==void 0?l:Tt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Jd=new kt,$d=new ka(1,1);$d.compareFunction=qd;var Qd=new Da,ef=new Yl,tf=new Ba,qu=[],Yu=[],Ku=new Float32Array(16),Zu=new Float32Array(9),ju=new Float32Array(4);function Fs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=qu[s];if(r===void 0&&(r=new Float32Array(s),qu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Lt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function vo(i,e){let t=Yu[e];t===void 0&&(t=new Int32Array(e),Yu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function z_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function k_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2fv(this.addr,e),Lt(t,e)}}function H_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;i.uniform3fv(this.addr,e),Lt(t,e)}}function V_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4fv(this.addr,e),Lt(t,e)}}function G_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;ju.set(n),i.uniformMatrix2fv(this.addr,!1,ju),Lt(t,n)}}function W_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;Zu.set(n),i.uniformMatrix3fv(this.addr,!1,Zu),Lt(t,n)}}function X_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;Ku.set(n),i.uniformMatrix4fv(this.addr,!1,Ku),Lt(t,n)}}function q_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Y_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2iv(this.addr,e),Lt(t,e)}}function K_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3iv(this.addr,e),Lt(t,e)}}function Z_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4iv(this.addr,e),Lt(t,e)}}function j_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function J_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;i.uniform2uiv(this.addr,e),Lt(t,e)}}function $_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;i.uniform3uiv(this.addr,e),Lt(t,e)}}function Q_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;i.uniform4uiv(this.addr,e),Lt(t,e)}}function ex(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?$d:Jd;t.setTexture2D(e||r,s)}function tx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ef,s)}function nx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||tf,s)}function ix(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Qd,s)}function sx(i){switch(i){case 5126:return z_;case 35664:return k_;case 35665:return H_;case 35666:return V_;case 35674:return G_;case 35675:return W_;case 35676:return X_;case 5124:case 35670:return q_;case 35667:case 35671:return Y_;case 35668:case 35672:return K_;case 35669:case 35673:return Z_;case 5125:return j_;case 36294:return J_;case 36295:return $_;case 36296:return Q_;case 35678:case 36198:case 36298:case 36306:case 35682:return ex;case 35679:case 36299:case 36307:return tx;case 35680:case 36300:case 36308:case 36293:return nx;case 36289:case 36303:case 36311:case 36292:return ix}}function rx(i,e){i.uniform1fv(this.addr,e)}function ax(i,e){let t=Fs(e,this.size,2);i.uniform2fv(this.addr,t)}function ox(i,e){let t=Fs(e,this.size,3);i.uniform3fv(this.addr,t)}function lx(i,e){let t=Fs(e,this.size,4);i.uniform4fv(this.addr,t)}function cx(i,e){let t=Fs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function hx(i,e){let t=Fs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ux(i,e){let t=Fs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function dx(i,e){i.uniform1iv(this.addr,e)}function fx(i,e){i.uniform2iv(this.addr,e)}function px(i,e){i.uniform3iv(this.addr,e)}function mx(i,e){i.uniform4iv(this.addr,e)}function gx(i,e){i.uniform1uiv(this.addr,e)}function _x(i,e){i.uniform2uiv(this.addr,e)}function xx(i,e){i.uniform3uiv(this.addr,e)}function vx(i,e){i.uniform4uiv(this.addr,e)}function yx(i,e,t){let n=this.cache,s=e.length,r=vo(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Jd,r[a])}function bx(i,e,t){let n=this.cache,s=e.length,r=vo(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||ef,r[a])}function Mx(i,e,t){let n=this.cache,s=e.length,r=vo(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||tf,r[a])}function Sx(i,e,t){let n=this.cache,s=e.length,r=vo(t,s);Pt(n,r)||(i.uniform1iv(this.addr,r),Lt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Qd,r[a])}function Ex(i){switch(i){case 5126:return rx;case 35664:return ax;case 35665:return ox;case 35666:return lx;case 35674:return cx;case 35675:return hx;case 35676:return ux;case 5124:case 35670:return dx;case 35667:case 35671:return fx;case 35668:case 35672:return px;case 35669:case 35673:return mx;case 5125:return gx;case 36294:return _x;case 36295:return xx;case 36296:return vx;case 35678:case 36198:case 36298:case 36306:case 35682:return yx;case 35679:case 36299:case 36307:return bx;case 35680:case 36300:case 36308:case 36293:return Mx;case 36289:case 36303:case 36311:case 36292:return Sx}}var jl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=sx(t.type)}},Jl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ex(t.type)}},$l=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Cl=/(\w+)(\])?(\[|\.)?/g;function Ju(i,e){i.seq.push(e),i.map[e.id]=e}function Tx(i,e,t){let n=i.name,s=n.length;for(Cl.lastIndex=0;;){let r=Cl.exec(n),a=Cl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ju(t,c===void 0?new jl(o,i,e):new Jl(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new $l(o),Ju(t,u)),t=u}}}var ws=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Tx(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function $u(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var wx=37297,Ax=0;function Rx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Cx(i){let e=tt.getPrimaries(tt.workingColorSpace),t=tt.getPrimaries(i),n;switch(e===t?n="":e===Ra&&t===Aa?n="LinearDisplayP3ToLinearSRGB":e===Aa&&t===Ra&&(n="LinearSRGBToLinearDisplayP3"),i){case Ct:case _o:return[n,"LinearTransferOETF"];case pt:case Nc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Qu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Rx(i.getShaderSource(e),a)}else return s}function Px(i,e){let t=Cx(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Lx(i,e){let t;switch(e){case Rc:t="Linear";break;case Cc:t="Reinhard";break;case Pc:t="OptimizedCineon";break;case wr:t="ACESFilmic";break;case Lc:t="AgX";break;case Hp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ix(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ms).join(`
`)}function Dx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ms).join(`
`)}function Nx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ux(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ms(i){return i!==""}function ed(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function td(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Fx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ql(i){return i.replace(Fx,Bx)}var Ox=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Bx(i,e){let t=qe[e];if(t===void 0){let n=Ox.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ql(t)}var zx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nd(i){return i.replace(zx,kx)}function kx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function id(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Hx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Dd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ac?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Yn&&(e="SHADOWMAP_TYPE_VSM"),e}function Vx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case As:case Rs:e="ENVMAP_TYPE_CUBE";break;case mo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Gx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Rs:e="ENVMAP_MODE_REFRACTION";break}return e}function Wx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Nd:e="ENVMAP_BLENDING_MULTIPLY";break;case zp:e="ENVMAP_BLENDING_MIX";break;case kp:e="ENVMAP_BLENDING_ADD";break}return e}function Xx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function qx(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Hx(t),c=Vx(t),h=Gx(t),u=Wx(t),d=Xx(t),f=t.isWebGL2?"":Ix(t),g=Dx(t),_=Nx(r),m=s.createProgram(),p,y,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ms).join(`
`),p.length>0&&(p+=`
`),y=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ms).join(`
`),y.length>0&&(y+=`
`)):(p=[id(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),y=[f,id(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hi?"#define TONE_MAPPING":"",t.toneMapping!==hi?qe.tonemapping_pars_fragment:"",t.toneMapping!==hi?Lx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,Px("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ms).join(`
`)),a=Ql(a),a=ed(a,t),a=td(a,t),o=Ql(o),o=ed(o,t),o=td(o,t),a=nd(a),o=nd(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Mu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let b=x+p+a,C=x+y+o,T=$u(s,s.VERTEX_SHADER,b),A=$u(s,s.FRAGMENT_SHADER,C);s.attachShader(m,T),s.attachShader(m,A),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function U(W){if(i.debug.checkShaderErrors){let re=s.getProgramInfoLog(m).trim(),D=s.getShaderInfoLog(T).trim(),B=s.getShaderInfoLog(A).trim(),V=!0,j=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,T,A);else{let Z=Qu(s,T,"vertex"),X=Qu(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+re+`
`+Z+`
`+X)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(D===""||B==="")&&(j=!1);j&&(W.diagnostics={runnable:V,programLog:re,vertexShader:{log:D,prefix:p},fragmentShader:{log:B,prefix:y}})}s.deleteShader(T),s.deleteShader(A),M=new ws(s,m),w=Ux(s,m)}let M;this.getUniforms=function(){return M===void 0&&U(this),M};let w;this.getAttributes=function(){return w===void 0&&U(this),w};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(m,wx)),O},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ax++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=A,this}var Yx=0,ec=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new tc(e),t.set(e,n)),n}},tc=class{constructor(e){this.id=Yx++,this.code=e,this.usedTimes=0}};function Kx(i,e,t,n,s,r,a){let o=new Na,l=new ec,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function m(M,w,O,W,re){let D=W.fog,B=re.geometry,V=M.isMeshStandardMaterial?W.environment:null,j=(M.isMeshStandardMaterial?t:e).get(M.envMap||V),Z=j&&j.mapping===mo?j.image.height:null,X=g[M.type];M.precision!==null&&(f=s.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));let te=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ie=te!==void 0?te.length:0,_e=0;B.morphAttributes.position!==void 0&&(_e=1),B.morphAttributes.normal!==void 0&&(_e=2),B.morphAttributes.color!==void 0&&(_e=3);let G,ne,xe,we;if(X){let Yt=Ln[X];G=Yt.vertexShader,ne=Yt.fragmentShader}else G=M.vertexShader,ne=M.fragmentShader,l.update(M),xe=l.getVertexShaderID(M),we=l.getFragmentShaderID(M);let Me=i.getRenderTarget(),Ue=re.isInstancedMesh===!0,Oe=re.isBatchedMesh===!0,Te=!!M.map,Be=!!M.matcap,L=!!j,ce=!!M.aoMap,q=!!M.lightMap,ae=!!M.bumpMap,Y=!!M.normalMap,Ae=!!M.displacementMap,ve=!!M.emissiveMap,S=!!M.metalnessMap,v=!!M.roughnessMap,F=M.anisotropy>0,se=M.clearcoat>0,$=M.iridescence>0,J=M.sheen>0,Ee=M.transmission>0,ge=F&&!!M.anisotropyMap,ye=se&&!!M.clearcoatMap,Ie=se&&!!M.clearcoatNormalMap,Ve=se&&!!M.clearcoatRoughnessMap,Q=$&&!!M.iridescenceMap,je=$&&!!M.iridescenceThicknessMap,P=J&&!!M.sheenColorMap,ee=J&&!!M.sheenRoughnessMap,fe=!!M.specularMap,le=!!M.specularColorMap,Re=!!M.specularIntensityMap,Je=Ee&&!!M.transmissionMap,et=Ee&&!!M.thicknessMap,Ke=!!M.gradientMap,de=!!M.alphaMap,I=M.alphaTest>0,he=!!M.alphaHash,ue=!!M.extensions,De=!!B.attributes.uv1,Ce=!!B.attributes.uv2,nt=!!B.attributes.uv3,rt=hi;return M.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(rt=i.toneMapping),{isWebGL2:h,shaderID:X,shaderType:M.type,shaderName:M.name,vertexShader:G,fragmentShader:ne,defines:M.defines,customVertexShaderID:xe,customFragmentShaderID:we,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Oe,instancing:Ue,instancingColor:Ue&&re.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Me===null?i.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:Ct,map:Te,matcap:Be,envMap:L,envMapMode:L&&j.mapping,envMapCubeUVHeight:Z,aoMap:ce,lightMap:q,bumpMap:ae,normalMap:Y,displacementMap:d&&Ae,emissiveMap:ve,normalMapObjectSpace:Y&&M.normalMapType===em,normalMapTangentSpace:Y&&M.normalMapType===Xd,metalnessMap:S,roughnessMap:v,anisotropy:F,anisotropyMap:ge,clearcoat:se,clearcoatMap:ye,clearcoatNormalMap:Ie,clearcoatRoughnessMap:Ve,iridescence:$,iridescenceMap:Q,iridescenceThicknessMap:je,sheen:J,sheenColorMap:P,sheenRoughnessMap:ee,specularMap:fe,specularColorMap:le,specularIntensityMap:Re,transmission:Ee,transmissionMap:Je,thicknessMap:et,gradientMap:Ke,opaque:M.transparent===!1&&M.blending===Es,alphaMap:de,alphaTest:I,alphaHash:he,combine:M.combine,mapUv:Te&&_(M.map.channel),aoMapUv:ce&&_(M.aoMap.channel),lightMapUv:q&&_(M.lightMap.channel),bumpMapUv:ae&&_(M.bumpMap.channel),normalMapUv:Y&&_(M.normalMap.channel),displacementMapUv:Ae&&_(M.displacementMap.channel),emissiveMapUv:ve&&_(M.emissiveMap.channel),metalnessMapUv:S&&_(M.metalnessMap.channel),roughnessMapUv:v&&_(M.roughnessMap.channel),anisotropyMapUv:ge&&_(M.anisotropyMap.channel),clearcoatMapUv:ye&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:je&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:P&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:ee&&_(M.sheenRoughnessMap.channel),specularMapUv:fe&&_(M.specularMap.channel),specularColorMapUv:le&&_(M.specularColorMap.channel),specularIntensityMapUv:Re&&_(M.specularIntensityMap.channel),transmissionMapUv:Je&&_(M.transmissionMap.channel),thicknessMapUv:et&&_(M.thicknessMap.channel),alphaMapUv:de&&_(M.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Y||F),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:De,vertexUv2s:Ce,vertexUv3s:nt,pointsUvs:re.isPoints===!0&&!!B.attributes.uv&&(Te||de),fog:!!D,useFog:M.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:re.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:_e,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:rt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Te&&M.map.isVideoTexture===!0&&tt.getTransfer(M.map.colorSpace)===ot,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ut,flipSided:M.side===nn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ue&&M.extensions.derivatives===!0,extensionFragDepth:ue&&M.extensions.fragDepth===!0,extensionDrawBuffers:ue&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ue&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ue&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){let w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(let O in M.defines)w.push(O),w.push(M.defines[O]);return M.isRawShaderMaterial===!1&&(y(w,M),x(w,M),w.push(i.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function y(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function x(M,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),M.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function b(M){let w=g[M.type],O;if(w){let W=Ln[w];O=bi.clone(W.uniforms)}else O=M.uniforms;return O}function C(M,w){let O;for(let W=0,re=c.length;W<re;W++){let D=c[W];if(D.cacheKey===w){O=D,++O.usedTimes;break}}return O===void 0&&(O=new qx(i,w,M,r),c.push(O)),O}function T(M){if(--M.usedTimes===0){let w=c.indexOf(M);c[w]=c[c.length-1],c.pop(),M.destroy()}}function A(M){l.remove(M)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:C,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:U}}function Zx(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function jx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function sd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function rd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,f,g,_,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function o(u,d,f,g,_,m){let p=a(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,d,f,g,_,m){let p=a(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||jx),n.length>1&&n.sort(d||sd),s.length>1&&s.sort(d||sd)}function h(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Jx(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new rd,i.set(n,[a])):s>=r.length?(a=new rd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function $x(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Se};break;case"SpotLight":t={position:new R,direction:new R,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function Qx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new K,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var ev=0;function tv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function nv(i,e){let t=new $x,n=Qx(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new R);let r=new R,a=new ke,o=new ke;function l(h,u){let d=0,f=0,g=0;for(let W=0;W<9;W++)s.probe[W].set(0,0,0);let _=0,m=0,p=0,y=0,x=0,b=0,C=0,T=0,A=0,U=0,M=0;h.sort(tv);let w=u===!0?Math.PI:1;for(let W=0,re=h.length;W<re;W++){let D=h[W],B=D.color,V=D.intensity,j=D.distance,Z=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=B.r*V*w,f+=B.g*V*w,g+=B.b*V*w;else if(D.isLightProbe){for(let X=0;X<9;X++)s.probe[X].addScaledVector(D.sh.coefficients[X],V);M++}else if(D.isDirectionalLight){let X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity*w),D.castShadow){let te=D.shadow,ie=n.get(D);ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize=te.mapSize,s.directionalShadow[_]=ie,s.directionalShadowMap[_]=Z,s.directionalShadowMatrix[_]=D.shadow.matrix,b++}s.directional[_]=X,_++}else if(D.isSpotLight){let X=t.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(B).multiplyScalar(V*w),X.distance=j,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,s.spot[p]=X;let te=D.shadow;if(D.map&&(s.spotLightMap[A]=D.map,A++,te.updateMatrices(D),D.castShadow&&U++),s.spotLightMatrix[p]=te.matrix,D.castShadow){let ie=n.get(D);ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize=te.mapSize,s.spotShadow[p]=ie,s.spotShadowMap[p]=Z,T++}p++}else if(D.isRectAreaLight){let X=t.get(D);X.color.copy(B).multiplyScalar(V),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),s.rectArea[y]=X,y++}else if(D.isPointLight){let X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity*w),X.distance=D.distance,X.decay=D.decay,D.castShadow){let te=D.shadow,ie=n.get(D);ie.shadowBias=te.bias,ie.shadowNormalBias=te.normalBias,ie.shadowRadius=te.radius,ie.shadowMapSize=te.mapSize,ie.shadowCameraNear=te.camera.near,ie.shadowCameraFar=te.camera.far,s.pointShadow[m]=ie,s.pointShadowMap[m]=Z,s.pointShadowMatrix[m]=D.shadow.matrix,C++}s.point[m]=X,m++}else if(D.isHemisphereLight){let X=t.get(D);X.skyColor.copy(D.color).multiplyScalar(V*w),X.groundColor.copy(D.groundColor).multiplyScalar(V*w),s.hemi[x]=X,x++}}y>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=pe.LTC_FLOAT_1,s.rectAreaLTC2=pe.LTC_FLOAT_2):(s.rectAreaLTC1=pe.LTC_HALF_1,s.rectAreaLTC2=pe.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=pe.LTC_FLOAT_1,s.rectAreaLTC2=pe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=pe.LTC_HALF_1,s.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=g;let O=s.hash;(O.directionalLength!==_||O.pointLength!==m||O.spotLength!==p||O.rectAreaLength!==y||O.hemiLength!==x||O.numDirectionalShadows!==b||O.numPointShadows!==C||O.numSpotShadows!==T||O.numSpotMaps!==A||O.numLightProbes!==M)&&(s.directional.length=_,s.spot.length=p,s.rectArea.length=y,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=b,s.directionalShadowMap.length=b,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=b,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=T+A-U,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=M,O.directionalLength=_,O.pointLength=m,O.spotLength=p,O.rectAreaLength=y,O.hemiLength=x,O.numDirectionalShadows=b,O.numPointShadows=C,O.numSpotShadows=T,O.numSpotMaps=A,O.numLightProbes=M,s.version=ev++)}function c(h,u){let d=0,f=0,g=0,_=0,m=0,p=u.matrixWorldInverse;for(let y=0,x=h.length;y<x;y++){let b=h[y];if(b.isDirectionalLight){let C=s.directional[d];C.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(p),d++}else if(b.isSpotLight){let C=s.spot[g];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(p),g++}else if(b.isRectAreaLight){let C=s.rectArea[_];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(p),o.identity(),a.copy(b.matrixWorld),a.premultiply(p),o.extractRotation(a),C.halfWidth.set(b.width*.5,0,0),C.halfHeight.set(0,b.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){let C=s.point[f];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){let C=s.hemi[m];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:s}}function ad(i,e){let t=new nv(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function iv(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new ad(i,e),t.set(r,[l])):a>=o.length?(l=new ad(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var nc=class extends sn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$p,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ic=class extends sn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},sv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function av(i,e,t){let n=new cr,s=new K,r=new K,a=new lt,o=new nc({depthPacking:Qp}),l=new ic,c={},h=t.maxTextureSize,u={[Nn]:nn,[nn]:Nn,[Ut]:Ut},d=new Ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new K},radius:{value:4}},vertexShader:sv,fragmentShader:rv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new ct;g.setAttribute("position",new bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ne(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dd;let p=this.type;this.render=function(T,A,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let M=i.getRenderTarget(),w=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Dn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let re=p!==Yn&&this.type===Yn,D=p===Yn&&this.type!==Yn;for(let B=0,V=T.length;B<V;B++){let j=T[B],Z=j.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let X=Z.getFrameExtents();if(s.multiply(X),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,Z.mapSize.y=r.y)),Z.map===null||re===!0||D===!0){let ie=this.type!==Yn?{minFilter:Tt,magFilter:Tt}:{};Z.map!==null&&Z.map.dispose(),Z.map=new $t(s.x,s.y,ie),Z.map.texture.name=j.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();let te=Z.getViewportCount();for(let ie=0;ie<te;ie++){let _e=Z.getViewport(ie);a.set(r.x*_e.x,r.y*_e.y,r.x*_e.z,r.y*_e.w),W.viewport(a),Z.updateMatrices(j,ie),n=Z.getFrustum(),b(A,U,Z.camera,j,this.type)}Z.isPointLightShadow!==!0&&this.type===Yn&&y(Z,U),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,w,O)};function y(T,A){let U=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new $t(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,U,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,U,f,_,null)}function x(T,A,U,M){let w=null,O=U.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(O!==void 0)w=O;else if(w=U.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let W=w.uuid,re=A.uuid,D=c[W];D===void 0&&(D={},c[W]=D);let B=D[re];B===void 0&&(B=w.clone(),D[re]=B,A.addEventListener("dispose",C)),w=B}if(w.visible=A.visible,w.wireframe=A.wireframe,M===Yn?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:u[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,U.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let W=i.properties.get(w);W.light=U}return w}function b(T,A,U,M,w){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&w===Yn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,T.matrixWorld);let re=e.update(T),D=T.material;if(Array.isArray(D)){let B=re.groups;for(let V=0,j=B.length;V<j;V++){let Z=B[V],X=D[Z.materialIndex];if(X&&X.visible){let te=x(T,X,M,w);T.onBeforeShadow(i,T,A,U,re,te,Z),i.renderBufferDirect(U,null,re,te,T,Z),T.onAfterShadow(i,T,A,U,re,te,Z)}}}else if(D.visible){let B=x(T,D,M,w);T.onBeforeShadow(i,T,A,U,re,B,null),i.renderBufferDirect(U,null,re,B,T,null),T.onAfterShadow(i,T,A,U,re,B,null)}}let W=T.children;for(let re=0,D=W.length;re<D;re++)b(W[re],A,U,M,w)}function C(T){T.target.removeEventListener("dispose",C);for(let U in c){let M=c[U],w=T.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}function ov(i,e,t){let n=t.isWebGL2;function s(){let I=!1,he=new lt,ue=null,De=new lt(0,0,0,0);return{setMask:function(Ce){ue!==Ce&&!I&&(i.colorMask(Ce,Ce,Ce,Ce),ue=Ce)},setLocked:function(Ce){I=Ce},setClear:function(Ce,nt,rt,It,Yt){Yt===!0&&(Ce*=It,nt*=It,rt*=It),he.set(Ce,nt,rt,It),De.equals(he)===!1&&(i.clearColor(Ce,nt,rt,It),De.copy(he))},reset:function(){I=!1,ue=null,De.set(-1,0,0,0)}}}function r(){let I=!1,he=null,ue=null,De=null;return{setTest:function(Ce){Ce?Oe(i.DEPTH_TEST):Te(i.DEPTH_TEST)},setMask:function(Ce){he!==Ce&&!I&&(i.depthMask(Ce),he=Ce)},setFunc:function(Ce){if(ue!==Ce){switch(Ce){case Ip:i.depthFunc(i.NEVER);break;case Dp:i.depthFunc(i.ALWAYS);break;case Np:i.depthFunc(i.LESS);break;case Ea:i.depthFunc(i.LEQUAL);break;case Up:i.depthFunc(i.EQUAL);break;case Fp:i.depthFunc(i.GEQUAL);break;case Op:i.depthFunc(i.GREATER);break;case Bp:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ue=Ce}},setLocked:function(Ce){I=Ce},setClear:function(Ce){De!==Ce&&(i.clearDepth(Ce),De=Ce)},reset:function(){I=!1,he=null,ue=null,De=null}}}function a(){let I=!1,he=null,ue=null,De=null,Ce=null,nt=null,rt=null,It=null,Yt=null;return{setTest:function(ut){I||(ut?Oe(i.STENCIL_TEST):Te(i.STENCIL_TEST))},setMask:function(ut){he!==ut&&!I&&(i.stencilMask(ut),he=ut)},setFunc:function(ut,Kt,Pn){(ue!==ut||De!==Kt||Ce!==Pn)&&(i.stencilFunc(ut,Kt,Pn),ue=ut,De=Kt,Ce=Pn)},setOp:function(ut,Kt,Pn){(nt!==ut||rt!==Kt||It!==Pn)&&(i.stencilOp(ut,Kt,Pn),nt=ut,rt=Kt,It=Pn)},setLocked:function(ut){I=ut},setClear:function(ut){Yt!==ut&&(i.clearStencil(ut),Yt=ut)},reset:function(){I=!1,he=null,ue=null,De=null,Ce=null,nt=null,rt=null,It=null,Yt=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap,d={},f={},g=new WeakMap,_=[],m=null,p=!1,y=null,x=null,b=null,C=null,T=null,A=null,U=null,M=new Se(0,0,0),w=0,O=!1,W=null,re=null,D=null,B=null,V=null,j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,X=0,te=i.getParameter(i.VERSION);te.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(te)[1]),Z=X>=1):te.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),Z=X>=2);let ie=null,_e={},G=i.getParameter(i.SCISSOR_BOX),ne=i.getParameter(i.VIEWPORT),xe=new lt().fromArray(G),we=new lt().fromArray(ne);function Me(I,he,ue,De){let Ce=new Uint8Array(4),nt=i.createTexture();i.bindTexture(I,nt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let rt=0;rt<ue;rt++)n&&(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)?i.texImage3D(he,0,i.RGBA,1,1,De,0,i.RGBA,i.UNSIGNED_BYTE,Ce):i.texImage2D(he+rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ce);return nt}let Ue={};Ue[i.TEXTURE_2D]=Me(i.TEXTURE_2D,i.TEXTURE_2D,1),Ue[i.TEXTURE_CUBE_MAP]=Me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ue[i.TEXTURE_2D_ARRAY]=Me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ue[i.TEXTURE_3D]=Me(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Oe(i.DEPTH_TEST),l.setFunc(Ea),ve(!1),S(Hh),Oe(i.CULL_FACE),Y(Dn);function Oe(I){d[I]!==!0&&(i.enable(I),d[I]=!0)}function Te(I){d[I]!==!1&&(i.disable(I),d[I]=!1)}function Be(I,he){return f[I]!==he?(i.bindFramebuffer(I,he),f[I]=he,n&&(I===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=he),I===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=he)),!0):!1}function L(I,he){let ue=_,De=!1;if(I)if(ue=g.get(he),ue===void 0&&(ue=[],g.set(he,ue)),I.isWebGLMultipleRenderTargets){let Ce=I.texture;if(ue.length!==Ce.length||ue[0]!==i.COLOR_ATTACHMENT0){for(let nt=0,rt=Ce.length;nt<rt;nt++)ue[nt]=i.COLOR_ATTACHMENT0+nt;ue.length=Ce.length,De=!0}}else ue[0]!==i.COLOR_ATTACHMENT0&&(ue[0]=i.COLOR_ATTACHMENT0,De=!0);else ue[0]!==i.BACK&&(ue[0]=i.BACK,De=!0);De&&(t.isWebGL2?i.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function ce(I){return m!==I?(i.useProgram(I),m=I,!0):!1}let q={[Ni]:i.FUNC_ADD,[_p]:i.FUNC_SUBTRACT,[xp]:i.FUNC_REVERSE_SUBTRACT};if(n)q[Wh]=i.MIN,q[Xh]=i.MAX;else{let I=e.get("EXT_blend_minmax");I!==null&&(q[Wh]=I.MIN_EXT,q[Xh]=I.MAX_EXT)}let ae={[vp]:i.ZERO,[yp]:i.ONE,[bp]:i.SRC_COLOR,[zl]:i.SRC_ALPHA,[Ap]:i.SRC_ALPHA_SATURATE,[Tp]:i.DST_COLOR,[Sp]:i.DST_ALPHA,[Mp]:i.ONE_MINUS_SRC_COLOR,[kl]:i.ONE_MINUS_SRC_ALPHA,[wp]:i.ONE_MINUS_DST_COLOR,[Ep]:i.ONE_MINUS_DST_ALPHA,[Rp]:i.CONSTANT_COLOR,[Cp]:i.ONE_MINUS_CONSTANT_COLOR,[Pp]:i.CONSTANT_ALPHA,[Lp]:i.ONE_MINUS_CONSTANT_ALPHA};function Y(I,he,ue,De,Ce,nt,rt,It,Yt,ut){if(I===Dn){p===!0&&(Te(i.BLEND),p=!1);return}if(p===!1&&(Oe(i.BLEND),p=!0),I!==gp){if(I!==y||ut!==O){if((x!==Ni||T!==Ni)&&(i.blendEquation(i.FUNC_ADD),x=Ni,T=Ni),ut)switch(I){case Es:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sa:i.blendFunc(i.ONE,i.ONE);break;case Vh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Vh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Gh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,C=null,A=null,U=null,M.set(0,0,0),w=0,y=I,O=ut}return}Ce=Ce||he,nt=nt||ue,rt=rt||De,(he!==x||Ce!==T)&&(i.blendEquationSeparate(q[he],q[Ce]),x=he,T=Ce),(ue!==b||De!==C||nt!==A||rt!==U)&&(i.blendFuncSeparate(ae[ue],ae[De],ae[nt],ae[rt]),b=ue,C=De,A=nt,U=rt),(It.equals(M)===!1||Yt!==w)&&(i.blendColor(It.r,It.g,It.b,Yt),M.copy(It),w=Yt),y=I,O=!1}function Ae(I,he){I.side===Ut?Te(i.CULL_FACE):Oe(i.CULL_FACE);let ue=I.side===nn;he&&(ue=!ue),ve(ue),I.blending===Es&&I.transparent===!1?Y(Dn):Y(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);let De=I.stencilWrite;c.setTest(De),De&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),F(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Oe(i.SAMPLE_ALPHA_TO_COVERAGE):Te(i.SAMPLE_ALPHA_TO_COVERAGE)}function ve(I){W!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),W=I)}function S(I){I!==pp?(Oe(i.CULL_FACE),I!==re&&(I===Hh?i.cullFace(i.BACK):I===mp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Te(i.CULL_FACE),re=I}function v(I){I!==D&&(Z&&i.lineWidth(I),D=I)}function F(I,he,ue){I?(Oe(i.POLYGON_OFFSET_FILL),(B!==he||V!==ue)&&(i.polygonOffset(he,ue),B=he,V=ue)):Te(i.POLYGON_OFFSET_FILL)}function se(I){I?Oe(i.SCISSOR_TEST):Te(i.SCISSOR_TEST)}function $(I){I===void 0&&(I=i.TEXTURE0+j-1),ie!==I&&(i.activeTexture(I),ie=I)}function J(I,he,ue){ue===void 0&&(ie===null?ue=i.TEXTURE0+j-1:ue=ie);let De=_e[ue];De===void 0&&(De={type:void 0,texture:void 0},_e[ue]=De),(De.type!==I||De.texture!==he)&&(ie!==ue&&(i.activeTexture(ue),ie=ue),i.bindTexture(I,he||Ue[I]),De.type=I,De.texture=he)}function Ee(){let I=_e[ie];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ge(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ie(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ve(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function je(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function P(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(I){xe.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),xe.copy(I))}function Je(I){we.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),we.copy(I))}function et(I,he){let ue=u.get(he);ue===void 0&&(ue=new WeakMap,u.set(he,ue));let De=ue.get(I);De===void 0&&(De=i.getUniformBlockIndex(he,I.name),ue.set(I,De))}function Ke(I,he){let De=u.get(he).get(I);h.get(he)!==De&&(i.uniformBlockBinding(he,De,I.__bindingPointIndex),h.set(he,De))}function de(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ie=null,_e={},f={},g=new WeakMap,_=[],m=null,p=!1,y=null,x=null,b=null,C=null,T=null,A=null,U=null,M=new Se(0,0,0),w=0,O=!1,W=null,re=null,D=null,B=null,V=null,xe.set(0,0,i.canvas.width,i.canvas.height),we.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Oe,disable:Te,bindFramebuffer:Be,drawBuffers:L,useProgram:ce,setBlending:Y,setMaterial:Ae,setFlipSided:ve,setCullFace:S,setLineWidth:v,setPolygonOffset:F,setScissorTest:se,activeTexture:$,bindTexture:J,unbindTexture:Ee,compressedTexImage2D:ge,compressedTexImage3D:ye,texImage2D:fe,texImage3D:le,updateUBOMapping:et,uniformBlockBinding:Ke,texStorage2D:P,texStorage3D:ee,texSubImage2D:Ie,texSubImage3D:Ve,compressedTexSubImage2D:Q,compressedTexSubImage3D:je,scissor:Re,viewport:Je,reset:de}}function lv(i,e,t,n,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,v){return f?new OffscreenCanvas(S,v):lr("canvas")}function _(S,v,F,se){let $=1;if((S.width>se||S.height>se)&&($=se/Math.max(S.width,S.height)),$<1||v===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){let J=v?Pa:Math.floor,Ee=J($*S.width),ge=J($*S.height);u===void 0&&(u=g(Ee,ge));let ye=F?g(Ee,ge):u;return ye.width=Ee,ye.height=ge,ye.getContext("2d").drawImage(S,0,0,Ee,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+Ee+"x"+ge+")."),ye}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function m(S){return Xl(S.width)&&Xl(S.height)}function p(S){return o?!1:S.wrapS!==cn||S.wrapT!==cn||S.minFilter!==Tt&&S.minFilter!==Jt}function y(S,v){return S.generateMipmaps&&v&&S.minFilter!==Tt&&S.minFilter!==Jt}function x(S){i.generateMipmap(S)}function b(S,v,F,se,$=!1){if(o===!1)return v;if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let J=v;if(v===i.RED&&(F===i.FLOAT&&(J=i.R32F),F===i.HALF_FLOAT&&(J=i.R16F),F===i.UNSIGNED_BYTE&&(J=i.R8)),v===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(J=i.R8UI),F===i.UNSIGNED_SHORT&&(J=i.R16UI),F===i.UNSIGNED_INT&&(J=i.R32UI),F===i.BYTE&&(J=i.R8I),F===i.SHORT&&(J=i.R16I),F===i.INT&&(J=i.R32I)),v===i.RG&&(F===i.FLOAT&&(J=i.RG32F),F===i.HALF_FLOAT&&(J=i.RG16F),F===i.UNSIGNED_BYTE&&(J=i.RG8)),v===i.RGBA){let Ee=$?wa:tt.getTransfer(se);F===i.FLOAT&&(J=i.RGBA32F),F===i.HALF_FLOAT&&(J=i.RGBA16F),F===i.UNSIGNED_BYTE&&(J=Ee===ot?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function C(S,v,F){return y(S,F)===!0||S.isFramebufferTexture&&S.minFilter!==Tt&&S.minFilter!==Jt?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function T(S){return S===Tt||S===Ta||S===Qs?i.NEAREST:i.LINEAR}function A(S){let v=S.target;v.removeEventListener("dispose",A),M(v),v.isVideoTexture&&h.delete(v)}function U(S){let v=S.target;v.removeEventListener("dispose",U),O(v)}function M(S){let v=n.get(S);if(v.__webglInit===void 0)return;let F=S.source,se=d.get(F);if(se){let $=se[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&w(S),Object.keys(se).length===0&&d.delete(F)}n.remove(S)}function w(S){let v=n.get(S);i.deleteTexture(v.__webglTexture);let F=S.source,se=d.get(F);delete se[v.__cacheKey],a.memory.textures--}function O(S){let v=S.texture,F=n.get(S),se=n.get(v);if(se.__webglTexture!==void 0&&(i.deleteTexture(se.__webglTexture),a.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(F.__webglFramebuffer[$]))for(let J=0;J<F.__webglFramebuffer[$].length;J++)i.deleteFramebuffer(F.__webglFramebuffer[$][J]);else i.deleteFramebuffer(F.__webglFramebuffer[$]);F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer[$])}else{if(Array.isArray(F.__webglFramebuffer))for(let $=0;$<F.__webglFramebuffer.length;$++)i.deleteFramebuffer(F.__webglFramebuffer[$]);else i.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&i.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let $=0;$<F.__webglColorRenderbuffer.length;$++)F.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(F.__webglColorRenderbuffer[$]);F.__webglDepthRenderbuffer&&i.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let $=0,J=v.length;$<J;$++){let Ee=n.get(v[$]);Ee.__webglTexture&&(i.deleteTexture(Ee.__webglTexture),a.memory.textures--),n.remove(v[$])}n.remove(v),n.remove(S)}let W=0;function re(){W=0}function D(){let S=W;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),W+=1,S}function B(S){let v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function V(S,v){let F=n.get(S);if(S.isVideoTexture&&Ae(S),S.isRenderTargetTexture===!1&&S.version>0&&F.__version!==S.version){let se=S.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(F,S,v);return}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+v)}function j(S,v){let F=n.get(S);if(S.version>0&&F.__version!==S.version){xe(F,S,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+v)}function Z(S,v){let F=n.get(S);if(S.version>0&&F.__version!==S.version){xe(F,S,v);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+v)}function X(S,v){let F=n.get(S);if(S.version>0&&F.__version!==S.version){we(F,S,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+v)}let te={[jn]:i.REPEAT,[cn]:i.CLAMP_TO_EDGE,[or]:i.MIRRORED_REPEAT},ie={[Tt]:i.NEAREST,[Ta]:i.NEAREST_MIPMAP_NEAREST,[Qs]:i.NEAREST_MIPMAP_LINEAR,[Jt]:i.LINEAR,[Ic]:i.LINEAR_MIPMAP_NEAREST,[di]:i.LINEAR_MIPMAP_LINEAR},_e={[tm]:i.NEVER,[om]:i.ALWAYS,[nm]:i.LESS,[qd]:i.LEQUAL,[im]:i.EQUAL,[am]:i.GEQUAL,[sm]:i.GREATER,[rm]:i.NOTEQUAL};function G(S,v,F){if(F?(i.texParameteri(S,i.TEXTURE_WRAP_S,te[v.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,te[v.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,te[v.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,ie[v.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,ie[v.minFilter])):(i.texParameteri(S,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(S,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(v.wrapS!==cn||v.wrapT!==cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(S,i.TEXTURE_MAG_FILTER,T(v.magFilter)),i.texParameteri(S,i.TEXTURE_MIN_FILTER,T(v.minFilter)),v.minFilter!==Tt&&v.minFilter!==Jt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,_e[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let se=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Tt||v.minFilter!==Qs&&v.minFilter!==di||v.type===Kn&&e.has("OES_texture_float_linear")===!1||o===!1&&v.type===wn&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(i.texParameterf(S,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function ne(S,v){let F=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",A));let se=v.source,$=d.get(se);$===void 0&&($={},d.set(se,$));let J=B(v);if(J!==S.__cacheKey){$[J]===void 0&&($[J]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),$[J].usedTimes++;let Ee=$[S.__cacheKey];Ee!==void 0&&($[S.__cacheKey].usedTimes--,Ee.usedTimes===0&&w(v)),S.__cacheKey=J,S.__webglTexture=$[J].texture}return F}function xe(S,v,F){let se=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(se=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(se=i.TEXTURE_3D);let $=ne(S,v),J=v.source;t.bindTexture(se,S.__webglTexture,i.TEXTURE0+F);let Ee=n.get(J);if(J.version!==Ee.__version||$===!0){t.activeTexture(i.TEXTURE0+F);let ge=tt.getPrimaries(tt.workingColorSpace),ye=v.colorSpace===mn?null:tt.getPrimaries(v.colorSpace),Ie=v.colorSpace===mn||ge===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let Ve=p(v)&&m(v.image)===!1,Q=_(v.image,Ve,!1,s.maxTextureSize);Q=ve(v,Q);let je=m(Q)||o,P=r.convert(v.format,v.colorSpace),ee=r.convert(v.type),fe=b(v.internalFormat,P,ee,v.colorSpace,v.isVideoTexture);G(se,v,je);let le,Re=v.mipmaps,Je=o&&v.isVideoTexture!==!0&&fe!==Vd,et=Ee.__version===void 0||$===!0,Ke=C(v,Q,je);if(v.isDepthTexture)fe=i.DEPTH_COMPONENT,o?v.type===Kn?fe=i.DEPTH_COMPONENT32F:v.type===li?fe=i.DEPTH_COMPONENT24:v.type===Oi?fe=i.DEPTH24_STENCIL8:fe=i.DEPTH_COMPONENT16:v.type===Kn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Bi&&fe===i.DEPTH_COMPONENT&&v.type!==Dc&&v.type!==li&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=li,ee=r.convert(v.type)),v.format===Cs&&fe===i.DEPTH_COMPONENT&&(fe=i.DEPTH_STENCIL,v.type!==Oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Oi,ee=r.convert(v.type))),et&&(Je?t.texStorage2D(i.TEXTURE_2D,1,fe,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,fe,Q.width,Q.height,0,P,ee,null));else if(v.isDataTexture)if(Re.length>0&&je){Je&&et&&t.texStorage2D(i.TEXTURE_2D,Ke,fe,Re[0].width,Re[0].height);for(let de=0,I=Re.length;de<I;de++)le=Re[de],Je?t.texSubImage2D(i.TEXTURE_2D,de,0,0,le.width,le.height,P,ee,le.data):t.texImage2D(i.TEXTURE_2D,de,fe,le.width,le.height,0,P,ee,le.data);v.generateMipmaps=!1}else Je?(et&&t.texStorage2D(i.TEXTURE_2D,Ke,fe,Q.width,Q.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,P,ee,Q.data)):t.texImage2D(i.TEXTURE_2D,0,fe,Q.width,Q.height,0,P,ee,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Je&&et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ke,fe,Re[0].width,Re[0].height,Q.depth);for(let de=0,I=Re.length;de<I;de++)le=Re[de],v.format!==pn?P!==null?Je?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,le.width,le.height,Q.depth,P,le.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,de,fe,le.width,le.height,Q.depth,0,le.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?t.texSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,le.width,le.height,Q.depth,P,ee,le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,de,fe,le.width,le.height,Q.depth,0,P,ee,le.data)}else{Je&&et&&t.texStorage2D(i.TEXTURE_2D,Ke,fe,Re[0].width,Re[0].height);for(let de=0,I=Re.length;de<I;de++)le=Re[de],v.format!==pn?P!==null?Je?t.compressedTexSubImage2D(i.TEXTURE_2D,de,0,0,le.width,le.height,P,le.data):t.compressedTexImage2D(i.TEXTURE_2D,de,fe,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?t.texSubImage2D(i.TEXTURE_2D,de,0,0,le.width,le.height,P,ee,le.data):t.texImage2D(i.TEXTURE_2D,de,fe,le.width,le.height,0,P,ee,le.data)}else if(v.isDataArrayTexture)Je?(et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ke,fe,Q.width,Q.height,Q.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,P,ee,Q.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,fe,Q.width,Q.height,Q.depth,0,P,ee,Q.data);else if(v.isData3DTexture)Je?(et&&t.texStorage3D(i.TEXTURE_3D,Ke,fe,Q.width,Q.height,Q.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,P,ee,Q.data)):t.texImage3D(i.TEXTURE_3D,0,fe,Q.width,Q.height,Q.depth,0,P,ee,Q.data);else if(v.isFramebufferTexture){if(et)if(Je)t.texStorage2D(i.TEXTURE_2D,Ke,fe,Q.width,Q.height);else{let de=Q.width,I=Q.height;for(let he=0;he<Ke;he++)t.texImage2D(i.TEXTURE_2D,he,fe,de,I,0,P,ee,null),de>>=1,I>>=1}}else if(Re.length>0&&je){Je&&et&&t.texStorage2D(i.TEXTURE_2D,Ke,fe,Re[0].width,Re[0].height);for(let de=0,I=Re.length;de<I;de++)le=Re[de],Je?t.texSubImage2D(i.TEXTURE_2D,de,0,0,P,ee,le):t.texImage2D(i.TEXTURE_2D,de,fe,P,ee,le);v.generateMipmaps=!1}else Je?(et&&t.texStorage2D(i.TEXTURE_2D,Ke,fe,Q.width,Q.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,P,ee,Q)):t.texImage2D(i.TEXTURE_2D,0,fe,P,ee,Q);y(v,je)&&x(se),Ee.__version=J.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function we(S,v,F){if(v.image.length!==6)return;let se=ne(S,v),$=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+F);let J=n.get($);if($.version!==J.__version||se===!0){t.activeTexture(i.TEXTURE0+F);let Ee=tt.getPrimaries(tt.workingColorSpace),ge=v.colorSpace===mn?null:tt.getPrimaries(v.colorSpace),ye=v.colorSpace===mn||Ee===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let Ie=v.isCompressedTexture||v.image[0].isCompressedTexture,Ve=v.image[0]&&v.image[0].isDataTexture,Q=[];for(let de=0;de<6;de++)!Ie&&!Ve?Q[de]=_(v.image[de],!1,!0,s.maxCubemapSize):Q[de]=Ve?v.image[de].image:v.image[de],Q[de]=ve(v,Q[de]);let je=Q[0],P=m(je)||o,ee=r.convert(v.format,v.colorSpace),fe=r.convert(v.type),le=b(v.internalFormat,ee,fe,v.colorSpace),Re=o&&v.isVideoTexture!==!0,Je=J.__version===void 0||se===!0,et=C(v,je,P);G(i.TEXTURE_CUBE_MAP,v,P);let Ke;if(Ie){Re&&Je&&t.texStorage2D(i.TEXTURE_CUBE_MAP,et,le,je.width,je.height);for(let de=0;de<6;de++){Ke=Q[de].mipmaps;for(let I=0;I<Ke.length;I++){let he=Ke[I];v.format!==pn?ee!==null?Re?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,I,0,0,he.width,he.height,ee,he.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,I,le,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,I,0,0,he.width,he.height,ee,fe,he.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,I,le,he.width,he.height,0,ee,fe,he.data)}}}else{Ke=v.mipmaps,Re&&Je&&(Ke.length>0&&et++,t.texStorage2D(i.TEXTURE_CUBE_MAP,et,le,Q[0].width,Q[0].height));for(let de=0;de<6;de++)if(Ve){Re?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Q[de].width,Q[de].height,ee,fe,Q[de].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,le,Q[de].width,Q[de].height,0,ee,fe,Q[de].data);for(let I=0;I<Ke.length;I++){let ue=Ke[I].image[de].image;Re?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,I+1,0,0,ue.width,ue.height,ee,fe,ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,I+1,le,ue.width,ue.height,0,ee,fe,ue.data)}}else{Re?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,ee,fe,Q[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,le,ee,fe,Q[de]);for(let I=0;I<Ke.length;I++){let he=Ke[I];Re?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,I+1,0,0,ee,fe,he.image[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,I+1,le,ee,fe,he.image[de])}}}y(v,P)&&x(i.TEXTURE_CUBE_MAP),J.__version=$.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function Me(S,v,F,se,$,J){let Ee=r.convert(F.format,F.colorSpace),ge=r.convert(F.type),ye=b(F.internalFormat,Ee,ge,F.colorSpace);if(!n.get(v).__hasExternalTextures){let Ve=Math.max(1,v.width>>J),Q=Math.max(1,v.height>>J);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,J,ye,Ve,Q,v.depth,0,Ee,ge,null):t.texImage2D($,J,ye,Ve,Q,0,Ee,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),Y(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,$,n.get(F).__webglTexture,0,ae(v)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,se,$,n.get(F).__webglTexture,J),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(S,v,F){if(i.bindRenderbuffer(i.RENDERBUFFER,S),v.depthBuffer&&!v.stencilBuffer){let se=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(F||Y(v)){let $=v.depthTexture;$&&$.isDepthTexture&&($.type===Kn?se=i.DEPTH_COMPONENT32F:$.type===li&&(se=i.DEPTH_COMPONENT24));let J=ae(v);Y(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,J,se,v.width,v.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,J,se,v.width,v.height)}else i.renderbufferStorage(i.RENDERBUFFER,se,v.width,v.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,S)}else if(v.depthBuffer&&v.stencilBuffer){let se=ae(v);F&&Y(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,se,i.DEPTH24_STENCIL8,v.width,v.height):Y(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,i.DEPTH24_STENCIL8,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,S)}else{let se=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let $=0;$<se.length;$++){let J=se[$],Ee=r.convert(J.format,J.colorSpace),ge=r.convert(J.type),ye=b(J.internalFormat,Ee,ge,J.colorSpace),Ie=ae(v);F&&Y(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,ye,v.width,v.height):Y(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie,ye,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ye,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Oe(S,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),V(v.depthTexture,0);let se=n.get(v.depthTexture).__webglTexture,$=ae(v);if(v.depthTexture.format===Bi)Y(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0);else if(v.depthTexture.format===Cs)Y(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Te(S){let v=n.get(S),F=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Oe(v.__webglFramebuffer,S)}else if(F){v.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[se]),v.__webglDepthbuffer[se]=i.createRenderbuffer(),Ue(v.__webglDepthbuffer[se],S,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),Ue(v.__webglDepthbuffer,S,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(S,v,F){let se=n.get(S);v!==void 0&&Me(se.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Te(S)}function L(S){let v=S.texture,F=n.get(S),se=n.get(v);S.addEventListener("dispose",U),S.isWebGLMultipleRenderTargets!==!0&&(se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture()),se.__version=v.version,a.memory.textures++);let $=S.isWebGLCubeRenderTarget===!0,J=S.isWebGLMultipleRenderTargets===!0,Ee=m(S)||o;if($){F.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(o&&v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[ge]=[];for(let ye=0;ye<v.mipmaps.length;ye++)F.__webglFramebuffer[ge][ye]=i.createFramebuffer()}else F.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(o&&v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let ge=0;ge<v.mipmaps.length;ge++)F.__webglFramebuffer[ge]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(J)if(s.drawBuffers){let ge=S.texture;for(let ye=0,Ie=ge.length;ye<Ie;ye++){let Ve=n.get(ge[ye]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&S.samples>0&&Y(S)===!1){let ge=J?v:[v];F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ye=0;ye<ge.length;ye++){let Ie=ge[ye];F.__webglColorRenderbuffer[ye]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ye]);let Ve=r.convert(Ie.format,Ie.colorSpace),Q=r.convert(Ie.type),je=b(Ie.internalFormat,Ve,Q,Ie.colorSpace,S.isXRRenderTarget===!0),P=ae(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,P,je,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,F.__webglColorRenderbuffer[ye])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Ue(F.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),G(i.TEXTURE_CUBE_MAP,v,Ee);for(let ge=0;ge<6;ge++)if(o&&v.mipmaps&&v.mipmaps.length>0)for(let ye=0;ye<v.mipmaps.length;ye++)Me(F.__webglFramebuffer[ge][ye],S,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ye);else Me(F.__webglFramebuffer[ge],S,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);y(v,Ee)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(J){let ge=S.texture;for(let ye=0,Ie=ge.length;ye<Ie;ye++){let Ve=ge[ye],Q=n.get(Ve);t.bindTexture(i.TEXTURE_2D,Q.__webglTexture),G(i.TEXTURE_2D,Ve,Ee),Me(F.__webglFramebuffer,S,Ve,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,0),y(Ve,Ee)&&x(i.TEXTURE_2D)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(o?ge=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ge,se.__webglTexture),G(ge,v,Ee),o&&v.mipmaps&&v.mipmaps.length>0)for(let ye=0;ye<v.mipmaps.length;ye++)Me(F.__webglFramebuffer[ye],S,v,i.COLOR_ATTACHMENT0,ge,ye);else Me(F.__webglFramebuffer,S,v,i.COLOR_ATTACHMENT0,ge,0);y(v,Ee)&&x(ge),t.unbindTexture()}S.depthBuffer&&Te(S)}function ce(S){let v=m(S)||o,F=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let se=0,$=F.length;se<$;se++){let J=F[se];if(y(J,v)){let Ee=S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ge=n.get(J).__webglTexture;t.bindTexture(Ee,ge),x(Ee),t.unbindTexture()}}}function q(S){if(o&&S.samples>0&&Y(S)===!1){let v=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],F=S.width,se=S.height,$=i.COLOR_BUFFER_BIT,J=[],Ee=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(S),ye=S.isWebGLMultipleRenderTargets===!0;if(ye)for(let Ie=0;Ie<v.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Ie=0;Ie<v.length;Ie++){J.push(i.COLOR_ATTACHMENT0+Ie),S.depthBuffer&&J.push(Ee);let Ve=ge.__ignoreDepthValues!==void 0?ge.__ignoreDepthValues:!1;if(Ve===!1&&(S.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),ye&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[Ie]),Ve===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ee]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ee])),ye){let Q=n.get(v[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,F,se,0,0,F,se,$,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,J)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ye)for(let Ie=0;Ie<v.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,ge.__webglColorRenderbuffer[Ie]);let Ve=n.get(v[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,Ve,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}}function ae(S){return Math.min(s.maxSamples,S.samples)}function Y(S){let v=n.get(S);return o&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ae(S){let v=a.render.frame;h.get(S)!==v&&(h.set(S,v),S.update())}function ve(S,v){let F=S.colorSpace,se=S.format,$=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Wl||F!==Ct&&F!==mn&&(tt.getTransfer(F)===ot?o===!1?e.has("EXT_sRGB")===!0&&se===pn?(S.format=Wl,S.minFilter=Jt,S.generateMipmaps=!1):v=La.sRGBToLinear(v):(se!==pn||$!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}this.allocateTextureUnit=D,this.resetTextureUnits=re,this.setTexture2D=V,this.setTexture2DArray=j,this.setTexture3D=Z,this.setTextureCube=X,this.rebindTextures=Be,this.setupRenderTarget=L,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Y}function cv(i,e,t){let n=t.isWebGL2;function s(r,a=mn){let o,l=tt.getTransfer(a);if(r===ui)return i.UNSIGNED_BYTE;if(r===Od)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Bd)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Gp)return i.BYTE;if(r===Wp)return i.SHORT;if(r===Dc)return i.UNSIGNED_SHORT;if(r===Fd)return i.INT;if(r===li)return i.UNSIGNED_INT;if(r===Kn)return i.FLOAT;if(r===wn)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Xp)return i.ALPHA;if(r===pn)return i.RGBA;if(r===qp)return i.LUMINANCE;if(r===Yp)return i.LUMINANCE_ALPHA;if(r===Bi)return i.DEPTH_COMPONENT;if(r===Cs)return i.DEPTH_STENCIL;if(r===Wl)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Kp)return i.RED;if(r===zd)return i.RED_INTEGER;if(r===Zp)return i.RG;if(r===kd)return i.RG_INTEGER;if(r===Hd)return i.RGBA_INTEGER;if(r===nl||r===il||r===sl||r===rl)if(l===ot)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===nl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===il)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===sl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===rl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===nl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===il)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===sl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===rl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Yh||r===Kh||r===Zh||r===jh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Yh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Kh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Zh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===jh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Vd)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Jh||r===$h)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Jh)return l===ot?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===$h)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Qh||r===eu||r===tu||r===nu||r===iu||r===su||r===ru||r===au||r===ou||r===lu||r===cu||r===hu||r===uu||r===du)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Qh)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===eu)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===tu)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===nu)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===iu)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===su)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ru)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===au)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ou)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===lu)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===cu)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===hu)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===uu)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===du)return l===ot?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===al||r===fu||r===pu)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===al)return l===ot?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===fu)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===pu)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===jp||r===mu||r===gu||r===_u)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===al)return o.COMPRESSED_RED_RGTC1_EXT;if(r===mu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===gu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===_u)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Oi?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var sc=class extends At{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Rt=class extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}},hv={type:"move"},ir=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hv)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Rt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},rc=class extends Un{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,_=t.getContextAttributes(),m=null,p=null,y=[],x=[],b=new K,C=null,T=new At;T.layers.enable(1),T.viewport=new lt;let A=new At;A.layers.enable(2),A.viewport=new lt;let U=[T,A],M=new sc;M.layers.enable(1),M.layers.enable(2);let w=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let ne=y[G];return ne===void 0&&(ne=new ir,y[G]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(G){let ne=y[G];return ne===void 0&&(ne=new ir,y[G]=ne),ne.getGripSpace()},this.getHand=function(G){let ne=y[G];return ne===void 0&&(ne=new ir,y[G]=ne),ne.getHandSpace()};function W(G){let ne=x.indexOf(G.inputSource);if(ne===-1)return;let xe=y[ne];xe!==void 0&&(xe.update(G.inputSource,G.frame,c||a),xe.dispatchEvent({type:G.type,data:G.inputSource}))}function re(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",re),s.removeEventListener("inputsourceschange",D);for(let G=0;G<y.length;G++){let ne=x[G];ne!==null&&(x[G]=null,y[G].disconnect(ne))}w=null,O=null,e.setRenderTarget(m),f=null,d=null,u=null,s=null,p=null,_e.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",re),s.addEventListener("inputsourceschange",D),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(b),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ne={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new $t(f.framebufferWidth,f.framebufferHeight,{format:pn,type:ui,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ne=null,xe=null,we=null;_.depth&&(we=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=_.stencil?Cs:Bi,xe=_.stencil?Oi:li);let Me={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Me),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),p=new $t(d.textureWidth,d.textureHeight,{format:pn,type:ui,depthTexture:new ka(d.textureWidth,d.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let Ue=e.properties.get(p);Ue.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),_e.setContext(s),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function D(G){for(let ne=0;ne<G.removed.length;ne++){let xe=G.removed[ne],we=x.indexOf(xe);we>=0&&(x[we]=null,y[we].disconnect(xe))}for(let ne=0;ne<G.added.length;ne++){let xe=G.added[ne],we=x.indexOf(xe);if(we===-1){for(let Ue=0;Ue<y.length;Ue++)if(Ue>=x.length){x.push(xe),we=Ue;break}else if(x[Ue]===null){x[Ue]=xe,we=Ue;break}if(we===-1)break}let Me=y[we];Me&&Me.connect(xe)}}let B=new R,V=new R;function j(G,ne,xe){B.setFromMatrixPosition(ne.matrixWorld),V.setFromMatrixPosition(xe.matrixWorld);let we=B.distanceTo(V),Me=ne.projectionMatrix.elements,Ue=xe.projectionMatrix.elements,Oe=Me[14]/(Me[10]-1),Te=Me[14]/(Me[10]+1),Be=(Me[9]+1)/Me[5],L=(Me[9]-1)/Me[5],ce=(Me[8]-1)/Me[0],q=(Ue[8]+1)/Ue[0],ae=Oe*ce,Y=Oe*q,Ae=we/(-ce+q),ve=Ae*-ce;ne.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ve),G.translateZ(Ae),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();let S=Oe+Ae,v=Te+Ae,F=ae-ve,se=Y+(we-ve),$=Be*Te/v*S,J=L*Te/v*S;G.projectionMatrix.makePerspective(F,se,$,J,S,v),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function Z(G,ne){ne===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(ne.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;M.near=A.near=T.near=G.near,M.far=A.far=T.far=G.far,(w!==M.near||O!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,O=M.far);let ne=G.parent,xe=M.cameras;Z(M,ne);for(let we=0;we<xe.length;we++)Z(xe[we],ne);xe.length===2?j(M,T,A):M.projectionMatrix.copy(T.projectionMatrix),X(G,M,ne)};function X(G,ne,xe){xe===null?G.matrix.copy(ne.matrixWorld):(G.matrix.copy(xe.matrixWorld),G.matrix.invert(),G.matrix.multiply(ne.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(ne.projectionMatrix),G.projectionMatrixInverse.copy(ne.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Ls*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)};let te=null;function ie(G,ne){if(h=ne.getViewerPose(c||a),g=ne,h!==null){let xe=h.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let we=!1;xe.length!==M.cameras.length&&(M.cameras.length=0,we=!0);for(let Me=0;Me<xe.length;Me++){let Ue=xe[Me],Oe=null;if(f!==null)Oe=f.getViewport(Ue);else{let Be=u.getViewSubImage(d,Ue);Oe=Be.viewport,Me===0&&(e.setRenderTargetTextures(p,Be.colorTexture,d.ignoreDepthValues?void 0:Be.depthStencilTexture),e.setRenderTarget(p))}let Te=U[Me];Te===void 0&&(Te=new At,Te.layers.enable(Me),Te.viewport=new lt,U[Me]=Te),Te.matrix.fromArray(Ue.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(Ue.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),Me===0&&(M.matrix.copy(Te.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),we===!0&&M.cameras.push(Te)}}for(let xe=0;xe<y.length;xe++){let we=x[xe],Me=y[xe];we!==null&&Me!==void 0&&Me.update(we,ne,c||a)}te&&te(G,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}let _e=new jd;_e.setAnimationLoop(ie),this.setAnimationLoop=function(G){te=G},this.dispose=function(){}}};function uv(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Zd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,x,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===nn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===nn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let x=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function dv(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,x){let b=x.program;n.uniformBlockBinding(y,b)}function c(y,x){let b=s[y.id];b===void 0&&(g(y),b=h(y),s[y.id]=b,y.addEventListener("dispose",m));let C=x.program;n.updateUBOMapping(y,C);let T=e.render.frame;r[y.id]!==T&&(d(y),r[y.id]=T)}function h(y){let x=u();y.__bindingPointIndex=x;let b=i.createBuffer(),C=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,C,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,b),b}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let x=s[y.id],b=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,A=b.length;T<A;T++){let U=Array.isArray(b[T])?b[T]:[b[T]];for(let M=0,w=U.length;M<w;M++){let O=U[M];if(f(O,T,M,C)===!0){let W=O.__offset,re=Array.isArray(O.value)?O.value:[O.value],D=0;for(let B=0;B<re.length;B++){let V=re[B],j=_(V);typeof V=="number"||typeof V=="boolean"?(O.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,W+D,O.__data)):V.isMatrix3?(O.__data[0]=V.elements[0],O.__data[1]=V.elements[1],O.__data[2]=V.elements[2],O.__data[3]=0,O.__data[4]=V.elements[3],O.__data[5]=V.elements[4],O.__data[6]=V.elements[5],O.__data[7]=0,O.__data[8]=V.elements[6],O.__data[9]=V.elements[7],O.__data[10]=V.elements[8],O.__data[11]=0):(V.toArray(O.__data,D),D+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,x,b,C){let T=y.value,A=x+"_"+b;if(C[A]===void 0)return typeof T=="number"||typeof T=="boolean"?C[A]=T:C[A]=T.clone(),!0;{let U=C[A];if(typeof T=="number"||typeof T=="boolean"){if(U!==T)return C[A]=T,!0}else if(U.equals(T)===!1)return U.copy(T),!0}return!1}function g(y){let x=y.uniforms,b=0,C=16;for(let A=0,U=x.length;A<U;A++){let M=Array.isArray(x[A])?x[A]:[x[A]];for(let w=0,O=M.length;w<O;w++){let W=M[w],re=Array.isArray(W.value)?W.value:[W.value];for(let D=0,B=re.length;D<B;D++){let V=re[D],j=_(V),Z=b%C;Z!==0&&C-Z<j.boundary&&(b+=C-Z),W.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=b,b+=j.storage}}}let T=b%C;return T>0&&(b+=C-T),y.__size=b,y.__cache={},this}function _(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){let x=y.target;x.removeEventListener("dispose",m);let b=a.indexOf(x.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var hr=class{constructor(e={}){let{canvas:t=Mm(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let f=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,p=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pt,this._useLegacyLights=!1,this.toneMapping=hi,this.toneMappingExposure=1;let x=this,b=!1,C=0,T=0,A=null,U=-1,M=null,w=new lt,O=new lt,W=null,re=new Se(0),D=0,B=t.width,V=t.height,j=1,Z=null,X=null,te=new lt(0,0,B,V),ie=new lt(0,0,B,V),_e=!1,G=new cr,ne=!1,xe=!1,we=null,Me=new ke,Ue=new K,Oe=new R,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Be(){return A===null?j:1}let L=n;function ce(E,N){for(let k=0;k<E.length;k++){let H=E[k],z=t.getContext(H,N);if(z!==null)return z}return null}try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wc}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",he,!1),L===null){let N=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&N.shift(),L=ce(N,E),L===null)throw ce(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&L instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let q,ae,Y,Ae,ve,S,v,F,se,$,J,Ee,ge,ye,Ie,Ve,Q,je,P,ee,fe,le,Re,Je;function et(){q=new L_(L),ae=new T_(L,q,e),q.init(ae),le=new cv(L,q,ae),Y=new ov(L,q,ae),Ae=new N_(L),ve=new Zx,S=new lv(L,q,Y,ve,ae,le,Ae),v=new A_(x),F=new P_(x),se=new Vm(L,ae),Re=new S_(L,q,se,ae),$=new I_(L,se,Ae,Re),J=new B_(L,$,se,Ae),P=new O_(L,ae,S),Ve=new w_(ve),Ee=new Kx(x,v,F,q,ae,Re,Ve),ge=new uv(x,ve),ye=new Jx,Ie=new iv(q,ae),je=new M_(x,v,F,Y,J,d,l),Q=new av(x,J,ae),Je=new dv(L,Ae,ae,Y),ee=new E_(L,q,Ae,ae),fe=new D_(L,q,Ae,ae),Ae.programs=Ee.programs,x.capabilities=ae,x.extensions=q,x.properties=ve,x.renderLists=ye,x.shadowMap=Q,x.state=Y,x.info=Ae}et();let Ke=new rc(x,L);this.xr=Ke,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let E=q.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=q.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(E){E!==void 0&&(j=E,this.setSize(B,V,!1))},this.getSize=function(E){return E.set(B,V)},this.setSize=function(E,N,k=!0){if(Ke.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=E,V=N,t.width=Math.floor(E*j),t.height=Math.floor(N*j),k===!0&&(t.style.width=E+"px",t.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(B*j,V*j).floor()},this.setDrawingBufferSize=function(E,N,k){B=E,V=N,j=k,t.width=Math.floor(E*k),t.height=Math.floor(N*k),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(w)},this.getViewport=function(E){return E.copy(te)},this.setViewport=function(E,N,k,H){E.isVector4?te.set(E.x,E.y,E.z,E.w):te.set(E,N,k,H),Y.viewport(w.copy(te).multiplyScalar(j).floor())},this.getScissor=function(E){return E.copy(ie)},this.setScissor=function(E,N,k,H){E.isVector4?ie.set(E.x,E.y,E.z,E.w):ie.set(E,N,k,H),Y.scissor(O.copy(ie).multiplyScalar(j).floor())},this.getScissorTest=function(){return _e},this.setScissorTest=function(E){Y.setScissorTest(_e=E)},this.setOpaqueSort=function(E){Z=E},this.setTransparentSort=function(E){X=E},this.getClearColor=function(E){return E.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor.apply(je,arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha.apply(je,arguments)},this.clear=function(E=!0,N=!0,k=!0){let H=0;if(E){let z=!1;if(A!==null){let be=A.texture.format;z=be===Hd||be===kd||be===zd}if(z){let be=A.texture.type,Pe=be===ui||be===li||be===Dc||be===Oi||be===Od||be===Bd,Fe=je.getClearColor(),ze=je.getClearAlpha(),Ze=Fe.r,Ge=Fe.g,We=Fe.b;Pe?(f[0]=Ze,f[1]=Ge,f[2]=We,f[3]=ze,L.clearBufferuiv(L.COLOR,0,f)):(g[0]=Ze,g[1]=Ge,g[2]=We,g[3]=ze,L.clearBufferiv(L.COLOR,0,g))}else H|=L.COLOR_BUFFER_BIT}N&&(H|=L.DEPTH_BUFFER_BIT),k&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",he,!1),ye.dispose(),Ie.dispose(),ve.dispose(),v.dispose(),F.dispose(),J.dispose(),Re.dispose(),Je.dispose(),Ee.dispose(),Ke.dispose(),Ke.removeEventListener("sessionstart",Yt),Ke.removeEventListener("sessionend",ut),we&&(we.dispose(),we=null),Kt.stop()};function de(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let E=Ae.autoReset,N=Q.enabled,k=Q.autoUpdate,H=Q.needsUpdate,z=Q.type;et(),Ae.autoReset=E,Q.enabled=N,Q.autoUpdate=k,Q.needsUpdate=H,Q.type=z}function he(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ue(E){let N=E.target;N.removeEventListener("dispose",ue),De(N)}function De(E){Ce(E),ve.remove(E)}function Ce(E){let N=ve.get(E).programs;N!==void 0&&(N.forEach(function(k){Ee.releaseProgram(k)}),E.isShaderMaterial&&Ee.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,k,H,z,be){N===null&&(N=Te);let Pe=z.isMesh&&z.matrixWorld.determinant()<0,Fe=hp(E,N,k,H,z);Y.setMaterial(H,Pe);let ze=k.index,Ze=1;if(H.wireframe===!0){if(ze=$.getWireframeAttribute(k),ze===void 0)return;Ze=2}let Ge=k.drawRange,We=k.attributes.position,St=Ge.start*Ze,an=(Ge.start+Ge.count)*Ze;be!==null&&(St=Math.max(St,be.start*Ze),an=Math.min(an,(be.start+be.count)*Ze)),ze!==null?(St=Math.max(St,0),an=Math.min(an,ze.count)):We!=null&&(St=Math.max(St,0),an=Math.min(an,We.count));let Dt=an-St;if(Dt<0||Dt===1/0)return;Re.setup(z,H,Fe,k,ze);let kn,_t=ee;if(ze!==null&&(kn=se.get(ze),_t=fe,_t.setIndex(kn)),z.isMesh)H.wireframe===!0?(Y.setLineWidth(H.wireframeLinewidth*Be()),_t.setMode(L.LINES)):_t.setMode(L.TRIANGLES);else if(z.isLine){let $e=H.linewidth;$e===void 0&&($e=1),Y.setLineWidth($e*Be()),z.isLineSegments?_t.setMode(L.LINES):z.isLineLoop?_t.setMode(L.LINE_LOOP):_t.setMode(L.LINE_STRIP)}else z.isPoints?_t.setMode(L.POINTS):z.isSprite&&_t.setMode(L.TRIANGLES);if(z.isBatchedMesh)_t.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)_t.renderInstances(St,Dt,z.count);else if(k.isInstancedBufferGeometry){let $e=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,$o=Math.min(k.instanceCount,$e);_t.renderInstances(St,Dt,$o)}else _t.render(St,Dt)};function nt(E,N,k){E.transparent===!0&&E.side===Ut&&E.forceSinglePass===!1?(E.side=nn,E.needsUpdate=!0,Vr(E,N,k),E.side=Nn,E.needsUpdate=!0,Vr(E,N,k),E.side=Ut):Vr(E,N,k)}this.compile=function(E,N,k=null){k===null&&(k=E),m=Ie.get(k),m.init(),y.push(m),k.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),E!==k&&E.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights(x._useLegacyLights);let H=new Set;return E.traverse(function(z){let be=z.material;if(be)if(Array.isArray(be))for(let Pe=0;Pe<be.length;Pe++){let Fe=be[Pe];nt(Fe,k,z),H.add(Fe)}else nt(be,k,z),H.add(be)}),y.pop(),m=null,H},this.compileAsync=function(E,N,k=null){let H=this.compile(E,N,k);return new Promise(z=>{function be(){if(H.forEach(function(Pe){ve.get(Pe).currentProgram.isReady()&&H.delete(Pe)}),H.size===0){z(E);return}setTimeout(be,10)}q.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let rt=null;function It(E){rt&&rt(E)}function Yt(){Kt.stop()}function ut(){Kt.start()}let Kt=new jd;Kt.setAnimationLoop(It),typeof self<"u"&&Kt.setContext(self),this.setAnimationLoop=function(E){rt=E,Ke.setAnimationLoop(E),E===null?Kt.stop():Kt.start()},Ke.addEventListener("sessionstart",Yt),Ke.addEventListener("sessionend",ut),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Ke.enabled===!0&&Ke.isPresenting===!0&&(Ke.cameraAutoUpdate===!0&&Ke.updateCamera(N),N=Ke.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,N,A),m=Ie.get(E,y.length),m.init(),y.push(m),Me.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),G.setFromProjectionMatrix(Me),xe=this.localClippingEnabled,ne=Ve.init(this.clippingPlanes,xe),_=ye.get(E,p.length),_.init(),p.push(_),Pn(E,N,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(Z,X),this.info.render.frame++,ne===!0&&Ve.beginShadows();let k=m.state.shadowsArray;if(Q.render(k,E,N),ne===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),je.render(_,E),m.setupLights(x._useLegacyLights),N.isArrayCamera){let H=N.cameras;for(let z=0,be=H.length;z<be;z++){let Pe=H[z];Uh(_,E,Pe,Pe.viewport)}}else Uh(_,E,N);A!==null&&(S.updateMultisampleRenderTarget(A),S.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(x,E,N),Re.resetDefaultState(),U=-1,M=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Pn(E,N,k,H){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)k=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||G.intersectsSprite(E)){H&&Oe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Me);let Pe=J.update(E),Fe=E.material;Fe.visible&&_.push(E,Pe,Fe,k,Oe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||G.intersectsObject(E))){let Pe=J.update(E),Fe=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Oe.copy(E.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Oe.copy(Pe.boundingSphere.center)),Oe.applyMatrix4(E.matrixWorld).applyMatrix4(Me)),Array.isArray(Fe)){let ze=Pe.groups;for(let Ze=0,Ge=ze.length;Ze<Ge;Ze++){let We=ze[Ze],St=Fe[We.materialIndex];St&&St.visible&&_.push(E,Pe,St,k,Oe.z,We)}}else Fe.visible&&_.push(E,Pe,Fe,k,Oe.z,null)}}let be=E.children;for(let Pe=0,Fe=be.length;Pe<Fe;Pe++)Pn(be[Pe],N,k,H)}function Uh(E,N,k,H){let z=E.opaque,be=E.transmissive,Pe=E.transparent;m.setupLightsView(k),ne===!0&&Ve.setGlobalState(x.clippingPlanes,k),be.length>0&&cp(z,be,N,k),H&&Y.viewport(w.copy(H)),z.length>0&&Hr(z,N,k),be.length>0&&Hr(be,N,k),Pe.length>0&&Hr(Pe,N,k),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function cp(E,N,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;let be=ae.isWebGL2;we===null&&(we=new $t(1,1,{generateMipmaps:!0,type:q.has("EXT_color_buffer_half_float")?wn:ui,minFilter:di,samples:be?4:0})),x.getDrawingBufferSize(Ue),be?we.setSize(Ue.x,Ue.y):we.setSize(Pa(Ue.x),Pa(Ue.y));let Pe=x.getRenderTarget();x.setRenderTarget(we),x.getClearColor(re),D=x.getClearAlpha(),D<1&&x.setClearColor(16777215,.5),x.clear();let Fe=x.toneMapping;x.toneMapping=hi,Hr(E,k,H),S.updateMultisampleRenderTarget(we),S.updateRenderTargetMipmap(we);let ze=!1;for(let Ze=0,Ge=N.length;Ze<Ge;Ze++){let We=N[Ze],St=We.object,an=We.geometry,Dt=We.material,kn=We.group;if(Dt.side===Ut&&St.layers.test(H.layers)){let _t=Dt.side;Dt.side=nn,Dt.needsUpdate=!0,Fh(St,k,H,an,Dt,kn),Dt.side=_t,Dt.needsUpdate=!0,ze=!0}}ze===!0&&(S.updateMultisampleRenderTarget(we),S.updateRenderTargetMipmap(we)),x.setRenderTarget(Pe),x.setClearColor(re,D),x.toneMapping=Fe}function Hr(E,N,k){let H=N.isScene===!0?N.overrideMaterial:null;for(let z=0,be=E.length;z<be;z++){let Pe=E[z],Fe=Pe.object,ze=Pe.geometry,Ze=H===null?Pe.material:H,Ge=Pe.group;Fe.layers.test(k.layers)&&Fh(Fe,N,k,ze,Ze,Ge)}}function Fh(E,N,k,H,z,be){E.onBeforeRender(x,N,k,H,z,be),E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(x,N,k,H,E,be),z.transparent===!0&&z.side===Ut&&z.forceSinglePass===!1?(z.side=nn,z.needsUpdate=!0,x.renderBufferDirect(k,N,H,z,E,be),z.side=Nn,z.needsUpdate=!0,x.renderBufferDirect(k,N,H,z,E,be),z.side=Ut):x.renderBufferDirect(k,N,H,z,E,be),E.onAfterRender(x,N,k,H,z,be)}function Vr(E,N,k){N.isScene!==!0&&(N=Te);let H=ve.get(E),z=m.state.lights,be=m.state.shadowsArray,Pe=z.state.version,Fe=Ee.getParameters(E,z.state,be,N,k),ze=Ee.getProgramCacheKey(Fe),Ze=H.programs;H.environment=E.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(E.isMeshStandardMaterial?F:v).get(E.envMap||H.environment),Ze===void 0&&(E.addEventListener("dispose",ue),Ze=new Map,H.programs=Ze);let Ge=Ze.get(ze);if(Ge!==void 0){if(H.currentProgram===Ge&&H.lightsStateVersion===Pe)return Bh(E,Fe),Ge}else Fe.uniforms=Ee.getUniforms(E),E.onBuild(k,Fe,x),E.onBeforeCompile(Fe,x),Ge=Ee.acquireProgram(Fe,ze),Ze.set(ze,Ge),H.uniforms=Fe.uniforms;let We=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(We.clippingPlanes=Ve.uniform),Bh(E,Fe),H.needsLights=dp(E),H.lightsStateVersion=Pe,H.needsLights&&(We.ambientLightColor.value=z.state.ambient,We.lightProbe.value=z.state.probe,We.directionalLights.value=z.state.directional,We.directionalLightShadows.value=z.state.directionalShadow,We.spotLights.value=z.state.spot,We.spotLightShadows.value=z.state.spotShadow,We.rectAreaLights.value=z.state.rectArea,We.ltc_1.value=z.state.rectAreaLTC1,We.ltc_2.value=z.state.rectAreaLTC2,We.pointLights.value=z.state.point,We.pointLightShadows.value=z.state.pointShadow,We.hemisphereLights.value=z.state.hemi,We.directionalShadowMap.value=z.state.directionalShadowMap,We.directionalShadowMatrix.value=z.state.directionalShadowMatrix,We.spotShadowMap.value=z.state.spotShadowMap,We.spotLightMatrix.value=z.state.spotLightMatrix,We.spotLightMap.value=z.state.spotLightMap,We.pointShadowMap.value=z.state.pointShadowMap,We.pointShadowMatrix.value=z.state.pointShadowMatrix),H.currentProgram=Ge,H.uniformsList=null,Ge}function Oh(E){if(E.uniformsList===null){let N=E.currentProgram.getUniforms();E.uniformsList=ws.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Bh(E,N){let k=ve.get(E);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function hp(E,N,k,H,z){N.isScene!==!0&&(N=Te),S.resetTextureUnits();let be=N.fog,Pe=H.isMeshStandardMaterial?N.environment:null,Fe=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ct,ze=(H.isMeshStandardMaterial?F:v).get(H.envMap||Pe),Ze=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ge=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),We=!!k.morphAttributes.position,St=!!k.morphAttributes.normal,an=!!k.morphAttributes.color,Dt=hi;H.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Dt=x.toneMapping);let kn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,_t=kn!==void 0?kn.length:0,$e=ve.get(H),$o=m.state.lights;if(ne===!0&&(xe===!0||E!==M)){let dn=E===M&&H.id===U;Ve.setState(H,E,dn)}let yt=!1;H.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==$o.state.version||$e.outputColorSpace!==Fe||z.isBatchedMesh&&$e.batching===!1||!z.isBatchedMesh&&$e.batching===!0||z.isInstancedMesh&&$e.instancing===!1||!z.isInstancedMesh&&$e.instancing===!0||z.isSkinnedMesh&&$e.skinning===!1||!z.isSkinnedMesh&&$e.skinning===!0||z.isInstancedMesh&&$e.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&$e.instancingColor===!1&&z.instanceColor!==null||$e.envMap!==ze||H.fog===!0&&$e.fog!==be||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Ve.numPlanes||$e.numIntersection!==Ve.numIntersection)||$e.vertexAlphas!==Ze||$e.vertexTangents!==Ge||$e.morphTargets!==We||$e.morphNormals!==St||$e.morphColors!==an||$e.toneMapping!==Dt||ae.isWebGL2===!0&&$e.morphTargetsCount!==_t)&&(yt=!0):(yt=!0,$e.__version=H.version);let Ai=$e.currentProgram;yt===!0&&(Ai=Vr(H,N,z));let zh=!1,Vs=!1,Qo=!1,Wt=Ai.getUniforms(),Ri=$e.uniforms;if(Y.useProgram(Ai.program)&&(zh=!0,Vs=!0,Qo=!0),H.id!==U&&(U=H.id,Vs=!0),zh||M!==E){Wt.setValue(L,"projectionMatrix",E.projectionMatrix),Wt.setValue(L,"viewMatrix",E.matrixWorldInverse);let dn=Wt.map.cameraPosition;dn!==void 0&&dn.setValue(L,Oe.setFromMatrixPosition(E.matrixWorld)),ae.logarithmicDepthBuffer&&Wt.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Wt.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Vs=!0,Qo=!0)}if(z.isSkinnedMesh){Wt.setOptional(L,z,"bindMatrix"),Wt.setOptional(L,z,"bindMatrixInverse");let dn=z.skeleton;dn&&(ae.floatVertexTextures?(dn.boneTexture===null&&dn.computeBoneTexture(),Wt.setValue(L,"boneTexture",dn.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(Wt.setOptional(L,z,"batchingTexture"),Wt.setValue(L,"batchingTexture",z._matricesTexture,S));let el=k.morphAttributes;if((el.position!==void 0||el.normal!==void 0||el.color!==void 0&&ae.isWebGL2===!0)&&P.update(z,k,Ai),(Vs||$e.receiveShadow!==z.receiveShadow)&&($e.receiveShadow=z.receiveShadow,Wt.setValue(L,"receiveShadow",z.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Ri.envMap.value=ze,Ri.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),Vs&&(Wt.setValue(L,"toneMappingExposure",x.toneMappingExposure),$e.needsLights&&up(Ri,Qo),be&&H.fog===!0&&ge.refreshFogUniforms(Ri,be),ge.refreshMaterialUniforms(Ri,H,j,V,we),ws.upload(L,Oh($e),Ri,S)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ws.upload(L,Oh($e),Ri,S),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Wt.setValue(L,"center",z.center),Wt.setValue(L,"modelViewMatrix",z.modelViewMatrix),Wt.setValue(L,"normalMatrix",z.normalMatrix),Wt.setValue(L,"modelMatrix",z.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let dn=H.uniformsGroups;for(let tl=0,fp=dn.length;tl<fp;tl++)if(ae.isWebGL2){let kh=dn[tl];Je.update(kh,Ai),Je.bind(kh,Ai)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ai}function up(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function dp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,N,k){ve.get(E.texture).__webglTexture=N,ve.get(E.depthTexture).__webglTexture=k;let H=ve.get(E);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,N){let k=ve.get(E);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,k=0){A=E,C=N,T=k;let H=!0,z=null,be=!1,Pe=!1;if(E){let ze=ve.get(E);ze.__useDefaultFramebuffer!==void 0?(Y.bindFramebuffer(L.FRAMEBUFFER,null),H=!1):ze.__webglFramebuffer===void 0?S.setupRenderTarget(E):ze.__hasExternalTextures&&S.rebindTextures(E,ve.get(E.texture).__webglTexture,ve.get(E.depthTexture).__webglTexture);let Ze=E.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Pe=!0);let Ge=ve.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ge[N])?z=Ge[N][k]:z=Ge[N],be=!0):ae.isWebGL2&&E.samples>0&&S.useMultisampledRTT(E)===!1?z=ve.get(E).__webglMultisampledFramebuffer:Array.isArray(Ge)?z=Ge[k]:z=Ge,w.copy(E.viewport),O.copy(E.scissor),W=E.scissorTest}else w.copy(te).multiplyScalar(j).floor(),O.copy(ie).multiplyScalar(j).floor(),W=_e;if(Y.bindFramebuffer(L.FRAMEBUFFER,z)&&ae.drawBuffers&&H&&Y.drawBuffers(E,z),Y.viewport(w),Y.scissor(O),Y.setScissorTest(W),be){let ze=ve.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,ze.__webglTexture,k)}else if(Pe){let ze=ve.get(E.texture),Ze=N||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,ze.__webglTexture,k||0,Ze)}U=-1},this.readRenderTargetPixels=function(E,N,k,H,z,be,Pe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=ve.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pe!==void 0&&(Fe=Fe[Pe]),Fe){Y.bindFramebuffer(L.FRAMEBUFFER,Fe);try{let ze=E.texture,Ze=ze.format,Ge=ze.type;if(Ze!==pn&&le.convert(Ze)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let We=Ge===wn&&(q.has("EXT_color_buffer_half_float")||ae.isWebGL2&&q.has("EXT_color_buffer_float"));if(Ge!==ui&&le.convert(Ge)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ge===Kn&&(ae.isWebGL2||q.has("OES_texture_float")||q.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-H&&k>=0&&k<=E.height-z&&L.readPixels(N,k,H,z,le.convert(Ze),le.convert(Ge),be)}finally{let ze=A!==null?ve.get(A).__webglFramebuffer:null;Y.bindFramebuffer(L.FRAMEBUFFER,ze)}}},this.copyFramebufferToTexture=function(E,N,k=0){let H=Math.pow(2,-k),z=Math.floor(N.image.width*H),be=Math.floor(N.image.height*H);S.setTexture2D(N,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,E.x,E.y,z,be),Y.unbindTexture()},this.copyTextureToTexture=function(E,N,k,H=0){let z=N.image.width,be=N.image.height,Pe=le.convert(k.format),Fe=le.convert(k.type);S.setTexture2D(k,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment),N.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,H,E.x,E.y,z,be,Pe,Fe,N.image.data):N.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,H,E.x,E.y,N.mipmaps[0].width,N.mipmaps[0].height,Pe,N.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,H,E.x,E.y,Pe,Fe,N.image),H===0&&k.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Y.unbindTexture()},this.copyTextureToTexture3D=function(E,N,k,H,z=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let be=E.max.x-E.min.x+1,Pe=E.max.y-E.min.y+1,Fe=E.max.z-E.min.z+1,ze=le.convert(H.format),Ze=le.convert(H.type),Ge;if(H.isData3DTexture)S.setTexture3D(H,0),Ge=L.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)S.setTexture2DArray(H,0),Ge=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,H.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,H.unpackAlignment);let We=L.getParameter(L.UNPACK_ROW_LENGTH),St=L.getParameter(L.UNPACK_IMAGE_HEIGHT),an=L.getParameter(L.UNPACK_SKIP_PIXELS),Dt=L.getParameter(L.UNPACK_SKIP_ROWS),kn=L.getParameter(L.UNPACK_SKIP_IMAGES),_t=k.isCompressedTexture?k.mipmaps[z]:k.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,_t.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,_t.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,E.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,E.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,E.min.z),k.isDataTexture||k.isData3DTexture?L.texSubImage3D(Ge,z,N.x,N.y,N.z,be,Pe,Fe,ze,Ze,_t.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(Ge,z,N.x,N.y,N.z,be,Pe,Fe,ze,_t.data)):L.texSubImage3D(Ge,z,N.x,N.y,N.z,be,Pe,Fe,ze,Ze,_t),L.pixelStorei(L.UNPACK_ROW_LENGTH,We),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,St),L.pixelStorei(L.UNPACK_SKIP_PIXELS,an),L.pixelStorei(L.UNPACK_SKIP_ROWS,Dt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,kn),z===0&&H.generateMipmaps&&L.generateMipmap(Ge),Y.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?S.setTextureCube(E,0):E.isData3DTexture?S.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?S.setTexture2DArray(E,0):S.setTexture2D(E,0),Y.unbindTexture()},this.resetState=function(){C=0,T=0,A=null,Y.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Nc?"display-p3":"srgb",t.unpackColorSpace=tt.workingColorSpace===_o?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===pt?zi:Wd}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===zi?pt:Ct}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},ac=class extends hr{};ac.prototype.isWebGL1Renderer=!0;var Ha=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Se(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Va=class extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},Ds=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Gl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Zt=new R,Vi=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=In(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=In(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=In(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=In(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array),r=at(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ur=class extends sn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},gs,Ys=new R,_s=new R,xs=new R,vs=new K,Ks=new K,nf=new ke,ua=new R,Zs=new R,da=new R,od=new K,Pl=new K,ld=new K,Ga=class extends mt{constructor(e=new ur){if(super(),this.isSprite=!0,this.type="Sprite",gs===void 0){gs=new ct;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ds(t,5);gs.setIndex([0,1,2,0,2,3]),gs.setAttribute("position",new Vi(n,3,0,!1)),gs.setAttribute("uv",new Vi(n,2,3,!1))}this.geometry=gs,this.material=e,this.center=new K(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_s.setFromMatrixScale(this.matrixWorld),nf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),xs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_s.multiplyScalar(-xs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;fa(ua.set(-.5,-.5,0),xs,a,_s,s,r),fa(Zs.set(.5,-.5,0),xs,a,_s,s,r),fa(da.set(.5,.5,0),xs,a,_s,s,r),od.set(0,0),Pl.set(1,0),ld.set(1,1);let o=e.ray.intersectTriangle(ua,Zs,da,!1,Ys);if(o===null&&(fa(Zs.set(-.5,.5,0),xs,a,_s,s,r),Pl.set(0,1),o=e.ray.intersectTriangle(ua,da,Zs,!1,Ys),o===null))return;let l=e.ray.origin.distanceTo(Ys);l<e.near||l>e.far||t.push({distance:l,point:Ys.clone(),uv:Fi.getInterpolation(Ys,ua,Zs,da,od,Pl,ld,new K),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function fa(i,e,t,n,s,r){vs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ks.x=r*vs.x-s*vs.y,Ks.y=s*vs.x+r*vs.y):Ks.copy(vs),i.copy(e),i.x+=Ks.x,i.y+=Ks.y,i.applyMatrix4(nf)}var cd=new R,hd=new lt,ud=new lt,fv=new R,dd=new ke,pa=new R,Ll=new hn,fd=new ke,Il=new fi,Wa=class extends Ne{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=qh,this.bindMatrix=new ke,this.bindMatrixInverse=new ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new _n),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,pa),this.boundingBox.expandByPoint(pa)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new hn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,pa),this.boundingSphere.expandByPoint(pa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ll.copy(this.boundingSphere),Ll.applyMatrix4(s),e.ray.intersectsSphere(Ll)!==!1&&(fd.copy(s).invert(),Il.copy(e.ray).applyMatrix4(fd),!(this.boundingBox!==null&&Il.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Il)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new lt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===qh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Vp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;hd.fromBufferAttribute(s.attributes.skinIndex,e),ud.fromBufferAttribute(s.attributes.skinWeight,e),cd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=ud.getComponent(r);if(a!==0){let o=hd.getComponent(r);dd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(fv.copy(cd).applyMatrix4(dd),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},dr=class extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}},oc=class extends kt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Tt,h=Tt,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},pd=new ke,pv=new ke,Xa=class i{constructor(e=[],t=[]){this.uuid=gn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:pv;pd.multiplyMatrices(o,t[r]),pd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new oc(t,e,e,pn,Kn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new dr),this.bones.push(a),this.boneInverses.push(new ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Gi=class extends bt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ys=new ke,md=new ke,ma=[],gd=new _n,mv=new ke,js=new Ne,Js=new hn,qa=class extends Ne{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Gi(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,mv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new _n),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ys),gd.copy(e.boundingBox).applyMatrix4(ys),this.boundingBox.union(gd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new hn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ys),Js.copy(e.boundingSphere).applyMatrix4(ys),this.boundingSphere.union(Js)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,s=this.count;if(js.geometry=this.geometry,js.material=this.material,js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Js.copy(this.boundingSphere),Js.applyMatrix4(n),e.ray.intersectsSphere(Js)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ys),md.multiplyMatrices(n,ys),js.matrixWorld=md,js.raycast(e,ma);for(let a=0,o=ma.length;a<o;a++){let l=ma[a];l.instanceId=r,l.object=this,t.push(l)}ma.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Gi(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Jn=class extends sn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},_d=new R,xd=new R,vd=new ke,Dl=new fi,ga=new hn,Fn=class extends mt{constructor(e=new ct,t=new Jn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)_d.fromBufferAttribute(t,s-1),xd.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=_d.distanceTo(xd);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(s),ga.radius+=r,e.ray.intersectsSphere(ga)===!1)return;vd.copy(s).invert(),Dl.copy(e.ray).applyMatrix4(vd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new R,h=new R,u=new R,d=new R,f=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let p=Math.max(0,a.start),y=Math.min(g.count,a.start+a.count);for(let x=p,b=y-1;x<b;x+=f){let C=g.getX(x),T=g.getX(x+1);if(c.fromBufferAttribute(m,C),h.fromBufferAttribute(m,T),Dl.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let U=e.ray.origin.distanceTo(d);U<e.near||U>e.far||t.push({distance:U,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count);for(let x=p,b=y-1;x<b;x+=f){if(c.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),Dl.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);let T=e.ray.origin.distanceTo(d);T<e.near||T>e.far||t.push({distance:T,point:u.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},yd=new R,bd=new R,Ya=class extends Fn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)yd.fromBufferAttribute(t,s),bd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+yd.distanceTo(bd);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ka=class extends Fn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},fr=class extends sn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Md=new ke,lc=new fi,_a=new hn,xa=new R,Za=class extends mt{constructor(e=new ct,t=new fr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(s),_a.radius+=r,e.ray.intersectsSphere(_a)===!1)return;Md.copy(s).invert(),lc.copy(e.ray).applyMatrix4(Md);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,_=f;g<_;g++){let m=c.getX(g);xa.fromBufferAttribute(u,m),Sd(xa,m,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,_=f;g<_;g++)xa.fromBufferAttribute(u,g),Sd(xa,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Sd(i,e,t,n,s,r,a){let o=lc.distanceSqToPoint(i);if(o<t){let l=new R;lc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}var pr=class extends kt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},xn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new K:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new R,s=[],r=[],a=[],o=new R,l=new ke;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new R)}r[0]=new R,a[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(wt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(wt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},mr=class extends xn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new K,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},cc=class extends mr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Oc(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var va=new R,Nl=new Oc,Ul=new Oc,Fl=new Oc,gr=class extends xn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new R){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(va.subVectors(s[0],s[1]).add(s[0]),c=va);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(va.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=va),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Nl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),Ul.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),Fl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Nl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ul.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Fl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Nl.calc(l),Ul.calc(l),Fl.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new R().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ed(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function gv(i,e){let t=1-i;return t*t*e}function _v(i,e){return 2*(1-i)*i*e}function xv(i,e){return i*i*e}function sr(i,e,t,n){return gv(i,e)+_v(i,t)+xv(i,n)}function vv(i,e){let t=1-i;return t*t*t*e}function yv(i,e){let t=1-i;return 3*t*t*i*e}function bv(i,e){return 3*(1-i)*i*i*e}function Mv(i,e){return i*i*i*e}function rr(i,e,t,n,s){return vv(i,e)+yv(i,t)+bv(i,n)+Mv(i,s)}var ja=class extends xn{constructor(e=new K,t=new K,n=new K,s=new K){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new K){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(rr(e,s.x,r.x,a.x,o.x),rr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},hc=class extends xn{constructor(e=new R,t=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new R){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(rr(e,s.x,r.x,a.x,o.x),rr(e,s.y,r.y,a.y,o.y),rr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ja=class extends xn{constructor(e=new K,t=new K){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new K){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},uc=class extends xn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$a=class extends xn{constructor(e=new K,t=new K,n=new K){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new K){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(sr(e,s.x,r.x,a.x),sr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qa=class extends xn{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(sr(e,s.x,r.x,a.x),sr(e,s.y,r.y,a.y),sr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},eo=class extends xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new K){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Ed(o,l.x,c.x,h.x,u.x),Ed(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new K().fromArray(s))}return this}},to=Object.freeze({__proto__:null,ArcCurve:cc,CatmullRomCurve3:gr,CubicBezierCurve:ja,CubicBezierCurve3:hc,EllipseCurve:mr,LineCurve:Ja,LineCurve3:uc,QuadraticBezierCurve:$a,QuadraticBezierCurve3:Qa,SplineCurve:eo}),dc=class extends xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new to[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new to[s.type]().fromJSON(s))}return this}},Ns=class extends dc{constructor(e){super(),this.type="Path",this.currentPoint=new K,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ja(this.currentPoint.clone(),new K(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new $a(this.currentPoint.clone(),new K(e,t),new K(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new ja(this.currentPoint.clone(),new K(e,t),new K(n,s),new K(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new eo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new mr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Wi=class i extends ct{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new R,h=new K;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new it(a,3)),this.setAttribute("normal",new it(o,3)),this.setAttribute("uv",new it(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},mi=class i extends ct{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,_=[],m=n/2,p=0;y(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new it(u,3)),this.setAttribute("normal",new it(d,3)),this.setAttribute("uv",new it(f,2));function y(){let b=new R,C=new R,T=0,A=(t-e)/n;for(let U=0;U<=r;U++){let M=[],w=U/r,O=w*(t-e)+e;for(let W=0;W<=s;W++){let re=W/s,D=re*l+o,B=Math.sin(D),V=Math.cos(D);C.x=O*B,C.y=-w*n+m,C.z=O*V,u.push(C.x,C.y,C.z),b.set(B,A,V).normalize(),d.push(b.x,b.y,b.z),f.push(re,1-w),M.push(g++)}_.push(M)}for(let U=0;U<s;U++)for(let M=0;M<r;M++){let w=_[M][U],O=_[M+1][U],W=_[M+1][U+1],re=_[M][U+1];h.push(w,O,re),h.push(O,W,re),T+=6}c.addGroup(p,T,0),p+=T}function x(b){let C=g,T=new K,A=new R,U=0,M=b===!0?e:t,w=b===!0?1:-1;for(let W=1;W<=s;W++)u.push(0,m*w,0),d.push(0,w,0),f.push(.5,.5),g++;let O=g;for(let W=0;W<=s;W++){let D=W/s*l+o,B=Math.cos(D),V=Math.sin(D);A.x=M*V,A.y=m*w,A.z=M*B,u.push(A.x,A.y,A.z),d.push(0,w,0),T.x=B*.5+.5,T.y=V*.5*w+.5,f.push(T.x,T.y),g++}for(let W=0;W<s;W++){let re=C+W,D=O+W;b===!0?h.push(D,D+1,re):h.push(D+1,D,re),U+=3}c.addGroup(p,U,b===!0?1:2),p+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var _r=class extends Ns{constructor(e){super(e),this.uuid=gn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Ns().fromJSON(s))}return this}},Sv={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=sf(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,f;if(n&&(r=Rv(i,e,r,t)),i.length>80*t){o=c=i[0],l=h=i[1];for(let g=t;g<s;g+=t)u=i[g],d=i[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return xr(r,a,t,o,l,f,0),a}};function sf(i,e,t,n,s){let r,a;if(s===zv(i,e,t,n)>0)for(r=e;r<t;r+=n)a=Td(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=Td(r,i[r],i[r+1],a);return a&&yo(a,a.next)&&(yr(a),a=a.next),a}function Xi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(yo(t,t.next)||xt(t.prev,t,t.next)===0)){if(yr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function xr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Dv(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Tv(i,n,s,r):Ev(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),yr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=wv(Xi(i),e,t),xr(i,e,t,n,s,r,2)):a===2&&Av(i,e,t,n,s,r):xr(Xi(i),e,t,n,s,r,1);break}}}function Ev(i){let e=i.prev,t=i,n=i.next;if(xt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Ss(s,o,r,l,a,c,g.x,g.y)&&xt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Tv(i,e,t,n){let s=i.prev,r=i,a=i.next;if(xt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,_=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=fc(f,g,e,t,n),y=fc(_,m,e,t,n),x=i.prevZ,b=i.nextZ;for(;x&&x.z>=p&&b&&b.z<=y;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&Ss(o,h,l,u,c,d,x.x,x.y)&&xt(x.prev,x,x.next)>=0||(x=x.prevZ,b.x>=f&&b.x<=_&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&Ss(o,h,l,u,c,d,b.x,b.y)&&xt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;x&&x.z>=p;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&Ss(o,h,l,u,c,d,x.x,x.y)&&xt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;b&&b.z<=y;){if(b.x>=f&&b.x<=_&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&Ss(o,h,l,u,c,d,b.x,b.y)&&xt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function wv(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!yo(s,r)&&rf(s,n,n.next,r)&&vr(s,r)&&vr(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),yr(n),yr(n.next),n=i=r),n=n.next}while(n!==i);return Xi(n)}function Av(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Fv(a,o)){let l=af(a,o);a=Xi(a,a.next),l=Xi(l,l.next),xr(a,e,t,n,s,r,0),xr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Rv(i,e,t,n){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=sf(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Uv(c));for(s.sort(Cv),r=0;r<s.length;r++)t=Pv(s[r],t);return t}function Cv(i,e){return i.x-e.x}function Pv(i,e){let t=Lv(i,e);if(!t)return e;let n=af(t,i);return Xi(n,n.next),Xi(t,t.next)}function Lv(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>n&&(n=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Ss(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),vr(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&Iv(s,t)))&&(s=t,h=u)),t=t.next;while(t!==o);return s}function Iv(i,e){return xt(i.prev,i,e.prev)<0&&xt(e.next,i,i.next)<0}function Dv(i,e,t,n){let s=i;do s.z===0&&(s.z=fc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Nv(s)}function Nv(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function fc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Uv(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ss(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Fv(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Ov(i,e)&&(vr(i,e)&&vr(e,i)&&Bv(i,e)&&(xt(i.prev,i,e.prev)||xt(i,e.prev,e))||yo(i,e)&&xt(i.prev,i,i.next)>0&&xt(e.prev,e,e.next)>0)}function xt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function yo(i,e){return i.x===e.x&&i.y===e.y}function rf(i,e,t,n){let s=ba(xt(i,e,t)),r=ba(xt(i,e,n)),a=ba(xt(t,n,i)),o=ba(xt(t,n,e));return!!(s!==r&&a!==o||s===0&&ya(i,t,e)||r===0&&ya(i,n,e)||a===0&&ya(t,i,n)||o===0&&ya(t,e,n))}function ya(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ba(i){return i>0?1:i<0?-1:0}function Ov(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&rf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function vr(i,e){return xt(i.prev,i,i.next)<0?xt(i,e,i.next)>=0&&xt(i,i.prev,e)>=0:xt(i,e,i.prev)<0||xt(i,i.next,e)<0}function Bv(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function af(i,e){let t=new pc(i.i,i.x,i.y),n=new pc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Td(i,e,t,n){let s=new pc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function yr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function pc(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function zv(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var ar=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];wd(e),Ad(n,e);let a=e.length;t.forEach(wd);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Ad(n,t[l]);let o=Sv.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function wd(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Ad(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var br=class i extends ct{constructor(e=new _r([new K(.5,.5),new K(-.5,.5),new K(-.5,-.5),new K(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new it(s,3)),this.setAttribute("uv",new it(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:kv,x,b=!1,C,T,A,U;p&&(x=p.getSpacedPoints(h),b=!0,d=!1,C=p.computeFrenetFrames(h,!1),T=new R,A=new R,U=new R),d||(m=0,f=0,g=0,_=0);let M=o.extractPoints(c),w=M.shape,O=M.holes;if(!ar.isClockWise(w)){w=w.reverse();for(let L=0,ce=O.length;L<ce;L++){let q=O[L];ar.isClockWise(q)&&(O[L]=q.reverse())}}let re=ar.triangulateShape(w,O),D=w;for(let L=0,ce=O.length;L<ce;L++){let q=O[L];w=w.concat(q)}function B(L,ce,q){return ce||console.error("THREE.ExtrudeGeometry: vec does not exist"),L.clone().addScaledVector(ce,q)}let V=w.length,j=re.length;function Z(L,ce,q){let ae,Y,Ae,ve=L.x-ce.x,S=L.y-ce.y,v=q.x-L.x,F=q.y-L.y,se=ve*ve+S*S,$=ve*F-S*v;if(Math.abs($)>Number.EPSILON){let J=Math.sqrt(se),Ee=Math.sqrt(v*v+F*F),ge=ce.x-S/J,ye=ce.y+ve/J,Ie=q.x-F/Ee,Ve=q.y+v/Ee,Q=((Ie-ge)*F-(Ve-ye)*v)/(ve*F-S*v);ae=ge+ve*Q-L.x,Y=ye+S*Q-L.y;let je=ae*ae+Y*Y;if(je<=2)return new K(ae,Y);Ae=Math.sqrt(je/2)}else{let J=!1;ve>Number.EPSILON?v>Number.EPSILON&&(J=!0):ve<-Number.EPSILON?v<-Number.EPSILON&&(J=!0):Math.sign(S)===Math.sign(F)&&(J=!0),J?(ae=-S,Y=ve,Ae=Math.sqrt(se)):(ae=ve,Y=S,Ae=Math.sqrt(se/2))}return new K(ae/Ae,Y/Ae)}let X=[];for(let L=0,ce=D.length,q=ce-1,ae=L+1;L<ce;L++,q++,ae++)q===ce&&(q=0),ae===ce&&(ae=0),X[L]=Z(D[L],D[q],D[ae]);let te=[],ie,_e=X.concat();for(let L=0,ce=O.length;L<ce;L++){let q=O[L];ie=[];for(let ae=0,Y=q.length,Ae=Y-1,ve=ae+1;ae<Y;ae++,Ae++,ve++)Ae===Y&&(Ae=0),ve===Y&&(ve=0),ie[ae]=Z(q[ae],q[Ae],q[ve]);te.push(ie),_e=_e.concat(ie)}for(let L=0;L<m;L++){let ce=L/m,q=f*Math.cos(ce*Math.PI/2),ae=g*Math.sin(ce*Math.PI/2)+_;for(let Y=0,Ae=D.length;Y<Ae;Y++){let ve=B(D[Y],X[Y],ae);Me(ve.x,ve.y,-q)}for(let Y=0,Ae=O.length;Y<Ae;Y++){let ve=O[Y];ie=te[Y];for(let S=0,v=ve.length;S<v;S++){let F=B(ve[S],ie[S],ae);Me(F.x,F.y,-q)}}}let G=g+_;for(let L=0;L<V;L++){let ce=d?B(w[L],_e[L],G):w[L];b?(A.copy(C.normals[0]).multiplyScalar(ce.x),T.copy(C.binormals[0]).multiplyScalar(ce.y),U.copy(x[0]).add(A).add(T),Me(U.x,U.y,U.z)):Me(ce.x,ce.y,0)}for(let L=1;L<=h;L++)for(let ce=0;ce<V;ce++){let q=d?B(w[ce],_e[ce],G):w[ce];b?(A.copy(C.normals[L]).multiplyScalar(q.x),T.copy(C.binormals[L]).multiplyScalar(q.y),U.copy(x[L]).add(A).add(T),Me(U.x,U.y,U.z)):Me(q.x,q.y,u/h*L)}for(let L=m-1;L>=0;L--){let ce=L/m,q=f*Math.cos(ce*Math.PI/2),ae=g*Math.sin(ce*Math.PI/2)+_;for(let Y=0,Ae=D.length;Y<Ae;Y++){let ve=B(D[Y],X[Y],ae);Me(ve.x,ve.y,u+q)}for(let Y=0,Ae=O.length;Y<Ae;Y++){let ve=O[Y];ie=te[Y];for(let S=0,v=ve.length;S<v;S++){let F=B(ve[S],ie[S],ae);b?Me(F.x,F.y+x[h-1].y,x[h-1].x+q):Me(F.x,F.y,u+q)}}}ne(),xe();function ne(){let L=s.length/3;if(d){let ce=0,q=V*ce;for(let ae=0;ae<j;ae++){let Y=re[ae];Ue(Y[2]+q,Y[1]+q,Y[0]+q)}ce=h+m*2,q=V*ce;for(let ae=0;ae<j;ae++){let Y=re[ae];Ue(Y[0]+q,Y[1]+q,Y[2]+q)}}else{for(let ce=0;ce<j;ce++){let q=re[ce];Ue(q[2],q[1],q[0])}for(let ce=0;ce<j;ce++){let q=re[ce];Ue(q[0]+V*h,q[1]+V*h,q[2]+V*h)}}n.addGroup(L,s.length/3-L,0)}function xe(){let L=s.length/3,ce=0;we(D,ce),ce+=D.length;for(let q=0,ae=O.length;q<ae;q++){let Y=O[q];we(Y,ce),ce+=Y.length}n.addGroup(L,s.length/3-L,1)}function we(L,ce){let q=L.length;for(;--q>=0;){let ae=q,Y=q-1;Y<0&&(Y=L.length-1);for(let Ae=0,ve=h+m*2;Ae<ve;Ae++){let S=V*Ae,v=V*(Ae+1),F=ce+ae+S,se=ce+Y+S,$=ce+Y+v,J=ce+ae+v;Oe(F,se,$,J)}}}function Me(L,ce,q){l.push(L),l.push(ce),l.push(q)}function Ue(L,ce,q){Te(L),Te(ce),Te(q);let ae=s.length/3,Y=y.generateTopUV(n,s,ae-3,ae-2,ae-1);Be(Y[0]),Be(Y[1]),Be(Y[2])}function Oe(L,ce,q,ae){Te(L),Te(ce),Te(ae),Te(ce),Te(q),Te(ae);let Y=s.length/3,Ae=y.generateSideWallUV(n,s,Y-6,Y-3,Y-2,Y-1);Be(Ae[0]),Be(Ae[1]),Be(Ae[3]),Be(Ae[1]),Be(Ae[2]),Be(Ae[3])}function Te(L){s.push(l[L*3+0]),s.push(l[L*3+1]),s.push(l[L*3+2])}function Be(L){r.push(L.x),r.push(L.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Hv(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new to[s.type]().fromJSON(s)),new i(n,e.options)}},kv={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new K(r,a),new K(o,l),new K(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new K(a,1-l),new K(c,1-u),new K(d,1-g),new K(_,1-p)]:[new K(o,1-l),new K(h,1-u),new K(f,1-g),new K(m,1-p)]}};function Hv(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Mr=class i extends ct{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new R,g=new K;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){let m=_*(n+1);for(let p=0;p<n;p++){let y=p+m,x=y,b=y+n+1,C=y+n+2,T=y+1;o.push(x,b,T),o.push(b,C,T)}}this.setIndex(o),this.setAttribute("position",new it(l,3)),this.setAttribute("normal",new it(c,3)),this.setAttribute("uv",new it(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var no=class i extends ct{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new R,d=new R,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let y=[],x=p/n,b=0;p===0&&a===0?b=.5/t:p===n&&l===Math.PI&&(b=-.5/t);for(let C=0;C<=t;C++){let T=C/t;u.x=-e*Math.cos(s+T*r)*Math.sin(a+x*o),u.y=e*Math.cos(a+x*o),u.z=e*Math.sin(s+T*r)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(T+b,1-x),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){let x=h[p][y+1],b=h[p][y],C=h[p+1][y],T=h[p+1][y+1];(p!==0||a>0)&&f.push(x,b,T),(p!==n-1||l<Math.PI)&&f.push(b,C,T)}this.setIndex(f),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(_,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var io=class i extends ct{constructor(e=new Qa(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new R,l=new R,c=new K,h=new R,u=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new it(u,3)),this.setAttribute("normal",new it(d,3)),this.setAttribute("uv",new it(f,2));function _(){for(let x=0;x<t;x++)m(x);m(r===!1?t:0),y(),p()}function m(x){h=e.getPointAt(x/t,h);let b=a.normals[x],C=a.binormals[x];for(let T=0;T<=s;T++){let A=T/s*Math.PI*2,U=Math.sin(A),M=-Math.cos(A);l.x=M*b.x+U*C.x,l.y=M*b.y+U*C.y,l.z=M*b.z+U*C.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let x=1;x<=t;x++)for(let b=1;b<=s;b++){let C=(s+1)*(x-1)+(b-1),T=(s+1)*x+(b-1),A=(s+1)*x+b,U=(s+1)*(x-1)+b;g.push(C,T,U),g.push(T,A,U)}}function y(){for(let x=0;x<=t;x++)for(let b=0;b<=s;b++)c.x=x/t,c.y=b/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new to[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var so=class extends Ot{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ft=class extends sn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xd,this.normalScale=new K(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},vn=class extends ft{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new K(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ro=class extends Jn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function Ma(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Vv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Gv(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Rd(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function of(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var gi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},mc=class extends gi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xu,endingEnd:xu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case vu:r=e,o=2*t-n;break;case yu:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case vu:a=e,l=2*n-t;break;case yu:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,y=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-f)*m+(1.5+f)*_+.5*g,b=f*m-f*_;for(let C=0;C!==o;++C)r[C]=p*a[h+C]+y*a[c+C]+x*a[l+C]+b*a[u+C];return r}},gc=class extends gi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},_c=class extends gi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},yn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ma(t,this.TimeBufferType),this.values=Ma(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ma(e.times,Array),values:Ma(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new _c(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new gc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new mc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ps:t=this.InterpolantFactoryMethodDiscrete;break;case ki:t=this.InterpolantFactoryMethodLinear;break;case ol:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ps;case this.InterpolantFactoryMethodLinear:return ki;case this.InterpolantFactoryMethodSmooth:return ol}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Vv(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ol,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=ki;var _i=class extends yn{};_i.prototype.ValueTypeName="bool";_i.prototype.ValueBufferType=Array;_i.prototype.DefaultInterpolation=Ps;_i.prototype.InterpolantFactoryMethodLinear=void 0;_i.prototype.InterpolantFactoryMethodSmooth=void 0;var ao=class extends yn{};ao.prototype.ValueTypeName="color";var $n=class extends yn{};$n.prototype.ValueTypeName="number";var xc=class extends gi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Ft.slerpFlat(r,0,a,c-o,a,c,l);return r}},On=class extends yn{InterpolantFactoryMethodLinear(e){return new xc(this.times,this.values,this.getValueSize(),e)}};On.prototype.ValueTypeName="quaternion";On.prototype.DefaultInterpolation=ki;On.prototype.InterpolantFactoryMethodSmooth=void 0;var xi=class extends yn{};xi.prototype.ValueTypeName="string";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=Ps;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Qn=class extends yn{};Qn.prototype.ValueTypeName="vector";var oo=class{constructor(e,t=-1,n,s=Jp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=gn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Xv(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(yn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=Gv(l);l=Rd(l,1,h),c=Rd(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new $n(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,g,_){if(f.length!==0){let m=[],p=[];of(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(let _ in f){let m=[],p=[];for(let y=0;y!==d[g].morphTargets.length;++y){let x=d[g];m.push(x.time),p.push(x.morphTarget===_?1:0)}s.push(new $n(".morphTargetInfluence["+_+"]",m,p))}l=f.length*a}else{let f=".bones["+t[u].name+"]";n(Qn,f+".position",d,"pos",s),n(On,f+".quaternion",d,"rot",s),n(Qn,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Wv(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return $n;case"vector":case"vector2":case"vector3":case"vector4":return Qn;case"color":return ao;case"quaternion":return On;case"bool":case"boolean":return _i;case"string":return xi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Xv(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Wv(i.type);if(i.times===void 0){let t=[],n=[];of(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var ci={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},vc=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},qv=new vc,ei=class{constructor(e){this.manager=e!==void 0?e:qv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ei.DEFAULT_MATERIAL_NAME="__DEFAULT";var qn={},yc=class extends Error{constructor(e,t){super(e),this.response=t}},Sr=class extends ei{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ci.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(qn[e]!==void 0){qn[e].push({onLoad:t,onProgress:n,onError:s});return}qn[e]=[],qn[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=qn[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0,_=0,m=new ReadableStream({start(p){y();function y(){u.read().then(({done:x,value:b})=>{if(x)p.close();else{_+=b.byteLength;let C=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let T=0,A=h.length;T<A;T++){let U=h[T];U.onProgress&&U.onProgress(C)}p.enqueue(b),y()}})}}});return new Response(m)}else throw new yc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{ci.add(e,c);let h=qn[e];delete qn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=qn[e];if(h===void 0)throw this.manager.itemError(e),c;delete qn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var bc=class extends ei{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ci.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=lr("img");function l(){h(),ci.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var lo=class extends ei{constructor(e){super(e)}load(e,t,n,s){let r=new kt,a=new bc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Us=class extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},co=class extends Us{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ol=new ke,Cd=new R,Pd=new R,Er=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new K(512,512),this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cr,this._frameExtents=new K(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Cd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Cd),Pd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pd),t.updateMatrixWorld(),Ol.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ol),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ol)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Mc=class extends Er{constructor(){super(new At(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Ls*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ho=class extends Us{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Mc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Ld=new ke,$s=new R,Bl=new R,Sc=class extends Er{constructor(){super(new At(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new K(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),$s.setFromMatrixPosition(e.matrixWorld),n.position.copy($s),Bl.copy(n.position),Bl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Bl),n.updateMatrixWorld(),s.makeTranslation(-$s.x,-$s.y,-$s.z),Ld.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ld)}},uo=class extends Us{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Sc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ec=class extends Er{constructor(){super(new pi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},vi=class extends Us{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new Ec}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var yi=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var fo=class extends ei{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ci.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ci.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),ci.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ci.add(e,l),r.manager.itemStart(e)}};var po=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Id(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Id();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Id(){return(typeof performance>"u"?Date:performance).now()}var Bc="\\[\\]\\.:\\/",Yv=new RegExp("["+Bc+"]","g"),zc="[^"+Bc+"]",Kv="[^"+Bc.replace("\\.","")+"]",Zv=/((?:WC+[\/:])*)/.source.replace("WC",zc),jv=/(WCOD+)?/.source.replace("WCOD",Kv),Jv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zc),$v=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zc),Qv=new RegExp("^"+Zv+jv+Jv+$v+"$"),ey=["material","materials","bones","map"],Tc=class{constructor(e,t,n){let s=n||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},dt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Yv,"")}static parseTrackName(e){let t=Qv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ey.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};dt.Composite=Tc;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _b=new Float32Array(1);var Tr=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(wt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wc);function kc(i,e){if(e===Gd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Ar||e===go){let t=i.getIndex();if(t===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Ar)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Pr=class extends ei{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Yc(t)}),this.register(function(t){return new nh(t)}),this.register(function(t){return new ih(t)}),this.register(function(t){return new sh(t)}),this.register(function(t){return new Zc(t)}),this.register(function(t){return new jc(t)}),this.register(function(t){return new Jc(t)}),this.register(function(t){return new $c(t)}),this.register(function(t){return new qc(t)}),this.register(function(t){return new Qc(t)}),this.register(function(t){return new Kc(t)}),this.register(function(t){return new th(t)}),this.register(function(t){return new eh(t)}),this.register(function(t){return new Wc(t)}),this.register(function(t){return new rh(t)}),this.register(function(t){return new ah(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=yi.extractUrlBase(e);a=yi.resolveURL(c,this.path)}else a=yi.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Sr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===df){try{a[Qe.KHR_BINARY_GLTF]=new oh(e)}catch(u){s&&s(u);return}r=JSON.parse(a[Qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new ph(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Qe.KHR_MATERIALS_UNLIT:a[u]=new Xc;break;case Qe.KHR_DRACO_MESH_COMPRESSION:a[u]=new lh(r,this.dracoLoader);break;case Qe.KHR_TEXTURE_TRANSFORM:a[u]=new ch;break;case Qe.KHR_MESH_QUANTIZATION:a[u]=new hh;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function ty(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var Qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Wc=class{constructor(e){this.parser=e,this.name=Qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Se(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Ct);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new vi(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new uo(h),c.distance=u;break;case"spot":c=new ho(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Si(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Xc=class{constructor(){this.name=Qe.KHR_MATERIALS_UNLIT}getMaterialType(){return gt}extendParams(e,t,n){let s=[];e.color=new Se(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Ct),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,pt))}return Promise.all(s)}},qc=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Yc=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new K(o,o)}return Promise.all(r)}},Kc=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},Zc=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Se(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Ct)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,pt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},jc=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},Jc=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Se().setRGB(o[0],o[1],o[2],Ct),Promise.all(r)}},$c=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Qc=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Se().setRGB(o[0],o[1],o[2],Ct),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,pt)),Promise.all(r)}},eh=class{constructor(e){this.parser=e,this.name=Qe.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},th=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},nh=class{constructor(e){this.parser=e,this.name=Qe.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},ih=class{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},sh=class{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},rh=class{constructor(e){this.name=Qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},ah=class{constructor(e){this.name=Qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==bn.TRIANGLES&&c.mode!==bn.TRIANGLE_STRIP&&c.mode!==bn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let g of u){let _=new ke,m=new R,p=new Ft,y=new R(1,1,1),x=new qa(g.geometry,g.material,d);for(let b=0;b<d;b++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,b),l.SCALE&&y.fromBufferAttribute(l.SCALE,b),x.setMatrixAt(b,_.compose(m,p,y));for(let b in l)if(b==="_COLOR_0"){let C=l[b];x.instanceColor=new Gi(C.array,C.itemSize,C.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,l[b]);mt.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),f.push(x)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},df="glTF",Cr=12,lf={JSON:1313821514,BIN:5130562},oh=class{constructor(e){this.name=Qe.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Cr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==df)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Cr,r=new DataView(e,Cr),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===lf.JSON){let c=new Uint8Array(e,Cr+a,o);this.content=n.decode(c)}else if(l===lf.BIN){let c=Cr+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},lh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=dh[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=dh[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Os[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let _=f.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}u(f)},o,c,Ct,d)})})}},ch=class{constructor(){this.name=Qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},hh=class{constructor(){this.name=Qe.KHR_MESH_QUANTIZATION}},bo=class extends gi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*c,_=g-c,m=-2*f+3*d,p=f-d,y=1-m,x=p-d+u;for(let b=0;b!==o;b++){let C=a[_+b+o],T=a[_+b+l]*h,A=a[g+b+o],U=a[g+b]*h;r[b]=y*C+x*T+m*A+p*U}return r}},ny=new Ft,uh=class extends bo{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return ny.fromArray(r).normalize().toArray(r),r}},bn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Os={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},cf={9728:Tt,9729:Jt,9984:Ta,9985:Ic,9986:Qs,9987:di},hf={33071:cn,33648:or,10497:jn},Hc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},dh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Mi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},iy={CUBICSPLINE:void 0,LINEAR:ki,STEP:Ps},Vc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function sy(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ft({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Nn})),i.DefaultMaterial}function Ki(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Si(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ry(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function ay(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function oy(i){let e,t=i.extensions&&i.extensions[Qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Gc(t.attributes):e=i.indices+":"+Gc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Gc(i.targets[n]);return e}function Gc(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function fh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ly(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var cy=new ke,ph=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ty,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||s&&r<98?this.textureLoader=new lo(this.options.manager):this.textureLoader=new fo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Sr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Ki(r,o,s),Si(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Qe.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(yi.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Hc[s.type],o=Os[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new bt(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=Hc[s.type],c=Os[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,_,m;if(f&&f!==u){let p=Math.floor(d/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,x=t.cache.get(y);x||(_=new c(o,p*f,s.count*f/h),x=new Ds(_,f/h),t.cache.add(y,x)),m=new Vi(x,l,d%f/h,g)}else o===null?_=new c(s.count*l):_=new c(o,d,s.count*l),m=new bt(_,l,g);if(s.sparse!==void 0){let p=Hc.SCALAR,y=Os[s.sparse.indices.componentType],x=s.sparse.indices.byteOffset||0,b=s.sparse.values.byteOffset||0,C=new y(a[1],x,s.sparse.count*p),T=new c(a[2],b,s.sparse.count*l);o!==null&&(m=new bt(m.array.slice(),m.itemSize,m.normalized));for(let A=0,U=C.length;A<U;A++){let M=C[A];if(m.setX(M,T[A*l]),l>=2&&m.setY(M,T[A*l+1]),l>=3&&m.setZ(M,T[A*l+2]),l>=4&&m.setW(M,T[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=cf[d.magFilter]||Jt,h.minFilter=cf[d.minFilter]||di,h.wrapS=hf[d.wrapS]||jn,h.wrapT=hf[d.wrapT]||jn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){let m=new kt(_);m.needsUpdate=!0,d(m)}),t.load(yi.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),u.userData.mimeType=a.mimeType||ly(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Qe.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Qe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[Qe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new fr,sn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Jn,sn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ft}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[Qe.KHR_MATERIALS_UNLIT]){let u=s[Qe.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Se(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Ct),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,pt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Ut);let h=r.alphaMode||Vc.OPAQUE;if(h===Vc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Vc.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==gt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new K(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==gt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==gt){let u=r.emissiveFactor;o.emissive=new Se().setRGB(u[0],u[1],u[2],Ct)}return r.emissiveTexture!==void 0&&a!==gt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,pt)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Si(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ki(s,u,r),u})}createUniqueName(e){let t=dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return uf(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=oy(c),u=s[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[Qe.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=uf(new ct,c,t),s[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?sy(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let _=h[f],m=a[f],p,y=c[f];if(m.mode===bn.TRIANGLES||m.mode===bn.TRIANGLE_STRIP||m.mode===bn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Wa(_,y):new Ne(_,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===bn.TRIANGLE_STRIP?p.geometry=kc(p.geometry,go):m.mode===bn.TRIANGLE_FAN&&(p.geometry=kc(p.geometry,Ar));else if(m.mode===bn.LINES)p=new Ya(_,y);else if(m.mode===bn.LINE_STRIP)p=new Fn(_,y);else if(m.mode===bn.LINE_LOOP)p=new Ka(_,y);else if(m.mode===bn.POINTS)p=new Za(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&ay(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Si(p,r),m.extensions&&Ki(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Ki(s,u[0],r),u[0];let d=new Rt;r.extensions&&Ki(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new At(xo.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new pi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Si(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new ke;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Xa(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],_=f.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,y=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(g),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let y=0,x=d.length;y<x;y++){let b=d[y],C=f[y],T=g[y],A=_[y],U=m[y];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();let M=n._createAnimationTracks(b,C,T,A,U);if(M)for(let w=0;w<M.length;w++)p.push(M[w])}return new oo(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,cy)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new dr:c.length>1?h=new Rt:c.length===1?h=c[0]:h=new mt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Si(h,r),r.extensions&&Ki(n,h,r),r.matrix!==void 0){let u=new ke;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Rt;n.name&&(r.name=s.createUniqueName(n.name)),Si(r,n),n.extensions&&Ki(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof sn||d instanceof kt)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];Mi[r.path]===Mi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(Mi[r.path]){case Mi.weights:c=$n;break;case Mi.rotation:c=On;break;case Mi.position:case Mi.scale:c=Qn;break;default:switch(n.itemSize){case 1:c=$n;break;case 2:case 3:default:c=Qn;break}break}let h=s.interpolation!==void 0?iy[s.interpolation]:ki,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let g=new c(l[d]+"."+Mi[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=fh(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof On?uh:bo;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function hy(i,e,t){let n=e.attributes,s=new _n;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new R(l[0],l[1],l[2]),new R(c[0],c[1],c[2])),o.normalized){let h=fh(Os[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new R,l=new R;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let _=fh(Os[d.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new hn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function uf(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=dh[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return tt.workingColorSpace!==Ct&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${tt.workingColorSpace}" not supported.`),Si(i,e),hy(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?ry(i,e.targets,t):i})}var ff={type:"change"},mh={type:"start"},pf={type:"end"},Mo=new fi,mf=new Tn,uy=Math.cos(70*xo.DEG2RAD),So=class extends Un{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qi.ROTATE,MIDDLE:qi.DOLLY,RIGHT:qi.PAN},this.touches={ONE:Yi.ROTATE,TWO:Yi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",J),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",J),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(ff),n.update(),r=s.NONE},this.update=function(){let P=new R,ee=new Ft().setFromUnitVectors(e.up,new R(0,1,0)),fe=ee.clone().invert(),le=new R,Re=new Ft,Je=new R,et=2*Math.PI;return function(de=null){let I=n.object.position;P.copy(I).sub(n.target),P.applyQuaternion(ee),o.setFromVector3(P),n.autoRotate&&r===s.NONE&&O(M(de)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let he=n.minAzimuthAngle,ue=n.maxAzimuthAngle;isFinite(he)&&isFinite(ue)&&(he<-Math.PI?he+=et:he>Math.PI&&(he-=et),ue<-Math.PI?ue+=et:ue>Math.PI&&(ue-=et),he<=ue?o.theta=Math.max(he,Math.min(ue,o.theta)):o.theta=o.theta>(he+ue)/2?Math.max(he,o.theta):Math.min(ue,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&T||n.object.isOrthographicCamera?o.radius=X(o.radius):o.radius=X(o.radius*c),P.setFromSpherical(o),P.applyQuaternion(fe),I.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let De=!1;if(n.zoomToCursor&&T){let Ce=null;if(n.object.isPerspectiveCamera){let nt=P.length();Ce=X(nt*c);let rt=nt-Ce;n.object.position.addScaledVector(b,rt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let nt=new R(C.x,C.y,0);nt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),De=!0;let rt=new R(C.x,C.y,0);rt.unproject(n.object),n.object.position.sub(rt).add(nt),n.object.updateMatrixWorld(),Ce=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ce!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ce).add(n.object.position):(Mo.origin.copy(n.object.position),Mo.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Mo.direction))<uy?e.lookAt(n.target):(mf.setFromNormalAndCoplanarPoint(n.object.up,n.target),Mo.intersectPlane(mf,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),De=!0);return c=1,T=!1,De||le.distanceToSquared(n.object.position)>a||8*(1-Re.dot(n.object.quaternion))>a||Je.distanceToSquared(n.target)>0?(n.dispatchEvent(ff),le.copy(n.object.position),Re.copy(n.object.quaternion),Je.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ye),n.domElement.removeEventListener("pointerdown",ve),n.domElement.removeEventListener("pointercancel",v),n.domElement.removeEventListener("wheel",$),n.domElement.removeEventListener("pointermove",S),n.domElement.removeEventListener("pointerup",v),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",J),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,a=1e-6,o=new Tr,l=new Tr,c=1,h=new R,u=new K,d=new K,f=new K,g=new K,_=new K,m=new K,p=new K,y=new K,x=new K,b=new R,C=new K,T=!1,A=[],U={};function M(P){return P!==null?2*Math.PI/60*n.autoRotateSpeed*P:2*Math.PI/60/60*n.autoRotateSpeed}function w(P){let ee=Math.abs(P)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*ee)}function O(P){l.theta-=P}function W(P){l.phi-=P}let re=function(){let P=new R;return function(fe,le){P.setFromMatrixColumn(le,0),P.multiplyScalar(-fe),h.add(P)}}(),D=function(){let P=new R;return function(fe,le){n.screenSpacePanning===!0?P.setFromMatrixColumn(le,1):(P.setFromMatrixColumn(le,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(fe),h.add(P)}}(),B=function(){let P=new R;return function(fe,le){let Re=n.domElement;if(n.object.isPerspectiveCamera){let Je=n.object.position;P.copy(Je).sub(n.target);let et=P.length();et*=Math.tan(n.object.fov/2*Math.PI/180),re(2*fe*et/Re.clientHeight,n.object.matrix),D(2*le*et/Re.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(re(fe*(n.object.right-n.object.left)/n.object.zoom/Re.clientWidth,n.object.matrix),D(le*(n.object.top-n.object.bottom)/n.object.zoom/Re.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function V(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Z(P,ee){if(!n.zoomToCursor)return;T=!0;let fe=n.domElement.getBoundingClientRect(),le=P-fe.left,Re=ee-fe.top,Je=fe.width,et=fe.height;C.x=le/Je*2-1,C.y=-(Re/et)*2+1,b.set(C.x,C.y,1).unproject(n.object).sub(n.object.position).normalize()}function X(P){return Math.max(n.minDistance,Math.min(n.maxDistance,P))}function te(P){u.set(P.clientX,P.clientY)}function ie(P){Z(P.clientX,P.clientX),p.set(P.clientX,P.clientY)}function _e(P){g.set(P.clientX,P.clientY)}function G(P){d.set(P.clientX,P.clientY),f.subVectors(d,u).multiplyScalar(n.rotateSpeed);let ee=n.domElement;O(2*Math.PI*f.x/ee.clientHeight),W(2*Math.PI*f.y/ee.clientHeight),u.copy(d),n.update()}function ne(P){y.set(P.clientX,P.clientY),x.subVectors(y,p),x.y>0?V(w(x.y)):x.y<0&&j(w(x.y)),p.copy(y),n.update()}function xe(P){_.set(P.clientX,P.clientY),m.subVectors(_,g).multiplyScalar(n.panSpeed),B(m.x,m.y),g.copy(_),n.update()}function we(P){Z(P.clientX,P.clientY),P.deltaY<0?j(w(P.deltaY)):P.deltaY>0&&V(w(P.deltaY)),n.update()}function Me(P){let ee=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?W(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,n.keyPanSpeed),ee=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?W(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,-n.keyPanSpeed),ee=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?O(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(n.keyPanSpeed,0),ee=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?O(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(-n.keyPanSpeed,0),ee=!0;break}ee&&(P.preventDefault(),n.update())}function Ue(P){if(A.length===1)u.set(P.pageX,P.pageY);else{let ee=je(P),fe=.5*(P.pageX+ee.x),le=.5*(P.pageY+ee.y);u.set(fe,le)}}function Oe(P){if(A.length===1)g.set(P.pageX,P.pageY);else{let ee=je(P),fe=.5*(P.pageX+ee.x),le=.5*(P.pageY+ee.y);g.set(fe,le)}}function Te(P){let ee=je(P),fe=P.pageX-ee.x,le=P.pageY-ee.y,Re=Math.sqrt(fe*fe+le*le);p.set(0,Re)}function Be(P){n.enableZoom&&Te(P),n.enablePan&&Oe(P)}function L(P){n.enableZoom&&Te(P),n.enableRotate&&Ue(P)}function ce(P){if(A.length==1)d.set(P.pageX,P.pageY);else{let fe=je(P),le=.5*(P.pageX+fe.x),Re=.5*(P.pageY+fe.y);d.set(le,Re)}f.subVectors(d,u).multiplyScalar(n.rotateSpeed);let ee=n.domElement;O(2*Math.PI*f.x/ee.clientHeight),W(2*Math.PI*f.y/ee.clientHeight),u.copy(d)}function q(P){if(A.length===1)_.set(P.pageX,P.pageY);else{let ee=je(P),fe=.5*(P.pageX+ee.x),le=.5*(P.pageY+ee.y);_.set(fe,le)}m.subVectors(_,g).multiplyScalar(n.panSpeed),B(m.x,m.y),g.copy(_)}function ae(P){let ee=je(P),fe=P.pageX-ee.x,le=P.pageY-ee.y,Re=Math.sqrt(fe*fe+le*le);y.set(0,Re),x.set(0,Math.pow(y.y/p.y,n.zoomSpeed)),V(x.y),p.copy(y);let Je=(P.pageX+ee.x)*.5,et=(P.pageY+ee.y)*.5;Z(Je,et)}function Y(P){n.enableZoom&&ae(P),n.enablePan&&q(P)}function Ae(P){n.enableZoom&&ae(P),n.enableRotate&&ce(P)}function ve(P){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",S),n.domElement.addEventListener("pointerup",v)),Ie(P),P.pointerType==="touch"?Ee(P):F(P))}function S(P){n.enabled!==!1&&(P.pointerType==="touch"?ge(P):se(P))}function v(P){Ve(P),A.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",S),n.domElement.removeEventListener("pointerup",v)),n.dispatchEvent(pf),r=s.NONE}function F(P){let ee;switch(P.button){case 0:ee=n.mouseButtons.LEFT;break;case 1:ee=n.mouseButtons.MIDDLE;break;case 2:ee=n.mouseButtons.RIGHT;break;default:ee=-1}switch(ee){case qi.DOLLY:if(n.enableZoom===!1)return;ie(P),r=s.DOLLY;break;case qi.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;_e(P),r=s.PAN}else{if(n.enableRotate===!1)return;te(P),r=s.ROTATE}break;case qi.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;te(P),r=s.ROTATE}else{if(n.enablePan===!1)return;_e(P),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(mh)}function se(P){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;G(P);break;case s.DOLLY:if(n.enableZoom===!1)return;ne(P);break;case s.PAN:if(n.enablePan===!1)return;xe(P);break}}function $(P){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(P.preventDefault(),n.dispatchEvent(mh),we(P),n.dispatchEvent(pf))}function J(P){n.enabled===!1||n.enablePan===!1||Me(P)}function Ee(P){switch(Q(P),A.length){case 1:switch(n.touches.ONE){case Yi.ROTATE:if(n.enableRotate===!1)return;Ue(P),r=s.TOUCH_ROTATE;break;case Yi.PAN:if(n.enablePan===!1)return;Oe(P),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Yi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Be(P),r=s.TOUCH_DOLLY_PAN;break;case Yi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;L(P),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(mh)}function ge(P){switch(Q(P),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;ce(P),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;q(P),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Y(P),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ae(P),n.update();break;default:r=s.NONE}}function ye(P){n.enabled!==!1&&P.preventDefault()}function Ie(P){A.push(P.pointerId)}function Ve(P){delete U[P.pointerId];for(let ee=0;ee<A.length;ee++)if(A[ee]==P.pointerId){A.splice(ee,1);return}}function Q(P){let ee=U[P.pointerId];ee===void 0&&(ee=new K,U[P.pointerId]=ee),ee.set(P.pageX,P.pageY)}function je(P){let ee=P.pointerId===A[0]?A[1]:A[0];return U[ee]}n.domElement.addEventListener("contextmenu",ye),n.domElement.addEventListener("pointerdown",ve),n.domElement.addEventListener("pointercancel",v),n.domElement.addEventListener("wheel",$,{passive:!1}),this.update()}};var Eo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var un=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},dy=new pi(-1,1,1,-1,0,1),gh=class extends ct{constructor(){super(),this.setAttribute("position",new it([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new it([0,2,0,0,2,0],2))}},fy=new gh,Ei=class{constructor(e){this._mesh=new Ne(fy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,dy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var To=class extends un{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ot?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=bi.clone(e.uniforms),this.material=new Ot({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ei(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Lr=class extends un{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},wo=class extends un{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ao=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new K);this._width=n.width,this._height=n.height,t=new $t(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:wn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new To(Eo),this.copyPass.material.blending=Dn,this.clock=new po}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Lr!==void 0&&(a instanceof Lr?n=!0:a instanceof wo&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new K);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ro=class extends un{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Se}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var gf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Se(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Bs=class i extends un{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new K(e.x,e.y):new K(256,256),this.clearColor=new Se(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new $t(r,a,{type:wn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new $t(r,a,{type:wn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new $t(r,a,{type:wn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),a=Math.round(a/2)}let o=gf;this.highPassUniforms=bi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ot({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new K(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Eo;this.copyUniforms=bi.clone(h.uniforms),this.blendMaterial=new Ot({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Sa,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Se,this.oldClearAlpha=1,this.basic=new gt,this.fsQuad=new Ei(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new K(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Ot({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new K(.5,.5)},direction:{value:new K(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Ot({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Bs.BlurDirectionX=new K(1,0);Bs.BlurDirectionY=new K(0,1);var _f={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Co=class extends un{constructor(){super();let e=_f;this.uniforms=bi.clone(e.uniforms),this.material=new so({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ei(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},tt.getTransfer(this._outputColorSpace)===ot&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Rc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Cc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Pc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===wr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Lc&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var st=Math.PI/180,py={Index:[15,75,55],Middle:[60,65,50],Ring:[70,55,40],Pinky:[85,50,35]},my=[106,0,-76,54],Ht={butt:-.05,handleTop:.075,throat:.13,throatAt:[.076,.012,.095],neck:.095,top:.405,headC:.262,halfL:.143,halfW:.13,twist:35},Xe=R,en=Ft,An={x:new Xe(1,0,0),y:new Xe(0,1,0),z:new Xe(0,0,1)};function Po(i){return new en().setFromEuler(new Hi(i[0]*st,i[1]*st,i[2]*st,"YXZ"))}function vt(i,e){return new en().setFromAxisAngle(i.clone().normalize(),e)}function Lo(i,e){let t=i.clone().normalize(),n=e.clone().addScaledVector(t,-e.dot(t));n.lengthSq()<1e-10&&n.set(0,0,1).addScaledVector(t,-t.z),n.normalize();let s=new Xe().crossVectors(t,n);return new ke().makeBasis(t,n,s)}function xf(i,e,t,n,s){let r=Lo(t,n).multiply(Lo(i,e).transpose());return new en().setFromRotationMatrix(r).multiply(s)}var Io=class{constructor(e){this.root=e,this.b={},e.traverse(n=>{n.isBone&&(this.b[n.name.replace("mixamorig","")]=n)}),e.updateMatrixWorld(!0),this.bind={};for(let n in this.b){let s=this.b[n];this.bind[n]={lq:s.quaternion.clone(),lp:s.position.clone(),wp:s.getWorldPosition(new Xe),wq:s.getWorldQuaternion(new en)}}let t=(n,s,r,a)=>{let o=this.bind[n].wp,l=this.bind[s].wp,c=this.bind[r].wp;return{a:this.b[n],m:this.b[s],e:this.b[r],L1:o.distanceTo(l),L2:l.distanceTo(c),d1:l.clone().sub(o).normalize(),d2:c.clone().sub(l).normalize(),hB:a,q1:this.bind[n].wq,q2:this.bind[s].wq}};this.limbs={LA:t("LeftArm","LeftForeArm","LeftHand",new Xe(0,-1,0)),RA:t("RightArm","RightForeArm","RightHand",new Xe(0,1,0)),LL:t("LeftUpLeg","LeftLeg","LeftFoot",new Xe(1,0,0)),RL:t("RightUpLeg","RightLeg","RightFoot",new Xe(1,0,0))},this.ankleY=this.bind.LeftFoot.wp.y,this.ballOff=this.bind.LeftToeBase.wp.clone().sub(this.bind.LeftFoot.wp),this.hipsY=this.bind.Hips.wp.y,this.chestQ=new en,this.state={}}reset(){for(let e in this.b)this.b[e].quaternion.copy(this.bind[e].lq),this.b[e].position.copy(this.bind[e].lp)}setWorldQuat(e,t){let n=e.parent.getWorldQuaternion(new en);e.quaternion.copy(n.invert().multiply(t)),e.updateMatrixWorld(!0)}setChain(e,t,n,s){this.setWorldQuat(e.a,xf(e.d1,e.hB,t,s,e.q1)),this.setWorldQuat(e.m,xf(e.d2,e.hB,n,s,e.q2))}solveIK(e,t,n){let s=e.a.getWorldPosition(new Xe),r=t.clone().sub(s),a=r.length(),o=r.normalize(),l=(e.L1+e.L2)*.9995,c=Math.abs(e.L1-e.L2)+.02,h=a;a=Math.min(Math.max(a,c),l);let u=n.clone().addScaledVector(o,-n.dot(o));u.lengthSq()<1e-8&&(u=new Xe(0,0,1).addScaledVector(o,-o.z)),u.normalize();let d=Math.min(1,Math.max(-1,(e.L1*e.L1+a*a-e.L2*e.L2)/(2*e.L1*a))),f=Math.sqrt(1-d*d),g=s.clone().addScaledVector(o,e.L1*d).addScaledVector(u,e.L1*f),_=s.clone().addScaledVector(o,a),m=new Xe().crossVectors(u,o).normalize(),p=g.clone().sub(s).normalize(),y=_.clone().sub(g).normalize();return this.setChain(e,p,y,m),{reachError:Math.max(0,h-l),flex:Math.acos(Math.min(1,p.dot(y)))/st}}apply(e){this.reset();let t=this.b,n=t.Hips;n.parent.updateWorldMatrix(!0,!1),n.position.copy(n.parent.worldToLocal(new Xe(...e.hips.p))),this.setWorldQuat(n,Po(e.hips.r).multiply(this.bind.Hips.wq));let s=e.spine,r=[.3,.35,.35];["Spine","Spine1","Spine2"].forEach((l,c)=>{t[l].quaternion.copy(this.bind[l].lq).multiply(Po([s[0]*r[c],s[1]*r[c],s[2]*r[c]]))});let a=e.head||[0,0,0];t.Neck.quaternion.copy(this.bind.Neck.lq).multiply(Po([a[0]*.5,a[1]*.5,a[2]*.5])),t.Head.quaternion.copy(this.bind.Head.lq).multiply(Po([a[0]*.5,a[1]*.5,a[2]*.5]));for(let l of["L","R"]){let c=l==="L"?1:-1,h=e[l]&&e[l].scap||[0,0],u=t[l==="L"?"LeftShoulder":"RightShoulder"];u.quaternion.copy(this.bind[u.name.replace("mixamorig","")].lq).multiply(vt(An.z,c*h[0]*st)).multiply(vt(An.y,c*h[1]*st))}n.updateMatrixWorld(!0),this.chestQ=t.Spine2.getWorldQuaternion(new en),this.chestP=t.Spine2.getWorldPosition(new Xe),this.state.legs={};for(let l of["L","R"]){let c=e["F"+l],h=l==="L"?1:-1,u=vt(An.y,h*(c.out||0)*st),d=vt(An.x,(c.heel||0)*st),f=u.clone().multiply(d),g=this.ballOff.clone().applyQuaternion(c.pivot==="ball"?new en:u),m=new Xe(c.x,this.ankleY+(c.y||0),c.z).clone().add(g),p=m.clone().sub(this.ballOff.clone().applyQuaternion(f));p.y+=.024*Math.sin(Math.max(0,c.heel||0)*st);let y=this.limbs[l+"L"],x=new Xe(0,0,1).applyQuaternion(u),b=c.knee?new Xe(...c.knee):x.clone().add(new Xe(h*.28,0,0)),C=this.solveIK(y,p,b),T=t[l==="L"?"LeftFoot":"RightFoot"],A=f.clone().multiply(this.bind[l==="L"?"LeftFoot":"RightFoot"].wq);this.setWorldQuat(T,A);let U=t[l==="L"?"LeftToeBase":"RightToeBase"];c.toeFlat!==!1?this.setWorldQuat(U,u.clone().multiply(vt(An.x,(c.toe||0)*st))):U.quaternion.copy(vt(An.x,-(c.toe||0)*st)),U.updateMatrixWorld(!0),this.state.legs[l]={...C,ankle:p,ball:m}}this.state.arms={},this.racketSide=e.props&&e.props.racket;let o=this.racketSide==="L"?["L","R"]:["R","L"];for(let l of o){let c=e[l],h=l==="L"?1:-1,u=this.limbs[l+"A"],d,f,g,_={},m=T=>c.space==="world"?new Xe(...T):new Xe(...T).applyQuaternion(this.chestQ).add(this.chestP),p=T=>c.space==="world"?new Xe(...T):new Xe(...T).applyQuaternion(this.chestQ);if(c.mode==="ik"&&c.attachW>0&&this.racketSide){let T=this.racketFrame(this.racketSide),[A,U,M]=c.at||Ht.throatAt,w=T.dir.clone().cross(T.face).multiplyScalar(this.racketSide==="R"?1:-1),O=T.grip.clone().addScaledVector(T.dir,A).addScaledVector(w,U).addScaledVector(T.face,M),W=m(c.t).lerp(O,Math.min(1,c.attachW));_=this.solveIK(u,W,p(c.hint||[h*.3,-.4,-1]))}else if(c.mode==="ik")_=this.solveIK(u,m(c.t),p(c.hint||[h*.3,-.4,-1]));else{let T=vt(An.y,-h*(c.hflex||0)*st).multiply(vt(An.x,-(c.flex||0)*st)).multiply(vt(An.z,h*(c.abd||0)*st)).multiply(vt(new Xe(0,-1,0),h*(c.rot||0)*st)),A=new Xe(0,-1,0).applyQuaternion(T),U=new Xe(-1,0,0).applyQuaternion(T),M=A.clone().applyQuaternion(vt(U,(c.elbow||0)*st));d=A.applyQuaternion(this.chestQ),f=M.applyQuaternion(this.chestQ),g=U.applyQuaternion(this.chestQ),this.setChain(u,d,f,g),_.flex=c.elbow||0}if(c.racket){Object.assign(_,this.orientRacketHand(l,u,c.racket,p)),this.grip(l,c.grip==null?1:c.grip,e.props&&e.props.racket===l),this.state.arms[l]=_;continue}let y=(c.pron||0)*st;if(y){let T=u.m.getWorldQuaternion(new en),A=u.d2.clone().applyQuaternion(T.clone().multiply(u.q2.clone().invert()));this.setWorldQuat(u.m,vt(A,h*y*.65).multiply(T))}let x=u.e,b=new Xe(0,0,-h),C=new Xe(0,-h,0);x.quaternion.copy(this.bind[x.name.replace("mixamorig","")].lq).multiply(vt(An.x,y*.35)).multiply(vt(b,(c.wflex||0)*st)).multiply(vt(C,(c.wdev||0)*st)),x.updateMatrixWorld(!0),this.grip(l,c.grip==null?.15:c.grip,e.props&&e.props.racket===l),this.state.arms[l]=_}this.root.updateMatrixWorld(!0)}orientRacketHand(e,t,n,s){let r=e==="L"?1:-1,a=s(n.dir).normalize(),o=s(n.face),l=new en().setFromRotationMatrix(Lo(a,o).multiply(Lo(this.racketAxis(e),this.racketFaceLocal(e)).transpose())),c=t.m.getWorldQuaternion(new en),h=c.clone().invert().multiply(l),u=new Xe(r,0,0),d=new Xe(h.x,h.y,h.z),f=u.clone().multiplyScalar(d.dot(u)),g=new en(f.x,f.y,f.z,h.w).normalize(),_=2*Math.atan2(new Xe(g.x,g.y,g.z).dot(u),g.w);_>Math.PI&&(_-=2*Math.PI),_<-Math.PI&&(_+=2*Math.PI);let m=t.d2.clone().applyQuaternion(c.clone().multiply(t.q2.clone().invert()));this.setWorldQuat(t.m,vt(m,_*.65).multiply(c));let p=t.m.getWorldQuaternion(new en),y=t.e;y.quaternion.copy(p.invert().multiply(l)),y.updateMatrixWorld(!0);let x=y.quaternion,b=new Xe(x.x,x.y,x.z),C=u.clone().multiplyScalar(b.dot(u)),T=new en(C.x,C.y,C.z,x.w).normalize(),A=x.clone().multiply(T.invert()),U=2*Math.acos(Math.min(1,Math.abs(A.w)))/st;return{pron:r*_/st,wrist:U}}racketAxis(e){let t=e==="L"?1:-1,n=35*st;return new Xe(t*Math.sin(n),0,Math.cos(n))}racketFaceLocal(e){let t=e==="L"?1:-1,n=this.racketTwist??Ht.twist;return new Xe(0,-1,0).applyQuaternion(vt(this.racketAxis(e),-t*n*st))}racketFrame(e){let t=this.handFrame(e);return{grip:this.gripPoint(e),dir:this.racketAxis(e).applyQuaternion(t),face:this.racketFaceLocal(e).applyQuaternion(t),q:t}}grip(e,t,n=!1){let s=e==="L"?"Left":"Right",r=e==="L"?1:-1,a=new Xe(0,0,-r);if(n){for(let[_,m]of Object.entries(py))m.forEach((p,y)=>{let x=this.b[`${s}Hand${_}${y+1}`];x&&x.quaternion.copy(vt(a,t*p*st))});let[h,u,d,f]=my,g=this.b[`${s}HandThumb1`];g&&g.quaternion.setFromEuler(new Hi(t*h*st,-r*t*u*st,-r*t*d*st));for(let _ of["Thumb2","Thumb3"]){let m=this.b[`${s}Hand${_}`];m&&m.quaternion.copy(vt(An.z,-r*t*f*st))}this.b[`${s}Hand`].updateMatrixWorld(!0);return}for(let h of["Index","Middle","Ring","Pinky"])[70,85,55].forEach((u,d)=>{let f=this.b[`${s}Hand${h}${d+1}`];f&&f.quaternion.copy(vt(a,t*u*st))});let o=this.b[`${s}HandThumb1`],l=this.b[`${s}HandThumb2`],c=this.b[`${s}HandThumb3`];o&&o.quaternion.copy(vt(new Xe(r*.3,0,1),-r*t*25*st)),l&&l.quaternion.copy(vt(new Xe(0,0,1).add(new Xe(r*.6,.5,0)),-r*t*35*st)),c&&c.quaternion.copy(vt(new Xe(0,0,1).add(new Xe(r*.6,.5,0)),-r*t*30*st)),this.b[`${s}Hand`].updateMatrixWorld(!0)}gripPoint(e,t=new Xe){let n=this.limbs[e+"A"].e,s=e==="L"?1:-1,r=new Xe(s*8,-3.2,.2);return t.copy(r).applyMatrix4(n.matrixWorld)}handFrame(e){return this.limbs[e+"A"].e.getWorldQuaternion(new en)}};function _h(i,e){if(e===void 0)return structuredClone(i);if(Array.isArray(e)||typeof e!="object"||e===null)return structuredClone(e);let t=structuredClone(i||{});for(let n in e)t[n]=_h(t[n],e[n]);return t}function Vt(i,e,t){if(typeof i=="number"&&typeof e=="number")return i+(e-i)*t;if(Array.isArray(i)&&Array.isArray(e))return i.map((n,s)=>Vt(n,e[s],t));if(i&&e&&typeof i=="object"&&typeof e=="object"){let n={};for(let s of new Set([...Object.keys(i),...Object.keys(e)]))s in i?s in e?n[s]=Vt(i[s],e[s],t):n[s]=typeof i[s]=="number"?i[s]*(1-t):t<.5?structuredClone(i[s]):void 0:n[s]=typeof e[s]=="number"?e[s]*t:t<.5?void 0:structuredClone(e[s]),n[s]===void 0&&delete n[s];return n}return t<.5?i:e}function vf(i){let e=structuredClone(i),t=r=>r&&[-r[0],r[1],r[2]];e.hips.p=t(i.hips.p),e.hips.r=[i.hips.r[0],-i.hips.r[1],-i.hips.r[2]],e.spine=[i.spine[0],-i.spine[1],-i.spine[2]],i.head&&(e.head=[i.head[0],-i.head[1],-i.head[2]]);let n=r=>{let a=structuredClone(r);return a.mode==="ik"&&(a.t=t(a.t),a.hint=t(a.hint)),a.racket&&(a.racket={dir:t(a.racket.dir),face:t(a.racket.face)}),a};e.L=n(i.R),e.R=n(i.L);let s=r=>({...structuredClone(r),x:-r.x,knee:r.knee?t(r.knee):void 0});if(e.FL=s(i.FR),e.FR=s(i.FL),e.FL.knee||delete e.FL.knee,e.FR.knee||delete e.FR.knee,i.props){e.props=structuredClone(i.props);for(let r in e.props)Array.isArray(e.props[r])&&e.props[r].length===3&&(e.props[r]=t(e.props[r]));for(let r of["dumbbell","racket","bandFoot","bandHand"])e.props[r]&&(e.props[r]=e.props[r]==="L"?"R":"L")}return i.handSwap!==void 0&&(e.handSwap=i.handSwap),e}var Gt=R,Zi=.033,Do=9.81;function Mf(i,e,t,n,s){let r=i.court,a={x:t.land[0],z:t.land[1]},o={yaw:0,hflex:0,win:r.aimWin};for(let f=0;f<3;f++){let g=s(i,r.hit,e,o);n.apply(g);let _=n.racketFrame(g.props.racket),m=_.face.clone().multiplyScalar(_.face.z<0?-1:1),p=_.grip.clone().addScaledVector(_.dir,Ht.headC),y=(Math.atan2(a.x-p.x,a.z-p.z)-Math.atan2(m.x,m.z))*180/Math.PI,x=o.yaw+o.hflex+y,b=Math.max(-45,Math.min(45,x*.7));o={yaw:b,hflex:Math.max(-38,Math.min(38,x-b)),win:r.aimWin}}let l=s(i,r.aimWin[2],e),c=l.hips.r[1]+l.spine[1],h=s(i,r.hit,e,o);n.apply(h);let u=n.racketFrame(h.props.racket).grip,d=Math.atan2(a.x-u.x,a.z-u.z)*180/Math.PI;return o.yawF=Math.max(-45,Math.min(45,d-c)),o}function Sf(i,e){i.apply(e);let t=i.racketFrame(e.props.racket),n=t.face.clone().multiplyScalar(t.face.z<0?-1:1);return t.grip.clone().addScaledVector(t.dir,Ht.headC).addScaledVector(n,.055)}function yf(i,e){let t=document.createElement("canvas");t.width=640,t.height=112;let n=t.getContext("2d"),s=50,r=()=>`600 ${s}px Barlow, "Arial Narrow", sans-serif`;for(n.font=r();n.measureText(i).width>580&&s>24;)s-=2,n.font=r();let a=n.measureText(i).width+48;n.fillStyle="rgba(8, 13, 22, 0.85)",n.beginPath(),n.roundRect((640-a)/2,14,a,84,42),n.fill(),n.lineWidth=4,n.strokeStyle=e,n.stroke(),n.fillStyle="#eef3fa",n.textAlign="center",n.textBaseline="middle",n.fillText(i,320,58);let o=new pr(t);o.colorSpace=pt;let l=new Ga(new ur({map:o,depthTest:!1,transparent:!0,sizeAttenuation:!1}));return l.scale.set(.3,.0525,1),l.renderOrder=10,l}function bf(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d");e.strokeStyle="rgba(200, 212, 228, 1)",e.lineWidth=3,e.beginPath(),e.moveTo(0,0),e.lineTo(64,64),e.moveTo(64,0),e.lineTo(0,64),e.stroke();let t=new pr(i);return t.wrapS=t.wrapT=jn,t}function gy(){let i=new Rt,e=new Ne(new rn(40,50),new ft({color:857376,roughness:.95}));e.rotation.x=-Math.PI/2,e.position.y=-.012,e.receiveShadow=!0;let t=new Ne(new rn(10,20),new ft({color:2051994,roughness:.95}));t.rotation.x=-Math.PI/2,t.position.y=-.008,t.receiveShadow=!0,i.add(e,t);let n=new gt({color:15922939}),s=(_,m,p,y)=>{let x=new Ne(new rn(_,m),n);x.rotation.x=-Math.PI/2,x.position.set(p,-.006,y),i.add(x)};for(let _ of[-6.95,6.95])s(10,.05,0,_);s(.05,13.9,0,0);for(let _ of[-10,10])s(10,.05,0,_-Math.sign(_)*.025);let r=bf();r.repeat.set(10/.06,.86/.06);let a=new Ne(new rn(10,.86,1,1),new gt({map:r,color:659222,transparent:!0,opacity:.9,side:Ut,depthWrite:!1}));a.position.set(0,.43,0);let o=new Ne(new rn(10,.86),new gt({color:329741,transparent:!0,opacity:.25,side:Ut,depthWrite:!1}));o.position.copy(a.position),i.add(o);let l=new Ne(new Qt(10,.05,.02),new ft({color:15922939,roughness:.6}));l.position.set(0,.885,0),i.add(a,l);let c=new ft({color:2765894,roughness:.5,metalness:.5});for(let _ of[-5.05,5.05]){let m=new Ne(new Qt(.08,.95,.08),c);m.position.set(_,.475,0),i.add(m)}let h=new ft({color:11130623,transparent:!0,opacity:.1,roughness:.1,side:Ut,depthWrite:!1}),u=bf(),d=(_,m)=>{let p=u.clone();return p.needsUpdate=!0,p.repeat.set(_/.12,m/.12),new gt({map:p,color:10135739,transparent:!0,opacity:.2,side:Ut,depthWrite:!1})},f=(_,m,p,y,x,b,C)=>{let T=new Ne(new rn(m,p),_);T.position.set(y,x,b),T.rotation.y=C,i.add(T)},g=(_,m,p)=>{let y=new Ne(new Qt(.06,p,.06),c);y.position.set(_,p/2,m),i.add(y)};for(let _ of[-1,1]){f(h,10,3,0,1.5,_*10,0),f(d(10,1),10,1,0,3.5,_*10,0);for(let m=-5;m<=5;m+=2)g(m,_*10,4);for(let m of[-5,5]){f(h,2,3,m,1.5,_*9,Math.PI/2),f(h,2,2,m,1,_*7,Math.PI/2),f(d(2,1),2,1,m,2.5,_*7,Math.PI/2),f(d(12,3),12,3,m,1.5,0,Math.PI/2);for(let p of[6,8])g(m,_*p,3)}}for(let _ of[-5,5])for(let m=-4;m<=4;m+=2)g(_,m,3);return i}var No=class{constructor(e){this.root=new Rt,this.root.visible=!1,e.add(this.root),this.court=gy(),this.root.add(this.court),this.fx=new Rt,this.root.add(this.fx);let t=new Ne(new no(.05,20,14),new ft({color:15138620,emissive:9416704,emissiveIntensity:.7,roughness:.6}));t.castShadow=!0,this.ball=t;let n=new Ne(new Wi(.06,20),new gt({color:0,transparent:!0,opacity:.4,depthWrite:!1}));n.rotation.x=-Math.PI/2,this.blob=n,this.root.add(t,n);let s=new Ne(new rn(10,3.05),new gt({color:16777215,transparent:!0,opacity:.07,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.set(0,-.004,8.475),this.court.add(s),this.band=s,this.bandLabel=yf("Profondit\xE0: tra linea e vetro","#e9eff8"),this.bandLabel.position.set(0,.05,7.3),this.court.add(this.bandLabel),this.cfg=null}setVisible(e){this.root.visible=e}configure(e,t,n,s,r){this.cfg=e,this.dur=r;let a=1;this.sg=a,this.cx=2.5,this.court.position.set(this.cx,0,e.net);let o=e.shots.find(g=>g.id===s)||e.shots[0];this.shot=o,this.tHit=e.hit*r,this.tLob=e.lob.start*r;let l=new Gt(a*e.lob.from[0],e.lob.from[1],e.lob.from[2]),c=this.tHit-this.tLob;this.lob={O:l,v:new Gt((t.x-l.x)/c,(t.y-l.y+.5*Do*c*c)/c,(t.z-l.z)/c),T:c},this.out=this.simulate(t,o),this.fx.clear();let h=new Se(o.color),u=[];for(let g=0;g<=60;g++)u.push(this.lobAt(g/60*c));this.lobLine=new Fn(new ct().setFromPoints(u),new ro({color:16777215,dashSize:.25,gapSize:.18,transparent:!0,opacity:.35})),this.lobLine.computeLineDistances();let d=this.out.pts.map(g=>g.p);this.ghost=new Fn(new ct().setFromPoints(d),new Jn({color:h,transparent:!0,opacity:.28})),this.trail=new Fn(new ct().setFromPoints(d),new Jn({color:h})),this.fx.add(this.lobLine,this.ghost,this.trail),this.marks=this.out.events.map(g=>{let _=new Ne(new Mr(.11,.17,32),new gt({color:h,transparent:!0,side:Ut,depthWrite:!1}));_.position.copy(g.p),g.n.y>.5?(_.rotation.x=-Math.PI/2,_.position.y=.004):_.lookAt(g.p.clone().add(g.n));let m=g.text?yf(g.text,o.color):null;if(m){let p={floor:new Gt(0,.05,-.9),end:new Gt(0,.05,-1.2),back:new Gt(0,1.5,0),side:new Gt(0,.55,0).addScaledVector(g.n,1.1),grid:new Gt(0,.9,0).addScaledVector(g.n,.6)}[g.type];m.position.copy(g.p).add(p),this.fx.add(m)}return this.fx.add(_),{e:g,ring:_,lb:m}}),this.impact=new Ne(new Mr(.07,.1,28),new gt({color:16777215,transparent:!0,side:Ut,depthWrite:!1})),this.impact.position.copy(t),this.impact.lookAt(t.clone().add(new Gt(0,0,1))),this.fx.add(this.impact);let f=a*o.land[0]-this.cx;this.bandLabel.position.set(f>0?-2.6:2.6,.05,7.4),this.band.material.color.set(o.error?16777215:o.color),this.band.material.opacity=o.error?.05:.1}lobAt(e){let{O:t,v:n}=this.lob;return new Gt(t.x+n.x*e,t.y+n.y*e-.5*Do*e*e,t.z+n.z*e)}simulate(e,t){let n=this.cfg,s=this.sg,r=t.flat?Do:7.2,a=new Gt(s*t.land[0],Zi,t.land[1]),o=t.time,l=new Gt((a.x-e.x)/o,(a.y-e.y+.5*r*o*o)/o,(a.z-e.z)/o),c=e.clone(),h=[{t:0,p:c.clone()}],u=[],d=this.cx-5+Zi,f=this.cx+5-Zi,g=n.net+10-Zi,_=1/240,m=this.dur-this.tHit-.15,p=0,y=null,x={floor:["Rimbalzo"],back:"Vetro di fondo",side:"Vetro laterale",grid:"Griglia"},b=(C,T)=>{let A=C==="floor"?x.floor[p]||"":x[C];C==="floor"&&p++,u.some(U=>U.type===C&&C!=="floor")&&(A=""),u.push({t:h[h.length-1].t,p:c.clone(),n:T,type:C,text:A})};for(let C=_,T=0;C<=m;C+=_,T++){let A=c.z;l.y-=(p?Do:r)*_,l.multiplyScalar(1-.12*_),c.addScaledVector(l,_),y===null&&A<n.net&&c.z>=n.net&&(y=c.y),c.y<Zi&&l.y<0&&(c.y=Zi,l.y=-l.y*(t.flat?.68:.6),l.x*=.82,l.z*=.82,Math.abs(l.y)>.6?b("floor",new Gt(0,1,0)):l.y=0),c.z>g&&l.z>0&&(c.z=g,l.z=-l.z*.72,l.y>0&&(l.y*=t.glassUp),t.spin&&(l.x*=.12),b("back",new Gt(0,0,-1)));for(let[U,M]of[[d,-1],[f,1]])if(M*(c.x-U)>0&&M*l.x>0){c.x=U;let w=c.z-n.net,O=w>=8?3:w>=6?2:0;c.y<O?(l.x=-l.x*.72,l.y>0&&(l.y*=t.glassUp),b("side",new Gt(-M,0,0))):(l.x=-l.x*.25,l.z*=.5,l.y*=.35,b("grid",new Gt(-M,0,0)))}T%2===1&&h.push({t:C,p:c.clone()})}if(t.error){let C=u.find(T=>T.type==="floor");if(t.errorAt==="bounce"&&C)C.text=t.errorLabel;else{let T=h[h.length-1].p;u.push({t:h[h.length-1].t-.2,p:new Gt(T.x,Zi,T.z),n:new Gt(0,1,0),type:"end",text:t.errorLabel||"Al centro: palla comoda"})}}return{pts:h,events:u,netY:y}}update(e,t=1.5){if(!this.cfg||!this.root.visible)return;let n=Math.min(1,Math.max(.62,t/1.3));for(let c of[this.bandLabel,...this.marks.map(h=>h.lb).filter(Boolean)])c.scale.set(.3*n,.0525*n,1);let s=(e%1+1)%1*this.dur,r=null,a=s-this.tHit;if(s>=this.tLob&&s<this.tHit)r=this.lobAt(s-this.tLob);else if(a>=0){let c=this.out.pts,h=Math.min(c.length-1,Math.floor(a/(2/240)));r=c[h].p,this.trail.geometry.setDrawRange(0,h+1)}a<0&&this.trail.geometry.setDrawRange(0,0);let o=a>this.dur-this.tHit-.45?Math.max(0,(this.dur-this.tHit-.15-a)/.3):1;if(this.ball.visible=this.blob.visible=!!r&&o>.05,r){this.ball.position.copy(r),this.blob.position.set(r.x,.003,r.z);let c=Math.max(.4,1.2-r.y*.12);this.blob.scale.setScalar(c),this.blob.material.opacity=.45*Math.max(.2,1-r.y/6)}this.lobLine.material.opacity=a<0?.4:.14,this.ghost.material.opacity=.28;for(let c of this.marks){let h=s-this.tHit-c.e.t,u=h<0?0:Math.min(1,h/.12);c.ring.material.opacity=u*.9,c.ring.visible=u>0,c.lb&&(c.lb.visible=u>0,c.lb.material.opacity=u)}let l=Math.abs(s-this.tHit)<.25?1-Math.abs(s-this.tHit)/.25:0;this.impact.visible=l>0,this.impact.material.opacity=l,this.impact.scale.setScalar(1+(1-l)*1.5)}};var wf={cuffia:{name:"Cuffia dei rotatori",group:"Spalla"},deltPost:{name:"Deltoide posteriore",group:"Spalla"},deltAnt:{name:"Deltoide anteriore",group:"Spalla"},romboidi:{name:"Romboidi e trapezio medio",group:"Schiena"},trapSup:{name:"Trapezio superiore",group:"Schiena"},dorsali:{name:"Gran dorsale",group:"Schiena"},lombari:{name:"Erettori spinali",group:"Schiena"},pettorali:{name:"Pettorali",group:"Petto"},tricipiti:{name:"Tricipiti",group:"Braccia"},estensori:{name:"Estensori del polso",group:"Avambraccio"},flessori:{name:"Flessori del polso",group:"Avambraccio"},addome:{name:"Retto addominale",group:"Core"},obliqui:{name:"Obliqui",group:"Core"},glutei:{name:"Grande gluteo",group:"Anca"},gluteoMedio:{name:"Medio gluteo",group:"Anca"},quadricipiti:{name:"Quadricipiti",group:"Coscia"},femorali:{name:"Femorali",group:"Coscia"},adduttori:{name:"Adduttori",group:"Coscia"},polpacci:{name:"Polpacci",group:"Gamba"}},tn=(i,e,t)=>({type:"ell",c:i,r:e,mask:t}),ji=(i,e,t,n)=>({type:"cap",a:i,b:e,r:t,mask:n}),xh=(i=.15)=>e=>e[2]>i,Ir=(i=.15)=>e=>e[2]<-i,Ef=(i=.1)=>e=>e[1]>i,_y=(i=.1)=>e=>e[1]<-i;function Bt(i){return[...i(1),...i(-1)]}var Tf={cuffia:Bt(i=>[tn([i*.085,1.355,-.085],[.075,.065,.06],e=>e[2]<-.25),tn([i*.165,1.4,-.07],[.045,.05,.05],e=>e[2]<-.2)]),deltPost:Bt(i=>[tn([i*.19,1.43,-.06],[.07,.07,.06],e=>e[2]<.05)]),deltAnt:Bt(i=>[tn([i*.19,1.43,.02],[.07,.07,.06],e=>e[2]>-.05)]),romboidi:Bt(i=>[tn([i*.045,1.37,-.1],[.055,.085,.06],Ir(.3))]),trapSup:Bt(i=>[tn([i*.08,1.48,-.04],[.07,.045,.06],Ef(-.2))]),dorsali:Bt(i=>[tn([i*.11,1.24,-.06],[.07,.11,.07],e=>e[2]<.1&&i*e[0]>-.2)]),lombari:Bt(i=>[tn([i*.035,1.12,-.09],[.04,.11,.06],Ir(.3))]),pettorali:Bt(i=>[tn([i*.085,1.35,.09],[.085,.07,.07],xh(.25))]),tricipiti:Bt(i=>[ji([i*.18,1.44,-.05],[i*.4,1.44,-.05],.06,e=>e[2]<-.1)]),estensori:Bt(i=>[ji([i*.45,1.44,-.05],[i*.67,1.44,-.05],.05,Ef(.15))]),flessori:Bt(i=>[ji([i*.45,1.44,-.05],[i*.67,1.44,-.05],.05,_y(.15))]),addome:[tn([0,1.16,.09],[.075,.15,.08],xh(.35)),tn([0,1.17,.05],[.07,.09,.08],xh(.45))],obliqui:Bt(i=>[tn([i*.11,1.14,.03],[.06,.12,.09],e=>i*e[0]>.25),tn([i*.07,1.17,.02],[.06,.09,.09],e=>i*e[0]>.35)]),glutei:Bt(i=>[tn([i*.085,.91,-.08],[.1,.11,.08],Ir(.1))]),gluteoMedio:Bt(i=>[tn([i*.15,.99,-.02],[.06,.07,.08],e=>i*e[0]>.2)]),quadricipiti:Bt(i=>[ji([i*.095,.9,.03],[i*.085,.6,.04],.085,e=>e[2]>-.1)]),femorali:Bt(i=>[ji([i*.09,.84,-.03],[i*.085,.6,-.02],.08,Ir(.15))]),adduttori:Bt(i=>[ji([i*.06,.86,0],[i*.075,.62,0],.07,e=>i*e[0]<-.25)]),polpacci:Bt(i=>[ji([i*.085,.48,-.04],[i*.085,.18,-.04],.065,Ir(0))])};function xy(i,e,t){if(i.mask&&!i.mask(t))return 0;let n;if(i.type==="ell"){let r=(e[0]-i.c[0])/i.r[0],a=(e[1]-i.c[1])/i.r[1],o=(e[2]-i.c[2])/i.r[2];n=Math.sqrt(r*r+a*a+o*o)}else{let r=i.a,a=i.b,o=[a[0]-r[0],a[1]-r[1],a[2]-r[2]],l=[e[0]-r[0],e[1]-r[1],e[2]-r[2]],c=o[0]**2+o[1]**2+o[2]**2,h=Math.max(0,Math.min(1,(l[0]*o[0]+l[1]*o[1]+l[2]*o[2])/c)),u=[r[0]+o[0]*h-e[0],r[1]+o[1]*h-e[1],r[2]+o[2]*h-e[2]];n=Math.sqrt(u[0]**2+u[1]**2+u[2]**2)/i.r}if(n>=1)return 0;let s=1-n;return Math.min(1,s*2.2)**1.5}function Af(i,e){let t=i.length/3,n={};for(let s in Tf){let r=new Float32Array(t);for(let a=0;a<t;a++){let o=[i[a*3],i[a*3+1],i[a*3+2]],l=[e[a*3],e[a*3+1],e[a*3+2]],c=0;for(let h of Tf[s])c=Math.max(c,xy(h,o,l));r[a]=c}n[s]=r}return n}var Uo=R;function vy(){let i=new Rt,e=new ft({color:1910323,roughness:.35,metalness:.3}),t=new ft({color:3108832,roughness:.5,metalness:.1}),n=new ft({color:15330802,roughness:.8}),s=new _r,r=Ht.halfW,a=Ht.top,o=Ht.neck;s.moveTo(-.035,o),s.bezierCurveTo(-.09,o+.02,-r,o+.07,-r,o+.14),s.bezierCurveTo(-r,a-.03,-.07,a,0,a),s.bezierCurveTo(.07,a,r,a-.03,r,o+.14),s.bezierCurveTo(r,o+.07,.09,o+.02,.035,o),s.lineTo(-.035,o);let l=(y=1)=>{let x=new Ns,b=o+.014,C=o+.062,T=.03*y;return x.moveTo(0,b),x.quadraticCurveTo(-.012*y,b+.012,-T,C-.008),x.quadraticCurveTo(-T,C,-T+.01,C),x.lineTo(T-.01,C),x.quadraticCurveTo(T,C,T,C-.008),x.quadraticCurveTo(.012*y,b+.012,0,b),x};s.holes.push(l());let c=new Ne(new br(s,{depth:.038,bevelEnabled:!0,bevelThickness:.004,bevelSize:.006,bevelSegments:2,curveSegments:18}),t);c.position.z=-.019,c.castShadow=!0;let h=new Ne(new br(s,{depth:.042,bevelEnabled:!1,curveSegments:18}),e);h.scale.set(1.05,1,1),h.position.set(0,-.006,-.021),h.castShadow=!0;let u=new Wi(.006,10),d=new gt({color:858160});for(let y=o+.085;y<a-.03;y+=.032)for(let x=-.1;x<=.1;x+=.032)if(!((x/r)**2+((y-(o+a)/2)/((a-o)/2))**2>.7))for(let b of[.024,-.024]){let C=new Ne(u,d);C.position.set(x,y,b),b<0&&(C.rotation.y=Math.PI),i.add(C)}let f=Ht.handleTop-(Ht.butt+.01),g=new Ne(new mi(.0165,.0175,f,16),n);g.position.y=Ht.butt+.01+f/2,g.castShadow=!0;let _=new Ne(new mi(.02,.0185,.012,16),e);_.position.y=Ht.butt+.006;let m=new mi(.013,.017,Ht.neck+.03-Ht.handleTop,12),p=new Ne(m,e);return p.position.y=(Ht.handleTop+Ht.neck+.03)/2,p.castShadow=!0,i.add(p),i.add(c,h,g,_),i}var Fo=class{constructor(e,{modelUrl:t="Xbot.glb",bloom:n=!0,pixelRatio:s}={}){this.container=e;let r=this.renderer=new hr({antialias:!0,preserveDrawingBuffer:!0});r.setPixelRatio(s||Math.min(window.devicePixelRatio||1,2)),r.shadowMap.enabled=!0,r.shadowMap.type=Ac,r.toneMapping=wr,r.toneMappingExposure=1.05,e.appendChild(r.domElement),this.scene=new Va,this.scene.background=new Se(725275),this.scene.fog=new Ha(725275,6,14),this.camera=new At(32,1,.05,50),this.camera.position.set(2.2,1.6,3.4),this.controls=new So(this.camera,r.domElement),this.controls.enableDamping=!0,this.controls.minDistance=1.2,this.controls.maxDistance=8,this.controls.maxPolarAngle=Math.PI*.495,this.controls.target.set(0,.9,0),this.buildLights(),this.buildFloor(),this.buildProps(),this.court=new No(this.scene),this.courtOn=!1,n&&(this.composer=new Ao(r),this.composer.addPass(new Ro(this.scene,this.camera)),this.bloom=new Bs(new K(256,256),.55,.5,.82),this.composer.addPass(this.bloom),this.composer.addPass(new Co)),this.ready=this.loadModel(t),this.resize(),this.camAnim=null}buildLights(){let e=this.scene;e.add(new co(12375039,1317670,.9));let t=new vi(16777215,2.2);t.position.set(2.5,5,3),t.castShadow=!0,t.shadow.mapSize.set(2048,2048);let n=t.shadow.camera;n.left=-2,n.right=2,n.top=2.5,n.bottom=-1,n.near=1,n.far=12,t.shadow.bias=-4e-4,t.shadow.normalBias=.02,t.shadow.radius=4,e.add(t);let s=new vi(7317759,1.4);s.position.set(-3,3,-3),e.add(s);let r=new vi(16777215,.5);r.position.set(-2,1.5,3),e.add(r)}buildFloor(){let e=new ft({color:1186342,roughness:.92}),t=new Ne(new Wi(9,64),e);t.rotation.x=-Math.PI/2,t.position.y=-.008,t.receiveShadow=!0,this.scene.add(t),this.homeFloor=[t];let n=new gt({color:2772870,transparent:!0,opacity:.55});for(let a of[-2.4,2.4]){let o=new Ne(new rn(8,.05),n);o.rotation.x=-Math.PI/2,o.position.set(0,-.007,a),this.scene.add(o),this.homeFloor.push(o)}let s=new Ne(new rn(.05,4.8),n);s.rotation.x=-Math.PI/2,s.position.set(0,-.007,0),s.visible=!1,this.scene.add(s);let r=new Ne(new Qt(1,.008,1),new ft({color:2304824,roughness:.85}));r.position.y=-.004,r.receiveShadow=!0,this.mat=r,this.scene.add(r)}setCourt(e){this.courtOn=e,this.court.setVisible(e);for(let t of this.homeFloor)t.visible=!e;this.mat.visible=!e,this.scene.fog.near=e?30:6,this.scene.fog.far=e?70:14,this.controls.maxDistance=e?34:8,this.camera.fov=e?46:32,this.camera.updateProjectionMatrix()}setMat(e,t,n=0,s=0){this.mat.scale.set(e,1,t),this.mat.position.x=n,this.mat.position.z=s}buildProps(){let e=this.scene;this.bandMat=new ft({color:3120747,roughness:.55}),this.band=new Ne(new ct,this.bandMat),this.band.castShadow=!0,this.band.visible=!1,e.add(this.band);let t=new Rt,n=new ft({color:3819097,roughness:.5,metalness:.4}),s=new Ne(new Qt(.07,2.1,.07),n);s.position.y=1.05,s.castShadow=!0;let r=new Ne(new Qt(.3,.03,.3),n);r.position.y=.015,t.add(s,r),t.visible=!1,this.post=t,e.add(t);let a=new Rt,o=new ft({color:2831426,roughness:.7}),l=new Ne(new Qt(.42,.06,.4),new ft({color:3753046,roughness:.6}));l.position.y=.44,l.castShadow=!0,l.receiveShadow=!0,a.add(l);for(let[d,f]of[[-.17,-.16],[.17,-.16],[-.17,.16],[.17,.16]]){let g=new Ne(new Qt(.04,.41,.04),o);g.position.set(d,.205,f),g.castShadow=!0,a.add(g)}a.visible=!1,this.bench=a,e.add(a);let c=new Rt,h=new ft({color:1777446,roughness:.35,metalness:.6}),u=new Ne(new mi(.014,.014,.13,16),new ft({color:9147813,metalness:.8,roughness:.3}));c.add(u);for(let d of[-.085,.085]){let f=new Ne(new mi(.038,.038,.045,24),h);f.position.y=d,f.castShadow=!0,c.add(f)}c.visible=!1,this.dumbbell=c,e.add(c),this.racket=vy(),this.racket.visible=!1,e.add(this.racket)}async loadModel(e){let t;if(e.endsWith(".txt")){let o=await(await fetch(e)).text(),l=Uint8Array.from(atob(o.trim()),c=>c.charCodeAt(0));t=await new Pr().parseAsync(l.buffer,"")}else t=await new Pr().loadAsync(e);let n=t.scene;this.model=n,n.updateMatrixWorld(!0);let s=[],r=1/0,a=new Uo;n.traverse(o=>{if(o.isSkinnedMesh){o.castShadow=!0,o.receiveShadow=!0,o.frustumCulled=!1;for(let l=0;l<o.geometry.attributes.position.count;l++)o.getVertexPosition(l,a),o.localToWorld(a),r=Math.min(r,a.y);s.push(o)}}),this.hl=[];for(let o of s){let l=o.name!=="Beta_Surface";this.prepareSurface(o,l?{color:2765120,roughness:.4,metalness:.3}:{color:14673130,roughness:.42,metalness:.08})}n.position.y=-r,n.updateMatrixWorld(!0),this.scene.add(n),this.rig=new Io(n)}prepareSurface(e,t){let n=e.geometry,s=n.attributes.position.count,r=new Float32Array(s*3),a=new Float32Array(s*3),o=new Uo,l=new Ye().getNormalMatrix(e.matrixWorld);for(let f=0;f<s;f++)e.getVertexPosition(f,o),e.localToWorld(o),r.set([o.x,o.y,o.z],f*3),o.fromBufferAttribute(n.attributes.normal,f).applyMatrix3(l).normalize(),a.set([o.x,o.y,o.z],f*3);let c=new bt(new Float32Array(s),1),h=new bt(new Float32Array(s),1);n.setAttribute("aPrim",c),n.setAttribute("aSec",h),this.hl.push({bindPos:r,w:Af(r,a),aPrim:c,aSec:h});let u=new ft(t),d=this.uniforms=this.uniforms||{uPrimColor:{value:new Se(16731438)},uSecColor:{value:new Se(16761902)},uPrimI:{value:0},uSecI:{value:0}};u.onBeforeCompile=f=>{Object.assign(f.uniforms,d),f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
attribute float aPrim;
attribute float aSec;
varying float vPrim;
varying float vSec;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vPrim = aPrim; vSec = aSec;`),f.fragmentShader=f.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uPrimColor; uniform vec3 uSecColor; uniform float uPrimI; uniform float uSecI;
varying float vPrim; varying float vSec;`).replace("#include <color_fragment>",`#include <color_fragment>
float hp = clamp(vPrim, 0.0, 1.0); float hs = clamp(vSec, 0.0, 1.0) * (1.0 - hp);
diffuseColor.rgb = mix(diffuseColor.rgb, uPrimColor, hp * 0.85);
diffuseColor.rgb = mix(diffuseColor.rgb, uSecColor, hs * 0.8);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += uPrimColor * hp * uPrimI + uSecColor * hs * uSecI;`)},e.material=u}setMuscles(e=[],t=[],n=null){for(let s of this.hl){let r=s.aPrim.count,a=s.aPrim.array,o=s.aSec.array;a.fill(0),o.fill(0);let l=s.bindPos,c=(h,u)=>{for(let d of h){let f=s.w[d];if(f)for(let g=0;g<r;g++)n==="L"&&l[g*3]<-.02||n==="R"&&l[g*3]>.02||f[g]>u[g]&&(u[g]=f[g])}};c(e,a),c(t,o),s.aPrim.needsUpdate=!0,s.aSec.needsUpdate=!0}}setEffort(e){this.uniforms.uPrimI.value=.25+1.1*e,this.uniforms.uSecI.value=.15+.55*e}updateBand(e,t=!0){if(this.band.visible=t&&e&&e.length>=2,!this.band.visible)return;let n=new gr(e);this.band.geometry.dispose(),this.band.geometry=new io(n,Math.max(8,e.length*6),.009,8,!1)}resize(){let e=this.container.clientWidth||1,t=this.container.clientHeight||1;this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.composer&&(this.composer.setSize(e,t),this.composer.setPixelRatio(this.renderer.getPixelRatio()))}frame(e,t,n=!1){let s=new Uo(...e),r=new Uo(...t);if(n){this.camera.position.copy(s),this.controls.target.copy(r),this.controls.update(),this.camAnim=null;return}this.camAnim={p0:this.camera.position.clone(),t0:this.controls.target.clone(),p:s,t:r,k:0}}render(e){if(this.camAnim){let t=this.camAnim;t.k=Math.min(1,t.k+e/.7);let n=t.k<.5?2*t.k*t.k:1-Math.pow(-2*t.k+2,2)/2;this.camera.position.lerpVectors(t.p0,t.p,n),this.controls.target.lerpVectors(t.t0,t.t,n),t.k>=1&&(this.camAnim=null)}this.controls.update(),this.composer?this.composer.render():this.renderer.render(this.scene,this.camera)}};var Rf={mode:"fk",flex:4,abd:7,rot:0,elbow:12,pron:15,grip:.25,scap:[0,0]},yy={hips:{p:[0,1.039,.02],r:[0,0,0]},spine:[0,0,0],head:[0,0,0],L:Rf,R:Rf,FL:{x:.1,z:-.02,out:8,heel:0},FR:{x:-.1,z:-.02,out:8,heel:0},effort:0},me=(i,e=yy)=>_h(e,i),Cf={io:i=>i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2,sine:i=>-(Math.cos(Math.PI*i)-1)/2,lin:i=>i,out:i=>1-(1-i)*(1-i),in:i=>i*i,hold:()=>0};function by(i,e,t){let[n,s,r,a]=t.win,o=d=>d*d*(3-2*d),l=e<=n||e>=a?0:e<s?o((e-n)/(s-n)):e<=r?1:o((a-e)/(a-r));if(!l)return i;let c=e<=s?0:e>=r?1:o((e-s)/(r-s)),h=t.yaw+((t.yawF??t.yaw)-t.yaw)*c;i.hips.r[1]+=.4*h*l,i.spine[1]+=.6*h*l,i.head&&(i.head[1]-=.45*h*l);let u=i.props&&i.props.racket;return u&&i[u].mode==="fk"&&(i[u].hflex=(i[u].hflex||0)+(u==="R"?1:-1)*t.hflex*l),i}function Fr(i,e,t=0,n=null){let s=(e%1+1)%1,r=t===1;i.mirror==="alt"&&(r=s>=.5,s=s%.5*2);let a=i.keys,o=0;for(;o<a.length-2&&s>=a[o+1].t;)o++;let l=a[o],c=a[o+1],h=c.t-l.t,u=h<=0?1:Math.min(1,Math.max(0,(s-l.t)/h)),d=(Cf[c.ease||"sine"]||Cf.sine)(u),f=Vt(l.pose,c.pose,d),g=r?vf(f):f;return n?by(g,s,n):g}var Dr={mode:"fk",flex:6,abd:9,rot:12,elbow:90,pron:-75,grip:.85,scap:[0,4],wflex:-5},Oo={...Dr,rot:-42,scap:[-3,13]},My={id:"rotazione-esterna",name:"Rotazione esterna con elastico",short:"Rotazione esterna",sets:2,reps:12,unit:"rip",tempo:"1 s fuori \xB7 breve pausa \xB7 1,5 s ritorno",dur:3,equip:"Elastico leggero",prim:["cuffia","deltPost"],sec:["romboidi"],why:"Rinforza i muscoli che stabilizzano la spalla in smash, bandeja e vibora. Una cuffia dei rotatori attiva riduce il rischio di dolore anteriore alla spalla quando colpisci sopra la testa.",cues:["Gomiti attaccati ai fianchi, piegati a 90\xB0. Puoi stringere un asciugamano arrotolato tra gomito e busto.","Avambracci paralleli al pavimento, palmi verso l'alto.","Ruota solo gli avambracci verso l'esterno: i gomiti restano fermi.","Scapole leggermente indietro e in basso, collo rilassato.","Torna piano, senza far scattare l'elastico."],errors:["Staccare i gomiti dal busto","Inarcare la schiena per tirare di pi\xF9","Alzare le spalle verso le orecchie"],props:{band:"hands",bandRest:.34},cam:{p:[1.5,1.75,2.6],t:[0,1.05,0]},keys:[{t:0,pose:me({L:Dr,R:Dr,spine:[0,0,0]})},{t:.36,pose:me({L:Oo,R:Oo,effort:1,spine:[-2,0,0]}),ease:"io"},{t:.52,pose:me({L:Oo,R:Oo,effort:1,spine:[-2,0,0]}),ease:"lin"},{t:1,pose:me({L:Dr,R:Dr}),ease:"sine"}]},Nr={mode:"fk",flex:88,abd:14,rot:0,elbow:4,pron:90,grip:.85,scap:[0,0]},Bo={...Nr,abd:82,scap:[-3,14]},Sy={id:"pull-apart",name:"Pull-apart con elastico",short:"Pull-apart",sets:2,reps:12,unit:"rip",tempo:"1 s apri \xB7 breve pausa \xB7 1,5 s chiudi",dur:3,equip:"Elastico leggero",prim:["romboidi","deltPost"],sec:["cuffia","trapSup"],why:"Attiva la muscolatura tra le scapole e la parte posteriore della spalla. Bilancia il lavoro dei pettorali e tiene la spalla centrata nei colpi alti e nelle vol\xE9e.",cues:["Braccia tese davanti al petto, all'altezza delle spalle, presa con i palmi in gi\xF9.","Apri le braccia fino a portare l'elastico al petto.","Avvicina le scapole alla fine del movimento.","Gomiti quasi tesi ma non bloccati.","Ritorno lento e controllato."],errors:["Inarcare la zona lombare","Alzare le spalle","Abbassare le braccia durante l'apertura"],props:{band:"hands",bandRest:.42},cam:{p:[1.7,1.8,2.7],t:[0,1.15,0]},keys:[{t:0,pose:me({L:Nr,R:Nr})},{t:.36,pose:me({L:Bo,R:Bo,effort:1,spine:[-2,0,0]}),ease:"io"},{t:.52,pose:me({L:Bo,R:Bo,effort:1,spine:[-2,0,0]}),ease:"lin"},{t:1,pose:me({L:Nr,R:Nr}),ease:"sine"}]},zo=me({hips:{p:[0,.635,-.04],r:[34,0,0]},spine:[16,0,0],head:[-14,0,0],FL:{x:.16,z:.4,out:10},FR:{x:-.16,z:.4,out:10},L:{mode:"ik",space:"world",t:[.15,.665,.3],hint:[.6,-1,-.4],pron:80,wflex:5,grip:.3},props:{bench:[0,0,-.1],bandFoot:"R",bandHand:"R"}}),ko=i=>({mode:"ik",space:"world",t:[-.14,.672,.51],hint:[-.35,-1,-.5],pron:88,wflex:i,grip:1}),Ey={id:"estensione-polso",name:"Estensione del polso con elastico",short:"Estensione polso",sets:2,reps:10,unit:"rip per braccio",tempo:"1 s su \xB7 2\u20133 s gi\xF9",dur:4,sided:!0,sideLabels:["Braccio destro","Braccio sinistro"],sideMuscles:"R",equip:"Elastico leggero e una sedia",prim:["estensori"],sec:["flessori"],why:`Gli estensori del polso lavorano a ogni impatto con la palla. Rinforzarli, soprattutto nella fase di discesa lenta, \xE8 uno dei metodi pi\xF9 efficaci per prevenire l'epicondilite (il "gomito del tennista").`,cues:["Seduto, avambraccio appoggiato sulla coscia, il polso esce oltre il ginocchio.","Blocca un capo dell'elastico sotto il piede dello stesso lato, l'altro capo in mano con il palmo verso il basso.","Solleva il dorso della mano muovendo solo il polso.","Scendi lentamente in 2\u20133 secondi: \xE8 la parte pi\xF9 utile dell'esercizio.","L'avambraccio resta fermo sulla coscia per tutta la serie."],errors:["Sollevare l'avambraccio dalla coscia","Usare un elastico troppo duro","Lasciar tornare l'elastico di colpo"],props:{band:"foot",mat:[.9,.9,0,.1]},cam:{p:[-1.9,1.15,1.6],t:[0,.62,.25]},keys:[{t:0,pose:me({R:ko(30)},zo)},{t:.25,pose:me({R:ko(-42),effort:1},zo),ease:"io"},{t:.36,pose:me({R:ko(-42),effort:1},zo),ease:"lin"},{t:1,pose:me({R:ko(30),effort:.2},zo),ease:"sine"}]},Pf={hips:{p:[0,1.083,.03]},FL:{heel:36},FR:{heel:36},effort:1},Ty={id:"polpacci",name:"Sollevamenti sui polpacci",short:"Polpacci",sets:2,reps:12,unit:"rip",tempo:"1 s su \xB7 breve pausa \xB7 1,5 s gi\xF9",dur:2.6,equip:"Nessuno (puoi appoggiarti a un muro)",prim:["polpacci"],sec:[],why:"Prepara polpacci e tendine d'Achille agli scatti, allo split-step e ai cambi di direzione. \xC8 la zona che soffre di pi\xF9 sul campo in erba sintetica.",cues:["Piedi alla larghezza delle anche, punte leggermente in fuori.","Sali sugli avampiedi il pi\xF9 in alto possibile, ginocchia distese.","Peso sull'alluce e sul secondo dito: la caviglia non deve cedere verso l'esterno.","Fermati un secondo in alto, poi scendi lentamente."],errors:["Rimbalzare velocemente","Piegare le ginocchia","Caricare il bordo esterno del piede"],cam:{p:[1.9,1,-2.4],t:[0,.65,0]},keys:[{t:0,pose:me({})},{t:.3,pose:me(Pf),ease:"io"},{t:.5,pose:me(Pf),ease:"lin"},{t:1,pose:me({}),ease:"sine"}]},Lf=i=>({mode:"ik",space:"world",t:[i*.25,.085,.1],hint:[i*1,.15,0],pron:85,grip:.1,wflex:-8}),vh=me({hips:{p:[0,.168,0],r:[-90,0,0]},spine:[0,0,0],head:[6,0,0],L:Lf(1),R:Lf(-1),FL:{x:.12,z:.42,out:4,knee:[.15,1,.5]},FR:{x:-.12,z:.42,out:4,knee:[-.15,1,.5]}}),If=me({hips:{p:[0,.41,-.1],r:[-131,0,0]},spine:[14,0,0],head:[34,0,0],effort:1},vh),wy={id:"ponte-glutei",name:"Ponte glutei",short:"Ponte glutei",sets:2,reps:12,unit:"rip",tempo:"1 s su \xB7 1 s fermo \xB7 1,5 s gi\xF9",dur:3.4,equip:"Tappetino",prim:["glutei"],sec:["femorali","lombari"],why:"Accende i glutei, il motore di spinte, affondi e rotazioni. Glutei attivi tolgono carico alla zona lombare e alle ginocchia nei movimenti bassi.",cues:["Supino, ginocchia piegate, piedi alla larghezza delle anche e vicini ai glutei.","Spingi con i talloni e solleva il bacino fino ad allineare spalle, anche e ginocchia.","Stringi i glutei in alto per un secondo, senza inarcare la schiena.","Scendi vertebra dopo vertebra."],errors:["Inarcare la zona lombare in alto","Spingere con le punte","Aprire o chiudere le ginocchia"],props:{mat:[.66,1.9,0,-.35]},cam:{p:[2.4,.5,.45],t:[0,.27,-.12]},keys:[{t:0,pose:vh},{t:.26,pose:If,ease:"io"},{t:.6,pose:If,ease:"lin"},{t:1,pose:vh,ease:"sine"}]},Df=i=>({mode:"ik",t:[i*.045,-.12,.26],hint:[i*.8,-1,-.2],pron:10,grip:.6}),yh=me({hips:{p:[0,.955,.02],r:[4,0,0]},FL:{x:.46,z:-.02,out:14},FR:{x:-.46,z:-.02,out:14},L:Df(1),R:Df(-1)}),Nf=me({hips:{p:[.29,.66,-.1],r:[36,0,0]},spine:[6,0,0],head:[-26,0,0],effort:1},yh),Ay={id:"affondo-laterale",name:"Affondo laterale alternato",short:"Affondo laterale",sets:2,reps:8,unit:"rip per lato",tempo:"1 s gi\xF9 \xB7 1 s su, alternando i lati",dur:5,mirror:"alt",equip:"Nessuno",prim:["adduttori","quadricipiti","glutei"],sec:["gluteoMedio"],why:"Riproduce gli spostamenti laterali del padel. Scalda adduttori e anche, le zone pi\xF9 colpite da stiramenti negli scatti laterali e nei recuperi bassi.",cues:["Piedi larghi circa il doppio delle spalle, punte leggermente in fuori.","Siediti su un lato spingendo il bacino indietro, come per sederti.","Il ginocchio piegato resta in linea con la punta del piede.","L'altra gamba resta tesa, piede intero a terra.","Petto aperto, schiena lunga. Spingi con il tallone per tornare al centro."],errors:["Ginocchio che cade verso l'interno","Tallone che si solleva","Schiena curva"],props:{mat:[1.3,.9,0,0]},cam:{p:[.6,1.3,3.6],t:[0,.75,0]},keys:[{t:0,pose:yh},{t:.45,pose:Nf,ease:"sine"},{t:.55,pose:Nf,ease:"lin"},{t:1,pose:yh,ease:"io"}]},Uf=i=>({mode:"ik",t:[i*.05,-.02,.44],hint:[i*.6,-1,-.3],pron:5,grip:.6}),Ji=me({L:Uf(1),R:Uf(-1)}),Ff=me({hips:{p:[0,1.02,.1]},FL:{z:.3,y:.09,heel:-6,toeFlat:!1}},Ji),Ry=me({hips:{p:[0,.9,.3]},FL:{z:.8,y:.035,heel:-10,toeFlat:!1},FR:{heel:18}},Ji),Cy=me({hips:{p:[0,.9,.3]},FL:{z:.8,y:.03,heel:12,toeFlat:!1},FR:{heel:20}},Ji),Of=me({hips:{p:[0,.875,.34]},FL:{z:.8,y:0,heel:0},FR:{heel:28}},Ji),bh=me({hips:{p:[0,.6,.36],r:[4,0,0]},FL:{z:.8},FR:{heel:58},spine:[2,0,0]},Ji),Bf=me({spine:[2,38,0],hips:{r:[4,6,0]},head:[0,10,0],effort:1},bh),Py={id:"affondo-rotazione",name:"Affondo con rotazione del busto",short:"Affondo + rotazione",sets:2,reps:6,unit:"rip per lato",tempo:"controllato, 1 s di rotazione",dur:7.6,mirror:"alt",equip:"Nessuno",prim:["quadricipiti","glutei","obliqui"],sec:["adduttori","addome"],why:"Unisce la spinta delle gambe alla rotazione del busto, la stessa catena che usi nel dritto, nel rovescio e nelle uscite dalla parete. Mobilizza anche e colonna toracica.",cues:["Fai un passo lungo in avanti e scendi finch\xE9 entrambe le ginocchia sono a circa 90\xB0.","Il ginocchio davanti resta sopra la caviglia, quello dietro si avvicina al pavimento.","Braccia tese davanti al petto: ruota il busto verso la gamba avanti.","Ruota dal torace, il bacino resta frontale.","Torna al centro e spingi con il piede avanti per rientrare."],errors:["Ginocchio avanti che cade all'interno","Busto che si piega in avanti","Ruotare solo con le braccia"],props:{mat:[.75,1.6,0,.3]},cam:{p:[3.1,1.35,2],t:[0,.8,.3]},keys:[{t:0,pose:Ji},{t:.13,pose:Ff,ease:"sine"},{t:.22,pose:Ry,ease:"out"},{t:.27,pose:Of,ease:"sine"},{t:.4,pose:bh,ease:"sine"},{t:.54,pose:Bf,ease:"io"},{t:.6,pose:Bf,ease:"lin"},{t:.72,pose:bh,ease:"io"},{t:.83,pose:Of,ease:"sine"},{t:.88,pose:Cy,ease:"sine"},{t:.94,pose:Ff,ease:"sine"},{t:1,pose:Ji,ease:"in"}]},zf={x:.11,z:.493,y:.7,heel:-90,toeFlat:!1,toe:6},Mh=me({hips:{p:[0,.168,0],r:[-90,0,0]},spine:[0,0,0],head:[8,0,0],L:{mode:"fk",flex:90,abd:6,rot:0,elbow:4,pron:0,grip:.3},R:{mode:"fk",flex:90,abd:6,rot:0,elbow:4,pron:0,grip:.3},FL:{...zf,knee:[.1,1,-.4]},FR:{...zf,x:-.11,knee:[-.1,1,-.4]}}),kf=me({R:{flex:165,abd:8,elbow:6},FL:{z:.935,y:.35,heel:-82},effort:1},Mh),Ly={id:"dead-bug",name:"Dead bug",short:"Dead bug",sets:2,reps:8,unit:"rip per lato",tempo:"2 s in allungamento \xB7 2 s ritorno",dur:7.2,mirror:"alt",equip:"Tappetino",prim:["addome","obliqui"],sec:["quadricipiti","deltAnt"],why:"Insegna al core a tenere ferma la zona lombare mentre braccia e gambe si muovono. \xC8 la stessa stabilit\xE0 che ti serve quando colpisci in allungo o sopra la testa senza perdere l'equilibrio.",cues:["Supino, braccia tese verso il soffitto, anche e ginocchia piegate a 90\xB0.","Schiaccia la zona lombare contro il tappetino e tienila l\xEC per tutta la serie.","Allunga lentamente un braccio dietro la testa e la gamba opposta in avanti, appena sopra il pavimento.","Espira mentre allunghi, torna al centro e cambia lato."],errors:["Staccare la zona lombare dal tappetino","Andare veloce","Trattenere il respiro"],props:{mat:[.66,1.9,0,0]},cam:{p:[2.7,1.25,.6],t:[0,.35,.05]},keys:[{t:0,pose:Mh},{t:.42,pose:kf,ease:"sine"},{t:.52,pose:kf,ease:"lin"},{t:1,pose:Mh,ease:"sine"}]},Gf=me({FL:{x:.21,z:0,out:12},FR:{x:-.21,z:0,out:12},props:{bandFoot:"L"}}),Hf=me({hips:{p:[.04,.79,-.1],r:[34,20,0]},spine:[12,16,0],head:[-20,10,0],L:{mode:"ik",space:"world",t:[.3,.46,.3],hint:[.6,-.4,-.7],pron:30,grip:1},R:{mode:"ik",space:"world",t:[.22,.48,.35],hint:[-.3,-.5,-.8],pron:30,grip:1},effort:.3},Gf),Vf=me({hips:{p:[-.02,1.03,.01],r:[2,-12,0]},spine:[-4,-30,0],head:[4,-14,0],L:{mode:"ik",space:"world",t:[-.22,1.76,.3],hint:[.4,-1,.1],pron:20,grip:1},R:{mode:"ik",space:"world",t:[-.3,1.72,.25],hint:[-.7,-1,-.1],pron:20,grip:1},effort:1},Gf),Iy={id:"diagonale-elastico",name:"Diagonale con elastico sotto il piede",short:"Diagonale elastico",sets:2,reps:8,unit:"rip per lato",tempo:"veloce in salita \xB7 2 s in discesa",dur:2.8,sided:!0,sideLabels:["Sotto il piede sinistro","Sotto il piede destro"],equip:"Elastico medio",prim:["obliqui","glutei"],sec:["quadricipiti","deltAnt","addome"],why:"Allena la rotazione dal basso verso l'alto che d\xE0 potenza a smash, vibora e uscite di parete. La forza parte dalle gambe, passa dalle anche e arriva alle braccia, senza bisogno di agganciare l'elastico.",cues:["Blocca l'elastico sotto il piede sinistro, impugna l'altro capo con entrambe le mani.","Parti accosciato, busto ruotato verso il piede sinistro, mani vicino alla caviglia.","Spingi con le gambe e ruota, portando le mani in diagonale sopra la spalla destra.","Le braccia restano quasi tese: il movimento lo fanno anche e busto.","Torna gi\xF9 lentamente, poi fai l'altro lato."],errors:["Tirare solo con le braccia","Inarcare la schiena in alto","Piegare le ginocchia verso l'interno"],props:{band:"foot",mat:[.9,.9,0,0]},cam:{p:[.5,1.4,3.4],t:[0,1,.1]},keys:[{t:0,pose:Hf},{t:.24,pose:Vf,ease:"out"},{t:.34,pose:Vf,ease:"lin"},{t:1,pose:Hf,ease:"sine"}]},Mt=i=>({mode:"fk",flex:0,abd:0,hflex:0,rot:0,elbow:90,pron:0,wflex:0,wdev:0,grip:1,...i}),zt=(i,e,t=0,n=.3)=>({mode:"ik",t:i,hint:e,attachW:t,grip:n,pron:10}),Or=(i,e,t={})=>({...zt(i,e,1,.97),at:[.076,.012,.095],pron:34,wflex:24,wdev:28,...t}),Wf=Or([.02,-.16,.3],[.7,-1,-.3]),Dy={mode:"ik",space:"world",t:[-.131,1.092,.296],hint:[-.4,-1,-.2],pron:-9,wflex:-8,wdev:20,grip:1},Ny=me({hips:{p:[0,.95,-.02],r:[12,0,0]},spine:[4,0,0],head:[-10,0,0],FL:{x:.24,z:0,out:10,pivot:"ball"},FR:{x:-.24,z:0,out:10,pivot:"ball"},R:Dy,L:Wf,props:{racket:"R"}}),Rn=me({hips:{p:[.02,.94,.12],r:[17,2,-2]},spine:[8,1,1],head:[-20,-3,0],FL:{x:.25,z:.06,out:10,pivot:"ball"},FR:{x:-.21,z:-.06,out:10,pivot:"ball"},R:Mt({flex:20,abd:13,hflex:-6,rot:25,elbow:93,pron:-1,wflex:-13,wdev:25})},Ny),qo=me({hips:{p:[.02,.97,-.09],r:[11,-30,-1]},spine:[1,-36,10],head:[-10,58,0],FL:{x:.25,z:.06,out:-45},FR:{x:-.1,z:-.34,out:72},R:Mt({flex:34,abd:58,hflex:61,rot:-8,elbow:64,pron:-16,wflex:-12,wdev:14,scap:[4,0]}),L:Or([.02,-.1,.3],[.7,-1,-.3],{at:[.076,.024,.1],pron:22,wdev:22})},Rn),Ho=me({hips:{p:[0,.94,.045],r:[6,-61,-7]},spine:[-6,-41,12],head:[-22,70,0],FL:{x:.25,z:.06,out:-50},FR:{x:-.1,z:-.34,out:74},R:Mt({flex:21,abd:90,hflex:40,rot:-60,elbow:70,pron:-20,wflex:8,wdev:-1,scap:[12,4]}),L:zt([.1,.48,.325],[.6,-.4,-.6],0,.15)},qo),Uy=me({hips:{p:[0,.97,-.05],r:[3,-71,1]},spine:[-16,-41,-8],head:[-24,72,0],R:Mt({flex:16,abd:76,hflex:59,rot:-58,elbow:95,pron:-68,wflex:-32,wdev:-25,scap:[14,6]}),L:zt([.07,.49,.325],[.6,-.4,-.6],0,.15)},Ho),Eh=me({hips:{p:[.02,.98,-.035],r:[10,-55,-2]},spine:[-1,-27,7],head:[-16,50,0],FR:{heel:22},R:Mt({flex:72,abd:119,hflex:56,rot:-17,elbow:38,pron:-15,wflex:5,wdev:-20,scap:[14,0]}),L:zt([.58,.315,.21],[.8,-1,-.3],0,.3),effort:1},Ho),Vo=me({hips:{p:[.05,.995,.005],r:[8,-21,-3]},spine:[4,-15,-11],head:[-10,30,0],FR:{heel:36},R:Mt({flex:75,abd:38,hflex:42,rot:30,elbow:15,pron:30,wflex:-10,wdev:5,scap:[4,-6]}),L:zt([.635,-.045,.1],[.8,-1,-.2],0,.3),effort:.5},Eh),Fy=me({R:Mt({flex:72,abd:95,hflex:72,rot:-17,elbow:28,pron:-5,wflex:0,wdev:-15,scap:[10,0]})},Vt(Eh,Vo,.4)),Oy=me({FR:{x:-.16,z:-.2,y:.07,heel:10,toeFlat:!1}},Vt(Vo,Rn,.5)),By=me({FR:{x:-.16,z:-.2,y:.07,heel:10,toeFlat:!1},R:Mt({flex:22,abd:24,hflex:22,rot:13,elbow:95,pron:16,wflex:-33,wdev:-13,scap:[2,0]}),L:Or([.02,-.13,.3],[.7,-1,-.3],{at:[.064,.012,.1]})},Vt(Rn,qo,.5)),zy=me({FR:{x:-.16,z:-.24,y:.07,heel:10,toeFlat:!1},R:Mt({flex:22,abd:45,hflex:22,rot:-10,elbow:95,pron:0,wflex:-20,wdev:-5,scap:[3,0]}),L:zt([.3,.1,.35],[.7,-1,-.3],0,.3)},Vt(Rn,qo,.5)),Xf=me({hips:{p:[.02,.99,-.09],r:[10,-35,-6]},spine:[2,-19,14],head:[-10,50,0],FL:{x:.25,z:.06,out:-45},FR:{x:-.12,z:-.42,out:72},R:Mt({flex:18,abd:73,hflex:40,rot:-57,elbow:65,pron:12,wflex:-13,wdev:-16,scap:[6,0]}),L:zt([.65,.245,.03],[-2.25,-3.55,.2],0,.15)},Rn),Go=me({hips:{p:[.04,1,-.08],r:[11,-41,-1]},spine:[4,-20,10],head:[-22,62,0],R:Mt({flex:66,abd:107,hflex:-3,rot:-71,elbow:102,pron:-14,wflex:-8,wdev:-4,scap:[12,4]}),L:zt([.535,.475,-.185],[-2.1,-3.25,1.25],0,.15)},Xf),ky=me({hips:{p:[.01,1,-.02],r:[11,-48,-1]},spine:[3,-6,12],head:[-20,60,0],R:Mt({flex:6,abd:96,hflex:67,rot:-40,elbow:73,pron:6,wflex:-12,wdev:-12,scap:[12,2]}),L:zt([.61,.405,-.02],[.2,-.4,.2],0,.15)},Go),qf=me({hips:{p:[.02,1,-.02],r:[12,-43,-3]},spine:[0,-6,13],head:[-16,45,0],FR:{heel:22},R:Mt({flex:42,abd:102,hflex:51,rot:-40,elbow:25,pron:1,wflex:-14,wdev:-13,scap:[12,0]}),L:zt([.64,.34,-.08],[1.8,-3.5,.5],0,.3),effort:1},Go),Yf=me({hips:{p:[.04,.99,0],r:[9,-19,1]},spine:[-2,-7,4],head:[-12,30,0],FR:{heel:30},R:Mt({flex:87,abd:84,hflex:62,rot:6,elbow:16,pron:21,wflex:-7,wdev:-8,scap:[8,0]}),L:zt([.625,.305,-.21],[1.6,-3.7,-.3],0,.3),effort:.8},qf),Sh=me({hips:{p:[.05,.995,.005],r:[12,-20,-4]},spine:[14,6,1],head:[-20,15,0],FR:{heel:36},R:Mt({flex:80,abd:42,hflex:55,rot:38,elbow:50,pron:-8,wflex:-3,wdev:-18,scap:[4,-6]}),L:zt([.32,.005,.465],[2,-1.8,-1.1],0,.3),effort:.5},Yf),Hy=me({FR:{x:-.16,z:-.24,y:.07,heel:10,toeFlat:!1}},Vt(Sh,Rn,.5)),Yo=["Continental: la stessa impugnatura per vol\xE9e, bandeja, vibora e smash. Non la cambi tra dritto e rovescio.","Per trovarla tieni la racchetta di taglio, con il bordo verso l'alto, e prendila come un martello: la V tra pollice e indice sta sullo spigolo superiore del manico.","Il fondo del manico resta nel palmo, vicino al tallone della mano. Sopra l'indice rimane un po' di manico libero.","Indice leggermente staccato dalle altre dita, lungo il manico come sul grilletto: d\xE0 controllo al piatto.","Il pollice avvolge il manico dal lato opposto alle dita, di traverso, e si appoggia sul medio: chiude la presa insieme all'indice. Non va disteso lungo il manico.","Stretta morbida in attesa, pi\xF9 ferma solo all'impatto. Una presa sempre stretta irrigidisce polso e gomito.","In attesa l'altra mano tiene la racchetta dal cuore: la porta su nella preparazione e lascia la mano forte rilassata."],Cn=Rn,Kf=me({hips:{p:[.01,.97,.06]},FL:{heel:14,y:.025,toeFlat:!1},FR:{heel:14,y:.025,toeFlat:!1}},Cn),zn=me({hips:{p:[-.03,.9,.04],r:[14,0,0]},FL:{x:.29,z:.085},FR:{x:-.28,z:-.2}},Cn),Ur=me({hips:{p:[-.045,.89,.01],r:[12,-18,4]},spine:[9,-28,8],head:[-17,41,0],R:Mt({flex:68,abd:113,hflex:58,rot:-32,elbow:43,pron:20,wflex:-29,wdev:-14,scap:[8,2]}),L:zt([.62,-.1,.24],[.4,-1,-.3],0,.15)},zn),Th=me({hips:{p:[.045,.885,.37],r:[13,-17,1]},spine:[9,-22,9],head:[-18,34,0],FL:{x:.3,z:.66,out:8},FR:{heel:16},R:Mt({flex:50,abd:36,hflex:44,rot:-68,elbow:100,pron:55,wflex:-8,wdev:-25,scap:[4,0]}),L:zt([.66,-.04,.22],[.4,-1,-.3],0,.15),effort:1},Ur),Wo=me({hips:{p:[.035,.82,.48],r:[28,4,-2]},spine:[20,5,6],head:[-36,-6,0],FR:{heel:38},R:Mt({flex:18,abd:106,hflex:120,rot:-28,elbow:34,pron:-14,wflex:-9,wdev:10,scap:[2,-4]}),L:Or([.02,-.16,.3],[.7,-1,-.3],{at:[.068,-.024,.1],pron:26,wflex:22,wdev:24,grip:.66}),effort:.5},Th),Vy=me({R:Mt({flex:19,abd:43,hflex:28,rot:-62,elbow:115,pron:33,wflex:-22,wdev:-25,scap:[3,1]}),L:zt([.4,-.08,.42],[.7,-1,-.1],.3,.3)},Vt(zn,Ur,.5)),Gy=me({FL:{x:.3,z:.36,y:.07,heel:8,out:8,toeFlat:!1}},Vt(Ur,Th,.4)),Wy=me({FL:{y:.04,heel:10,toeFlat:!1}},Wo),Xy=me({FL:{x:.27,z:.36,y:.07,heel:8,toeFlat:!1},R:Cn.R,L:Wf},Vt(Wo,zn,.5)),Zf=me({FL:{x:.25,z:.06}},zn),qy=me({FR:{x:-.24,z:-.13,y:.04,heel:8,toeFlat:!1}},Vt(Zf,Cn,.5)),Yy={id:"volee-dritto",name:"Vol\xE9e di dritto a vuoto",short:"Vol\xE9e dritto",section:"Colpi a vuoto",sets:2,reps:8,unit:"rip",tempo:"attesa \xB7 preparazione corta \xB7 impatto davanti \xB7 accompagna verso la rete",dur:3.2,sided:!0,sideLabels:["Destrorso","Mancino"],handed:!0,equip:"La tua racchetta, senza palla",gripCues:Yo,prim:["deltAnt","estensori"],sec:["obliqui","quadricipiti","cuffia"],why:"La vol\xE9e \xE8 il colpo con cui comandi il punto da rete. Ripeterla a vuoto fissa la preparazione corta, l'impatto davanti e il passo che scarica il peso in avanti, e scalda spalla e avambraccio nella posizione che userai in partita.",cues:["Attesa a 2-3 metri dalla rete: gambe poco pi\xF9 larghe delle spalle e leggermente piegate, racchetta alta davanti a te. Ti sposti verso il centro se la palla arriva dalla diagonale, verso il centro della tua met\xE0 se arriva dal lungolinea.","Preparazione: porti la racchetta di lato, con la mano all'altezza della testa, girando appena il busto. Il gomito resta alto, all'altezza della spalla, e la racchetta sta sopra la mano. Non superare mai la linea delle spalle.","Mano sinistra in avanti: la racchetta va verso la mano sinistra e colpisce la palla davanti al corpo.","All'impatto il gomito scende davanti al fianco, il polso resta fermo e piegato un po' indietro: la testa della racchetta resta pi\xF9 alta della mano, all'altezza del viso.","Passo di scarico in avanti mentre colpisci: il peso va verso la palla, la racchetta accompagna in avanti verso l'altro campo.","A fine colpo la mano sinistra riprende la racchetta dal cuore e insieme la riportano davanti al petto: rientra subito nella posizione di attesa."],errors:["Racchetta bassa in attesa, come in difesa: le palle dalle spalle in su (e bandeja e smash) diventano pi\xF9 difficili.","Preparazione troppo ampia, oltre la linea della spalla, per dare pi\xF9 forza: non fai in tempo e la palla finisce sul vetro.","Fare il passo in avanti mentre prepari: l'impatto finisce dietro la testa. Prima prepari, poi scarichi il peso.","Vol\xE9e bassa con taglio o in top spin: si alza dopo la rete, non arriva profonda e diventa comoda per gli avversari."],tactics:["Profondit\xE0 prima di tutto: la palla deve rimbalzare tra la riga e il vetro, cos\xEC gli avversari faticano a contrattaccare.","Direzione: soprattutto in diagonale. Hai pi\xF9 spazio per colpire e c'\xE8 l'angolo: dopo la doppia parete per loro \xE8 pi\xF9 difficile.","Varia: gioca nello spazio libero dove non c'\xE8 nessuno, per far spostare uno dei due avversari.","Se la palla \xE8 abbastanza alta puoi giocarla verso la griglia: il rimbalzo sar\xE0 irregolare.","Mezza altezza: piatta per togliere tempo o con taglio per tenerli in difesa. Alta: piatta, verso lo spazio libero. Bassa: sempre piatta.","Se la palla arriva molto veloce non c'\xE8 tempo per il passo: resta fermo con le gambe e manda avanti solo la racchetta.","Schiaffo al volo, sulla palla lenta a mezza altezza: preparazione un po' pi\xF9 ampia, colpisci da dietro e cerca molta profondit\xE0. La palla rimbalza subito sul vetro e torna verso il tuo campo."],court:{hit:.46,aimWin:[.36,.46,.64,.84],net:2.5,lob:{from:[5.2,.9,11.6],start:.2},shots:[{id:"diag",label:"Diagonale profonda",color:"#3ddc84",land:[5.5,10.9],time:.6,glassUp:.35,text:"La scelta principale: profonda, tra la riga e il vetro, e in diagonale. C'\xE8 pi\xF9 spazio e c'\xE8 l'angolo: dopo la doppia parete per l'avversario \xE8 pi\xF9 difficile."},{id:"free",label:"Spazio libero",color:"#4a8cff",land:[-1.3,11],time:.55,glassUp:.4,flat:!0,text:"Gioca dove non c'\xE8 nessuno: qui lungolinea, per far spostare uno dei due avversari."},{id:"grid",label:"Alla griglia",color:"#ffc23a",land:[6.85,6.4],time:.5,glassUp:.3,flat:!0,text:"Se la palla \xE8 abbastanza alta: verso la griglia. Dopo il rimbalzo sulla rete metallica la palla esce irregolare."},{id:"slap",label:"Schiaffo al volo",color:"#c77dff",land:[3.6,11.9],time:.42,glassUp:1,flat:!0,text:"Vol\xE9e d'attacco sulla palla lenta a mezza altezza: molto profonda, rimbalza subito sul vetro e torna verso il tuo campo, togliendo tempo agli avversari."},{id:"short",label:"Errore: corta",color:"#ff5233",land:[3.8,7],time:.62,glassUp:.9,error:!0,errorAt:"bounce",errorLabel:"Corta: contrattaccano",text:"Da evitare: se rimbalza prima della riga, gli avversari hanno tempo e spazio per contrattaccare e mandarti in difesa."}]},props:{mat:[1,1.3,0,.1]},cam:{p:[.3,1.4,3.6],t:[0,1.15,0]},keys:[{t:0,pose:Cn},{t:.06,pose:Kf,ease:"out"},{t:.12,pose:zn,ease:"in"},{t:.2,pose:Vy,ease:"sine"},{t:.28,pose:Ur,ease:"sine"},{t:.36,pose:Ur,ease:"lin"},{t:.41,pose:Gy,ease:"sine"},{t:.46,pose:Th,ease:"in"},{t:.54,pose:Wo,ease:"out"},{t:.64,pose:Wo,ease:"lin"},{t:.69,pose:Wy,ease:"sine"},{t:.78,pose:Xy,ease:"sine"},{t:.86,pose:Zf,ease:"sine"},{t:.93,pose:qy,ease:"sine"},{t:1,pose:Cn,ease:"sine"}]},$i=me({hips:{p:[.15,.88,.07],r:[10,62,1]},spine:[9,16,1],head:[-16,-70,0],FL:{x:.4,z:-.15,out:45},R:Mt({flex:30,abd:75,hflex:95,rot:-28,elbow:100,pron:30,wflex:-12,wdev:-25,scap:[6,-4]}),L:Or([.02,-.16,.3],[.7,-1,-.3],{at:[.076,.036,.11],pron:46,wflex:12,grip:.85})},zn),wh=me({hips:{p:[.12,.88,.38],r:[8,61,3]},spine:[4,-7,2],head:[-18,-50,0],FL:{heel:14},FR:{x:-.27,z:.6,out:-8},R:Mt({flex:15,abd:43,hflex:51,rot:-52,elbow:49,pron:9,wflex:4,wdev:-3,scap:[4,0]}),L:zt([.48,.3,.05],[1,-.5,-.3],0,.15),effort:1},$i),Xo=me({hips:{p:[.08,.86,.5],r:[13,55,2]},spine:[12,-20,10],head:[-26,-30,0],FL:{heel:26},R:Mt({flex:19,abd:64,hflex:18,rot:-86,elbow:21,pron:51,wflex:-18,wdev:-15,scap:[2,0]}),L:zt([.47,.36,-.1],[1,-.5,-.3],0,.15),effort:.5},wh),Ky=me({FL:{x:.35,z:-.04,y:.05,heel:8,out:25,toeFlat:!1}},Vt(zn,$i,.5)),Zy=me({FR:{x:-.26,z:.2,y:.07,heel:8,out:-4,toeFlat:!1}},Vt($i,wh,.4)),jy=me({FR:{y:.04,heel:10,toeFlat:!1}},Xo),Jy=me({FL:$i.FL,FR:{x:-.25,z:.22,y:.07,heel:8,toeFlat:!1},R:Cn.R,L:zt([.3,-.12,.3],[.7,-1,-.3],.5,.5)},Vt(Xo,zn,.5)),jf=me({FL:$i.FL,FR:Cn.FR},zn),$y=me({FL:{x:.32,z:-.05,y:.05,heel:8,out:25,toeFlat:!1}},Vt(jf,Cn,.5)),Qy={id:"volee-rovescio",name:"Vol\xE9e di rovescio a vuoto",short:"Vol\xE9e rovescio",section:"Colpi a vuoto",sets:2,reps:8,unit:"rip",tempo:"attesa \xB7 preparazione corta a sinistra \xB7 impatto davanti \xB7 passo di scarico con il destro",dur:3.2,sided:!0,sideLabels:["Destrorso","Mancino"],handed:!0,equip:"La tua racchetta, senza palla",gripCues:Yo,prim:["deltPost","estensori"],sec:["obliqui","quadricipiti","cuffia"],why:"La vol\xE9e di rovescio \xE8 il colpo con cui blocchi le palle veloci che arrivano al corpo: non serve muovere i piedi n\xE9 portare indietro la racchetta, sfrutti la velocit\xE0 della palla. Ripeterla a vuoto fissa la preparazione corta con la mano sinistra sul cuore, l'impatto davanti e il passo di scarico con il piede destro, e scalda spalla e avambraccio nella posizione che userai in partita.",cues:["Attesa a 2-3 metri dalla rete, la stessa della vol\xE9e di dritto: racchetta pi\xF9 o meno all'altezza della testa, mano sinistra sul cuore, gambe leggermente piegate e un po' pi\xF9 larghe delle spalle.","Preparazione: giri leggermente il busto e porti la racchetta di lato, a sinistra della testa, tenendola anche con la mano sinistra sul cuore. Non andare oltre la linea delle spalle. Il piede sinistro si apre un po'.","Porta la racchetta in avanti e colpisci la palla davanti al corpo. Mentre colpisci la mano sinistra lascia il cuore e va nella direzione opposta: le braccia si aprono e danno spinta alla palla.","Passo di scarico in avanti con il piede destro: il peso va sulla gamba destra e la racchetta accompagna la palla verso l'altro campo. Pi\xF9 peso in avanti vuol dire pi\xF9 profondit\xE0 e pi\xF9 controllo della direzione.","Mezza altezza: piatta, portando la racchetta da dietro in avanti senza far cadere troppo la punta; oppure in backspin, con la punta un po' pi\xF9 alta che scende verso il basso, e il finale diretto verso l'altro campo. Dopo il vetro la palla cade pi\xF9 in fretta.","A fine colpo la mano sinistra torna sul cuore, il piede destro rientra e sei di nuovo in attesa."],errors:["Preparare con la racchetta troppo dietro: la palla entra troppo e la colpisci dietro rispetto al corpo, non davanti.","Fare il passo in avanti prima che arrivi la palla: te la ritrovi troppo vicina al corpo e non riesci pi\xF9 a colpirla da dietro in avanti.","Lasciare la racchetta con la mano sinistra dopo la preparazione: la gestisce solo il braccio destro, perdi controllo e la palla ha meno spinta. Le due braccia devono andare in direzioni opposte.","Peso all'indietro all'impatto: la palla si alza invece di andare verso il basso.","Palla bassa giocata in backspin: sale dopo la rete e gli avversari attaccano e ti tolgono la rete."],tactics:["Palle veloci al corpo: usa il rovescio. \xC8 un vero blocco: la racchetta davanti, senza muovere i piedi, sfruttando la velocit\xE0 della palla. Di dritto puoi farlo solo spostando il braccio verso l'interno, un movimento molto meno naturale.","Il giocatore di destra lo usa pi\xF9 di quello di sinistra quando ha il rovescio verso il centro: buona parte delle palle dalla diagonale gli arrivano sul rovescio. Da mancino a destra il rovescio \xE8 dalla parte della parete laterale.","Posizione: pi\xF9 la palla arriva dalla diagonale, pi\xF9 ti sposti verso il centro; pi\xF9 arriva dal tuo lungolinea, pi\xF9 ti sposti verso la griglia.","Direzione: soprattutto lo spazio libero, per far muovere gli avversari. Per aprire il campo gioca prima al centro e poi verso l'angolo.","Profondit\xE0: la palla deve rimbalzare almeno mezzo metro dietro i piedi degli avversari, cos\xEC devono giocare con il vetro e restano in fondo al campo.","Palla alta: se hai tempo evita il rovescio e girati per una bandeja o uno smash. Se la palla \xE8 rapida colpiscila piatta verso lo spazio libero e riprendi la rete.","Palla bassa (chiquita): piatta e profonda, non troppo veloce, in lungolinea: il fondo campo \xE8 pi\xF9 vicino ed \xE8 pi\xF9 facile tenere gli avversari dietro.","Alla griglia: da destra gioca la griglia corta, vicino alla rete, per far avvicinare l'avversario e poi attaccare il centro rimasto scoperto. Da sinistra, su una palla alta colpita un po' di lato, verso la griglia sulla diagonale."],court:{hit:.46,aimWin:[.36,.46,.64,.84],net:2.5,lob:{from:[5.2,.9,11.6],start:.2},shots:[{id:"free",label:"Spazio libero",color:"#3ddc84",land:[5.3,11.1],time:.6,glassUp:.35,text:"La scelta principale: nello spazio libero, profonda, per far muovere gli avversari e tenerli in fondo al campo."},{id:"center",label:"Al centro (apre il campo)",color:"#4a8cff",land:[2.6,10.9],time:.58,glassUp:.35,text:"Per aprire il campo: prima al centro, poi la vol\xE9e successiva verso l'angolo rimasto libero."},{id:"line",label:"Lungolinea (palla bassa)",color:"#ffc23a",land:[-1.3,11.1],time:.6,glassUp:.35,flat:!0,text:"Sulla palla bassa: piatta, profonda e non troppo veloce, in lungolinea. Il fondo campo \xE8 pi\xF9 vicino ed \xE8 pi\xF9 facile tenere gli avversari dietro."},{id:"grid",label:"Griglia corta",color:"#c77dff",land:[6.85,5.4],time:.45,glassUp:.3,flat:!0,text:"Da destra: alla griglia, corta e vicina alla rete. L'avversario deve avvicinarsi e lascia scoperto il centro, che attacchi con il colpo dopo."},{id:"up",label:"Errore: si alza",color:"#ff5233",land:[3.6,7.2],time:.7,glassUp:.9,error:!0,errorAt:"bounce",errorLabel:"Si alza: attaccano la rete",text:"Da evitare: con il peso all'indietro, o con il backspin sulla palla bassa, la palla sale dopo la rete e rimbalza corta. Gli avversari attaccano e ti tolgono la rete."}]},props:{mat:[1,1.3,0,.1]},cam:{p:[.3,1.4,3.6],t:[0,1.15,0]},keys:[{t:0,pose:Cn},{t:.06,pose:Kf,ease:"out"},{t:.12,pose:zn,ease:"in"},{t:.2,pose:Ky,ease:"sine"},{t:.28,pose:$i,ease:"sine"},{t:.36,pose:$i,ease:"lin"},{t:.41,pose:Zy,ease:"sine"},{t:.46,pose:wh,ease:"in"},{t:.54,pose:Xo,ease:"out"},{t:.64,pose:Xo,ease:"lin"},{t:.69,pose:jy,ease:"sine"},{t:.78,pose:Jy,ease:"sine"},{t:.86,pose:jf,ease:"sine"},{t:.93,pose:$y,ease:"sine"},{t:1,pose:Cn,ease:"sine"}]},eb={id:"bandeja",name:"Bandeja a vuoto",short:"Bandeja",section:"Colpi a vuoto",sets:2,reps:6,unit:"rip",tempo:"girata \xB7 preparazione alta \xB7 impatto al lato a braccio disteso \xB7 accompagna verso l'altro campo",dur:4.2,sided:!0,sideLabels:["Destrorso","Mancino"],handed:!0,equip:"La tua racchetta, senza palla",gripCues:Yo,prim:["deltAnt","cuffia"],sec:["obliqui","tricipiti","estensori"],why:'La bandeja ("vassoio") si gioca sui pallonetti che non ti scavalcano e che non riesci a schiacciare. Serve a difendere la rete: tieni gli avversari dietro e rientri a rete il prima possibile. Ripeterla a vuoto fissa la sequenza giusta e scalda la spalla nella posizione che userai in partita.',cues:["Attesa a 2-3 metri dalla rete, la stessa della vol\xE9e: racchetta alta davanti al petto, mano sinistra sul cuore, gambe poco pi\xF9 larghe delle spalle.","Appena vedi il pallonetto: gamba destra indietro e racchetta su con tutte e due le mani, ti metti di profilo. Piccoli passi per fermarti comodo.","Preparazione: gomito all'altezza della spalla, punta della racchetta in alto, mano sinistra in avanti che indica la palla.","Impatto all'altezza degli occhi, al lato destro, con il braccio disteso: il busto \xE8 ancora quasi di profilo e il braccio sinistro si apre verso la rete. Stai un po' alla sinistra della palla, mai esattamente sotto.","Dopo l'impatto la racchetta va avanti verso l'altro campo e il piatto gira leggermente verso l'alto, come un vassoio (taglio). Poi passi veloci in avanti: torna a rete."],errors:["Andare sotto la palla come per lo smash: resta a una distanza di braccio + racchetta, un po' a sinistra.","Colpire troppo in alto per fretta: dopo il vetro la palla rimbalza alta e comoda.","Gomito basso in preparazione: colpisci dal basso verso l'alto e la palla sale dopo il vetro.","Preparare con il piatto rivolto verso l'alto (mano troppo aperta): colpisci la palla da sotto."],tactics:["Profondit\xE0: mandala tra la linea di servizio e il vetro di fondo, cos\xEC gli avversari restano dietro e non contrattaccano.","Direzione: soprattutto in diagonale, verso l'angolo. Punta prima il vetro di fondo: poi la palla va sul vetro laterale e l'avversario deve giocare la doppia parete, chiuso nell'angolo.","Se tocca prima il vetro laterale, dopo il vetro di fondo esce verso il centro: palla comoda, che possono giocare tutti e due gli avversari.","Lungolinea solo per la bandeja d'attacco, quando vuoi togliere tempo all'avversario.","Se la palla ti sta scavalcando e non riesci a piazzarti, giocala piatta verso la griglia: il rimbalzo irregolare d\xE0 fastidio.","Pi\xF9 sei lontano dalla rete, pi\xF9 \xE8 difesa: impatto un po' pi\xF9 alto e meno effetto. Pi\xF9 sei vicino, pi\xF9 \xE8 attacco: impatto pi\xF9 basso e pi\xF9 taglio.","Si gioca da tutti e due i lati del campo. Dopo il colpo, passi veloci in avanti per riprendere la rete."],court:{hit:.53,aimWin:[.42,.53,.72,.88],net:4,lob:{from:[5,1,12.2],start:.08},shots:[{id:"diag",label:"Diagonale",color:"#3ddc84",land:[5.4,12.6],time:.74,glassUp:.3,text:"La scelta principale: diagonale e profonda. Rimbalza tra la linea e il vetro, tocca prima il vetro di fondo e poi il laterale: l'avversario deve giocare la doppia parete chiuso nell'angolo."},{id:"line",label:"Lungolinea (attacco)",color:"#4a8cff",land:[-1.4,12.7],time:.64,glassUp:.3,text:"Bandeja d'attacco, quando sei vicino alla rete: lungolinea e veloce per togliere tempo all'avversario."},{id:"grid",label:"Piatta alla griglia",color:"#ffc23a",land:[6.9,8.4],time:.6,glassUp:.3,flat:!0,text:"Quando la palla ti sta scavalcando e non riesci a piazzarti: piatta verso la griglia. Il rimbalzo sulla rete metallica \xE8 irregolare e d\xE0 fastidio."},{id:"side",label:"Errore: vetro laterale",color:"#ff5233",land:[6.75,10.5],time:.74,glassUp:.9,error:!0,text:"Da evitare: se tocca prima il vetro laterale, dopo il vetro di fondo esce verso il centro, alta e comoda. Diventa un contrattacco per gli avversari."}]},props:{mat:[1,1.3,0,-.1]},cam:{p:[.4,1.5,3.4],t:[0,1.25,0]},keys:[{t:0,pose:Rn},{t:.08,pose:By,ease:"sine"},{t:.16,pose:qo,ease:"sine"},{t:.32,pose:Ho,ease:"sine"},{t:.42,pose:Ho,ease:"lin"},{t:.48,pose:Uy,ease:"sine"},{t:.53,pose:Eh,ease:"in"},{t:.57,pose:Fy,ease:"lin"},{t:.62,pose:Vo,ease:"out"},{t:.72,pose:Vo,ease:"lin"},{t:.86,pose:Oy,ease:"sine"},{t:1,pose:Rn,ease:"sine"}]},tb={id:"vibora",name:"Vibora a vuoto",short:"Vibora",section:"Colpi a vuoto",sets:2,reps:6,unit:"rip",tempo:"passo indietro \xB7 racchetta dietro la testa \xB7 molinello e impatto al lato \xB7 polso in avanti \xB7 chiudi verso di te",dur:4.2,sided:!0,sideLabels:["Destrorso","Mancino"],handed:!0,equip:"La tua racchetta, senza palla",gripCues:Yo,prim:["deltAnt","cuffia"],sec:["obliqui","tricipiti","estensori"],why:"La vibora si gioca sui pallonetti alti ma comodi, quelli che non ti scavalcano. \xC8 pi\xF9 d'attacco della bandeja: con il polso dai alla palla un forte effetto laterale (side spin), cos\xEC dopo il vetro va nella direzione opposta a quella di qualunque altro colpo e sorprende l'avversario. \xC8 pi\xF9 elaborata della bandeja: conviene imparare prima una buona bandeja. Ripeterla a vuoto fissa il molinello e il movimento del polso, e scalda spalla, gomito e avambraccio nella posizione che userai in partita.",cues:["Attesa a 2-3 metri dalla rete, la stessa della vol\xE9e e della bandeja: gambe poco pi\xF9 larghe delle spalle, racchetta davanti alla testa, la mano sinistra aiuta a sostenerla dal cuore.","Quando arriva il pallonetto: primo passo indietro con la gamba destra e racchetta subito dietro la testa, con il piatto dietro la testa. Gomito all'altezza della spalla, mano sinistra alta che mira la palla.","Piccoli passi per trovare la distanza giusta: resta alla sinistra della palla, con lo spazio per distendere il braccio alla tua destra. Non andare sotto la palla come nello smash.","Molinello: il gomito porta l'avambraccio fuori da dietro la testa e la racchetta va di lato a prendere la palla al lato destro, con il braccio disteso. \xC8 simile allo smash, ma la racchetta va di lato invece che verso l'alto.","All'impatto usa il polso: colpisci la palla di lato, cos\xEC non gira n\xE9 in avanti n\xE9 indietro ma lateralmente (side spin). Mentre la destra va avanti verso la palla, la sinistra torna indietro.","Dopo l'impatto la racchetta va in avanti verso l'altro campo, poi chiudi riportandola verso di te, sul fianco sinistro. Torna subito a rete.","Impugnatura: continental, come in tutti gli altri colpi. Chi ha gi\xE0 molta confidenza pu\xF2 usare una eastern di rovescio, che aiuta a colpire la palla di lato, ma cambiare impugnatura durante il gioco non \xE8 semplice."],errors:["Cercare la palla fermandosi sotto, come per lo smash: per la vibora devi stare alla sua sinistra, cos\xEC distendi il braccio di lato verso la palla.","Colpire senza usare il polso: la palla non prende l'effetto laterale. Senza il polso non \xE8 una vibora.","Portare la racchetta dietro la testa senza alzare la mano sinistra: non punti bene la palla, ti piazzi peggio e perdi equilibrio quando colpisci.","Giocarla troppo forte quando sei lontano dalla rete: la palla non va dove vuoi e perdi la rete. Pi\xF9 sei lontano, pi\xF9 la velocit\xE0 deve essere bassa."],tactics:["Quando giocarla: sul pallonetto pi\xF9 comodo, con spazio tra te e la palla. Se la palla ti sta scavalcando gioca uno smash (alla griglia se \xE8 difficile); se ti arriva sopra la testa e hai poco tempo per spostarti, una bandeja.","La palla va trovata alla tua destra. Dal lato in cui il dritto \xE8 verso il centro (destrorso a sinistra, mancino a destra) giocala soprattutto sulle palle che vanno verso il centro: puoi colpirla anche un po' lontana lasciando andare il braccio.","Profondit\xE0 prima di tutto: deve rimbalzare dopo la linea di servizio e arrivare sul vetro. Se l'avversario la anticipa prima del vetro, perde l'effetto e tu non hai il tempo di tornare a rete.","Direzione: soprattutto in diagonale. Con tanto effetto, se va in doppia parete (vetro laterale e poi di fondo) invece di aprirsi verso il centro va dritta lungo la parete: l'avversario resta spiazzato e fa pi\xF9 fatica a giocarla.","Al centro quando gli avversari sono aperti: nello spazio libero.","Lungolinea rapida, ai piedi, su una palla facile e con l'avversario arretrato: rimbalza sul vetro, resta bassa e torna veloce verso la rete. Si gioca con le spalle pi\xF9 chiuse.","Posizione del corpo: anca e spalla sinistra puntano dove vuoi tirare. Con il dritto verso la parete laterale (destrorso a destra) apri di pi\xF9 il corpo per giocare la diagonale, altrimenti la torsione \xE8 eccessiva."],court:{hit:.53,aimWin:[.42,.53,.72,.88],net:4,lob:{from:[5,1,12.2],start:.08},shots:[{id:"diag",label:"Diagonale (doppia parete)",color:"#3ddc84",land:[6.9,12],time:.74,glassUp:.3,spin:!0,text:"La scelta principale: diagonale e profonda, verso l'angolo. Rimbalza, tocca il vetro laterale e poi quello di fondo: con tanto effetto laterale non si apre verso il centro come una palla normale, ma va dritta lungo la parete e l'avversario resta spiazzato."},{id:"center",label:"Al centro",color:"#4a8cff",land:[2.6,12.7],time:.7,glassUp:.3,spin:!0,text:"Quando gli avversari sono aperti: al centro, nello spazio libero."},{id:"line",label:"Lungolinea rapida",color:"#ffc23a",land:[-1.4,12.6],time:.56,glassUp:.2,flat:!0,spin:!0,text:"Su una palla facile, con l'avversario arretrato dietro la linea: rapida e ai piedi. Rimbalza sul vetro, resta bassa e torna veloce verso la rete: spesso \xE8 un colpo vincente. Spalle pi\xF9 chiuse."},{id:"short",label:"Errore: corta",color:"#ff5233",land:[3.8,9.8],time:.7,glassUp:.9,error:!0,errorAt:"bounce",errorLabel:"Corta: la anticipano",text:"Da evitare: se rimbalza prima della linea l'avversario la colpisce prima del vetro. La palla perde l'effetto e tu non hai il tempo di tornare a rete."}]},props:{mat:[1,1.3,0,-.1]},cam:{p:[.4,1.5,3.4],t:[0,1.25,0]},keys:[{t:0,pose:Rn},{t:.08,pose:zy,ease:"sine"},{t:.16,pose:Xf,ease:"sine"},{t:.3,pose:Go,ease:"sine"},{t:.42,pose:Go,ease:"lin"},{t:.49,pose:ky,ease:"sine"},{t:.53,pose:qf,ease:"in"},{t:.58,pose:Yf,ease:"lin"},{t:.64,pose:Sh,ease:"out"},{t:.74,pose:Sh,ease:"lin"},{t:.86,pose:Hy,ease:"sine"},{t:1,pose:Rn,ease:"sine"}]},Bn=(i,e=14)=>({mode:"fk",flex:i,abd:8,rot:0,elbow:e,pron:15,grip:.4}),Qi=me({FL:{x:.14,out:14},FR:{x:-.14,out:14}}),nb=me({hips:{p:[0,.72,-.13],r:[36,0,0]},spine:[6,0,0],head:[-28,0,0],L:Bn(-38,12),R:Bn(-38,12),effort:.7},Qi),ib=me({hips:{p:[0,1.065,.03],r:[9,0,0]},spine:[2,0,0],L:Bn(110,20),R:Bn(110,20),FL:{heel:42},FR:{heel:42},effort:1},Qi),sb=me({hips:{p:[0,1.26,.02],r:[0,0,0]},L:Bn(150,24),R:Bn(150,24),FL:{heel:30,y:.15,toeFlat:!1,toe:10},FR:{heel:30,y:.15,toeFlat:!1,toe:10},effort:.6},Qi),rb=me({hips:{p:[0,1.065,.02],r:[3,0,0]},L:Bn(80,20),R:Bn(80,20),FL:{heel:32},FR:{heel:32},effort:.6},Qi),ab=me({hips:{p:[0,.79,-.1],r:[32,0,0]},spine:[6,0,0],head:[-26,0,0],L:Bn(45,30),R:Bn(45,30),effort:.9},Qi),ob={id:"squat-jump",section:"Esplosivit\xE0",name:"Squat jump",short:"Squat jump",sets:3,reps:5,unit:"salti",tempo:"esplosivo \xB7 atterraggio morbido \xB7 pausa",dur:2.6,equip:"Nessuno",prim:["quadricipiti","glutei"],sec:["polpacci","femorali"],why:"Attiva il sistema nervoso per la partita: pi\xF9 esplosivit\xE0 nella prima spinta, nei recuperi e nei salti per lo smash. Va fatto per ultimo, quando sei gi\xE0 caldo.",cues:["Piedi alla larghezza delle spalle, scendi in mezzo squat portando le braccia indietro.","Spingi forte e salta, le braccia salgono sopra la testa.","Atterra prima sugli avampiedi, poi sul piede intero.","Assorbi piegando anche e ginocchia, ginocchia in linea con le punte.","Fermati un attimo tra un salto e l'altro: conta la qualit\xE0."],errors:["Atterrare a gambe rigide","Ginocchia che si chiudono all'atterraggio","Fare i salti di fila senza controllo"],props:{mat:[.75,.9,0,0]},cam:{p:[2.6,1.3,2.8],t:[0,.95,0]},keys:[{t:0,pose:Qi},{t:.24,pose:nb,ease:"sine"},{t:.33,pose:ib,ease:"in"},{t:.43,pose:sb,ease:"out"},{t:.53,pose:rb,ease:"in"},{t:.64,pose:ab,ease:"out"},{t:1,pose:Qi,ease:"sine"}]},ht=[My,Sy,Ey,Ty,wy,Ay,Py,Ly,Iy,Yy,Qy,eb,tb,ob];var zs=R;function Ah(i,e,t){let n=i.rig,s=e.props||{},r=t.props||{},a=s.mat||[.62,1.75,0,.1];i.setMat(a[0],a[1],a[2],a[3]),i.bench.visible=!!r.bench,r.bench&&i.bench.position.set(r.bench[0],0,r.bench[2]),i.post.visible=!!r.anchor,r.anchor&&i.post.position.set(r.anchor[0],0,r.anchor[2]-.05);let o=n.gripPoint("L"),l=n.gripPoint("R");if(s.band==="hands"){let u=o.distanceTo(l),d=Math.max(0,(s.bandRest||.3)-u)*.45,f=o.clone().add(l).multiplyScalar(.5);f.y-=d,i.updateBand([o,f,l])}else if(s.band==="anchor"&&r.anchor){let u=new zs(...r.anchor),d=o.clone().add(l).multiplyScalar(.5);i.updateBand([u,u.clone().lerp(d,.5),d])}else if(s.band==="foot"&&r.bandFoot){let u=n.b[r.bandFoot==="L"?"LeftToeBase":"RightToeBase"].getWorldPosition(new zs),d=n.b[r.bandFoot==="L"?"LeftFoot":"RightFoot"].getWorldPosition(new zs),f=u.clone().lerp(d,.35);f.y=.012;let g=r.bandHand==="L"?o:r.bandHand==="R"?l:o.clone().add(l).multiplyScalar(.5),_=new zs(r.bandFoot==="L"?.05:-.05,0,0);i.updateBand([f.clone().sub(_),f.clone().add(_).setY(.02),g])}else i.updateBand(null,!1);let c=r.racket;if(i.racket.visible=!!c,c){let u=n.racketFrame(c),d=new ke().makeBasis(new zs().crossVectors(u.dir,u.face).normalize(),u.dir,u.face);i.racket.quaternion.setFromRotationMatrix(d),i.racket.position.copy(u.grip)}let h=r.dumbbell;if(i.dumbbell.visible=!!h,h){let u=h,d=n.handFrame(u);i.dumbbell.position.copy(n.gripPoint(u)),i.dumbbell.quaternion.copy(d).multiply(new Ft().setFromAxisAngle(new zs(1,0,0),Math.PI/2))}}var Le=(i,e=document)=>e.querySelector(i),ni=(i,e,t)=>{let n=document.createElement(i);return e&&(n.className=e),t!=null&&(n.textContent=t),n},np=20,ip=25,lb=6,oe={idx:0,side:0,hand:0,playing:!0,speed:1,phase:0,view:"auto",court:!1,aim:null,gripCam:!1,shot:null,routine:null},sp=Le("#stage-canvas"),He=new Fo(sp,{modelUrl:window.MODEL_URL||"Xbot.glb"});window.addEventListener("resize",()=>He.resize());new ResizeObserver(()=>He.resize()).observe(sp);var Jf=Le("#list"),$f=null;ht.forEach((i,e)=>{let t=i.section||"Attivazione e prevenzione";t!==$f&&(Jf.appendChild(ni("div","sec-head",t)),$f=t);let n=ni("button","item");n.type="button",n.id="ex-"+i.id,n.innerHTML=`<span class="num">${String(e+1).padStart(2,"0")}</span><span class="nm"></span><span class="dose"></span>`,Le(".nm",n).textContent=i.name,Le(".dose",n).textContent=`${i.sets}\xD7${i.reps}`,n.addEventListener("click",()=>{kr(),wi(e),window.matchMedia("(max-width: 900px)").matches&&Le("#stage").scrollIntoView({behavior:"smooth",block:"start"})}),Jf.appendChild(n)});var cb=ht.reduce((i,e)=>{let t=e.sided&&!e.handed?2:1;return i+e.sets*e.reps*e.dur*t+(e.sets-1)*np+ip},0);Le("#total").textContent=`${ht.length} esercizi \xB7 circa ${Math.round(cb/60)} min`;var hb={auto:{p:[.4,5.4,-7.2],t:[2.7,0,8.6]},front:{p:[2.5,25,3.6],t:[2.5,0,4.2]},side:{p:[-11.5,5.5,5],t:[2.5,1,5.5]},back:{p:[1.4,3.4,13.4],t:[.4,1.3,1.2]}},Ch=()=>oe.court&&!!ht[oe.idx].court,rp=.7,Qf=new R(0,1,0),ub=(i,e,t)=>{let n=t.clone().sub(e),s=Math.max(0,Math.min(1,i.clone().sub(e).dot(n)/n.lengthSq()));return i.distanceTo(e.clone().addScaledVector(n,s))};function Ph(i){let e=He.rig,t=e.racketFrame(i),n=e.gripPoint(i),s=t.dir.clone().cross(t.face).normalize(),r=d=>e.b[d].getWorldPosition(new R),a=i==="L"?"Left":"Right",o=i==="L"?"Right":"Left",l=r(a+"HandThumb3").lerp(r(a+"HandThumb4"),.5),c=[[r("Hips"),r("Neck"),.19],[r("Head"),r("Head").addScaledVector(Qf,.15),.13],[r(a+"Arm"),r(a+"ForeArm"),.08],[r(a+"ForeArm"),r(a+"ForeArm").lerp(r(a+"Hand"),.92),.065],[r(o+"Arm"),r(o+"ForeArm"),.08],[r(o+"ForeArm"),r(o+"Hand"),.07],[r(o+"Hand"),r(o+"HandMiddle2"),.06]],h=new R(0,0,1).applyQuaternion(e.chestQ),u=null;for(let d of[.45,.1,.8,-.25])for(let f of[0,30,-30,60,-60,100,-100,140,-140,180]){let g=t.face.clone().multiplyScalar(Math.cos(f*Math.PI/180)).addScaledVector(s,Math.sin(f*Math.PI/180)).addScaledVector(Qf,d).normalize(),_=n.clone().addScaledVector(g,rp),m=9;for(let y=1;y<=16;y++){let x=l.clone().lerp(_,y/16);for(let[b,C,T]of c)m=Math.min(m,ub(x,b,C)-T)}let p=Math.abs(f)+Math.abs(d-.45)*40+Math.max(0,-g.dot(h))*80+(m<.015?1e3-m*1e3:0);(!u||p<u.score)&&(u={score:p,v:g})}return u.v}function db(i){let e=oe.side===1?"L":"R",t=He.rig.gripPoint(e);return{p:t.clone().addScaledVector(Ph(e),rp).toArray(),t:t.toArray()}}function Ti(i){if(oe.gripCam&&i.handed&&He.rig)return db(i);if(oe.court&&i.court){let a=structuredClone(hb[oe.view]),o=i.court.net-4;return a.p[2]+=o,a.t[2]+=o,a}let e=structuredClone(i.cam);if(oe.side===1&&i.sided&&(e.p[0]=-e.p[0],e.t[0]=-e.t[0]),oe.view==="auto")return e;let t=e.t,n=Math.hypot(e.p[0]-t[0],e.p[2]-t[2]),s=e.p[1];return{p:{front:[t[0],s,t[2]+n],side:[t[0]+n,s,t[2]],back:[t[0],s,t[2]-n]}[oe.view],t}}function Lh(i){if(!i.sideMuscles)return null;let e=i.sideMuscles;return oe.side===0?e:e==="R"?"L":"R"}function wi(i,{keepCam:e=!1,keepSide:t=!1}={}){oe.idx=i;let n=ht[i];n.handed?oe.side=oe.hand:t||(oe.side=0),oe.phase=0,document.querySelectorAll(".item").forEach((l,c)=>l.setAttribute("aria-current",c===i?"true":"false")),Le("#ex-num").textContent=`${String(i+1).padStart(2,"0")} / ${ht.length}`,Le("#ex-name").textContent=n.name,Le("#dose-big").textContent=`${n.sets}\xD7${n.reps}`,Le("#dose-unit").textContent=n.unit,Le("#tempo").textContent=n.tempo,Le("#equip").textContent=n.equip,Le("#why").textContent=n.why,Le("#cues").replaceChildren(...n.cues.map(l=>ni("li",null,l))),Le("#errors").replaceChildren(...n.errors.map(l=>ni("li",null,l)));let a=(l,c)=>l.map(h=>ni("span","chip "+c,wf[h].name));Le("#prim").replaceChildren(...a(n.prim,"p")),Le("#sec").replaceChildren(...a(n.sec,"s")),Le("#sec-row").hidden=n.sec.length===0,Le("#tactics-block").hidden=!n.tactics,n.tactics&&Le("#tactics").replaceChildren(...n.tactics.map(l=>ni("li",null,l))),Le("#court").hidden=!n.court,Le("#gripcam").hidden=!n.handed,He.controls.minDistance=oe.gripCam&&n.handed?.25:1.2,Le("#grip-block").hidden=!n.gripCues,n.gripCues&&Le("#grip-cues").replaceChildren(...n.gripCues.map(l=>ni("li",null,l)));let o=Le("#side");if(o.hidden=!n.sided,n.sided){let l=n.sideLabels||["Lato A","Lato B"];o.querySelectorAll("button").forEach((c,h)=>{c.textContent=l[h],c.setAttribute("aria-pressed",h===oe.side?"true":"false")})}He.rig&&He.setMuscles(n.prim,n.sec,Lh(n)),Hs(),e||He.frame(Ti(n).p,Ti(n).t,!He.rig);try{history.replaceState(null,"","#"+n.id)}catch{}ks()}function Jo(i){oe.side=i,ht[oe.idx].handed&&(oe.hand=i);let e=ht[oe.idx];Le("#side").querySelectorAll("button").forEach((t,n)=>t.setAttribute("aria-pressed",n===i?"true":"false")),He.setMuscles(e.prim,e.sec,Lh(e)),Hs(),He.frame(Ti(e).p,Ti(e).t)}Le("#side").querySelectorAll("button").forEach((i,e)=>i.addEventListener("click",()=>Jo(e)));var Rh=Le("#play");function Ih(i){oe.playing=i,Rh.setAttribute("aria-label",i?"Pausa":"Riproduci"),Rh.dataset.state=i?"playing":"paused"}Rh.addEventListener("click",()=>Ih(!oe.playing));Le("#prev").addEventListener("click",()=>{kr(),wi((oe.idx+ht.length-1)%ht.length)});Le("#next").addEventListener("click",()=>{kr(),wi((oe.idx+1)%ht.length)});Le("#speed").addEventListener("click",i=>{oe.speed=oe.speed===1?.5:1,i.currentTarget.textContent=oe.speed===1?"1\xD7":"0,5\xD7",i.currentTarget.setAttribute("aria-pressed",oe.speed!==1?"true":"false")});var jo=[["auto","consigliata","consigliata"],["front","fronte","dall'alto"],["side","lato","di lato"],["back","dietro","dall'altro campo"]],ap=()=>"Vista: "+jo.find(i=>i[0]===oe.view)[Ch()?2:1];Le("#view").addEventListener("click",i=>{let e=(jo.findIndex(n=>n[0]===oe.view)+1)%jo.length;oe.view=jo[e][0],i.currentTarget.textContent=ap();let t=Ti(ht[oe.idx]);He.frame(t.p,t.t)});var Br=null,Dh=!0;function fb(i){oe.gripCam=i,Br=null,Dh=!0,Le("#gripcam").setAttribute("aria-pressed",i?"true":"false"),He.controls.minDistance=i?.25:1.2;let e=Ti(ht[oe.idx]);He.frame(e.p,e.t)}Le("#gripcam").addEventListener("click",()=>fb(!oe.gripCam));function pb(i,e){if(!oe.gripCam||!i.handed){Br=null;return}let t=oe.side===1?"L":"R",n=He.rig.gripPoint(t);if(Br){let s=n.clone().sub(Br);if(He.camAnim)He.camAnim.p.add(s),He.camAnim.t.add(s);else if(He.camera.position.add(s),He.controls.target.add(s),Dh){let r=He.camera.position.clone().sub(He.controls.target),a=r.length();r.normalize().lerp(Ph(t),1-Math.exp(-e*2.5)).normalize(),He.camera.position.copy(He.controls.target).addScaledVector(r,a)}}Br=n}He.controls.addEventListener("start",()=>{Dh=!1});function Hs(){let i=ht[oe.idx],e=Ch();if(Le("#court").setAttribute("aria-pressed",e?"true":"false"),Le("#shots").hidden=!e,Le("#view").textContent=ap(),!He.rig||(He.setCourt(e),!e))return;i.court.shots.some(s=>s.id===oe.shot)||(oe.shot=i.court.shots[0].id);let t=i.court.shots.find(s=>s.id===oe.shot);Le("#shot-pills").replaceChildren(...i.court.shots.map(s=>{let r=ni("button","pill shot");return r.type="button",r.style.setProperty("--c",s.color),r.append(ni("i","sdot"),s.label),r.setAttribute("aria-pressed",s.id===oe.shot?"true":"false"),r.addEventListener("click",()=>{oe.shot=s.id,Hs()}),r})),Le("#shot-text").textContent=t.text,oe.aim=Mf(i,oe.side,t,He.rig,Fr),He.court.configure(i.court,Sf(He.rig,Fr(i,i.court.hit,oe.side,oe.aim)),oe.side,oe.shot,i.dur)}Le("#court").addEventListener("click",()=>{oe.court=!oe.court,oe.view="auto",Hs();let i=Ti(ht[oe.idx]);He.frame(i.p,i.t)});var ti=null;function zr(i=880,e=.12){try{ti=ti||new(window.AudioContext||window.webkitAudioContext);let t=ti.createOscillator(),n=ti.createGain();t.frequency.value=i,t.type="sine",n.gain.setValueAtTime(1e-4,ti.currentTime),n.gain.exponentialRampToValueAtTime(.25,ti.currentTime+.01),n.gain.exponentialRampToValueAtTime(1e-4,ti.currentTime+e),t.connect(n).connect(ti.destination),t.start(),t.stop(ti.currentTime+e+.02)}catch{}}var Ko=null;async function Nh(i){try{i&&navigator.wakeLock?Ko=await navigator.wakeLock.request("screen"):!i&&Ko&&(await Ko.release(),Ko=null)}catch{}}function mb(i=0){oe.routine={set:1,rep:0,mode:"work",left:0},wi(i),Ih(!0),zr(660),zr(990,.18),Nh(!0),document.body.classList.add("in-routine"),ks()}function kr(){oe.routine&&(oe.routine=null,Nh(!1),document.body.classList.remove("in-routine"),ks())}Le("#start").addEventListener("click",()=>oe.routine?kr():mb(oe.idx));Le("#stop").addEventListener("click",kr);Le("#skip").addEventListener("click",()=>{oe.routine&&op()});function gb(){let i=oe.routine;if(!i||i.mode!=="work")return;let e=ht[oe.idx];if(i.rep++,zr(i.rep===e.reps?990:740,.07),i.rep<e.reps)return ks();e.sided&&!e.handed&&oe.side===0?(i.mode="switch",i.left=lb,i.rep=0):i.set<e.sets?(i.mode="rest",i.left=np):oe.idx<ht.length-1?(i.mode="rest",i.left=ip,i.nextEx=!0):(i.mode="done",Nh(!1)),ks()}function op(){let i=oe.routine;if(!i)return;let e=ht[oe.idx];if(i.mode==="switch")Jo(1);else if(i.mode==="rest"&&i.nextEx)i.nextEx=!1,i.set=1,wi(oe.idx+1);else if(i.mode==="rest")i.set++,e.sided&&!e.handed&&Jo(0);else return;i.mode="work",i.rep=0,oe.phase=0,zr(990,.2),ks()}function ks(){let i=oe.routine,e=ht[oe.idx],t=Le("#routine");if(Le("#start").textContent=i?"Esci dalla routine":"Inizia routine",t.hidden=!i,!i)return;let n=e.sided?` \xB7 ${(e.sideLabels||["Lato A","Lato B"])[oe.side]}`:"";Le("#r-set").textContent=`Serie ${i.set} di ${e.sets}${n}`;let s=i.mode==="rest"||i.mode==="switch";t.dataset.mode=i.mode,Le("#r-count").textContent=i.mode==="done"?"Fatto":s?String(Math.ceil(i.left)):`${i.rep}`,Le("#r-of").textContent=i.mode==="done"?"":s?"s":`/ ${e.reps}`,Le("#r-label").textContent=i.mode==="done"?"Routine completata. Buona partita!":i.mode==="switch"?"Cambia lato":i.mode==="rest"&&i.nextEx?`Recupero \xB7 poi: ${ht[oe.idx+1].name}`:i.mode==="rest"?"Recupero":"Ripetizioni",Le("#skip").hidden=!s;let r=oe.idx+(i.mode==="done"?1:0);Le("#r-bar").style.width=`${r/ht.length*100}%`}var ep=performance.now(),Zo=0;function lp(i){let e=Math.min(.05,(i-ep)/1e3);ep=i;let t=ht[oe.idx],n=oe.routine;if(n&&(n.mode==="rest"||n.mode==="switch")){let a=Math.ceil(n.left);n.left-=e,Math.ceil(n.left)!==a&&n.left<=3&&n.left>0&&zr(600,.06),n.left<=0?op():Le("#r-count").textContent=String(Math.ceil(n.left))}oe.playing&&!(n&&n.mode!=="work")&&(oe.phase+=e*oe.speed/t.dur);let r=Math.floor(oe.phase);for(;Zo<r&&!(oe.routine&&oe.routine.mode!=="work");)Zo++,gb();if(Zo=r,n&&n.mode!=="work"&&(oe.phase=0,Zo=0),He.rig){let a=Fr(t,oe.phase,t.sided?oe.side:0,Ch()?oe.aim:null);He.rig.apply(a),Ah(He,t,a),He.courtOn&&He.court.update(oe.phase,He.camera.aspect),pb(t,e);let o=.5+.5*Math.sin(i/260);He.setEffort(Math.min(1,(a.effort||0)*(.85+.15*o)))}He.render(e),requestAnimationFrame(lp)}He.ready.then(()=>{document.body.classList.add("ready");let i=ht[oe.idx];He.setMuscles(i.prim,i.sec,Lh(i)),Hs();let e=Ti(i);He.frame(e.p,e.t,!0)}).catch(i=>{Le("#loading").textContent="Non riesco a caricare il manichino 3D. Ricarica la pagina.",console.error(i)});var tp=ht.findIndex(i=>"#"+i.id===location.hash);wi(tp>=0?tp:0);Ih(!0);requestAnimationFrame(lp);window.addEventListener("hashchange",()=>{let i=ht.findIndex(e=>"#"+e.id===location.hash);i>=0&&i!==oe.idx&&wi(i)});window.__app={state:oe,stage:He,EXERCISES:ht,select:wi,setSide:Jo,samplePose:Fr,applyProps:Ah,refreshCourt:Hs,gripView:Ph};})();
