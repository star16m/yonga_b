webpackJsonp([10],{"3FR7":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={components:{BaseHeader:s("xQzT").a},data:function(){return{tabs:[],currentType:{}}},methods:{changeType:function(t){this.tabs.forEach(function(e){e.active=t==e.id}),this.currentType=this.tabs.find(function(t){return t.active})}},mounted:function(){var t=this;if(this.tabs){var e=this.tabs[0];this.$route.params&&this.$route.params.type&&(e=this.tabs.find(function(e){return e.id===t.$route.params.type})),this.changeType(e.id)}}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("base-header",{attrs:{title:"평면정보",mainImage:"http://yaglobal.cafe24.com/boramea/images/navi_back.jpg",tabs:t.tabs},on:{changeTab:t.changeType}}),t._v(" "),s("v-container",{attrs:{fluid:""}},[t.currentType?s("div",{staticClass:"col-md-12 col-sm-12 col-xs-12"},[s("p",{staticClass:"display-1 mb-0 pt-5"},[t._v(t._s(t.currentType.title)+" 타입 평면도")]),t._v(" "),s("v-img",{staticClass:"align-end",attrs:{src:t.currentType.image}}),t._v(" "),s("p",{staticClass:"pt-5 subtitle-1"},[t._v("\n        "+t._s(t.currentType.title)+" 타입에 대해서 추가적인 설명을 추가해 주세요."+t._s(t.currentType.title)+"\n        타입에 대해서 추가적인 설명을 추가해 주세요. ~~~~~"+t._s(t.currentType.title)+"\n        타입에 대해서 추가적인 설명을 추가해 주세요."+t._s(t.currentType.title)+"\n        타입에 대해서 추가적인 설명을 추가해 주세요."+t._s(t.currentType.title)+"\n        타입에 대해서 추가적인 설명을 추가해 주세요."+t._s(t.currentType.title)+"\n        타입에 대해서 추가적인 설명을 추가해 주세요."+t._s(t.currentType.title)+"\n        타입에 대해서 추가적인 설명을 추가해 주세요.\n      ")]),t._v(" "),s("ul",{staticClass:"subtitle-1"},[s("li",[t._v("이런 것이 좋습니다.")]),t._v(" "),s("li",[t._v("저런 것이 좋습니다.")])]),t._v(" "),s("p",{staticClass:"subtitle-1 pt-5"},[t._v("\n        이런식으로 설명을 추가할 수 있습니다.\n      ")]),t._v(" "),s("p",{staticClass:"display-1 mb-0 pt-5"},[t._v("설명")]),t._v(" "),s("p",{staticClass:"subtitle-1 pt-5"},[t._v("\n        이런식으로 설명을 추가할 수 있습니다.\n      ")])],1):t._e()])],1)},staticRenderFns:[]},i=s("VU/8")(a,n,!1,null,null,null);e.default=i.exports}});
//# sourceMappingURL=10.7e9bbfff7e6abc064d71.js.map