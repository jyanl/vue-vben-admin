var f=(e,l,t)=>new Promise((c,s)=>{var u=o=>{try{a(t.next(o))}catch(p){s(p)}},n=o=>{try{a(t.throw(o))}catch(p){s(p)}},a=o=>o.done?c(o.value):Promise.resolve(o.value).then(u,n);a((t=t.apply(e,l)).next())});import{B}from"./BasicForm-91e12f32.js";import"./componentMap-08b48c9e.js";import{u as b}from"./useForm-7204918d.js";import"./RadioButtonGroup-5e70dcae.js";import{C as P}from"./index-22ff2e7e.js";import{P as C}from"./index-c7bcd60b.js";import{d as _,a7 as d,_ as F,a8 as g,a9 as r,a0 as k,f as i,E as m}from"./vue-854c8149.js";import{_ as W}from"./index-86a09407.js";import"./FormItem.vue_vue_type_script_lang-7fcbd372.js";import"./antd-8c2f8f62.js";import"./uniqBy-2dfd8320.js";import"./index-213420fe.js";import"./useWindowSizeFn-ad54db37.js";import"./useFormItem-628730b1.js";import"./uuid-31b8b5a4.js";import"./download-5751944a.js";import"./base64Conver-39fc0d26.js";import"./index-4bab96ae.js";import"./IconPicker.vue_vue_type_style_index_0_lang-f95f2e05.js";import"./useCopyToClipboard-169d7c7a.js";import"./index-a7b532ab.js";import"./index-f6651500.js";import"./useContentViewHeight-8ce3895b.js";import"./onMountedOrActivated-1055dd3c.js";const h=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},show:({values:e})=>!!e.field5},{field:"field2",component:"Input",label:"字段2",colProps:{span:8},ifShow:({values:e})=>!!e.field6},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8},dynamicDisabled:({values:e})=>!!e.field7},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},dynamicRules:({values:e})=>e.field8?[{required:!0,message:"字段4必填"}]:[],componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field11",component:"DatePicker",label:"字段11",colProps:{span:8}},{field:"field5",component:"Switch",label:"是否显示字段1(css控制)",colProps:{span:8},labelWidth:200},{field:"field6",component:"Switch",label:"是否显示字段2(dom控制)",colProps:{span:8},labelWidth:200},{field:"field7",component:"Switch",label:"是否禁用字段3",colProps:{span:8},labelWidth:200},{field:"field8",component:"Switch",label:"字段4是否必填",colProps:{span:8},labelWidth:200}],w=[{field:"f1",component:"Input",label:"F1",colProps:{span:12},labelWidth:200,componentProps:({formModel:e})=>({placeholder:"同步f2的值为f1",onChange:l=>{e.f2=l.target.value}})},{field:"f2",component:"Input",label:"F2",colProps:{span:12},labelWidth:200,componentProps:{disabled:!0}},{field:"f3",component:"Input",label:"F3",colProps:{span:12},labelWidth:200,componentProps:({formActionType:e})=>({placeholder:"值改变时执行查询,查看控制台",onChange:()=>f(void 0,null,function*(){const{validate:l}=e;yield l()})})}],S=_({components:{BasicForm:B,CollapseContainer:P,PageWrapper:C},setup(){const[e,{setProps:l,updateSchema:t,appendSchemaByField:c,removeSchemaByField:s}]=b({labelWidth:120,schemas:h,actionColOptions:{span:24}}),[u]=b({labelWidth:120,schemas:w,actionColOptions:{span:24}});function n(){t({field:"field3",label:"字段3 New"})}function a(){t([{field:"field3",label:"字段3 New++"},{field:"field4",label:"字段4 New++"}])}function o(){c({field:"field10",label:"字段10",component:"Input",colProps:{span:8}},"field3")}function p(){s("field11")}return{register:e,register1:u,schemas:h,setProps:l,changeLabel3:n,changeLabel34:a,appendField:o,deleteField:p}}}),y={class:"mb-4"};function D(e,l,t,c,s,u){const n=d("a-button"),a=d("BasicForm"),o=d("CollapseContainer"),p=d("PageWrapper");return F(),g(p,{title:"动态表单示例"},{default:r(()=>[k("div",y,[i(n,{onClick:e.changeLabel3,class:"mr-2"},{default:r(()=>[m(" 更改字段3label ")]),_:1},8,["onClick"]),i(n,{onClick:e.changeLabel34,class:"mr-2"},{default:r(()=>[m(" 同时更改字段3,4label ")]),_:1},8,["onClick"]),i(n,{onClick:e.appendField,class:"mr-2"},{default:r(()=>[m(" 往字段3后面插入字段10 ")]),_:1},8,["onClick"]),i(n,{onClick:e.deleteField,class:"mr-2"},{default:r(()=>[m(" 删除字段11 ")]),_:1},8,["onClick"])]),i(o,{title:"动态表单示例,动态根据表单内其他值改变"},{default:r(()=>[i(a,{onRegister:e.register},null,8,["onRegister"])]),_:1}),i(o,{class:"mt-5",title:"componentProps动态改变"},{default:r(()=>[i(a,{onRegister:e.register1},null,8,["onRegister"])]),_:1})]),_:1})}const ee=W(S,[["render",D]]);export{ee as default};
