var h=Object.defineProperty,w=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var C=(e,o,t)=>o in e?h(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,M=(e,o)=>{for(var t in o||(o={}))k.call(o,t)&&C(e,t,o[t]);if(c)for(var t of c(o))V.call(o,t)&&C(e,t,o[t]);return e},v=(e,o)=>w(e,A(o));var b=(e,o,t)=>new Promise((p,m)=>{var u=n=>{try{r(t.next(n))}catch(i){m(i)}},s=n=>{try{r(t.throw(n))}catch(i){m(i)}},r=n=>n.done?p(n.value):Promise.resolve(n.value).then(u,s);r((t=t.apply(e,o)).next())});import g from"./index-2a67244b.js";import{a as D}from"./index-c92844ee.js";import O from"./JsonModal-289c47d5.js";import{d as S,k as U,r as $,H as y,a7 as f,_ as B,a8 as E,a9 as F,f as d}from"./vue-854c8149.js";import{O as J}from"./antd-8c2f8f62.js";import{_ as G}from"./index-86a09407.js";import"./FormRender-93b638b9.js";import"./index-d1679ba0.js";import"./formItemConfig-b9fb0206.js";import"./componentMap-08b48c9e.js";import"./useFormItem-628730b1.js";import"./RadioButtonGroup-5e70dcae.js";import"./index-213420fe.js";import"./index-22ff2e7e.js";import"./index-f6651500.js";import"./useWindowSizeFn-ad54db37.js";import"./uuid-31b8b5a4.js";import"./download-5751944a.js";import"./base64Conver-39fc0d26.js";import"./index-4bab96ae.js";import"./IconPicker.vue_vue_type_style_index_0_lang-f95f2e05.js";import"./useCopyToClipboard-169d7c7a.js";import"./index-a7b532ab.js";import"./useFormDesignState-c29500c0.js";import"./PreviewCode-71dcfa8f.js";import"./index-88ae40cc.js";const N=S({name:"VFormPreview",components:{JsonModal:O,VFormCreate:g,Modal:J},setup(){const e=U(null),o=$({formModel:{},formConfig:{},visible:!1,fApi:{}}),t=r=>{D(r.schemas),o.formConfig=r,o.visible=!0},p=()=>{o.visible=!1,o.formModel={}},m=()=>b(this,null,function*(){var n,i,a,l;const r=yield(i=(n=o.fApi).submit)==null?void 0:i.call(n);(l=(a=e.value)==null?void 0:a.showModal)==null||l.call(a,r)}),u=r=>{},s=()=>{o.formModel={}};return v(M({handleGetData:m,handleCancel:p},y(o)),{showModal:t,jsonModal:e,onSubmit:u,onCancel:s})}});function P(e,o,t,p,m,u){const s=f("a-input"),r=f("VFormCreate"),n=f("JsonModal"),i=f("Modal");return B(),E(i,{title:"预览(支持布局)",visible:e.visible,onOk:e.handleGetData,onCancel:e.handleCancel,okText:"获取数据",cancelText:"关闭",style:{top:"20px"},destroyOnClose:!0,width:900},{default:F(()=>[d(r,{"form-config":e.formConfig,fApi:e.fApi,"onUpdate:fApi":o[0]||(o[0]=a=>e.fApi=a),formModel:e.formModel,"onUpdate:formModel":o[1]||(o[1]=a=>e.formModel=a),onSubmit:e.onSubmit},{slotName:F(({formModel:a,field:l})=>[d(s,{value:a[l],"onUpdate:value":_=>a[l]=_,placeholder:"我是插槽传递的输入框"},null,8,["value","onUpdate:value"])]),_:1},8,["form-config","fApi","formModel","onSubmit"]),d(n,{ref:"jsonModal"},null,512)]),_:1},8,["visible","onOk","onCancel"])}const fo=G(N,[["render",P]]);export{fo as default};
