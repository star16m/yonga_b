webpackJsonp([12],{"7zck":function(t,e){},A1K6:function(t,e,i){t.exports=i.p+"static/img/bg.13d57d4.jpg"},"DM+Z":function(t,e,i){t.exports=i.p+"static/img/deal1.34dd409.jpg"},EOa9:function(t,e,i){t.exports=i.p+"static/img/type74b.2f5cbe7.png"},IX1A:function(t,e,i){t.exports=i.p+"static/img/deal4.4bb1400.jpg"},KOuv:function(t,e,i){t.exports=i.p+"static/img/main_banner_03.6360c4b.jpg"},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),a=i("3EgV"),s=i.n(a);i("7zck"),i("Ui3i");n.default.use(s.a);var r=new s.a({theme:{themes:{light:{primary:"#218e49",secondary:"#2D3753",accent:"#3AE3D6",error:"#f44336",info:"#4c5831",success:"#6ea75d",warning:"#f78012"}}}}),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]},c=i("VU/8")({name:"App"},o,!1,null,null,null).exports,l=i("/ocq"),u={data:function(){return{activeBtn:1,colors:["indigo","warning","pink darken-2","red lighten-1","deep-purple accent-4"],bottomMenus:[{title:"사업개요",image:i("DM+Z"),path:"/overview"},{title:"입지환경",image:i("uMNc"),path:"/environment"},{title:"입지환경",image:i("kx0P"),path:"/environment"}],premiumMenus:[{title:"프리미엄1",image:i("DM+Z"),path:"/overview"},{title:"프리미엄2",image:i("uMNc"),path:"/environment"},{title:"프리미엄3",image:i("kx0P"),path:"/environment"},{title:"프리미엄4",image:i("IX1A"),path:"/environment"}],types:[{title:"59㎡ 타입",image:i("w8X4"),description:"59㎡ 설명입니다.",houseType:"a"},{title:"74㎡ 타입",image:i("EOa9"),description:"74㎡ 설명입니다.",houseType:"b"},{title:"84㎡ 타입",image:i("r28I"),description:"84㎡ 설명입니다.",houseType:"c"}],mainSlides:[{image:i("oxkb"),description:"여기에 설명을 넣습니다"},{image:i("XDce"),description:"여기에 설명을 넣습니다"},{image:i("KOuv"),description:"여기에 설명을 넣습니다"},{image:i("NXXY")},{image:i("Upgr")}]}}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",{staticClass:"white--text text-center mb-3",attrs:{flat:"",tile:"",width:"100%"}},[n("v-carousel",{attrs:{"hide-delimiters":"",cycle:"",interval:"2000",height:"600px"}},t._l(t.mainSlides,function(e,i){return n("v-carousel-item",{key:i,attrs:{src:e.image}},[n("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[n("div",{staticClass:"display-2 white--text hidden-sm-only"},[n("strong",[t._v(t._s(e.description))])]),n("br")])],1)}),1)],1),t._v(" "),n("v-row",{staticClass:"pl-4 pr-4"},[n("div",{staticClass:"col-md-6 col-sm-6 col-xs-12"},[n("v-card",[n("v-img",{staticClass:"white--text align-center",attrs:{src:i("oxkb"),gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"400px"}},[n("h1",{staticClass:"text-center font-size"},[t._v("VR 파노라마")]),t._v(" "),n("div",{staticClass:"text-center"},[n("v-btn",{staticClass:"white--text ",attrs:{to:"/vr",outlined:""}},[t._v("보러 가기")])],1)])],1)],1),t._v(" "),n("div",{staticClass:"col-md-6 col-sm-6 col-xs-12"},[n("v-card",[n("v-img",{staticClass:"white--text align-center",attrs:{src:i("KOuv"),gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"400px"}},[n("h1",{staticClass:"text-center font-size"},[t._v("단지 배치도")]),t._v(" "),n("div",{staticClass:"text-center"},[n("v-btn",{staticClass:"white--text",attrs:{to:"/danji",outlined:""}},[t._v("보러 가기")])],1)])],1)],1)]),t._v(" "),n("v-card-text",{attrs:{tile:"",outlined:""}},[n("v-card-title",{staticClass:"subheading "},[t._v("프리미엄")]),t._v(" "),n("v-divider"),t._v(" "),n("div",{staticClass:"pl-4 pr-4 row"},t._l(t.premiumMenus,function(e,i){return n("div",{key:i,staticClass:"col-md-3 col-sm-3 col-xs-12"},[n("v-card",{attrs:{outlined:""}},[n("v-img",{staticClass:"white--text align-center",attrs:{src:e.image,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"300px"}},[n("h1",{staticClass:"text-center font-size"},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"text-center mt-2"},[n("v-btn",{staticClass:"white--text",attrs:{to:e.path,outlined:""}},[t._v("\n              보러 가기 "),n("v-icon",{staticClass:"white--text caption"},[t._v("mdi-arrow-right")])],1)],1)])],1)],1)}),0)],1),t._v(" "),n("v-container",[n("div",{staticClass:"pl-4 pr-4 row"},t._l(t.bottomMenus,function(e,i){return n("div",{key:i,staticClass:"col-md-4 col-sm-4 col-xs-12"},[n("v-card",{attrs:{outlined:""}},[n("v-img",{staticClass:"white--text align-center",attrs:{src:e.image,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"300px"}},[n("h1",{staticClass:"text-center font-size"},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"text-center mt-2"},[n("v-btn",{staticClass:"white--text",attrs:{href:e.path,outlined:""}},[t._v("\n              보러가기 "),n("v-icon",{staticClass:"white--text caption"},[t._v("mdi-arrow-right")])],1)],1)])],1)],1)}),0),t._v(" "),n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:12}},[n("v-card-text",{attrs:{tile:"",outlined:""}},[n("v-card-title",{staticClass:"subheading "},[t._v("분양 타입")]),t._v(" "),n("v-divider"),t._v(" "),n("div",{staticClass:"row"},t._l(t.types,function(e,i){return n("div",{key:i,staticClass:"col-12 col-md-4 col-sm-12 col-xs-4 text-center"},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(i){var a=i.hover;return[n("v-card",{attrs:{elevation:a?16:2}},[n("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:e.image}},[n("v-expand-transition",[a?n("div",{staticClass:"d-flex transition-fast-in-fast-out white darken-8 v-card--reveal display-2 white--text",staticStyle:{height:"100%"}},[a?n("v-btn",{attrs:{outlined:""},on:{click:function(i){return t.$router.push({name:"HouseType",params:{type:e.houseType}})}}},[t._v("e모델하우스")]):t._e()],1):t._e()])],1),t._v(" "),n("v-card-text",{staticClass:"text--primary text-center"},[n("div",[t._v(t._s(e.description))])]),t._v(" "),n("div",{staticClass:"text-center"},[n("v-btn",{staticClass:"ma-2 mb-5",attrs:{color:"success",outlined:"",large:""},on:{click:function(i){return t.$router.push({name:"HouseType",params:{type:e.houseType}})}}},[t._v("\n                    "+t._s(e.title)+"\n                  ")])],1)],1)]}}],null,!0)})],1)}),0)],1)],1)],1)],1)],1)},staticRenderFns:[]};var m=i("VU/8")(u,v,!1,function(t){i("UAJr")},null,null).exports,d=i("xQzT"),p={props:{menus:Array,drawer:Boolean},model:{prop:"drawer",event:"changeDrawer"},computed:{drawerLocal:{get:function(){return this.drawer},set:function(t){this.$emit("changeDrawer",t)}}}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{app:"","disable-resize-watcher":"",temporary:"",width:t.$vuetify.breakpoint.smAndDown?"80%":400,color:"white text--darken-5"},model:{value:t.drawerLocal,callback:function(e){t.drawerLocal=e},expression:"drawerLocal"}},[n("v-img",{attrs:{src:i("aXBl"),height:"100px",dark:""}},[n("v-row",{staticClass:"fill-height"},[n("div"),t._v(" "),n("v-spacer"),t._v(" "),n("v-card-title",{staticClass:"white--text pr-3"},[n("div",{staticClass:"display-1 pr-3"})])],1)],1),t._v(" "),n("v-list",[n("v-list-item",[n("v-list-item-action",[n("v-icon",[t._v("mdi-cube")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{staticClass:" title"},[t._v("보라매  센트럴바움")])],1),t._v(" "),n("v-list-item-icon",{on:{click:function(e){return e.stopPropagation(),t.$emit("changeDrawer",!1)}}},[n("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),t._l(t.menus,function(e){return n("v-list-group",{key:e.title,attrs:{"prepend-icon":e.icon,"no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)]},proxy:!0}],null,!0),model:{value:e.active,callback:function(i){t.$set(e,"active",i)},expression:"menu.active"}},[t._v(" "),t._l(e.submenus,function(e){return n("v-list-item",{key:e.title,attrs:{to:e.path}},[e.icon?n("v-list-item-action",[n("v-icon",[t._v(t._s(e.icon))])],1):t._e(),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})],2)})],2)],1)},staticRenderFns:[]},f=i("VU/8")(p,h,!1,null,null,null).exports,g={props:{drawer:Boolean},model:{prop:"drawer",event:"changeDrawer"},computed:{drawerLocal:{get:function(){return this.drawer},set:function(t){this.$emit("changeDrawer",t)}}},data:function(){return{titleIcon:"mdi-cube-outline",accountIcon:"mdi-account-plus-outline"}},methods:{hoverTitle:function(){this.titleIcon="mdi-cube"},leaveTitle:function(){this.titleIcon="mdi-cube-outline"},hoverAccount:function(){this.accountIcon="mdi-account-plus"},leaveAccount:function(){this.accountIcon="mdi-account-plus-outline"}}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app-bar",{staticClass:"white primary--text",attrs:{app:"","clipped-left":"",dark:""}},[i("v-app-bar-nav-icon",{staticClass:"primary--text",on:{click:function(e){e.stopPropagation(),t.drawerLocal=!t.drawerLocal}}}),t._v(" "),i("v-toolbar-title",{attrs:{justify:"center"},on:{mouseover:t.hoverTitle,mouseleave:t.leaveTitle}},[i("router-link",{staticClass:"d-flex flex-nowrap",staticStyle:{"text-decoration":"none"},attrs:{to:"/"}},[i("div",{staticClass:"d-none d-sm-flex"},[t._v("보라매  ")]),i("v-icon",{staticClass:"primary--text"},[t._v(t._s(t.titleIcon))]),i("div",[t._v(" 센트럴바움")])],1)],1),t._v(" "),i("v-spacer"),t._v(" "),i("v-btn",{staticClass:"primary--text",attrs:{outlined:"",to:"/interest"},on:{mouseover:t.hoverAccount,mouseleave:t.leaveAccount}},[i("v-icon",{staticClass:"primary--text"},[t._v(t._s(t.accountIcon))]),i("span",{staticClass:"d-none d-sm-flex pl-2"},[t._v("관심고객 등록")])],1),t._v(" "),i("v-btn",{staticClass:"ml-2 primary--text",attrs:{outlined:"",href:"tel:02-849-9015"}},[i("v-icon",{staticClass:"primary--text"},[t._v("mdi-face-agent")]),i("span",{staticClass:"d-none d-sm-flex pl-2"},[t._v("02-849-9015")])],1)],1)},staticRenderFns:[]},x=i("VU/8")(g,_,!1,null,null,null).exports,b={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-footer",{attrs:{padless:""}},[i("v-card",{staticClass:"primary white--text text-center",attrs:{tile:"",width:"100%"}},[i("v-card-text",{staticClass:"text-center"},[i("div",{staticClass:"d-flex flex-nowrap text-center justify-center"},[i("v-btn",{staticClass:"white--text mr-2",attrs:{tile:"",outlined:"",to:"/privacy"}},[i("v-icon",[t._v("mdi-clipboard-account-outline")]),t._v(" "),i("span",{staticClass:"hidden-sm-and-downs"},[t._v("개인정보취급")])],1),t._v(" "),i("v-btn",{staticClass:"white--text mr-2",attrs:{tile:"",outlined:"",to:"/terms"}},[i("v-icon",[t._v("mdi-calendar")]),t._v(" "),i("span",{staticClass:"hidden-sm-and-downs"},[t._v("이용약관")])],1),t._v(" "),i("v-btn",{staticClass:"white--text",attrs:{tile:"",outlined:"",href:"mailto:"+t.adminEmail,target:"_blank"}},[i("v-icon",[t._v("mdi-email")]),t._v(" "),i("span",{staticClass:"hidden-sm-and-downs"},[t._v("문의")])],1)],1)]),t._v(" "),i("v-divider"),t._v(" "),i("v-card-text",{staticClass:"white--text text-left pl-6"},[i("span",[t._v("\n        보라매 센트럴 지역주택조합"),i("br"),t._v("\n        사업자번호 : xxxx\n      ")])]),t._v(" "),i("v-divider"),t._v(" "),i("v-card-text",{staticClass:"white--text"},[t._v("\n      "+t._s((new Date).getFullYear())+" — "),i("strong",[t._v("Copyright ⓒYA All rights reserved.")])])],1)],1)},staticRenderFns:[]},w=i("VU/8")({data:function(){return{adminEmail:"yaglobal@naver.com"}}},b,!1,null,null,null).exports,C={data:function(){return{drawer:!1,group:null,activeBtn:1,menus:[{title:"사업안내",icon:"mdi-information",model:!1,submenus:[{title:"사업개요",path:"/overview",icon:"mdi-information"},{title:"입지환경",path:"/environment",icon:"mdi-map-marker"},{title:"모집공고",path:"/gonggo",icon:"mdi-file-cloud-outline"}]},{title:"프리미엄",icon:"mdi-google-circles-extended",model:!1,submenus:[{title:"입지 프리미엄",path:"/premium1",icon:"mdi-google-circles-extended"},{title:"설계 프리미엄",path:"/premium2",icon:"mdi-globe-model"}]},{title:"단지안내",icon:"mdi-scatter-plot-outline",model:!1,submenus:[{title:"단지 배치도",path:"/danji",icon:"mdi-scatter-plot-outline"},{title:"커뮤니티",path:"/community",icon:"mdi-nfc-tap"},{title:"조감도",path:"/viewmap",icon:"mdi-view-compact-outline"}]},{title:"분양안내",icon:"mdi-file-chart",model:!1,submenus:[{title:"공급안내",path:"/salesinfo",icon:"mdi-file-chart"}]},{title:"세대안내",icon:"mdi-floor-plan",model:!1,submenus:[{title:"평면정보",path:"/housetype",icon:"mdi-floor-plan"}]}]}},watch:{group:function(){this.drawer=!1}},components:{BaseHeader:d.a,BaseFooter:w,NavDrawer:f,AppBar:x}},y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("nav-drawer",{attrs:{menus:t.menus,drawer:t.drawer},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}}),t._v(" "),n("app-bar",{model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}}),t._v(" "),n("v-content",[n("v-bottom-navigation",{directives:[{name:"show",rawName:"v-show",value:!t.$vuetify.breakpoint.smAndDown,expression:"!$vuetify.breakpoint.smAndDown"}],attrs:{value:t.activeBtn,horizontal:""}},t._l(t.menus,function(e,i){return n("v-menu",{key:i,attrs:{"open-on-hover":"","offset-y":"",transition:"slide-y-transition"},scopedSlots:t._u([{key:"activator",fn:function(i){var a=i.on;return[n("v-btn",t._g({staticClass:"subtitle-1"},a),[t._v("\n              "+t._s(e.title)+"\n            ")])]}}],null,!0)},[t._v(" "),n("v-list",t._l(e.submenus,function(e,i){return n("v-list-item",{key:i,attrs:{to:e.path}},[n("v-list-item-title",{staticClass:"subtitle-2"},[t._v(t._s(e.title))])],1)}),1)],1)}),1)],1),t._v(" "),t.$route.meta&&t.$route.meta.fullLayout?[n("div",[n("v-card",{staticClass:"white--text text-center mb-3",attrs:{flat:"",tile:""}},[n("router-view")],1)],1)]:[n("div",[n("base-header",{attrs:{title:t.$route.meta.title,mainImage:i("A1K6")}}),t._v(" "),n("v-container",{attrs:{fluid:""}},[n("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[n("router-view")],1)])],1)],t._v(" "),n("base-footer")],2)},staticRenderFns:[]},k=i("VU/8")(C,y,!1,null,null,null).exports;n.default.use(l.a);var A=new l.a({routes:[{path:"/",component:k,children:[{path:"/",component:m,name:"Home",meta:{fullLayout:!0}},{path:"/housetype",component:function(){return i.e(11).then(i.bind(null,"3FR7"))},name:"HouseType",meta:{fullLayout:!0}},{path:"/overview",component:function(){return i.e(4).then(i.bind(null,"ekZu"))},name:"Overview",meta:{title:"사업개요"}},{path:"/environment",component:function(){return i.e(6).then(i.bind(null,"Jeis"))},name:"Environment",meta:{title:"입지환경"}},{path:"/interest",component:function(){return i.e(0).then(i.bind(null,"wV6Q"))},name:"Interest",meta:{title:"관심 고객 추가"}},{path:"/privacy",component:function(){return i.e(10).then(i.bind(null,"8mQd"))},name:"Privacy",meta:{title:"개인정보취급"}},{path:"/terms",component:function(){return i.e(9).then(i.bind(null,"Rp40"))},name:"Terms",meta:{title:"이용약관"}},{path:"/gonggo",component:function(){return i.e(5).then(i.bind(null,"BvmA"))},name:"Gonggo",meta:{title:"모집공고"}},{path:"/premium1",component:function(){return i.e(3).then(i.bind(null,"Q8pE"))},name:"Premium1",meta:{title:"입지 프리미엄"}},{path:"/premium2",component:function(){return i.e(2).then(i.bind(null,"xeB/"))},name:"Premium2",meta:{title:"설계 프리미엄"}},{path:"/danji",component:function(){return i.e(7).then(i.bind(null,"JBOy"))},name:"Danji",meta:{title:"단지 배치도"}},{path:"/community",component:function(){return i.e(8).then(i.bind(null,"5ECI"))},name:"Community",meta:{title:"커뮤니티"}},{path:"/viewmap",component:function(){return i.e(1).then(i.bind(null,"k3SH"))},name:"Viewmap",meta:{title:"조감도"}}]}],scrollBehavior:function(t){return t.hash?{selector:t.hash}:{x:0,y:0}},mode:"history"});A.beforeResolve(function(t,e,i){t.name&&NProgress.start(),i()}),A.afterEach(function(t,e){NProgress.done()});var j=A;n.default.config.productionTip=!1,new n.default({el:"#app",router:j,vuetify:r,components:{App:c},template:"<App/>"})},NXXY:function(t,e,i){t.exports=i.p+"static/img/main_banner_04.80c2130.jpg"},UAJr:function(t,e){},Upgr:function(t,e,i){t.exports=i.p+"static/img/main_banner_05.9b70f64.jpg"},XDce:function(t,e,i){t.exports=i.p+"static/img/main_banner_02.32f1080.jpg"},aXBl:function(t,e,i){t.exports=i.p+"static/img/nav_bg.5a81d39.jpg"},kx0P:function(t,e,i){t.exports=i.p+"static/img/deal3.e9d6c61.jpg"},oxkb:function(t,e,i){t.exports=i.p+"static/img/main_banner_01.cf3c885.jpg"},r28I:function(t,e,i){t.exports=i.p+"static/img/type84b.ea9b32e.png"},uMNc:function(t,e,i){t.exports=i.p+"static/img/deal2.01628a5.jpg"},w8X4:function(t,e,i){t.exports=i.p+"static/img/type59a.98adbcc.png"},xQzT:function(t,e,i){"use strict";var n={props:{title:String,mainImage:String,tabIcon:String,tabs:Array},methods:{changeTab:function(t){this.$emit("changeTab",t)}}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticClass:"white--text text-center mb-3",attrs:{flat:"",tile:"",width:"100%"}},[i("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:t.mainImage}},[i("v-card-text",{staticClass:"text-center"},[i("div",{staticClass:"display-1 white--text text-center pa-3"},[t._v(t._s(t.title))]),t._v(" "),t.tabs?i("div",{staticClass:"d-flex flex-nowrap text-center justify-center"},t._l(t.tabs,function(e,n){return i("div",{key:n},[i("v-btn",{staticClass:"white--text mr-2",class:{success:e.active},attrs:{outlined:""},on:{click:function(i){return t.changeTab(e.id)}}},[i("v-icon",[t._v(t._s(e.tabIcon))]),t._v("\n            "+t._s(e.title)+"\n        ")],1)],1)}),0):t._e()])],1)],1)},staticRenderFns:[]},s=i("VU/8")(n,a,!1,null,null,null);e.a=s.exports}},["NHnr"]);
//# sourceMappingURL=app.877067a99d0b85a1db8d.js.map