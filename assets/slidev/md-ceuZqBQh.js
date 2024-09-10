import{d as _,r as D,K as p,o as a,c as g,k as f,f as C,b as d,z as T,F as P,Z as L,i as m,l as k,g as $,h as F,e,H as B,J as N,I as h,m as I,q as w,s as H}from"../modules/vue-BJ3NjBU7.js";import{u as S,f as M}from"./context-rudbYNSz.js";import{k as V}from"../index-B-b12fiZ.js";import{f as E}from"../monaco/bundled-types-B4UFH0lj.js";import{_ as z}from"./title-renderer.md_vue_type_script_setup_true_lang-BlcSzJOt.js";import{_ as O}from"./CodeBlockWrapper.vue_vue_type_script_setup_true_lang-Bml9R6bP.js";import"../modules/shiki-VFpPEGO7.js";import"../modules/file-saver-igGfcqei.js";import"../modules/unplugin-icons-9CGvLFhI.js";const R=["href","innerHTML"],Y=["href"],q=_({__name:"Link",props:{to:{},title:{}},setup(u){const{isPrintMode:n}=V();return(s,o)=>{const r=D("RouterLink");return!p(n)&&s.title?(a(),g(r,{key:0,to:String(s.to),onClick:o[0]||(o[0]=c=>c.target.blur()),innerHTML:s.title},null,8,["to","innerHTML"])):!p(n)&&!s.title?(a(),g(r,{key:1,to:String(s.to),onClick:o[1]||(o[1]=c=>c.target.blur())},{default:f(()=>[C(s.$slots,"default")]),_:3},8,["to"])):p(n)&&s.title?(a(),d("a",{key:2,href:`#${s.to}`,innerHTML:s.title},null,8,R)):(a(),d("a",{key:3,href:`#${s.to}`},[C(s.$slots,"default")],8,Y))}}}),J=["start"],K=_({__name:"TocList",props:{level:{default:1},start:{},listStyle:{},list:{},listClass:{}},setup(u){const n=u,s=T(()=>[...E(n.listClass||[]),"slidev-toc-list",`slidev-toc-list-level-${n.level}`]),o=T(()=>[...E(n.listStyle||[])]);return(r,c)=>{const v=q,i=D("TocList",!0);return r.list&&r.list.length>0?(a(),d("ol",{key:0,class:m(s.value),start:r.level===1?r.start:void 0,style:F(o.value.length>=r.level?`list-style:${o.value[r.level-1]}`:void 0)},[(a(!0),d(P,null,L(r.list,t=>(a(),d("li",{key:t.path,class:m(["slidev-toc-item",[{"slidev-toc-item-active":t.active},{"slidev-toc-item-parent-active":t.activeParent}]])},[k(v,{to:t.path},{default:f(()=>[k(p(z),{no:t.no},null,8,["no"])]),_:2},1032,["to"]),t.children.length>0?(a(),g(i,{key:0,level:r.level+1,"list-style":r.listStyle,list:t.children,"list-class":r.listClass},null,8,["level","list-style","list","list-class"])):$("",!0)],2))),128))],14,J)):$("",!0)}}}),W=_({__name:"Toc",props:{columns:{default:1},listClass:{default:""},start:{default:1},listStyle:{default:""},maxDepth:{default:Number.POSITIVE_INFINITY},minDepth:{default:1},mode:{default:"all"}},setup(u){const n=u,{$slidev:s}=S();function o(i,t=1){if(t>Number(n.maxDepth))return[];if(t<Number(n.minDepth)){const l=i.find(y=>y.active||y.activeParent);return l?o(l.children,t+1):[]}return i.map(l=>({...l,children:o(l.children,t+1)}))}function r(i){return i.filter(t=>t.active||t.activeParent||t.hasActiveParent).map(t=>({...t,children:r(t.children)}))}function c(i){const t=i.some(l=>l.active||l.activeParent||l.hasActiveParent);return i.filter(()=>t).map(l=>({...l,children:c(l.children)}))}const v=T(()=>{const i=s==null?void 0:s.nav.tocTree;if(!i)return[];let t=o(i);return n.mode==="onlyCurrentTree"?t=r(t):n.mode==="onlySiblings"&&(t=c(t)),t});return(i,t)=>(a(),d("div",{class:"slidev-toc",style:F(`column-count:${i.columns}`)},[k(K,{level:1,start:i.start,"list-style":i.listStyle,list:v.value,"list-class":i.listClass},null,8,["start","list-style","list","list-class"])],4))}}),Z=_({__name:"two-cols",props:{class:{type:String},layoutClass:{type:String}},setup(u){const n=u;return(s,o)=>(a(),d("div",{class:m(["slidev-layout two-columns w-full h-full grid grid-cols-2",n.layoutClass])},[e("div",{class:m(["col-left",n.class])},[C(s.$slots,"default")],2),e("div",{class:m(["col-right",n.class])},[C(s.$slots,"right")],2)],2))}}),j={__name:"slides.md__slidev_4",setup(u){const{$slidev:n,$nav:s,$clicksContext:o,$clicks:r,$page:c,$renderContext:v,$frontmatter:i}=S();return o.setup(),(t,l)=>{const y=O,A=W,b=B("click");return a(),g(Z,w(H(p(M)(p(i),3))),{right:f(G=>[N(k(A,{minDepth:"1",maxDepth:"2"},null,512),[[b]])]),default:f(()=>[l[1]||(l[1]=e("h1",null,"Table of contents",-1)),l[2]||(l[2]=e("p",null,[h("You can use the "),e("code",null,"Toc"),h(" component to generate a table of contents for your slides:")],-1)),k(y,I({},{ranges:[]}),{default:f(()=>l[0]||(l[0]=[e("pre",{class:"shiki shiki-themes catppuccin-frappe min-light slidev-code",style:{"--shiki-dark":"#c6d0f5","--shiki-light":"#24292eff","--shiki-dark-bg":"#303446","--shiki-light-bg":"#ffffff"}},[e("code",{class:"language-html"},[e("span",{class:"line"},[e("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#24292EFF"}},"<"),e("span",{style:{"--shiki-dark":"#8CAAEE","--shiki-light":"#22863A"}},"Toc"),e("span",{style:{"--shiki-dark":"#E5C890","--shiki-light":"#6F42C1"}}," minDepth"),e("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"="),e("span",{style:{"--shiki-dark":"#A6D189","--shiki-light":"#22863A"}},'"1"'),e("span",{style:{"--shiki-dark":"#E5C890","--shiki-light":"#6F42C1"}}," maxDepth"),e("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#D32F2F"}},"="),e("span",{style:{"--shiki-dark":"#A6D189","--shiki-light":"#22863A"}},'"1"'),e("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#24292EFF"}},"></"),e("span",{style:{"--shiki-dark":"#8CAAEE","--shiki-light":"#22863A"}},"Toc"),e("span",{style:{"--shiki-dark":"#81C8BE","--shiki-light":"#24292EFF"}},">")])])],-1)])),_:1},16),l[3]||(l[3]=e("p",null,[h("The title will be inferred from your slide content, or you can override it with "),e("code",null,"title"),h(" and "),e("code",null,"level"),h(" in your frontmatter.")],-1))]),_:1},16)}}},nt=j;export{nt as default};
