import{m}from"./VAvatar-c949dc11.js";import{_ as u}from"./_plugin-vue_export-helper-c27b6911.js";import{V as p,a as f,c as h}from"./VCard-6c0ec275.js";import{r as _,o as g,c as w,a as t,w as a,b as l,i as D,e as n,t as c}from"./main-a0f635ce.js";import"./VImg-ce066be5.js";const b={data(){return{fileId:this.$route.params.fileId,items:[],headers:[{text:"User",value:"name",sortable:!0},{text:"Jabatan",value:"posname",sortable:!0},{text:"Dilihat",value:"count_views",sortable:!0},{text:"Terakhir dilihat",value:"latest_view",sortable:!0}],fileDetail:{}}},methods:{goBack(){this.$router.go(-1)},formatDate(s){return new Date(s).toLocaleDateString("id-ID")},async getListUserFilePopular(s){try{const e=await m.get(`/fileviewsbyid/${s}`);e.status===200?(this.items=e.data.data.userList,this.fileDetail=e.data.data.detailFile):this.$showToast("error","Sorry",e.data.data.message)}catch(e){this.$showToast("error","Sorry",e.response.data.data.message)}}},mounted(){this.getListUserFilePopular(this.fileId)}},x=l("p",null,"Data file Kosong",-1);function y(s,e,k,v,r,o){const d=_("EasyDataTable");return g(),w("div",null,[t(p,{class:"auth-card pa-4 pt-5"},{default:a(()=>[t(f,{class:"align-left"},{default:a(()=>[l("span",{color:"primary",onClick:e[0]||(e[0]=(...i)=>o.goBack&&o.goBack(...i)),style:{cursor:"pointer"}},[t(D,{icon:"bx-arrow-back",color:"primary",tag:"back",start:""}),n(" Back ")]),t(h,{class:"text-2xl font-weight-bold"},{default:a(()=>[n(" Detail Akses File : "+c(r.fileDetail.name??"-"),1)]),_:1}),t(d,{"show-index":"",headers:r.headers,items:r.items},{"empty-message":a(()=>[x]),"item-latest_view":a(i=>[l("span",null,c(o.formatDate(i.latest_view)),1)]),_:1},8,["headers","items"])]),_:1})]),_:1})])}const L=u(b,[["render",y]]);export{L as default};
