import B from"./CurrentPermissionMode-37ed3a2f.js";import{a2 as v,k as P,aN as F,_ as T}from"./index-86a09407.js";import{A as g}from"./index-33904115.js";import{P as h}from"./index-c7bcd60b.js";import{d as U,e as D,a7 as a,v as k,_ as r,a8 as n,a9 as e,f as o,a0 as d,E as s,a1 as c,ab as f,t as C}from"./vue-854c8149.js";import{ag as $,ad as N,aj as V}from"./antd-8c2f8f62.js";import"./useContentViewHeight-8ce3895b.js";import"./useWindowSizeFn-ad54db37.js";import"./onMountedOrActivated-1055dd3c.js";const b=U({components:{Alert:$,PageWrapper:h,Space:N,CurrentPermissionMode:B,Divider:V,Authority:g},setup(){const{changeRole:u,hasPermission:l}=v(),E=P();return{userStore:E,RoleEnum:F,isSuper:D(()=>E.getRoleList.includes(F.SUPER)),isTest:D(()=>E.getRoleList.includes(F.TEST)),changeRole:u,hasPermission:l}}});const w={class:"mt-4"};function L(u,l,E,M,W,j){const R=a("CurrentPermissionMode"),_=a("Alert"),t=a("a-button"),A=a("Space"),i=a("Divider"),m=a("Authority"),S=a("PageWrapper"),p=k("auth");return r(),n(S,{title:"前端权限按钮示例",contentBackground:"",contentClass:"p-4",content:"由于刷新的时候会请求用户信息接口，会根据接口重置角色信息，所以刷新后界面会恢复原样，如果不需要，可以注释 src/layout/default/index内的获取用户信息接口"},{default:e(()=>[o(R),d("p",null,[s(" 当前角色: "),d("a",null,c(u.userStore.getRoleList),1)]),o(_,{class:"mt-4",type:"info",message:"点击后请查看按钮变化","show-icon":""}),d("div",w,[s(" 权限切换(请先切换权限模式为前端角色权限模式): "),o(A,null,{default:e(()=>[o(t,{onClick:l[0]||(l[0]=y=>u.changeRole(u.RoleEnum.SUPER)),type:u.isSuper?"primary":"default"},{default:e(()=>[s(c(u.RoleEnum.SUPER),1)]),_:1},8,["type"]),o(t,{onClick:l[1]||(l[1]=y=>u.changeRole(u.RoleEnum.TEST)),type:u.isTest?"primary":"default"},{default:e(()=>[s(c(u.RoleEnum.TEST),1)]),_:1},8,["type"])]),_:1})]),o(i,null,{default:e(()=>[s("组件方式判断权限(有需要可以自行全局注册)")]),_:1}),o(m,{value:u.RoleEnum.SUPER},{default:e(()=>[o(t,{type:"primary",class:"mx-4"},{default:e(()=>[s(" 拥有super角色权限可见 ")]),_:1})]),_:1},8,["value"]),o(m,{value:u.RoleEnum.TEST},{default:e(()=>[o(t,{color:"success",class:"mx-4"},{default:e(()=>[s(" 拥有test角色权限可见 ")]),_:1})]),_:1},8,["value"]),o(m,{value:[u.RoleEnum.TEST,u.RoleEnum.SUPER]},{default:e(()=>[o(t,{color:"error",class:"mx-4"},{default:e(()=>[s(" 拥有[test,super]角色权限可见 ")]),_:1})]),_:1},8,["value"]),o(i,null,{default:e(()=>[s("函数方式方式判断权限(适用于函数内部过滤)")]),_:1}),u.hasPermission(u.RoleEnum.SUPER)?(r(),n(t,{key:0,type:"primary",class:"mx-4"},{default:e(()=>[s(" 拥有super角色权限可见 ")]),_:1})):f("",!0),u.hasPermission(u.RoleEnum.TEST)?(r(),n(t,{key:1,color:"success",class:"mx-4"},{default:e(()=>[s(" 拥有test角色权限可见 ")]),_:1})):f("",!0),u.hasPermission([u.RoleEnum.TEST,u.RoleEnum.SUPER])?(r(),n(t,{key:2,color:"error",class:"mx-4"},{default:e(()=>[s(" 拥有[test,super]角色权限可见 ")]),_:1})):f("",!0),o(i,null,{default:e(()=>[s("指令方式方式判断权限(该方式不能动态修改权限.)")]),_:1}),C((r(),n(t,{type:"primary",class:"mx-4"},{default:e(()=>[s(" 拥有super角色权限可见 ")]),_:1})),[[p,u.RoleEnum.SUPER]]),C((r(),n(t,{color:"success",class:"mx-4"},{default:e(()=>[s(" 拥有test角色权限可见 ")]),_:1})),[[p,u.RoleEnum.TEST]]),C((r(),n(t,{color:"error",class:"mx-4"},{default:e(()=>[s(" 拥有[test,super]角色权限可见 ")]),_:1})),[[p,[u.RoleEnum.TEST,u.RoleEnum.SUPER]]])]),_:1})}const X=T(b,[["render",L],["__scopeId","data-v-e6134e80"]]);export{X as default};
