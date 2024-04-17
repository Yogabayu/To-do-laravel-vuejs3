import{a as Q,b as W,u as Y,V as M,f as Z,d as ee,e as le}from"./VInput-872f54a1.js";import{f as te}from"./index-5b9673f5.js";import{O as ne,b2 as ae,T as oe,aj as ue,aq as ie,k as s,bB as $,n as h,y as se,X as re,aS as ce,a as o,M as V,G as C,A as de,aU as fe}from"./main-a0f635ce.js";import{V as ve}from"./VChip-c2c4b442.js";const me=ne({chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,showSize:{type:[Boolean,Number],default:!1,validator:e=>typeof e=="boolean"||[1e3,1024].includes(e)},...Q({prependIcon:"$file"}),modelValue:{type:Array,default:()=>[],validator:e=>ae(e).every(f=>f!=null&&typeof f=="object")},...W({clearable:!0})},"VFileInput"),ke=oe()({name:"VFileInput",inheritAttrs:!1,props:me(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,f){let{attrs:D,emit:k,slots:n}=f;const{t:g}=ue(),a=ie(e,"modelValue"),{isFocused:v,focus:N,blur:j}=Y(e),I=s(()=>typeof e.showSize!="boolean"?e.showSize:void 0),b=s(()=>(a.value??[]).reduce((l,t)=>{let{size:r=0}=t;return l+r},0)),F=s(()=>$(b.value,I.value)),p=s(()=>(a.value??[]).map(l=>{const{name:t="",size:r=0}=l;return e.showSize?`${t} (${$(r,I.value)})`:t})),x=s(()=>{var t;const l=((t=a.value)==null?void 0:t.length)??0;return e.showSize?g(e.counterSizeString,l,F.value):g(e.counterString,l)}),S=h(),P=h(),i=h(),U=s(()=>v.value||e.active),z=s(()=>["plain","underlined"].includes(e.variant));function y(){var l;i.value!==document.activeElement&&((l=i.value)==null||l.focus()),v.value||N()}function E(l){w(l)}function O(l){k("mousedown:control",l)}function w(l){var t;(t=i.value)==null||t.click(),k("click:control",l)}function T(l){l.stopPropagation(),y(),de(()=>{a.value=[],fe(e["onClick:clear"],l)})}return se(a,l=>{(!Array.isArray(l)||!l.length)&&i.value&&(i.value.value="")}),re(()=>{const l=!!(n.counter||e.counter),t=!!(l||n.details),[r,q]=ce(D),{modelValue:pe,...G}=M.filterProps(e),L=Z(e);return o(M,V({ref:S,modelValue:a.value,"onUpdate:modelValue":c=>a.value=c,class:["v-file-input",{"v-file-input--chips":!!e.chips,"v-input--plain-underlined":z.value},e.class],style:e.style,"onClick:prepend":E},r,G,{centerAffix:!z.value,focused:v.value}),{...n,default:c=>{let{id:m,isDisabled:d,isDirty:A,isReadonly:R,isValid:X}=c;return o(ee,V({ref:P,"prepend-icon":e.prependIcon,onMousedown:O,onClick:w,"onClick:clear":T,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},L,{id:m.value,active:U.value||A.value,dirty:A.value,disabled:d.value,focused:v.value,error:X.value===!1}),{...n,default:_=>{var B;let{props:{class:H,...J}}=_;return o(C,null,[o("input",V({ref:i,type:"file",readonly:R.value,disabled:d.value,multiple:e.multiple,name:e.name,onClick:u=>{u.stopPropagation(),R.value&&u.preventDefault(),y()},onChange:u=>{if(!u.target)return;const K=u.target;a.value=[...K.files??[]]},onFocus:y,onBlur:j},J,q),null),o("div",{class:H},[!!((B=a.value)!=null&&B.length)&&(n.selection?n.selection({fileNames:p.value,totalBytes:b.value,totalBytesReadable:F.value}):e.chips?p.value.map(u=>o(ve,{key:u,size:"small",color:e.color},{default:()=>[u]})):p.value.join(", "))])])}})},details:t?c=>{var m,d;return o(C,null,[(m=n.details)==null?void 0:m.call(n,c),l&&o(C,null,[o("span",null,null),o(le,{active:!!((d=a.value)!=null&&d.length),value:x.value},n.counter)])])}:void 0})}),te({},S,P,i)}});export{ke as V};
