import{c as h,r,g as F,as as D,m as G,e as W,C as k,o as A,A as _,_ as X,S as K}from"./index-nJ5_Qu1f.js";const J=e=>{const{prefixCls:t,className:s,style:n,size:a,shape:i}=e,c=h({[`${t}-lg`]:a==="large",[`${t}-sm`]:a==="small"}),o=h({[`${t}-circle`]:i==="circle",[`${t}-square`]:i==="square",[`${t}-round`]:i==="round"}),l=r.useMemo(()=>typeof a=="number"?{width:a,height:a,lineHeight:`${a}px`}:{},[a]);return r.createElement("span",{className:h(t,c,o,s),style:Object.assign(Object.assign({},l),n)})},E=J,Q=new D("ant-skeleton-loading",{"0%":{backgroundPosition:"100% 50%"},"100%":{backgroundPosition:"0 50%"}}),N=e=>({height:e,lineHeight:W(e)}),f=e=>Object.assign({width:e},N(e)),U=e=>({background:e.skeletonLoadingBackground,backgroundSize:"400% 100%",animationName:Q,animationDuration:e.skeletonLoadingMotionDuration,animationTimingFunction:"ease",animationIterationCount:"infinite"}),z=(e,t)=>Object.assign({width:t(e).mul(5).equal(),minWidth:t(e).mul(5).equal()},N(e)),Y=e=>{const{skeletonAvatarCls:t,gradientFromColor:s,controlHeight:n,controlHeightLG:a,controlHeightSM:i}=e;return{[`${t}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:s},f(n)),[`${t}${t}-circle`]:{borderRadius:"50%"},[`${t}${t}-lg`]:Object.assign({},f(a)),[`${t}${t}-sm`]:Object.assign({},f(i))}},Z=e=>{const{controlHeight:t,borderRadiusSM:s,skeletonInputCls:n,controlHeightLG:a,controlHeightSM:i,gradientFromColor:c,calc:o}=e;return{[`${n}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:c,borderRadius:s},z(t,o)),[`${n}-lg`]:Object.assign({},z(a,o)),[`${n}-sm`]:Object.assign({},z(i,o))}},L=e=>Object.assign({width:e},N(e)),ee=e=>{const{skeletonImageCls:t,imageSizeBase:s,gradientFromColor:n,borderRadiusSM:a,calc:i}=e;return{[`${t}`]:Object.assign(Object.assign({display:"flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",background:n,borderRadius:a},L(i(s).mul(2).equal())),{[`${t}-path`]:{fill:"#bfbfbf"},[`${t}-svg`]:Object.assign(Object.assign({},L(s)),{maxWidth:i(s).mul(4).equal(),maxHeight:i(s).mul(4).equal()}),[`${t}-svg${t}-svg-circle`]:{borderRadius:"50%"}}),[`${t}${t}-circle`]:{borderRadius:"50%"}}},H=(e,t,s)=>{const{skeletonButtonCls:n}=e;return{[`${s}${n}-circle`]:{width:t,minWidth:t,borderRadius:"50%"},[`${s}${n}-round`]:{borderRadius:t}}},B=(e,t)=>Object.assign({width:t(e).mul(2).equal(),minWidth:t(e).mul(2).equal()},N(e)),te=e=>{const{borderRadiusSM:t,skeletonButtonCls:s,controlHeight:n,controlHeightLG:a,controlHeightSM:i,gradientFromColor:c,calc:o}=e;return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({[`${s}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:c,borderRadius:t,width:o(n).mul(2).equal(),minWidth:o(n).mul(2).equal()},B(n,o))},H(e,n,s)),{[`${s}-lg`]:Object.assign({},B(a,o))}),H(e,a,`${s}-lg`)),{[`${s}-sm`]:Object.assign({},B(i,o))}),H(e,i,`${s}-sm`))},se=e=>{const{componentCls:t,skeletonAvatarCls:s,skeletonTitleCls:n,skeletonParagraphCls:a,skeletonButtonCls:i,skeletonInputCls:c,skeletonImageCls:o,controlHeight:l,controlHeightLG:g,controlHeightSM:m,gradientFromColor:d,padding:$,marginSM:p,borderRadius:C,titleHeight:u,blockRadius:O,paragraphLiHeight:y,controlHeightXS:P,paragraphMarginTop:b}=e;return{[`${t}`]:{display:"table",width:"100%",[`${t}-header`]:{display:"table-cell",paddingInlineEnd:$,verticalAlign:"top",[`${s}`]:Object.assign({display:"inline-block",verticalAlign:"top",background:d},f(l)),[`${s}-circle`]:{borderRadius:"50%"},[`${s}-lg`]:Object.assign({},f(g)),[`${s}-sm`]:Object.assign({},f(m))},[`${t}-content`]:{display:"table-cell",width:"100%",verticalAlign:"top",[`${n}`]:{width:"100%",height:u,background:d,borderRadius:O,[`+ ${a}`]:{marginBlockStart:m}},[`${a}`]:{padding:0,"> li":{width:"100%",height:y,listStyle:"none",background:d,borderRadius:O,"+ li":{marginBlockStart:P}}},[`${a}> li:last-child:not(:first-child):not(:nth-child(2))`]:{width:"61%"}},[`&-round ${t}-content`]:{[`${n}, ${a} > li`]:{borderRadius:C}}},[`${t}-with-avatar ${t}-content`]:{[`${n}`]:{marginBlockStart:p,[`+ ${a}`]:{marginBlockStart:b}}},[`${t}${t}-element`]:Object.assign(Object.assign(Object.assign(Object.assign({display:"inline-block",width:"auto"},te(e)),Y(e)),Z(e)),ee(e)),[`${t}${t}-block`]:{width:"100%",[`${i}`]:{width:"100%"},[`${c}`]:{width:"100%"}},[`${t}${t}-active`]:{[`
        ${n},
        ${a} > li,
        ${s},
        ${i},
        ${c},
        ${o}
      `]:Object.assign({},U(e))}}},ne=e=>{const{colorFillContent:t,colorFill:s}=e,n=t,a=s;return{color:n,colorGradientEnd:a,gradientFromColor:n,gradientToColor:a,titleHeight:e.controlHeight/2,blockRadius:e.borderRadiusSM,paragraphMarginTop:e.marginLG+e.marginXXS,paragraphLiHeight:e.controlHeight/2}},S=F("Skeleton",e=>{const{componentCls:t,calc:s}=e,n=G(e,{skeletonAvatarCls:`${t}-avatar`,skeletonTitleCls:`${t}-title`,skeletonParagraphCls:`${t}-paragraph`,skeletonButtonCls:`${t}-button`,skeletonInputCls:`${t}-input`,skeletonImageCls:`${t}-image`,imageSizeBase:s(e.controlHeight).mul(1.5).equal(),borderRadius:100,skeletonLoadingBackground:`linear-gradient(90deg, ${e.gradientFromColor} 25%, ${e.gradientToColor} 37%, ${e.gradientFromColor} 63%)`,skeletonLoadingMotionDuration:"1.4s"});return[se(n)]},ne,{deprecatedTokens:[["color","gradientFromColor"],["colorGradientEnd","gradientToColor"]]}),ae=e=>{const{prefixCls:t,className:s,rootClassName:n,active:a,shape:i="circle",size:c="default"}=e,{getPrefixCls:o}=r.useContext(k),l=o("skeleton",t),[g,m,d]=S(l),$=A(e,["prefixCls","className"]),p=h(l,`${l}-element`,{[`${l}-active`]:a},s,n,m,d);return g(r.createElement("div",{className:p},r.createElement(E,Object.assign({prefixCls:`${l}-avatar`,shape:i,size:c},$))))},le=ae,oe=e=>{const{prefixCls:t,className:s,rootClassName:n,active:a,block:i=!1,size:c="default"}=e,{getPrefixCls:o}=r.useContext(k),l=o("skeleton",t),[g,m,d]=S(l),$=A(e,["prefixCls"]),p=h(l,`${l}-element`,{[`${l}-active`]:a,[`${l}-block`]:i},s,n,m,d);return g(r.createElement("div",{className:p},r.createElement(E,Object.assign({prefixCls:`${l}-button`,size:c},$))))},re=oe,ie="M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",ce=e=>{const{prefixCls:t,className:s,rootClassName:n,style:a,active:i}=e,{getPrefixCls:c}=r.useContext(k),o=c("skeleton",t),[l,g,m]=S(o),d=h(o,`${o}-element`,{[`${o}-active`]:i},s,n,g,m);return l(r.createElement("div",{className:d},r.createElement("div",{className:h(`${o}-image`,s),style:a},r.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:`${o}-image-svg`},r.createElement("path",{d:ie,className:`${o}-image-path`})))))},ge=ce,de=e=>{const{prefixCls:t,className:s,rootClassName:n,active:a,block:i,size:c="default"}=e,{getPrefixCls:o}=r.useContext(k),l=o("skeleton",t),[g,m,d]=S(l),$=A(e,["prefixCls"]),p=h(l,`${l}-element`,{[`${l}-active`]:a,[`${l}-block`]:i},s,n,m,d);return g(r.createElement("div",{className:p},r.createElement(E,Object.assign({prefixCls:`${l}-input`,size:c},$))))},me=de;var ue={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"dot-chart",theme:"outlined"};const he=ue;var $e=function(t,s){return r.createElement(_,X({},t,{ref:s,icon:he}))};const pe=r.forwardRef($e),Ce=e=>{const{prefixCls:t,className:s,rootClassName:n,style:a,active:i,children:c}=e,{getPrefixCls:o}=r.useContext(k),l=o("skeleton",t),[g,m,d]=S(l),$=h(l,`${l}-element`,{[`${l}-active`]:i},m,s,n,d),p=c??r.createElement(pe,null);return g(r.createElement("div",{className:$},r.createElement("div",{className:h(`${l}-image`,s),style:a},p)))},be=Ce,fe=e=>{const t=o=>{const{width:l,rows:g=2}=e;if(Array.isArray(l))return l[o];if(g-1===o)return l},{prefixCls:s,className:n,style:a,rows:i}=e,c=K(Array(i)).map((o,l)=>r.createElement("li",{key:l,style:{width:t(l)}}));return r.createElement("ul",{className:h(s,n),style:a},c)},ke=fe,Se=e=>{let{prefixCls:t,className:s,width:n,style:a}=e;return r.createElement("h3",{className:h(t,s),style:Object.assign({width:n},a)})},ve=Se;function q(e){return e&&typeof e=="object"?e:{}}function Oe(e,t){return e&&!t?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}function xe(e,t){return!e&&t?{width:"38%"}:e&&t?{width:"50%"}:{}}function je(e,t){const s={};return(!e||!t)&&(s.width="61%"),!e&&t?s.rows=3:s.rows=2,s}const v=e=>{const{prefixCls:t,loading:s,className:n,rootClassName:a,style:i,children:c,avatar:o=!1,title:l=!0,paragraph:g=!0,active:m,round:d}=e,{getPrefixCls:$,direction:p,skeleton:C}=r.useContext(k),u=$("skeleton",t),[O,y,P]=S(u);if(s||!("loading"in e)){const b=!!o,x=!!l,j=!!g;let M;if(b){const w=Object.assign(Object.assign({prefixCls:`${u}-avatar`},Oe(x,j)),q(o));M=r.createElement("div",{className:`${u}-header`},r.createElement(E,Object.assign({},w)))}let R;if(x||j){let w;if(x){const I=Object.assign(Object.assign({prefixCls:`${u}-title`},xe(b,j)),q(l));w=r.createElement(ve,Object.assign({},I))}let T;if(j){const I=Object.assign(Object.assign({prefixCls:`${u}-paragraph`},je(b,x)),q(g));T=r.createElement(ke,Object.assign({},I))}R=r.createElement("div",{className:`${u}-content`},w,T)}const V=h(u,{[`${u}-with-avatar`]:b,[`${u}-active`]:m,[`${u}-rtl`]:p==="rtl",[`${u}-round`]:d},C==null?void 0:C.className,n,a,y,P);return O(r.createElement("div",{className:V,style:Object.assign(Object.assign({},C==null?void 0:C.style),i)},M,R))}return typeof c<"u"?c:null};v.Button=re;v.Avatar=le;v.Input=me;v.Image=ge;v.Node=be;const Ee=v;export{Ee as S};
