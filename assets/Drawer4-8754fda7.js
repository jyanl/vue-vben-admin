import{B as p,a as m}from"./index-09a6b29e.js";import{B as c}from"./BasicForm-91e12f32.js";import"./componentMap-08b48c9e.js";import{u as l}from"./useForm-7204918d.js";import"./RadioButtonGroup-5e70dcae.js";import{d as f,a7 as s,_ as d,a8 as u,a9 as B,a0 as _,f as g,ac as w}from"./vue-854c8149.js";import{_ as F}from"./index-86a09407.js";import"./index-22ff2e7e.js";import"./index-f6651500.js";import"./antd-8c2f8f62.js";import"./FormItem.vue_vue_type_script_lang-7fcbd372.js";import"./uniqBy-2dfd8320.js";import"./index-213420fe.js";import"./useWindowSizeFn-ad54db37.js";import"./useFormItem-628730b1.js";import"./uuid-31b8b5a4.js";import"./download-5751944a.js";import"./base64Conver-39fc0d26.js";import"./index-4bab96ae.js";import"./IconPicker.vue_vue_type_style_index_0_lang-f95f2e05.js";import"./useCopyToClipboard-169d7c7a.js";import"./index-a7b532ab.js";const i=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}],h=f({components:{BasicDrawer:p,BasicForm:c},setup(){const[o,{setFieldsValue:r}]=l({labelWidth:120,schemas:i,showActionButtonGroup:!1,actionColOptions:{span:24}}),[t]=m(e=>{r({field2:e.data,field1:e.info})});return{register:t,schemas:i,registerForm:o}}});function D(o,r,t,e,$,C){const a=s("BasicForm"),n=s("BasicDrawer");return d(),u(n,w(o.$attrs,{onRegister:o.register,title:"Drawer Title",width:"50%"}),{default:B(()=>[_("div",null,[g(a,{onRegister:o.registerForm},null,8,["onRegister"])])]),_:1},16,["onRegister"])}const L=F(h,[["render",D]]);export{L as default};
