sap.ui.define(['uxc/integration/thirdparty/webcomponents-fiori', 'uxc/integration/thirdparty/parameters-bundle.css', 'uxc/integration/thirdparty/Theme', 'uxc/integration/thirdparty/parameters-bundle.css3', 'uxc/integration/thirdparty/Icons', 'uxc/integration/thirdparty/i18n', 'uxc/integration/thirdparty/LocaleData'], (function (webcomponentsBase, parametersBundle_css, Theme, parametersBundle_css$1, Icons, i18n, LocaleData) { 'use strict';

    function UserSettingsViewTemplate() {
        return (parametersBundle_css.jsx("div", { class: "ui5-user-settings-view-container", children: parametersBundle_css.jsx("div", { class: "ui5-user-settings-view", children: parametersBundle_css.jsx("slot", {}) }) }));
    }

    Theme.p("@ui5/webcomponents-theming", "sap_horizon", async () => parametersBundle_css.defaultThemeBase);
    Theme.p("@ui5/webcomponents-fiori", "sap_horizon", async () => parametersBundle_css$1.defaultTheme);
    var UserSettingViewCss = `.ui5-user-settings-view-container{container-type:inline-size}.ui5-user-settings-view{padding:1rem}@container (width > 37.5rem){.ui5-user-settings-view{padding-inline:2rem}}
`;

    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    /**
     * @class
     * ### Overview
     *
     * The `ui5-user-settings-view` represents a view displayed in the `ui5-user-settings-item`.
     *
     * @constructor
     * @extends UI5Element
     * @experimental
     * @public
     * @since 2.8.0
     */
    let UserSettingsView = class UserSettingsView extends webcomponentsBase.b {
        constructor() {
            super(...arguments);
            /**
             * Defines whether the view is selected. There can be just one selected view at a time.
             *
             * @default false
             * @public
             */
            this.selected = false;
            /**
             * Indicates whether the view is secondary. It is relevant only if the view is used in `pages` slot of `ui5-user-settings-item`
             * and controls the visibility of the back button.
             * @default false
             * @public
             */
            this.secondary = false;
        }
    };
    __decorate([
        webcomponentsBase.s()
    ], UserSettingsView.prototype, "text", void 0);
    __decorate([
        webcomponentsBase.s({ type: Boolean })
    ], UserSettingsView.prototype, "selected", void 0);
    __decorate([
        webcomponentsBase.s({ type: Boolean })
    ], UserSettingsView.prototype, "secondary", void 0);
    __decorate([
        webcomponentsBase.d({
            type: HTMLElement,
            "default": true,
        })
    ], UserSettingsView.prototype, "content", void 0);
    UserSettingsView = __decorate([
        webcomponentsBase.m({
            tag: "ui5-user-settings-view",
            renderer: parametersBundle_css.d,
            template: UserSettingsViewTemplate,
            styles: [UserSettingViewCss],
        })
    ], UserSettingsView);
    UserSettingsView.define();
    var UserSettingsView$1 = UserSettingsView;

    return UserSettingsView$1;

}));
