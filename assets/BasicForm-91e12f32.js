var Le=Object.defineProperty;var Ae=Object.getOwnPropertySymbols;var Pe=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable;var ge=(e,r,n)=>r in e?Le(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,T=(e,r)=>{for(var n in r||(r={}))Pe.call(r,n)&&ge(e,n,r[n]);if(Ae)for(var n of Ae(r))Me.call(r,n)&&ge(e,n,r[n]);return e};var C=(e,r,n)=>new Promise((i,m)=>{var f=d=>{try{l(n.next(d))}catch(p){m(p)}},c=d=>{try{l(n.throw(d))}catch(p){m(p)}},l=d=>d.done?i(d.value):Promise.resolve(d.value).then(f,c);l((n=n.apply(e,r)).next())});import{d as Ne,h as _e,a as Te,_ as ke}from"./FormItem.vue_vue_type_script_lang-7fcbd372.js";import{R as Ye,G as ze,B as He,p as B,j as Ue,_ as Ve,S as z,z as x,l as ce,m as re,U as te,V as J,W as me,N as We,r as qe,u as Ce,X as Ge,Y as ve,Z as Be,c as De,$ as Xe,f as Ke}from"./index-86a09407.js";import{B as Je}from"./index-22ff2e7e.js";import{ah as $e,aa as Fe,L as G,ar as Ze,a9 as Qe}from"./antd-8c2f8f62.js";import{d as je,e as k,a7 as H,_ as X,a8 as K,a9 as Y,a0 as xe,af as et,f as le,R as U,ac as ee,E as ue,a1 as fe,ab as ae,ad as ie,u as o,g as tt,w as Q,am as nt,q as he,J as Oe,s as ot,r as we,k as Z,o as st,ah as at,$ as rt,aa as de,ae as Ie,ag as pe,F as it}from"./vue-854c8149.js";import{u as ct}from"./uniqBy-2dfd8320.js";import{u as lt}from"./index-213420fe.js";const Ee=Symbol();function ut(e){return ze(e,Ee)}function ft(){return Ye(Ee)}const dt=je({name:"BasicFormAction",components:{FormItem:$e.Item,Button:He,BasicArrow:Je,[Fe.name]:Fe},props:{showActionButtonGroup:B.bool.def(!0),showResetButton:B.bool.def(!0),showSubmitButton:B.bool.def(!0),showAdvancedButton:B.bool.def(!0),resetButtonOptions:{type:Object,default:()=>({})},submitButtonOptions:{type:Object,default:()=>({})},actionColOptions:{type:Object,default:()=>({})},actionSpan:B.number.def(6),isAdvanced:B.bool,hideAdvanceBtn:B.bool},emits:["toggle-advanced"],setup(e,{emit:r}){const{t:n}=Ue(),i=k(()=>{const{showAdvancedButton:l,actionSpan:d,actionColOptions:p}=e,g=24-d,O=l?{span:g<6?24:g}:{};return T(T({style:{textAlign:"right"},span:l?6:4},O),p)}),m=k(()=>Object.assign({text:n("common.resetText")},e.resetButtonOptions)),f=k(()=>Object.assign({text:n("common.queryText")},e.submitButtonOptions));function c(){r("toggle-advanced")}return T({t:n,actionColOpt:i,getResetBtnOptions:m,getSubmitBtnOptions:f,toggleAdvanced:c},ft())}});function pt(e,r,n,i,m,f){const c=H("Button"),l=H("BasicArrow"),d=H("FormItem"),p=H("a-col");return e.showActionButtonGroup?(X(),K(p,ie(ee({key:0},e.actionColOpt)),{default:Y(()=>[xe("div",{style:et([{width:"100%"},{textAlign:e.actionColOpt.style.textAlign}])},[le(d,null,{default:Y(()=>[U(e.$slots,"resetBefore"),e.showResetButton?(X(),K(c,ee({key:0,type:"default",class:"mr-2"},e.getResetBtnOptions,{onClick:e.resetAction}),{default:Y(()=>[ue(fe(e.getResetBtnOptions.text),1)]),_:1},16,["onClick"])):ae("",!0),U(e.$slots,"submitBefore"),e.showSubmitButton?(X(),K(c,ee({key:1,type:"primary",class:"mr-2"},e.getSubmitBtnOptions,{onClick:e.submitAction}),{default:Y(()=>[ue(fe(e.getSubmitBtnOptions.text),1)]),_:1},16,["onClick"])):ae("",!0),U(e.$slots,"advanceBefore"),e.showAdvancedButton&&!e.hideAdvanceBtn?(X(),K(c,{key:2,type:"link",size:"small",onClick:e.toggleAdvanced},{default:Y(()=>[ue(fe(e.isAdvanced?e.t("component.form.putAway"):e.t("component.form.unfold"))+" ",1),le(l,{class:"ml-1",expand:!e.isAdvanced,up:""},null,8,["expand"])]),_:1},8,["onClick"])):ae("",!0),U(e.$slots,"advanceAfter")]),_:3})],4)]),_:3},16)):ae("",!0)}const mt=Ve(dt,[["render",pt]]);function ht(e,r,n){const i=/^\[(.+)\]$/;if(i.test(e)){const m=e.match(i);if(m&&m[1]){const f=m[1].split(",");return r=Array.isArray(r)?r:[r],f.forEach((c,l)=>{te(n,c.trim(),r[l])}),!0}}}function bt(e,r,n){const i=/^\{(.+)\}$/;if(i.test(e)){const m=e.match(i);if(m&&m[1]){const f=m[1].split(",");return r=z(r)?r:{},f.forEach(c=>{te(n,c.trim(),r[c.trim()])}),!0}}}function yt({defaultValueRef:e,getSchema:r,formModel:n,getProps:i}){function m(l){var p,g;if(!z(l))return{};const d={};for(const O of Object.entries(l)){let[,s]=O;const[j]=O;if(!j||x(s)&&s.length===0||ce(s))continue;const D=o(i).transformDateFunc;z(s)&&(s=D==null?void 0:D(s)),x(s)&&((p=s[0])!=null&&p.format)&&((g=s[1])!=null&&g.format)&&(s=s.map(P=>D==null?void 0:D(P))),re(s)&&(s===""?s=void 0:s=s.trim()),!ht(j,s,d)&&!bt(j,s,d)&&te(d,j,s)}return f(d)}function f(l){const d=o(i).fieldMapToTime;if(!d||!Array.isArray(d))return l;for(const[p,[g,O],s="YYYY-MM-DD"]of d){if(!p||!g||!O)continue;if(!l[p]){Reflect.deleteProperty(l,p);continue}const[j,D]=l[p],[P,b]=Array.isArray(s)?s:[s,s];l[g]=J(j).format(P),l[O]=J(D).format(b),Reflect.deleteProperty(l,p)}return l}function c(){const l=o(r),d={};l.forEach(p=>{const{defaultValue:g}=p;me(g)||(d[p.field]=g,n[p.field]===void 0&&(n[p.field]=g))}),e.value=G(d)}return{handleFormValues:m,initDefault:c}}const q=24;function At({advanceState:e,emit:r,getProps:n,getSchema:i,formModel:m,defaultValueRef:f}){const c=tt(),{realWidthRef:l,screenEnum:d,screenRef:p}=We(),g=k(()=>{if(!e.isAdvanced)return 0;const b=o(n).emptySpan||0;if(qe(b))return b;if(z(b)){const{span:F=0}=b,M=o(p);return b[M.toLowerCase()]||F||0}return 0}),O=Ce(D,30);Q([()=>o(i),()=>e.isAdvanced,()=>o(l)],()=>{const{showAdvancedButton:b}=o(n);b&&O()},{immediate:!0});function s(b,F=0,M=!1){const R=o(l),E=parseInt(b.md)||parseInt(b.xs)||parseInt(b.sm)||b.span||q,$=parseInt(b.lg)||E,N=parseInt(b.xl)||$,t=parseInt(b.xxl)||N;return R<=d.LG?F+=E:R<d.XL?F+=$:R<d.XXL?F+=N:F+=t,M?(e.hideAdvanceBtn=!1,F<=q*2?(e.hideAdvanceBtn=!0,e.isAdvanced=!0):F>q*2&&F<=q*(o(n).autoAdvancedLine||3)?e.hideAdvanceBtn=!1:e.isLoad||(e.isLoad=!0,e.isAdvanced=!e.isAdvanced),{isAdvanced:e.isAdvanced,itemColSum:F}):F>q*(o(n).alwaysShowLines||1)?{isAdvanced:e.isAdvanced,itemColSum:F}:{isAdvanced:!0,itemColSum:F}}const j=nt({});function D(){var R;let b=0,F=0;const{baseColProps:M={}}=o(n);for(const E of o(i)){const{show:$,colProps:N}=E;let t=!0;if(Ge($)&&(t=$),ce($)&&(t=$({schema:E,model:m,field:E.field,values:T(T({},o(f)),m)})),t&&(N||M)){const{itemColSum:a,isAdvanced:v}=s(T(T({},M),N),b);b=a||0,v&&(F=b),j[E.field]=v}}(R=c==null?void 0:c.proxy)==null||R.$forceUpdate(),e.actionSpan=F%q+o(g),s(o(n).actionColOptions||{span:q},b,!0),r("advanced-change")}function P(){e.isAdvanced=!e.isAdvanced}return{handleToggleAdvanced:P,fieldsIsAdvancedMap:j}}function gt(e,r={}){const n=/^\[(.+)\]$/;if(n.test(e)){const i=e.match(n);if(i&&i[1]){const m=i[1].split(",");if(!m.length)return;const f=[];return m.forEach((c,l)=>{te(f,l,r[c.trim()])}),f.filter(Boolean).length?f:void 0}}}function vt(e,r={}){const n=/^\{(.+)\}$/;if(n.test(e)){const i=e.match(n);if(i&&i[1]){const m=i[1].split(",");if(!m.length)return;const f={};return m.forEach(c=>{te(f,c.trim(),r[c.trim()])}),Object.values(f).filter(Boolean).length?f:void 0}}}function Bt({emit:e,getProps:r,formModel:n,getSchema:i,defaultValueRef:m,formElRef:f,schemaRef:c,handleFormValues:l}){function d(){return C(this,null,function*(){const{resetFunc:t,submitOnReset:a}=o(r);t&&ce(t)&&(yield t()),o(f)&&(Object.keys(n).forEach(u=>{const h=o(i).find(W=>W.field===u),A=(h==null?void 0:h.component)&&Ne.includes(h.component),V=G(m.value[u]);n[u]=A?V||"":V}),he(()=>E()),e("reset",Oe(n)),a&&N())})}function p(t){return C(this,null,function*(){const a=o(i).map(A=>A.field).filter(Boolean),v=".",u=a.filter(A=>String(A).indexOf(v)>=0),h=[];a.forEach(A=>{const V=o(i).find(w=>w.field===A);let W=Ze(t,A);const ne=Reflect.has(t,A);W=_e(V==null?void 0:V.component,W);const{componentProps:oe}=V||{};let S=oe;typeof oe=="function"&&(S=S({formModel:o(n)}));const se=gt(A,t)||vt(A,t);if(ne||se){const w=se||W;if(F(A))if(Array.isArray(w)){const _=[];for(const y of w)_.push(y?J(y):null);o(n)[A]=_}else o(n)[A]=w?S!=null&&S.valueFormat?w:J(w):null;else o(n)[A]=w;S!=null&&S.onChange&&(S==null||S.onChange(w)),h.push(A)}else u.forEach(w=>{try{const _=w.split(".").reduce((y,I)=>y[I],t);ve(_)&&(o(n)[w]=o(_),h.push(w))}catch(_){ve(m.value[w])&&(o(n)[w]=G(o(m.value[w])))}})}),M(h).catch(A=>{})})}function g(t){return C(this,null,function*(){const a=G(o(i));if(!t)return;let v=re(t)?[t]:t;re(t)&&(v=[t]);for(const u of v)O(u,a);c.value=a})}function O(t,a){if(re(t)){const v=a.findIndex(u=>u.field===t);v!==-1&&(delete n[t],a.splice(v,1))}}function s(t,a,v=!1){return C(this,null,function*(){const u=G(o(i)),h=u.findIndex(V=>V.field===a),A=z(t)?[t]:t;if(!a||h===-1||v){v?u.unshift(...A):u.push(...A),c.value=u,P(t);return}h!==-1&&u.splice(h+1,0,...A),P(t),c.value=u})}function j(t){return C(this,null,function*(){let a=[];if(z(t)&&a.push(t),x(t)&&(a=[...t]),!a.every(u=>u.component==="Divider"||Reflect.has(u,"field")&&u.field)){Be("All children of the form Schema array that need to be updated must contain the `field` field");return}c.value=a})}function D(t){return C(this,null,function*(){let a=[];if(z(t)&&a.push(t),x(t)&&(a=[...t]),!a.every(h=>h.component==="Divider"||Reflect.has(h,"field")&&h.field)){Be("All children of the form Schema array that need to be updated must contain the `field` field");return}const u=[];o(i).forEach(h=>{let A;if(a.forEach(V=>{h.field===V.field&&(A=V)}),A!==void 0&&h.field===A.field){const V=De(h,A);u.push(V)}else u.push(h)}),P(u),c.value=ct(u,"field")})}function P(t){let a=[];z(t)&&a.push(t),x(t)&&(a=[...t]);const v={},u=b();a.forEach(h=>{h.component!="Divider"&&Reflect.has(h,"field")&&h.field&&!me(h.defaultValue)&&(!(h.field in u)||me(u[h.field])||Xe(u[h.field]))&&(v[h.field]=h.defaultValue)}),p(v)}function b(){return o(f)?l(Oe(o(n))):{}}function F(t){return o(i).some(a=>a.field===t?Te.includes(a.component):!1)}function M(t){return C(this,null,function*(){var a;return(a=o(f))==null?void 0:a.validateFields(t)})}function R(t){return C(this,null,function*(){var a;return yield(a=o(f))==null?void 0:a.validate(t)})}function E(t){return C(this,null,function*(){var a;yield(a=o(f))==null?void 0:a.clearValidate(t)})}function $(t,a){return C(this,null,function*(){var v;yield(v=o(f))==null?void 0:v.scrollToField(t,a)})}function N(t){return C(this,null,function*(){t&&t.preventDefault();const{submitFunc:a}=o(r);if(a&&ce(a)){yield a();return}if(o(f))try{const u=yield R(),h=l(u);e("submit",h)}catch(u){if((u==null?void 0:u.outOfDate)===!1&&(u!=null&&u.errorFields))return;throw new Error(u)}})}return{handleSubmit:N,clearValidate:E,validate:R,validateFields:M,getFieldsValue:b,updateSchema:D,resetSchema:j,appendSchemaByField:s,removeSchemaByField:g,resetFields:d,setFieldsValue:p,scrollToField:$}}function Ft(m){return C(this,arguments,function*({getSchema:e,getProps:r,formElRef:n,isInitedDefault:i}){ot(()=>C(this,null,function*(){if(o(i)||!o(r).autoFocusFirstItem)return;yield he();const f=o(e),c=o(n),l=c==null?void 0:c.$el;if(!c||!l||!f||f.length===0||!f[0].component.includes("Input"))return;const p=l.querySelector(".ant-row:first-child input");p&&(p==null||p.focus())}))})}const Ot={model:{type:Object,default:()=>({})},labelWidth:{type:[Number,String],default:0},fieldMapToTime:{type:Array,default:()=>[]},compact:B.bool,schemas:{type:Array,default:()=>[]},mergeDynamicData:{type:Object,default:null},baseRowStyle:{type:Object},baseColProps:{type:Object},autoSetPlaceHolder:B.bool.def(!0),autoSubmitOnEnter:B.bool.def(!1),submitOnReset:B.bool,submitOnChange:B.bool,size:B.oneOf(["default","small","large"]).def("default"),disabled:B.bool,emptySpan:{type:[Number,Object],default:0},showAdvancedButton:B.bool,transformDateFunc:{type:Function,default:e=>{var r,n;return(n=(r=e==null?void 0:e.format)==null?void 0:r.call(e,"YYYY-MM-DD HH:mm:ss"))!=null?n:e}},rulesMessageJoinLabel:B.bool.def(!0),autoAdvancedLine:B.number.def(3),alwaysShowLines:B.number.def(1),showActionButtonGroup:B.bool.def(!0),actionColOptions:Object,showResetButton:B.bool.def(!0),autoFocusFirstItem:B.bool,resetButtonOptions:Object,showSubmitButton:B.bool.def(!0),submitButtonOptions:Object,resetFunc:Function,submitFunc:Function,hideRequiredMark:B.bool,labelCol:Object,layout:B.oneOf(["horizontal","vertical","inline"]).def("horizontal"),tableAction:{type:Object},wrapperCol:Object,colon:B.bool,labelAlign:B.string,rowProps:Object},wt=je({name:"BasicForm",components:{FormItem:ke,Form:$e,Row:Qe,FormAction:mt},props:Ot,emits:["advanced-change","reset","submit","register","field-value-change"],setup(e,{emit:r,attrs:n}){const i=we({}),m=lt(),f=we({isAdvanced:!0,hideAdvanceBtn:!1,isLoad:!1,actionSpan:6}),c=Z({}),l=Z(!1),d=Z({}),p=Z(null),g=Z(null),{prefixCls:O}=Ke("basic-form"),s=k(()=>T(T({},e),o(d))),j=k(()=>[O,{[`${O}--compact`]:o(s).compact}]),D=k(()=>{const{baseRowStyle:y={},rowProps:I}=o(s);return T({style:y},I)}),P=k(()=>T(T(T({},n),e),o(s))),b=k(()=>{const y=o(p)||o(s).schemas;for(const I of y){const{defaultValue:L,component:be,isHandleDateDefaultValue:Se=!0}=I;if(Se&&L&&Te.includes(be))if(!Array.isArray(L))I.defaultValue=J(L);else{const ye=[];L.forEach(Re=>{ye.push(J(Re))}),I.defaultValue=ye}}return o(s).showAdvancedButton?G(y.filter(I=>I.component!=="Divider")):G(y)}),{handleToggleAdvanced:F,fieldsIsAdvancedMap:M}=At({advanceState:f,emit:r,getProps:s,getSchema:b,formModel:i,defaultValueRef:c}),{handleFormValues:R,initDefault:E}=yt({getProps:s,defaultValueRef:c,getSchema:b,formModel:i});Ft({getSchema:b,getProps:s,isInitedDefault:l,formElRef:g});const{handleSubmit:$,setFieldsValue:N,clearValidate:t,validate:a,validateFields:v,getFieldsValue:u,updateSchema:h,resetSchema:A,appendSchemaByField:V,removeSchemaByField:W,resetFields:ne,scrollToField:oe}=Bt({emit:r,getProps:s,formModel:i,getSchema:b,defaultValueRef:c,formElRef:g,schemaRef:p,handleFormValues:R});ut({resetAction:ne,submitAction:$}),Q(()=>o(s).model,()=>{const{model:y}=o(s);y&&N(y)},{immediate:!0}),Q(()=>o(s).schemas,y=>{A(y!=null?y:[])}),Q(()=>b.value,y=>{he(()=>{var I;(I=m==null?void 0:m.redoModalHeight)==null||I.call(m)}),!o(l)&&y!=null&&y.length&&(E(),l.value=!0)}),Q(()=>i,Ce(()=>{o(s).submitOnChange&&$()},300),{deep:!0});function S(y){return C(this,null,function*(){d.value=De(o(d)||{},y)})}function se(y,I,L){i[y]=I,r("field-value-change",y,I),L&&L.itemProps&&!L.itemProps.autoLink&&v([y]).catch(be=>{})}function w(y){const{autoSubmitOnEnter:I}=o(s);if(I&&y.key==="Enter"&&y.target&&y.target instanceof HTMLElement){const L=y.target;L&&L.tagName&&L.tagName.toUpperCase()=="INPUT"&&$()}}const _={getFieldsValue:u,setFieldsValue:N,resetFields:ne,updateSchema:h,resetSchema:A,setProps:S,removeSchemaByField:W,appendSchemaByField:V,clearValidate:t,validateFields:v,validate:a,submit:$,scrollToField:oe};return st(()=>{E(),r("register",_)}),T({getBindValue:P,handleToggleAdvanced:F,handleEnterPress:w,formModel:i,defaultValueRef:c,advanceState:f,getRow:D,getProps:s,formElRef:g,getSchema:b,formActionType:_,setFormModel:se,getFormClass:j,getFormActionBindProps:k(()=>T(T({},s.value),f)),fieldsIsAdvancedMap:M},_)}});function It(e,r,n,i,m,f){const c=H("FormItem"),l=H("FormAction"),d=H("Row"),p=H("Form");return X(),K(p,ee(e.getBindValue,{class:e.getFormClass,ref:"formElRef",model:e.formModel,onKeypress:at(e.handleEnterPress,["enter"])}),{default:Y(()=>[le(d,ie(pe(e.getRow)),{default:Y(()=>[U(e.$slots,"formHeader"),(X(!0),rt(it,null,de(e.getSchema,g=>(X(),K(c,{key:g.field,isAdvanced:e.fieldsIsAdvancedMap[g.field],tableAction:e.tableAction,formActionType:e.formActionType,schema:g,formProps:e.getProps,allDefaultValues:e.defaultValueRef,formModel:e.formModel,setFormModel:e.setFormModel},Ie({_:2},[de(Object.keys(e.$slots),O=>({name:O,fn:Y(s=>[U(e.$slots,O,ie(pe(s||{})))])}))]),1032,["isAdvanced","tableAction","formActionType","schema","formProps","allDefaultValues","formModel","setFormModel"]))),128)),le(l,ee(e.getFormActionBindProps,{onToggleAdvanced:e.handleToggleAdvanced}),Ie({_:2},[de(["resetBefore","submitBefore","advanceBefore","advanceAfter"],g=>({name:g,fn:Y(O=>[U(e.$slots,g,ie(pe(O||{})))])}))]),1040,["onToggleAdvanced"]),U(e.$slots,"formFooter")]),_:3},16)]),_:3},16,["class","model","onKeypress"])}const Rt=Ve(wt,[["render",It]]);export{Rt as B};
