var Dt=Object.defineProperty;var m=Object.getOwnPropertySymbols;var pt=Object.prototype.hasOwnProperty,Ct=Object.prototype.propertyIsEnumerable;var H=(t,i,r)=>i in t?Dt(t,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[i]=r,x=(t,i)=>{for(var r in i||(i={}))pt.call(i,r)&&H(t,r,i[r]);if(m)for(var r of m(i))Ct.call(i,r)&&H(t,r,i[r]);return t};import{B as Lt,u as ft}from"./index-09a6b29e.js";import{a as c,Q as X,bj as G,bk as A,aU as f,aV as I,bl as k,j as $,bc as b,O as V,bm as Q,bn as Y,bo as Ut,bp as bt,bq as yt,bb as Bt,n as Gt,I as Wt,_ as Pt}from"./index-86a09407.js";import{c as N,u as ht,a as Ft}from"./index-074e4593.js";import{u as j}from"./useRootSetting-f92ea839.js";import{d as Z,e as wt,u as o,f as n,ac as mt,F as U,a7 as v,_ as Ht,$ as xt}from"./vue-854c8149.js";import{aj as M}from"./antd-8c2f8f62.js";const Xt=N(()=>c(()=>import("./TypePicker-2ab043ab.js"),["assets/TypePicker-2ab043ab.js","assets/index-86a09407.js","assets/vue-854c8149.js","assets/antd-8c2f8f62.js","assets/index-5a382029.css","assets/TypePicker-d0306f2e.css"]));N(()=>c(()=>import("./ThemeColorPicker-3d3eefb6.js"),["assets/ThemeColorPicker-3d3eefb6.js","assets/index-86a09407.js","assets/vue-854c8149.js","assets/antd-8c2f8f62.js","assets/index-5a382029.css","assets/index-09a6b29e.js","assets/index-22ff2e7e.js","assets/index-f6651500.js","assets/index-2c133100.css","assets/index-6c94692d.css","assets/index-074e4593.js","assets/useRootSetting-f92ea839.js","assets/index-2b1580c6.js","assets/useContentViewHeight-8ce3895b.js","assets/useWindowSizeFn-ad54db37.js","assets/index-054645fa.css","assets/uniqBy-2dfd8320.js","assets/lock-4df3f2d4.js","assets/index-f8b22ee1.css","assets/ThemeColorPicker-84b84c57.css"]));const kt=N(()=>c(()=>import("./SettingFooter-f0d3d110.js"),["assets/SettingFooter-f0d3d110.js","assets/index-86a09407.js","assets/vue-854c8149.js","assets/antd-8c2f8f62.js","assets/index-5a382029.css","assets/useCopyToClipboard-169d7c7a.js","assets/SettingFooter-22472c83.css"])),_=N(()=>c(()=>import("./SwitchItem-41a7b624.js"),["assets/SwitchItem-41a7b624.js","assets/index-86a09407.js","assets/vue-854c8149.js","assets/antd-8c2f8f62.js","assets/index-5a382029.css","assets/index-09a6b29e.js","assets/index-22ff2e7e.js","assets/index-f6651500.js","assets/index-2c133100.css","assets/index-6c94692d.css","assets/index-074e4593.js","assets/useRootSetting-f92ea839.js","assets/index-2b1580c6.js","assets/useContentViewHeight-8ce3895b.js","assets/useWindowSizeFn-ad54db37.js","assets/index-054645fa.css","assets/uniqBy-2dfd8320.js","assets/lock-4df3f2d4.js","assets/index-f8b22ee1.css","assets/SwitchItem-e293bb1b.css"])),d=N(()=>c(()=>import("./SelectItem-8375020e.js"),["assets/SelectItem-8375020e.js","assets/index-86a09407.js","assets/vue-854c8149.js","assets/antd-8c2f8f62.js","assets/index-5a382029.css","assets/index-09a6b29e.js","assets/index-22ff2e7e.js","assets/index-f6651500.js","assets/index-2c133100.css","assets/index-6c94692d.css","assets/index-074e4593.js","assets/useRootSetting-f92ea839.js","assets/index-2b1580c6.js","assets/useContentViewHeight-8ce3895b.js","assets/useWindowSizeFn-ad54db37.js","assets/index-054645fa.css","assets/uniqBy-2dfd8320.js","assets/lock-4df3f2d4.js","assets/index-f8b22ee1.css","assets/SelectItem-acbd08e7.css"])),K=N(()=>c(()=>import("./InputNumberItem-af034c4b.js"),["assets/InputNumberItem-af034c4b.js","assets/index-86a09407.js","assets/vue-854c8149.js","assets/antd-8c2f8f62.js","assets/index-5a382029.css","assets/index-09a6b29e.js","assets/index-22ff2e7e.js","assets/index-f6651500.js","assets/index-2c133100.css","assets/index-6c94692d.css","assets/index-074e4593.js","assets/useRootSetting-f92ea839.js","assets/index-2b1580c6.js","assets/useContentViewHeight-8ce3895b.js","assets/useWindowSizeFn-ad54db37.js","assets/index-054645fa.css","assets/uniqBy-2dfd8320.js","assets/lock-4df3f2d4.js","assets/index-f8b22ee1.css","assets/InputNumberItem-9fb89c8f.css"])),{t:l}=$();var e=(t=>(t[t.CHANGE_LAYOUT=0]="CHANGE_LAYOUT",t[t.CHANGE_THEME_COLOR=1]="CHANGE_THEME_COLOR",t[t.CHANGE_THEME=2]="CHANGE_THEME",t[t.MENU_HAS_DRAG=3]="MENU_HAS_DRAG",t[t.MENU_ACCORDION=4]="MENU_ACCORDION",t[t.MENU_TRIGGER=5]="MENU_TRIGGER",t[t.MENU_TOP_ALIGN=6]="MENU_TOP_ALIGN",t[t.MENU_COLLAPSED=7]="MENU_COLLAPSED",t[t.MENU_COLLAPSED_SHOW_TITLE=8]="MENU_COLLAPSED_SHOW_TITLE",t[t.MENU_WIDTH=9]="MENU_WIDTH",t[t.MENU_SHOW_SIDEBAR=10]="MENU_SHOW_SIDEBAR",t[t.MENU_THEME=11]="MENU_THEME",t[t.MENU_SPLIT=12]="MENU_SPLIT",t[t.MENU_FIXED=13]="MENU_FIXED",t[t.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE=14]="MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE",t[t.MENU_TRIGGER_MIX_SIDEBAR=15]="MENU_TRIGGER_MIX_SIDEBAR",t[t.MENU_FIXED_MIX_SIDEBAR=16]="MENU_FIXED_MIX_SIDEBAR",t[t.HEADER_SHOW=17]="HEADER_SHOW",t[t.HEADER_THEME=18]="HEADER_THEME",t[t.HEADER_FIXED=19]="HEADER_FIXED",t[t.HEADER_SEARCH=20]="HEADER_SEARCH",t[t.TABS_SHOW_QUICK=21]="TABS_SHOW_QUICK",t[t.TABS_SHOW_REDO=22]="TABS_SHOW_REDO",t[t.TABS_SHOW=23]="TABS_SHOW",t[t.TABS_SHOW_FOLD=24]="TABS_SHOW_FOLD",t[t.LOCK_TIME=25]="LOCK_TIME",t[t.FULL_CONTENT=26]="FULL_CONTENT",t[t.CONTENT_MODE=27]="CONTENT_MODE",t[t.SHOW_BREADCRUMB=28]="SHOW_BREADCRUMB",t[t.SHOW_BREADCRUMB_ICON=29]="SHOW_BREADCRUMB_ICON",t[t.GRAY_MODE=30]="GRAY_MODE",t[t.COLOR_WEAK=31]="COLOR_WEAK",t[t.SHOW_LOGO=32]="SHOW_LOGO",t[t.SHOW_FOOTER=33]="SHOW_FOOTER",t[t.ROUTER_TRANSITION=34]="ROUTER_TRANSITION",t[t.OPEN_PROGRESS=35]="OPEN_PROGRESS",t[t.OPEN_PAGE_LOADING=36]="OPEN_PAGE_LOADING",t[t.OPEN_ROUTE_TRANSITION=37]="OPEN_ROUTE_TRANSITION",t))(e||{});const vt=[{value:X.FULL,label:l("layout.setting.contentModeFull")},{value:X.FIXED,label:l("layout.setting.contentModeFixed")}],Kt=[{value:G.CENTER,label:l("layout.setting.topMenuAlignRight")},{value:G.START,label:l("layout.setting.topMenuAlignLeft")},{value:G.END,label:l("layout.setting.topMenuAlignCenter")}],$t=t=>[{value:b.NONE,label:l("layout.setting.menuTriggerNone")},{value:b.FOOTER,label:l("layout.setting.menuTriggerBottom")},...t?[]:[{value:b.HEADER,label:l("layout.setting.menuTriggerTop")}]],Vt=[A.ZOOM_FADE,A.FADE,A.ZOOM_OUT,A.FADE_SIDE,A.FADE_BOTTOM,A.FADE_SCALE].map(t=>({label:t,value:t})),Qt=[{title:l("layout.setting.menuTypeSidebar"),mode:f.INLINE,type:I.SIDEBAR},{title:l("layout.setting.menuTypeMix"),mode:f.INLINE,type:I.MIX},{title:l("layout.setting.menuTypeTopMenu"),mode:f.HORIZONTAL,type:I.TOP_MENU},{title:l("layout.setting.menuTypeMixSidebar"),mode:f.INLINE,type:I.MIX_SIDEBAR}],Yt=[{value:k.HOVER,label:l("layout.setting.triggerHover")},{value:k.CLICK,label:l("layout.setting.triggerClick")}];function jt(t,i){const r=V(),g=Zt(t,i);r.setProjectConfig(g),t===e.CHANGE_THEME&&(Q(),Y())}function Zt(t,i){const r=V(),{getThemeColor:g,getDarkMode:D}=j();switch(t){case e.CHANGE_LAYOUT:const{mode:p,type:R,split:O}=i;return{menuSetting:x({mode:p,type:R,collapsed:!1,show:!0,hidden:!1},O===void 0?{split:O}:{})};case e.CHANGE_THEME_COLOR:return g.value===i?{}:{themeColor:i};case e.CHANGE_THEME:return D.value===i?{}:(yt(i),{});case e.MENU_HAS_DRAG:return{menuSetting:{canDrag:i}};case e.MENU_ACCORDION:return{menuSetting:{accordion:i}};case e.MENU_TRIGGER:return{menuSetting:{trigger:i}};case e.MENU_TOP_ALIGN:return{menuSetting:{topMenuAlign:i}};case e.MENU_COLLAPSED:return{menuSetting:{collapsed:i}};case e.MENU_WIDTH:return{menuSetting:{menuWidth:i}};case e.MENU_SHOW_SIDEBAR:return{menuSetting:{show:i}};case e.MENU_COLLAPSED_SHOW_TITLE:return{menuSetting:{collapsedShowTitle:i}};case e.MENU_THEME:return Y(i),{menuSetting:{bgColor:i}};case e.MENU_SPLIT:return{menuSetting:{split:i}};case e.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE:return{menuSetting:{closeMixSidebarOnChange:i}};case e.MENU_FIXED:return{menuSetting:{fixed:i}};case e.MENU_TRIGGER_MIX_SIDEBAR:return{menuSetting:{mixSideTrigger:i}};case e.MENU_FIXED_MIX_SIDEBAR:return{menuSetting:{mixSideFixed:i}};case e.OPEN_PAGE_LOADING:return r.setPageLoading(!1),{transitionSetting:{openPageLoading:i}};case e.ROUTER_TRANSITION:return{transitionSetting:{basicTransition:i}};case e.OPEN_ROUTE_TRANSITION:return{transitionSetting:{enable:i}};case e.OPEN_PROGRESS:return{transitionSetting:{openNProgress:i}};case e.LOCK_TIME:return{lockTime:i};case e.FULL_CONTENT:return{fullContent:i};case e.CONTENT_MODE:return{contentMode:i};case e.SHOW_BREADCRUMB:return{showBreadCrumb:i};case e.SHOW_BREADCRUMB_ICON:return{showBreadCrumbIcon:i};case e.GRAY_MODE:return bt(i),{grayMode:i};case e.SHOW_FOOTER:return{showFooter:i};case e.COLOR_WEAK:return Ut(i),{colorWeak:i};case e.SHOW_LOGO:return{showLogo:i};case e.TABS_SHOW_QUICK:return{multiTabsSetting:{showQuick:i}};case e.TABS_SHOW:return{multiTabsSetting:{show:i}};case e.TABS_SHOW_REDO:return{multiTabsSetting:{showRedo:i}};case e.TABS_SHOW_FOLD:return{multiTabsSetting:{showFold:i}};case e.HEADER_THEME:return Q(i),{headerSetting:{bgColor:i}};case e.HEADER_SEARCH:return{headerSetting:{showSearch:i}};case e.HEADER_FIXED:return{headerSetting:{fixed:i}};case e.HEADER_SHOW:return{headerSetting:{show:i}};default:return{}}}const{t:s}=$(),zt=Z({name:"SettingDrawer",setup(t,{attrs:i}){const{getContentMode:r,getShowFooter:g,getShowBreadCrumb:D,getShowBreadCrumbIcon:p,getShowLogo:R,getFullContent:O,getColorWeak:y,getGrayMode:z,getLockTime:q,getShowDarkModeToggle:J}=j(),{getOpenPageLoading:tt,getBasicTransition:et,getEnableTransition:W,getOpenNProgress:ot}=Bt(),{getIsHorizontal:B,getShowMenu:P,getMenuType:h,getTrigger:it,getCollapsedShowTitle:nt,getMenuFixed:st,getCollapsed:F,getCanDrag:_t,getTopMenuAlign:rt,getAccordion:lt,getMenuWidth:at,getIsTopMenu:Et,getSplit:C,getIsMixSidebar:a,getCloseMixSidebarOnChange:gt,getMixSideTrigger:Ot,getMixSideFixed:St}=Gt(),{getShowHeader:S,getFixed:ut,getShowSearch:Tt}=ht(),{getShowMultipleTab:L,getShowQuick:At,getShowRedo:Mt,getShowFold:ct}=Ft(),E=wt(()=>o(P)&&!o(B));function Nt(){return n(U,null,[n(Xt,{menuTypeList:Qt,handler:u=>{jt(e.CHANGE_LAYOUT,{mode:u.mode,type:u.type,split:o(B)?!1:void 0})},def:o(h)},null)])}function Rt(){let u=o(it);const w=$t(o(C));return w.some(T=>T.value===u)||(u=b.FOOTER),n(U,null,[n(_,{title:s("layout.setting.splitMenu"),event:e.MENU_SPLIT,def:o(C),disabled:!o(E)||o(h)!==I.MIX},null),n(_,{title:s("layout.setting.mixSidebarFixed"),event:e.MENU_FIXED_MIX_SIDEBAR,def:o(St),disabled:!o(a)},null),n(_,{title:s("layout.setting.closeMixSidebarOnChange"),event:e.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE,def:o(gt),disabled:!o(a)},null),n(_,{title:s("layout.setting.menuCollapse"),event:e.MENU_COLLAPSED,def:o(F),disabled:!o(E)},null),n(_,{title:s("layout.setting.menuDrag"),event:e.MENU_HAS_DRAG,def:o(_t),disabled:!o(E)},null),n(_,{title:s("layout.setting.menuSearch"),event:e.HEADER_SEARCH,def:o(Tt),disabled:!o(S)},null),n(_,{title:s("layout.setting.menuAccordion"),event:e.MENU_ACCORDION,def:o(lt),disabled:!o(E)},null),n(_,{title:s("layout.setting.collapseMenuDisplayName"),event:e.MENU_COLLAPSED_SHOW_TITLE,def:o(nt),disabled:!o(E)||!o(F)||o(a)},null),n(_,{title:s("layout.setting.fixedHeader"),event:e.HEADER_FIXED,def:o(ut),disabled:!o(S)},null),n(_,{title:s("layout.setting.fixedSideBar"),event:e.MENU_FIXED,def:o(st),disabled:!o(E)||o(a)},null),n(d,{title:s("layout.setting.mixSidebarTrigger"),event:e.MENU_TRIGGER_MIX_SIDEBAR,def:o(Ot),options:Yt,disabled:!o(a)},null),n(d,{title:s("layout.setting.topMenuLayout"),event:e.MENU_TOP_ALIGN,def:o(rt),options:Kt,disabled:!o(S)||o(C)||!o(Et)&&!o(C)||o(a)},null),n(d,{title:s("layout.setting.menuCollapseButton"),event:e.MENU_TRIGGER,def:u,options:w,disabled:!o(E)||o(a)},null),n(d,{title:s("layout.setting.contentMode"),event:e.CONTENT_MODE,def:o(r),options:vt},null),n(K,{title:s("layout.setting.autoScreenLock"),min:0,event:e.LOCK_TIME,defaultValue:o(q),formatter:T=>parseInt(T)===0?`0(${s("layout.setting.notAutoScreenLock")})`:`${T}${s("layout.setting.minute")}`},null),n(K,{title:s("layout.setting.expandedMenuWidth"),max:600,min:100,step:10,event:e.MENU_WIDTH,disabled:!o(E),defaultValue:o(at),formatter:T=>`${parseInt(T)}px`},null)])}function dt(){return n(U,null,[n(_,{title:s("layout.setting.breadcrumb"),event:e.SHOW_BREADCRUMB,def:o(D),disabled:!o(S)},null),n(_,{title:s("layout.setting.breadcrumbIcon"),event:e.SHOW_BREADCRUMB_ICON,def:o(p),disabled:!o(S)},null),n(_,{title:s("layout.setting.tabs"),event:e.TABS_SHOW,def:o(L)},null),n(_,{title:s("layout.setting.tabsRedoBtn"),event:e.TABS_SHOW_REDO,def:o(Mt),disabled:!o(L)},null),n(_,{title:s("layout.setting.tabsQuickBtn"),event:e.TABS_SHOW_QUICK,def:o(At),disabled:!o(L)},null),n(_,{title:s("layout.setting.tabsFoldBtn"),event:e.TABS_SHOW_FOLD,def:o(ct),disabled:!o(L)},null),n(_,{title:s("layout.setting.sidebar"),event:e.MENU_SHOW_SIDEBAR,def:o(P),disabled:o(B)},null),n(_,{title:s("layout.setting.header"),event:e.HEADER_SHOW,def:o(S)},null),n(_,{title:"Logo",event:e.SHOW_LOGO,def:o(R),disabled:o(a)},null),n(_,{title:s("layout.setting.footer"),event:e.SHOW_FOOTER,def:o(g)},null),n(_,{title:s("layout.setting.fullContent"),event:e.FULL_CONTENT,def:o(O)},null),n(_,{title:s("layout.setting.grayMode"),event:e.GRAY_MODE,def:o(z)},null),n(_,{title:s("layout.setting.colorWeak"),event:e.COLOR_WEAK,def:o(y)},null)])}function It(){return n(U,null,[n(_,{title:s("layout.setting.progress"),event:e.OPEN_PROGRESS,def:o(ot)},null),n(_,{title:s("layout.setting.switchLoading"),event:e.OPEN_PAGE_LOADING,def:o(tt)},null),n(_,{title:s("layout.setting.switchAnimation"),event:e.OPEN_ROUTE_TRANSITION,def:o(W)},null),n(d,{title:s("layout.setting.animationType"),event:e.ROUTER_TRANSITION,def:o(et),options:Vt,disabled:!o(W)},null)])}return()=>n(Lt,mt(i,{title:s("layout.setting.drawerTitle"),width:330,class:"setting-drawer"}),{default:()=>[o(J)&&n(M,null,{default:()=>s("layout.setting.darkMode")}),n(M,null,{default:()=>s("layout.setting.navMode")}),Nt(),n(M,null,{default:()=>s("layout.setting.interfaceFunction")}),Rt(),n(M,null,{default:()=>s("layout.setting.interfaceDisplay")}),dt(),n(M,null,{default:()=>s("layout.setting.animation")}),It(),n(M,null,null),n(kt,null,null)]})}}),qt=Z({name:"SettingButton",components:{SettingDrawer:zt,Icon:Wt},setup(){const[t,{openDrawer:i}]=ft();return{register:t,openDrawer:i}}});function Jt(t,i,r,g,D,p){const R=v("Icon"),O=v("SettingDrawer");return Ht(),xt("div",{onClick:i[0]||(i[0]=y=>t.openDrawer(!0))},[n(R,{icon:"ion:settings-outline"}),n(O,{onRegister:t.register},null,8,["onRegister"])])}const te=Pt(qt,[["render",Jt]]),ae=Object.freeze(Object.defineProperty({__proto__:null,default:te},Symbol.toStringTag,{value:"Module"}));export{jt as b,ae as i};
