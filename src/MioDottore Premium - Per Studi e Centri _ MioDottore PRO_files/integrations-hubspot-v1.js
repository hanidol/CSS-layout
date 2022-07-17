(()=>{var t,e,n,i,r,a,o={13:(t,e,n)=>{"use strict";n.d(e,{default:()=>r});var i=function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t};const r=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];if(Object.assign)return Object.assign.apply(Object,[t].concat(n));for(var a=0;a<n.length;a++)i(t,n[a]);return t}},23:(t,e,n)=>{"use strict";n.d(e,{bind:()=>u,unbind:()=>l,trigger:()=>c,bindNamed:()=>p,unbindNamed:()=>g,unbindAllInNamespace:()=>v});var i=n(2);function r(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var o,s=Array.prototype.slice,u=function(t,e){var n=this;return n._bindings||(n._bindings={}),n._bindings[t]||(n._bindings[t]=[]),n._bindings[t].push(e),function(){n.unbind(t,e)}},l=function(t,e){if(!this._bindings)return this;if(!this._bindings[t])return this;for(var n=[],i=0;i<this._bindings[t].length;i++){var r=this._bindings[t][i];r!==e&&n.push(r)}this._bindings[t]=n},d=function(t,e){return this.unbind(t,e),this.bind(t,e),{event:t,fn:e}},c=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return this._bindings&&null!=this._bindings.all&&f.apply(this,["all",t].concat(n)),f.apply(this,[t].concat(n))},f=function(t){if(!this._bindings)return this;if(!this._bindings[t])return this;for(var e,n=s.call(arguments,1),a=r(this._bindings[t]),o=0;o<a.length;o++){var u=a[o];try{var l=u.apply(this,n);l===this.unbind&&(null==e&&(e=[]),e.push({event:t,fn:u}))}catch(t){if(this._throwTriggerErrors)throw t;i.default.error&&i.default.error(t)}}if(e)for(var d=0;d<e.length;d++){var c=e[d];this.unbind(c.event,c.fn)}return this},h=function(t,e){null==t._namedBindings&&(t._namedBindings={}),null==t._namedBindings[e]&&(t._namedBindings[e]={})},p=function(t,e,n,i){return this.unbindNamed(t,e),function(t,e,n,i,r){h(t,e),t._namedBindings[e][n]={event:i,fn:r}}(this,t,e,n,i),this.bind(n,i),function(){this.unbindNamed(t,e)}},g=function(t,e){h(this,t);var n=function(t,e,n){return h(t,e),t._namedBindings[e][n]}(this,t,e);if(n){var i=n.event,r=n.fn;this.unbind(i,r)}var a=this._namedBindings;return delete a[t][e],b(a[t])&&delete a[t],this},v=function(t){var e=this._namedBindings&&this._namedBindings[t];if(null==e)return this;for(var n in e)e.hasOwnProperty(n)&&this.unbindNamed(t,n)},b=function(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return!0};(o=function(){}.prototype).bind=u,o.unbind=l,o.on=u,o.off=l,o.rebind=d,o.trigger=c,o.bindNamed=p,o.unbindNamed=g,o.unbindAllInNamespace=v},21:(t,e,n)=>{"use strict";n.d(e,{globalTrigger:()=>r});var i=n(2);(0,n(22).makeWbindable)(i.default);i.default.bind.bind(i.default),i.default.on.bind(i.default),i.default.off.bind(i.default),i.default.rebind.bind(i.default);var r=i.default.trigger.bind(i.default);i.default.unbind.bind(i.default)},71:(t,e,n)=>{"use strict";n.d(e,{getLocalStorage:()=>u,removeLocalStorage:()=>l,setLocalStorage:()=>d,updateLocalStorage:()=>c});var i=n(2),r=function(t){setTimeout((function(){throw t}),0)},a="_namespacedLocalStorage",o=function(t){if(null!=i.default._localStorageWorks)return i.default._localStorageWorks;try{var e=localStorage.getItem(t);localStorage.removeItem(t),localStorage.setItem(t,e),i.default._localStorageWorks=!0}catch(t){i.default._localStorageWorks=!1}return i.default._localStorageWorks},s=function(){return null==i.default[a]&&(i.default[a]={}),i.default[a]},u=function(t){if(!o())return s()[t]||{};if(localStorage[t])try{return"null"===localStorage[t]?{}:JSON.parse(localStorage[t])}catch(t){r(t)}return{}},l=function(t){if(o())try{localStorage.removeItem(t)}catch(t){r(t)}else s()[t]={}},d=function(t,e){if(!o())return null!=e&&"object"==typeof e&&(s()[t]=e),e;try{s()[t]=e,localStorage[t]=JSON.stringify(e)}catch(t){r(t)}return e},c=function(t,e){var n=u(t);try{e(n)}catch(t){r(t)}return d(t,n)}},18:(t,e,n)=>{"use strict";n.d(e,{default:()=>i});const i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4e3,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:window;if(/loaded|complete/.test(n.readyState))setTimeout(t,0);else{var r=function(){i.removeEventListener("load",a,!1)},a=function(){clearTimeout(o),r(),t()};i.addEventListener("load",a,!1);var o=setTimeout((function(){r(),t()}),e)}}},17:()=>{"use strict"},3:(t,e,n)=>{"use strict";var i;n.d(e,{default:()=>r});try{(i=self).self!==i&&void 0!==i.self&&"undefined"!=typeof window&&(i=window)}catch(t){i="undefined"!=typeof globalThis?globalThis:window}const r=i},96:(t,e,n)=>{"use strict";n.d(e,{countMetric:()=>d});var i=n(2),r=n(13),a=n(18),o=n(83),s=n(37),u=void 0;null==i.default._simpleMetricsCache&&(i.default._simpleMetricsCache={}),i.default._simpleMetricsPostFunction||(i.default._simpleMetricsPostFunction=s.xhrPost),null==i.default._simpleMetricsDebounceInterval&&(i.default._simpleMetricsDebounceInterval=500);var l=i.default._simpleMetricsCache,d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2?arguments[2]:void 0;return f("count",t,e,n)},c=function(){if((0,o.isVisitorTrackingEnabled)()){for(var t="https://".concat("pipedream.wistia.com","/mput?topic=metrics"),e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return i.default._simpleMetricsPostFunction(t,n.join("\n"))}},f=function(t,e,n){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if((0,o.isVisitorTrackingEnabled)())try{null==l.toMput&&(l.toMput=[]);var d=(0,r.default)({type:t,key:e,value:null!=n?n:null},s),f=JSON.stringify(d);l.toMput.push(f),clearTimeout(i.default._msendTimeout),i.default._msendTimeout=setTimeout((function(){(0,a.default)((function(){c.apply(u,l.toMput),l.toMput=[]}))}),i.default._simpleMetricsDebounceInterval)}catch(t){console.error(t.message),console.error(t.stack)}}},83:(t,e,n)=>{"use strict";n.d(e,{isVisitorTrackingEnabled:()=>d});var i=n(2),r=n(21),a=n(84);function o(t){return function(t){if(Array.isArray(t))return s(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var u;i.default._visitorTrackingDomain||(i.default._visitorTrackingDomain=location.hostname||""),i.default._visitorTracking||(null!=(u=(0,a.getWistiaLocalStorage)().visitorTrackingEnabled)&&((0,a.updateWistiaLocalStorage)((function(t){return delete t.visitorTrackingEnabled})),i.default._visitorTracking={},i.default._visitorTracking[i.default._visitorTrackingDomain]={isEnabled:u,updatedAt:Date.now()},(0,a.updateWistiaLocalStorage)((function(t){return t.visitorTracking=i.default._visitorTracking}))),i.default._visitorTracking=(0,a.getWistiaLocalStorage)().visitorTracking||{});i.default.consent=function(t){return null==t?d():l(t)};var l=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.default._visitorTrackingDomain;"default"===t?delete i.default._visitorTracking[e]:i.default._visitorTracking[e]={isEnabled:"true"==="".concat(t),updatedAt:Date.now()},(0,a.updateWistiaLocalStorage)((function(t){return t.visitorTracking=i.default._visitorTracking})),(0,r.globalTrigger)("visitortrackingchange",t)},d=function(){if("boolean"==typeof i.default._visitorTracking)return i.default._visitorTracking;if(i.default._visitorTracking){var t=function(){if(i.default._visitorTrackingDomain)for(var t=i.default._visitorTrackingDomain.split(".");t.length>0;){var e=i.default._visitorTracking[t.join(".")],n=e&&e.isEnabled;if(null!=n)return n;t.shift()}}();if(null!=t)return Boolean(t)}var e=[];if(i.default.api&&i.default.api.all)try{e.push.apply(e,o(i.default.api.all()))}catch(t){}if(i.default.channel&&i.default.channel.all)try{e.push.apply(e,o(i.default.channel.all()))}catch(t){}return!e.some((function(t){return!0===(t._mediaData||t._galleryData||{}).privacyMode}))}},22:(t,e,n)=>{"use strict";n.d(e,{makeWbindable:()=>a});var i=n(2),r=n(23);i.default.bindable||(i.default.bindable={bind:function(t,e){return this.specialBind&&!0===this.specialBind.apply(this,arguments)?this:e?(r.bind.call(this,t,e),this):void(i.default.warn&&i.default.warn(this.constructor.name,"bind","falsey value passed in as callback:",e))},unbind:function(t,e){return this.specialUnbind&&!0===this.specialUnbind.apply(this,arguments)||(e?r.unbind.call(this,t,e):this._bindings&&(this._bindings[t]=[]),this._bindings&&this._bindings[t]&&!this._bindings[t].length&&(this._bindings[t]=null,delete this._bindings[t])),this},on:function(t,e){var n=this.specialBind&&this.specialBind.apply(this,arguments);return"function"==typeof n?n:r.bind.call(this,t,e)},off:function(t,e){var n=this.specialUnbind&&this.specialUnbind.apply(this,arguments);return"function"==typeof n?n:r.unbind.call(this,t,e)},rebind:function(t,e){return this.unbind(t,e),this.bind(t,e),this},trigger:function(t){for(var e,n=arguments.length,i=new Array(n>1?n-1:0),a=1;a<n;a++)i[a-1]=arguments[a];return(e=r.trigger).call.apply(e,[this,t].concat(i)),this},bindNamed:function(){return r.bindNamed.apply(this,arguments)},unbindNamed:function(){return r.unbindNamed.apply(this,arguments)},unbindAllInNamespace:function(){return r.unbindAllInNamespace.apply(this,arguments)}});var a=function(t){for(var e in i.default.bindable){var n=i.default.bindable[e];t[e]||(t[e]=n)}};i.default.bindable},84:(t,e,n)=>{"use strict";n.d(e,{getWistiaLocalStorage:()=>o,updateWistiaLocalStorage:()=>s});var i=n(2),r=n(71),a="wistia",o=function(){return(0,r.getLocalStorage)(a)},s=function(t){return i.default._localStorage=(0,r.updateLocalStorage)(a,t),i.default._localStorage}},37:(t,e,n)=>{"use strict";n.d(e,{xhrPost:()=>r});n(13);var i=function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return new Promise((function(a,o){var s=new(r.XMLHttpRequest||XMLHttpRequest);r.afterConstructor&&r.afterConstructor(s);try{s.addEventListener("readystatechange",(function(){if(!(s.readyState<4))if(null!=s.status&&(s.status>=200&&s.status<300||304==s.status))if(s.response&&"string"!=typeof s.response)a({data:s.response,status:s.status,statusText:s.statusText,xhr:s});else if("json"===r.dataType)try{var n=JSON.parse(s.responseText);a({data:n,status:s.status,statusText:s.statusText,xhr:s})}catch(n){var i=new Error("".concat(t," ").concat(e," - Error parsing response text: ").concat(s.responseText,"."));console.error(i.message),o(i)}else a({data:s.responseText,status:s.status,statusText:s.statusText,xhr:s});else{var u=new Error("".concat(t," ").concat(e," - Got an unsuccessful status code: ").concat(s.status,". ").concat(s.statusText));u.status=s.status,console.error(u.message),o(u)}}),!1)}catch(t){console.error(t.message),console.error(t.stack)}s.addEventListener("error",(function(){var t=new Error("XHR error");t.status=s.status,t.xhr=s,o(t)}),!1);if(s.addEventListener("timeout",(function(t){var e=new Error("XHR timeout");e.status=s.status,e.message=t&&t.message,e.xhr=s,o(t)}),!1),s.open(t,e,!0),r.withCredentials&&(s.withCredentials=!0),r.timeout&&(s.timeout=r.timeout),null!=r.dataType&&(s.responseType=r.dataType),"POST"!==t||i["content-type"]||s.setRequestHeader("content-type","application/x-www-form-urlencoded"),i)for(var u in i)i.hasOwnProperty(u)&&s.setRequestHeader(u.toLowerCase(),i[u]);s.send(n),r.afterSend&&r.afterSend(s)}))},r=function(t,e,n,r){return i("POST",t,e,n,r)}},2:(t,e,n)=>{"use strict";n.d(e,{default:()=>a});var i=n(3);null==i.default.Wistia&&(i.default.Wistia={});var r=i.default.Wistia;null==r._initializers&&(r._initializers={}),null==r._destructors&&(r._destructors={}),null==r.mixin&&(r.mixin=function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])});const a=i.default.Wistia}},s={};function u(t){var e=s[t];if(void 0!==e)return e.exports;var n=s[t]={exports:{}};return o[t](n,n.exports,u),n.exports}u.d=(t,e)=>{for(var n in e)u.o(e,n)&&!u.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},u.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i=u(17).poll,(0,u(96).countMetric)("legacy/integrations-hubspot-v1",1,{href:window.location.href}),null==window._hsq&&(window._hsq=[]),a=function(t,e){var n,i,r;return i=document.location.href.split("?")[0],n=(n=(n=(null!=(r=document.getElementsByTagName("title")[0])?r.innerHTML:void 0)||"").replace(/^[\n\s]+/,"").replace(/[\n\s]+$/,"")).replace(/[^\x00-\x7F]/g,""),t.foreignData({hubspot_hutk:e.utk.visitor,wistia_visitor_key:t.visitorKey(),page_url:i,page_name:n,canonical_url:e.canonicalUrl,page_id:e.pageId,content_type:e.contentType})},e=function(){return wistiaEmbeds.onFind((function(t){return t.ready((function(){var e;if(!(null!=(e=t._mediaData.integrations)?e.hubspot:void 0))return i((function(){return t.visitorKey()}),(function(){return t instanceof Wistia.PlaylistIframeAPI||window._hsq.push((function(e){return a(t,e)})),t instanceof Wistia.PublicApi?Wistia.Metrics.videoCount(t,"player/integrations-hubspot-v1/init-on-api-embed"):t instanceof Wistia.PlaylistIframeAPI?Wistia.Metrics.count("player/integrations-hubspot-v1/init-on-iframe-playlist",1,{href:location.href,referrer:document.referrer,hashedId:t.hashedId()}):Wistia.Metrics.count("player/integrations-hubspot-v1/init-on-iframe-embed",1,{href:location.href,referrer:document.referrer,hashedId:t.hashedId()})}))}))}))},null!=window.wistiaEmbeds?e():(null!=window.wistiaEmbedShepherdReady?(n=window.wistiaEmbedShepherdReady,window.wistiaEmbedShepherdReady=function(){return n(),e()}):window.wistiaEmbedShepherdReady=e,(t=document.createElement("script")).type="text/javascript",t.async=!0,t.src="//fast.wistia.com/assets/external/embed_shepherd-v1.js",(r=document.getElementsByTagName("script")[0]).parentNode.insertBefore(t,r))})();