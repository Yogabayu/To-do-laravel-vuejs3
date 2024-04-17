import{a as H,b as J,u as K,V as b,f as L,d as Q,e as W}from"./VInput-872f54a1.js";import{f as Y}from"./index-5b9673f5.js";import{O as Z,T as $,aq as ee,k as v,n as x,X as te,aS as ne,a as n,M as V,an as le,ay as ae,G as y,aT as ue,A as S,aU as ie}from"./main-a0f635ce.js";import{I as oe}from"./VImg-ce066be5.js";const re=["color","file","time","date","datetime-local","week","month"],se=Z({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...H(),...J()},"VTextField"),xe=$()({name:"VTextField",directives:{Intersect:oe},inheritAttrs:!1,props:se(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,w){let{attrs:m,emit:g,slots:l}=w;const i=ee(e,"modelValue"),{isFocused:r,focus:T,blur:A}=K(e),p=v(()=>typeof e.counterValue=="function"?e.counterValue(i.value):typeof e.counterValue=="number"?e.counterValue:(i.value??"").toString().length),D=v(()=>{if(m.maxlength)return m.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter}),C=v(()=>["plain","underlined"].includes(e.variant));function M(t,a){var u,o;!e.autofocus||!t||(o=(u=a[0].target)==null?void 0:u.focus)==null||o.call(u)}const k=x(),h=x(),s=x(),R=v(()=>re.includes(e.type)||e.persistentPlaceholder||r.value||e.active);function d(){var t;s.value!==document.activeElement&&((t=s.value)==null||t.focus()),r.value||T()}function B(t){g("mousedown:control",t),t.target!==s.value&&(d(),t.preventDefault())}function N(t){d(),g("click:control",t)}function E(t){t.stopPropagation(),d(),S(()=>{i.value=null,ie(e["onClick:clear"],t)})}function O(t){var u;const a=t.target;if(i.value=a.value,(u=e.modelModifiers)!=null&&u.trim&&["text","search","password","tel","url"].includes(e.type)){const o=[a.selectionStart,a.selectionEnd];S(()=>{a.selectionStart=o[0],a.selectionEnd=o[1]})}}return te(()=>{const t=!!(l.counter||e.counter!==!1&&e.counter!=null),a=!!(t||l.details),[u,o]=ne(m),{modelValue:ce,...U}=b.filterProps(e),j=L(e);return n(b,V({ref:k,modelValue:i.value,"onUpdate:modelValue":c=>i.value=c,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-input--plain-underlined":C.value},e.class],style:e.style},u,U,{centerAffix:!C.value,focused:r.value}),{...l,default:c=>{let{id:f,isDisabled:F,isDirty:P,isReadonly:q,isValid:z}=c;return n(Q,V({ref:h,onMousedown:B,onClick:N,"onClick:clear":E,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:e.role},j,{id:f.value,active:R.value||P.value,dirty:P.value||e.dirty,disabled:F.value,focused:r.value,error:z.value===!1}),{...l,default:G=>{let{props:{class:I,...X}}=G;const _=le(n("input",V({ref:s,value:i.value,onInput:O,autofocus:e.autofocus,readonly:q.value,disabled:F.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:d,onBlur:A},X,o),null),[[ae("intersect"),{handler:M},null,{once:!0}]]);return n(y,null,[e.prefix&&n("span",{class:"v-text-field__prefix"},[n("span",{class:"v-text-field__prefix__text"},[e.prefix])]),l.default?n("div",{class:I,"data-no-activator":""},[l.default(),_]):ue(_,{class:I}),e.suffix&&n("span",{class:"v-text-field__suffix"},[n("span",{class:"v-text-field__suffix__text"},[e.suffix])])])}})},details:a?c=>{var f;return n(y,null,[(f=l.details)==null?void 0:f.call(l,c),t&&n(y,null,[n("span",null,null),n(W,{active:e.persistentCounter||r.value,value:p.value,max:D.value},l.counter)])])}:void 0})}),Y({},k,h,s)}});export{xe as V,se as m};
