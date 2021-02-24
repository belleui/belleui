(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{18:function(o,e,r){"use strict";r.r(e),r.d(e,"HomePage",(function(){return i}));var t=r(0),n=t.b`:host{--font-color:#212529;--border-color:#212529;--border-radius:6px;display:inline-block}:host([type="primary"]){--font-color:#fff;--background-color:#007bff;--border-color:var(--background-color);--hover-background-color:#0069d9;--hover-border-color:#0062cc}:host([type="success"]){--font-color:#fff;--background-color:#28a745;--border-color:var(--background-color);--hover-background-color:#218838;--hover-border-color:#1e7e34}:host([type="danger"]){--font-color:#fff;--background-color:#dc3545;--border-color:var(--background-color);--hover-background-color:#c82333;--hover-border-color:#bd2130}:host([type="warning"]){--font-color:#fff;--background-color:#ffc107;--border-color:var(--background-color);--hover-background-color:#e0a800;--hover-border-color:#d39e00}:host([type="light"]){--background-color:#f8f9fa;--border-color:var(--background-color);--hover-background-color:#e2e6ea;--hover-border-color:#dae0e5}:host([type="dark"]){--font-color:#fff;--background-color:#343a40;--border-color:var(--background-color);--hover-background-color:#23272b;--hover-border-color:#1d2124}:host([disabled]){opacity:.65}:host([disabled]) button{cursor:default}:host([disabled]) button:hover{background:var(--background-color);border-color:var(--border-color)}:host([outline]) button{color:var(--background-color);background:0 0}:host([outline]) button:hover{color:var(--font-color);background:var(--hover-background-color)}button{position:relative;display:flex;justify-content:center;align-items:center;padding:6px 12px;color:var(--font-color);font-size:14px;text-align:center;background:var(--background-color);border:1px solid var(--border-color);border-radius:var(--border-radius);outline:0;overflow:hidden;cursor:pointer;transition:all .3s}button:hover{color:var(--hover-font-color,var(--font-color));background:var(--hover-background-color);border-color:var(--hover-border-color)}button .loading-icon{margin-left:5px;animation:loadingCircle 1s linear infinite}@keyframes loadingCircle{100%{transform:rotate(360deg)}}`,c=function(o,e,r,t){var n,c=arguments.length,l=c<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,r):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(o,e,r,t);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(l=(c<3?n(l):c>3?n(e,r,l):n(e,r))||l);return c>3&&l&&Object.defineProperty(e,r,l),l},l=function(o,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(o,e)};let a=class extends t.a{constructor(){super(...arguments),this.type="default",this.disabled=!1,this.outline=!1,this.loading=!1}render(){return t.d` <button ?disabled="${this.disabled}"> <span> <slot></slot> </span> ${this.loading?this.renderSpin():""} </button> `}renderSpin(){return this.loading?t.d` <span class="loading-icon"> <svg viewBox="0 0 1024 1024" focusable="false" data-icon="loading" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path></svg> </span> `:t.d``}};a.styles=n,c([Object(t.e)({type:String}),l("design:type",String)],a.prototype,"type",void 0),c([Object(t.e)({type:Boolean,reflect:!0}),l("design:type",Object)],a.prototype,"disabled",void 0),c([Object(t.e)({type:Boolean,reflect:!0}),l("design:type",Object)],a.prototype,"outline",void 0),c([Object(t.e)({type:Boolean,reflect:!0}),l("design:type",Object)],a.prototype,"loading",void 0),a=c([Object(t.c)("belle-button")],a);var d=function(o,e,r,t){var n,c=arguments.length,l=c<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,r):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(o,e,r,t);else for(var a=o.length-1;a>=0;a--)(n=o[a])&&(l=(c<3?n(l):c>3?n(e,r,l):n(e,r))||l);return c>3&&l&&Object.defineProperty(e,r,l),l};let i=class extends t.a{render(){return t.d` <section class="home-body"> <h1 class="title">Belle Design</h1> <div class="img"></div> <div class="introduce"> <p>Bellui是一个基于 Web Components 的 UI 组件库，您可以在HTML中，或者任何框架（如React, Vue, Angular）中使用。引入组件后，你可以随时随地的像使用原生html标签一样使用组件。</p> <belle-button type="primary"> <a href="/components">开始使用</a> </belle-button> </div> </section> `}};i.styles=t.b`:host{display:block;width:100%}a{text-decoration:none;color:inherit}.home-body{max-width:800px;margin:0 auto;text-align:center}.title{margin-top:48px;font-size:48px}.flex{display:flex;justify-content:space-between;align-items:center}.introduce{box-sizing:border-box;padding:10px;font-size:18px}.img{width:100%;height:350px;background:url(http://qgy3nib4w.hn-bkt.clouddn.com/demo.png) no-repeat center;background-size:contain}`,i=d([Object(t.c)("home-page")],i)}}]);
//# sourceMappingURL=1:c79b25cc18172135052b.js.map