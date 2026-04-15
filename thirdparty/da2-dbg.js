sap.ui.define(['exports', 'uxc/integration/thirdparty/Theme', 'uxc/integration/thirdparty/Icons'], (function (exports, Theme, Icons) { 'use strict';

	const name$1 = "da";
	const pathData$1 = "M36 163l220 305 221-306-89-130H137zm220 349q-8 0-13-7L3 172q-3-5-3-10t3-9L117 6q5-6 12-6h267q9 0 13 7l100 146q3 4 3 9t-3 10L269 505q-5 7-13 7zm120-326q-26 9-39.5 22.5T315 248q-3 8-11 8t-11-8q-8-26-21.5-39.5T232 186q-8-2-8-10t8-11q26-9 39.5-22.5T293 103q3-7 11-7t11 7q8 26 21.5 39.5T376 165q8 3 8 11 0 3-1.5 6t-6.5 4z";
	const ltr$1 = true;
	const accData = null;
	const collection$1 = "SAP-icons-v4";
	const packageName$1 = "@ui5/webcomponents-icons";

	Icons.f(name$1, { pathData: pathData$1, ltr: ltr$1, collection: collection$1, packageName: packageName$1 });

	const name = "da";
	const pathData = "M256.499 511.002q-12.975 0-20.959-10.979L5.988 180.647q-11.976-14.97 0-29.941L114.776 9.98Q122.76 0 134.736 0h255.502q14.97 0 20.959 10.979l95.813 140.725q9.98 14.97 0 28.943L277.458 500.023q-7.984 10.979-20.959 10.979zM57.887 166.674l198.612 275.462 198.612-276.46-77.848-114.775H147.712zm318.378 19.961q-25.95 7.985-39.423 21.459t-22.456 39.423q-1.996 7.984-9.98 7.984t-10.98-7.984q-8.982-25.95-22.455-39.423t-39.423-21.459q-7.985-2.994-7.985-10.978t7.985-10.979q25.95-7.984 39.423-21.957t22.456-39.922q2.994-7.984 10.978-7.984t9.981 7.984q8.982 25.95 22.456 39.922t39.423 21.957q7.985 2.995 7.985 10.979t-7.985 10.978z";
	const ltr = true;
	const collection = "SAP-icons-v5";
	const packageName = "@ui5/webcomponents-icons";

	Icons.f(name, { pathData, ltr, collection, packageName });

	const getPathData = async() => {
		return await Theme.d() ? pathData$1 : pathData;
	};

	var defExp = "da";

	var namedExports = /*#__PURE__*/Object.freeze({
		__proto__: null,
		accData: accData,
		default: defExp,
		getPathData: getPathData,
		ltr: ltr$1
	});

	exports.defExp = defExp;
	exports.namedExports = namedExports;

}));
