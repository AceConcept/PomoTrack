(function(t){function e(e){for(var a,o,c=e[0],i=e[1],d=e[2],u=0,f=[];u<c.length;u++)o=c[u],n[o]&&f.push(n[o][0]),n[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,d||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,c=1;c<s.length;c++){var i=s[c];0!==n[i]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=s[0]))}return t}var a={},n={app:0},r=[];function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=a,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/ToDo-Vue/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var l=i;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("64a9"),n=s.n(a);n.a},4678:function(t,e,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=r(t);return s(e)}function r(t){var e=a[t];if(!(e+1)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return e}n.keys=function(){return Object.keys(a)},n.resolve=r,t.exports=n,n.id="4678"},"56d7":function(t,e,s){"use strict";s.r(e);s("7f7f"),s("20d6"),s("7514"),s("55dd"),s("cadf"),s("551c"),s("f751"),s("097d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container",attrs:{id:"app"}},[s("div",{staticClass:"section"},[s("div",{staticClass:"title-section"},[s("h1",{attrs:{id:"todo-title"}},[t._v("To Do List")]),s("div",{staticClass:"dropright"},[s("button",{staticClass:"btn btn-light",attrs:{"data-toggle":"dropdown"}},[s("font-awesome-icon",{attrs:{icon:"cog"}})],1),s("div",{staticClass:"dropdown-menu",attrs:{id:"todo-menu"}},[s("div",{staticClass:"input-group"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.$root.order,expression:"$root.order"}],staticClass:"custom-select",attrs:{id:"orderGroupSelect"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.$root,"order",e.target.multiple?s:s[0])}}},[s("option",{attrs:{selected:"",value:"Oldest"}},[t._v("Oldest")]),s("option",{attrs:{value:"Newest"}},[t._v("Newest")])]),t._m(0)])])])]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask,expression:"newTask"}],staticClass:"form-control",attrs:{id:"new-task",type:"text",placeholder:"enter new task"},domProps:{value:t.newTask},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTask(e)},input:function(e){e.target.composing||(t.newTask=e.target.value)}}}),s("TaskList",{attrs:{tasks:t.$root.incompleteTasks()}})],1),s("br"),t.$root.completedTasks().length>0?s("div",{staticClass:"section"},[s("div",{staticClass:"title-section"},[s("h3",{attrs:{id:"completed-title"}},[t._v("Completed Tasks")]),s("div",{staticClass:"dropright"},[s("button",{staticClass:"btn btn-light",attrs:{id:"completedSettingsButton","data-toggle":"dropdown"}},[s("font-awesome-icon",{attrs:{icon:"cog"}})],1),s("div",{staticClass:"dropdown-menu"},[s("div",{staticClass:"input-group"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.$root.completedOrder,expression:"$root.completedOrder"}],staticClass:"custom-select",attrs:{id:"completedOrderGroupSelect"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.$root,"completedOrder",e.target.multiple?s:s[0])}}},[s("option",{attrs:{selected:"",value:"Recent"}},[t._v("Recent")]),s("option",{attrs:{value:"Oldest"}},[t._v("Oldest")])]),t._m(1)]),s("div",{staticClass:"dropdown-divider"}),s("button",{staticClass:"btn btn-danger",attrs:{id:"clear-btn"},on:{click:function(e){return t.$root.clearTasks()}}},[t._v("Clear All")])])])]),s("TaskList",{attrs:{tasks:t.$root.completedTasks()}})],1):t._e()])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-group-append"},[s("label",{staticClass:"input-group-text",attrs:{for:"orderGroupSelect"}},[t._v("First")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-group-append"},[s("label",{staticClass:"input-group-text",attrs:{for:"completedOrderGroupSelect"}},[t._v("First")])])}],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"task-list list-group"},t._l(t.tasks,function(t){return s("Task",{key:t.id,attrs:{task:t}})}),1)},c=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"task list-group-item form-check"},[s("div",{staticClass:"d-flex"},[s("div",{staticClass:"flex-grow-1 d-flex align-items-center"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.task.completed,expression:"task.completed"}],staticClass:"task-checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.task.completed)?t._i(t.task.completed,null)>-1:t.task.completed},on:{change:[function(e){var s=t.task.completed,a=e.target,n=!!a.checked;if(Array.isArray(s)){var r=null,o=t._i(s,r);a.checked?o<0&&t.$set(t.task,"completed",s.concat([r])):o>-1&&t.$set(t.task,"completed",s.slice(0,o).concat(s.slice(o+1)))}else t.$set(t.task,"completed",n)},function(e){return t.$root.completeTask(t.task.id)}]}}),t.editing?t._e():s("span",{on:{click:function(e){t.editing=!0}}},[t._v(t._s(t.task.name))]),t.editing?s("div",{staticClass:"d-flex align-items-center"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.task.name,expression:"task.name"}],staticClass:"edit-task",domProps:{value:t.task.name},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.editing=!1},input:function(e){e.target.composing||t.$set(t.task,"name",e.target.value)}}}),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){t.editing=!1}}},[s("font-awesome-icon",{attrs:{icon:"save"}})],1)]):t._e()]),s("div",{staticClass:"dropright"},[s("button",{staticClass:"btn btn-light",attrs:{type:"button","data-toggle":"dropdown"}},[s("font-awesome-icon",{attrs:{icon:"ellipsis-h"}})],1),s("div",{staticClass:"dropdown-menu"},[s("h6",[t._v("\n          "+t._s(t.dateType)+" on\n        ")]),s("div",[t._v("\n          "+t._s(t.displayDate)+"\n        ")]),s("div",[t._v("\n          "+t._s(t.displayTime)+"\n        ")]),s("div",{staticClass:"dropdown-divider"}),s("div",{staticClass:"flex-column"},[s("button",{staticClass:"btn btn-warning btn-sm",attrs:{type:"button"},on:{click:function(e){t.editing=!0}}},[s("font-awesome-icon",{attrs:{icon:"pencil-alt"}})],1),s("button",{staticClass:"btn btn-danger btn-sm",attrs:{type:"button"},on:{click:function(e){return t.$root.deleteTask(t.task.id)}}},[s("font-awesome-icon",{attrs:{icon:"trash-alt"}})],1)])])])])])},d=[],l=s("c1df"),u=s.n(l),f={name:"Task",props:{task:Object},data:function(){return{editing:!1}},computed:{dateType:function(){return this.task.completed?"Completed":"Created"},date:function(){return this.task.completed?this.task.completedDate:this.task.createdDate},displayDate:function(){return u()(this.date).format("ddd MMM DD YYYY,")},displayTime:function(){return u()(this.date).format("h:mm a")}}},p=f,m=(s("8f5b"),s("2877")),b=Object(m["a"])(p,i,d,!1,null,"5bb1a001",null),j=b.exports,k={name:"TaskList",props:{tasks:Array},components:{Task:j}},v=k,h=Object(m["a"])(v,o,c,!1,null,null,null),g=h.exports,y=s("1157"),w=s.n(y);w()(document).on("click",".title-section .dropdown-menu",function(t){t.stopPropagation()});var _={name:"app",components:{TaskList:g},data:function(){return{newTask:""}},methods:{addTask:function(){this.$root.addTask(this.newTask),this.newTask=""}}},C=_,T=(s("034f"),Object(m["a"])(C,n,r,!1,null,null,null)),O=T.exports,x=(s("f9e3"),s("0deb"),s("ecee")),$=s("c074"),z=s("ad3d");x["c"].add($["e"],$["d"],$["a"],$["b"],$["c"]),a["a"].component("font-awesome-icon",z["a"]),a["a"].config.productionTip=!1;var D={tasks:[],order:"Oldest",completedOrder:"Recent",incompleteTasks:function(){var t=this.tasks.filter(function(t){return!t.completed});return"Newest"===this.order?t.reverse():t},completedTasks:function(){var t=this.tasks.filter(function(t){return t.completed}).sort(function(t,e){return t.completedDate-e.completedDate});return"Recent"===this.completedOrder?t.reverse():t},addTask:function(t){var e={id:this.tasks.length,name:t,completed:!1,createdDate:new Date,completedDate:null};this.tasks.push(e)},completeTask:function(t){var e=this.tasks.find(function(e){return e.id===t});e.completed?e.completedDate=Date.now():e.completedDate=null},deleteTask:function(t){var e=this.tasks.findIndex(function(e){return e.id===t}),s=this.tasks[e];(s.completed||confirm("Are you sure you want to delete task ".concat(s.name,"? the task is not yet complete!")))&&this.tasks.splice(e,1)},clearTasks:function(){var t=this.tasks.filter(function(t){return t.completed});(1===t.length||confirm("Are you sure that you want to delete all ".concat(t.length," completed tasks?")))&&(this.tasks=this.tasks.filter(function(t){return!t.completed}))}};new a["a"]({render:function(t){return t(O)},data:D}).$mount("#app")},"64a9":function(t,e,s){},"8f5b":function(t,e,s){"use strict";var a=s("f320"),n=s.n(a);n.a},f320:function(t,e,s){}});
//# sourceMappingURL=app.6c5f6164.js.map