import{h as c,ay as y,br as R,a as d,bq as V,p as C,e as S,o as E,bt as I,ab as T,ac as z,d as G,ad as _,f as $,ae as O,i as x,b5 as B,aJ as U,l as F,bs as M,r as D,v as u,V as J,b8 as q}from"./main-fd579175.js";import{a as K}from"./VImg-1111a17c.js";function te(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",a=arguments.length>2?arguments[2]:void 0;return c()({name:a??y(R(e.replace(/__/g,"-"))),props:{tag:{type:String,default:s},...d()},setup(n,t){let{slots:l}=t;return()=>{var i;return V(n.tag,{class:[e,n.class],style:n.style},(i=l.default)==null?void 0:i.call(l))}}})}const g=["start","end","center"],k=["space-between","space-around","space-evenly"];function v(e,s){return I.reduce((a,n)=>{const t=e+y(n);return a[t]=s(),a},{})}const Y=[...g,"baseline","stretch"],b=e=>Y.includes(e),P=v("align",()=>({type:String,default:null,validator:b})),H=[...g,...k],j=e=>H.includes(e),h=v("justify",()=>({type:String,default:null,validator:j})),Q=[...g,...k,"stretch"],A=e=>Q.includes(e),w=v("alignContent",()=>({type:String,default:null,validator:A})),m={align:Object.keys(P),justify:Object.keys(h),alignContent:Object.keys(w)},W={align:"align",justify:"justify",alignContent:"align-content"};function X(e,s,a){let n=W[e];if(a!=null){if(s){const t=s.replace(e,"");n+=`-${t}`}return n+=`-${a}`,n.toLowerCase()}}const Z=C({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:b},...P,justify:{type:String,default:null,validator:j},...h,alignContent:{type:String,default:null,validator:A},...w,...d(),...S()},"VRow"),ne=c()({name:"VRow",props:Z(),setup(e,s){let{slots:a}=s;const n=E(()=>{const t=[];let l;for(l in m)m[l].forEach(i=>{const r=e[i],o=X(l,i,r);o&&t.push(o)});return t.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),t});return()=>{var t;return V(e.tag,{class:["v-row",n.value,e.class],style:e.style},(t=a.default)==null?void 0:t.call(a))}}});const p=C({start:Boolean,end:Boolean,icon:T,image:String,text:String,...d(),...z(),...G(),..._(),...S(),...$(),...O({variant:"flat"})},"VAvatar"),se=c()({name:"VAvatar",props:p(),setup(e,s){let{slots:a}=s;const{themeClasses:n}=x(e),{colorClasses:t,colorStyles:l,variantClasses:i}=B(e),{densityClasses:r}=U(e),{roundedClasses:o}=F(e),{sizeClasses:N,sizeStyles:L}=M(e);return D(()=>u(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},n.value,t.value,r.value,o.value,N.value,i.value,e.class],style:[l.value,L.value,e.style]},{default:()=>{var f;return[e.image?u(K,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?u(J,{key:"icon",icon:e.icon},null):((f=a.default)==null?void 0:f.call(a))??e.text,q(!1,"v-avatar")]}})),{}}});export{ne as V,se as a,te as c};
