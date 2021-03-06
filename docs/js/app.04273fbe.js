(function(e){function t(t){for(var n,c,i=t[0],l=t[1],u=t[2],d=0,f=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);s&&s(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],n=!0,i=1;i<o.length;i++){var l=o[i];0!==r[l]&&(n=!1)}n&&(a.splice(t--,1),e=c(c.s=o[0]))}return e}var n={},r={app:0},a=[];function c(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=e,c.c=n,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(o,n,function(t){return e[t]}.bind(null,n));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vueing/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var s=l;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"002d":function(e,t,o){"use strict";o("e36d")},"557a":function(e,t,o){"use strict";o("7330")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-app",[o("AppHeader"),o("v-main",[o("TodoInput"),o("TodoList")],1),o("AppFooter")],1)},a=[],c=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-container",[o("v-layout",{attrs:{"d-flex":"","align-center":"","justify-space-around":""}},[o("h1",[e._v("Vueing")]),o("h4",[e._v(e._s(e.currentDate))])])],1)},i=[],l=(o("99af"),{name:"AppHeader",data:function(){return{currentDate:""}},methods:{getCurrentDate:function(){var e=new Date,t=e.getFullYear(),o=e.getMonth(),n=e.getDate();return"".concat(t,"-").concat(o+1,"-").concat(n)}},created:function(){this.currentDate=this.getCurrentDate()}}),u=l,s=(o("91b0"),o("2877")),d=o("6544"),f=o.n(d),p=o("a523"),v=o("a722"),m=Object(s["a"])(u,c,i,!1,null,"327a2707",null),h=m.exports;f()(m,{VContainer:p["a"],VLayout:v["a"]});var b=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-layout",{staticClass:"d-flex justify-center column"},[o("v-form",{ref:"form",staticClass:"d-flex align-center",attrs:{"lazy-validation":""},on:{submit:function(t){return t.preventDefault(),e.addTodo(t)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[o("v-text-field",{attrs:{rules:e.newTodoRule,placeholder:"Write a to do"},model:{value:e.newTodo,callback:function(t){e.newTodo=t},expression:"newTodo"}}),o("v-btn",{attrs:{text:""},on:{click:e.addTodo}},[e._v("Add tesk")])],1)],1)},g=[],_={data:function(){return{newTodo:"",newTodoRule:[function(e){return!!e||"??? ?????? ??????????????? :)"}],valid:!1}},methods:{addTodo:function(){!0===this.$refs.form.validate()&&(this.$store.commit("addTodo",this.newTodo),this.clearInput())},clearInput:function(){this.$refs.form.reset(),this.newTodo=""}}},y=_,T=(o("002d"),o("8336")),x=o("4bd4"),O=o("8654"),j=Object(s["a"])(y,b,g,!1,null,"b6a97e42",null),w=j.exports;f()(j,{VBtn:T["a"],VForm:x["a"],VLayout:v["a"],VTextField:O["a"]});var S=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",{staticClass:"d-flex row"},e._l(e.todos,(function(t,n){return o("li",{key:t.id},[o("v-card",{staticClass:"d-flex justify-space-between"},[o("div",{staticClass:"d-flex justify-space-around align-center"},[t.completed?o("v-icon",{on:{click:function(o){return e.toggleComplete(t,n)}}},[e._v("done")]):o("v-icon",{on:{click:function(o){return e.toggleComplete(t,n)}}},[e._v("check_box_outline_blank")]),o("v-card-title",{class:{completed:t.completed}},[e._v(e._s(t.title))])],1),o("v-icon",{on:{click:function(o){return e.removeTodo(t,n)}}},[e._v("remove_circle")])],1)],1)})),0)},C=[],k={data:function(){return{todos:this.$store.state.todos}},methods:{removeTodo:function(e,t){var o={todo:e,index:t};this.$store.commit("removeTodo",{todo:e,currentTodoObj:o})},toggleComplete:function(e,t){var o={todo:e,index:t};this.$store.commit("toggleComplete",{todo:e,currentTodoObj:o})}}},V=k,$=(o("b720"),o("b0af")),I=o("99d9"),A=o("132d"),D=Object(s["a"])(V,S,C,!1,null,"eb36105e",null),F=D.exports;f()(D,{VCard:$["a"],VCardTitle:I["a"],VIcon:A["a"]});var M=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-footer",[o("v-container",[o("v-layout",{staticClass:"d-flex justify-space-around"},[o("span",[e._v(" Lee Minho ")]),o("span",[o("a",{attrs:{href:this.$store.state.github}},[e._v(" GitHub ")])])])],1)],1)},P=[],J={},L=J,E=(o("557a"),o("553a")),H=Object(s["a"])(L,M,P,!1,null,"6bc43e4a",null),N=H.exports;f()(H,{VContainer:p["a"],VFooter:E["a"],VLayout:v["a"]});var R={name:"App",components:{AppHeader:h,TodoInput:w,TodoList:F,AppFooter:N},AppFooter:N},z=R,B=o("7496"),G=o("f6c4"),W=Object(s["a"])(z,r,a,!1,null,null,null),Y=W.exports;f()(W,{VApp:B["a"],VMain:G["a"]});var q=o("5530"),K=(o("caad"),o("2532"),o("a434"),o("2f62"));n["a"].use(K["a"]);var Q={fetchTodo:function(){var e=[];if(localStorage.length>0)for(var t=0;t<localStorage.length;t++){var o=localStorage.key(t);o.includes("loglevel")||e.push(JSON.parse(localStorage.getItem(o)))}return e}},U=new K["a"].Store({state:{todos:Q.fetchTodo(),github:"https://github.com/minholeelog"},mutations:{addTodo:function(e,t){var o={title:t,completed:!1,id:(new Date).getTime(),icon:"check_box_outline_blank"};localStorage.setItem(t,JSON.stringify(o)),e.todos.push(o)},toggleComplete:function(e,t){var o=t.todo,n=t.currentTodoObj,r=JSON.parse(localStorage.getItem(o.title)),a=Object(q["a"])(Object(q["a"])({},r),{},{completed:!r.completed});localStorage.setItem(o.title,JSON.stringify(a)),e.todos.splice(n.index,1,a)},removeTodo:function(e,t){localStorage.removeItem(t.todo.title),e.todos.splice(t.currentTodoObj.index,1)}},actions:{},modules:{}}),X=(o("d1e78"),o("f309"));n["a"].use(X["a"]);var Z=new X["a"]({iconfont:"md"});n["a"].config.productionTip=!1,new n["a"]({store:U,vuetify:Z,render:function(e){return e(Y)}}).$mount("#app")},"5d6b":function(e,t,o){},7330:function(e,t,o){},"91b0":function(e,t,o){"use strict";o("5d6b")},b720:function(e,t,o){"use strict";o("e6fc")},e36d:function(e,t,o){},e6fc:function(e,t,o){}});
//# sourceMappingURL=app.04273fbe.js.map