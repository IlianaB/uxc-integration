sap.ui.define(['uxc/integration/thirdparty/Theme', 'uxc/integration/thirdparty/Icons', 'uxc/integration/thirdparty/i18n'], (function (Theme, Icons, i18n) { 'use strict';

	const name$1 = "menu2";
	const pathData$1 = "M32 129q-13 0-22.5-9.5T0 97q0-14 9.5-23T32 65h448q14 0 23 9t9 23q0 13-9 22.5t-23 9.5H32zm0 159q-13 0-22.5-9.5T0 256q0-14 9.5-23t22.5-9h448q14 0 23 9t9 23q0 13-9 22.5t-23 9.5H32zm0 159q-13 0-22.5-9.5T0 415q0-14 9.5-23t22.5-9h448q14 0 23 9t9 23q0 13-9 22.5t-23 9.5H32z";
	const ltr$1 = false;
	const accData = null;
	const collection$1 = "SAP-icons-v4";
	const packageName$1 = "@ui5/webcomponents-icons";

	Icons.f(name$1, { pathData: pathData$1, ltr: ltr$1, collection: collection$1, packageName: packageName$1 });

	const name = "menu2";
	const pathData = "M486 115H26q-11 0-18.5-7T0 90t7.5-18.5T26 64h460q11 0 18.5 7.5T512 90t-7.5 18-18.5 7zm0 167H26q-11 0-18.5-7.5T0 256t7.5-18.5T26 230h460q11 0 18.5 7.5T512 256t-7.5 18.5T486 282zm0 166H26q-11 0-18.5-7.5T0 422t7.5-18 18.5-7h460q11 0 18.5 7t7.5 18-7.5 18.5T486 448z";
	const ltr = false;
	const collection = "SAP-icons-v5";
	const packageName = "@ui5/webcomponents-icons";

	Icons.f(name, { pathData, ltr, collection, packageName });

	const getPathData = async() => {
		return await Theme.d() ? pathData$1 : pathData;
	};

	var defExp = "menu2";

	var namedExports = /*#__PURE__*/Object.freeze({
		__proto__: null,
		accData: accData,
		default: defExp,
		getPathData: getPathData,
		ltr: ltr$1
	});

	const defaultExports = Object.isFrozen(defExp) ? Object.assign({}, defExp?.default || defExp) : defExp;
	Object.keys(namedExports || {}).filter((key) => !defaultExports[key]).forEach((key) => defaultExports[key] = namedExports[key]);
	Object.defineProperty(defaultExports, "__" + "esModule", { value: true });
	var menu2 = Object.isFrozen(defExp) ? Object.freeze(defaultExports) : defaultExports;

	return menu2;

}));
