import{f as T,g as E,h as U,i as D}from"../modules/unplugin-icons-9CGvLFhI.js";import{d as H,t as y,B as L,z as u,E as V,o as p,b as j,e as o,h as C,K as l,l as s,k as _,c as z,x as b,F as I}from"../modules/vue-BJ3NjBU7.js";import{j as K,k as M,s as t,l as P,n as R}from"../index-B-b12fiZ.js";import{s as q}from"../monaco/bundled-types-B4UFH0lj.js";import{_ as A,C as G}from"./ClicksSlider-BThfG12M.js";import{_ as d}from"./IconButton.vue_vue_type_script_setup_true_lang-CSAK0gbZ.js";import"../modules/shiki-VFpPEGO7.js";import"../modules/file-saver-igGfcqei.js";const J={class:"h-full pt-2 flex flex-col"},O={class:"flex-none border-t border-main",px3:"",py2:""},Q={class:"flex-none border-t border-main"},W={class:"flex gap-1 items-center px-6 py-3"},X={class:"p2 text-center"},ce=H({__name:"notes",setup(Y){K({title:`Notes - ${q}`});const{slides:w,total:m}=M(),{isFullscreen:f,toggle:S}=R,v=y(),n=L("slidev-notes-font-size",18),a=u(()=>{var e;return((e=t.lastUpdate)==null?void 0:e.type)==="viewer"?t.viewerPage:t.page}),x=u(()=>w.value.find(e=>e.no===a.value));V(a,()=>{var e;(e=v.value)==null||e.scrollTo({left:0,top:0,behavior:"smooth"}),window.scrollTo({left:0,top:0,behavior:"smooth"})});function $(){n.value=n.value+1}function B(){n.value=n.value-1}const k=u(()=>{var i,r;const e=((i=t.lastUpdate)==null?void 0:i.type)==="viewer"?t.viewerClicks:t.clicks,c=((r=t.lastUpdate)==null?void 0:r.type)==="viewer"?t.viewerClicksTotal:t.clicksTotal;return P(y(e),void 0,c)});return(e,c)=>{var h,g;const i=U,r=D,F=T,N=E;return p(),j(I,null,[o("div",{class:"fixed top-0 left-0 h-3px bg-primary transition-all duration-500",style:C({width:`${(a.value-1)/(l(m)-1)*100+1}%`})},null,4),o("div",J,[o("div",{ref_key:"scroller",ref:v,class:"px-5 flex-auto h-full overflow-auto",style:C({fontSize:`${l(n)}px`})},[s(A,{note:(h=x.value)==null?void 0:h.meta.slide.note,"note-html":(g=x.value)==null?void 0:g.meta.slide.noteHTML,placeholder:`No notes for Slide ${a.value}.`,"clicks-context":k.value,"auto-scroll":!0},null,8,["note","note-html","placeholder","clicks-context"])],4),o("div",O,[s(G,{"clicks-context":k.value,readonly:""},null,8,["clicks-context"])]),o("div",Q,[o("div",W,[s(d,{title:l(f)?"Close fullscreen":"Enter fullscreen",onClick:l(S)},{default:_(()=>[l(f)?(p(),z(i,{key:0})):(p(),z(r,{key:1}))]),_:1},8,["title","onClick"]),s(d,{title:"Increase font size",onClick:$},{default:_(()=>[s(F)]),_:1}),s(d,{title:"Decrease font size",onClick:B},{default:_(()=>[s(N)]),_:1}),c[0]||(c[0]=o("div",{class:"flex-auto"},null,-1)),o("div",X,b(a.value)+" / "+b(l(m)),1)])])])],64)}}});export{ce as default};
