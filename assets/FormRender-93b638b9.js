import g from"./index-d1679ba0.js";import{d as C,a7 as t,_ as r,a8 as n,a9 as s,$ as a,F as p,aa as i,ae as y,R as $}from"./vue-854c8149.js";import{a9 as R,aa as k}from"./antd-8c2f8f62.js";import{_ as v}from"./index-86a09407.js";import"./formItemConfig-b9fb0206.js";import"./componentMap-08b48c9e.js";import"./useFormItem-628730b1.js";import"./RadioButtonGroup-5e70dcae.js";import"./index-213420fe.js";import"./index-22ff2e7e.js";import"./index-f6651500.js";import"./useWindowSizeFn-ad54db37.js";import"./uuid-31b8b5a4.js";import"./download-5751944a.js";import"./base64Conver-39fc0d26.js";import"./index-4bab96ae.js";import"./IconPicker.vue_vue_type_style_index_0_lang-f95f2e05.js";import"./useCopyToClipboard-169d7c7a.js";import"./index-a7b532ab.js";import"./index-c92844ee.js";import"./useFormDesignState-c29500c0.js";const D=C({name:"FormRender",components:{VFormItem:g,Row:R,Col:k},props:{formData:{type:Object,default:()=>({})},schema:{type:Object,default:()=>({})},formConfig:{type:Object,default:()=>[]},setFormModel:{type:Function,default:null}},emits:["change","submit","reset"],setup(o){}});function M(o,e,b,w,P,_){const l=t("FormRender",!0),f=t("Col"),d=t("Row"),u=t("VFormItem");return["Grid"].includes(o.schema.component)?(r(),n(d,{key:0,class:"grid-row"},{default:s(()=>[(r(!0),a(p,null,i(o.schema.columns,(m,c)=>(r(),n(f,{class:"grid-col",key:c,span:m.span},{default:s(()=>[(r(!0),a(p,null,i(m.children,(F,h)=>(r(),n(l,{key:h,schema:F,formData:o.formData,formConfig:o.formConfig,setFormModel:o.setFormModel},null,8,["schema","formData","formConfig","setFormModel"]))),128))]),_:2},1032,["span"]))),128))]),_:1})):(r(),n(u,{key:1,formConfig:o.formConfig,schema:o.schema,formData:o.formData,setFormModel:o.setFormModel,onChange:e[0]||(e[0]=m=>o.$emit("change",{schema:o.schema,value:m})),onSubmit:e[1]||(e[1]=m=>o.$emit("submit",o.schema)),onReset:e[2]||(e[2]=m=>o.$emit("reset"))},y({_:2},[o.schema.componentProps&&o.schema.componentProps.slotName?{name:o.schema.componentProps.slotName,fn:s(()=>[$(o.$slots,o.schema.componentProps.slotName)]),key:"0"}:void 0]),1032,["formConfig","schema","formData","setFormModel"]))}const Y=v(D,[["render",M]]);export{Y as default};
