var u=(t,s,e)=>new Promise((o,n)=>{var r=a=>{try{p(e.next(a))}catch(c){n(c)}},i=a=>{try{p(e.throw(a))}catch(c){n(c)}},p=a=>a.done?o(a.value):Promise.resolve(a.value).then(r,i);p((e=e.apply(t,s)).next())});import{u as d}from"./useScript-030d008c.js";import{d as f,k as l,o as m,q as h,u as w,_,$ as B,af as M}from"./vue-854c8149.js";import{_ as g}from"./index-86a09407.js";import"./antd-8c2f8f62.js";const y="https://api.map.baidu.com/getscript?v=3.0&ak=OaBvYmKX3pjF7YFUFeeBCeGdy9Zp7xB2&services=&t=20210201100830&s=1",k=f({name:"BaiduMap",props:{width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},setup(){const t=l(null),{toPromise:s}=d({src:y});function e(){return u(this,null,function*(){yield s(),yield h();const o=w(t);if(!o)return;const n=window.BMap,r=new n.Map(o),i=new n.Point(116.404,39.915);r.centerAndZoom(i,15),r.enableScrollWheelZoom(!0)})}return m(()=>{e()}),{wrapRef:t}}});function v(t,s,e,o,n,r){return _(),B("div",{ref:"wrapRef",style:M({height:t.height,width:t.width})},null,4)}const P=g(k,[["render",v]]);export{P as default};
