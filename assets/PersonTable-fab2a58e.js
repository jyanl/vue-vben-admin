import{B as h}from"./BasicTable-0aa620e3.js";import{T as C}from"./componentMap-08b48c9e.js";import"./TableImg.vue_vue_type_style_index_0_lang-5a0ff2a6.js";import{u as w}from"./useTable-8c8255ad.js";import{d as _,a7 as p,_ as c,$ as T,f as u,a9 as f,a8 as B,ab as E,E as N}from"./vue-854c8149.js";import{_ as g}from"./index-86a09407.js";import"./useFormItem-628730b1.js";import"./antd-8c2f8f62.js";import"./RadioButtonGroup-5e70dcae.js";import"./index-213420fe.js";import"./index-22ff2e7e.js";import"./index-f6651500.js";import"./useWindowSizeFn-ad54db37.js";import"./uuid-31b8b5a4.js";import"./download-5751944a.js";import"./base64Conver-39fc0d26.js";import"./index-4bab96ae.js";import"./IconPicker.vue_vue_type_style_index_0_lang-f95f2e05.js";import"./useCopyToClipboard-169d7c7a.js";import"./index-a7b532ab.js";import"./BasicForm-91e12f32.js";import"./FormItem.vue_vue_type_script_lang-7fcbd372.js";import"./uniqBy-2dfd8320.js";import"./useForm-7204918d.js";import"./onMountedOrActivated-1055dd3c.js";import"./sortable.esm-797f0398.js";const x=[{title:"成员姓名",dataIndex:"name",editRow:!0},{title:"工号",dataIndex:"no",editRow:!0},{title:"所属部门",dataIndex:"dept",editRow:!0}],y=[{name:"John Brown",no:"00001",dept:"New York No. 1 Lake Park"},{name:"John Brown2",no:"00002",dept:"New York No. 2 Lake Park"},{name:"John Brown3",no:"00003",dept:"New York No. 3Lake Park"}],A=_({components:{BasicTable:h,TableAction:C},setup(){const[n,{getDataSource:o}]=w({columns:x,showIndexColumn:!1,dataSource:y,actionColumn:{width:160,title:"操作",dataIndex:"action"},scroll:{y:"100%"},pagination:!1});function i(t){var e;(e=t.onEdit)==null||e.call(t,!0)}function m(t){var e;if((e=t.onEdit)==null||e.call(t,!1),t.isNew){const a=o(),b=a.findIndex(k=>k.key===t.key);a.splice(b,1)}}function d(t){var e;(e=t.onEdit)==null||e.call(t,!1,!0)}function r(t){}function l(){const t=o(),e={name:"",no:"",dept:"",editable:!0,isNew:!0,key:`${Date.now()}`};t.push(e)}function s(t,e){return t.editable?[{label:"保存",onClick:d.bind(null,t,e)},{label:"取消",popConfirm:{title:"是否取消编辑",confirm:m.bind(null,t,e)}}]:[{label:"编辑",onClick:i.bind(null,t)},{label:"删除"}]}return{registerTable:n,handleEdit:i,createActions:s,handleAdd:l,getDataSource:o,handleEditChange:r}}});function I(n,o,i,m,d,r){const l=p("TableAction"),s=p("BasicTable"),t=p("a-button");return c(),T("div",null,[u(s,{onRegister:n.registerTable,onEditChange:n.handleEditChange},{bodyCell:f(({column:e,record:a})=>[e.key==="action"?(c(),B(l,{key:0,actions:n.createActions(a,e)},null,8,["actions"])):E("",!0)]),_:1},8,["onRegister","onEditChange"]),u(t,{block:"",class:"mt-5",type:"dashed",onClick:n.handleAdd},{default:f(()=>[N(" 新增成员 ")]),_:1},8,["onClick"])])}const nt=g(A,[["render",I]]);export{nt as default};
