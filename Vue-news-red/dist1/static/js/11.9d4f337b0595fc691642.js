webpackJsonp([11],{162:function(n,t,e){e(250);var i=e(16)(e(196),e(270),"data-v-5bc32aed",null);n.exports=i.exports},196:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(58);t.default={data:function(){return{list:{}}},created:function(){this.get(),this.$emit("title","知乎日报")},methods:{get:function(){console.log("get"),i.a.zhihu_daily().then(function(n){console.log(n),this.list=n.data}.bind(this)).catch(function(n){console.log(n)})},pushUrl:function(n){this.$router.push({path:"/zhihuarticle",query:{id:n}})}}}},230:function(n,t,e){t=n.exports=e(145)(),t.push([n.i,"\n.m-type[data-v-5bc32aed] {\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  padding: 10px;\n}\n.m-type li[data-v-5bc32aed] {\r\n  width: 50%;\r\n  float: left;\r\n  box-sizing: border-box;\r\n  padding: 5px;\n}\n.m-type li img[data-v-5bc32aed] {\r\n  width: 100%;\n}\n.m-type p[data-v-5bc32aed] {\r\n  display: block;\r\n  max-height: 40px;\r\n  overflow: hidden;\r\n  font-size: 14px;\n}\r\n","",{version:3,sources:["D:/wamp/www/A-share/Vue-news-red/src/components/Zhihu.vue"],names:[],mappings:";AACA;EACE,YAAY;EACZ,uBAAuB;EACvB,cAAc;CACf;AACD;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,aAAa;CACd;AACD;EACE,YAAY;CACb;AACD;EACE,eAAe;EACf,iBAAiB;EACjB,iBAAiB;EACjB,gBAAgB;CACjB",file:"Zhihu.vue",sourcesContent:["\n.m-type[data-v-5bc32aed] {\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  padding: 10px;\n}\n.m-type li[data-v-5bc32aed] {\r\n  width: 50%;\r\n  float: left;\r\n  box-sizing: border-box;\r\n  padding: 5px;\n}\n.m-type li img[data-v-5bc32aed] {\r\n  width: 100%;\n}\n.m-type p[data-v-5bc32aed] {\r\n  display: block;\r\n  max-height: 40px;\r\n  overflow: hidden;\r\n  font-size: 14px;\n}\r\n"],sourceRoot:""}])},250:function(n,t,e){var i=e(230);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e(146)("246fc172",i,!0)},270:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"zhihu"}},[e("ul",{staticClass:"m-type"},n._l(n.list.stories,function(t){return e("li",{on:{click:function(e){n.pushUrl(t.id)}}},[e("img",{attrs:{src:t.images[0],alt:""}}),n._v(" "),e("p",[n._v(n._s(t.title))])])}))])},staticRenderFns:[]}}});
//# sourceMappingURL=11.9d4f337b0595fc691642.js.map