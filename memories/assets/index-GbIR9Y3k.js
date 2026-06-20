(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();const ic=()=>{};var yo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},oc=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],u=n[e++],c=n[e++],h=((s&7)<<18|(o&63)<<12|(u&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],u=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|u&63)}}return t.join("")},Pa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],u=s+1<n.length,c=u?n[s+1]:0,h=s+2<n.length,f=h?n[s+2]:0,_=o>>2,w=(o&3)<<4|c>>4;let A=(c&15)<<2|f>>6,P=f&63;h||(P=64,u||(A=64)),r.push(e[_],e[w],e[A],e[P])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Sa(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):oc(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const f=s<n.length?e[n.charAt(s)]:64;++s;const w=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||c==null||f==null||w==null)throw new ac;const A=o<<2|c>>4;if(r.push(A),f!==64){const P=c<<4&240|f>>2;if(r.push(P),w!==64){const V=f<<6&192|w;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ac extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uc=function(n){const t=Sa(n);return Pa.encodeByteArray(t,!0)},or=function(n){return uc(n).replace(/\./g,"")},lc=function(n){try{return Pa.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc=()=>cc().__FIREBASE_DEFAULTS__,dc=()=>{if(typeof process>"u"||typeof yo>"u")return;const n=yo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},fc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&lc(n[1]);return t&&JSON.parse(t)},Ls=()=>{try{return ic()||hc()||dc()||fc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},mc=n=>{var t,e;return(e=(t=Ls())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},pc=n=>{const t=mc(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},ba=()=>{var n;return(n=Ls())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function _c(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[or(JSON.stringify(e)),or(JSON.stringify(u)),""].join(".")}const ln={};function Ec(){const n={prod:[],emulator:[]};for(const t of Object.keys(ln))ln[t]?n.emulator.push(t):n.prod.push(t);return n}function vc(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let Eo=!1;function Tc(n,t){if(typeof window>"u"||typeof document>"u"||!Fs(window.location.host)||ln[n]===t||ln[n]||Eo)return;ln[n]=t;function e(A){return`__firebase__banner__${A}`}const r="__firebase__banner",o=Ec().prod.length>0;function u(){const A=document.getElementById(r);A&&A.remove()}function c(A){A.style.display="flex",A.style.background="#7faaf0",A.style.position="fixed",A.style.bottom="5px",A.style.left="5px",A.style.padding=".5em",A.style.borderRadius="5px",A.style.alignItems="center"}function h(A,P){A.setAttribute("width","24"),A.setAttribute("id",P),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px"}function f(){const A=document.createElement("span");return A.style.cursor="pointer",A.style.marginLeft="16px",A.style.fontSize="24px",A.innerHTML=" &times;",A.onclick=()=>{Eo=!0,u()},A}function _(A,P){A.setAttribute("id",P),A.innerText="Learn more",A.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",A.setAttribute("target","__blank"),A.style.paddingLeft="5px",A.style.textDecoration="underline"}function w(){const A=vc(r),P=e("text"),V=document.getElementById(P)||document.createElement("span"),x=e("learnmore"),D=document.getElementById(x)||document.createElement("a"),G=e("preprendIcon"),U=document.getElementById(G)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.created){const z=A.element;c(z),_(D,x);const nt=f();h(U,G),z.append(U,V,D,nt),document.body.appendChild(z)}o?(V.innerText="Preview backend disconnected.",U.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(U.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,V.innerText="Preview backend running in this workspace."),V.setAttribute("id",P)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",w):w()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ic(){var n;const t=(n=Ls())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ac(){return!Ic()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Rc(){try{return typeof indexedDB=="object"}catch{return!1}}function Cc(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc="FirebaseError";class Me extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Sc,Object.setPrototypeOf(this,Me.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Va.prototype.create)}}class Va{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],u=o?Pc(o,r):"Error",c=`${this.serviceName}: ${u} (${s}).`;return new Me(s,c,r)}}function Pc(n,t){return n.replace(bc,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const bc=/\{\$([^}]+)}/g;function ar(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],u=t[s];if(vo(o)&&vo(u)){if(!ar(o,u))return!1}else if(o!==u)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function vo(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(n){return n&&n._delegate?n._delegate:n}class pn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new gc;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(kc(t))try{this.getOrInitializeService({instanceIdentifier:he})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=he){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=he){return this.instances.has(t)}getOptions(t=he){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,u]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&u.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&t(u,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Dc(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=he){return this.component?this.component.multipleInstances?t:he:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Dc(n){return n===he?void 0:n}function kc(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Vc(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(q||(q={}));const xc={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},Oc=q.INFO,Mc={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},Lc=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=Mc[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Da{constructor(t){this.name=t,this._logLevel=Oc,this._logHandler=Lc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in q))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?xc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...t),this._logHandler(this,q.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...t),this._logHandler(this,q.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,q.INFO,...t),this._logHandler(this,q.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,q.WARN,...t),this._logHandler(this,q.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...t),this._logHandler(this,q.ERROR,...t)}}const Fc=(n,t)=>t.some(e=>n instanceof e);let To,wo;function Bc(){return To||(To=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Uc(){return wo||(wo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ka=new WeakMap,ps=new WeakMap,Na=new WeakMap,as=new WeakMap,Bs=new WeakMap;function jc(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",u)},o=()=>{e(Qt(n.result)),s()},u=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",u)});return t.then(e=>{e instanceof IDBCursor&&ka.set(e,n)}).catch(()=>{}),Bs.set(t,n),t}function $c(n){if(ps.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",u),n.removeEventListener("abort",u)},o=()=>{e(),s()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",u),n.addEventListener("abort",u)});ps.set(n,t)}let gs={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return ps.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Na.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Qt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function qc(n){gs=n(gs)}function zc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(us(this),t,...e);return Na.set(r,t.sort?t.sort():[t]),Qt(r)}:Uc().includes(n)?function(...t){return n.apply(us(this),t),Qt(ka.get(this))}:function(...t){return Qt(n.apply(us(this),t))}}function Hc(n){return typeof n=="function"?zc(n):(n instanceof IDBTransaction&&$c(n),Fc(n,Bc())?new Proxy(n,gs):n)}function Qt(n){if(n instanceof IDBRequest)return jc(n);if(as.has(n))return as.get(n);const t=Hc(n);return t!==n&&(as.set(n,t),Bs.set(t,n)),t}const us=n=>Bs.get(n);function Gc(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const u=indexedDB.open(n,t),c=Qt(u);return r&&u.addEventListener("upgradeneeded",h=>{r(Qt(u.result),h.oldVersion,h.newVersion,Qt(u.transaction),h)}),e&&u.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const Wc=["get","getKey","getAll","getAllKeys","count"],Kc=["put","add","delete","clear"],ls=new Map;function Io(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(ls.get(t))return ls.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=Kc.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Wc.includes(e)))return;const o=async function(u,...c){const h=this.transaction(u,s?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[e](...c),s&&h.done]))[0]};return ls.set(t,o),o}qc(n=>({...n,get:(t,e,r)=>Io(t,e)||n.get(t,e,r),has:(t,e)=>!!Io(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Xc(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Xc(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const _s="@firebase/app",Ao="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt=new Da("@firebase/app"),Jc="@firebase/app-compat",Yc="@firebase/analytics-compat",Zc="@firebase/analytics",th="@firebase/app-check-compat",eh="@firebase/app-check",nh="@firebase/auth",rh="@firebase/auth-compat",sh="@firebase/database",ih="@firebase/data-connect",oh="@firebase/database-compat",ah="@firebase/functions",uh="@firebase/functions-compat",lh="@firebase/installations",ch="@firebase/installations-compat",hh="@firebase/messaging",dh="@firebase/messaging-compat",fh="@firebase/performance",mh="@firebase/performance-compat",ph="@firebase/remote-config",gh="@firebase/remote-config-compat",_h="@firebase/storage",yh="@firebase/storage-compat",Eh="@firebase/firestore",vh="@firebase/ai",Th="@firebase/firestore-compat",wh="firebase",Ih="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys="[DEFAULT]",Ah={[_s]:"fire-core",[Jc]:"fire-core-compat",[Zc]:"fire-analytics",[Yc]:"fire-analytics-compat",[eh]:"fire-app-check",[th]:"fire-app-check-compat",[nh]:"fire-auth",[rh]:"fire-auth-compat",[sh]:"fire-rtdb",[ih]:"fire-data-connect",[oh]:"fire-rtdb-compat",[ah]:"fire-fn",[uh]:"fire-fn-compat",[lh]:"fire-iid",[ch]:"fire-iid-compat",[hh]:"fire-fcm",[dh]:"fire-fcm-compat",[fh]:"fire-perf",[mh]:"fire-perf-compat",[ph]:"fire-rc",[gh]:"fire-rc-compat",[_h]:"fire-gcs",[yh]:"fire-gcs-compat",[Eh]:"fire-fst",[Th]:"fire-fst-compat",[vh]:"fire-vertex","fire-js":"fire-js",[wh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=new Map,Rh=new Map,Es=new Map;function Ro(n,t){try{n.container.addComponent(t)}catch(e){jt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function cr(n){const t=n.name;if(Es.has(t))return jt.debug(`There were multiple attempts to register component ${t}.`),!1;Es.set(t,n);for(const e of lr.values())Ro(e,n);for(const e of Rh.values())Ro(e,n);return!0}function Ch(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Sh(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xt=new Va("app","Firebase",Ph);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Xt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh=Ih;function xa(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ys,automaticDataCollectionEnabled:!0},t),s=r.name;if(typeof s!="string"||!s)throw Xt.create("bad-app-name",{appName:String(s)});if(e||(e=ba()),!e)throw Xt.create("no-options");const o=lr.get(s);if(o){if(ar(e,o.options)&&ar(r,o.config))return o;throw Xt.create("duplicate-app",{appName:s})}const u=new Nc(s);for(const h of Es.values())u.addComponent(h);const c=new bh(e,r,u);return lr.set(s,c),c}function Dh(n=ys){const t=lr.get(n);if(!t&&n===ys&&ba())return xa();if(!t)throw Xt.create("no-app",{appName:n});return t}function be(n,t,e){var r;let s=(r=Ah[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const c=[`Unable to register library "${s}" with version "${t}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&c.push("and"),u&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),jt.warn(c.join(" "));return}cr(new pn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh="firebase-heartbeat-database",Nh=1,gn="firebase-heartbeat-store";let cs=null;function Oa(){return cs||(cs=Gc(kh,Nh,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(gn)}catch(e){console.warn(e)}}}}).catch(n=>{throw Xt.create("idb-open",{originalErrorMessage:n.message})})),cs}async function xh(n){try{const e=(await Oa()).transaction(gn),r=await e.objectStore(gn).get(Ma(n));return await e.done,r}catch(t){if(t instanceof Me)jt.warn(t.message);else{const e=Xt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});jt.warn(e.message)}}}async function Co(n,t){try{const r=(await Oa()).transaction(gn,"readwrite");await r.objectStore(gn).put(t,Ma(n)),await r.done}catch(e){if(e instanceof Me)jt.warn(e.message);else{const r=Xt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});jt.warn(r.message)}}}function Ma(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh=1024,Mh=30;class Lh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Bh(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=So();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>Mh){const u=Uh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){jt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=So(),{heartbeatsToSend:r,unsentEntries:s}=Fh(this._heartbeatsCache.heartbeats),o=or(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return jt.warn(e),""}}}function So(){return new Date().toISOString().substring(0,10)}function Fh(n,t=Oh){const e=[];let r=n.slice();for(const s of n){const o=e.find(u=>u.agent===s.agent);if(o){if(o.dates.push(s.date),Po(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Po(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Bh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rc()?Cc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await xh(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Co(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return Co(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Po(n){return or(JSON.stringify({version:2,heartbeats:n})).length}function Uh(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(n){cr(new pn("platform-logger",t=>new Qc(t),"PRIVATE")),cr(new pn("heartbeat",t=>new Lh(t),"PRIVATE")),be(_s,Ao,n),be(_s,Ao,"esm2017"),be("fire-js","")}jh("");var $h="firebase",qh="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */be($h,qh,"app");var bo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jt,La;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,m){function g(){}g.prototype=m.prototype,v.D=m.prototype,v.prototype=new g,v.prototype.constructor=v,v.C=function(y,E,I){for(var p=Array(arguments.length-2),Lt=2;Lt<arguments.length;Lt++)p[Lt-2]=arguments[Lt];return m.prototype[E].apply(y,p)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,m,g){g||(g=0);var y=Array(16);if(typeof m=="string")for(var E=0;16>E;++E)y[E]=m.charCodeAt(g++)|m.charCodeAt(g++)<<8|m.charCodeAt(g++)<<16|m.charCodeAt(g++)<<24;else for(E=0;16>E;++E)y[E]=m[g++]|m[g++]<<8|m[g++]<<16|m[g++]<<24;m=v.g[0],g=v.g[1],E=v.g[2];var I=v.g[3],p=m+(I^g&(E^I))+y[0]+3614090360&4294967295;m=g+(p<<7&4294967295|p>>>25),p=I+(E^m&(g^E))+y[1]+3905402710&4294967295,I=m+(p<<12&4294967295|p>>>20),p=E+(g^I&(m^g))+y[2]+606105819&4294967295,E=I+(p<<17&4294967295|p>>>15),p=g+(m^E&(I^m))+y[3]+3250441966&4294967295,g=E+(p<<22&4294967295|p>>>10),p=m+(I^g&(E^I))+y[4]+4118548399&4294967295,m=g+(p<<7&4294967295|p>>>25),p=I+(E^m&(g^E))+y[5]+1200080426&4294967295,I=m+(p<<12&4294967295|p>>>20),p=E+(g^I&(m^g))+y[6]+2821735955&4294967295,E=I+(p<<17&4294967295|p>>>15),p=g+(m^E&(I^m))+y[7]+4249261313&4294967295,g=E+(p<<22&4294967295|p>>>10),p=m+(I^g&(E^I))+y[8]+1770035416&4294967295,m=g+(p<<7&4294967295|p>>>25),p=I+(E^m&(g^E))+y[9]+2336552879&4294967295,I=m+(p<<12&4294967295|p>>>20),p=E+(g^I&(m^g))+y[10]+4294925233&4294967295,E=I+(p<<17&4294967295|p>>>15),p=g+(m^E&(I^m))+y[11]+2304563134&4294967295,g=E+(p<<22&4294967295|p>>>10),p=m+(I^g&(E^I))+y[12]+1804603682&4294967295,m=g+(p<<7&4294967295|p>>>25),p=I+(E^m&(g^E))+y[13]+4254626195&4294967295,I=m+(p<<12&4294967295|p>>>20),p=E+(g^I&(m^g))+y[14]+2792965006&4294967295,E=I+(p<<17&4294967295|p>>>15),p=g+(m^E&(I^m))+y[15]+1236535329&4294967295,g=E+(p<<22&4294967295|p>>>10),p=m+(E^I&(g^E))+y[1]+4129170786&4294967295,m=g+(p<<5&4294967295|p>>>27),p=I+(g^E&(m^g))+y[6]+3225465664&4294967295,I=m+(p<<9&4294967295|p>>>23),p=E+(m^g&(I^m))+y[11]+643717713&4294967295,E=I+(p<<14&4294967295|p>>>18),p=g+(I^m&(E^I))+y[0]+3921069994&4294967295,g=E+(p<<20&4294967295|p>>>12),p=m+(E^I&(g^E))+y[5]+3593408605&4294967295,m=g+(p<<5&4294967295|p>>>27),p=I+(g^E&(m^g))+y[10]+38016083&4294967295,I=m+(p<<9&4294967295|p>>>23),p=E+(m^g&(I^m))+y[15]+3634488961&4294967295,E=I+(p<<14&4294967295|p>>>18),p=g+(I^m&(E^I))+y[4]+3889429448&4294967295,g=E+(p<<20&4294967295|p>>>12),p=m+(E^I&(g^E))+y[9]+568446438&4294967295,m=g+(p<<5&4294967295|p>>>27),p=I+(g^E&(m^g))+y[14]+3275163606&4294967295,I=m+(p<<9&4294967295|p>>>23),p=E+(m^g&(I^m))+y[3]+4107603335&4294967295,E=I+(p<<14&4294967295|p>>>18),p=g+(I^m&(E^I))+y[8]+1163531501&4294967295,g=E+(p<<20&4294967295|p>>>12),p=m+(E^I&(g^E))+y[13]+2850285829&4294967295,m=g+(p<<5&4294967295|p>>>27),p=I+(g^E&(m^g))+y[2]+4243563512&4294967295,I=m+(p<<9&4294967295|p>>>23),p=E+(m^g&(I^m))+y[7]+1735328473&4294967295,E=I+(p<<14&4294967295|p>>>18),p=g+(I^m&(E^I))+y[12]+2368359562&4294967295,g=E+(p<<20&4294967295|p>>>12),p=m+(g^E^I)+y[5]+4294588738&4294967295,m=g+(p<<4&4294967295|p>>>28),p=I+(m^g^E)+y[8]+2272392833&4294967295,I=m+(p<<11&4294967295|p>>>21),p=E+(I^m^g)+y[11]+1839030562&4294967295,E=I+(p<<16&4294967295|p>>>16),p=g+(E^I^m)+y[14]+4259657740&4294967295,g=E+(p<<23&4294967295|p>>>9),p=m+(g^E^I)+y[1]+2763975236&4294967295,m=g+(p<<4&4294967295|p>>>28),p=I+(m^g^E)+y[4]+1272893353&4294967295,I=m+(p<<11&4294967295|p>>>21),p=E+(I^m^g)+y[7]+4139469664&4294967295,E=I+(p<<16&4294967295|p>>>16),p=g+(E^I^m)+y[10]+3200236656&4294967295,g=E+(p<<23&4294967295|p>>>9),p=m+(g^E^I)+y[13]+681279174&4294967295,m=g+(p<<4&4294967295|p>>>28),p=I+(m^g^E)+y[0]+3936430074&4294967295,I=m+(p<<11&4294967295|p>>>21),p=E+(I^m^g)+y[3]+3572445317&4294967295,E=I+(p<<16&4294967295|p>>>16),p=g+(E^I^m)+y[6]+76029189&4294967295,g=E+(p<<23&4294967295|p>>>9),p=m+(g^E^I)+y[9]+3654602809&4294967295,m=g+(p<<4&4294967295|p>>>28),p=I+(m^g^E)+y[12]+3873151461&4294967295,I=m+(p<<11&4294967295|p>>>21),p=E+(I^m^g)+y[15]+530742520&4294967295,E=I+(p<<16&4294967295|p>>>16),p=g+(E^I^m)+y[2]+3299628645&4294967295,g=E+(p<<23&4294967295|p>>>9),p=m+(E^(g|~I))+y[0]+4096336452&4294967295,m=g+(p<<6&4294967295|p>>>26),p=I+(g^(m|~E))+y[7]+1126891415&4294967295,I=m+(p<<10&4294967295|p>>>22),p=E+(m^(I|~g))+y[14]+2878612391&4294967295,E=I+(p<<15&4294967295|p>>>17),p=g+(I^(E|~m))+y[5]+4237533241&4294967295,g=E+(p<<21&4294967295|p>>>11),p=m+(E^(g|~I))+y[12]+1700485571&4294967295,m=g+(p<<6&4294967295|p>>>26),p=I+(g^(m|~E))+y[3]+2399980690&4294967295,I=m+(p<<10&4294967295|p>>>22),p=E+(m^(I|~g))+y[10]+4293915773&4294967295,E=I+(p<<15&4294967295|p>>>17),p=g+(I^(E|~m))+y[1]+2240044497&4294967295,g=E+(p<<21&4294967295|p>>>11),p=m+(E^(g|~I))+y[8]+1873313359&4294967295,m=g+(p<<6&4294967295|p>>>26),p=I+(g^(m|~E))+y[15]+4264355552&4294967295,I=m+(p<<10&4294967295|p>>>22),p=E+(m^(I|~g))+y[6]+2734768916&4294967295,E=I+(p<<15&4294967295|p>>>17),p=g+(I^(E|~m))+y[13]+1309151649&4294967295,g=E+(p<<21&4294967295|p>>>11),p=m+(E^(g|~I))+y[4]+4149444226&4294967295,m=g+(p<<6&4294967295|p>>>26),p=I+(g^(m|~E))+y[11]+3174756917&4294967295,I=m+(p<<10&4294967295|p>>>22),p=E+(m^(I|~g))+y[2]+718787259&4294967295,E=I+(p<<15&4294967295|p>>>17),p=g+(I^(E|~m))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+m&4294967295,v.g[1]=v.g[1]+(E+(p<<21&4294967295|p>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+I&4294967295}r.prototype.u=function(v,m){m===void 0&&(m=v.length);for(var g=m-this.blockSize,y=this.B,E=this.h,I=0;I<m;){if(E==0)for(;I<=g;)s(this,v,I),I+=this.blockSize;if(typeof v=="string"){for(;I<m;)if(y[E++]=v.charCodeAt(I++),E==this.blockSize){s(this,y),E=0;break}}else for(;I<m;)if(y[E++]=v[I++],E==this.blockSize){s(this,y),E=0;break}}this.h=E,this.o+=m},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var m=1;m<v.length-8;++m)v[m]=0;var g=8*this.o;for(m=v.length-8;m<v.length;++m)v[m]=g&255,g/=256;for(this.u(v),v=Array(16),m=g=0;4>m;++m)for(var y=0;32>y;y+=8)v[g++]=this.g[m]>>>y&255;return v};function o(v,m){var g=c;return Object.prototype.hasOwnProperty.call(g,v)?g[v]:g[v]=m(v)}function u(v,m){this.h=m;for(var g=[],y=!0,E=v.length-1;0<=E;E--){var I=v[E]|0;y&&I==m||(g[E]=I,y=!1)}this.g=g}var c={};function h(v){return-128<=v&&128>v?o(v,function(m){return new u([m|0],0>m?-1:0)}):new u([v|0],0>v?-1:0)}function f(v){if(isNaN(v)||!isFinite(v))return w;if(0>v)return D(f(-v));for(var m=[],g=1,y=0;v>=g;y++)m[y]=v/g|0,g*=4294967296;return new u(m,0)}function _(v,m){if(v.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(v.charAt(0)=="-")return D(_(v.substring(1),m));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=f(Math.pow(m,8)),y=w,E=0;E<v.length;E+=8){var I=Math.min(8,v.length-E),p=parseInt(v.substring(E,E+I),m);8>I?(I=f(Math.pow(m,I)),y=y.j(I).add(f(p))):(y=y.j(g),y=y.add(f(p)))}return y}var w=h(0),A=h(1),P=h(16777216);n=u.prototype,n.m=function(){if(x(this))return-D(this).m();for(var v=0,m=1,g=0;g<this.g.length;g++){var y=this.i(g);v+=(0<=y?y:4294967296+y)*m,m*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(V(this))return"0";if(x(this))return"-"+D(this).toString(v);for(var m=f(Math.pow(v,6)),g=this,y="";;){var E=nt(g,m).g;g=G(g,E.j(m));var I=((0<g.g.length?g.g[0]:g.h)>>>0).toString(v);if(g=E,V(g))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function V(v){if(v.h!=0)return!1;for(var m=0;m<v.g.length;m++)if(v.g[m]!=0)return!1;return!0}function x(v){return v.h==-1}n.l=function(v){return v=G(this,v),x(v)?-1:V(v)?0:1};function D(v){for(var m=v.g.length,g=[],y=0;y<m;y++)g[y]=~v.g[y];return new u(g,~v.h).add(A)}n.abs=function(){return x(this)?D(this):this},n.add=function(v){for(var m=Math.max(this.g.length,v.g.length),g=[],y=0,E=0;E<=m;E++){var I=y+(this.i(E)&65535)+(v.i(E)&65535),p=(I>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);y=p>>>16,I&=65535,p&=65535,g[E]=p<<16|I}return new u(g,g[g.length-1]&-2147483648?-1:0)};function G(v,m){return v.add(D(m))}n.j=function(v){if(V(this)||V(v))return w;if(x(this))return x(v)?D(this).j(D(v)):D(D(this).j(v));if(x(v))return D(this.j(D(v)));if(0>this.l(P)&&0>v.l(P))return f(this.m()*v.m());for(var m=this.g.length+v.g.length,g=[],y=0;y<2*m;y++)g[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<v.g.length;E++){var I=this.i(y)>>>16,p=this.i(y)&65535,Lt=v.i(E)>>>16,je=v.i(E)&65535;g[2*y+2*E]+=p*je,U(g,2*y+2*E),g[2*y+2*E+1]+=I*je,U(g,2*y+2*E+1),g[2*y+2*E+1]+=p*Lt,U(g,2*y+2*E+1),g[2*y+2*E+2]+=I*Lt,U(g,2*y+2*E+2)}for(y=0;y<m;y++)g[y]=g[2*y+1]<<16|g[2*y];for(y=m;y<2*m;y++)g[y]=0;return new u(g,0)};function U(v,m){for(;(v[m]&65535)!=v[m];)v[m+1]+=v[m]>>>16,v[m]&=65535,m++}function z(v,m){this.g=v,this.h=m}function nt(v,m){if(V(m))throw Error("division by zero");if(V(v))return new z(w,w);if(x(v))return m=nt(D(v),m),new z(D(m.g),D(m.h));if(x(m))return m=nt(v,D(m)),new z(D(m.g),m.h);if(30<v.g.length){if(x(v)||x(m))throw Error("slowDivide_ only works with positive integers.");for(var g=A,y=m;0>=y.l(v);)g=Mt(g),y=Mt(y);var E=lt(g,1),I=lt(y,1);for(y=lt(y,2),g=lt(g,2);!V(y);){var p=I.add(y);0>=p.l(v)&&(E=E.add(g),I=p),y=lt(y,1),g=lt(g,1)}return m=G(v,E.j(m)),new z(E,m)}for(E=w;0<=v.l(m);){for(g=Math.max(1,Math.floor(v.m()/m.m())),y=Math.ceil(Math.log(g)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=f(g),p=I.j(m);x(p)||0<p.l(v);)g-=y,I=f(g),p=I.j(m);V(I)&&(I=A),E=E.add(I),v=G(v,p)}return new z(E,v)}n.A=function(v){return nt(this,v).h},n.and=function(v){for(var m=Math.max(this.g.length,v.g.length),g=[],y=0;y<m;y++)g[y]=this.i(y)&v.i(y);return new u(g,this.h&v.h)},n.or=function(v){for(var m=Math.max(this.g.length,v.g.length),g=[],y=0;y<m;y++)g[y]=this.i(y)|v.i(y);return new u(g,this.h|v.h)},n.xor=function(v){for(var m=Math.max(this.g.length,v.g.length),g=[],y=0;y<m;y++)g[y]=this.i(y)^v.i(y);return new u(g,this.h^v.h)};function Mt(v){for(var m=v.g.length+1,g=[],y=0;y<m;y++)g[y]=v.i(y)<<1|v.i(y-1)>>>31;return new u(g,v.h)}function lt(v,m){var g=m>>5;m%=32;for(var y=v.g.length-g,E=[],I=0;I<y;I++)E[I]=0<m?v.i(I+g)>>>m|v.i(I+g+1)<<32-m:v.i(I+g);return new u(E,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,La=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=f,u.fromString=_,Jt=u}).apply(typeof bo<"u"?bo:typeof self<"u"?self:typeof window<"u"?window:{});var Qn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fa,sn,Ba,tr,vs,Ua,ja,$a;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,a,l){return i==Array.prototype||i==Object.prototype||(i[a]=l.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qn=="object"&&Qn];for(var a=0;a<i.length;++a){var l=i[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function s(i,a){if(a)t:{var l=r;i=i.split(".");for(var d=0;d<i.length-1;d++){var T=i[d];if(!(T in l))break t;l=l[T]}i=i[i.length-1],d=l[i],a=a(d),a!=d&&a!=null&&t(l,i,{configurable:!0,writable:!0,value:a})}}function o(i,a){i instanceof String&&(i+="");var l=0,d=!1,T={next:function(){if(!d&&l<i.length){var R=l++;return{value:a(R,i[R]),done:!1}}return d=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}s("Array.prototype.values",function(i){return i||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},c=this||self;function h(i){var a=typeof i;return a=a!="object"?a:i?Array.isArray(i)?"array":a:"null",a=="array"||a=="object"&&typeof i.length=="number"}function f(i){var a=typeof i;return a=="object"&&i!=null||a=="function"}function _(i,a,l){return i.call.apply(i.bind,arguments)}function w(i,a,l){if(!i)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,d),i.apply(a,T)}}return function(){return i.apply(a,arguments)}}function A(i,a,l){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:w,A.apply(null,arguments)}function P(i,a){var l=Array.prototype.slice.call(arguments,1);return function(){var d=l.slice();return d.push.apply(d,arguments),i.apply(this,d)}}function V(i,a){function l(){}l.prototype=a.prototype,i.aa=a.prototype,i.prototype=new l,i.prototype.constructor=i,i.Qb=function(d,T,R){for(var b=Array(arguments.length-2),K=2;K<arguments.length;K++)b[K-2]=arguments[K];return a.prototype[T].apply(d,b)}}function x(i){const a=i.length;if(0<a){const l=Array(a);for(let d=0;d<a;d++)l[d]=i[d];return l}return[]}function D(i,a){for(let l=1;l<arguments.length;l++){const d=arguments[l];if(h(d)){const T=i.length||0,R=d.length||0;i.length=T+R;for(let b=0;b<R;b++)i[T+b]=d[b]}else i.push(d)}}class G{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function U(i){return/^[\s\xa0]*$/.test(i)}function z(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function nt(i){return nt[" "](i),i}nt[" "]=function(){};var Mt=z().indexOf("Gecko")!=-1&&!(z().toLowerCase().indexOf("webkit")!=-1&&z().indexOf("Edge")==-1)&&!(z().indexOf("Trident")!=-1||z().indexOf("MSIE")!=-1)&&z().indexOf("Edge")==-1;function lt(i,a,l){for(const d in i)a.call(l,i[d],d,i)}function v(i,a){for(const l in i)a.call(void 0,i[l],l,i)}function m(i){const a={};for(const l in i)a[l]=i[l];return a}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(i,a){let l,d;for(let T=1;T<arguments.length;T++){d=arguments[T];for(l in d)i[l]=d[l];for(let R=0;R<g.length;R++)l=g[R],Object.prototype.hasOwnProperty.call(d,l)&&(i[l]=d[l])}}function E(i){var a=1;i=i.split(":");const l=[];for(;0<a&&i.length;)l.push(i.shift()),a--;return i.length&&l.push(i.join(":")),l}function I(i){c.setTimeout(()=>{throw i},0)}function p(){var i=Lr;let a=null;return i.g&&(a=i.g,i.g=i.g.next,i.g||(i.h=null),a.next=null),a}class Lt{constructor(){this.h=this.g=null}add(a,l){const d=je.get();d.set(a,l),this.h?this.h.next=d:this.g=d,this.h=d}}var je=new G(()=>new Al,i=>i.reset());class Al{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let $e,qe=!1,Lr=new Lt,_i=()=>{const i=c.Promise.resolve(void 0);$e=()=>{i.then(Rl)}};var Rl=()=>{for(var i;i=p();){try{i.h.call(i.g)}catch(l){I(l)}var a=je;a.j(i),100>a.h&&(a.h++,i.next=a.g,a.g=i)}qe=!1};function zt(){this.s=this.s,this.C=this.C}zt.prototype.s=!1,zt.prototype.ma=function(){this.s||(this.s=!0,this.N())},zt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function mt(i,a){this.type=i,this.g=this.target=a,this.defaultPrevented=!1}mt.prototype.h=function(){this.defaultPrevented=!0};var Cl=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,a=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};c.addEventListener("test",l,a),c.removeEventListener("test",l,a)}catch{}return i})();function ze(i,a){if(mt.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var l=this.type=i.type,d=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=a,a=i.relatedTarget){if(Mt){t:{try{nt(a.nodeName);var T=!0;break t}catch{}T=!1}T||(a=null)}}else l=="mouseover"?a=i.fromElement:l=="mouseout"&&(a=i.toElement);this.relatedTarget=a,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Sl[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&ze.aa.h.call(this)}}V(ze,mt);var Sl={2:"touch",3:"pen",4:"mouse"};ze.prototype.h=function(){ze.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Vn="closure_listenable_"+(1e6*Math.random()|0),Pl=0;function bl(i,a,l,d,T){this.listener=i,this.proxy=null,this.src=a,this.type=l,this.capture=!!d,this.ha=T,this.key=++Pl,this.da=this.fa=!1}function Dn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function kn(i){this.src=i,this.g={},this.h=0}kn.prototype.add=function(i,a,l,d,T){var R=i.toString();i=this.g[R],i||(i=this.g[R]=[],this.h++);var b=Br(i,a,d,T);return-1<b?(a=i[b],l||(a.fa=!1)):(a=new bl(a,this.src,R,!!d,T),a.fa=l,i.push(a)),a};function Fr(i,a){var l=a.type;if(l in i.g){var d=i.g[l],T=Array.prototype.indexOf.call(d,a,void 0),R;(R=0<=T)&&Array.prototype.splice.call(d,T,1),R&&(Dn(a),i.g[l].length==0&&(delete i.g[l],i.h--))}}function Br(i,a,l,d){for(var T=0;T<i.length;++T){var R=i[T];if(!R.da&&R.listener==a&&R.capture==!!l&&R.ha==d)return T}return-1}var Ur="closure_lm_"+(1e6*Math.random()|0),jr={};function yi(i,a,l,d,T){if(Array.isArray(a)){for(var R=0;R<a.length;R++)yi(i,a[R],l,d,T);return null}return l=Ti(l),i&&i[Vn]?i.K(a,l,f(d)?!!d.capture:!1,T):Vl(i,a,l,!1,d,T)}function Vl(i,a,l,d,T,R){if(!a)throw Error("Invalid event type");var b=f(T)?!!T.capture:!!T,K=qr(i);if(K||(i[Ur]=K=new kn(i)),l=K.add(a,l,d,b,R),l.proxy)return l;if(d=Dl(),l.proxy=d,d.src=i,d.listener=l,i.addEventListener)Cl||(T=b),T===void 0&&(T=!1),i.addEventListener(a.toString(),d,T);else if(i.attachEvent)i.attachEvent(vi(a.toString()),d);else if(i.addListener&&i.removeListener)i.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Dl(){function i(l){return a.call(i.src,i.listener,l)}const a=kl;return i}function Ei(i,a,l,d,T){if(Array.isArray(a))for(var R=0;R<a.length;R++)Ei(i,a[R],l,d,T);else d=f(d)?!!d.capture:!!d,l=Ti(l),i&&i[Vn]?(i=i.i,a=String(a).toString(),a in i.g&&(R=i.g[a],l=Br(R,l,d,T),-1<l&&(Dn(R[l]),Array.prototype.splice.call(R,l,1),R.length==0&&(delete i.g[a],i.h--)))):i&&(i=qr(i))&&(a=i.g[a.toString()],i=-1,a&&(i=Br(a,l,d,T)),(l=-1<i?a[i]:null)&&$r(l))}function $r(i){if(typeof i!="number"&&i&&!i.da){var a=i.src;if(a&&a[Vn])Fr(a.i,i);else{var l=i.type,d=i.proxy;a.removeEventListener?a.removeEventListener(l,d,i.capture):a.detachEvent?a.detachEvent(vi(l),d):a.addListener&&a.removeListener&&a.removeListener(d),(l=qr(a))?(Fr(l,i),l.h==0&&(l.src=null,a[Ur]=null)):Dn(i)}}}function vi(i){return i in jr?jr[i]:jr[i]="on"+i}function kl(i,a){if(i.da)i=!0;else{a=new ze(a,this);var l=i.listener,d=i.ha||i.src;i.fa&&$r(i),i=l.call(d,a)}return i}function qr(i){return i=i[Ur],i instanceof kn?i:null}var zr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ti(i){return typeof i=="function"?i:(i[zr]||(i[zr]=function(a){return i.handleEvent(a)}),i[zr])}function pt(){zt.call(this),this.i=new kn(this),this.M=this,this.F=null}V(pt,zt),pt.prototype[Vn]=!0,pt.prototype.removeEventListener=function(i,a,l,d){Ei(this,i,a,l,d)};function Tt(i,a){var l,d=i.F;if(d)for(l=[];d;d=d.F)l.push(d);if(i=i.M,d=a.type||a,typeof a=="string")a=new mt(a,i);else if(a instanceof mt)a.target=a.target||i;else{var T=a;a=new mt(d,i),y(a,T)}if(T=!0,l)for(var R=l.length-1;0<=R;R--){var b=a.g=l[R];T=Nn(b,d,!0,a)&&T}if(b=a.g=i,T=Nn(b,d,!0,a)&&T,T=Nn(b,d,!1,a)&&T,l)for(R=0;R<l.length;R++)b=a.g=l[R],T=Nn(b,d,!1,a)&&T}pt.prototype.N=function(){if(pt.aa.N.call(this),this.i){var i=this.i,a;for(a in i.g){for(var l=i.g[a],d=0;d<l.length;d++)Dn(l[d]);delete i.g[a],i.h--}}this.F=null},pt.prototype.K=function(i,a,l,d){return this.i.add(String(i),a,!1,l,d)},pt.prototype.L=function(i,a,l,d){return this.i.add(String(i),a,!0,l,d)};function Nn(i,a,l,d){if(a=i.i.g[String(a)],!a)return!0;a=a.concat();for(var T=!0,R=0;R<a.length;++R){var b=a[R];if(b&&!b.da&&b.capture==l){var K=b.listener,ct=b.ha||b.src;b.fa&&Fr(i.i,b),T=K.call(ct,d)!==!1&&T}}return T&&!d.defaultPrevented}function wi(i,a,l){if(typeof i=="function")l&&(i=A(i,l));else if(i&&typeof i.handleEvent=="function")i=A(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(i,a||0)}function Ii(i){i.g=wi(()=>{i.g=null,i.i&&(i.i=!1,Ii(i))},i.l);const a=i.h;i.h=null,i.m.apply(null,a)}class Nl extends zt{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Ii(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function He(i){zt.call(this),this.h=i,this.g={}}V(He,zt);var Ai=[];function Ri(i){lt(i.g,function(a,l){this.g.hasOwnProperty(l)&&$r(a)},i),i.g={}}He.prototype.N=function(){He.aa.N.call(this),Ri(this)},He.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Hr=c.JSON.stringify,xl=c.JSON.parse,Ol=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function Gr(){}Gr.prototype.h=null;function Ci(i){return i.h||(i.h=i.i())}function Si(){}var Ge={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Wr(){mt.call(this,"d")}V(Wr,mt);function Kr(){mt.call(this,"c")}V(Kr,mt);var ae={},Pi=null;function xn(){return Pi=Pi||new pt}ae.La="serverreachability";function bi(i){mt.call(this,ae.La,i)}V(bi,mt);function We(i){const a=xn();Tt(a,new bi(a))}ae.STAT_EVENT="statevent";function Vi(i,a){mt.call(this,ae.STAT_EVENT,i),this.stat=a}V(Vi,mt);function wt(i){const a=xn();Tt(a,new Vi(a,i))}ae.Ma="timingevent";function Di(i,a){mt.call(this,ae.Ma,i),this.size=a}V(Di,mt);function Ke(i,a){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},a)}function Qe(){this.g=!0}Qe.prototype.xa=function(){this.g=!1};function Ml(i,a,l,d,T,R){i.info(function(){if(i.g)if(R)for(var b="",K=R.split("&"),ct=0;ct<K.length;ct++){var H=K[ct].split("=");if(1<H.length){var gt=H[0];H=H[1];var _t=gt.split("_");b=2<=_t.length&&_t[1]=="type"?b+(gt+"="+H+"&"):b+(gt+"=redacted&")}}else b=null;else b=R;return"XMLHTTP REQ ("+d+") [attempt "+T+"]: "+a+`
`+l+`
`+b})}function Ll(i,a,l,d,T,R,b){i.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+T+"]: "+a+`
`+l+`
`+R+" "+b})}function ve(i,a,l,d){i.info(function(){return"XMLHTTP TEXT ("+a+"): "+Bl(i,l)+(d?" "+d:"")})}function Fl(i,a){i.info(function(){return"TIMEOUT: "+a})}Qe.prototype.info=function(){};function Bl(i,a){if(!i.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(i=0;i<l.length;i++)if(Array.isArray(l[i])){var d=l[i];if(!(2>d.length)){var T=d[1];if(Array.isArray(T)&&!(1>T.length)){var R=T[0];if(R!="noop"&&R!="stop"&&R!="close")for(var b=1;b<T.length;b++)T[b]=""}}}}return Hr(l)}catch{return a}}var On={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ki={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Qr;function Mn(){}V(Mn,Gr),Mn.prototype.g=function(){return new XMLHttpRequest},Mn.prototype.i=function(){return{}},Qr=new Mn;function Ht(i,a,l,d){this.j=i,this.i=a,this.l=l,this.R=d||1,this.U=new He(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ni}function Ni(){this.i=null,this.g="",this.h=!1}var xi={},Xr={};function Jr(i,a,l){i.L=1,i.v=Un(Ft(a)),i.m=l,i.P=!0,Oi(i,null)}function Oi(i,a){i.F=Date.now(),Ln(i),i.A=Ft(i.v);var l=i.A,d=i.R;Array.isArray(d)||(d=[String(d)]),Qi(l.i,"t",d),i.C=0,l=i.j.J,i.h=new Ni,i.g=mo(i.j,l?a:null,!i.m),0<i.O&&(i.M=new Nl(A(i.Y,i,i.g),i.O)),a=i.U,l=i.g,d=i.ca;var T="readystatechange";Array.isArray(T)||(T&&(Ai[0]=T.toString()),T=Ai);for(var R=0;R<T.length;R++){var b=yi(l,T[R],d||a.handleEvent,!1,a.h||a);if(!b)break;a.g[b.key]=b}a=i.H?m(i.H):{},i.m?(i.u||(i.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,a)):(i.u="GET",i.g.ea(i.A,i.u,null,a)),We(),Ml(i.i,i.u,i.A,i.l,i.R,i.m)}Ht.prototype.ca=function(i){i=i.target;const a=this.M;a&&Bt(i)==3?a.j():this.Y(i)},Ht.prototype.Y=function(i){try{if(i==this.g)t:{const _t=Bt(this.g);var a=this.g.Ba();const Ie=this.g.Z();if(!(3>_t)&&(_t!=3||this.g&&(this.h.h||this.g.oa()||no(this.g)))){this.J||_t!=4||a==7||(a==8||0>=Ie?We(3):We(2)),Yr(this);var l=this.g.Z();this.X=l;e:if(Mi(this)){var d=no(this.g);i="";var T=d.length,R=Bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ue(this),Xe(this);var b="";break e}this.h.i=new c.TextDecoder}for(a=0;a<T;a++)this.h.h=!0,i+=this.h.i.decode(d[a],{stream:!(R&&a==T-1)});d.length=0,this.h.g+=i,this.C=0,b=this.h.g}else b=this.g.oa();if(this.o=l==200,Ll(this.i,this.u,this.A,this.l,this.R,_t,l),this.o){if(this.T&&!this.K){e:{if(this.g){var K,ct=this.g;if((K=ct.g?ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(K)){var H=K;break e}}H=null}if(l=H)ve(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Zr(this,l);else{this.o=!1,this.s=3,wt(12),ue(this),Xe(this);break t}}if(this.P){l=!0;let St;for(;!this.J&&this.C<b.length;)if(St=Ul(this,b),St==Xr){_t==4&&(this.s=4,wt(14),l=!1),ve(this.i,this.l,null,"[Incomplete Response]");break}else if(St==xi){this.s=4,wt(15),ve(this.i,this.l,b,"[Invalid Chunk]"),l=!1;break}else ve(this.i,this.l,St,null),Zr(this,St);if(Mi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_t!=4||b.length!=0||this.h.h||(this.s=1,wt(16),l=!1),this.o=this.o&&l,!l)ve(this.i,this.l,b,"[Invalid Chunked Response]"),ue(this),Xe(this);else if(0<b.length&&!this.W){this.W=!0;var gt=this.j;gt.g==this&&gt.ba&&!gt.M&&(gt.j.info("Great, no buffering proxy detected. Bytes received: "+b.length),is(gt),gt.M=!0,wt(11))}}else ve(this.i,this.l,b,null),Zr(this,b);_t==4&&ue(this),this.o&&!this.J&&(_t==4?lo(this.j,this):(this.o=!1,Ln(this)))}else rc(this.g),l==400&&0<b.indexOf("Unknown SID")?(this.s=3,wt(12)):(this.s=0,wt(13)),ue(this),Xe(this)}}}catch{}finally{}};function Mi(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Ul(i,a){var l=i.C,d=a.indexOf(`
`,l);return d==-1?Xr:(l=Number(a.substring(l,d)),isNaN(l)?xi:(d+=1,d+l>a.length?Xr:(a=a.slice(d,d+l),i.C=d+l,a)))}Ht.prototype.cancel=function(){this.J=!0,ue(this)};function Ln(i){i.S=Date.now()+i.I,Li(i,i.I)}function Li(i,a){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Ke(A(i.ba,i),a)}function Yr(i){i.B&&(c.clearTimeout(i.B),i.B=null)}Ht.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Fl(this.i,this.A),this.L!=2&&(We(),wt(17)),ue(this),this.s=2,Xe(this)):Li(this,this.S-i)};function Xe(i){i.j.G==0||i.J||lo(i.j,i)}function ue(i){Yr(i);var a=i.M;a&&typeof a.ma=="function"&&a.ma(),i.M=null,Ri(i.U),i.g&&(a=i.g,i.g=null,a.abort(),a.ma())}function Zr(i,a){try{var l=i.j;if(l.G!=0&&(l.g==i||ts(l.h,i))){if(!i.K&&ts(l.h,i)&&l.G==3){try{var d=l.Da.g.parse(a)}catch{d=null}if(Array.isArray(d)&&d.length==3){var T=d;if(T[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<i.F)Gn(l),zn(l);else break t;ss(l),wt(18)}}else l.za=T[1],0<l.za-l.T&&37500>T[2]&&l.F&&l.v==0&&!l.C&&(l.C=Ke(A(l.Za,l),6e3));if(1>=Ui(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else ce(l,11)}else if((i.K||l.g==i)&&Gn(l),!U(a))for(T=l.Da.g.parse(a),a=0;a<T.length;a++){let H=T[a];if(l.T=H[0],H=H[1],l.G==2)if(H[0]=="c"){l.K=H[1],l.ia=H[2];const gt=H[3];gt!=null&&(l.la=gt,l.j.info("VER="+l.la));const _t=H[4];_t!=null&&(l.Aa=_t,l.j.info("SVER="+l.Aa));const Ie=H[5];Ie!=null&&typeof Ie=="number"&&0<Ie&&(d=1.5*Ie,l.L=d,l.j.info("backChannelRequestTimeoutMs_="+d)),d=l;const St=i.g;if(St){const Kn=St.g?St.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Kn){var R=d.h;R.g||Kn.indexOf("spdy")==-1&&Kn.indexOf("quic")==-1&&Kn.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(es(R,R.h),R.h=null))}if(d.D){const os=St.g?St.g.getResponseHeader("X-HTTP-Session-Id"):null;os&&(d.ya=os,X(d.I,d.D,os))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-i.F,l.j.info("Handshake RTT: "+l.R+"ms")),d=l;var b=i;if(d.qa=fo(d,d.J?d.ia:null,d.W),b.K){ji(d.h,b);var K=b,ct=d.L;ct&&(K.I=ct),K.B&&(Yr(K),Ln(K)),d.g=b}else ao(d);0<l.i.length&&Hn(l)}else H[0]!="stop"&&H[0]!="close"||ce(l,7);else l.G==3&&(H[0]=="stop"||H[0]=="close"?H[0]=="stop"?ce(l,7):rs(l):H[0]!="noop"&&l.l&&l.l.ta(H),l.v=0)}}We(4)}catch{}}var jl=class{constructor(i,a){this.g=i,this.map=a}};function Fi(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Bi(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Ui(i){return i.h?1:i.g?i.g.size:0}function ts(i,a){return i.h?i.h==a:i.g?i.g.has(a):!1}function es(i,a){i.g?i.g.add(a):i.h=a}function ji(i,a){i.h&&i.h==a?i.h=null:i.g&&i.g.has(a)&&i.g.delete(a)}Fi.prototype.cancel=function(){if(this.i=$i(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function $i(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let a=i.i;for(const l of i.g.values())a=a.concat(l.D);return a}return x(i.i)}function $l(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var a=[],l=i.length,d=0;d<l;d++)a.push(i[d]);return a}a=[],l=0;for(d in i)a[l++]=i[d];return a}function ql(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var a=[];i=i.length;for(var l=0;l<i;l++)a.push(l);return a}a=[],l=0;for(const d in i)a[l++]=d;return a}}}function qi(i,a){if(i.forEach&&typeof i.forEach=="function")i.forEach(a,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,a,void 0);else for(var l=ql(i),d=$l(i),T=d.length,R=0;R<T;R++)a.call(void 0,d[R],l&&l[R],i)}var zi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zl(i,a){if(i){i=i.split("&");for(var l=0;l<i.length;l++){var d=i[l].indexOf("="),T=null;if(0<=d){var R=i[l].substring(0,d);T=i[l].substring(d+1)}else R=i[l];a(R,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function le(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof le){this.h=i.h,Fn(this,i.j),this.o=i.o,this.g=i.g,Bn(this,i.s),this.l=i.l;var a=i.i,l=new Ze;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),Hi(this,l),this.m=i.m}else i&&(a=String(i).match(zi))?(this.h=!1,Fn(this,a[1]||"",!0),this.o=Je(a[2]||""),this.g=Je(a[3]||"",!0),Bn(this,a[4]),this.l=Je(a[5]||"",!0),Hi(this,a[6]||"",!0),this.m=Je(a[7]||"")):(this.h=!1,this.i=new Ze(null,this.h))}le.prototype.toString=function(){var i=[],a=this.j;a&&i.push(Ye(a,Gi,!0),":");var l=this.g;return(l||a=="file")&&(i.push("//"),(a=this.o)&&i.push(Ye(a,Gi,!0),"@"),i.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&i.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(Ye(l,l.charAt(0)=="/"?Wl:Gl,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",Ye(l,Ql)),i.join("")};function Ft(i){return new le(i)}function Fn(i,a,l){i.j=l?Je(a,!0):a,i.j&&(i.j=i.j.replace(/:$/,""))}function Bn(i,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);i.s=a}else i.s=null}function Hi(i,a,l){a instanceof Ze?(i.i=a,Xl(i.i,i.h)):(l||(a=Ye(a,Kl)),i.i=new Ze(a,i.h))}function X(i,a,l){i.i.set(a,l)}function Un(i){return X(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Je(i,a){return i?a?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Ye(i,a,l){return typeof i=="string"?(i=encodeURI(i).replace(a,Hl),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Hl(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Gi=/[#\/\?@]/g,Gl=/[#\?:]/g,Wl=/[#\?]/g,Kl=/[#\?@]/g,Ql=/#/g;function Ze(i,a){this.h=this.g=null,this.i=i||null,this.j=!!a}function Gt(i){i.g||(i.g=new Map,i.h=0,i.i&&zl(i.i,function(a,l){i.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}n=Ze.prototype,n.add=function(i,a){Gt(this),this.i=null,i=Te(this,i);var l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(a),this.h+=1,this};function Wi(i,a){Gt(i),a=Te(i,a),i.g.has(a)&&(i.i=null,i.h-=i.g.get(a).length,i.g.delete(a))}function Ki(i,a){return Gt(i),a=Te(i,a),i.g.has(a)}n.forEach=function(i,a){Gt(this),this.g.forEach(function(l,d){l.forEach(function(T){i.call(a,T,d,this)},this)},this)},n.na=function(){Gt(this);const i=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let d=0;d<a.length;d++){const T=i[d];for(let R=0;R<T.length;R++)l.push(a[d])}return l},n.V=function(i){Gt(this);let a=[];if(typeof i=="string")Ki(this,i)&&(a=a.concat(this.g.get(Te(this,i))));else{i=Array.from(this.g.values());for(let l=0;l<i.length;l++)a=a.concat(i[l])}return a},n.set=function(i,a){return Gt(this),this.i=null,i=Te(this,i),Ki(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[a]),this.h+=1,this},n.get=function(i,a){return i?(i=this.V(i),0<i.length?String(i[0]):a):a};function Qi(i,a,l){Wi(i,a),0<l.length&&(i.i=null,i.g.set(Te(i,a),x(l)),i.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var d=a[l];const R=encodeURIComponent(String(d)),b=this.V(d);for(d=0;d<b.length;d++){var T=R;b[d]!==""&&(T+="="+encodeURIComponent(String(b[d]))),i.push(T)}}return this.i=i.join("&")};function Te(i,a){return a=String(a),i.j&&(a=a.toLowerCase()),a}function Xl(i,a){a&&!i.j&&(Gt(i),i.i=null,i.g.forEach(function(l,d){var T=d.toLowerCase();d!=T&&(Wi(this,d),Qi(this,T,l))},i)),i.j=a}function Jl(i,a){const l=new Qe;if(c.Image){const d=new Image;d.onload=P(Wt,l,"TestLoadImage: loaded",!0,a,d),d.onerror=P(Wt,l,"TestLoadImage: error",!1,a,d),d.onabort=P(Wt,l,"TestLoadImage: abort",!1,a,d),d.ontimeout=P(Wt,l,"TestLoadImage: timeout",!1,a,d),c.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=i}else a(!1)}function Yl(i,a){const l=new Qe,d=new AbortController,T=setTimeout(()=>{d.abort(),Wt(l,"TestPingServer: timeout",!1,a)},1e4);fetch(i,{signal:d.signal}).then(R=>{clearTimeout(T),R.ok?Wt(l,"TestPingServer: ok",!0,a):Wt(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(T),Wt(l,"TestPingServer: error",!1,a)})}function Wt(i,a,l,d,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),d(l)}catch{}}function Zl(){this.g=new Ol}function tc(i,a,l){const d=l||"";try{qi(i,function(T,R){let b=T;f(T)&&(b=Hr(T)),a.push(d+R+"="+encodeURIComponent(b))})}catch(T){throw a.push(d+"type="+encodeURIComponent("_badmap")),T}}function jn(i){this.l=i.Ub||null,this.j=i.eb||!1}V(jn,Gr),jn.prototype.g=function(){return new $n(this.l,this.j)},jn.prototype.i=(function(i){return function(){return i}})({});function $n(i,a){pt.call(this),this.D=i,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V($n,pt),n=$n.prototype,n.open=function(i,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=a,this.readyState=1,en(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(a.body=i),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,tn(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,en(this)),this.g&&(this.readyState=3,en(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Xi(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Xi(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var a=i.value?i.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!i.done}))&&(this.response=this.responseText+=a)}i.done?tn(this):en(this),this.readyState==3&&Xi(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,tn(this))},n.Qa=function(i){this.g&&(this.response=i,tn(this))},n.ga=function(){this.g&&tn(this)};function tn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,en(i)}n.setRequestHeader=function(i,a){this.u.append(i,a)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=a.next();return i.join(`\r
`)};function en(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty($n.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Ji(i){let a="";return lt(i,function(l,d){a+=d,a+=":",a+=l,a+=`\r
`}),a}function ns(i,a,l){t:{for(d in l){var d=!1;break t}d=!0}d||(l=Ji(l),typeof i=="string"?l!=null&&encodeURIComponent(String(l)):X(i,a,l))}function tt(i){pt.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(tt,pt);var ec=/^https?$/i,nc=["POST","PUT"];n=tt.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,a,l,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);a=a?a.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Qr.g(),this.v=this.o?Ci(this.o):Ci(Qr),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(a,String(i),!0),this.B=!1}catch(R){Yi(this,R);return}if(i=l||"",l=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var T in d)l.set(T,d[T]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const R of d.keys())l.set(R,d.get(R));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(l.keys()).find(R=>R.toLowerCase()=="content-type"),T=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(nc,a,void 0))||d||T||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,b]of l)this.g.setRequestHeader(R,b);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{eo(this),this.u=!0,this.g.send(i),this.u=!1}catch(R){Yi(this,R)}};function Yi(i,a){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=a,i.m=5,Zi(i),qn(i)}function Zi(i){i.A||(i.A=!0,Tt(i,"complete"),Tt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,Tt(this,"complete"),Tt(this,"abort"),qn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qn(this,!0)),tt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?to(this):this.bb())},n.bb=function(){to(this)};function to(i){if(i.h&&typeof u<"u"&&(!i.v[1]||Bt(i)!=4||i.Z()!=2)){if(i.u&&Bt(i)==4)wi(i.Ea,0,i);else if(Tt(i,"readystatechange"),Bt(i)==4){i.h=!1;try{const b=i.Z();t:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var d;if(d=b===0){var T=String(i.D).match(zi)[1]||null;!T&&c.self&&c.self.location&&(T=c.self.location.protocol.slice(0,-1)),d=!ec.test(T?T.toLowerCase():"")}l=d}if(l)Tt(i,"complete"),Tt(i,"success");else{i.m=6;try{var R=2<Bt(i)?i.g.statusText:""}catch{R=""}i.l=R+" ["+i.Z()+"]",Zi(i)}}finally{qn(i)}}}}function qn(i,a){if(i.g){eo(i);const l=i.g,d=i.v[0]?()=>{}:null;i.g=null,i.v=null,a||Tt(i,"ready");try{l.onreadystatechange=d}catch{}}}function eo(i){i.I&&(c.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Bt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Bt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var a=this.g.responseText;return i&&a.indexOf(i)==0&&(a=a.substring(i.length)),xl(a)}};function no(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function rc(i){const a={};i=(i.g&&2<=Bt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<i.length;d++){if(U(i[d]))continue;var l=E(i[d]);const T=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const R=a[T]||[];a[T]=R,R.push(l)}v(a,function(d){return d.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function nn(i,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||a}function ro(i){this.Aa=0,this.i=[],this.j=new Qe,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=nn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=nn("baseRetryDelayMs",5e3,i),this.cb=nn("retryDelaySeedMs",1e4,i),this.Wa=nn("forwardChannelMaxRetries",2,i),this.wa=nn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Fi(i&&i.concurrentRequestLimit),this.Da=new Zl,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ro.prototype,n.la=8,n.G=1,n.connect=function(i,a,l,d){wt(0),this.W=i,this.H=a||{},l&&d!==void 0&&(this.H.OSID=l,this.H.OAID=d),this.F=this.X,this.I=fo(this,null,this.W),Hn(this)};function rs(i){if(so(i),i.G==3){var a=i.U++,l=Ft(i.I);if(X(l,"SID",i.K),X(l,"RID",a),X(l,"TYPE","terminate"),rn(i,l),a=new Ht(i,i.j,a),a.L=2,a.v=Un(Ft(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=a.v,l=!0),l||(a.g=mo(a.j,null),a.g.ea(a.v)),a.F=Date.now(),Ln(a)}ho(i)}function zn(i){i.g&&(is(i),i.g.cancel(),i.g=null)}function so(i){zn(i),i.u&&(c.clearTimeout(i.u),i.u=null),Gn(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function Hn(i){if(!Bi(i.h)&&!i.s){i.s=!0;var a=i.Ga;$e||_i(),qe||($e(),qe=!0),Lr.add(a,i),i.B=0}}function sc(i,a){return Ui(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=a.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Ke(A(i.Ga,i,a),co(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const T=new Ht(this,this.j,i);let R=this.o;if(this.S&&(R?(R=m(R),y(R,this.S)):R=this.S),this.m!==null||this.O||(T.H=R,R=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var d=this.i[l];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(a+=d,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=oo(this,T,a),l=Ft(this.I),X(l,"RID",i),X(l,"CVER",22),this.D&&X(l,"X-HTTP-Session-Id",this.D),rn(this,l),R&&(this.O?a="headers="+encodeURIComponent(String(Ji(R)))+"&"+a:this.m&&ns(l,this.m,R)),es(this.h,T),this.Ua&&X(l,"TYPE","init"),this.P?(X(l,"$req",a),X(l,"SID","null"),T.T=!0,Jr(T,l,null)):Jr(T,l,a),this.G=2}}else this.G==3&&(i?io(this,i):this.i.length==0||Bi(this.h)||io(this))};function io(i,a){var l;a?l=a.l:l=i.U++;const d=Ft(i.I);X(d,"SID",i.K),X(d,"RID",l),X(d,"AID",i.T),rn(i,d),i.m&&i.o&&ns(d,i.m,i.o),l=new Ht(i,i.j,l,i.B+1),i.m===null&&(l.H=i.o),a&&(i.i=a.D.concat(i.i)),a=oo(i,l,1e3),l.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),es(i.h,l),Jr(l,d,a)}function rn(i,a){i.H&&lt(i.H,function(l,d){X(a,d,l)}),i.l&&qi({},function(l,d){X(a,d,l)})}function oo(i,a,l){l=Math.min(i.i.length,l);var d=i.l?A(i.l.Na,i.l,i):null;t:{var T=i.i;let R=-1;for(;;){const b=["count="+l];R==-1?0<l?(R=T[0].g,b.push("ofs="+R)):R=0:b.push("ofs="+R);let K=!0;for(let ct=0;ct<l;ct++){let H=T[ct].g;const gt=T[ct].map;if(H-=R,0>H)R=Math.max(0,T[ct].g-100),K=!1;else try{tc(gt,b,"req"+H+"_")}catch{d&&d(gt)}}if(K){d=b.join("&");break t}}}return i=i.i.splice(0,l),a.D=i,d}function ao(i){if(!i.g&&!i.u){i.Y=1;var a=i.Fa;$e||_i(),qe||($e(),qe=!0),Lr.add(a,i),i.v=0}}function ss(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Ke(A(i.Fa,i),co(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,uo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Ke(A(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,wt(10),zn(this),uo(this))};function is(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function uo(i){i.g=new Ht(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var a=Ft(i.qa);X(a,"RID","rpc"),X(a,"SID",i.K),X(a,"AID",i.T),X(a,"CI",i.F?"0":"1"),!i.F&&i.ja&&X(a,"TO",i.ja),X(a,"TYPE","xmlhttp"),rn(i,a),i.m&&i.o&&ns(a,i.m,i.o),i.L&&(i.g.I=i.L);var l=i.g;i=i.ia,l.L=1,l.v=Un(Ft(a)),l.m=null,l.P=!0,Oi(l,i)}n.Za=function(){this.C!=null&&(this.C=null,zn(this),ss(this),wt(19))};function Gn(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function lo(i,a){var l=null;if(i.g==a){Gn(i),is(i),i.g=null;var d=2}else if(ts(i.h,a))l=a.D,ji(i.h,a),d=1;else return;if(i.G!=0){if(a.o)if(d==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var T=i.B;d=xn(),Tt(d,new Di(d,l)),Hn(i)}else ao(i);else if(T=a.s,T==3||T==0&&0<a.X||!(d==1&&sc(i,a)||d==2&&ss(i)))switch(l&&0<l.length&&(a=i.h,a.i=a.i.concat(l)),T){case 1:ce(i,5);break;case 4:ce(i,10);break;case 3:ce(i,6);break;default:ce(i,2)}}}function co(i,a){let l=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(l*=2),l*a}function ce(i,a){if(i.j.info("Error code "+a),a==2){var l=A(i.fb,i),d=i.Xa;const T=!d;d=new le(d||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Fn(d,"https"),Un(d),T?Jl(d.toString(),l):Yl(d.toString(),l)}else wt(2);i.G=0,i.l&&i.l.sa(a),ho(i),so(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),wt(2)):(this.j.info("Failed to ping google.com"),wt(1))};function ho(i){if(i.G=0,i.ka=[],i.l){const a=$i(i.h);(a.length!=0||i.i.length!=0)&&(D(i.ka,a),D(i.ka,i.i),i.h.i.length=0,x(i.i),i.i.length=0),i.l.ra()}}function fo(i,a,l){var d=l instanceof le?Ft(l):new le(l);if(d.g!="")a&&(d.g=a+"."+d.g),Bn(d,d.s);else{var T=c.location;d=T.protocol,a=a?a+"."+T.hostname:T.hostname,T=+T.port;var R=new le(null);d&&Fn(R,d),a&&(R.g=a),T&&Bn(R,T),l&&(R.l=l),d=R}return l=i.D,a=i.ya,l&&a&&X(d,l,a),X(d,"VER",i.la),rn(i,d),d}function mo(i,a,l){if(a&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=i.Ca&&!i.pa?new tt(new jn({eb:l})):new tt(i.pa),a.Ha(i.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function po(){}n=po.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Wn(){}Wn.prototype.g=function(i,a){return new At(i,a)};function At(i,a){pt.call(this),this.g=new ro(a),this.l=i,this.h=a&&a.messageUrlParams||null,i=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(i?i["X-WebChannel-Content-Type"]=a.messageContentType:i={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(i?i["X-WebChannel-Client-Profile"]=a.va:i={"X-WebChannel-Client-Profile":a.va}),this.g.S=i,(i=a&&a.Sb)&&!U(i)&&(this.g.m=i),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!U(a)&&(this.g.D=a,i=this.h,i!==null&&a in i&&(i=this.h,a in i&&delete i[a])),this.j=new we(this)}V(At,pt),At.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){rs(this.g)},At.prototype.o=function(i){var a=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.u&&(l={},l.__data__=Hr(i),i=l);a.i.push(new jl(a.Ya++,i)),a.G==3&&Hn(a)},At.prototype.N=function(){this.g.l=null,delete this.j,rs(this.g),delete this.g,At.aa.N.call(this)};function go(i){Wr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var a=i.__sm__;if(a){t:{for(const l in a){i=l;break t}i=void 0}(this.i=i)&&(i=this.i,a=a!==null&&i in a?a[i]:void 0),this.data=a}else this.data=i}V(go,Wr);function _o(){Kr.call(this),this.status=1}V(_o,Kr);function we(i){this.g=i}V(we,po),we.prototype.ua=function(){Tt(this.g,"a")},we.prototype.ta=function(i){Tt(this.g,new go(i))},we.prototype.sa=function(i){Tt(this.g,new _o)},we.prototype.ra=function(){Tt(this.g,"b")},Wn.prototype.createWebChannel=Wn.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,$a=function(){return new Wn},ja=function(){return xn()},Ua=ae,vs={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},On.NO_ERROR=0,On.TIMEOUT=8,On.HTTP_ERROR=6,tr=On,ki.COMPLETE="complete",Ba=ki,Si.EventType=Ge,Ge.OPEN="a",Ge.CLOSE="b",Ge.ERROR="c",Ge.MESSAGE="d",pt.prototype.listen=pt.prototype.K,sn=Si,tt.prototype.listenOnce=tt.prototype.L,tt.prototype.getLastError=tt.prototype.Ka,tt.prototype.getLastErrorCode=tt.prototype.Ba,tt.prototype.getStatus=tt.prototype.Z,tt.prototype.getResponseJson=tt.prototype.Oa,tt.prototype.getResponseText=tt.prototype.oa,tt.prototype.send=tt.prototype.ea,tt.prototype.setWithCredentials=tt.prototype.Ha,Fa=tt}).apply(typeof Qn<"u"?Qn:typeof self<"u"?self:typeof window<"u"?window:{});const Vo="@firebase/firestore",Do="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Et.UNAUTHENTICATED=new Et(null),Et.GOOGLE_CREDENTIALS=new Et("google-credentials-uid"),Et.FIRST_PARTY=new Et("first-party-uid"),Et.MOCK_USER=new Et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Le="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me=new Da("@firebase/firestore");function Re(){return me.logLevel}function k(n,...t){if(me.logLevel<=q.DEBUG){const e=t.map(Us);me.debug(`Firestore (${Le}): ${n}`,...e)}}function $t(n,...t){if(me.logLevel<=q.ERROR){const e=t.map(Us);me.error(`Firestore (${Le}): ${n}`,...e)}}function Zt(n,...t){if(me.logLevel<=q.WARN){const e=t.map(Us);me.warn(`Firestore (${Le}): ${n}`,...e)}}function Us(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(e){return JSON.stringify(e)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,qa(n,r,e)}function qa(n,t,e){let r=`FIRESTORE (${Le}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw $t(r),new Error(r)}function W(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||qa(t,s,r)}function F(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends Me{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class zh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Et.UNAUTHENTICATED)))}shutdown(){}}class Hh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Gh{constructor(t){this.t=t,this.currentUser=Et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){W(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new Yt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Yt,t.enqueueRetryable((()=>s(this.currentUser)))};const u=()=>{const h=o;t.enqueueRetryable((async()=>{await h.promise,await s(this.currentUser)}))},c=h=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((h=>c(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Yt)}}),0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((r=>this.i!==t?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(W(typeof r.accessToken=="string",31837,{l:r}),new za(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return W(t===null||typeof t=="string",2055,{h:t}),new Et(t)}}class Wh{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=Et.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Kh{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new Wh(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(Et.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ko{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Qh{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Sh(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){W(this.o===void 0,3512);const r=o=>{o.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.m;return this.m=o.token,k("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable((()=>r(o)))};const s=o=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>s(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ko(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(W(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new ko(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Xh(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function B(n,t){return n<t?-1:n>t?1:0}function Ts(n,t){let e=0;for(;e<n.length&&e<t.length;){const r=n.codePointAt(e),s=t.codePointAt(e);if(r!==s){if(r<128&&s<128)return B(r,s);{const o=Ha(),u=Jh(o.encode(No(n,e)),o.encode(No(t,e)));return u!==0?u:B(r,s)}}e+=r>65535?2:1}return B(n.length,t.length)}function No(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function Jh(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return B(n[e],t[e]);return B(n.length,t.length)}function De(n,t,e){return n.length===t.length&&n.every(((r,s)=>e(r,t[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo="__name__";class bt{constructor(t,e,r){e===void 0?e=0:e>t.length&&M(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&M(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return bt.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof bt?t.forEach((r=>{e.push(r)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=bt.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return B(t.length,e.length)}static compareSegments(t,e){const r=bt.isNumericId(t),s=bt.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?bt.extractNumericId(t).compare(bt.extractNumericId(e)):Ts(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Jt.fromString(t.substring(4,t.length-2))}}class Y extends bt{construct(t,e,r){return new Y(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new N(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter((s=>s.length>0)))}return new Y(e)}static emptyPath(){return new Y([])}}const Yh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dt extends bt{construct(t,e,r){return new dt(t,e,r)}static isValidIdentifier(t){return Yh.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dt.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===xo}static keyField(){return new dt([xo])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new N(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let u=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new N(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new N(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else c==="`"?(u=!u,s++):c!=="."||u?(r+=c,s++):(o(),s++)}if(o(),u)throw new N(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new dt(e)}static emptyPath(){return new dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(Y.fromString(t))}static fromName(t){return new O(Y.fromString(t).popFirst(5))}static empty(){return new O(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Y.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Y.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new Y(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zh(n,t,e){if(!e)throw new N(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function td(n,t,e,r){if(t===!0&&r===!0)throw new N(S.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Oo(n){if(!O.isDocumentKey(n))throw new N(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ga(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function $s(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":M(12329,{type:typeof n})}function _n(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new N(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=$s(n);throw new N(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(n,t){const e={typeString:n};return t&&(e.value=t),e}function Rn(n,t){if(!Ga(n))throw new N(S.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const u=n[r];if(s&&typeof u!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&u!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new N(S.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo=-62135596800,Lo=1e6;class J{static now(){return J.fromMillis(Date.now())}static fromDate(t){return J.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Lo);return new J(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Mo)throw new N(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Lo}_compareTo(t){return this.seconds===t.seconds?B(this.nanoseconds,t.nanoseconds):B(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:J._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Rn(t,J._jsonSchema))return new J(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Mo;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}J._jsonSchemaVersion="firestore/timestamp/1.0",J._jsonSchema={type:st("string",J._jsonSchemaVersion),seconds:st("number"),nanoseconds:st("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{static fromTimestamp(t){return new L(t)}static min(){return new L(new J(0,0))}static max(){return new L(new J(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn=-1;function ed(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=L.fromTimestamp(r===1e9?new J(e+1,0):new J(e,r));return new te(s,O.empty(),t)}function nd(n){return new te(n.readTime,n.key,yn)}class te{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new te(L.min(),O.empty(),yn)}static max(){return new te(L.max(),O.empty(),yn)}}function rd(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(n.documentKey,t.documentKey),e!==0?e:B(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class id{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fe(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==sd)throw n;k("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new C(((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof C?e:C.resolve(e)}catch(e){return C.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):C.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):C.reject(e)}static resolve(t){return new C(((e,r)=>{e(t)}))}static reject(t){return new C(((e,r)=>{r(t)}))}static waitFor(t){return new C(((e,r)=>{let s=0,o=0,u=!1;t.forEach((c=>{++s,c.next((()=>{++o,u&&o===s&&e()}),(h=>r(h)))})),u=!0,o===s&&e()}))}static or(t){let e=C.resolve(!1);for(const r of t)e=e.next((s=>s?C.resolve(s):r()));return e}static forEach(t,e){const r=[];return t.forEach(((s,o)=>{r.push(e.call(this,s,o))})),this.waitFor(r)}static mapArray(t,e){return new C(((r,s)=>{const o=t.length,u=new Array(o);let c=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next((_=>{u[f]=_,++c,c===o&&r(u)}),(_=>s(_)))}}))}static doWhile(t,e){return new C(((r,s)=>{const o=()=>{t()===!0?e().next((()=>{o()}),s):r()};o()}))}}function od(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Be(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this._e(r),this.ae=r=>e.writeSequenceNumber(r))}_e(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ae&&this.ae(t),t}}Ar.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs=-1;function Rr(n){return n==null}function hr(n){return n===0&&1/n==-1/0}function ad(n){return typeof n=="number"&&Number.isInteger(n)&&!hr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa="";function ud(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Fo(t)),t=ld(n.get(e),t);return Fo(t)}function ld(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case Wa:e+="";break;default:e+=o}}return e}function Fo(n){return n+Wa+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function ge(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Ka(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t,e){this.comparator=t,this.root=e||ht.EMPTY}insert(t,e){return new Z(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ht.BLACK,null,null))}remove(t){return new Z(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ht.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,r)=>(t(e,r),!1)))}toString(){const t=[];return this.inorderTraversal(((e,r)=>(t.push(`${e}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Xn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Xn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Xn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Xn(this.root,t,this.comparator,!0)}}class Xn{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ht{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??ht.RED,this.left=s??ht.EMPTY,this.right=o??ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new ht(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ht.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return ht.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw M(43730,{key:this.key,value:this.value});if(this.right.isRed())throw M(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw M(27949);return t+(this.isRed()?0:1)}}ht.EMPTY=null,ht.RED=!0,ht.BLACK=!1;ht.EMPTY=new class{constructor(){this.size=0}get key(){throw M(57766)}get value(){throw M(16141)}get color(){throw M(16727)}get left(){throw M(29726)}get right(){throw M(36894)}copy(t,e,r,s,o){return this}insert(t,e,r){return new ht(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t){this.comparator=t,this.data=new Z(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,r)=>(t(e),!1)))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Uo(this.data.getIterator())}getIteratorFrom(t){return new Uo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((r=>{e=e.add(r)})),e}isEqual(t){if(!(t instanceof ot)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new ot(this.comparator);return e.data=t,e}}class Uo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t){this.fields=t,t.sort(dt.comparator)}static empty(){return new Pt([])}unionWith(t){let e=new ot(dt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Pt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return De(this.fields,t.fields,((e,r)=>e.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Qa("Invalid base64 string: "+o):o}})(t);return new ft(e)}static fromUint8Array(t){const e=(function(s){let o="";for(let u=0;u<s.length;++u)o+=String.fromCharCode(s[u]);return o})(t);return new ft(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return B(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const cd=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ee(n){if(W(!!n,39018),typeof n=="string"){let t=0;const e=cd.exec(n);if(W(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:et(n.seconds),nanos:et(n.nanos)}}function et(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ne(n){return typeof n=="string"?ft.fromBase64String(n):ft.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa="server_timestamp",Ja="__type__",Ya="__previous_value__",Za="__local_write_time__";function zs(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Ja])===null||e===void 0?void 0:e.stringValue)===Xa}function Cr(n){const t=n.mapValue.fields[Ya];return zs(t)?Cr(t):t}function En(n){const t=ee(n.mapValue.fields[Za].timestampValue);return new J(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(t,e,r,s,o,u,c,h,f,_){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=f,this.isUsingEmulator=_}}const dr="(default)";class vn{constructor(t,e){this.projectId=t,this.database=e||dr}static empty(){return new vn("","")}get isDefaultDatabase(){return this.database===dr}isEqual(t){return t instanceof vn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu="__type__",dd="__max__",Jn={mapValue:{}},eu="__vector__",fr="value";function re(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?zs(n)?4:md(n)?9007199254740991:fd(n)?10:11:M(28295,{value:n})}function xt(n,t){if(n===t)return!0;const e=re(n);if(e!==re(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return En(n).isEqual(En(t));case 3:return(function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const u=ee(s.timestampValue),c=ee(o.timestampValue);return u.seconds===c.seconds&&u.nanos===c.nanos})(n,t);case 5:return n.stringValue===t.stringValue;case 6:return(function(s,o){return ne(s.bytesValue).isEqual(ne(o.bytesValue))})(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return(function(s,o){return et(s.geoPointValue.latitude)===et(o.geoPointValue.latitude)&&et(s.geoPointValue.longitude)===et(o.geoPointValue.longitude)})(n,t);case 2:return(function(s,o){if("integerValue"in s&&"integerValue"in o)return et(s.integerValue)===et(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const u=et(s.doubleValue),c=et(o.doubleValue);return u===c?hr(u)===hr(c):isNaN(u)&&isNaN(c)}return!1})(n,t);case 9:return De(n.arrayValue.values||[],t.arrayValue.values||[],xt);case 10:case 11:return(function(s,o){const u=s.mapValue.fields||{},c=o.mapValue.fields||{};if(Bo(u)!==Bo(c))return!1;for(const h in u)if(u.hasOwnProperty(h)&&(c[h]===void 0||!xt(u[h],c[h])))return!1;return!0})(n,t);default:return M(52216,{left:n})}}function Tn(n,t){return(n.values||[]).find((e=>xt(e,t)))!==void 0}function ke(n,t){if(n===t)return 0;const e=re(n),r=re(t);if(e!==r)return B(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return B(n.booleanValue,t.booleanValue);case 2:return(function(o,u){const c=et(o.integerValue||o.doubleValue),h=et(u.integerValue||u.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1})(n,t);case 3:return jo(n.timestampValue,t.timestampValue);case 4:return jo(En(n),En(t));case 5:return Ts(n.stringValue,t.stringValue);case 6:return(function(o,u){const c=ne(o),h=ne(u);return c.compareTo(h)})(n.bytesValue,t.bytesValue);case 7:return(function(o,u){const c=o.split("/"),h=u.split("/");for(let f=0;f<c.length&&f<h.length;f++){const _=B(c[f],h[f]);if(_!==0)return _}return B(c.length,h.length)})(n.referenceValue,t.referenceValue);case 8:return(function(o,u){const c=B(et(o.latitude),et(u.latitude));return c!==0?c:B(et(o.longitude),et(u.longitude))})(n.geoPointValue,t.geoPointValue);case 9:return $o(n.arrayValue,t.arrayValue);case 10:return(function(o,u){var c,h,f,_;const w=o.fields||{},A=u.fields||{},P=(c=w[fr])===null||c===void 0?void 0:c.arrayValue,V=(h=A[fr])===null||h===void 0?void 0:h.arrayValue,x=B(((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0,((_=V==null?void 0:V.values)===null||_===void 0?void 0:_.length)||0);return x!==0?x:$o(P,V)})(n.mapValue,t.mapValue);case 11:return(function(o,u){if(o===Jn.mapValue&&u===Jn.mapValue)return 0;if(o===Jn.mapValue)return 1;if(u===Jn.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),f=u.fields||{},_=Object.keys(f);h.sort(),_.sort();for(let w=0;w<h.length&&w<_.length;++w){const A=Ts(h[w],_[w]);if(A!==0)return A;const P=ke(c[h[w]],f[_[w]]);if(P!==0)return P}return B(h.length,_.length)})(n.mapValue,t.mapValue);default:throw M(23264,{le:e})}}function jo(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return B(n,t);const e=ee(n),r=ee(t),s=B(e.seconds,r.seconds);return s!==0?s:B(e.nanos,r.nanos)}function $o(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=ke(e[s],r[s]);if(o)return o}return B(e.length,r.length)}function Ne(n){return ws(n)}function ws(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(e){const r=ee(e);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(e){return ne(e).toBase64()})(n.bytesValue):"referenceValue"in n?(function(e){return O.fromName(e).toString()})(n.referenceValue):"geoPointValue"in n?(function(e){return`geo(${e.latitude},${e.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=ws(o);return r+"]"})(n.arrayValue):"mapValue"in n?(function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const u of r)o?o=!1:s+=",",s+=`${u}:${ws(e.fields[u])}`;return s+"}"})(n.mapValue):M(61005,{value:n})}function er(n){switch(re(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Cr(n);return t?16+er(t):16;case 5:return 2*n.stringValue.length;case 6:return ne(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,o)=>s+er(o)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return ge(r.fields,((o,u)=>{s+=o.length+er(u)})),s})(n.mapValue);default:throw M(13486,{value:n})}}function Is(n){return!!n&&"integerValue"in n}function Hs(n){return!!n&&"arrayValue"in n}function qo(n){return!!n&&"nullValue"in n}function zo(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function nr(n){return!!n&&"mapValue"in n}function fd(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[tu])===null||e===void 0?void 0:e.stringValue)===eu}function cn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return ge(n.mapValue.fields,((e,r)=>t.mapValue.fields[e]=cn(r))),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=cn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function md(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===dd}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t){this.value=t}static empty(){return new Rt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!nr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=cn(e)}setAll(t){let e=dt.emptyPath(),r={},s=[];t.forEach(((u,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=c.popLast()}u?r[c.lastSegment()]=cn(u):s.push(c.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());nr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return xt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];nr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){ge(e,((s,o)=>t[s]=o));for(const s of r)delete t[s]}clone(){return new Rt(cn(this.value))}}function nu(n){const t=[];return ge(n.fields,((e,r)=>{const s=new dt([e]);if(nr(r)){const o=nu(r.mapValue).fields;if(o.length===0)t.push(s);else for(const u of o)t.push(s.child(u))}else t.push(s)})),new Pt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t,e,r,s,o,u,c){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=u,this.documentState=c}static newInvalidDocument(t){return new vt(t,0,L.min(),L.min(),L.min(),Rt.empty(),0)}static newFoundDocument(t,e,r,s){return new vt(t,1,e,L.min(),r,s,0)}static newNoDocument(t,e){return new vt(t,2,e,L.min(),L.min(),Rt.empty(),0)}static newUnknownDocument(t,e){return new vt(t,3,e,L.min(),L.min(),Rt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof vt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(t,e){this.position=t,this.inclusive=e}}function Ho(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],u=n.position[s];if(o.field.isKeyField()?r=O.comparator(O.fromName(u.referenceValue),e.key):r=ke(u,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Go(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!xt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(t,e="asc"){this.field=t,this.dir=e}}function pd(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{}class it extends ru{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new _d(t,e,r):e==="array-contains"?new vd(t,r):e==="in"?new Td(t,r):e==="not-in"?new wd(t,r):e==="array-contains-any"?new Id(t,r):new it(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new yd(t,r):new Ed(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(ke(e,this.value)):e!==null&&re(this.value)===re(e)&&this.matchesComparison(ke(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ot extends ru{constructor(t,e){super(),this.filters=t,this.op=e,this.he=null}static create(t,e){return new Ot(t,e)}matches(t){return su(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function su(n){return n.op==="and"}function iu(n){return gd(n)&&su(n)}function gd(n){for(const t of n.filters)if(t instanceof Ot)return!1;return!0}function As(n){if(n instanceof it)return n.field.canonicalString()+n.op.toString()+Ne(n.value);if(iu(n))return n.filters.map((t=>As(t))).join(",");{const t=n.filters.map((e=>As(e))).join(",");return`${n.op}(${t})`}}function ou(n,t){return n instanceof it?(function(r,s){return s instanceof it&&r.op===s.op&&r.field.isEqual(s.field)&&xt(r.value,s.value)})(n,t):n instanceof Ot?(function(r,s){return s instanceof Ot&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((o,u,c)=>o&&ou(u,s.filters[c])),!0):!1})(n,t):void M(19439)}function au(n){return n instanceof it?(function(e){return`${e.field.canonicalString()} ${e.op} ${Ne(e.value)}`})(n):n instanceof Ot?(function(e){return e.op.toString()+" {"+e.getFilters().map(au).join(" ,")+"}"})(n):"Filter"}class _d extends it{constructor(t,e,r){super(t,e,r),this.key=O.fromName(r.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class yd extends it{constructor(t,e){super(t,"in",e),this.keys=uu("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Ed extends it{constructor(t,e){super(t,"not-in",e),this.keys=uu("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function uu(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map((r=>O.fromName(r.referenceValue)))}class vd extends it{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Hs(e)&&Tn(e.arrayValue,this.value)}}class Td extends it{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Tn(this.value.arrayValue,e)}}class wd extends it{constructor(t,e){super(t,"not-in",e)}matches(t){if(Tn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Tn(this.value.arrayValue,e)}}class Id extends it{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Hs(e)||!e.arrayValue.values)&&e.arrayValue.values.some((r=>Tn(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(t,e=null,r=[],s=[],o=null,u=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=u,this.endAt=c,this.Pe=null}}function Wo(n,t=null,e=[],r=[],s=null,o=null,u=null){return new Ad(n,t,e,r,s,o,u)}function Gs(n){const t=F(n);if(t.Pe===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((r=>As(r))).join(","),e+="|ob:",e+=t.orderBy.map((r=>(function(o){return o.field.canonicalString()+o.dir})(r))).join(","),Rr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((r=>Ne(r))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((r=>Ne(r))).join(",")),t.Pe=e}return t.Pe}function Ws(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!pd(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!ou(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Go(n.startAt,t.startAt)&&Go(n.endAt,t.endAt)}function Rs(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(t,e=null,r=[],s=[],o=null,u="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=u,this.startAt=c,this.endAt=h,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Rd(n,t,e,r,s,o,u,c){return new Sr(n,t,e,r,s,o,u,c)}function Ks(n){return new Sr(n)}function Ko(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Cd(n){return n.collectionGroup!==null}function hn(n){const t=F(n);if(t.Te===null){t.Te=[];const e=new Set;for(const o of t.explicitOrderBy)t.Te.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let c=new ot(dt.comparator);return u.filters.forEach((h=>{h.getFlattenedFilters().forEach((f=>{f.isInequality()&&(c=c.add(f.field))}))})),c})(t).forEach((o=>{e.has(o.canonicalString())||o.isKeyField()||t.Te.push(new pr(o,r))})),e.has(dt.keyField().canonicalString())||t.Te.push(new pr(dt.keyField(),r))}return t.Te}function Vt(n){const t=F(n);return t.Ie||(t.Ie=Sd(t,hn(n))),t.Ie}function Sd(n,t){if(n.limitType==="F")return Wo(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map((s=>{const o=s.dir==="desc"?"asc":"desc";return new pr(s.field,o)}));const e=n.endAt?new mr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new mr(n.startAt.position,n.startAt.inclusive):null;return Wo(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Cs(n,t,e){return new Sr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Pr(n,t){return Ws(Vt(n),Vt(t))&&n.limitType===t.limitType}function lu(n){return`${Gs(Vt(n))}|lt:${n.limitType}`}function Ce(n){return`Query(target=${(function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map((s=>au(s))).join(", ")}]`),Rr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map((s=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(s))).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map((s=>Ne(s))).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map((s=>Ne(s))).join(",")),`Target(${r})`})(Vt(n))}; limitType=${n.limitType})`}function br(n,t){return t.isFoundDocument()&&(function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):O.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)})(n,t)&&(function(r,s){for(const o of hn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0})(n,t)&&(function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0})(n,t)&&(function(r,s){return!(r.startAt&&!(function(u,c,h){const f=Ho(u,c,h);return u.inclusive?f<=0:f<0})(r.startAt,hn(r),s)||r.endAt&&!(function(u,c,h){const f=Ho(u,c,h);return u.inclusive?f>=0:f>0})(r.endAt,hn(r),s))})(n,t)}function Pd(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function cu(n){return(t,e)=>{let r=!1;for(const s of hn(n)){const o=bd(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function bd(n,t,e){const r=n.field.isKeyField()?O.comparator(t.key,e.key):(function(o,u,c){const h=u.data.field(o),f=c.data.field(o);return h!==null&&f!==null?ke(h,f):M(42886)})(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return M(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){ge(this.inner,((e,r)=>{for(const[s,o]of r)t(s,o)}))}isEmpty(){return Ka(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd=new Z(O.comparator);function qt(){return Vd}const hu=new Z(O.comparator);function on(...n){let t=hu;for(const e of n)t=t.insert(e.key,e);return t}function du(n){let t=hu;return n.forEach(((e,r)=>t=t.insert(e,r.overlayedDocument))),t}function de(){return dn()}function fu(){return dn()}function dn(){return new _e((n=>n.toString()),((n,t)=>n.isEqual(t)))}const Dd=new Z(O.comparator),kd=new ot(O.comparator);function j(...n){let t=kd;for(const e of n)t=t.add(e);return t}const Nd=new ot(B);function xd(){return Nd}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hr(t)?"-0":t}}function mu(n){return{integerValue:""+n}}function Od(n,t){return ad(t)?mu(t):Qs(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(){this._=void 0}}function Md(n,t,e){return n instanceof gr?(function(s,o){const u={fields:{[Ja]:{stringValue:Xa},[Za]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&zs(o)&&(o=Cr(o)),o&&(u.fields[Ya]=o),{mapValue:u}})(e,t):n instanceof wn?gu(n,t):n instanceof In?_u(n,t):(function(s,o){const u=pu(s,o),c=Qo(u)+Qo(s.Ee);return Is(u)&&Is(s.Ee)?mu(c):Qs(s.serializer,c)})(n,t)}function Ld(n,t,e){return n instanceof wn?gu(n,t):n instanceof In?_u(n,t):e}function pu(n,t){return n instanceof _r?(function(r){return Is(r)||(function(o){return!!o&&"doubleValue"in o})(r)})(t)?t:{integerValue:0}:null}class gr extends Vr{}class wn extends Vr{constructor(t){super(),this.elements=t}}function gu(n,t){const e=yu(t);for(const r of n.elements)e.some((s=>xt(s,r)))||e.push(r);return{arrayValue:{values:e}}}class In extends Vr{constructor(t){super(),this.elements=t}}function _u(n,t){let e=yu(t);for(const r of n.elements)e=e.filter((s=>!xt(s,r)));return{arrayValue:{values:e}}}class _r extends Vr{constructor(t,e){super(),this.serializer=t,this.Ee=e}}function Qo(n){return et(n.integerValue||n.doubleValue)}function yu(n){return Hs(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Fd(n,t){return n.field.isEqual(t.field)&&(function(r,s){return r instanceof wn&&s instanceof wn||r instanceof In&&s instanceof In?De(r.elements,s.elements,xt):r instanceof _r&&s instanceof _r?xt(r.Ee,s.Ee):r instanceof gr&&s instanceof gr})(n.transform,t.transform)}class Bd{constructor(t,e){this.version=t,this.transformResults=e}}class Ut{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ut}static exists(t){return new Ut(void 0,t)}static updateTime(t){return new Ut(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function rr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Dr{}function Eu(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Tu(n.key,Ut.none()):new Cn(n.key,n.data,Ut.none());{const e=n.data,r=Rt.empty();let s=new ot(dt.comparator);for(let o of t.fields)if(!s.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?r.delete(o):r.set(o,u),s=s.add(o)}return new ye(n.key,r,new Pt(s.toArray()),Ut.none())}}function Ud(n,t,e){n instanceof Cn?(function(s,o,u){const c=s.value.clone(),h=Jo(s.fieldTransforms,o,u.transformResults);c.setAll(h),o.convertToFoundDocument(u.version,c).setHasCommittedMutations()})(n,t,e):n instanceof ye?(function(s,o,u){if(!rr(s.precondition,o))return void o.convertToUnknownDocument(u.version);const c=Jo(s.fieldTransforms,o,u.transformResults),h=o.data;h.setAll(vu(s)),h.setAll(c),o.convertToFoundDocument(u.version,h).setHasCommittedMutations()})(n,t,e):(function(s,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()})(0,t,e)}function fn(n,t,e,r){return n instanceof Cn?(function(o,u,c,h){if(!rr(o.precondition,u))return c;const f=o.value.clone(),_=Yo(o.fieldTransforms,h,u);return f.setAll(_),u.convertToFoundDocument(u.version,f).setHasLocalMutations(),null})(n,t,e,r):n instanceof ye?(function(o,u,c,h){if(!rr(o.precondition,u))return c;const f=Yo(o.fieldTransforms,h,u),_=u.data;return _.setAll(vu(o)),_.setAll(f),u.convertToFoundDocument(u.version,_).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((w=>w.field)))})(n,t,e,r):(function(o,u,c){return rr(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):c})(n,t,e)}function jd(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=pu(r.transform,s||null);o!=null&&(e===null&&(e=Rt.empty()),e.set(r.field,o))}return e||null}function Xo(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&De(r,s,((o,u)=>Fd(o,u)))})(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Cn extends Dr{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ye extends Dr{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function vu(n){const t=new Map;return n.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}})),t}function Jo(n,t,e){const r=new Map;W(n.length===e.length,32656,{Ae:e.length,Re:n.length});for(let s=0;s<e.length;s++){const o=n[s],u=o.transform,c=t.data.field(o.field);r.set(o.field,Ld(u,c,e[s]))}return r}function Yo(n,t,e){const r=new Map;for(const s of n){const o=s.transform,u=e.data.field(s.field);r.set(s.field,Md(o,u,t))}return r}class Tu extends Dr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $d extends Dr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Ud(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=fn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=fn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=fu();return this.mutations.forEach((s=>{const o=t.get(s.key),u=o.overlayedDocument;let c=this.applyToLocalView(u,o.mutatedFields);c=e.has(s.key)?null:c;const h=Eu(u,c);h!==null&&r.set(s.key,h),u.isValidDocument()||u.convertToNoDocument(L.min())})),r}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),j())}isEqual(t){return this.batchId===t.batchId&&De(this.mutations,t.mutations,((e,r)=>Xo(e,r)))&&De(this.baseMutations,t.baseMutations,((e,r)=>Xo(e,r)))}}class Xs{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){W(t.mutations.length===r.length,58842,{Ve:t.mutations.length,me:r.length});let s=(function(){return Dd})();const o=t.mutations;for(let u=0;u<o.length;u++)s=s.insert(o[u].key,r[u].version);return new Xs(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rt,$;function Gd(n){switch(n){case S.OK:return M(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return M(15467,{code:n})}}function wu(n){if(n===void 0)return $t("GRPC error has no .code"),S.UNKNOWN;switch(n){case rt.OK:return S.OK;case rt.CANCELLED:return S.CANCELLED;case rt.UNKNOWN:return S.UNKNOWN;case rt.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case rt.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case rt.INTERNAL:return S.INTERNAL;case rt.UNAVAILABLE:return S.UNAVAILABLE;case rt.UNAUTHENTICATED:return S.UNAUTHENTICATED;case rt.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case rt.NOT_FOUND:return S.NOT_FOUND;case rt.ALREADY_EXISTS:return S.ALREADY_EXISTS;case rt.PERMISSION_DENIED:return S.PERMISSION_DENIED;case rt.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case rt.ABORTED:return S.ABORTED;case rt.OUT_OF_RANGE:return S.OUT_OF_RANGE;case rt.UNIMPLEMENTED:return S.UNIMPLEMENTED;case rt.DATA_LOSS:return S.DATA_LOSS;default:return M(39323,{code:n})}}($=rt||(rt={}))[$.OK=0]="OK",$[$.CANCELLED=1]="CANCELLED",$[$.UNKNOWN=2]="UNKNOWN",$[$.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$[$.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$[$.NOT_FOUND=5]="NOT_FOUND",$[$.ALREADY_EXISTS=6]="ALREADY_EXISTS",$[$.PERMISSION_DENIED=7]="PERMISSION_DENIED",$[$.UNAUTHENTICATED=16]="UNAUTHENTICATED",$[$.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$[$.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$[$.ABORTED=10]="ABORTED",$[$.OUT_OF_RANGE=11]="OUT_OF_RANGE",$[$.UNIMPLEMENTED=12]="UNIMPLEMENTED",$[$.INTERNAL=13]="INTERNAL",$[$.UNAVAILABLE=14]="UNAVAILABLE",$[$.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd=new Jt([4294967295,4294967295],0);function Zo(n){const t=Ha().encode(n),e=new La;return e.update(t),new Uint8Array(e.digest())}function ta(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Jt([e,r],0),new Jt([s,o],0)]}class Js{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new an(`Invalid padding: ${e}`);if(r<0)throw new an(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new an(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new an(`Invalid padding when bitmap length is 0: ${e}`);this.fe=8*t.length-e,this.ge=Jt.fromNumber(this.fe)}pe(t,e,r){let s=t.add(e.multiply(Jt.fromNumber(r)));return s.compare(Wd)===1&&(s=new Jt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.fe===0)return!1;const e=Zo(t),[r,s]=ta(e);for(let o=0;o<this.hashCount;o++){const u=this.pe(r,s,o);if(!this.ye(u))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new Js(o,s,e);return r.forEach((c=>u.insert(c))),u}insert(t){if(this.fe===0)return;const e=Zo(t),[r,s]=ta(e);for(let o=0;o<this.hashCount;o++){const u=this.pe(r,s,o);this.we(u)}}we(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class an extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,Sn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new kr(L.min(),s,new Z(B),qt(),j())}}class Sn{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Sn(r,e,j(),j(),j())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(t,e,r,s){this.Se=t,this.removedTargetIds=e,this.key=r,this.be=s}}class Iu{constructor(t,e){this.targetId=t,this.De=e}}class Au{constructor(t,e,r=ft.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class ea{constructor(){this.ve=0,this.Ce=na(),this.Fe=ft.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(t){t.approximateByteSize()>0&&(this.xe=!0,this.Fe=t)}Le(){let t=j(),e=j(),r=j();return this.Ce.forEach(((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:M(38017,{changeType:o})}})),new Sn(this.Fe,this.Me,t,e,r)}ke(){this.xe=!1,this.Ce=na()}qe(t,e){this.xe=!0,this.Ce=this.Ce.insert(t,e)}Qe(t){this.xe=!0,this.Ce=this.Ce.remove(t)}$e(){this.ve+=1}Ue(){this.ve-=1,W(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Kd{constructor(t){this.We=t,this.Ge=new Map,this.ze=qt(),this.je=Yn(),this.Je=Yn(),this.He=new Z(B)}Ye(t){for(const e of t.Se)t.be&&t.be.isFoundDocument()?this.Ze(e,t.be):this.Xe(e,t.key,t.be);for(const e of t.removedTargetIds)this.Xe(e,t.key,t.be)}et(t){this.forEachTarget(t,(e=>{const r=this.tt(e);switch(t.state){case 0:this.nt(e)&&r.Be(t.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(t.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(e);break;case 3:this.nt(e)&&(r.Ke(),r.Be(t.resumeToken));break;case 4:this.nt(e)&&(this.rt(e),r.Be(t.resumeToken));break;default:M(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ge.forEach(((r,s)=>{this.nt(s)&&e(s)}))}it(t){const e=t.targetId,r=t.De.count,s=this.st(e);if(s){const o=s.target;if(Rs(o))if(r===0){const u=new O(o.path);this.Xe(e,u,vt.newNoDocument(u,L.min()))}else W(r===1,20013,{expectedCount:r});else{const u=this.ot(e);if(u!==r){const c=this._t(t),h=c?this.ut(c,t,u):1;if(h!==0){this.rt(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(e,f)}}}}}_t(t){const e=t.De.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let u,c;try{u=ne(r).toUint8Array()}catch(h){if(h instanceof Qa)return Zt("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new Js(u,s,o)}catch(h){return Zt(h instanceof an?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.fe===0?null:c}ut(t,e,r){return e.De.count===r-this.ht(t,e.targetId)?0:2}ht(t,e){const r=this.We.getRemoteKeysForTarget(e);let s=0;return r.forEach((o=>{const u=this.We.lt(),c=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.Xe(e,o,null),s++)})),s}Pt(t){const e=new Map;this.Ge.forEach(((o,u)=>{const c=this.st(u);if(c){if(o.current&&Rs(c.target)){const h=new O(c.target.path);this.Tt(h).has(u)||this.It(u,h)||this.Xe(u,h,vt.newNoDocument(h,t))}o.Ne&&(e.set(u,o.Le()),o.ke())}}));let r=j();this.Je.forEach(((o,u)=>{let c=!0;u.forEachWhile((h=>{const f=this.st(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(o))})),this.ze.forEach(((o,u)=>u.setReadTime(t)));const s=new kr(t,e,this.He,this.ze,r);return this.ze=qt(),this.je=Yn(),this.Je=Yn(),this.He=new Z(B),s}Ze(t,e){if(!this.nt(t))return;const r=this.It(t,e.key)?2:0;this.tt(t).qe(e.key,r),this.ze=this.ze.insert(e.key,e),this.je=this.je.insert(e.key,this.Tt(e.key).add(t)),this.Je=this.Je.insert(e.key,this.dt(e.key).add(t))}Xe(t,e,r){if(!this.nt(t))return;const s=this.tt(t);this.It(t,e)?s.qe(e,1):s.Qe(e),this.Je=this.Je.insert(e,this.dt(e).delete(t)),this.Je=this.Je.insert(e,this.dt(e).add(t)),r&&(this.ze=this.ze.insert(e,r))}removeTarget(t){this.Ge.delete(t)}ot(t){const e=this.tt(t).Le();return this.We.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.tt(t).$e()}tt(t){let e=this.Ge.get(t);return e||(e=new ea,this.Ge.set(t,e)),e}dt(t){let e=this.Je.get(t);return e||(e=new ot(B),this.Je=this.Je.insert(t,e)),e}Tt(t){let e=this.je.get(t);return e||(e=new ot(B),this.je=this.je.insert(t,e)),e}nt(t){const e=this.st(t)!==null;return e||k("WatchChangeAggregator","Detected inactive target",t),e}st(t){const e=this.Ge.get(t);return e&&e.Oe?null:this.We.Et(t)}rt(t){this.Ge.set(t,new ea),this.We.getRemoteKeysForTarget(t).forEach((e=>{this.Xe(t,e,null)}))}It(t,e){return this.We.getRemoteKeysForTarget(t).has(e)}}function Yn(){return new Z(O.comparator)}function na(){return new Z(O.comparator)}const Qd={asc:"ASCENDING",desc:"DESCENDING"},Xd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Jd={and:"AND",or:"OR"};class Yd{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ss(n,t){return n.useProto3Json||Rr(t)?t:{value:t}}function yr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ru(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Zd(n,t){return yr(n,t.toTimestamp())}function Dt(n){return W(!!n,49232),L.fromTimestamp((function(e){const r=ee(e);return new J(r.seconds,r.nanos)})(n))}function Ys(n,t){return Ps(n,t).canonicalString()}function Ps(n,t){const e=(function(s){return new Y(["projects",s.projectId,"databases",s.database])})(n).child("documents");return t===void 0?e:e.child(t)}function Cu(n){const t=Y.fromString(n);return W(Du(t),10190,{key:t.toString()}),t}function bs(n,t){return Ys(n.databaseId,t.path)}function hs(n,t){const e=Cu(t);if(e.get(1)!==n.databaseId.projectId)throw new N(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new N(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new O(Pu(e))}function Su(n,t){return Ys(n.databaseId,t)}function tf(n){const t=Cu(n);return t.length===4?Y.emptyPath():Pu(t)}function Vs(n){return new Y(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Pu(n){return W(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function ra(n,t,e){return{name:bs(n,t),fields:e.value.mapValue.fields}}function ef(n,t){let e;if("targetChange"in t){t.targetChange;const r=(function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:M(39313,{state:f})})(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=(function(f,_){return f.useProto3Json?(W(_===void 0||typeof _=="string",58123),ft.fromBase64String(_||"")):(W(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array,16193),ft.fromUint8Array(_||new Uint8Array))})(n,t.targetChange.resumeToken),u=t.targetChange.cause,c=u&&(function(f){const _=f.code===void 0?S.UNKNOWN:wu(f.code);return new N(_,f.message||"")})(u);e=new Au(r,s,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=hs(n,r.document.name),o=Dt(r.document.updateTime),u=r.document.createTime?Dt(r.document.createTime):L.min(),c=new Rt({mapValue:{fields:r.document.fields}}),h=vt.newFoundDocument(s,o,u,c),f=r.targetIds||[],_=r.removedTargetIds||[];e=new sr(f,_,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=hs(n,r.document),o=r.readTime?Dt(r.readTime):L.min(),u=vt.newNoDocument(s,o),c=r.removedTargetIds||[];e=new sr([],c,u.key,u)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=hs(n,r.document),o=r.removedTargetIds||[];e=new sr([],o,s,null)}else{if(!("filter"in t))return M(11601,{At:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,u=new Hd(s,o),c=r.targetId;e=new Iu(c,u)}}return e}function nf(n,t){let e;if(t instanceof Cn)e={update:ra(n,t.key,t.value)};else if(t instanceof Tu)e={delete:bs(n,t.key)};else if(t instanceof ye)e={update:ra(n,t.key,t.data),updateMask:df(t.fieldMask)};else{if(!(t instanceof $d))return M(16599,{Rt:t.type});e={verify:bs(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((r=>(function(o,u){const c=u.transform;if(c instanceof gr)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof wn)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof In)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof _r)return{fieldPath:u.field.canonicalString(),increment:c.Ee};throw M(20930,{transform:u.transform})})(0,r)))),t.precondition.isNone||(e.currentDocument=(function(s,o){return o.updateTime!==void 0?{updateTime:Zd(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M(27497)})(n,t.precondition)),e}function rf(n,t){return n&&n.length>0?(W(t!==void 0,14353),n.map((e=>(function(s,o){let u=s.updateTime?Dt(s.updateTime):Dt(o);return u.isEqual(L.min())&&(u=Dt(o)),new Bd(u,s.transformResults||[])})(e,t)))):[]}function sf(n,t){return{documents:[Su(n,t.path)]}}function of(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Su(n,s);const o=(function(f){if(f.length!==0)return Vu(Ot.create(f,"and"))})(t.filters);o&&(e.structuredQuery.where=o);const u=(function(f){if(f.length!==0)return f.map((_=>(function(A){return{field:Se(A.field),direction:lf(A.dir)}})(_)))})(t.orderBy);u&&(e.structuredQuery.orderBy=u);const c=Ss(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=(function(f){return{before:f.inclusive,values:f.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(f){return{before:!f.inclusive,values:f.position}})(t.endAt)),{Vt:e,parent:s}}function af(n){let t=tf(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){W(r===1,65062);const _=e.from[0];_.allDescendants?s=_.collectionId:t=t.child(_.collectionId)}let o=[];e.where&&(o=(function(w){const A=bu(w);return A instanceof Ot&&iu(A)?A.getFilters():[A]})(e.where));let u=[];e.orderBy&&(u=(function(w){return w.map((A=>(function(V){return new pr(Pe(V.field),(function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(V.direction))})(A)))})(e.orderBy));let c=null;e.limit&&(c=(function(w){let A;return A=typeof w=="object"?w.value:w,Rr(A)?null:A})(e.limit));let h=null;e.startAt&&(h=(function(w){const A=!!w.before,P=w.values||[];return new mr(P,A)})(e.startAt));let f=null;return e.endAt&&(f=(function(w){const A=!w.before,P=w.values||[];return new mr(P,A)})(e.endAt)),Rd(t,s,u,o,c,"F",h,f)}function uf(n,t){const e=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M(28987,{purpose:s})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function bu(n){return n.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Pe(e.unaryFilter.field);return it.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Pe(e.unaryFilter.field);return it.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Pe(e.unaryFilter.field);return it.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Pe(e.unaryFilter.field);return it.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return M(61313);default:return M(60726)}})(n):n.fieldFilter!==void 0?(function(e){return it.create(Pe(e.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return M(58110);default:return M(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(e){return Ot.create(e.compositeFilter.filters.map((r=>bu(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return M(1026)}})(e.compositeFilter.op))})(n):M(30097,{filter:n})}function lf(n){return Qd[n]}function cf(n){return Xd[n]}function hf(n){return Jd[n]}function Se(n){return{fieldPath:n.canonicalString()}}function Pe(n){return dt.fromServerFormat(n.fieldPath)}function Vu(n){return n instanceof it?(function(e){if(e.op==="=="){if(zo(e.value))return{unaryFilter:{field:Se(e.field),op:"IS_NAN"}};if(qo(e.value))return{unaryFilter:{field:Se(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(zo(e.value))return{unaryFilter:{field:Se(e.field),op:"IS_NOT_NAN"}};if(qo(e.value))return{unaryFilter:{field:Se(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Se(e.field),op:cf(e.op),value:e.value}}})(n):n instanceof Ot?(function(e){const r=e.getFilters().map((s=>Vu(s)));return r.length===1?r[0]:{compositeFilter:{op:hf(e.op),filters:r}}})(n):M(54877,{filter:n})}function df(n){const t=[];return n.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Du(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t,e,r,s,o=L.min(),u=L.min(),c=ft.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new Kt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(t){this.gt=t}}function mf(n){const t=af({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Cs(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(){this.Dn=new gf}addToCollectionParentIndex(t,e){return this.Dn.add(e),C.resolve()}getCollectionParents(t,e){return C.resolve(this.Dn.getEntries(e))}addFieldIndex(t,e){return C.resolve()}deleteFieldIndex(t,e){return C.resolve()}deleteAllFieldIndexes(t){return C.resolve()}createTargetIndexes(t,e){return C.resolve()}getDocumentsMatchingTarget(t,e){return C.resolve(null)}getIndexType(t,e){return C.resolve(0)}getFieldIndexes(t,e){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,e){return C.resolve(te.min())}getMinOffsetFromCollectionGroup(t,e){return C.resolve(te.min())}updateCollectionGroup(t,e,r){return C.resolve()}updateIndexEntries(t,e){return C.resolve()}}class gf{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new ot(Y.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new ot(Y.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ku=41943040;class It{static withCacheSize(t){return new It(t,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It.DEFAULT_COLLECTION_PERCENTILE=10,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,It.DEFAULT=new It(ku,It.DEFAULT_COLLECTION_PERCENTILE,It.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),It.DISABLED=new It(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(t){this._r=t}next(){return this._r+=2,this._r}static ar(){return new xe(0)}static ur(){return new xe(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia="LruGarbageCollector",_f=1048576;function oa([n,t],[e,r]){const s=B(n,e);return s===0?B(t,r):s}class yf{constructor(t){this.Tr=t,this.buffer=new ot(oa),this.Ir=0}dr(){return++this.Ir}Er(t){const e=[t,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();oa(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Ef{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(t){k(ia,`Garbage collection scheduled in ${t}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Be(e)?k(ia,"Ignoring IndexedDB error during garbage collection: ",e):await Fe(e)}await this.Rr(3e5)}))}}class vf{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.mr(t).next((r=>Math.floor(e/100*r)))}nthSequenceNumber(t,e){if(e===0)return C.resolve(Ar.ue);const r=new yf(e);return this.Vr.forEachTarget(t,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(t,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(t,e,r){return this.Vr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(k("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(sa)):this.getCacheSize(t).next((r=>r<this.params.cacheSizeCollectionThreshold?(k("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),sa):this.pr(t,e)))}getCacheSize(t){return this.Vr.getCacheSize(t)}pr(t,e){let r,s,o,u,c,h,f;const _=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((w=>(w>this.params.maximumSequenceNumbersToCollect?(k("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${w}`),s=this.params.maximumSequenceNumbersToCollect):s=w,u=Date.now(),this.nthSequenceNumber(t,s)))).next((w=>(r=w,c=Date.now(),this.removeTargets(t,r,e)))).next((w=>(o=w,h=Date.now(),this.removeOrphanedDocuments(t,r)))).next((w=>(f=Date.now(),Re()<=q.DEBUG&&k("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-_}ms
	Determined least recently used ${s} in `+(c-u)+`ms
	Removed ${o} targets in `+(h-c)+`ms
	Removed ${w} documents in `+(f-h)+`ms
Total Duration: ${f-_}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:w}))))}}function Tf(n,t){return new vf(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(){this.changes=new _e((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,vt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?C.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(r=s,this.remoteDocumentCache.getEntry(t,e)))).next((s=>(r!==null&&fn(r.mutation,s,Pt.empty(),J.now()),s)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.getLocalViewOfDocuments(t,r,j()).next((()=>r))))}getLocalViewOfDocuments(t,e,r=j()){const s=de();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,r).next((o=>{let u=on();return o.forEach(((c,h)=>{u=u.insert(c,h.overlayedDocument)})),u}))))}getOverlayedDocuments(t,e){const r=de();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,j())))}populateOverlays(t,e,r){const s=[];return r.forEach((o=>{e.has(o)||s.push(o)})),this.documentOverlayCache.getOverlays(t,s).next((o=>{o.forEach(((u,c)=>{e.set(u,c)}))}))}computeViews(t,e,r,s){let o=qt();const u=dn(),c=(function(){return dn()})();return e.forEach(((h,f)=>{const _=r.get(f.key);s.has(f.key)&&(_===void 0||_.mutation instanceof ye)?o=o.insert(f.key,f):_!==void 0?(u.set(f.key,_.mutation.getFieldMask()),fn(_.mutation,f,_.mutation.getFieldMask(),J.now())):u.set(f.key,Pt.empty())})),this.recalculateAndSaveOverlays(t,o).next((h=>(h.forEach(((f,_)=>u.set(f,_))),e.forEach(((f,_)=>{var w;return c.set(f,new If(_,(w=u.get(f))!==null&&w!==void 0?w:null))})),c)))}recalculateAndSaveOverlays(t,e){const r=dn();let s=new Z(((u,c)=>u-c)),o=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((u=>{for(const c of u)c.keys().forEach((h=>{const f=e.get(h);if(f===null)return;let _=r.get(h)||Pt.empty();_=c.applyToLocalView(f,_),r.set(h,_);const w=(s.get(c.batchId)||j()).add(h);s=s.insert(c.batchId,w)}))})).next((()=>{const u=[],c=s.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),f=h.key,_=h.value,w=fu();_.forEach((A=>{if(!o.has(A)){const P=Eu(e.get(A),r.get(A));P!==null&&w.set(A,P),o=o.add(A)}})),u.push(this.documentOverlayCache.saveOverlays(t,f,w))}return C.waitFor(u)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,e,r,s){return(function(u){return O.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Cd(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next((o=>{const u=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):C.resolve(de());let c=yn,h=o;return u.next((f=>C.forEach(f,((_,w)=>(c<w.largestBatchId&&(c=w.largestBatchId),o.get(_)?C.resolve():this.remoteDocumentCache.getEntry(t,_).next((A=>{h=h.insert(_,A)}))))).next((()=>this.populateOverlays(t,f,o))).next((()=>this.computeViews(t,h,f,j()))).next((_=>({batchId:c,changes:du(_)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next((r=>{let s=on();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let u=on();return this.indexManager.getCollectionParents(t,o).next((c=>C.forEach(c,(h=>{const f=(function(w,A){return new Sr(A,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)})(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next((_=>{_.forEach(((w,A)=>{u=u.insert(w,A)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next((u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s)))).next((u=>{o.forEach(((h,f)=>{const _=f.getKey();u.get(_)===null&&(u=u.insert(_,vt.newInvalidDocument(_)))}));let c=on();return u.forEach(((h,f)=>{const _=o.get(h);_!==void 0&&fn(_.mutation,f,Pt.empty(),J.now()),br(e,f)&&(c=c.insert(h,f))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(t){this.serializer=t,this.Br=new Map,this.Lr=new Map}getBundleMetadata(t,e){return C.resolve(this.Br.get(e))}saveBundleMetadata(t,e){return this.Br.set(e.id,(function(s){return{id:s.id,version:s.version,createTime:Dt(s.createTime)}})(e)),C.resolve()}getNamedQuery(t,e){return C.resolve(this.Lr.get(e))}saveNamedQuery(t,e){return this.Lr.set(e.name,(function(s){return{name:s.name,query:mf(s.bundledQuery),readTime:Dt(s.readTime)}})(e)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(){this.overlays=new Z(O.comparator),this.kr=new Map}getOverlay(t,e){return C.resolve(this.overlays.get(e))}getOverlays(t,e){const r=de();return C.forEach(e,(s=>this.getOverlay(t,s).next((o=>{o!==null&&r.set(s,o)})))).next((()=>r))}saveOverlays(t,e,r){return r.forEach(((s,o)=>{this.wt(t,e,o)})),C.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((o=>this.overlays=this.overlays.remove(o))),this.kr.delete(r)),C.resolve()}getOverlaysForCollection(t,e,r){const s=de(),o=e.length+1,u=new O(e.child("")),c=this.overlays.getIteratorFrom(u);for(;c.hasNext();){const h=c.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return C.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new Z(((f,_)=>f-_));const u=this.overlays.getIterator();for(;u.hasNext();){const f=u.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let _=o.get(f.largestBatchId);_===null&&(_=de(),o=o.insert(f.largestBatchId,_)),_.set(f.getKey(),f)}}const c=de(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((f,_)=>c.set(f,_))),!(c.size()>=s)););return C.resolve(c)}wt(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const u=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new zd(e,r));let o=this.kr.get(e);o===void 0&&(o=j(),this.kr.set(e,o)),this.kr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(){this.sessionToken=ft.EMPTY_BYTE_STRING}getSessionToken(t){return C.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,C.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(){this.qr=new ot(at.Qr),this.$r=new ot(at.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(t,e){const r=new at(t,e);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(t,e){t.forEach((r=>this.addReference(r,e)))}removeReference(t,e){this.Wr(new at(t,e))}Gr(t,e){t.forEach((r=>this.removeReference(r,e)))}zr(t){const e=new O(new Y([])),r=new at(e,t),s=new at(e,t+1),o=[];return this.$r.forEachInRange([r,s],(u=>{this.Wr(u),o.push(u.key)})),o}jr(){this.qr.forEach((t=>this.Wr(t)))}Wr(t){this.qr=this.qr.delete(t),this.$r=this.$r.delete(t)}Jr(t){const e=new O(new Y([])),r=new at(e,t),s=new at(e,t+1);let o=j();return this.$r.forEachInRange([r,s],(u=>{o=o.add(u.key)})),o}containsKey(t){const e=new at(t,0),r=this.qr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class at{constructor(t,e){this.key=t,this.Hr=e}static Qr(t,e){return O.comparator(t.key,e.key)||B(t.Hr,e.Hr)}static Ur(t,e){return B(t.Hr,e.Hr)||O.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.er=1,this.Yr=new ot(at.Qr)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new qd(o,e,r,s);this.mutationQueue.push(u);for(const c of s)this.Yr=this.Yr.add(new at(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return C.resolve(u)}lookupMutationBatch(t,e){return C.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.Xr(r),o=s<0?0:s;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?qs:this.er-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new at(e,0),s=new at(e,Number.POSITIVE_INFINITY),o=[];return this.Yr.forEachInRange([r,s],(u=>{const c=this.Zr(u.Hr);o.push(c)})),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new ot(B);return e.forEach((s=>{const o=new at(s,0),u=new at(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([o,u],(c=>{r=r.add(c.Hr)}))})),C.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;O.isDocumentKey(o)||(o=o.child(""));const u=new at(new O(o),0);let c=new ot(B);return this.Yr.forEachWhile((h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(c=c.add(h.Hr)),!0)}),u),C.resolve(this.ei(c))}ei(t){const e=[];return t.forEach((r=>{const s=this.Zr(r);s!==null&&e.push(s)})),e}removeMutationBatch(t,e){W(this.ti(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return C.forEach(e.mutations,(s=>{const o=new at(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Yr=r}))}rr(t){}containsKey(t,e){const r=new at(e,0),s=this.Yr.firstAfterOrEqual(r);return C.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}ti(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(t){this.ni=t,this.docs=(function(){return new Z(O.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,u=this.ni(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return C.resolve(r?r.document.mutableCopy():vt.newInvalidDocument(e))}getEntries(t,e){let r=qt();return e.forEach((s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():vt.newInvalidDocument(s))})),C.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=qt();const u=e.path,c=new O(u.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:f,value:{document:_}}=h.getNext();if(!u.isPrefixOf(f.path))break;f.path.length>u.length+1||rd(nd(_),r)<=0||(s.has(_.key)||br(e,_))&&(o=o.insert(_.key,_.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(t,e,r,s){M(9500)}ri(t,e){return C.forEach(this.docs,(r=>e(r)))}newChangeBuffer(t){return new Vf(this)}getSize(t){return C.resolve(this.size)}}class Vf extends wf{constructor(t){super(),this.Or=t}applyChanges(t){const e=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?e.push(this.Or.addEntry(t,s)):this.Or.removeEntry(r)})),C.waitFor(e)}getFromCache(t,e){return this.Or.getEntry(t,e)}getAllFromCache(t,e){return this.Or.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(t){this.persistence=t,this.ii=new _e((e=>Gs(e)),Ws),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.si=0,this.oi=new Zs,this.targetCount=0,this._i=xe.ar()}forEachTarget(t,e){return this.ii.forEach(((r,s)=>e(s))),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this.si)}allocateTargetId(t){return this.highestTargetId=this._i.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.si&&(this.si=e),C.resolve()}hr(t){this.ii.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this._i=new xe(e),this.highestTargetId=e),t.sequenceNumber>this.si&&(this.si=t.sequenceNumber)}addTargetData(t,e){return this.hr(e),this.targetCount+=1,C.resolve()}updateTargetData(t,e){return this.hr(e),C.resolve()}removeTargetData(t,e){return this.ii.delete(e.target),this.oi.zr(e.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.ii.forEach(((u,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.ii.delete(u),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)})),C.waitFor(o).next((()=>s))}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,e){const r=this.ii.get(e)||null;return C.resolve(r)}addMatchingKeys(t,e,r){return this.oi.Kr(e,r),C.resolve()}removeMatchingKeys(t,e,r){this.oi.Gr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach((u=>{o.push(s.markPotentiallyOrphaned(t,u))})),C.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.oi.zr(e),C.resolve()}getMatchingKeysForTargetId(t,e){const r=this.oi.Jr(e);return C.resolve(r)}containsKey(t,e){return C.resolve(this.oi.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(t,e){this.ai={},this.overlays={},this.ui=new Ar(0),this.ci=!1,this.ci=!0,this.li=new Sf,this.referenceDelegate=t(this),this.hi=new Df(this),this.indexManager=new pf,this.remoteDocumentCache=(function(s){return new bf(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new ff(e),this.Ti=new Rf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Cf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.ai[t.toKey()];return r||(r=new Pf(e,this.referenceDelegate),this.ai[t.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(t,e,r){k("MemoryPersistence","Starting transaction:",t);const s=new kf(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((o=>this.referenceDelegate.di(s).next((()=>o)))).toPromise().then((o=>(s.raiseOnCommittedEvent(),o)))}Ei(t,e){return C.or(Object.values(this.ai).map((r=>()=>r.containsKey(t,e))))}}class kf extends id{constructor(t){super(),this.currentSequenceNumber=t}}class ti{constructor(t){this.persistence=t,this.Ai=new Zs,this.Ri=null}static Vi(t){return new ti(t)}get mi(){if(this.Ri)return this.Ri;throw M(60996)}addReference(t,e,r){return this.Ai.addReference(r,e),this.mi.delete(r.toString()),C.resolve()}removeReference(t,e,r){return this.Ai.removeReference(r,e),this.mi.add(r.toString()),C.resolve()}markPotentiallyOrphaned(t,e){return this.mi.add(e.toString()),C.resolve()}removeTarget(t,e){this.Ai.zr(e.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next((s=>{s.forEach((o=>this.mi.add(o.toString())))})).next((()=>r.removeTargetData(t,e)))}Ii(){this.Ri=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.mi,(r=>{const s=O.fromPath(r);return this.fi(t,s).next((o=>{o||e.removeEntry(s,L.min())}))})).next((()=>(this.Ri=null,e.apply(t))))}updateLimboDocument(t,e){return this.fi(t,e).next((r=>{r?this.mi.delete(e.toString()):this.mi.add(e.toString())}))}Pi(t){return 0}fi(t,e){return C.or([()=>C.resolve(this.Ai.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class Er{constructor(t,e){this.persistence=t,this.gi=new _e((r=>ud(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=Tf(this,e)}static Vi(t,e){return new Er(t,e)}Ii(){}di(t){return C.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}mr(t){const e=this.yr(t);return this.persistence.getTargetCache().getTargetCount(t).next((r=>e.next((s=>r+s))))}yr(t){let e=0;return this.gr(t,(r=>{e++})).next((()=>e))}gr(t,e){return C.forEach(this.gi,((r,s)=>this.Sr(t,r,s).next((o=>o?C.resolve():e(s)))))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ri(t,(u=>this.Sr(t,u,e).next((c=>{c||(r++,o.removeEntry(u,L.min()))})))).next((()=>o.apply(t))).next((()=>r))}markPotentiallyOrphaned(t,e){return this.gi.set(e,t.currentSequenceNumber),C.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.gi.set(r,t.currentSequenceNumber),C.resolve()}removeReference(t,e,r){return this.gi.set(r,t.currentSequenceNumber),C.resolve()}updateLimboDocument(t,e){return this.gi.set(e,t.currentSequenceNumber),C.resolve()}Pi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=er(t.data.value)),e}Sr(t,e,r){return C.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.gi.get(e);return C.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Is=r,this.ds=s}static Es(t,e){let r=j(),s=j();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new ei(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return Ac()?8:od(wc())>0?6:4})()}initialize(t,e){this.gs=t,this.indexManager=e,this.As=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.ps(t,e).next((u=>{o.result=u})).next((()=>{if(!o.result)return this.ys(t,e,s,r).next((u=>{o.result=u}))})).next((()=>{if(o.result)return;const u=new Nf;return this.ws(t,e,u).next((c=>{if(o.result=c,this.Rs)return this.Ss(t,e,u,c.size)}))})).next((()=>o.result))}Ss(t,e,r,s){return r.documentReadCount<this.Vs?(Re()<=q.DEBUG&&k("QueryEngine","SDK will not create cache indexes for query:",Ce(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),C.resolve()):(Re()<=q.DEBUG&&k("QueryEngine","Query:",Ce(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Re()<=q.DEBUG&&k("QueryEngine","The SDK decides to create cache indexes for query:",Ce(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Vt(e))):C.resolve())}ps(t,e){if(Ko(e))return C.resolve(null);let r=Vt(e);return this.indexManager.getIndexType(t,r).next((s=>s===0?null:(e.limit!==null&&s===1&&(e=Cs(e,null,"F"),r=Vt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next((o=>{const u=j(...o);return this.gs.getDocuments(t,u).next((c=>this.indexManager.getMinOffset(t,r).next((h=>{const f=this.bs(e,c);return this.Ds(e,f,u,h.readTime)?this.ps(t,Cs(e,null,"F")):this.vs(t,f,e,h)}))))})))))}ys(t,e,r,s){return Ko(e)||s.isEqual(L.min())?C.resolve(null):this.gs.getDocuments(t,r).next((o=>{const u=this.bs(e,o);return this.Ds(e,u,r,s)?C.resolve(null):(Re()<=q.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ce(e)),this.vs(t,u,e,ed(s,yn)).next((c=>c)))}))}bs(t,e){let r=new ot(cu(t));return e.forEach(((s,o)=>{br(t,o)&&(r=r.add(o))})),r}Ds(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ws(t,e,r){return Re()<=q.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",Ce(e)),this.gs.getDocumentsMatchingQuery(t,e,te.min(),r)}vs(t,e,r,s){return this.gs.getDocumentsMatchingQuery(t,r,s).next((o=>(e.forEach((u=>{o=o.insert(u.key,u)})),o)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni="LocalStore",Of=3e8;class Mf{constructor(t,e,r,s){this.persistence=t,this.Cs=e,this.serializer=s,this.Fs=new Z(B),this.Ms=new _e((o=>Gs(o)),Ws),this.xs=new Map,this.Os=t.getRemoteDocumentCache(),this.hi=t.getTargetCache(),this.Ti=t.getBundleCache(),this.Ns(r)}Ns(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Af(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Fs)))}}function Lf(n,t,e,r){return new Mf(n,t,e,r)}async function xu(n,t){const e=F(n);return await e.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next((o=>(s=o,e.Ns(t),e.mutationQueue.getAllMutationBatches(r)))).next((o=>{const u=[],c=[];let h=j();for(const f of s){u.push(f.batchId);for(const _ of f.mutations)h=h.add(_.key)}for(const f of o){c.push(f.batchId);for(const _ of f.mutations)h=h.add(_.key)}return e.localDocuments.getDocuments(r,h).next((f=>({Bs:f,removedBatchIds:u,addedBatchIds:c})))}))}))}function Ff(n,t){const e=F(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=t.batch.keys(),o=e.Os.newChangeBuffer({trackRemovals:!0});return(function(c,h,f,_){const w=f.batch,A=w.keys();let P=C.resolve();return A.forEach((V=>{P=P.next((()=>_.getEntry(h,V))).next((x=>{const D=f.docVersions.get(V);W(D!==null,48541),x.version.compareTo(D)<0&&(w.applyToRemoteDocument(x,f),x.isValidDocument()&&(x.setReadTime(f.commitVersion),_.addEntry(x)))}))})),P.next((()=>c.mutationQueue.removeMutationBatch(h,w)))})(e,r,t,o).next((()=>o.apply(r))).next((()=>e.mutationQueue.performConsistencyCheck(r))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let h=j();for(let f=0;f<c.mutationResults.length;++f)c.mutationResults[f].transformResults.length>0&&(h=h.add(c.batch.mutations[f].key));return h})(t)))).next((()=>e.localDocuments.getDocuments(r,s)))}))}function Ou(n){const t=F(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.hi.getLastRemoteSnapshotVersion(e)))}function Bf(n,t){const e=F(n),r=t.snapshotVersion;let s=e.Fs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const u=e.Os.newChangeBuffer({trackRemovals:!0});s=e.Fs;const c=[];t.targetChanges.forEach(((_,w)=>{const A=s.get(w);if(!A)return;c.push(e.hi.removeMatchingKeys(o,_.removedDocuments,w).next((()=>e.hi.addMatchingKeys(o,_.addedDocuments,w))));let P=A.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(w)!==null?P=P.withResumeToken(ft.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):_.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(_.resumeToken,r)),s=s.insert(w,P),(function(x,D,G){return x.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=Of?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0})(A,P,_)&&c.push(e.hi.updateTargetData(o,P))}));let h=qt(),f=j();if(t.documentUpdates.forEach((_=>{t.resolvedLimboDocuments.has(_)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,_))})),c.push(Uf(o,u,t.documentUpdates).next((_=>{h=_.Ls,f=_.ks}))),!r.isEqual(L.min())){const _=e.hi.getLastRemoteSnapshotVersion(o).next((w=>e.hi.setTargetsMetadata(o,o.currentSequenceNumber,r)));c.push(_)}return C.waitFor(c).next((()=>u.apply(o))).next((()=>e.localDocuments.getLocalViewOfDocuments(o,h,f))).next((()=>h))})).then((o=>(e.Fs=s,o)))}function Uf(n,t,e){let r=j(),s=j();return e.forEach((o=>r=r.add(o))),t.getEntries(n,r).next((o=>{let u=qt();return e.forEach(((c,h)=>{const f=o.get(c);h.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(c)),h.isNoDocument()&&h.version.isEqual(L.min())?(t.removeEntry(c,h.readTime),u=u.insert(c,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),u=u.insert(c,h)):k(ni,"Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",h.version)})),{Ls:u,ks:s}}))}function jf(n,t){const e=F(n);return e.persistence.runTransaction("Get next mutation batch","readonly",(r=>(t===void 0&&(t=qs),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t))))}function $f(n,t){const e=F(n);return e.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return e.hi.getTargetData(r,t).next((o=>o?(s=o,C.resolve(s)):e.hi.allocateTargetId(r).next((u=>(s=new Kt(t,u,"TargetPurposeListen",r.currentSequenceNumber),e.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=e.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Fs=e.Fs.insert(r.targetId,r),e.Ms.set(t,r.targetId)),r}))}async function Ds(n,t,e){const r=F(n),s=r.Fs.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,(u=>r.persistence.referenceDelegate.removeTarget(u,s)))}catch(u){if(!Be(u))throw u;k(ni,`Failed to update sequence numbers for target ${t}: ${u}`)}r.Fs=r.Fs.remove(t),r.Ms.delete(s.target)}function aa(n,t,e){const r=F(n);let s=L.min(),o=j();return r.persistence.runTransaction("Execute query","readwrite",(u=>(function(h,f,_){const w=F(h),A=w.Ms.get(_);return A!==void 0?C.resolve(w.Fs.get(A)):w.hi.getTargetData(f,_)})(r,u,Vt(t)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(u,c.targetId).next((h=>{o=h}))})).next((()=>r.Cs.getDocumentsMatchingQuery(u,t,e?s:L.min(),e?o:j()))).next((c=>(qf(r,Pd(t),c),{documents:c,qs:o})))))}function qf(n,t,e){let r=n.xs.get(t)||L.min();e.forEach(((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)})),n.xs.set(t,r)}class ua{constructor(){this.activeTargetIds=xd()}Gs(t){this.activeTargetIds=this.activeTargetIds.add(t)}zs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class zf{constructor(){this.Fo=new ua,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.Fo.Gs(t),this.Mo[t]||"not-current"}updateQueryState(t,e,r){this.Mo[t]=e}removeLocalQueryTarget(t){this.Fo.zs(t)}isLocalQueryTarget(t){return this.Fo.activeTargetIds.has(t)}clearQueryState(t){delete this.Mo[t]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(t){return this.Fo.activeTargetIds.has(t)}start(){return this.Fo=new ua,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{xo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la="ConnectivityMonitor";class ca{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(t){this.ko.push(t)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){k(la,"Network connectivity changed: AVAILABLE");for(const t of this.ko)t(0)}Lo(){k(la,"Network connectivity changed: UNAVAILABLE");for(const t of this.ko)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zn=null;function ks(){return Zn===null?Zn=(function(){return 268435456+Math.round(2147483648*Math.random())})():Zn++,"0x"+Zn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds="RestConnection",Gf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Wf{get Qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=e+"://"+t.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===dr?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(t,e,r,s,o){const u=ks(),c=this.Go(t,e.toUriEncodedString());k(ds,`Sending RPC '${t}' ${u}:`,c,r);const h={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(h,s,o);const{host:f}=new URL(c),_=Fs(f);return this.jo(t,c,h,r,_).then((w=>(k(ds,`Received RPC '${t}' ${u}: `,w),w)),(w=>{throw Zt(ds,`RPC '${t}' ${u} failed with error: `,w,"url: ",c,"request:",r),w}))}Jo(t,e,r,s,o,u){return this.Wo(t,e,r,s,o)}zo(t,e,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Le})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((s,o)=>t[o]=s)),r&&r.headers.forEach(((s,o)=>t[o]=s))}Go(t,e){const r=Gf[t];return`${this.$o}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(t){this.Ho=t.Ho,this.Yo=t.Yo}Zo(t){this.Xo=t}e_(t){this.t_=t}n_(t){this.r_=t}onMessage(t){this.i_=t}close(){this.Yo()}send(t){this.Ho(t)}s_(){this.Xo()}o_(){this.t_()}__(t){this.r_(t)}a_(t){this.i_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="WebChannelConnection";class Qf extends Wf{constructor(t){super(t),this.u_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}jo(t,e,r,s,o){const u=ks();return new Promise(((c,h)=>{const f=new Fa;f.setWithCredentials(!0),f.listenOnce(Ba.COMPLETE,(()=>{try{switch(f.getLastErrorCode()){case tr.NO_ERROR:const w=f.getResponseJson();k(yt,`XHR for RPC '${t}' ${u} received:`,JSON.stringify(w)),c(w);break;case tr.TIMEOUT:k(yt,`RPC '${t}' ${u} timed out`),h(new N(S.DEADLINE_EXCEEDED,"Request time out"));break;case tr.HTTP_ERROR:const A=f.getStatus();if(k(yt,`RPC '${t}' ${u} failed with status:`,A,"response text:",f.getResponseText()),A>0){let P=f.getResponseJson();Array.isArray(P)&&(P=P[0]);const V=P==null?void 0:P.error;if(V&&V.status&&V.message){const x=(function(G){const U=G.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(U)>=0?U:S.UNKNOWN})(V.status);h(new N(x,V.message))}else h(new N(S.UNKNOWN,"Server responded with status "+f.getStatus()))}else h(new N(S.UNAVAILABLE,"Connection failed."));break;default:M(9055,{c_:t,streamId:u,l_:f.getLastErrorCode(),h_:f.getLastError()})}}finally{k(yt,`RPC '${t}' ${u} completed.`)}}));const _=JSON.stringify(s);k(yt,`RPC '${t}' ${u} sending request:`,s),f.send(e,"POST",_,r,15)}))}P_(t,e,r){const s=ks(),o=[this.$o,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=$a(),c=ja(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.zo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const _=o.join("");k(yt,`Creating RPC '${t}' stream ${s}: ${_}`,h);const w=u.createWebChannel(_,h);this.T_(w);let A=!1,P=!1;const V=new Kf({Ho:D=>{P?k(yt,`Not sending because RPC '${t}' stream ${s} is closed:`,D):(A||(k(yt,`Opening RPC '${t}' stream ${s} transport.`),w.open(),A=!0),k(yt,`RPC '${t}' stream ${s} sending:`,D),w.send(D))},Yo:()=>w.close()}),x=(D,G,U)=>{D.listen(G,(z=>{try{U(z)}catch(nt){setTimeout((()=>{throw nt}),0)}}))};return x(w,sn.EventType.OPEN,(()=>{P||(k(yt,`RPC '${t}' stream ${s} transport opened.`),V.s_())})),x(w,sn.EventType.CLOSE,(()=>{P||(P=!0,k(yt,`RPC '${t}' stream ${s} transport closed`),V.__(),this.I_(w))})),x(w,sn.EventType.ERROR,(D=>{P||(P=!0,Zt(yt,`RPC '${t}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),V.__(new N(S.UNAVAILABLE,"The operation could not be completed")))})),x(w,sn.EventType.MESSAGE,(D=>{var G;if(!P){const U=D.data[0];W(!!U,16349);const z=U,nt=(z==null?void 0:z.error)||((G=z[0])===null||G===void 0?void 0:G.error);if(nt){k(yt,`RPC '${t}' stream ${s} received error:`,nt);const Mt=nt.status;let lt=(function(g){const y=rt[g];if(y!==void 0)return wu(y)})(Mt),v=nt.message;lt===void 0&&(lt=S.INTERNAL,v="Unknown error status: "+Mt+" with message "+nt.message),P=!0,V.__(new N(lt,v)),w.close()}else k(yt,`RPC '${t}' stream ${s} received:`,U),V.a_(U)}})),x(c,Ua.STAT_EVENT,(D=>{D.stat===vs.PROXY?k(yt,`RPC '${t}' stream ${s} detected buffering proxy`):D.stat===vs.NOPROXY&&k(yt,`RPC '${t}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{V.o_()}),0),V}terminate(){this.u_.forEach((t=>t.close())),this.u_=[]}T_(t){this.u_.push(t)}I_(t){this.u_=this.u_.filter((e=>e===t))}}function fs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(n){return new Yd(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(t,e,r=1e3,s=1.5,o=6e4){this.Fi=t,this.timerId=e,this.d_=r,this.E_=s,this.A_=o,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(t){this.cancel();const e=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,e-r);s>0&&k("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),t()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha="PersistentStream";class Lu{constructor(t,e,r,s,o,u,c,h){this.Fi=t,this.w_=r,this.S_=s,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Mu(t,e)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(t){this.q_(),this.stream.send(t)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,t!==4?this.F_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?($t(e.toString()),$t("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.n_(e)}U_(){}auth(){this.state=1;const t=this.K_(this.b_),e=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===e&&this.W_(r,s)}),(r=>{t((()=>{const s=new N(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(t,e){const r=this.K_(this.b_);this.stream=this.z_(t,e),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(t){return k(ha,`close with error: ${t}`),this.stream=null,this.close(4,t)}K_(t){return e=>{this.Fi.enqueueAndForget((()=>this.b_===t?e():(k(ha,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Xf extends Lu{constructor(t,e,r,s,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,u),this.serializer=o}z_(t,e){return this.connection.P_("Listen",t,e)}j_(t){return this.onNext(t)}onNext(t){this.F_.reset();const e=ef(this.serializer,t),r=(function(o){if(!("targetChange"in o))return L.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?L.min():u.readTime?Dt(u.readTime):L.min()})(t);return this.listener.J_(e,r)}H_(t){const e={};e.database=Vs(this.serializer),e.addTarget=(function(o,u){let c;const h=u.target;if(c=Rs(h)?{documents:sf(o,h)}:{query:of(o,h).Vt},c.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){c.resumeToken=Ru(o,u.resumeToken);const f=Ss(o,u.expectedCount);f!==null&&(c.expectedCount=f)}else if(u.snapshotVersion.compareTo(L.min())>0){c.readTime=yr(o,u.snapshotVersion.toTimestamp());const f=Ss(o,u.expectedCount);f!==null&&(c.expectedCount=f)}return c})(this.serializer,t);const r=uf(this.serializer,t);r&&(e.labels=r),this.k_(e)}Y_(t){const e={};e.database=Vs(this.serializer),e.removeTarget=t,this.k_(e)}}class Jf extends Lu{constructor(t,e,r,s,o,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,u),this.serializer=o}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(t,e){return this.connection.P_("Write",t,e)}j_(t){return W(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,W(!t.writeResults||t.writeResults.length===0,55816),this.listener.ea()}onNext(t){W(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.F_.reset();const e=rf(t.writeResults,t.commitTime),r=Dt(t.commitTime);return this.listener.ta(r,e)}na(){const t={};t.database=Vs(this.serializer),this.k_(t)}X_(t){const e={streamToken:this.lastStreamToken,writes:t.map((r=>nf(this.serializer,r)))};this.k_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{}class Zf extends Yf{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new N(S.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,u])=>this.connection.Wo(t,Ps(e,r),s,o,u))).catch((o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(S.UNKNOWN,o.toString())}))}Jo(t,e,r,s,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,c])=>this.connection.Jo(t,Ps(e,r),s,u,c,o))).catch((u=>{throw u.name==="FirebaseError"?(u.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new N(S.UNKNOWN,u.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class tm{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(t){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ua("Offline")))}set(t){this.ha(),this.sa=0,t==="Online"&&(this._a=!1),this.ua(t)}ua(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ca(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?($t(e),this._a=!1):k("OnlineStateTracker",e)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe="RemoteStore";class em{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=o,this.Ea.xo((u=>{r.enqueueAndForget((async()=>{Ee(this)&&(k(pe,"Restarting streams for network reachability change."),await(async function(h){const f=F(h);f.Ia.add(4),await Pn(f),f.Aa.set("Unknown"),f.Ia.delete(4),await xr(f)})(this))}))})),this.Aa=new tm(r,s)}}async function xr(n){if(Ee(n))for(const t of n.da)await t(!0)}async function Pn(n){for(const t of n.da)await t(!1)}function Fu(n,t){const e=F(n);e.Ta.has(t.targetId)||(e.Ta.set(t.targetId,t),oi(e)?ii(e):Ue(e).x_()&&si(e,t))}function ri(n,t){const e=F(n),r=Ue(e);e.Ta.delete(t),r.x_()&&Bu(e,t),e.Ta.size===0&&(r.x_()?r.B_():Ee(e)&&e.Aa.set("Unknown"))}function si(n,t){if(n.Ra.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Ue(n).H_(t)}function Bu(n,t){n.Ra.$e(t),Ue(n).Y_(t)}function ii(n){n.Ra=new Kd({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>n.Ta.get(t)||null,lt:()=>n.datastore.serializer.databaseId}),Ue(n).start(),n.Aa.aa()}function oi(n){return Ee(n)&&!Ue(n).M_()&&n.Ta.size>0}function Ee(n){return F(n).Ia.size===0}function Uu(n){n.Ra=void 0}async function nm(n){n.Aa.set("Online")}async function rm(n){n.Ta.forEach(((t,e)=>{si(n,t)}))}async function sm(n,t){Uu(n),oi(n)?(n.Aa.la(t),ii(n)):n.Aa.set("Unknown")}async function im(n,t,e){if(n.Aa.set("Online"),t instanceof Au&&t.state===2&&t.cause)try{await(async function(s,o){const u=o.cause;for(const c of o.targetIds)s.Ta.has(c)&&(await s.remoteSyncer.rejectListen(c,u),s.Ta.delete(c),s.Ra.removeTarget(c))})(n,t)}catch(r){k(pe,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await vr(n,r)}else if(t instanceof sr?n.Ra.Ye(t):t instanceof Iu?n.Ra.it(t):n.Ra.et(t),!e.isEqual(L.min()))try{const r=await Ou(n.localStore);e.compareTo(r)>=0&&await(function(o,u){const c=o.Ra.Pt(u);return c.targetChanges.forEach(((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const _=o.Ta.get(f);_&&o.Ta.set(f,_.withResumeToken(h.resumeToken,u))}})),c.targetMismatches.forEach(((h,f)=>{const _=o.Ta.get(h);if(!_)return;o.Ta.set(h,_.withResumeToken(ft.EMPTY_BYTE_STRING,_.snapshotVersion)),Bu(o,h);const w=new Kt(_.target,h,f,_.sequenceNumber);si(o,w)})),o.remoteSyncer.applyRemoteEvent(c)})(n,e)}catch(r){k(pe,"Failed to raise snapshot:",r),await vr(n,r)}}async function vr(n,t,e){if(!Be(t))throw t;n.Ia.add(1),await Pn(n),n.Aa.set("Offline"),e||(e=()=>Ou(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{k(pe,"Retrying IndexedDB access"),await e(),n.Ia.delete(1),await xr(n)}))}function ju(n,t){return t().catch((e=>vr(n,e,t)))}async function Or(n){const t=F(n),e=se(t);let r=t.Pa.length>0?t.Pa[t.Pa.length-1].batchId:qs;for(;om(t);)try{const s=await jf(t.localStore,r);if(s===null){t.Pa.length===0&&e.B_();break}r=s.batchId,am(t,s)}catch(s){await vr(t,s)}$u(t)&&qu(t)}function om(n){return Ee(n)&&n.Pa.length<10}function am(n,t){n.Pa.push(t);const e=se(n);e.x_()&&e.Z_&&e.X_(t.mutations)}function $u(n){return Ee(n)&&!se(n).M_()&&n.Pa.length>0}function qu(n){se(n).start()}async function um(n){se(n).na()}async function lm(n){const t=se(n);for(const e of n.Pa)t.X_(e.mutations)}async function cm(n,t,e){const r=n.Pa.shift(),s=Xs.from(r,t,e);await ju(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Or(n)}async function hm(n,t){t&&se(n).Z_&&await(async function(r,s){if((function(u){return Gd(u)&&u!==S.ABORTED})(s.code)){const o=r.Pa.shift();se(r).N_(),await ju(r,(()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s))),await Or(r)}})(n,t),$u(n)&&qu(n)}async function da(n,t){const e=F(n);e.asyncQueue.verifyOperationInProgress(),k(pe,"RemoteStore received new credentials");const r=Ee(e);e.Ia.add(3),await Pn(e),r&&e.Aa.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ia.delete(3),await xr(e)}async function dm(n,t){const e=F(n);t?(e.Ia.delete(2),await xr(e)):t||(e.Ia.add(2),await Pn(e),e.Aa.set("Unknown"))}function Ue(n){return n.Va||(n.Va=(function(e,r,s){const o=F(e);return o.ia(),new Xf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(n.datastore,n.asyncQueue,{Zo:nm.bind(null,n),e_:rm.bind(null,n),n_:sm.bind(null,n),J_:im.bind(null,n)}),n.da.push((async t=>{t?(n.Va.N_(),oi(n)?ii(n):n.Aa.set("Unknown")):(await n.Va.stop(),Uu(n))}))),n.Va}function se(n){return n.ma||(n.ma=(function(e,r,s){const o=F(e);return o.ia(),new Jf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:um.bind(null,n),n_:hm.bind(null,n),ea:lm.bind(null,n),ta:cm.bind(null,n)}),n.da.push((async t=>{t?(n.ma.N_(),await Or(n)):(await n.ma.stop(),n.Pa.length>0&&(k(pe,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Yt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const u=Date.now()+r,c=new ai(t,e,u,s,o);return c.start(r),c}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ui(n,t){if($t("AsyncQueue",`${t}: ${n}`),Be(n))return new N(S.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{static emptySet(t){return new Ve(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||O.comparator(e.key,r.key):(e,r)=>O.comparator(e.key,r.key),this.keyedMap=on(),this.sortedSet=new Z(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,r)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ve)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Ve;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(){this.fa=new Z(O.comparator)}track(t){const e=t.doc.key,r=this.fa.get(e);r?t.type!==0&&r.type===3?this.fa=this.fa.insert(e,t):t.type===3&&r.type!==1?this.fa=this.fa.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.fa=this.fa.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.fa=this.fa.remove(e):t.type===1&&r.type===2?this.fa=this.fa.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):M(63341,{At:t,ga:r}):this.fa=this.fa.insert(e,t)}pa(){const t=[];return this.fa.inorderTraversal(((e,r)=>{t.push(r)})),t}}class Oe{constructor(t,e,r,s,o,u,c,h,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,s,o){const u=[];return e.forEach((c=>{u.push({type:0,doc:c})})),new Oe(t,e,Ve.emptySet(e),u,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Pr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((t=>t.ba()))}}class mm{constructor(){this.queries=ma(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(e,r){const s=F(e),o=s.queries;s.queries=ma(),o.forEach(((u,c)=>{for(const h of c.wa)h.onError(r)}))})(this,new N(S.ABORTED,"Firestore shutting down"))}}function ma(){return new _e((n=>lu(n)),Pr)}async function pm(n,t){const e=F(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.Sa()&&t.ba()&&(r=2):(o=new fm,r=t.ba()?0:1);try{switch(r){case 0:o.ya=await e.onListen(s,!0);break;case 1:o.ya=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(u){const c=ui(u,`Initialization of query '${Ce(t.query)}' failed`);return void t.onError(c)}e.queries.set(s,o),o.wa.push(t),t.va(e.onlineState),o.ya&&t.Ca(o.ya)&&li(e)}async function gm(n,t){const e=F(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const u=o.wa.indexOf(t);u>=0&&(o.wa.splice(u,1),o.wa.length===0?s=t.ba()?0:1:!o.Sa()&&t.ba()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function _m(n,t){const e=F(n);let r=!1;for(const s of t){const o=s.query,u=e.queries.get(o);if(u){for(const c of u.wa)c.Ca(s)&&(r=!0);u.ya=s}}r&&li(e)}function ym(n,t,e){const r=F(n),s=r.queries.get(t);if(s)for(const o of s.wa)o.onError(e);r.queries.delete(t)}function li(n){n.Da.forEach((t=>{t.next()}))}var Ns,pa;(pa=Ns||(Ns={})).Fa="default",pa.Cache="cache";class Em{constructor(t,e,r){this.query=t,this.Ma=e,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Oe(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.xa?this.Na(t)&&(this.Ma.next(t),e=!0):this.Ba(t,this.onlineState)&&(this.La(t),e=!0),this.Oa=t,e}onError(t){this.Ma.error(t)}va(t){this.onlineState=t;let e=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,t)&&(this.La(this.Oa),e=!0),e}Ba(t,e){if(!t.fromCache||!this.ba())return!0;const r=e!=="Offline";return(!this.options.ka||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Na(t){if(t.docChanges.length>0)return!0;const e=this.Oa&&this.Oa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}La(t){t=Oe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.xa=!0,this.Ma.next(t)}ba(){return this.options.source!==Ns.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(t){this.key=t}}class Hu{constructor(t){this.key=t}}class vm{constructor(t,e){this.query=t,this.Ha=e,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=j(),this.mutatedKeys=j(),this.Xa=cu(t),this.eu=new Ve(this.Xa)}get tu(){return this.Ha}nu(t,e){const r=e?e.ru:new fa,s=e?e.eu:this.eu;let o=e?e.mutatedKeys:this.mutatedKeys,u=s,c=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((_,w)=>{const A=s.get(_),P=br(this.query,w)?w:null,V=!!A&&this.mutatedKeys.has(A.key),x=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let D=!1;A&&P?A.data.isEqual(P.data)?V!==x&&(r.track({type:3,doc:P}),D=!0):this.iu(A,P)||(r.track({type:2,doc:P}),D=!0,(h&&this.Xa(P,h)>0||f&&this.Xa(P,f)<0)&&(c=!0)):!A&&P?(r.track({type:0,doc:P}),D=!0):A&&!P&&(r.track({type:1,doc:A}),D=!0,(h||f)&&(c=!0)),D&&(P?(u=u.add(P),o=x?o.add(_):o.delete(_)):(u=u.delete(_),o=o.delete(_)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const _=this.query.limitType==="F"?u.last():u.first();u=u.delete(_.key),o=o.delete(_.key),r.track({type:1,doc:_})}return{eu:u,ru:r,Ds:c,mutatedKeys:o}}iu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.eu;this.eu=t.eu,this.mutatedKeys=t.mutatedKeys;const u=t.ru.pa();u.sort(((_,w)=>(function(P,V){const x=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M(20277,{At:D})}};return x(P)-x(V)})(_.type,w.type)||this.Xa(_.doc,w.doc))),this.su(r),s=s!=null&&s;const c=e&&!s?this.ou():[],h=this.Za.size===0&&this.current&&!s?1:0,f=h!==this.Ya;return this.Ya=h,u.length!==0||f?{snapshot:new Oe(this.query,t.eu,o,u,t.mutatedKeys,h===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new fa,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(t){return!this.Ha.has(t)&&!!this.eu.has(t)&&!this.eu.get(t).hasLocalMutations}su(t){t&&(t.addedDocuments.forEach((e=>this.Ha=this.Ha.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Ha=this.Ha.delete(e))),this.current=t.current)}ou(){if(!this.current)return[];const t=this.Za;this.Za=j(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const e=[];return t.forEach((r=>{this.Za.has(r)||e.push(new Hu(r))})),this.Za.forEach((r=>{t.has(r)||e.push(new zu(r))})),e}uu(t){this.Ha=t.qs,this.Za=j();const e=this.nu(t.documents);return this.applyChanges(e,!0)}cu(){return Oe.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const ci="SyncEngine";class Tm{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class wm{constructor(t){this.key=t,this.lu=!1}}class Im{constructor(t,e,r,s,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.hu={},this.Pu=new _e((c=>lu(c)),Pr),this.Tu=new Map,this.Iu=new Set,this.du=new Z(O.comparator),this.Eu=new Map,this.Au=new Zs,this.Ru={},this.Vu=new Map,this.mu=xe.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function Am(n,t,e=!0){const r=Ju(n);let s;const o=r.Pu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.cu()):s=await Gu(r,t,e,!0),s}async function Rm(n,t){const e=Ju(n);await Gu(e,t,!0,!1)}async function Gu(n,t,e,r){const s=await $f(n.localStore,Vt(t)),o=s.targetId,u=n.sharedClientState.addLocalQueryTarget(o,e);let c;return r&&(c=await Cm(n,t,o,u==="current",s.resumeToken)),n.isPrimaryClient&&e&&Fu(n.remoteStore,s),c}async function Cm(n,t,e,r,s){n.gu=(w,A,P)=>(async function(x,D,G,U){let z=D.view.nu(G);z.Ds&&(z=await aa(x.localStore,D.query,!1).then((({documents:v})=>D.view.nu(v,z))));const nt=U&&U.targetChanges.get(D.targetId),Mt=U&&U.targetMismatches.get(D.targetId)!=null,lt=D.view.applyChanges(z,x.isPrimaryClient,nt,Mt);return _a(x,D.targetId,lt._u),lt.snapshot})(n,w,A,P);const o=await aa(n.localStore,t,!0),u=new vm(t,o.qs),c=u.nu(o.documents),h=Sn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),f=u.applyChanges(c,n.isPrimaryClient,h);_a(n,e,f._u);const _=new Tm(t,e,u);return n.Pu.set(t,_),n.Tu.has(e)?n.Tu.get(e).push(t):n.Tu.set(e,[t]),f.snapshot}async function Sm(n,t,e){const r=F(n),s=r.Pu.get(t),o=r.Tu.get(s.targetId);if(o.length>1)return r.Tu.set(s.targetId,o.filter((u=>!Pr(u,t)))),void r.Pu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ds(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),e&&ri(r.remoteStore,s.targetId),xs(r,s.targetId)})).catch(Fe)):(xs(r,s.targetId),await Ds(r.localStore,s.targetId,!0))}async function Pm(n,t){const e=F(n),r=e.Pu.get(t),s=e.Tu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),ri(e.remoteStore,r.targetId))}async function bm(n,t,e){const r=Mm(n);try{const s=await(function(u,c){const h=F(u),f=J.now(),_=c.reduce(((P,V)=>P.add(V.key)),j());let w,A;return h.persistence.runTransaction("Locally write mutations","readwrite",(P=>{let V=qt(),x=j();return h.Os.getEntries(P,_).next((D=>{V=D,V.forEach(((G,U)=>{U.isValidDocument()||(x=x.add(G))}))})).next((()=>h.localDocuments.getOverlayedDocuments(P,V))).next((D=>{w=D;const G=[];for(const U of c){const z=jd(U,w.get(U.key).overlayedDocument);z!=null&&G.push(new ye(U.key,z,nu(z.value.mapValue),Ut.exists(!0)))}return h.mutationQueue.addMutationBatch(P,f,G,c)})).next((D=>{A=D;const G=D.applyToLocalDocumentSet(w,x);return h.documentOverlayCache.saveOverlays(P,D.batchId,G)}))})).then((()=>({batchId:A.batchId,changes:du(w)})))})(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),(function(u,c,h){let f=u.Ru[u.currentUser.toKey()];f||(f=new Z(B)),f=f.insert(c,h),u.Ru[u.currentUser.toKey()]=f})(r,s.batchId,e),await bn(r,s.changes),await Or(r.remoteStore)}catch(s){const o=ui(s,"Failed to persist write");e.reject(o)}}async function Wu(n,t){const e=F(n);try{const r=await Bf(e.localStore,t);t.targetChanges.forEach(((s,o)=>{const u=e.Eu.get(o);u&&(W(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?u.lu=!0:s.modifiedDocuments.size>0?W(u.lu,14607):s.removedDocuments.size>0&&(W(u.lu,42227),u.lu=!1))})),await bn(e,r,t)}catch(r){await Fe(r)}}function ga(n,t,e){const r=F(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Pu.forEach(((o,u)=>{const c=u.view.va(t);c.snapshot&&s.push(c.snapshot)})),(function(u,c){const h=F(u);h.onlineState=c;let f=!1;h.queries.forEach(((_,w)=>{for(const A of w.wa)A.va(c)&&(f=!0)})),f&&li(h)})(r.eventManager,t),s.length&&r.hu.J_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Vm(n,t,e){const r=F(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Eu.get(t),o=s&&s.key;if(o){let u=new Z(O.comparator);u=u.insert(o,vt.newNoDocument(o,L.min()));const c=j().add(o),h=new kr(L.min(),new Map,new Z(B),u,c);await Wu(r,h),r.du=r.du.remove(o),r.Eu.delete(t),hi(r)}else await Ds(r.localStore,t,!1).then((()=>xs(r,t,e))).catch(Fe)}async function Dm(n,t){const e=F(n),r=t.batch.batchId;try{const s=await Ff(e.localStore,t);Qu(e,r,null),Ku(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await bn(e,s)}catch(s){await Fe(s)}}async function km(n,t,e){const r=F(n);try{const s=await(function(u,c){const h=F(u);return h.persistence.runTransaction("Reject batch","readwrite-primary",(f=>{let _;return h.mutationQueue.lookupMutationBatch(f,c).next((w=>(W(w!==null,37113),_=w.keys(),h.mutationQueue.removeMutationBatch(f,w)))).next((()=>h.mutationQueue.performConsistencyCheck(f))).next((()=>h.documentOverlayCache.removeOverlaysForBatchId(f,_,c))).next((()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,_))).next((()=>h.localDocuments.getDocuments(f,_)))}))})(r.localStore,t);Qu(r,t,e),Ku(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await bn(r,s)}catch(s){await Fe(s)}}function Ku(n,t){(n.Vu.get(t)||[]).forEach((e=>{e.resolve()})),n.Vu.delete(t)}function Qu(n,t,e){const r=F(n);let s=r.Ru[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Ru[r.currentUser.toKey()]=s}}function xs(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Tu.get(t))n.Pu.delete(r),e&&n.hu.pu(r,e);n.Tu.delete(t),n.isPrimaryClient&&n.Au.zr(t).forEach((r=>{n.Au.containsKey(r)||Xu(n,r)}))}function Xu(n,t){n.Iu.delete(t.path.canonicalString());const e=n.du.get(t);e!==null&&(ri(n.remoteStore,e),n.du=n.du.remove(t),n.Eu.delete(e),hi(n))}function _a(n,t,e){for(const r of e)r instanceof zu?(n.Au.addReference(r.key,t),Nm(n,r)):r instanceof Hu?(k(ci,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,t),n.Au.containsKey(r.key)||Xu(n,r.key)):M(19791,{yu:r})}function Nm(n,t){const e=t.key,r=e.path.canonicalString();n.du.get(e)||n.Iu.has(r)||(k(ci,"New document in limbo: "+e),n.Iu.add(r),hi(n))}function hi(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const t=n.Iu.values().next().value;n.Iu.delete(t);const e=new O(Y.fromString(t)),r=n.mu.next();n.Eu.set(r,new wm(e)),n.du=n.du.insert(e,r),Fu(n.remoteStore,new Kt(Vt(Ks(e.path)),r,"TargetPurposeLimboResolution",Ar.ue))}}async function bn(n,t,e){const r=F(n),s=[],o=[],u=[];r.Pu.isEmpty()||(r.Pu.forEach(((c,h)=>{u.push(r.gu(h,t,e).then((f=>{var _;if((f||e)&&r.isPrimaryClient){const w=f?!f.fromCache:(_=e==null?void 0:e.targetChanges.get(h.targetId))===null||_===void 0?void 0:_.current;r.sharedClientState.updateQueryState(h.targetId,w?"current":"not-current")}if(f){s.push(f);const w=ei.Es(h.targetId,f);o.push(w)}})))})),await Promise.all(u),r.hu.J_(s),await(async function(h,f){const _=F(h);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",(w=>C.forEach(f,(A=>C.forEach(A.Is,(P=>_.persistence.referenceDelegate.addReference(w,A.targetId,P))).next((()=>C.forEach(A.ds,(P=>_.persistence.referenceDelegate.removeReference(w,A.targetId,P)))))))))}catch(w){if(!Be(w))throw w;k(ni,"Failed to update sequence numbers: "+w)}for(const w of f){const A=w.targetId;if(!w.fromCache){const P=_.Fs.get(A),V=P.snapshotVersion,x=P.withLastLimboFreeSnapshotVersion(V);_.Fs=_.Fs.insert(A,x)}}})(r.localStore,o))}async function xm(n,t){const e=F(n);if(!e.currentUser.isEqual(t)){k(ci,"User change. New user:",t.toKey());const r=await xu(e.localStore,t);e.currentUser=t,(function(o,u){o.Vu.forEach((c=>{c.forEach((h=>{h.reject(new N(S.CANCELLED,u))}))})),o.Vu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await bn(e,r.Bs)}}function Om(n,t){const e=F(n),r=e.Eu.get(t);if(r&&r.lu)return j().add(r.key);{let s=j();const o=e.Tu.get(t);if(!o)return s;for(const u of o){const c=e.Pu.get(u);s=s.unionWith(c.view.tu)}return s}}function Ju(n){const t=F(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Wu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Om.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Vm.bind(null,t),t.hu.J_=_m.bind(null,t.eventManager),t.hu.pu=ym.bind(null,t.eventManager),t}function Mm(n){const t=F(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Dm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=km.bind(null,t),t}class Tr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Nr(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Du(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Cu(t,this.localStore),this.indexBackfillerScheduler=this.Fu(t,this.localStore)}Cu(t,e){return null}Fu(t,e){return null}vu(t){return Lf(this.persistence,new xf,t.initialUser,this.serializer)}Du(t){return new Nu(ti.Vi,this.serializer)}bu(t){return new zf}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Tr.provider={build:()=>new Tr};class Lm extends Tr{constructor(t){super(),this.cacheSizeBytes=t}Cu(t,e){W(this.persistence.referenceDelegate instanceof Er,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Ef(r,t.asyncQueue,e)}Du(t){const e=this.cacheSizeBytes!==void 0?It.withCacheSize(this.cacheSizeBytes):It.DEFAULT;return new Nu((r=>Er.Vi(r,e)),this.serializer)}}class Os{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ga(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=xm.bind(null,this.syncEngine),await dm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new mm})()}createDatastore(t){const e=Nr(t.databaseInfo.databaseId),r=(function(o){return new Qf(o)})(t.databaseInfo);return(function(o,u,c,h){return new Zf(o,u,c,h)})(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return(function(r,s,o,u,c){return new em(r,s,o,u,c)})(this.localStore,this.datastore,t.asyncQueue,(e=>ga(this.syncEngine,e,0)),(function(){return ca.C()?new ca:new Hf})())}createSyncEngine(t,e){return(function(s,o,u,c,h,f,_){const w=new Im(s,o,u,c,h,f);return _&&(w.fu=!0),w})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await(async function(s){const o=F(s);k(pe,"RemoteStore shutting down."),o.Ia.add(5),await Pn(o),o.Ea.shutdown(),o.Aa.set("Unknown")})(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Os.provider={build:()=>new Os};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.xu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.xu(this.observer.error,t):$t("Uncaught Error in snapshot listener:",t.toString()))}Ou(){this.muted=!0}xu(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie="FirestoreClient";class Bm{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=Et.UNAUTHENTICATED,this.clientId=js.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,(async u=>{k(ie,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(r,(u=>(k(ie,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Yt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=ui(e,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function ms(n,t){n.asyncQueue.verifyOperationInProgress(),k(ie,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await xu(t.localStore,s),r=s)})),t.persistence.setDatabaseDeletedListener((()=>{Zt("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{k("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Zt("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=t}async function ya(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Um(n);k(ie,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener((r=>da(t.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>da(t.remoteStore,s))),n._onlineComponents=t}async function Um(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){k(ie,"Using user provided OfflineComponentProvider");try{await ms(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(s){return s.name==="FirebaseError"?s.code===S.FAILED_PRECONDITION||s.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(e))throw e;Zt("Error using user provided cache. Falling back to memory cache: "+e),await ms(n,new Tr)}}else k(ie,"Using default OfflineComponentProvider"),await ms(n,new Lm(void 0));return n._offlineComponents}async function Yu(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(k(ie,"Using user provided OnlineComponentProvider"),await ya(n,n._uninitializedComponentsProvider._online)):(k(ie,"Using default OnlineComponentProvider"),await ya(n,new Os))),n._onlineComponents}function jm(n){return Yu(n).then((t=>t.syncEngine))}async function $m(n){const t=await Yu(n),e=t.eventManager;return e.onListen=Am.bind(null,t.syncEngine),e.onUnlisten=Sm.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Rm.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Pm.bind(null,t.syncEngine),e}function qm(n,t,e={}){const r=new Yt;return n.asyncQueue.enqueueAndForget((async()=>(function(o,u,c,h,f){const _=new Fm({next:A=>{_.Ou(),u.enqueueAndForget((()=>gm(o,w)));const P=A.docs.has(c);!P&&A.fromCache?f.reject(new N(S.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&A.fromCache&&h&&h.source==="server"?f.reject(new N(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(A)},error:A=>f.reject(A)}),w=new Em(Ks(c.path),_,{includeMetadataChanges:!0,ka:!0});return pm(o,w)})(await $m(n),n.asyncQueue,t,e,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl="firestore.googleapis.com",va=!0;class Ta{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new N(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=tl,this.ssl=va}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:va;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=ku;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<_f)throw new N(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}td("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Zu((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new N(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class di{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ta({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new N(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ta(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new zh;switch(r.type){case"firstParty":return new Kh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const r=Ea.get(e);r&&(k("ComponentProvider","Removing Datastore"),Ea.delete(e),r.terminate())})(this),Promise.resolve()}}function zm(n,t,e,r={}){var s;n=_n(n,di);const o=Fs(t),u=n._getSettings(),c=Object.assign(Object.assign({},u),{emulatorOptions:n._getEmulatorOptions()}),h=`${t}:${e}`;o&&(_c(`https://${h}`),Tc("Firestore",!0)),u.host!==tl&&u.host!==h&&Zt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f=Object.assign(Object.assign({},u),{host:h,ssl:o,emulatorOptions:r});if(!ar(f,c)&&(n._setSettings(f),r.mockUserToken)){let _,w;if(typeof r.mockUserToken=="string")_=r.mockUserToken,w=Et.MOCK_USER;else{_=yc(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const A=r.mockUserToken.sub||r.mockUserToken.user_id;if(!A)throw new N(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");w=new Et(A)}n._authCredentials=new Hh(new za(_,w))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new fi(this.firestore,t,this._query)}}class ut{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new An(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ut(this.firestore,t,this._key)}toJSON(){return{type:ut._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(Rn(e,ut._jsonSchema))return new ut(t,r||null,new O(Y.fromString(e.referencePath)))}}ut._jsonSchemaVersion="firestore/documentReference/1.0",ut._jsonSchema={type:st("string",ut._jsonSchemaVersion),referencePath:st("string")};class An extends fi{constructor(t,e,r){super(t,e,Ks(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ut(this.firestore,null,new O(t))}withConverter(t){return new An(this.firestore,t,this._path)}}function Hm(n,t,...e){if(n=ur(n),arguments.length===1&&(t=js.newId()),Zh("doc","path",t),n instanceof di){const r=Y.fromString(t,...e);return Oo(r),new ut(n,null,new O(r))}{if(!(n instanceof ut||n instanceof An))throw new N(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(t,...e));return Oo(r),new ut(n.firestore,n instanceof An?n.converter:null,new O(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa="AsyncQueue";class Ia{constructor(t=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Mu(this,"async_queue_retry"),this.oc=()=>{const r=fs();r&&k(wa,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=t;const e=fs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ac(),this.uc(t)}enterRestrictedMode(t){if(!this.Xu){this.Xu=!0,this.rc=t||!1;const e=fs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.oc)}}enqueue(t){if(this.ac(),this.Xu)return new Promise((()=>{}));const e=new Yt;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Zu.push(t),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(t){if(!Be(t))throw t;k(wa,"Operation failed with retryable error: "+t)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(t){const e=this._c.then((()=>(this.nc=!0,t().catch((r=>{throw this.tc=r,this.nc=!1,$t("INTERNAL UNHANDLED ERROR: ",Aa(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=e,e}enqueueAfterDelay(t,e,r){this.ac(),this.sc.indexOf(t)>-1&&(e=0);const s=ai.createAndSchedule(this,t,e,r,(o=>this.lc(o)));return this.ec.push(s),s}ac(){this.tc&&M(47125,{hc:Aa(this.tc)})}verifyOperationInProgress(){}async Pc(){let t;do t=this._c,await t;while(t!==this._c)}Tc(t){for(const e of this.ec)if(e.timerId===t)return!0;return!1}Ic(t){return this.Pc().then((()=>{this.ec.sort(((e,r)=>e.targetTimeMs-r.targetTimeMs));for(const e of this.ec)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Pc()}))}dc(t){this.sc.push(t)}lc(t){const e=this.ec.indexOf(t);this.ec.splice(e,1)}}function Aa(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class mi extends di{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Ia,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ia(t),this._firestoreClient=void 0,await t}}}function Gm(n,t){const e=typeof n=="object"?n:Dh(),r=typeof n=="string"?n:dr,s=Ch(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=pc("firestore");o&&zm(s,...o)}return s}function el(n){if(n._terminated)throw new N(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Wm(n),n._firestoreClient}function Wm(n){var t,e,r;const s=n._freezeSettings(),o=(function(c,h,f,_){return new hd(c,h,f,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,Zu(_.experimentalLongPollingOptions),_.useFetchStreams,_.isUsingEmulator)})(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Bm(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&(function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ct(ft.fromBase64String(t))}catch(e){throw new N(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ct(ft.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Ct._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Rn(t,Ct._jsonSchema))return Ct.fromBase64String(t.bytes)}}Ct._jsonSchemaVersion="firestore/bytes/1.0",Ct._jsonSchema={type:st("string",Ct._jsonSchemaVersion),bytes:st("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return B(this._lat,t._lat)||B(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:kt._jsonSchemaVersion}}static fromJSON(t){if(Rn(t,kt._jsonSchema))return new kt(t.latitude,t.longitude)}}kt._jsonSchemaVersion="firestore/geoPoint/1.0",kt._jsonSchema={type:st("string",kt._jsonSchemaVersion),latitude:st("number"),longitude:st("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Nt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Rn(t,Nt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new Nt(t.vectorValues);throw new N(S.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Nt._jsonSchemaVersion="firestore/vectorValue/1.0",Nt._jsonSchema={type:st("string",Nt._jsonSchemaVersion),vectorValues:st("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km=/^__.*__$/;class Qm{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new ye(t,this.data,this.fieldMask,e,this.fieldTransforms):new Cn(t,this.data,e,this.fieldTransforms)}}function rl(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M(40011,{Ec:n})}}class gi{constructor(t,e,r,s,o,u){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Ac(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(t){return new gi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Rc({path:r,mc:!1});return s.fc(t),s}gc(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(t){return this.Rc({path:void 0,mc:!0})}wc(t){return wr(t,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.fc(this.path.get(t))}fc(t){if(t.length===0)throw this.wc("Document fields must not be empty");if(rl(this.Ec)&&Km.test(t))throw this.wc('Document fields cannot begin and end with "__"')}}class Xm{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Nr(t)}Dc(t,e,r,s=!1){return new gi({Ec:t,methodName:e,bc:r,path:dt.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Jm(n){const t=n._freezeSettings(),e=Nr(n._databaseId);return new Xm(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Ym(n,t,e,r,s,o={}){const u=n.Dc(o.merge||o.mergeFields?2:0,t,e,s);al("Data must be an object, but it was:",u,r);const c=il(r,u);let h,f;if(o.merge)h=new Pt(u.fieldMask),f=u.fieldTransforms;else if(o.mergeFields){const _=[];for(const w of o.mergeFields){const A=Zm(t,w,e);if(!u.contains(A))throw new N(S.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);ep(_,A)||_.push(A)}h=new Pt(_),f=u.fieldTransforms.filter((w=>h.covers(w.field)))}else h=null,f=u.fieldTransforms;return new Qm(new Rt(c),h,f)}function sl(n,t){if(ol(n=ur(n)))return al("Unsupported field value:",t,n),il(n,t);if(n instanceof nl)return(function(r,s){if(!rl(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)})(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.mc&&t.Ec!==4)throw t.wc("Nested arrays are not supported");return(function(r,s){const o=[];let u=0;for(const c of r){let h=sl(c,s.yc(u));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),u++}return{arrayValue:{values:o}}})(n,t)}return(function(r,s){if((r=ur(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Od(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=J.fromDate(r);return{timestampValue:yr(s.serializer,o)}}if(r instanceof J){const o=new J(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:yr(s.serializer,o)}}if(r instanceof kt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ct)return{bytesValue:Ru(s.serializer,r._byteString)};if(r instanceof ut){const o=s.databaseId,u=r.firestore._databaseId;if(!u.isEqual(o))throw s.wc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ys(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Nt)return(function(u,c){return{mapValue:{fields:{[tu]:{stringValue:eu},[fr]:{arrayValue:{values:u.toArray().map((f=>{if(typeof f!="number")throw c.wc("VectorValues must only contain numeric values.");return Qs(c.serializer,f)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${$s(r)}`)})(n,t)}function il(n,t){const e={};return Ka(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ge(n,((r,s)=>{const o=sl(s,t.Vc(r));o!=null&&(e[r]=o)})),{mapValue:{fields:e}}}function ol(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof J||n instanceof kt||n instanceof Ct||n instanceof ut||n instanceof nl||n instanceof Nt)}function al(n,t,e){if(!ol(e)||!Ga(e)){const r=$s(e);throw r==="an object"?t.wc(n+" a custom object"):t.wc(n+" "+r)}}function Zm(n,t,e){if((t=ur(t))instanceof pi)return t._internalPath;if(typeof t=="string")return ul(n,t);throw wr("Field path arguments must be of type string or ",n,!1,void 0,e)}const tp=new RegExp("[~\\*/\\[\\]]");function ul(n,t,e){if(t.search(tp)>=0)throw wr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new pi(...t.split("."))._internalPath}catch{throw wr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function wr(n,t,e,r,s){const o=r&&!r.isEmpty(),u=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||u)&&(h+=" (found",o&&(h+=` in field ${r}`),u&&(h+=` in document ${s}`),h+=")"),new N(S.INVALID_ARGUMENT,c+n+h)}function ep(n,t){return n.some((e=>e.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new np(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(cl("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class np extends ll{data(){return super.data()}}function cl(n,t){return typeof t=="string"?ul(n,t):t instanceof pi?t._internalPath:t._delegate._internalPath}class rp{convertValue(t,e="none"){switch(re(t)){case 0:return null;case 1:return t.booleanValue;case 2:return et(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ne(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw M(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return ge(t,((s,o)=>{r[s]=this.convertValue(o,e)})),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)===null||e===void 0?void 0:e[fr].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((u=>et(u.doubleValue)));return new Nt(o)}convertGeoPoint(t){return new kt(et(t.latitude),et(t.longitude))}convertArray(t,e){return(t.values||[]).map((r=>this.convertValue(r,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Cr(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(En(t));default:return null}}convertTimestamp(t){const e=ee(t);return new J(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=Y.fromString(t);W(Du(r),9688,{name:t});const s=new vn(r.get(1),r.get(3)),o=new O(r.popFirst(5));return s.isEqual(e)||$t(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class un{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class fe extends ll{constructor(t,e,r,s,o,u){super(t,e,r,s,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ir(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(cl("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new N(S.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=fe._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}fe._jsonSchemaVersion="firestore/documentSnapshot/1.0",fe._jsonSchema={type:st("string",fe._jsonSchemaVersion),bundleSource:st("string","DocumentSnapshot"),bundleName:st("string"),bundle:st("string")};class ir extends fe{data(t={}){return super.data(t)}}class mn{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new un(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((r=>{t.call(e,new ir(this._firestore,this._userDataWriter,r.key,r,new un(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(s,o){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map((c=>{const h=new ir(s._firestore,s._userDataWriter,c.doc.key,c.doc,new un(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:u++}}))}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>o||c.type!==3)).map((c=>{const h=new ir(s._firestore,s._userDataWriter,c.doc.key,c.doc,new un(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,_=-1;return c.type!==0&&(f=u.indexOf(c.doc.key),u=u.delete(c.doc.key)),c.type!==1&&(u=u.add(c.doc),_=u.indexOf(c.doc.key)),{type:ip(c.type),doc:h,oldIndex:f,newIndex:_}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new N(S.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=mn._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=js.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],s=[];return this.docs.forEach((o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function ip(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(n){n=_n(n,ut);const t=_n(n.firestore,mi);return qm(el(t),n._key).then((e=>cp(t,n,e)))}mn._jsonSchemaVersion="firestore/querySnapshot/1.0",mn._jsonSchema={type:st("string",mn._jsonSchemaVersion),bundleSource:st("string","QuerySnapshot"),bundleName:st("string"),bundle:st("string")};class ap extends rp{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ct(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ut(this.firestore,null,e)}}function up(n,t,e){n=_n(n,ut);const r=_n(n.firestore,mi),s=sp(n.converter,t);return lp(r,[Ym(Jm(r),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,Ut.none())])}function lp(n,t){return(function(r,s){const o=new Yt;return r.asyncQueue.enqueueAndForget((async()=>bm(await jm(r),s,o))),o.promise})(el(n),t)}function cp(n,t,e){const r=e.docs.get(t._key),s=new ap(n);return new fe(n,s,t._key,r,new un(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(s){Le=s})(Vh),cr(new pn("firestore",((r,{instanceIdentifier:s,options:o})=>{const u=r.getProvider("app").getImmediate(),c=new mi(new Gh(r.getProvider("auth-internal")),new Qh(u,r.getProvider("app-check-internal")),(function(f,_){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new N(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vn(f.options.projectId,_)})(u,s),u);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c}),"PUBLIC").setMultipleInstances(!0)),be(Vo,Do,t),be(Vo,Do,"esm2017")})();const hp={apiKey:"AIzaSyA_QmTJYXfI6POt1c10QbhkwLsQBvzPI8o",authDomain:"memories-gift.firebaseapp.com",projectId:"memories-gift",storageBucket:"memories-gift.firebasestorage.app",messagingSenderId:"1098218381443",appId:"1:1098218381443:web:8acba670a644acbeabbbb6"},dp=xa(hp),fp=Gm(dp),hl=Hm(fp,"progress","state"),Ra={progress:0,lastWateredDate:null,lettersUnlocked:0,pendingLetter:!1};async function mp(){const n=await op(hl);return n.exists()?{...Ra,...n.data()}:{...Ra}}async function Mr(n){await up(hl,n)}const Ae=`
  <rect x="36" y="192" width="128" height="15" rx="7.5" fill="#CD853F"/>
  <path d="M 48 207 L 44 252 L 156 252 L 152 207 Z" fill="#C87941"/>
  <path d="M 48 207 L 44 252 L 62 252 L 64 207 Z" fill="#B06828" opacity="0.3"/>
  <path d="M 152 207 L 156 252 L 144 252 L 142 207 Z" fill="#D9924C" opacity="0.25"/>
  <ellipse cx="100" cy="198" rx="55" ry="9.5" fill="#2C1503"/>
  <ellipse cx="86" cy="195" rx="22" ry="5" fill="#3D2007" opacity="0.45"/>
`,pp=[`<svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg">${Ae}</svg>`,`<svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg">
    ${Ae}
    <path d="M 100 196 C 99 183 100 168 100 156" stroke="#4A7A36" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M 100 170 C 90 162 80 152 84 144 C 91 154 97 163 100 170 Z" fill="#7CB96A"/>
    <path d="M 100 164 C 110 156 120 146 116 138 C 109 148 103 157 100 164 Z" fill="#6AAF58"/>
  </svg>`,`<svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg">
    ${Ae}
    <path d="M 100 196 C 97 172 100 148 100 128" stroke="#3D6B2E" stroke-width="3.5" fill="none" stroke-linecap="round"/>
    <path d="M 100 175 C 85 165 70 152 75 140 C 84 153 93 164 100 175 Z" fill="#72BA60"/>
    <path d="M 100 170 C 115 160 130 147 125 135 C 116 148 107 159 100 170 Z" fill="#66B054"/>
    <path d="M 100 148 C 84 136 72 120 78 108 C 87 122 95 135 100 148 Z" fill="#7EC86C"/>
    <path d="M 100 142 C 116 130 128 114 122 102 C 113 116 105 129 100 142 Z" fill="#8CD47A"/>
  </svg>`,`<svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg">
    ${Ae}
    <path d="M 100 196 C 95 162 100 130 100 104" stroke="#2E5C22" stroke-width="4" fill="none" stroke-linecap="round"/>
    <path d="M 100 176 C 82 164 66 148 72 133 C 82 148 92 162 100 176 Z" fill="#5C9E4C"/>
    <path d="M 100 171 C 118 159 134 143 128 128 C 118 143 108 157 100 171 Z" fill="#68AC58"/>
    <path d="M 100 150 C 80 136 64 117 72 102 C 82 118 92 134 100 150 Z" fill="#72BA60"/>
    <path d="M 100 144 C 120 130 136 111 128 96 C 118 112 108 128 100 144 Z" fill="#7EC86C"/>
    <path d="M 100 120 C 82 104 70 84 78 68 C 88 85 96 103 100 120 Z" fill="#8CD47A"/>
    <path d="M 100 114 C 118 98 130 78 122 62 C 112 79 104 97 100 114 Z" fill="#96DC86"/>
  </svg>`,`<svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg">
    ${Ae}
    <path d="M 100 196 C 94 158 100 120 100 84" stroke="#24491A" stroke-width="4.5" fill="none" stroke-linecap="round"/>
    <path d="M 100 176 C 80 162 62 144 70 127 C 81 144 92 160 100 176 Z" fill="#4E8E3E"/>
    <path d="M 100 170 C 120 156 138 138 130 121 C 119 138 108 154 100 170 Z" fill="#5A9C4A"/>
    <path d="M 100 148 C 78 132 60 111 68 94 C 80 112 91 130 100 148 Z" fill="#66AA56"/>
    <path d="M 100 142 C 122 126 140 105 132 88 C 120 106 109 124 100 142 Z" fill="#72B862"/>
    <path d="M 100 118 C 80 100 66 78 76 60 C 87 78 95 99 100 118 Z" fill="#80C46E"/>
    <path d="M 100 111 C 120 93 134 71 124 53 C 113 71 105 92 100 111 Z" fill="#8ED07A"/>
    <!-- Bud -->
    <ellipse cx="100" cy="74" rx="9" ry="14" fill="#EFA0BA"/>
    <ellipse cx="100" cy="67" rx="6" ry="9" fill="#F7BCE8" opacity="0.85"/>
    <path d="M 100 88 Q 89 82 92 68" stroke="#2E5C22" stroke-width="2" fill="none" stroke-linecap="round"/>
    <path d="M 100 88 Q 111 82 108 68" stroke="#2E5C22" stroke-width="2" fill="none" stroke-linecap="round"/>
  </svg>`,`<svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg">
    ${Ae}
    <path d="M 100 196 C 94 158 100 120 100 90" stroke="#24491A" stroke-width="4.5" fill="none" stroke-linecap="round"/>
    <path d="M 100 176 C 80 162 62 144 70 127 C 81 144 92 160 100 176 Z" fill="#4E8E3E"/>
    <path d="M 100 170 C 120 156 138 138 130 121 C 119 138 108 154 100 170 Z" fill="#5A9C4A"/>
    <path d="M 100 148 C 78 132 60 111 68 94 C 80 112 91 130 100 148 Z" fill="#66AA56"/>
    <path d="M 100 142 C 122 126 140 105 132 88 C 120 106 109 124 100 142 Z" fill="#72B862"/>
    <path d="M 100 118 C 80 100 66 78 76 60 C 87 78 95 99 100 118 Z" fill="#80C46E"/>
    <path d="M 100 111 C 120 93 134 71 124 53 C 113 71 105 92 100 111 Z" fill="#8ED07A"/>
    <!-- Petals -->
    <ellipse cx="100" cy="58" rx="11" ry="20" fill="#FBADC6" transform="rotate(0 100 78)"/>
    <ellipse cx="100" cy="58" rx="11" ry="20" fill="#F79ABB" transform="rotate(72 100 78)"/>
    <ellipse cx="100" cy="58" rx="11" ry="20" fill="#FBADC6" transform="rotate(144 100 78)"/>
    <ellipse cx="100" cy="58" rx="11" ry="20" fill="#F79ABB" transform="rotate(216 100 78)"/>
    <ellipse cx="100" cy="58" rx="11" ry="20" fill="#FBADC6" transform="rotate(288 100 78)"/>
    <!-- Center -->
    <circle cx="100" cy="78" r="14" fill="#FFD166"/>
    <circle cx="100" cy="78" r="9" fill="#FFBE3D"/>
    <circle cx="96" cy="75" r="2" fill="#E07B00" opacity="0.7"/>
    <circle cx="104" cy="75" r="2" fill="#E07B00" opacity="0.7"/>
    <circle cx="100" cy="82" r="2" fill="#E07B00" opacity="0.7"/>
    <circle cx="97" cy="80" r="1.5" fill="#E07B00" opacity="0.5"/>
    <circle cx="103" cy="80" r="1.5" fill="#E07B00" opacity="0.5"/>
  </svg>`];function gp(n){return n>=100?5:n>=80?4:n>=60?3:n>=40?2:n>=20?1:0}const dl=[{title:"how this all began",subtitle:"the beginning of us",date:"written with love ♡",content:`Dear love,

[ Sahana will fill this in — this is your first letter, about how it all started. ]

All my love,
Sahana ♡`},{title:"my favorite things about you",subtitle:"a little list",date:"written with love ♡",content:`Dear love,

[ Your second letter is waiting here — keep growing the garden. ]

All my love,
Sahana ♡`},{title:"our best adventure",subtitle:"a memory I keep close",date:"written with love ♡",content:`Dear love,

[ Third letter — you're doing so well with the garden. ]

All my love,
Sahana ♡`},{title:"things i want to do with you",subtitle:"a little wishlist",date:"written with love ♡",content:`Dear love,

[ Fourth letter — almost there. ]

All my love,
Sahana ♡`},{title:"what you mean to me",subtitle:"from the heart",date:"written with love ♡",content:`Dear love,

[ Fifth letter — some things take time to put into words. ]

All my love,
Sahana ♡`}],_p="0fe1adab55eb07dca373ca85726e39b52326cf099c222eabe028b951357d2260",fl="memories_authed",ml=new URLSearchParams(window.location.search).has("dev");let Q=null,Ms=!1,Ca=!1;async function yp(n){const t=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(n));return Array.from(new Uint8Array(t)).map(e=>e.toString(16).padStart(2,"0")).join("")}function pl(){const n=new Date;return`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`}function gl(n){const t=new Date(n+"T00:00:00"),e=new Date(pl()+"T00:00:00");return Math.round((e-t)/864e5)}async function Ep(n){if(!n.lastWateredDate||n.pendingLetter)return n;const t=gl(n.lastWateredDate);if(t<=1)return n;const e=t-1,r=Math.max(0,n.progress-e*20),s={...n,progress:r,lastWateredDate:r===0?null:n.lastWateredDate};return await Mr(s),s}function _l(n){return n.pendingLetter?!1:ml||!n.lastWateredDate?!0:gl(n.lastWateredDate)>=1}function oe(n){document.querySelectorAll(".screen").forEach(t=>t.classList.add("hidden")),document.getElementById(n).classList.remove("hidden")}function yl(n,t=!1){const e=document.getElementById("plant-container"),r=pp[gp(n)];t?(e.style.opacity="0",e.style.transition="opacity 0.3s ease",setTimeout(()=>{e.innerHTML=r,e.style.opacity="1",n>=100&&e.querySelector("svg").classList.add("plant-bloom")},300)):(e.innerHTML=r,e.style.opacity="1")}function El(n){document.getElementById("progress-fill").style.width=`${n}%`,document.getElementById("progress-pct").textContent=`${n}%`}function vl(n){const t=document.getElementById("water-btn"),e=document.getElementById("water-msg");if(n.pendingLetter){t.disabled=!0,t.textContent="in full bloom 🌸",e.textContent="read your new letter before the next cycle ♡",e.classList.remove("hidden");return}if(!_l(n)){t.disabled=!0,t.textContent="come back tomorrow :)",e.textContent="already watered today — see you soon ♡",e.classList.remove("hidden");return}t.disabled=!1,t.textContent="water our plant!",e.classList.add("hidden")}function Tl(n){document.getElementById("letters-badge").classList.toggle("hidden",!n.pendingLetter)}function vp(n){const t=document.getElementById("past-blooms");if(n.lettersUnlocked===0){t.innerHTML='<span class="no-blooms">first bloom on the way</span>';return}t.innerHTML=Array.from({length:n.lettersUnlocked},(e,r)=>`<span class="bloom-icon" style="animation-delay:${r*.07}s">🌸</span>`).join("")}function Ir(n,t=!1){yl(n.progress,t),El(n.progress),vl(n),Tl(n),vp(n)}function Tp(){const n=document.getElementById("garden-area");for(let t=0;t<22;t++){const e=document.createElement("div");e.className="water-drop";const r=1.5+Math.random()*1.5,s=10+Math.random()*12,o=.45+Math.random()*.25;e.style.cssText=`
      left: calc(50% + ${-75+Math.random()*150}px);
      top: 0;
      width: ${r}px;
      height: ${s}px;
      animation-delay: ${Math.random()*.65}s;
      animation-duration: ${o}s;
    `,n.appendChild(e),e.addEventListener("animationend",()=>e.remove())}}function wp(){const n=document.getElementById("garden-area"),t=["#FBADC6","#FFD166","#8ED07A","#FAD4DF","#B8E8A4","#FFC8D8"];for(let e=0;e<26;e++){const r=e/26*Math.PI*2,s=45+Math.random()*65,o=document.createElement("div");o.className="sparkle",o.style.cssText=`
      background: ${t[e%t.length]};
      left: 50%;
      top: 38%;
      --dx: ${Math.cos(r)*s}px;
      --dy: ${Math.sin(r)*s}px;
      animation-delay: ${Math.random()*.25}s;
    `,n.appendChild(o),o.addEventListener("animationend",()=>o.remove())}}async function Ip(){if(!_l(Q))return;document.getElementById("water-btn").disabled=!0,Tp(),await new Promise(e=>setTimeout(e,750));const n=Math.min(100,Q.progress+20),t=n>=100&&!Q.pendingLetter;Q={...Q,progress:n,lastWateredDate:pl(),...t&&{pendingLetter:!0,lettersUnlocked:Q.lettersUnlocked+1}},await Mr(Q),yl(Q.progress,!0),El(Q.progress),Tl(Q),t&&(await new Promise(e=>setTimeout(e,550)),wp()),vl(Q)}function wl(){const n=document.getElementById("letters-list");n.innerHTML="";const t=Q.lettersUnlocked+1;for(let e=0;e<t;e++){const r=dl[e],s=e<Q.lettersUnlocked,o=Q.pendingLetter&&e===Q.lettersUnlocked-1,u=document.createElement("div");u.className=`letter-card${s?"":" locked"}${o?" new":""}`,u.innerHTML=`
      <div class="letter-envelope">${s?"💌":"🔒"}</div>
      <div class="letter-info">
        <div class="letter-card-title">${s&&r?r.title:"???"}</div>
        <div class="letter-card-subtitle">${s&&r?r.subtitle:"keep tending the garden..."}</div>
      </div>
      ${o?'<div class="new-badge">new ♡</div>':""}
    `,s&&u.addEventListener("click",()=>Ap(e,o)),n.appendChild(u)}}function Ap(n,t){const e=dl[n]||{title:`letter ${n+1}`,date:"soon ♡",content:"(coming soon — written with love)"};document.getElementById("letter-date").textContent=e.date,document.getElementById("letter-title").textContent=e.title,document.getElementById("letter-body").textContent=e.content,Ms=t,oe("letter-screen")}async function Rp(){Ms?(Q={...Q,pendingLetter:!1,progress:0,lastWateredDate:null},await Mr(Q),Ms=!1,oe("letters-screen"),wl(),Ir(Q)):oe("letters-screen")}function Cp(){const n=document.getElementById("password-input"),t=document.getElementById("login-btn"),e=document.getElementById("login-error");async function r(){await yp(n.value)===_p?(localStorage.setItem(fl,"true"),e.classList.add("hidden"),await Il()):(e.classList.remove("hidden"),n.value="",n.focus())}t.addEventListener("click",r),n.addEventListener("keydown",s=>{s.key==="Enter"&&r()})}function Sp(){if(!Ca){if(Ca=!0,ml){const n=document.createElement("button");n.textContent="DEV: reset",n.className="dev-reset-btn",n.addEventListener("click",async()=>{Q={progress:0,lastWateredDate:null,lettersUnlocked:0,pendingLetter:!1},await Mr(Q),Ir(Q)}),document.getElementById("garden-screen").appendChild(n)}document.getElementById("water-btn").addEventListener("click",Ip),document.getElementById("letters-btn").addEventListener("click",()=>{wl(),oe("letters-screen")}),document.getElementById("back-btn").addEventListener("click",()=>{oe("garden-screen"),Ir(Q)}),document.getElementById("close-letter-btn").addEventListener("click",Rp)}}async function Il(){oe("loading-screen"),Q=await mp(),Q=await Ep(Q),Sp(),oe("garden-screen"),Ir(Q)}async function Pp(){localStorage.getItem(fl)==="true"?await Il():(Cp(),oe("login-screen"))}Pp();
