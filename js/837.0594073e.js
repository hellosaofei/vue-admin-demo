"use strict";(self["webpackChunkvue_admin_demo"]=self["webpackChunkvue_admin_demo"]||[]).push([[837],{4837:function(t,e,o){o.r(e),o.d(e,{default:function(){return h}});var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app-container"},[o("el-table",{ref:"tableSort",attrs:{border:!0,data:t.tableItemList,height:t.height},on:{"selection-change":t.setSelectRows,"sort-change":t.tableSortChange}},[o("el-table-column",{attrs:{"show-overflow-tooltip":"",type:"selection",width:"55"}}),o("el-table-column",{attrs:{label:"序号","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.$index+1)+" ")]}}])}),o("el-table-column",{attrs:{label:"商品ID",prop:"good_id","show-overflow-tooltip":"",width:"200"}}),o("el-table-column",{attrs:{label:"商品名称",prop:"good_name","show-overflow-tooltip":"",width:"150"}}),o("el-table-column",{attrs:{label:"商品图","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[o("el-popover",{attrs:{placement:"top",width:"50px",trigger:"hover"}},[o("el-image",{staticStyle:{width:"50px"},attrs:{src:a.good_image}}),t.imgShow?o("el-image",{staticStyle:{width:"50px","border-radius":"8%"},attrs:{slot:"reference","preview-src-list":t.imageList,src:a.good_image},slot:"reference"}):t._e()],1)]}}])}),o("el-table-column",{attrs:{label:"评级","show-overflow-tooltip":"",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[o("el-rate",{attrs:{disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value}分"},model:{value:a.rate,callback:function(e){t.$set(a,"rate",e)},expression:"row.rate"}})]}}])}),o("el-table-column",{attrs:{label:"评论内容",prop:"comment_content","show-overflow-tooltip":"",width:"200"}}),o("el-table-column",{attrs:{label:"回复内容",prop:"reply_content","show-overflow-tooltip":"",width:"200"}}),o("el-table-column",{attrs:{label:"评论状态","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row;return[o("el-tooltip",{staticClass:"item",attrs:{content:t._f("statusContent")(a.status),effect:"dark",placement:"top-start"}},[o("el-tag",{attrs:{type:t._f("statusFilter")(a.status)}},[t._v(" "+t._s(t._f("statusContent")(a.status))+" ")])],1)]}}])}),o("el-table-column",{attrs:{label:"评论时间",prop:"date","show-overflow-tooltip":"",width:"180"}})],1),o("div",{staticClass:"pagination-area"},[o("el-pagination",{attrs:{"current-page":t.queryForm.pageNo,"page-size":t.queryForm.pageSize,layout:t.paginationSetting.layout,background:t.paginationSetting.background,total:t.paginationSetting.total},on:{"current-change":t.handleCurrentChange,"size-change":t.handleSizeChange}})],1)],1)},l=[],s=(o(4114),o(9412));function r(t){return(0,s.A)({url:"/comment/getList",method:"post",data:t})}var n={name:"CommentCom",data(){return{imgShow:!0,imageList:[],tableItemList:[],height:"400px",selectRows:"",paginationSetting:{background:!0,layout:"total, sizes, prev, pager, next, jumper",total:0},queryForm:{pageNo:1,pageSize:20,title:""}}},filters:{statusFilter(t){const e=["","success","danger"];return e[t]},statusContent(t){const e=["","已回复","未回复"];return e[t]}},mounted(){this.fetchData()},methods:{tableSortChange(){const t=[];this.$refs.tableSort.tableData.forEach(((e,o)=>{t.push(e.img)})),this.imageList=t},setSelectRows(t){this.selectRows=t},handleCurrentChange(t){this.queryForm.pageNo=t,this.fetchData()},handleSizeChange(t){this.queryForm.pageSize=t,this.fetchData()},handleEdit(t){console.log(t)},handleDelete(t){console.log("删除"+t)},async fetchData(){const{data:t,totalCount:e}=await r(this.queryForm);this.tableItemList=t,t.forEach((t=>{this.imageList.push(t.img)})),this.paginationSetting.total=e}}},i=n,c=o(1656),u=(0,c.A)(i,a,l,!1,null,null,null),h=u.exports}}]);
//# sourceMappingURL=837.0594073e.js.map