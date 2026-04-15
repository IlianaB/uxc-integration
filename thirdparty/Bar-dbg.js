sap.ui.define(['uxc/integration/thirdparty/webcomponents-fiori', 'uxc/integration/thirdparty/parameters-bundle.css', 'uxc/integration/thirdparty/Theme', 'uxc/integration/thirdparty/parameters-bundle.css2', 'uxc/integration/thirdparty/Icons', 'uxc/integration/thirdparty/i18n', 'uxc/integration/thirdparty/LocaleData'], (function (webcomponentsBase, parametersBundle_css, Theme, parametersBundle_css$1, Icons, i18n, LocaleData) { 'use strict';

    function BarTemplate() {
        return (parametersBundle_css.jsxs("div", { class: "ui5-bar-root", "aria-label": this.accInfo.label, role: "toolbar", part: "bar", children: [parametersBundle_css.jsx("div", { class: "ui5-bar-content-container ui5-bar-startcontent-container", part: "startContent", children: parametersBundle_css.jsx("slot", { name: "startContent" }) }), parametersBundle_css.jsx("div", { class: "ui5-bar-content-container ui5-bar-midcontent-container", part: "midContent", children: parametersBundle_css.jsx("slot", {}) }), parametersBundle_css.jsx("div", { class: "ui5-bar-content-container ui5-bar-endcontent-container", part: "endContent", children: parametersBundle_css.jsx("slot", { name: "endContent" }) })] }));
    }

    Theme.p("@ui5/webcomponents-theming", "sap_horizon", async () => parametersBundle_css.defaultThemeBase);
    Theme.p("@ui5/webcomponents", "sap_horizon", async () => parametersBundle_css$1.defaultTheme);
    var BarCss = `:host{background-color:var(--sapPageHeader_Background);height:var(--_ui5-v2-10-0_bar_base_height);width:100%;box-shadow:var(--sapContent_HeaderShadow);display:block}.ui5-bar-root{display:flex;align-items:center;justify-content:space-between;height:100%;width:100%;background-color:inherit;box-shadow:inherit;border-radius:inherit;min-width:0;overflow:hidden}.ui5-bar-root .ui5-bar-startcontent-container,.ui5-bar-root .ui5-bar-endcontent-container,.ui5-bar-root .ui5-bar-midcontent-container{display:flex;align-items:center}.ui5-bar-root .ui5-bar-startcontent-container,.ui5-bar-root .ui5-bar-endcontent-container{flex:0 0 auto}.ui5-bar-root .ui5-bar-midcontent-container{justify-content:center;flex:1 1 auto;padding:0 var(--_ui5-v2-10-0_bar-mid-container-padding-start-end);min-width:0;overflow:hidden}.ui5-bar-root .ui5-bar-startcontent-container{padding-inline-start:var(--_ui5-v2-10-0_bar-start-container-padding-start)}.ui5-bar-root .ui5-bar-content-container{min-width:calc(30% - calc(var(--_ui5-v2-10-0_bar-start-container-padding-start) + var(--_ui5-v2-10-0_bar-end-container-padding-end) + (2*var(--_ui5-v2-10-0_bar-mid-container-padding-start-end))))}.ui5-bar-root.ui5-bar-root-shrinked .ui5-bar-content-container{min-width:0px;overflow:hidden;height:100%}.ui5-bar-root .ui5-bar-endcontent-container{padding-inline-end:var(--_ui5-v2-10-0_bar-end-container-padding-end)}:host([design="Footer"]){background-color:var(--sapPageFooter_Background);border-top:.0625rem solid var(--sapPageFooter_BorderColor);box-shadow:none}:host([design="Subheader"]){height:var(--_ui5-v2-10-0_bar_subheader_height);margin-top:var(--_ui5-v2-10-0_bar_subheader_margin-top)}:host([design="FloatingFooter"]){border-radius:var(--sapElement_BorderCornerRadius);background-color:var(--sapPageFooter_Background);box-shadow:var(--sapContent_Shadow1);border:none}::slotted(*){margin:0 .25rem}
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
     * The Bar is a container which is primarily used to hold titles, buttons and input elements
     * and its design and functionality is the basis for page headers and footers.
     * The component consists of three areas to hold its content - startContent slot, default slot and endContent slot.
     * It has the capability to center content, such as a title, while having other components on the left and right side.
     *
     * ### Usage
     * With the use of the design property, you can set the style of the Bar to appear designed like a Header, Subheader, Footer and FloatingFooter.
     *
     * **Note:** Do not place a Bar inside another Bar or inside any bar-like component. Doing so may cause unpredictable behavior.
     *
     * ### Responsive Behavior
     * The default slot will be centered in the available space between the startContent and the endContent areas,
     * therefore it might not always be centered in the entire bar.
     *
     * ### Keyboard Handling
     *
     * #### Fast Navigation
     * This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
     * In order to use this functionality, you need to import the following module:
     * `import "@ui5/webcomponents-base/dist/features/F6Navigation.js"`
     *
     * ### ES6 Module Import
     *
     * `import "@ui5/webcomponents/dist/Bar.js";`
     * @csspart bar - Used to style the wrapper of the content of the component
     * @csspart startContent - Used to style the wrapper of the start content of the component
     * @csspart midContent - Used to style the wrapper of the middle content of the component
     * @csspart endContent - Used to style the wrapper of the end content of the component
     * @constructor
     * @extends UI5Element
     * @public
     * @since 1.0.0-rc.11
     */
    let Bar = class Bar extends webcomponentsBase.b {
        get accInfo() {
            return {
                "label": this.design,
            };
        }
        constructor() {
            super();
            /**
             * Defines the component's design.
             * @default "Header"
             * @public
             */
            this.design = "Header";
            this._handleResizeBound = this.handleResize.bind(this);
        }
        handleResize() {
            const bar = this.getDomRef();
            const barWidth = bar.offsetWidth;
            const needShrinked = Array.from(bar.children).some(child => {
                return child.offsetWidth > barWidth / 3;
            });
            bar.classList.toggle("ui5-bar-root-shrinked", needShrinked);
        }
        onEnterDOM() {
            webcomponentsBase.f.register(this, this._handleResizeBound);
            this.getDomRef().querySelectorAll(".ui5-bar-content-container").forEach(child => {
                webcomponentsBase.f.register(child, this._handleResizeBound);
            }, this);
        }
        onExitDOM() {
            webcomponentsBase.f.deregister(this, this._handleResizeBound);
            this.getDomRef().querySelectorAll(".ui5-bar-content-container").forEach(child => {
                webcomponentsBase.f.deregister(child, this._handleResizeBound);
            }, this);
        }
    };
    __decorate([
        webcomponentsBase.s()
    ], Bar.prototype, "design", void 0);
    __decorate([
        webcomponentsBase.d({ type: HTMLElement })
    ], Bar.prototype, "startContent", void 0);
    __decorate([
        webcomponentsBase.d({ type: HTMLElement, "default": true })
    ], Bar.prototype, "middleContent", void 0);
    __decorate([
        webcomponentsBase.d({ type: HTMLElement })
    ], Bar.prototype, "endContent", void 0);
    Bar = __decorate([
        webcomponentsBase.m({
            tag: "ui5-bar",
            fastNavigation: true,
            renderer: parametersBundle_css.d,
            styles: BarCss,
            template: BarTemplate,
        })
    ], Bar);
    Bar.define();
    var Bar$1 = Bar;

    return Bar$1;

}));
