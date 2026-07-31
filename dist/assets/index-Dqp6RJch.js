const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomePage-ByL4h5y7.js","assets/vendor-motion-Ds9WtX8i.js","assets/vendor-react-BHrTaEEh.js","assets/vendor-ui-DDdQumux.js","assets/vendor-lenis-8VXe07GT.js","assets/WorkPage-BpqqIY4k.js","assets/projects-CJTBa_qp.js","assets/WorkDetailPage-BjVzm-8C.js","assets/AboutPage-DY4cg-Xj.js","assets/About-B-Mf0JRx.js","assets/SectionHeader-CNOs15ib.js","assets/Experience-Dy4jkdjM.js","assets/experience-5URM7WiR.js","assets/Education-BxOsRJT_.js","assets/BlogPage-pnqPUR_U.js","assets/ContactPage-CB1MiWSE.js"])))=>i.map(i=>d[i]);
import{j as n,A as V,m as O}from"./vendor-motion-Ds9WtX8i.js";import{a as ie,r as c,u as le,c as Z,L as F,d as ce,e as _,b as de,B as ue}from"./vendor-react-BHrTaEEh.js";import{I as me,a as pe,b as fe,c as xe,d as he}from"./vendor-ui-DDdQumux.js";import{L as ge}from"./vendor-lenis-8VXe07GT.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();var M={},q=ie;M.createRoot=q.createRoot,M.hydrateRoot=q.hydrateRoot;const be="modulepreload",ye=function(e){return"/"+e},U={},I=function(t,r,i){let o=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),l=s?.nonce||s?.getAttribute("nonce");o=Promise.allSettled(r.map(d=>{if(d=ye(d),d in U)return;U[d]=!0;const m=d.endsWith(".css"),p=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${p}`))return;const u=document.createElement("link");if(u.rel=m?"stylesheet":be,m||(u.as="script"),u.crossOrigin="",u.href=d,l&&u.setAttribute("nonce",l),document.head.appendChild(u),m)return new Promise((f,x)=>{u.addEventListener("load",f),u.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${d}`)))})}))}function a(s){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s}return o.then(s=>{for(const l of s||[])l.status==="rejected"&&a(l.reason);return t().catch(a)})};let ve={data:""},je=e=>{if(typeof window=="object"){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||ve},we=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Ee=/\/\*[^]*?\*\/|  +/g,Y=/\n+/g,w=(e,t)=>{let r="",i="",o="";for(let a in e){let s=e[a];a[0]=="@"?a[1]=="i"?r=a+" "+s+";":i+=a[1]=="f"?w(s,a):a+"{"+w(s,a[1]=="k"?"":t)+"}":typeof s=="object"?i+=w(s,t?t.replace(/([^,])+/g,l=>a.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,d=>/&/.test(d)?d.replace(/&/g,l):l?l+" "+d:d)):a):s!=null&&(a=a[1]=="-"?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=w.p?w.p(a,s):a+":"+s+";")}return r+(t&&o?t+"{"+o+"}":o)+i},j={},Q=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+Q(e[r]);return t}return e},Ne=(e,t,r,i,o)=>{let a=Q(e),s=j[a]||(j[a]=(d=>{let m=0,p=11;for(;m<d.length;)p=101*p+d.charCodeAt(m++)>>>0;return"go"+p})(a));if(!j[s]){let d=a!==e?e:(m=>{let p,u,f=[{}];for(;p=we.exec(m.replace(Ee,""));)p[4]?f.shift():p[3]?(u=p[3].replace(Y," ").trim(),f.unshift(f[0][u]=f[0][u]||{})):f[0][p[1]]=p[2].replace(Y," ").trim();return f[0]})(e);j[s]=w(o?{["@keyframes "+s]:d}:d,r?"":"."+s)}let l=r&&j.g;return r&&(j.g=j[s]),((d,m,p,u)=>{u?m.data=m.data.replace(u,d):m.data.indexOf(d)===-1&&(m.data=p?d+m.data:m.data+d)})(j[s],t,i,l),s},ke=(e,t,r)=>e.reduce((i,o,a)=>{let s=t[a];if(s&&s.call){let l=s(r),d=l&&l.props&&l.props.className||/^go/.test(l)&&l;s=d?"."+d:l&&typeof l=="object"?l.props?"":w(l,""):l===!1?"":l}return i+o+(s??"")},"");function z(e){let t=this||{},r=e.call?e(t.p):e;return Ne(r.unshift?r.raw?ke(r,[].slice.call(arguments,1),t.p):r.reduce((i,o)=>Object.assign(i,o&&o.call?o(t.p):o),{}):r,je(t.target),t.g,t.o,t.k)}let J,H,B;z.bind({g:1});let v=z.bind({k:1});function Le(e,t,r,i){w.p=t,J=e,H=r,B=i}function E(e,t){let r=this||{};return function(){let i=arguments;function o(a,s){let l=Object.assign({},a),d=l.className||o.className;r.p=Object.assign({theme:H&&H()},l),r.o=/go\d/.test(d),l.className=z.apply(r,i)+(d?" "+d:"");let m=e;return e[0]&&(m=l.as||e,delete l.as),B&&m[0]&&B(l),J(m,l)}return o}}var _e=e=>typeof e=="function",C=(e,t)=>_e(e)?e(t):e,Ae=(()=>{let e=0;return()=>(++e).toString()})(),ee=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),Ie=20,W="default",te=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(s=>s.id===t.toast.id?{...s,...t.toast}:s)};case 2:let{toast:i}=t;return te(e,{type:e.toasts.find(s=>s.id===i.id)?1:0,toast:i});case 3:let{toastId:o}=t;return{...e,toasts:e.toasts.map(s=>s.id===o||o===void 0?{...s,dismissed:!0,visible:!1}:s)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(s=>s.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let a=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+a}))}}},$=[],re={toasts:[],pausedAt:void 0,settings:{toastLimit:Ie}},b={},se=(e,t=W)=>{b[t]=te(b[t]||re,e),$.forEach(([r,i])=>{r===t&&i(b[t])})},ne=e=>Object.keys(b).forEach(t=>se(e,t)),Pe=e=>Object.keys(b).find(t=>b[t].toasts.some(r=>r.id===e)),T=(e=W)=>t=>{se(t,e)},Oe={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Re=(e={},t=W)=>{let[r,i]=c.useState(b[t]||re),o=c.useRef(b[t]);c.useEffect(()=>(o.current!==b[t]&&i(b[t]),$.push([t,i]),()=>{let s=$.findIndex(([l])=>l===t);s>-1&&$.splice(s,1)}),[t]);let a=r.toasts.map(s=>{var l,d,m;return{...e,...e[s.type],...s,removeDelay:s.removeDelay||((l=e[s.type])==null?void 0:l.removeDelay)||e?.removeDelay,duration:s.duration||((d=e[s.type])==null?void 0:d.duration)||e?.duration||Oe[s.type],style:{...e.style,...(m=e[s.type])==null?void 0:m.style,...s.style}}});return{...r,toasts:a}},Se=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:r?.id||Ae()}),R=e=>(t,r)=>{let i=Se(t,e,r);return T(i.toasterId||Pe(i.id))({type:2,toast:i}),i.id},h=(e,t)=>R("blank")(e,t);h.error=R("error");h.success=R("success");h.loading=R("loading");h.custom=R("custom");h.dismiss=(e,t)=>{let r={type:3,toastId:e};t?T(t)(r):ne(r)};h.dismissAll=e=>h.dismiss(void 0,e);h.remove=(e,t)=>{let r={type:4,toastId:e};t?T(t)(r):ne(r)};h.removeAll=e=>h.remove(void 0,e);h.promise=(e,t,r)=>{let i=h.loading(t.loading,{...r,...r?.loading});return typeof e=="function"&&(e=e()),e.then(o=>{let a=t.success?C(t.success,o):void 0;return a?h.success(a,{id:i,...r,...r?.success}):h.dismiss(i),o}).catch(o=>{let a=t.error?C(t.error,o):void 0;a?h.error(a,{id:i,...r,...r?.error}):h.dismiss(i)}),e};var $e=1e3,Ce=(e,t="default")=>{let{toasts:r,pausedAt:i}=Re(e,t),o=c.useRef(new Map).current,a=c.useCallback((u,f=$e)=>{if(o.has(u))return;let x=setTimeout(()=>{o.delete(u),s({type:4,toastId:u})},f);o.set(u,x)},[]);c.useEffect(()=>{if(i)return;let u=Date.now(),f=r.map(x=>{if(x.duration===1/0)return;let N=(x.duration||0)+x.pauseDuration-(u-x.createdAt);if(N<0){x.visible&&h.dismiss(x.id);return}return setTimeout(()=>h.dismiss(x.id,t),N)});return()=>{f.forEach(x=>x&&clearTimeout(x))}},[r,i,t]);let s=c.useCallback(T(t),[t]),l=c.useCallback(()=>{s({type:5,time:Date.now()})},[s]),d=c.useCallback((u,f)=>{s({type:1,toast:{id:u,height:f}})},[s]),m=c.useCallback(()=>{i&&s({type:6,time:Date.now()})},[i,s]),p=c.useCallback((u,f)=>{let{reverseOrder:x=!1,gutter:N=8,defaultPosition:P}=f||{},y=r.filter(g=>(g.position||P)===(u.position||P)&&g.height),L=y.findIndex(g=>g.id===u.id),k=y.filter((g,D)=>D<L&&g.visible).length;return y.filter(g=>g.visible).slice(...x?[k+1]:[0,k]).reduce((g,D)=>g+(D.height||0)+N,0)},[r]);return c.useEffect(()=>{r.forEach(u=>{if(u.dismissed)a(u.id,u.removeDelay);else{let f=o.get(u.id);f&&(clearTimeout(f),o.delete(u.id))}})},[r,a]),{toasts:r,handlers:{updateHeight:d,startPause:l,endPause:m,calculateOffset:p}}},ze=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Te=v`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,De=v`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Fe=E("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ze} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Te} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${De} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Me=v`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,He=E("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Me} 1s linear infinite;
`,Be=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Ve=v`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,We=E("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Be} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Ve} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,qe=E("div")`
  position: absolute;
`,Ue=E("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Ye=v`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ke=E("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Ye} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Ge=({toast:e})=>{let{icon:t,type:r,iconTheme:i}=e;return t!==void 0?typeof t=="string"?c.createElement(Ke,null,t):t:r==="blank"?null:c.createElement(Ue,null,c.createElement(He,{...i}),r!=="loading"&&c.createElement(qe,null,r==="error"?c.createElement(Fe,{...i}):c.createElement(We,{...i})))},Xe=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Ze=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Qe="0%{opacity:0;} 100%{opacity:1;}",Je="0%{opacity:1;} 100%{opacity:0;}",et=E("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,tt=E("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,rt=(e,t)=>{let r=e.includes("top")?1:-1,[i,o]=ee()?[Qe,Je]:[Xe(r),Ze(r)];return{animation:t?`${v(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${v(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},st=c.memo(({toast:e,position:t,style:r,children:i})=>{let o=e.height?rt(e.position||t||"top-center",e.visible):{opacity:0},a=c.createElement(Ge,{toast:e}),s=c.createElement(tt,{...e.ariaProps},C(e.message,e));return c.createElement(et,{className:e.className,style:{...o,...r,...e.style}},typeof i=="function"?i({icon:a,message:s}):c.createElement(c.Fragment,null,a,s))});Le(c.createElement);var nt=({id:e,className:t,style:r,onHeightUpdate:i,children:o})=>{let a=c.useCallback(s=>{if(s){let l=()=>{let d=s.getBoundingClientRect().height;i(e,d)};l(),new MutationObserver(l).observe(s,{subtree:!0,childList:!0,characterData:!0})}},[e,i]);return c.createElement("div",{ref:a,className:t,style:r},o)},at=(e,t)=>{let r=e.includes("top"),i=r?{top:0}:{bottom:0},o=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:ee()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...i,...o}},ot=z`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,S=16,it=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:i,children:o,toasterId:a,containerStyle:s,containerClassName:l})=>{let{toasts:d,handlers:m}=Ce(r,a);return c.createElement("div",{"data-rht-toaster":a||"",style:{position:"fixed",zIndex:9999,top:S,left:S,right:S,bottom:S,pointerEvents:"none",...s},className:l,onMouseEnter:m.startPause,onMouseLeave:m.endPause},d.map(p=>{let u=p.position||t,f=m.calculateOffset(p,{reverseOrder:e,gutter:i,defaultPosition:t}),x=at(u,f);return c.createElement(nt,{id:p.id,key:p.id,onHeightUpdate:m.updateHeight,className:p.visible?ot:"",style:x},p.type==="custom"?C(p.message,p):o?o(p):c.createElement(st,{toast:p,position:u}))}))},Pt=h;function ae(e){const[t,r]=c.useState(!1);return c.useEffect(()=>{const i=window.matchMedia(e),o=()=>r(i.matches);return o(),i.addEventListener("change",o),()=>i.removeEventListener("change",o)},[e]),t}function oe(){return ae("(prefers-reduced-motion: reduce)")}const K="noraizrana389@gmail.com",lt="LAHORE, PK",ct=[{label:"LinkedIn",icon:me,href:"https://www.linkedin.com/in/noraiz-rana-291277344/"},{label:"GitHub",icon:pe,href:"https://github.com/noraizrana"},{label:"WhatsApp",icon:fe,href:"https://wa.me/+923495880361"}],G=[{label:"ABOUT",to:"/about"},{label:"WORK",to:"/work"},{label:"BLOG",to:"/blog"},{label:"CONTACT",to:"/contact"}];function dt(){const[e,t]=c.useState(!1),r=le(),i=Z(),o=oe();return c.useEffect(()=>(document.body.style.overflow=e?"hidden":"",()=>{document.body.style.overflow=""}),[e]),n.jsxs(n.Fragment,{children:[n.jsx("header",{className:"fixed left-0 top-0 z-50 w-full border-b border-line bg-[rgba(10,10,10,0.95)] backdrop-blur-md",children:n.jsxs("nav",{className:"flex items-center justify-between px-[6%] py-4",children:[n.jsxs(F,{to:"/",className:"flex items-center gap-1","aria-label":"Home",children:[n.jsx("span",{className:"font-display text-xl tracking-wide text-text-white",children:"NR"}),n.jsx("span",{className:"animate-blink font-display text-xl text-neon-green",children:"_"})]}),n.jsxs("div",{className:"hidden items-center gap-8 md:flex",children:[G.map(a=>n.jsxs(F,{to:a.to,className:"group relative font-mono text-[11px] uppercase tracking-[0.15em] text-text-off transition-colors hover:text-text-white",children:[a.label,n.jsx("span",{className:"absolute -bottom-1 left-0 h-px w-0 bg-neon-green transition-all duration-300 group-hover:w-full"})]},a.to)),n.jsx("button",{onClick:()=>r("/contact"),className:"border border-neon-green bg-transparent px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em] text-neon-green transition-colors duration-100 hover:bg-neon-green hover:text-black",children:"HIRE ME"})]}),n.jsx("button",{className:"text-text-white md:hidden",onClick:()=>t(!0),"aria-label":"Open menu",children:n.jsx(xe,{size:28})})]})}),n.jsx(V,{children:e&&n.jsxs(O.div,{className:"fixed left-0 top-0 z-[80] flex h-[100dvh] w-full flex-col bg-bg md:hidden",initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{duration:.4,ease:[.76,0,.24,1]},children:[n.jsxs("div",{className:"flex items-center justify-between px-[6%] py-4",children:[n.jsx("span",{className:"font-display text-xl text-text-white",children:"NR_"}),n.jsx("button",{onClick:()=>t(!1),"aria-label":"Close menu",className:"text-text-white",children:n.jsx(he,{size:28})})]}),n.jsx("nav",{className:"mt-[20dvh] border-t border-line px-[6%]",children:G.map((a,s)=>{const l=i.pathname===a.to;return n.jsx(O.div,{initial:o?!1:{opacity:0,y:12},animate:{opacity:1,y:0},transition:o?{duration:0}:{delay:.05+s*.04,duration:.35,ease:[.76,0,.24,1]},className:"border-b border-line",children:n.jsxs(F,{to:a.to,onClick:()=>t(!1),className:"group flex items-baseline gap-3 py-4",children:[n.jsx("span",{className:"w-6 font-mono text-xs text-neon-green",children:String(s+1).padStart(2,"0")}),n.jsx("span",{className:"font-mono text-xs text-neon-green",children:"/"}),n.jsx("span",{className:`font-display text-5xl uppercase leading-tight transition-colors duration-150 ${l?"text-neon-green":"text-text-white group-hover:text-neon-green"}`,children:a.label})]})},a.to)})}),n.jsx("div",{className:"flex-1"}),n.jsxs("div",{className:"px-[6%] pb-10",children:[n.jsx("div",{className:"mb-5 h-px w-full bg-neon-green"}),n.jsx("a",{href:`mailto:${K}`,className:"block font-mono text-xs text-text-off transition-colors hover:text-neon-green",children:K}),n.jsx("div",{className:"mt-4 flex flex-wrap gap-x-6 gap-y-2",children:ct.map(a=>n.jsx("a",{href:a.href,target:"_blank",rel:"noreferrer",className:"font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted transition-colors hover:text-neon-green",children:a.label},a.label))}),n.jsx("p",{className:"mt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted",children:lt})]})]})})]})}function ut(){return n.jsxs("footer",{className:"border-t border-line bg-bg px-[6%] py-10",children:[n.jsx("div",{className:"mb-6 h-px w-full bg-neon-green opacity-40"}),n.jsxs("div",{className:"flex flex-col items-start justify-between gap-4 md:flex-row md:items-center",children:[n.jsxs("div",{className:"flex items-baseline gap-3",children:[n.jsx("span",{className:"font-display text-2xl text-text-white",children:"NORAIZ RANA"}),n.jsx("span",{className:"font-mono text-xs text-text-muted",children:"2025"})]}),n.jsx("p",{className:"font-mono text-[11px] uppercase tracking-[0.15em] text-text-muted",children:"Designed & built by Aiz"})]})]})}function mt(){const e=c.useRef(null),t=ae("(hover: hover) and (pointer: fine)"),[r,i]=c.useState(null),[o,a]=c.useState(!1),s=c.useRef({x:0,y:0}),l=c.useRef({x:0,y:0}),d=c.useRef(0),m=c.useRef(0);if(c.useEffect(()=>{if(!t)return;document.documentElement.classList.add("cursor-active");let u=!1;const f=()=>{u||(u=!0,N())},x=()=>{u=!1,cancelAnimationFrame(d.current)},N=()=>{l.current.x+=(s.current.x-l.current.x)*.15,l.current.y+=(s.current.y-l.current.y)*.15,e.current&&(e.current.style.transform=`translate3d(${l.current.x}px, ${l.current.y}px, 0) translate(-50%, -50%)`);const y=s.current.x-l.current.x,L=s.current.y-l.current.y,k=Math.abs(y)<.1&&Math.abs(L)<.1;u&&!k?d.current=requestAnimationFrame(N):u=!1},P=y=>{s.current={x:y.clientX,y:y.clientY},f(),clearTimeout(m.current),m.current=window.setTimeout(()=>{const L=y.target,k=L.closest("[data-cursor]");k?(a(!0),i(k.getAttribute("data-cursor")||"VIEW")):L.closest("a, button")?(a(!0),i(null)):(a(!1),i(null))},16)};return window.addEventListener("mousemove",P,{passive:!0}),()=>{window.removeEventListener("mousemove",P),x(),clearTimeout(m.current),document.documentElement.classList.remove("cursor-active")}},[t]),!t)return null;const p=o;return n.jsx("div",{ref:e,className:"pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center will-change-transform",style:{mixBlendMode:"difference"},children:n.jsx("div",{className:"flex items-center justify-center border border-neon-green bg-neon-green text-[9px] font-mono uppercase tracking-widest text-black transition-all duration-200",style:{width:p?r?88:48:8,height:p?r?88:48:8,backgroundColor:p?"transparent":"#39ff14",color:p?"#39ff14":"#000",borderRadius:"9999px"},children:r})})}const X="noraiz.dev";function pt(){const[e,t]=c.useState(!1),[r,i]=c.useState("");return c.useEffect(()=>{if(sessionStorage.getItem("preloader_done")){t(!0);return}let o=0;const a=setInterval(()=>{o++,i(X.slice(0,o)),o>=X.length&&clearInterval(a)},60),s=setTimeout(()=>{t(!0),sessionStorage.setItem("preloader_done","1")},1400);return()=>{clearInterval(a),clearTimeout(s)}},[]),n.jsx(V,{children:!e&&n.jsx(O.div,{className:"fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-bg",initial:{opacity:1},exit:{y:"-100%",transition:{duration:.5,ease:[.76,0,.24,1]}},children:n.jsxs("div",{className:"font-mono text-sm text-text-off md:text-base",children:[n.jsx("span",{className:"text-neon-green",children:"$ "}),r,n.jsx("span",{className:"animate-blink text-neon-green",children:"_"})]})})})}function ft(){const[e,t]=c.useState(0);return c.useEffect(()=>{let r=0;const i=()=>{const a=window.scrollY,s=document.documentElement.scrollHeight-window.innerHeight,l=s>0?a/s*100:0;t(l)},o=()=>{cancelAnimationFrame(r),r=requestAnimationFrame(i)};return window.addEventListener("scroll",o,{passive:!0}),i(),()=>{window.removeEventListener("scroll",o),cancelAnimationFrame(r)}},[]),e}function xt(){const e=ft();return n.jsx("div",{className:"fixed left-0 top-0 z-[60] h-[2px] w-full bg-transparent",children:n.jsx("div",{className:"h-full bg-neon-green transition-[width] duration-75 ease-linear",style:{width:`${e}%`}})})}function ht(){const e=oe();c.useEffect(()=>{if(e)return;const t=new ge({lerp:.12,duration:1.1,smoothWheel:!0,prevent:o=>o.closest("[data-lenis-prevent]")!==null});let r=0;function i(o){t.raf(o),r=requestAnimationFrame(i)}return r=requestAnimationFrame(i),()=>{cancelAnimationFrame(r),t.destroy()}},[e])}function gt({children:e}){return ht(),n.jsx(n.Fragment,{children:e})}function A({children:e}){return n.jsxs(n.Fragment,{children:[n.jsx(O.div,{className:"pointer-events-none fixed inset-0 z-[120] origin-top bg-neon-green",initial:{scaleY:1},animate:{scaleY:0},exit:{scaleY:1},transition:{duration:.5,ease:[.76,0,.24,1]}}),n.jsx(O.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.4,delay:.3},children:e})]})}const bt=c.lazy(()=>I(()=>import("./HomePage-ByL4h5y7.js"),__vite__mapDeps([0,1,2,3,4]))),yt=c.lazy(()=>I(()=>import("./WorkPage-BpqqIY4k.js"),__vite__mapDeps([5,1,2,6,3]))),vt=c.lazy(()=>I(()=>import("./WorkDetailPage-BjVzm-8C.js"),__vite__mapDeps([7,1,2,6,3]))),jt=c.lazy(()=>I(()=>import("./AboutPage-DY4cg-Xj.js"),__vite__mapDeps([8,1,2,9,10,3,11,12,13]))),wt=c.lazy(()=>I(()=>import("./BlogPage-pnqPUR_U.js"),__vite__mapDeps([14,1,2,3]))),Et=c.lazy(()=>I(()=>import("./ContactPage-CB1MiWSE.js"),__vite__mapDeps([15,1,2,3,4])));function Nt(){return n.jsx("div",{className:"flex min-h-screen items-center justify-center",children:n.jsx("span",{className:"animate-blink font-mono text-sm text-neon-green",children:"loading..."})})}function kt(){const e=Z();return n.jsxs(gt,{children:[n.jsx(pt,{}),n.jsx(mt,{}),n.jsx(xt,{}),n.jsx(dt,{}),n.jsx(it,{position:"bottom-right"}),n.jsx("main",{className:"min-h-screen pt-0",children:n.jsx(V,{mode:"wait",children:n.jsx(c.Suspense,{fallback:n.jsx(Nt,{}),children:n.jsxs(ce,{location:e,children:[n.jsx(_,{path:"/",element:n.jsx(A,{children:n.jsx(bt,{})})}),n.jsx(_,{path:"/work",element:n.jsx(A,{children:n.jsx(yt,{})})}),n.jsx(_,{path:"/work/:slug",element:n.jsx(A,{children:n.jsx(vt,{})})}),n.jsx(_,{path:"/about",element:n.jsx(A,{children:n.jsx(jt,{})})}),n.jsx(_,{path:"/blog",element:n.jsx(A,{children:n.jsx(wt,{})})}),n.jsx(_,{path:"/contact",element:n.jsx(A,{children:n.jsx(Et,{})})})]},e.pathname)})})}),n.jsx(ut,{})]})}M.createRoot(document.getElementById("root")).render(n.jsx(de.StrictMode,{children:n.jsx(ue,{children:n.jsx(kt,{})})}));export{K as E,ct as S,I as _,oe as u,Pt as z};
