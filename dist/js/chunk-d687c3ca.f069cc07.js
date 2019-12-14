(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d687c3ca"],{"22ab":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container py-5"},[r("NavTabs"),r("h1",{staticClass:"mt-5"},[t._v("美食達人")]),r("hr"),r("div",{staticClass:"row text-center"},t._l(t.users,(function(e){return r("div",{key:e.id,staticClass:"col-3"},[r("router-link",{attrs:{to:{name:"user",params:{id:e.id}}}},[r("img",{attrs:{src:t._f("emptyImage")(e.image),width:"140px",height:"140px"}})]),r("h2",[t._v(t._s(e.name))]),r("span",{staticClass:"badge badge-secondary"},[t._v("追蹤人數："+t._s(e.FollowerCount))]),r("p",{staticClass:"mt-3"},[e.isFollowed?r("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),t.removeFollowing(e.id)}}},[t._v("取消追蹤")]):r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),t.addFollowing(e.id)}}},[t._v("追蹤")])])],1)})),0)],1)},o=[],s=(r("a4d3"),r("4de4"),r("4160"),r("d81d"),r("4e82"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("159b"),r("2fa7")),a=(r("96cf"),r("8bb1")),i=r("4cce"),c=r("2fa3"),u=r("2708");function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(r,!0).forEach((function(e){Object(s["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var d={mixins:[u["a"]],components:{NavTabs:a["a"]},filters:{emptyImage:function(t){return t||"http://via.placeholder.com/300x300?text=No+Image"}},data:function(){return{users:[]}},created:function(){this.fetchTopUsers()},methods:{fetchTopUsers:function(){var t,e,r;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,regeneratorRuntime.awrap(i["a"].getTopUsers());case 3:if(t=n.sent,e=t.data,r=t.statusText,"OK"===r){n.next=8;break}throw new Error(r);case 8:this.users=e.users,n.next=14;break;case 11:n.prev=11,n.t0=n["catch"](0),c["a"].fire({type:"error",title:"無法取得美食達人，請稍後再試"});case 14:case"end":return n.stop()}}),null,this,[[0,11]])},addFollowing:function(t){var e,r,n;return regeneratorRuntime.async((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,regeneratorRuntime.awrap(i["a"].addFollowing({userId:t}));case 3:if(e=o.sent,r=e.data,n=e.statusText,"OK"===n&&"success"===r.status){o.next=8;break}throw new Error(n);case 8:this.users=this.users.map((function(e){return e.id!==t?e:p({},e,{FollowerCount:e.FollowerCount+1,isFollowed:!0})})).sort((function(t,e){return e.FollowerCount-t.FollowerCount})),o.next=14;break;case 11:o.prev=11,o.t0=o["catch"](0),c["a"].fire({type:"error",title:"無法加入追蹤，請稍後再試"});case 14:case"end":return o.stop()}}),null,this,[[0,11]])},removeFollowing:function(t){var e,r,n;return regeneratorRuntime.async((function(o){while(1)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,regeneratorRuntime.awrap(i["a"].deleteFollowing({userId:t}));case 3:if(e=o.sent,r=e.data,n=e.statusText,"OK"===n&&"success"===r.status){o.next=8;break}throw new Error(n);case 8:this.users=this.users.map((function(e){return e.id!==t?e:p({},e,{FollowerCount:e.FollowerCount+1,isFollowed:!1})})).sort((function(t,e){return e.FollowerCount-t.FollowerCount})),o.next=14;break;case 11:o.prev=11,o.t0=o["catch"](0),c["a"].fire({type:"error",title:"無法取消追蹤，請稍後再試"});case 14:case"end":return o.stop()}}),null,this,[[0,11]])}}},f=d,b=r("2877"),w=Object(b["a"])(f,n,o,!1,null,null,null);e["default"]=w.exports},"4e82":function(t,e,r){"use strict";var n=r("23e7"),o=r("1c0b"),s=r("7b0b"),a=r("d039"),i=r("b301"),c=[],u=c.sort,l=a((function(){c.sort(void 0)})),p=a((function(){c.sort(null)})),d=i("sort"),f=l||!p||d;n({target:"Array",proto:!0,forced:f},{sort:function(t){return void 0===t?u.call(s(this)):u.call(s(this),o(t))}})},d81d:function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").map,s=r("1dde");n({target:"Array",proto:!0,forced:!s("map")},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-d687c3ca.f069cc07.js.map