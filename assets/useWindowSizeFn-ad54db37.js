import{u as a,H as d,t as u}from"./index-86a09407.js";function w(i,o={}){const{wait:s=150,immediate:r}=o;let e=()=>{i()};e=a(e,s);const n=()=>{r&&e(),window.addEventListener("resize",e)},t=()=>{window.removeEventListener("resize",e)};return d(()=>{n()}),u(()=>{t()}),{start:n,stop:t}}export{w as u};
