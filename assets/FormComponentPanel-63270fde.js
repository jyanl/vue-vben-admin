import{d as g}from"./vuedraggable.umd-945c1d08.js";import f from"./LayoutItem-55dbe7be.js";import{u as _}from"./useFormDesignState-c29500c0.js";import{ah as h,aQ as v,L as C}from"./antd-8c2f8f62.js";import{d as y,e as S,a7 as r,_ as F,$ as E,t as I,A as b,f as n,a9 as d,a0 as D,ad as A,ag as P}from"./vue-854c8149.js";import{_ as V}from"./index-86a09407.js";import"./FormNode-4d3b12c4.js";import"./FormNodeOperate-caa407b3.js";import"./index-c92844ee.js";import"./index-d1679ba0.js";import"./formItemConfig-b9fb0206.js";import"./componentMap-08b48c9e.js";import"./useFormItem-628730b1.js";import"./RadioButtonGroup-5e70dcae.js";import"./index-213420fe.js";import"./index-22ff2e7e.js";import"./index-f6651500.js";import"./useWindowSizeFn-ad54db37.js";import"./uuid-31b8b5a4.js";import"./download-5751944a.js";import"./base64Conver-39fc0d26.js";import"./index-4bab96ae.js";import"./IconPicker.vue_vue_type_style_index_0_lang-f95f2e05.js";import"./useCopyToClipboard-169d7c7a.js";import"./index-a7b532ab.js";const $=y({name:"FormComponentPanel",components:{LayoutItem:f,draggable:g,Form:h,Empty:v},emits:["handleSetSelectItem"],setup(o,{emit:a}){const{formConfig:e}=_(),i=({newIndex:t})=>{e.value.schemas=e.value.schemas||[];const m=e.value.schemas;m[t]=C(m[t]),a("handleSetSelectItem",m[t])},p=t=>{a("handleSetSelectItem",e.value.schemas[t.oldIndex])},l=S(()=>e.value.layout==="horizontal"?"Col":"div");return{addItem:i,handleDragStart:p,formConfig:e,layoutTag:l}}});const k={class:"form-panel v-form-container"},B={class:"draggable-box"};function L(o,a,e,i,p,l){const t=r("Empty"),m=r("LayoutItem"),c=r("draggable"),u=r("Form");return F(),E("div",k,[I(n(t,{class:"empty-text",description:"从左侧选择控件添加"},null,512),[[b,o.formConfig.schemas.length===0]]),n(u,A(P(o.formConfig)),{default:d(()=>[D("div",B,[n(c,{class:"list-main ant-row",group:"form-draggable","component-data":{name:"list",tag:"div",type:"transition-group"},ghostClass:"moving",animation:180,handle:".drag-move",modelValue:o.formConfig.schemas,"onUpdate:modelValue":a[0]||(a[0]=s=>o.formConfig.schemas=s),"item-key":"key",onAdd:o.addItem,onStart:o.handleDragStart},{item:d(({element:s})=>[n(m,{class:"drag-move",schema:s,data:o.formConfig,"current-item":o.formConfig.currentItem||{}},null,8,["schema","data","current-item"])]),_:1},8,["modelValue","onAdd","onStart"])])]),_:1},16)])}const ro=V($,[["render",L],["__scopeId","data-v-513265b0"]]);export{ro as default};
