import{U as Re,aD as xt,r as l,I as Q,s as Z,C as ee,W as Ot,aL as St,aM as wt,aN as Ct,aO as Tt,c as J,aP as $t,aQ as Pt,aR as jt,aS as te,aT as It,aU as Rt,aV as Dt,aW as Lt,aX as De,aY as Nt,aZ as kt,R as Y,L as Mt,a9 as Kt,n as ve,ac as de,Y as _t,a_ as Ht,D as zt,g as At,e as Ft,a$ as Ae,t as Fe,ad as ce,P as Bt,o as Be}from"./index-l461O1zk.js";import{w as Vt,C as Wt}from"./toNumber-DTwpbeKl.js";import{u as Ut,T as Xt,S as qt,k as Ve,F as Yt,f as Jt,l as Gt,n as Qt,C as Zt,o as en}from"./_isIterateeCall-YsVKrjLR.js";import{T as he,u as tn,R as nn}from"./PageWrapper-sLkUscXw.js";import{T as on}from"./isSymbol-ylSl9bjA.js";const We=e=>({color:e.colorLink,textDecoration:"none",outline:"none",cursor:"pointer",transition:`color ${e.motionDurationSlow}`,"&:focus, &:hover":{color:e.colorLinkHover},"&:active":{color:e.colorLinkActive}});function Ee(e){return e!=null&&e===e.window}function rn(e,t){var o,n;if(typeof window>"u")return 0;const r=t?"scrollTop":"scrollLeft";let s=0;return Ee(e)?s=e[t?"pageYOffset":"pageXOffset"]:e instanceof Document?s=e.documentElement[r]:(e instanceof HTMLElement||e)&&(s=e[r]),e&&!Ee(e)&&typeof s!="number"&&(s=(n=((o=e.ownerDocument)!==null&&o!==void 0?o:e).documentElement)===null||n===void 0?void 0:n[r]),s}function ln(e,t,o,n){const r=o-t;return e/=n/2,e<1?r/2*e*e*e+t:r/2*((e-=2)*e*e+2)+t}function Ho(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{getContainer:o=()=>window,callback:n,duration:r=450}=t,s=o(),d=rn(s,!0),a=Date.now(),u=()=>{const c=Date.now()-a,y=ln(c>r?r:c,d,e,r);Ee(s)?s.scrollTo(window.pageXOffset,y):s instanceof Document||s.constructor.name==="HTMLDocument"?s.documentElement.scrollTop=y:s.scrollTop=y,c<r?Re(u):typeof n=="function"&&n()};Re(u)}var Ue=function(t){if(xt()&&window.document.documentElement){var o=Array.isArray(t)?t:[t],n=window.document.documentElement;return o.some(function(r){return r in n.style})}return!1},sn=function(t,o){if(!Ue(t))return!1;var n=document.createElement("div"),r=n.style[t];return n.style[t]=o,n.style[t]!==r};function Le(e,t){return!Array.isArray(e)&&t!==void 0?sn(e,t):Ue(e)}var an={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"}}]},name:"vertical-align-top",theme:"outlined"};const cn=an;var dn=function(t,o){return l.createElement(Q,Z({},t,{ref:o,icon:cn}))};const zo=l.forwardRef(dn);var un=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};const fn=e=>{const{prefixCls:t,className:o,closeIcon:n,closable:r,type:s,title:d,children:a,footer:u}=e,f=un(e,["prefixCls","className","closeIcon","closable","type","title","children","footer"]),{getPrefixCls:c}=l.useContext(ee),y=c(),E=t||c("modal"),C=Ot(y),[b,x,O]=St(E,C),I=`${E}-confirm`;let R={};return s?R={closable:r??!1,title:"",footer:"",children:l.createElement(wt,Object.assign({},e,{prefixCls:E,confirmPrefixCls:I,rootPrefixCls:y,content:a}))}:R={closable:r??!0,title:d,footer:u!==null&&l.createElement(Ct,Object.assign({},e)),children:a},b(l.createElement(Tt,Object.assign({prefixCls:E,className:J(x,`${E}-pure-panel`,s&&I,s&&`${I}-${s}`,o,O,C)},f,{closeIcon:$t(E,n),closable:r},R)))},pn=Vt(fn);function Xe(e){return te(kt(e))}const A=Pt;A.useModal=jt;A.info=function(t){return te(It(t))};A.success=function(t){return te(Rt(t))};A.error=function(t){return te(Dt(t))};A.warning=Xe;A.warn=Xe;A.confirm=function(t){return te(Lt(t))};A.destroyAll=function(){for(;De.length;){const t=De.pop();t&&t()}};A.config=Nt;A._InternalPanelDoNotUseOrYouWillBeFired=pn;const Ao=A;var mn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 00-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z"}}]},name:"folder-open",theme:"outlined"};const gn=mn;var yn=function(t,o){return l.createElement(Q,Z({},t,{ref:o,icon:gn}))};const bn=l.forwardRef(yn);var vn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z"}}]},name:"folder",theme:"outlined"};const hn=vn;var En=function(t,o){return l.createElement(Q,Z({},t,{ref:o,icon:hn}))};const xn=l.forwardRef(En);var On={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M300 276.5a56 56 0 1056-97 56 56 0 00-56 97zm0 284a56 56 0 1056-97 56 56 0 00-56 97zM640 228a56 56 0 10112 0 56 56 0 00-112 0zm0 284a56 56 0 10112 0 56 56 0 00-112 0zM300 844.5a56 56 0 1056-97 56 56 0 00-56 97zM640 796a56 56 0 10112 0 56 56 0 00-112 0z"}}]},name:"holder",theme:"outlined"};const Sn=On;var wn=function(t,o){return l.createElement(Q,Z({},t,{ref:o,icon:Sn}))};const Cn=l.forwardRef(wn),Ne=4;function Tn(e){const{dropPosition:t,dropLevelOffset:o,prefixCls:n,indent:r,direction:s="ltr"}=e,d=s==="ltr"?"left":"right",a=s==="ltr"?"right":"left",u={[d]:-o*r+Ne,[a]:0};switch(t){case-1:u.top=-3;break;case 1:u.bottom=-3;break;default:u.bottom=-3,u[d]=r+Ne;break}return Y.createElement("div",{style:u,className:`${n}-drop-indicator`})}const $n=Y.forwardRef((e,t)=>{var o;const{getPrefixCls:n,direction:r,virtual:s,tree:d}=Y.useContext(ee),{prefixCls:a,className:u,showIcon:f=!1,showLine:c,switcherIcon:y,blockNode:E=!1,children:C,checkable:b=!1,selectable:x=!0,draggable:O,motion:I,style:R}=e,p=n("tree",a),T=n(),D=I??Object.assign(Object.assign({},Mt(T)),{motionAppear:!1}),S=Object.assign(Object.assign({},e),{checkable:b,selectable:x,showIcon:f,motion:D,blockNode:E,showLine:!!c,dropIndicatorRender:Tn}),[H,$,g]=Ut(p),[,v]=Kt(),N=v.paddingXS/2+(((o=v.Tree)===null||o===void 0?void 0:o.titleHeight)||v.controlHeightSM),P=Y.useMemo(()=>{if(!O)return!1;let h={};switch(typeof O){case"function":h.nodeDraggable=O;break;case"object":h=Object.assign({},O);break}return h.icon!==!1&&(h.icon=h.icon||Y.createElement(Cn,null)),h},[O]),K=h=>Y.createElement(qt,{prefixCls:p,switcherIcon:y,treeNodeProps:h,showLine:c});return H(Y.createElement(Xt,Object.assign({itemHeight:N,ref:t,virtual:s},S,{style:Object.assign(Object.assign({},d==null?void 0:d.style),R),prefixCls:p,className:J({[`${p}-icon-hide`]:!f,[`${p}-block-node`]:E,[`${p}-unselectable`]:!x,[`${p}-rtl`]:r==="rtl"},d==null?void 0:d.className,u,$,g),direction:r,checkable:b&&Y.createElement("span",{className:`${p}-checkbox-inner`}),selectable:x,switcherIcon:K,draggable:P}),C))}),qe=$n;var W;(function(e){e[e.None=0]="None",e[e.Start=1]="Start",e[e.End=2]="End"})(W||(W={}));function xe(e,t,o){const{key:n,children:r}=o;function s(d){const a=d[n],u=d[r];t(a,d)!==!1&&xe(u||[],t,o)}e.forEach(s)}function Pn(e){let{treeData:t,expandedKeys:o,startKey:n,endKey:r,fieldNames:s}=e;const d=[];let a=W.None;if(n&&n===r)return[n];if(!n||!r)return[];function u(f){return f===n||f===r}return xe(t,f=>{if(a===W.End)return!1;if(u(f)){if(d.push(f),a===W.None)a=W.Start;else if(a===W.Start)return a=W.End,!1}else a===W.Start&&d.push(f);return o.includes(f)},Ve(s)),d}function pe(e,t,o){const n=ve(t),r=[];return xe(e,(s,d)=>{const a=n.indexOf(s);return a!==-1&&(r.push(d),n.splice(a,1)),!!n.length},Ve(o)),r}var ke=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};function jn(e){const{isLeaf:t,expanded:o}=e;return t?l.createElement(Yt,null):o?l.createElement(bn,null):l.createElement(xn,null)}function Me(e){let{treeData:t,children:o}=e;return t||Qt(o)}const In=(e,t)=>{var{defaultExpandAll:o,defaultExpandParent:n,defaultExpandedKeys:r}=e,s=ke(e,["defaultExpandAll","defaultExpandParent","defaultExpandedKeys"]);const d=l.useRef(),a=l.useRef(),u=()=>{const{keyEntities:$}=Jt(Me(s));let g;return o?g=Object.keys($):n?g=Gt(s.expandedKeys||r||[],$):g=s.expandedKeys||r,g},[f,c]=l.useState(s.selectedKeys||s.defaultSelectedKeys||[]),[y,E]=l.useState(()=>u());l.useEffect(()=>{"selectedKeys"in s&&c(s.selectedKeys)},[s.selectedKeys]),l.useEffect(()=>{"expandedKeys"in s&&E(s.expandedKeys)},[s.expandedKeys]);const C=($,g)=>{var v;return"expandedKeys"in s||E($),(v=s.onExpand)===null||v===void 0?void 0:v.call(s,$,g)},b=($,g)=>{var v;const{multiple:N,fieldNames:P}=s,{node:K,nativeEvent:h}=g,{key:w=""}=K,j=Me(s),F=Object.assign(Object.assign({},g),{selected:!0}),B=(h==null?void 0:h.ctrlKey)||(h==null?void 0:h.metaKey),U=h==null?void 0:h.shiftKey;let k;N&&B?(k=$,d.current=w,a.current=k,F.selectedNodes=pe(j,k,P)):N&&U?(k=Array.from(new Set([].concat(ve(a.current||[]),ve(Pn({treeData:j,expandedKeys:y,startKey:w,endKey:d.current,fieldNames:P}))))),F.selectedNodes=pe(j,k,P)):(k=[w],d.current=w,a.current=k,F.selectedNodes=pe(j,k,P)),(v=s.onSelect)===null||v===void 0||v.call(s,k,F),"selectedKeys"in s||c(k)},{getPrefixCls:x,direction:O}=l.useContext(ee),{prefixCls:I,className:R,showIcon:p=!0,expandAction:T="click"}=s,D=ke(s,["prefixCls","className","showIcon","expandAction"]),S=x("tree",I),H=J(`${S}-directory`,{[`${S}-directory-rtl`]:O==="rtl"},R);return l.createElement(qe,Object.assign({icon:jn,ref:t,blockNode:!0},D,{showIcon:p,expandAction:T,prefixCls:S,className:H,expandedKeys:y,selectedKeys:f,onSelect:b,onExpand:C}))},Rn=l.forwardRef(In),Dn=Rn,Oe=qe;Oe.DirectoryTree=Dn;Oe.TreeNode=Zt;const Fo=Oe;var Ln=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};const Nn={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},kn=l.forwardRef((e,t)=>{const o=f=>{const{keyCode:c}=f;c===de.ENTER&&f.preventDefault()},n=f=>{const{keyCode:c}=f,{onClick:y}=e;c===de.ENTER&&y&&y()},{style:r,noStyle:s,disabled:d}=e,a=Ln(e,["style","noStyle","disabled"]);let u={};return s||(u=Object.assign({},Nn)),d&&(u.pointerEvents="none"),u=Object.assign(Object.assign({},u),r),l.createElement("div",Object.assign({role:"button",tabIndex:0,ref:t},a,{onKeyDown:o,onKeyUp:n,style:u}))}),Ke=kn;var Mn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"};const Kn=Mn;var _n=function(t,o){return l.createElement(Q,Z({},t,{ref:o,icon:Kn}))};const Hn=l.forwardRef(_n);var zn=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,o=[],n=0;n<e.rangeCount;n++)o.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||o.forEach(function(r){e.addRange(r)}),t&&t.focus()}},An=zn,_e={"text/plain":"Text","text/html":"Url",default:"Text"},Fn="Copy to clipboard: #{key}, Enter";function Bn(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function Vn(e,t){var o,n,r,s,d,a,u=!1;t||(t={}),o=t.debug||!1;try{r=An(),s=document.createRange(),d=document.getSelection(),a=document.createElement("span"),a.textContent=e,a.ariaHidden="true",a.style.all="unset",a.style.position="fixed",a.style.top=0,a.style.clip="rect(0, 0, 0, 0)",a.style.whiteSpace="pre",a.style.webkitUserSelect="text",a.style.MozUserSelect="text",a.style.msUserSelect="text",a.style.userSelect="text",a.addEventListener("copy",function(c){if(c.stopPropagation(),t.format)if(c.preventDefault(),typeof c.clipboardData>"u"){o&&console.warn("unable to use e.clipboardData"),o&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var y=_e[t.format]||_e.default;window.clipboardData.setData(y,e)}else c.clipboardData.clearData(),c.clipboardData.setData(t.format,e);t.onCopy&&(c.preventDefault(),t.onCopy(c.clipboardData))}),document.body.appendChild(a),s.selectNodeContents(a),d.addRange(s);var f=document.execCommand("copy");if(!f)throw new Error("copy command was unsuccessful");u=!0}catch(c){o&&console.error("unable to copy using execCommand: ",c),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(y){o&&console.error("unable to copy using clipboardData: ",y),o&&console.error("falling back to prompt"),n=Bn("message"in t?t.message:Fn),window.prompt(n,e)}}finally{d&&(typeof d.removeRange=="function"?d.removeRange(s):d.removeAllRanges()),a&&document.body.removeChild(a),r()}return u}var Wn=Vn;const Un=_t(Wn);var Xn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"};const qn=Xn;var Yn=function(t,o){return l.createElement(Q,Z({},t,{ref:o,icon:qn}))};const Jn=l.forwardRef(Yn),Gn=(e,t,o,n)=>{const{titleMarginBottom:r,fontWeightStrong:s}=n;return{marginBottom:r,color:o,fontWeight:s,fontSize:e,lineHeight:t}},Qn=e=>{const t=[1,2,3,4,5],o={};return t.forEach(n=>{o[`
      h${n}&,
      div&-h${n},
      div&-h${n} > textarea,
      h${n}
    `]=Gn(e[`fontSizeHeading${n}`],e[`lineHeightHeading${n}`],e.colorTextHeading,e)}),o},Zn=e=>{const{componentCls:t}=e;return{"a&, a":Object.assign(Object.assign({},We(e)),{textDecoration:e.linkDecoration,"&:active, &:hover":{textDecoration:e.linkHoverDecoration},[`&[disabled], &${t}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed","&:active, &:hover":{color:e.colorTextDisabled},"&:active":{pointerEvents:"none"}}})}},eo=e=>({code:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.2em 0.1em",fontSize:"85%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3},kbd:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.15em 0.1em",fontSize:"90%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.06)",border:"1px solid rgba(100, 100, 100, 0.2)",borderBottomWidth:2,borderRadius:3},mark:{padding:0,backgroundColor:Ht[2]},"u, ins":{textDecoration:"underline",textDecorationSkipInk:"auto"},"s, del":{textDecoration:"line-through"},strong:{fontWeight:600},"ul, ol":{marginInline:0,marginBlock:"0 1em",padding:0,li:{marginInline:"20px 0",marginBlock:0,paddingInline:"4px 0",paddingBlock:0}},ul:{listStyleType:"circle",ul:{listStyleType:"disc"}},ol:{listStyleType:"decimal"},"pre, blockquote":{margin:"1em 0"},pre:{padding:"0.4em 0.6em",whiteSpace:"pre-wrap",wordWrap:"break-word",background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3,fontFamily:e.fontFamilyCode,code:{display:"inline",margin:0,padding:0,fontSize:"inherit",fontFamily:"inherit",background:"transparent",border:0}},blockquote:{paddingInline:"0.6em 0",paddingBlock:0,borderInlineStart:"4px solid rgba(100, 100, 100, 0.2)",opacity:.85}}),to=e=>{const{componentCls:t,paddingSM:o}=e,n=o;return{"&-edit-content":{position:"relative","div&":{insetInlineStart:e.calc(e.paddingSM).mul(-1).equal(),marginTop:e.calc(n).mul(-1).equal(),marginBottom:`calc(1em - ${zt(n)})`},[`${t}-edit-content-confirm`]:{position:"absolute",insetInlineEnd:e.calc(e.marginXS).add(2).equal(),insetBlockEnd:e.marginXS,color:e.colorTextDescription,fontWeight:"normal",fontSize:e.fontSize,fontStyle:"normal",pointerEvents:"none"},textarea:{margin:"0!important",MozTransition:"none",height:"1em"}}}},no=e=>({[`${e.componentCls}-copy-success`]:{"\n    &,\n    &:hover,\n    &:focus":{color:e.colorSuccess}},[`${e.componentCls}-copy-icon-only`]:{marginInlineStart:0}}),oo=()=>({"\n  a&-ellipsis,\n  span&-ellipsis\n  ":{display:"inline-block",maxWidth:"100%"},"&-single-line":{whiteSpace:"nowrap"},"&-ellipsis-single-line":{overflow:"hidden",textOverflow:"ellipsis","a&, span&":{verticalAlign:"bottom"},"> code":{paddingBlock:0,maxWidth:"calc(100% - 1.2em)",display:"inline-block",overflow:"hidden",textOverflow:"ellipsis",verticalAlign:"bottom",boxSizing:"content-box"}},"&-ellipsis-multiple-line":{display:"-webkit-box",overflow:"hidden",WebkitLineClamp:3,WebkitBoxOrient:"vertical"}}),ro=e=>{const{componentCls:t,titleMarginTop:o}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:e.colorText,wordBreak:"break-word",lineHeight:e.lineHeight,[`&${t}-secondary`]:{color:e.colorTextDescription},[`&${t}-success`]:{color:e.colorSuccess},[`&${t}-warning`]:{color:e.colorWarning},[`&${t}-danger`]:{color:e.colorError,"a&:active, a&:focus":{color:e.colorErrorActive},"a&:hover":{color:e.colorErrorHover}},[`&${t}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed",userSelect:"none"},"\n        div&,\n        p\n      ":{marginBottom:"1em"}},Qn(e)),{[`
      & + h1${t},
      & + h2${t},
      & + h3${t},
      & + h4${t},
      & + h5${t}
      `]:{marginTop:o},"\n      div,\n      ul,\n      li,\n      p,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5":{"\n        + h1,\n        + h2,\n        + h3,\n        + h4,\n        + h5\n        ":{marginTop:o}}}),eo(e)),Zn(e)),{[`
        ${t}-expand,
        ${t}-edit,
        ${t}-copy
      `]:Object.assign(Object.assign({},We(e)),{marginInlineStart:e.marginXXS})}),to(e)),no(e)),oo()),{"&-rtl":{direction:"rtl"}})}},lo=()=>({titleMarginTop:"1.2em",titleMarginBottom:"0.5em"}),Ye=At("Typography",e=>[ro(e)],lo),so=e=>{const{prefixCls:t,"aria-label":o,className:n,style:r,direction:s,maxLength:d,autoSize:a=!0,value:u,onSave:f,onCancel:c,onEnd:y,component:E,enterIcon:C=l.createElement(Jn,null)}=e,b=l.useRef(null),x=l.useRef(!1),O=l.useRef(),[I,R]=l.useState(u);l.useEffect(()=>{R(u)},[u]),l.useEffect(()=>{if(b.current&&b.current.resizableTextArea){const{textArea:w}=b.current.resizableTextArea;w.focus();const{length:j}=w.value;w.setSelectionRange(j,j)}},[]);const p=w=>{let{target:j}=w;R(j.value.replace(/[\n\r]/g,""))},T=()=>{x.current=!0},D=()=>{x.current=!1},S=w=>{let{keyCode:j}=w;x.current||(O.current=j)},H=()=>{f(I.trim())},$=w=>{let{keyCode:j,ctrlKey:F,altKey:B,metaKey:U,shiftKey:k}=w;O.current===j&&!x.current&&!F&&!B&&!U&&!k&&(j===de.ENTER?(H(),y==null||y()):j===de.ESC&&c())},g=()=>{H()},v=E?`${t}-${E}`:"",[N,P,K]=Ye(t),h=J(t,`${t}-edit-content`,{[`${t}-rtl`]:s==="rtl"},n,v,P,K);return N(l.createElement("div",{className:h,style:r},l.createElement(on,{ref:b,maxLength:d,value:I,onChange:p,onKeyDown:S,onKeyUp:$,onCompositionStart:T,onCompositionEnd:D,onBlur:g,"aria-label":o,rows:1,autoSize:a}),C!==null?Ft(C,{className:`${t}-edit-content-confirm`}):null))},io=so;function me(e,t){return l.useMemo(()=>{const o=!!e;return[o,Object.assign(Object.assign({},t),o&&typeof e=="object"?e:null)]},[e])}const ao=(e,t)=>{const o=l.useRef(!1);l.useEffect(()=>{o.current?e():o.current=!0},t)};var co=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};const uo=l.forwardRef((e,t)=>{const{prefixCls:o,component:n="article",className:r,rootClassName:s,setContentRef:d,children:a,direction:u,style:f}=e,c=co(e,["prefixCls","component","className","rootClassName","setContentRef","children","direction","style"]),{getPrefixCls:y,direction:E,typography:C}=l.useContext(ee),b=u??E;let x=t;d&&(x=Ae(t,d));const O=y("typography",o),[I,R,p]=Ye(O),T=J(O,C==null?void 0:C.className,{[`${O}-rtl`]:b==="rtl"},r,s,R,p),D=Object.assign(Object.assign({},C==null?void 0:C.style),f);return I(l.createElement(n,Object.assign({className:T,style:D,ref:x},c),a))}),Je=uo;function Ge(e){const t=typeof e;return t==="string"||t==="number"}function fo(e){let t=0;return e.forEach(o=>{Ge(o)?t+=String(o).length:t+=1}),t}function ge(e,t){let o=0;const n=[];for(let r=0;r<e.length;r+=1){if(o===t)return n;const s=e[r],a=Ge(s)?String(s).length:1,u=o+a;if(u>t){const f=t-o;return n.push(String(s).slice(0,f)),n}n.push(s),o=u}return e}const po=0,ie=1,He=2,ye=3,be=4,mo=e=>{let{enabledMeasure:t,children:o,text:n,width:r,fontSize:s,rows:d,onEllipsis:a}=e;const[[u,f,c],y]=l.useState([0,0,0]),[E,C]=l.useState(0),[b,x]=l.useState(po),[O,I]=l.useState(0),R=l.useRef(null),p=l.useRef(null),T=l.useMemo(()=>Fe(n),[n]),D=l.useMemo(()=>fo(T),[T]),S=l.useMemo(()=>!t||b!==ye?E&&b!==be&&t?o(ge(T,E),E<D):o(T,!1):o(ge(T,f),f<D),[t,b,o,T,f,D]);ce(()=>{t&&r&&s&&D&&(x(ie),y([0,Math.ceil(D/2),D]))},[t,r,s,n,D,d]),ce(()=>{var v;b===ie&&I(((v=R.current)===null||v===void 0?void 0:v.offsetHeight)||0)},[b]),ce(()=>{var v,N;if(O){if(b===ie){const P=((v=p.current)===null||v===void 0?void 0:v.offsetHeight)||0,K=d*O;P<=K?(x(be),a(!1)):x(He)}else if(b===He)if(u!==c){const P=((N=p.current)===null||N===void 0?void 0:N.offsetHeight)||0,K=d*O;let h=u,w=c;u===c-1?w=u:P<=K?h=f:w=f;const j=Math.ceil((h+w)/2);y([h,j,w])}else x(ye),C(f),a(!0)}},[b,u,c,d,O]);const H={width:r,whiteSpace:"normal",margin:0,padding:0},$=(v,N,P)=>l.createElement("span",{"aria-hidden":!0,ref:N,style:Object.assign({position:"fixed",display:"block",left:0,top:0,zIndex:-9999,visibility:"hidden",pointerEvents:"none",fontSize:Math.ceil(s/2)*2},P)},v),g=(v,N)=>{const P=ge(T,v);return $(o(P,!0),N,H)};return l.createElement(l.Fragment,null,S,t&&b!==ye&&b!==be&&l.createElement(l.Fragment,null,$("lg",R,{wordBreak:"keep-all",whiteSpace:"nowrap"}),b===ie?$(o(T,!1),p,H):g(f,p)))},go=mo,yo=e=>{let{enabledEllipsis:t,isEllipsis:o,children:n,tooltipProps:r}=e;return!(r!=null&&r.title)||!t?n:l.createElement(he,Object.assign({open:o?void 0:!1},r),n)},bo=yo;var vo=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};function ho(e,t){let{mark:o,code:n,underline:r,delete:s,strong:d,keyboard:a,italic:u}=e,f=t;function c(y,E){E&&(f=l.createElement(y,{},f))}return c("strong",d),c("u",r),c("del",s),c("code",n),c("mark",o),c("kbd",a),c("i",u),f}function ae(e,t,o){return e===!0||e===void 0?t:e||o&&t}function ze(e){return e===!1?[!1,!1]:Array.isArray(e)?e:[e]}const Eo="...",xo=l.forwardRef((e,t)=>{var o,n,r;const{prefixCls:s,className:d,style:a,type:u,disabled:f,children:c,ellipsis:y,editable:E,copyable:C,component:b,title:x}=e,O=vo(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),{getPrefixCls:I,direction:R}=l.useContext(ee),[p]=Bt("Text"),T=l.useRef(null),D=l.useRef(null),S=I("typography",s),H=Be(O,["mark","code","delete","underline","strong","keyboard","italic"]),[$,g]=me(E),[v,N]=tn(!1,{value:g.editing}),{triggerType:P=["icon"]}=g,K=i=>{var m;i&&((m=g.onStart)===null||m===void 0||m.call(g)),N(i)};ao(()=>{var i;v||(i=D.current)===null||i===void 0||i.focus()},[v]);const h=i=>{i==null||i.preventDefault(),K(!0)},w=i=>{var m;(m=g.onChange)===null||m===void 0||m.call(g,i),K(!1)},j=()=>{var i;(i=g.onCancel)===null||i===void 0||i.call(g),K(!1)},[F,B]=me(C),[U,k]=l.useState(!1),fe=l.useRef(null),Se={};B.format&&(Se.format=B.format);const we=()=>{fe.current&&clearTimeout(fe.current)},Qe=i=>{var m;i==null||i.preventDefault(),i==null||i.stopPropagation(),Un(B.text||String(c)||"",Se),k(!0),we(),fe.current=setTimeout(()=>{k(!1)},3e3),(m=B.onCopy)===null||m===void 0||m.call(B,i)};l.useEffect(()=>we,[]);const[Ce,Ze]=l.useState(!1),[Te,et]=l.useState(!1),[tt,nt]=l.useState(!1),[$e,ot]=l.useState(!1),[Pe,rt]=l.useState(!1),[lt,st]=l.useState(!0),[X,L]=me(y,{expandable:!1}),z=X&&!tt,{rows:G=1}=L,oe=l.useMemo(()=>!z||L.suffix!==void 0||L.onEllipsis||L.expandable||$||F,[z,L,$,F]);ce(()=>{X&&!oe&&(Ze(Le("webkitLineClamp")),et(Le("textOverflow")))},[oe,X]);const V=l.useMemo(()=>oe?!1:G===1?Te:Ce,[oe,Te,Ce]),je=z&&(V?Pe:$e),it=z&&G===1&&V,re=z&&G>1&&V,at=i=>{var m;nt(!0),(m=L.onExpand)===null||m===void 0||m.call(L,i)},[Ie,ct]=l.useState(0),[dt,ut]=l.useState(0),ft=(i,m)=>{let{offsetWidth:M}=i;var _;ct(M),ut(parseInt((_=window.getComputedStyle)===null||_===void 0?void 0:_.call(window,m).fontSize,10)||0)},pt=i=>{var m;ot(i),$e!==i&&((m=L.onEllipsis)===null||m===void 0||m.call(L,i))};l.useEffect(()=>{const i=T.current;if(X&&V&&i){const m=re?i.offsetHeight<i.scrollHeight:i.offsetWidth<i.scrollWidth;Pe!==m&&rt(m)}},[X,V,c,re,lt,Ie]),l.useEffect(()=>{const i=T.current;if(typeof IntersectionObserver>"u"||!i||!V||!z)return;const m=new IntersectionObserver(()=>{st(!!i.offsetParent)});return m.observe(i),()=>{m.disconnect()}},[V,z]);let q={};L.tooltip===!0?q={title:(o=g.text)!==null&&o!==void 0?o:c}:l.isValidElement(L.tooltip)?q={title:L.tooltip}:typeof L.tooltip=="object"?q=Object.assign({title:(n=g.text)!==null&&n!==void 0?n:c},L.tooltip):q={title:L.tooltip};const le=l.useMemo(()=>{const i=m=>["string","number"].includes(typeof m);if(!(!X||V)){if(i(g.text))return g.text;if(i(c))return c;if(i(x))return x;if(i(q.title))return q.title}},[X,V,x,q.title,je]);if(v)return l.createElement(io,{value:(r=g.text)!==null&&r!==void 0?r:typeof c=="string"?c:"",onSave:w,onCancel:j,onEnd:g.onEnd,prefixCls:S,className:d,style:a,direction:R,component:b,maxLength:g.maxLength,autoSize:g.autoSize,enterIcon:g.enterIcon});const mt=()=>{const{expandable:i,symbol:m}=L;if(!i)return null;let M;return m?M=m:M=p==null?void 0:p.expand,l.createElement("a",{key:"expand",className:`${S}-expand`,onClick:at,"aria-label":p==null?void 0:p.expand},M)},gt=()=>{if(!$)return;const{icon:i,tooltip:m}=g,M=Fe(m)[0]||(p==null?void 0:p.edit),_=typeof M=="string"?M:"";return P.includes("icon")?l.createElement(he,{key:"edit",title:m===!1?"":M},l.createElement(Ke,{ref:D,className:`${S}-edit`,onClick:h,"aria-label":_},i||l.createElement(Hn,{role:"button"}))):null},yt=()=>{if(!F)return null;const{tooltips:i,icon:m}=B,M=ze(i),_=ze(m),se=U?ae(M[1],p==null?void 0:p.copied):ae(M[0],p==null?void 0:p.copy),ht=U?p==null?void 0:p.copied:p==null?void 0:p.copy,Et=typeof se=="string"?se:ht;return l.createElement(he,{key:"copy",title:se},l.createElement(Ke,{className:J(`${S}-copy`,{[`${S}-copy-success`]:U,[`${S}-copy-icon-only`]:c==null}),onClick:Qe,"aria-label":Et},U?ae(_[1],l.createElement(Wt,null),!0):ae(_[0],l.createElement(en,null),!0)))},bt=i=>[i&&mt(),gt(),yt()],vt=i=>[i&&l.createElement("span",{"aria-hidden":!0,key:"ellipsis"},Eo),L.suffix,bt(i)];return l.createElement(nn,{onResize:ft,disabled:!z},i=>l.createElement(bo,{tooltipProps:q,enabledEllipsis:z,isEllipsis:je},l.createElement(Je,Object.assign({className:J({[`${S}-${u}`]:u,[`${S}-disabled`]:f,[`${S}-ellipsis`]:X,[`${S}-single-line`]:z&&G===1,[`${S}-ellipsis-single-line`]:it,[`${S}-ellipsis-multiple-line`]:re},d),prefixCls:s,style:Object.assign(Object.assign({},a),{WebkitLineClamp:re?G:void 0}),component:b,ref:Ae(i,T,t),direction:R,onClick:P.includes("text")?h:void 0,"aria-label":le==null?void 0:le.toString(),title:x},H),l.createElement(go,{enabledMeasure:z&&!V,text:c,rows:G,width:Ie,fontSize:dt,onEllipsis:pt},(m,M)=>{let _=m;return m.length&&M&&le&&(_=l.createElement("span",{key:"show-content","aria-hidden":!0},_)),ho(e,l.createElement(l.Fragment,null,_,vt(M)))}))))}),ue=xo;var Oo=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};const So=l.forwardRef((e,t)=>{var{ellipsis:o,rel:n}=e,r=Oo(e,["ellipsis","rel"]);const s=Object.assign(Object.assign({},r),{rel:n===void 0&&r.target==="_blank"?"noopener noreferrer":n});return delete s.navigate,l.createElement(ue,Object.assign({},s,{ref:t,ellipsis:!!o,component:"a"}))}),wo=So,Co=l.forwardRef((e,t)=>l.createElement(ue,Object.assign({ref:t},e,{component:"div"}))),To=Co;var $o=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};const Po=(e,t)=>{var{ellipsis:o}=e,n=$o(e,["ellipsis"]);const r=l.useMemo(()=>o&&typeof o=="object"?Be(o,["expandable","rows"]):o,[o]);return l.createElement(ue,Object.assign({ref:t},n,{ellipsis:r,component:"span"}))},jo=l.forwardRef(Po);var Io=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(o[n[r]]=e[n[r]]);return o};const Ro=[1,2,3,4,5],Do=l.forwardRef((e,t)=>{const{level:o=1}=e,n=Io(e,["level"]);let r;return Ro.includes(o)?r=`h${o}`:r="h1",l.createElement(ue,Object.assign({ref:t},n,{component:r}))}),Lo=Do,ne=Je;ne.Text=jo;ne.Link=wo;ne.Title=Lo;ne.Paragraph=To;const Bo=ne;export{Hn as E,Ao as M,Bo as T,zo as V,Fo as a,rn as g,Le as i,We as o,Ho as s};
