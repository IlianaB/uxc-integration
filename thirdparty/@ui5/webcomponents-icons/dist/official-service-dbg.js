sap.ui.define(['uxc/integration/thirdparty/Theme', 'uxc/integration/thirdparty/Icons', 'uxc/integration/thirdparty/i18n'], (function (Theme, Icons, i18n) { 'use strict';

	const name$1 = "official-service";
	const pathData$1 = "M63.875 447.127v-31.938h383.252v31.938h31.937v31.937H31.938v-31.937h31.937zm0-223.564l191.626-127.75 191.626 127.75H63.875zM0 202.604q0-5.988 4.99-10.978 32.936-21.957 62.877-40.92t55.891-35.93q19.961-13.973 40.421-26.449T205.6 61.88q7.984-4.99 15.47-9.481t12.475-8.484l9.98-6.986q7.985-4.99 11.977-4.99 6.986 0 11.977 4.99l37.926 24.951q19.96 12.975 40.92 25.95t40.92 26.947q25.949 16.967 55.89 35.93t63.876 40.92q4.99 4.99 4.99 10.978-.998 4.99-4.99 10.48t-9.98 5.49q-4.991 0-12.975-4.991L255.5 71.86 27.945 213.583q-6.986 5.988-12.974 5.988t-10.48-5.49T0 202.605zm223.563 84.835h63.876v95.812h-63.876V287.44zM63.875 255.5h31.938v127.75H63.875v-127.75zm287.439 0h31.937v127.75h-31.937v-127.75zm95.813 0v127.75h-31.938v-127.75h31.938zm-319.377 0h31.938v127.75H127.75v-127.75zm95.813-95.813q0 13.973 8.983 22.955t22.955 8.983 22.955-8.983 8.983-22.955q0-12.975-8.983-22.955-8.982-8.983-22.955-8.983t-22.955 8.983q-8.983 9.98-8.983 22.955z";
	const ltr$1 = false;
	const accData = null;
	const collection$1 = "SAP-icons-v4";
	const packageName$1 = "@ui5/webcomponents-icons";

	Icons.f(name$1, { pathData: pathData$1, ltr: ltr$1, collection: collection$1, packageName: packageName$1 });

	const name = "official-service";
	const pathData = "M456 160H59q-11 0-18.5-7.5T33 134q0-16 13-22L245 3q6-3 12-3 8 0 12 3l199 109q13 6 13 22 0 11-7 18.5t-18 7.5zm-297-52h196l-98-53zM91 416q-11 0-18.5-7.5T65 390V250q0-11 7.5-18.5T91 224t18 7.5 7 18.5v140q0 11-7 18.5T91 416zm333 0q-11 0-18.5-7.5T398 390V250q0-11 7.5-18.5T424 224t18 7.5 7 18.5v140q0 11-7 18.5t-18 7.5zm-224 0q-11 0-18.5-7.5T174 390V250q0-11 7.5-18.5T200 224t18 7.5 7 18.5v140q0 11-7 18.5t-18 7.5zm115 0q-11 0-18.5-7.5T289 390V250q0-11 7.5-18.5T315 224t18 7.5 7 18.5v140q0 11-7 18.5t-18 7.5zm141 96H59q-11 0-18.5-7.5T33 486t7.5-18 18.5-7h397q11 0 18 7t7 18-7 18.5-18 7.5z";
	const ltr = false;
	const collection = "SAP-icons-v5";
	const packageName = "@ui5/webcomponents-icons";

	Icons.f(name, { pathData, ltr, collection, packageName });

	const getPathData = async() => {
		return await Theme.d() ? pathData$1 : pathData;
	};

	var defExp = "official-service";

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
	var officialService = Object.isFrozen(defExp) ? Object.freeze(defaultExports) : defaultExports;

	return officialService;

}));
