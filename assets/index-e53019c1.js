import{B as b}from"./BasicTable-0aa620e3.js";import{T as C}from"./componentMap-08b48c9e.js";import"./TableImg.vue_vue_type_style_index_0_lang-5a0ff2a6.js";import{u as T}from"./useTable-8c8255ad.js";import{d as g}from"./system-3f278e0b.js";import{u as _}from"./index-09a6b29e.js";import{M as w,c as S,s as D}from"./MenuDrawer-8a3515af.js";import{d as k,q as B,a7 as o,_ as h,$ as F,f as c,a9 as l,E as M,a8 as y,ab as E}from"./vue-854c8149.js";import{_ as A}from"./index-86a09407.js";import"./useFormItem-628730b1.js";import"./antd-8c2f8f62.js";import"./RadioButtonGroup-5e70dcae.js";import"./index-213420fe.js";import"./index-22ff2e7e.js";import"./index-f6651500.js";import"./useWindowSizeFn-ad54db37.js";import"./uuid-31b8b5a4.js";import"./download-5751944a.js";import"./base64Conver-39fc0d26.js";import"./index-4bab96ae.js";import"./IconPicker.vue_vue_type_style_index_0_lang-f95f2e05.js";import"./useCopyToClipboard-169d7c7a.js";import"./index-a7b532ab.js";import"./BasicForm-91e12f32.js";import"./FormItem.vue_vue_type_script_lang-7fcbd372.js";import"./uniqBy-2dfd8320.js";import"./useForm-7204918d.js";import"./onMountedOrActivated-1055dd3c.js";import"./sortable.esm-797f0398.js";const R=k({name:"MenuManagement",components:{BasicTable:b,MenuDrawer:w,TableAction:C},setup(){const[e,{openDrawer:n}]=_(),[m,{reload:u,expandAll:p}]=T({title:"菜单列表",api:g,columns:S,formConfig:{labelWidth:120,schemas:D},isTreeTable:!0,pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",fixed:void 0}});function d(){n(!0,{isUpdate:!1})}function r(t){n(!0,{record:t,isUpdate:!0})}function a(t){}function i(){u()}function s(){B(p)}return{registerTable:m,registerDrawer:e,handleCreate:d,handleEdit:r,handleDelete:a,handleSuccess:i,onFetchSuccess:s}}});function $(e,n,m,u,p,d){const r=o("a-button"),a=o("TableAction"),i=o("BasicTable"),s=o("MenuDrawer");return h(),F("div",null,[c(i,{onRegister:e.registerTable,onFetchSuccess:e.onFetchSuccess},{toolbar:l(()=>[c(r,{type:"primary",onClick:e.handleCreate},{default:l(()=>[M(" 新增菜单 ")]),_:1},8,["onClick"])]),bodyCell:l(({column:t,record:f})=>[t.key==="action"?(h(),y(a,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,f)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",placement:"left",confirm:e.handleDelete.bind(null,f)}}]},null,8,["actions"])):E("",!0)]),_:1},8,["onRegister","onFetchSuccess"]),c(s,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}const ce=A(R,[["render",$]]);export{ce as default};
