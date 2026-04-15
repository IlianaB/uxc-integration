sap.ui.define(['uxc/integration/thirdparty/webcomponents-fiori', 'uxc/integration/thirdparty/Theme', 'uxc/integration/thirdparty/event-strict', 'uxc/integration/thirdparty/i18n2', 'uxc/integration/thirdparty/parameters-bundle.css', 'uxc/integration/thirdparty/AccessibilityTextsHelper', 'uxc/integration/thirdparty/ListItemStandard', 'uxc/integration/thirdparty/List', 'uxc/integration/thirdparty/Popover2', 'uxc/integration/thirdparty/Button2', 'uxc/integration/thirdparty/Menu', 'uxc/integration/thirdparty/Icon', 'uxc/integration/thirdparty/search', 'uxc/integration/thirdparty/da2', 'uxc/integration/thirdparty/Icons', 'uxc/integration/thirdparty/overflow', 'uxc/integration/thirdparty/slim-arrow-down', 'uxc/integration/thirdparty/parameters-bundle.css3', 'uxc/integration/thirdparty/i18n-defaults', 'uxc/integration/thirdparty/i18n', 'uxc/integration/thirdparty/LocaleData', 'uxc/integration/thirdparty/ListItemTemplate', 'uxc/integration/thirdparty/FocusableElements', 'uxc/integration/thirdparty/decline', 'uxc/integration/thirdparty/i18n-defaults3', 'uxc/integration/thirdparty/ListItemBase', 'uxc/integration/thirdparty/i18n-defaults2', 'uxc/integration/thirdparty/parameters-bundle.css2', 'uxc/integration/thirdparty/ListItemAdditionalText.css', 'uxc/integration/thirdparty/toLowercaseEnumValue', 'uxc/integration/thirdparty/getEffectiveScrollbarStyle', 'uxc/integration/thirdparty/Title', 'uxc/integration/thirdparty/willShowContent', 'uxc/integration/thirdparty/MenuItem2', 'uxc/integration/thirdparty/nav-back', 'uxc/integration/thirdparty/ResponsivePopover', 'uxc/integration/thirdparty/Dialog', 'uxc/integration/thirdparty/information', 'uxc/integration/thirdparty/ListItemCustom'], (function (webcomponentsBase, Theme, eventStrict, i18n, parametersBundle_css, AccessibilityTextsHelper, ListItemStandard, List, Popover, Button, Menu, Icon, search, da, Icons, overflow, slimArrowDown, parametersBundle_css$1, i18nDefaults, i18n$1, LocaleData, ListItemTemplate, FocusableElements, decline, i18nDefaults$1, ListItemBase, i18nDefaults$2, parametersBundle_css$2, ListItemAdditionalText_css, toLowercaseEnumValue, getEffectiveScrollbarStyle, Title, willShowContent, MenuItem, navBack, ResponsivePopover, Dialog, information, ListItemCustom) { 'use strict';

	const name$3 = "bell";
	const pathData$3 = "M32 416q0-7 15-21t31-40.5 25.5-67.5-1.5-101q-5-29 3-54.5t25-45 42-33T225 35q0-15 7-25t24-10q14 0 22.5 9t8.5 26q26 5 50 18t41 33 24.5 45.5T404 186q-12 60-1.5 101t27.5 67.5 33.5 40.5 16.5 21q0 14-9 23t-23 9H320q0 26-19 45t-45 19-45-19-19-45H64q-14 0-23-9t-9-23zm39 0h369q-10-11-25.5-30.5t-28-48.5-18-68 4.5-89q5-25-2.5-44T354 106q-19-23-42-32.5T256 64q-32 0-57.5 9.5T154 106q-10 11-18 30t-3 44q9 50 4 89t-16 68-25.5 48.5T71 416z";
	const ltr$3 = false;
	const collection$3 = "SAP-icons-v4";
	const packageName$3 = "@ui5/webcomponents-icons";

	Icons.f(name$3, { pathData: pathData$3, ltr: ltr$3, collection: collection$3, packageName: packageName$3 });

	const name$2 = "bell";
	const pathData$2 = "M475 374q5 7 5 16 0 11-7 18.5t-18 7.5H334q-5 27-27 45.5T256 480t-51-18.5-27-45.5H58q-11 0-18.5-7.5T32 390q0-10 6-16 1-1 8-9.5T61 341t14.5-35.5T82 260v-20q0-100 45-154t129-54 129.5 54T431 240v20q0 25 6.5 45.5T452 341t15 23.5 8 9.5zm-69-9q-11-20-19-46.5t-8-58.5v-20q0-32-5.5-60t-20-50-38-34.5T256 83t-59.5 12.5-38 34.5-20 50-5.5 60v20q0 32-8 58.5T106 365h300z";
	const ltr$2 = false;
	const collection$2 = "SAP-icons-v5";
	const packageName$2 = "@ui5/webcomponents-icons";

	Icons.f(name$2, { pathData: pathData$2, ltr: ltr$2, collection: collection$2, packageName: packageName$2 });

	var bell = "bell";

	const name$1 = "grid";
	const pathData$1 = "M394 362h55q14 0 22.5 9t8.5 23v54q0 14-8.5 23t-22.5 9h-55q-14 0-22.5-9t-8.5-23v-54q0-14 8.5-23t22.5-9zM228 197h55q14 0 22.5 9t8.5 23v54q0 13-9 22.5t-22 9.5h-55q-13 0-22-9.5t-9-22.5v-54q0-14 8.5-23t22.5-9zm135-79V64q0-14 8.5-23t22.5-9h55q14 0 22.5 9t8.5 23v54q0 13-9 22.5t-22 9.5h-55q-13 0-22-9.5t-9-22.5zm31 79h55q14 0 22.5 9t8.5 23v54q0 13-9 22.5t-22 9.5h-55q-13 0-22-9.5t-9-22.5v-54q0-14 8.5-23t22.5-9zM63 32h55q14 0 22.5 9t8.5 23v54q0 13-9 22.5t-22 9.5H63q-13 0-22-9.5T32 118V64q0-14 8.5-23T63 32zM32 229q0-14 8.5-23t22.5-9h55q14 0 22.5 9t8.5 23v54q0 13-9 22.5t-22 9.5H63q-13 0-22-9.5T32 283v-54zm31 133h55q14 0 22.5 9t8.5 23v54q0 13-9 22.5t-22 9.5H63q-13 0-22-9.5T32 448v-54q0-14 8.5-23t22.5-9zM228 32h55q14 0 22.5 9t8.5 23v54q0 13-9 22.5t-22 9.5h-55q-13 0-22-9.5t-9-22.5V64q0-14 8.5-23t22.5-9zm-31 362q0-14 8.5-23t22.5-9h55q14 0 22.5 9t8.5 23v54q0 13-9 22.5t-22 9.5h-55q-13 0-22-9.5t-9-22.5v-54z";
	const ltr$1 = false;
	const collection$1 = "SAP-icons-v4";
	const packageName$1 = "@ui5/webcomponents-icons";

	Icons.f(name$1, { pathData: pathData$1, ltr: ltr$1, collection: collection$1, packageName: packageName$1 });

	const name = "grid";
	const pathData = "M80 128q-20 0-34-14T32 80t14-34 34-14 34 14 14 34-14 34-34 14zm176 0q-20 0-34-14t-14-34 14-34 34-14 34 14 14 34-14 34-34 14zm176 0q-20 0-34-14t-14-34 14-34 34-14 34 14 14 34-14 34-34 14zM80 208q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm176 0q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm176 0q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zM80 384q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm176 0q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14zm176 0q20 0 34 14t14 34-14 34-34 14-34-14-14-34 14-34 34-14z";
	const ltr = false;
	const collection = "SAP-icons-v5";
	const packageName = "@ui5/webcomponents-icons";

	Icons.f(name, { pathData, ltr, collection, packageName });

	var grid = "grid";

	function n(e,o){let t=null,l=null;return function(...u){if(l){t=u;return}e(...u),l=setTimeout(()=>{t&&(e(...t),t=null),l=null;},o);}}

	function PopoversTemplate() {
	    return (parametersBundle_css.jsxs(parametersBundle_css.Fragment, { children: [parametersBundle_css.jsx(Popover.Popover, { class: "ui5-shellbar-menu-popover", hideArrow: true, placement: "Bottom", preventInitialFocus: true, onBeforeOpen: this._menuPopoverBeforeOpen, onClose: this._menuPopoverAfterClose, children: parametersBundle_css.jsx(List.List, { separators: "None", selectionMode: "Single", onItemClick: this._menuItemPress, children: parametersBundle_css.jsx("slot", { name: "menuItems" }) }) }), parametersBundle_css.jsx(Popover.Popover, { class: "ui5-shellbar-overflow-popover", placement: "Bottom", preventInitialFocus: true, horizontalAlign: this.popoverHorizontalAlign, hideArrow: true, onBeforeOpen: this._overflowPopoverBeforeOpen, onClose: this._overflowPopoverAfterClose, children: parametersBundle_css.jsx(List.List, { separators: "None", onItemClick: this._handleActionListClick, children: this._hiddenIcons.map((icon, index) => (parametersBundle_css.jsx(ListItemStandard.ListItemStandard, { "data-count": icon.count, "data-ui5-external-action-item-id": icon.refItemid, icon: icon.icon ? icon.icon : "", type: "Active", "onui5-_press": icon.press, tooltip: icon.tooltip, accessibilityAttributes: this.accInfo.search.accessibilityAttributes, children: icon.text }, index))) }) })] }));
	}

	function ShellBarTemplate() {
	    return (parametersBundle_css.jsxs(parametersBundle_css.Fragment, { children: [parametersBundle_css.jsxs("header", { class: this.classes.wrapper, "aria-label": this._shellbarText, onKeyDown: this._onKeyDown, part: "root", children: [parametersBundle_css.jsxs("div", { class: "ui5-shellbar-overflow-container ui5-shellbar-overflow-container-left", children: [this.startButton.length > 0 && parametersBundle_css.jsx("slot", { name: "startButton" }), this.hasMenuItems && (parametersBundle_css.jsxs(parametersBundle_css.Fragment, { children: [!this.showLogoInMenuButton && this.hasLogo && singleLogo.call(this), this.showTitleInMenuButton && parametersBundle_css.jsx("h1", { class: "ui5-hidden-text", children: this.primaryTitle }), this.showMenuButton && (parametersBundle_css.jsxs(parametersBundle_css.Fragment, { children: [parametersBundle_css.jsxs("button", { class: {
	                                                    "ui5-shellbar-menu-button": true,
	                                                    ...this.classes.button,
	                                                }, onClick: this._headerPress, "aria-haspopup": "menu", "aria-expanded": this._menuPopoverExpanded, "aria-label": this._brandingText, "data-ui5-stable": "menu", tabIndex: 0, children: [this.showLogoInMenuButton && (parametersBundle_css.jsx("span", { class: "ui5-shellbar-logo", "aria-label": this._logoText, title: this._logoText, children: parametersBundle_css.jsx("slot", { name: "logo" }) })), this.showTitleInMenuButton && (parametersBundle_css.jsx("div", { class: "ui5-shellbar-menu-button-title", children: this.primaryTitle })), parametersBundle_css.jsx(Icon.Icon, { class: "ui5-shellbar-menu-button-arrow", name: slimArrowDown.slimArrowDown })] }), this.secondaryTitle && !this.isSBreakPoint && (parametersBundle_css.jsx("div", { style: { display: "block" }, class: "ui5-shellbar-secondary-title", "data-ui5-stable": "secondary-title", children: this.secondaryTitle }))] }))] })), !this.hasMenuItems && (parametersBundle_css.jsxs(parametersBundle_css.Fragment, { children: [this.isSBreakPoint && this.hasLogo && singleLogo.call(this), !this.isSBreakPoint && (parametersBundle_css.jsxs(parametersBundle_css.Fragment, { children: [combinedLogo.call(this), this.secondaryTitle && this.primaryTitle && (parametersBundle_css.jsx("h2", { class: "ui5-shellbar-secondary-title", "data-ui5-stable": "secondary-title", children: this.secondaryTitle }))] }))] }))] }), this.hasMidContent && (parametersBundle_css.jsx("div", { class: "ui5-shellbar-overflow-container ui5-shellbar-mid-content", children: parametersBundle_css.jsx("slot", { name: "midContent" }) })), parametersBundle_css.jsx("div", { class: "ui5-shellbar-overflow-container ui5-shellbar-overflow-container-right", children: parametersBundle_css.jsxs("div", { class: "ui5-shellbar-overflow-container-right-inner", children: [this.hasContentItems && (parametersBundle_css.jsxs("div", { class: "ui5-shellbar-content-items", role: this._contentItemsRole, "aria-label": this._contentItemsText, children: [this.showStartSeparator && (parametersBundle_css.jsx("div", { class: {
	                                                "ui5-shellbar-separator": true,
	                                                "ui5-shellbar-separator-start": true,
	                                            } })), this.startContent.map(item => {
	                                            const itemInfo = this._contentInfo.find(info => info.id === item._individualSlot);
	                                            return (parametersBundle_css.jsxs("div", { id: item._individualSlot, class: itemInfo?.classes, children: [this.shouldIncludeSeparator(itemInfo, this.startContentInfoSorted) && (
	                                                    // never displayed, only "packed" with last item that was hidden, used for measurement purposes
	                                                    parametersBundle_css.jsx("div", { class: {
	                                                            "ui5-shellbar-separator": true,
	                                                            "ui5-shellbar-separator-start": true,
	                                                        } })), parametersBundle_css.jsx("slot", { name: item._individualSlot })] }, item._individualSlot));
	                                        }), parametersBundle_css.jsx("div", { class: "ui5-shellbar-spacer" }), this.endContent.map(item => {
	                                            const itemInfo = this._contentInfo.find(info => info.id === item._individualSlot);
	                                            return (parametersBundle_css.jsxs("div", { id: item._individualSlot, class: itemInfo?.classes, children: [parametersBundle_css.jsx("slot", { name: item._individualSlot }), this.shouldIncludeSeparator(itemInfo, this.endContentInfoSorted) && (
	                                                    // never displayed, only "packed" with last item that was hidden, used for measurement purposes
	                                                    parametersBundle_css.jsx("div", { class: {
	                                                            "ui5-shellbar-separator": true,
	                                                            "ui5-shellbar-separator-end": true,
	                                                        } }))] }, item._individualSlot));
	                                        }), this.showEndSeparator && (parametersBundle_css.jsx("div", { class: {
	                                                "ui5-shellbar-separator": true,
	                                                "ui5-shellbar-separator-end": true,
	                                            } }))] })), !this.hasContentItems && parametersBundle_css.jsx("div", { class: "ui5-shellbar-spacer" }), parametersBundle_css.jsxs("div", { class: "ui5-shellbar-overflow-container-right-child", role: this._rightChildRole, children: [this.hasSearchField && (parametersBundle_css.jsxs(parametersBundle_css.Fragment, { children: [this.showFullWidthSearch && (parametersBundle_css.jsxs("div", { class: "ui5-shellbar-search-full-width-wrapper", style: this.styles.searchField, children: [parametersBundle_css.jsx("div", { class: "ui5-shellbar-search-full-field", children: parametersBundle_css.jsx("slot", { name: "searchField" }) }), parametersBundle_css.jsx(Button.Button, { onClick: this._handleCancelButtonPress, class: "ui5-shellbar-button ui5-shellbar-cancel-button", "data-ui5-stable": "cancel-search", children: this._cancelBtnText })] })), parametersBundle_css.jsx("div", { id: this.hasSelfCollapsibleSearch ? `${this._id}-item-1` : undefined, class: this.classes.searchField, style: this.styles.searchField, children: parametersBundle_css.jsx("slot", { name: "searchField" }) }), !(this.hasSelfCollapsibleSearch || this.hideSearchButton) && (parametersBundle_css.jsx(Button.Button, { id: `${this._id}-item-1`, class: {
	                                                        "ui5-shellbar-button": true,
	                                                        "ui5-shellbar-search-button": true,
	                                                        "ui5-shellbar-search-item-for-arrow-nav": true,
	                                                        ...this.classes.search,
	                                                    }, icon: "sap-icon://search", "data-ui5-text": "Search", "data-ui5-notifications-count": this.notificationsCount, "data-ui5-stable": "toggle-search", onClick: this._handleSearchIconPress, tooltip: this._searchBtnOpen, "aria-label": this._searchBtnOpen, "aria-expanded": this.showSearchField, accessibilityAttributes: this.accInfo.search.accessibilityAttributes }))] })), this.hasAssistant && (parametersBundle_css.jsx("div", { id: `${this._id}-assistant`, class: this.classes.assistant, children: parametersBundle_css.jsx("slot", { name: "assistant" }) })), this.showNotifications && (parametersBundle_css.jsx(Button.Button, { id: `${this._id}-item-2`, class: {
	                                                "ui5-shellbar-button": true,
	                                                "ui5-shellbar-bell-button": true,
	                                                "ui5-shellbar-items-for-arrow-nav": true,
	                                                ...this.classes.notification,
	                                            }, icon: "sap-icon://bell", "data-ui5-text": "Notifications", "data-ui5-notifications-count": this.notificationsCount, onClick: this._handleNotificationsPress, tooltip: this._notificationsText, accessibilityAttributes: this.accInfo.notifications.accessibilityAttributes, "data-ui5-stable": "notifications" })), this.customItemsInfo.map(item => (parametersBundle_css.jsx(Button.Button, { id: item.id, class: `${item.classes} ui5-shellbar-items-for-arrow-nav`, icon: item.icon, tooltip: item.tooltip, "data-count": item.count, "data-ui5-notifications-count": this.notificationsCount, "data-ui5-external-action-item-id": item.refItemid, "data-ui5-stable": item.stableDomRef, onClick: item.press, accessibilityAttributes: item.accessibilityAttributes, accessibleName: item.accessibleName }, item.id)))] })] }) }), parametersBundle_css.jsx(Button.Button, { id: `${this._id}-item-5`, class: {
	                            "ui5-shellbar-button": true,
	                            "ui5-shellbar-overflow-button": true,
	                            "ui5-shellbar-items-for-arrow-nav": true,
	                            ...this.classes.overflow,
	                        }, icon: "sap-icon://overflow", "data-count": this._overflowNotifications, onClick: this._handleOverflowPress, tooltip: this._overflowText, accessibilityAttributes: this.accInfo.overflow.accessibilityAttributes, "data-ui5-stable": "overflow" }), this.hasProfile && profileButton.call(this), this.showProductSwitch && (parametersBundle_css.jsx(Button.Button, { id: `${this._id}-item-4`, class: "ui5-shellbar-no-overflow-button ui5-shellbar-button ui5-shellbar-button-product-switch ui5-shellbar-items-for-arrow-nav", icon: "sap-icon://grid", "data-ui5-text": "Product Switch", onClick: this._handleProductSwitchPress, tooltip: this._productsText, "aria-label": this._productSwitchBtnText, "aria-haspopup": "dialog", "aria-expanded": this.accInfo.products.accessibilityAttributes.expanded, accessibilityAttributes: this.accInfo.products.accessibilityAttributes, "data-ui5-stable": "product-switch" }))] }), PopoversTemplate.call(this)] }));
	}
	function profileButton() {
	    return (parametersBundle_css.jsx(Button.Button, { "data-profile-btn": true, id: `${this._id}-item-3`, onClick: this._handleProfilePress, tooltip: this._profileText, class: "ui5-shellbar-button ui5-shellbar-image-button ui5-shellbar-no-overflow-button ui5-shellbar-items-for-arrow-nav", "aria-label": this.imageBtnText, "aria-haspopup": "dialog", accessibilityAttributes: this.accInfo.profile.accessibilityAttributes, "data-ui5-stable": "profile", children: parametersBundle_css.jsx("slot", { name: "profile" }) }));
	}
	function singleLogo() {
	    return (parametersBundle_css.jsx("span", { role: this.accLogoRole, class: "ui5-shellbar-logo", "aria-label": this._logoText, title: this._logoText, onClick: this._logoPress, onKeyDown: this._logoKeydown, onKeyUp: this._logoKeyup, tabIndex: 0, "data-ui5-stable": "logo", children: parametersBundle_css.jsx("slot", { name: "logo" }) }));
	}
	function combinedLogo() {
	    return (parametersBundle_css.jsxs("div", { role: this.accLogoRole, class: "ui5-shellbar-logo-area", onClick: this._logoPress, tabIndex: 0, onKeyDown: this._logoKeydown, onKeyUp: this._logoKeyup, "aria-label": this.accessibilityAttributes.branding?.name || this._logoAreaText, children: [this.hasLogo && (parametersBundle_css.jsx("span", { class: "ui5-shellbar-logo", title: this._logoText, onClick: this._logoPress, onKeyDown: this._logoKeydown, onKeyUp: this._logoKeyup, "data-ui5-stable": "logo", children: parametersBundle_css.jsx("slot", { name: "logo" }) })), parametersBundle_css.jsx("div", { class: "ui5-shellbar-headings", children: this.primaryTitle && (parametersBundle_css.jsx("h1", { class: "ui5-shellbar-title", children: parametersBundle_css.jsx("bdi", { children: this.primaryTitle }) })) })] }));
	}

	Theme.p("@ui5/webcomponents-theming", "sap_horizon", async () => parametersBundle_css.defaultThemeBase);
	Theme.p("@ui5/webcomponents-fiori", "sap_horizon", async () => parametersBundle_css$1.defaultTheme);
	var shellBarStyles = `.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:inline-block;width:100%;max-width:100%;background:var(--sapShellColor);box-sizing:border-box}:host{--_ui5-v2-10-0_input_placeholder_color: var(--sapShell_InteractiveTextColor);--_ui5-v2-10-0_input_border_radius: var(--_ui5-v2-10-0_shellbar_input_border_radius);--_ui5-v2-10-0_input_focus_border_radius: var(--_ui5-v2-10-0_shellbar_input_focus_border_radius);--_ui5-v2-10-0_input_background_color: var(--_ui5-v2-10-0_shellbar_input_background_color);--_ui5-v2-10-0_input_focus_outline_color: var(--_ui5-v2-10-0_shellbar_input_focus_outline_color);--_ui5-v2-10-0_input_margin_top_bottom: 0;box-shadow:inset 0 -.0625rem 0 0 var(--sapPageHeader_BorderColor)}.ui5-shellbar-root{position:relative;display:flex;justify-content:space-between;align-items:center;height:var(--_ui5-v2-10-0_shellbar_root_height);font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize);font-weight:400;box-sizing:border-box}.ui5-shellbar-menu-button,.ui5-shellbar-button,.ui5-shellbar-image-button,::slotted([ui5-toggle-button]:not([slot^="content"])),::slotted([ui5-button]:not([slot^="content"])){height:2.25rem;padding:0;margin-inline-start:var(--_ui5-v2-10-0-shellbar-overflow-button-margin);border:.0625rem solid var(--sapButton_Lite_BorderColor);background:var(--sapButton_Lite_Background);outline-color:var(--_ui5-v2-10-0_shellbar_logo_outline_color);color:var(--sapShell_TextColor);box-sizing:border-box;cursor:pointer;border-radius:var(--_ui5-v2-10-0_shellbar_button_border_radius);position:relative;font-weight:700;white-space:initial;overflow:initial;text-overflow:initial;line-height:inherit;letter-spacing:inherit;word-spacing:inherit}::slotted([ui5-toggle-button][slot="assistant"]){margin-inline-start:0}.ui5-shellbar-assistant-button{margin-inline-start:var(--_ui5-v2-10-0-shellbar-overflow-button-margin)}::slotted([ui5-button][slot="startButton"]){margin-inline-start:0}::slotted([ui5-toggle-button]:hover),::slotted([ui5-button]:hover),.ui5-shellbar-menu-button.ui5-shellbar-menu-button--interactive:hover,.ui5-shellbar-button:hover,.ui5-shellbar-image-button:hover,::slotted([ui5-button][slot="midContent"]:hover){background:var(--sapShell_Hover_Background);border-color:var(--sapButton_Lite_Hover_BorderColor);color:var(--sapShell_TextColor)}::slotted([ui5-toggle-button][slot="assistant"][pressed]),::slotted([ui5-toggle-button][slot="assistant"][pressed]:hover:not([active])){color:var(--sapShell_Assistant_ForegroundColor)}::slotted([ui5-toggle-button][active]),::slotted([ui5-button][active]),.ui5-shellbar-menu-button.ui5-shellbar-menu-button--interactive:active,.ui5-shellbar-button[active],.ui5-shellbar-image-button:active{background:var(--sapShell_Active_Background);border-color:var(--sapButton_Lite_Active_BorderColor);color:var(--_ui5-v2-10-0_shellbar_button_active_color)}:host([desktop]) .ui5-shellbar-menu-button.ui5-shellbar-menu-button--interactive:focus,.ui5-shellbar-menu-button.ui5-shellbar-menu-button--interactive:focus-visible{outline:var(--_ui5-v2-10-0_shellbar_logo_outline);outline-offset:var(--_ui5-v2-10-0_shellbar_outline_offset)}slot[name=profile]{min-width:0}::slotted([ui5-avatar][slot="profile"]){display:block;width:2rem;height:2rem;min-width:0;min-height:2rem;pointer-events:none;font-size:var(--_ui5-v2-10-0_avatar_fontsize_XS);font-weight:400}.ui5-shellbar-menu-button.ui5-shellbar-menu-button--interactive::-moz-focus-inner{border:none}.ui5-shellbar-menu-button-arrow,.ui5-shellbar-menu-button-title,.ui5-shellbar-title{display:inline-block;font-family:var(--sapFontSemiboldFamily);margin:0;font-size:var(--_ui5-v2-10-0_shellbar_menu_button_title_font_size);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--sapShell_SubBrand_TextColor)}:host(:not([primary-title])) .ui5-shellbar-menu-button{min-width:2.25rem;justify-content:center}.ui5-shellbar-secondary-title{display:inline-block;font-size:var(--sapFontSmallSize);color:var(--sapShell_TextColor);font-weight:400;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;margin:0;text-align:start}.ui5-shellbar-headings{display:flex;flex-direction:column;justify-content:center;height:100%;overflow:hidden;margin-left:.25rem}.ui5-shellbar-menu-button--interactive .ui5-shellbar-menu-button-arrow{margin-inline-start:.375rem}.ui5-shellbar-overflow-container{display:flex;justify-content:center;align-items:center;height:100%;overflow:hidden}.ui5-shellbar-overflow-container-middle{align-self:flex-start;height:var(--_ui5-v2-10-0_shellbar_overflow_container_middle_height);width:0;flex-shrink:0}.ui5-shellbar-mid-content{height:var(--_ui5-v2-10-0_shellbar_overflow_container_middle_height)}:host([breakpoint-size="S"]) .ui5-shellbar-menu-button{margin-inline-start:0}:host([breakpoint-size="S"]){padding:0 1rem}:host([breakpoint-size="S"]) .ui5-shellbar-search-full-width-wrapper{padding:0 1rem}:host([breakpoint-size="M"]){padding:0 2rem}:host([breakpoint-size="M"]) .ui5-shellbar-search-full-width-wrapper{padding:0 2rem}:host([breakpoint-size="L"]){padding:0 2rem}:host([breakpoint-size="XL"]){padding:0 3rem}:host([breakpoint-size="XXL"]){padding:0 3rem}.ui5-shellbar-logo{overflow:hidden;cursor:pointer;max-height:2rem;max-width:3.75rem}.ui5-shellbar-logo-area{overflow:hidden;display:flex;align-items:center;padding:.25rem .5rem .25rem .25rem;box-sizing:border-box;cursor:pointer;background:var(--sapButton_Lite_Background);border:1px solid var(--sapButton_Lite_BorderColor);color:var(--sapShell_TextColor);margin-inline-start:.125rem}.ui5-shellbar-logo:focus,.ui5-shellbar-logo-area:focus{outline:var(--_ui5-v2-10-0_shellbar_logo_outline);border-radius:var(--_ui5-v2-10-0_shellbar_logo_border_radius)}.ui5-shellbar-overflow-container>.ui5-shellbar-logo:hover,.ui5-shellbar-logo-area:hover{box-shadow:var(--_ui5-v2-10-0_shellbar_button_box_shadow);border-radius:var(--_ui5-v2-10-0_shellbar_logo_border_radius)}.ui5-shellbar-logo-area:active:focus{background:var(--sapShell_Active_Background);border:1px solid var(--sapButton_Lite_Active_BorderColor);color:var(--sapShell_Active_TextColor)}.ui5-shellbar-menu-button.ui5-shellbar-menu-button--interactive:hover{box-shadow:var(--_ui5-v2-10-0_shellbar_button_box_shadow)}.ui5-shellbar-menu-button.ui5-shellbar-menu-button--interactive:active{box-shadow:var(--_ui5-v2-10-0_shellbar_button_box_shadow_active)}.ui5-shellbar-menu-button.ui5-shellbar-menu-button--interactive:active .ui5-shellbar-menu-button-arrow,.ui5-shellbar-menu-button.ui5-shellbar-menu-button--interactive:active .ui5-shellbar-menu-button-title{color:var(--sapShell_Active_TextColor)}.ui5-shellbar-menu-button .ui5-shellbar-logo:hover{box-shadow:none}.ui5-shellbar-button{width:2.5rem;box-sizing:border-box}.ui5-shellbar-button,::slotted([ui5-button][slot="startButton"]){--_ui5-v2-10-0_button_focused_border: var(--_ui5-v2-10-0_shellbar_button_focused_border)}.ui5-shellbar-search-button{--_ui5-v2-10-0_button_focused_border_radius: var(--_ui5-v2-10-0_shellbar_search_button_border_radius);--_ui5-v2-10-0_shellbar_button_border_radius: var(--_ui5-v2-10-0_shellbar_search_button_border_radius);height:var(--_ui5-v2-10-0_shellbar_search_button_size);width:var(--_ui5-v2-10-0_shellbar_search_button_size);min-width:var(--_ui5-v2-10-0_shellbar_search_button_size)}.ui5-shellbar-image-button{display:flex;justify-content:center;align-items:center;min-width:auto;height:2.5rem;--_ui5-v2-10-0_button_focused_border_radius: var(--_ui5-v2-10-0_shellbar_image_button_border_radius);border-radius:var(--_ui5-v2-10-0_shellbar_image_button_border_radius)}.ui5-shellbar-overflow-container-left{padding:0;justify-content:flex-start;max-width:75%;flex-shrink:0}.ui5-shellbar-overflow-container-left>:nth-child(n){margin-inline-end:.5rem}.ui5-shellbar-menu-button{white-space:nowrap;overflow:hidden;display:flex;align-items:center;padding:.25rem .5rem;cursor:text;-webkit-user-select:text;-moz-user-select:text;user-select:text}.ui5-shellbar-menu-button.ui5-shellbar-menu-button--interactive{-webkit-user-select:none;-moz-user-select:none;user-select:none;cursor:pointer;background:var(--sapButton_Lite_Background);border:var(--_ui5-v2-10-0_shellbar_button_border);color:var(--sapShell_TextColor)}:host(:not([with-logo])) .ui5-shellbar-menu-button{margin-inline-start:0}.ui5-shellbar-overflow-container-right{flex-grow:1;justify-content:flex-end}.ui5-shellbar-overflow-container-right .ui5-shellbar-overflow-container-right-child{display:flex;justify-content:flex-end;height:inherit;align-items:center}.ui5-shellbar-overflow-container-right-inner{display:flex;flex-grow:1}.ui5-shellbar-content-items{display:flex;justify-content:center;align-items:center;flex-grow:1;min-width:max-content}.ui5-shellbar-spacer{flex-grow:1;height:1px;flex-basis:1rem;flex-shrink:1}.ui5-shellbar-separator{flex-grow:0;flex-shrink:0;height:1rem;width:1px;background-color:var(--sapToolbar_SeparatorColor)}.ui5-shellbar-separator-end{margin-inline-start:.5rem}.ui5-shellbar-overflow-container-right-child .ui5-shellbar-button[data-count]:has(+.ui5-shellbar-overflow-button):before{inset-inline-end:var(--_ui5-v2-10-0-shellbar-notification-btn-count-offset)}:host([breakpoint-size="S"]) .ui5-shellbar-overflow-container-right{padding-inline-start:0}::slotted([hidden]){visibility:hidden;order:-1;position:absolute}.ui5-shellbar-content-item{display:flex;align-items:center;flex-shrink:0;padding-inline-start:var(--_ui5-v2-10-0-shellbar-content-margin-start)}:host(:not([notifications-count])) .ui5-shellbar-bell-button{position:relative}:host([notifications-count]:not([notifications-count=""])) .ui5-shellbar-bell-button:before,.ui5-shellbar-button[data-count]:before{position:absolute;width:auto;height:1rem;min-width:1rem;background:var(--sapContent_BadgeBackground);border:var(--_ui5-v2-10-0_shellbar_button_badge_border);color:var(--sapContent_BadgeTextColor);top:-.25rem;right:-.25rem;padding:0 .3125rem;border-radius:.5rem;display:flex;justify-content:center;align-items:center;font-size:var(--sapFontSmallSize);font-family:"72override",var(--sapFontFamily);z-index:2;box-sizing:border-box}:host([notifications-count]:not([notifications-count=""])) .ui5-shellbar-bell-button:before{content:attr(data-ui5-notifications-count);inset-inline-end:var(--_ui5-v2-10-0-shellbar-notification-btn-count-offset)}.ui5-shellbar-button[data-count]:before{content:attr(data-count)}.ui5-shellbar-button[data-count=" "]:before{height:.75rem;min-width:.75rem}.ui5-shellbar-menu-button{margin-inline-start:.5rem}.ui5-shellbar-search-field{padding-inline-start:var(--_ui5-v2-10-0-shellbar-content-margin-start);min-width:var(--_ui5-v2-10-0_shellbar_search_field_width);align-items:center;flex-grow:1;margin-inline-start:.5rem}.ui5-shellbar-overflow-container-right-child>:first-child,.ui5-shellbar-search-field:first-child+.ui5-shellbar-button:not(.ui5-shellbar-search-button){margin-inline-start:0}.ui5-shellbar-search-full-width-wrapper .ui5-shellbar-search-full-field{height:2.25rem;width:100%}.ui5-shellbar-search-full-width-wrapper{position:absolute;top:0;left:0;background:var(--sapShellColor);height:100%;width:100%;z-index:100;display:flex;align-items:center;box-sizing:border-box}.ui5-shellbar-search-full-width-wrapper .ui5-shellbar-button{width:auto}::slotted([ui5-input]){background:var(--_ui5-v2-10-0_shellbar_search_field_background);border:var(--_ui5-v2-10-0_shellbar_search_field_border);box-shadow:var(--_ui5-v2-10-0_shellbar_search_field_box_shadow);color:var(--_ui5-v2-10-0_shellbar_search_field_color);height:2.25rem;width:100%;min-width:var(--_ui5-v2-10-0_shellbar_search_field_width)}:host([breakpoint-size="M"]) ::slotted([ui5-input]),:host([breakpoint-size="S"]) ::slotted([ui5-input]){min-width:1rem}:host([breakpoint-size="M"][show-search-field]) .ui5-shellbar-overflow-container-right-child{flex-grow:1}::slotted([ui5-input]:hover){background:var(--_ui5-v2-10-0_shellbar_search_field_background_hover);box-shadow:var(--_ui5-v2-10-0_shellbar_search_field_box_shadow_hover)}::slotted([ui5-input][focused]){outline:var(--_ui5-v2-10-0_shellbar_search_field_outline_focused)}::slotted([slot="logo"]){max-height:2rem;max-width:3.75rem;pointer-events:none}.ui5-shellbar-co-pilot-placeholder{width:2.75rem;height:2.75rem}.ui5-shellbar-coPilot-pressed,.ui5-shellbar-coPilot-pressed:hover{color:var(--sapShell_Assistant_ForegroundColor)}::slotted([ui5-button][slot="startButton"]){margin-inline:0 .5rem;justify-content:center;align-items:center}::slotted([ui5-button][data-profile-btn]){width:auto}::slotted(.ui5-shellbar-hidden-button),.ui5-shellbar-hidden-button,.ui5-shellbar-invisible-button{visibility:hidden;order:-1;opacity:0;min-width:0;width:0;margin:0;padding:0;padding-inline-start:0;border:0;margin-inline-start:0}
`;

	Theme.p("@ui5/webcomponents-theming", "sap_horizon", async () => parametersBundle_css.defaultThemeBase);
	Theme.p("@ui5/webcomponents-fiori", "sap_horizon", async () => parametersBundle_css$1.defaultTheme);
	var ShellBarPopoverCss = `.ui5-shellbar-menu-popover::part(content),.ui5-shellbar-overflow-popover::part(content){padding:0}.ui5-shellbar-overflow-popover [ui5-li]::part(icon){color:var(--sapList_TextColor)}.ui5-shellbar-overflow-popover [ui5-li]::part(title){font-size:var(--sapFontSize)}.ui5-shellbar-overflow-popover [ui5-li]:after{position:relative;width:fit-content;height:1rem;min-width:1rem;background:var(--sapContent_BadgeBackground);border:var(--_ui5-v2-10-0_shellbar_button_badge_border);color:var(--sapContent_BadgeTextColor);bottom:calc(100% + .0625rem);left:1.25rem;padding:0 .3125rem;border-radius:.5rem;display:flex;justify-content:center;align-items:center;font-size:var(--sapFontSmallSize);font-family:"72override",var(--sapFontFamily);z-index:2;box-sizing:border-box;pointer-events:none}.ui5-shellbar-overflow-popover [ui5-li][data-count]:after{content:attr(data-count)}
`;

	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var ShellBar_1;
	const RESIZE_THROTTLE_RATE = 200; // ms
	// actions always visible in lean mode, order is important
	const PREDEFINED_PLACE_ACTIONS = ["feedback", "sys-help"];
	/**
	 * @class
	 * ### Overview
	 *
	 * The `ui5-shellbar` is meant to serve as an application header
	 * and includes numerous built-in features, such as: logo, profile image/icon, title, search field, notifications and so on.
	 *
	 * ### Stable DOM Refs
	 *
	 * You can use the following stable DOM refs for the `ui5-shellbar`:
	 *
	 * - logo
	 * - notifications
	 * - overflow
	 * - profile
	 * - product-switch
	 *
	 * ### Keyboard Handling
	 *
	 * #### Fast Navigation
	 * This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
	 * In order to use this functionality, you need to import the following module:
	 * `import "@ui5/webcomponents-base/dist/features/F6Navigation.js"`
	 *
	 * ### ES6 Module Import
	 * `import "@ui5/webcomponents-fiori/dist/ShellBar.js";`
	 * @csspart root - Used to style the outermost wrapper of the `ui5-shellbar`
	 * @constructor
	 * @extends UI5Element
	 * @public
	 * @since 0.8.0
	 */
	let ShellBar = ShellBar_1 = class ShellBar extends webcomponentsBase.b {
	    static get FIORI_3_BREAKPOINTS() {
	        return [
	            599,
	            1023,
	            1439,
	            1919,
	            10000,
	        ];
	    }
	    static get FIORI_3_BREAKPOINTS_MAP() {
	        return {
	            "599": "S",
	            "1023": "M",
	            "1439": "L",
	            "1919": "XL",
	            "10000": "XXL",
	        };
	    }
	    constructor() {
	        super();
	        /**
	         * Defines the visibility state of the search button.
	         *
	         * **Note:** The `hideSearchButton` property is in an experimental state and is a subject to change.
	         * @default false
	         * @public
	         */
	        this.hideSearchButton = false;
	        /**
	         * Disables the automatic search field expansion/collapse when the available space is not enough.
	         *
	         * **Note:** The `disableSearchCollapse` property is in an experimental state and is a subject to change.
	         * @default false
	         * @public
	         */
	        this.disableSearchCollapse = false;
	        /**
	         * Defines, if the notification icon would be displayed.
	         * @default false
	         * @public
	         */
	        this.showNotifications = false;
	        /**
	         * Defines, if the product switch icon would be displayed.
	         * @default false
	         * @public
	         */
	        this.showProductSwitch = false;
	        /**
	         * Defines additional accessibility attributes on different areas of the component.
	         *
	         * The accessibilityAttributes object has the following fields,
	         * where each field is an object supporting one or more accessibility attributes:
	         *
	         * - **logo** - `logo.role` and `logo.name`.
	         * - **notifications** - `notifications.expanded` and `notifications.hasPopup`.
	         * - **profile** - `profile.expanded`, `profile.hasPopup` and `profile.name`.
	         * - **product** - `product.expanded` and `product.hasPopup`.
	         * - **search** - `search.hasPopup`.
	         * - **overflow** - `overflow.expanded` and `overflow.hasPopup`.
	         * - **branding** - `branding.name`.
	         *
	         * The accessibility attributes support the following values:
	         *
	         * - **role**: Defines the accessible ARIA role of the logo area.
	         * Accepts the following string values: `button` or `link`.
	         *
	         * - **expanded**: Indicates whether the button, or another grouping element it controls,
	         * is currently expanded or collapsed.
	         * Accepts the following string values: `true` or `false`.
	         *
	         * - **hasPopup**: Indicates the availability and type of interactive popup element,
	         * such as menu or dialog, that can be triggered by the button.
	         *
	         * Accepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.
	         * - **name**: Defines the accessible ARIA name of the area.
	         * Accepts any string.
	         *
	         * @default {}
	         * @public
	         * @since 1.10.0
	         */
	        this.accessibilityAttributes = {};
	        /**
	         * @private
	         */
	        this.breakpointSize = "S";
	        /**
	         * @private
	         */
	        this.withLogo = false;
	        this._itemsInfo = [];
	        this._contentInfo = [];
	        this._menuPopoverExpanded = false;
	        this._overflowPopoverExpanded = false;
	        this.showFullWidthSearch = false;
	        this._cachedHiddenContent = [];
	        this._lastOffsetWidth = 0;
	        this._observableContent = [];
	        this._autoRestoreSearchField = false;
	        this._showSearchField = false;
	        this._hiddenIcons = [];
	        this._isInitialRendering = true;
	        this._overflowNotifications = null;
	        // marks if preventDefault() is called in item's press handler
	        this._defaultItemPressPrevented = false;
	        this.contentItemsObserver = new MutationObserver(() => {
	            this._handleActionsOverflow();
	        });
	        this._headerPress = () => {
	            if (this.hasMenuItems) {
	                const menuPopover = this._getMenuPopover();
	                menuPopover.opener = this.shadowRoot.querySelector(".ui5-shellbar-menu-button");
	                menuPopover.open = true;
	            }
	        };
	        this._handleResize = n(() => {
	            this.menuPopover = this._getMenuPopover();
	            this.overflowPopover = this._getOverflowPopover();
	            this.overflowPopover.open = false;
	            if (this._lastOffsetWidth !== this.offsetWidth) {
	                this._overflowActions();
	                if (this.autoSearchField) {
	                    this._updateSearchFieldState();
	                }
	            }
	        }, RESIZE_THROTTLE_RATE);
	    }
	    _updateSearchFieldState() {
	        const spacerWidth = this.shadowRoot.querySelector(".ui5-shellbar-spacer") ? this.shadowRoot.querySelector(".ui5-shellbar-spacer").getBoundingClientRect().width : 0;
	        const searchFieldWidth = this.domCalculatedValues("--_ui5_shellbar_search_field_width");
	        if (this.showFullWidthSearch) {
	            this.setSearchState(true);
	            return;
	        }
	        if ((spacerWidth <= searchFieldWidth && this.contentItemsHidden.length !== 0) && this.showSearchField) {
	            this.setSearchState(false);
	            this._autoRestoreSearchField = true;
	        }
	        else if (spacerWidth > searchFieldWidth && this._autoRestoreSearchField) {
	            this.setSearchState(true);
	            this._autoRestoreSearchField = false;
	        }
	    }
	    _onKeyDown(e) {
	        const items = this._getVisibleAndInteractiveItems();
	        const activeElement = webcomponentsBase.t();
	        const currentIndex = items.findIndex(el => el === activeElement);
	        if (webcomponentsBase.K(e) || webcomponentsBase.c(e)) {
	            e.preventDefault(); // Prevent the default behavior to avoid any further automatic focus movemen
	            // Focus navigation based on the key pressed
	            if (webcomponentsBase.K(e)) {
	                this._focusPreviousItem(items, currentIndex);
	            }
	            else if (webcomponentsBase.c(e)) {
	                this._focusNextItem(items, currentIndex);
	            }
	        }
	    }
	    _focusNextItem(items, currentIndex) {
	        if (currentIndex < items.length - 1) {
	            (items[currentIndex + 1]).focus(); // Focus the next element
	        }
	    }
	    _focusPreviousItem(items, currentIndex) {
	        if (currentIndex > 0) {
	            (items[currentIndex - 1]).focus(); // Focus the previous element
	        }
	    }
	    _isVisible(element) {
	        const style = getComputedStyle(element);
	        return style.display !== "none" && style.visibility !== "hidden" && element.offsetWidth > 0 && element.offsetHeight > 0;
	    }
	    _getNavigableContent() {
	        const elements = [
	            ...this.startButton,
	            ...this.logo,
	            ...this.shadowRoot.querySelectorAll(".ui5-shellbar-logo"),
	            ...this.shadowRoot.querySelectorAll(".ui5-shellbar-logo-area"),
	            ...this.shadowRoot.querySelectorAll(".ui5-shellbar-menu-button"),
	            ...this.contentItems,
	            ...this._getRightChildItems(),
	        ];
	        return elements.map((element) => {
	            const component = element;
	            if (component.isUI5Element) {
	                return component.getFocusDomRef();
	            }
	            return element;
	        }).filter(el => !!el);
	    }
	    _getRightChildItems() {
	        return [
	            ...this.searchField,
	            ...this.shadowRoot.querySelectorAll(".ui5-shellbar-search-item-for-arrow-nav"),
	            ...this.assistant,
	            ...this.shadowRoot.querySelectorAll(".ui5-shellbar-items-for-arrow-nav"),
	        ];
	    }
	    _getVisibleAndInteractiveItems() {
	        const items = this._getNavigableContent();
	        const visibleAndInteractiveItems = items.filter(item => {
	            return this._isVisible(item) && item.tabIndex === 0;
	        });
	        return visibleAndInteractiveItems;
	    }
	    _menuItemPress(e) {
	        const shouldContinue = this.fireDecoratorEvent("menu-item-click", {
	            item: e.detail.item,
	        });
	        if (shouldContinue) {
	            this.menuPopover.open = false;
	        }
	    }
	    _logoPress() {
	        this.fireDecoratorEvent("logo-click", {
	            targetRef: this.shadowRoot.querySelector(".ui5-shellbar-logo"),
	        });
	    }
	    _menuPopoverBeforeOpen() {
	        this._menuPopoverExpanded = true;
	        if (this.menuPopover.content && this.menuPopover.content.length) {
	            this.menuPopover.content[0].focusFirstItem();
	        }
	    }
	    _menuPopoverAfterClose() {
	        this._menuPopoverExpanded = false;
	    }
	    _overflowPopoverBeforeOpen() {
	        this._overflowPopoverExpanded = true;
	        if (this.overflowPopover.content && this.overflowPopover.content.length) {
	            this.overflowPopover.content[0].focusFirstItem();
	        }
	    }
	    _overflowPopoverAfterClose() {
	        this._overflowPopoverExpanded = false;
	    }
	    _logoKeyup(e) {
	        if (webcomponentsBase.i(e)) {
	            this._logoPress();
	        }
	    }
	    _logoKeydown(e) {
	        if (webcomponentsBase.i(e)) {
	            e.preventDefault();
	            return;
	        }
	        if (webcomponentsBase.b$1(e)) {
	            this._logoPress();
	        }
	    }
	    _calculateCSSREMValue(styleSet, propertyName) {
	        return Number(styleSet.getPropertyValue(propertyName).replace("rem", "")) * parseInt(getComputedStyle(document.body).getPropertyValue("font-size"));
	    }
	    domCalculatedValues(cssVar) {
	        const shellbarComputerStyle = getComputedStyle(this.getDomRef());
	        return this._calculateCSSREMValue(shellbarComputerStyle, Theme.d$2(cssVar)); // px
	    }
	    onBeforeRendering() {
	        this.withLogo = this.hasLogo;
	        this._hiddenIcons = this._itemsInfo.filter(info => {
	            const isHidden = (info.classes.indexOf("ui5-shellbar-hidden-button") !== -1);
	            const isSet = info.classes.indexOf("ui5-shellbar-invisible-button") === -1;
	            const isOverflowIcon = info.classes.indexOf("ui5-shellbar-overflow-button") !== -1;
	            const isImageIcon = info.classes.indexOf("ui5-shellbar-image-button") !== -1;
	            const shouldStayOnScreen = isOverflowIcon || (isImageIcon && this.hasProfile);
	            return isHidden && isSet && !shouldStayOnScreen;
	        });
	        this._observeContentItems();
	    }
	    /**
	     * Defines, if the Search Field would be displayed when there is a valid `searchField` slot.
	     *
	     * **Note:** By default the Search Field is not displayed.
	     * @default false
	     * @public
	     */
	    set showSearchField(value) {
	        if (isSelfCollapsibleSearch(this.search)) {
	            this.search.collapsed = !value;
	        }
	        this._showSearchField = value;
	    }
	    get showSearchField() {
	        if (isSelfCollapsibleSearch(this.search)) {
	            return !this.search.collapsed;
	        }
	        return this._showSearchField;
	    }
	    /**
	     * Use this method to change the state of the search filed according to internal logic.
	     * An event is fired to notify the change.
	     */
	    async setSearchState(expanded) {
	        this.showSearchField = expanded;
	        await Theme.f();
	        this.fireDecoratorEvent("search-field-toggle", { expanded });
	    }
	    onAfterRendering() {
	        this._lastOffsetWidth = this.offsetWidth;
	        this._overflowActions();
	        this.onInitialRendering();
	    }
	    async onInitialRendering() {
	        if (this._isInitialRendering) {
	            await Theme.f();
	            if (this.autoSearchField) {
	                this._updateSearchFieldState();
	            }
	        }
	        this._isInitialRendering = false;
	    }
	    /**
	     * Closes the overflow area.
	     * Useful to manually close the overflow after having suppressed automatic closing with preventDefault() of ShellbarItem's press event
	     * @public
	     */
	    closeOverflow() {
	        if (this.overflowPopover) {
	            this.overflowPopover.open = false;
	        }
	    }
	    _handleBarBreakpoints() {
	        const width = this.getBoundingClientRect().width;
	        const breakpoints = ShellBar_1.FIORI_3_BREAKPOINTS;
	        const size = breakpoints.find(bp1 => width <= bp1) || ShellBar_1.FIORI_3_BREAKPOINTS[ShellBar_1.FIORI_3_BREAKPOINTS.length - 1];
	        const mappedSize = ShellBar_1.FIORI_3_BREAKPOINTS_MAP[size];
	        if (this.breakpointSize !== mappedSize) {
	            this.breakpointSize = mappedSize;
	        }
	    }
	    _hideItems(items) {
	        items.forEach(item => {
	            if (item.classes.indexOf("ui5-shellbar-no-overflow-button") === -1) {
	                item.classes = `${item.classes} ui5-shellbar-hidden-button`;
	            }
	        });
	        return items;
	    }
	    _resetItemsVisibility(items) {
	        items.forEach(item => {
	            item.classList.remove("ui5-shellbar-hidden-button");
	        });
	    }
	    _handleActionsOverflow() {
	        const inner = this.overflowInner;
	        const wrapper = this.overflowWrapper;
	        const hidableDomElements = this.hidableDomElements;
	        const hiddenItems = [];
	        let lastHiddenIndex = 0;
	        this._resetItemsVisibility(hidableDomElements);
	        for (let i = 0; i < hidableDomElements.length; i++) {
	            if (inner?.offsetWidth === wrapper?.offsetWidth) {
	                lastHiddenIndex = i;
	                break;
	            }
	            const item = hidableDomElements[i];
	            hiddenItems.push(item.id);
	            item.classList.add("ui5-shellbar-hidden-button");
	        }
	        if (hiddenItems.length === 1 && !this.showSearchField) {
	            const nextItemToHide = hidableDomElements[++lastHiddenIndex];
	            if (nextItemToHide) {
	                hiddenItems.push(nextItemToHide.id);
	            }
	        }
	        const itemsInfo = this._getItemsInfo().filter(item => item.show && item.classes.indexOf("ui5-shellbar-no-overflow-button") === -1);
	        const contentInfo = this._getContentInfo().sort((a, b) => a.hideOrder - b.hideOrder);
	        const itemsToHide = [...itemsInfo, ...contentInfo].filter(item => hiddenItems.includes(item.id));
	        this._hideItems(itemsToHide);
	        return { itemsInfo, contentInfo };
	    }
	    _overflowActions() {
	        this._handleBarBreakpoints();
	        const { itemsInfo, contentInfo } = this._handleActionsOverflow();
	        this._updateItemsInfo(itemsInfo);
	        this._updateContentInfo(contentInfo);
	        this._updateOverflowNotifications();
	        this.showFullWidthSearch = this.overflowed && this.showSearchField;
	    }
	    _toggleActionPopover() {
	        const overflowButton = this.shadowRoot.querySelector(".ui5-shellbar-overflow-button");
	        const overflowPopover = this._getOverflowPopover();
	        overflowPopover.opener = overflowButton;
	        overflowPopover.open = true;
	    }
	    onEnterDOM() {
	        webcomponentsBase.f.register(this, this._handleResize);
	        if (Theme.f$1()) {
	            this.setAttribute("desktop", "");
	        }
	    }
	    onExitDOM() {
	        this.contentItemsObserver.disconnect();
	        this._observableContent = [];
	        webcomponentsBase.f.deregister(this, this._handleResize);
	    }
	    _handleSearchIconPress() {
	        const searchButtonRef = this.shadowRoot.querySelector(".ui5-shellbar-search-button");
	        const defaultPrevented = !this.fireDecoratorEvent("search-button-click", {
	            targetRef: searchButtonRef,
	            searchFieldVisible: this.showSearchField,
	        });
	        if (defaultPrevented) {
	            return;
	        }
	        this.setSearchState(!this.showSearchField);
	        if (!this.showSearchField) {
	            return;
	        }
	        const input = this.searchField[0];
	        // update the state immediately
	        if (input) {
	            input.focused = true;
	        }
	        // move the focus later
	        setTimeout(() => {
	            if (input) {
	                input.focus();
	            }
	        }, 100);
	    }
	    async _handleActionListClick() {
	        if (!this._defaultItemPressPrevented) {
	            this.closeOverflow();
	            // wait for DOM to be updated when ui5-popover is closed, otherwise if Enter key is hold
	            // there will be no visual indication that this has happened
	            await Theme.f();
	        }
	        this._defaultItemPressPrevented = false;
	    }
	    _handleCustomActionPress(e) {
	        const target = e.target;
	        const refItemId = target.getAttribute("data-ui5-external-action-item-id");
	        if (refItemId) {
	            const shellbarItem = this.items.find(item => {
	                return item._id === refItemId;
	            });
	            const prevented = shellbarItem.fireClickEvent(e);
	            this._defaultItemPressPrevented = prevented;
	        }
	    }
	    _handleOverflowPress() {
	        this._toggleActionPopover();
	    }
	    _handleNotificationsPress(e) {
	        const notificationIconRef = this.shadowRoot.querySelector(".ui5-shellbar-bell-button"), target = e.target;
	        this._defaultItemPressPrevented = !this.fireDecoratorEvent("notifications-click", {
	            targetRef: notificationIconRef.classList.contains("ui5-shellbar-hidden-button") ? target : notificationIconRef,
	        });
	    }
	    _handleProfilePress() {
	        this.fireDecoratorEvent("profile-click", {
	            targetRef: this.shadowRoot.querySelector(".ui5-shellbar-image-button"),
	        });
	    }
	    _handleCancelButtonPress() {
	        this.showFullWidthSearch = false;
	        this.setSearchState(false);
	    }
	    _handleProductSwitchPress(e) {
	        const buttonRef = this.shadowRoot.querySelector(".ui5-shellbar-button-product-switch"), target = e.target;
	        this._defaultItemPressPrevented = !this.fireDecoratorEvent("product-switch-click", {
	            targetRef: buttonRef.classList.contains("ui5-shellbar-hidden-button") ? target : buttonRef,
	        });
	    }
	    /**
	     * Returns the `logo` DOM ref.
	     * @public
	     * @default null
	     * @since 1.0.0-rc.16
	     */
	    get logoDomRef() {
	        return this.shadowRoot.querySelector(`*[data-ui5-stable="logo"]`);
	    }
	    /**
	     * Returns the `notifications` icon DOM ref.
	     * @public
	     * @default null
	     * @since 1.0.0-rc.16
	     */
	    get notificationsDomRef() {
	        return this.shadowRoot.querySelector(`*[data-ui5-stable="notifications"]`);
	    }
	    /**
	     * Returns the `overflow` icon DOM ref.
	     * @public
	     * @default null
	     * @since 1.0.0-rc.16
	     */
	    get overflowDomRef() {
	        return this.shadowRoot.querySelector(`*[data-ui5-stable="overflow"]`);
	    }
	    /**
	     * Returns the `profile` icon DOM ref.
	     * @public
	     * @default null
	     * @since 1.0.0-rc.16
	     */
	    get profileDomRef() {
	        return this.shadowRoot.querySelector(`*[data-ui5-stable="profile"]`);
	    }
	    /**
	     * Returns the `product-switch` icon DOM ref.
	     * @public
	     * @default null
	     * @since 1.0.0-rc.16
	     */
	    get productSwitchDomRef() {
	        return this.shadowRoot.querySelector(`*[data-ui5-stable="product-switch"]`);
	    }
	    /**
	     * Returns the `search` icon DOM ref.
	     * @returns The search icon DOM ref
	     * @public
	     * @since 2.10.0
	     */
	    async getSearchButtonDomRef() {
	        await Theme.f();
	        return this.shadowRoot.querySelector(`*[data-ui5-stable="toggle-search"]`);
	    }
	    _getContentInfo() {
	        return [
	            ...this.contentItemsSorted.map(item => {
	                return {
	                    hideOrder: parseInt(item.getAttribute("data-hide-order") || "0"),
	                    id: item.slot,
	                    classes: "ui5-shellbar-content-item",
	                    show: false,
	                };
	            }),
	        ];
	    }
	    /**
	     * Returns all items that will be placed in the right of the bar as icons / dom elements.
	     */
	    _getItemsInfo() {
	        const items = [
	            {
	                icon: search.search,
	                text: this._searchText,
	                classes: `${this.searchField.length ? "" : "ui5-shellbar-invisible-button"} ui5-shellbar-search-button ui5-shellbar-button`,
	                id: `${this._id}-item-${1}`,
	                press: this._handleSearchIconPress.bind(this),
	                show: !!this.searchField.length,
	                tooltip: this._searchText,
	            },
	            {
	                icon: da.defExp,
	                text: "Assistant",
	                classes: `${this.assistant.length ? "" : "ui5-shellbar-invisible-button"} ui5-shellbar-assistant-button`,
	                id: `${this._id}-assistant`,
	                show: !!this.assistant.length,
	                press: () => { },
	                tooltip: this.assistant.length ? (this.assistant[0].getAttribute("text") || this.assistant[0].getAttribute("title") || undefined) : undefined,
	            },
	            {
	                icon: bell,
	                title: this._notificationsText,
	                text: ShellBar_1.i18nBundle.getText(i18nDefaults.SHELLBAR_NOTIFICATIONS_NO_COUNT),
	                count: this.notificationsCount,
	                classes: `${this.showNotifications ? "" : "ui5-shellbar-invisible-button"} ui5-shellbar-bell-button ui5-shellbar-button`,
	                id: `${this._id}-item-${2}`,
	                show: this.showNotifications,
	                press: this._handleNotificationsPress.bind(this),
	                tooltip: this._notificationsText,
	            },
	            // sort feedback and help to always be last
	            ...this.items.sort((a, b) => {
	                const aIndex = PREDEFINED_PLACE_ACTIONS.indexOf(a.icon || "");
	                const bIndex = PREDEFINED_PLACE_ACTIONS.indexOf(b.icon || "");
	                return aIndex - bIndex;
	            }).map((item) => {
	                item._getRealDomRef = () => this.getDomRef().querySelector(`*[data-ui5-stable=${item.stableDomRef}]`);
	                // check if included for lean mode
	                const show = !!item.icon || false;
	                return {
	                    icon: item.icon,
	                    id: item._id,
	                    count: item.count || undefined,
	                    refItemid: item._id,
	                    text: item.text,
	                    classes: "ui5-shellbar-custom-item ui5-shellbar-button",
	                    show,
	                    press: this._handleCustomActionPress.bind(this),
	                    custom: true,
	                    title: item.title,
	                    stableDomRef: item.stableDomRef,
	                    tooltip: item.title || item.text,
	                    accessibilityAttributes: item.accessibilityAttributes,
	                    accessibleName: item.count ? `${item.title || item.text}, ${item.count}` : (item.title || item.text),
	                };
	            }),
	            {
	                icon: overflow.iconOverflow,
	                text: "Overflow",
	                classes: "ui5-shellbar-hidden-button ui5-shellbar-no-overflow-button ui5-shellbar-overflow-button ui5-shellbar-button",
	                id: `${this.id}-item-${5}`,
	                press: this._handleOverflowPress.bind(this),
	                show: true,
	                tooltip: this._overflowText,
	            },
	            {
	                text: "Person",
	                classes: `${this.hasProfile ? "" : "ui5-shellbar-invisible-button"} ui5-shellbar-no-overflow-button ui5-shellbar-image-button ui5-shellbar-button`,
	                profile: true,
	                id: `${this._id}-item-${3}`,
	                show: this.hasProfile,
	                press: this._handleProfilePress.bind(this),
	                tooltip: this._profileText,
	            },
	            {
	                icon: grid,
	                text: this._productsText,
	                classes: `${this.showProductSwitch ? "" : "ui5-shellbar-invisible-button"} ui5-shellbar-no-overflow-button ui5-shellbar-button ui5-shellbar-image-button ui5-shellbar-button-product-switch`,
	                id: `${this._id}-item-${4}`,
	                show: this.showProductSwitch,
	                press: this._handleProductSwitchPress.bind(this),
	                tooltip: this._productsText,
	            },
	        ];
	        return items;
	    }
	    _updateItemsInfo(newItemsInfo) {
	        const isDifferent = JSON.stringify(this._itemsInfo) !== JSON.stringify(newItemsInfo);
	        if (isDifferent) {
	            this._itemsInfo = newItemsInfo;
	        }
	    }
	    _updateContentInfo(newContentInfo) {
	        const isDifferent = JSON.stringify(this._contentInfo) !== JSON.stringify(newContentInfo);
	        if (isDifferent) {
	            this._contentInfo = newContentInfo;
	            this._fireContentItemVisibilityChangeEvent();
	        }
	    }
	    _fireContentItemVisibilityChangeEvent() {
	        const hiddenByClass = this._contentInfo
	            .filter(item => item.classes.indexOf("ui5-shellbar-hidden-button") !== -1)
	            .map(item => item.id);
	        this.fireDecoratorEvent("content-item-visibility-change", {
	            items: this.contentItems.filter(item => hiddenByClass.includes(item.slot)),
	        });
	    }
	    _updateOverflowNotifications() {
	        const notificationsArr = [];
	        let overflowNotifications = null;
	        this._itemsInfo.forEach(item => {
	            if (item.count && this.isIconHidden(item.icon)) {
	                notificationsArr.push(item.count);
	            }
	        });
	        if (notificationsArr.length === 1) {
	            overflowNotifications = notificationsArr[0];
	        }
	        else if (notificationsArr.length > 1) {
	            overflowNotifications = " ";
	        }
	        this._overflowNotifications = overflowNotifications;
	    }
	    _observeContentItems() {
	        if (this.hasMatchingContent) {
	            return;
	        }
	        this.contentItems.forEach(item => {
	            if (!this._observableContent.includes(item)) {
	                this.contentItemsObserver.observe(item, {
	                    characterData: false,
	                    childList: false,
	                    subtree: false,
	                    attributes: true,
	                    attributeFilter: ["data-hide-order"],
	                });
	            }
	        });
	        this._observableContent = this.contentItems;
	    }
	    _getOverflowPopover() {
	        return this.shadowRoot.querySelector(".ui5-shellbar-overflow-popover");
	    }
	    _getMenuPopover() {
	        return this.shadowRoot.querySelector(".ui5-shellbar-menu-popover");
	    }
	    isIconHidden(name) {
	        const itemInfo = this._itemsInfo.find(item => item.icon === name);
	        if (!itemInfo) {
	            return false;
	        }
	        return itemInfo.classes.indexOf("ui5-shellbar-hidden-button") !== -1;
	    }
	    get hasMatchingContent() {
	        if (this._observableContent.length !== this.contentItems.length) {
	            return false;
	        }
	        const observableContentSet = new WeakSet(this._observableContent);
	        return this.contentItems.every(item => observableContentSet.has(item));
	    }
	    get contentItemsSorted() {
	        return this.contentItems.toReversed().sort((a, b) => {
	            return parseInt(a.getAttribute("data-hide-order") || "0") - parseInt(b.getAttribute("data-hide-order") || "0");
	        });
	    }
	    get contentItemsWrappersSorted() {
	        return this.contentItemsSorted.map(item => this.shadowRoot.querySelector(`#${item.slot}`)).filter(item => item !== null);
	    }
	    get autoSearchField() {
	        const onFocus = document.activeElement === this.searchField[0];
	        const hasValue = this.searchField[0]?.value?.length > 0;
	        const disableSearchCollapse = this.disableSearchCollapse || onFocus || hasValue;
	        if (disableSearchCollapse) {
	            return false;
	        }
	        return this.showSearchField || this._autoRestoreSearchField;
	    }
	    get startContentInfoSorted() {
	        return this._contentInfo
	            .filter(item => this.startContent.find(contentItem => contentItem.slot === item.id))
	            .sort((a, b) => a.hideOrder - b.hideOrder);
	    }
	    get endContentInfoSorted() {
	        return this._contentInfo
	            .filter(item => this.endContent.find(contentItem => contentItem.slot === item.id))
	            .sort((a, b) => a.hideOrder - b.hideOrder);
	    }
	    get showStartSeparator() {
	        return this.startContentInfoSorted.some(item => !item.classes.includes("ui5-shellbar-hidden-button"));
	    }
	    get showEndSeparator() {
	        return this.endContentInfoSorted.some(item => !item.classes.includes("ui5-shellbar-hidden-button"));
	    }
	    shouldIncludeSeparator(itemInfo, contentInfo) {
	        // once the last item from the start/end content was hidden, the
	        // separator is "packed" with it in order to account for any next measurements
	        if (!itemInfo) {
	            return false;
	        }
	        const lastVisibleItem = contentInfo.at(-1);
	        return lastVisibleItem?.id === itemInfo.id && itemInfo.classes.indexOf("ui5-shellbar-hidden-button") > -1;
	    }
	    get classes() {
	        return {
	            wrapper: {
	                "ui5-shellbar-root": true,
	                "ui5-shellbar-with-searchfield": this.hasSearchField,
	            },
	            button: {
	                "ui5-shellbar-menu-button--interactive": this.hasMenuItems,
	            },
	            notification: {
	                "ui5-shellbar-hidden-button": this.isIconHidden("bell"),
	            },
	            search: {
	                "ui5-shellbar-hidden-button": this.isIconHidden("search"),
	                "ui5-shellbar-search-toggle": true,
	            },
	            overflow: {
	                "ui5-shellbar-hidden-button": this._hiddenIcons.length === 0,
	            },
	            assistant: {
	                "ui5-shellbar-hidden-button": this.isIconHidden("assistant"),
	                "ui5-shellbar-assistant-button": true,
	            },
	            searchField: {
	                "ui5-shellbar-search-field": this.showSearchField,
	                "ui5-shellbar-search-toggle": isSelfCollapsibleSearch(this.search),
	                "ui5-shellbar-hidden-button": !this.showSearchField,
	            },
	        };
	    }
	    get styles() {
	        const styles = {
	            "display": this.showSearchField ? "flex" : "none",
	        };
	        return {
	            searchField: isSelfCollapsibleSearch(this.search) ? {} : styles,
	        };
	    }
	    get customItemsInfo() {
	        return this._itemsInfo.filter(itemInfo => !!itemInfo.custom);
	    }
	    get hasLogo() {
	        return !!this.logo.length;
	    }
	    get showLogoInMenuButton() {
	        return this.hasLogo && (this.breakpointSize === "S");
	    }
	    get showTitleInMenuButton() {
	        return this.primaryTitle && !(this.showLogoInMenuButton);
	    }
	    get showMenuButton() {
	        return this.primaryTitle || this.showLogoInMenuButton;
	    }
	    get popoverHorizontalAlign() {
	        return this.effectiveDir === "rtl" ? "Start" : "End";
	    }
	    get hasAssistant() {
	        return !!this.assistant.length;
	    }
	    get hasSearchField() {
	        return !!this.searchField.length;
	    }
	    get hasMidContent() {
	        return !!this.midContent.length;
	    }
	    get hasProfile() {
	        return !!this.profile.length;
	    }
	    get hasMenuItems() {
	        return this.menuItems.length > 0;
	    }
	    get imageBtnText() {
	        return AccessibilityTextsHelper.A(this);
	    }
	    get _shellbarText() {
	        return ShellBar_1.i18nBundle.getText(i18nDefaults.SHELLBAR_LABEL);
	    }
	    get _logoText() {
	        return this.accessibilityAttributes.logo?.name || ShellBar_1.i18nBundle.getText(i18nDefaults.SHELLBAR_LOGO);
	    }
	    get _notificationsText() {
	        return ShellBar_1.i18nBundle.getText(i18nDefaults.SHELLBAR_NOTIFICATIONS, this.notificationsCount || 0);
	    }
	    get _cancelBtnText() {
	        return ShellBar_1.i18nBundle.getText(i18nDefaults.SHELLBAR_CANCEL);
	    }
	    get _logoAreaText() {
	        const primaryTitle = this.primaryTitle ?? "";
	        const secondaryTitle = this.secondaryTitle ?? "";
	        return ShellBar_1.i18nBundle.getText(i18nDefaults.SHELLBAR_LOGO_AREA, primaryTitle, secondaryTitle);
	    }
	    get _contentItemsText() {
	        return this._enableContentAreaAccessibility ? ShellBar_1.i18nBundle.getText(i18nDefaults.SHELLBAR_ADDITIONAL_CONTEXT) : undefined;
	    }
	    get _searchFieldDescription() {
	        return ShellBar_1.i18nBundle.getText(i18nDefaults.SHELLBAR_SEARCHFIELD_DESCRIPTION);
	    }
	    get _contentItemsRole() {
	        if (this._enableContentAreaAccessibility) {
	            return "group";
	        }
	    }
	    get _enableContentAreaAccessibility() {
	        return this.contentItems.length > 1;
	    }
	    get contentItems() {
	        return [...this.startContent, ...this.endContent];
	    }
	    get startContent() {
	        // all items before the first spacer
	        const spacerIndex = this.content.findIndex(child => child.hasAttribute("ui5-shellbar-spacer"));
	        if (spacerIndex === -1) {
	            return this.content;
	        }
	        return this.content.slice(0, spacerIndex);
	    }
	    get endContent() {
	        // all items after the first spacer
	        const spacerIndex = this.content.findIndex(child => child.hasAttribute("ui5-shellbar-spacer"));
	        if (spacerIndex === -1) {
	            return [];
	        }
	        return this.content.slice(spacerIndex + 1);
	    }
	    get _rightChildRole() {
	        const items = this._getRightChildItems();
	        const visibleItems = items.filter(item => {
	            return this._isVisible(item);
	        });
	        if (visibleItems.length === 1) {
	            return;
	        }
	        return "toolbar";
	    }
	    get _searchFieldText() {
	        return ShellBar_1.i18nBundle.getText(i18nDefaults.SHELLBAR_SEARCH_FIELD);
	    }
	    get _searchBtnOpen() {
	        return ShellBar_1.i18nBundle.getText(i18nDefaults.SHELLBAR_SEARCH_BTN_OPEN);
	    }
	    get _productSwitchBtnText() {
	        return ShellBar_1.i18nBundle.getText(i18nDefaults.SHELLBAR_PRODUCT_SWITCH_BTN);
	    }
	    get _profileText() {
	        return this.accessibilityAttributes.profile?.name || ShellBar_1.i18nBundle.getText(i18nDefaults.SHELLBAR_PROFILE);
	    }
	    get _productsText() {
	        return ShellBar_1.i18nBundle.getText(i18nDefaults.SHELLBAR_PRODUCTS);
	    }
	    get _searchText() {
	        return ShellBar_1.i18nBundle.getText(i18nDefaults.SHELLBAR_SEARCH);
	    }
	    get _overflowText() {
	        return ShellBar_1.i18nBundle.getText(i18nDefaults.SHELLBAR_OVERFLOW);
	    }
	    get _brandingText() {
	        return this.accessibilityAttributes.branding?.name || this.primaryTitle;
	    }
	    get hasContentItems() {
	        return this.contentItems.length > 0;
	    }
	    get hidableDomElements() {
	        const items = Array.from(this.shadowRoot.querySelectorAll(".ui5-shellbar-button:not(.ui5-shellbar-search-button):not(.ui5-shellbar-overflow-button):not(.ui5-shellbar-cancel-button):not(.ui5-shellbar-no-overflow-button)"));
	        const assistant = this.shadowRoot.querySelector(".ui5-shellbar-assistant-button");
	        const searchToggle = this.shadowRoot.querySelector(".ui5-shellbar-search-toggle");
	        const contentItems = this.contentItemsWrappersSorted;
	        const firstContentItem = contentItems.pop();
	        const prioritizeContent = this.showSearchField && this.hasSearchField;
	        // order here is important for the responsive behavior, the items will be
	        // measured and hidden in the order they are returned until no overlap is detected
	        let itemsToHide = [];
	        if (prioritizeContent) {
	            // search field was toggled, the content items should make space for it
	            const overflowItems = [...items, assistant];
	            const visibleItems = overflowItems.filter(item => item && !item.classList.contains("ui5-shellbar-hidden-button"));
	            const hiddenItems = overflowItems.filter(item => item && item.classList.contains("ui5-shellbar-hidden-button"));
	            itemsToHide = [
	                ...hiddenItems,
	                ...contentItems,
	                firstContentItem,
	                ...visibleItems,
	            ];
	        }
	        else {
	            // search field is close, actions should go to the overflow first
	            itemsToHide = [
	                ...items.toReversed(),
	                assistant,
	                ...contentItems,
	                searchToggle,
	                firstContentItem,
	            ];
	        }
	        return itemsToHide.filter(Boolean);
	    }
	    get contentItemsHidden() {
	        return this.contentItemsWrappersSorted.filter(item => item.classList.contains("ui5-shellbar-hidden-button"));
	    }
	    get overflowWrapper() {
	        return this.shadowRoot.querySelector(".ui5-shellbar-overflow-container-right");
	    }
	    get overflowInner() {
	        return this.shadowRoot.querySelector(".ui5-shellbar-overflow-container-right-inner");
	    }
	    get overflowed() {
	        const wrapper = this.overflowWrapper;
	        const inner = this.overflowInner;
	        if (!wrapper || !inner) {
	            return false;
	        }
	        return inner.offsetWidth > wrapper.offsetWidth;
	    }
	    get accInfo() {
	        const overflowExpanded = this.accessibilityAttributes.overflow?.expanded;
	        return {
	            notifications: {
	                "title": this._notificationsText,
	                "accessibilityAttributes": {
	                    expanded: this.accessibilityAttributes.notifications?.expanded,
	                    hasPopup: this.accessibilityAttributes.notifications?.hasPopup,
	                },
	            },
	            profile: {
	                "title": this._profileText,
	                "accessibilityAttributes": {
	                    hasPopup: this.accessibilityAttributes.profile?.hasPopup,
	                    expanded: this.accessibilityAttributes.profile?.expanded,
	                },
	            },
	            products: {
	                "title": this._productsText,
	                "accessibilityAttributes": {
	                    hasPopup: this.accessibilityAttributes.product?.hasPopup,
	                    expanded: this.accessibilityAttributes.product?.expanded,
	                },
	            },
	            search: {
	                "title": this._searchText,
	                "accessibilityAttributes": {
	                    hasPopup: this.accessibilityAttributes.search?.hasPopup,
	                },
	            },
	            overflow: {
	                "title": this._overflowText,
	                "accessibilityAttributes": {
	                    hasPopup: this.accessibilityAttributes.overflow?.hasPopup || "menu",
	                    expanded: overflowExpanded === undefined ? this._overflowPopoverExpanded : overflowExpanded,
	                },
	            },
	            branding: {
	                "title": this._brandingText,
	                "accessibilityAttributes": {
	                    name: this.accessibilityAttributes.branding?.name,
	                },
	            },
	        };
	    }
	    get accLogoRole() {
	        return this.accessibilityAttributes.logo?.role || "link";
	    }
	    get isSBreakPoint() {
	        return this.breakpointSize === "S";
	    }
	    get hasSelfCollapsibleSearch() {
	        return isSelfCollapsibleSearch(this.search);
	    }
	    get search() {
	        return this.searchField.length ? this.searchField[0] : null;
	    }
	};
	__decorate([
	    webcomponentsBase.s({ type: Boolean })
	], ShellBar.prototype, "hideSearchButton", void 0);
	__decorate([
	    webcomponentsBase.s({ type: Boolean })
	], ShellBar.prototype, "disableSearchCollapse", void 0);
	__decorate([
	    webcomponentsBase.s()
	], ShellBar.prototype, "primaryTitle", void 0);
	__decorate([
	    webcomponentsBase.s()
	], ShellBar.prototype, "secondaryTitle", void 0);
	__decorate([
	    webcomponentsBase.s()
	], ShellBar.prototype, "notificationsCount", void 0);
	__decorate([
	    webcomponentsBase.s({ type: Boolean })
	], ShellBar.prototype, "showNotifications", void 0);
	__decorate([
	    webcomponentsBase.s({ type: Boolean })
	], ShellBar.prototype, "showProductSwitch", void 0);
	__decorate([
	    webcomponentsBase.s({ type: Object })
	], ShellBar.prototype, "accessibilityAttributes", void 0);
	__decorate([
	    webcomponentsBase.s()
	], ShellBar.prototype, "breakpointSize", void 0);
	__decorate([
	    webcomponentsBase.s({ type: Boolean })
	], ShellBar.prototype, "withLogo", void 0);
	__decorate([
	    webcomponentsBase.s({ type: Object })
	], ShellBar.prototype, "_itemsInfo", void 0);
	__decorate([
	    webcomponentsBase.s({ type: Object })
	], ShellBar.prototype, "_contentInfo", void 0);
	__decorate([
	    webcomponentsBase.s({ type: Boolean, noAttribute: true })
	], ShellBar.prototype, "_menuPopoverExpanded", void 0);
	__decorate([
	    webcomponentsBase.s({ type: Boolean, noAttribute: true })
	], ShellBar.prototype, "_overflowPopoverExpanded", void 0);
	__decorate([
	    webcomponentsBase.s({ type: Boolean, noAttribute: true })
	], ShellBar.prototype, "showFullWidthSearch", void 0);
	__decorate([
	    webcomponentsBase.d()
	], ShellBar.prototype, "assistant", void 0);
	__decorate([
	    webcomponentsBase.d({ type: HTMLElement, "default": true, invalidateOnChildChange: true })
	], ShellBar.prototype, "items", void 0);
	__decorate([
	    webcomponentsBase.d()
	], ShellBar.prototype, "profile", void 0);
	__decorate([
	    webcomponentsBase.d()
	], ShellBar.prototype, "logo", void 0);
	__decorate([
	    webcomponentsBase.d()
	], ShellBar.prototype, "menuItems", void 0);
	__decorate([
	    webcomponentsBase.d({
	        type: HTMLElement,
	        invalidateOnChildChange: true,
	    })
	], ShellBar.prototype, "searchField", void 0);
	__decorate([
	    webcomponentsBase.d()
	], ShellBar.prototype, "startButton", void 0);
	__decorate([
	    webcomponentsBase.d()
	], ShellBar.prototype, "midContent", void 0);
	__decorate([
	    webcomponentsBase.d({ type: HTMLElement, individualSlots: true })
	], ShellBar.prototype, "content", void 0);
	__decorate([
	    webcomponentsBase.s({ type: Boolean })
	], ShellBar.prototype, "showSearchField", null);
	__decorate([
	    i18n.i("@ui5/webcomponents-fiori")
	], ShellBar, "i18nBundle", void 0);
	ShellBar = ShellBar_1 = __decorate([
	    webcomponentsBase.m({
	        tag: "ui5-shellbar",
	        fastNavigation: true,
	        languageAware: true,
	        renderer: parametersBundle_css.d,
	        template: ShellBarTemplate,
	        styles: [shellBarStyles, ShellBarPopoverCss],
	        dependencies: [
	            Button.Button,
	            Icon.Icon,
	            List.List,
	            Popover.Popover,
	            ListItemStandard.ListItemStandard,
	            Menu,
	        ],
	    })
	    /**
	     *
	     * Fired, when the notification icon is activated.
	     * @param {HTMLElement} targetRef dom ref of the activated element
	     * @public
	     */
	    ,
	    eventStrict.l("notifications-click", {
	        cancelable: true,
	        bubbles: true,
	    })
	    /**
	     * Fired, when the profile slot is present.
	     * @param {HTMLElement} targetRef dom ref of the activated element
	     * @public
	     */
	    ,
	    eventStrict.l("profile-click", {
	        bubbles: true,
	    })
	    /**
	     * Fired, when the product switch icon is activated.
	     *
	     * **Note:** You can prevent closing of overflow popover by calling `event.preventDefault()`.
	     * @param {HTMLElement} targetRef dom ref of the activated element
	     * @public
	     */
	    ,
	    eventStrict.l("product-switch-click", {
	        cancelable: true,
	        bubbles: true,
	    })
	    /**
	     * Fired, when the logo is activated.
	     * @param {HTMLElement} targetRef dom ref of the activated element
	     * @since 0.10
	     * @public
	     */
	    ,
	    eventStrict.l("logo-click", {
	        bubbles: true,
	    })
	    /**
	     * Fired, when a menu item is activated
	     *
	     * **Note:** You can prevent closing of overflow popover by calling `event.preventDefault()`.
	     * @param {HTMLElement} item DOM ref of the activated list item
	     * @since 0.10
	     * @public
	     */
	    ,
	    eventStrict.l("menu-item-click", {
	        bubbles: true,
	        cancelable: true,
	    })
	    /**
	     * Fired, when the search button is activated.
	     *
	     * **Note:** You can prevent expanding/collapsing of the search field by calling `event.preventDefault()`.
	     * @param {HTMLElement} targetRef dom ref of the activated element
	     * @param {Boolean} searchFieldVisible whether the search field is visible
	     * @public
	     */
	    ,
	    eventStrict.l("search-button-click", {
	        cancelable: true,
	        bubbles: true,
	    })
	    /**
	     * Fired, when the search field is expanded or collapsed.
	     * @since 2.10.0
	     * @param {Boolean} expanded whether the search field is expanded
	     * @public
	     */
	    ,
	    eventStrict.l("search-field-toggle", {
	        bubbles: true,
	    })
	    /**
	     * Fired, when an item from the content slot is hidden or shown.
	     * **Note:** The `content-item-visibility-change` event is in an experimental state and is a subject to change.
	     *
	     * @param {Array<HTMLElement>} array of all the items that are hidden
	     * @public
	     * @since 2.7.0
	     */
	    ,
	    eventStrict.l("content-item-visibility-change", {
	        bubbles: true,
	    })
	], ShellBar);
	const isSelfCollapsibleSearch = (searchField) => {
	    if (searchField) {
	        return "collapsed" in searchField;
	    }
	    return false;
	};
	ShellBar.define();
	var ShellBar$1 = ShellBar;

	return ShellBar$1;

}));
