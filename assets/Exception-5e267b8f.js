import{aK as e,aE as N,aL as O,f as R,aM as _,j as S}from"./index-86a09407.js";import{d as A,k,ao as G,e as d,u as s,f as r}from"./vue-854c8149.js";import{Z as P,bt as C}from"./antd-8c2f8f62.js";const D="/assets/no-data-f7e550cc.svg",h="/assets/net-error-61b7e6df.svg",B=A({name:"ErrorPage",props:{status:{type:Number,default:e.PAGE_NOT_FOUND},title:{type:String,default:""},subTitle:{type:String,default:""},full:{type:Boolean,default:!1}},setup(n){const a=k(new Map),{query:m}=G(),o=N(),c=O(),{t}=S(),{prefixCls:p}=R("app-exception-page"),E=d(()=>{const{status:l}=m,{status:i}=n;return Number(l)||i}),x=d(()=>s(a).get(s(E))),T=t("sys.exception.backLogin"),u=t("sys.exception.backHome");return s(a).set(e.PAGE_NOT_ACCESS,{title:"403",status:`${e.PAGE_NOT_ACCESS}`,subTitle:t("sys.exception.subTitle403"),btnText:n.full?T:u,handler:()=>n.full?o(_.BASE_LOGIN):o()}),s(a).set(e.PAGE_NOT_FOUND,{title:"404",status:`${e.PAGE_NOT_FOUND}`,subTitle:t("sys.exception.subTitle404"),btnText:n.full?T:u,handler:()=>n.full?o(_.BASE_LOGIN):o()}),s(a).set(e.ERROR,{title:"500",status:`${e.ERROR}`,subTitle:t("sys.exception.subTitle500"),btnText:u,handler:()=>o()}),s(a).set(e.PAGE_NOT_DATA,{title:t("sys.exception.noDataTitle"),subTitle:"",btnText:t("common.redo"),handler:()=>c(),icon:D}),s(a).set(e.NET_WORK_ERROR,{title:t("sys.exception.networkErrorTitle"),subTitle:t("sys.exception.networkErrorSubTitle"),btnText:t("common.redo"),handler:()=>c(),icon:h}),()=>{const{title:l,subTitle:i,btnText:b,icon:f,handler:g,status:y}=s(x)||{};return r(C,{class:p,status:y,title:n.title||l,"sub-title":n.subTitle||i},{extra:()=>b&&r(P,{type:"primary",onClick:g},{default:()=>b}),icon:()=>f?r("img",{src:f},null):null})}}});export{B as default};
