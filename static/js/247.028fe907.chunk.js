"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{247:function(t,n,e){e.r(n);var r=e(861),c=e(439),a=e(757),u=e.n(a),s=e(791),o=e(689),i=e(335),p=e(184);n.default=function(){var t=(0,o.UO)().movieId,n=(0,s.useState)([]),e=(0,c.Z)(n,2),a=e[0],f=e[1];(0,s.useEffect)((function(){function n(){return(n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.d5)(t);case 2:e=n.sent,f(e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[t]);return(0,p.jsx)("ul",{style:{display:"flex",flexWrap:"wrap"},children:a.map((function(t){var n=t.cast_id,e=t.original_name,r=t.profile_path,c=t.character;return(0,p.jsxs)("li",{style:{width:"25%"},children:[(0,p.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w500".concat(r):"https://suzmakelaars.nl/wp-content/uploads/2019/11/user-placeholder-4-e1574089236199.png",alt:"",width:120,height:150}),(0,p.jsx)("p",{children:e}),(0,p.jsxs)("p",{children:["Character: ",c]})]},n)}))})}},335:function(t,n,e){e.d(n,{AR:function(){return p},Bt:function(){return x},Mc:function(){return d},d5:function(){return w},vw:function(){return h}});var r=e(861),c=e(757),a=e.n(c),u="778514cd0c35430bd38f659c52db3e68",s="https://api.themoviedb.org/3/trending/movie/week?",o="https://api.themoviedb.org/3/search/movie?",i="https://api.themoviedb.org/3/movie/";function p(){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function t(){var n,e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(s,"api_key=").concat(u,"&total_pages=20"));case 2:return n=t.sent,t.next=5,n.json();case 5:return e=t.sent,t.abrupt("return",e.results);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function t(n){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(o,"api_key=").concat(u,"&query=").concat(n,"&page=1"));case 2:return e=t.sent,t.next=5,e.json();case 5:return r=t.sent,t.abrupt("return",r.results);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function t(n){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(i).concat(n,"?api_key=").concat(u));case 2:return e=t.sent,t.next=5,e.json();case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function t(n){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(i).concat(n,"/credits?api_key=").concat(u));case 2:return e=t.sent,t.next=5,e.json();case 5:return r=t.sent,t.abrupt("return",r.cast);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(a().mark((function t(n){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(i).concat(n,"/reviews?api_key=").concat(u));case 2:return e=t.sent,t.next=5,e.json();case 5:return r=t.sent,t.abrupt("return",r.results);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},861:function(t,n,e){function r(t,n,e,r,c,a,u){try{var s=t[a](u),o=s.value}catch(i){return void e(i)}s.done?n(o):Promise.resolve(o).then(r,c)}function c(t){return function(){var n=this,e=arguments;return new Promise((function(c,a){var u=t.apply(n,e);function s(t){r(u,c,a,s,o,"next",t)}function o(t){r(u,c,a,s,o,"throw",t)}s(void 0)}))}}e.d(n,{Z:function(){return c}})}}]);
//# sourceMappingURL=247.028fe907.chunk.js.map