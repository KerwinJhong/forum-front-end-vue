(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cee5296e"],{"18ec":function(t,e,a){},"384b":function(t,e,a){"use strict";var r=a("18ec"),n=a.n(r);n.a},5652:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-5"},[a("AdminNav"),a("form",{staticClass:"my-4"},[a("div",{staticClass:"form-row"},[a("div",{staticClass:"col-auto"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.newCategoryName,expression:"newCategoryName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"新增餐廳類別..."},domProps:{value:t.newCategoryName},on:{input:function(e){e.target.composing||(t.newCategoryName=e.target.value)}}})]),a("div",{staticClass:"col-auto"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button",disabled:t.isProcessing},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.createCategory(e)}}},[t._v("新增")])])])]),a("table",{staticClass:"table"},[t._m(0),a("tbody",t._l(t.categories,(function(e){return a("tr",{key:e.id},[a("th",{attrs:{scope:"row"}},[t._v(t._s(e.id))]),a("td",{staticClass:"position-relative"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!e.isEditing,expression:"!category.isEditing"}],staticClass:"category-name"},[t._v(t._s(e.name))]),a("input",{directives:[{name:"show",rawName:"v-show",value:e.isEditing,expression:"category.isEditing"},{name:"model",rawName:"v-model",value:e.name,expression:"category.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.name},on:{input:function(a){a.target.composing||t.$set(e,"name",a.target.value)}}}),a("span",{directives:[{name:"show",rawName:"v-show",value:e.isEditing,expression:"category.isEditing"}],staticClass:"cancel",on:{click:function(a){return t.handleCancel(e.id)}}},[t._v("✕")])]),a("td",{staticClass:"d-flex justify-content-between"},[a("button",{directives:[{name:"show",rawName:"v-show",value:!e.isEditing,expression:"!category.isEditing"}],staticClass:"btn btn-link mr-2",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.toggleIsEditing(e.id)}}},[t._v("Edit")]),a("button",{directives:[{name:"show",rawName:"v-show",value:e.isEditing,expression:"category.isEditing"}],staticClass:"btn btn-link mr-2",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.updateCategory({categoryId:e.id,name:e.name})}}},[t._v("Save")]),a("button",{staticClass:"btn btn-link mr-2",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.deleteCategory(e.id)}}},[t._v("Delete")])])])})),0)])],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"thead-dark"},[a("tr",[a("th",{attrs:{scope:"col",width:"60"}},[t._v("#")]),a("th",{attrs:{scope:"col"}},[t._v("Category Name")]),a("th",{attrs:{scope:"col",width:"210"}},[t._v("Action")])])])}],s=(a("a4d3"),a("4de4"),a("4160"),a("d81d"),a("b0c0"),a("e439"),a("dbb4"),a("b64b"),a("d3b7"),a("159b"),a("2fa7")),i=(a("96cf"),a("e04c")),o=a("be6c"),c=a("2fa3");function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(a,!0).forEach((function(e){Object(s["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var l={components:{AdminNav:i["a"]},data:function(){return{newCategoryName:"",categories:[],isProcessing:!1}},created:function(){this.fetchCategories()},methods:{fetchCategories:function(){var t,e,a;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,regeneratorRuntime.awrap(o["a"].categories.get());case 3:if(t=r.sent,e=t.data,a=t.statusText,"OK"===a){r.next=8;break}throw new Error(a);case 8:this.categories=e.categories.map((function(t){return d({},t,{isEditing:!1})})),r.next=14;break;case 11:r.prev=11,r.t0=r["catch"](0),c["a"].fire({type:"error",title:"無法取得分類清單，請稍後再試"});case 14:case"end":return r.stop()}}),null,this,[[0,11]])},createCategory:function(){var t,e,a;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,this.processing=!0,r.next=4,regeneratorRuntime.awrap(o["a"].categories.create({name:this.newCategoryName}));case 4:if(t=r.sent,e=t.data,a=t.statusText,"OK"===a&&"success"===e.status){r.next=9;break}throw new Error(a);case 9:this.categories.push(d({},e.category,{isEditing:!1})),this.newCategoryName="",this.isProcessing=!1,this.fetchCategories(),c["a"].fire({type:"success",title:"成功新增分類"}),r.next=19;break;case 16:r.prev=16,r.t0=r["catch"](0),c["a"].fire({type:"error",title:"無法新增分類清單，請稍後再試"});case 19:case"end":return r.stop()}}),null,this,[[0,16]])},deleteCategory:function(t){var e,a,r;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,regeneratorRuntime.awrap(o["a"].categories.delete({categoryId:t}));case 3:if(e=n.sent,a=e.data,r=e.statusText,"OK"===r&&"success"===a.status){n.next=8;break}throw new Error(r);case 8:this.categories=this.categories.filter((function(e){return e.id!==t})),c["a"].fire({type:"success",title:"成功刪除分類"}),n.next=15;break;case 12:n.prev=12,n.t0=n["catch"](0),c["a"].fire({type:"error",title:"無法刪除分類，請稍後再試"});case 15:case"end":return n.stop()}}),null,this,[[0,12]])},toggleIsEditing:function(t){this.categories=this.categories.map((function(e){return e.id!==t?e:d({},e,{nameCached:e.name,isEditing:!e.isEditing})}))},updateCategory:function(t){var e,a,r,n,s;return regeneratorRuntime.async((function(i){while(1)switch(i.prev=i.next){case 0:return e=t.categoryId,a=t.name,i.prev=1,i.next=4,regeneratorRuntime.awrap(o["a"].categories.update({categoryId:e,name:a}));case 4:if(r=i.sent,n=r.data,s=r.statusText,"OK"===s&&"success"===n.status){i.next=9;break}throw new Error(s);case 9:this.toggleIsEditing(e),i.next=15;break;case 12:i.prev=12,i.t0=i["catch"](1),c["a"].fire({type:"error",title:"無法更新餐廳類別，請稍後再試"});case 15:case"end":return i.stop()}}),null,this,[[1,12]])},handleCancel:function(t){this.categories=this.categories.map((function(e){return e.id!==t?e:d({},e,{name:e.nameCached})})),this.toggleIsEditing(t)}}},g=l,p=(a("384b"),a("2877")),m=Object(p["a"])(g,r,n,!1,null,"b691bb4e",null);e["default"]=m.exports},be6c:function(t,e,a){"use strict";a("b0c0");var r=a("2fa3"),n=function(){return localStorage.getItem("token")};e["a"]={categories:{get:function(){return r["b"].get("/admin/categories",{headers:{Authorization:"Bearer ".concat(n())}})},create:function(t){var e=t.name;return r["b"].post("/admin/categories",{name:e},{headers:{Authorization:"Bearer ".concat(n())}})},update:function(t){var e=t.categoryId,a=t.name;return r["b"].put("/admin/categories/".concat(e),{name:a},{headers:{Authorization:"Bearer ".concat(n())}})},delete:function(t){var e=t.categoryId;return r["b"].delete("/admin/categories/".concat(e),{headers:{Authorization:"Bearer ".concat(n())}})}},restaurants:{getDetail:function(t){var e=t.restaurantId;return r["b"].get("/admin/restaurants/".concat(e),{headers:{Authorization:"Bearer ".concat(n())}})},get:function(){return r["b"].get("/admin/restaurants",{headers:{Authorization:"Bearer ".concat(n())}})},create:function(t){var e=t.formData;return r["b"].post("/admin/restaurants",e,{headers:{Authorization:"Bearer ".concat(n())}})},update:function(t){var e=t.restaurantId,a=t.formData;return r["b"].put("/admin/restaurants/".concat(e),a,{headers:{Authorization:"Bearer ".concat(n())}})},delete:function(t){var e=t.restaurantId;return r["b"].delete("/admin/restaurants/".concat(e),{headers:{Authorization:"Bearer ".concat(n())}})}}}},d81d:function(t,e,a){"use strict";var r=a("23e7"),n=a("b727").map,s=a("1dde");r({target:"Array",proto:!0,forced:!s("map")},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},e04c:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mb-3"},[a("h1",[t._v("餐廳後台")]),a("router-link",{attrs:{to:"/admin/restaurants"}},[t._v("Restaurants")]),t._v("| "),a("router-link",{attrs:{to:"/admin/categories"}},[t._v("Categories")]),t._v("| "),a("router-link",{attrs:{to:"/admin/users"}},[t._v("Users")])],1)},n=[],s=a("2877"),i={},o=Object(s["a"])(i,r,n,!1,null,null,null);e["a"]=o.exports}}]);
//# sourceMappingURL=chunk-cee5296e.5c247447.js.map