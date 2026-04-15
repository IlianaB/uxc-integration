sap.ui.define(['exports'], (function (exports) { 'use strict';

	const i=t=>(e,n)=>{e.metadata.i18n||(e.metadata.i18n={}),Object.defineProperty(e,n,{get(){return e.i18nBundles[t]},set(){}}),e.metadata.i18n[n]={bundleName:t,target:e};};

	exports.i = i;

}));
