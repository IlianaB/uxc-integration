sap.ui.define(['uxc/integration/thirdparty/Theme', 'uxc/integration/thirdparty/Icons', 'uxc/integration/thirdparty/i18n-defaults3', 'uxc/integration/thirdparty/i18n'], (function (Theme, Icons, i18nDefaults, i18n) { 'use strict';

	const name$1 = "message-information";
	const pathData$1 = "M0 256q0-53 20.5-100t55-81.5T157 20t99-20q54 0 100.5 20t81 55 54.5 81.5 20 99.5q0 54-20 100.5t-54.5 81T356 492t-100 20q-54 0-100.5-20t-81-55T20 355.5 0 256zm256 224q47 0 88-17.5t71-48 47.5-71.5 17.5-87q0-47-17.5-87.5t-48-71-71-48T256 32q-46 0-87 18T97.5 98.5t-48 71T32 256q0 47 17.5 88t48 71 71.5 47.5 87 17.5zm-64-112h33V240h-32v-31h95v159h32v33H192v-33zm64-256q13 0 22 9 10 9 10 24 0 13-10 22-9 9-22 9-14 0-23-8.5t-9-22.5 8.5-23.5T256 112z";
	const ltr$1 = true;
	const accData$1 = i18nDefaults.ICON_MESSAGE_INFORMATION;
	const collection$1 = "SAP-icons-v4";
	const packageName$1 = "@ui5/webcomponents-icons";

	Icons.f(name$1, { pathData: pathData$1, ltr: ltr$1, accData: accData$1, collection: collection$1, packageName: packageName$1 });

	const name = "message-information";
	const pathData = "M256 0q53 0 100 20t81.5 54.5T492 156t20 100-20 100-54.5 81.5T356 492t-100 20-100-20-81.5-54.5T20 356 0 256t20-100 54.5-81.5T156 20 256 0zm0 461q43 0 80.5-16t65-44 43.5-65 16-80-16-80.5-43.5-65-65-43.5T256 51t-80 16-65 43.5-44 65T51 256t16 80 44 65 65 44 80 16zm0-333q13 0 22.5 9.5T288 160t-9.5 22.5T256 192t-22.5-9.5T224 160t9.5-22.5T256 128zm0 115q11 0 18 7.5t7 18.5v102q0 11-7 18.5t-18 7.5-18.5-7.5T230 371V269q0-11 7.5-18.5T256 243z";
	const ltr = true;
	const accData = i18nDefaults.ICON_MESSAGE_INFORMATION;
	const collection = "SAP-icons-v5";
	const packageName = "@ui5/webcomponents-icons";

	Icons.f(name, { pathData, ltr, accData, collection, packageName });

	const getPathData = async() => {
		return await Theme.d() ? pathData$1 : pathData;
	};

	var defExp = "message-information";

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
	var messageInformation = Object.isFrozen(defExp) ? Object.freeze(defaultExports) : defaultExports;

	return messageInformation;

}));
