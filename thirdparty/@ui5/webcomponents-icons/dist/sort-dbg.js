sap.ui.define(['uxc/integration/thirdparty/Theme', 'uxc/integration/thirdparty/Icons', 'uxc/integration/thirdparty/i18n-defaults3', 'uxc/integration/thirdparty/i18n'], (function (Theme, Icons, i18nDefaults, i18n) { 'use strict';

	const name$1 = "sort";
	const pathData$1 = "M405.022 498.566q-9.951 9.951-22.888 9.951t-21.893-9.951l-101.504-100.51q-11.942-11.941 0-22.888 4.975-4.976 10.946-4.976t10.947 4.976l84.587 84.587v-317.45q0-15.922 15.922-15.922t15.922 15.922v319.44l86.577-86.577q10.947-10.946 22.889 0 10.946 10.947 0 22.888zM253.761 110.46q10.946 11.941 0 22.888-4.976 4.976-11.444 4.976t-11.444-4.976l-86.578-86.577v319.44q0 15.922-15.922 15.922t-15.922-15.922V48.762l-84.587 84.587q-4.976 4.976-10.947 4.976t-10.946-4.976q-11.942-10.947 0-22.888L107.475 9.95Q116.431 0 129.368 0t22.889 9.951z";
	const ltr$1 = false;
	const accData$1 = i18nDefaults.ICON_SORT;
	const collection$1 = "SAP-icons-v4";
	const packageName$1 = "@ui5/webcomponents-icons";

	Icons.f(name$1, { pathData: pathData$1, ltr: ltr$1, accData: accData$1, collection: collection$1, packageName: packageName$1 });

	const name = "sort";
	const pathData = "M504 124q8 8 8 18 0 11-7.5 18.5T486 168t-18-7l-42-42v335q0 11-7.5 18.5T400 480t-18-7.5-7-18.5V118l-43 43q-7 7-18 7t-18.5-7.5T288 142q0-10 8-18l86-85q7-7 18-7t18 7zM180 351q7-7 18-7t18.5 7.5T224 370q0 10-8 18l-86 85q-7 7-18 7t-18-7L8 388q-8-8-8-18 0-11 7.5-18.5T26 344t18 7l43 43V58q0-11 7.5-18.5T113 32t18 7.5 7 18.5v335z";
	const ltr = false;
	const accData = i18nDefaults.ICON_SORT;
	const collection = "SAP-icons-v5";
	const packageName = "@ui5/webcomponents-icons";

	Icons.f(name, { pathData, ltr, accData, collection, packageName });

	const getPathData = async() => {
		return await Theme.d() ? pathData$1 : pathData;
	};

	var defExp = "sort";

	var namedExports = /*#__PURE__*/Object.freeze({
		__proto__: null,
		accData: accData$1,
		default: defExp,
		getPathData: getPathData,
		ltr: ltr$1
	});

	const defaultExports = Object.isFrozen(defExp) ? Object.assign({}, defExp?.default || defExp) : defExp;
	Object.keys(namedExports || {}).filter((key) => !defaultExports[key]).forEach((key) => defaultExports[key] = namedExports[key]);
	Object.defineProperty(defaultExports, "__" + "esModule", { value: true });
	var sort = Object.isFrozen(defExp) ? Object.freeze(defaultExports) : defaultExports;

	return sort;

}));
