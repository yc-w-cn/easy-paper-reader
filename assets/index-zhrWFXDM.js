import{a as G}from"./axios-G2rPRu76.js";import{l as K}from"./PageWrapper-sLkUscXw.js";async function F(){return K.getItem("gemeni-api-key")}async function ue(e){return K.setItem("gemeni-api-key",e)}async function P(e){const n=await F();return e.params.key=n,e}const B=G.create({baseURL:"https://generativelanguage.googleapis.com/v1"});B.interceptors.request.use(P);const Y=G.create({baseURL:"https://generativelanguage.googleapis.com/v1beta"});Y.interceptors.request.use(P);/**
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
 */var T;(function(e){e.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",e.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",e.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",e.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",e.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(T||(T={}));var y;(function(e){e.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",e.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",e.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",e.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",e.BLOCK_NONE="BLOCK_NONE"})(y||(y={}));var N;(function(e){e.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",e.NEGLIGIBLE="NEGLIGIBLE",e.LOW="LOW",e.MEDIUM="MEDIUM",e.HIGH="HIGH"})(N||(N={}));var v;(function(e){e.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",e.SAFETY="SAFETY",e.OTHER="OTHER"})(v||(v={}));var R;(function(e){e.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",e.STOP="STOP",e.MAX_TOKENS="MAX_TOKENS",e.SAFETY="SAFETY",e.RECITATION="RECITATION",e.OTHER="OTHER"})(R||(R={}));var w;(function(e){e.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",e.RETRIEVAL_QUERY="RETRIEVAL_QUERY",e.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",e.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",e.CLASSIFICATION="CLASSIFICATION",e.CLUSTERING="CLUSTERING"})(w||(w={}));/**
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
 */class h extends Error{constructor(n){super(`[GoogleGenerativeAI Error]: ${n}`)}}class M extends h{constructor(n,t){super(n),this.response=t}}/**
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
 */const $="https://generativelanguage.googleapis.com",k="v1",j="0.1.3",q="genai-js";var E;(function(e){e.GENERATE_CONTENT="generateContent",e.STREAM_GENERATE_CONTENT="streamGenerateContent",e.COUNT_TOKENS="countTokens",e.EMBED_CONTENT="embedContent",e.BATCH_EMBED_CONTENTS="batchEmbedContents"})(E||(E={}));class _{constructor(n,t,o,s){this.model=n,this.task=t,this.apiKey=o,this.stream=s}toString(){let n=`${$}/${k}/models/${this.model}:${this.task}`;return this.stream&&(n+="?alt=sse"),n}}function J(){return`${q}/${j}`}async function p(e,n){let t;try{if(t=await fetch(e.toString(),{method:"POST",headers:{"Content-Type":"application/json","x-goog-api-client":J(),"x-goog-api-key":e.apiKey},body:n}),!t.ok){let o="";try{const s=await t.json();o=s.error.message,s.error.details&&(o+=` ${JSON.stringify(s.error.details)}`)}catch{}throw new Error(`[${t.status} ${t.statusText}] ${o}`)}}catch(o){const s=new h(`Error fetching from ${e.toString()}: ${o.message}`);throw s.stack=o.stack,s}return t}/**
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
 */function O(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),H(e.candidates[0]))throw new M(`${S(e)}`,e);return V(e)}else if(e.promptFeedback)throw new M(`Text not available. ${S(e)}`,e);return""},e}function V(e){var n,t,o,s;return!((s=(o=(t=(n=e.candidates)===null||n===void 0?void 0:n[0].content)===null||t===void 0?void 0:t.parts)===null||o===void 0?void 0:o[0])===null||s===void 0)&&s.text?e.candidates[0].content.parts[0].text:""}const W=[R.RECITATION,R.SAFETY];function H(e){return!!e.finishReason&&W.includes(e.finishReason)}function S(e){var n,t,o;let s="";if((!e.candidates||e.candidates.length===0)&&e.promptFeedback)s+="Response was blocked",!((n=e.promptFeedback)===null||n===void 0)&&n.blockReason&&(s+=` due to ${e.promptFeedback.blockReason}`),!((t=e.promptFeedback)===null||t===void 0)&&t.blockReasonMessage&&(s+=`: ${e.promptFeedback.blockReasonMessage}`);else if(!((o=e.candidates)===null||o===void 0)&&o[0]){const i=e.candidates[0];H(i)&&(s+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(s+=`: ${i.finishMessage}`))}return s}function g(e){return this instanceof g?(this.v=e,this):new g(e)}function X(e,n,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=t.apply(e,n||[]),s,i=[];return s={},c("next"),c("throw"),c("return"),s[Symbol.asyncIterator]=function(){return this},s;function c(d){o[d]&&(s[d]=function(f){return new Promise(function(m,x){i.push([d,f,m,x])>1||r(d,f)})})}function r(d,f){try{a(o[d](f))}catch(m){I(i[0][3],m)}}function a(d){d.value instanceof g?Promise.resolve(d.value.v).then(u,A):I(i[0][2],d)}function u(d){r("next",d)}function A(d){r("throw",d)}function I(d,f){d(f),i.shift(),i.length&&r(i[0][0],i[0][1])}}/**
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
 */const L=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function Q(e){const n=e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),t=ee(n),[o,s]=t.tee();return{stream:Z(o),response:z(s)}}async function z(e){const n=[],t=e.getReader();for(;;){const{done:o,value:s}=await t.read();if(o)return O(te(n));n.push(s)}}function Z(e){return X(this,arguments,function*(){const t=e.getReader();for(;;){const{value:o,done:s}=yield g(t.read());if(s)break;yield yield g(O(o))}})}function ee(e){const n=e.getReader();return new ReadableStream({start(o){let s="";return i();function i(){return n.read().then(({value:c,done:r})=>{if(r){if(s.trim()){o.error(new h("Failed to parse stream"));return}o.close();return}s+=c;let a=s.match(L),u;for(;a;){try{u=JSON.parse(a[1])}catch{o.error(new h(`Error parsing JSON response: "${a[1]}"`));return}o.enqueue(u),s=s.substring(a[0].length),a=s.match(L)}return i()})}}})}function te(e){const n=e[e.length-1],t={promptFeedback:n==null?void 0:n.promptFeedback};for(const o of e)if(o.candidates)for(const s of o.candidates){const i=s.index;if(t.candidates||(t.candidates=[]),t.candidates[i]||(t.candidates[i]={index:s.index}),t.candidates[i].citationMetadata=s.citationMetadata,t.candidates[i].finishReason=s.finishReason,t.candidates[i].finishMessage=s.finishMessage,t.candidates[i].safetyRatings=s.safetyRatings,s.content&&s.content.parts){t.candidates[i].content||(t.candidates[i].content={role:s.content.role||"user",parts:[{text:""}]});for(const c of s.content.parts)c.text&&(t.candidates[i].content.parts[0].text+=c.text)}}return t}/**
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
 */async function D(e,n,t){const o=new _(n,E.STREAM_GENERATE_CONTENT,e,!0),s=await p(o,JSON.stringify(t));return Q(s)}async function U(e,n,t){const o=new _(n,E.GENERATE_CONTENT,e,!1),i=await(await p(o,JSON.stringify(t))).json();return{response:O(i)}}/**
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
 */function l(e,n){let t=[];if(typeof e=="string")t=[{text:e}];else for(const o of e)typeof o=="string"?t.push({text:o}):t.push(o);return{role:n,parts:t}}function C(e){return e.contents?e:{contents:[l(e,"user")]}}function ne(e){return typeof e=="string"||Array.isArray(e)?{content:l(e,"user")}:e}/**
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
 */const b="SILENT_ERROR";class se{constructor(n,t,o){this.model=t,this.params=o,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=n,o!=null&&o.history&&(this._history=o.history.map(s=>{if(!s.role)throw new Error("Missing role for history item: "+JSON.stringify(s));return l(s.parts,s.role)}))}async getHistory(){return await this._sendPromise,this._history}async sendMessage(n){var t,o;await this._sendPromise;const s=l(n,"user"),i={safetySettings:(t=this.params)===null||t===void 0?void 0:t.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,contents:[...this._history,s]};let c;return this._sendPromise=this._sendPromise.then(()=>U(this._apiKey,this.model,i)).then(r=>{var a;if(r.response.candidates&&r.response.candidates.length>0){this._history.push(s);const u=Object.assign({parts:[],role:"model"},(a=r.response.candidates)===null||a===void 0?void 0:a[0].content);this._history.push(u)}else{const u=S(r.response);u&&console.warn(`sendMessage() was unsuccessful. ${u}. Inspect response object for details.`)}c=r}),await this._sendPromise,c}async sendMessageStream(n){var t,o;await this._sendPromise;const s=l(n,"user"),i={safetySettings:(t=this.params)===null||t===void 0?void 0:t.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,contents:[...this._history,s]},c=D(this._apiKey,this.model,i);return this._sendPromise=this._sendPromise.then(()=>c).catch(r=>{throw new Error(b)}).then(r=>r.response).then(r=>{if(r.candidates&&r.candidates.length>0){this._history.push(s);const a=Object.assign({},r.candidates[0].content);a.role||(a.role="model"),this._history.push(a)}else{const a=S(r);a&&console.warn(`sendMessageStream() was unsuccessful. ${a}. Inspect response object for details.`)}}).catch(r=>{r.message!==b&&console.error(r)}),c}}/**
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
 */async function oe(e,n,t){const o=new _(n,E.COUNT_TOKENS,e,!1);return(await p(o,JSON.stringify(Object.assign(Object.assign({},t),{model:n})))).json()}/**
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
 */async function ie(e,n,t){const o=new _(n,E.EMBED_CONTENT,e,!1);return(await p(o,JSON.stringify(t))).json()}async function re(e,n,t){const o=new _(n,E.BATCH_EMBED_CONTENTS,e,!1),s=t.requests.map(c=>Object.assign(Object.assign({},c),{model:`models/${n}`}));return(await p(o,JSON.stringify({requests:s}))).json()}/**
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
 */class ae{constructor(n,t){var o;this.apiKey=n,t.model.startsWith("models/")?this.model=(o=t.model.split("models/"))===null||o===void 0?void 0:o[1]:this.model=t.model,this.generationConfig=t.generationConfig||{},this.safetySettings=t.safetySettings||[]}async generateContent(n){const t=C(n);return U(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings},t))}async generateContentStream(n){const t=C(n);return D(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings},t))}startChat(n){return new se(this.apiKey,this.model,n)}async countTokens(n){const t=C(n);return oe(this.apiKey,this.model,t)}async embedContent(n){const t=ne(n);return ie(this.apiKey,this.model,t)}async batchEmbedContents(n){return re(this.apiKey,this.model,n)}}/**
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
 */class Ee{constructor(n){this.apiKey=n}getGenerativeModel(n){if(!n.model)throw new h("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new ae(this.apiKey,n)}}export{Ee as G,B as a,Y as b,F as g,ue as s};
