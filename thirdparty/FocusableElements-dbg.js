sap.ui.define(['exports', 'uxc/integration/thirdparty/webcomponents-fiori', 'uxc/integration/thirdparty/Theme'], (function (exports, webcomponentsBase, Theme) { 'use strict';

	const t=e=>e.nodeName==="SLOT"?false:e.offsetWidth<=0&&e.offsetHeight<=0||e.style&&e.style.visibility==="hidden";

	const n=/^(?:a|area)$/i,a=/^(?:input|select|textarea|button)$/i,r=e=>{if(e.disabled)return  false;const t=e.getAttribute("tabindex");return t!=null?parseInt(t)>=0:a.test(e.nodeName)||n.test(e.nodeName)&&!!e.href};

	const E=e=>e.hasAttribute("data-ui5-focus-trap"),d=e=>{const l=getComputedStyle(e);return e.scrollHeight>e.clientHeight&&["scroll","auto"].indexOf(l.overflowY)>=0||e.scrollWidth>e.clientWidth&&["scroll","auto"].indexOf(l.overflowX)>=0},b=async(e,l)=>!e||t(e)?null:m(e,true),H=async(e,l)=>!e||t(e)?null:m(e,false),T=e=>e.hasAttribute("data-ui5-focus-redirect")||!t(e),L=e=>{if(webcomponentsBase.v(e)){const l=e.getAttribute("tabindex");if(l!==null&&parseInt(l)<0)return  true}return  false},m=async(e,l,r$1)=>{let t$1,s,n=-1;e.shadowRoot?t$1=l?e.shadowRoot.firstChild:e.shadowRoot.lastChild:e instanceof HTMLSlotElement&&e.assignedNodes()?(s=e.assignedNodes(),n=l?0:s.length-1,t$1=s[n]):t$1=l?e.firstElementChild:e.lastElementChild;let i;for(;t$1;){const u=t$1;if(!t(u)&&!L(u)){if(webcomponentsBase.v(t$1)&&(await t$1._waitForDomRef(),t$1=t$1.getDomRef()),!t$1||t(t$1))return null;if(t$1.nodeType===1&&T(t$1)&&!E(t$1)){if(r(t$1)||(i=await m(t$1,l),!Theme.h()&&!i&&d(t$1)))return t$1&&typeof t$1.focus=="function"?t$1:null;if(i)return i&&typeof i.focus=="function"?i:null}}t$1=l?u.nextSibling:u.previousSibling,s&&!s[n].contains(t$1)&&(n=l?n+1:n-1,t$1=s[n]);}return null};

	exports.H = H;
	exports.b = b;
	exports.t = t;

}));
