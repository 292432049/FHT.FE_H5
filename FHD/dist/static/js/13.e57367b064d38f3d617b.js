webpackJsonp([13],{"1WvG":function(e,t,a){var r=a("vrQC");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("rjj0")("fff4e04a",r,!0,{})},KE8z:function(e,t,a){"use strict";function r(e){a("1WvG")}Object.defineProperty(t,"__esModule",{value:!0});var n=a("mtWM"),s=a.n(n),i={data:function(){return{userData:{},endDate:null,nowUrl:null,startDate:null}},created:function(){if(this.userData=JSON.parse(localStorage.getItem("userData"))||{},window.JSUserInfo){var e=window.JSUserInfo.getHouseKeeperUserAction();localStorage.setItem("userData",e),this.userData=JSON.parse(e)}var t=new Date,a=t.getFullYear(),r=t.getMonth()+1,n=t.getDate();this.endDate=a+"-"+(r<10?"0"+r:r)+"-"+(n<10?"0"+n:n),this.startDate=a+"-"+(r<10?"0"+r:r)+"-"+(n<10?"0"+n:n)},mounted:function(){var e=this;window.refreshPage=function(t){var a=JSON.parse(t);e.upDataUrl(a)},e.upDataUrl(),s.a.get("//bi.mdguanjia.com/fh/ReportServer?op=fs_load&cmd=sso",{withCredentials:!0,params:{fr_username:this.userData.mobile,fr_password:this.userData.password}}).then(function(t){e.upDataUrl()}).catch(function(e){console.log(e)});var t=document.getElementById("external-frame");if(t){var a=t.contentWindow||t.contentDocument.parentWindow;a.document.body&&(t.height=a.document.documentElement.scrollHeight||a.document.body.scrollHeight)}},methods:{upDataUrl:function(e){if(console.log(e),e)switch(this.startDate=e.startTime,this.endDate=e.endTime,console.log(this.$route.query.type),this.$route.query.type){case"1":this.nowUrl="//bi.mdguanjia.com/fh/ReportServer?reportlet=fh%2FcityManagerAPP%2F%5B4e2a%5D%5B4eba%5D%5B4e1a%5D%5B7ee9%5D.cpt&op=h5&fid="+this.userData.id+"&startDate="+this.startDate+"&endDate="+this.endDate;break;case"2":console.log(e.leafDep),!0===e.leafDep?this.nowUrl="//bi.mdguanjia.com/fh/ReportServer?reportlet=fh%2FcityManagerAPP%2F%5B7ba1%5D%5B7406%5D%5B65e5%5D%5B62a5%5D.cpt&op=h5&depId="+e.depId+"&&startDate="+this.startDate+"&endDate="+this.endDate:this.nowUrl="//bi.mdguanjia.com/fh/ReportServer?reportlet=fh%2FcityManagerAPP%2F%5B7ba1%5D%5B7406%5D%5B65e5%5D%5B62a5%5D-%5B975e%5D%5B6700%5D%5B540e%5D%5B4e00%5D%5B7ea7%5D.cpt&op=h5&depId="+e.depId+"&&startDate="+this.startDate+"&endDate="+this.endDate}else"1"===this.$route.query.type?this.nowUrl="//bi.mdguanjia.com/fh/ReportServer?reportlet=fh%2FcityManagerAPP%2F%5B4e2a%5D%5B4eba%5D%5B4e1a%5D%5B7ee9%5D.cpt&op=h5&fid="+this.userData.id+"&startDate="+this.startDate+"&endDate="+this.endDate:!0===this.userData.leafDep?this.nowUrl="//bi.mdguanjia.com/fh/ReportServer?reportlet=fh%2FcityManagerAPP%2F%5B7ba1%5D%5B7406%5D%5B65e5%5D%5B62a5%5D.cpt&op=h5&depId="+this.userData.depId+"&&startDate="+this.startDate+"&endDate="+this.endDate:this.nowUrl="//bi.mdguanjia.com/fh/ReportServer?reportlet=fh%2FcityManagerAPP%2F%5B7ba1%5D%5B7406%5D%5B65e5%5D%5B62a5%5D-%5B975e%5D%5B6700%5D%5B540e%5D%5B4e00%5D%5B7ea7%5D.cpt&op=h5&depId="+this.userData.depId+"&&startDate="+this.startDate+"&endDate="+this.endDate}}},o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("iframe",{staticStyle:{"min-height":"500px"},attrs:{width:"100%",id:"external-frame",height:"500",src:e.nowUrl}})])},D=[],d={render:o,staticRenderFns:D},h=d,c=a("VU/8"),l=r,u=c(i,h,!1,l,"data-v-4d9b4ee0",null);t.default=u.exports},vrQC:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,"\n.container[data-v-4d9b4ee0] {\n  min-height: 100%;\n  background: #fff;\n}\n",""])}});