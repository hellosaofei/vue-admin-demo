"use strict";(self["webpackChunkvue_admin_demo"]=self["webpackChunkvue_admin_demo"]||[]).push([[27],{4027:function(t,e,a){a.r(e),a.d(e,{default:function(){return p}});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("el-tabs",{attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:"ElementUI icons"}},[a("el-col",{attrs:{span:24}},[a("el-form",{attrs:{inline:!0,"label-width":"80px"},nativeOn:{submit:function(t){t.preventDefault()}}},[a("el-form-item",{attrs:{label:"图标名称"}},[a("el-input",{model:{value:t.queryForm.title,callback:function(e){t.$set(t.queryForm,"title",e)},expression:"queryForm.title"}})],1),a("el-form-item",{attrs:{"label-width":"0"}},[a("el-button",{attrs:{"native-type":"submit",type:"primary"},on:{click:t.queryData}},[t._v(" 搜索 ")])],1)],1)],1),t._l(t.queryIcon,(function(e,n){return a("el-col",{key:n,staticStyle:{"padding-left":"10px","padding-right":"10px"},attrs:{lg:2,md:3,sm:8,xl:2,xs:6}},[a("el-card",{staticStyle:{cursor:"pointer"},attrs:{shadow:"hover"},nativeOn:{click:function(e){return t.handleCopyIcon(n,e)}}},[a("i",{class:"el-icon-"+e})]),a("div",{staticClass:"icon-text"},[t._v(" "+t._s(e)+" ")])],1)})),a("el-col",{attrs:{span:24}},[a("el-pagination",{attrs:{background:t.paginationSetting.background,"current-page":t.queryForm.pageNo,layout:t.paginationSetting.layout,"page-size":t.queryForm.pageSize,"page-sizes":[72,144],total:t.paginationSetting.total},on:{"current-change":t.handleCurrentChange,"size-change":t.handleSizeChange}})],1)],2),a("el-tab-pane",{attrs:{label:"others"}},[t._v("其他图标")])],1)],1)},r=[],i=a(9412);function o(t){return(0,i.A)({url:"/icon/getList",method:"get",data:t})}var l={name:"Icon",data(){return{copyText:"",selectRows:"",queryIcon:[],paginationSetting:{background:!0,layout:"total, sizes, prev, pager, next, jumper",total:0},queryForm:{pageNo:1,pageSize:72,title:""}}},mounted(){this.fetchData()},methods:{handleSizeChange(t){this.queryForm.pageSize=t,this.fetchData()},handleCurrentChange(t){this.queryForm.pageNo=t,this.fetchData()},handleCopyIcon(t,e){console.log(t,e)},queryData(){this.queryForm.pageNo=1,this.fetchData()},async fetchData(){const{data:t,totalCount:e}=await o(this.queryForm);this.queryIcon=t,this.paginationSetting.total=e}}},s=l,u=a(1656),c=(0,u.A)(s,n,r,!1,null,null,null),p=c.exports}}]);
//# sourceMappingURL=27.7eaf65d2.js.map