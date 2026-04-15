sap.ui.define(['exports', 'uxc/integration/thirdparty/Theme', 'uxc/integration/thirdparty/Icons', 'uxc/integration/thirdparty/i18n-defaults3'], (function (exports, Theme, Icons, i18nDefaults) { 'use strict';

	var o=(i=>(i.None="None",i.Positive="Positive",i.Critical="Critical",i.Negative="Negative",i.Information="Information",i))(o||{});

	const name$1 = "decline";
	const pathData$1 = "M86 109l22-23q5-5 12-5 6 0 11 5l124 125L380 86q5-5 11-5 7 0 12 5l22 23q12 11 0 23L301 256l124 125q11 11 0 22l-22 23q-8 5-12 5-3 0-11-5L255 301 131 426q-5 5-11 5-4 0-12-5l-22-23q-11-11 0-22l124-125L86 132q-12-12 0-23z";
	const ltr$1 = false;
	const accData$1 = i18nDefaults.ICON_DECLINE;
	const collection$1 = "SAP-icons-v4";
	const packageName$1 = "@ui5/webcomponents-icons";

	Icons.f(name$1, { pathData: pathData$1, ltr: ltr$1, accData: accData$1, collection: collection$1, packageName: packageName$1 });

	const name = "decline";
	const pathData = "M292 256l117 116q7 7 7 18 0 12-7.5 19t-18.5 7q-10 0-18-8L256 292 140 408q-8 8-18 8-11 0-18.5-7.5T96 390q0-10 8-18l116-116-116-116q-8-8-8-18 0-11 7.5-18.5T122 96t18 7l116 117 116-117q7-7 18-7t18.5 7.5T416 122t-7 18z";
	const ltr = false;
	const accData = i18nDefaults.ICON_DECLINE;
	const collection = "SAP-icons-v5";
	const packageName = "@ui5/webcomponents-icons";

	Icons.f(name, { pathData, ltr, accData, collection, packageName });

	var decline = "decline";

	exports.decline = decline;
	exports.o = o;

}));
