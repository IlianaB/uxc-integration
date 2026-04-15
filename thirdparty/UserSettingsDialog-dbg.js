sap.ui.define(['uxc/integration/thirdparty/webcomponents-fiori', 'uxc/integration/thirdparty/event-strict', 'uxc/integration/thirdparty/i18n2', 'uxc/integration/thirdparty/parameters-bundle.css', 'uxc/integration/thirdparty/Theme', 'uxc/integration/thirdparty/Dialog', 'uxc/integration/thirdparty/Title', 'uxc/integration/thirdparty/Input', 'uxc/integration/thirdparty/Text', 'uxc/integration/thirdparty/Icon', 'uxc/integration/thirdparty/List', 'uxc/integration/thirdparty/ListItemStandard', 'uxc/integration/thirdparty/Button2', 'uxc/integration/thirdparty/parameters-bundle.css2', 'uxc/integration/thirdparty/AccessibilityTextsHelper', 'uxc/integration/thirdparty/overflow', 'uxc/integration/thirdparty/i18n-defaults2', 'uxc/integration/thirdparty/Popover2', 'uxc/integration/thirdparty/search', 'uxc/integration/thirdparty/parameters-bundle.css3', 'uxc/integration/thirdparty/i18n-defaults', 'uxc/integration/thirdparty/Icons', 'uxc/integration/thirdparty/i18n', 'uxc/integration/thirdparty/LocaleData', 'uxc/integration/thirdparty/getEffectiveScrollbarStyle', 'uxc/integration/thirdparty/decline', 'uxc/integration/thirdparty/i18n-defaults3', 'uxc/integration/thirdparty/toLowercaseEnumValue', 'uxc/integration/thirdparty/information', 'uxc/integration/thirdparty/information2', 'uxc/integration/thirdparty/sys-enter-2', 'uxc/integration/thirdparty/ResponsivePopoverCommon.css', 'uxc/integration/thirdparty/willShowContent', 'uxc/integration/thirdparty/ListItemBase', 'uxc/integration/thirdparty/FocusableElements', 'uxc/integration/thirdparty/ListItemTemplate', 'uxc/integration/thirdparty/ListItemAdditionalText.css'], (function (webcomponentsBase, eventStrict, i18n, parametersBundle_css, Theme, Dialog, Title, Input, Text, Icon, List, ListItemStandard, Button, parametersBundle_css$1, AccessibilityTextsHelper, overflow, i18nDefaults, Popover, search, parametersBundle_css$2, i18nDefaults$1, Icons, i18n$1, LocaleData, getEffectiveScrollbarStyle, decline, i18nDefaults$2, toLowercaseEnumValue, information, information$1, sysEnter2, ResponsivePopoverCommon_css, willShowContent, ListItemBase, FocusableElements, ListItemTemplate, ListItemAdditionalText_css) { 'use strict';

    var __decorate$3 = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    let ToolbarItem = 
    /**
     * @class
     *
     * Represents an abstract class for items, used in the `ui5-toolbar`.
     * @constructor
     * @extends UI5Element
     * @abstract
     * @public
     * @since 1.17.0
     */
    class ToolbarItem extends webcomponentsBase.b {
        constructor() {
            super(...arguments);
            /**
             * Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set,
             * the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it.
             * @public
             * @default "Default"
             */
            this.overflowPriority = "Default";
            /**
             * Defines if the toolbar overflow popup should close upon intereaction with the item.
             * It will close by default.
             * @default false
             * @public
             */
            this.preventOverflowClosing = false;
        }
        /**
        * Defines if the width of the item should be ignored in calculating the whole width of the toolbar
        * @protected
        */
        get ignoreSpace() {
            return false;
        }
        /**
         * Returns if the item contains text. Used to position the text properly inside the popover.
         * Aligned left if the item has text, default aligned otherwise.
         * @protected
         */
        get containsText() {
            return false;
        }
        /**
         * Returns if the item is flexible. An item that is returning true for this property will make
         * the toolbar expand to fill the 100% width of its container.
         * @protected
         */
        get hasFlexibleWidth() {
            return false;
        }
        /**
         * Returns if the item is interactive.
         * This value is used to determinate if the toolbar should have its accessibility role and attributes set.
         * At least two interactive items are needed for the toolbar to have the role="toolbar" attribute set.
         * @protected
         */
        get isInteractive() {
            return true;
        }
        /**
         * Returns if the item is separator.
         * @protected
         */
        get isSeparator() {
            return false;
        }
        /**
         * Returns the template for the toolbar item.
         * @protected
         */
        static get toolbarTemplate() {
            throw new Error("Template must be defined");
        }
        /**
         * Returns the template for the toolbar item popover.
         * @protected
         */
        static get toolbarPopoverTemplate() {
            throw new Error("Popover template must be defined");
        }
        get stableDomRef() {
            return this.getAttribute("stable-dom-ref") || `${this._id}-stable-dom-ref`;
        }
    };
    __decorate$3([
        webcomponentsBase.s()
    ], ToolbarItem.prototype, "overflowPriority", void 0);
    __decorate$3([
        webcomponentsBase.s({ type: Boolean })
    ], ToolbarItem.prototype, "preventOverflowClosing", void 0);
    ToolbarItem = __decorate$3([
        eventStrict.l("close-overflow", {
            bubbles: true,
        })
        /**
         * @class
         *
         * Represents an abstract class for items, used in the `ui5-toolbar`.
         * @constructor
         * @extends UI5Element
         * @abstract
         * @public
         * @since 1.17.0
         */
    ], ToolbarItem);
    var ToolbarItem$1 = ToolbarItem;

    function ToolbarButtonTemplate() {
        return (parametersBundle_css.jsx(Button.Button, { class: "ui5-tb-button ui5-tb-item", id: this.id, style: {
                width: this.width,
                display: this.hidden ? "none" : "inline-block",
            }, icon: this.icon, endIcon: this.endIcon, tooltip: this.tooltip, accessibleName: this.accessibleName, accessibleNameRef: this.accessibleNameRef, accessibilityAttributes: this.accessibilityAttributes, design: this.design, disabled: this.disabled, hidden: this.hidden, "data-ui5-external-action-item-id": this._id, "data-ui5-stable": this.stableDomRef, onClick: (...args) => this.onClick(...args), children: this.text }));
    }

    function ToolbarPopoverButtonTemplate() {
        return (parametersBundle_css.jsx(Button.Button, { icon: this.icon, endIcon: this.endIcon, accessibleName: this.accessibleName, accessibleNameRef: this.accessibleNameRef, accessibilityAttributes: this.accessibilityAttributes, tooltip: this.tooltip, design: this.design, disabled: this.disabled, hidden: this.hidden, class: "ui5-tb-popover-button ui5-tb-popover-item", "data-ui5-external-action-item-id": this._id, "data-ui5-stable": this.stableDomRef, onClick: (...args) => this.onClick(...args), children: this.text }));
    }

    Theme.p("@ui5/webcomponents-theming", "sap_horizon", async () => parametersBundle_css.defaultThemeBase);
    Theme.p("@ui5/webcomponents", "sap_horizon", async () => parametersBundle_css$1.defaultTheme);
    var ToolbarButtonPopoverCss = `:not([icon-only]).ui5-tb-popover-button::part(button){justify-content:start}
`;

    const registry = Theme.m("ToolbarItem.registry", new Map());
    const registerToolbarItem = (ElementClass) => {
        registry.set(ElementClass.getMetadata().getPureTag(), ElementClass);
    };
    const getRegisteredToolbarItem = (name) => {
        if (!registry.has(name)) {
            throw new Error(`No template found for ${name}`);
        }
        return registry.get(name);
    };
    const getRegisteredStyles = () => {
        return [...registry.values()].map((ElementClass) => ElementClass.styles);
    };

    var __decorate$2 = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    /**
     * @class
     *
     * ### Overview
     * The `ui5-toolbar-button` represents an abstract action,
     * used in the `ui5-toolbar`.
     *
     * ### ES6 Module Import
     * `import "@ui5/webcomponents/dist/ToolbarButton.js";`
     * @constructor
     * @abstract
     * @extends ToolbarItem
     * @public
     * @since 1.17.0
     */
    let ToolbarButton = class ToolbarButton extends ToolbarItem$1 {
        constructor() {
            super(...arguments);
            /**
             * Defines if the action is disabled.
             *
             * **Note:** a disabled action can't be pressed or focused, and it is not in the tab chain.
             * @default false
             * @public
             */
            this.disabled = false;
            /**
             * Defines the action design.
             * @default "Default"
             * @public
             */
            this.design = "Default";
            /**
             * Defines the additional accessibility attributes that will be applied to the component.
             *
             * The following fields are supported:
             *
             * - **expanded**: Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed.
             * Accepts the following string values: `true` or `false`
             *
             * - **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.
             * Accepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.
             *
             * - **controls**: Identifies the element (or elements) whose contents or presence are controlled by the button element.
             * Accepts a lowercase string value.
             *
             * @default {}
             * @public
             */
            this.accessibilityAttributes = {};
            /**
             * Defines if the toolbar button is hidden.
             * @private
             * @default false
             */
            this.hidden = false;
        }
        get styles() {
            return {
                width: this.width,
                display: this.hidden ? "none" : "inline-block",
            };
        }
        get containsText() {
            return true;
        }
        static get toolbarTemplate() {
            return ToolbarButtonTemplate;
        }
        static get toolbarPopoverTemplate() {
            return ToolbarPopoverButtonTemplate;
        }
        onClick(e) {
            e.stopImmediatePropagation();
            const prevented = !this.fireDecoratorEvent("click", { targetRef: e.target });
            if (!prevented && !this.preventOverflowClosing) {
                this.fireDecoratorEvent("close-overflow");
            }
        }
    };
    __decorate$2([
        webcomponentsBase.s({ type: Boolean })
    ], ToolbarButton.prototype, "disabled", void 0);
    __decorate$2([
        webcomponentsBase.s()
    ], ToolbarButton.prototype, "design", void 0);
    __decorate$2([
        webcomponentsBase.s()
    ], ToolbarButton.prototype, "icon", void 0);
    __decorate$2([
        webcomponentsBase.s()
    ], ToolbarButton.prototype, "endIcon", void 0);
    __decorate$2([
        webcomponentsBase.s()
    ], ToolbarButton.prototype, "tooltip", void 0);
    __decorate$2([
        webcomponentsBase.s()
    ], ToolbarButton.prototype, "accessibleName", void 0);
    __decorate$2([
        webcomponentsBase.s()
    ], ToolbarButton.prototype, "accessibleNameRef", void 0);
    __decorate$2([
        webcomponentsBase.s({ type: Object })
    ], ToolbarButton.prototype, "accessibilityAttributes", void 0);
    __decorate$2([
        webcomponentsBase.s()
    ], ToolbarButton.prototype, "text", void 0);
    __decorate$2([
        webcomponentsBase.s()
    ], ToolbarButton.prototype, "width", void 0);
    __decorate$2([
        webcomponentsBase.s({ type: Boolean })
    ], ToolbarButton.prototype, "hidden", void 0);
    ToolbarButton = __decorate$2([
        webcomponentsBase.m({
            tag: "ui5-toolbar-button",
            styles: ToolbarButtonPopoverCss,
        })
        /**
         * Fired when the component is activated either with a
         * mouse/tap or by using the Enter or Space key.
         *
         * **Note:** The event will not be fired if the `disabled`
         * property is set to `true`.
         * @public
         */
        ,
        eventStrict.l("click", {
            bubbles: true,
            cancelable: true,
        })
    ], ToolbarButton);
    registerToolbarItem(ToolbarButton);
    ToolbarButton.define();
    var ToolbarButton$1 = ToolbarButton;

    function ToolbarPopoverTemplate() {
        return (parametersBundle_css.jsx(Popover.Popover, { class: "ui5-overflow-popover", placement: "Bottom", horizontalAlign: "End", onClose: this.onOverflowPopoverClosed, onOpen: this.onOverflowPopoverOpened, accessibleName: this.accInfo.popover.accessibleName, hideArrow: true, children: parametersBundle_css.jsx("div", { class: {
                    "ui5-overflow-list": true,
                    "ui5-overflow-list--alignleft": this.hasItemWithText,
                }, children: this.overflowItems.map(item => (item.toolbarPopoverTemplate.call(item.context))) }) }));
    }

    function ToolbarTemplate() {
        return (parametersBundle_css.jsxs(parametersBundle_css.Fragment, { children: [parametersBundle_css.jsxs("div", { class: {
                        "ui5-tb-items": true,
                        "ui5-tb-items-full-width": this.hasFlexibleSpacers,
                    }, role: this.accInfo.root.role, "aria-label": this.accInfo.root.accessibleName, children: [this.standardItems.map(item => (item.toolbarTemplate.call(item.context))), parametersBundle_css.jsx(Button.Button, { "aria-hidden": this.hideOverflowButton, icon: overflow.iconOverflow, design: "Transparent", onClick: this.toggleOverflow, class: {
                                "ui5-tb-item": true,
                                "ui5-tb-overflow-btn": true,
                                "ui5-tb-overflow-btn-hidden": this.hideOverflowButton,
                            }, tooltip: this.accInfo.overflowButton.tooltip, accessibleName: this.accInfo.overflowButton.accessibleName, accessibilityAttributes: this.accInfo.overflowButton.accessibilityAttributes })] }), ToolbarPopoverTemplate.call(this)] }));
    }

    Theme.p("@ui5/webcomponents-theming", "sap_horizon", async () => parametersBundle_css.defaultThemeBase);
    Theme.p("@ui5/webcomponents", "sap_horizon", async () => parametersBundle_css$1.defaultTheme);
    var ToolbarCss = `:host(:not([hidden])){width:100%;height:var(--_ui5-v2-10-0-toolbar-height);display:flex;align-items:center;justify-content:flex-end;box-sizing:border-box;border-bottom:.0625rem solid var(--sapGroup_ContentBorderColor);padding:0 var(--_ui5-v2-10-0-toolbar-padding-left) 0 var(--_ui5-v2-10-0-toolbar-padding-right);background-color:var(--sapList_HeaderBackground)}:host([align-content="Start"]){justify-content:flex-start}.ui5-tb-items{width:100%;height:100%;display:inherit;align-items:inherit;justify-content:inherit}.ui5-tb-items-full-width{width:100%}.ui5-tb-item{flex-shrink:0}.ui5-tb-item{margin-inline-end:var(--_ui5-v2-10-0-toolbar-item-margin-right);margin-inline-start:var(--_ui5-v2-10-0-toolbar-item-margin-left)}.ui5-tb-overflow-btn,.ui5-tb-items:has(.ui5-tb-overflow-btn-hidden) .ui5-tb-item:nth-last-child(2){margin-inline-end:0;margin-inline-start:0}.ui5-tb-separator{height:var(--_ui5-v2-10-0-toolbar-separator-height);width:.0625rem;background:var(--sapToolbar_SeparatorColor);box-sizing:border-box}.ui5-tb-overflow-btn-hidden{visibility:hidden;position:absolute}:host([design="Transparent"]){background-color:transparent}
`;

    Theme.p("@ui5/webcomponents-theming", "sap_horizon", async () => parametersBundle_css.defaultThemeBase);
    Theme.p("@ui5/webcomponents", "sap_horizon", async () => parametersBundle_css$1.defaultTheme);
    var ToolbarPopoverCss = `.ui5-overflow-popover::part(content){padding:var(--_ui5-v2-10-0_toolbar_overflow_padding)}.ui5-overflow-list{display:flex;flex-direction:column;justify-content:center;align-items:center}.ui5-tb-popover-item{width:100%}.ui5-tb-popover-item:not(:last-child){margin-bottom:.25rem}.ui5-tb-separator-in-overflow{display:none;height:.0625rem;background:var(--sapToolbar_SeparatorColor);box-sizing:border-box}.ui5-tb-separator-in-overflow[visible]{display:block}
`;

    /**
     * Defines the priority of the toolbar item to go inside overflow popover.
     * @public
     */
    var ToolbarItemOverflowBehavior;
    (function (ToolbarItemOverflowBehavior) {
        /**
         * The item is presented inside the toolbar and goes in the popover, when there is not enough space.
         * @public
         */
        ToolbarItemOverflowBehavior["Default"] = "Default";
        /**
         * When set, the item will never go to the overflow popover.
         * @public
         */
        ToolbarItemOverflowBehavior["NeverOverflow"] = "NeverOverflow";
        /**
         * When set, the item will be always part of the overflow part of ui5-toolbar.
         * @public
         */
        ToolbarItemOverflowBehavior["AlwaysOverflow"] = "AlwaysOverflow";
    })(ToolbarItemOverflowBehavior || (ToolbarItemOverflowBehavior = {}));
    var ToolbarItemOverflowBehavior$1 = ToolbarItemOverflowBehavior;

    var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var Toolbar_1;
    function calculateCSSREMValue(styleSet, propertyName) {
        return Number(styleSet.getPropertyValue(propertyName).replace("rem", "")) * parseInt(getComputedStyle(document.body).getPropertyValue("font-size"));
    }
    function parsePxValue(styleSet, propertyName) {
        return Number(styleSet.getPropertyValue(propertyName).replace("px", ""));
    }
    /**
     * @class
     *
     * ### Overview
     *
     * The `ui5-toolbar` component is used to create a horizontal layout with items.
     * The items can be overflowing in a popover, when the space is not enough to show all of them.
     *
     * ### Keyboard Handling
     * The `ui5-toolbar` provides advanced keyboard handling.
     *
     * - The control is not interactive, but can contain of interactive elements
     * - [Tab] - iterates through elements
     *
     * ### ES6 Module Import
     * `import "@ui5/webcomponents/dist/Toolbar.js";`
     * @constructor
     * @extends UI5Element
     * @public
     * @since 1.17.0
     */
    let Toolbar = Toolbar_1 = class Toolbar extends webcomponentsBase.b {
        static get styles() {
            const styles = getRegisteredStyles();
            return [
                ToolbarCss,
                ToolbarPopoverCss,
                ...styles,
            ];
        }
        constructor() {
            super();
            /**
             * Indicated the direction in which the Toolbar items will be aligned.
             * @public
             * @default "End"
             */
            this.alignContent = "End";
            /**
             * Notifies the toolbar if it should show the items in a reverse way if Toolbar Popover needs to be placed on "Top" position.
             * @private
             */
            this.reverseOverflow = false;
            /**
             * Defines the toolbar design.
             * @public
             * @default "Solid"
             * @since 2.0.0
             */
            this.design = "Solid";
            this.popoverOpen = false;
            this.itemsToOverflow = [];
            this.itemsWidth = 0;
            this.minContentWidth = 0;
            this.itemsWidthMeasured = false;
            this.ITEMS_WIDTH_MAP = new Map();
            this._onResize = this.onResize.bind(this);
            this._onCloseOverflow = this.closeOverflow.bind(this);
        }
        /**
         * Read-only members
         */
        get overflowButtonSize() {
            return this.overflowButtonDOM?.getBoundingClientRect().width || 0;
        }
        get padding() {
            const toolbarComputedStyle = getComputedStyle(this.getDomRef());
            return calculateCSSREMValue(toolbarComputedStyle, Theme.d$2("--_ui5-toolbar-padding-left"))
                + calculateCSSREMValue(toolbarComputedStyle, Theme.d$2("--_ui5-toolbar-padding-right"));
        }
        get alwaysOverflowItems() {
            return this.items.filter((item) => item.overflowPriority === ToolbarItemOverflowBehavior$1.AlwaysOverflow);
        }
        get movableItems() {
            return this.items.filter((item) => item.overflowPriority !== ToolbarItemOverflowBehavior$1.AlwaysOverflow && item.overflowPriority !== ToolbarItemOverflowBehavior$1.NeverOverflow);
        }
        get overflowItems() {
            // spacers are ignored
            const overflowItems = this.getItemsInfo(this.itemsToOverflow.filter(item => !item.ignoreSpace));
            return this.reverseOverflow ? overflowItems.reverse() : overflowItems;
        }
        get standardItems() {
            return this.getItemsInfo(this.items.filter(item => this.itemsToOverflow.indexOf(item) === -1));
        }
        get hideOverflowButton() {
            return this.itemsToOverflow.filter(item => !(item.ignoreSpace || item.isSeparator)).length === 0;
        }
        get interactiveItemsCount() {
            return this.items.filter((item) => item.isInteractive).length;
        }
        /**
         * Accessibility
         */
        get hasAriaSemantics() {
            return this.interactiveItemsCount > 1;
        }
        get accessibleRole() {
            return this.hasAriaSemantics ? "toolbar" : undefined;
        }
        get ariaLabelText() {
            return this.hasAriaSemantics ? AccessibilityTextsHelper.A(this) : undefined;
        }
        get accInfo() {
            return {
                root: {
                    role: this.accessibleRole,
                    accessibleName: this.ariaLabelText,
                },
                overflowButton: {
                    accessibleName: Toolbar_1.i18nBundle.getText(i18nDefaults.TOOLBAR_OVERFLOW_BUTTON_ARIA_LABEL),
                    tooltip: Toolbar_1.i18nBundle.getText(i18nDefaults.TOOLBAR_OVERFLOW_BUTTON_ARIA_LABEL),
                    accessibilityAttributes: {
                        expanded: this.popoverOpen,
                        hasPopup: "menu",
                    },
                },
                popover: {
                    accessibleName: Toolbar_1.i18nBundle.getText(i18nDefaults.TOOLBAR_POPOVER_AVAILABLE_VALUES),
                },
            };
        }
        /**
         * Toolbar Overflow Popover
         */
        get overflowButtonDOM() {
            return this.shadowRoot.querySelector(".ui5-tb-overflow-btn");
        }
        get itemsDOM() {
            return this.shadowRoot.querySelector(".ui5-tb-items");
        }
        get hasItemWithText() {
            return this.itemsToOverflow.some((item) => item.containsText);
        }
        get hasFlexibleSpacers() {
            return this.items.some((item) => item.hasFlexibleWidth);
        }
        /**
         * Lifecycle methods
         */
        onEnterDOM() {
            webcomponentsBase.f.register(this, this._onResize);
        }
        onExitDOM() {
            webcomponentsBase.f.deregister(this, this._onResize);
        }
        onInvalidation(changeInfo) {
            if (changeInfo.reason === "childchange" && changeInfo.child === this.itemsToOverflow[0]) {
                this.onToolbarItemChange();
            }
        }
        onBeforeRendering() {
            this.detachListeners();
            this.attachListeners();
            this.preprocessItems();
        }
        async onAfterRendering() {
            await Theme.f();
            this.storeItemsWidth();
            this.processOverflowLayout();
        }
        /**
         * Returns if the overflow popup is open.
         * @public
         */
        isOverflowOpen() {
            const overflowPopover = this.getOverflowPopover();
            return overflowPopover.open;
        }
        openOverflow() {
            const overflowPopover = this.getOverflowPopover();
            overflowPopover.opener = this.overflowButtonDOM;
            overflowPopover.open = true;
            this.reverseOverflow = overflowPopover.actualPlacement === "Top";
        }
        closeOverflow() {
            const overflowPopover = this.getOverflowPopover();
            overflowPopover.open = false;
        }
        toggleOverflow() {
            if (this.popoverOpen) {
                this.closeOverflow();
            }
            else {
                this.openOverflow();
            }
        }
        getOverflowPopover() {
            return this.shadowRoot.querySelector(".ui5-overflow-popover");
        }
        /**
         * Layout management
         */
        processOverflowLayout() {
            if (this.offsetWidth === 0) {
                return;
            }
            const containerWidth = this.offsetWidth - this.padding;
            const contentWidth = this.itemsWidth;
            let overflowSpace = contentWidth - containerWidth + this.overflowButtonSize;
            if (contentWidth <= containerWidth) {
                overflowSpace = 0;
            }
            // skip calculation if the width has not been changed or if the items width has not been changed
            if (this.width === containerWidth && this.contentWidth === contentWidth) {
                return;
            }
            this.distributeItems(overflowSpace);
            this.width = containerWidth;
            this.contentWidth = contentWidth;
        }
        storeItemsWidth() {
            let totalWidth = 0, minWidth = 0;
            this.items.forEach((item) => {
                const itemWidth = this.getItemWidth(item);
                totalWidth += itemWidth;
                if (item.overflowPriority === ToolbarItemOverflowBehavior$1.NeverOverflow) {
                    minWidth += itemWidth;
                }
                this.ITEMS_WIDTH_MAP.set(item._id, itemWidth);
            });
            if (minWidth !== this.minContentWidth) {
                const spaceAroundContent = this.offsetWidth - this.getDomRef().offsetWidth;
                this.fireDecoratorEvent("_min-content-width-change", {
                    minWidth: minWidth + spaceAroundContent + this.overflowButtonSize,
                });
            }
            this.itemsWidth = totalWidth;
            this.minContentWidth = minWidth;
        }
        distributeItems(overflowSpace = 0) {
            const movableItems = this.movableItems.reverse();
            let index = 0;
            let currentItem = movableItems[index];
            this.itemsToOverflow = [];
            // distribute items that always overflow
            this.distributeItemsThatAlwaysOverflow();
            while (overflowSpace > 0 && currentItem) {
                this.itemsToOverflow.unshift(currentItem);
                overflowSpace -= this.getCachedItemWidth(currentItem?._id) || 0;
                index++;
                currentItem = movableItems[index];
            }
            // If the last bar item is a spacer, force it to the overflow even if there is enough space for it
            if (index < movableItems.length) {
                let lastItem = movableItems[index];
                while (index <= movableItems.length - 1 && lastItem.isSeparator) {
                    this.itemsToOverflow.unshift(lastItem);
                    index++;
                    lastItem = movableItems[index];
                }
            }
            this.setSeperatorsVisibilityInOverflow();
        }
        distributeItemsThatAlwaysOverflow() {
            this.alwaysOverflowItems.forEach((item) => {
                this.itemsToOverflow.push(item);
            });
        }
        setSeperatorsVisibilityInOverflow() {
            this.itemsToOverflow.forEach((item, idx, items) => {
                if (item.isSeparator) {
                    item.visible = this.shouldShowSeparatorInOverflow(idx, items);
                }
            });
        }
        shouldShowSeparatorInOverflow(separatorIdx, overflowItems) {
            let foundPrevNonSeparatorItem = false;
            let foundNextNonSeperatorItem = false;
            // search for non-separator item before and after the seperator
            overflowItems.forEach((item, idx) => {
                if (idx < separatorIdx && !item.isSeparator) {
                    foundPrevNonSeparatorItem = true;
                }
                if (idx > separatorIdx && !item.isSeparator) {
                    foundNextNonSeperatorItem = true;
                }
            });
            return foundPrevNonSeparatorItem && foundNextNonSeperatorItem;
        }
        /**
         * Event Handlers
         */
        onOverflowPopoverClosed() {
            this.popoverOpen = false;
        }
        onBeforeClose(e) {
            e.preventDefault();
        }
        onOverflowPopoverOpened() {
            this.popoverOpen = true;
        }
        onResize() {
            if (!this.itemsWidth) {
                return;
            }
            this.closeOverflow();
            this.processOverflowLayout();
        }
        /**
         * Private members
         */
        attachListeners() {
            this.addEventListener("close-overflow", this._onCloseOverflow);
        }
        detachListeners() {
            this.removeEventListener("close-overflow", this._onCloseOverflow);
        }
        onToolbarItemChange() {
            // some items were updated reset the cache and trigger a re-render
            this.itemsToOverflow = [];
            this.contentWidth = 0; // re-render
        }
        getItemsInfo(items) {
            return items.map((item) => {
                const ctor = item.constructor;
                const ElementClass = getRegisteredToolbarItem(ctor.getMetadata().getPureTag());
                if (!ElementClass) {
                    return null;
                }
                const toolbarItem = {
                    toolbarTemplate: ElementClass.toolbarTemplate,
                    toolbarPopoverTemplate: ElementClass.toolbarPopoverTemplate,
                    context: item,
                };
                return toolbarItem;
            }).filter(item => !!item);
        }
        getItemWidth(item) {
            // Spacer width - always 0 for flexible spacers, so that they shrink, otherwise - measure the width normally
            if (item.ignoreSpace || item.isSeparator) {
                return 0;
            }
            const id = item._id;
            // Measure rendered width for spacers with width, and for normal items
            const renderedItem = this.getRegisteredToolbarItemByID(id);
            let itemWidth = 0;
            if (renderedItem) {
                const ItemCSSStyleSet = getComputedStyle(renderedItem);
                itemWidth = renderedItem.offsetWidth + parsePxValue(ItemCSSStyleSet, "margin-inline-end")
                    + parsePxValue(ItemCSSStyleSet, "margin-inline-start");
            }
            else {
                itemWidth = this.getCachedItemWidth(id) || 0;
            }
            return Math.ceil(itemWidth);
        }
        getCachedItemWidth(id) {
            return this.ITEMS_WIDTH_MAP.get(id);
        }
        getItemByID(id) {
            return this.items.find(item => item._id === id);
        }
        getRegisteredToolbarItemByID(id) {
            return this.itemsDOM.querySelector(`[data-ui5-external-action-item-id="${id}"]`);
        }
        preprocessItems() {
            this.items.forEach(item => {
                item._getRealDomRef = () => this.getDomRef().querySelector(`[data-ui5-stable*=${item.stableDomRef}]`)
                    ?? this.getOverflowPopover().querySelector(`[data-ui5-stable*=${item.stableDomRef}]`);
            });
        }
    };
    __decorate$1([
        webcomponentsBase.s()
    ], Toolbar.prototype, "alignContent", void 0);
    __decorate$1([
        webcomponentsBase.s({ type: Number })
    ], Toolbar.prototype, "width", void 0);
    __decorate$1([
        webcomponentsBase.s({ type: Number })
    ], Toolbar.prototype, "contentWidth", void 0);
    __decorate$1([
        webcomponentsBase.s({ type: Boolean })
    ], Toolbar.prototype, "reverseOverflow", void 0);
    __decorate$1([
        webcomponentsBase.s()
    ], Toolbar.prototype, "accessibleName", void 0);
    __decorate$1([
        webcomponentsBase.s()
    ], Toolbar.prototype, "accessibleNameRef", void 0);
    __decorate$1([
        webcomponentsBase.s()
    ], Toolbar.prototype, "design", void 0);
    __decorate$1([
        webcomponentsBase.s({ type: Boolean })
    ], Toolbar.prototype, "popoverOpen", void 0);
    __decorate$1([
        webcomponentsBase.d({ "default": true, type: HTMLElement, invalidateOnChildChange: true })
    ], Toolbar.prototype, "items", void 0);
    __decorate$1([
        i18n.i("@ui5/webcomponents")
    ], Toolbar, "i18nBundle", void 0);
    Toolbar = Toolbar_1 = __decorate$1([
        webcomponentsBase.m({
            tag: "ui5-toolbar",
            languageAware: true,
            renderer: parametersBundle_css.d,
            template: ToolbarTemplate,
        })
        /**
         * @private
        */
        ,
        eventStrict.l("_min-content-width-change", {
            bubbles: true,
        })
    ], Toolbar);
    Toolbar.define();
    var Toolbar$1 = Toolbar;

    function UserSettingsDialogTemplate() {
        return (parametersBundle_css.jsxs(Dialog.Dialog, { class: "ui5-user-settings-dialog", open: this.open, stretch: true, accessibleName: this.accessibleNameText, "onui5-_collapse": this._handleCollapseClick, onOpen: this._handleDialogAfterOpen, onBeforeClose: this._handleDialogBeforeClose, onClose: this._handleDialogAfterClose, initialFocus: `setting-${this._selectedSetting?._id}`, children: [parametersBundle_css.jsxs("div", { class: "ui5-user-settings-root", children: [parametersBundle_css.jsxs("div", { class: "ui5-user-settings-side", "aria-orientation": "vertical", "aria-roledescription": this.ariaRoleDescList, children: [parametersBundle_css.jsxs("div", { class: "ui5-user-settings-side-header", children: [this.headerText &&
                                            parametersBundle_css.jsx(Title, { level: "H1", size: "H4", children: this.headerText }), this.showSearchField &&
                                            parametersBundle_css.jsx(Input.Input, { placeholder: "Search", type: "Search", class: "ui5-user-settings-side-search", onInput: this._handleInput, children: parametersBundle_css.jsx(Icon.Icon, { id: "searchFieldIcon", slot: "icon", name: search.search, showTooltip: true }) })] }), this._showNoSearchResult ?
                                    parametersBundle_css.jsx("div", { class: "ui5-user-settings-side-search", children: parametersBundle_css.jsx(Text, { children: this.noSearchResultsText }) })
                                    :
                                        renderList.call(this, this._filteredItems, "ui5-user-settings-side-items"), this._filteredFixedItems.length > 0 && renderList.call(this, this._filteredFixedItems, "ui5-user-settings-side-fixedItems")] }), parametersBundle_css.jsx("div", { class: "ui5-user-settings-content", children: parametersBundle_css.jsx("slot", { name: this._selectedItemSlotName }) })] }), parametersBundle_css.jsx(Toolbar$1, { slot: "footer", design: "Transparent", children: parametersBundle_css.jsx(ToolbarButton$1, { design: "Transparent", text: this.closeButtonText, tooltip: this.closeButtonText, onClick: this._handleCloseButtonClick }) })] }));
    }
    function renderList(items = [], classes) {
        return parametersBundle_css.jsx(List.List, { accessibleRole: "Menu", onItemClick: this._handleItemClick, class: classes, separators: "None", children: items.map(item => (parametersBundle_css.jsx(ListItemStandard.ListItemStandard, { id: `setting-${item._id}`, icon: item._icon, tooltip: item._tooltip, ref: this.captureRef.bind(item), selected: item.selected, disabled: item.disabled, accessibleName: item.ariaLabelledByText, type: this._showSettingWithNavigation ? "Navigation" : "Active", children: item.text }))) });
    }

    Theme.p("@ui5/webcomponents-theming", "sap_horizon", async () => parametersBundle_css.defaultThemeBase);
    Theme.p("@ui5/webcomponents-fiori", "sap_horizon", async () => parametersBundle_css$2.defaultTheme);
    var UserSettingsDialogCss = `.ui5-user-settings-dialog{max-width:calc(100% - 2px);max-height:calc(100% - 2px);width:100%;height:100%}.ui5-user-settings-dialog::part(content){padding:0}.ui5-user-settings-root{display:flex;height:100%}.ui5-user-settings-side{flex:1;box-sizing:border-box;display:flex;flex-direction:column;max-width:100%;overflow:hidden}.ui5-user-settings-side-header{display:flex;flex-direction:column;gap:.5rem;padding:1rem}.ui5-user-settings-side-search{width:100%}.ui5-user-settings-side-items,.ui5-user-settings-side-fixedItems{border-top:.0625rem solid var(--sapList_BorderColor)}.ui5-user-settings-side-items{flex:1;min-height:0}.ui5-user-settings-side-text{align-self:center}.ui5-user-settings-side-fixedItems :last-child{border-bottom:none}.ui5-user-settings-content{display:none;flex:1;background-color:var(--sapGroup_ContentBackground);height:100%;overflow:hidden}.ui5-user-settings-dialog[on-phone]{border-radius:0}@media screen and (width >= 37.5rem) and (width < 64rem){.ui5-user-settings-dialog:not([on-phone]){max-width:min(40rem,80%);max-height:min(42.5rem,88%)}}@media screen and (width < 64rem){:host([_collapsed]) .ui5-user-settings-content{display:block}:host([_collapsed]) .ui5-user-settings-side{display:none}}@media screen and (width >= 64rem){.ui5-user-settings-dialog{width:60rem;max-height:min(42.5rem,88%)}.ui5-user-settings-side{max-width:20rem}:dir(ltr) .ui5-user-settings-side{border-right:.0625rem solid var(--sapList_BorderColor)}:dir(rtl) .ui5-user-settings-side{border-left:.0625rem solid var(--sapList_BorderColor)}.ui5-user-settings-content{display:block}}
`;

    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var UserSettingsDialog_1;
    /**
     * @class
     * ### Overview
     *
     * The `ui5-user-settings-dialog` is an SAP Fiori-specific web component used in the `ui5-user-menu`.
     * It allows the user to easily view information and settings for an account.
     *
     * ### ES6 Module Import
     * `import "@ui5/webcomponents-fiori/dist/UserSettingsDialog.js";`
     *
     * @constructor
     * @extends UI5Element
     * @experimental
     * @public
     * @since 2.8.0
     */
    let UserSettingsDialog = UserSettingsDialog_1 = class UserSettingsDialog extends webcomponentsBase.b {
        constructor() {
            super(...arguments);
            /**
             * Defines, if the User Settings Dialog is opened.
             *
             * @default false
             * @public
             */
            this.open = false;
            /**
             * Defines if the Search Field would be displayed.
             *
             * **Note:** By default the Search Field is not displayed.
             * @default false
             * @public
             */
            this.showSearchField = false;
            /**
             * @private
             */
            this._searchValue = "";
            /**
             * @private
             */
            this._collapsed = false;
            /**
             * @private
             */
            this._filteredItems = [];
            /**
             * @private
             */
            this._filteredFixedItems = [];
            /**
             * @private
             */
            this._showNoSearchResult = false;
        }
        onBeforeRendering() {
            this._mediaRange = webcomponentsBase.i$2.getCurrentRange(webcomponentsBase.i$2.RANGESETS.RANGE_4STEPS);
            const searchValue = this._searchValue.toLowerCase();
            this._filteredItems = [];
            this._filteredFixedItems = [];
            this.items.forEach(item => {
                if (item.text.toLowerCase().includes(searchValue)) {
                    this._filteredItems.push(item);
                }
                if (item.selected) {
                    this._selectedSetting = item;
                }
            });
            this.fixedItems.forEach(item => {
                if (item.text.toLowerCase().includes(searchValue)) {
                    this._filteredFixedItems.push(item);
                }
                if (item.selected) {
                    this._selectedSetting = item;
                }
            });
            if (this._filteredItems.length === 0 && this._filteredFixedItems.length === 0) {
                this._showNoSearchResult = true;
            }
            else {
                this._showNoSearchResult = false;
            }
            if (!this._selectedSetting) {
                this._selectedSetting = this.items[0] || this.fixedItems[0];
            }
        }
        _handleItemClick(e) {
            const setting = e.detail.item;
            const settingItem = setting.associatedSettingItem;
            const eventPrevented = !this.fireDecoratorEvent("selection-change", {
                item: settingItem,
            });
            this._collapsed = true;
            if (!eventPrevented) {
                this.items.forEach(item => {
                    item.selected = false;
                });
                this.fixedItems.forEach(item => {
                    item.selected = false;
                });
                settingItem.selected = true;
            }
        }
        _handleDialogAfterOpen() {
            this.fireDecoratorEvent("open");
        }
        _handleDialogBeforeClose(e) {
            if (!e.detail.escPressed) {
                return;
            }
            const eventPrevented = !this.fireDecoratorEvent("before-close", e.detail);
            if (eventPrevented) {
                e.preventDefault();
            }
        }
        _handleDialogAfterClose() {
            this.open = false;
            this.fireDecoratorEvent("close");
        }
        get accessibleNameText() {
            return UserSettingsDialog_1.i18nBundle.getText(i18nDefaults$1.USER_SETTINGS_DIALOG_ACCESSIBLE_NAME);
        }
        get ariaRoleDescList() {
            return UserSettingsDialog_1.i18nBundle.getText(i18nDefaults$1.USER_SETTINGS_LIST_ARIA_ROLE_DESC);
        }
        get closeButtonText() {
            return UserSettingsDialog_1.i18nBundle.getText(i18nDefaults$1.USER_SETTINGS_DIALOG_CLOSE_BUTTON_TEXT);
        }
        get noSearchResultsText() {
            return UserSettingsDialog_1.i18nBundle.getText(i18nDefaults$1.USER_SETTINGS_DIALOG_NO_SEARCH_RESULTS_TEXT);
        }
        get _selectedItemSlotName() {
            return this._selectedSetting ? this._selectedSetting._individualSlot : "";
        }
        get _showSettingWithNavigation() {
            return (Theme.d$1() || (Theme.a$2() && !Theme.m$1())) || (this._mediaRange === "S" || this._mediaRange === "M");
        }
        _handleCloseButtonClick() {
            const eventPrevented = !this.fireDecoratorEvent("before-close", { escPressed: false });
            if (!eventPrevented) {
                this.open = false;
            }
        }
        _handleCollapseClick() {
            this._collapsed = false;
        }
        _handleInput(e) {
            this._searchValue = e.target.value;
        }
        captureRef(ref) {
            if (ref) {
                ref.associatedSettingItem = this;
            }
        }
    };
    __decorate([
        webcomponentsBase.s({ type: Boolean })
    ], UserSettingsDialog.prototype, "open", void 0);
    __decorate([
        webcomponentsBase.s({ type: String })
    ], UserSettingsDialog.prototype, "headerText", void 0);
    __decorate([
        webcomponentsBase.s({ type: Boolean })
    ], UserSettingsDialog.prototype, "showSearchField", void 0);
    __decorate([
        webcomponentsBase.d({
            "default": true,
            type: HTMLElement,
            individualSlots: true,
            invalidateOnChildChange: {
                properties: true,
                slots: true,
            },
        })
    ], UserSettingsDialog.prototype, "items", void 0);
    __decorate([
        webcomponentsBase.d({
            type: HTMLElement,
            individualSlots: true,
            invalidateOnChildChange: {
                properties: true,
                slots: true,
            },
        })
    ], UserSettingsDialog.prototype, "fixedItems", void 0);
    __decorate([
        webcomponentsBase.s({ type: String })
    ], UserSettingsDialog.prototype, "_searchValue", void 0);
    __decorate([
        webcomponentsBase.s({ type: Boolean })
    ], UserSettingsDialog.prototype, "_collapsed", void 0);
    __decorate([
        webcomponentsBase.s({ type: Object })
    ], UserSettingsDialog.prototype, "_selectedSetting", void 0);
    __decorate([
        webcomponentsBase.s({ type: Boolean })
    ], UserSettingsDialog.prototype, "_showNoSearchResult", void 0);
    __decorate([
        webcomponentsBase.s({ type: String })
    ], UserSettingsDialog.prototype, "_mediaRange", void 0);
    __decorate([
        i18n.i("@ui5/webcomponents-fiori")
    ], UserSettingsDialog, "i18nBundle", void 0);
    UserSettingsDialog = UserSettingsDialog_1 = __decorate([
        webcomponentsBase.m({
            tag: "ui5-user-settings-dialog",
            renderer: parametersBundle_css.d,
            template: UserSettingsDialogTemplate,
            styles: [UserSettingsDialogCss],
        })
        /**
         * Fired when an item is selected.
         * @param {UserSettingsItem} item The selected `user settings item`.
         * @public
         */
        ,
        eventStrict.l("selection-change", {
            cancelable: true,
        })
        /**
         * Fired when a settings dialog is open.
         * @public
         */
        ,
        eventStrict.l("open")
        /**
         * Fired before the settings dialog is closed.
         * @public
         */
        ,
        eventStrict.l("before-close", {
            cancelable: true,
        })
        /**
         * Fired when a settings dialog is closed.
         * @public
         */
        ,
        eventStrict.l("close")
    ], UserSettingsDialog);
    UserSettingsDialog.define();
    var UserSettingsDialog$1 = UserSettingsDialog;

    return UserSettingsDialog$1;

}));
