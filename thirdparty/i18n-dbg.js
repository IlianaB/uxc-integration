sap.ui.define(['exports', 'uxc/integration/thirdparty/Theme'], (function (exports, Theme) { 'use strict';

	const e$1=new Theme.i$1,n$4="languageChange",t$1=a=>{e$1.attachEvent(n$4,a);},r$3=a=>{e$1.detachEvent(n$4,a);},o$1=a=>e$1.fireEventAsync(n$4,a);

	let e,n$3;Theme.i$2(()=>{e=void 0,n$3=void 0;});const d$1=()=>(e===void 0&&(e=Theme.L()),e),s$1=async t=>{e!==t&&(e=t,await o$1(t),Theme.h$1()&&await Theme.C({languageAware:true}));},m$1=()=>Theme.a$1,L$1=t=>{n$3=t;},c$2=()=>(n$3===void 0&&(n$3=Theme.F()),n$3);

	const t=typeof document>"u",o=()=>{if(t)return Theme.a$1;const a=navigator.languages,n=()=>navigator.language;return a&&a[0]||n()||Theme.a$1};

	const n$2=/^((?:[A-Z]{2,3}(?:-[A-Z]{3}){0,3})|[A-Z]{4}|[A-Z]{5,8})(?:-([A-Z]{4}))?(?:-([A-Z]{2}|[0-9]{3}))?((?:-[0-9A-Z]{5,8}|-[0-9][0-9A-Z]{3})*)((?:-[0-9A-WYZ](?:-[0-9A-Z]{2,8})+)*)(?:-(X(?:-[0-9A-Z]{1,8})+))?$/i;let r$2 = class r{constructor(s){const t=n$2.exec(s.replace(/_/g,"-"));if(t===null)throw new Error(`The given language ${s} does not adhere to BCP-47.`);this.sLocaleId=s,this.sLanguage=t[1]||Theme.a$1,this.sScript=t[2]||"",this.sRegion=t[3]||"",this.sVariant=t[4]&&t[4].slice(1)||null,this.sExtension=t[5]&&t[5].slice(1)||null,this.sPrivateUse=t[6]||null,this.sLanguage&&(this.sLanguage=this.sLanguage.toLowerCase()),this.sScript&&(this.sScript=this.sScript.toLowerCase().replace(/^[a-z]/,i=>i.toUpperCase())),this.sRegion&&(this.sRegion=this.sRegion.toUpperCase());}getLanguage(){return this.sLanguage}getScript(){return this.sScript}getRegion(){return this.sRegion}getVariant(){return this.sVariant}getVariantSubtags(){return this.sVariant?this.sVariant.split("-"):[]}getExtension(){return this.sExtension}getExtensionSubtags(){return this.sExtension?this.sExtension.slice(2).split("-"):[]}getPrivateUse(){return this.sPrivateUse}getPrivateUseSubtags(){return this.sPrivateUse?this.sPrivateUse.slice(2).split("-"):[]}hasPrivateUseSubtag(s){return this.getPrivateUseSubtags().indexOf(s)>=0}toString(){const s=[this.sLanguage];return this.sScript&&s.push(this.sScript),this.sRegion&&s.push(this.sRegion),this.sVariant&&s.push(this.sVariant),this.sExtension&&s.push(this.sExtension),this.sPrivateUse&&s.push(this.sPrivateUse),s.join("-")}};

	const r$1=new Map,n$1=t=>(r$1.has(t)||r$1.set(t,new r$2(t)),r$1.get(t)),c$1=t=>{try{if(t&&typeof t=="string")return n$1(t)}catch{}return new r$2(Theme.r)},s=t=>{const e=d$1();return e?n$1(e):c$1(o())};

	const _=/^((?:[A-Z]{2,3}(?:-[A-Z]{3}){0,3})|[A-Z]{4}|[A-Z]{5,8})(?:-([A-Z]{4}))?(?:-([A-Z]{2}|[0-9]{3}))?((?:-[0-9A-Z]{5,8}|-[0-9][0-9A-Z]{3})*)((?:-[0-9A-WYZ](?:-[0-9A-Z]{2,8})+)*)(?:-(X(?:-[0-9A-Z]{1,8})+))?$/i,c=/(?:^|-)(saptrc|sappsd)(?:-|$)/i,f$1={he:"iw",yi:"ji",nb:"no",sr:"sh"},p=i=>{let e;if(!i)return Theme.r;if(typeof i=="string"&&(e=_.exec(i.replace(/_/g,"-")))){let t=e[1].toLowerCase(),n=e[3]?e[3].toUpperCase():void 0;const s=e[2]?e[2].toLowerCase():void 0,r=e[4]?e[4].slice(1):void 0,o=e[6];return t=f$1[t]||t,o&&(e=c.exec(o))||r&&(e=c.exec(r))?`en_US_${e[1].toLowerCase()}`:(t==="zh"&&!n&&(s==="hans"?n="CN":s==="hant"&&(n="TW")),t+(n?"_"+n+(r?"_"+r.replace("-","_"):""):""))}return Theme.r};

	const r={zh_HK:"zh_TW",in:"id"},n=t=>{if(!t)return Theme.r;if(r[t])return r[t];const L=t.lastIndexOf("_");return L>=0?t.slice(0,L):t!==Theme.r?Theme.r:""};

	const d=new Set,m=new Set,g=new Map,l=new Map,u=new Map,$=(n,t,e)=>{const r=`${n}/${t}`;u.set(r,e);},f=(n,t)=>{g.set(n,t);},A=n=>g.get(n),h=(n,t)=>{const e=`${n}/${t}`;return u.has(e)},B=(n,t)=>{const e=`${n}/${t}`,r=u.get(e);return r&&!l.get(e)&&l.set(e,r(t)),l.get(e)},M=n=>{d.has(n)||(console.warn(`[${n}]: Message bundle assets are not configured. Falling back to English texts.`,` Add \`import "${n}/dist/Assets.js"\` in your bundle and make sure your build tool supports dynamic imports and JSON imports. See section "Assets" in the documentation for more information.`),d.add(n));},L=(n,t)=>t!==Theme.a$1&&!h(n,t),w=async n$1=>{const t=s().getLanguage(),e=s().getRegion(),r=s().getVariant();let s$1=t+(e?`-${e}`:"")+(r?`-${r}`:"");if(L(n$1,s$1))for(s$1=p(s$1);L(n$1,s$1);)s$1=n(s$1);const I=c$2();if(s$1===Theme.a$1&&!I){f(n$1,null);return}if(!h(n$1,s$1)){M(n$1);return}try{const o=await B(n$1,s$1);f(n$1,o);}catch(o){const a=o;m.has(a.message)||(m.add(a.message),console.error(a.message));}};t$1(n=>{const t=[...g.keys()];return Promise.all(t.map(w))});

	exports.$ = $;
	exports.A = A;
	exports.L = L$1;
	exports.c = c$2;
	exports.d = d$1;
	exports.m = m$1;
	exports.r = r$3;
	exports.s = s;
	exports.s$1 = s$1;
	exports.t = t$1;
	exports.w = w;

}));
