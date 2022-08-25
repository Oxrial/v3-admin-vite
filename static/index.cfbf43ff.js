import{d as e,r as t,a,c as n,o as l,b as r,e as i,w as s,T as o,f as c,u,g as d,h as f,i as h,_ as p,j as m,k as g,F as v,l as A,t as w,m as b,n as y,p as C,q as x,E as k,s as E,v as S,x as V,y as T,z as B,A as D,B as F,C as _,D as L,G as I,H as M,I as R,J as O,K as N,L as P,M as Y,N as j,O as Q,P as z,Q as U,R as q,S as H,U as J,V as X,W as G,X as K}from"./index.0a8a257a.js";import{_ as W}from"./index.vue_vue_type_script_setup_true_lang.0531bb49.js";const Z=!0,$=!0,ee=!0,te=!0,ae=!0,ne=!0,le=e("settings",(()=>({fixedHeader:t(ee),showSettings:t(Z),showTagsView:t($),showSidebarLogo:t(te),showThemeSwitch:t(ae),showScreenfull:t(ne)}))),re={class:"app-main"},ie=p(a({__name:"AppMain",setup(e){const t=h(),a=n((()=>t.path));return(e,t)=>{const n=f("router-view");return l(),r("section",re,[i(n,null,{default:s((({Component:e})=>[i(o,{name:"fade-transform",mode:"out-in"},{default:s((()=>[(l(),c(d(e),{key:u(a)}))])),_:2},1024)])),_:1})])}}}),[["__scopeId","data-v-0058dddf"]]);function se(e,t){void 0===t&&(t={});for(var a=function(e){for(var t=[],a=0;a<e.length;){var n=e[a];if("*"!==n&&"+"!==n&&"?"!==n)if("\\"!==n)if("{"!==n)if("}"!==n)if(":"!==n)if("("!==n)t.push({type:"CHAR",index:a,value:e[a++]});else{var l=1,r="";if("?"===e[s=a+1])throw new TypeError('Pattern cannot start with "?" at '.concat(s));for(;s<e.length;)if("\\"!==e[s]){if(")"===e[s]){if(0==--l){s++;break}}else if("("===e[s]&&(l++,"?"!==e[s+1]))throw new TypeError("Capturing groups are not allowed at ".concat(s));r+=e[s++]}else r+=e[s++]+e[s++];if(l)throw new TypeError("Unbalanced pattern at ".concat(a));if(!r)throw new TypeError("Missing pattern at ".concat(a));t.push({type:"PATTERN",index:a,value:r}),a=s}else{for(var i="",s=a+1;s<e.length;){var o=e.charCodeAt(s);if(!(o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122||95===o))break;i+=e[s++]}if(!i)throw new TypeError("Missing parameter name at ".concat(a));t.push({type:"NAME",index:a,value:i}),a=s}else t.push({type:"CLOSE",index:a,value:e[a++]});else t.push({type:"OPEN",index:a,value:e[a++]});else t.push({type:"ESCAPED_CHAR",index:a++,value:e[a++]});else t.push({type:"MODIFIER",index:a,value:e[a++]})}return t.push({type:"END",index:a,value:""}),t}(e),n=t.prefixes,l=void 0===n?"./":n,r="[^".concat(function(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}(t.delimiter||"/#?"),"]+?"),i=[],s=0,o=0,c="",u=function(e){if(o<a.length&&a[o].type===e)return a[o++].value},d=function(e){var t=u(e);if(void 0!==t)return t;var n=a[o],l=n.type,r=n.index;throw new TypeError("Unexpected ".concat(l," at ").concat(r,", expected ").concat(e))},f=function(){for(var e,t="";e=u("CHAR")||u("ESCAPED_CHAR");)t+=e;return t};o<a.length;){var h=u("CHAR"),p=u("NAME"),m=u("PATTERN");if(p||m){var g=h||"";-1===l.indexOf(g)&&(c+=g,g=""),c&&(i.push(c),c=""),i.push({name:p||s++,prefix:g,suffix:"",pattern:m||r,modifier:u("MODIFIER")||""})}else{var v=h||u("ESCAPED_CHAR");if(v)c+=v;else if(c&&(i.push(c),c=""),u("OPEN")){g=f();var A=u("NAME")||"",w=u("PATTERN")||"",b=f();d("CLOSE"),i.push({name:A||(w?s++:""),pattern:A&&!w?r:w,prefix:g,suffix:b,modifier:u("MODIFIER")||""})}else d("END")}}return i}function oe(e,t){return function(e,t){void 0===t&&(t={});var a=function(e){return e&&e.sensitive?"":"i"}(t),n=t.encode,l=void 0===n?function(e){return e}:n,r=t.validate,i=void 0===r||r,s=e.map((function(e){if("object"==typeof e)return new RegExp("^(?:".concat(e.pattern,")$"),a)}));return function(t){for(var a="",n=0;n<e.length;n++){var r=e[n];if("string"!=typeof r){var o=t?t[r.name]:void 0,c="?"===r.modifier||"*"===r.modifier,u="*"===r.modifier||"+"===r.modifier;if(Array.isArray(o)){if(!u)throw new TypeError('Expected "'.concat(r.name,'" to not repeat, but got an array'));if(0===o.length){if(c)continue;throw new TypeError('Expected "'.concat(r.name,'" to not be empty'))}for(var d=0;d<o.length;d++){var f=l(o[d],r);if(i&&!s[n].test(f))throw new TypeError('Expected all "'.concat(r.name,'" to match "').concat(r.pattern,'", but got "').concat(f,'"'));a+=r.prefix+f+r.suffix}}else if("string"!=typeof o&&"number"!=typeof o){if(!c){var h=u?"an array":"a string";throw new TypeError('Expected "'.concat(r.name,'" to be ').concat(h))}}else{f=l(String(o),r);if(i&&!s[n].test(f))throw new TypeError('Expected "'.concat(r.name,'" to match "').concat(r.pattern,'", but got "').concat(f,'"'));a+=r.prefix+f+r.suffix}}else a+=r}return a}}(se(e,t),t)}const ce={key:0,class:"no-redirect"},ue=["onClick"],de=p(a({__name:"index",setup(e){const a=h(),n=A(),i=t([]),o=()=>{i.value=a.matched.filter((e=>e.meta&&e.meta.title&&!1!==e.meta.breadcrumb))},u=e=>{const{redirect:t,path:l}=e;t?n.push(t).catch((e=>{console.warn(e)})):n.push((e=>{const{params:t}=a;return oe(e)(t)})(l)).catch((e=>{console.warn(e)}))};return m((()=>a.path),(e=>{e.startsWith("/redirect/")||o()})),o(),(e,t)=>{const a=f("el-breadcrumb-item"),n=f("el-breadcrumb");return l(),c(n,{class:"app-breadcrumb"},{default:s((()=>[(l(!0),r(v,null,g(i.value,((e,t)=>(l(),c(a,{key:e.path},{default:s((()=>["noRedirect"===e.redirect||t===i.value.length-1?(l(),r("span",ce,w(e.meta.title),1)):(l(),r("a",{key:1,onClick:b((t=>u(e)),["prevent"])},w(e.meta.title),9,ue))])),_:2},1024)))),128))])),_:1})}}}),[["__scopeId","data-v-75a98b93"]]),fe=p(a({__name:"index",props:{isActive:{type:Boolean,default:!1}},emits:["toggle-click"],setup(e,{emit:t}){const a=e,n=()=>{t("toggle-click")};return(e,t)=>{const o=f("el-icon");return l(),r("div",{onClick:n},[i(o,{size:20,class:"icon"},{default:s((()=>[a.isActive?(l(),c(u(y),{key:0})):(l(),c(u(C),{key:1}))])),_:1})])}}}),[["__scopeId","data-v-b698c316"]]),he=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],pe=(()=>{if("undefined"==typeof document)return!1;const e=he[0],t={};for(const a of he){if((null==a?void 0:a[1])in document){for(const[n,l]of a.entries())t[e[n]]=l;return t}}return!1})(),me={change:pe.fullscreenchange,error:pe.fullscreenerror};let ge={request:(e=document.documentElement,t)=>new Promise(((a,n)=>{const l=()=>{ge.off("change",l),a()};ge.on("change",l);const r=e[pe.requestFullscreen](t);r instanceof Promise&&r.then(l).catch(n)})),exit:()=>new Promise(((e,t)=>{if(!ge.isFullscreen)return void e();const a=()=>{ge.off("change",a),e()};ge.on("change",a);const n=document[pe.exitFullscreen]();n instanceof Promise&&n.then(a).catch(t)})),toggle:(e,t)=>ge.isFullscreen?ge.exit():ge.request(e,t),onchange(e){ge.on("change",e)},onerror(e){ge.on("error",e)},on(e,t){const a=me[e];a&&document.addEventListener(a,t,!1)},off(e,t){const a=me[e];a&&document.removeEventListener(a,t,!1)},raw:pe};Object.defineProperties(ge,{isFullscreen:{get:()=>Boolean(document[pe.fullscreenElement])},element:{enumerable:!0,get:()=>{var e;return null!=(e=document[pe.fullscreenElement])?e:void 0}},isEnabled:{enumerable:!0,get:()=>Boolean(document[pe.fullscreenEnabled])}}),pe||(ge={isEnabled:!1});const ve=ge,Ae=p(a({__name:"index",setup(e){const a=t("全屏"),n=t(!1),o=()=>{ve.isEnabled?ve.toggle():k.warning("您的浏览器无法工作")},c=()=>{n.value=ve.isFullscreen,a.value=ve.isFullscreen?"退出全屏":"全屏"};return ve.on("change",c),x((()=>{ve.isEnabled&&ve.off("change",c)})),(e,t)=>{const c=f("svg-icon"),u=f("el-tooltip");return l(),r("div",{onClick:o},[i(u,{effect:"dark",content:a.value,placement:"bottom"},{default:s((()=>[i(c,{name:n.value?"fullscreen-exit":"fullscreen"},null,8,["name"])])),_:1},8,["content"])])}}}),[["__scopeId","data-v-ecf0ac31"]]),we=e=>(F("data-v-9fa1296c"),e=e(),_(),e),be={class:"navigation-bar"},ye={class:"right-menu"},Ce={target:"_blank",href:"https://juejin.cn/post/7089377403717287972"},xe=D("V3-Admin-Vite 中文文档"),ke={target:"_blank",href:"https://github.com/un-pany/v3-admin-vite"},Ee=D("V3-Admin-Vite GitHub"),Se={target:"_blank",href:"https://gitee.com/un-pany/v3-admin-vite"},Ve=D("V3-Admin-Vite Gitee"),Te={target:"_blank",href:"https://juejin.cn/post/6963876125428678693"},Be=D("V3-Admin 中文文档"),De={target:"_blank",href:"https://github.com/un-pany/v3-admin/blob/master/README.en.md"},Fe=D("V3-Admin English Docs"),_e={target:"_blank",href:"https://github.com/un-pany/v3-admin"},Le=D("V3-Admin GitHub"),Ie={target:"_blank",href:"https://gitee.com/un-pany/v3-admin"},Me=D("V3-Admin Gitee"),Re=we((()=>V("span",{style:{display:"block"}},"退出登录",-1))),Oe=p(a({__name:"index",setup(e){const t=A(),a=E(),o=le(),d=S(),h=n((()=>a.sidebar)),p=n((()=>o.showThemeSwitch)),m=n((()=>o.showScreenfull)),g=()=>{a.toggleSidebar(!1)},v=()=>{d.logout(),t.push("/login")};return(e,t)=>{const a=f("el-avatar"),n=f("el-dropdown-item"),o=f("el-dropdown-menu"),d=f("el-dropdown");return l(),r("div",be,[i(fe,{"is-active":u(h).opened,class:"hamburger",onToggleClick:g},null,8,["is-active"]),i(de,{class:"breadcrumb"}),V("div",ye,[u(m)?(l(),c(Ae,{key:0,class:"right-menu-item"})):T("",!0),u(p)?(l(),c(W,{key:1,class:"right-menu-item"})):T("",!0),i(d,{class:"right-menu-item"},{dropdown:s((()=>[i(o,null,{default:s((()=>[V("a",Ce,[i(n,null,{default:s((()=>[xe])),_:1})]),V("a",ke,[i(n,null,{default:s((()=>[Ee])),_:1})]),V("a",Se,[i(n,null,{default:s((()=>[Ve])),_:1})]),V("a",Te,[i(n,{divided:""},{default:s((()=>[Be])),_:1})]),V("a",De,[i(n,null,{default:s((()=>[Fe])),_:1})]),V("a",_e,[i(n,null,{default:s((()=>[Le])),_:1})]),V("a",Ie,[i(n,null,{default:s((()=>[Me])),_:1})]),i(n,{divided:"",onClick:v},{default:s((()=>[Re])),_:1})])),_:1})])),default:s((()=>[i(a,{icon:u(B),size:34},null,8,["icon"])])),_:1})])])}}}),[["__scopeId","data-v-9fa1296c"]]),Ne=e=>(F("data-v-eb8fd065"),e=e(),_(),e),Pe={class:"drawer-container"},Ye=Ne((()=>V("h3",{class:"drawer-title"},"系统布局配置",-1))),je={class:"drawer-item"},Qe=Ne((()=>V("span",null,"显示标签栏",-1))),ze={class:"drawer-item"},Ue=Ne((()=>V("span",null,"显示侧边栏 Logo",-1))),qe={class:"drawer-item"},He=Ne((()=>V("span",null,"固定 Header",-1))),Je={class:"drawer-item"},Xe=Ne((()=>V("span",null,"显示切换主题按钮",-1))),Ge={class:"drawer-item"},Ke=Ne((()=>V("span",null,"显示全屏按钮",-1))),We=p(a({__name:"index",setup(e){const t=le();return(e,a)=>{const n=f("el-switch");return l(),r("div",Pe,[V("div",null,[Ye,V("div",je,[Qe,i(n,{modelValue:u(t).showTagsView,"onUpdate:modelValue":a[0]||(a[0]=e=>u(t).showTagsView=e),class:"drawer-switch"},null,8,["modelValue"])]),V("div",ze,[Ue,i(n,{modelValue:u(t).showSidebarLogo,"onUpdate:modelValue":a[1]||(a[1]=e=>u(t).showSidebarLogo=e),class:"drawer-switch"},null,8,["modelValue"])]),V("div",qe,[He,i(n,{modelValue:u(t).fixedHeader,"onUpdate:modelValue":a[2]||(a[2]=e=>u(t).fixedHeader=e),class:"drawer-switch"},null,8,["modelValue"])]),V("div",Je,[Xe,i(n,{modelValue:u(t).showThemeSwitch,"onUpdate:modelValue":a[3]||(a[3]=e=>u(t).showThemeSwitch=e),class:"drawer-switch"},null,8,["modelValue"])]),V("div",Ge,[Ke,i(n,{modelValue:u(t).showScreenfull,"onUpdate:modelValue":a[4]||(a[4]=e=>u(t).showScreenfull=e),class:"drawer-switch"},null,8,["modelValue"])])])])}}}),[["__scopeId","data-v-eb8fd065"]]),Ze=e=>/^(https?:|mailto:|tel:)/.test(e),$e=["href"],et=a({__name:"SidebarItemLink",props:{to:{type:String,required:!0}},setup(e){const t=e;return(e,a)=>{const n=f("router-link");return u(Ze)(t.to)?(l(),r("a",{key:0,href:t.to,target:"_blank",rel:"noopener"},[L(e.$slots,"default")],8,$e)):(l(),c(n,{key:1,to:t.to},{default:s((()=>[L(e.$slots,"default")])),_:3},8,["to"]))}}});function tt(e){if("string"!=typeof e)throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}function at(e,t){for(var a,n="",l=0,r=-1,i=0,s=0;s<=e.length;++s){if(s<e.length)a=e.charCodeAt(s);else{if(47===a)break;a=47}if(47===a){if(r===s-1||1===i);else if(r!==s-1&&2===i){if(n.length<2||2!==l||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2))if(n.length>2){var o=n.lastIndexOf("/");if(o!==n.length-1){-1===o?(n="",l=0):l=(n=n.slice(0,o)).length-1-n.lastIndexOf("/"),r=s,i=0;continue}}else if(2===n.length||1===n.length){n="",l=0,r=s,i=0;continue}t&&(n.length>0?n+="/..":n="..",l=2)}else n.length>0?n+="/"+e.slice(r+1,s):n=e.slice(r+1,s),l=s-r-1;r=s,i=0}else 46===a&&-1!==i?++i:i=-1}return n}var nt={resolve:function(){for(var e,t="",a=!1,n=arguments.length-1;n>=-1&&!a;n--){var l;n>=0?l=arguments[n]:(void 0===e&&(e=process.cwd()),l=e),tt(l),0!==l.length&&(t=l+"/"+t,a=47===l.charCodeAt(0))}return t=at(t,!a),a?t.length>0?"/"+t:"/":t.length>0?t:"."},normalize:function(e){if(tt(e),0===e.length)return".";var t=47===e.charCodeAt(0),a=47===e.charCodeAt(e.length-1);return 0!==(e=at(e,!t)).length||t||(e="."),e.length>0&&a&&(e+="/"),t?"/"+e:e},isAbsolute:function(e){return tt(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var e,t=0;t<arguments.length;++t){var a=arguments[t];tt(a),a.length>0&&(void 0===e?e=a:e+="/"+a)}return void 0===e?".":nt.normalize(e)},relative:function(e,t){if(tt(e),tt(t),e===t)return"";if((e=nt.resolve(e))===(t=nt.resolve(t)))return"";for(var a=1;a<e.length&&47===e.charCodeAt(a);++a);for(var n=e.length,l=n-a,r=1;r<t.length&&47===t.charCodeAt(r);++r);for(var i=t.length-r,s=l<i?l:i,o=-1,c=0;c<=s;++c){if(c===s){if(i>s){if(47===t.charCodeAt(r+c))return t.slice(r+c+1);if(0===c)return t.slice(r+c)}else l>s&&(47===e.charCodeAt(a+c)?o=c:0===c&&(o=0));break}var u=e.charCodeAt(a+c);if(u!==t.charCodeAt(r+c))break;47===u&&(o=c)}var d="";for(c=a+o+1;c<=n;++c)c!==n&&47!==e.charCodeAt(c)||(0===d.length?d+="..":d+="/..");return d.length>0?d+t.slice(r+o):(r+=o,47===t.charCodeAt(r)&&++r,t.slice(r))},_makeLong:function(e){return e},dirname:function(e){if(tt(e),0===e.length)return".";for(var t=e.charCodeAt(0),a=47===t,n=-1,l=!0,r=e.length-1;r>=1;--r)if(47===(t=e.charCodeAt(r))){if(!l){n=r;break}}else l=!1;return-1===n?a?"/":".":a&&1===n?"//":e.slice(0,n)},basename:function(e,t){if(void 0!==t&&"string"!=typeof t)throw new TypeError('"ext" argument must be a string');tt(e);var a,n=0,l=-1,r=!0;if(void 0!==t&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var i=t.length-1,s=-1;for(a=e.length-1;a>=0;--a){var o=e.charCodeAt(a);if(47===o){if(!r){n=a+1;break}}else-1===s&&(r=!1,s=a+1),i>=0&&(o===t.charCodeAt(i)?-1==--i&&(l=a):(i=-1,l=s))}return n===l?l=s:-1===l&&(l=e.length),e.slice(n,l)}for(a=e.length-1;a>=0;--a)if(47===e.charCodeAt(a)){if(!r){n=a+1;break}}else-1===l&&(r=!1,l=a+1);return-1===l?"":e.slice(n,l)},extname:function(e){tt(e);for(var t=-1,a=0,n=-1,l=!0,r=0,i=e.length-1;i>=0;--i){var s=e.charCodeAt(i);if(47!==s)-1===n&&(l=!1,n=i+1),46===s?-1===t?t=i:1!==r&&(r=1):-1!==t&&(r=-1);else if(!l){a=i+1;break}}return-1===t||-1===n||0===r||1===r&&t===n-1&&t===a+1?"":e.slice(t,n)},format:function(e){if(null===e||"object"!=typeof e)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return function(e,t){var a=t.dir||t.root,n=t.base||(t.name||"")+(t.ext||"");return a?a===t.root?a+n:a+e+n:n}("/",e)},parse:function(e){tt(e);var t={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return t;var a,n=e.charCodeAt(0),l=47===n;l?(t.root="/",a=1):a=0;for(var r=-1,i=0,s=-1,o=!0,c=e.length-1,u=0;c>=a;--c)if(47!==(n=e.charCodeAt(c)))-1===s&&(o=!1,s=c+1),46===n?-1===r?r=c:1!==u&&(u=1):-1!==r&&(u=-1);else if(!o){i=c+1;break}return-1===r||-1===s||0===u||1===u&&r===s-1&&r===i+1?-1!==s&&(t.base=t.name=0===i&&l?e.slice(1,s):e.slice(i,s)):(0===i&&l?(t.name=e.slice(1,r),t.base=e.slice(1,s)):(t.name=e.slice(i,r),t.base=e.slice(i,s)),t.ext=e.slice(r,s)),i>0?t.dir=e.slice(0,i-1):l&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};nt.posix=nt;var lt=nt;const rt={key:1},it=p(a({__name:"SidebarItem",props:{item:{type:Object,required:!0},isCollapse:{type:Boolean,default:!1},isFirstLevel:{type:Boolean,default:!0},basePath:{type:String,default:""}},setup(e){const t=e,a=n((()=>t.item.meta&&t.item.meta.alwaysShow)),o=n((()=>{if(t.item.children){return t.item.children.filter((e=>!(e.meta&&e.meta.hidden))).length}return 0})),d=n((()=>{if(o.value>1)return null;if(t.item.children)for(const e of t.item.children)if(!e.meta||!e.meta.hidden)return e;return{...t.item,path:""}})),h=e=>Ze(e)?e:Ze(t.basePath)?t.basePath:lt.resolve(t.basePath,e);return(e,n)=>{var o;const p=f("svg-icon"),m=f("el-menu-item"),A=f("sidebar-item",!0),b=f("el-sub-menu");return(null==(o=t.item.meta)?void 0:o.hidden)?T("",!0):(l(),r("div",{key:0,class:M({"simple-mode":t.isCollapse,"first-level":t.isFirstLevel})},[u(a)||!u(d)||u(d).children?(l(),c(b,{key:1,index:h(t.item.path),"popper-append-to-body":""},{title:s((()=>[t.item.meta&&t.item.meta.icon?(l(),c(p,{key:0,name:t.item.meta.icon},null,8,["name"])):T("",!0),t.item.meta&&t.item.meta.title?(l(),r("span",rt,w(t.item.meta.title),1)):T("",!0)])),default:s((()=>[t.item.children?(l(!0),r(v,{key:0},g(t.item.children,(e=>(l(),c(A,{key:e.path,item:e,"is-collapse":t.isCollapse,"is-first-level":!1,"base-path":h(e.path)},null,8,["item","is-collapse","base-path"])))),128)):T("",!0)])),_:1},8,["index"])):(l(),r(v,{key:0},[u(d).meta?(l(),c(et,{key:0,to:h(u(d).path)},{default:s((()=>[i(m,{index:h(u(d).path)},I({default:s((()=>[u(d).meta.icon?(l(),c(p,{key:0,name:u(d).meta.icon},null,8,["name"])):T("",!0)])),_:2},[u(d).meta.title?{name:"title",fn:s((()=>[D(w(u(d).meta.title),1)]))}:void 0]),1032,["index"])])),_:1},8,["to"])):T("",!0)],64))],2))}}}),[["__scopeId","data-v-254cdecd"]]),st=e=>(F("data-v-7415e5ef"),e=e(),_(),e),ot=st((()=>V("img",{src:"data:image/png;base64,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",class:"sidebar-logo"},null,-1))),ct=st((()=>V("img",{src:"/v3-admin-vite/static/logo-text-1.0f451132.png",class:"sidebar-logo-text"},null,-1))),ut=p(a({__name:"SidebarLogo",props:{collapse:{type:Boolean,default:!0}},setup(e){const t=e;return(e,a)=>{const n=f("router-link");return l(),r("div",{class:M(["sidebar-logo-container",{collapse:t.collapse}])},[i(o,{name:"sidebar-logo-fade"},{default:s((()=>[t.collapse?(l(),c(n,{key:"collapse",to:"/"},{default:s((()=>[ot])),_:1})):(l(),c(n,{key:"expand",to:"/"},{default:s((()=>[ct])),_:1}))])),_:1})],2)}}}),[["__scopeId","data-v-7415e5ef"]]),dt=e=>{let t="";try{t=getComputedStyle(document.documentElement).getPropertyValue(e)}catch(a){console.error(a)}return t},ft=p(a({__name:"index",setup(e){const t=dt("--v3-sidebar-menu-bg-color"),a=dt("--v3-sidebar-menu-text-color"),o=dt("--v3-sidebar-menu-active-text-color"),d=h(),p=E(),m=R(),A=le(),{showSidebarLogo:w}=O(A),b=n((()=>{const{meta:e,path:t}=d;return(null==e?void 0:e.activeMenu)?e.activeMenu:t})),y=n((()=>!p.sidebar.opened));return(e,n)=>{const d=f("el-menu"),h=f("el-scrollbar");return l(),r("div",{class:M({"has-logo":u(w)})},[u(w)?(l(),c(ut,{key:0,collapse:u(y)},null,8,["collapse"])):T("",!0),i(h,{"wrap-class":"scrollbar-wrapper"},{default:s((()=>[i(d,{"default-active":u(b),collapse:u(y),"background-color":u(t),"text-color":u(a),"active-text-color":u(o),"unique-opened":!0,"collapse-transition":!1,mode:"vertical"},{default:s((()=>[(l(!0),r(v,null,g(u(m).routes,(e=>(l(),c(it,{key:e.path,item:e,"base-path":e.path,"is-collapse":u(y)},null,8,["item","base-path","is-collapse"])))),128))])),_:1},8,["default-active","collapse","background-color","text-color","active-text-color"])])),_:1})],2)}}}),[["__scopeId","data-v-30b2dee2"]]),ht=e("tags-view",(()=>{const e=t([]);return{visitedViews:e,addVisitedView:t=>{var a;e.value.some((e=>e.path===t.path))||e.value.push(Object.assign({},t,{title:(null==(a=t.meta)?void 0:a.title)||"no-name"}))},delVisitedView:t=>{for(const[a,n]of e.value.entries())if(n.path===t.path){e.value.splice(a,1);break}},delOthersVisitedViews:t=>{e.value=e.value.filter((e=>{var a;return(null==(a=e.meta)?void 0:a.affix)||e.path===t.path}))},delAllVisitedViews:()=>{const t=e.value.filter((e=>{var t;return null==(t=e.meta)?void 0:t.affix}));e.value=t},updateVisitedView:t=>{for(let a of e.value)if(a.path===t.path){a=Object.assign(a,t);break}}}}));const pt=p({},[["render",function(e,t){const a=f("el-scrollbar");return l(),c(a,{vertical:!1,class:"scroll-container"},{default:s((()=>[L(e.$slots,"default",{},void 0,!0)])),_:3})}],["__scopeId","data-v-1320289d"]]),mt={class:"tags-view-container"},gt=p(a({__name:"index",setup(e){const t=U(),a=A(),o=h(),d=ht(),p=R(),y=(e,t)=>{const n=e.slice(-1)[0];void 0!==n&&void 0!==n.fullPath?a.push(n.fullPath).catch((e=>{console.warn(e)})):"Dashboard"===t.name?a.push({path:"/redirect"+t.fullPath}).catch((e=>{console.warn(e)})):a.push("/").catch((e=>{console.warn(e)}))},C=N({visible:!1,top:0,left:0,selectedTag:{},affixTags:[],isActive:e=>e.path===o.path,isAffix:e=>e.meta&&e.meta.affix,refreshSelectedTag:e=>{const{fullPath:t}=e;P((()=>{a.replace({path:"/redirect"+t}).catch((e=>{console.warn(e)}))}))},closeSelectedTag:e=>{d.delVisitedView(e),C.isActive(e)&&y(d.visitedViews,e)},closeOthersTags:()=>{C.selectedTag.fullPath!==o.path&&void 0!==C.selectedTag.fullPath&&a.push(C.selectedTag.fullPath).catch((e=>{console.warn(e)})),d.delOthersVisitedViews(C.selectedTag)},closeAllTags:e=>{d.delAllVisitedViews(),C.affixTags.some((e=>e.path===o.path))||y(d.visitedViews,e)},openMenu:(e,a)=>{const n=t.proxy.$el.getBoundingClientRect().left,l=t.proxy.$el.offsetWidth-105,r=a.clientX-n+15;C.left=r>l?l:r,C.top=a.clientY,C.visible=!0,C.selectedTag=e},closeMenu:()=>{C.visible=!1}}),x=n((()=>d.visitedViews)),k=n((()=>p.routes)),E=(e,t="/")=>{let a=[];return e.forEach((e=>{if(e.meta&&e.meta.affix){const n=lt.resolve(t,e.path);a.push({fullPath:n,path:n,name:e.name,meta:{...e.meta}})}if(e.children){const t=E(e.children,e.path);t.length>=1&&(a=a.concat(t))}})),a},S=()=>(o.name&&d.addVisitedView(o),!1);return m((()=>o.name),(()=>{S(),(()=>{const e=null==t?void 0:t.refs.tag;if(null!=e&&Array.isArray(e))for(const t of e)t.to.path===o.path&&t.to.fullPath!==o.fullPath&&d.updateVisitedView(o)})()})),m((()=>C.visible),(e=>{e?document.body.addEventListener("click",C.closeMenu):document.body.removeEventListener("click",C.closeMenu)})),Y((()=>{(()=>{C.affixTags=E(k.value);for(const e of C.affixTags)e.name&&d.addVisitedView(e)})(),S()})),(e,t)=>{const a=f("el-icon"),n=f("router-link");return l(),r("div",mt,[i(pt,{class:"tags-view-wrapper"},{default:s((()=>[(l(!0),r(v,null,g(u(x),(e=>(l(),c(n,{ref_for:!0,ref:"tag",key:e.path,class:M([C.isActive(e)?"active":"","tags-view-item"]),to:{path:e.path,query:e.query},onMouseup:b((t=>C.isAffix(e)?"":C.closeSelectedTag(e)),["middle"]),onContextmenu:b((t=>C.openMenu(e,t)),["prevent"])},{default:s((()=>{var t;return[D(w(null==(t=e.meta)?void 0:t.title)+" ",1),C.isAffix(e)?T("",!0):(l(),c(a,{key:0,size:12,onClick:b((t=>C.closeSelectedTag(e)),["prevent","stop"])},{default:s((()=>[i(u(q))])),_:2},1032,["onClick"]))]})),_:2},1032,["class","to","onMouseup","onContextmenu"])))),128))])),_:1}),j(V("ul",{style:z({left:C.left+"px",top:C.top+"px"}),class:"contextmenu"},[V("li",{onClick:t[0]||(t[0]=e=>C.refreshSelectedTag(C.selectedTag))},"刷新"),C.isAffix(C.selectedTag)?T("",!0):(l(),r("li",{key:0,onClick:t[1]||(t[1]=e=>C.closeSelectedTag(C.selectedTag))},"关闭")),V("li",{onClick:t[2]||(t[2]=(...e)=>C.closeOthersTags&&C.closeOthersTags(...e))},"关闭其它"),V("li",{onClick:t[3]||(t[3]=e=>C.closeAllTags(C.selectedTag))},"关闭所有")],4),[[Q,C.visible]])])}}}),[["__scopeId","data-v-d6dd5844"]]),vt=p(a({__name:"index",props:{buttonTop:{type:Number,default:250}},setup(e){const a=e;J((e=>({"22b2cbc4":n})));const n=a.buttonTop+"px",o=t(!1);return(e,t)=>{const a=f("el-icon"),n=f("el-drawer");return l(),r(v,null,[V("div",{class:"handle-button",onClick:t[0]||(t[0]=e=>o.value=!0)},[i(a,{size:24},{default:s((()=>[i(u(H))])),_:1})]),i(n,{modelValue:o.value,"onUpdate:modelValue":t[1]||(t[1]=e=>o.value=e),size:"300px","with-header":!1},{default:s((()=>[L(e.$slots,"default",{},void 0,!0)])),_:3},8,["modelValue"])],64)}}}),[["__scopeId","data-v-73ce001a"]]),At=p(a({__name:"index",setup(e){const t=E(),a=le();(()=>{const e=h(),t=E(),a=()=>document.body.getBoundingClientRect().width-1<992,n=()=>{if(!document.hidden){const e=a();t.toggleDevice(e?G.Mobile:G.Desktop),e&&t.closeSidebar(!0)}};m((()=>e.name),(()=>{t.device===G.Mobile&&t.sidebar.opened&&t.closeSidebar(!1)})),Y((()=>{window.addEventListener("resize",n)})),X((()=>{a()&&(t.toggleDevice(G.Mobile),t.closeSidebar(!0))})),K((()=>{window.removeEventListener("resize",n)}))})();const o=n((()=>({hideSidebar:!t.sidebar.opened,openSidebar:t.sidebar.opened,withoutAnimation:t.sidebar.withoutAnimation,mobile:t.device===G.Mobile}))),d=n((()=>a.showSettings)),f=n((()=>a.showTagsView)),p=n((()=>a.fixedHeader)),g=()=>{t.closeSidebar(!1)};return(e,t)=>(l(),r("div",{class:M([u(o),"app-wrapper"])},[u(o).mobile&&u(o).openSidebar?(l(),r("div",{key:0,class:"drawer-bg",onClick:g})):T("",!0),i(u(ft),{class:"sidebar-container"}),V("div",{class:M([{hasTagsView:u(f)},"main-container"])},[V("div",{class:M({"fixed-header":u(p)})},[i(u(Oe)),u(f)?(l(),c(u(gt),{key:0})):T("",!0)],2),i(u(ie)),u(d)?(l(),c(u(vt),{key:0},{default:s((()=>[i(u(We))])),_:1})):T("",!0)],2)],2))}}),[["__scopeId","data-v-566562ee"]]);export{At as default};
