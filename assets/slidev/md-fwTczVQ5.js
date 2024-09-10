import{d as F,N as w,M as _,z as c,o as C,c as b,K as a,b as x,f as B,h as $,H as S,k as o,e as s,l as d,m as E,I as v,J as I,q as V,s as N}from"../modules/vue-BJ3NjBU7.js";import{t as A}from"../index-B-b12fiZ.js";import{_ as P}from"./Arrow.vue_vue_type_script_setup_true_lang-Gkx0B08R.js";import{_ as U}from"./CodeBlockWrapper.vue_vue_type_script_setup_true_lang-Bml9R6bP.js";import{I as q}from"./default-D-plwul9.js";import{u as z,f as W}from"./context-rudbYNSz.js";import"../monaco/bundled-types-B4UFH0lj.js";import"../modules/file-saver-igGfcqei.js";import"../modules/shiki-VFpPEGO7.js";import"../modules/unplugin-icons-9CGvLFhI.js";const M=F({__name:"VDragArrow",props:{pos:{},markdownSource:{},width:{},color:{},twoWay:{type:Boolean}},setup(k){const t=k,{dragId:h,mounted:r,unmounted:p,startDragging:g,stopDragging:u,x0:l,y0:n,width:i,height:e}=A(null,t.pos??"100,100,300,300",t.markdownSource,!0);w(r),_(p);const m=c(()=>l.value-i.value/2),f=c(()=>n.value-e.value/2),y=c(()=>l.value+i.value/2),D=c(()=>n.value+e.value/2);return(J,K)=>(C(),b(P,{x1:m.value,y1:f.value,x2:y.value,y2:D.value,"data-drag-id":a(h),width:t.width,color:t.color,"two-way":t.twoWay,onDblclick:a(g),onClickOutside:a(u)},null,8,["x1","y1","x2","y2","data-drag-id","width","color","two-way","onDblclick","onClickOutside"]))}}),O=["data-drag-id"],T=F({__name:"VDrag",props:{pos:{},markdownSource:{}},setup(k){const t=k,{dragId:h,container:r,containerStyle:p,mounted:g,unmounted:u,startDragging:l}=A(null,t.pos,t.markdownSource);return w(g),_(u),(n,i)=>(C(),x("div",{ref_key:"container",ref:r,"data-drag-id":a(h),style:$(a(p)),class:"p-1",onDblclick:i[0]||(i[0]=(...e)=>a(l)&&a(l)(...e))},[B(n.$slots,"default")],44,O))}}),j={markdownSource:[29,30,5],src:"https://sli.dev/logo.png"},H={__name:"slides.md__slidev_13",setup(k){const{$slidev:t,$nav:h,$clicksContext:r,$clicks:p,$page:g,$renderContext:u,$frontmatter:l}=z();return r.setup(),(n,i)=>{const e=U,m=T,f=M,y=S("drag");return C(),b(q,V(N(a(W)(a(l),12))),{default:o(()=>[i[4]||(i[4]=s("h1",null,"Draggable Elements",-1)),i[5]||(i[5]=s("p",null,"Double-click on the draggable elements to edit their positions.",-1)),i[6]||(i[6]=s("br",null,null,-1)),i[7]||(i[7]=s("h6",null,"Directive Usage",-1)),d(e,E({},{ranges:[]}),{default:o(()=>i[0]||(i[0]=[s("pre",{class:"shiki shiki-themes catppuccin-frappe min-light slidev-code",style:{"--shiki-dark":"#c6d0f5","--shiki-light":"#24292eff","--shiki-dark-bg":"#303446","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-md"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#24292EFF"}},"<"),s("span",{style:{"--shiki-dark":"#8CAAEE","--shiki-light":"#22863A"}},"img"),s("span",{style:{"--shiki-dark":"#E5C890","--shiki-light":"#6F42C1"}}," v-drag"),s("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-dark":"#A6D189","--shiki-light":"#22863A"}},`"'square'"`),s("span",{style:{"--shiki-dark":"#E5C890","--shiki-light":"#6F42C1"}}," src"),s("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"="),s("span",{style:{"--shiki-dark":"#A6D189","--shiki-light":"#22863A"}},'"https://sli.dev/logo.png"'),s("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#24292EFF"}},">")])])],-1)])),_:1},16),i[8]||(i[8]=s("br",null,null,-1)),i[9]||(i[9]=s("h6",null,"Component Usage",-1)),d(e,E({},{ranges:[]}),{default:o(()=>i[1]||(i[1]=[s("pre",{class:"shiki shiki-themes catppuccin-frappe min-light slidev-code",style:{"--shiki-dark":"#c6d0f5","--shiki-light":"#24292eff","--shiki-dark-bg":"#303446","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-md"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#24292EFF"}},"<"),s("span",{style:{"--shiki-dark":"#8CAAEE","--shiki-light":"#22863A"}},"v-drag"),s("span",{style:{"--shiki-dark":"#E5C890","--shiki-light":"#6F42C1"}}," text-3xl"),s("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#24292EFF"}},">")]),v(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#24292EFF"}},"  <"),s("span",{style:{"--shiki-dark":"#8CAAEE","--shiki-light":"#22863A"}},"carbon:arrow-up"),s("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#24292EFF"}}," />")]),v(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#C6D0F5","--shiki-light":"#24292EFF"}},"  Use the `v-drag` component to have a draggable container!")]),v(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#24292EFF"}},"</"),s("span",{style:{"--shiki-dark":"#8CAAEE","--shiki-light":"#22863A"}},"v-drag"),s("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#24292EFF"}},">")])])],-1)])),_:1},16),d(m,{markdownSource:[23,28,0],pos:"663,206,261,_,-15"},{default:o(()=>i[2]||(i[2]=[s("div",{"text-center":"","text-3xl":"",border:"","border-main":"",rounded:""}," Double-click me! ",-1)])),_:1}),I(s("img",j,null,512),[[y,"square"]]),i[10]||(i[10]=s("h6",null,"Draggable Arrow",-1)),d(e,E({},{ranges:[]}),{default:o(()=>i[3]||(i[3]=[s("pre",{class:"shiki shiki-themes catppuccin-frappe min-light slidev-code",style:{"--shiki-dark":"#c6d0f5","--shiki-light":"#24292eff","--shiki-dark-bg":"#303446","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-md"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#24292EFF"}},"<"),s("span",{style:{"--shiki-dark":"#8CAAEE","--shiki-light":"#22863A"}},"v-drag-arrow"),s("span",{style:{"--shiki-dark":"#E5C890","--shiki-light":"#6F42C1"}}," two-way"),s("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#24292EFF"}}," />")])])],-1)])),_:1},16),d(f,{markdownSource:[37,38,0],pos:"67,452,253,46","two-way":"",op70:""})]),_:1},16)}}},as=H;export{as as default};
