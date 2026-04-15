sap.ui.define(['exports', 'uxc/integration/thirdparty/webcomponents-fiori', 'uxc/integration/thirdparty/Theme', 'uxc/integration/thirdparty/getEffectiveScrollbarStyle', 'uxc/integration/thirdparty/event-strict', 'uxc/integration/thirdparty/parameters-bundle.css', 'uxc/integration/thirdparty/FocusableElements', 'uxc/integration/thirdparty/AccessibilityTextsHelper', 'uxc/integration/thirdparty/toLowercaseEnumValue', 'uxc/integration/thirdparty/parameters-bundle.css2', 'uxc/integration/thirdparty/Title'], (function (exports, webcomponentsBase, Theme, getEffectiveScrollbarStyle, eventStrict, parametersBundle_css, FocusableElements, AccessibilityTextsHelper, toLowercaseEnumValue, parametersBundle_css$1, Title) { 'use strict';

    const m$1=(t,a,e)=>Math.min(Math.max(t,a),Math.max(a,e));

    const r=()=>{const e=webcomponentsBase.t();return e&&typeof e.focus=="function"?e:null},a=e=>{const n=r();return n?l(e,n):false},l=(e,n)=>{let t=e;if(t.shadowRoot&&(t=Array.from(t.shadowRoot.children).find(c=>c.localName!=="style"),!t))return  false;if(t===n)return  true;const o=t.localName==="slot"?t.assignedNodes():t.children;return o?Array.from(o).some(s=>l(s,n)):false},m=(e,n,t)=>e>=t.left&&e<=t.right&&n>=t.top&&n<=t.bottom,f=(e,n)=>{let t,o;if(e instanceof MouseEvent)t=e.clientX,o=e.clientY;else {const s=e.touches[0];t=s.clientX,o=s.clientY;}return m(t,o,n)};function d(e){return "isUI5Element"in e&&"_show"in e}const i=e=>{const n=e.parentElement||e.getRootNode&&e.getRootNode().host;return n&&(d(n)||n===document.documentElement)?n:i(n)};

    function PopubBlockLayerTemplate() {
        return (parametersBundle_css.jsx("div", { class: "ui5-block-layer", onKeyDown: this._preventBlockLayerFocus, onMouseDown: this._preventBlockLayerFocus }));
    }

    function PopupTemplate(hooks) {
        return (parametersBundle_css.jsxs(parametersBundle_css.Fragment, { children: [PopubBlockLayerTemplate.call(this), parametersBundle_css.jsxs("section", { "root-element": true, style: this.styles.root, class: this.classes.root, role: this._role, "aria-modal": this._ariaModal, "aria-label": this._ariaLabel, "aria-labelledby": this._ariaLabelledBy, onKeyDown: this._onkeydown, onFocusOut: this._onfocusout, onMouseUp: this._onmouseup, onMouseDown: this._onmousedown, children: [parametersBundle_css.jsx("span", { class: "first-fe", "data-ui5-focus-trap": true, role: "none", tabIndex: 0, onFocusIn: this.forwardToLast }), (hooks?.beforeContent || beforeContent$1).call(this), parametersBundle_css.jsx("div", { style: this.styles.content, class: this.classes.content, onScroll: this._scroll, part: "content", children: parametersBundle_css.jsx("slot", {}) }), (hooks?.afterContent || afterContent$1).call(this), parametersBundle_css.jsx("span", { class: "last-fe", "data-ui5-focus-trap": true, role: "none", tabIndex: 0, onFocusIn: this.forwardToFirst })] })] }));
    }
    function beforeContent$1() { }
    function afterContent$1() { }

    /**
     * Popup accessible roles.
     * @public
     */
    var PopupAccessibleRole;
    (function (PopupAccessibleRole) {
        /**
         * Represents no ARIA role.
         * @public
         */
        PopupAccessibleRole["None"] = "None";
        /**
         * Represents the ARIA role "dialog".
         * @public
         */
        PopupAccessibleRole["Dialog"] = "Dialog";
        /**
         * Represents the ARIA role "alertdialog".
         * @public
         */
        PopupAccessibleRole["AlertDialog"] = "AlertDialog";
    })(PopupAccessibleRole || (PopupAccessibleRole = {}));
    var PopupAccessibleRole$1 = PopupAccessibleRole;

    const OpenedPopupsRegistry = Theme.m("OpenedPopupsRegistry", { openedRegistry: [] });
    const addOpenedPopup = (instance, parentPopovers = []) => {
        if (!OpenedPopupsRegistry.openedRegistry.some(popup => popup.instance === instance)) {
            OpenedPopupsRegistry.openedRegistry.push({
                instance,
                parentPopovers,
            });
        }
        _updateTopModalPopup();
        if (OpenedPopupsRegistry.openedRegistry.length === 1) {
            attachGlobalListener();
        }
    };
    const removeOpenedPopup = (instance) => {
        OpenedPopupsRegistry.openedRegistry = OpenedPopupsRegistry.openedRegistry.filter(el => {
            return el.instance !== instance;
        });
        _updateTopModalPopup();
        if (!OpenedPopupsRegistry.openedRegistry.length) {
            detachGlobalListener();
        }
    };
    const getOpenedPopups = () => {
        return [...OpenedPopupsRegistry.openedRegistry];
    };
    const _keydownListener = (event) => {
        if (!OpenedPopupsRegistry.openedRegistry.length) {
            return;
        }
        if (webcomponentsBase.H(event)) {
            event.stopPropagation();
            OpenedPopupsRegistry.openedRegistry[OpenedPopupsRegistry.openedRegistry.length - 1].instance.closePopup(true);
        }
    };
    const attachGlobalListener = () => {
        document.addEventListener("keydown", _keydownListener);
    };
    const detachGlobalListener = () => {
        document.removeEventListener("keydown", _keydownListener);
    };
    const _updateTopModalPopup = () => {
        let popup;
        let hasModal = false;
        for (let i = OpenedPopupsRegistry.openedRegistry.length - 1; i >= 0; i--) {
            popup = OpenedPopupsRegistry.openedRegistry[i].instance;
            if (!hasModal && popup.isModal) {
                popup.isTopModalPopup = true;
                hasModal = true;
            }
            else {
                popup.isTopModalPopup = false;
            }
        }
    };

    Theme.p("@ui5/webcomponents-theming", "sap_horizon", async () => parametersBundle_css.defaultThemeBase);
    Theme.p("@ui5/webcomponents", "sap_horizon", async () => parametersBundle_css$1.defaultTheme);
    var popupStlyes = `:host{min-width:1px;overflow:visible;border:none;inset:unset;margin:0;padding:0}
`;

    Theme.p("@ui5/webcomponents-theming", "sap_horizon", async () => parametersBundle_css.defaultThemeBase);
    Theme.p("@ui5/webcomponents", "sap_horizon", async () => parametersBundle_css$1.defaultTheme);
    var popupBlockLayerStyles = `.ui5-block-layer{position:fixed;z-index:-1;display:none;inset:-500px;outline:none;pointer-events:all}
`;

    Theme.p("@ui5/webcomponents-theming", "sap_horizon", async () => parametersBundle_css.defaultThemeBase);
    Theme.p("@ui5/webcomponents", "sap_horizon", async () => parametersBundle_css$1.defaultTheme);
    var globalStyles = `.ui5-popup-scroll-blocker{overflow:hidden}
`;

    var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var Popup_1;
    const createBlockingStyle = () => {
        if (!Theme.S("data-ui5-popup-scroll-blocker")) {
            Theme.c$1(globalStyles, "data-ui5-popup-scroll-blocker");
        }
    };
    createBlockingStyle();
    const pageScrollingBlockers = new Set();
    /**
     * @class
     * ### Overview
     * Base class for all popup Web Components.
     *
     * If you need to create your own popup-like custom UI5 Web Components.
     *
     * 1. The Popup class handles modality:
     *  - The "isModal" getter can be overridden by derivatives to provide their own conditions when they are modal or not
     *  - Derivatives may call the "blockPageScrolling" and "unblockPageScrolling" static methods to temporarily remove scrollbars on the html element
     *  - Derivatives may call the "openPopup" and "closePopup" methods which handle focus, manage the popup registry and for modal popups, manage the blocking layer
     *
     *  2. Provides blocking layer (relevant for modal popups only):
     *   - Controlled by the "open" and "close" methods
     *
     * 3. The Popup class "traps" focus:
     *  - Derivatives may call the "applyInitialFocus" method (usually when opening, to transfer focus inside the popup)
     *
     * 4. The template of this component exposes two inline partials you can override in derivatives:
     *  - beforeContent (upper part of the box, useful for header/title/close button)
     *  - afterContent (lower part, useful for footer/action buttons)
     * @constructor
     * @extends UI5Element
     * @public
     */
    let Popup = Popup_1 = class Popup extends webcomponentsBase.b {
        constructor() {
            super();
            /**
             * Defines if the focus should be returned to the previously focused element,
             * when the popup closes.
             * @default false
             * @public
             * @since 1.0.0-rc.8
            */
            this.preventFocusRestore = false;
            /**
             * Allows setting a custom role.
             * @default "Dialog"
             * @public
             * @since 1.10.0
             */
            this.accessibleRole = "Dialog";
            /**
             * Indicates whether initial focus should be prevented.
             * @public
             * @default false
             * @since 2.0.0
             */
            this.preventInitialFocus = false;
            /**
             * Indicates if the element is the top modal popup
             *
             * This property is calculated automatically
             * @private
             * @default false
             */
            this.isTopModalPopup = false;
            /**
             * @private
             */
            this.onPhone = false;
            /**
             * @private
             */
            this.onDesktop = false;
            this._opened = false;
            this._open = false;
            this._resizeHandler = this._resize.bind(this);
            this._getRealDomRef = () => {
                return this.shadowRoot.querySelector("[root-element]");
            };
        }
        onBeforeRendering() {
            this.onPhone = Theme.d$1();
            this.onDesktop = Theme.f$1();
        }
        onAfterRendering() {
            Theme.f().then(() => {
                this._updateMediaRange();
            });
        }
        onEnterDOM() {
            this.setAttribute("popover", "manual");
            webcomponentsBase.f.register(this, this._resizeHandler);
            if (Theme.f$1()) {
                this.setAttribute("desktop", "");
            }
            this.tabIndex = -1;
            if (this.open) {
                this.showPopover();
                this.openPopup();
            }
        }
        onExitDOM() {
            if (this._opened) {
                Popup_1.unblockPageScrolling(this);
                this._removeOpenedPopup();
            }
            webcomponentsBase.f.deregister(this, this._resizeHandler);
        }
        /**
         * Indicates if the element is open
         * @public
         * @default false
         * @since 1.2.0
         */
        set open(value) {
            if (this._open === value) {
                return;
            }
            this._open = value;
            if (value) {
                this.openPopup();
            }
            else {
                this.closePopup();
            }
        }
        get open() {
            return this._open;
        }
        async openPopup() {
            if (this._opened) {
                return;
            }
            const prevented = !this.fireDecoratorEvent("before-open");
            if (prevented) {
                this.open = false;
                return;
            }
            if (this.isModal) {
                Popup_1.blockPageScrolling(this);
            }
            this._focusedElementBeforeOpen = r();
            this._show();
            this._opened = true;
            if (this.getDomRef()) {
                this._updateMediaRange();
            }
            this._addOpenedPopup();
            this.open = true;
            // initial focus, if focused element is statically created
            await this.applyInitialFocus();
            await Theme.f();
            if (this.isConnected) {
                this.fireDecoratorEvent("open");
            }
        }
        _resize() {
            this._updateMediaRange();
        }
        /**
         * Prevents the user from interacting with the content under the block layer
         */
        _preventBlockLayerFocus(e) {
            e.preventDefault();
        }
        /**
         * Temporarily removes scrollbars from the html element
         * @protected
         */
        static blockPageScrolling(popup) {
            pageScrollingBlockers.add(popup);
            if (pageScrollingBlockers.size !== 1) {
                return;
            }
            document.documentElement.classList.add("ui5-popup-scroll-blocker");
        }
        /**
         * Restores scrollbars on the html element, if needed
         * @protected
         */
        static unblockPageScrolling(popup) {
            pageScrollingBlockers.delete(popup);
            if (pageScrollingBlockers.size !== 0) {
                return;
            }
            document.documentElement.classList.remove("ui5-popup-scroll-blocker");
        }
        _scroll(e) {
            this.fireDecoratorEvent("scroll", {
                scrollTop: e.target.scrollTop,
                targetRef: e.target,
            });
        }
        _onkeydown(e) {
            const isTabOutAttempt = e.target === this._root && webcomponentsBase.m$1(e);
            // if the popup is closed, focus is already moved, so Enter keydown may result in click on the newly focused element
            const isEnterOnClosedPopupChild = webcomponentsBase.b$1(e) && !this.open;
            if (isTabOutAttempt || isEnterOnClosedPopupChild) {
                e.preventDefault();
            }
        }
        _onfocusout(e) {
            // relatedTarget is the element, which will get focus. If no such element exists, focus the root.
            // This happens after the mouse is released in order to not interrupt text selection.
            if (!e.relatedTarget) {
                this._shouldFocusRoot = true;
            }
        }
        _onmousedown(e) {
            if (this.shadowRoot.contains(e.target)) {
                this._shouldFocusRoot = true;
            }
            else {
                this._shouldFocusRoot = false;
            }
        }
        _onmouseup() {
            if (this._shouldFocusRoot) {
                if (Theme.g()) {
                    this._root.focus();
                }
                this._shouldFocusRoot = false;
            }
        }
        /**
         * Focus trapping
         * @private
         */
        async forwardToFirst() {
            const firstFocusable = await FocusableElements.b(this);
            if (firstFocusable) {
                firstFocusable.focus();
            }
            else {
                this._root.focus();
            }
        }
        /**
         * Focus trapping
         * @private
         */
        async forwardToLast() {
            const lastFocusable = await FocusableElements.H(this);
            if (lastFocusable) {
                lastFocusable.focus();
            }
            else {
                this._root.focus();
            }
        }
        /**
         * Use this method to focus the element denoted by "initialFocus", if provided,
         * or the first focusable element otherwise.
         * @protected
         */
        async applyInitialFocus() {
            if (!this.preventInitialFocus) {
                await this.applyFocus();
            }
        }
        /**
         * Focuses the element denoted by `initialFocus`, if provided,
         * or the first focusable element otherwise.
         * @public
         * @returns Promise that resolves when the focus is applied
         */
        async applyFocus() {
            // do nothing if the standard HTML autofocus is used
            if (this.querySelector("[autofocus]")) {
                return;
            }
            await this._waitForDomRef();
            if (this.getRootNode() === this) {
                return;
            }
            let element;
            if (this.initialFocus) {
                element = this.getRootNode().getElementById(this.initialFocus)
                    || document.getElementById(this.initialFocus);
            }
            element = element || await FocusableElements.b(this) || this._root; // in case of no focusable content focus the root
            if (element) {
                if (element === this._root) {
                    element.tabIndex = -1;
                }
                element.focus();
            }
        }
        isFocusWithin() {
            return a(this._root);
        }
        _updateMediaRange() {
            this.mediaRange = webcomponentsBase.i$2.getCurrentRange(webcomponentsBase.i$2.RANGESETS.RANGE_4STEPS, this.getDomRef().offsetWidth);
        }
        /**
         * Adds the popup to the "opened popups registry"
         * @protected
         */
        _addOpenedPopup() {
            addOpenedPopup(this);
        }
        /**
         * Closes the popup.
         */
        closePopup(escPressed = false, preventRegistryUpdate = false, preventFocusRestore = false) {
            if (!this._opened) {
                return;
            }
            const prevented = !this.fireDecoratorEvent("before-close", { escPressed });
            if (prevented) {
                this.open = true;
                return;
            }
            this._opened = false;
            if (this.isModal) {
                Popup_1.unblockPageScrolling(this);
            }
            this.hide();
            this.open = false;
            if (!preventRegistryUpdate) {
                this._removeOpenedPopup();
            }
            if (!this.preventFocusRestore && !preventFocusRestore) {
                this.resetFocus();
            }
            this.fireDecoratorEvent("close");
        }
        /**
         * Removes the popup from the "opened popups registry"
         * @protected
         */
        _removeOpenedPopup() {
            removeOpenedPopup(this);
        }
        /**
         * Returns the focus to the previously focused element
         * @protected
         */
        resetFocus() {
            this._focusedElementBeforeOpen?.focus();
            this._focusedElementBeforeOpen = null;
        }
        /**
         * Sets "block" display to the popup. The property can be overriden by derivatives of Popup.
         * @protected
         */
        _show() {
            if (this.isConnected) {
                this.setAttribute("popover", "manual");
                this.showPopover();
            }
        }
        /**
         * Sets "none" display to the popup
         * @protected
         */
        hide() {
            this.isConnected && this.hidePopover();
        }
        /**
         * Ensures ariaLabel is never null or empty string
         * @protected
         */
        get _ariaLabel() {
            return AccessibilityTextsHelper.A(this);
        }
        get _root() {
            return this.shadowRoot.querySelector(".ui5-popup-root");
        }
        get _role() {
            return (this.accessibleRole === PopupAccessibleRole$1.None) ? undefined : toLowercaseEnumValue.n(this.accessibleRole);
        }
        get _ariaModal() {
            return this.accessibleRole === PopupAccessibleRole$1.None ? undefined : "true";
        }
        get contentDOM() {
            return this.shadowRoot.querySelector(".ui5-popup-content");
        }
        get styles() {
            return {
                root: {},
                content: {},
            };
        }
        get classes() {
            return {
                root: {
                    "ui5-popup-root": true,
                },
                content: {
                    "ui5-popup-content": true,
                },
            };
        }
    };
    __decorate$1([
        webcomponentsBase.s()
    ], Popup.prototype, "initialFocus", void 0);
    __decorate$1([
        webcomponentsBase.s({ type: Boolean })
    ], Popup.prototype, "preventFocusRestore", void 0);
    __decorate$1([
        webcomponentsBase.s()
    ], Popup.prototype, "accessibleName", void 0);
    __decorate$1([
        webcomponentsBase.s()
    ], Popup.prototype, "accessibleNameRef", void 0);
    __decorate$1([
        webcomponentsBase.s()
    ], Popup.prototype, "accessibleRole", void 0);
    __decorate$1([
        webcomponentsBase.s()
    ], Popup.prototype, "mediaRange", void 0);
    __decorate$1([
        webcomponentsBase.s({ type: Boolean })
    ], Popup.prototype, "preventInitialFocus", void 0);
    __decorate$1([
        webcomponentsBase.s({ type: Boolean, noAttribute: true })
    ], Popup.prototype, "isTopModalPopup", void 0);
    __decorate$1([
        webcomponentsBase.d({ type: HTMLElement, "default": true })
    ], Popup.prototype, "content", void 0);
    __decorate$1([
        webcomponentsBase.s({ type: Boolean })
    ], Popup.prototype, "onPhone", void 0);
    __decorate$1([
        webcomponentsBase.s({ type: Boolean })
    ], Popup.prototype, "onDesktop", void 0);
    __decorate$1([
        webcomponentsBase.s({ type: Boolean })
    ], Popup.prototype, "open", null);
    Popup = Popup_1 = __decorate$1([
        webcomponentsBase.m({
            renderer: parametersBundle_css.d,
            styles: [popupStlyes, popupBlockLayerStyles],
            template: PopupTemplate,
        })
        /**
         * Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening.
         * @public
         */
        ,
        eventStrict.l("before-open", {
            cancelable: true,
        })
        /**
         * Fired after the component is opened.
         * @public
         */
        ,
        eventStrict.l("open")
        /**
         * Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing.
         * @public
         * @param {boolean} escPressed Indicates that `ESC` key has triggered the event.
         */
        ,
        eventStrict.l("before-close", {
            cancelable: true,
        })
        /**
         * Fired after the component is closed.
         * @public
         */
        ,
        eventStrict.l("close")
        /**
         * Fired whenever the popup content area is scrolled
         * @private
         */
        ,
        eventStrict.l("scroll", {
            bubbles: true,
        })
    ], Popup);
    var Popup$1 = Popup;

    Theme.p("@ui5/webcomponents-theming", "sap_horizon", async () => parametersBundle_css.defaultThemeBase);
    Theme.p("@ui5/webcomponents", "sap_horizon", async () => parametersBundle_css$1.defaultTheme);
    var PopupsCommonCss = `:host{position:fixed;background:var(--sapGroup_ContentBackground);border-radius:var(--_ui5-v2-10-0_popup_border_radius);min-height:2rem;box-sizing:border-box}:host([open]){display:flex}.ui5-popup-root{background:inherit;border-radius:inherit;width:100%;box-sizing:border-box;display:flex;flex-direction:column;overflow:hidden;flex:1 1 auto;outline:none}.ui5-popup-root .ui5-popup-header-root{color:var(--sapPageHeader_TextColor);box-shadow:var(--_ui5-v2-10-0_popup_header_shadow);border-bottom:var(--_ui5-v2-10-0_popup_header_border)}.ui5-popup-content{color:var(--sapTextColor);flex:auto}.ui5-popup-content:focus{outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);outline-offset:calc(-1 * var(--sapContent_FocusWidth));border-radius:var(--_ui5-v2-10-0_popup_border_radius)}.ui5-popup-footer-root{background:var(--sapPageFooter_Background);border-top:1px solid var(--sapPageFooter_BorderColor);color:var(--sapPageFooter_TextColor)}.ui5-popup-header-root,.ui5-popup-footer-root,:host([header-text]) .ui5-popup-header-text{margin:0;display:flex;justify-content:center;align-items:center}.ui5-popup-header-root .ui5-popup-header-text{font-weight:var(--_ui5-v2-10-0_popup_header_font_weight)}.ui5-popup-content{overflow:auto;box-sizing:border-box}:host([header-text]) .ui5-popup-header-text{min-height:var(--_ui5-v2-10-0_popup_default_header_height);max-height:var(--_ui5-v2-10-0_popup_default_header_height);line-height:var(--_ui5-v2-10-0_popup_default_header_height);text-overflow:ellipsis;overflow:hidden;white-space:nowrap;max-width:100%;display:inline-flex;justify-content:var(--_ui5-v2-10-0_popup_header_prop_header_text_alignment)}:host([header-text]) .ui5-popup-header-root{justify-content:var(--_ui5-v2-10-0_popup_header_prop_header_text_alignment)}:host(:not([header-text])) .ui5-popup-header-text{display:none}:host([media-range="S"]) .ui5-popup-content{padding:1rem var(--_ui5-v2-10-0_popup_content_padding_s)}:host([media-range="M"]) .ui5-popup-content,:host([media-range="L"]) .ui5-popup-content{padding:1rem var(--_ui5-v2-10-0_popup_content_padding_m_l)}:host([media-range="XL"]) .ui5-popup-content{padding:1rem var(--_ui5-v2-10-0_popup_content_padding_xl)}.ui5-popup-header-root{background:var(--_ui5-v2-10-0_popup_header_background)}:host([media-range="S"]) .ui5-popup-header-root,:host([media-range="S"]) .ui5-popup-footer-root{padding-left:var(--_ui5-v2-10-0_popup_header_footer_padding_s);padding-right:var(--_ui5-v2-10-0_popup_header_footer_padding_s)}:host([media-range="M"]) .ui5-popup-header-root,:host([media-range="L"]) .ui5-popup-header-root,:host([media-range="M"]) .ui5-popup-footer-root,:host([media-range="L"]) .ui5-popup-footer-root{padding-left:var(--_ui5-v2-10-0_popup_header_footer_padding_m_l);padding-right:var(--_ui5-v2-10-0_popup_header_footer_padding_m_l)}:host([media-range="XL"]) .ui5-popup-header-root,:host([media-range="XL"]) .ui5-popup-footer-root{padding-left:var(--_ui5-v2-10-0_popup_header_footer_padding_xl);padding-right:var(--_ui5-v2-10-0_popup_header_footer_padding_xl)}
`;

    const e={toAttribute(t){return t instanceof HTMLElement?null:t},fromAttribute(t){return t}};

    /**
     * Popover placements.
     * @public
     */
    var PopoverPlacement;
    (function (PopoverPlacement) {
        /**
         * Popover will be placed at the start of the reference element.
         * @public
         */
        PopoverPlacement["Start"] = "Start";
        /**
         * Popover will be placed at the end of the reference element.
         * @public
         */
        PopoverPlacement["End"] = "End";
        /**
         * Popover will be placed at the top of the reference element.
         * @public
         */
        PopoverPlacement["Top"] = "Top";
        /**
         * Popover will be placed at the bottom of the reference element.
         * @public
         */
        PopoverPlacement["Bottom"] = "Bottom";
    })(PopoverPlacement || (PopoverPlacement = {}));
    var PopoverPlacement$1 = PopoverPlacement;

    /**
     * Popover vertical align types.
     * @public
     */
    var PopoverVerticalAlign;
    (function (PopoverVerticalAlign) {
        /**
         * @public
         */
        PopoverVerticalAlign["Center"] = "Center";
        /**
         * Popover will be placed at the top of the reference control.
         * @public
         */
        PopoverVerticalAlign["Top"] = "Top";
        /**
         * Popover will be placed at the bottom of the reference control.
         * @public
         */
        PopoverVerticalAlign["Bottom"] = "Bottom";
        /**
         * Popover will be streched
         * @public
         */
        PopoverVerticalAlign["Stretch"] = "Stretch";
    })(PopoverVerticalAlign || (PopoverVerticalAlign = {}));
    var PopoverVerticalAlign$1 = PopoverVerticalAlign;

    /**
     * Popover horizontal align types.
     * @public
     */
    var PopoverHorizontalAlign;
    (function (PopoverHorizontalAlign) {
        /**
         * Popover is centered.
         * @public
         */
        PopoverHorizontalAlign["Center"] = "Center";
        /**
         * Popover is aligned with the start of the target.
         * @public
         */
        PopoverHorizontalAlign["Start"] = "Start";
        /**
         * Popover is aligned with the end of the target.
         * @public
         */
        PopoverHorizontalAlign["End"] = "End";
        /**
         * Popover is stretched.
         * @public
         */
        PopoverHorizontalAlign["Stretch"] = "Stretch";
    })(PopoverHorizontalAlign || (PopoverHorizontalAlign = {}));
    var PopoverHorizontalAlign$1 = PopoverHorizontalAlign;

    let updateInterval;
    const intervalTimeout = 300;
    const openedRegistry = [];
    const repositionPopovers = () => {
        openedRegistry.forEach(popover => {
            popover.instance.reposition();
        });
    };
    const closePopoversIfLostFocus = () => {
        if (webcomponentsBase.t().tagName === "IFRAME") {
            getRegistry().reverse().forEach(popup => popup.instance.closePopup(false, false, true));
        }
    };
    const runUpdateInterval = () => {
        updateInterval = setInterval(() => {
            repositionPopovers();
            closePopoversIfLostFocus();
        }, intervalTimeout);
    };
    const stopUpdateInterval = () => {
        clearInterval(updateInterval);
    };
    const attachGlobalScrollHandler = () => {
        document.addEventListener("scroll", repositionPopovers, { capture: true });
    };
    const detachGlobalScrollHandler = () => {
        document.removeEventListener("scroll", repositionPopovers, { capture: true });
    };
    const attachScrollHandler = (popover) => {
        popover && popover.shadowRoot.addEventListener("scroll", repositionPopovers, { capture: true });
    };
    const detachScrollHandler = (popover) => {
        popover && popover.shadowRoot.removeEventListener("scroll", repositionPopovers, { capture: true });
    };
    const attachGlobalClickHandler = () => {
        document.addEventListener("mousedown", clickHandler, { capture: true });
    };
    const detachGlobalClickHandler = () => {
        document.removeEventListener("mousedown", clickHandler, { capture: true });
    };
    const clickHandler = (event) => {
        const openedPopups = getOpenedPopups();
        if (openedPopups.length === 0) {
            return;
        }
        const isTopPopupPopover = instanceOfPopover(openedPopups[openedPopups.length - 1].instance);
        if (!isTopPopupPopover) {
            return;
        }
        // loop all open popovers
        for (let i = (openedPopups.length - 1); i !== -1; i--) {
            const popup = openedPopups[i].instance;
            // if popup is modal, opener is clicked, popup is dialog skip closing
            if (popup.isModal || popup.isOpenerClicked(event)) {
                return;
            }
            if (f(event, popup.getBoundingClientRect())) {
                break;
            }
            popup.closePopup();
        }
    };
    const addOpenedPopover = (instance) => {
        const parentPopovers = getParentPopoversIfNested(instance);
        addOpenedPopup(instance, parentPopovers);
        openedRegistry.push({
            instance,
            parentPopovers,
        });
        attachScrollHandler(instance);
        if (openedRegistry.length === 1) {
            attachGlobalScrollHandler();
            attachGlobalClickHandler();
            runUpdateInterval();
        }
    };
    const removeOpenedPopover = (instance) => {
        const popoversToClose = [instance];
        for (let i = 0; i < openedRegistry.length; i++) {
            const indexOfCurrentInstance = openedRegistry[i].parentPopovers.indexOf(instance);
            if (openedRegistry[i].parentPopovers.length > 0 && indexOfCurrentInstance > -1) {
                popoversToClose.push(openedRegistry[i].instance);
            }
        }
        for (let i = popoversToClose.length - 1; i >= 0; i--) {
            for (let j = 0; j < openedRegistry.length; j++) {
                let indexOfItemToRemove = -1;
                if (popoversToClose[i] === openedRegistry[j].instance) {
                    indexOfItemToRemove = j;
                }
                if (indexOfItemToRemove >= 0) {
                    removeOpenedPopup(openedRegistry[indexOfItemToRemove].instance);
                    detachScrollHandler(openedRegistry[indexOfItemToRemove].instance);
                    const itemToClose = openedRegistry.splice(indexOfItemToRemove, 1);
                    itemToClose[0].instance.closePopup(false, true);
                }
            }
        }
        if (!openedRegistry.length) {
            detachGlobalScrollHandler();
            detachGlobalClickHandler();
            stopUpdateInterval();
        }
    };
    const getRegistry = () => {
        return openedRegistry;
    };
    const getParentPopoversIfNested = (instance) => {
        let currentElement = instance.parentNode;
        const parentPopovers = [];
        while (currentElement && currentElement.parentNode) {
            for (let i = 0; i < openedRegistry.length; i++) {
                if (currentElement === openedRegistry[i].instance) {
                    parentPopovers.push(currentElement);
                }
            }
            currentElement = currentElement.parentNode;
        }
        return parentPopovers;
    };

    function PopoverTemplate() {
        return PopupTemplate.call(this, {
            beforeContent,
            afterContent,
        });
    }
    function beforeContent() {
        return (parametersBundle_css.jsxs(parametersBundle_css.Fragment, { children: [parametersBundle_css.jsx("span", { class: "ui5-popover-arrow", style: this.styles.arrow }), this._displayHeader &&
                    parametersBundle_css.jsx("header", { class: "ui5-popup-header-root", id: "ui5-popup-header", part: "header", children: this.header.length ?
                            parametersBundle_css.jsx("slot", { name: "header" })
                            :
                                parametersBundle_css.jsx(Title, { level: "H1", class: "ui5-popup-header-text", children: this.headerText }) })] }));
    }
    function afterContent() {
        return (parametersBundle_css.jsx(parametersBundle_css.Fragment, { children: this._displayFooter && !!this.footer.length &&
                parametersBundle_css.jsx("footer", { class: "ui5-popup-footer-root", part: "footer", children: parametersBundle_css.jsx("slot", { name: "footer" }) }) }));
    }

    Theme.p("@ui5/webcomponents-theming", "sap_horizon", async () => parametersBundle_css.defaultThemeBase);
    Theme.p("@ui5/webcomponents", "sap_horizon", async () => parametersBundle_css$1.defaultTheme);
    var PopoverCss = `:host{box-shadow:var(--_ui5-v2-10-0_popover_box_shadow);background-color:var(--_ui5-v2-10-0_popover_background);max-width:calc(100vw - (100vw - 100%) - 2 * var(--_ui5-v2-10-0_popup_viewport_margin))}:host([hide-arrow]){box-shadow:var(--_ui5-v2-10-0_popover_no_arrow_box_shadow)}:host([actual-placement="Bottom"]) .ui5-popover-arrow{left:calc(50% - .5625rem);top:-.5rem;height:.5rem}:host([actual-placement="Bottom"]) .ui5-popover-arrow:after{margin:var(--_ui5-v2-10-0_popover_upward_arrow_margin)}:host([actual-placement="Start"]) .ui5-popover-arrow{top:calc(50% - .5625rem);right:-.5625rem;width:.5625rem}:host([actual-placement="Start"]) .ui5-popover-arrow:after{margin:var(--_ui5-v2-10-0_popover_right_arrow_margin)}:host([actual-placement="Top"]) .ui5-popover-arrow{left:calc(50% - .5625rem);height:.5625rem;top:100%}:host([actual-placement="Top"]) .ui5-popover-arrow:after{margin:var(--_ui5-v2-10-0_popover_downward_arrow_margin)}:host(:not([actual-placement])) .ui5-popover-arrow,:host([actual-placement="End"]) .ui5-popover-arrow{left:-.5625rem;top:calc(50% - .5625rem);width:.5625rem;height:1rem}:host(:not([actual-placement])) .ui5-popover-arrow:after,:host([actual-placement="End"]) .ui5-popover-arrow:after{margin:var(--_ui5-v2-10-0_popover_left_arrow_margin)}:host([hide-arrow]) .ui5-popover-arrow{display:none}.ui5-popover-root{min-width:6.25rem}.ui5-popover-arrow{pointer-events:none;display:block;width:1rem;height:1rem;position:absolute;overflow:hidden}.ui5-popover-arrow:after{content:"";display:block;width:.7rem;height:.7rem;background-color:var(--_ui5-v2-10-0_popover_background);box-shadow:var(--_ui5-v2-10-0_popover_box_shadow);transform:rotate(-45deg)}:host([modal])::backdrop{background-color:var(--_ui5-v2-10-0_popup_block_layer_background);opacity:var(--_ui5-v2-10-0_popup_block_layer_opacity)}:host([modal]) .ui5-block-layer{display:block}
`;

    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var Popover_1;
    const ARROW_SIZE = 8;
    /**
     * @class
     *
     * ### Overview
     *
     * The `ui5-popover` component displays additional information for an object
     * in a compact way and without leaving the page.
     * The Popover can contain various UI elements, such as fields, tables, images, and charts.
     * It can also include actions in the footer.
     *
     * ### Structure
     *
     * The popover has three main areas:
     *
     * - Header (optional)
     * - Content
     * - Footer (optional)
     *
     * **Note:** The `ui5-popover` is closed when the user clicks
     * or taps outside the popover
     * or selects an action within the popover. You can prevent this with the
     * `modal` property.
     *
     * ### ES6 Module Import
     *
     * `import "@ui5/webcomponents/dist/Popover.js";`
     *
     * @constructor
     * @extends Popup
     * @since 1.0.0-rc.6
     * @public
     * @csspart header - Used to style the header of the component
     * @csspart content - Used to style the content of the component
     * @csspart footer - Used to style the footer of the component
     */
    let Popover = Popover_1 = class Popover extends Popup$1 {
        static get VIEWPORT_MARGIN() {
            return 10; // px
        }
        constructor() {
            super();
            /**
             * Determines on which side the component is placed at.
             * @default "End"
             * @public
             */
            this.placement = "End";
            /**
             * Determines the horizontal alignment of the component.
             * @default "Center"
             * @public
             */
            this.horizontalAlign = "Center";
            /**
             * Determines the vertical alignment of the component.
             * @default "Center"
             * @public
             */
            this.verticalAlign = "Center";
            /**
             * Defines whether the component should close when
             * clicking/tapping outside of the popover.
             * If enabled, it blocks any interaction with the background.
             * @default false
             * @public
             */
            this.modal = false;
            /**
             * Determines whether the component arrow is hidden.
             * @default false
             * @public
             * @since 1.0.0-rc.15
             */
            this.hideArrow = false;
            /**
             * Determines if there is no enough space, the component can be placed
             * over the target.
             * @default false
             * @public
             */
            this.allowTargetOverlap = false;
            /**
             * Sets the X translation of the arrow
             * @private
             */
            this.arrowTranslateX = 0;
            /**
             * Sets the Y translation of the arrow
             * @private
             */
            this.arrowTranslateY = 0;
            /**
             * Returns the calculated placement depending on the free space
             * @private
             */
            this.actualPlacement = "End";
        }
        /**
         * Defines the ID or DOM Reference of the element at which the popover is shown.
         * When using this attribute in a declarative way, you must only use the `id` (as a string) of the element at which you want to show the popover.
         * You can only set the `opener` attribute to a DOM Reference when using JavaScript.
         * @public
         * @default undefined
         * @since 1.2.0
         */
        set opener(value) {
            if (this._opener === value) {
                return;
            }
            this._opener = value;
            if (value && this.open) {
                this.openPopup();
            }
        }
        get opener() {
            return this._opener;
        }
        async openPopup() {
            if (this._opened) {
                return;
            }
            const opener = this.getOpenerHTMLElement(this.opener);
            if (!opener) {
                return;
            }
            if (this.isOpenerOutsideViewport(opener.getBoundingClientRect())) {
                await Theme.f();
                this.open = false;
                this.fireDecoratorEvent("close");
                return;
            }
            this._openerRect = opener.getBoundingClientRect();
            await super.openPopup();
        }
        isOpenerClicked(e) {
            const target = e.target;
            const opener = this.getOpenerHTMLElement(this.opener);
            if (!opener) {
                return false;
            }
            if (target === opener) {
                return true;
            }
            if (this._isUI5AbstractElement(target) && target.getFocusDomRef() === opener) {
                return true;
            }
            return e.composedPath().indexOf(opener) > -1;
        }
        /**
         * Override for the _addOpenedPopup hook, which would otherwise just call addOpenedPopup(this)
         * @private
         */
        _addOpenedPopup() {
            addOpenedPopover(this);
        }
        /**
         * Override for the _removeOpenedPopup hook, which would otherwise just call removeOpenedPopup(this)
         * @private
         */
        _removeOpenedPopup() {
            removeOpenedPopover(this);
        }
        getOpenerHTMLElement(opener) {
            if (opener === undefined) {
                return opener;
            }
            if (opener instanceof HTMLElement) {
                return this._isUI5AbstractElement(opener) ? opener.getFocusDomRef() : opener;
            }
            let rootNode = this.getRootNode();
            if (rootNode === this) {
                rootNode = document;
            }
            let openerHTMLElement = rootNode.getElementById(opener);
            if (rootNode instanceof ShadowRoot && !openerHTMLElement) {
                openerHTMLElement = document.getElementById(opener);
            }
            if (openerHTMLElement) {
                return this._isUI5AbstractElement(openerHTMLElement) ? openerHTMLElement.getFocusDomRef() : openerHTMLElement;
            }
            return openerHTMLElement;
        }
        shouldCloseDueToOverflow(placement, openerRect) {
            const threshold = 32;
            const limits = {
                "Start": openerRect.right,
                "End": openerRect.left,
                "Top": openerRect.top,
                "Bottom": openerRect.bottom,
            };
            const opener = this.getOpenerHTMLElement(this.opener);
            const closedPopupParent = i(opener);
            let overflowsBottom = false;
            let overflowsTop = false;
            if (closedPopupParent instanceof Popover_1) {
                const contentRect = closedPopupParent.getBoundingClientRect();
                overflowsBottom = openerRect.top > (contentRect.top + contentRect.height);
                overflowsTop = (openerRect.top + openerRect.height) < contentRect.top;
            }
            return (limits[placement] < 0 || (limits[placement] + threshold > closedPopupParent.innerHeight)) || overflowsBottom || overflowsTop;
        }
        shouldCloseDueToNoOpener(openerRect) {
            return openerRect.top === 0
                && openerRect.bottom === 0
                && openerRect.left === 0
                && openerRect.right === 0;
        }
        isOpenerOutsideViewport(openerRect) {
            return openerRect.bottom < 0
                || openerRect.top > window.innerHeight
                || openerRect.right < 0
                || openerRect.left > window.innerWidth;
        }
        /**
         * @override
         */
        _resize() {
            super._resize();
            if (this.open) {
                this.reposition();
            }
        }
        reposition() {
            this._show();
        }
        async _show() {
            super._show();
            const opener = this.getOpenerHTMLElement(this.opener);
            if (opener && webcomponentsBase.v(opener) && !opener.getDomRef()) {
                return;
            }
            if (!this._opened) {
                this._showOutsideViewport();
            }
            const popoverSize = this.getPopoverSize();
            let placement;
            if (popoverSize.width === 0 || popoverSize.height === 0) {
                // size can not be determined properly at this point, popover will be shown with the next reposition
                return;
            }
            if (this.open) {
                // update opener rect if it was changed during the popover being opened
                this._openerRect = opener.getBoundingClientRect();
            }
            if (this._oldPlacement && this.shouldCloseDueToNoOpener(this._openerRect) && this.isFocusWithin()) {
                // reuse the old placement as the opener is not available,
                // but keep the popover open as the focus is within
                placement = this._oldPlacement;
            }
            else {
                placement = this.calcPlacement(this._openerRect, popoverSize);
            }
            if (this._preventRepositionAndClose || this.isOpenerOutsideViewport(this._openerRect)) {
                await this._waitForDomRef();
                return this.closePopup();
            }
            this._oldPlacement = placement;
            this.actualPlacement = placement.placement;
            let left = m$1(this._left, Popover_1.VIEWPORT_MARGIN, document.documentElement.clientWidth - popoverSize.width - Popover_1.VIEWPORT_MARGIN);
            if (this.actualPlacement === PopoverPlacement$1.End) {
                left = Math.max(left, this._left);
            }
            let top = m$1(this._top, Popover_1.VIEWPORT_MARGIN, document.documentElement.clientHeight - popoverSize.height - Popover_1.VIEWPORT_MARGIN);
            if (this.actualPlacement === PopoverPlacement$1.Bottom) {
                top = Math.max(top, this._top);
            }
            this.arrowTranslateX = placement.arrow.x;
            this.arrowTranslateY = placement.arrow.y;
            top = this._adjustForIOSKeyboard(top);
            Object.assign(this.style, {
                top: `${top}px`,
                left: `${left}px`,
            });
            if (this.horizontalAlign === PopoverHorizontalAlign$1.Stretch && this._width) {
                this.style.width = this._width;
            }
            if (this.verticalAlign === PopoverVerticalAlign$1.Stretch && this._height) {
                this.style.height = this._height;
            }
        }
        /**
         * Adjust the desired top position to compensate for shift of the screen
         * caused by opened keyboard on iOS which affects all elements with position:fixed.
         * @private
         * @param top The target top in px.
         * @returns The adjusted top in px.
         */
        _adjustForIOSKeyboard(top) {
            if (!Theme.w()) {
                return top;
            }
            const actualTop = Math.ceil(this.getBoundingClientRect().top);
            return top + (Number.parseInt(this.style.top || "0") - actualTop);
        }
        getPopoverSize() {
            const rect = this.getBoundingClientRect(), width = rect.width, height = rect.height;
            return { width, height };
        }
        _showOutsideViewport() {
            Object.assign(this.style, {
                top: "-10000px",
                left: "-10000px",
            });
        }
        _isUI5AbstractElement(el) {
            return webcomponentsBase.v(el) && el.isUI5AbstractElement;
        }
        get arrowDOM() {
            return this.shadowRoot.querySelector(".ui5-popover-arrow");
        }
        /**
         * @protected
         */
        focusOpener() {
            this.getOpenerHTMLElement(this.opener)?.focus();
        }
        /**
         * @private
         */
        calcPlacement(targetRect, popoverSize) {
            let left = Popover_1.VIEWPORT_MARGIN;
            let top = 0;
            const allowTargetOverlap = this.allowTargetOverlap;
            const clientWidth = document.documentElement.clientWidth;
            const clientHeight = document.documentElement.clientHeight;
            let maxHeight = clientHeight;
            let maxWidth = clientWidth;
            const placement = this.getActualPlacement(targetRect, popoverSize);
            this._preventRepositionAndClose = this.shouldCloseDueToNoOpener(targetRect) || this.shouldCloseDueToOverflow(placement, targetRect);
            const isVertical = placement === PopoverPlacement$1.Top
                || placement === PopoverPlacement$1.Bottom;
            if (this.horizontalAlign === PopoverHorizontalAlign$1.Stretch && isVertical) {
                popoverSize.width = targetRect.width;
                this._width = `${targetRect.width}px`;
            }
            else if (this.verticalAlign === PopoverVerticalAlign$1.Stretch && !isVertical) {
                popoverSize.height = targetRect.height;
                this._height = `${targetRect.height}px`;
            }
            const arrowOffset = this.hideArrow ? 0 : ARROW_SIZE;
            // calc popover positions
            switch (placement) {
                case PopoverPlacement$1.Top:
                    left = this.getVerticalLeft(targetRect, popoverSize);
                    top = Math.max(targetRect.top - popoverSize.height - arrowOffset, 0);
                    if (!allowTargetOverlap) {
                        maxHeight = targetRect.top - arrowOffset;
                    }
                    break;
                case PopoverPlacement$1.Bottom:
                    left = this.getVerticalLeft(targetRect, popoverSize);
                    top = targetRect.bottom + arrowOffset;
                    if (allowTargetOverlap) {
                        top = Math.max(Math.min(top, clientHeight - popoverSize.height), 0);
                    }
                    else {
                        maxHeight = clientHeight - targetRect.bottom - arrowOffset;
                    }
                    break;
                case PopoverPlacement$1.Start:
                    left = Math.max(targetRect.left - popoverSize.width - arrowOffset, 0);
                    top = this.getHorizontalTop(targetRect, popoverSize);
                    if (!allowTargetOverlap) {
                        maxWidth = targetRect.left - arrowOffset;
                    }
                    break;
                case PopoverPlacement$1.End:
                    left = targetRect.left + targetRect.width + arrowOffset;
                    top = this.getHorizontalTop(targetRect, popoverSize);
                    if (allowTargetOverlap) {
                        left = Math.max(Math.min(left, clientWidth - popoverSize.width), 0);
                    }
                    else {
                        maxWidth = clientWidth - targetRect.right - arrowOffset;
                    }
                    break;
            }
            // correct popover positions
            if (isVertical) {
                if (popoverSize.width > clientWidth || left < Popover_1.VIEWPORT_MARGIN) {
                    left = Popover_1.VIEWPORT_MARGIN;
                }
                else if (left + popoverSize.width > clientWidth - Popover_1.VIEWPORT_MARGIN) {
                    left = clientWidth - Popover_1.VIEWPORT_MARGIN - popoverSize.width;
                }
            }
            else {
                if (popoverSize.height > clientHeight || top < Popover_1.VIEWPORT_MARGIN) { // eslint-disable-line
                    top = Popover_1.VIEWPORT_MARGIN;
                }
                else if (top + popoverSize.height > clientHeight - Popover_1.VIEWPORT_MARGIN) {
                    top = clientHeight - Popover_1.VIEWPORT_MARGIN - popoverSize.height;
                }
            }
            this._maxHeight = Math.round(maxHeight - Popover_1.VIEWPORT_MARGIN);
            this._maxWidth = Math.round(maxWidth - Popover_1.VIEWPORT_MARGIN);
            if (this._left === undefined || Math.abs(this._left - left) > 1.5) {
                this._left = Math.round(left);
            }
            if (this._top === undefined || Math.abs(this._top - top) > 1.5) {
                this._top = Math.round(top);
            }
            const borderRadius = Number.parseInt(window.getComputedStyle(this).getPropertyValue("border-radius"));
            const arrowPos = this.getArrowPosition(targetRect, popoverSize, left, top, isVertical, borderRadius);
            this._left += this.getRTLCorrectionLeft();
            return {
                arrow: arrowPos,
                top: this._top,
                left: this._left,
                placement,
            };
        }
        getRTLCorrectionLeft() {
            return parseFloat(window.getComputedStyle(this).left) - this.getBoundingClientRect().left;
        }
        /**
         * Calculates the position for the arrow.
         * @private
         * @param targetRect BoundingClientRect of the target element
         * @param popoverSize Width and height of the popover
         * @param left Left offset of the popover
         * @param top Top offset of the popover
         * @param isVertical If the popover is positioned vertically to the target element
         * @param borderRadius Value of the border-radius property
         * @returns  Arrow's coordinates
         */
        getArrowPosition(targetRect, popoverSize, left, top, isVertical, borderRadius) {
            const horizontalAlign = this._actualHorizontalAlign;
            let arrowXCentered = horizontalAlign === PopoverHorizontalAlign$1.Center || horizontalAlign === PopoverHorizontalAlign$1.Stretch;
            if (horizontalAlign === PopoverHorizontalAlign$1.End && left <= targetRect.left) {
                arrowXCentered = true;
            }
            if (horizontalAlign === PopoverHorizontalAlign$1.Start && left + popoverSize.width >= targetRect.left + targetRect.width) {
                arrowXCentered = true;
            }
            let arrowTranslateX = 0;
            if (isVertical && arrowXCentered) {
                arrowTranslateX = targetRect.left + targetRect.width / 2 - left - popoverSize.width / 2;
            }
            let arrowTranslateY = 0;
            if (!isVertical) {
                arrowTranslateY = targetRect.top + targetRect.height / 2 - top - popoverSize.height / 2;
            }
            // Restricts the arrow's translate value along each dimension,
            // so that the arrow does not clip over the popover's rounded borders.
            const safeRangeForArrowY = popoverSize.height / 2 - borderRadius - ARROW_SIZE / 2 - 2;
            arrowTranslateY = m$1(arrowTranslateY, -safeRangeForArrowY, safeRangeForArrowY);
            const safeRangeForArrowX = popoverSize.width / 2 - borderRadius - ARROW_SIZE / 2 - 2;
            arrowTranslateX = m$1(arrowTranslateX, -safeRangeForArrowX, safeRangeForArrowX);
            return {
                x: Math.round(arrowTranslateX),
                y: Math.round(arrowTranslateY),
            };
        }
        /**
         * Fallbacks to new placement, prioritizing `Left` and `Right` placements.
         * @private
         */
        fallbackPlacement(clientWidth, clientHeight, targetRect, popoverSize) {
            if (targetRect.left > popoverSize.width) {
                return PopoverPlacement$1.Start;
            }
            if (clientWidth - targetRect.right > targetRect.left) {
                return PopoverPlacement$1.End;
            }
            if (clientHeight - targetRect.bottom > popoverSize.height) {
                return PopoverPlacement$1.Bottom;
            }
            if (clientHeight - targetRect.bottom < targetRect.top) {
                return PopoverPlacement$1.Top;
            }
        }
        getActualPlacement(targetRect, popoverSize) {
            const placement = this.placement;
            let actualPlacement = placement;
            const clientWidth = document.documentElement.clientWidth;
            const clientHeight = document.documentElement.clientHeight;
            switch (placement) {
                case PopoverPlacement$1.Top:
                    if (targetRect.top < popoverSize.height
                        && targetRect.top < clientHeight - targetRect.bottom) {
                        actualPlacement = PopoverPlacement$1.Bottom;
                    }
                    break;
                case PopoverPlacement$1.Bottom:
                    if (clientHeight - targetRect.bottom < popoverSize.height
                        && clientHeight - targetRect.bottom < targetRect.top) {
                        actualPlacement = PopoverPlacement$1.Top;
                    }
                    break;
                case PopoverPlacement$1.Start:
                    if (targetRect.left < popoverSize.width) {
                        actualPlacement = this.fallbackPlacement(clientWidth, clientHeight, targetRect, popoverSize) || placement;
                    }
                    break;
                case PopoverPlacement$1.End:
                    if (clientWidth - targetRect.right < popoverSize.width) {
                        actualPlacement = this.fallbackPlacement(clientWidth, clientHeight, targetRect, popoverSize) || placement;
                    }
                    break;
            }
            return actualPlacement;
        }
        getVerticalLeft(targetRect, popoverSize) {
            const horizontalAlign = this._actualHorizontalAlign;
            let left = Popover_1.VIEWPORT_MARGIN;
            switch (horizontalAlign) {
                case PopoverHorizontalAlign$1.Center:
                case PopoverHorizontalAlign$1.Stretch:
                    left = targetRect.left - (popoverSize.width - targetRect.width) / 2;
                    break;
                case PopoverHorizontalAlign$1.Start:
                    left = targetRect.left;
                    break;
                case PopoverHorizontalAlign$1.End:
                    left = targetRect.right - popoverSize.width;
                    break;
            }
            return left;
        }
        getHorizontalTop(targetRect, popoverSize) {
            let top = 0;
            switch (this.verticalAlign) {
                case PopoverVerticalAlign$1.Center:
                case PopoverVerticalAlign$1.Stretch:
                    top = targetRect.top - (popoverSize.height - targetRect.height) / 2;
                    break;
                case PopoverVerticalAlign$1.Top:
                    top = targetRect.top;
                    break;
                case PopoverVerticalAlign$1.Bottom:
                    top = targetRect.bottom - popoverSize.height;
                    break;
            }
            return top;
        }
        get isModal() {
            return this.modal;
        }
        get _ariaLabelledBy() {
            if (!this._ariaLabel && this._displayHeader) {
                return "ui5-popup-header";
            }
            return undefined;
        }
        get styles() {
            return {
                ...super.styles,
                root: {
                    "max-height": this._maxHeight ? `${this._maxHeight}px` : "",
                    "max-width": this._maxWidth ? `${this._maxWidth}px` : "",
                },
                arrow: {
                    transform: `translate(${this.arrowTranslateX}px, ${this.arrowTranslateY}px)`,
                },
            };
        }
        get classes() {
            const allClasses = super.classes;
            allClasses.root["ui5-popover-root"] = true;
            return allClasses;
        }
        /**
         * Hook for descendants to hide header.
         */
        get _displayHeader() {
            return !!(this.header.length || this.headerText);
        }
        /**
         * Hook for descendants to hide footer.
         */
        get _displayFooter() {
            return true;
        }
        get _actualHorizontalAlign() {
            if (this.effectiveDir === "rtl") {
                if (this.horizontalAlign === PopoverHorizontalAlign$1.Start) {
                    return PopoverHorizontalAlign$1.End;
                }
                if (this.horizontalAlign === PopoverHorizontalAlign$1.End) {
                    return PopoverHorizontalAlign$1.Start;
                }
            }
            return this.horizontalAlign;
        }
    };
    __decorate([
        webcomponentsBase.s()
    ], Popover.prototype, "headerText", void 0);
    __decorate([
        webcomponentsBase.s()
    ], Popover.prototype, "placement", void 0);
    __decorate([
        webcomponentsBase.s()
    ], Popover.prototype, "horizontalAlign", void 0);
    __decorate([
        webcomponentsBase.s()
    ], Popover.prototype, "verticalAlign", void 0);
    __decorate([
        webcomponentsBase.s({ type: Boolean })
    ], Popover.prototype, "modal", void 0);
    __decorate([
        webcomponentsBase.s({ type: Boolean })
    ], Popover.prototype, "hideArrow", void 0);
    __decorate([
        webcomponentsBase.s({ type: Boolean })
    ], Popover.prototype, "allowTargetOverlap", void 0);
    __decorate([
        webcomponentsBase.s({ type: Number, noAttribute: true })
    ], Popover.prototype, "arrowTranslateX", void 0);
    __decorate([
        webcomponentsBase.s({ type: Number, noAttribute: true })
    ], Popover.prototype, "arrowTranslateY", void 0);
    __decorate([
        webcomponentsBase.s()
    ], Popover.prototype, "actualPlacement", void 0);
    __decorate([
        webcomponentsBase.s({ type: Number, noAttribute: true })
    ], Popover.prototype, "_maxHeight", void 0);
    __decorate([
        webcomponentsBase.s({ type: Number, noAttribute: true })
    ], Popover.prototype, "_maxWidth", void 0);
    __decorate([
        webcomponentsBase.d({ type: HTMLElement })
    ], Popover.prototype, "header", void 0);
    __decorate([
        webcomponentsBase.d({ type: HTMLElement })
    ], Popover.prototype, "footer", void 0);
    __decorate([
        webcomponentsBase.s({ converter: e })
    ], Popover.prototype, "opener", null);
    Popover = Popover_1 = __decorate([
        webcomponentsBase.m({
            tag: "ui5-popover",
            styles: [
                Popup$1.styles,
                PopupsCommonCss,
                PopoverCss,
                getEffectiveScrollbarStyle.a(),
            ],
            template: PopoverTemplate,
        })
    ], Popover);
    const instanceOfPopover = (object) => {
        return "opener" in object;
    };
    Popover.define();
    var Popover$1 = Popover;

    exports.Popover = Popover$1;
    exports.PopoverHorizontalAlign = PopoverHorizontalAlign$1;
    exports.PopoverPlacement = PopoverPlacement$1;
    exports.PopoverTemplate = PopoverTemplate;
    exports.Popup = Popup$1;
    exports.PopupAccessibleRole = PopupAccessibleRole$1;
    exports.PopupTemplate = PopupTemplate;
    exports.PopupsCommonCss = PopupsCommonCss;
    exports.e = e;
    exports.instanceOfPopover = instanceOfPopover;
    exports.m = m$1;

}));
