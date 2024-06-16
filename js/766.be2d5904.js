"use strict";(self["webpackChunkvue_admin_demo"]=self["webpackChunkvue_admin_demo"]||[]).push([[766],{644:function(t,e,a){a.d(e,{A:function(){return c}});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticClass:"box-card",style:{width:t.cardWidth}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v(t._s(t.cardName))])]),t._t("default")],2)},n=[],i={name:"ContentCard",data(){return{}},props:{cardName:{type:String,default:"内容卡片"},cardWidth:{type:String,default:"480px"}}},s=i,l=a(1656),h=(0,l.A)(s,r,n,!1,null,null,null),c=h.exports},5766:function(t,e,a){a.r(e),a.d(e,{default:function(){return Y}});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container chart-container"},[a("BarChart"),a("ScatterChart"),a("ScoreRing"),a("RadarChart"),a("SunriseChart")],1)},n=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("content-card",{attrs:{cardName:"柱状图"}},[a("div",{staticStyle:{width:"100%",height:"300px"},attrs:{id:"chartArea"}})])},s=[],l=a(644);const h={methods:{startInterval(){this.timer&&clearInterval(this.timer),this.timer=setInterval((()=>{this.updateChart()}),3e3)}}};var c=h,d={name:"BarChart",components:{ContentCard:l.A},mixins:[c],data(){return{chartInstance:null,data:[57,20,30,70],timer:null}},mounted(){this.initChart(),this.startInterval()},destroyed(){clearInterval(this.timer)},methods:{initChart(){this.chartInstance=this.$echarts.init(document.getElementById("chartArea"));const t={xAxis:{data:["衬衫","羊毛衫","高跟鞋","袜子"]},yAxis:{},series:[{name:"销量",type:"bar",data:this.data}]};this.chartInstance.setOption(t)},updateChart(){const t=this.data.map((t=>(100*Math.random()).toFixed(2)));this.chartInstance.setOption({series:[{data:t}]})}}},o=d,u=a(1656),m=(0,u.A)(o,i,s,!1,null,null,null),p=m.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("content-card",{attrs:{cardName:"散点图"}},[a("div",{ref:"scatterArea",staticStyle:{width:"100%",height:"300px"}})])},f=[];const C=[[161.2,51.6],[167.5,59],[159.5,49.2],[157,63],[155.8,53.6],[170,59],[159.1,47.6],[166,69.8],[176.2,66.8],[160.2,75.2]],x=[[174,65.6],[175.3,71.8],[193.5,80.7],[186.5,72.6],[187.2,78.8],[181.5,74.8],[184,86.4],[184.5,78.4],[175,62],[184,81.6]];function I(t,e){let a=0;for(var r=0;r<t.length;r++)a+=t[r][e];return a/t.length}const y={xAxis:{scale:!0},yAxis:{scale:!0},series:[{type:"scatter",id:"female",dataGroupId:"female",universalTransition:{enabled:!0,delay:function(t,e){return 400*Math.random()}},data:C},{type:"scatter",id:"male",dataGroupId:"male",universalTransition:{enabled:!0,delay:function(t,e){return 400*Math.random()}},data:x}]},A={xAxis:{type:"category",data:["Female","Male"]},yAxis:{},series:[{type:"bar",id:"total",data:[{value:I(x,0),groupId:"male"},{value:I(C,0),groupId:"female"}],universalTransition:{enabled:!0,seriesKey:["female","male"],delay:function(t,e){return 400*Math.random()}}}]};var g={name:"ScatterChart",components:{ContentCard:l.A},mixins:[c],data(){return{chartInstance:null,timer:null,currentOption:null}},mounted(){this.initChart(),this.startInterval()},destroyed(){clearInterval(this.timer)},computed:{scatterOption(){return y},barOption(){return A}},methods:{initChart(){this.chartInstance=this.$echarts.init(this.$refs.scatterArea),this.chartInstance.setOption(this.scatterOption),this.currentOption=this.scatterOption},updateChart(){this.currentOption=this.currentOption===this.scatterOption?this.barOption:this.scatterOption,this.chartInstance.setOption(this.currentOption,!0)}}},O=g,S=(0,u.A)(O,v,f,!1,null,null,null),_=S.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("content-card",{attrs:{cardName:"得分环"}},[a("div",{ref:"scoreArea",staticStyle:{width:"100%",height:"300px"}})])},$=[];const w=[{value:20,title:{offsetCenter:["0%","-30%"]},detail:{valueAnimation:!0,offsetCenter:["0%","-20%"]}},{value:40,title:{offsetCenter:["0%","0%"]},detail:{valueAnimation:!0,offsetCenter:["0%","10%"]}},{value:60,title:{offsetCenter:["0%","30%"]},detail:{valueAnimation:!0,offsetCenter:["0%","40%"]}}];let E={series:[{type:"gauge",startAngle:90,endAngle:-270,pointer:{show:!1},progress:{show:!0,overlap:!1,roundCap:!0,clip:!1,itemStyle:{borderWidth:1,borderColor:"#464646"}},axisLine:{lineStyle:{width:40}},splitLine:{show:!1,distance:0,length:10},axisTick:{show:!1},axisLabel:{show:!1,distance:50},data:w,title:{fontSize:14},detail:{width:50,height:14,fontSize:14,color:"inherit",borderColor:"inherit",borderRadius:20,borderWidth:1,formatter:"{value}%"}}]};var F={name:"ScoreRing",components:{ContentCard:l.A},mixins:[c],data(){return{chartInstance:null,timer:null,data:[]}},mounted(){this.initChart(),this.startInterval()},destroyed(){clearInterval(this.timer)},methods:{initChart(){this.chartInstance=this.$echarts.init(this.$refs.scoreArea),this.chartInstance.setOption(E),this.data=w},updateChart(){this.data.forEach(((t,e)=>{this.data[e].value=+(100*Math.random()).toFixed(2)})),this.chartInstance.setOption({series:[{data:this.data}]})}}},M=F,R=(0,u.A)(M,b,$,!1,null,null,null),N=R.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("content-card",{attrs:{cardName:"雷达图"}},[a("div",{ref:"radarArea",staticStyle:{width:"100%",height:"300px"}})])},D=[],T={name:"RadarChart",components:{ContentCard:l.A},mixins:[c],data(){return{chartInstance:null,timer:null,data:[42,30,20,35,50,18],currentOption:null}},mounted(){this.$nextTick((()=>{this.initChart(),this.startInterval()}))},destroyed(){clearInterval(this.timer)},computed:{},methods:{initChart(){this.chartInstance=this.$echarts.init(this.$refs.radarArea);let t={radar:{indicator:[{max:100},{max:100},{max:100},{max:100},{max:100},{max:100}]},series:[{type:"radar",data:[{value:this.data}],pointer:{show:!1}}]};this.chartInstance.setOption(t)},updateChart(){this.data=this.data.map((t=>(100*Math.random()).toFixed(2))),this.chartInstance.setOption({series:[{data:[{value:this.data}]}]})},startInterval(){this.timer&&clearInterval(this.timer),this.timer=setInterval((()=>{this.updateChart()}),3e3)}}},B=T,W=(0,u.A)(B,k,D,!1,null,null,null),L=W.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("content-card",{attrs:{cardName:"旭日图"}},[a("div",{ref:"sunriseArea",staticStyle:{width:"100%",height:"300px"}})])},G=[];const K=[{value:8,children:[{value:4,children:[{value:2},{value:1},{value:1},{value:.5}]},{value:2}]},{value:4,children:[{children:[{value:2}]}]},{value:4,children:[{children:[{value:2}]}]},{value:3,children:[{children:[{value:1}]}]}],j=[{value:5,children:[{children:[{value:3}]}]},{value:3,children:[{children:[{value:2}]}]},{value:9,children:[{value:6,children:[{value:1},{value:.5},{value:.5}]},{value:2}]},{value:2,children:[{children:[{value:1}]}]}];let q={silent:!0,series:[{radius:["15%","80%"],type:"sunburst",sort:void 0,emphasis:{focus:"ancestor"},data:K,levels:[{itemStyle:{color:"#CD4949"},label:{rotate:"radial"}},{itemStyle:{color:"#F47251"},label:{rotate:"tangential"}},{itemStyle:{color:"#FFC75F"},label:{rotate:0}}]}]};var H={name:"ScoreRing",components:{ContentCard:l.A},mixins:[c],data(){return{chartInstance:null,timer:null,currentData:null}},mounted(){this.initChart(),this.startInterval()},destroyed(){clearInterval(this.timer)},methods:{initChart(){this.chartInstance=this.$echarts.init(this.$refs.sunriseArea),this.chartInstance.setOption(q),this.currentData=K},updateChart(){this.currentData=this.currentData===K?j:K,this.chartInstance.setOption({series:[{data:this.currentData}]})}}},J=H,P=(0,u.A)(J,z,G,!1,null,null,null),Q=P.exports,U={name:"MyChart",components:{BarChart:p,ScatterChart:_,ScoreRing:N,RadarChart:L,SunriseChart:Q}},V=U,X=(0,u.A)(V,r,n,!1,null,"4633896a",null),Y=X.exports}}]);
//# sourceMappingURL=766.be2d5904.js.map