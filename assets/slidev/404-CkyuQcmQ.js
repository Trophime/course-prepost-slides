import{d as m,U as _,C as f,r as x,o as n,b as v,e as o,A as a,x as r,B as g,c as u,k as c,g as i}from"../modules/vue-CqzGflFA.js";import{h as k,_ as h}from"../index-Bj-zf_05.js";import"../modules/shiki-UU-llots.js";const B={class:"grid justify-center text-center pt-15% gap-5"},C={class:"text-2xl"},N={class:"op-60"},y={class:"mt-3 flex flex-col gap-2 max-w-xs mx-auto w-full"},R=m({__name:"404",setup(w){const{currentRoute:l}=_(),{total:d}=k(),s=f(()=>{const t=l.value.path.match(/\d+/);if(t){const e=+t[0];if(e>0&&e<=d.value)return e}return null});return(p,t)=>{const e=x("RouterLink");return n(),v("div",B,[o("div",null,[t[2]||(t[2]=o("h1",{class:"text-9xl font-light"}," 404 ",-1)),o("p",C,[t[0]||(t[0]=a(" Page ")),o("code",N,r(g(l).path),1),t[1]||(t[1]=a(" not found "))])]),o("div",y,[s.value!==1?(n(),u(e,{key:0,to:"/",class:"page-link"},{default:c(()=>t[3]||(t[3]=[a(" Go Home ")])),_:1})):i("",!0),s.value?(n(),u(e,{key:1,to:`/${s.value}`,class:"page-link"},{default:c(()=>[a(" Go to Slide "+r(s.value),1)]),_:1},8,["to"])):i("",!0)])])}}}),L=h(R,[["__scopeId","data-v-e9373a7e"]]);export{L as default};