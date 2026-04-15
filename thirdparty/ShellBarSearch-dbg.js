sap.ui.define(['uxc/integration/thirdparty/webcomponents-fiori', 'uxc/integration/thirdparty/event-strict', 'uxc/integration/thirdparty/Theme', 'uxc/integration/thirdparty/parameters-bundle.css', 'uxc/integration/thirdparty/Button2', 'uxc/integration/thirdparty/Icon', 'uxc/integration/thirdparty/ListItemBase', 'uxc/integration/thirdparty/SuggestionItem', 'uxc/integration/thirdparty/parameters-bundle.css2', 'uxc/integration/thirdparty/ListItemAdditionalText.css', 'uxc/integration/thirdparty/AccessibilityTextsHelper', 'uxc/integration/thirdparty/decline', 'uxc/integration/thirdparty/information', 'uxc/integration/thirdparty/i18n2', 'uxc/integration/thirdparty/List', 'uxc/integration/thirdparty/i18n-defaults2', 'uxc/integration/thirdparty/ResponsivePopover', 'uxc/integration/thirdparty/Popover2', 'uxc/integration/thirdparty/slim-arrow-down', 'uxc/integration/thirdparty/ResponsivePopoverCommon.css', 'uxc/integration/thirdparty/Input', 'uxc/integration/thirdparty/search', 'uxc/integration/thirdparty/parameters-bundle.css3', 'uxc/integration/thirdparty/i18n-defaults', 'uxc/integration/thirdparty/Icons', 'uxc/integration/thirdparty/i18n', 'uxc/integration/thirdparty/LocaleData', 'uxc/integration/thirdparty/willShowContent', 'uxc/integration/thirdparty/toLowercaseEnumValue', 'uxc/integration/thirdparty/FocusableElements', 'uxc/integration/thirdparty/i18n-defaults3', 'uxc/integration/thirdparty/getEffectiveScrollbarStyle', 'uxc/integration/thirdparty/Dialog', 'uxc/integration/thirdparty/Title', 'uxc/integration/thirdparty/information2', 'uxc/integration/thirdparty/sys-enter-2'], (function (webcomponentsBase, eventStrict, Theme, parametersBundle_css, Button, Icon, ListItemBase, SuggestionItem, parametersBundle_css$1, ListItemAdditionalText_css, AccessibilityTextsHelper, decline, information, i18n, List, i18nDefaults, ResponsivePopover, Popover, slimArrowDown, ResponsivePopoverCommon_css, Input, search, parametersBundle_css$2, i18nDefaults$1, Icons, i18n$1, LocaleData, willShowContent, toLowercaseEnumValue, FocusableElements, i18nDefaults$2, getEffectiveScrollbarStyle, Dialog, Title, information$1, sysEnter2) { 'use strict';

    function OptionTemplate() {
        return SuggestionItem.ListItemBaseTemplate.call(this, { listItemContent }, { role: "option", title: this.tooltip });
    }
    function listItemContent() {
        return (parametersBundle_css.jsxs("div", { part: "content", id: `${this._id}-content`, class: "ui5-li-content", children: [this.displayIconBegin &&
                    parametersBundle_css.jsx(Icon.Icon, { part: "icon", name: this.icon, class: "ui5-li-icon", mode: "Decorative" }), parametersBundle_css.jsxs("div", { class: "ui5-li-text-wrapper", children: [parametersBundle_css.jsx("span", { part: "title", class: "ui5-li-title", children: parametersBundle_css.jsx("slot", {}) }), this.additionalText &&
                            parametersBundle_css.jsx("span", { part: "additional-text", class: "ui5-li-additional-text", children: this.additionalText })] })] }));
    }

    Theme.p("@ui5/webcomponents-theming", "sap_horizon", async () => parametersBundle_css.defaultThemeBase);
    Theme.p("@ui5/webcomponents", "sap_horizon", async () => parametersBundle_css$1.defaultTheme);
    var optionBaseCss = `:host{height:var(--_ui5-v2-10-0_list_item_dropdown_base_height);--_ui5-v2-10-0_list_item_title_size: var(--sapFontSize)}
`;

    Theme.p("@ui5/webcomponents-theming", "sap_horizon", async () => parametersBundle_css.defaultThemeBase);
    Theme.p("@ui5/webcomponents", "sap_horizon", async () => parametersBundle_css$1.defaultTheme);
    var listItemIconCss = `.ui5-li-icon{color:var(--sapList_TextColor);min-width:var(--_ui5-v2-10-0_list_item_icon_size);min-height:var(--_ui5-v2-10-0_list_item_icon_size);padding-inline-end:var(--_ui5-v2-10-0_list_item_icon_padding-inline-end)}
`;

    var __decorate$4 = (this && this.__decorate) || function (decorators, target, key, desc) {
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
     * The `ui5-option` component defines the content of an option in the `ui5-select`.
     *
     * ### ES6 Module Import
     *
     * `import "@ui5/webcomponents/dist/Option.js";`
     * @constructor
     * @extends ListItemBase
     * @implements {IOption}
     * @public
     */
    let Option = class Option extends ListItemBase.ListItemBase {
        get displayIconBegin() {
            return !!this.icon;
        }
        get effectiveDisplayText() {
            return this.textContent || "";
        }
    };
    __decorate$4([
        webcomponentsBase.d({ type: Node, "default": true, invalidateOnChildChange: true })
    ], Option.prototype, "text", void 0);
    __decorate$4([
        webcomponentsBase.s()
    ], Option.prototype, "value", void 0);
    __decorate$4([
        webcomponentsBase.s()
    ], Option.prototype, "icon", void 0);
    __decorate$4([
        webcomponentsBase.s()
    ], Option.prototype, "additionalText", void 0);
    __decorate$4([
        webcomponentsBase.s()
    ], Option.prototype, "tooltip", void 0);
    __decorate$4([
        webcomponentsBase.s({ type: Boolean })
    ], Option.prototype, "selected", void 0);
    Option = __decorate$4([
        webcomponentsBase.m({
            tag: "ui5-option",
            template: OptionTemplate,
            styles: [
                ListItemBase.ListItemBase.styles,
                ListItemAdditionalText_css.listItemAdditionalTextCss,
                listItemIconCss,
                optionBaseCss,
            ],
        })
    ], Option);
    Option.define();
    var Option$1 = Option;

    let t,n;const l=e=>{e.style.position="absolute",e.style.clip="rect(1px,1px,1px,1px)",e.style.userSelect="none",e.style.left="-1000px",e.style.top="-1000px",e.style.pointerEvents="none";};Theme.P$1(()=>{t&&n||(t=document.createElement("span"),n=document.createElement("span"),t.classList.add("ui5-invisiblemessage-polite"),n.classList.add("ui5-invisiblemessage-assertive"),t.setAttribute("aria-live","polite"),n.setAttribute("aria-live","assertive"),t.setAttribute("role","alert"),n.setAttribute("role","alert"),l(t),l(n),Theme.o("ui5-announcement-area").appendChild(t),Theme.o("ui5-announcement-area").appendChild(n));});const p=(e,s)=>{const i=t;i.textContent="",i.textContent=e,setTimeout(()=>{i.textContent===e&&(i.textContent="");},3e3);};

    function SelectPopoverTemplate() {
        return (parametersBundle_css.jsxs(parametersBundle_css.Fragment, { children: [this.options.length > 0 &&
                    parametersBundle_css.jsxs(ResponsivePopover, { class: {
                            "ui5-select-popover": true,
                            ...this.classes.popover
                        }, part: "popover", style: this.styles.responsivePopover, placement: "Bottom", horizontalAlign: "Start", hideArrow: true, preventInitialFocus: true, onOpen: this._afterOpen, onBeforeOpen: this._beforeOpen, onClose: this._afterClose, onKeyDown: this._onkeydown, children: [this._isPhone &&
                                parametersBundle_css.jsxs("div", { slot: "header", class: "ui5-responsive-popover-header", children: [parametersBundle_css.jsxs("div", { class: "row", children: [parametersBundle_css.jsx("span", { children: this._headerTitleText }), parametersBundle_css.jsx(Button.Button, { class: "ui5-responsive-popover-close-btn", icon: decline.decline, design: "Transparent", onClick: this._toggleRespPopover })] }), this.hasValueStateText &&
                                            parametersBundle_css.jsx("div", { class: {
                                                    "row": true,
                                                    "ui5-select-value-state-dialog-header": true,
                                                    ...this.classes.popoverValueState
                                                }, children: this._isPickerOpen && valueStateMessage.call(this) })] }), !this._isPhone && this.hasValueStateText &&
                                parametersBundle_css.jsxs("div", { class: this.classes.popoverValueState, style: this.styles.responsivePopoverHeader, children: [parametersBundle_css.jsx(Icon.Icon, { class: "ui5-input-value-state-message-icon", name: this._valueStateMessageInputIcon }), this._isPickerOpen && valueStateMessage.call(this)] }), parametersBundle_css.jsx(List.List, { separators: "None", onMouseDown: this._itemMousedown, onItemClick: this._handleItemPress, accessibleRole: "ListBox", children: parametersBundle_css.jsx("slot", {}) })] }), this.shouldOpenValueStateMessagePopover &&
                    parametersBundle_css.jsx(Popover.Popover, { part: "popover", class: "ui5-valuestatemessage-popover", preventInitialFocus: true, preventFocusRestore: true, hideArrow: true, placement: "Bottom", horizontalAlign: "Start", children: parametersBundle_css.jsxs("div", { class: this.classes.popoverValueState, style: this.styles.popoverHeader, children: [parametersBundle_css.jsx(Icon.Icon, { class: "ui5-input-value-state-message-icon", name: this._valueStateMessageInputIcon }), valueStateMessage.call(this)] }) })] }));
    }
    function valueStateMessage() {
        return (parametersBundle_css.jsx(parametersBundle_css.Fragment, { children: this.shouldDisplayDefaultValueStateMessage
                ? this.valueStateText
                : parametersBundle_css.jsx("slot", { onClick: this._applyFocus, name: "valueStateMessage" }) }));
    }

    function SelectTemplate() {
        return (parametersBundle_css.jsxs(parametersBundle_css.Fragment, { children: [parametersBundle_css.jsxs("div", { class: {
                        "ui5-select-root": true,
                        "ui5-input-focusable-element": true,
                    }, id: `${this._id}-select`, onClick: this._onclick, title: this.tooltip, children: [!this.icon && this.selectedOptionIcon &&
                            parametersBundle_css.jsx(Icon.Icon, { mode: "Decorative", class: "ui5-select-option-icon", name: this.selectedOptionIcon }), parametersBundle_css.jsx("div", { class: "ui5-select-label-root", "data-sap-focus-ref": true, tabindex: this._effectiveTabIndex, role: "combobox", "aria-haspopup": "listbox", "aria-label": this.ariaLabelText, "aria-describedby": this.valueStateTextId, "aria-disabled": this.isDisabled, "aria-required": this.required, "aria-readonly": this.readonly, "aria-expanded": this._isPickerOpen, "aria-roledescription": this._ariaRoleDescription, onKeyDown: this._onkeydown, onKeyPress: this._handleKeyboardNavigation, onKeyUp: this._onkeyup, onFocusIn: this._onfocusin, onFocusOut: this._onfocusout, children: this.hasCustomLabel
                                ? parametersBundle_css.jsx("slot", { name: "label" })
                                : this.text }), this.icon &&
                            parametersBundle_css.jsx(Icon.Icon, { name: this.icon, class: {
                                    "inputIcon": true,
                                    "inputIcon--pressed": this._iconPressed,
                                } }), !this.icon && !this.readonly &&
                            parametersBundle_css.jsx(Icon.Icon, { part: "icon", name: slimArrowDown.slimArrowDown, class: {
                                    "inputIcon": true,
                                    "inputIcon--pressed": this._iconPressed,
                                } }), this.hasValueState &&
                            parametersBundle_css.jsx("span", { id: `${this._id}-valueStateDesc`, class: "ui5-hidden-text", children: this.valueStateText })] }), SelectPopoverTemplate.call(this)] }));
    }

    Theme.p("@ui5/webcomponents-theming", "sap_horizon", async () => parametersBundle_css.defaultThemeBase);
    Theme.p("@ui5/webcomponents", "sap_horizon", async () => parametersBundle_css$1.defaultTheme);
    var selectCss = `:host{vertical-align:middle}.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}.inputIcon{color:var(--_ui5-v2-10-0_input_icon_color);cursor:pointer;outline:none;padding:var(--_ui5-v2-10-0_input_icon_padding);border-inline-start:var(--_ui5-v2-10-0_input_icon_border);min-width:1rem;min-height:1rem;border-radius:var(--_ui5-v2-10-0_input_icon_border_radius)}.inputIcon.inputIcon--pressed{background:var(--_ui5-v2-10-0_input_icon_pressed_bg);box-shadow:var(--_ui5-v2-10-0_input_icon_box_shadow);border-inline-start:var(--_ui5-v2-10-0_select_hover_icon_left_border);color:var(--_ui5-v2-10-0_input_icon_pressed_color)}.inputIcon:active{background-color:var(--sapButton_Active_Background);box-shadow:var(--_ui5-v2-10-0_input_icon_box_shadow);border-inline-start:var(--_ui5-v2-10-0_select_hover_icon_left_border);color:var(--_ui5-v2-10-0_input_icon_pressed_color)}.inputIcon:not(.inputIcon--pressed):not(:active):hover{background:var(--_ui5-v2-10-0_input_icon_hover_bg);box-shadow:var(--_ui5-v2-10-0_input_icon_box_shadow)}.inputIcon:hover{border-inline-start:var(--_ui5-v2-10-0_select_hover_icon_left_border);box-shadow:var(--_ui5-v2-10-0_input_icon_box_shadow)}:host(:not([hidden])){display:inline-block}:host{width:var(--_ui5-v2-10-0_input_width);min-width:calc(var(--_ui5-v2-10-0_input_min_width) + (var(--_ui5-v2-10-0-input-icons-count)*var(--_ui5-v2-10-0_input_icon_width)));margin:var(--_ui5-v2-10-0_input_margin_top_bottom) 0;height:var(--_ui5-v2-10-0_input_height);color:var(--sapField_TextColor);font-size:var(--sapFontSize);font-family:"72override",var(--sapFontFamily);font-style:normal;border:var(--_ui5-v2-10-0-input-border);border-radius:var(--_ui5-v2-10-0_input_border_radius);box-sizing:border-box;text-align:start;transition:var(--_ui5-v2-10-0_input_transition);background:var(--sapField_BackgroundStyle);background-color:var(--_ui5-v2-10-0_input_background_color)}:host(:not([readonly])),:host([readonly][disabled]){box-shadow:var(--sapField_Shadow)}:host([focused]:not([opened])){border-color:var(--_ui5-v2-10-0_input_focused_border_color);background-color:var(--sapField_Focus_Background)}.ui5-input-focusable-element{position:relative}:host([focused]:not([opened])) .ui5-input-focusable-element:after{content:var(--ui5-v2-10-0_input_focus_pseudo_element_content);position:absolute;pointer-events:none;z-index:2;border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--_ui5-v2-10-0_input_focus_outline_color);border-radius:var(--_ui5-v2-10-0_input_focus_border_radius);top:var(--_ui5-v2-10-0_input_focus_offset);bottom:var(--_ui5-v2-10-0_input_focus_offset);left:var(--_ui5-v2-10-0_input_focus_offset);right:var(--_ui5-v2-10-0_input_focus_offset)}:host([focused][readonly]:not([opened])) .ui5-input-focusable-element:after{top:var(--_ui5-v2-10-0_input_readonly_focus_offset);bottom:var(--_ui5-v2-10-0_input_readonly_focus_offset);left:var(--_ui5-v2-10-0_input_readonly_focus_offset);right:var(--_ui5-v2-10-0_input_readonly_focus_offset);border-radius:var(--_ui5-v2-10-0_input_readonly_focus_border_radius)}.ui5-input-root:before{content:"";position:absolute;width:calc(100% - 2px);left:1px;bottom:-2px;border-bottom-left-radius:8px;border-bottom-right-radius:8px;height:var(--_ui5-v2-10-0_input_bottom_border_height);transition:var(--_ui5-v2-10-0_input_transition);background-color:var(--_ui5-v2-10-0_input_bottom_border_color)}.ui5-input-root{width:100%;height:100%;position:relative;background:transparent;display:inline-block;outline:none;box-sizing:border-box;color:inherit;transition:border-color .2s ease-in-out;border-radius:var(--_ui5-v2-10-0_input_border_radius);overflow:hidden}:host([disabled]){opacity:var(--_ui5-v2-10-0_input_disabled_opacity);cursor:default;pointer-events:none;background-color:var(--_ui5-v2-10-0-input_disabled_background);border-color:var(--_ui5-v2-10-0_input_disabled_border_color)}:host([disabled]) .ui5-input-root:before,:host([readonly]) .ui5-input-root:before{content:none}[inner-input]{background:transparent;color:inherit;border:none;font-style:inherit;-webkit-appearance:none;-moz-appearance:textfield;padding:var(--_ui5-v2-10-0_input_inner_padding);box-sizing:border-box;width:100%;text-overflow:ellipsis;flex:1;outline:none;font-size:inherit;font-family:inherit;line-height:inherit;letter-spacing:inherit;word-spacing:inherit;text-align:inherit}[inner-input][inner-input-with-icon]{padding:var(--_ui5-v2-10-0_input_inner_padding_with_icon)}[inner-input][type=search]::-webkit-search-decoration,[inner-input][type=search]::-webkit-search-cancel-button,[inner-input][type=search]::-webkit-search-results-button,[inner-input][type=search]::-webkit-search-results-decoration{display:none}[inner-input]::-ms-reveal,[inner-input]::-ms-clear{display:none}.ui5-input-value-state-icon{height:100%;display:var(--_ui5-v2-10-0-input-value-state-icon-display);align-items:center}.ui5-input-value-state-icon>svg{margin-right:8px}[inner-input]::selection{background:var(--sapSelectedColor);color:var(--sapContent_ContrastTextColor)}:host([disabled]) [inner-input]::-webkit-input-placeholder{visibility:hidden}:host([readonly]) [inner-input]::-webkit-input-placeholder{visibility:hidden}:host([disabled]) [inner-input]::-moz-placeholder{visibility:hidden}:host([readonly]) [inner-input]::-moz-placeholder{visibility:hidden}[inner-input]::-webkit-input-placeholder{font-weight:400;font-style:var(--_ui5-v2-10-0_input_placeholder_style);color:var(--_ui5-v2-10-0_input_placeholder_color);padding-right:.125rem}[inner-input]::-moz-placeholder{font-weight:400;font-style:var(--_ui5-v2-10-0_input_placeholder_style);color:var(--_ui5-v2-10-0_input_placeholder_color);padding-right:.125rem}:host([value-state="Negative"]) [inner-input]::-webkit-input-placeholder{color:var(--_ui5-v2-10-0-input_error_placeholder_color);font-weight:var(--_ui5-v2-10-0_input_value_state_error_warning_placeholder_font_weight)}:host([value-state="Negative"]) [inner-input]::-moz-placeholder{color:var(--_ui5-v2-10-0-input_error_placeholder_color);font-weight:var(--_ui5-v2-10-0_input_value_state_error_warning_placeholder_font_weight)}:host([value-state="Critical"]) [inner-input]::-webkit-input-placeholder{font-weight:var(--_ui5-v2-10-0_input_value_state_error_warning_placeholder_font_weight)}:host([value-state="Critical"]) [inner-input]::-moz-placeholder{font-weight:var(--_ui5-v2-10-0_input_value_state_error_warning_placeholder_font_weight)}:host([value-state="Positive"]) [inner-input]::-webkit-input-placeholder{color:var(--_ui5-v2-10-0_input_placeholder_color)}:host([value-state="Positive"]) [inner-input]::-moz-placeholder{color:var(--_ui5-v2-10-0_input_placeholder_color)}:host([value-state="Information"]) [inner-input]::-webkit-input-placeholder{color:var(--_ui5-v2-10-0_input_placeholder_color)}:host([value-state="Information"]) [inner-input]::-moz-placeholder{color:var(--_ui5-v2-10-0_input_placeholder_color)}.ui5-input-content{height:100%;box-sizing:border-box;display:flex;flex-direction:row;justify-content:flex-end;overflow:hidden;outline:none;background:transparent;color:inherit;border-radius:var(--_ui5-v2-10-0_input_border_radius)}:host([readonly]:not([disabled])){border:var(--_ui5-v2-10-0_input_readonly_border);background:var(--sapField_ReadOnly_BackgroundStyle);background-color:var(--_ui5-v2-10-0_input_readonly_background)}:host([value-state="None"]:not([readonly]):hover),:host(:not([value-state]):not([readonly]):hover){border:var(--_ui5-v2-10-0_input_hover_border);border-color:var(--_ui5-v2-10-0_input_focused_border_color);box-shadow:var(--sapField_Hover_Shadow);background:var(--sapField_Hover_BackgroundStyle);background-color:var(--sapField_Hover_Background)}:host(:not([value-state]):not([readonly])[focused]:not([opened]):hover),:host([value-state="None"]:not([readonly])[focused]:not([opened]):hover){box-shadow:none}:host([focused]):not([opened]) .ui5-input-root:before{content:none}:host(:not([readonly]):not([disabled])[value-state]:not([value-state="None"])){border-width:var(--_ui5-v2-10-0_input_state_border_width)}:host([value-state="Negative"]) [inner-input],:host([value-state="Critical"]) [inner-input]{font-style:var(--_ui5-v2-10-0_input_error_warning_font_style);text-indent:var(--_ui5-v2-10-0_input_error_warning_text_indent)}:host([value-state="Negative"]) [inner-input]{font-weight:var(--_ui5-v2-10-0_input_error_font_weight)}:host([value-state="Critical"]) [inner-input]{font-weight:var(--_ui5-v2-10-0_input_warning_font_weight)}:host([value-state="Negative"]:not([readonly]):not([disabled])){background:var(--sapField_InvalidBackgroundStyle);background-color:var(--sapField_InvalidBackground);border-color:var(--_ui5-v2-10-0_input_value_state_error_border_color);box-shadow:var(--sapField_InvalidShadow)}:host([value-state="Negative"][focused]:not([opened]):not([readonly])){background-color:var(--_ui5-v2-10-0_input_focused_value_state_error_background);border-color:var(--_ui5-v2-10-0_input_focused_value_state_error_border_color)}:host([value-state="Negative"][focused]:not([opened]):not([readonly])) .ui5-input-focusable-element:after{border-color:var(--_ui5-v2-10-0_input_focused_value_state_error_focus_outline_color)}:host([value-state="Negative"]:not([readonly])) .ui5-input-root:before{background-color:var(--_ui5-v2-10-0-input-value-state-error-border-botom-color)}:host([value-state="Negative"]:not([readonly]):not([focused]):hover),:host([value-state="Negative"]:not([readonly])[focused][opened]:hover){background-color:var(--_ui5-v2-10-0_input_value_state_error_hover_background);box-shadow:var(--sapField_Hover_InvalidShadow)}:host([value-state="Negative"]:not([readonly]):not([disabled])),:host([value-state="Critical"]:not([readonly]):not([disabled])),:host([value-state="Information"]:not([readonly]):not([disabled])){border-style:var(--_ui5-v2-10-0_input_error_warning_border_style)}:host([value-state="Critical"]:not([readonly]):not([disabled])){background:var(--sapField_WarningBackgroundStyle);background-color:var(--sapField_WarningBackground);border-color:var(--_ui5-v2-10-0_input_value_state_warning_border_color);box-shadow:var(--sapField_WarningShadow)}:host([value-state="Critical"][focused]:not([opened]):not([readonly])){background-color:var(--_ui5-v2-10-0_input_focused_value_state_warning_background);border-color:var(--_ui5-v2-10-0_input_focused_value_state_warning_border_color)}:host([value-state="Critical"][focused]:not([opened]):not([readonly])) .ui5-input-focusable-element:after{border-color:var(--_ui5-v2-10-0_input_focused_value_state_warning_focus_outline_color)}:host([value-state="Critical"]:not([readonly])) .ui5-input-root:before{background-color:var(--_ui5-v2-10-0_input_value_state_warning_border_botom_color)}:host([value-state="Critical"]:not([readonly]):not([focused]):hover),:host([value-state="Critical"]:not([readonly])[focused][opened]:hover){background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_WarningShadow)}:host([value-state="Positive"]:not([readonly]):not([disabled])){background:var(--sapField_SuccessBackgroundStyle);background-color:var(--sapField_SuccessBackground);border-color:var(--_ui5-v2-10-0_input_value_state_success_border_color);border-width:var(--_ui5-v2-10-0_input_value_state_success_border_width);box-shadow:var(--sapField_SuccessShadow)}:host([value-state="Positive"][focused]:not([opened]):not([readonly])){background-color:var(--_ui5-v2-10-0_input_focused_value_state_success_background);border-color:var(--_ui5-v2-10-0_input_focused_value_state_success_border_color)}:host([value-state="Positive"][focused]:not([opened]):not([readonly])) .ui5-input-focusable-element:after{border-color:var(--_ui5-v2-10-0_input_focused_value_state_success_focus_outline_color)}:host([value-state="Positive"]:not([readonly])) .ui5-input-root:before{background-color:var(--_ui5-v2-10-0_input_value_state_success_border_botom_color)}:host([value-state="Positive"]:not([readonly]):not([focused]):hover),:host([value-state="Positive"]:not([readonly])[focused][opened]:hover){background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_SuccessShadow)}:host([value-state="Information"]:not([readonly]):not([disabled])){background:var(--sapField_InformationBackgroundStyle);background-color:var(--sapField_InformationBackground);border-color:var(--_ui5-v2-10-0_input_value_state_information_border_color);border-width:var(--_ui5-v2-10-0_input_information_border_width);box-shadow:var(--sapField_InformationShadow)}:host([value-state="Information"][focused]:not([opened]):not([readonly])){background-color:var(--_ui5-v2-10-0_input_focused_value_state_information_background);border-color:var(--_ui5-v2-10-0_input_focused_value_state_information_border_color)}:host([value-state="Information"]:not([readonly])) .ui5-input-root:before{background-color:var(--_ui5-v2-10-0_input_value_success_information_border_botom_color)}:host([value-state="Information"]:not([readonly]):not([focused]):hover),:host([value-state="Information"]:not([readonly])[focused][opened]:hover){background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_InformationShadow)}.ui5-input-icon-root{min-width:var(--_ui5-v2-10-0_input_icon_min_width);height:100%;display:flex;justify-content:center;align-items:center}::slotted([ui5-icon][slot="icon"]){align-self:start;padding:var(--_ui5-v2-10-0_input_custom_icon_padding);box-sizing:content-box!important}:host([value-state="Negative"]) .inputIcon,:host([value-state="Critical"]) .inputIcon{padding:var(--_ui5-v2-10-0_input_error_warning_icon_padding)}:host([value-state="Negative"][focused]) .inputIcon,:host([value-state="Critical"][focused]) .inputIcon{padding:var(--_ui5-v2-10-0_input_error_warning_focused_icon_padding)}:host([value-state="Information"]) .inputIcon{padding:var(--_ui5-v2-10-0_input_information_icon_padding)}:host([value-state="Information"][focused]) .inputIcon{padding:var(--_ui5-v2-10-0_input_information_focused_icon_padding)}:host([value-state="Negative"]) ::slotted(.inputIcon[ui5-icon]),:host([value-state="Negative"]) ::slotted([ui5-icon][slot="icon"]),:host([value-state="Critical"]) ::slotted([ui5-icon][slot="icon"]){padding:var(--_ui5-v2-10-0_input_error_warning_custom_icon_padding)}:host([value-state="Negative"][focused]) ::slotted(.inputIcon[ui5-icon]),:host([value-state="Negative"][focused]) ::slotted([ui5-icon][slot="icon"]),:host([value-state="Critical"][focused]) ::slotted([ui5-icon][slot="icon"]){padding:var(--_ui5-v2-10-0_input_error_warning_custom_focused_icon_padding)}:host([value-state="Information"]) ::slotted([ui5-icon][slot="icon"]){padding:var(--_ui5-v2-10-0_input_information_custom_icon_padding)}:host([value-state="Information"][focused]) ::slotted([ui5-icon][slot="icon"]){padding:var(--_ui5-v2-10-0_input_information_custom_focused_icon_padding)}:host([value-state="Negative"]) .inputIcon:active,:host([value-state="Negative"]) .inputIcon.inputIcon--pressed{box-shadow:var(--_ui5-v2-10-0_input_error_icon_box_shadow);color:var(--_ui5-v2-10-0_input_icon_error_pressed_color)}:host([value-state="Negative"]) .inputIcon:not(.inputIcon--pressed):not(:active):hover{box-shadow:var(--_ui5-v2-10-0_input_error_icon_box_shadow)}:host([value-state="Critical"]) .inputIcon:active,:host([value-state="Critical"]) .inputIcon.inputIcon--pressed{box-shadow:var(--_ui5-v2-10-0_input_warning_icon_box_shadow);color:var(--_ui5-v2-10-0_input_icon_warning_pressed_color)}:host([value-state="Critical"]) .inputIcon:not(.inputIcon--pressed):not(:active):hover{box-shadow:var(--_ui5-v2-10-0_input_warning_icon_box_shadow)}:host([value-state="Information"]) .inputIcon:active,:host([value-state="Information"]) .inputIcon.inputIcon--pressed{box-shadow:var(--_ui5-v2-10-0_input_information_icon_box_shadow);color:var(--_ui5-v2-10-0_input_icon_information_pressed_color)}:host([value-state="Information"]) .inputIcon:not(.inputIcon--pressed):not(:active):hover{box-shadow:var(--_ui5-v2-10-0_input_information_icon_box_shadow)}:host([value-state="Positive"]) .inputIcon:active,:host([value-state="Positive"]) .inputIcon.inputIcon--pressed{box-shadow:var(--_ui5-v2-10-0_input_success_icon_box_shadow);color:var(--_ui5-v2-10-0_input_icon_success_pressed_color)}:host([value-state="Positive"]) .inputIcon:not(.inputIcon--pressed):not(:active):hover{box-shadow:var(--_ui5-v2-10-0_input_success_icon_box_shadow)}.ui5-input-clear-icon-wrapper{height:var(--_ui5-v2-10-0_input_icon_wrapper_height);padding:0;width:var(--_ui5-v2-10-0_input_icon_width);min-width:var(--_ui5-v2-10-0_input_icon_width);display:flex;justify-content:center;align-items:center;box-sizing:border-box}:host([value-state]:not([value-state="None"]):not([value-state="Positive"])) .ui5-input-clear-icon-wrapper{height:var(--_ui5-v2-10-0_input_icon_wrapper_state_height);vertical-align:top}:host([value-state="Positive"]) .ui5-input-clear-icon-wrapper{height:var(--_ui5-v2-10-0_input_icon_wrapper_success_state_height)}[ui5-icon].ui5-input-clear-icon{padding:0;color:inherit}[inner-input]::-webkit-outer-spin-button,[inner-input]::-webkit-inner-spin-button{-webkit-appearance:inherit;margin:inherit}:host([icon]){min-width:var(--_ui5-v2-10-0_button_base_min_width);width:var(--_ui5-v2-10-0_button_base_min_width)}:host([icon]) .ui5-select-root{min-width:var(--_ui5-v2-10-0_button_base_min_width)}:host([icon]) .ui5-select-label-root{min-width:0;padding-inline-start:0}.ui5-select-root{min-width:calc(var(--_ui5-v2-10-0_input_min_width) + (var(--_ui5-v2-10-0-input-icons-count)*var(--_ui5-v2-10-0_input_icon_width)));width:100%;height:100%;display:flex;outline:none;cursor:pointer;overflow:hidden;border-radius:var(--_ui5-v2-10-0_input_border_radius)}.ui5-select-label-root{flex-shrink:1;flex-grow:1;align-self:center;min-width:1rem;padding-inline-start:.5rem;cursor:pointer;outline:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--_ui5-v2-10-0_select_label_color);font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400}.ui5-select-option-icon{padding-inline-start:.5rem;color:var(--sapField_TextColor);align-self:center}:host(:not([disabled])){cursor:pointer}
`;

    Theme.p("@ui5/webcomponents-theming", "sap_horizon", async () => parametersBundle_css.defaultThemeBase);
    Theme.p("@ui5/webcomponents", "sap_horizon", async () => parametersBundle_css$1.defaultTheme);
    var SelectPopoverCss = `.ui5-select-popover::part(content),.ui5-select-popover::part(header){padding:0}
`;

    var __decorate$3 = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var Select_1;
    /**
     * @class
     *
     * ### Overview
     *
     * The `ui5-select` component is used to create a drop-down list.
     *
     * ### Usage
     *
     * There are two main usages of the `ui5-select>`.
     *
     * - With Option (`ui5-option`) web component:
     *
     * The available options of the Select are defined by using the Option component.
     * The Option comes with predefined design and layout, including `icon`, `text` and `additional-text`.
     *
     * - With OptionCustom (`ui5-option-custom`) web component.
     *
     * Options with custom content are defined by using the OptionCustom component.
     * The OptionCustom component comes with no predefined layout and it expects consumers to define it.
     *
     * ### Selection
     *
     * The options can be selected via user interaction (click or with the use of the Space and Enter keys)
     * and programmatically - the Select component supports two distinct selection APIs, though mixing them is not supported:
     * - The "value" property of the Select component
     * - The "selected" property on individual options
     *
     * **Note:** If the "value" property is set but does not match any option,
     * no option will be selected and the Select component will be displayed as empty.
     *
     * **Note:** when both "value" and "selected" are both used (although discouraged),
     * the "value" property will take precedence.
     *
     * ### Keyboard Handling
     *
     * The `ui5-select` provides advanced keyboard handling.
     *
     * - [F4] / [Alt] + [Up] / [Alt] + [Down] / [Space] or [Enter] - Opens/closes the drop-down.
     * - [Up] or [Down] - If the drop-down is closed - changes selection to the next or the previous option. If the drop-down is opened - moves focus to the next or the previous option.
     * - [Space], [Enter] - If the drop-down is opened - selects the focused option.
     * - [Escape] - Closes the drop-down without changing the selection.
     * - [Home] - Navigates to first option
     * - [End] - Navigates to the last option
     *
     * ### ES6 Module Import
     *
     * `import "@ui5/webcomponents/dist/Select";`
     *
     * `import "@ui5/webcomponents/dist/Option";`
     * `import "@ui5/webcomponents/dist/OptionCustom";`
     * @constructor
     * @extends UI5Element
     * @public
     * @csspart popover - Used to style the popover element
     * @since 0.8.0
     */
    let Select = Select_1 = class Select extends webcomponentsBase.b {
        constructor() {
            super(...arguments);
            /**
             * Defines whether the component is in disabled state.
             *
             * **Note:** A disabled component is noninteractive.
             * @default false
             * @public
             */
            this.disabled = false;
            /**
             * Defines the value state of the component.
             * @default "None"
             * @public
             */
            this.valueState = "None";
            /**
             * Defines whether the component is required.
             * @since 1.0.0-rc.9
             * @default false
             * @public
             */
            this.required = false;
            /**
             * Defines whether the component is read-only.
             *
             * **Note:** A read-only component is not editable,
             * but still provides visual feedback upon user interaction.
             * @default false
             * @since 1.21.0
             * @public
             */
            this.readonly = false;
            /**
             * @private
             */
            this._iconPressed = false;
            /**
             * @private
             */
            this.opened = false;
            /**
             * @private
             */
            this._listWidth = 0;
            /**
             * @private
             */
            this.focused = false;
            this._selectedIndexBeforeOpen = -1;
            this._escapePressed = false;
            this._lastSelectedOption = null;
            this._typedChars = "";
        }
        ;
        get formValidityMessage() {
            return Select_1.i18nBundle.getText(i18nDefaults.FORM_SELECTABLE_REQUIRED);
        }
        get formValidity() {
            return { valueMissing: this.required && (this.selectedOption?.getAttribute("value") === "") };
        }
        async formElementAnchor() {
            return this.getFocusDomRefAsync();
        }
        get formFormattedValue() {
            if (this._valueStorage !== undefined) {
                return this._valueStorage;
            }
            const selectedOption = this.selectedOption;
            if (selectedOption) {
                if ("value" in selectedOption && selectedOption.value) {
                    return selectedOption.value;
                }
                return selectedOption.hasAttribute("value") ? selectedOption.getAttribute("value") : selectedOption.textContent;
            }
            return "";
        }
        onBeforeRendering() {
            this._applySelection();
            this.style.setProperty(Theme.d$2("--_ui5-input-icons-count"), `${this.iconsCount}`);
        }
        onAfterRendering() {
            this.toggleValueStatePopover(this.shouldOpenValueStateMessagePopover);
            if (this._isPickerOpen) {
                if (!this._listWidth) {
                    this._listWidth = this.responsivePopover.offsetWidth;
                }
            }
        }
        /**
         * Selects an option, based on the Select's "value" property,
         * or the options' "selected" property.
         */
        _applySelection() {
            // Flow 1: "value" has not been used
            if (this._valueStorage === undefined) {
                this._applyAutoSelection();
                return;
            }
            // Flow 2: "value" has been used - select the option by value or apply auto selection
            this._applySelectionByValue(this._valueStorage);
        }
        /**
         * Selects an option by given value.
         */
        _applySelectionByValue(value) {
            if (value !== (this.selectedOption?.value || this.selectedOption?.textContent)) {
                const options = Array.from(this.children);
                options.forEach(option => {
                    option.selected = !!((option.getAttribute("value") || option.textContent) === value);
                });
            }
        }
        /**
         * Selects the first option if no option is selected,
         * or selects the last option if multiple options are selected.
         */
        _applyAutoSelection() {
            let selectedIndex = this.options.findLastIndex(option => option.selected);
            selectedIndex = selectedIndex === -1 ? 0 : selectedIndex;
            for (let i = 0; i < this.options.length; i++) {
                this.options[i].selected = selectedIndex === i;
                if (selectedIndex === i) {
                    break;
                }
            }
        }
        /**
         * Sets value by given option.
         */
        _setValueByOption(option) {
            this.value = option.value || option.textContent || "";
        }
        _applyFocus() {
            this.focus();
        }
        _onfocusin() {
            this.focused = true;
        }
        _onfocusout() {
            this.focused = false;
        }
        get _isPickerOpen() {
            return !!this.responsivePopover && this.responsivePopover.open;
        }
        _respPopover() {
            return this.shadowRoot.querySelector("[ui5-responsive-popover]");
        }
        /**
         * Defines the value of the component:
         *
         * - when get - returns the value of the component or the value/text content of the selected option.
         * - when set - selects the option with matching `value` property or text content.
         *
         * **Note:** Use either the Select's value or the Options' selected property.
         * Mixed usage could result in unexpected behavior.
         *
         * **Note:** If the given value does not match any existing option,
         * no option will be selected and the Select component will be displayed as empty.
         * @public
         * @default ""
         * @since 1.20.0
         * @formProperty
         * @formEvents change liveChange
         */
        set value(newValue) {
            this._valueStorage = newValue;
        }
        get value() {
            if (this._valueStorage !== undefined) {
                return this._valueStorage;
            }
            return this.selectedOption?.value || this.selectedOption?.textContent || "";
        }
        get _selectedIndex() {
            return this.options.findIndex(option => option.selected);
        }
        /**
         * Currently selected `ui5-option` element.
         * @public
         * @default undefined
         */
        get selectedOption() {
            return this.options.find(option => option.selected);
        }
        get text() {
            return this.selectedOption?.effectiveDisplayText;
        }
        _toggleRespPopover() {
            if (this.disabled || this.readonly) {
                return;
            }
            this._iconPressed = true;
            this.responsivePopover = this._respPopover();
            if (this._isPickerOpen) {
                this.responsivePopover.open = false;
            }
            else {
                this.responsivePopover.opener = this;
                this.responsivePopover.open = true;
            }
        }
        _onkeydown(e) {
            const isTab = (webcomponentsBase.B(e) || webcomponentsBase.m$1(e));
            if (isTab && this._isPickerOpen) {
                this.responsivePopover.open = false;
            }
            else if (webcomponentsBase.ao(e)) {
                e.preventDefault();
                this._toggleRespPopover();
            }
            else if (webcomponentsBase.i(e)) {
                e.preventDefault();
            }
            else if (webcomponentsBase.H(e) && this._isPickerOpen) {
                this._escapePressed = true;
            }
            else if (webcomponentsBase.F(e)) {
                this._handleHomeKey(e);
            }
            else if (webcomponentsBase.W(e)) {
                this._handleEndKey(e);
            }
            else if (webcomponentsBase.b$1(e)) {
                this._handleSelectionChange();
            }
            else if (webcomponentsBase.D(e) || webcomponentsBase.P(e)) {
                this._handleArrowNavigation(e);
            }
        }
        _handleKeyboardNavigation(e) {
            if (webcomponentsBase.b$1(e) || this.readonly) {
                return;
            }
            const typedCharacter = e.key.toLowerCase();
            this._typedChars += typedCharacter;
            // We check if we have more than one characters and they are all duplicate, we set the
            // text to be the last input character (typedCharacter). If not, we set the text to be
            // the whole input string.
            const text = (/^(.)\1+$/i).test(this._typedChars) ? typedCharacter : this._typedChars;
            clearTimeout(this._typingTimeoutID);
            this._typingTimeoutID = setTimeout(() => {
                this._typedChars = "";
                this._typingTimeoutID = -1;
            }, 1000);
            this._selectTypedItem(text);
        }
        _selectTypedItem(text) {
            const currentIndex = this._selectedIndex;
            const itemToSelect = this._searchNextItemByText(text);
            if (itemToSelect) {
                const nextIndex = this.options.indexOf(itemToSelect);
                this._changeSelectedItem(this._selectedIndex, nextIndex);
                if (currentIndex !== this._selectedIndex) {
                    this.itemSelectionAnnounce();
                    this._scrollSelectedItem();
                }
            }
        }
        _searchNextItemByText(text) {
            let orderedOptions = this.options.slice(0);
            const optionsAfterSelected = orderedOptions.splice(this._selectedIndex + 1, orderedOptions.length - this._selectedIndex);
            const optionsBeforeSelected = orderedOptions.splice(0, orderedOptions.length - 1);
            orderedOptions = optionsAfterSelected.concat(optionsBeforeSelected);
            return orderedOptions.find(option => option.effectiveDisplayText.toLowerCase().startsWith(text));
        }
        _handleHomeKey(e) {
            e.preventDefault();
            if (this.readonly) {
                return;
            }
            this._changeSelectedItem(this._selectedIndex, 0);
        }
        _handleEndKey(e) {
            e.preventDefault();
            if (this.readonly) {
                return;
            }
            const lastIndex = this.options.length - 1;
            this._changeSelectedItem(this._selectedIndex, lastIndex);
        }
        _onkeyup(e) {
            if (webcomponentsBase.i(e)) {
                if (this._isPickerOpen) {
                    this._handleSelectionChange();
                }
                else {
                    this._toggleRespPopover();
                }
            }
        }
        _getItemIndex(item) {
            return this.options.indexOf(item);
        }
        _select(index) {
            const selectedIndex = this._selectedIndex;
            if (index < 0 || index >= this.options.length || this.options.length === 0) {
                return;
            }
            if (this.options[selectedIndex]) {
                this.options[selectedIndex].selected = false;
            }
            const selectedOption = this.options[index];
            if (selectedIndex !== index) {
                this.fireDecoratorEvent("live-change", { selectedOption });
            }
            selectedOption.selected = true;
            if (this._valueStorage !== undefined) {
                this._setValueByOption(selectedOption);
            }
        }
        /**
         * The user clicked on an item from the list
         * @private
         */
        _handleItemPress(e) {
            const listItem = e.detail.item;
            const selectedItemIndex = this._getItemIndex(listItem);
            this._handleSelectionChange(selectedItemIndex);
        }
        _itemMousedown(e) {
            // prevent actual focus of items
            e.preventDefault();
        }
        _onclick() {
            this.getFocusDomRef().focus();
            this._toggleRespPopover();
        }
        /**
         * The user selected an item with Enter or Space
         * @private
         */
        _handleSelectionChange(index = this._selectedIndex) {
            this._typedChars = "";
            this._select(index);
            this._toggleRespPopover();
        }
        _scrollSelectedItem() {
            if (this._isPickerOpen) {
                const itemRef = this._currentlySelectedOption?.getDomRef();
                if (itemRef) {
                    itemRef.scrollIntoView({
                        behavior: "auto",
                        block: "nearest",
                        inline: "nearest",
                    });
                }
            }
        }
        _handleArrowNavigation(e) {
            e.preventDefault();
            if (this.readonly) {
                return;
            }
            let nextIndex = -1;
            const currentIndex = this._selectedIndex;
            const isDownKey = webcomponentsBase.P(e);
            if (isDownKey) {
                nextIndex = this._getNextOptionIndex();
            }
            else {
                nextIndex = this._getPreviousOptionIndex();
            }
            this._changeSelectedItem(this._selectedIndex, nextIndex);
            if (currentIndex !== this._selectedIndex) {
                // Announce new item even if picker is opened.
                // The aria-activedescendents attribute can't be used,
                // because listitem elements are in different shadow dom
                this.itemSelectionAnnounce();
                this._scrollSelectedItem();
            }
        }
        _changeSelectedItem(oldIndex, newIndex) {
            const options = this.options;
            const previousOption = options[oldIndex];
            const nextOption = options[newIndex];
            if (previousOption === nextOption) {
                return;
            }
            previousOption.selected = false;
            previousOption.focused = false;
            nextOption.selected = true;
            nextOption.focused = true;
            if (this._valueStorage !== undefined) {
                this._setValueByOption(nextOption);
            }
            this.fireDecoratorEvent("live-change", { selectedOption: nextOption });
            if (!this._isPickerOpen) {
                // arrow pressed on closed picker - do selection change
                this._fireChangeEvent(nextOption);
            }
        }
        _getNextOptionIndex() {
            return this._selectedIndex === (this.options.length - 1) ? this._selectedIndex : (this._selectedIndex + 1);
        }
        _getPreviousOptionIndex() {
            return this._selectedIndex === 0 ? this._selectedIndex : (this._selectedIndex - 1);
        }
        _beforeOpen() {
            this._selectedIndexBeforeOpen = this._selectedIndex;
            this._lastSelectedOption = this.options[this._selectedIndex];
        }
        _afterOpen() {
            this.opened = true;
            this.fireDecoratorEvent("open");
            this.itemSelectionAnnounce();
            this._scrollSelectedItem();
            this._applyFocusToSelectedItem();
        }
        _applyFocusToSelectedItem() {
            this.options.forEach(option => {
                option.focused = option.selected;
            });
        }
        _afterClose() {
            this.opened = false;
            this._iconPressed = false;
            this._listWidth = 0;
            if (this._escapePressed) {
                this._select(this._selectedIndexBeforeOpen);
                this._escapePressed = false;
            }
            else if (this._lastSelectedOption !== this.options[this._selectedIndex]) {
                this._fireChangeEvent(this.options[this._selectedIndex]);
                this._lastSelectedOption = this.options[this._selectedIndex];
            }
            this.fireDecoratorEvent("close");
        }
        get hasCustomLabel() {
            return !!this.label.length;
        }
        _fireChangeEvent(selectedOption) {
            const changePrevented = !this.fireDecoratorEvent("change", { selectedOption });
            //  Angular two way data binding
            this.fireDecoratorEvent("selected-item-changed");
            // Fire input event for Vue.js two-way binding
            this.fireDecoratorEvent("input");
            if (changePrevented) {
                this._select(this._selectedIndexBeforeOpen);
            }
        }
        get valueStateTextMappings() {
            return {
                [decline.o.Positive]: Select_1.i18nBundle.getText(i18nDefaults.VALUE_STATE_SUCCESS),
                [decline.o.Information]: Select_1.i18nBundle.getText(i18nDefaults.VALUE_STATE_INFORMATION),
                [decline.o.Negative]: Select_1.i18nBundle.getText(i18nDefaults.VALUE_STATE_ERROR),
                [decline.o.Critical]: Select_1.i18nBundle.getText(i18nDefaults.VALUE_STATE_WARNING),
            };
        }
        get valueStateTypeMappings() {
            return {
                [decline.o.Positive]: Select_1.i18nBundle.getText(i18nDefaults.VALUE_STATE_TYPE_SUCCESS),
                [decline.o.Information]: Select_1.i18nBundle.getText(i18nDefaults.VALUE_STATE_TYPE_INFORMATION),
                [decline.o.Negative]: Select_1.i18nBundle.getText(i18nDefaults.VALUE_STATE_TYPE_ERROR),
                [decline.o.Critical]: Select_1.i18nBundle.getText(i18nDefaults.VALUE_STATE_TYPE_WARNING),
            };
        }
        get valueStateText() {
            let valueStateText;
            if (this.shouldDisplayDefaultValueStateMessage) {
                valueStateText = this.valueStateDefaultText;
            }
            else {
                valueStateText = this.valueStateMessage.map(el => el.textContent).join(" ");
            }
            return `${this.valueStateTypeText} ${valueStateText}`;
        }
        get valueStateDefaultText() {
            return this.valueState !== decline.o.None ? this.valueStateTextMappings[this.valueState] : "";
        }
        get valueStateTypeText() {
            return this.valueState !== decline.o.None ? this.valueStateTypeMappings[this.valueState] : "";
        }
        get hasValueState() {
            return this.valueState !== decline.o.None;
        }
        get valueStateTextId() {
            return this.hasValueState ? `${this._id}-valueStateDesc` : undefined;
        }
        get isDisabled() {
            return this.disabled || undefined;
        }
        get _headerTitleText() {
            return Select_1.i18nBundle.getText(i18nDefaults.INPUT_SUGGESTIONS_TITLE);
        }
        get _currentlySelectedOption() {
            return this.options[this._selectedIndex];
        }
        get _effectiveTabIndex() {
            return this.disabled
                || (this.responsivePopover // Handles focus on Tab/Shift + Tab when the popover is opened
                    && this.responsivePopover.open) ? -1 : 0;
        }
        /**
        * This method is relevant for sap_horizon theme only
        */
        get _valueStateMessageInputIcon() {
            const iconPerValueState = {
                Negative: "error",
                Critical: "alert",
                Positive: "sys-enter-2",
                Information: "information",
            };
            return this.valueState !== decline.o.None ? iconPerValueState[this.valueState] : "";
        }
        get iconsCount() {
            return this.selectedOptionIcon ? 2 : 1;
        }
        get classes() {
            return {
                popoverValueState: {
                    "ui5-valuestatemessage-root": true,
                    "ui5-valuestatemessage--success": this.valueState === decline.o.Positive,
                    "ui5-valuestatemessage--error": this.valueState === decline.o.Negative,
                    "ui5-valuestatemessage--warning": this.valueState === decline.o.Critical,
                    "ui5-valuestatemessage--information": this.valueState === decline.o.Information,
                },
                popover: {
                    "ui5-select-popover-valuestate": this.hasValueState,
                },
            };
        }
        get styles() {
            return {
                popoverHeader: {
                    "max-width": `${this.offsetWidth}px`,
                },
                responsivePopoverHeader: {
                    "display": this.options.length && this._listWidth === 0 ? "none" : "inline-block",
                    "width": `${this.options.length ? this._listWidth : this.offsetWidth}px`,
                },
                responsivePopover: {
                    "min-width": `${this.offsetWidth}px`,
                },
            };
        }
        get ariaLabelText() {
            return AccessibilityTextsHelper.A(this);
        }
        get shouldDisplayDefaultValueStateMessage() {
            return !this.valueStateMessage.length && this.hasValueStateText;
        }
        get hasValueStateText() {
            return this.hasValueState && this.valueState !== decline.o.Positive;
        }
        get shouldOpenValueStateMessagePopover() {
            return this.focused && this.hasValueStateText && !this._iconPressed
                && !this._isPickerOpen && !this._isPhone;
        }
        get _ariaRoleDescription() {
            return Select_1.i18nBundle.getText(i18nDefaults.SELECT_ROLE_DESCRIPTION);
        }
        get _isPhone() {
            return Theme.d$1();
        }
        itemSelectionAnnounce() {
            let text;
            const optionsCount = this.options.length;
            const itemPositionText = Select_1.i18nBundle.getText(i18nDefaults.LIST_ITEM_POSITION, this._selectedIndex + 1, optionsCount);
            if (this.focused && this._currentlySelectedOption) {
                text = `${this._currentlySelectedOption.textContent} ${this._isPickerOpen ? itemPositionText : ""}`;
                p(text);
            }
        }
        openValueStatePopover() {
            this.valueStatePopover = this._getPopover();
            if (this.valueStatePopover) {
                this.valueStatePopover.opener = this;
                this.valueStatePopover.open = true;
            }
        }
        closeValueStatePopover() {
            this.valueStatePopover && (this.valueStatePopover.open = false);
        }
        toggleValueStatePopover(open) {
            if (open) {
                this.openValueStatePopover();
            }
            else {
                this.closeValueStatePopover();
            }
        }
        get selectedOptionIcon() {
            return this.selectedOption && this.selectedOption.icon;
        }
        _getPopover() {
            return this.shadowRoot.querySelector("[ui5-popover]");
        }
    };
    __decorate$3([
        webcomponentsBase.s({ type: Boolean })
    ], Select.prototype, "disabled", void 0);
    __decorate$3([
        webcomponentsBase.s()
    ], Select.prototype, "icon", void 0);
    __decorate$3([
        webcomponentsBase.s()
    ], Select.prototype, "name", void 0);
    __decorate$3([
        webcomponentsBase.s()
    ], Select.prototype, "valueState", void 0);
    __decorate$3([
        webcomponentsBase.s({ type: Boolean })
    ], Select.prototype, "required", void 0);
    __decorate$3([
        webcomponentsBase.s({ type: Boolean })
    ], Select.prototype, "readonly", void 0);
    __decorate$3([
        webcomponentsBase.s()
    ], Select.prototype, "accessibleName", void 0);
    __decorate$3([
        webcomponentsBase.s()
    ], Select.prototype, "accessibleNameRef", void 0);
    __decorate$3([
        webcomponentsBase.s()
    ], Select.prototype, "tooltip", void 0);
    __decorate$3([
        webcomponentsBase.s({ type: Boolean, noAttribute: true })
    ], Select.prototype, "_iconPressed", void 0);
    __decorate$3([
        webcomponentsBase.s({ type: Boolean })
    ], Select.prototype, "opened", void 0);
    __decorate$3([
        webcomponentsBase.s({ type: Number, noAttribute: true })
    ], Select.prototype, "_listWidth", void 0);
    __decorate$3([
        webcomponentsBase.s({ type: Boolean })
    ], Select.prototype, "focused", void 0);
    __decorate$3([
        webcomponentsBase.d({ "default": true, type: HTMLElement, invalidateOnChildChange: true })
    ], Select.prototype, "options", void 0);
    __decorate$3([
        webcomponentsBase.d()
    ], Select.prototype, "valueStateMessage", void 0);
    __decorate$3([
        webcomponentsBase.d()
    ], Select.prototype, "label", void 0);
    __decorate$3([
        webcomponentsBase.s()
    ], Select.prototype, "value", null);
    __decorate$3([
        i18n.i("@ui5/webcomponents")
    ], Select, "i18nBundle", void 0);
    Select = Select_1 = __decorate$3([
        webcomponentsBase.m({
            tag: "ui5-select",
            languageAware: true,
            formAssociated: true,
            renderer: parametersBundle_css.d,
            template: SelectTemplate,
            styles: [
                selectCss,
                ResponsivePopoverCommon_css.ResponsivePopoverCommonCss,
                Input.ValueStateMessageCss,
                SelectPopoverCss,
            ],
            dependencies: [
                ListItemBase.Label,
                ResponsivePopover,
                Popover.Popover,
                List.List,
                Icon.Icon,
                Button.Button,
            ],
        })
        /**
         * Fired when the selected option changes.
         * @param {IOption} selectedOption the selected option.
         * @public
         */
        ,
        eventStrict.l("change", {
            bubbles: true,
            cancelable: true,
        })
        /**
         * Fired when the user navigates through the options, but the selection is not finalized,
         * or when pressing the ESC key to revert the current selection.
         * @param {IOption} selectedOption the selected option.
         * @public
         * @since 1.17.0
         */
        ,
        eventStrict.l("live-change", {
            bubbles: true,
        })
        /**
         * Fired after the component's dropdown menu opens.
         * @public
         */
        ,
        eventStrict.l("open")
        /**
         * Fired after the component's dropdown menu closes.
         * @public
         */
        ,
        eventStrict.l("close")
        /**
         * Fired to make Angular two way data binding work properly.
         * @private
         */
        ,
        eventStrict.l("selected-item-changed", {
            bubbles: true,
        })
        /**
         * Fired to make Vue.js two way data binding work properly.
         * @private
         */
        ,
        eventStrict.l("input", {
            bubbles: true,
        })
    ], Select);
    Select.define();
    var Select$1 = Select;

    function SearchFieldTemplate(options) {
        return (!options?.forceExpanded && this.collapsed ? (parametersBundle_css.jsx(Button.Button, { class: "ui5-shell-search-field-button", icon: search.search, design: Button.ButtonDesign.Transparent, "data-sap-focus-ref": true, onClick: this._handleSearchIconPress, tooltip: this._effectiveIconTooltip, accessibleName: this._effectiveIconTooltip, accessibilityAttributes: this._searchButtonAccessibilityAttributes })) : (parametersBundle_css.jsx("div", { class: "ui5-search-field-root", role: "search", onFocusOut: this._onFocusOutSearch, children: parametersBundle_css.jsxs("div", { class: "ui5-search-field-content", children: [!!this.scopes.length &&
                        parametersBundle_css.jsxs(parametersBundle_css.Fragment, { children: [parametersBundle_css.jsx(Select$1, { onChange: this._handleScopeChange, class: "sapUiSizeCompact ui5-search-field-select", accessibleName: this._translations.scope, tooltip: this._translations.scope, children: this.scopes.map(scopeOption => {
                                        return parametersBundle_css.jsx(Option$1, { selected: scopeOption.selected, "data-ui5-stable": scopeOption.stableDomRef, ref: this.captureRef.bind(scopeOption), children: scopeOption.text });
                                    }, this) }), parametersBundle_css.jsx("div", { class: "ui5-search-field-separator" })] }), parametersBundle_css.jsx("input", { class: "ui5-search-field-inner-input", role: "searchbox", "aria-description": this.accessibleDescription, "aria-label": this.accessibleName || this._translations.searchFieldAriaLabel, value: this.value, placeholder: this.placeholder, "data-sap-focus-ref": true, onInput: this._handleInput, onFocusIn: this._onfocusin, onFocusOut: this._onfocusout, onKeyDown: this._onkeydown, onClick: this._handleInnerClick }), this._effectiveShowClearIcon &&
                        parametersBundle_css.jsx(Icon.Icon, { class: "ui5-shell-search-field-icon", name: decline.decline, showTooltip: true, accessibleName: this._translations.clearIcon, onClick: this._handleClear }), parametersBundle_css.jsx(Icon.Icon, { class: {
                            "ui5-shell-search-field-icon": true,
                            "ui5-shell-search-field-search-icon": this._isSearchIcon,
                        }, name: search.search, showTooltip: true, accessibleName: this._effectiveIconTooltip, onClick: this._handleSearchIconPress })] }) })));
    }

    /**
     * Different input key hints.
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/enterkeyhint
     *
     * @private
     */
    var InputKeyHint;
    (function (InputKeyHint) {
        InputKeyHint["Search"] = "search";
        InputKeyHint["Go"] = "go";
        InputKeyHint["Next"] = "next";
        InputKeyHint["Enter"] = "enter";
        InputKeyHint["Done"] = "done";
        InputKeyHint["Previous"] = "previous";
        InputKeyHint["Send"] = "send";
    })(InputKeyHint || (InputKeyHint = {}));
    var InputKeyHint$1 = InputKeyHint;

    function SearchPopoverTemplate(headerTemplate) {
        return (parametersBundle_css.jsxs(ResponsivePopover, { hideArrow: true, preventFocusRestore: true, preventInitialFocus: !Theme.d$1(), accessibleNameRef: "suggestions-speech-output message-area-text message-area-description", placement: Popover.PopoverPlacement.Bottom, horizontalAlign: Popover.PopoverHorizontalAlign.Start, open: this.open, opener: this, onOpen: this._handleOpen, onClose: this._handleClose, onBeforeClose: this._handleBeforeClose, onBeforeOpen: this._handleBeforeOpen, class: {
                "ui5-search-popover": true,
                "ui5-search-popover-phone": Theme.d$1(),
            }, children: [Theme.d$1() ? (headerTemplate ? headerTemplate.call(this) : (parametersBundle_css.jsx(parametersBundle_css.Fragment, { children: parametersBundle_css.jsxs("header", { slot: "header", class: "ui5-search-popup-searching-header", children: [parametersBundle_css.jsx(Input.Input, { class: "ui5-search-popover-search-field", onInput: this._handleMobileInput, showClearIcon: this.showClearIcon, noTypeahead: this.noTypeahead, hint: InputKeyHint$1.Search, onKeyDown: this._onMobileInputKeydown, children: this._flattenItems.map(item => {
                                    return (parametersBundle_css.jsx(SuggestionItem.SuggestionItem, { text: item.text }));
                                }) }), parametersBundle_css.jsx(Button.Button, { design: Button.ButtonDesign.Transparent, onClick: this._handleCancel, children: this.cancelButtonText })] }) }))) : null, parametersBundle_css.jsxs("main", { class: "ui5-search-popover-content", children: [parametersBundle_css.jsx("slot", { name: "messageArea" }), parametersBundle_css.jsx("div", { class: "search-popover-busy-wrapper", children: parametersBundle_css.jsx(ListItemBase.BusyIndicator, { active: true }) }), this.items.length ?
                            parametersBundle_css.jsx(List.List, { class: "ui5-search-list", separators: List.ListSeparator.None, onKeyDown: this._onItemKeydown, accessibleRole: List.ListAccessibleRole.ListBox, onItemClick: this._onItemClick, children: parametersBundle_css.jsx("slot", {}) })
                            : (parametersBundle_css.jsx("slot", { name: "illustration" })), parametersBundle_css.jsx("span", { class: "ui5-hidden-text", id: "suggestions-speech-output", children: this.suggestionsText }), this.messageArea[0]?.text ? (parametersBundle_css.jsx("span", { class: "ui5-hidden-text", id: "message-area-text", children: this.messageArea[0].text })) : null, this.messageArea[0]?.description ? (parametersBundle_css.jsx("span", { class: "ui5-hidden-text", id: "message-area-description", children: this.messageArea[0].description })) : null] }), this.action.length ? (parametersBundle_css.jsx("slot", { onKeyDown: this._handleActionKeydown, name: "action", slot: "footer" })) : null] }));
    }

    function SearchTemplate() {
        return (parametersBundle_css.jsxs(parametersBundle_css.Fragment, { children: [SearchFieldTemplate.call(this), SearchPopoverTemplate.call(this)] }));
    }

    Theme.p("@ui5/webcomponents-theming", "sap_horizon", async () => parametersBundle_css.defaultThemeBase);
    Theme.p("@ui5/webcomponents-fiori", "sap_horizon", async () => parametersBundle_css$2.defaultTheme);
    var SearchCss = `.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}.ui5-search-popover{width:var(--search_width);margin-top:.25rem;box-sizing:border-box}.ui5-search-popup-searching-header{display:flex;gap:.5rem;width:100%;align-items:center}.ui5-search-popover::part(header){padding:.5rem 1rem;box-shadow:none;box-sizing:border-box}.ui5-search-popover::part(header):before{display:none}.ui5-search-popover::part(content){padding:0;box-shadow:none}:host([loading]) .ui5-search-popover main{min-height:2rem}.ui5-search-popover-search-field{flex:1;height:2.25rem;border-radius:var(--_ui5-v2-10-0_search_input_border_radius)}.ui5-search-popover-search-field::part(root):after{border-radius:var(--_ui5-v2-10-0_search_input_border_radius)}.ui5-search-popover-search-field::part(input){padding-inline-start:.875rem}.ui5-search-popover-search-field::part(clear-icon-wrapper){margin-inline-end:.5rem}.ui5-search-popover-loading-bi{width:100%;height:100%}::slotted([slot="action"]){width:100%;margin-top:.5rem;margin-bottom:.5rem}.search-popover-busy-wrapper{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:42;width:100%;height:100%;display:none;justify-content:center;align-items:center;pointer-events:all}:host([loading]) .search-popover-busy-wrapper{display:flex;width:100%;height:100%}.search-popover-busy-wrapper:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:var(--_ui5-v2-10-0-search-loading-overlay-background);opacity:var(--_ui5-v2-10-0-search-loading-overlay-transparency);border-radius:var(--_ui5-v2-10-0_popup_border_radius)}.ui5-search-list{margin:.25rem;width:calc(100% - .5rem)}.ui5-search-popover-phone .ui5-search-popover-content{position:relative;width:100%;height:100%;display:flex;flex-direction:column}.ui5-search-popover-phone .search-popover-busy-wrapper:after{border-radius:0}
`;

    Theme.p("@ui5/webcomponents-theming", "sap_horizon", async () => parametersBundle_css.defaultThemeBase);
    Theme.p("@ui5/webcomponents-fiori", "sap_horizon", async () => parametersBundle_css$2.defaultTheme);
    var SearchFieldCss = `:host,.ui5-shellbar-search-field-wrapper{height:2.25rem;display:flex;align-items:center}:host(:not([collapsed])),.ui5-shellbar-search-field-wrapper{min-width:18rem;max-width:36rem;margin:0;height:2.25rem;color:var(--sapShell_TextColor);font-size:var(--sapFontSize);font-family:"72override",var(--sapFontFamily);font-style:normal;box-shadow:var(--sapField_Shadow);border-radius:var(--_ui5-v2-10-0_search_input_border_radius);box-sizing:border-box;text-align:start;background:var(--sapField_BackgroundStyle);background-color:var(--_ui5-v2-10-0-search-wrapper-background);position:relative}.ui5-shellbar-search-field-wrapper{flex:1;min-width:auto}:host(:not([collapsed]):hover),:host(:not([collapsed]):focus-within),.ui5-shellbar-search-field-wrapper:focus-within{box-shadow:var(--sapField_Hover_Shadow);background:var(--_ui5-v2-10-0-search-wrapper-hover-background);background-color:var(--_ui5-v2-10-0-search-wrapper-hover-background-color)}:host([focused-inner-input]) .ui5-search-field-root{outline:var(--_ui5-v2-10-0_search_wrapper_outline);border-radius:var(--_ui5-v2-10-0_search_input_border_radius);outline-offset:-.125rem}.ui5-search-field-root{width:100%;height:100%;position:relative;background:transparent;display:inline-block;outline:none;box-sizing:border-box;color:inherit;transition:border-color .2s ease-in-out;border-radius:var(--_ui5-v2-10-0_search_input_border_radius);overflow:hidden}.ui5-search-field-content{height:100%;display:flex;flex-direction:row;justify-content:flex-end;align-items:center;overflow:hidden}[ui5-select]{--_ui5-v2-10-0_content_density: compact;outline:none;margin:var(--_ui5-v2-10-0_search_input_scope_margin);max-width:10rem;border-radius:var(--_ui5-v2-10-0_search_input_border_radius);border:var(--_ui5-v2-10-0-search-border);box-shadow:none;background:unset;background-color:var(--_ui5-v2-10-0-search-elements-background);height:var(--_ui5-v2-10-0-search-select-height);--_ui5-v2-10-0_select_label_color: var(--sapShell_TextColor)}[ui5-select]:hover{box-shadow:var(--sapField_Hover_Shadow)}[ui5-select]::part(icon){display:flex;justify-content:center;align-items:stretch;height:100%;padding:0 .5rem;align-self:center;border-radius:var(--_ui5-v2-10-0_search_input_border_radius);color:var(--sapShell_InteractiveTextColor)}[ui5-select]::part(icon):hover{background-color:var(--sapShell_Hover_Background)}[ui5-select]::part(popover){background-color:var(--sapShellColor)}.ui5-search-field-inner-input{font-size:var(--sapFontSize);font-family:"72override",var(--sapFontFamily);font-style:normal;padding:.5rem 0;height:100%;width:100%;box-sizing:border-box;background-color:var(--_ui5-v2-10-0-search-elements-background);border:var(--_ui5-v2-10-0-search-border);outline:none;color:inherit;padding-inline-start:var(--_ui5-v2-10-0-search-input-start-padding);padding-inline-end:var(--_ui5-v2-10-0_search_input_end_padding)}:host([focused-inner-input]) .ui5-search-field-inner-input{outline:var(--_ui5-v2-10-0_search_input_outline);border-radius:var(--_ui5-v2-10-0_search_input_border_radius);outline-offset:-.3125rem}:host(:not([mode="Scoped"])) .ui5-search-field-inner-input{padding-inline-start:.875rem}[ui5-select]:hover,.ui5-search-field-inner-input:hover{background-color:var(--_ui5-v2-10-0-search-elements-hover-background)}[ui5-select]:focus-within,.ui5-search-field-inner-input:focus-within{background-color:var(--_ui5-v2-10-0-search-elements-active-background)}.ui5-search-field-inner-input::placeholder{font-weight:400;font-style:italic;color:var(--sapField_PlaceholderTextColor);padding-inline-start:.125rem}:host([mode="Scoped"]) .ui5-search-field-inner-input{margin-inline-start:var(--_ui5-v2-10-0_search_input_start_margin)}.ui5-search-field-separator{height:1.5rem;width:.0625rem;background:var(--_ui5-v2-10-0_search_separator_background);box-sizing:border-box}.ui5-shell-search-field-button{outline:none;min-width:var(--_ui5-v2-10-0_search_icon_size);height:var(--_ui5-v2-10-0_search_icon_size);border-radius:var(--_ui5-v2-10-0_search_icon_border_radius);margin-inline-end:.25rem;margin-inline-start:.1875rem;box-sizing:border-box;cursor:pointer}.ui5-shell-search-field-button:not([design=Emphasized]){color:var(--sapShell_InteractiveTextColor);background-color:var(--_ui5-v2-10-0-search-elements-background)}.ui5-shell-search-field-button:not([design=Emphasized]):hover{background-color:var(--sapShell_Hover_Background)}.ui5-shell-search-field-button[desktop]:not([active])::part(button):after,.ui5-shell-search-field-button:not([active])::part(button):focus-visible:after,.ui5-shell-search-field-button[desktop][active][design=Emphasized]::part(button):focus-within:after,.ui5-shell-search-field-button[active][design=Emphasized]::part(button):focus-visible:after,.ui5-shell-search-field-button[desktop][active]::part(button):focus-within:before,.ui5-shell-search-field-button[active]::part(button):focus-visible:before,.ui5-shell-search-field-button[design=Emphasized][desktop]::part(button):focus-within:before,.ui5-shell-search-field-button[design=Emphasized]::part(button):focus-visible:before{border-radius:var(--_ui5-v2-10-0_search_icon_border_radius)}.ui5-shell-search-field-icon{display:flex;justify-content:center;align-items:stretch;cursor:pointer;outline:none;min-width:var(--_ui5-v2-10-0_search_icon_size);height:var(--_ui5-v2-10-0_search_icon_size);border-radius:var(--_ui5-v2-10-0_search_icon_border_radius);margin-inline-end:.25rem;margin-inline-start:.1875rem;box-sizing:border-box;color:var(--sapShell_InteractiveTextColor);background-color:var(--_ui5-v2-10-0-search-elements-background);border:var(--_ui5-v2-10-0-search-icon-border)}.ui5-shell-search-field-icon::part(root){padding:var(--_ui5-v2-10-0_search_icon_padding);width:1rem;height:1rem;outline-offset:-.125rem}.ui5-shell-search-field-icon:hover::part(root){padding:var(--_ui5-v2-10-0_search_icon_hover_padding);outline-offset:-.1875rem}.ui5-shell-search-field-icon:focus::part(root){border-radius:var(--_ui5-v2-10-0_search_icon_border_radius)}.ui5-shell-search-field-icon:hover,.ui5-shell-search-field-input-button:hover{background:var(--sapShell_Hover_Background);border:1px solid var(--sapButton_Lite_Hover_BorderColor);color:var(--sapShell_InteractiveTextColor)}.ui5-shell-search-field-search-icon{background-color:var(--sapButton_Emphasized_Background);border-color:var(--sapButton_Emphasized_BorderColor);color:var(--sapButton_Emphasized_TextColor)}.ui5-search-field-select{--_ui5-v2-10-0_input_focus_border_radius: var(--_ui5-v2-10-0_search_input_border_radius)}
`;

    var __decorate$2 = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var SearchField_1;
    /**
     * @class
     *
     * ### Overview
     *
     * A `ui5-search-field` is an input field, used for user search.
     *
     * The `ui5-search-field` consists of several elements parts:
     * - Scope - displays a select in the beggining of the component, used for filtering results by their scope.
     * - Input field - for user input value
     * - Clear button - gives the possibility for deleting the entered value
     * - Search button - a primary button for performing search, when the user has entered a search term
     *
     * ### ES6 Module Import
     *
     * `import "@ui5/webcomponents-fiori/dist/SearchField.js";`
     *
     * @constructor
     * @extends UI5Element
     * @private
     */
    let SearchField = SearchField_1 = class SearchField extends webcomponentsBase.b {
        constructor() {
            super(...arguments);
            /**
             * Defines whether the clear icon of the search will be shown.
             * @default false
             * @public
             */
            this.showClearIcon = false;
            /**
             * Defines whether the component is collapsed.
             *
             * @default false
             * @private
             */
            this.collapsed = false;
            /**
             * Defines the value of the component.
             *
             * **Note:** The property is updated upon typing.
             * @default ""
             * @public
             */
            this.value = "";
            /**
             * @private
             */
            this.focusedInnerInput = false;
            /**
             * @private
             */
            this._effectiveShowClearIcon = false;
        }
        onBeforeRendering() {
            this._effectiveShowClearIcon = (this.showClearIcon && !!this.value);
        }
        _onkeydown(e) {
            if (webcomponentsBase.b$1(e)) {
                return this._handleEnter();
            }
        }
        _onfocusin() {
            this.focusedInnerInput = true;
        }
        _onfocusout() {
            this.focusedInnerInput = false;
        }
        _onFocusOutSearch(e) { } // eslint-disable-line
        _handleEnter() {
            if (this.value.length) {
                this._handleSearchEvent();
            }
        }
        _handleInnerClick() { } // eslint-disable-line
        _handleSearchIconPress() {
            this._handleSearchEvent();
            setTimeout(() => {
                this.focus();
            }, 0);
        }
        _handleSearchEvent() {
            this.fireDecoratorEvent("search");
        }
        _handleInput(e) {
            this.value = e.target.value;
            this.fireDecoratorEvent("input");
        }
        _handleClear() {
            this.value = "";
            this.fireDecoratorEvent("input");
            this.focus();
        }
        _handleScopeChange(e) {
            const item = e.detail.selectedOption;
            this.fireDecoratorEvent("scope-change", {
                scope: item.scopeOption,
            });
        }
        get _isSearchIcon() {
            return this.value.length && this.focusedInnerInput;
        }
        get _searchButtonAccessibilityAttributes() {
            return {
                expanded: !this.collapsed,
            };
        }
        get _translations() {
            return {
                scope: SearchField_1.i18nBundle.getText(i18nDefaults$1.SEARCH_FIELD_SCOPE_SELECT_LABEL),
                searchIcon: SearchField_1.i18nBundle.getText(i18nDefaults$1.SEARCH_FIELD_SEARCH_ICON),
                clearIcon: SearchField_1.i18nBundle.getText(i18nDefaults$1.SEARCH_FIELD_CLEAR_ICON),
                searchFieldAriaLabel: SearchField_1.i18nBundle.getText(i18nDefaults$1.SEARCH_FIELD_LABEL),
            };
        }
        get _effectiveIconTooltip() {
            return this._translations.searchIcon;
        }
        captureRef(ref) {
            if (ref) {
                ref.scopeOption = this;
            }
        }
    };
    __decorate$2([
        webcomponentsBase.s({ type: Boolean })
    ], SearchField.prototype, "showClearIcon", void 0);
    __decorate$2([
        webcomponentsBase.s({ type: Boolean })
    ], SearchField.prototype, "collapsed", void 0);
    __decorate$2([
        webcomponentsBase.s()
    ], SearchField.prototype, "value", void 0);
    __decorate$2([
        webcomponentsBase.s()
    ], SearchField.prototype, "placeholder", void 0);
    __decorate$2([
        webcomponentsBase.s()
    ], SearchField.prototype, "accessibleName", void 0);
    __decorate$2([
        webcomponentsBase.s()
    ], SearchField.prototype, "accessibleDescription", void 0);
    __decorate$2([
        webcomponentsBase.d({ type: HTMLElement, individualSlots: true, invalidateOnChildChange: true })
    ], SearchField.prototype, "scopes", void 0);
    __decorate$2([
        webcomponentsBase.s({ type: Boolean })
    ], SearchField.prototype, "focusedInnerInput", void 0);
    __decorate$2([
        webcomponentsBase.s({ type: Boolean })
    ], SearchField.prototype, "_effectiveShowClearIcon", void 0);
    __decorate$2([
        i18n.i("@ui5/webcomponents-fiori")
    ], SearchField, "i18nBundle", void 0);
    SearchField = SearchField_1 = __decorate$2([
        webcomponentsBase.m({
            tag: "ui5-search-field",
            languageAware: true,
            renderer: parametersBundle_css.d,
            template: SearchFieldTemplate,
            styles: [
                SearchFieldCss,
            ],
        })
        /**
         * Fired when typing in input or clear icon is pressed.
         *
         * @public
         */
        ,
        eventStrict.l("input", {
            bubbles: true,
        })
        /**
         * Fired when the scope has changed.
         * @public
         * @param {HTMLElement} scope The newly selected scope
         */
        ,
        eventStrict.l("scope-change", {
            bubbles: true,
        })
        /**
         * Fired when the user has triggered search with Enter key or Search Button press.
         * @public
         */
        ,
        eventStrict.l("search", {
            bubbles: true,
            cancelable: true,
        })
    ], SearchField);
    SearchField.define();
    var SearchField$1 = SearchField;

    var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var Search_1;
    /**
     * @class
     *
     * ### Overview
     *
     * A `ui5-search` is an input with suggestions, used for user search.
     *
     * The `ui5-search` consists of several elements parts:
     * - Scope - displays a select in the beggining of the component, used for filtering results by their scope.
     * - Input field - for user input value
     * - Clear button - gives the possibility for deleting the entered value
     * - Search button - a primary button for performing search, when the user has entered a search term
     * - Suggestions - a list with available search suggestions
     *
     * ### ES6 Module Import
     *
     * `import "@ui5/webcomponents-fiori/dist/Search.js";`
     *
     * @constructor
     * @extends SearchField
     * @public
     * @since 2.9.0
     * @experimental
     */
    let Search = Search_1 = class Search extends SearchField$1 {
        constructor() {
            super();
            /**
             * Indicates whether a loading indicator should be shown in the popup.
             * @default false
             * @public
             */
            this.loading = false;
            /**
             * Defines whether the value will be autcompleted to match an item.
             * @default false
             * @public
             */
            this.noTypeahead = false;
            /**
             * Indicates whether the items picker is open.
             * @public
             */
            this.open = false;
            // The typed in value.
            this._typedInValue = "";
            this._matchedPerTerm = false;
            this._valueBeforeOpen = this.getAttribute("value") || "";
        }
        onBeforeRendering() {
            super.onBeforeRendering();
            const innerInput = this.nativeInput;
            const autoCompletedChars = innerInput && (innerInput.selectionEnd - innerInput.selectionStart);
            // If there is already a selection the autocomplete has already been performed
            if (this._shouldAutocomplete && !autoCompletedChars) {
                const item = this._getFirstMatchingItem(this.value);
                this._proposedItem = item;
                if (item) {
                    this._handleTypeAhead(item);
                    this._deselectItems();
                    item.selected = true;
                }
                else {
                    this._typedInValue = this.value;
                }
            }
            else {
                this._typedInValue = this.value;
            }
            if (Theme.d$1() && this.open) {
                const item = this._getFirstMatchingItem(this.value);
                this._proposedItem = item;
                this._deselectItems();
                if (item && this._performItemSelectionOnMobile) {
                    item.selected = true;
                }
            }
            this._flattenItems.forEach(item => {
                item.highlightText = this._typedInValue;
            });
            this._shouldAutocomplete = false;
        }
        onAfterRendering() {
            const innerInput = this.nativeInput;
            if (this._performTextSelection && innerInput && innerInput.value !== this._innerValue) {
                innerInput.value = this._innerValue || "";
            }
            if (this._performTextSelection && this._typedInValue.length && this.value.length) {
                innerInput?.setSelectionRange(this._typedInValue.length, this.value.length);
            }
            this._performTextSelection = false;
            if (!this.collapsed) {
                this.style.setProperty("--search_width", `${this.getBoundingClientRect().width}px`);
            }
        }
        _handleMobileInput(e) {
            this.value = e.target.value;
            this._performItemSelectionOnMobile = this._shouldPerformSelectionOnMobile(e.detail.inputType);
            this.fireDecoratorEvent("input");
        }
        _shouldPerformSelectionOnMobile(inputType) {
            const allowedEventTypes = [
                "deleteWordBackward",
                "deleteWordForward",
                "deleteSoftLineBackward",
                "deleteSoftLineForward",
                "deleteEntireSoftLine",
                "deleteHardLineBackward",
                "deleteHardLineForward",
                "deleteByDrag",
                "deleteByCut",
                "deleteContent",
                "deleteContentBackward",
                "deleteContentForward",
                "historyUndo",
            ];
            return !this.noTypeahead && !allowedEventTypes.includes(inputType || "");
        }
        _handleTypeAhead(item) {
            const originalValue = item.text || "";
            let displayValue = originalValue;
            if (!originalValue.toLowerCase().startsWith(this.value.toLowerCase())) {
                this._matchedPerTerm = true;
                displayValue = `${this.value} - ${originalValue}`;
            }
            else {
                this._matchedPerTerm = false;
            }
            this._typedInValue = this.value;
            this._innerValue = displayValue;
            this._performTextSelection = true;
            this.value = displayValue;
        }
        _startsWithMatchingItems(str) {
            return Input.StartsWith(str, this._flattenItems.filter(item => !this._isGroupItem(item)), "text");
        }
        _startsWithPerTermMatchingItems(str) {
            return Input.StartsWithPerTerm(str, this._flattenItems.filter(item => !this._isGroupItem(item)), "text");
        }
        _isGroupItem(item) {
            return item.hasAttribute("ui5-search-item-group");
        }
        _deselectItems() {
            this._flattenItems.forEach(item => {
                item.selected = false;
            });
        }
        _handleDown(e) {
            if (this.open) {
                e.preventDefault();
                this._handleArrowDown();
            }
        }
        _handleArrowDown() {
            const firstListItem = this._getItemsList()?.getSlottedNodes("items")[0];
            if (this.open) {
                this._deselectItems();
                this.value = this._typedInValue || this.value;
                this._innerValue = this.value;
                firstListItem?.focus();
            }
        }
        _handleRight(e) {
            if (this._matchedPerTerm) {
                e.preventDefault();
                this.value = this._typedInValue;
                this._innerValue = this._typedInValue;
                this._proposedItem = undefined;
            }
        }
        _handleInnerClick() {
            if (Theme.d$1()) {
                this.open = true;
            }
        }
        _handleSearchIconPress() {
            if (Theme.d$1()) {
                this.open = true;
            }
            else {
                super._handleSearchIconPress();
            }
        }
        _handleEnter() {
            const prevented = !this.fireDecoratorEvent("search", { item: this._proposedItem });
            if (prevented) {
                return;
            }
            const innerInput = this.nativeInput;
            if (this._matchedPerTerm) {
                this.value = this._proposedItem?.text || this.value;
                this._innerValue = this.value;
                this._typedInValue = this.value;
                this._matchedPerTerm = false;
            }
            innerInput.setSelectionRange(this.value.length, this.value.length);
            this.open = false;
        }
        _onMobileInputKeydown(e) {
            if (webcomponentsBase.b$1(e)) {
                this.value = this.mobileInput?.value || this.value;
                this._handleEnter();
                this.blur();
            }
        }
        _handleSearchEvent() {
            this.fireDecoratorEvent("search", { item: this._proposedItem });
        }
        _handleEscape() {
            this.value = this._typedInValue || this.value;
            this._innerValue = this.value;
        }
        _handleInput(e) {
            super._handleInput(e);
            if (Theme.d$1()) {
                return;
            }
            this.open = (e.currentTarget.value.length > 0) && this._popoupHasAnyContent();
        }
        _popoupHasAnyContent() {
            return this.items.length > 0 || this.illustration.length > 0 || this.messageArea.length > 0 || this.loading || this.action.length > 0;
        }
        _onFooterButtonKeyDown(e) {
            if (webcomponentsBase.D(e)) {
                this._flattenItems[this._flattenItems.length - 1].focus();
            }
            if (webcomponentsBase.m$1(e)) {
                this._getItemsList().focus();
            }
        }
        _onItemKeydown(e) {
            const isFirstItem = this._flattenItems[0] === e.target;
            const isLastItem = this._flattenItems[this._flattenItems.length - 1] === e.target;
            const isArrowUp = webcomponentsBase.D(e);
            const isArrowDown = webcomponentsBase.P(e);
            const isTab = webcomponentsBase.B(e);
            e.preventDefault();
            if (isFirstItem && isArrowUp) {
                this.nativeInput?.focus();
                this._shouldAutocomplete = true;
            }
            if ((isLastItem && isArrowDown) || isTab) {
                this._getFooterButton()?.focus();
            }
        }
        _onItemClick(e) {
            const item = e.detail.item;
            const prevented = !this.fireDecoratorEvent("search", { item });
            if (prevented) {
                if (Theme.d$1()) {
                    this.open = false;
                }
                return;
            }
            this.value = item.text;
            this._innerValue = this.value;
            this._typedInValue = this.value;
            this.open = false;
            this.focus();
        }
        _onkeydown(e) {
            super._onkeydown(e);
            if (this.loading) {
                return;
            }
            this._shouldAutocomplete = !this.noTypeahead
                && !(webcomponentsBase.x(e) || webcomponentsBase.V(e) || webcomponentsBase.H(e) || webcomponentsBase.D(e) || webcomponentsBase.P(e) || webcomponentsBase.B(e) || webcomponentsBase.b$1(e) || webcomponentsBase.Y(e) || webcomponentsBase.Z(e) || webcomponentsBase.F(e) || webcomponentsBase.W(e) || webcomponentsBase.H(e));
            if (webcomponentsBase.c(e)) {
                this._handleRight(e);
            }
            if (webcomponentsBase.P(e)) {
                this._handleDown(e);
            }
            if (webcomponentsBase.H(e)) {
                this._handleEscape();
            }
        }
        _onfocusout() {
            super._onfocusout();
            if (this._matchedPerTerm) {
                this.value = this._typedInValue;
                this._innerValue = this._typedInValue;
            }
            this._matchedPerTerm = false;
        }
        _onFocusOutSearch(e) {
            const target = e.relatedTarget;
            if (this._getPicker().contains(target) || this.contains(target)) {
                return;
            }
            this.open = false;
        }
        _handleBeforeClose(e) {
            if (e.detail.escPressed) {
                this.focus();
            }
        }
        _handleCancel() {
            this._handleClose();
            this.value = this._valueBeforeOpen;
            this.fireDecoratorEvent("input");
        }
        _handleClose() {
            this.open = false;
            this.fireDecoratorEvent("close");
        }
        _handleBeforeOpen() {
            if (Theme.d$1() && this.mobileInput) {
                this.mobileInput.value = this.value;
            }
        }
        _handleOpen() {
            this._valueBeforeOpen = this.value;
            this.fireDecoratorEvent("open");
        }
        _handleActionKeydown(e) {
            if (webcomponentsBase.D(e)) {
                this._flattenItems[this._flattenItems.length - 1].focus();
            }
        }
        _onFooterButtonClick() {
            this.fireDecoratorEvent("popup-action-press");
        }
        _getFirstMatchingItem(current) {
            if (!this._flattenItems.length || !current) {
                return;
            }
            const startsWithMatches = this._startsWithMatchingItems(current);
            const partialMatches = this._startsWithPerTermMatchingItems(current);
            if (!startsWithMatches.length) {
                return partialMatches[0] ?? undefined;
            }
            if (!partialMatches.length) {
                return startsWithMatches[0];
            }
            return this._flattenItems.indexOf(startsWithMatches[0]) <= this._flattenItems.indexOf(partialMatches[0])
                ? startsWithMatches[0]
                : partialMatches[0];
        }
        _getPicker() {
            return this.shadowRoot.querySelector("[ui5-responsive-popover]");
        }
        _getItemsList() {
            return this._getPicker().querySelector(".ui5-search-list");
        }
        _getFooterButton() {
            return this.action[0];
        }
        get _flattenItems() {
            return this.getSlottedNodes("items").flatMap(item => {
                return this._isGroupItem(item) ? [item, ...item.items] : [item];
            });
        }
        get nativeInput() {
            const domRef = this.getDomRef();
            return domRef?.querySelector(`input`);
        }
        get mobileInput() {
            const domRef = this.shadowRoot;
            return domRef ? domRef.querySelector(`[ui5-input]`) : null;
        }
        get cancelButtonText() {
            return Search_1.i18nBundle.getText(i18nDefaults$1.SEARCH_CANCEL_BUTTON);
        }
        get suggestionsText() {
            return Search_1.i18nBundle.getText(i18nDefaults$1.SEARCH_SUGGESTIONS);
        }
        get scopeSelect() {
            const domRef = this.shadowRoot;
            return domRef ? domRef.querySelector(`[ui5-select]`) : null;
        }
    };
    __decorate$1([
        webcomponentsBase.s({ type: Boolean })
    ], Search.prototype, "loading", void 0);
    __decorate$1([
        webcomponentsBase.s({ type: Boolean })
    ], Search.prototype, "noTypeahead", void 0);
    __decorate$1([
        webcomponentsBase.d({ type: HTMLElement, "default": true })
    ], Search.prototype, "items", void 0);
    __decorate$1([
        webcomponentsBase.d()
    ], Search.prototype, "action", void 0);
    __decorate$1([
        webcomponentsBase.d()
    ], Search.prototype, "illustration", void 0);
    __decorate$1([
        webcomponentsBase.d()
    ], Search.prototype, "messageArea", void 0);
    __decorate$1([
        webcomponentsBase.s({ type: Boolean })
    ], Search.prototype, "open", void 0);
    __decorate$1([
        webcomponentsBase.s({ noAttribute: true })
    ], Search.prototype, "_innerValue", void 0);
    __decorate$1([
        webcomponentsBase.s({ type: Boolean })
    ], Search.prototype, "_performItemSelectionOnMobile", void 0);
    __decorate$1([
        i18n.i("@ui5/webcomponents-fiori")
    ], Search, "i18nBundle", void 0);
    Search = Search_1 = __decorate$1([
        webcomponentsBase.m({
            tag: "ui5-search",
            languageAware: true,
            renderer: parametersBundle_css.d,
            template: SearchTemplate,
            styles: [
                SearchField$1.styles,
                SearchCss,
            ],
        })
        /**
         * Fired when the popup is opened.
         *
         * @public
         */
        ,
        eventStrict.l("open")
        /**
         * Fired when the popup is closed.
         *
         * @public
         */
        ,
        eventStrict.l("close")
    ], Search);
    Search.define();
    var Search$1 = Search;

    function ShellBarSearchPopoverTemplate() {
        return (SearchPopoverTemplate.call(this, ShellBarSearchDialogHeader));
    }
    function ShellBarSearchDialogHeader() {
        return (parametersBundle_css.jsx(parametersBundle_css.Fragment, { children: parametersBundle_css.jsxs("header", { slot: "header", class: "ui5-search-popup-searching-header", children: [parametersBundle_css.jsx("div", { class: "ui5-shellbar-search-field-wrapper", children: SearchFieldTemplate.call(this, { forceExpanded: true }) }), parametersBundle_css.jsx(Button.Button, { design: Button.ButtonDesign.Transparent, onClick: this._handleCancel, children: this.cancelButtonText })] }) }));
    }

    function ShellBarSearchTemplate() {
        return (parametersBundle_css.jsxs(parametersBundle_css.Fragment, { children: [SearchFieldTemplate.call(this), ShellBarSearchPopoverTemplate.call(this)] }));
    }

    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var ShellBarSearch_1;
    /**
     * @class
     * Search field for the ShellBar component.
     * @constructor
     * @extends Search
     * @public
     * @since 2.10.0
     * @experimental
     */
    let ShellBarSearch = ShellBarSearch_1 = class ShellBarSearch extends Search$1 {
        _handleSearchIconPress() {
            super._handleSearchIconPress();
            if (this.collapsed) {
                this.collapsed = false;
            }
            else if (!this.value) {
                this.collapsed = true;
            }
        }
        _onFocusOutSearch(e) {
            if (Theme.d$1()) {
                return;
            }
            super._onFocusOutSearch(e);
        }
        _handleInput(e) {
            super._handleInput(e);
            if (Theme.d$1()) {
                this._performItemSelectionOnMobile = this._shouldPerformSelectionOnMobile(e.inputType);
            }
        }
        get _effectiveIconTooltip() {
            if (this.collapsed) {
                return ShellBarSearch_1.i18nBundle.getText(i18nDefaults$1.SHELLBAR_SEARCH_COLLAPSED);
            }
            if (this.value) {
                return ShellBarSearch_1.i18nBundle.getText(i18nDefaults$1.SEARCH_FIELD_SEARCH_ICON);
            }
            return ShellBarSearch_1.i18nBundle.getText(i18nDefaults$1.SHELLBAR_SEARCH_EXPANDED);
        }
        get nativeInput() {
            const domRef = this.shadowRoot;
            return Theme.d$1() ? domRef?.querySelector(`[ui5-responsive-popover] input`) : super.nativeInput;
        }
        onBeforeRendering() {
            super.onBeforeRendering();
            if (Theme.d$1()) {
                this.collapsed = true;
            }
        }
    };
    ShellBarSearch = ShellBarSearch_1 = __decorate([
        webcomponentsBase.m({
            tag: "ui5-shellbar-search",
            template: ShellBarSearchTemplate,
        })
    ], ShellBarSearch);
    ShellBarSearch.define();
    var ShellBarSearch$1 = ShellBarSearch;

    return ShellBarSearch$1;

}));
