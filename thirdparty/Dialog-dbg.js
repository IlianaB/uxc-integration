sap.ui.define(['exports', 'uxc/integration/thirdparty/webcomponents-fiori', 'uxc/integration/thirdparty/Popover2', 'uxc/integration/thirdparty/getEffectiveScrollbarStyle', 'uxc/integration/thirdparty/decline', 'uxc/integration/thirdparty/i18n2', 'uxc/integration/thirdparty/toLowercaseEnumValue', 'uxc/integration/thirdparty/Theme', 'uxc/integration/thirdparty/information', 'uxc/integration/thirdparty/i18n-defaults2', 'uxc/integration/thirdparty/parameters-bundle.css', 'uxc/integration/thirdparty/Icons', 'uxc/integration/thirdparty/Title', 'uxc/integration/thirdparty/Icon', 'uxc/integration/thirdparty/parameters-bundle.css2'], (function (exports, webcomponentsBase, Popover, getEffectiveScrollbarStyle, decline, i18n, toLowercaseEnumValue, Theme, information, i18nDefaults, parametersBundle_css, Icons, Title, Icon, parametersBundle_css$1) { 'use strict';

	const name$1 = "resize-corner";
	const pathData$1 = "M384 160v32q0 12-10 22L182 406q-10 10-22 10h-32zM224 416l160-160v32q0 12-10 22l-96 96q-10 10-22 10h-32zm160-64v32q0 12-10 22t-22 10h-32z";
	const ltr$1 = false;
	const collection$1 = "SAP-icons-v4";
	const packageName$1 = "@ui5/webcomponents-icons";

	Icons.f(name$1, { pathData: pathData$1, ltr: ltr$1, collection: collection$1, packageName: packageName$1 });

	const name = "resize-corner";
	const pathData = "M282 416q-11 0-18.5-7.5T256 390t7-18l109-109q7-7 18-7t18.5 7.5T416 282t-7 18L300 409q-7 7-18 7zm-160 0q-11 0-18.5-7.5T96 390t7-18l269-269q7-7 18-7t18.5 7.5T416 122t-7 18L140 409q-7 7-18 7z";
	const ltr = false;
	const collection = "SAP-icons-v5";
	const packageName = "@ui5/webcomponents-icons";

	Icons.f(name, { pathData, ltr, collection, packageName });

	var resizeCorner = "resize-corner";

	function DialogTemplate() {
	    return Popover.PopupTemplate.call(this, {
	        beforeContent,
	        afterContent,
	    });
	}
	function beforeContent() {
	    return (parametersBundle_css.jsx(parametersBundle_css.Fragment, { children: !!this._displayHeader &&
	            parametersBundle_css.jsx("header", { children: parametersBundle_css.jsxs("div", { class: "ui5-popup-header-root", id: "ui5-popup-header", role: "group", "aria-describedby": this.effectiveAriaDescribedBy, "aria-roledescription": this.ariaRoleDescriptionHeaderText, tabIndex: this._headerTabIndex, onKeyDown: this._onDragOrResizeKeyDown, onMouseDown: this._onDragMouseDown, part: "header", children: [this.hasValueState &&
	                            parametersBundle_css.jsx(Icon.Icon, { class: "ui5-dialog-value-state-icon", name: this._dialogStateIcon }), this.header.length ?
	                            parametersBundle_css.jsx("slot", { name: "header" })
	                            :
	                                parametersBundle_css.jsx(Title, { level: "H1", id: "ui5-popup-header-text", class: "ui5-popup-header-text", children: this.headerText }), this.resizable ?
	                            this.draggable ?
	                                parametersBundle_css.jsx("span", { id: `${this._id}-descr`, "aria-hidden": "true", class: "ui5-hidden-text", children: this.ariaDescribedByHeaderTextDraggableAndResizable })
	                                :
	                                    parametersBundle_css.jsx("span", { id: `${this._id}-descr`, "aria-hidden": "true", class: "ui5-hidden-text", children: this.ariaDescribedByHeaderTextResizable })
	                            :
	                                this.draggable &&
	                                    parametersBundle_css.jsx("span", { id: `${this._id}-descr`, "aria-hidden": "true", class: "ui5-hidden-text", children: this.ariaDescribedByHeaderTextDraggable })] }) }) }));
	}
	function afterContent() {
	    return (parametersBundle_css.jsxs(parametersBundle_css.Fragment, { children: [!!this.footer.length &&
	                parametersBundle_css.jsx("footer", { class: "ui5-popup-footer-root", part: "footer", children: parametersBundle_css.jsx("slot", { name: "footer" }) }), this._showResizeHandle &&
	                parametersBundle_css.jsx("div", { class: "ui5-popup-resize-handle", onMouseDown: this._onResizeMouseDown, children: parametersBundle_css.jsx(Icon.Icon, { name: resizeCorner }) })] }));
	}

	Theme.p("@ui5/webcomponents-theming", "sap_horizon", async () => parametersBundle_css.defaultThemeBase);
	Theme.p("@ui5/webcomponents", "sap_horizon", async () => parametersBundle_css$1.defaultTheme);
	var dialogCSS = `.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host{min-width:20rem;min-height:6rem;max-height:94%;max-width:90%;flex-direction:column;box-shadow:var(--sapContent_Shadow3);border-radius:var(--sapElement_BorderCornerRadius)}:host([stretch]){width:90%;height:94%}:host([stretch][on-phone]){width:100%;height:100%;max-height:100%;max-width:100%;border-radius:0;min-width:0}:host([draggable]) .ui5-popup-header-root,:host([draggable]) ::slotted([slot="header"]){cursor:move}:host([draggable]) .ui5-popup-header-root *{cursor:auto}:host([draggable]) .ui5-popup-root{user-select:text}::slotted([slot="header"]){max-width:100%}.ui5-popup-root{display:flex;flex-direction:column;max-width:100vw}.ui5-popup-header-root{position:relative}.ui5-popup-header-root:before{content:"";position:absolute;inset-block-start:auto;inset-block-end:0;inset-inline-start:0;inset-inline-end:0;height:var(--_ui5-v2-10-0_dialog_header_state_line_height);background:var(--sapObjectHeader_BorderColor)}:host([state="Negative"]) .ui5-popup-header-root:before{background:var(--sapErrorBorderColor)}:host([state="Information"]) .ui5-popup-header-root:before{background:var(--sapInformationBorderColor)}:host([state="Positive"]) .ui5-popup-header-root:before{background:var(--sapSuccessBorderColor)}:host([state="Critical"]) .ui5-popup-header-root:before{background:var(--sapWarningBorderColor)}.ui5-dialog-value-state-icon{margin-inline-end:.5rem;flex-shrink:0}:host([state="Negative"]) .ui5-dialog-value-state-icon{color:var(--_ui5-v2-10-0_dialog_header_error_state_icon_color)}:host([state="Information"]) .ui5-dialog-value-state-icon{color:var(--_ui5-v2-10-0_dialog_header_information_state_icon_color)}:host([state="Positive"]) .ui5-dialog-value-state-icon{color:var(--_ui5-v2-10-0_dialog_header_success_state_icon_color)}:host([state="Critical"]) .ui5-dialog-value-state-icon{color:var(--_ui5-v2-10-0_dialog_header_warning_state_icon_color)}.ui5-popup-header-root{outline:none}:host([desktop]) .ui5-popup-header-root:focus:after,.ui5-popup-header-root:focus-visible:after{content:"";position:absolute;left:var(--_ui5-v2-10-0_dialog_header_focus_left_offset);bottom:var(--_ui5-v2-10-0_dialog_header_focus_bottom_offset);right:var(--_ui5-v2-10-0_dialog_header_focus_right_offset);top:var(--_ui5-v2-10-0_dialog_header_focus_top_offset);border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);border-radius:var(--_ui5-v2-10-0_dialog_header_border_radius) var(--_ui5-v2-10-0_dialog_header_border_radius) 0 0;pointer-events:none}:host([stretch]) .ui5-popup-content{width:100%;height:100%}.ui5-popup-content{min-height:var(--_ui5-v2-10-0_dialog_content_min_height);flex:1 1 auto}.ui5-popup-resize-handle{position:absolute;bottom:-.5rem;inset-inline-end:-.5rem;cursor:var(--_ui5-v2-10-0_dialog_resize_cursor);width:1.5rem;height:1.5rem;border-radius:50%}.ui5-popup-resize-handle [ui5-icon]{color:var(--sapButton_Lite_TextColor)}::slotted([slot="footer"]){height:var(--_ui5-v2-10-0_dialog_footer_height)}::slotted([slot="footer"][ui5-bar][design="Footer"]){border-top:none}::slotted([slot="header"][ui5-bar]){box-shadow:none}::slotted([slot="footer"][ui5-toolbar]){border:0}:host::backdrop{background-color:var(--_ui5-v2-10-0_popup_block_layer_background);opacity:var(--_ui5-v2-10-0_popup_block_layer_opacity)}.ui5-block-layer{display:block}
`;

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var Dialog_1;
	/**
	 * Defines the step size at which this component would change by when being dragged or resized with the keyboard.
	 */
	const STEP_SIZE = 16;
	/**
	 * Defines the icons corresponding to the dialog's state.
	 */
	const ICON_PER_STATE = {
	    [decline.o.Negative]: "error",
	    [decline.o.Critical]: "alert",
	    [decline.o.Positive]: "sys-enter-2",
	    [decline.o.Information]: "information",
	};
	/**
	 * @class
	 * ### Overview
	 * The `ui5-dialog` component is used to temporarily display some information in a
	 * size-limited window in front of the regular app screen.
	 * It is used to prompt the user for an action or a confirmation.
	 * The `ui5-dialog` interrupts the current app processing as it is the only focused UI element and
	 * the main screen is dimmed/blocked.
	 * The dialog combines concepts known from other technologies where the windows have
	 * names such as dialog box, dialog window, pop-up, pop-up window, alert box, or message box.
	 *
	 * The `ui5-dialog` is modal, which means that a user action is required before it is possible to return to the parent window.
	 * To open multiple dialogs, each dialog element should be separate in the markup. This will ensure the correct modal behavior. Avoid nesting dialogs within each other.
	 * The content of the `ui5-dialog` is fully customizable.
	 *
	 * ### Structure
	 * A `ui5-dialog` consists of a header, content, and a footer for action buttons.
	 * The `ui5-dialog` is usually displayed at the center of the screen.
	 * Its position can be changed by the user. To enable this, you need to set the property `draggable` accordingly.

	 *
	 * ### Responsive Behavior
	 * The `stretch` property can be used to stretch the `ui5-dialog` to full screen. For better usability, it's recommended to stretch the dialog to full screen on phone devices.
	 *
	 * **Note:** When a `ui5-bar` is used in the header or in the footer, you should remove the default dialog's paddings.
	 *
	 * For more information see the sample "Bar in Header/Footer".

	 * ### Keyboard Handling
	 *
	 * #### Basic Navigation
	 * When the `ui5-dialog` has the `draggable` property set to `true` and the header is focused, the user can move the dialog
	 * with the following keyboard shortcuts:
	 *
	 * - [Up] or [Down] arrow keys - Move the dialog up/down.
	 * - [Left] or [Right] arrow keys - Move the dialog left/right.
	 *
	 * #### Resizing
	 * When the `ui5-dialog` has the `resizable` property set to `true` and the header is focused, the user can change the size of the dialog
	 * with the following keyboard shortcuts:
	 *
	 * - [Shift] + [Up] or [Down] - Decrease/Increase the height of the dialog.
	 * - [Shift] + [Left] or [Right] - Decrease/Increase the width of the dialog.
	 *
	 * ### ES6 Module Import
	 *
	 * `import "@ui5/webcomponents/dist/Dialog";`
	 *
	 * @constructor
	 * @extends Popup
	 * @public
	 * @csspart header - Used to style the header of the component
	 * @csspart content - Used to style the content of the component
	 * @csspart footer - Used to style the footer of the component
	 */
	let Dialog = Dialog_1 = class Dialog extends Popover.Popup {
	    constructor() {
	        super();
	        /**
	         * Determines if the dialog will be stretched to full screen on mobile. On desktop,
	         * the dialog will be stretched to approximately 90% of the viewport.
	         *
	         * **Note:** For better usability of the component it is recommended to set this property to "true" when the dialog is opened on phone.
	         * @default false
	         * @public
	         */
	        this.stretch = false;
	        /**
	         * Determines whether the component is draggable.
	         * If this property is set to true, the Dialog will be draggable by its header.
	         *
	         * **Note:** The component can be draggable only in desktop mode.
	         *
	         * **Note:** This property overrides the default HTML "draggable" attribute native behavior.
	         * When "draggable" is set to true, the native browser "draggable"
	         * behavior is prevented and only the Dialog custom logic ("draggable by its header") works.
	         * @default false
	         * @since 1.0.0-rc.9
	         * @public
	         */
	        this.draggable = false;
	        /**
	         * Configures the component to be resizable.
	         * If this property is set to true, the Dialog will have a resize handle in its bottom right corner in LTR languages.
	         * In RTL languages, the resize handle will be placed in the bottom left corner.
	         *
	         * **Note:** The component can be resizable only in desktop mode.
	         *
	         * **Note:** Upon resizing, externally defined height and width styling will be ignored.
	         * @default false
	         * @since 1.0.0-rc.10
	         * @public
	         */
	        this.resizable = false;
	        /**
	         * Defines the state of the `Dialog`.
	         *
	         * **Note:** If `"Negative"` and `"Critical"` states is set, it will change the
	         * accessibility role to "alertdialog", if the accessibleRole property is set to `"Dialog"`.
	         * @default "None"
	         * @public
	         * @since 1.0.0-rc.15
	         */
	        this.state = "None";
	        this._draggedOrResized = false;
	        this._revertSize = () => {
	            Object.assign(this.style, {
	                top: "",
	                left: "",
	                width: "",
	                height: "",
	            });
	        };
	        this._screenResizeHandler = this._screenResize.bind(this);
	        this._dragMouseMoveHandler = this._onDragMouseMove.bind(this);
	        this._dragMouseUpHandler = this._onDragMouseUp.bind(this);
	        this._resizeMouseMoveHandler = this._onResizeMouseMove.bind(this);
	        this._resizeMouseUpHandler = this._onResizeMouseUp.bind(this);
	        this._dragStartHandler = this._handleDragStart.bind(this);
	    }
	    static _isHeader(element) {
	        return element.classList.contains("ui5-popup-header-root") || element.getAttribute("slot") === "header";
	    }
	    get isModal() {
	        return true;
	    }
	    get _ariaLabelledBy() {
	        let ariaLabelledById;
	        if (this.headerText && !this._ariaLabel) {
	            ariaLabelledById = "ui5-popup-header-text";
	        }
	        return ariaLabelledById;
	    }
	    get ariaRoleDescriptionHeaderText() {
	        return (this.resizable || this.draggable) ? Dialog_1.i18nBundle.getText(i18nDefaults.DIALOG_HEADER_ARIA_ROLE_DESCRIPTION) : undefined;
	    }
	    get effectiveAriaDescribedBy() {
	        return (this.resizable || this.draggable) ? `${this._id}-descr` : undefined;
	    }
	    get ariaDescribedByHeaderTextResizable() {
	        return Dialog_1.i18nBundle.getText(i18nDefaults.DIALOG_HEADER_ARIA_DESCRIBEDBY_RESIZABLE);
	    }
	    get ariaDescribedByHeaderTextDraggable() {
	        return Dialog_1.i18nBundle.getText(i18nDefaults.DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE);
	    }
	    get ariaDescribedByHeaderTextDraggableAndResizable() {
	        return Dialog_1.i18nBundle.getText(i18nDefaults.DIALOG_HEADER_ARIA_DESCRIBEDBY_DRAGGABLE_RESIZABLE);
	    }
	    /**
	     * Determines if the header should be shown.
	     */
	    get _displayHeader() {
	        return this.header.length || this.headerText || this.draggable || this.resizable;
	    }
	    get _movable() {
	        return !this.stretch && this.onDesktop && (this.draggable || this.resizable);
	    }
	    get _headerTabIndex() {
	        return this._movable ? 0 : undefined;
	    }
	    get _showResizeHandle() {
	        return this.resizable && this.onDesktop;
	    }
	    get _minHeight() {
	        let minHeight = Number.parseInt(window.getComputedStyle(this.contentDOM).minHeight);
	        const header = this._root.querySelector(".ui5-popup-header-root");
	        if (header) {
	            minHeight += header.offsetHeight;
	        }
	        const footer = this._root.querySelector(".ui5-popup-footer-root");
	        if (footer) {
	            minHeight += footer.offsetHeight;
	        }
	        return minHeight;
	    }
	    get hasValueState() {
	        return this.state !== decline.o.None;
	    }
	    get _dialogStateIcon() {
	        return ICON_PER_STATE[this.state];
	    }
	    get _role() {
	        if (this.accessibleRole === Popover.PopupAccessibleRole.None) {
	            return undefined;
	        }
	        if (this.state === decline.o.Negative || this.state === decline.o.Critical) {
	            return toLowercaseEnumValue.n(Popover.PopupAccessibleRole.AlertDialog);
	        }
	        return toLowercaseEnumValue.n(this.accessibleRole);
	    }
	    _show() {
	        super._show();
	        this._center();
	    }
	    onBeforeRendering() {
	        super.onBeforeRendering();
	        this._isRTL = this.effectiveDir === "rtl";
	    }
	    onEnterDOM() {
	        super.onEnterDOM();
	        this._attachScreenResizeHandler();
	        this.addEventListener("dragstart", this._dragStartHandler);
	        this.setAttribute("data-sap-ui-fastnavgroup-container", "true");
	    }
	    onExitDOM() {
	        super.onExitDOM();
	        this._detachScreenResizeHandler();
	        this.removeEventListener("dragstart", this._dragStartHandler);
	    }
	    /**
	     * @override
	     */
	    _resize() {
	        super._resize();
	        if (!this._draggedOrResized) {
	            this._center();
	        }
	    }
	    _screenResize() {
	        this._center();
	    }
	    _attachScreenResizeHandler() {
	        if (!this._screenResizeHandlerAttached) {
	            window.addEventListener("resize", this._screenResizeHandler);
	            this._screenResizeHandlerAttached = true;
	        }
	    }
	    _detachScreenResizeHandler() {
	        if (this._screenResizeHandlerAttached) {
	            window.removeEventListener("resize", this._screenResizeHandler);
	            this._screenResizeHandlerAttached = false; // prevent dialog from repositioning during resizing
	        }
	    }
	    _center() {
	        const height = window.innerHeight - this.offsetHeight, width = window.innerWidth - this.offsetWidth;
	        Object.assign(this.style, {
	            top: `${Math.round(height / 2)}px`,
	            left: `${Math.round(width / 2)}px`,
	        });
	    }
	    /**
	     * Event handlers
	     */
	    _onDragMouseDown(e) {
	        // allow dragging only on the header
	        if (!this._movable || !this.draggable || !Dialog_1._isHeader(e.target)) {
	            return;
	        }
	        const { top, left, } = this.getBoundingClientRect();
	        const { width, height, } = window.getComputedStyle(this);
	        Object.assign(this.style, {
	            top: `${top}px`,
	            left: `${left}px`,
	            width: `${Math.round(Number.parseFloat(width) * 100) / 100}px`,
	            height: `${Math.round(Number.parseFloat(height) * 100) / 100}px`,
	        });
	        this._x = e.clientX;
	        this._y = e.clientY;
	        this._draggedOrResized = true;
	        this._attachMouseDragHandlers();
	    }
	    _onDragMouseMove(e) {
	        e.preventDefault();
	        const { clientX, clientY } = e;
	        const calcX = this._x - clientX;
	        const calcY = this._y - clientY;
	        const { left, top, } = this.getBoundingClientRect();
	        Object.assign(this.style, {
	            left: `${Math.floor(left - calcX)}px`,
	            top: `${Math.floor(top - calcY)}px`,
	        });
	        this._x = clientX;
	        this._y = clientY;
	    }
	    _onDragMouseUp() {
	        delete this._x;
	        delete this._y;
	        this._detachMouseDragHandlers();
	    }
	    _onDragOrResizeKeyDown(e) {
	        if (!this._movable || !Dialog_1._isHeader(e.target)) {
	            return;
	        }
	        if (this.draggable && [webcomponentsBase.D, webcomponentsBase.P, webcomponentsBase.K, webcomponentsBase.c].some(key => key(e))) {
	            this._dragWithEvent(e);
	            return;
	        }
	        if (this.resizable && [webcomponentsBase.O, webcomponentsBase.u, webcomponentsBase.w, webcomponentsBase.T].some(key => key(e))) {
	            this._resizeWithEvent(e);
	        }
	    }
	    _dragWithEvent(e) {
	        const { top, left, width, height, } = this.getBoundingClientRect();
	        let newPos = 0;
	        let posDirection = "top";
	        switch (true) {
	            case webcomponentsBase.D(e):
	                newPos = top - STEP_SIZE;
	                posDirection = "top";
	                break;
	            case webcomponentsBase.P(e):
	                newPos = top + STEP_SIZE;
	                posDirection = "top";
	                break;
	            case webcomponentsBase.K(e):
	                newPos = left - STEP_SIZE;
	                posDirection = "left";
	                break;
	            case webcomponentsBase.c(e):
	                newPos = left + STEP_SIZE;
	                posDirection = "left";
	                break;
	        }
	        newPos = Popover.m(newPos, 0, posDirection === "left" ? window.innerWidth - width : window.innerHeight - height);
	        this.style[posDirection] = `${newPos}px`;
	    }
	    _resizeWithEvent(e) {
	        this._draggedOrResized = true;
	        this.addEventListener("ui5-before-close", this._revertSize, { once: true });
	        const { top, left } = this.getBoundingClientRect(), style = window.getComputedStyle(this), minWidth = Number.parseFloat(style.minWidth), maxWidth = window.innerWidth - left, maxHeight = window.innerHeight - top;
	        let width = Number.parseFloat(style.width), height = Number.parseFloat(style.height);
	        switch (true) {
	            case webcomponentsBase.O(e):
	                height -= STEP_SIZE;
	                break;
	            case webcomponentsBase.u(e):
	                height += STEP_SIZE;
	                break;
	            case webcomponentsBase.w(e):
	                width -= STEP_SIZE;
	                break;
	            case webcomponentsBase.T(e):
	                width += STEP_SIZE;
	                break;
	        }
	        width = Popover.m(width, minWidth, maxWidth);
	        height = Popover.m(height, this._minHeight, maxHeight);
	        Object.assign(this.style, {
	            width: `${width}px`,
	            height: `${height}px`,
	        });
	    }
	    _attachMouseDragHandlers() {
	        window.addEventListener("mousemove", this._dragMouseMoveHandler);
	        window.addEventListener("mouseup", this._dragMouseUpHandler);
	    }
	    _detachMouseDragHandlers() {
	        window.removeEventListener("mousemove", this._dragMouseMoveHandler);
	        window.removeEventListener("mouseup", this._dragMouseUpHandler);
	    }
	    _onResizeMouseDown(e) {
	        if (!this._movable || !this.resizable) {
	            return;
	        }
	        e.preventDefault();
	        const { top, left, } = this.getBoundingClientRect();
	        const { width, height, minWidth, } = window.getComputedStyle(this);
	        this._initialX = e.clientX;
	        this._initialY = e.clientY;
	        this._initialWidth = Number.parseFloat(width);
	        this._initialHeight = Number.parseFloat(height);
	        this._initialTop = top;
	        this._initialLeft = left;
	        this._minWidth = Number.parseFloat(minWidth);
	        this._cachedMinHeight = this._minHeight;
	        Object.assign(this.style, {
	            top: `${top}px`,
	            left: `${left}px`,
	        });
	        this._draggedOrResized = true;
	        this._attachMouseResizeHandlers();
	    }
	    _onResizeMouseMove(e) {
	        const { clientX, clientY } = e;
	        let newWidth, newLeft;
	        if (this._isRTL) {
	            newWidth = Popover.m(this._initialWidth - (clientX - this._initialX), this._minWidth, this._initialLeft + this._initialWidth);
	            newLeft = Popover.m(this._initialLeft + (clientX - this._initialX), 0, this._initialX + this._initialWidth - this._minWidth);
	        }
	        else {
	            newWidth = Popover.m(this._initialWidth + (clientX - this._initialX), this._minWidth, window.innerWidth - this._initialLeft);
	        }
	        const newHeight = Popover.m(this._initialHeight + (clientY - this._initialY), this._cachedMinHeight, window.innerHeight - this._initialTop);
	        Object.assign(this.style, {
	            height: `${newHeight}px`,
	            width: `${newWidth}px`,
	            left: newLeft ? `${newLeft}px` : undefined,
	        });
	    }
	    _onResizeMouseUp() {
	        delete this._initialX;
	        delete this._initialY;
	        delete this._initialWidth;
	        delete this._initialHeight;
	        delete this._initialTop;
	        delete this._initialLeft;
	        delete this._minWidth;
	        delete this._cachedMinHeight;
	        this._detachMouseResizeHandlers();
	    }
	    _handleDragStart(e) {
	        if (this.draggable) {
	            e.preventDefault();
	        }
	    }
	    _attachMouseResizeHandlers() {
	        window.addEventListener("mousemove", this._resizeMouseMoveHandler);
	        window.addEventListener("mouseup", this._resizeMouseUpHandler);
	        this.addEventListener("ui5-before-close", this._revertSize, { once: true });
	    }
	    _detachMouseResizeHandlers() {
	        window.removeEventListener("mousemove", this._resizeMouseMoveHandler);
	        window.removeEventListener("mouseup", this._resizeMouseUpHandler);
	    }
	};
	__decorate([
	    webcomponentsBase.s()
	], Dialog.prototype, "headerText", void 0);
	__decorate([
	    webcomponentsBase.s({ type: Boolean })
	], Dialog.prototype, "stretch", void 0);
	__decorate([
	    webcomponentsBase.s({ type: Boolean })
	], Dialog.prototype, "draggable", void 0);
	__decorate([
	    webcomponentsBase.s({ type: Boolean })
	], Dialog.prototype, "resizable", void 0);
	__decorate([
	    webcomponentsBase.s()
	], Dialog.prototype, "state", void 0);
	__decorate([
	    webcomponentsBase.d()
	], Dialog.prototype, "header", void 0);
	__decorate([
	    webcomponentsBase.d()
	], Dialog.prototype, "footer", void 0);
	__decorate([
	    i18n.i("@ui5/webcomponents")
	], Dialog, "i18nBundle", void 0);
	Dialog = Dialog_1 = __decorate([
	    webcomponentsBase.m({
	        tag: "ui5-dialog",
	        template: DialogTemplate,
	        styles: [
	            Popover.Popup.styles,
	            Popover.PopupsCommonCss,
	            dialogCSS,
	            getEffectiveScrollbarStyle.a(),
	        ],
	    })
	], Dialog);
	Dialog.define();
	var Dialog$1 = Dialog;

	exports.Dialog = Dialog$1;

}));
