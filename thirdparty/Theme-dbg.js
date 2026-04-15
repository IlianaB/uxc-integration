sap.ui.define(['exports'], (function (exports) { 'use strict';

	const e$7=new Map,s$b=(t,r)=>{e$7.set(t,r);},n$8=t=>e$7.get(t);

	var c$8={},e$6=c$8.hasOwnProperty,a$9=c$8.toString,o$a=e$6.toString,l$a=o$a.call(Object),i$d=function(r){var t,n;return !r||a$9.call(r)!=="[object Object]"?false:(t=Object.getPrototypeOf(r),t?(n=e$6.call(t,"constructor")&&t.constructor,typeof n=="function"&&o$a.call(n)===l$a):true)};

	var c$7=Object.create(null),u$9=function(p,m,A,d){var n,t,e,a,o,i,r=arguments[2]||{},f=3,l=arguments.length,s=arguments[0]||false,y=arguments[1]?void 0:c$7;for(typeof r!="object"&&typeof r!="function"&&(r={});f<l;f++)if((o=arguments[f])!=null)for(a in o)n=r[a],e=o[a],!(a==="__proto__"||r===e)&&(s&&e&&(i$d(e)||(t=Array.isArray(e)))?(t?(t=false,i=n&&Array.isArray(n)?n:[]):i=n&&i$d(n)?n:{},r[a]=u$9(s,arguments[1],i,e)):e!==y&&(r[a]=e));return r};

	const e$5=function(n,t){return u$9(true,false,...arguments)};

	const _={themes:{default:"sap_horizon",all:["sap_fiori_3","sap_fiori_3_dark","sap_fiori_3_hcb","sap_fiori_3_hcw","sap_horizon","sap_horizon_dark","sap_horizon_hcb","sap_horizon_hcw"]},languages:{default:"en"},locales:{default:"en",all:["ar","ar_EG","ar_SA","bg","ca","cnr","cs","da","de","de_AT","de_CH","el","el_CY","en","en_AU","en_GB","en_HK","en_IE","en_IN","en_NZ","en_PG","en_SG","en_ZA","es","es_AR","es_BO","es_CL","es_CO","es_MX","es_PE","es_UY","es_VE","et","fa","fi","fr","fr_BE","fr_CA","fr_CH","fr_LU","he","hi","hr","hu","id","it","it_CH","ja","kk","ko","lt","lv","ms","mk","nb","nl","nl_BE","pl","pt","pt_PT","ro","ru","ru_UA","sk","sl","sr","sr_Latn","sv","th","tr","uk","vi","zh_CN","zh_HK","zh_SG","zh_TW"]}},e$4=_.themes.default,s$a=_.themes.all,a$8=_.languages.default,r$8=_.locales.default,l$9=_.locales.all;

	const o$9=typeof document>"u",n$7={search(){return o$9?"":window.location.search}},i$c=()=>o$9?"":window.location.hostname,c$6=()=>o$9?"":window.location.port,a$7=()=>o$9?"":window.location.protocol,s$9=()=>o$9?"":window.location.href,u$8=()=>n$7.search();

	const o$8=e=>{const t=document.querySelector(`META[name="${e}"]`);return t&&t.getAttribute("content")},s$8=e=>{const t=o$8("sap-allowedThemeOrigins");return t&&t.split(",").some(n=>n==="*"||e===n.trim())},a$6=(e,t)=>{const n=new URL(e).pathname;return new URL(n,t).toString()},g$6=e=>{let t;try{if(e.startsWith(".")||e.startsWith("/"))t=new URL(e,s$9()).toString();else {const n=new URL(e),r=n.origin;r&&s$8(r)?t=n.toString():t=a$6(n.toString(),s$9());}return t.endsWith("/")||(t=`${t}/`),`${t}UI5/`}catch{}};

	var u$7=(l=>(l.Full="full",l.Basic="basic",l.Minimal="minimal",l.None="none",l))(u$7||{});

	let i$b = class i{constructor(){this._eventRegistry=new Map;}attachEvent(t,r){const n=this._eventRegistry,e=n.get(t);if(!Array.isArray(e)){n.set(t,[r]);return}e.includes(r)||e.push(r);}detachEvent(t,r){const n=this._eventRegistry,e=n.get(t);if(!e)return;const s=e.indexOf(r);s!==-1&&e.splice(s,1),e.length===0&&n.delete(t);}fireEvent(t,r){const e=this._eventRegistry.get(t);return e?e.map(s=>s.call(this,r)):[]}fireEventAsync(t,r){return Promise.all(this.fireEvent(t,r))}isHandlerAttached(t,r){const e=this._eventRegistry.get(t);return e?e.includes(r):false}hasListeners(t){return !!this._eventRegistry.get(t)}};

	const e$3=new i$b,t$a="configurationReset",i$a=n=>{e$3.attachEvent(t$a,n);};

	let p$4=false,t$9={animationMode:u$7.Full,theme:e$4,themeRoot:void 0,rtl:void 0,language:void 0,timezone:void 0,calendarType:void 0,secondaryCalendarType:void 0,noConflict:false,formatSettings:{},fetchDefaultLanguage:false,defaultFontLoading:true,enableDefaultTooltips:true};const C$1=()=>(o$7(),t$9.animationMode),T$2=()=>(o$7(),t$9.theme),S$2=()=>(o$7(),t$9.themeRoot),L=()=>(o$7(),t$9.language),F=()=>(o$7(),t$9.fetchDefaultLanguage),U$2=()=>(o$7(),t$9.noConflict),b$3=()=>(o$7(),t$9.defaultFontLoading),D=()=>(o$7(),t$9.enableDefaultTooltips),I$3=()=>(o$7(),t$9.calendarType),M=()=>(o$7(),t$9.formatSettings),i$9=new Map;i$9.set("true",true),i$9.set("false",false);const z=()=>{const n=document.querySelector("[data-ui5-config]")||document.querySelector("[data-id='sap-ui-config']");let e;if(n){try{e=JSON.parse(n.innerHTML);}catch{console.warn("Incorrect data-sap-ui-config format. Please use JSON");}e&&(t$9=e$5(t$9,e));}},E$1=()=>{const n=new URLSearchParams(u$8());n.forEach((e,a)=>{const r=a.split("sap-").length;r===0||r===a.split("sap-ui-").length||u$6(a,e,"sap");}),n.forEach((e,a)=>{a.startsWith("sap-ui")&&u$6(a,e,"sap-ui");});},P$5=n=>{const e=n.split("@")[1];return g$6(e)},w$4=(n,e)=>n==="theme"&&e.includes("@")?e.split("@")[0]:e,u$6=(n,e,a)=>{const r=e.toLowerCase(),s=n.split(`${a}-`)[1];i$9.has(e)&&(e=i$9.get(r)),s==="theme"?(t$9.theme=w$4(s,e),e&&e.includes("@")&&(t$9.themeRoot=P$5(e))):t$9[s]=e;},j=()=>{const n=n$8("OpenUI5Support");if(!n||!n.isOpenUI5Detected())return;const e=n.getConfigurationSettingsObject();t$9=e$5(t$9,e);},o$7=()=>{typeof document>"u"||p$4||(g$5(),p$4=true);},g$5=n=>{z(),E$1(),j();};

	let l$8 = class l{constructor(){this.list=[],this.lookup=new Set;}add(t){this.lookup.has(t)||(this.list.push(t),this.lookup.add(t));}remove(t){this.lookup.has(t)&&(this.list=this.list.filter(e=>e!==t),this.lookup.delete(t));}shift(){const t=this.list.shift();if(t)return this.lookup.delete(t),t}isEmpty(){return this.list.length===0}isAdded(t){return this.lookup.has(t)}process(t){let e;const s=new Map;for(e=this.shift();e;){const i=s.get(e)||0;if(i>10)throw new Error("Web component processed too many times this task, max allowed is: 10");t(e),s.set(e,i+1),e=this.shift();}}};

	const o$6=(t,n=document.body,r)=>{let e=document.querySelector(t);return e||(e=r?r():document.createElement(t),n.insertBefore(e,n.firstChild))};

	const u$5=()=>{const t=document.createElement("meta");return t.setAttribute("name","ui5-shared-resources"),t.setAttribute("content",""),t},l$7=()=>typeof document>"u"?null:o$6('meta[name="ui5-shared-resources"]',document.head,u$5),m$7=(t,o)=>{const r=t.split(".");let e=l$7();if(!e)return o;for(let n=0;n<r.length;n++){const s=r[n],c=n===r.length-1;Object.prototype.hasOwnProperty.call(e,s)||(e[s]=c?o:{}),e=e[s];}return e};

	const e$2={version:"2.10.0",major:2,minor:10,patch:0,suffix:"",isNext:false,buildTime:1746606737};

	let s$7,t$8={include:[/^ui5-/],exclude:[]};const o$5=new Map,l$6=e=>{if(!e.match(/^[a-zA-Z0-9_-]+$/))throw new Error("Only alphanumeric characters and dashes allowed for the scoping suffix");R$1()&&console.warn("Setting the scoping suffix must be done before importing any components. For proper usage, read the scoping section: https://github.com/SAP/ui5-webcomponents/blob/main/docs/2-advanced/06-scoping.md."),s$7=e;},c$5=()=>s$7,p$3=e=>{if(!e||!e.include)throw new Error('"rules" must be an object with at least an "include" property');if(!Array.isArray(e.include)||e.include.some(n=>!(n instanceof RegExp)))throw new Error('"rules.include" must be an array of regular expressions');if(e.exclude&&(!Array.isArray(e.exclude)||e.exclude.some(n=>!(n instanceof RegExp))))throw new Error('"rules.exclude" must be an array of regular expressions');e.exclude=e.exclude||[],t$8=e,o$5.clear();},m$6=()=>t$8,i$8=e=>{if(!o$5.has(e)){const n=t$8.include.some(r=>e.match(r))&&!t$8.exclude.some(r=>e.match(r));o$5.set(e,n);}return o$5.get(e)},g$4=e=>{if(i$8(e))return c$5()},d$8=e=>{const n=`v${e$2.version.replaceAll(".","-")}`,r=/(--_?ui5)([^,:)\s]+)/g;return e.replaceAll(r,`$1-${n}$2`)};

	let i$7,s$6="";const u$4=new Map,r$7=m$7("Runtimes",[]),x=()=>{if(i$7===void 0){i$7=r$7.length;const e=e$2;r$7.push({...e,get scopingSuffix(){return c$5()},get registeredTags(){return T$1()},get scopingRules(){return m$6()},alias:s$6,description:`Runtime ${i$7} - ver ${e.version}${""}`});}},I$2=()=>i$7,b$2=(e,m)=>{const o=`${e},${m}`;if(u$4.has(o))return u$4.get(o);const t=r$7[e],n=r$7[m];if(!t||!n)throw new Error("Invalid runtime index supplied");if(t.isNext||n.isNext)return t.buildTime-n.buildTime;const c=t.major-n.major;if(c)return c;const a=t.minor-n.minor;if(a)return a;const f=t.patch-n.patch;if(f)return f;const l=new Intl.Collator(void 0,{numeric:true,sensitivity:"base"}).compare(t.suffix,n.suffix);return u$4.set(o,l),l},$$1=()=>r$7;

	const g$3=m$7("Tags",new Map),d$7=new Set;let s$5=new Map,c$4;const m$5=-1,h$4=e=>{d$7.add(e),g$3.set(e,I$2());},w$3=e=>d$7.has(e),R$1=()=>d$7.size>0,T$1=()=>[...d$7.values()],$=e=>{let n=g$3.get(e);n===void 0&&(n=m$5),s$5.has(n)||s$5.set(n,new Set),s$5.get(n).add(e),c$4||(c$4=setTimeout(()=>{y$2(),s$5=new Map,c$4=void 0;},1e3));},y$2=()=>{const e=$$1(),n=I$2(),l=e[n];let t="Multiple UI5 Web Components instances detected.";e.length>1&&(t=`${t}
Loading order (versions before 1.1.0 not listed): ${e.map(i=>`
${i.description}`).join("")}`),[...s$5.keys()].forEach(i=>{let o,r;i===m$5?(o=1,r={description:"Older unknown runtime"}):(o=b$2(n,i),r=e[i]);let a;o>0?a="an older":o<0?a="a newer":a="the same",t=`${t}

"${l.description}" failed to define ${s$5.get(i).size} tag(s) as they were defined by a runtime of ${a} version "${r.description}": ${[...s$5.get(i)].sort().join(", ")}.`,o>0?t=`${t}
WARNING! If your code uses features of the above web components, unavailable in ${r.description}, it might not work as expected!`:t=`${t}
Since the above web components were defined by the same or newer version runtime, they should be compatible with your code.`;}),t=`${t}

To prevent other runtimes from defining tags that you use, consider using scoping or have third-party libraries use scoping: https://github.com/SAP/ui5-webcomponents/blob/main/docs/2-advanced/06-scoping.md.`,console.warn(t);};

	const t$7=new Set,n$6=e=>{t$7.add(e);},r$6=e=>t$7.has(e);

	const s$4=new Set,d$6=new i$b,n$5=new l$8;let t$6,a$5,m$4,i$6;const l$5=async e=>{n$5.add(e),await P$4();},c$3=e=>{d$6.fireEvent("beforeComponentRender",e),s$4.add(e),e._render();},h$3=e=>{n$5.remove(e),s$4.delete(e);},P$4=async()=>{i$6||(i$6=new Promise(e=>{window.requestAnimationFrame(()=>{n$5.process(c$3),i$6=null,e(),m$4||(m$4=setTimeout(()=>{m$4=void 0,n$5.isEmpty()&&U$1();},200));});})),await i$6;},y$1=()=>t$6||(t$6=new Promise(e=>{a$5=e,window.requestAnimationFrame(()=>{n$5.isEmpty()&&(t$6=void 0,e());});}),t$6),I$1=()=>{const e=T$1().map(r=>customElements.whenDefined(r));return Promise.all(e)},f$2=async()=>{await I$1(),await y$1();},U$1=()=>{n$5.isEmpty()&&a$5&&(a$5(),a$5=void 0,t$6=void 0);},C=async e=>{s$4.forEach(r=>{const o=r.constructor,u=o.getMetadata().getTag(),w=r$6(o),p=o.getMetadata().isLanguageAware(),E=o.getMetadata().isThemeAware();(!e||e.tag===u||e.rtlAware&&w||e.languageAware&&p||e.themeAware&&E)&&l$5(r);}),await f$2();};

	const g$2=typeof document>"u",i$5=(e,t)=>t?`${e}|${t}`:e,l$4=e=>e===void 0?true:b$2(I$2(),parseInt(e))===1,c$2=(e,t,r="",s)=>{const d=I$2(),n=new CSSStyleSheet;n.replaceSync(e),n._ui5StyleId=i$5(t,r),s&&(n._ui5RuntimeIndex=d,n._ui5Theme=s),document.adoptedStyleSheets=[...document.adoptedStyleSheets,n];},y=(e,t,r="",s)=>{const d=I$2(),n=document.adoptedStyleSheets.find(o=>o._ui5StyleId===i$5(t,r));if(n)if(!s)n.replaceSync(e||"");else {const o=n._ui5RuntimeIndex;(n._ui5Theme!==s||l$4(o))&&(n.replaceSync(e||""),n._ui5RuntimeIndex=String(d),n._ui5Theme=s);}},S$1=(e,t="")=>g$2?true:!!document.adoptedStyleSheets.find(r=>r._ui5StyleId===i$5(e,t)),f$1=(e,t="")=>{document.adoptedStyleSheets=document.adoptedStyleSheets.filter(r=>r._ui5StyleId!==i$5(e,t));},R=(e,t,r="",s)=>{S$1(t,r)?y(e,t,r,s):c$2(e,t,r,s);},m$3=(e,t)=>e===void 0?t:t===void 0?e:`${e} ${t}`;

	const t$5=new i$b,r$5="themeRegistered",n$4=e=>{t$5.attachEvent(r$5,e);},s$3=e=>t$5.fireEvent(r$5,e);

	const l$3=new Map,h$2=new Map,u$3=new Map,T=new Set,i$4=new Set,p$2=(e,r,t)=>{h$2.set(`${e}/${r}`,t),T.add(e),i$4.add(r),s$3(r);},m$2=async(e,r,t)=>{const g=`${e}_${r}_${t||""}`,s=l$3.get(g);if(s!==void 0)return s;if(!i$4.has(r)){const $=[...i$4.values()].join(", ");return console.warn(`You have requested a non-registered theme ${r} - falling back to ${e$4}. Registered themes are: ${$}`),a$4(e,e$4)}const[n,d]=await Promise.all([a$4(e,r),t?a$4(e,t,true):void 0]),o=m$3(n,d);return o&&l$3.set(g,o),o},a$4=async(e,r,t=false)=>{const s=(t?u$3:h$2).get(`${e}/${r}`);if(!s){t||console.error(`Theme [${r}] not registered for package [${e}]`);return}let n;try{n=await s(r);}catch(d){console.error(e,d.message);return}return n},w$2=()=>T,P$3=e=>i$4.has(e);

	const r$4=new Set,s$2=()=>{let e=document.querySelector(".sapThemeMetaData-Base-baseLib")||document.querySelector(".sapThemeMetaData-UI5-sap-ui-core");if(e)return getComputedStyle(e).backgroundImage;e=document.createElement("span"),e.style.display="none",e.classList.add("sapThemeMetaData-Base-baseLib"),document.body.appendChild(e);let t=getComputedStyle(e).backgroundImage;return t==="none"&&(e.classList.add("sapThemeMetaData-UI5-sap-ui-core"),t=getComputedStyle(e).backgroundImage),document.body.removeChild(e),t},o$4=e=>{const t=/\(["']?data:text\/plain;utf-8,(.*?)['"]?\)$/i.exec(e);if(t&&t.length>=2){let a=t[1];if(a=a.replace(/\\"/g,'"'),a.charAt(0)!=="{"&&a.charAt(a.length-1)!=="}")try{a=decodeURIComponent(a);}catch{r$4.has("decode")||(console.warn("Malformed theme metadata string, unable to decodeURIComponent"),r$4.add("decode"));return}try{return JSON.parse(a)}catch{r$4.has("parse")||(console.warn("Malformed theme metadata string, unable to parse JSON"),r$4.add("parse"));}}},d$5=e=>{let t,a;try{const n=e.Path.split(".");t=n.length===4?n[2]:getComputedStyle(document.body).getPropertyValue("--sapSapThemeId"),a=e.Extends[0];}catch{r$4.has("object")||(console.warn("Malformed theme metadata Object",e),r$4.add("object"));return}return {themeName:t,baseThemeName:a}},m$1=()=>{const e=s$2();if(!e||e==="none")return;const t=o$4(e);if(t)return d$5(t)};

	const t$4=new i$b,d$4="themeLoaded",o$3=e=>{t$4.attachEvent(d$4,e);},n$3=e=>{t$4.detachEvent(d$4,e);},r$3=e=>t$4.fireEvent(d$4,e);

	const d$3=(r,n)=>{const e=document.createElement("link");return e.type="text/css",e.rel="stylesheet",n&&Object.entries(n).forEach(t=>e.setAttribute(...t)),e.href=r,document.head.appendChild(e),new Promise(t=>{e.addEventListener("load",t),e.addEventListener("error",t);})};

	let t$3;i$a(()=>{t$3=void 0;});const n$2=()=>(t$3===void 0&&(t$3=S$2()),t$3),u$2=e=>`${n$2()}Base/baseLib/${e}/css_variables.css`,i$3=async e=>{const o=document.querySelector(`[sap-ui-webcomponents-theme="${e}"]`);o&&document.head.removeChild(o),await d$3(u$2(e),{"sap-ui-webcomponents-theme":e});};

	const s$1="@ui5/webcomponents-theming",S=()=>w$2().has(s$1),P$2=async e=>{if(!S())return;const t=await m$2(s$1,e);t&&R(t,"data-ui5-theme-properties",s$1,e);},E=()=>{f$1("data-ui5-theme-properties",s$1);},U=async(e,t)=>{const o=[...w$2()].map(async a=>{if(a===s$1)return;const i=await m$2(a,e,t);i&&R(i,`data-ui5-component-properties-${I$2()}`,a);});return Promise.all(o)},w$1=async e=>{const t=m$1();if(t)return t;const r=n$8("OpenUI5Support");if(r&&r.isOpenUI5Detected()){if(r.cssVariablesLoaded())return {themeName:r.getConfigurationSettingsObject()?.theme,baseThemeName:""}}else if(n$2())return await i$3(e),m$1()},I=async e=>{const t=await w$1(e);!t||e!==t.themeName?await P$2(e):E();const r=P$3(e)?e:t&&t.baseThemeName;await U(r||e$4,t&&t.themeName===e?e:void 0),r$3(e);};

	const d$2=()=>new Promise(e=>{document.body?e():document.addEventListener("DOMContentLoaded",()=>{e();});});

	var a$3 = `@font-face{font-family:"72";font-style:normal;font-weight:400;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Regular.woff2?ui5-webcomponents) format("woff2"),local("72");unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:"72full";font-style:normal;font-weight:400;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Regular-full.woff2?ui5-webcomponents) format("woff2"),local('72-full')}@font-face{font-family:"72";font-style:normal;font-weight:700;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold.woff2?ui5-webcomponents) format("woff2"),local('72-Bold');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:"72full";font-style:normal;font-weight:700;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold-full.woff2?ui5-webcomponents) format("woff2")}@font-face{font-family:'72-Bold';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold.woff2?ui5-webcomponents) format("woff2"),local('72-Bold');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72-Boldfull';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold-full.woff2?ui5-webcomponents) format("woff2")}@font-face{font-family:'72-Light';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Light.woff2?ui5-webcomponents) format("woff2"),local('72-Light');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72-Lightfull';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Light-full.woff2?ui5-webcomponents) format("woff2")}@font-face{font-family:'72Mono';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Regular.woff2?ui5-webcomponents) format('woff2'),local('72Mono');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72Monofull';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Regular-full.woff2?ui5-webcomponents) format('woff2')}@font-face{font-family:'72Mono-Bold';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Bold.woff2?ui5-webcomponents) format('woff2'),local('72Mono-Bold');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72Mono-Boldfull';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Bold-full.woff2?ui5-webcomponents) format('woff2')}@font-face{font-family:"72Black";font-style:bold;font-weight:900;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Black.woff2?ui5-webcomponents) format("woff2"),local('72Black');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72Blackfull';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Black-full.woff2?ui5-webcomponents) format('woff2')}@font-face{font-family:"72-SemiboldDuplex";src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-SemiboldDuplex.woff2?ui5-webcomponents) format("woff2"),local('72-SemiboldDuplex');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}`;

	var n$1 = "@font-face{font-family:'72override';unicode-range:U+0102-0103,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EB7,U+1EB8-1EC7,U+1EC8-1ECB,U+1ECC-1EE3,U+1EE4-1EF1,U+1EF4-1EF7;src:local('Arial'),local('Helvetica'),local('sans-serif')}";

	let o$2;i$a(()=>{o$2=void 0;});const a$2=()=>(o$2===void 0&&(o$2=b$3()),o$2);

	const i$2=()=>{const t=n$8("OpenUI5Support");(!t||!t.isOpenUI5Detected())&&p$1(),c$1();},p$1=()=>{const t=document.querySelector("head>style[data-ui5-font-face]");!a$2()||t||S$1("data-ui5-font-face")||c$2(a$3,"data-ui5-font-face");},c$1=()=>{S$1("data-ui5-font-face-override")||c$2(n$1,"data-ui5-font-face-override");};

	var a$1 = ":root{--_ui5_content_density:cozy}.sapUiSizeCompact,.ui5-content-density-compact,[data-ui5-compact-size]{--_ui5_content_density:compact}";

	const e$1=()=>{S$1("data-ui5-system-css-vars")||c$2(a$1,"data-ui5-system-css-vars");};

	const t$2=typeof document>"u",e={get userAgent(){return t$2?"":navigator.userAgent},get touch(){return t$2?false:"ontouchstart"in window||navigator.maxTouchPoints>0},get chrome(){return t$2?false:/(Chrome|CriOS)/.test(e.userAgent)},get firefox(){return t$2?false:/Firefox/.test(e.userAgent)},get safari(){return t$2?false:!e.chrome&&/(Version|PhantomJS)\/(\d+\.\d+).*Safari/.test(e.userAgent)},get webkit(){return t$2?false:/webkit/.test(e.userAgent)},get windows(){return t$2?false:navigator.platform.indexOf("Win")!==-1},get macOS(){return t$2?false:!!navigator.userAgent.match(/Macintosh|Mac OS X/i)},get iOS(){return t$2?false:!!navigator.platform.match(/iPhone|iPad|iPod/)||!!(e.userAgent.match(/Mac/)&&"ontouchend"in document)},get android(){return t$2?false:!e.windows&&/Android/.test(e.userAgent)},get androidPhone(){return t$2?false:e.android&&/(?=android)(?=.*mobile)/i.test(e.userAgent)},get ipad(){return t$2?false:/ipad/i.test(e.userAgent)||/Macintosh/i.test(e.userAgent)&&"ontouchend"in document},_isPhone(){return u$1(),e.touch&&!r$2}};let o$1,i$1,r$2;const s=()=>{if(t$2||!e.windows)return  false;if(o$1===void 0){const n=e.userAgent.match(/Windows NT (\d+).(\d)/);o$1=n?parseFloat(n[1]):0;}return o$1>=8},c=()=>{if(t$2||!e.webkit)return  false;if(i$1===void 0){const n=e.userAgent.match(/(webkit)[ /]([\w.]+)/);i$1=n?parseFloat(n[1]):0;}return i$1>=537.1},u$1=()=>{if(t$2)return  false;if(r$2===void 0){if(e.ipad){r$2=true;return}if(e.touch){if(s()){r$2=true;return}if(e.chrome&&e.android){r$2=!/Mobile Safari\/[.0-9]+/.test(e.userAgent);return}let n=window.devicePixelRatio?window.devicePixelRatio:1;e.android&&c()&&(n=1),r$2=Math.min(window.screen.width/n,window.screen.height/n)>=600;return}r$2=e.userAgent.indexOf("Touch")!==-1||e.android&&!e.androidPhone;}},l$2=()=>e.touch,h$1=()=>e.safari,g$1=()=>e.chrome,b$1=()=>e.firefox,a=()=>(u$1(),(e.touch||s())&&r$2),d$1=()=>e._isPhone(),f=()=>t$2?false:!a()&&!d$1()||s(),m=()=>a()&&f(),w=()=>e.iOS,P$1=()=>e.android||e.androidPhone;

	let t$1=false;const i=()=>{h$1()&&w()&&!t$1&&(document.body.addEventListener("touchstart",()=>{}),t$1=true);};

	let o=false,r$1;const p=new i$b,h=()=>o,P=e=>{if(!o){p.attachEvent("boot",e);return}e();},l$1=async()=>{if(r$1!==void 0)return r$1;const e=async n=>{if(x(),typeof document>"u"){n();return}n$4(b);const t=n$8("OpenUI5Support"),f=t?t.isOpenUI5Detected():false,s=n$8("F6Navigation");t&&await t.init(),s&&!f&&s.init(),await d$2(),await I(r()),t&&t.attachListeners(),i$2(),e$1(),i(),n(),o=true,p.fireEvent("boot");};return r$1=new Promise(e),r$1},b=e=>{o&&e===r()&&I(r());};

	let t;i$a(()=>{t=void 0;});const r=()=>(t===void 0&&(t=T$2()),t),u=async e=>{t!==e&&(t=e,h()&&(await I(t),await C({themeAware:true})));},g=()=>e$4,n=()=>{const e=r();return l(e)?!e.startsWith("sap_horizon"):!m$1()?.baseThemeName?.startsWith("sap_horizon")},d=async()=>(await l$1(),n()),l=e=>s$a.includes(e);

	exports.$ = $;
	exports.C = C;
	exports.C$1 = C$1;
	exports.D = D;
	exports.F = F;
	exports.I = I$3;
	exports.L = L;
	exports.M = M;
	exports.P = P$1;
	exports.P$1 = P;
	exports.S = S$1;
	exports.U = U$2;
	exports.a = a$7;
	exports.a$1 = a$8;
	exports.a$2 = a;
	exports.b = b$1;
	exports.c = c$6;
	exports.c$1 = c$2;
	exports.c$2 = c$3;
	exports.c$3 = c$5;
	exports.d = d;
	exports.d$1 = d$1;
	exports.d$2 = d$8;
	exports.e = e$5;
	exports.f = f$2;
	exports.f$1 = f;
	exports.g = g$1;
	exports.g$1 = g$4;
	exports.g$2 = g;
	exports.h = h$1;
	exports.h$1 = h;
	exports.h$2 = h$3;
	exports.h$3 = h$4;
	exports.i = i$c;
	exports.i$1 = i$b;
	exports.i$2 = i$a;
	exports.i$3 = i$8;
	exports.l = l$9;
	exports.l$1 = l$1;
	exports.l$2 = l$5;
	exports.l$3 = l$2;
	exports.l$4 = l$6;
	exports.m = m$7;
	exports.m$1 = m;
	exports.m$2 = m$6;
	exports.n = n$8;
	exports.n$1 = n;
	exports.n$2 = n$6;
	exports.n$3 = n$3;
	exports.o = o$6;
	exports.o$1 = o$3;
	exports.p = p$2;
	exports.p$1 = p$3;
	exports.r = r$8;
	exports.r$1 = r;
	exports.s = s$b;
	exports.u = u$7;
	exports.u$1 = u;
	exports.w = w;
	exports.w$1 = w$3;

}));
