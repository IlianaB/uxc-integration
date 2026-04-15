sap.ui.define(['require', 'uxc/integration/thirdparty/LocaleData', 'uxc/integration/thirdparty/Theme', 'uxc/integration/thirdparty/i18n'], (function (require, LocaleData, Theme, i18n) { 'use strict';

    // @ts-nocheck
    const availableLocales = ["ar", "ar_EG", "ar_SA", "bg", "ca", "cnr", "cs", "da", "de", "de_AT", "de_CH", "el", "el_CY", "en", "en_AU", "en_GB", "en_HK", "en_IE", "en_IN", "en_NZ", "en_PG", "en_SG", "en_ZA", "es", "es_AR", "es_BO", "es_CL", "es_CO", "es_MX", "es_PE", "es_UY", "es_VE", "et", "fa", "fi", "fr", "fr_BE", "fr_CA", "fr_CH", "fr_LU", "he", "hi", "hr", "hu", "id", "it", "it_CH", "ja", "kk", "ko", "lt", "lv", "ms", "mk", "nb", "nl", "nl_BE", "pl", "pt", "pt_PT", "ro", "ru", "ru_UA", "sk", "sl", "sr", "sr_Latn", "sv", "th", "tr", "uk", "vi", "zh_CN", "zh_HK", "zh_SG", "zh_TW"];
    const importCldrJson = async (localeId) => {
        switch (localeId) {
            case "ar": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-ar" */ 'uxc/integration/thirdparty/_dynamics/ar'], resolve, reject); })).default;
            case "ar_EG": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-ar_EG" */ 'uxc/integration/thirdparty/_dynamics/ar_EG'], resolve, reject); })).default;
            case "ar_SA": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-ar_SA" */ 'uxc/integration/thirdparty/_dynamics/ar_SA'], resolve, reject); })).default;
            case "bg": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-bg" */ 'uxc/integration/thirdparty/_dynamics/bg'], resolve, reject); })).default;
            case "ca": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-ca" */ 'uxc/integration/thirdparty/_dynamics/ca'], resolve, reject); })).default;
            case "cnr": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-cnr" */ 'uxc/integration/thirdparty/_dynamics/cnr'], resolve, reject); })).default;
            case "cs": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-cs" */ 'uxc/integration/thirdparty/_dynamics/cs'], resolve, reject); })).default;
            case "da": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-da" */ 'uxc/integration/thirdparty/_dynamics/da3'], resolve, reject); })).default;
            case "de": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-de" */ 'uxc/integration/thirdparty/_dynamics/de'], resolve, reject); })).default;
            case "de_AT": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-de_AT" */ 'uxc/integration/thirdparty/_dynamics/de_AT'], resolve, reject); })).default;
            case "de_CH": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-de_CH" */ 'uxc/integration/thirdparty/_dynamics/de_CH'], resolve, reject); })).default;
            case "el": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-el" */ 'uxc/integration/thirdparty/_dynamics/el'], resolve, reject); })).default;
            case "el_CY": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-el_CY" */ 'uxc/integration/thirdparty/_dynamics/el_CY'], resolve, reject); })).default;
            case "en": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-en" */ 'uxc/integration/thirdparty/_dynamics/en'], resolve, reject); })).default;
            case "en_AU": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-en_AU" */ 'uxc/integration/thirdparty/_dynamics/en_AU'], resolve, reject); })).default;
            case "en_GB": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-en_GB" */ 'uxc/integration/thirdparty/_dynamics/en_GB'], resolve, reject); })).default;
            case "en_HK": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-en_HK" */ 'uxc/integration/thirdparty/_dynamics/en_HK'], resolve, reject); })).default;
            case "en_IE": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-en_IE" */ 'uxc/integration/thirdparty/_dynamics/en_IE'], resolve, reject); })).default;
            case "en_IN": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-en_IN" */ 'uxc/integration/thirdparty/_dynamics/en_IN'], resolve, reject); })).default;
            case "en_NZ": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-en_NZ" */ 'uxc/integration/thirdparty/_dynamics/en_NZ'], resolve, reject); })).default;
            case "en_PG": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-en_PG" */ 'uxc/integration/thirdparty/_dynamics/en_PG'], resolve, reject); })).default;
            case "en_SG": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-en_SG" */ 'uxc/integration/thirdparty/_dynamics/en_SG'], resolve, reject); })).default;
            case "en_ZA": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-en_ZA" */ 'uxc/integration/thirdparty/_dynamics/en_ZA'], resolve, reject); })).default;
            case "es": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-es" */ 'uxc/integration/thirdparty/_dynamics/es'], resolve, reject); })).default;
            case "es_AR": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-es_AR" */ 'uxc/integration/thirdparty/_dynamics/es_AR'], resolve, reject); })).default;
            case "es_BO": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-es_BO" */ 'uxc/integration/thirdparty/_dynamics/es_BO'], resolve, reject); })).default;
            case "es_CL": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-es_CL" */ 'uxc/integration/thirdparty/_dynamics/es_CL'], resolve, reject); })).default;
            case "es_CO": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-es_CO" */ 'uxc/integration/thirdparty/_dynamics/es_CO'], resolve, reject); })).default;
            case "es_MX": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-es_MX" */ 'uxc/integration/thirdparty/_dynamics/es_MX'], resolve, reject); })).default;
            case "es_PE": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-es_PE" */ 'uxc/integration/thirdparty/_dynamics/es_PE'], resolve, reject); })).default;
            case "es_UY": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-es_UY" */ 'uxc/integration/thirdparty/_dynamics/es_UY'], resolve, reject); })).default;
            case "es_VE": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-es_VE" */ 'uxc/integration/thirdparty/_dynamics/es_VE'], resolve, reject); })).default;
            case "et": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-et" */ 'uxc/integration/thirdparty/_dynamics/et'], resolve, reject); })).default;
            case "fa": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-fa" */ 'uxc/integration/thirdparty/_dynamics/fa'], resolve, reject); })).default;
            case "fi": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-fi" */ 'uxc/integration/thirdparty/_dynamics/fi'], resolve, reject); })).default;
            case "fr": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-fr" */ 'uxc/integration/thirdparty/_dynamics/fr'], resolve, reject); })).default;
            case "fr_BE": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-fr_BE" */ 'uxc/integration/thirdparty/_dynamics/fr_BE'], resolve, reject); })).default;
            case "fr_CA": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-fr_CA" */ 'uxc/integration/thirdparty/_dynamics/fr_CA'], resolve, reject); })).default;
            case "fr_CH": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-fr_CH" */ 'uxc/integration/thirdparty/_dynamics/fr_CH'], resolve, reject); })).default;
            case "fr_LU": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-fr_LU" */ 'uxc/integration/thirdparty/_dynamics/fr_LU'], resolve, reject); })).default;
            case "he": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-he" */ 'uxc/integration/thirdparty/_dynamics/he'], resolve, reject); })).default;
            case "hi": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-hi" */ 'uxc/integration/thirdparty/_dynamics/hi'], resolve, reject); })).default;
            case "hr": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-hr" */ 'uxc/integration/thirdparty/_dynamics/hr'], resolve, reject); })).default;
            case "hu": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-hu" */ 'uxc/integration/thirdparty/_dynamics/hu'], resolve, reject); })).default;
            case "id": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-id" */ 'uxc/integration/thirdparty/_dynamics/id'], resolve, reject); })).default;
            case "it": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-it" */ 'uxc/integration/thirdparty/_dynamics/it'], resolve, reject); })).default;
            case "it_CH": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-it_CH" */ 'uxc/integration/thirdparty/_dynamics/it_CH'], resolve, reject); })).default;
            case "ja": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-ja" */ 'uxc/integration/thirdparty/_dynamics/ja'], resolve, reject); })).default;
            case "kk": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-kk" */ 'uxc/integration/thirdparty/_dynamics/kk'], resolve, reject); })).default;
            case "ko": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-ko" */ 'uxc/integration/thirdparty/_dynamics/ko'], resolve, reject); })).default;
            case "lt": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-lt" */ 'uxc/integration/thirdparty/_dynamics/lt'], resolve, reject); })).default;
            case "lv": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-lv" */ 'uxc/integration/thirdparty/_dynamics/lv'], resolve, reject); })).default;
            case "ms": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-ms" */ 'uxc/integration/thirdparty/_dynamics/ms'], resolve, reject); })).default;
            case "mk": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-mk" */ 'uxc/integration/thirdparty/_dynamics/mk'], resolve, reject); })).default;
            case "nb": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-nb" */ 'uxc/integration/thirdparty/_dynamics/nb'], resolve, reject); })).default;
            case "nl": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-nl" */ 'uxc/integration/thirdparty/_dynamics/nl'], resolve, reject); })).default;
            case "nl_BE": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-nl_BE" */ 'uxc/integration/thirdparty/_dynamics/nl_BE'], resolve, reject); })).default;
            case "pl": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-pl" */ 'uxc/integration/thirdparty/_dynamics/pl'], resolve, reject); })).default;
            case "pt": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-pt" */ 'uxc/integration/thirdparty/_dynamics/pt'], resolve, reject); })).default;
            case "pt_PT": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-pt_PT" */ 'uxc/integration/thirdparty/_dynamics/pt_PT'], resolve, reject); })).default;
            case "ro": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-ro" */ 'uxc/integration/thirdparty/_dynamics/ro'], resolve, reject); })).default;
            case "ru": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-ru" */ 'uxc/integration/thirdparty/_dynamics/ru'], resolve, reject); })).default;
            case "ru_UA": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-ru_UA" */ 'uxc/integration/thirdparty/_dynamics/ru_UA'], resolve, reject); })).default;
            case "sk": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-sk" */ 'uxc/integration/thirdparty/_dynamics/sk'], resolve, reject); })).default;
            case "sl": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-sl" */ 'uxc/integration/thirdparty/_dynamics/sl'], resolve, reject); })).default;
            case "sr": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-sr" */ 'uxc/integration/thirdparty/_dynamics/sr'], resolve, reject); })).default;
            case "sr_Latn": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-sr_Latn" */ 'uxc/integration/thirdparty/_dynamics/sr_Latn'], resolve, reject); })).default;
            case "sv": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-sv" */ 'uxc/integration/thirdparty/_dynamics/sv'], resolve, reject); })).default;
            case "th": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-th" */ 'uxc/integration/thirdparty/_dynamics/th'], resolve, reject); })).default;
            case "tr": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-tr" */ 'uxc/integration/thirdparty/_dynamics/tr'], resolve, reject); })).default;
            case "uk": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-uk" */ 'uxc/integration/thirdparty/_dynamics/uk'], resolve, reject); })).default;
            case "vi": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-vi" */ 'uxc/integration/thirdparty/_dynamics/vi'], resolve, reject); })).default;
            case "zh_CN": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-zh_CN" */ 'uxc/integration/thirdparty/_dynamics/zh_CN'], resolve, reject); })).default;
            case "zh_HK": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-zh_HK" */ 'uxc/integration/thirdparty/_dynamics/zh_HK'], resolve, reject); })).default;
            case "zh_SG": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-zh_SG" */ 'uxc/integration/thirdparty/_dynamics/zh_SG'], resolve, reject); })).default;
            case "zh_TW": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-cldr-zh_TW" */ 'uxc/integration/thirdparty/_dynamics/zh_TW'], resolve, reject); })).default;
            default: throw "unknown locale";
        }
    };
    const importAndCheck$2 = async (localeId) => {
        const data = await importCldrJson(localeId);
        if (typeof data === "string" && data.endsWith(".json")) {
            throw new Error(`[LocaleData] Invalid bundling detected - dynamic JSON imports bundled as URLs. Switch to inlining JSON files from the build. Check the "Assets" documentation for more information.`);
        }
        return data;
    };
    availableLocales.forEach(localeId => LocaleData.C(localeId, importAndCheck$2));

    // @ts-nocheck
    const loadThemeProperties$1 = async (themeName) => {
        switch (themeName) {
            case "sap_fiori_3": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-theming-sap-fiori_3-parameters-bundle" */ 'uxc/integration/thirdparty/_dynamics/parameters-bundle.css4'], resolve, reject); })).default;
            case "sap_fiori_3_dark": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-theming-sap-fiori_3_dark-parameters-bundle" */ 'uxc/integration/thirdparty/_dynamics/parameters-bundle.css5'], resolve, reject); })).default;
            case "sap_fiori_3_hcb": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-theming-sap-fiori_3_hcb-parameters-bundle" */ 'uxc/integration/thirdparty/_dynamics/parameters-bundle.css6'], resolve, reject); })).default;
            case "sap_fiori_3_hcw": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-theming-sap-fiori_3_hcw-parameters-bundle" */ 'uxc/integration/thirdparty/_dynamics/parameters-bundle.css7'], resolve, reject); })).default;
            case "sap_horizon": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-theming-sap-horizon-parameters-bundle" */ 'uxc/integration/thirdparty/_dynamics/parameters-bundle.css8'], resolve, reject); })).default;
            case "sap_horizon_dark": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-theming-sap-horizon_dark-parameters-bundle" */ 'uxc/integration/thirdparty/_dynamics/parameters-bundle.css9'], resolve, reject); })).default;
            case "sap_horizon_hcb": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-theming-sap-horizon_hcb-parameters-bundle" */ 'uxc/integration/thirdparty/_dynamics/parameters-bundle.css10'], resolve, reject); })).default;
            case "sap_horizon_hcw": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-theming-sap-horizon_hcw-parameters-bundle" */ 'uxc/integration/thirdparty/_dynamics/parameters-bundle.css11'], resolve, reject); })).default;
            default: throw "unknown theme";
        }
    };
    const loadAndCheck$1 = async (themeName) => {
        const data = await loadThemeProperties$1(themeName);
        if (typeof data === "string" && data.endsWith(".json")) {
            throw new Error(`[themes] Invalid bundling detected - dynamic JSON imports bundled as URLs. Switch to inlining JSON files from the build. Check the "Assets" documentation for more information.`);
        }
        return data;
    };
    ["sap_fiori_3", "sap_fiori_3_dark", "sap_fiori_3_hcb", "sap_fiori_3_hcw", "sap_horizon", "sap_horizon_dark", "sap_horizon_hcb", "sap_horizon_hcw"]
        .forEach(themeName => Theme.p("@ui5/webcomponents-theming", themeName, loadAndCheck$1));

    // @ts-nocheck
    const importMessageBundle$1 = async (localeId) => {
        switch (localeId) {
            case "ar": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-ar" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_ar'], resolve, reject); })).default;
            case "bg": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-bg" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_bg'], resolve, reject); })).default;
            case "ca": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-ca" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_ca'], resolve, reject); })).default;
            case "cnr": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-cnr" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_cnr'], resolve, reject); })).default;
            case "cs": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-cs" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_cs'], resolve, reject); })).default;
            case "cy": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-cy" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_cy'], resolve, reject); })).default;
            case "da": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-da" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_da'], resolve, reject); })).default;
            case "de": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-de" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_de'], resolve, reject); })).default;
            case "el": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-el" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_el'], resolve, reject); })).default;
            case "en": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-en" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_en'], resolve, reject); })).default;
            case "en_GB": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-en_GB" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_en_GB'], resolve, reject); })).default;
            case "en_US_sappsd": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-en_US_sappsd" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_en_US_sappsd'], resolve, reject); })).default;
            case "en_US_saprigi": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-en_US_saprigi" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_en_US_saprigi'], resolve, reject); })).default;
            case "en_US_saptrc": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-en_US_saptrc" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_en_US_saptrc'], resolve, reject); })).default;
            case "es": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-es" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_es'], resolve, reject); })).default;
            case "es_MX": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-es_MX" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_es_MX'], resolve, reject); })).default;
            case "et": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-et" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_et'], resolve, reject); })).default;
            case "fi": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-fi" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_fi'], resolve, reject); })).default;
            case "fr": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-fr" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_fr'], resolve, reject); })).default;
            case "fr_CA": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-fr_CA" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_fr_CA'], resolve, reject); })).default;
            case "hi": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-hi" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_hi'], resolve, reject); })).default;
            case "hr": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-hr" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_hr'], resolve, reject); })).default;
            case "hu": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-hu" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_hu'], resolve, reject); })).default;
            case "id": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-id" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_id'], resolve, reject); })).default;
            case "it": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-it" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_it'], resolve, reject); })).default;
            case "iw": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-iw" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_iw'], resolve, reject); })).default;
            case "ja": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-ja" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_ja'], resolve, reject); })).default;
            case "kk": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-kk" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_kk'], resolve, reject); })).default;
            case "ko": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-ko" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_ko'], resolve, reject); })).default;
            case "lt": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-lt" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_lt'], resolve, reject); })).default;
            case "lv": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-lv" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_lv'], resolve, reject); })).default;
            case "mk": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-mk" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_mk'], resolve, reject); })).default;
            case "ms": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-ms" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_ms'], resolve, reject); })).default;
            case "nl": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-nl" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_nl'], resolve, reject); })).default;
            case "no": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-no" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_no'], resolve, reject); })).default;
            case "pl": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-pl" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_pl'], resolve, reject); })).default;
            case "pt": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-pt" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_pt'], resolve, reject); })).default;
            case "pt_PT": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-pt_PT" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_pt_PT'], resolve, reject); })).default;
            case "ro": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-ro" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_ro'], resolve, reject); })).default;
            case "ru": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-ru" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_ru'], resolve, reject); })).default;
            case "sh": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-sh" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_sh'], resolve, reject); })).default;
            case "sk": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-sk" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_sk'], resolve, reject); })).default;
            case "sl": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-sl" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_sl'], resolve, reject); })).default;
            case "sr": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-sr" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_sr'], resolve, reject); })).default;
            case "sv": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-sv" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_sv'], resolve, reject); })).default;
            case "th": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-th" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_th'], resolve, reject); })).default;
            case "tr": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-tr" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_tr'], resolve, reject); })).default;
            case "uk": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-uk" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_uk'], resolve, reject); })).default;
            case "vi": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-vi" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_vi'], resolve, reject); })).default;
            case "zh_CN": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-zh_CN" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_zh_CN'], resolve, reject); })).default;
            case "zh_TW": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-icons-messagebundle-zh_TW" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_zh_TW'], resolve, reject); })).default;
            default: throw "unknown locale";
        }
    };
    const importAndCheck$1 = async (localeId) => {
        const data = await importMessageBundle$1(localeId);
        if (typeof data === "string" && data.endsWith(".json")) {
            throw new Error(`[i18n] Invalid bundling detected - dynamic JSON imports bundled as URLs. Switch to inlining JSON files from the build. Check the "Assets" documentation for more information.`);
        }
        return data;
    };
    const localeIds$1 = ["ar",
        "bg",
        "ca",
        "cnr",
        "cs",
        "cy",
        "da",
        "de",
        "el",
        "en",
        "en_GB",
        "en_US_sappsd",
        "en_US_saprigi",
        "en_US_saptrc",
        "es",
        "es_MX",
        "et",
        "fi",
        "fr",
        "fr_CA",
        "hi",
        "hr",
        "hu",
        "id",
        "it",
        "iw",
        "ja",
        "kk",
        "ko",
        "lt",
        "lv",
        "mk",
        "ms",
        "nl",
        "no",
        "pl",
        "pt",
        "pt_PT",
        "ro",
        "ru",
        "sh",
        "sk",
        "sl",
        "sr",
        "sv",
        "th",
        "tr",
        "uk",
        "vi",
        "zh_CN",
        "zh_TW",];
    localeIds$1.forEach(localeId => {
        i18n.$("@ui5/webcomponents-icons", localeId, importAndCheck$1);
    });

    // @ts-nocheck
    const loadThemeProperties = async (themeName) => {
        switch (themeName) {
            case "sap_fiori_3": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-sap-fiori_3-parameters-bundle" */ 'uxc/integration/thirdparty/_dynamics/parameters-bundle.css12'], resolve, reject); })).default;
            case "sap_fiori_3_dark": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-sap-fiori_3_dark-parameters-bundle" */ 'uxc/integration/thirdparty/_dynamics/parameters-bundle.css13'], resolve, reject); })).default;
            case "sap_fiori_3_hcb": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-sap-fiori_3_hcb-parameters-bundle" */ 'uxc/integration/thirdparty/_dynamics/parameters-bundle.css14'], resolve, reject); })).default;
            case "sap_fiori_3_hcw": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-sap-fiori_3_hcw-parameters-bundle" */ 'uxc/integration/thirdparty/_dynamics/parameters-bundle.css15'], resolve, reject); })).default;
            case "sap_horizon": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-sap-horizon-parameters-bundle" */ 'uxc/integration/thirdparty/_dynamics/parameters-bundle.css16'], resolve, reject); })).default;
            case "sap_horizon_dark": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-sap-horizon_dark-parameters-bundle" */ 'uxc/integration/thirdparty/_dynamics/parameters-bundle.css17'], resolve, reject); })).default;
            case "sap_horizon_hcb": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-sap-horizon_hcb-parameters-bundle" */ 'uxc/integration/thirdparty/_dynamics/parameters-bundle.css18'], resolve, reject); })).default;
            case "sap_horizon_hcw": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-sap-horizon_hcw-parameters-bundle" */ 'uxc/integration/thirdparty/_dynamics/parameters-bundle.css19'], resolve, reject); })).default;
            default: throw "unknown theme";
        }
    };
    const loadAndCheck = async (themeName) => {
        const data = await loadThemeProperties(themeName);
        if (typeof data === "string" && data.endsWith(".json")) {
            throw new Error(`[themes] Invalid bundling detected - dynamic JSON imports bundled as URLs. Switch to inlining JSON files from the build. Check the "Assets" documentation for more information.`);
        }
        return data;
    };
    ["sap_fiori_3", "sap_fiori_3_dark", "sap_fiori_3_hcb", "sap_fiori_3_hcw", "sap_horizon", "sap_horizon_dark", "sap_horizon_hcb", "sap_horizon_hcw"]
        .forEach(themeName => Theme.p("@ui5/webcomponents", themeName, loadAndCheck));

    // @ts-nocheck
    const importMessageBundle = async (localeId) => {
        switch (localeId) {
            case "ar": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-ar" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_ar2'], resolve, reject); })).default;
            case "bg": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-bg" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_bg2'], resolve, reject); })).default;
            case "ca": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-ca" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_ca2'], resolve, reject); })).default;
            case "cnr": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-cnr" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_cnr2'], resolve, reject); })).default;
            case "cs": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-cs" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_cs2'], resolve, reject); })).default;
            case "cy": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-cy" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_cy2'], resolve, reject); })).default;
            case "da": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-da" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_da2'], resolve, reject); })).default;
            case "de": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-de" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_de2'], resolve, reject); })).default;
            case "el": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-el" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_el2'], resolve, reject); })).default;
            case "en": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-en" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_en2'], resolve, reject); })).default;
            case "en_GB": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-en_GB" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_en_GB2'], resolve, reject); })).default;
            case "en_US_sappsd": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-en_US_sappsd" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_en_US_sappsd2'], resolve, reject); })).default;
            case "en_US_saprigi": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-en_US_saprigi" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_en_US_saprigi2'], resolve, reject); })).default;
            case "en_US_saptrc": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-en_US_saptrc" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_en_US_saptrc2'], resolve, reject); })).default;
            case "es": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-es" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_es2'], resolve, reject); })).default;
            case "es_MX": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-es_MX" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_es_MX2'], resolve, reject); })).default;
            case "et": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-et" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_et2'], resolve, reject); })).default;
            case "fi": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-fi" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_fi2'], resolve, reject); })).default;
            case "fr": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-fr" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_fr2'], resolve, reject); })).default;
            case "fr_CA": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-fr_CA" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_fr_CA2'], resolve, reject); })).default;
            case "hi": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-hi" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_hi2'], resolve, reject); })).default;
            case "hr": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-hr" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_hr2'], resolve, reject); })).default;
            case "hu": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-hu" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_hu2'], resolve, reject); })).default;
            case "id": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-id" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_id2'], resolve, reject); })).default;
            case "it": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-it" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_it2'], resolve, reject); })).default;
            case "iw": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-iw" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_iw2'], resolve, reject); })).default;
            case "ja": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-ja" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_ja2'], resolve, reject); })).default;
            case "kk": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-kk" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_kk2'], resolve, reject); })).default;
            case "ko": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-ko" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_ko2'], resolve, reject); })).default;
            case "lt": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-lt" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_lt2'], resolve, reject); })).default;
            case "lv": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-lv" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_lv2'], resolve, reject); })).default;
            case "mk": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-mk" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_mk2'], resolve, reject); })).default;
            case "ms": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-ms" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_ms2'], resolve, reject); })).default;
            case "nl": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-nl" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_nl2'], resolve, reject); })).default;
            case "no": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-no" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_no2'], resolve, reject); })).default;
            case "pl": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-pl" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_pl2'], resolve, reject); })).default;
            case "pt": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-pt" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_pt2'], resolve, reject); })).default;
            case "pt_PT": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-pt_PT" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_pt_PT2'], resolve, reject); })).default;
            case "ro": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-ro" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_ro2'], resolve, reject); })).default;
            case "ru": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-ru" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_ru2'], resolve, reject); })).default;
            case "sh": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-sh" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_sh2'], resolve, reject); })).default;
            case "sk": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-sk" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_sk2'], resolve, reject); })).default;
            case "sl": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-sl" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_sl2'], resolve, reject); })).default;
            case "sr": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-sr" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_sr2'], resolve, reject); })).default;
            case "sv": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-sv" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_sv2'], resolve, reject); })).default;
            case "th": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-th" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_th2'], resolve, reject); })).default;
            case "tr": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-tr" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_tr2'], resolve, reject); })).default;
            case "uk": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-uk" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_uk2'], resolve, reject); })).default;
            case "vi": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-vi" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_vi2'], resolve, reject); })).default;
            case "zh_CN": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-zh_CN" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_zh_CN2'], resolve, reject); })).default;
            case "zh_TW": return (await new Promise(function (resolve, reject) { require([/* webpackChunkName: "ui5-webcomponents-messagebundle-zh_TW" */ 'uxc/integration/thirdparty/_dynamics/messagebundle_zh_TW2'], resolve, reject); })).default;
            default: throw "unknown locale";
        }
    };
    const importAndCheck = async (localeId) => {
        const data = await importMessageBundle(localeId);
        if (typeof data === "string" && data.endsWith(".json")) {
            throw new Error(`[i18n] Invalid bundling detected - dynamic JSON imports bundled as URLs. Switch to inlining JSON files from the build. Check the "Assets" documentation for more information.`);
        }
        return data;
    };
    const localeIds = ["ar",
        "bg",
        "ca",
        "cnr",
        "cs",
        "cy",
        "da",
        "de",
        "el",
        "en",
        "en_GB",
        "en_US_sappsd",
        "en_US_saprigi",
        "en_US_saptrc",
        "es",
        "es_MX",
        "et",
        "fi",
        "fr",
        "fr_CA",
        "hi",
        "hr",
        "hu",
        "id",
        "it",
        "iw",
        "ja",
        "kk",
        "ko",
        "lt",
        "lv",
        "mk",
        "ms",
        "nl",
        "no",
        "pl",
        "pt",
        "pt_PT",
        "ro",
        "ru",
        "sh",
        "sk",
        "sl",
        "sr",
        "sv",
        "th",
        "tr",
        "uk",
        "vi",
        "zh_CN",
        "zh_TW",];
    localeIds.forEach(localeId => {
        i18n.$("@ui5/webcomponents", localeId, importAndCheck);
    });

}));
