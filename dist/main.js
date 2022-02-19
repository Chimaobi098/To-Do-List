(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),o=n.n(r),a=n(645),c=n.n(a)()(o());c.push([e.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --pink: #f6c0d0;\n  --blue: #51a5e1;\n  --light-blue: #eef6fc;\n  --maroon: #a63a50;\n  --brown: #816c61;\n}\nz body {\n  display: flex;\n  height: 100vh;\n  flex-direction: column;\n}\n\nheader,\nfooter {\n  background: var(--blue);\n  color: snow;\n  font-size: 2rem;\n  text-align: center;\n  padding: 1rem;\n}\n\nmain {\n  display: flex;\n  flex: 1;\n  width: 100%;\n}\n\naside {\n  width: 30%;\n  padding: 1rem;\n  font-size: 1.5rem;\n  background: var(--light-blue);\n}\n\naside p,\naside span {\n  /* text-align: left; */\n  border-bottom: 0.1px solid rgba(0, 0, 0, 0.13);\n  margin-left: 0.4rem;\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n\naside p:hover {\n  background: lightskyblue;\n}\n\narticle {\n  width: 70%;\n  font-size: 1.5rem;\n  padding: 2rem;\n}\n\narticle > p {\n  margin: 1rem;\n  width: 100%;\n  cursor: pointer;\n}\n\n.addTodoContainer > input,\n.addProjectContainer > input {\n  width: 100%;\n  padding: 0.3rem;\n  font-size: 1.3rem;\n  outline: none;\n  border: 1px solid var(--blue);\n}\n\n.addTodoContainer,\n.addProjectContainer {\n  /* padding: 0.5rem 0.8rem;\n    font-size: 1.2rem; */\n  text-align: center;\n  display: none;\n}\n\n.addTodoContainer button,\n.addProjectContainer button {\n  padding: 0.5rem 1rem;\n  font-size: 1.2rem;\n  text-align: center;\n  margin: 1rem;\n  background-color: var(--blue);\n  border: none;\n  border-radius: 0.3rem;\n  color: white;\n  cursor: pointer;\n}\n\n.fa-circle,\n.fa-times {\n  cursor: pointer;\n  /* display: flex; */\n\n  /* align-items: center; */\n}\n\n.todoItem {\n  display: flex;\n  gap: 1rem;\n  padding: 0.3rem;\n  /* justify-content: space-around; */\n  align-items: center;\n  /* flex-direction: column; */\n}\n\n.todoItem:hover {\n  background: lightsteelblue;\n}\n\n.todoItem p {\n  width: 100%;\n}\n\n.todoItem > input {\n  padding: 0.3rem;\n  font-size: 1.1rem;\n  min-width: 120px;\n  margin-right: 1rem;\n  /* outline: none; */\n}\n\n/*  javascript todo checklist classes */\n.clicked-circle {\n  opacity: 0.3;\n  border-radius: 50%;\n  background-color: var(--blue);\n}\n\n.clicked-text {\n  opacity: 0.4;\n}\n",""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var d=e[i],s=r.base?d[0]+r.base:d[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=n(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=o(m,r);r.byIndex=i,t.splice(i,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var d=r(e,o),s=0;s<a.length;s++){var l=n(a[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(795),o=n.n(r),a=n(569),c=n.n(a),i=n(565),d=n.n(i),s=n(216),l=n.n(s),u=n(589),p=n.n(u),m=n(426),f={};f.styleTagTransform=p(),f.setAttributes=d(),f.insert=c().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals,crypto.randomUUID instanceof Function||(crypto.randomUUID=function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))});const y=(e,t,n,r)=>{const o=crypto.randomUUID();return{title:e,dueDate:t,priority:n,checklist:r,taskToDom:()=>{const n=document.querySelector(".todo"),a=document.createElement("div");a.setAttribute("data-id",o),a.classList.add("todoItem"),a.addEventListener("click",h.circleLogic),a.addEventListener("click",h.removeTask);const c=document.createElement("i");c.classList.add("far","fa-circle"),c.value=r,a.appendChild(c);const i=document.createElement("p");i.textContent=e,a.appendChild(i);const d=document.createElement("input");d.textContent=t,d.setAttribute("type","date"),a.appendChild(d);const s=document.createElement("i");s.classList.add("fas","fa-times"),a.appendChild(s),n.appendChild(a)},id:o}};function g(){const e=document.querySelector(".projectCreator").value,t=(e=>{const t=document.querySelector(".projects"),n=crypto.randomUUID(),r=JSON.stringify([{title:"Take out the trash",dueDate:"12-03-2022",priority:"medium",checklist:"not completed"},{title:"Wash plates",dueDate:"15-03-2022",priority:"high",checklist:"not completed"}]);return{name:e,projectDom:()=>{const o=document.createElement("p");o.textContent=e,o.setAttribute("data-id",n),o.setAttribute("data-tasks",r),o.addEventListener("click",v.refreshTasks),t.insertBefore(o,h.addProjectPrompt)},tasks:r,id:n}})(e);return e.length>0?(t.projectDom(),console.log(t.id),console.log(t.tasks),h.projectCancelBtn()):alert("project name cannot be empty"),{project:t}}const v=(()=>{const e=document.querySelector(".all"),t=document.querySelector(".today"),n=document.querySelector(".this_week"),r=document.querySelector(".todo_header");e.addEventListener("click",a),t.addEventListener("click",a),n.addEventListener("click",a);const o=document.querySelectorAll("aside > p");function a(){r.textContent=this.textContent}Array.from(o).forEach((e=>{e.addEventListener("click",a)}));const c=document.querySelector(".todo");function a(){console.log(this)}function i(e){d();const t=JSON.parse(e.target.dataset.tasks);console.log(t),r.textContent=this.textContent,t.forEach((e=>{const n=y(e.title,e.dueDate,e.priority,e.checklist);console.log(n),console.log(t),n.taskToDom()})),h.task_add_btn.addEventListener("click",(()=>{const e=document.querySelector(".addTodoInput").value,t=y(e,"22-02-2022","medium","not completed");t.taskToDom(),console.log(t)}))}function d(){for(;c.firstChild;)c.removeChild(c.firstChild)}return document.querySelector(".test").addEventListener("click",(()=>{d(),i()})),document.querySelector(".random").addEventListener("click",(e=>{console.log(e.target)})),{changeName:a,refreshTasks:i}})(),h=(()=>{const e=document.querySelector(".addProjectPrompt"),t=document.querySelector(".addProjectContainer"),n=document.querySelector(".project-cancel-btn");function r(){document.querySelector(".projectCreator").value="",t.setAttribute("style","display:none"),e.setAttribute("style","display:block")}e.addEventListener("click",(function(){t.setAttribute("style","display:block"),e.setAttribute("style","display:none")})),document.querySelector(".project-add-btn").addEventListener("click",g),n.addEventListener("click",r);const o=document.querySelector(".addTodoContainer"),a=document.querySelector(".addTodoPrompt"),c=document.querySelector(".task-add-btn"),i=document.querySelector(".task-cancel-btn");function d(){document.querySelector(".addTodoInput").value="",o.setAttribute("style","display:none"),a.setAttribute("style","display:block")}a.addEventListener("click",(function(){o.setAttribute("style","display:block"),a.setAttribute("style","display:none")})),i.addEventListener("click",d);const s=document.querySelector(".todoItem");function l(e){e.target.classList.contains("fa-circle")&&(e.target.classList.toggle("clicked-circle"),e.target.parentElement.classList.toggle("clicked-text"))}function u(e){if(e.target.classList.contains("fa-times")){let t=e.target.parentElement.dataset.id;console.log(t),e.target.parentElement.remove()}}return s.addEventListener("click",l),s.addEventListener("click",u),{circleLogic:l,addProjectPrompt:e,addProjectContainer:t,addTodoContainer:o,addTodoPrompt:a,projectCancelBtn:r,taskCancelBtn:d,removeTask:u,task_add_btn:c}})()})()})();