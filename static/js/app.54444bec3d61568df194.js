webpackJsonp([12],{"/krj":function(t,e,i){"use strict";var n={props:{title:String,mainImage:String,tabIcon:String,tabs:Array},methods:{changeTab:function(t){this.$emit("changeTab",t)}}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticClass:"white--text text-center mb-3",attrs:{flat:"",tile:"",width:"100%"}},[i("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:t.mainImage}},[i("v-card-text",{staticClass:"text-center"},[i("div",{staticClass:"display-1 white--text text-center pa-3"},[t._v(t._s(t.title))]),t._v(" "),t.tabs?i("div",{staticClass:"d-flex flex-nowrap text-center justify-center"},t._l(t.tabs,function(e,n){return i("div",{key:n},[i("v-btn",{staticClass:"white--text mr-2",class:{success:e.active},attrs:{outlined:""},on:{click:function(i){return t.changeTab(e.id)}}},[i("v-icon",[t._v(t._s(e.tabIcon))]),t._v("\n            "+t._s(e.title)+"\n        ")],1)],1)}),0):t._e()])],1)],1)},staticRenderFns:[]},s=i("VU/8")(n,a,!1,null,null,null);e.a=s.exports},"7zck":function(t,e){},A1K6:function(t,e,i){t.exports=i.p+"static/img/bg.13d57d4.jpg"},"DM+Z":function(t,e,i){t.exports=i.p+"static/img/deal1.34dd409.jpg"},EOa9:function(t,e,i){t.exports=i.p+"static/img/type74b.2f5cbe7.png"},IX1A:function(t,e,i){t.exports=i.p+"static/img/deal4.4bb1400.jpg"},KOuv:function(t,e,i){t.exports=i.p+"static/img/main_banner_03.6360c4b.jpg"},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),a=i("3EgV"),s=i.n(a);i("7zck"),i("Ui3i");n.default.use(s.a);var o=new s.a({theme:{themes:{light:{primary:"#218e49",secondary:"#2D3753",accent:"#3AE3D6",error:"#f44336",info:"#4c5831",success:"#6ea75d",warning:"#f78012"}}}}),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]},c=i("VU/8")({name:"App"},r,!1,null,null,null).exports,l=i("/ocq"),v={data:function(){return{activeBtn:1,colors:["indigo","warning","pink darken-2","red lighten-1","deep-purple accent-4"],bottomMenus:[{title:"사업개요",image:i("DM+Z"),path:"/overview"},{title:"입지환경",image:i("uMNc"),path:"/environment"},{title:"입지환경",image:i("kx0P"),path:"/environment"}],premiumMenus:[{title:"프리미엄1",image:i("DM+Z"),path:"/overview"},{title:"프리미엄2",image:i("uMNc"),path:"/environment"},{title:"프리미엄3",image:i("kx0P"),path:"/environment"},{title:"프리미엄4",image:i("IX1A"),path:"/environment"}],types:[{title:"59㎡ 타입",image:i("w8X4"),description:"59㎡ 설명입니다.",houseType:"a"},{title:"74㎡ 타입",image:i("EOa9"),description:"74㎡ 설명입니다.",houseType:"b"},{title:"84㎡ 타입",image:i("r28I"),description:"84㎡ 설명입니다.",houseType:"c"}],mainSlides:[{image:i("oxkb"),description:"여기에 설명을 넣습니다"},{image:i("XDce"),description:"여기에 설명을 넣습니다"},{image:i("KOuv"),description:"여기에 설명을 넣습니다"},{image:i("NXXY")},{image:i("Upgr")}]}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",{staticClass:"pl-4 pr-4"},[n("div",{staticClass:"col-md-6 col-sm-6 col-xs-12"},[n("v-card",[n("v-img",{staticClass:"white--text align-center",attrs:{src:i("oxkb"),gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"400px"}},[n("h1",{staticClass:"text-center font-size"},[t._v("VR 파노라마")]),t._v(" "),n("div",{staticClass:"text-center"},[n("v-btn",{staticClass:"white--text ",attrs:{to:"/vr",outlined:""}},[t._v("보러 가기")])],1)])],1)],1),t._v(" "),n("div",{staticClass:"col-md-6 col-sm-6 col-xs-12"},[n("v-card",[n("v-img",{staticClass:"white--text align-center",attrs:{src:i("KOuv"),gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"400px"}},[n("h1",{staticClass:"text-center font-size"},[t._v("단지 배치도")]),t._v(" "),n("div",{staticClass:"text-center"},[n("v-btn",{staticClass:"white--text",attrs:{to:"/danji",outlined:""}},[t._v("보러 가기")])],1)])],1)],1)]),t._v(" "),n("v-card-text",{attrs:{tile:"",outlined:""}},[n("v-card-title",{staticClass:"subheading "},[t._v("프리미엄")]),t._v(" "),n("v-divider"),t._v(" "),n("div",{staticClass:"pl-4 pr-4 row"},t._l(t.premiumMenus,function(e,i){return n("div",{key:i,staticClass:"col-md-3 col-sm-3 col-xs-12"},[n("v-card",{attrs:{outlined:""}},[n("v-img",{staticClass:"white--text align-center",attrs:{src:e.image,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"300px"}},[n("h1",{staticClass:"text-center font-size"},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"text-center mt-2"},[n("v-btn",{staticClass:"white--text",attrs:{to:e.path,outlined:""}},[t._v("\n              보러 가기 "),n("v-icon",{staticClass:"white--text caption"},[t._v("mdi-arrow-right")])],1)],1)])],1)],1)}),0)],1),t._v(" "),n("v-container",[n("div",{staticClass:"pl-4 pr-4 row"},t._l(t.bottomMenus,function(e,i){return n("div",{key:i,staticClass:"col-md-4 col-sm-4 col-xs-12"},[n("v-card",{attrs:{outlined:""}},[n("v-img",{staticClass:"white--text align-center",attrs:{src:e.image,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"300px"}},[n("h1",{staticClass:"text-center font-size"},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"text-center mt-2"},[n("v-btn",{staticClass:"white--text",attrs:{href:e.path,outlined:""}},[t._v("\n              보러가기 "),n("v-icon",{staticClass:"white--text caption"},[t._v("mdi-arrow-right")])],1)],1)])],1)],1)}),0),t._v(" "),n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:12}},[n("v-card-text",{attrs:{tile:"",outlined:""}},[n("v-card-title",{staticClass:"subheading "},[t._v("분양 타입")]),t._v(" "),n("v-divider"),t._v(" "),n("div",{staticClass:"row"},t._l(t.types,function(e,i){return n("div",{key:i,staticClass:"col-12 col-md-4 col-sm-12 col-xs-4 text-center"},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(i){var a=i.hover;return[n("v-card",{attrs:{elevation:a?16:2}},[n("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:e.image}},[n("v-expand-transition",[a?n("div",{staticClass:"d-flex transition-fast-in-fast-out white darken-8 v-card--reveal display-2 white--text",staticStyle:{height:"100%"}},[a?n("v-btn",{attrs:{outlined:""},on:{click:function(i){return t.$router.push({name:"HouseType",params:{type:e.houseType}})}}},[t._v("e모델하우스")]):t._e()],1):t._e()])],1),t._v(" "),n("v-card-text",{staticClass:"text--primary text-center"},[n("div",[t._v(t._s(e.description))])]),t._v(" "),n("div",{staticClass:"text-center"},[n("v-btn",{staticClass:"ma-2 mb-5",attrs:{color:"success",outlined:"",large:""},on:{click:function(i){return t.$router.push({name:"HouseType",params:{type:e.houseType}})}}},[t._v("\n                    "+t._s(e.title)+"\n                  ")])],1)],1)]}}],null,!0)})],1)}),0)],1)],1)],1)],1)],1)},staticRenderFns:[]};var m=i("VU/8")(v,u,!1,function(t){i("mCGf")},null,null).exports,d={data:function(){return{drawer:!1,group:null,activeBtn:1,titleIcon:"mdi-cube-outline",accountIcon:"mdi-account-plus-outline",menus:[{title:"사업안내",icon:"mdi-information",model:!1,submenus:[{title:"사업개요",path:"/overview",icon:"mdi-information"},{title:"입지환경",path:"/environment",icon:"mdi-map-marker"},{title:"모집공고",path:"/gonggo",icon:"mdi-file-cloud-outline"}]},{title:"프리미엄",icon:"mdi-google-circles-extended",model:!1,submenus:[{title:"입지 프리미엄",path:"/premium1",icon:"mdi-google-circles-extended"},{title:"설계 프리미엄",path:"/premium2",icon:"mdi-globe-model"}]},{title:"단지안내",icon:"mdi-scatter-plot-outline",model:!1,submenus:[{title:"단지 배치도",path:"/danji",icon:"mdi-scatter-plot-outline"},{title:"커뮤니티",path:"/community",icon:"mdi-nfc-tap"},{title:"조감도",path:"/viewmap",icon:"mdi-view-compact-outline"}]},{title:"분양안내",icon:"mdi-file-chart",model:!1,submenus:[{title:"공급안내",path:"/salesinfo",icon:"mdi-file-chart"}]},{title:"세대안내",icon:"mdi-floor-plan",model:!1,submenus:[{title:"평면정보",path:"/housetype",icon:"mdi-floor-plan"}]}],adminEmail:"yaglobal@naver.com"}},watch:{group:function(){this.drawer=!1}},methods:{hoverTitle:function(){this.titleIcon="mdi-cube"},leaveTitle:function(){this.titleIcon="mdi-cube-outline"},hoverAccount:function(){this.accountIcon="mdi-account-plus"},leaveAccount:function(){this.accountIcon="mdi-account-plus-outline"}},components:{BaseHeader:i("/krj").a}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("v-navigation-drawer",{attrs:{app:"","disable-resize-watcher":"",temporary:"",width:t.$vuetify.breakpoint.smAndDown?"100%":400,color:"primary text--darken-5",dark:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-img",{attrs:{src:i("aXBl"),height:"200px",dark:""}},[n("v-row",{staticClass:"fill-height"},[n("div"),t._v(" "),n("v-spacer"),t._v(" "),n("v-card-title",{staticClass:"white--text pr-3"},[n("div",{staticClass:"display-1 pr-3"})])],1)],1),t._v(" "),n("v-list",[n("v-list-item",[n("v-list-item-action",[n("v-icon",[t._v("mdi-cube")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{staticClass:" title"},[t._v("보라매  센트럴바움")])],1),t._v(" "),n("v-list-item-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!1}}},[n("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),t._l(t.menus,function(e){return n("v-list-group",{key:e.title,attrs:{"prepend-icon":e.icon,"no-action":"","active-class":"white--text"},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)]},proxy:!0}],null,!0),model:{value:e.active,callback:function(i){t.$set(e,"active",i)},expression:"menu.active"}},[t._v(" "),t._l(e.submenus,function(e){return n("v-list-item",{key:e.title,attrs:{"active-class":"white--text",to:e.path}},[e.icon?n("v-list-item-action",[n("v-icon",[t._v(t._s(e.icon))])],1):t._e(),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})],2)})],2)],1),t._v(" "),n("v-app-bar",{attrs:{app:"","clipped-left":"",color:"primary"}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),n("v-toolbar-title",{attrs:{justify:"center"},on:{mouseover:t.hoverTitle,mouseleave:t.leaveTitle}},[n("router-link",{staticClass:"white--text d-flex flex-nowrap",staticStyle:{"text-decoration":"none"},attrs:{to:"/"}},[n("div",{staticClass:"d-none d-sm-flex"},[t._v("보라매  ")]),n("v-icon",{attrs:{dark:""}},[t._v(t._s(t.titleIcon))]),n("div",[t._v(" 센트럴바움")])],1)],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{outlined:"",dark:"",to:"/interest"},on:{mouseover:t.hoverAccount,mouseleave:t.leaveAccount}},[n("v-icon",[t._v(t._s(t.accountIcon))]),n("span",{staticClass:"d-none d-sm-flex pl-2"},[t._v("관심고객 등록")])],1),t._v(" "),n("v-btn",{staticClass:"ml-2",attrs:{outlined:"",dark:"",href:"tel:02-849-9015"}},[n("v-icon",[t._v("mdi-face-agent")]),n("span",{staticClass:"d-none d-sm-flex pl-2"},[t._v("02-849-9015")])],1)],1),t._v(" "),n("v-content",[n("v-bottom-navigation",{attrs:{value:t.activeBtn,horizontal:""}},t._l(t.menus,function(e,i){return n("v-menu",{key:i,attrs:{"open-on-hover":"","offset-y":"",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(i){var a=i.on;return[n("v-btn",t._g({staticClass:"subtitle-1"},a),[t._v("\n                "+t._s(e.title)+"\n              ")])]}}],null,!0)},[t._v(" "),n("v-list",t._l(e.submenus,function(e,i){return n("v-list-item",{key:i,attrs:{to:e.path}},[n("v-list-item-title",{staticClass:"subtitle-2"},[t._v(t._s(e.title))])],1)}),1)],1)}),1)],1),t._v(" "),t.$route.meta&&t.$route.meta.fullLayout?[n("v-card",{staticClass:"white--text text-center mb-3",attrs:{flat:"",tile:"",width:"100%"}},[n("router-view")],1)]:[n("div",[n("base-header",{attrs:{title:t.$route.meta.title,mainImage:i("A1K6")}}),t._v(" "),n("v-container",{attrs:{fluid:""}},[n("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[n("router-view")],1)])],1)],t._v(" "),n("v-footer",{attrs:{padless:""}},[n("v-card",{staticClass:"secondary white--text text-center",attrs:{tile:"",width:"100%"}},[n("v-card-text",{staticClass:"text-center"},[n("div",{staticClass:"d-flex flex-nowrap text-center justify-center"},[n("v-btn",{staticClass:"white--text mr-2",attrs:{tile:"",outlined:"",to:"/privacy"}},[n("v-icon",[t._v("mdi-clipboard-account-outline")]),t._v(" "),n("span",{staticClass:"hidden-sm-and-downs"},[t._v("개인정보취급")])],1),t._v(" "),n("v-btn",{staticClass:"white--text mr-2",attrs:{tile:"",outlined:"",to:"/terms"}},[n("v-icon",[t._v("mdi-calendar")]),t._v(" "),n("span",{staticClass:"hidden-sm-and-downs"},[t._v("이용약관")])],1),t._v(" "),n("v-btn",{staticClass:"white--text",attrs:{tile:"",outlined:"",href:"mailto:"+t.adminEmail,target:"_blank"}},[n("v-icon",[t._v("mdi-email")]),t._v(" "),n("span",{staticClass:"hidden-sm-and-downs"},[t._v("문의")])],1)],1)]),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",{staticClass:"white--text text-left pl-6"},[n("span",[t._v("\n            보라매 센트럴 지역주택조합"),n("br"),t._v("\n            사업자번호 : xxxx\n          ")])]),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",{staticClass:"white--text"},[t._v("\n          "+t._s((new Date).getFullYear())+" — "),n("strong",[t._v("Copyright ⓒYA All rights reserved.")])])],1)],1)],2)},staticRenderFns:[]},h=i("VU/8")(d,p,!1,null,null,null).exports;n.default.use(l.a);var g=new l.a({routes:[{path:"/",component:h,children:[{path:"/",component:m,name:"Home",meta:{fullLayout:!0}},{path:"/housetype",component:function(){return i.e(11).then(i.bind(null,"3FR7"))},name:"HouseType",meta:{fullLayout:!0}},{path:"/overview",component:function(){return i.e(4).then(i.bind(null,"ekZu"))},name:"Overview",meta:{title:"사업개요"}},{path:"/environment",component:function(){return i.e(6).then(i.bind(null,"Jeis"))},name:"Environment",meta:{title:"입지환경"}},{path:"/interest",component:function(){return i.e(0).then(i.bind(null,"wV6Q"))},name:"Interest",meta:{title:"관심 고객 추가"}},{path:"/privacy",component:function(){return i.e(10).then(i.bind(null,"8mQd"))},name:"Privacy",meta:{title:"개인정보취급"}},{path:"/terms",component:function(){return i.e(9).then(i.bind(null,"Rp40"))},name:"Terms",meta:{title:"이용약관"}},{path:"/gonggo",component:function(){return i.e(5).then(i.bind(null,"BvmA"))},name:"Gonggo",meta:{title:"모집공고"}},{path:"/premium1",component:function(){return i.e(3).then(i.bind(null,"Q8pE"))},name:"Premium1",meta:{title:"입지 프리미엄"}},{path:"/premium2",component:function(){return i.e(2).then(i.bind(null,"xeB/"))},name:"Premium2",meta:{title:"설계 프리미엄"}},{path:"/danji",component:function(){return i.e(7).then(i.bind(null,"JBOy"))},name:"Danji",meta:{title:"단지 배치도"}},{path:"/community",component:function(){return i.e(8).then(i.bind(null,"5ECI"))},name:"Community",meta:{title:"커뮤니티"}},{path:"/viewmap",component:function(){return i.e(1).then(i.bind(null,"k3SH"))},name:"Viewmap",meta:{title:"조감도"}}]}],scrollBehavior:function(t){return t.hash?{selector:t.hash}:{x:0,y:0}},mode:"history"});g.beforeResolve(function(t,e,i){t.name&&NProgress.start(),i()}),g.afterEach(function(t,e){NProgress.done()});var _=g;n.default.config.productionTip=!1,new n.default({el:"#app",router:_,vuetify:o,components:{App:c},template:"<App/>"})},NXXY:function(t,e,i){t.exports=i.p+"static/img/main_banner_04.80c2130.jpg"},Upgr:function(t,e,i){t.exports=i.p+"static/img/main_banner_05.9b70f64.jpg"},XDce:function(t,e,i){t.exports=i.p+"static/img/main_banner_02.32f1080.jpg"},aXBl:function(t,e,i){t.exports=i.p+"static/img/nav_bg.5a81d39.jpg"},kx0P:function(t,e,i){t.exports=i.p+"static/img/deal3.e9d6c61.jpg"},mCGf:function(t,e){},oxkb:function(t,e,i){t.exports=i.p+"static/img/main_banner_01.cf3c885.jpg"},r28I:function(t,e,i){t.exports=i.p+"static/img/type84b.ea9b32e.png"},uMNc:function(t,e,i){t.exports=i.p+"static/img/deal2.01628a5.jpg"},w8X4:function(t,e,i){t.exports=i.p+"static/img/type59a.98adbcc.png"}},["NHnr"]);
//# sourceMappingURL=app.54444bec3d61568df194.js.map