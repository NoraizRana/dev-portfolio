const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomePage-BBOi7xwR.js","assets/vendor-motion-tsJO4J3R.js","assets/vendor-react-Ci1EZuaO.js","assets/vendor-ui-DQOWJHt1.js","assets/vendor-lenis-8VXe07GT.js","assets/WorkPage-CdVq7kx6.js","assets/projects-DobhMfvD.js","assets/WorkDetailPage-BCFef-_U.js","assets/AboutPage-23nAr3YI.js","assets/About-CO9malIP.js","assets/SectionHeader-DqQ7beMb.js","assets/Experience-4KRaAZ0s.js","assets/experience-B514twYd.js","assets/Education-CHSVHUM7.js","assets/BlogPage-Blv5TDXz.js","assets/ContactPage-gItP1MdM.js","assets/Contact-Bx7jwaSB.js","assets/vendor-forms-VthWDbdP.js"])))=>i.map(i=>d[i]);
import{j as a,A as V,m as O}from"./vendor-motion-tsJO4J3R.js";import{a as ne,r as c,u as oe,L as F,c as ae,d as ie,e as L,b as le,B as ce}from"./vendor-react-Ci1EZuaO.js";import{I as de,a as ue}from"./vendor-ui-DQOWJHt1.js";import{L as me}from"./vendor-lenis-8VXe07GT.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}})();var M={},U=ne;M.createRoot=U.createRoot,M.hydrateRoot=U.hydrateRoot;const pe="modulepreload",fe=function(e){return"/"+e},W={},P=function(t,r,o){let n=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),l=s?.nonce||s?.getAttribute("nonce");n=Promise.allSettled(r.map(d=>{if(d=fe(d),d in W)return;W[d]=!0;const m=d.endsWith(".css"),p=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${p}`))return;const u=document.createElement("link");if(u.rel=m?"stylesheet":pe,m||(u.as="script"),u.crossOrigin="",u.href=d,l&&u.setAttribute("nonce",l),document.head.appendChild(u),m)return new Promise((f,x)=>{u.addEventListener("load",f),u.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(s){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s}return n.then(s=>{for(const l of s||[])l.status==="rejected"&&i(l.reason);return t().catch(i)})};let xe={data:""},he=e=>{if(typeof window=="object"){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||xe},ge=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,ye=/\/\*[^]*?\*\/|  +/g,Y=/\n+/g,w=(e,t)=>{let r="",o="",n="";for(let i in e){let s=e[i];i[0]=="@"?i[1]=="i"?r=i+" "+s+";":o+=i[1]=="f"?w(s,i):i+"{"+w(s,i[1]=="k"?"":t)+"}":typeof s=="object"?o+=w(s,t?t.replace(/([^,])+/g,l=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,d=>/&/.test(d)?d.replace(/&/g,l):l?l+" "+d:d)):i):s!=null&&(i=i[1]=="-"?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=w.p?w.p(i,s):i+":"+s+";")}return r+(t&&n?t+"{"+n+"}":n)+o},j={},Z=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+Z(e[r]);return t}return e},be=(e,t,r,o,n)=>{let i=Z(e),s=j[i]||(j[i]=(d=>{let m=0,p=11;for(;m<d.length;)p=101*p+d.charCodeAt(m++)>>>0;return"go"+p})(i));if(!j[s]){let d=i!==e?e:(m=>{let p,u,f=[{}];for(;p=ge.exec(m.replace(ye,""));)p[4]?f.shift():p[3]?(u=p[3].replace(Y," ").trim(),f.unshift(f[0][u]=f[0][u]||{})):f[0][p[1]]=p[2].replace(Y," ").trim();return f[0]})(e);j[s]=w(n?{["@keyframes "+s]:d}:d,r?"":"."+s)}let l=r&&j.g;return r&&(j.g=j[s]),((d,m,p,u)=>{u?m.data=m.data.replace(u,d):m.data.indexOf(d)===-1&&(m.data=p?d+m.data:m.data+d)})(j[s],t,o,l),s},ve=(e,t,r)=>e.reduce((o,n,i)=>{let s=t[i];if(s&&s.call){let l=s(r),d=l&&l.props&&l.props.className||/^go/.test(l)&&l;s=d?"."+d:l&&typeof l=="object"?l.props?"":w(l,""):l===!1?"":l}return o+n+(s??"")},"");function T(e){let t=this||{},r=e.call?e(t.p):e;return be(r.unshift?r.raw?ve(r,[].slice.call(arguments,1),t.p):r.reduce((o,n)=>Object.assign(o,n&&n.call?n(t.p):n),{}):r,he(t.target),t.g,t.o,t.k)}let Q,H,B;T.bind({g:1});let v=T.bind({k:1});function je(e,t,r,o){w.p=t,Q=e,H=r,B=o}function E(e,t){let r=this||{};return function(){let o=arguments;function n(i,s){let l=Object.assign({},i),d=l.className||n.className;r.p=Object.assign({theme:H&&H()},l),r.o=/go\d/.test(d),l.className=T.apply(r,o)+(d?" "+d:"");let m=e;return e[0]&&(m=l.as||e,delete l.as),B&&m[0]&&B(l),Q(m,l)}return n}}var we=e=>typeof e=="function",S=(e,t)=>we(e)?e(t):e,Ee=(()=>{let e=0;return()=>(++e).toString()})(),G=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),Ne=20,q="default",J=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(s=>s.id===t.toast.id?{...s,...t.toast}:s)};case 2:let{toast:o}=t;return J(e,{type:e.toasts.find(s=>s.id===o.id)?1:0,toast:o});case 3:let{toastId:n}=t;return{...e,toasts:e.toasts.map(s=>s.id===n||n===void 0?{...s,dismissed:!0,visible:!1}:s)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(s=>s.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+i}))}}},C=[],ee={toasts:[],pausedAt:void 0,settings:{toastLimit:Ne}},y={},te=(e,t=q)=>{y[t]=J(y[t]||ee,e),C.forEach(([r,o])=>{r===t&&o(y[t])})},re=e=>Object.keys(y).forEach(t=>te(e,t)),_e=e=>Object.keys(y).find(t=>y[t].toasts.some(r=>r.id===e)),z=(e=q)=>t=>{te(t,e)},ke={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Le=(e={},t=q)=>{let[r,o]=c.useState(y[t]||ee),n=c.useRef(y[t]);c.useEffect(()=>(n.current!==y[t]&&o(y[t]),C.push([t,o]),()=>{let s=C.findIndex(([l])=>l===t);s>-1&&C.splice(s,1)}),[t]);let i=r.toasts.map(s=>{var l,d,m;return{...e,...e[s.type],...s,removeDelay:s.removeDelay||((l=e[s.type])==null?void 0:l.removeDelay)||e?.removeDelay,duration:s.duration||((d=e[s.type])==null?void 0:d.duration)||e?.duration||ke[s.type],style:{...e.style,...(m=e[s.type])==null?void 0:m.style,...s.style}}});return{...r,toasts:i}},Ae=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:r?.id||Ee()}),I=e=>(t,r)=>{let o=Ae(t,e,r);return z(o.toasterId||_e(o.id))({type:2,toast:o}),o.id},h=(e,t)=>I("blank")(e,t);h.error=I("error");h.success=I("success");h.loading=I("loading");h.custom=I("custom");h.dismiss=(e,t)=>{let r={type:3,toastId:e};t?z(t)(r):re(r)};h.dismissAll=e=>h.dismiss(void 0,e);h.remove=(e,t)=>{let r={type:4,toastId:e};t?z(t)(r):re(r)};h.removeAll=e=>h.remove(void 0,e);h.promise=(e,t,r)=>{let o=h.loading(t.loading,{...r,...r?.loading});return typeof e=="function"&&(e=e()),e.then(n=>{let i=t.success?S(t.success,n):void 0;return i?h.success(i,{id:o,...r,...r?.success}):h.dismiss(o),n}).catch(n=>{let i=t.error?S(t.error,n):void 0;i?h.error(i,{id:o,...r,...r?.error}):h.dismiss(o)}),e};var Pe=1e3,Re=(e,t="default")=>{let{toasts:r,pausedAt:o}=Le(e,t),n=c.useRef(new Map).current,i=c.useCallback((u,f=Pe)=>{if(n.has(u))return;let x=setTimeout(()=>{n.delete(u),s({type:4,toastId:u})},f);n.set(u,x)},[]);c.useEffect(()=>{if(o)return;let u=Date.now(),f=r.map(x=>{if(x.duration===1/0)return;let N=(x.duration||0)+x.pauseDuration-(u-x.createdAt);if(N<0){x.visible&&h.dismiss(x.id);return}return setTimeout(()=>h.dismiss(x.id,t),N)});return()=>{f.forEach(x=>x&&clearTimeout(x))}},[r,o,t]);let s=c.useCallback(z(t),[t]),l=c.useCallback(()=>{s({type:5,time:Date.now()})},[s]),d=c.useCallback((u,f)=>{s({type:1,toast:{id:u,height:f}})},[s]),m=c.useCallback(()=>{o&&s({type:6,time:Date.now()})},[o,s]),p=c.useCallback((u,f)=>{let{reverseOrder:x=!1,gutter:N=8,defaultPosition:R}=f||{},b=r.filter(g=>(g.position||R)===(u.position||R)&&g.height),k=b.findIndex(g=>g.id===u.id),_=b.filter((g,D)=>D<k&&g.visible).length;return b.filter(g=>g.visible).slice(...x?[_+1]:[0,_]).reduce((g,D)=>g+(D.height||0)+N,0)},[r]);return c.useEffect(()=>{r.forEach(u=>{if(u.dismissed)i(u.id,u.removeDelay);else{let f=n.get(u.id);f&&(clearTimeout(f),n.delete(u.id))}})},[r,i]),{toasts:r,handlers:{updateHeight:d,startPause:l,endPause:m,calculateOffset:p}}},Oe=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Ie=v`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,$e=v`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Ce=E("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Oe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Ie} 0.15s ease-out forwards;
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
    animation: ${$e} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Se=v`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Te=E("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Se} 1s linear infinite;
`,ze=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,De=v`
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
}`,Fe=E("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ze} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${De} 0.2s ease-out forwards;
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
`,Me=E("div")`
  position: absolute;
`,He=E("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Be=v`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ve=E("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Be} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,qe=({toast:e})=>{let{icon:t,type:r,iconTheme:o}=e;return t!==void 0?typeof t=="string"?c.createElement(Ve,null,t):t:r==="blank"?null:c.createElement(He,null,c.createElement(Te,{...o}),r!=="loading"&&c.createElement(Me,null,r==="error"?c.createElement(Ce,{...o}):c.createElement(Fe,{...o})))},Ue=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,We=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Ye="0%{opacity:0;} 100%{opacity:1;}",Ke="0%{opacity:1;} 100%{opacity:0;}",Xe=E("div")`
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
`,Ze=E("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Qe=(e,t)=>{let r=e.includes("top")?1:-1,[o,n]=G()?[Ye,Ke]:[Ue(r),We(r)];return{animation:t?`${v(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${v(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Ge=c.memo(({toast:e,position:t,style:r,children:o})=>{let n=e.height?Qe(e.position||t||"top-center",e.visible):{opacity:0},i=c.createElement(qe,{toast:e}),s=c.createElement(Ze,{...e.ariaProps},S(e.message,e));return c.createElement(Xe,{className:e.className,style:{...n,...r,...e.style}},typeof o=="function"?o({icon:i,message:s}):c.createElement(c.Fragment,null,i,s))});je(c.createElement);var Je=({id:e,className:t,style:r,onHeightUpdate:o,children:n})=>{let i=c.useCallback(s=>{if(s){let l=()=>{let d=s.getBoundingClientRect().height;o(e,d)};l(),new MutationObserver(l).observe(s,{subtree:!0,childList:!0,characterData:!0})}},[e,o]);return c.createElement("div",{ref:i,className:t,style:r},n)},et=(e,t)=>{let r=e.includes("top"),o=r?{top:0}:{bottom:0},n=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:G()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...o,...n}},tt=T`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,$=16,rt=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:o,children:n,toasterId:i,containerStyle:s,containerClassName:l})=>{let{toasts:d,handlers:m}=Re(r,i);return c.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:$,left:$,right:$,bottom:$,pointerEvents:"none",...s},className:l,onMouseEnter:m.startPause,onMouseLeave:m.endPause},d.map(p=>{let u=p.position||t,f=m.calculateOffset(p,{reverseOrder:e,gutter:o,defaultPosition:t}),x=et(u,f);return c.createElement(Je,{id:p.id,key:p.id,onHeightUpdate:m.updateHeight,className:p.visible?tt:"",style:x},p.type==="custom"?S(p.message,p):n?n(p):c.createElement(Ge,{toast:p,position:u}))}))},Nt=h;const K=[{label:"ABOUT",to:"/about"},{label:"WORK",to:"/work"},{label:"BLOG",to:"/blog"},{label:"CONTACT",to:"/contact"}];function st(){const[e,t]=c.useState(!1),r=oe();return a.jsxs("header",{className:"fixed left-0 top-0 z-50 w-full border-b border-line bg-[rgba(10,10,10,0.95)] backdrop-blur-md",children:[a.jsxs("nav",{className:"flex items-center justify-between px-[6%] py-4",children:[a.jsxs(F,{to:"/",className:"flex items-center gap-1","aria-label":"Home",children:[a.jsx("span",{className:"font-display text-xl tracking-wide text-text-white",children:"NR"}),a.jsx("span",{className:"animate-blink font-display text-xl text-neon-green",children:"_"})]}),a.jsxs("div",{className:"hidden items-center gap-8 md:flex",children:[K.map(o=>a.jsxs(F,{to:o.to,className:"group relative font-mono text-[11px] uppercase tracking-[0.15em] text-text-off transition-colors hover:text-text-white",children:[o.label,a.jsx("span",{className:"absolute -bottom-1 left-0 h-px w-0 bg-neon-green transition-all duration-300 group-hover:w-full"})]},o.to)),a.jsx("button",{onClick:()=>r("/contact"),className:"border border-neon-green bg-transparent px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em] text-neon-green transition-colors duration-100 hover:bg-neon-green hover:text-black",children:"HIRE ME"})]}),a.jsx("button",{className:"text-text-white md:hidden",onClick:()=>t(!0),"aria-label":"Open menu",children:a.jsx(de,{size:28})})]}),a.jsx(V,{children:e&&a.jsxs(O.div,{className:"fixed inset-0 z-[80] flex flex-col bg-bg md:hidden",initial:{x:"100%"},animate:{x:0},exit:{x:"100%"},transition:{duration:.4,ease:[.76,0,.24,1]},children:[a.jsxs("div",{className:"flex items-center justify-between px-[6%] py-4",children:[a.jsx("span",{className:"font-display text-xl text-text-white",children:"NR_"}),a.jsx("button",{onClick:()=>t(!1),"aria-label":"Close menu",className:"text-text-white",children:a.jsx(ue,{size:28})})]}),a.jsx("div",{className:"flex flex-1 flex-col justify-center gap-2 px-[6%]",children:K.map((o,n)=>a.jsx(O.div,{initial:{opacity:0,x:40},animate:{opacity:1,x:0},transition:{delay:.1+n*.08},children:a.jsx(F,{to:o.to,onClick:()=>t(!1),className:"font-display text-5xl uppercase text-text-white transition-colors hover:text-neon-green",children:o.label})},o.to))})]})})]})}function nt(){return a.jsxs("footer",{className:"border-t border-line bg-bg px-[6%] py-10",children:[a.jsx("div",{className:"mb-6 h-px w-full bg-neon-green opacity-40"}),a.jsxs("div",{className:"flex flex-col items-start justify-between gap-4 md:flex-row md:items-center",children:[a.jsxs("div",{className:"flex items-baseline gap-3",children:[a.jsx("span",{className:"font-display text-2xl text-text-white",children:"NORAIZ RANA"}),a.jsx("span",{className:"font-mono text-xs text-text-muted",children:"2025"})]}),a.jsx("p",{className:"font-mono text-[11px] uppercase tracking-[0.15em] text-text-muted",children:"Designed & built by Noraiz Rana"})]})]})}function se(e){const[t,r]=c.useState(!1);return c.useEffect(()=>{const o=window.matchMedia(e),n=()=>r(o.matches);return n(),o.addEventListener("change",n),()=>o.removeEventListener("change",n)},[e]),t}function ot(){return se("(prefers-reduced-motion: reduce)")}function at(){const e=c.useRef(null),t=se("(hover: hover) and (pointer: fine)"),[r,o]=c.useState(null),[n,i]=c.useState(!1),s=c.useRef({x:0,y:0}),l=c.useRef({x:0,y:0}),d=c.useRef(0),m=c.useRef(0);if(c.useEffect(()=>{if(!t)return;document.documentElement.classList.add("cursor-active");let u=!1;const f=()=>{u||(u=!0,N())},x=()=>{u=!1,cancelAnimationFrame(d.current)},N=()=>{l.current.x+=(s.current.x-l.current.x)*.15,l.current.y+=(s.current.y-l.current.y)*.15,e.current&&(e.current.style.transform=`translate3d(${l.current.x}px, ${l.current.y}px, 0) translate(-50%, -50%)`);const b=s.current.x-l.current.x,k=s.current.y-l.current.y,_=Math.abs(b)<.1&&Math.abs(k)<.1;u&&!_?d.current=requestAnimationFrame(N):u=!1},R=b=>{s.current={x:b.clientX,y:b.clientY},f(),clearTimeout(m.current),m.current=window.setTimeout(()=>{const k=b.target,_=k.closest("[data-cursor]");_?(i(!0),o(_.getAttribute("data-cursor")||"VIEW")):k.closest("a, button")?(i(!0),o(null)):(i(!1),o(null))},16)};return window.addEventListener("mousemove",R,{passive:!0}),()=>{window.removeEventListener("mousemove",R),x(),clearTimeout(m.current),document.documentElement.classList.remove("cursor-active")}},[t]),!t)return null;const p=n;return a.jsx("div",{ref:e,className:"pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center will-change-transform",style:{mixBlendMode:"difference"},children:a.jsx("div",{className:"flex items-center justify-center border border-neon-green bg-neon-green text-[9px] font-mono uppercase tracking-widest text-black transition-all duration-200",style:{width:p?r?88:48:8,height:p?r?88:48:8,backgroundColor:p?"transparent":"#39ff14",color:p?"#39ff14":"#000",borderRadius:"9999px"},children:r})})}const X="noraiz.dev";function it(){const[e,t]=c.useState(!1),[r,o]=c.useState("");return c.useEffect(()=>{if(sessionStorage.getItem("preloader_done")){t(!0);return}let n=0;const i=setInterval(()=>{n++,o(X.slice(0,n)),n>=X.length&&clearInterval(i)},60),s=setTimeout(()=>{t(!0),sessionStorage.setItem("preloader_done","1")},1400);return()=>{clearInterval(i),clearTimeout(s)}},[]),a.jsx(V,{children:!e&&a.jsx(O.div,{className:"fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-bg",initial:{opacity:1},exit:{y:"-100%",transition:{duration:.5,ease:[.76,0,.24,1]}},children:a.jsxs("div",{className:"font-mono text-sm text-text-off md:text-base",children:[a.jsx("span",{className:"text-neon-green",children:"$ "}),r,a.jsx("span",{className:"animate-blink text-neon-green",children:"_"})]})})})}function lt(){const[e,t]=c.useState(0);return c.useEffect(()=>{let r=0;const o=()=>{const i=window.scrollY,s=document.documentElement.scrollHeight-window.innerHeight,l=s>0?i/s*100:0;t(l)},n=()=>{cancelAnimationFrame(r),r=requestAnimationFrame(o)};return window.addEventListener("scroll",n,{passive:!0}),o(),()=>{window.removeEventListener("scroll",n),cancelAnimationFrame(r)}},[]),e}function ct(){const e=lt();return a.jsx("div",{className:"fixed left-0 top-0 z-[60] h-[2px] w-full bg-transparent",children:a.jsx("div",{className:"h-full bg-neon-green transition-[width] duration-75 ease-linear",style:{width:`${e}%`}})})}function dt(){const e=ot();c.useEffect(()=>{if(e)return;const t=new me({lerp:.12,duration:1.1,smoothWheel:!0,prevent:n=>n.closest("[data-lenis-prevent]")!==null});let r=0;function o(n){t.raf(n),r=requestAnimationFrame(o)}return r=requestAnimationFrame(o),()=>{cancelAnimationFrame(r),t.destroy()}},[e])}function ut({children:e}){return dt(),a.jsx(a.Fragment,{children:e})}function A({children:e}){return a.jsxs(a.Fragment,{children:[a.jsx(O.div,{className:"pointer-events-none fixed inset-0 z-[120] origin-top bg-neon-green",initial:{scaleY:1},animate:{scaleY:0},exit:{scaleY:1},transition:{duration:.5,ease:[.76,0,.24,1]}}),a.jsx(O.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.4,delay:.3},children:e})]})}const mt=c.lazy(()=>P(()=>import("./HomePage-BBOi7xwR.js"),__vite__mapDeps([0,1,2,3,4]))),pt=c.lazy(()=>P(()=>import("./WorkPage-CdVq7kx6.js"),__vite__mapDeps([5,1,2,6,3]))),ft=c.lazy(()=>P(()=>import("./WorkDetailPage-BCFef-_U.js"),__vite__mapDeps([7,1,2,6,3]))),xt=c.lazy(()=>P(()=>import("./AboutPage-23nAr3YI.js"),__vite__mapDeps([8,1,2,9,10,3,11,12,13]))),ht=c.lazy(()=>P(()=>import("./BlogPage-Blv5TDXz.js"),__vite__mapDeps([14,1,2,3]))),gt=c.lazy(()=>P(()=>import("./ContactPage-gItP1MdM.js"),__vite__mapDeps([15,1,2,16,17,3,4])));function yt(){return a.jsx("div",{className:"flex min-h-screen items-center justify-center",children:a.jsx("span",{className:"animate-blink font-mono text-sm text-neon-green",children:"loading..."})})}function bt(){const e=ae();return a.jsxs(ut,{children:[a.jsx(it,{}),a.jsx(at,{}),a.jsx(ct,{}),a.jsx(st,{}),a.jsx(rt,{position:"bottom-right"}),a.jsx("main",{className:"min-h-screen pt-0",children:a.jsx(V,{mode:"wait",children:a.jsx(c.Suspense,{fallback:a.jsx(yt,{}),children:a.jsxs(ie,{location:e,children:[a.jsx(L,{path:"/",element:a.jsx(A,{children:a.jsx(mt,{})})}),a.jsx(L,{path:"/work",element:a.jsx(A,{children:a.jsx(pt,{})})}),a.jsx(L,{path:"/work/:slug",element:a.jsx(A,{children:a.jsx(ft,{})})}),a.jsx(L,{path:"/about",element:a.jsx(A,{children:a.jsx(xt,{})})}),a.jsx(L,{path:"/blog",element:a.jsx(A,{children:a.jsx(ht,{})})}),a.jsx(L,{path:"/contact",element:a.jsx(A,{children:a.jsx(gt,{})})})]},e.pathname)})})}),a.jsx(nt,{})]})}M.createRoot(document.getElementById("root")).render(a.jsx(le.StrictMode,{children:a.jsx(ce,{children:a.jsx(bt,{})})}));export{P as _,ot as u,Nt as z};
