import{du as r}from"./useECharts-c08ed3a4.js";import{d as s,k as n,w as i,a7 as d,_ as l,a8 as m,a9 as p,a0 as f,af as u}from"./vue-854c8149.js";import{a8 as c}from"./antd-8c2f8f62.js";import{_ as h}from"./index-86a09407.js";import"./useRootSetting-f92ea839.js";const g=s({components:{Card:c},props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"400px"}},setup(e){const a=n(null),{setOptions:t}=r(a);return i(()=>e.loading,()=>{e.loading||t({legend:{bottom:0,data:["Visits","Sales"]},tooltip:{},radar:{radius:"60%",splitNumber:8,indicator:[{name:"2017"},{name:"2017"},{name:"2018"},{name:"2019"},{name:"2020"},{name:"2021"}]},series:[{type:"radar",symbolSize:0,areaStyle:{shadowBlur:0,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1},data:[{value:[90,50,86,40,50,20],name:"Visits",itemStyle:{color:"#9f8ed7"}},{value:[70,75,70,76,20,85],name:"Sales",itemStyle:{color:"#1edec5"}}]}]})},{immediate:!0}),{chartRef:a}}});function w(e,a,t,y,S,_){const o=d("Card");return l(),m(o,{title:"销售统计",loading:e.loading},{default:p(()=>[f("div",{ref:"chartRef",style:u({width:e.width,height:e.height})},null,4)]),_:1},8,["loading"])}const k=h(g,[["render",w]]);export{k as default};
