var v=Object.defineProperty;var y=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var m=(t,a,e)=>a in t?v(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,p=(t,a)=>{for(var e in a||(a={}))w.call(a,e)&&m(t,e,a[e]);if(y)for(var e of y(a))T.call(a,e)&&m(t,e,a[e]);return t};import{L as g,T as B,r as C,_ as E,w as F}from"./index-86a09407.js";import{d as k,k as S,e as z,u as D,s as I,w as L,o as M,_ as P,$ as j,a1 as q,af as A}from"./vue-854c8149.js";const G={startVal:{type:Number,default:0},endVal:{type:Number,default:2021},duration:{type:Number,default:1500},autoplay:{type:Boolean,default:!0},decimals:{type:Number,default:0,validator(t){return t>=0}},prefix:{type:String,default:""},suffix:{type:String,default:""},separator:{type:String,default:","},decimal:{type:String,default:"."},color:{type:String},useEasing:{type:Boolean,default:!0},transition:{type:String,default:"linear"}},H=k({name:"CountTo",props:G,emits:["onStarted","onFinished"],setup(t,{emit:a}){const e=S(t.startVal),u=S(!1);let o=g(e);const d=z(()=>h(D(o)));I(()=>{e.value=t.startVal}),L([()=>t.startVal,()=>t.endVal],()=>{t.autoplay&&s()}),M(()=>{t.autoplay&&s()});function s(){f(),e.value=t.endVal}function x(){e.value=t.startVal,f()}function f(){o=g(e,p({disabled:u,duration:t.duration,onFinished:()=>a("onFinished"),onStarted:()=>a("onStarted")},t.useEasing?{transition:B[t.transition]}:{}))}function h(n){if(!n&&n!==0)return"";const{decimals:V,decimal:b,separator:i,suffix:_,prefix:N}=t;n=Number(n).toFixed(V),n+="";const l=n.split(".");let r=l[0];const $=l.length>1?b+l[1]:"",c=/(\d+)(\d{3})/;if(i&&!C(i))for(;c.test(r);)r=r.replace(c,"$1"+i+"$2");return N+r+$+_}return{value:d,start:s,reset:x}}});function J(t,a,e,u,o,d){return P(),j("span",{style:A({color:t.color})},q(t.value),5)}const K=E(H,[["render",J]]),U=F(K);export{U as C};
