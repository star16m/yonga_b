webpackJsonp([1],{Auqe:function(e,t){},PirY:function(e,t){function n(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function a(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,t,i){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("script");"function"==typeof t&&(i=t,t={}),t=t||{},i=i||function(){},r.type=t.type||"text/javascript",r.charset=t.charset||"utf8",r.async=!("async"in t)||!!t.async,r.src=e,t.attrs&&function(e,t){for(var n in t)e.setAttribute(n,t[n])}(r,t.attrs),t.text&&(r.text=""+t.text),("onload"in r?n:a)(r,i),r.onload||n(r,i),o.appendChild(r)}},"SA+q":function(e,t,n){"use strict";var a=n("PirY"),i={};e.exports=function(e,t){var n=i[e];return n||(n=i[e]=function(e){return new Promise(function(t,n){a(e,function(e){if(e)return n(e);t()})})}(e)).catch(function(){delete i[e]}),t&&n.then(t,t),n}},WBYr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("g4QM"),i={components:{VueDaumMap:a.default},data:function(){return{appKey:"1d3936ea3a69184102069887533d44bf",center:{lat:37.49108138232143,lng:126.92380927995359},level:4,mapTypeId:a.default.MapTypeId.NORMAL,libraries:["services"],map:null}},methods:{onLoad:function(e){this.map=e;var t=new kakao.maps.LatLng(37.49130672142065,126.92394474285184);new kakao.maps.CustomOverlay({map:e,position:t,content:'<div class="customoverlay">  <a href="http://kko.to/EqyhrLm0p" target="_blank">    <span class="title">보라매 센트럴<br />바움 홍보관</span>  </a></div>',yAnchor:1})},changedCenter:function(e){}}},o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"contents",attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-row",{attrs:{align:"start",justify:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("p",{staticClass:"pt-5 title"},[e._v("\n            홍보관 안내\n          ")]),e._v(" "),n("p",{staticClass:"subtitle-1 pt-5"},[e._v("\n            서울특별시 동작구 보라매로5가길 16, 304호 (신대방동,\n            보라매아카데미타워)\n          ")])])],1),e._v(" "),n("v-row",{attrs:{align:"start",justify:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("vue-daum-map",{staticStyle:{height:"500px"},attrs:{appKey:e.appKey,center:e.center,level:e.level,mapTypeId:e.mapTypeId,libraries:e.libraries},on:{"update:center":function(t){e.center=t},"update:level":function(t){e.level=t},load:e.onLoad,center_changed:e.changedCenter}})],1)],1)],1)],1)],1)},staticRenderFns:[]};var r=n("VU/8")(i,o,!1,function(e){n("Auqe")},null,null);t.default=r.exports},dsFG:function(e,t){},"ek+Y":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,i=n("SA+q"),o=(a=i)&&a.__esModule?a:{default:a};var r=["center_changed","zoom_start","zoom_changed","bounds_changed","click","dblclick","rightclick","mousemove","dragstart","drag","dragend","idle","tilesloaded","maptypeid_changed"];t.default={name:"VueDaumMap",props:{appKey:{type:String,required:!0},libraries:{type:Array,default:function(){return[]}},center:{type:Object,required:!0},level:{type:Number,default:void 0},mapTypeId:{type:Number,default:void 0},draggable:{type:Boolean,default:void 0},scrollwheel:{type:Boolean,default:void 0},disableDoubleClick:{type:Boolean,default:void 0},disableDoubleClickZoom:{type:Boolean,default:void 0},projectionId:{type:String,default:void 0},tileAnimation:{type:Boolean,default:void 0},keyboardShortcuts:{type:[Boolean,Object],default:void 0}},data:function(){return{map:null}},mounted:function(){var e=this;(0,o.default)("//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey="+this.appKey+"&libraries="+this.libraries.join(",")).then(function(){daum.maps.load(function(){e.render(),e.bindEvents(),e.$emit("load",e.map)})}).catch(function(e){console.error(e)})},watch:{level:function(){this.map&&this.map.setLevel(this.level)},center:{handler:function(){this.map&&this.map.setCenter(new daum.maps.LatLng(this.center.lat,this.center.lng))},deep:!0}},methods:{render:function(){var e={center:new daum.maps.LatLng(this.center.lat,this.center.lng),level:this.level,mapTypeId:this.mapTypeId,draggable:this.draggable,scrollwheel:this.scrollwheel,disableDoubleClick:this.disableDoubleClick,disableDoubleClickZoom:this.disableDoubleClickZoom,projectionId:this.projectionId,tileAnimation:this.tileAnimation,keyboardShortcuts:this.keyboardShortcuts};this.map=new daum.maps.Map(this.$el,e)},bindEvents:function(){var e={bounds_changed:this.onChange,idle:this.onChange},t=!0,n=!1,a=void 0;try{for(var i,o=r[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){var l=i.value;this.bindEvent(l,e[l])}}catch(e){n=!0,a=e}finally{try{!t&&o.return&&o.return()}finally{if(n)throw a}}},bindEvent:function(e,t){var n=this;daum.maps.event.addListener(this.map,e,function(){for(var a=arguments.length,i=Array(a),o=0;o<a;o++)i[o]=arguments[o];n.$emit(e,i),"function"==typeof t&&t()})},onChange:function(){var e=this.map.getLevel(),t=this.map.getCenter();this.$emit("update:level",e),this.$emit("update:center",{lat:t.getLat(),lng:t.getLng()})}},MapTypeId:{ROADMAP:1,NORMAL:1,SKYVIEW:2,HYBRID:3,OVERLAY:4,ROADVIEW:5,TRAFFIC:6,TERRAIN:7,BICYCLE:8,BICYCLE_HYBRID:9,USE_DISTRICT:10}}},g4QM:function(e,t,n){"use strict";var a=n("ek+Y"),i=n.n(a),o=n("uxwt");var r=function(e){n("dsFG")},l=n("VU/8")(i.a,o.a,!1,r,"data-v-79390512",null);t.default=l.exports},uxwt:function(e,t,n){"use strict";var a={render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]};t.a=a}});
//# sourceMappingURL=1.7aea351f16a69f4ffd67.js.map