sap.ui.define(['uxc/integration/thirdparty/da2', 'uxc/integration/thirdparty/Theme', 'uxc/integration/thirdparty/Icons', 'uxc/integration/thirdparty/i18n'], (function (da$1, Theme, Icons, i18n) { 'use strict';

	const defaultExports = Object.isFrozen(da$1.defExp) ? Object.assign({}, da$1.defExp?.default || da$1.defExp) : da$1.defExp;
	Object.keys(da$1.namedExports || {}).filter((key) => !defaultExports[key]).forEach((key) => defaultExports[key] = da$1.namedExports[key]);
	Object.defineProperty(defaultExports, "__" + "esModule", { value: true });
	var da = Object.isFrozen(da$1.defExp) ? Object.freeze(defaultExports) : defaultExports;

	return da;

}));
