import{B as c}from"./BasicTable-0aa620e3.js";import"./componentMap-08b48c9e.js";import"./TableImg.vue_vue_type_style_index_0_lang-5a0ff2a6.js";import"./index-3b26994d.js";import{c as l,d,b as f,e as _,f as t,g as a}from"./data-24fb778d.js";import{P as h}from"./index-c7bcd60b.js";import{d as C,a7 as r,_ as F,a8 as x,a9 as o,f as p,E as u}from"./vue-854c8149.js";import{_ as B}from"./index-86a09407.js";import"./useFormItem-628730b1.js";import"./antd-8c2f8f62.js";import"./RadioButtonGroup-5e70dcae.js";import"./index-213420fe.js";import"./index-22ff2e7e.js";import"./index-f6651500.js";import"./useWindowSizeFn-ad54db37.js";import"./uuid-31b8b5a4.js";import"./download-5751944a.js";import"./base64Conver-39fc0d26.js";import"./index-4bab96ae.js";import"./IconPicker.vue_vue_type_style_index_0_lang-f95f2e05.js";import"./useCopyToClipboard-169d7c7a.js";import"./index-a7b532ab.js";import"./BasicForm-91e12f32.js";import"./FormItem.vue_vue_type_script_lang-7fcbd372.js";import"./uniqBy-2dfd8320.js";import"./useForm-7204918d.js";import"./onMountedOrActivated-1055dd3c.js";import"./sortable.esm-797f0398.js";import"./useContentViewHeight-8ce3895b.js";const S=C({components:{BasicTable:c,PageWrapper:h},setup(){function e(){f({data:t,header:a,filename:"二维数组方式导出excel.xlsx"})}function i(){_({sheetList:[{data:t,header:a,sheetName:"Sheet1"},{data:t,header:a,sheetName:"Sheet2"}],filename:"二维数组方式导出excel-多Sheet示例.xlsx"})}return{aoaToExcel:e,aoaToMultipleSheet:i,columns:l,data:d}}});function T(e,i,A,b,E,k){const m=r("a-button"),n=r("BasicTable"),s=r("PageWrapper");return F(),x(s,{title:"导出示例",content:"根据数组格式的数据进行导出"},{default:o(()=>[p(n,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:o(()=>[p(m,{onClick:e.aoaToExcel},{default:o(()=>[u(" 导出 ")]),_:1},8,["onClick"]),p(m,{onClick:e.aoaToMultipleSheet,danger:""},{default:o(()=>[u(" 导出多Sheet ")]),_:1},8,["onClick"])]),_:1},8,["columns","dataSource"])]),_:1})}const te=B(S,[["render",T]]);export{te as default};
