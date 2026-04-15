sap.ui.define(['require', 'exports', 'uxc/integration/thirdparty/webcomponents-fiori', 'uxc/integration/thirdparty/event-strict', 'uxc/integration/thirdparty/parameters-bundle.css', 'uxc/integration/thirdparty/Theme', 'uxc/integration/thirdparty/decline', 'uxc/integration/thirdparty/i18n2', 'uxc/integration/thirdparty/AccessibilityTextsHelper', 'uxc/integration/thirdparty/Icon', 'uxc/integration/thirdparty/information2', 'uxc/integration/thirdparty/sys-enter-2', 'uxc/integration/thirdparty/Popover2', 'uxc/integration/thirdparty/i18n-defaults2', 'uxc/integration/thirdparty/parameters-bundle.css2', 'uxc/integration/thirdparty/ResponsivePopoverCommon.css'], (function (require, exports, webcomponentsBase, eventStrict, parametersBundle_css, Theme, decline, i18n, AccessibilityTextsHelper, Icon, information, sysEnter2, Popover, i18nDefaults, parametersBundle_css$1, ResponsivePopoverCommon_css) { 'use strict';

  /**
   * Create hex string and pad to length with zeros.
   * @example
   * sap.ui.require(["sap/base/strings/toHex"], function(toHex){
   *      toHex(10, 2); // "0a"
   *      toHex(16, 2); // "10"
   * });
   *
   * @function
   * @since 1.58
   * @private
   * @alias module:sap/base/strings/toHex
   * @param {int} iChar UTF-16 character code
   * @param {int} [iLength=0] number of padded zeros
   * @returns {string} padded hex representation of the given character code
   */ /*!
       * OpenUI5
       * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
       * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
       */
  /*
   * IMPORTANT: This is a private module, its API must not be used and is subject to change.
   * Code other than the OpenUI5 libraries must not introduce dependencies to this module.
   */

  var fnToHex = function (iChar, iLength) {
    var sHex = iChar.toString(16);
    return sHex;
  };

  /*!
   * OpenUI5
   * (c) Copyright 2009-2024 SAP SE or an SAP affiliate company.
   * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
   */
  /* eslint-disable no-control-regex -- special characters are really needed here! */
  /**
   * RegExp and escape function for HTML escaping
   */
  var rHtml = /[\x00-\x2b\x2f\x3a-\x40\x5b-\x5e\x60\x7b-\xff\u2028\u2029]/g,
    rHtmlReplace = /[\x00-\x08\x0b\x0c\x0e-\x1f\x7f-\x9f]/,
    mHtmlLookup = {
      "<": "&lt;",
      ">": "&gt;",
      "&": "&amp;",
      "\"": "&quot;"
    };
  /* eslint-enable no-control-regex */

  var fnHtml = function (sChar) {
    var sEncoded = mHtmlLookup[sChar];
    if (!sEncoded) {
      if (rHtmlReplace.test(sChar)) {
        sEncoded = "&#xfffd;";
      } else {
        sEncoded = "&#x" + fnToHex(sChar.charCodeAt(0)) + ";";
      }
      mHtmlLookup[sChar] = sEncoded;
    }
    return sEncoded;
  };

  /*
   * Encoding according to the Secure Programming Guide
   * <SAPWIKI>/wiki/display/NWCUIAMSIM/XSS+Secure+Programming+Guide
   */

  /**
   * Encode the string for inclusion into XML content/attribute.
   *
   * @function
   * @since 1.58
   * @alias module:sap/base/security/encodeXML
   * @param {string} sString The string to be escaped
   * @returns {string} The encoded string
   * @SecValidate {0|return|XSS} validates the given string for XML contexts
   * @public
   */
  var fnEncodeXML = function (sString) {
    return sString.replace(rHtml, fnHtml);
  };

  const n=t=>{let e=0;return (t.selectionStart||t.selectionStart===0)&&(e=t.selectionDirection==="backward"?t.selectionStart:t.selectionEnd),e},o=(t,e)=>{t.selectionStart?(t.focus(),t.setSelectionRange(e,e)):t.focus();};

  /**
   * Different input types.
   * @public
   */
  var InputType;
  (function (InputType) {
      /**
       * Defines a one-line text input field:
       * @public
       */
      InputType["Text"] = "Text";
      /**
       * Used for input fields that must contain an e-mail address.
       * @public
       */
      InputType["Email"] = "Email";
      /**
       * Defines a numeric input field.
       * @public
       */
      InputType["Number"] = "Number";
      /**
       * Defines a password field.
       * @public
       */
      InputType["Password"] = "Password";
      /**
       * Used for input fields that should contain a telephone number.
       * @public
       */
      InputType["Tel"] = "Tel";
      /**
       * Used for input fields that should contain a URL address.
       * @public
       */
      InputType["URL"] = "URL";
      /**
       * Used for input fields that should contain a search term.
       * @since 2.0.0
       * @public
       */
      InputType["Search"] = "Search";
  })(InputType || (InputType = {}));
  var InputType$1 = InputType;

  function InputPopoverTemplate(hooks) {
      const suggestionsList = hooks?.suggestionsList;
      return (parametersBundle_css.jsxs(parametersBundle_css.Fragment, { children: [this._effectiveShowSuggestions && this.Suggestions?.template.call(this, { suggestionsList, valueStateMessage, valueStateMessageInputIcon }), this.hasValueStateMessage &&
                  parametersBundle_css.jsx(Popover.Popover, { preventInitialFocus: true, preventFocusRestore: true, hideArrow: true, class: "ui5-valuestatemessage-popover", placement: "Bottom", tabindex: -1, horizontalAlign: this._valueStatePopoverHorizontalAlign, opener: this, open: this.valueStateOpen, onClose: this._handleValueStatePopoverAfterClose, children: parametersBundle_css.jsxs("div", { slot: "header", class: this.classes.popoverValueState, style: this.styles.popoverHeader, children: [parametersBundle_css.jsx(Icon.Icon, { class: "ui5-input-value-state-message-icon", name: valueStateMessageInputIcon.call(this) }), this.valueStateOpen && valueStateMessage.call(this)] }) })] }));
  }
  function valueStateMessage() {
      return (parametersBundle_css.jsx(parametersBundle_css.Fragment, { children: this.shouldDisplayDefaultValueStateMessage ? this.valueStateText : parametersBundle_css.jsx("slot", { name: "valueStateMessage" }) }));
  }
  function valueStateMessageInputIcon() {
      const iconPerValueState = {
          Negative: information.iconError,
          Critical: information.iconAlert,
          Positive: sysEnter2.iconSysEnter2,
          Information: information.iconInformation,
      };
      return this.valueState !== decline.o.None ? iconPerValueState[this.valueState] : "";
  }

  function InputTemplate(hooks) {
      const suggestionsList = hooks?.suggestionsList;
      const preContent = hooks?.preContent || defaultPreContent;
      const postContent = hooks?.postContent || defaultPostContent;
      return (parametersBundle_css.jsxs(parametersBundle_css.Fragment, { children: [parametersBundle_css.jsx("div", { class: "ui5-input-root ui5-input-focusable-element", part: "root", onFocusIn: this._onfocusin, onFocusOut: this._onfocusout, children: parametersBundle_css.jsxs("div", { class: "ui5-input-content", children: [preContent.call(this), parametersBundle_css.jsx("input", { id: "inner", part: "input", class: "ui5-input-inner", style: this.styles.innerInput, type: this.inputNativeType, "inner-input": true, "inner-input-with-icon": this.icon.length, disabled: this.disabled, readonly: this._readonly, value: this._innerValue, placeholder: this._placeholder, maxlength: this.maxlength, role: this.accInfo.role, enterkeyhint: this.hint, "aria-controls": this.accInfo.ariaControls, "aria-invalid": this.accInfo.ariaInvalid, "aria-haspopup": this.accInfo.ariaHasPopup, "aria-describedby": this.accInfo.ariaDescribedBy, "aria-roledescription": this.accInfo.ariaRoledescription, "aria-autocomplete": this.accInfo.ariaAutoComplete, "aria-expanded": this.accInfo.ariaExpanded, "aria-label": this.accInfo.ariaLabel, "aria-required": this.required, autocomplete: "off", "data-sap-focus-ref": true, step: this.nativeInputAttributes.step, min: this.nativeInputAttributes.min, max: this.nativeInputAttributes.max, onInput: this._handleNativeInput, onChange: this._handleChange, onSelect: this._handleSelect, onKeyDown: this._onkeydown, onKeyUp: this._onkeyup, onClick: this._click, onFocusIn: this.innerFocusIn }), this._effectiveShowClearIcon &&
                              parametersBundle_css.jsx("div", { tabindex: -1, class: "ui5-input-clear-icon-wrapper inputIcon", part: "clear-icon-wrapper", onClick: this._clear, onMouseDown: this._iconMouseDown, children: parametersBundle_css.jsx(Icon.Icon, { part: "clear-icon", class: "ui5-input-clear-icon", name: decline.decline, tabindex: -1, accessibleName: this.clearIconAccessibleName }) }), this.icon.length > 0 &&
                              parametersBundle_css.jsx("div", { class: "ui5-input-icon-root", tabindex: -1, children: parametersBundle_css.jsx("slot", { name: "icon" }) }), parametersBundle_css.jsx("div", { class: "ui5-input-value-state-icon", children: this._valueStateInputIcon }), postContent.call(this), this._effectiveShowSuggestions &&
                              parametersBundle_css.jsxs(parametersBundle_css.Fragment, { children: [parametersBundle_css.jsx("span", { id: "suggestionsText", class: "ui5-hidden-text", children: this.suggestionsText }), parametersBundle_css.jsx("span", { id: "selectionText", class: "ui5-hidden-text", "aria-live": "polite", role: "status" }), parametersBundle_css.jsx("span", { id: "suggestionsCount", class: "ui5-hidden-text", "aria-live": "polite", children: this.availableSuggestionsCount })] }), this.accInfo.ariaDescription &&
                              parametersBundle_css.jsx("span", { id: "descr", class: "ui5-hidden-text", children: this.accInfo.ariaDescription }), this.accInfo.accessibleDescription &&
                              parametersBundle_css.jsx("span", { id: "accessibleDescription", class: "ui5-hidden-text", children: this.accInfo.accessibleDescription }), this.hasValueState &&
                              parametersBundle_css.jsx("span", { id: "valueStateDesc", class: "ui5-hidden-text", children: this.ariaValueStateHiddenText })] }) }), InputPopoverTemplate.call(this, { suggestionsList })] }));
  }
  function defaultPreContent() { }
  function defaultPostContent() { }

  const escapeReg = /[[\]{}()*+?.\\^$|]/g;
  const escapeRegExp = (str) => {
      return str.replace(escapeReg, "\\$&");
  };
  const StartsWithPerTerm = (value, items, propName) => {
      const reg = new RegExp(`(^|\\s)${escapeRegExp(value.toLowerCase())}.*`, "g");
      return items.filter(item => {
          const text = item[propName];
          reg.lastIndex = 0;
          return reg.test(text.toLowerCase());
      });
  };
  const StartsWith = (value, items, propName) => items.filter(item => (item[propName] || "").toLowerCase().startsWith(value.toLowerCase()));

  Theme.p("@ui5/webcomponents-theming", "sap_horizon", async () => parametersBundle_css.defaultThemeBase);
  Theme.p("@ui5/webcomponents", "sap_horizon", async () => parametersBundle_css$1.defaultTheme);
  var inputStyles = `:host{vertical-align:middle}.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}.inputIcon{color:var(--_ui5-v2-10-0_input_icon_color);cursor:pointer;outline:none;padding:var(--_ui5-v2-10-0_input_icon_padding);border-inline-start:var(--_ui5-v2-10-0_input_icon_border);min-width:1rem;min-height:1rem;border-radius:var(--_ui5-v2-10-0_input_icon_border_radius)}.inputIcon.inputIcon--pressed{background:var(--_ui5-v2-10-0_input_icon_pressed_bg);box-shadow:var(--_ui5-v2-10-0_input_icon_box_shadow);border-inline-start:var(--_ui5-v2-10-0_select_hover_icon_left_border);color:var(--_ui5-v2-10-0_input_icon_pressed_color)}.inputIcon:active{background-color:var(--sapButton_Active_Background);box-shadow:var(--_ui5-v2-10-0_input_icon_box_shadow);border-inline-start:var(--_ui5-v2-10-0_select_hover_icon_left_border);color:var(--_ui5-v2-10-0_input_icon_pressed_color)}.inputIcon:not(.inputIcon--pressed):not(:active):hover{background:var(--_ui5-v2-10-0_input_icon_hover_bg);box-shadow:var(--_ui5-v2-10-0_input_icon_box_shadow)}.inputIcon:hover{border-inline-start:var(--_ui5-v2-10-0_select_hover_icon_left_border);box-shadow:var(--_ui5-v2-10-0_input_icon_box_shadow)}:host(:not([hidden])){display:inline-block}:host{width:var(--_ui5-v2-10-0_input_width);min-width:calc(var(--_ui5-v2-10-0_input_min_width) + (var(--_ui5-v2-10-0-input-icons-count)*var(--_ui5-v2-10-0_input_icon_width)));margin:var(--_ui5-v2-10-0_input_margin_top_bottom) 0;height:var(--_ui5-v2-10-0_input_height);color:var(--sapField_TextColor);font-size:var(--sapFontSize);font-family:"72override",var(--sapFontFamily);font-style:normal;border:var(--_ui5-v2-10-0-input-border);border-radius:var(--_ui5-v2-10-0_input_border_radius);box-sizing:border-box;text-align:start;transition:var(--_ui5-v2-10-0_input_transition);background:var(--sapField_BackgroundStyle);background-color:var(--_ui5-v2-10-0_input_background_color)}:host(:not([readonly])),:host([readonly][disabled]){box-shadow:var(--sapField_Shadow)}:host([focused]:not([opened])){border-color:var(--_ui5-v2-10-0_input_focused_border_color);background-color:var(--sapField_Focus_Background)}.ui5-input-focusable-element{position:relative}:host([focused]:not([opened])) .ui5-input-focusable-element:after{content:var(--ui5-v2-10-0_input_focus_pseudo_element_content);position:absolute;pointer-events:none;z-index:2;border:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--_ui5-v2-10-0_input_focus_outline_color);border-radius:var(--_ui5-v2-10-0_input_focus_border_radius);top:var(--_ui5-v2-10-0_input_focus_offset);bottom:var(--_ui5-v2-10-0_input_focus_offset);left:var(--_ui5-v2-10-0_input_focus_offset);right:var(--_ui5-v2-10-0_input_focus_offset)}:host([focused][readonly]:not([opened])) .ui5-input-focusable-element:after{top:var(--_ui5-v2-10-0_input_readonly_focus_offset);bottom:var(--_ui5-v2-10-0_input_readonly_focus_offset);left:var(--_ui5-v2-10-0_input_readonly_focus_offset);right:var(--_ui5-v2-10-0_input_readonly_focus_offset);border-radius:var(--_ui5-v2-10-0_input_readonly_focus_border_radius)}.ui5-input-root:before{content:"";position:absolute;width:calc(100% - 2px);left:1px;bottom:-2px;border-bottom-left-radius:8px;border-bottom-right-radius:8px;height:var(--_ui5-v2-10-0_input_bottom_border_height);transition:var(--_ui5-v2-10-0_input_transition);background-color:var(--_ui5-v2-10-0_input_bottom_border_color)}.ui5-input-root{width:100%;height:100%;position:relative;background:transparent;display:inline-block;outline:none;box-sizing:border-box;color:inherit;transition:border-color .2s ease-in-out;border-radius:var(--_ui5-v2-10-0_input_border_radius);overflow:hidden}:host([disabled]){opacity:var(--_ui5-v2-10-0_input_disabled_opacity);cursor:default;pointer-events:none;background-color:var(--_ui5-v2-10-0-input_disabled_background);border-color:var(--_ui5-v2-10-0_input_disabled_border_color)}:host([disabled]) .ui5-input-root:before,:host([readonly]) .ui5-input-root:before{content:none}[inner-input]{background:transparent;color:inherit;border:none;font-style:inherit;-webkit-appearance:none;-moz-appearance:textfield;padding:var(--_ui5-v2-10-0_input_inner_padding);box-sizing:border-box;width:100%;text-overflow:ellipsis;flex:1;outline:none;font-size:inherit;font-family:inherit;line-height:inherit;letter-spacing:inherit;word-spacing:inherit;text-align:inherit}[inner-input][inner-input-with-icon]{padding:var(--_ui5-v2-10-0_input_inner_padding_with_icon)}[inner-input][type=search]::-webkit-search-decoration,[inner-input][type=search]::-webkit-search-cancel-button,[inner-input][type=search]::-webkit-search-results-button,[inner-input][type=search]::-webkit-search-results-decoration{display:none}[inner-input]::-ms-reveal,[inner-input]::-ms-clear{display:none}.ui5-input-value-state-icon{height:100%;display:var(--_ui5-v2-10-0-input-value-state-icon-display);align-items:center}.ui5-input-value-state-icon>svg{margin-right:8px}[inner-input]::selection{background:var(--sapSelectedColor);color:var(--sapContent_ContrastTextColor)}:host([disabled]) [inner-input]::-webkit-input-placeholder{visibility:hidden}:host([readonly]) [inner-input]::-webkit-input-placeholder{visibility:hidden}:host([disabled]) [inner-input]::-moz-placeholder{visibility:hidden}:host([readonly]) [inner-input]::-moz-placeholder{visibility:hidden}[inner-input]::-webkit-input-placeholder{font-weight:400;font-style:var(--_ui5-v2-10-0_input_placeholder_style);color:var(--_ui5-v2-10-0_input_placeholder_color);padding-right:.125rem}[inner-input]::-moz-placeholder{font-weight:400;font-style:var(--_ui5-v2-10-0_input_placeholder_style);color:var(--_ui5-v2-10-0_input_placeholder_color);padding-right:.125rem}:host([value-state="Negative"]) [inner-input]::-webkit-input-placeholder{color:var(--_ui5-v2-10-0-input_error_placeholder_color);font-weight:var(--_ui5-v2-10-0_input_value_state_error_warning_placeholder_font_weight)}:host([value-state="Negative"]) [inner-input]::-moz-placeholder{color:var(--_ui5-v2-10-0-input_error_placeholder_color);font-weight:var(--_ui5-v2-10-0_input_value_state_error_warning_placeholder_font_weight)}:host([value-state="Critical"]) [inner-input]::-webkit-input-placeholder{font-weight:var(--_ui5-v2-10-0_input_value_state_error_warning_placeholder_font_weight)}:host([value-state="Critical"]) [inner-input]::-moz-placeholder{font-weight:var(--_ui5-v2-10-0_input_value_state_error_warning_placeholder_font_weight)}:host([value-state="Positive"]) [inner-input]::-webkit-input-placeholder{color:var(--_ui5-v2-10-0_input_placeholder_color)}:host([value-state="Positive"]) [inner-input]::-moz-placeholder{color:var(--_ui5-v2-10-0_input_placeholder_color)}:host([value-state="Information"]) [inner-input]::-webkit-input-placeholder{color:var(--_ui5-v2-10-0_input_placeholder_color)}:host([value-state="Information"]) [inner-input]::-moz-placeholder{color:var(--_ui5-v2-10-0_input_placeholder_color)}.ui5-input-content{height:100%;box-sizing:border-box;display:flex;flex-direction:row;justify-content:flex-end;overflow:hidden;outline:none;background:transparent;color:inherit;border-radius:var(--_ui5-v2-10-0_input_border_radius)}:host([readonly]:not([disabled])){border:var(--_ui5-v2-10-0_input_readonly_border);background:var(--sapField_ReadOnly_BackgroundStyle);background-color:var(--_ui5-v2-10-0_input_readonly_background)}:host([value-state="None"]:not([readonly]):hover),:host(:not([value-state]):not([readonly]):hover){border:var(--_ui5-v2-10-0_input_hover_border);border-color:var(--_ui5-v2-10-0_input_focused_border_color);box-shadow:var(--sapField_Hover_Shadow);background:var(--sapField_Hover_BackgroundStyle);background-color:var(--sapField_Hover_Background)}:host(:not([value-state]):not([readonly])[focused]:not([opened]):hover),:host([value-state="None"]:not([readonly])[focused]:not([opened]):hover){box-shadow:none}:host([focused]):not([opened]) .ui5-input-root:before{content:none}:host(:not([readonly]):not([disabled])[value-state]:not([value-state="None"])){border-width:var(--_ui5-v2-10-0_input_state_border_width)}:host([value-state="Negative"]) [inner-input],:host([value-state="Critical"]) [inner-input]{font-style:var(--_ui5-v2-10-0_input_error_warning_font_style);text-indent:var(--_ui5-v2-10-0_input_error_warning_text_indent)}:host([value-state="Negative"]) [inner-input]{font-weight:var(--_ui5-v2-10-0_input_error_font_weight)}:host([value-state="Critical"]) [inner-input]{font-weight:var(--_ui5-v2-10-0_input_warning_font_weight)}:host([value-state="Negative"]:not([readonly]):not([disabled])){background:var(--sapField_InvalidBackgroundStyle);background-color:var(--sapField_InvalidBackground);border-color:var(--_ui5-v2-10-0_input_value_state_error_border_color);box-shadow:var(--sapField_InvalidShadow)}:host([value-state="Negative"][focused]:not([opened]):not([readonly])){background-color:var(--_ui5-v2-10-0_input_focused_value_state_error_background);border-color:var(--_ui5-v2-10-0_input_focused_value_state_error_border_color)}:host([value-state="Negative"][focused]:not([opened]):not([readonly])) .ui5-input-focusable-element:after{border-color:var(--_ui5-v2-10-0_input_focused_value_state_error_focus_outline_color)}:host([value-state="Negative"]:not([readonly])) .ui5-input-root:before{background-color:var(--_ui5-v2-10-0-input-value-state-error-border-botom-color)}:host([value-state="Negative"]:not([readonly]):not([focused]):hover),:host([value-state="Negative"]:not([readonly])[focused][opened]:hover){background-color:var(--_ui5-v2-10-0_input_value_state_error_hover_background);box-shadow:var(--sapField_Hover_InvalidShadow)}:host([value-state="Negative"]:not([readonly]):not([disabled])),:host([value-state="Critical"]:not([readonly]):not([disabled])),:host([value-state="Information"]:not([readonly]):not([disabled])){border-style:var(--_ui5-v2-10-0_input_error_warning_border_style)}:host([value-state="Critical"]:not([readonly]):not([disabled])){background:var(--sapField_WarningBackgroundStyle);background-color:var(--sapField_WarningBackground);border-color:var(--_ui5-v2-10-0_input_value_state_warning_border_color);box-shadow:var(--sapField_WarningShadow)}:host([value-state="Critical"][focused]:not([opened]):not([readonly])){background-color:var(--_ui5-v2-10-0_input_focused_value_state_warning_background);border-color:var(--_ui5-v2-10-0_input_focused_value_state_warning_border_color)}:host([value-state="Critical"][focused]:not([opened]):not([readonly])) .ui5-input-focusable-element:after{border-color:var(--_ui5-v2-10-0_input_focused_value_state_warning_focus_outline_color)}:host([value-state="Critical"]:not([readonly])) .ui5-input-root:before{background-color:var(--_ui5-v2-10-0_input_value_state_warning_border_botom_color)}:host([value-state="Critical"]:not([readonly]):not([focused]):hover),:host([value-state="Critical"]:not([readonly])[focused][opened]:hover){background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_WarningShadow)}:host([value-state="Positive"]:not([readonly]):not([disabled])){background:var(--sapField_SuccessBackgroundStyle);background-color:var(--sapField_SuccessBackground);border-color:var(--_ui5-v2-10-0_input_value_state_success_border_color);border-width:var(--_ui5-v2-10-0_input_value_state_success_border_width);box-shadow:var(--sapField_SuccessShadow)}:host([value-state="Positive"][focused]:not([opened]):not([readonly])){background-color:var(--_ui5-v2-10-0_input_focused_value_state_success_background);border-color:var(--_ui5-v2-10-0_input_focused_value_state_success_border_color)}:host([value-state="Positive"][focused]:not([opened]):not([readonly])) .ui5-input-focusable-element:after{border-color:var(--_ui5-v2-10-0_input_focused_value_state_success_focus_outline_color)}:host([value-state="Positive"]:not([readonly])) .ui5-input-root:before{background-color:var(--_ui5-v2-10-0_input_value_state_success_border_botom_color)}:host([value-state="Positive"]:not([readonly]):not([focused]):hover),:host([value-state="Positive"]:not([readonly])[focused][opened]:hover){background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_SuccessShadow)}:host([value-state="Information"]:not([readonly]):not([disabled])){background:var(--sapField_InformationBackgroundStyle);background-color:var(--sapField_InformationBackground);border-color:var(--_ui5-v2-10-0_input_value_state_information_border_color);border-width:var(--_ui5-v2-10-0_input_information_border_width);box-shadow:var(--sapField_InformationShadow)}:host([value-state="Information"][focused]:not([opened]):not([readonly])){background-color:var(--_ui5-v2-10-0_input_focused_value_state_information_background);border-color:var(--_ui5-v2-10-0_input_focused_value_state_information_border_color)}:host([value-state="Information"]:not([readonly])) .ui5-input-root:before{background-color:var(--_ui5-v2-10-0_input_value_success_information_border_botom_color)}:host([value-state="Information"]:not([readonly]):not([focused]):hover),:host([value-state="Information"]:not([readonly])[focused][opened]:hover){background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_InformationShadow)}.ui5-input-icon-root{min-width:var(--_ui5-v2-10-0_input_icon_min_width);height:100%;display:flex;justify-content:center;align-items:center}::slotted([ui5-icon][slot="icon"]){align-self:start;padding:var(--_ui5-v2-10-0_input_custom_icon_padding);box-sizing:content-box!important}:host([value-state="Negative"]) .inputIcon,:host([value-state="Critical"]) .inputIcon{padding:var(--_ui5-v2-10-0_input_error_warning_icon_padding)}:host([value-state="Negative"][focused]) .inputIcon,:host([value-state="Critical"][focused]) .inputIcon{padding:var(--_ui5-v2-10-0_input_error_warning_focused_icon_padding)}:host([value-state="Information"]) .inputIcon{padding:var(--_ui5-v2-10-0_input_information_icon_padding)}:host([value-state="Information"][focused]) .inputIcon{padding:var(--_ui5-v2-10-0_input_information_focused_icon_padding)}:host([value-state="Negative"]) ::slotted(.inputIcon[ui5-icon]),:host([value-state="Negative"]) ::slotted([ui5-icon][slot="icon"]),:host([value-state="Critical"]) ::slotted([ui5-icon][slot="icon"]){padding:var(--_ui5-v2-10-0_input_error_warning_custom_icon_padding)}:host([value-state="Negative"][focused]) ::slotted(.inputIcon[ui5-icon]),:host([value-state="Negative"][focused]) ::slotted([ui5-icon][slot="icon"]),:host([value-state="Critical"][focused]) ::slotted([ui5-icon][slot="icon"]){padding:var(--_ui5-v2-10-0_input_error_warning_custom_focused_icon_padding)}:host([value-state="Information"]) ::slotted([ui5-icon][slot="icon"]){padding:var(--_ui5-v2-10-0_input_information_custom_icon_padding)}:host([value-state="Information"][focused]) ::slotted([ui5-icon][slot="icon"]){padding:var(--_ui5-v2-10-0_input_information_custom_focused_icon_padding)}:host([value-state="Negative"]) .inputIcon:active,:host([value-state="Negative"]) .inputIcon.inputIcon--pressed{box-shadow:var(--_ui5-v2-10-0_input_error_icon_box_shadow);color:var(--_ui5-v2-10-0_input_icon_error_pressed_color)}:host([value-state="Negative"]) .inputIcon:not(.inputIcon--pressed):not(:active):hover{box-shadow:var(--_ui5-v2-10-0_input_error_icon_box_shadow)}:host([value-state="Critical"]) .inputIcon:active,:host([value-state="Critical"]) .inputIcon.inputIcon--pressed{box-shadow:var(--_ui5-v2-10-0_input_warning_icon_box_shadow);color:var(--_ui5-v2-10-0_input_icon_warning_pressed_color)}:host([value-state="Critical"]) .inputIcon:not(.inputIcon--pressed):not(:active):hover{box-shadow:var(--_ui5-v2-10-0_input_warning_icon_box_shadow)}:host([value-state="Information"]) .inputIcon:active,:host([value-state="Information"]) .inputIcon.inputIcon--pressed{box-shadow:var(--_ui5-v2-10-0_input_information_icon_box_shadow);color:var(--_ui5-v2-10-0_input_icon_information_pressed_color)}:host([value-state="Information"]) .inputIcon:not(.inputIcon--pressed):not(:active):hover{box-shadow:var(--_ui5-v2-10-0_input_information_icon_box_shadow)}:host([value-state="Positive"]) .inputIcon:active,:host([value-state="Positive"]) .inputIcon.inputIcon--pressed{box-shadow:var(--_ui5-v2-10-0_input_success_icon_box_shadow);color:var(--_ui5-v2-10-0_input_icon_success_pressed_color)}:host([value-state="Positive"]) .inputIcon:not(.inputIcon--pressed):not(:active):hover{box-shadow:var(--_ui5-v2-10-0_input_success_icon_box_shadow)}.ui5-input-clear-icon-wrapper{height:var(--_ui5-v2-10-0_input_icon_wrapper_height);padding:0;width:var(--_ui5-v2-10-0_input_icon_width);min-width:var(--_ui5-v2-10-0_input_icon_width);display:flex;justify-content:center;align-items:center;box-sizing:border-box}:host([value-state]:not([value-state="None"]):not([value-state="Positive"])) .ui5-input-clear-icon-wrapper{height:var(--_ui5-v2-10-0_input_icon_wrapper_state_height);vertical-align:top}:host([value-state="Positive"]) .ui5-input-clear-icon-wrapper{height:var(--_ui5-v2-10-0_input_icon_wrapper_success_state_height)}[ui5-icon].ui5-input-clear-icon{padding:0;color:inherit}[inner-input]::-webkit-outer-spin-button,[inner-input]::-webkit-inner-spin-button{-webkit-appearance:inherit;margin:inherit}
`;

  Theme.p("@ui5/webcomponents-theming", "sap_horizon", async () => parametersBundle_css.defaultThemeBase);
  Theme.p("@ui5/webcomponents", "sap_horizon", async () => parametersBundle_css$1.defaultTheme);
  var ValueStateMessageCss = `.ui5-valuestatemessage-popover{border-radius:var(--_ui5-v2-10-0_value_state_message_popover_border_radius);box-shadow:var(--_ui5-v2-10-0_value_state_message_popover_box_shadow)}.ui5-input-value-state-message-icon{width:var(--_ui5-v2-10-0_value_state_message_icon_width);height:var(--_ui5-v2-10-0_value_state_message_icon_height);display:var(--_ui5-v2-10-0_input_value_state_icon_display);position:absolute;padding-right:.375rem}.ui5-valuestatemessage-root .ui5-input-value-state-message-icon{left:var(--_ui5-v2-10-0_input_value_state_icon_offset)}.ui5-input-value-state-message-icon[name=error]{color:var(--sapNegativeElementColor)}.ui5-input-value-state-message-icon[name=alert]{color:var(--sapCriticalElementColor)}.ui5-input-value-state-message-icon[name=success]{color:var(--sapPositiveElementColor)}.ui5-input-value-state-message-icon[name=information]{color:var(--sapInformativeElementColor)}.ui5-valuestatemessage-root{box-sizing:border-box;display:inline-block;color:var(--sapTextColor);font-size:var(--sapFontSmallSize);font-family:"72override",var(--sapFontFamily);height:auto;padding:var(--_ui5-v2-10-0_value_state_message_padding);overflow:hidden;text-overflow:ellipsis;min-width:6.25rem;border:var(--_ui5-v2-10-0_value_state_message_border);line-height:var(--_ui5-v2-10-0_value_state_message_line_height)}[ui5-responsive-popover] .ui5-valuestatemessage-header,[ui5-popover] .ui5-valuestatemessage-header{min-height:2rem}[ui5-responsive-popover] .ui5-valuestatemessage-header{padding:var(--_ui5-v2-10-0_value_state_header_padding);border:var(--_ui5-v2-10-0_value_state_header_border);border-bottom:var(--_ui5-v2-10-0_value_state_header_border_bottom);flex-grow:1;position:relative}.ui5-valuestatemessage--success{background:var(--sapSuccessBackground)}.ui5-valuestatemessage--warning{background:var(--sapWarningBackground)}.ui5-valuestatemessage--error{background:var(--sapErrorBackground)}.ui5-valuestatemessage--information{background:var(--sapInformationBackground)}.ui5-responsive-popover-header.ui5-responsive-popover-header--focused,.ui5-responsive-popover-header:focus{outline-offset:var(--_ui5-v2-10-0_value_state_header_offset);outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor)}.ui5-valuestatemessage-popover::part(header),.ui5-valuestatemessage-popover::part(content){padding:0}.ui5-valuestatemessage-popover::part(header),.ui5-valuestatemessage-popover::part(footer){min-height:0}.ui5-valuestatemessage-popover::part(header),.ui5-popover-with-value-state-header::part(header),.ui5-popover-with-value-state-header-phone::part(header){margin-bottom:0}.ui5-popover-with-value-state-header-phone .ui5-valuestatemessage-root{padding:var(--_ui5-v2-10-0_value_state_message_padding_phone);width:100%}.ui5-popover-with-value-state-header-phone .ui5-input-value-state-message-icon{left:var(--_ui5-v2-10-0_value_state_message_icon_offset_phone)}.ui5-popover-with-value-state-header-phone .ui5-valuestatemessage-header{position:relative;flex:none;top:0;left:0}.ui5-popover-with-value-state-header-phone::part(content){padding:0;overflow:hidden;display:flex;flex-direction:column}.ui5-popover-with-value-state-header-phone [ui5-list]{overflow:auto}[ui5-responsive-popover] .ui5-valuestatemessage--error{box-shadow:var(--_ui5-v2-10-0_value_state_header_box_shadow_error)}[ui5-responsive-popover] .ui5-valuestatemessage--information{box-shadow:var(--_ui5-v2-10-0_value_state_header_box_shadow_information)}[ui5-responsive-popover] .ui5-valuestatemessage--success{box-shadow:var(--_ui5-v2-10-0_value_state_header_box_shadow_success)}[ui5-responsive-popover] .ui5-valuestatemessage--warning{box-shadow:var(--_ui5-v2-10-0_value_state_header_box_shadow_warning)}[ui5-responsive-popover].ui5-popover-with-value-state-header .ui5-valuestatemessage-root:has(+[ui5-list]:empty){box-shadow:none}
`;

  Theme.p("@ui5/webcomponents-theming", "sap_horizon", async () => parametersBundle_css.defaultThemeBase);
  Theme.p("@ui5/webcomponents", "sap_horizon", async () => parametersBundle_css$1.defaultTheme);
  var SuggestionsCss = `.ui5-suggestions-popover{box-shadow:var(--sapContent_Shadow1)}.ui5-suggestions-popover::part(header),.ui5-suggestions-popover::part(content){padding:0}.ui5-suggestions-popover::part(footer){padding:0 1rem}.input-root-phone.native-input-wrapper{display:contents}.input-root-phone.native-input-wrapper:before{display:none}.native-input-wrapper .ui5-input-inner-phone{margin:0}
`;

  var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var Input_1;
  // all sementic events
  var INPUT_EVENTS;
  (function (INPUT_EVENTS) {
      INPUT_EVENTS["CHANGE"] = "change";
      INPUT_EVENTS["INPUT"] = "input";
      INPUT_EVENTS["SELECTION_CHANGE"] = "selection-change";
  })(INPUT_EVENTS || (INPUT_EVENTS = {}));
  // all user interactions
  var INPUT_ACTIONS;
  (function (INPUT_ACTIONS) {
      INPUT_ACTIONS["ACTION_ENTER"] = "enter";
      INPUT_ACTIONS["ACTION_USER_INPUT"] = "input";
  })(INPUT_ACTIONS || (INPUT_ACTIONS = {}));
  /**
   * @class
   * ### Overview
   *
   * The `ui5-input` component allows the user to enter and edit text or numeric values in one line.
   *
   * Additionally, you can provide `suggestionItems`,
   * that are displayed in a popover right under the input.
   *
   * The text field can be editable or read-only (`readonly` property),
   * and it can be enabled or disabled (`disabled` property).
   * To visualize semantic states, such as "Negative" or "Critical", the `valueState` property is provided.
   * When the user makes changes to the text, the change event is fired,
   * which enables you to react on any text change.
   *
   * ### Keyboard Handling
   * The `ui5-input` provides the following keyboard shortcuts:
   *
   * - [Escape] - Closes the suggestion list, if open. If closed or not enabled, cancels changes and reverts to the value which the Input field had when it got the focus.
   * - [Enter] or [Return] - If suggestion list is open takes over the current matching item and closes it. If value state or group header is focused, does nothing.
   * - [Down] - Focuses the next matching item in the suggestion list. Selection-change event is fired.
   * - [Up] - Focuses the previous matching item in the suggestion list. Selection-change event is fired.
   * - [Home] - If focus is in the text input, moves caret before the first character. If focus is in the list, highlights the first item and updates the input accordingly.
   * - [End] - If focus is in the text input, moves caret after the last character. If focus is in the list, highlights the last item and updates the input accordingly.
   * - [Page Up] - If focus is in the list, moves highlight up by page size (10 items by default). If focus is in the input, does nothing.
   * - [Page Down] - If focus is in the list, moves highlight down by page size (10 items by default). If focus is in the input, does nothing.
   *
   * ### ES6 Module Import
   *
   * `import "@ui5/webcomponents/dist/Input.js";`
   *
   * @constructor
   * @extends UI5Element
   * @public
   * @csspart root - Used to style the root DOM element of the Input component
   * @csspart input - Used to style the native input element
   * @csspart clear-icon - Used to style the clear icon, which can be pressed to clear user input text
   */
  let Input = Input_1 = class Input extends webcomponentsBase.b {
      get formValidityMessage() {
          return Input_1.i18nBundle.getText(i18nDefaults.FORM_TEXTFIELD_REQUIRED);
      }
      get _effectiveShowSuggestions() {
          return !!(this.showSuggestions && this.Suggestions);
      }
      get formValidity() {
          return { valueMissing: this.required && !this.value };
      }
      async formElementAnchor() {
          return this.getFocusDomRefAsync();
      }
      get formFormattedValue() {
          return this.value;
      }
      constructor() {
          super();
          /**
           * Defines whether the component is in disabled state.
           *
           * **Note:** A disabled component is completely noninteractive.
           * @default false
           * @public
           */
          this.disabled = false;
          /**
           * Defines if characters within the suggestions are to be highlighted
           * in case the input value matches parts of the suggestions text.
           *
           * **Note:** takes effect when `showSuggestions` is set to `true`
           * @default false
           * @private
           * @since 1.0.0-rc.8
           */
          this.highlight = false;
          /**
           * Defines whether the component is read-only.
           *
           * **Note:** A read-only component is not editable,
           * but still provides visual feedback upon user interaction.
           * @default false
           * @public
           */
          this.readonly = false;
          /**
           * Defines whether the component is required.
           * @default false
           * @public
           * @since 1.0.0-rc.3
           */
          this.required = false;
          /**
           * Defines whether the value will be autcompleted to match an item
           * @default false
           * @public
           * @since 1.4.0
           */
          this.noTypeahead = false;
          /**
           * Defines the HTML type of the component.
           *
           * **Notes:**
           *
           * - The particular effect of this property differs depending on the browser
           * and the current language settings, especially for type `Number`.
           * - The property is mostly intended to be used with touch devices
           * that use different soft keyboard layouts depending on the given input type.
           * @default "Text"
           * @public
           */
          this.type = "Text";
          /**
           * Defines the value of the component.
           *
           * **Note:** The property is updated upon typing.
           * @default ""
           * @formEvents change input
           * @formProperty
           * @public
           */
          this.value = "";
          /**
           * Defines the inner stored value of the component.
           *
           * **Note:** The property is updated upon typing. In some special cases the old value is kept (e.g. deleting the value after the dot in a float)
           * @default ""
           * @private
           */
          this._innerValue = "";
          /**
           * Defines the value state of the component.
           * @default "None"
           * @public
           */
          this.valueState = "None";
          /**
           * Defines whether the component should show suggestions, if such are present.
           *
           * @default false
           * @public
           */
          this.showSuggestions = false;
          /**
           * Defines whether the clear icon of the input will be shown.
           * @default false
           * @public
           * @since 1.2.0
           */
          this.showClearIcon = false;
          /**
           * Defines whether the suggestions picker is open.
           * The picker will not open if the `showSuggestions` property is set to `false`, the input is disabled or the input is readonly.
           * The picker will close automatically and `close` event will be fired if the input is not in the viewport.
           * @default false
           * @public
           * @since 2.0.0
           */
          this.open = false;
          /**
           * Defines whether the clear icon is visible.
           * @default false
           * @private
           * @since 1.2.0
           */
          this._effectiveShowClearIcon = false;
          /**
           * @private
           */
          this.focused = false;
          this.valueStateOpen = false;
          /**
           * Indicates whether the visual focus is on the value state header
           * @private
           */
          this._isValueStateFocused = false;
          this._inputAccInfo = {};
          this._nativeInputAttributes = {};
          this._inputIconFocused = false;
          // Indicates if there is selected suggestionItem.
          this.hasSuggestionItemSelected = false;
          // Represents the value before user moves selection from suggestion item to another
          // and its value is updated after each move.
          // Note: Used to register and fire "input" event upon [Space] or [Enter].
          // Note: The property "value" is updated upon selection move and can`t be used.
          this.valueBeforeItemSelection = "";
          // Represents the value before user moves selection between the suggestion items
          // and its value remains the same when the user navigates up or down the list.
          // Note: Used to cancel selection upon [Escape].
          this.valueBeforeSelectionStart = "";
          // tracks the value between focus in and focus out to detect that change event should be fired.
          this.previousValue = "";
          // Indicates, if the component is rendering for first time.
          this.firstRendering = true;
          // The typed in value.
          this.typedInValue = "";
          // The last value confirmed by the user with "ENTER"
          this.lastConfirmedValue = "";
          // Indicates, if the user is typing. Gets reset once popup is closed
          this.isTyping = false;
          // Indicates whether the value of the input is comming from a suggestion item
          this._isLatestValueFromSuggestions = false;
          this._isChangeTriggeredBySuggestion = false;
          this._indexOfSelectedItem = -1;
          this._handleResizeBound = this._handleResize.bind(this);
          this._keepInnerValue = false;
          this._focusedAfterClear = false;
      }
      onEnterDOM() {
          webcomponentsBase.f.register(this, this._handleResizeBound);
          AccessibilityTextsHelper.y(this, this._updateAssociatedLabelsTexts.bind(this));
      }
      onExitDOM() {
          webcomponentsBase.f.deregister(this, this._handleResizeBound);
          AccessibilityTextsHelper.T(this);
      }
      _highlightSuggestionItem(item) {
          item.markupText = this.typedInValue ? this.Suggestions?.hightlightInput((item.text || ""), this.typedInValue) : fnEncodeXML(item.text || "");
      }
      _isGroupItem(item) {
          return item.hasAttribute("ui5-suggestion-item-group");
      }
      onBeforeRendering() {
          if (!this._keepInnerValue) {
              this._innerValue = this.value === null ? "" : this.value;
          }
          if (this.showSuggestions) {
              this.enableSuggestions();
              this._flattenItems.forEach(item => {
                  if (item.hasAttribute("ui5-suggestion-item")) {
                      this._highlightSuggestionItem(item);
                  }
                  else if (this._isGroupItem(item)) {
                      item.items?.forEach(nestedItem => {
                          this._highlightSuggestionItem(nestedItem);
                      });
                  }
              });
          }
          this._effectiveShowClearIcon = (this.showClearIcon && !!this.value && !this.readonly && !this.disabled);
          this.style.setProperty(Theme.d$2("--_ui5-input-icons-count"), `${this.iconsCount}`);
          const hasItems = !!this._flattenItems.length;
          const hasValue = !!this.value;
          const isFocused = this.shadowRoot.querySelector("input") === webcomponentsBase.t();
          if (this.shouldDisplayOnlyValueStateMessage) {
              this.openValueStatePopover();
          }
          else {
              this.closeValueStatePopover();
          }
          const preventOpenPicker = this.disabled || this.readonly;
          if (preventOpenPicker) {
              this.open = false;
          }
          else if (!this._isPhone) {
              this.open = hasItems && (this.open || (hasValue && isFocused && this.isTyping));
          }
          const value = this.value;
          const innerInput = this.getInputDOMRefSync();
          if (!innerInput || !value) {
              return;
          }
          const autoCompletedChars = innerInput.selectionEnd - innerInput.selectionStart;
          // Typehead causes issues on Android devices, so we disable it for now
          // If there is already a selection the autocomplete has already been performed
          if (this._shouldAutocomplete && !Theme.P() && !autoCompletedChars && !this._isKeyNavigation) {
              const item = this._getFirstMatchingItem(value);
              if (item) {
                  this._handleTypeAhead(item);
                  this._selectMatchingItem(item);
              }
          }
      }
      onAfterRendering() {
          const innerInput = this.getInputDOMRefSync();
          if (this.showSuggestions && this.Suggestions?._getPicker()) {
              this._listWidth = this.Suggestions._getListWidth();
              // disabled ItemNavigation from the list since we are not using it
              this.Suggestions._getList()._itemNavigation._getItems = () => [];
          }
          if (this._performTextSelection) {
              // this is required to syncronize lit-html input's value and user's input
              // lit-html does not sync its stored value for the value property when the user is typing
              if (innerInput.value !== this._innerValue) {
                  innerInput.value = this._innerValue;
              }
              if (this.typedInValue.length && this.value.length) {
                  innerInput.setSelectionRange(this.typedInValue.length, this.value.length);
              }
              this.fireDecoratorEvent("type-ahead");
          }
          this._performTextSelection = false;
      }
      _onkeydown(e) {
          this._isKeyNavigation = true;
          this._shouldAutocomplete = !this.noTypeahead && !(webcomponentsBase.x(e) || webcomponentsBase.V(e) || webcomponentsBase.H(e));
          if (webcomponentsBase.D(e)) {
              return this._handleUp(e);
          }
          if (webcomponentsBase.P(e)) {
              return this._handleDown(e);
          }
          if (webcomponentsBase.i(e)) {
              return this._handleSpace(e);
          }
          if (webcomponentsBase.B(e)) {
              return this._handleTab();
          }
          if (webcomponentsBase.b$1(e)) {
              const isValueUnchanged = this.previousValue === this.getInputDOMRefSync().value;
              this._enterKeyDown = true;
              if (isValueUnchanged && this._internals.form) {
                  webcomponentsBase.i$1(this);
              }
              return this._handleEnter(e);
          }
          if (webcomponentsBase.Y(e)) {
              return this._handlePageUp(e);
          }
          if (webcomponentsBase.Z(e)) {
              return this._handlePageDown(e);
          }
          if (webcomponentsBase.F(e)) {
              return this._handleHome(e);
          }
          if (webcomponentsBase.W(e)) {
              return this._handleEnd(e);
          }
          if (webcomponentsBase.H(e)) {
              return this._handleEscape();
          }
          if (this.showSuggestions) {
              this._clearPopoverFocusAndSelection();
          }
          this._isKeyNavigation = false;
      }
      _onkeyup(e) {
          // The native Delete event does not update the value property "on time".
          // So, the (native) change event is always fired with the old value
          if (webcomponentsBase.V(e)) {
              this.value = e.target.value;
          }
          this._enterKeyDown = false;
      }
      get currentItemIndex() {
          const allItems = this.Suggestions?._getItems();
          const currentItem = allItems.find(item => { return item.selected || item.focused; });
          const indexOfCurrentItem = currentItem ? allItems.indexOf(currentItem) : -1;
          return indexOfCurrentItem;
      }
      _handleUp(e) {
          if (this.Suggestions?.isOpened()) {
              this.Suggestions.onUp(e, this.currentItemIndex);
          }
      }
      _handleDown(e) {
          if (this.Suggestions?.isOpened()) {
              this.Suggestions.onDown(e, this.currentItemIndex);
          }
      }
      _handleSpace(e) {
          if (this.Suggestions) {
              this.Suggestions.onSpace(e);
          }
      }
      _handleTab() {
          if (this.Suggestions && (this.previousValue !== this.value)) {
              this.Suggestions.onTab();
          }
      }
      _handleEnter(e) {
          // if a group item is focused, this is false
          const suggestionItemPressed = !!(this.Suggestions?.onEnter(e));
          const innerInput = this.getInputDOMRefSync();
          const matchingItem = this._selectableItems.find(item => {
              return item.text === this.value;
          });
          if (matchingItem) {
              const itemText = matchingItem.text || "";
              innerInput.setSelectionRange(itemText.length, itemText.length);
              if (!suggestionItemPressed) {
                  this.fireSelectionChange(matchingItem, true);
                  this.acceptSuggestion(matchingItem, true);
                  this.open = false;
              }
          }
          if (this._isPhone && !this._flattenItems.length && !this.isTypeNumber) {
              innerInput.setSelectionRange(this.value.length, this.value.length);
          }
          if (!suggestionItemPressed) {
              this.lastConfirmedValue = this.value;
              return;
          }
          this.focused = true;
      }
      _handlePageUp(e) {
          if (this._isSuggestionsFocused) {
              this.Suggestions?.onPageUp(e);
          }
          else {
              e.preventDefault();
          }
      }
      _handlePageDown(e) {
          if (this._isSuggestionsFocused) {
              this.Suggestions?.onPageDown(e);
          }
          else {
              e.preventDefault();
          }
      }
      _handleHome(e) {
          if (this._isSuggestionsFocused) {
              this.Suggestions?.onHome(e);
          }
      }
      _handleEnd(e) {
          if (this._isSuggestionsFocused) {
              this.Suggestions?.onEnd(e);
          }
      }
      _handleEscape() {
          const hasSuggestions = this.showSuggestions && !!this.Suggestions;
          const isOpen = hasSuggestions && this.open;
          const innerInput = this.getInputDOMRefSync();
          const isAutoCompleted = innerInput.selectionEnd - innerInput.selectionStart > 0;
          this.isTyping = false;
          if (this.value !== this.previousValue && this.value !== this.lastConfirmedValue && !this.open) {
              this.value = this.lastConfirmedValue ? this.lastConfirmedValue : this.previousValue;
              this.fireDecoratorEvent(INPUT_EVENTS.INPUT, { inputType: "" });
              return;
          }
          if (!isOpen) {
              this.value = this.lastConfirmedValue ? this.lastConfirmedValue : this.previousValue;
              return;
          }
          if (isOpen && this.Suggestions?._isItemOnTarget()) {
              // Restore the value.
              this.value = this.typedInValue || this.valueBeforeSelectionStart;
              this.focused = true;
              return;
          }
          if (isAutoCompleted) {
              this.value = this.typedInValue;
          }
          if (this._isValueStateFocused) {
              this._isValueStateFocused = false;
              this.focused = true;
          }
      }
      _onfocusin(e) {
          this.focused = true; // invalidating property
          if (!this._focusedAfterClear) {
              this.previousValue = this.value;
          }
          this.valueBeforeSelectionStart = this.value;
          this._inputIconFocused = !!e.target && e.target === this.querySelector("[ui5-icon]");
          this._focusedAfterClear = false;
      }
      /**
       * Called on "focusin" of the native input HTML Element.
       * **Note:** implemented in MultiInput, but used in the Input template.
       */
      innerFocusIn() { }
      _onfocusout(e) {
          const toBeFocused = e.relatedTarget;
          if (this.Suggestions?._getPicker().contains(toBeFocused) || this.contains(toBeFocused) || this.getSlottedNodes("valueStateMessage").some(el => el.contains(toBeFocused))) {
              return;
          }
          this._keepInnerValue = false;
          this.focused = false; // invalidating property
          this._isChangeTriggeredBySuggestion = false;
          if (this.showClearIcon && !this._effectiveShowClearIcon) {
              this._clearIconClicked = false;
              this._handleChange();
          }
          this.open = false;
          this._clearPopoverFocusAndSelection();
          if (!this._clearIconClicked) {
              this.previousValue = "";
          }
          this.lastConfirmedValue = "";
          this.isTyping = false;
          if ((this.value !== this.previousValue) && this.showClearIcon) {
              this._clearIconClicked = false;
          }
      }
      _clearPopoverFocusAndSelection() {
          if (!this.showSuggestions || !this.Suggestions) {
              return;
          }
          this._isValueStateFocused = false;
          this.hasSuggestionItemSelected = false;
          this.Suggestions?._deselectItems();
          this.Suggestions?._clearItemFocus();
      }
      _click() {
          if (Theme.d$1() && !this.readonly && this.Suggestions) {
              this.blur();
              this.open = true;
          }
      }
      _handleChange() {
          if (this._clearIconClicked) {
              this._clearIconClicked = false;
              return;
          }
          const fireChange = () => {
              if (!this._isChangeTriggeredBySuggestion) {
                  this.fireDecoratorEvent(INPUT_EVENTS.CHANGE);
              }
              this.previousValue = this.value;
              this.typedInValue = this.value;
              this._isChangeTriggeredBySuggestion = false;
          };
          if (this.previousValue !== this.getInputDOMRefSync().value) {
              // if picker is open there might be a selected item, wait next tick to get the value applied
              if (this.Suggestions?._getPicker().open && this._flattenItems.some(item => item.hasAttribute("ui5-suggestion-item") && item.selected)) {
                  this._changeToBeFired = true;
              }
              else {
                  fireChange();
                  if (this._enterKeyDown && this._internals.form) {
                      webcomponentsBase.i$1(this);
                  }
              }
          }
      }
      _clear() {
          const valueBeforeClear = this.value;
          this.value = "";
          const prevented = !this.fireDecoratorEvent(INPUT_EVENTS.INPUT, { inputType: "" });
          if (prevented) {
              this.value = valueBeforeClear;
              return;
          }
          if (!this._isPhone) {
              this.fireResetSelectionChange();
              this.focus();
              this._focusedAfterClear = true;
          }
      }
      _iconMouseDown() {
          this._clearIconClicked = true;
      }
      _scroll(e) {
          this.fireDecoratorEvent("suggestion-scroll", {
              scrollTop: e.detail.scrollTop,
              scrollContainer: e.detail.targetRef,
          });
      }
      _handleSelect() {
          this.fireDecoratorEvent("select");
      }
      _handleInput(e) {
          const eventType = (e.detail && e.detail.inputType) || "";
          this._input(e, eventType);
      }
      _handleNativeInput(e) {
          const eventType = e.inputType || "";
          this._input(e, eventType);
      }
      _input(e, eventType) {
          const inputDomRef = this.getInputDOMRefSync();
          const emptyValueFiredOnNumberInput = this.value && this.isTypeNumber && !inputDomRef.value;
          this._keepInnerValue = false;
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
          this._shouldAutocomplete = !allowedEventTypes.includes(eventType) && !this.noTypeahead;
          if (e instanceof InputEvent) {
              // ---- Special cases of numeric Input ----
              // ---------------- Start -----------------
              // When the last character after the delimiter is removed.
              // In such cases, we want to skip the re-rendering of the
              // component as this leads to cursor repositioning and causes user experience issues.
              // There are few scenarios:
              // Example: type "123.4" and press BACKSPACE - the native input is firing event with the whole part as value (123).
              // Pressing BACKSPACE again will remove the delimiter and the native input will fire event with the whole part as value again (123).
              // Example: type "123.456", select/mark "456" and press BACKSPACE - the native input is firing event with the whole part as value (123).
              // Example: type "123.456", select/mark "123.456" and press BACKSPACE - the native input is firing event with empty value.
              const delimiterCase = this.isTypeNumber
                  && (e.inputType === "deleteContentForward" || e.inputType === "deleteContentBackward")
                  && !e.target.value.includes(".")
                  && this.value.includes(".");
              // Handle special numeric notation with "e", example "12.5e12"
              const eNotationCase = emptyValueFiredOnNumberInput && e.data === "e";
              // Handle special numeric notation with "-", example "-3"
              // When pressing BACKSPACE, the native input fires event with empty value
              const minusRemovalCase = emptyValueFiredOnNumberInput
                  && this.value.startsWith("-")
                  && this.value.length === 2
                  && (e.inputType === "deleteContentForward" || e.inputType === "deleteContentBackward");
              if (delimiterCase || eNotationCase || minusRemovalCase) {
                  this.value = e.target.value;
                  this._keepInnerValue = true;
              }
              // ----------------- End ------------------
          }
          if (e.target === inputDomRef) {
              this.focused = true;
              // stop the native event, as the semantic "input" would be fired.
              e.stopImmediatePropagation();
          }
          this.fireEventByAction(INPUT_ACTIONS.ACTION_ENTER, e);
          this.hasSuggestionItemSelected = false;
          this._isValueStateFocused = false;
          if (this.Suggestions) {
              this.Suggestions.updateSelectedItemPosition(-1);
          }
          this.isTyping = true;
      }
      _startsWithMatchingItems(str) {
          return StartsWith(str, this._selectableItems, "text");
      }
      _getFirstMatchingItem(current) {
          if (!this._flattenItems.length) {
              return;
          }
          const matchingItems = this._startsWithMatchingItems(current).filter(item => !this._isGroupItem(item));
          if (matchingItems.length) {
              return matchingItems[0];
          }
      }
      _handleSelectionChange(e) {
          this.Suggestions?.onItemPress(e);
      }
      _selectMatchingItem(item) {
          item.selected = true;
      }
      _handleTypeAhead(item) {
          const value = item.text ? item.text : "";
          this._innerValue = value;
          this.value = value;
          this._performTextSelection = true;
          this._shouldAutocomplete = false;
      }
      _handleResize() {
          this._inputWidth = this.offsetWidth;
      }
      _updateAssociatedLabelsTexts() {
          this._associatedLabelsTexts = AccessibilityTextsHelper.M(this);
          this._accessibleLabelsRefTexts = AccessibilityTextsHelper.E(this);
          this._associatedDescriptionRefTexts = AccessibilityTextsHelper.p(this);
      }
      _closePicker() {
          this.open = false;
      }
      _afterOpenPicker() {
          // Set initial focus to the native input
          if (Theme.d$1()) {
              (this.getInputDOMRef()).focus();
          }
          this._handlePickerAfterOpen();
      }
      _afterClosePicker() {
          this.announceSelectedItem();
          // close device's keyboard and prevent further typing
          if (Theme.d$1()) {
              this.blur();
              this.focused = false;
          }
          if (this._changeToBeFired && !this._isChangeTriggeredBySuggestion) {
              this.previousValue = this.value;
              this.fireDecoratorEvent(INPUT_EVENTS.CHANGE);
          }
          else {
              this._isChangeTriggeredBySuggestion = false;
          }
          this._changeToBeFired = false;
          this.open = false;
          this.isTyping = false;
          if (this.hasSuggestionItemSelected) {
              this.focus();
          }
          this._handlePickerAfterClose();
      }
      _handlePickerAfterOpen() {
          this.fireDecoratorEvent("open");
      }
      _handlePickerAfterClose() {
          this.Suggestions?._onClose();
          this.fireDecoratorEvent("close");
      }
      openValueStatePopover() {
          this.valueStateOpen = true;
      }
      closeValueStatePopover() {
          this.valueStateOpen = false;
      }
      _handleValueStatePopoverAfterClose() {
          this.valueStateOpen = false;
      }
      _getValueStatePopover() {
          return this.shadowRoot.querySelector("[ui5-popover]");
      }
      enableSuggestions() {
          if (this.Suggestions) {
              return;
          }
          const setup = (Suggestions) => {
              Suggestions.i18nBundle = Input_1.i18nBundle;
              this.Suggestions = new Suggestions(this, "suggestionItems", true, false);
          };
          // If the feature is preloaded (the user manually imported InputSuggestions.js), it is already available on the constructor
          if (Input_1.SuggestionsClass) {
              setup(Input_1.SuggestionsClass);
              // If feature is not preloaded, load it dynamically
          }
          else {
              new Promise(function (resolve, reject) { require(['uxc/integration/thirdparty/_dynamics/InputSuggestions'], resolve, reject); }).then(SuggestionsModule => {
                  setup(SuggestionsModule.default);
              });
          }
      }
      acceptSuggestion(item, keyboardUsed) {
          if (this._isGroupItem(item)) {
              return;
          }
          const value = this.typedInValue || this.value;
          const itemText = item.text || "";
          const fireChange = keyboardUsed
              ? this.valueBeforeItemSelection !== itemText : value !== itemText;
          this.hasSuggestionItemSelected = true;
          this.value = itemText;
          if (fireChange && (this.previousValue !== itemText)) {
              this.valueBeforeItemSelection = itemText;
              this.lastConfirmedValue = itemText;
              this._performTextSelection = true;
              this.fireDecoratorEvent(INPUT_EVENTS.CHANGE);
              this._isChangeTriggeredBySuggestion = true;
              // value might change in the change event handler
              this.typedInValue = this.value;
              this.previousValue = this.value;
          }
          this.valueBeforeSelectionStart = "";
          this.isTyping = false;
          this.open = false;
      }
      /**
       * Updates the input value on item select.
       * @param item The item that is on select
       */
      updateValueOnSelect(item) {
          const itemValue = this._isGroupItem(item) ? this.valueBeforeSelectionStart : item.text;
          this.value = itemValue || "";
          this._performTextSelection = true;
      }
      fireEventByAction(action, e) {
          const valueBeforeInput = this.value;
          const inputRef = this.getInputDOMRefSync();
          if (this.disabled || this.readonly) {
              return;
          }
          const inputValue = this.getInputValue();
          const isUserInput = action === INPUT_ACTIONS.ACTION_ENTER;
          this.value = inputValue;
          this.typedInValue = inputValue;
          this.valueBeforeSelectionStart = inputValue;
          const valueAfterInput = this.value;
          if (isUserInput) { // input
              const inputType = e.inputType || "";
              const prevented = !this.fireDecoratorEvent(INPUT_EVENTS.INPUT, { inputType });
              if (prevented) {
                  // if the value is not changed after preventing the input event, revert the value
                  if (valueAfterInput === this.value) {
                      this.value = valueBeforeInput;
                  }
                  inputRef && (inputRef.value = this.value);
              }
              this.fireResetSelectionChange();
          }
      }
      getInputValue() {
          const domRef = this.getDomRef();
          if (domRef) {
              return (this.getInputDOMRef()).value;
          }
          return "";
      }
      getInputDOMRef() {
          if (Theme.d$1() && this.Suggestions) {
              return this.Suggestions._getPicker().querySelector(".ui5-input-inner-phone");
          }
          return this.nativeInput;
      }
      getInputDOMRefSync() {
          if (Theme.d$1() && this.Suggestions?._getPicker()) {
              return this.Suggestions._getPicker().querySelector(".ui5-input-inner-phone").shadowRoot.querySelector("input");
          }
          return this.nativeInput;
      }
      /**
       * Returns a reference to the native input element
       * @protected
       */
      get nativeInput() {
          const domRef = this.getDomRef();
          return domRef ? domRef.querySelector(`input`) : null;
      }
      get nativeInputWidth() {
          return this.nativeInput ? this.nativeInput.offsetWidth : 0;
      }
      /**
       * Returns if the suggestions popover is scrollable.
       * The method returns `Promise` that resolves to true,
       * if the popup is scrollable and false otherwise.
       */
      isSuggestionsScrollable() {
          if (!this.Suggestions) {
              return Promise.resolve(false);
          }
          return this.Suggestions?._isScrollable();
      }
      onItemMouseDown(e) {
          e.preventDefault();
      }
      onItemSelected(suggestionItem, keyboardUsed) {
          const shouldFireSelectionChange = !keyboardUsed && !suggestionItem?.focused && this.valueBeforeItemSelection !== suggestionItem.text;
          if (shouldFireSelectionChange) {
              this.fireSelectionChange(suggestionItem, true);
          }
          this.acceptSuggestion(suggestionItem, keyboardUsed);
      }
      _handleSuggestionItemPress(e) {
          this.Suggestions?.onItemPress(e);
      }
      onItemSelect(item) {
          this.valueBeforeItemSelection = this.value;
          this.updateValueOnSelect(item);
          this.announceSelectedItem();
          this.fireSelectionChange(item, true);
      }
      get _flattenItems() {
          return this.getSlottedNodes("suggestionItems").flatMap(item => {
              return this._isGroupItem(item) ? [item, ...item.items] : [item];
          });
      }
      get _selectableItems() {
          return this._flattenItems.filter(item => !this._isGroupItem(item));
      }
      get valueStateTypeMappings() {
          return {
              "Positive": Input_1.i18nBundle.getText(i18nDefaults.VALUE_STATE_TYPE_SUCCESS),
              "Information": Input_1.i18nBundle.getText(i18nDefaults.VALUE_STATE_TYPE_INFORMATION),
              "Negative": Input_1.i18nBundle.getText(i18nDefaults.VALUE_STATE_TYPE_ERROR),
              "Critical": Input_1.i18nBundle.getText(i18nDefaults.VALUE_STATE_TYPE_WARNING),
          };
      }
      valueStateTextMappings() {
          return {
              "Positive": Input_1.i18nBundle.getText(i18nDefaults.VALUE_STATE_SUCCESS),
              "Information": Input_1.i18nBundle.getText(i18nDefaults.VALUE_STATE_INFORMATION),
              "Negative": Input_1.i18nBundle.getText(i18nDefaults.VALUE_STATE_ERROR),
              "Critical": Input_1.i18nBundle.getText(i18nDefaults.VALUE_STATE_WARNING),
          };
      }
      announceSelectedItem() {
          const invisibleText = this.shadowRoot.querySelector(`#selectionText`);
          if (invisibleText) {
              invisibleText.textContent = this.itemSelectionAnnounce;
          }
      }
      fireSelectionChange(item, isValueFromSuggestions) {
          if (this.Suggestions) {
              this.fireDecoratorEvent(INPUT_EVENTS.SELECTION_CHANGE, { item });
              this._isLatestValueFromSuggestions = isValueFromSuggestions;
          }
      }
      fireResetSelectionChange() {
          if (this._isLatestValueFromSuggestions) {
              this.fireSelectionChange(null, false);
              this.valueBeforeItemSelection = this.value;
          }
      }
      get _readonly() {
          return this.readonly && !this.disabled;
      }
      get _headerTitleText() {
          return Input_1.i18nBundle.getText(i18nDefaults.INPUT_SUGGESTIONS_TITLE);
      }
      get clearIconAccessibleName() {
          return Input_1.i18nBundle.getText(i18nDefaults.INPUT_CLEAR_ICON_ACC_NAME);
      }
      get _popupLabel() {
          return Input_1.i18nBundle.getText(i18nDefaults.INPUT_AVALIABLE_VALUES);
      }
      get inputType() {
          return this.type;
      }
      get inputNativeType() {
          return this.type.toLowerCase();
      }
      get isTypeNumber() {
          return this.type === InputType$1.Number;
      }
      get suggestionsTextId() {
          return this.showSuggestions ? `suggestionsText` : "";
      }
      get valueStateTextId() {
          return this.hasValueState ? `valueStateDesc` : "";
      }
      get _accInfoAriaDescription() {
          return (this._inputAccInfo && this._inputAccInfo.ariaDescription) || "";
      }
      get _accInfoAriaDescriptionId() {
          const hasAriaDescription = this._accInfoAriaDescription !== "";
          return hasAriaDescription ? "descr" : "";
      }
      get ariaDescriptionText() {
          return this._associatedDescriptionRefTexts || AccessibilityTextsHelper.L(this);
      }
      get ariaDescriptionTextId() {
          return this.ariaDescriptionText ? "accessibleDescription" : "";
      }
      get ariaDescribedByIds() {
          return [
              this.suggestionsTextId,
              this.valueStateTextId,
              this._inputAccInfo.ariaDescribedBy,
              this._accInfoAriaDescriptionId,
              this.ariaDescriptionTextId,
          ].filter(Boolean).join(" ");
      }
      get accInfo() {
          const ariaHasPopupDefault = this.showSuggestions ? "dialog" : undefined;
          const ariaAutoCompleteDefault = this.showSuggestions ? "list" : undefined;
          return {
              "ariaRoledescription": this._inputAccInfo && (this._inputAccInfo.ariaRoledescription || undefined),
              "ariaDescribedBy": this.ariaDescribedByIds || undefined,
              "ariaInvalid": this.valueState === decline.o.Negative ? true : undefined,
              "ariaHasPopup": this._inputAccInfo.ariaHasPopup ? this._inputAccInfo.ariaHasPopup : ariaHasPopupDefault,
              "ariaAutoComplete": this._inputAccInfo.ariaAutoComplete ? this._inputAccInfo.ariaAutoComplete : ariaAutoCompleteDefault,
              "role": this._inputAccInfo && this._inputAccInfo.role,
              "ariaControls": this._inputAccInfo && this._inputAccInfo.ariaControls,
              "ariaExpanded": this._inputAccInfo && this._inputAccInfo.ariaExpanded,
              "ariaDescription": this._accInfoAriaDescription,
              "accessibleDescription": this.ariaDescriptionText,
              "ariaLabel": (this._inputAccInfo && this._inputAccInfo.ariaLabel) || this._accessibleLabelsRefTexts || this.accessibleName || this._associatedLabelsTexts || undefined,
          };
      }
      get nativeInputAttributes() {
          return {
              "min": this.isTypeNumber ? this._nativeInputAttributes.min : undefined,
              "max": this.isTypeNumber ? this._nativeInputAttributes.max : undefined,
              "step": this.isTypeNumber ? (this._nativeInputAttributes.step || "any") : undefined,
          };
      }
      get ariaValueStateHiddenText() {
          if (!this.hasValueState) {
              return;
          }
          const valueState = this.valueState !== decline.o.None ? this.valueStateTypeMappings[this.valueState] : "";
          if (this.shouldDisplayDefaultValueStateMessage) {
              return this.valueStateText ? `${valueState} ${this.valueStateText}` : valueState;
          }
          return `${valueState}`.concat(" ", this.valueStateMessage.map(el => el.textContent).join(" "));
      }
      get itemSelectionAnnounce() {
          return this.Suggestions ? this.Suggestions.itemSelectionAnnounce : "";
      }
      get iconsCount() {
          const slottedIconsCount = this.icon ? this.icon.length : 0;
          const clearIconCount = Number(this._effectiveShowClearIcon) ?? 0;
          return slottedIconsCount + clearIconCount;
      }
      get classes() {
          return {
              popover: {
                  "ui5-suggestions-popover": this.showSuggestions,
                  "ui5-popover-with-value-state-header-phone": this._isPhone && this.showSuggestions && this.hasValueStateMessage,
                  "ui5-popover-with-value-state-header": !this._isPhone && this.showSuggestions && this.hasValueStateMessage,
              },
              popoverValueState: {
                  "ui5-valuestatemessage-root": true,
                  "ui5-valuestatemessage-header": true,
                  "ui5-valuestatemessage--success": this.valueState === decline.o.Positive,
                  "ui5-valuestatemessage--error": this.valueState === decline.o.Negative,
                  "ui5-valuestatemessage--warning": this.valueState === decline.o.Critical,
                  "ui5-valuestatemessage--information": this.valueState === decline.o.Information,
              },
          };
      }
      get styles() {
          const remSizeIxPx = parseInt(getComputedStyle(document.documentElement).fontSize);
          const stylesObject = {
              popoverHeader: {
                  "max-width": this._inputWidth ? `${this._inputWidth}px` : "",
              },
              suggestionPopoverHeader: {
                  "display": this._listWidth === 0 ? "none" : "inline-block",
                  "width": this._listWidth ? `${this._listWidth}px` : "",
              },
              suggestionsPopover: {
                  "min-width": this._inputWidth ? `${this._inputWidth}px` : "",
                  "max-width": this._inputWidth && (this._inputWidth / remSizeIxPx) > 40 ? `${this._inputWidth}px` : "40rem",
              },
              innerInput: {
                  "padding": "",
              },
          };
          return stylesObject;
      }
      get suggestionSeparators() {
          return "None";
      }
      get shouldDisplayOnlyValueStateMessage() {
          return this.hasValueStateMessage && !this.readonly && !this.open && this.focused;
      }
      get shouldDisplayDefaultValueStateMessage() {
          return !this.valueStateMessage.length && this.hasValueStateMessage;
      }
      get hasValueState() {
          return this.valueState !== decline.o.None;
      }
      get hasValueStateMessage() {
          return this.hasValueState && this.valueState !== decline.o.Positive
              && (!this._inputIconFocused // Handles the cases when valueStateMessage is forwarded (from datepicker e.g.)
                  || !!(this._isPhone && this.Suggestions)); // Handles Input with suggestions on mobile
      }
      get valueStateText() {
          return this.valueState !== decline.o.None ? this.valueStateTextMappings()[this.valueState] : undefined;
      }
      get suggestionsText() {
          return Input_1.i18nBundle.getText(i18nDefaults.INPUT_SUGGESTIONS);
      }
      get availableSuggestionsCount() {
          if (this.showSuggestions && (this.value || this.Suggestions?.isOpened())) {
              const nonGroupItems = this._selectableItems;
              switch (nonGroupItems.length) {
                  case 0:
                      return Input_1.i18nBundle.getText(i18nDefaults.INPUT_SUGGESTIONS_NO_HIT);
                  case 1:
                      return Input_1.i18nBundle.getText(i18nDefaults.INPUT_SUGGESTIONS_ONE_HIT);
                  default:
                      return Input_1.i18nBundle.getText(i18nDefaults.INPUT_SUGGESTIONS_MORE_HITS, nonGroupItems.length);
              }
          }
          return undefined;
      }
      get step() {
          return this.isTypeNumber ? "any" : undefined;
      }
      get _isPhone() {
          return Theme.d$1();
      }
      get _isSuggestionsFocused() {
          return !this.focused && this.Suggestions?.isOpened();
      }
      /**
       * Returns the placeholder value.
       * @protected
       */
      get _placeholder() {
          return this.placeholder;
      }
      /**
       * This method is relevant for sap_horizon theme only
       */
      get _valueStateInputIcon() {
          const iconPerValueState = {
              Negative: `<path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20ZM7.70711 13.7071C7.31658 14.0976 6.68342 14.0976 6.29289 13.7071C5.90237 13.3166 5.90237 12.6834 6.29289 12.2929L8.58579 10L6.29289 7.70711C5.90237 7.31658 5.90237 6.68342 6.29289 6.29289C6.68342 5.90237 7.31658 5.90237 7.70711 6.29289L10 8.58579L12.2929 6.29289C12.6834 5.90237 13.3166 5.90237 13.7071 6.29289C14.0976 6.68342 14.0976 7.31658 13.7071 7.70711L11.4142 10L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L10 11.4142L7.70711 13.7071Z" fill="#EE3939"/>`,
              Critical: `<path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M11.8619 0.49298C11.6823 0.187541 11.3544 0 11 0C10.6456 0 10.3177 0.187541 10.1381 0.49298L0.138066 17.493C-0.0438112 17.8022 -0.0461447 18.1851 0.13195 18.4965C0.310046 18.8079 0.641283 19 1 19H21C21.3587 19 21.69 18.8079 21.868 18.4965C22.0461 18.1851 22.0438 17.8022 21.8619 17.493L11.8619 0.49298ZM11 6C11.5523 6 12 6.44772 12 7V10C12 10.5523 11.5523 11 11 11C10.4477 11 10 10.5523 10 10V7C10 6.44772 10.4477 6 11 6ZM11 16C11.8284 16 12.5 15.3284 12.5 14.5C12.5 13.6716 11.8284 13 11 13C10.1716 13 9.5 13.6716 9.5 14.5C9.5 15.3284 10.1716 16 11 16Z" fill="#F58B00"/>`,
              Positive: `<path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10ZM14.7071 6.29289C14.3166 5.90237 13.6834 5.90237 13.2929 6.29289L8 11.5858L6.70711 10.2929C6.31658 9.90237 5.68342 9.90237 5.29289 10.2929C4.90237 10.6834 4.90237 11.3166 5.29289 11.7071L7.29289 13.7071C7.68342 14.0976 8.31658 14.0976 8.70711 13.7071L14.7071 7.70711C15.0976 7.31658 15.0976 6.68342 14.7071 6.29289Z" fill="#36A41D"/>`,
              Information: `<path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M3 0C1.34315 0 0 1.34315 0 3V15C0 16.6569 1.34315 18 3 18H15C16.6569 18 18 16.6569 18 15V3C18 1.34315 16.6569 0 15 0H3ZM9 6.5C9.82843 6.5 10.5 5.82843 10.5 5C10.5 4.17157 9.82843 3.5 9 3.5C8.17157 3.5 7.5 4.17157 7.5 5C7.5 5.82843 8.17157 6.5 9 6.5ZM9 8.5C9.55228 8.5 10 8.94772 10 9.5V13.5C10 14.0523 9.55228 14.5 9 14.5C8.44771 14.5 8 14.0523 8 13.5V9.5C8 8.94772 8.44771 8.5 9 8.5Z" fill="#1B90FF"/>`,
          };
          if (this.valueState !== decline.o.None) {
              return `
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 20 20" fill="none">
				${iconPerValueState[this.valueState]};
			</svg>
			`;
          }
          return "";
      }
      get _valueStatePopoverHorizontalAlign() {
          return this.effectiveDir !== "rtl" ? "Start" : "End";
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
      /**
       * Returns the caret position inside the native input
       * @protected
       */
      getCaretPosition() {
          return n(this.nativeInput);
      }
      /**
       * Sets the caret to a certain position inside the native input
       * @protected
       */
      setCaretPosition(pos) {
          o(this.nativeInput, pos);
      }
      /**
       * Removes the fractional part of floating-point number.
       * @param value the numeric value of Input of type "Number"
       */
      removeFractionalPart(value) {
          if (value.includes(".")) {
              return value.slice(0, value.indexOf("."));
          }
          if (value.includes(",")) {
              return value.slice(0, value.indexOf(","));
          }
          return value;
      }
  };
  __decorate([
      webcomponentsBase.s({ type: Boolean })
  ], Input.prototype, "disabled", void 0);
  __decorate([
      webcomponentsBase.s({ type: Boolean })
  ], Input.prototype, "highlight", void 0);
  __decorate([
      webcomponentsBase.s()
  ], Input.prototype, "placeholder", void 0);
  __decorate([
      webcomponentsBase.s({ type: Boolean })
  ], Input.prototype, "readonly", void 0);
  __decorate([
      webcomponentsBase.s({ type: Boolean })
  ], Input.prototype, "required", void 0);
  __decorate([
      webcomponentsBase.s({ type: Boolean })
  ], Input.prototype, "noTypeahead", void 0);
  __decorate([
      webcomponentsBase.s()
  ], Input.prototype, "type", void 0);
  __decorate([
      webcomponentsBase.s()
  ], Input.prototype, "value", void 0);
  __decorate([
      webcomponentsBase.s({ noAttribute: true })
  ], Input.prototype, "_innerValue", void 0);
  __decorate([
      webcomponentsBase.s()
  ], Input.prototype, "valueState", void 0);
  __decorate([
      webcomponentsBase.s()
  ], Input.prototype, "name", void 0);
  __decorate([
      webcomponentsBase.s({ type: Boolean })
  ], Input.prototype, "showSuggestions", void 0);
  __decorate([
      webcomponentsBase.s({ type: Number })
  ], Input.prototype, "maxlength", void 0);
  __decorate([
      webcomponentsBase.s()
  ], Input.prototype, "accessibleName", void 0);
  __decorate([
      webcomponentsBase.s()
  ], Input.prototype, "accessibleNameRef", void 0);
  __decorate([
      webcomponentsBase.s()
  ], Input.prototype, "accessibleDescription", void 0);
  __decorate([
      webcomponentsBase.s()
  ], Input.prototype, "accessibleDescriptionRef", void 0);
  __decorate([
      webcomponentsBase.s({ type: Boolean })
  ], Input.prototype, "showClearIcon", void 0);
  __decorate([
      webcomponentsBase.s({ type: Boolean })
  ], Input.prototype, "open", void 0);
  __decorate([
      webcomponentsBase.s({ type: Boolean })
  ], Input.prototype, "_effectiveShowClearIcon", void 0);
  __decorate([
      webcomponentsBase.s({ type: Boolean })
  ], Input.prototype, "focused", void 0);
  __decorate([
      webcomponentsBase.s()
  ], Input.prototype, "hint", void 0);
  __decorate([
      webcomponentsBase.s({ type: Boolean })
  ], Input.prototype, "valueStateOpen", void 0);
  __decorate([
      webcomponentsBase.s({ type: Boolean })
  ], Input.prototype, "_isValueStateFocused", void 0);
  __decorate([
      webcomponentsBase.s({ type: Object })
  ], Input.prototype, "_inputAccInfo", void 0);
  __decorate([
      webcomponentsBase.s({ type: Object })
  ], Input.prototype, "_nativeInputAttributes", void 0);
  __decorate([
      webcomponentsBase.s({ type: Number })
  ], Input.prototype, "_inputWidth", void 0);
  __decorate([
      webcomponentsBase.s({ type: Number })
  ], Input.prototype, "_listWidth", void 0);
  __decorate([
      webcomponentsBase.s({ type: Boolean, noAttribute: true })
  ], Input.prototype, "_inputIconFocused", void 0);
  __decorate([
      webcomponentsBase.s({ noAttribute: true })
  ], Input.prototype, "_associatedLabelsTexts", void 0);
  __decorate([
      webcomponentsBase.s({ noAttribute: true })
  ], Input.prototype, "_accessibleLabelsRefTexts", void 0);
  __decorate([
      webcomponentsBase.s({ noAttribute: true })
  ], Input.prototype, "_associatedDescriptionRefTexts", void 0);
  __decorate([
      webcomponentsBase.s({ type: Object })
  ], Input.prototype, "Suggestions", void 0);
  __decorate([
      webcomponentsBase.d({ type: HTMLElement, "default": true })
  ], Input.prototype, "suggestionItems", void 0);
  __decorate([
      webcomponentsBase.d()
  ], Input.prototype, "icon", void 0);
  __decorate([
      webcomponentsBase.d({
          type: HTMLElement,
          invalidateOnChildChange: true,
      })
  ], Input.prototype, "valueStateMessage", void 0);
  __decorate([
      i18n.i("@ui5/webcomponents")
  ], Input, "i18nBundle", void 0);
  Input = Input_1 = __decorate([
      webcomponentsBase.m({
          tag: "ui5-input",
          languageAware: true,
          formAssociated: true,
          renderer: parametersBundle_css.d,
          template: InputTemplate,
          styles: [
              inputStyles,
              ResponsivePopoverCommon_css.ResponsivePopoverCommonCss,
              ValueStateMessageCss,
              SuggestionsCss,
          ],
      })
      /**
       * Fired when the input operation has finished by pressing Enter or on focusout.
       * @public
       */
      ,
      eventStrict.l("change", {
          bubbles: true,
      })
      /**
       * Fired when the value of the component changes at each keystroke,
       * and when a suggestion item has been selected.
       * @public
       */
      ,
      eventStrict.l("input", {
          bubbles: true,
          cancelable: true,
      })
      /**
       * Fired when some text has been selected.
       *
       * @since 2.0.0
       * @public
       */
      ,
      eventStrict.l("select", {
          bubbles: true,
      })
      /**
       * Fired when the user navigates to a suggestion item via the ARROW keys,
       * as a preview, before the final selection.
       * @param {HTMLElement} item The previewed suggestion item.
       * @public
       * @since 2.0.0
       */
      ,
      eventStrict.l("selection-change", {
          bubbles: true,
      })
      /**
       * Fires when a suggestion item is autocompleted in the input.
       *
       * @private
       */
      ,
      eventStrict.l("type-ahead", {
          bubbles: true,
      })
      /**
       * Fired when the user scrolls the suggestion popover.
       * @param {Integer} scrollTop The current scroll position.
       * @param {HTMLElement} scrollContainer The scroll container.
       * @protected
       * @since 1.0.0-rc.8
       */
      ,
      eventStrict.l("suggestion-scroll", {
          bubbles: true,
      })
      /**
       * Fired when the suggestions picker is open.
       * @public
       * @since 2.0.0
       */
      ,
      eventStrict.l("open", {
          bubbles: true,
      })
      /**
       * Fired when the suggestions picker is closed.
       * @public
       * @since 2.0.0
       */
      ,
      eventStrict.l("close")
  ], Input);
  Input.define();
  var Input$1 = Input;

  exports.Input = Input$1;
  exports.StartsWith = StartsWith;
  exports.StartsWithPerTerm = StartsWithPerTerm;
  exports.ValueStateMessageCss = ValueStateMessageCss;
  exports.fnEncodeXML = fnEncodeXML;

}));
