import{m}from"./VAvatar-c949dc11.js";import{o as c,c as f,a as o,w as s,e as d,b as p,d as g,V as u}from"./main-a0f635ce.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";import{V,a as F,c as y}from"./VCard-6c0ec275.js";import{V as P}from"./VForm-12a536ad.js";import{V as _,a as r}from"./VRow-dcc804f1.js";import{V as i}from"./VTextField-62b0c032.js";import{V as b}from"./VFileInput-209624d0.js";import"./VImg-ce066be5.js";import"./VInput-872f54a1.js";import"./index-5b9673f5.js";/* empty css              */import"./VChip-c2c4b442.js";const U={data(){return{dataForm:{name:"",email:"",password:null,nik:null,uuid:null,photo:null},displayPhoto:null,isPasswordVisible:!1,photoUrl:this.$userPhotoUrl}},methods:{cekForm(){},handlePhotoChange(a){const e=a.target.files[0];e&&["image/jpeg","image/png"].includes(e.type)?this.dataForm.photo=e:(this.$showToast("error","Error","Hanya file JPEG atau PNG yang diizinkan."),a.target.value=null)},async updateUserProfile(){try{const a=new FormData;a.append("uuid",this.dataForm.uuid),a.append("name",this.dataForm.name),a.append("email",this.dataForm.email),this.dataForm.password!==null&&a.append("password",this.dataForm.password),a.append("nik",this.dataForm.nik),this.dataForm.photo&&a.append("photo",this.dataForm.photo),a.append("_method","PUT");const e=await m.post("/updateUserProfile",a,{headers:{"Content-Type":"multipart/form-data"}});e.status===200?this.dataForm.password==null?(this.getUserProfile(),localStorage.setItem("userData",JSON.stringify(e.data.data)),window.location.reload(),this.$showToast("success","Success",e.data.message)):this.logout():this.$showToast("error","Sorry",e.data.message)}catch(a){this.$showToast("error","Sorry",a.response.data.message)}},async getUserProfile(){try{const a=await m.get("/userProfile");a.status===200?(this.dataForm.name=a.data.data.name,this.dataForm.email=a.data.data.email,this.dataForm.nik=a.data.data.nik,this.dataForm.uuid=a.data.data.uuid,this.displayPhoto=`${this.photoUrl}/${a.data.data.photo}`):this.$showToast("error","Sorry",a.data.data.message)}catch(a){this.$showToast("error","Sorry",a.data.data.message)}},async logout(){localStorage.removeItem("userData"),localStorage.removeItem("userToken"),this.$showToast("succces","Sukses","Berhasil Logout"),this.$router.push("/login")}},mounted(){this.getUserProfile()}},x={class:"profile-container"},k=["src"];function T(a,e,h,S,t,n){return c(),f("div",null,[o(V,{class:"auth-card pa-4 pt-5"},{default:s(()=>[o(F,{class:"align-left"},{default:s(()=>[o(y,{class:"text-2xl font-weight-bold"},{default:s(()=>[d(" User Profile ")]),_:1})]),_:1}),p("div",x,[p("img",{class:"profile-image",src:t.displayPhoto,alt:"User Profile Photo"},null,8,k)]),o(P,{class:"mt-6",onSubmit:g(n.updateUserProfile,["prevent"])},{default:s(()=>[o(_,null,{default:s(()=>[o(r,{md:"6",cols:"12"},{default:s(()=>[o(i,{placeholder:"John",label:"Nama",modelValue:t.dataForm.name,"onUpdate:modelValue":e[0]||(e[0]=l=>t.dataForm.name=l),autofocus:""},null,8,["modelValue"])]),_:1}),o(r,{cols:"12",md:"6"},{default:s(()=>[o(i,{label:"E-mail",placeholder:"johndoe@gmail.com",type:"email",modelValue:t.dataForm.email,"onUpdate:modelValue":e[1]||(e[1]=l=>t.dataForm.email=l)},null,8,["modelValue"])]),_:1}),o(r,{cols:"12",md:"6"},{default:s(()=>[o(i,{label:"NIK",modelValue:t.dataForm.nik,"onUpdate:modelValue":e[2]||(e[2]=l=>t.dataForm.nik=l)},null,8,["modelValue"])]),_:1}),o(r,{cols:"12",md:"6"},{default:s(()=>[o(i,{modelValue:t.dataForm.password,"onUpdate:modelValue":e[3]||(e[3]=l=>t.dataForm.password=l),label:"Password",placeholder:"············",type:t.isPasswordVisible?"text":"password","append-inner-icon":t.isPasswordVisible?"bx-hide":"bx-show","onClick:appendInner":e[4]||(e[4]=l=>t.isPasswordVisible=!t.isPasswordVisible)},null,8,["modelValue","type","append-inner-icon"])]),_:1}),o(r,{cols:"12",md:"6"},{default:s(()=>[o(b,{accept:"image/png, image/jpeg, image/bmp",placeholder:"Pick an photo","prepend-icon":"mdi-camera",label:"Photo",onChange:n.handlePhotoChange},null,8,["onChange"])]),_:1}),o(r,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:s(()=>[o(u,{type:"submit"},{default:s(()=>[d("Update changes")]),_:1}),o(u,{color:"secondary",variant:"tonal",type:"reset"},{default:s(()=>[d(" Reset ")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])]),_:1})])}const H=w(U,[["render",T]]);export{H as default};
