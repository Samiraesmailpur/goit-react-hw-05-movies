"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[435],{435:function(n,t,e){e.r(t),e.d(t,{default:function(){return Z}});var r,c,a,o,u=e(861),s=e(439),i=e(757),p=e.n(i),f=e(791),h=e(335),l=e(87),d=e(689),x=e(168),v=e(444),m=v.ZP.li(r||(r=(0,x.Z)(["\n  display: flex;\n  transition: 1s;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,\n    rgba(0, 0, 0, 0.05) 0px 5px 10px;\n\n  :hover {\n    transform: scale(1.05);\n  }\n  width: 300px;\n\n  a {\n    background-color: #000;\n  }\n\n  img {\n    display: block;\n  }\n"]))),w=v.ZP.p(c||(c=(0,x.Z)(["\n  text-align: center;\n  color: #fff;\n  padding: 15px;\n"]))),y=e(184),g=function(n){var t=n.trending,e=(0,d.TH)();return(0,y.jsx)(y.Fragment,{children:t.map((function(n){var t=n.id,r=n.title,c=n.poster_path;return(0,y.jsx)(m,{children:(0,y.jsxs)(l.rU,{to:"movies/".concat(t),state:{from:e},children:[(0,y.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(c),alt:"",width:300}),(0,y.jsx)(w,{children:r})]})},t)}))})},k=v.ZP.ul(a||(a=(0,x.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n  justify-content: center;\n"]))),b=v.ZP.h2(o||(o=(0,x.Z)(["\n  color: #fff;\n  font-weight: 300;\n  margin-bottom: 30px;\n  text-align: center;\n"]))),Z=function(){var n=(0,f.useState)([]),t=(0,s.Z)(n,2),e=t[0],r=t[1];return(0,f.useEffect)((function(){function n(){return n=(0,u.Z)(p().mark((function n(){var t;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,h.AR)();case 2:t=n.sent,r(t);case 4:case"end":return n.stop()}}),n)}))),n.apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,y.jsxs)("div",{children:[(0,y.jsx)(b,{children:"Trending today"}),(0,y.jsx)(k,{children:(0,y.jsx)(g,{trending:e})})]})}},335:function(n,t,e){e.d(t,{AR:function(){return p},Bt:function(){return w},Mc:function(){return d},d5:function(){return v},vw:function(){return h}});var r=e(861),c=e(757),a=e.n(c),o="778514cd0c35430bd38f659c52db3e68",u="https://api.themoviedb.org/3/trending/movie/week?",s="https://api.themoviedb.org/3/search/movie?",i="https://api.themoviedb.org/3/movie/";function p(){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function n(){var t,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"api_key=").concat(o,"&total_pages=20"));case 2:return t=n.sent,n.next=5,t.json();case 5:return e=n.sent,n.abrupt("return",e.results);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(s,"api_key=").concat(o,"&query=").concat(t,"&page=1"));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r.results);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i).concat(t,"?api_key=").concat(o));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i).concat(t,"/credits?api_key=").concat(o));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r.cast);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i).concat(t,"/reviews?api_key=").concat(o));case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r.results);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},861:function(n,t,e){function r(n,t,e,r,c,a,o){try{var u=n[a](o),s=u.value}catch(i){return void e(i)}u.done?t(s):Promise.resolve(s).then(r,c)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(c,a){var o=n.apply(t,e);function u(n){r(o,c,a,u,s,"next",n)}function s(n){r(o,c,a,u,s,"throw",n)}u(void 0)}))}}e.d(t,{Z:function(){return c}})}}]);
//# sourceMappingURL=435.071ed28b.chunk.js.map