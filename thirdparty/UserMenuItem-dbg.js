sap.ui.define(['uxc/integration/thirdparty/webcomponents-fiori', 'uxc/integration/thirdparty/MenuItem2', 'uxc/integration/thirdparty/Theme', 'uxc/integration/thirdparty/parameters-bundle.css', 'uxc/integration/thirdparty/parameters-bundle.css3', 'uxc/integration/thirdparty/Icons', 'uxc/integration/thirdparty/i18n', 'uxc/integration/thirdparty/LocaleData', 'uxc/integration/thirdparty/event-strict', 'uxc/integration/thirdparty/i18n2', 'uxc/integration/thirdparty/nav-back', 'uxc/integration/thirdparty/i18n-defaults3', 'uxc/integration/thirdparty/ListItemTemplate', 'uxc/integration/thirdparty/FocusableElements', 'uxc/integration/thirdparty/decline', 'uxc/integration/thirdparty/List', 'uxc/integration/thirdparty/toLowercaseEnumValue', 'uxc/integration/thirdparty/AccessibilityTextsHelper', 'uxc/integration/thirdparty/getEffectiveScrollbarStyle', 'uxc/integration/thirdparty/ListItemBase', 'uxc/integration/thirdparty/i18n-defaults2', 'uxc/integration/thirdparty/parameters-bundle.css2', 'uxc/integration/thirdparty/ListItemAdditionalText.css', 'uxc/integration/thirdparty/Button2', 'uxc/integration/thirdparty/willShowContent', 'uxc/integration/thirdparty/Icon', 'uxc/integration/thirdparty/ResponsivePopover', 'uxc/integration/thirdparty/Popover2', 'uxc/integration/thirdparty/Title', 'uxc/integration/thirdparty/Dialog', 'uxc/integration/thirdparty/information'], (function (webcomponentsBase, MenuItem, Theme, parametersBundle_css, parametersBundle_css$1, Icons, i18n, LocaleData, eventStrict, i18n$1, navBack, i18nDefaults, ListItemTemplate, FocusableElements, decline, List, toLowercaseEnumValue, AccessibilityTextsHelper, getEffectiveScrollbarStyle, ListItemBase, i18nDefaults$1, parametersBundle_css$2, ListItemAdditionalText_css, Button, willShowContent, Icon, ResponsivePopover, Popover, Title, Dialog, information) { 'use strict';

    function UserMenuItemTemplate() {
        return [MenuItem.MenuItemTemplate.call(this)];
    }

    Theme.p("@ui5/webcomponents-theming", "sap_horizon", async () => parametersBundle_css.defaultThemeBase);
    Theme.p("@ui5/webcomponents-fiori", "sap_horizon", async () => parametersBundle_css$1.defaultTheme);
    var userMenuItemCss = `:host{height:40px;margin-block:.5rem}:host(:last-of-type){margin-bottom:0}:host(:first-of-type){margin-top:0}
`;

    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    /**
     * @class
     *
     * ### Overview
     *
     * `ui5-user-menu-item` is the item to use inside a `ui5-user-menu`.
     * An arbitrary hierarchy structure can be represented by recursively nesting menu items.
     *
     * ### Usage
     *
     * `ui5-user-menu-item` represents a node in a `ui5-user-menu`. The user menu itself is rendered as a list,
     * and each `ui5-menu-item` is represented by a menu item in that menu. Therefore, you should only use
     * `ui5-user-menu-item` directly in your apps. The `ui5-menu` menu item is internal for the menu, and not intended for public use.
     *
     * ### ES6 Module Import
     *
     * `import "@ui5/webcomponents-fiori/dist/UserMenuItem.js";`
     * @constructor
     * @extends MenuItem
     * @experimental
     * @public
     * @since 2.5.0
     */
    let UserMenuItem = class UserMenuItem extends MenuItem.MenuItem {
        get _menuItems() {
            return this.items.filter(item => !item.isSeparator);
        }
    };
    __decorate([
        webcomponentsBase.d({ "default": true, type: HTMLElement, invalidateOnChildChange: true })
    ], UserMenuItem.prototype, "items", void 0);
    UserMenuItem = __decorate([
        webcomponentsBase.m({
            tag: "ui5-user-menu-item",
            template: UserMenuItemTemplate,
            styles: [MenuItem.MenuItem.styles, userMenuItemCss],
        })
    ], UserMenuItem);
    UserMenuItem.define();
    var UserMenuItem$1 = UserMenuItem;

    return UserMenuItem$1;

}));
