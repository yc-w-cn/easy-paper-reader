import{a9 as ne,R as oe,r as n,ad as ae,g as ie,m as ce,d as le,D as I,a$ as ue,C as F,am as de,W as U,c as N,t as pe,e as me}from"./index-MtvP_01R.js";import{R as ge}from"./PageWrapper-FKZhqcit.js";import{P as fe}from"./_baseClone-VYtN7Lua.js";const X=["xxl","xl","lg","md","sm","xs"],he=e=>({xs:`(max-width: ${e.screenXSMax}px)`,sm:`(min-width: ${e.screenSM}px)`,md:`(min-width: ${e.screenMD}px)`,lg:`(min-width: ${e.screenLG}px)`,xl:`(min-width: ${e.screenXL}px)`,xxl:`(min-width: ${e.screenXXL}px)`}),ve=e=>{const t=e,s=[].concat(X).reverse();return s.forEach((r,a)=>{const i=r.toUpperCase(),c=`screen${i}Min`,o=`screen${i}`;if(!(t[c]<=t[o]))throw new Error(`${c}<=${o} fails : !(${t[c]}<=${t[o]})`);if(a<s.length-1){const l=`screen${i}Max`;if(!(t[o]<=t[l]))throw new Error(`${o}<=${l} fails : !(${t[o]}<=${t[l]})`);const m=`screen${s[a+1].toUpperCase()}Min`;if(!(t[l]<=t[m]))throw new Error(`${l}<=${m} fails : !(${t[l]}<=${t[m]})`)}}),e};function xe(){const[,e]=ne(),t=he(ve(e));return oe.useMemo(()=>{const s=new Map;let r=-1,a={};return{matchHandlers:{},dispatch(i){return a=i,s.forEach(c=>c(a)),s.size>=1},subscribe(i){return s.size||this.register(),r+=1,s.set(r,i),i(a),r},unsubscribe(i){s.delete(i),s.size||this.unregister()},unregister(){Object.keys(t).forEach(i=>{const c=t[i],o=this.matchHandlers[c];o==null||o.mql.removeListener(o==null?void 0:o.listener)}),s.clear()},register(){Object.keys(t).forEach(i=>{const c=t[i],o=p=>{let{matches:m}=p;this.dispatch(Object.assign(Object.assign({},a),{[i]:m}))},l=window.matchMedia(c);l.addListener(o),this.matchHandlers[c]={mql:l,listener:o},o(l)})},responsiveMap:t}},[e])}function Se(){const[,e]=n.useReducer(t=>t+1,0);return e}function be(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;const t=n.useRef({}),s=Se(),r=xe();return ae(()=>{const a=r.subscribe(i=>{t.current=i,e&&s()});return()=>r.unsubscribe(a)},[]),t.current}const $e=n.createContext({}),A=$e,Ce=e=>{const{antCls:t,componentCls:s,iconCls:r,avatarBg:a,avatarColor:i,containerSize:c,containerSizeLG:o,containerSizeSM:l,textFontSize:p,textFontSizeLG:m,textFontSizeSM:j,borderRadius:x,borderRadiusLG:S,borderRadiusSM:C,lineWidth:y,lineType:O,calc:z}=e,$=(h,E,f)=>({width:h,height:h,lineHeight:I(z(h).sub(z(y).mul(2)).equal()),borderRadius:"50%",[`&${s}-square`]:{borderRadius:f},[`${s}-string`]:{position:"absolute",left:{_skip_check_:!0,value:"50%"},transformOrigin:"0 center"},[`&${s}-icon`]:{fontSize:E,[`> ${r}`]:{margin:0}}});return{[s]:Object.assign(Object.assign(Object.assign(Object.assign({},le(e)),{position:"relative",display:"inline-block",overflow:"hidden",color:i,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:a,border:`${I(y)} ${O} transparent`,"&-image":{background:"transparent"},[`${t}-image-img`]:{display:"block"}}),$(c,p,x)),{"&-lg":Object.assign({},$(o,m,S)),"&-sm":Object.assign({},$(l,j,C)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},ye=e=>{const{componentCls:t,groupBorderColor:s,groupOverlapping:r,groupSpace:a}=e;return{[`${t}-group`]:{display:"inline-flex",[`${t}`]:{borderColor:s},"> *:not(:first-child)":{marginInlineStart:r}},[`${t}-group-popover`]:{[`${t} + ${t}`]:{marginInlineStart:a}}}},ze=e=>{const{controlHeight:t,controlHeightLG:s,controlHeightSM:r,fontSize:a,fontSizeLG:i,fontSizeXL:c,fontSizeHeading3:o,marginXS:l,marginXXS:p,colorBorderBg:m}=e;return{containerSize:t,containerSizeLG:s,containerSizeSM:r,textFontSize:Math.round((i+c)/2),textFontSizeLG:o,textFontSizeSM:a,groupSpace:p,groupOverlapping:-l,groupBorderColor:m}},W=ie("Avatar",e=>{const{colorTextLightSolid:t,colorTextPlaceholder:s}=e,r=ce(e,{avatarBg:s,avatarColor:t});return[Ce(r),ye(r)]},ze);var Oe=function(e,t){var s={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(s[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(s[r[a]]=e[r[a]]);return s};const Ee=(e,t)=>{const[s,r]=n.useState(1),[a,i]=n.useState(!1),[c,o]=n.useState(!0),l=n.useRef(null),p=n.useRef(null),m=ue(t,l),{getPrefixCls:j,avatar:x}=n.useContext(F),S=n.useContext(A),C=()=>{if(!p.current||!l.current)return;const d=p.current.offsetWidth,u=l.current.offsetWidth;if(d!==0&&u!==0){const{gap:v=4}=e;v*2<u&&r(u-v*2<d?(u-v*2)/d:1)}};n.useEffect(()=>{i(!0)},[]),n.useEffect(()=>{o(!0),r(1)},[e.src]),n.useEffect(C,[e.gap]);const y=()=>{const{onError:d}=e;(d==null?void 0:d())!==!1&&o(!1)},{prefixCls:O,shape:z,size:$,src:h,srcSet:E,icon:f,className:R,rootClassName:w,alt:k,draggable:q,children:L,crossOrigin:D}=e,P=Oe(e,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),g=de(d=>{var u,v;return(v=(u=$??(S==null?void 0:S.size))!==null&&u!==void 0?u:d)!==null&&v!==void 0?v:"default"}),Q=Object.keys(typeof g=="object"?g||{}:{}).some(d=>["xs","sm","md","lg","xl","xxl"].includes(d)),B=be(Q),J=n.useMemo(()=>{if(typeof g!="object")return{};const d=X.find(v=>B[v]),u=g[d];return u?{width:u,height:u,lineHeight:`${u}px`,fontSize:u&&(f||L)?u/2:18}:{}},[B,g]),b=j("avatar",O),H=U(b),[K,Y,Z]=W(b,H),ee=N({[`${b}-lg`]:g==="large",[`${b}-sm`]:g==="small"}),G=n.isValidElement(h),te=z||(S==null?void 0:S.shape)||"circle",se=N(b,ee,x==null?void 0:x.className,`${b}-${te}`,{[`${b}-image`]:G||h&&c,[`${b}-icon`]:!!f},Z,H,R,w,Y),re=typeof g=="number"?{width:g,height:g,lineHeight:`${g}px`,fontSize:f?g/2:18}:{};let M;if(typeof h=="string"&&c)M=n.createElement("img",{src:h,draggable:q,srcSet:E,onError:y,alt:k,crossOrigin:D});else if(G)M=h;else if(f)M=f;else if(a||s!==1){const d=`scale(${s}) translateX(-50%)`,u={msTransform:d,WebkitTransform:d,transform:d},v=typeof g=="number"?{lineHeight:`${g}px`}:{};M=n.createElement(ge,{onResize:C},n.createElement("span",{className:`${b}-string`,ref:p,style:Object.assign(Object.assign({},v),u)},L))}else M=n.createElement("span",{className:`${b}-string`,style:{opacity:0},ref:p},L);return delete P.onError,delete P.gap,K(n.createElement("span",Object.assign({},P,{style:Object.assign(Object.assign(Object.assign(Object.assign({},re),J),x==null?void 0:x.style),P.style),className:se,ref:m}),M))},we=n.forwardRef(Ee),V=we,T=e=>{const{size:t,shape:s}=n.useContext(A),r=n.useMemo(()=>({size:e.size||t,shape:e.shape||s}),[e.size,e.shape,t,s]);return n.createElement(A.Provider,{value:r},e.children)},Me=e=>{const{getPrefixCls:t,direction:s}=n.useContext(F),{prefixCls:r,className:a,rootClassName:i,style:c,maxCount:o,maxStyle:l,size:p,shape:m,maxPopoverPlacement:j="top",maxPopoverTrigger:x="hover",children:S}=e,C=t("avatar",r),y=`${C}-group`,O=U(C),[z,$,h]=W(C,O),E=N(y,{[`${y}-rtl`]:s==="rtl"},h,O,a,i,$),f=pe(S).map((w,k)=>me(w,{key:`avatar-key-${k}`})),R=f.length;if(o&&o<R){const w=f.slice(0,o),k=f.slice(o,R);return w.push(n.createElement(fe,{key:"avatar-popover-key",content:k,trigger:x,placement:j,overlayClassName:`${y}-popover`},n.createElement(V,{style:l},`+${R-o}`))),z(n.createElement(T,{shape:m,size:p},n.createElement("div",{className:E,style:c},w)))}return z(n.createElement(T,{shape:m,size:p},n.createElement("div",{className:E,style:c},f)))},je=Me,_=V;_.Group=je;const Le=_;export{Le as A,be as a,xe as b,X as r,Se as u};