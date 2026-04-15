sap.ui.define(['exports', 'uxc/integration/thirdparty/Theme', 'uxc/integration/thirdparty/i18n'], (function (exports, Theme, i18n) { 'use strict';

	const t$2=new Map,e=(n,o)=>{t$2.set(n,o);},c$2=n=>t$2.get(n);

	var t$1=(o=>(o.SAPIconsV4="SAP-icons-v4",o.SAPIconsV5="SAP-icons-v5",o.SAPIconsTNTV2="tnt-v2",o.SAPIconsTNTV3="tnt-v3",o.SAPBSIconsV1="business-suite-v1",o.SAPBSIconsV2="business-suite-v2",o))(t$1||{});const s$2=new Map;s$2.set("SAP-icons",{legacy:"SAP-icons-v4",sap_horizon:"SAP-icons-v5"}),s$2.set("tnt",{legacy:"tnt-v2",sap_horizon:"tnt-v3"}),s$2.set("business-suite",{legacy:"business-suite-v1",sap_horizon:"business-suite-v2"});const c$1=(n,e)=>{if(s$2.has(n)){s$2.set(n,{...e,...s$2.get(n)});return}s$2.set(n,e);},r$1=n=>{const e=Theme.n$1()?"legacy":"sap_horizon";return s$2.has(n)?s$2.get(n)[e]:n};

	var t=(s=>(s["SAP-icons"]="SAP-icons-v4",s.horizon="SAP-icons-v5",s["SAP-icons-TNT"]="tnt",s.BusinessSuiteInAppSymbols="business-suite",s))(t||{});const n$1=e=>t[e]?t[e]:e;

	const i$2=o=>{const t=c$2(Theme.r$1());return !o&&t?n$1(t):o?r$1(o):r$1("SAP-icons")};

	const g$1=/('')|'([^']+(?:''[^']*)*)(?:'|$)|\{([0-9]+(?:\s*,[^{}]*)?)\}|[{}]/g,i$1=(n,t)=>(t=t||[],n.replace(g$1,(p,s,e,r,o)=>{if(s)return "'";if(e)return e.replace(/''/g,"'");if(r){const a=typeof r=="string"?parseInt(r):r;return String(t[a])}throw new Error(`[i18n]: pattern syntax error at pos ${o}`)}));

	const r=new Map;let s$1;let u$1 = class u{constructor(e){this.packageName=e;}getText(e,...i){if(typeof e=="string"&&(e={key:e,defaultText:e}),!e||!e.key)return "";const t=i18n.A(this.packageName);t&&!t[e.key]&&console.warn(`Key ${e.key} not found in the i18n bundle, the default text will be used`);const l=t&&t[e.key]?t[e.key]:e.defaultText||e.key;return i$1(l,i)}};const a=n=>{if(r.has(n))return r.get(n);const e=new u$1(n);return r.set(n,e),e},f$1=async n=>s$1?s$1(n):(await i18n.w(n),a(n)),y=n=>{s$1=n;};

	const w="legacy",c=new Map,s=Theme.m("SVGIcons.registry",new Map),i=Theme.m("SVGIcons.promises",new Map),l="ICON_NOT_FOUND",T=(e,t)=>{c.set(e,t);},N=async e=>{if(!i.has(e)){if(!c.has(e))throw new Error(`No loader registered for the ${e} icons collection. Probably you forgot to import the "AllIcons.js" module for the respective package.`);const t=c.get(e);i.set(e,t(e));}return i.get(e)},I=e=>{Object.keys(e.data).forEach(t=>{const o=e.data[t];f(t,{pathData:o.path||o.paths,ltr:o.ltr,accData:o.acc,collection:e.collection,packageName:e.packageName});});},f=(e,t)=>{const o=`${t.collection}/${e}`;s.set(o,{pathData:t.pathData,ltr:t.ltr,accData:t.accData,packageName:t.packageName,customTemplate:t.customTemplate,viewBox:t.viewBox,collection:t.collection});},d=e=>{e.startsWith("sap-icon://")&&(e=e.replace("sap-icon://",""));let t;return [e,t]=e.split("/").reverse(),e=e.replace("icon-",""),t&&(t=n$1(t)),{name:e,collection:t}},u=e=>{const{name:t,collection:o}=d(e);return g(o,t)},n=async e=>{const{name:t,collection:o}=d(e);let r=l;try{r=await N(i$2(o));}catch(a){console.error(a.message);}if(r===l)return r;const p=g(o,t);return p||(Array.isArray(r)?r.forEach(a=>{I(a),c$1(o,{[a.themeFamily||w]:a.collection});}):I(r),g(o,t))},g=(e,t)=>{const o=`${i$2(e)}/${t}`;return s.get(o)},A=async e=>{if(!e)return;let t=u(e);if(t||(t=await n(e)),t&&t!==l&&t.accData)return (await f$1(t.packageName)).getText(t.accData)};

	exports.A = A;
	exports.T = T;
	exports.c = c$2;
	exports.e = e;
	exports.f = f;
	exports.f$1 = f$1;
	exports.i = i$2;
	exports.n = n;
	exports.t = t$1;
	exports.u = u;
	exports.u$1 = u$1;
	exports.y = y;

}));
