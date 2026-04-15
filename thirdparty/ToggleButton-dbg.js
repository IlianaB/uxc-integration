sap.ui.define(['uxc/integration/thirdparty/webcomponents-fiori', 'uxc/integration/thirdparty/Theme', 'uxc/integration/thirdparty/Button2', 'uxc/integration/thirdparty/parameters-bundle.css', 'uxc/integration/thirdparty/parameters-bundle.css2', 'uxc/integration/thirdparty/Icons', 'uxc/integration/thirdparty/i18n', 'uxc/integration/thirdparty/LocaleData', 'uxc/integration/thirdparty/event-strict', 'uxc/integration/thirdparty/i18n2', 'uxc/integration/thirdparty/AccessibilityTextsHelper', 'uxc/integration/thirdparty/willShowContent', 'uxc/integration/thirdparty/toLowercaseEnumValue', 'uxc/integration/thirdparty/Icon', 'uxc/integration/thirdparty/i18n-defaults2'], (function (webcomponentsBase, Theme, Button, parametersBundle_css, parametersBundle_css$1, Icons, i18n, LocaleData, eventStrict, i18n$1, AccessibilityTextsHelper, willShowContent, toLowercaseEnumValue, Icon, i18nDefaults) { 'use strict';

    function ToggleButtonTemplate() {
        return (parametersBundle_css.jsx(parametersBundle_css.Fragment, { children: Button.ButtonTemplate.call(this, { ariaPressed: this.pressed }) }));
    }

    Theme.p("@ui5/webcomponents-theming", "sap_horizon", async () => parametersBundle_css.defaultThemeBase);
    Theme.p("@ui5/webcomponents", "sap_horizon", async () => parametersBundle_css$1.defaultTheme);
    var toggleBtnCss = `:host(:not([hidden])){display:inline-block}:host([design="Emphasized"]:not([pressed])){text-shadow:var(--_ui5-v2-10-0_toggle_button_emphasized_text_shadow)}:host([pressed]),:host([design="Default"][pressed]),:host([design="Transparent"][pressed]),:host([design="Emphasized"][pressed]){background:var(--sapButton_Selected_Background);border-color:var(--sapButton_Selected_BorderColor);color:var(--sapButton_Selected_TextColor);text-shadow:none}:host([pressed]:hover),:host([pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover),:host([design="Default"][pressed]:hover),:host([design="Default"][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover),:host([design="Transparent"][pressed]:hover),:host([design="Transparent"][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover),:host([design="Emphasized"][pressed]:hover),:host([design="Emphasized"][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover){background:var(--sapButton_Selected_Hover_Background);border-color:var(--sapButton_Selected_Hover_BorderColor);color:var(--sapButton_Selected_TextColor)}:host([active]:not([disabled])),:host([design="Default"][active]:not([disabled])),:host([design="Transparent"][active]:not([disabled])),:host([design="Emphasized"][active]:not([disabled])){background:var(--sapButton_Active_Background);border-color:var(--sapButton_Active_BorderColor);color:var(--sapButton_Selected_TextColor)}:host([pressed]:not([active]):not([non-interactive]):not([_is-touch])),:host([design="Default"][pressed]:not([active]):not([non-interactive]):not([_is-touch])),:host([design="Transparent"][pressed]:not([active]):not([non-interactive]):not([_is-touch])),:host([design="Emphasized"][pressed]:not([active]):not([non-interactive]):not([_is-touch])){background:var(--sapButton_Selected_Background);border-color:var(--sapButton_Selected_BorderColor);color:var(--sapButton_Selected_TextColor)}:host([design="Negative"][pressed]){background:var(--sapButton_Reject_Selected_Background);border-color:var(--sapButton_Reject_Selected_BorderColor);color:var(--sapButton_Reject_Selected_TextColor)}:host([design="Negative"][active]:not([disabled])){background:var(--sapButton_Reject_Active_Background);border-color:var(--sapButton_Reject_Active_BorderColor);color:var(--sapButton_Reject_Active_TextColor)}:host([design="Negative"][pressed][active]:hover),:host([design="Negative"][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover){background:var(--sapButton_Reject_Selected_Hover_Background);border-color:var(--sapButton_Reject_Selected_Hover_BorderColor);color:var(--sapButton_Reject_Selected_TextColor)}:host([design="Negative"][pressed]:not([active]):not([non-interactive]):not([_is-touch])){background:var(--sapButton_Reject_Selected_Background);border-color:var(--sapButton_Reject_Selected_BorderColor);color:var(--sapButton_Reject_Selected_TextColor)}:host([design="Positive"][pressed]){background:var(--sapButton_Accept_Selected_Background);border-color:var(--sapButton_Accept_Selected_BorderColor);color:var(--sapButton_Accept_Selected_TextColor)}:host([design="Positive"][active]:not([disabled])){background:var(--sapButton_Accept_Active_Background);border-color:var(--sapButton_Accept_Active_BorderColor);color:var(--sapButton_Accept_Selected_TextColor)}:host([design="Positive"][pressed][active]:hover),:host([design="Positive"][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover){background:var(--sapButton_Accept_Selected_Hover_Background);border-color:var(--sapButton_Accept_Selected_Hover_BorderColor);color:var(--sapButton_Accept_Selected_TextColor)}:host([design="Positive"][pressed]:not([active]):not([non-interactive]):not([_is-touch])){background:var(--sapButton_Accept_Selected_Background);border-color:var(--sapButton_Accept_Selected_BorderColor);color:var(--sapButton_Accept_Selected_TextColor)}:host([design="Attention"][pressed]){background:var(--sapButton_Attention_Selected_Background);border-color:var(--sapButton_Attention_Selected_BorderColor);color:var(--sapButton_Attention_Selected_TextColor)}:host([design="Attention"][active]:not([disabled])){background:var(--sapButton_Attention_Active_Background);border-color:var(--sapButton_Attention_Active_BorderColor);color:var(--sapButton_Attention_Active_TextColor)}:host([design="Attention"][pressed][active]:hover),:host([design="Attention"][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover){background:var(--sapButton_Attention_Selected_Hover_Background);border-color:var(--sapButton_Attention_Selected_Hover_BorderColor);color:var(--sapButton_Attention_Selected_TextColor)}:host([design="Attention"][pressed]:not([active]):not([non-interactive]):not([_is-touch])){background:var(--sapButton_Attention_Selected_Background);border-color:var(--sapButton_Attention_Selected_BorderColor);color:var(--sapButton_Attention_Selected_TextColor)}
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
     * The `ui5-toggle-button` component is an enhanced `ui5-button`
     * that can be toggled between pressed and normal states.
     * Users can use the `ui5-toggle-button` as a switch to turn a setting on or off.
     * It can also be used to represent an independent choice similar to a check box.
     *
     * Clicking or tapping on a `ui5-toggle-button` changes its state to `pressed`. The button returns to
     * its initial state when the user clicks or taps on it again.
     * By applying additional custom CSS-styling classes, apps can give a different style to any `ui5-toggle-button`.
     *
     * ### ES6 Module Import
     *
     * `import "@ui5/webcomponents/dist/ToggleButton.js";`
     * @constructor
     * @extends Button
     * @public
     */
    let ToggleButton = class ToggleButton extends Button.Button {
        constructor() {
            super(...arguments);
            /**
             * Determines whether the component is displayed as pressed.
             * @default false
             * @public
             */
            this.pressed = false;
        }
        _onclick() {
            this.pressed = !this.pressed;
            if (Theme.h()) {
                this.getDomRef().focus();
            }
        }
        _onkeyup(e) {
            if (webcomponentsBase.A(e)) {
                e.preventDefault();
                return;
            }
            super._onkeyup(e);
        }
    };
    __decorate([
        webcomponentsBase.s({ type: Boolean })
    ], ToggleButton.prototype, "pressed", void 0);
    ToggleButton = __decorate([
        webcomponentsBase.m({
            tag: "ui5-toggle-button",
            template: ToggleButtonTemplate,
            styles: [Button.Button.styles, toggleBtnCss],
        })
    ], ToggleButton);
    ToggleButton.define();
    var ToggleButton$1 = ToggleButton;

    return ToggleButton$1;

}));
