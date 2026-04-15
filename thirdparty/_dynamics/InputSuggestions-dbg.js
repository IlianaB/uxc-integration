sap.ui.define(['exports', 'uxc/integration/thirdparty/Input', 'uxc/integration/thirdparty/SuggestionItem', 'uxc/integration/thirdparty/webcomponents-fiori', 'uxc/integration/thirdparty/List', 'uxc/integration/thirdparty/parameters-bundle.css', 'uxc/integration/thirdparty/Icon', 'uxc/integration/thirdparty/decline', 'uxc/integration/thirdparty/ResponsivePopover', 'uxc/integration/thirdparty/Button2', 'uxc/integration/thirdparty/i18n-defaults2', 'uxc/integration/thirdparty/event-strict', 'uxc/integration/thirdparty/Theme', 'uxc/integration/thirdparty/i18n2', 'uxc/integration/thirdparty/AccessibilityTextsHelper', 'uxc/integration/thirdparty/information2', 'uxc/integration/thirdparty/information', 'uxc/integration/thirdparty/Icons', 'uxc/integration/thirdparty/i18n', 'uxc/integration/thirdparty/i18n-defaults3', 'uxc/integration/thirdparty/sys-enter-2', 'uxc/integration/thirdparty/Popover2', 'uxc/integration/thirdparty/getEffectiveScrollbarStyle', 'uxc/integration/thirdparty/FocusableElements', 'uxc/integration/thirdparty/toLowercaseEnumValue', 'uxc/integration/thirdparty/parameters-bundle.css2', 'uxc/integration/thirdparty/Title', 'uxc/integration/thirdparty/LocaleData', 'uxc/integration/thirdparty/ResponsivePopoverCommon.css', 'uxc/integration/thirdparty/ListItemBase', 'uxc/integration/thirdparty/Dialog', 'uxc/integration/thirdparty/willShowContent'], (function (exports, Input, SuggestionItem, webcomponentsBase, List, parametersBundle_css, Icon, decline, ResponsivePopover, Button, i18nDefaults, eventStrict, Theme, i18n, AccessibilityTextsHelper, information, information$1, Icons, i18n$1, i18nDefaults$1, sysEnter2, Popover, getEffectiveScrollbarStyle, FocusableElements, toLowercaseEnumValue, parametersBundle_css$1, Title, LocaleData, ResponsivePopoverCommon_css, ListItemBase, Dialog, willShowContent) { 'use strict';

    const r=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");

    function a(r$1,e,s,i){return r$1.replaceAll(new RegExp(r(e),`${i?"i":""}g`),s)}function f(r,e){if(!r||!e)return r;const s=n=>{const[g,l]=n.split("");for(;r.indexOf(n)>=0||e.indexOf(n)>=0;)n=`${g}${n}${l}`;return n},i=s("12"),t=s("34");let o=Input.fnEncodeXML(a(r,e,n=>`${i}${n}${t}`,true));return [[i,"<b>"],[t,"</b>"]].forEach(([n,g])=>{o=a(o,n,g,false);}),o}

    function ListItemGroupTemplate(hooks) {
        const items = hooks?.items || defaultItems;
        return (parametersBundle_css.jsxs("ul", { role: "group", class: "ui5-group-li-root", onDragEnter: this._ondragenter, onDragOver: this._ondragover, onDrop: this._ondrop, onDragLeave: this._ondragleave, children: [this.hasHeader &&
                    parametersBundle_css.jsx(List.ListItemGroupHeader, { focused: this.focused, part: "header", accessibleRole: List.ListItemAccessibleRole.Group, children: this.hasFormattedHeader ? parametersBundle_css.jsx("slot", { name: "header" }) : this.headerText }), items.call(this), parametersBundle_css.jsx(List.DropIndicator, { orientation: "Horizontal", ownerReference: this })] }));
    }
    function defaultItems() {
        return parametersBundle_css.jsx("slot", {});
    }

    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    /**
     * @class
     * The `ui5-suggestion-item-group` is type of suggestion item,
     * that can be used to split the `ui5-input` suggestions into groups.
     * @constructor
     * @extends ListItemGroup
     * @public
     * @since 2.0.0
     */
    let SuggestionItemGroup = class SuggestionItemGroup extends List.ListItemGroup {
    };
    __decorate([
        webcomponentsBase.d({
            "default": true,
            invalidateOnChildChange: true,
            type: HTMLElement,
        })
    ], SuggestionItemGroup.prototype, "items", void 0);
    SuggestionItemGroup = __decorate([
        webcomponentsBase.m({
            tag: "ui5-suggestion-item-group",
            template: ListItemGroupTemplate,
        })
    ], SuggestionItemGroup);
    SuggestionItemGroup.define();

    function InputSuggestionsTemplate(hooks) {
        const suggestionsList = hooks?.suggestionsList || defaultSuggestionsList;
        const valueStateMessage = hooks?.valueStateMessage;
        const valueStateMessageInputIcon = hooks?.valueStateMessageInputIcon;
        return (parametersBundle_css.jsxs(ResponsivePopover, { class: this.classes.popover, hideArrow: true, preventFocusRestore: true, preventInitialFocus: true, placement: "Bottom", horizontalAlign: "Start", tabindex: -1, style: this.styles.suggestionsPopover, onOpen: this._afterOpenPicker, onClose: this._afterClosePicker, onScroll: this._scroll, open: this.open, opener: this, accessibleName: this._popupLabel, children: [this._isPhone &&
                    parametersBundle_css.jsxs(parametersBundle_css.Fragment, { children: [parametersBundle_css.jsxs("div", { slot: "header", class: "ui5-responsive-popover-header", children: [parametersBundle_css.jsxs("div", { class: "row", children: [parametersBundle_css.jsx("span", { children: this._headerTitleText }), parametersBundle_css.jsx(Button.Button, { class: "ui5-responsive-popover-close-btn", icon: decline.decline, design: "Transparent", onClick: this._closePicker })] }), parametersBundle_css.jsx("div", { class: "row", children: parametersBundle_css.jsx("div", { class: "input-root-phone native-input-wrapper", children: parametersBundle_css.jsx(Input.Input, { class: "ui5-input-inner-phone", type: this.inputType, value: this.value, showClearIcon: this.showClearIcon, placeholder: this.placeholder, onInput: this._handleInput, onChange: this._handleChange }) }) })] }), this.hasValueStateMessage &&
                                parametersBundle_css.jsxs("div", { class: this.classes.popoverValueState, style: this.styles.suggestionPopoverHeader, children: [parametersBundle_css.jsx(Icon.Icon, { class: "ui5-input-value-state-message-icon", name: valueStateMessageInputIcon?.call(this) }), this.open && valueStateMessage?.call(this)] })] }), !this._isPhone && this.hasValueStateMessage &&
                    parametersBundle_css.jsxs("div", { slot: "header", class: {
                            "ui5-responsive-popover-header": true,
                            "ui5-responsive-popover-header--focused": this._isValueStateFocused,
                            ...this.classes.popoverValueState,
                        }, style: this.styles.suggestionPopoverHeader, children: [parametersBundle_css.jsx(Icon.Icon, { class: "ui5-input-value-state-message-icon", name: valueStateMessageInputIcon?.call(this) }), this.open && valueStateMessage?.call(this)] }), suggestionsList.call(this), this._isPhone &&
                    parametersBundle_css.jsx("div", { slot: "footer", class: "ui5-responsive-popover-footer", children: parametersBundle_css.jsx(Button.Button, { design: "Transparent", onClick: this._closePicker, children: "OK" }) })] }));
    }
    function defaultSuggestionsList() {
        return (parametersBundle_css.jsx(List.List, { accessibleRole: List.ListAccessibleRole.ListBox, separators: this.suggestionSeparators, selectionMode: "Single", onMouseDown: this.onItemMouseDown, onItemClick: this._handleSuggestionItemPress, onSelectionChange: this._handleSelectionChange, children: parametersBundle_css.jsx("slot", {}) }));
    }

    /**
     * A class to manage the `Input` suggestion items.
     * @class
     * @private
     */
    class Suggestions {
        get template() {
            return InputSuggestionsTemplate;
        }
        constructor(component, slotName, highlight, handleFocus) {
            // The component, that the suggestion would plug into.
            this.component = component;
            // Defines the items` slot name.
            this.slotName = slotName;
            // Defines, if the focus will be moved via the arrow keys.
            this.handleFocus = handleFocus;
            // Defines, if the suggestions should highlight.
            this.highlight = highlight;
            // An integer value to store the currently selected item position,
            // that changes due to user interaction.
            this.selectedItemIndex = -1;
        }
        onUp(e, indexOfItem) {
            e.preventDefault();
            const index = !this.isOpened && this._hasValueState && indexOfItem === -1 ? 0 : indexOfItem;
            this._handleItemNavigation(false /* forward */, index);
            return true;
        }
        onDown(e, indexOfItem) {
            e.preventDefault();
            const index = !this.isOpened && this._hasValueState && indexOfItem === -1 ? 0 : indexOfItem;
            this._handleItemNavigation(true /* forward */, index);
            return true;
        }
        onSpace(e) {
            if (this._isItemOnTarget()) {
                e.preventDefault();
                this.onItemSelected(this._selectedItem, true /* keyboardUsed */);
                return true;
            }
            return false;
        }
        onEnter(e) {
            if (this._isGroupItem) {
                e.preventDefault();
                return false;
            }
            if (this._isItemOnTarget()) {
                this.onItemSelected(this._selectedItem, true /* keyboardUsed */);
                return true;
            }
            return false;
        }
        onPageUp(e) {
            e.preventDefault();
            const isItemIndexValid = this.selectedItemIndex - 10 > -1;
            if (this._hasValueState && !isItemIndexValid) {
                this._focusValueState();
                return true;
            }
            this._moveItemSelection(this.selectedItemIndex, isItemIndexValid ? this.selectedItemIndex -= 10 : this.selectedItemIndex = 0);
            return true;
        }
        onPageDown(e) {
            e.preventDefault();
            const items = this._getItems();
            const lastItemIndex = items.length - 1;
            const isItemIndexValid = this.selectedItemIndex + 10 <= lastItemIndex;
            if (this._hasValueState && !items) {
                this._focusValueState();
                return true;
            }
            this._moveItemSelection(this.selectedItemIndex, isItemIndexValid ? this.selectedItemIndex += 10 : this.selectedItemIndex = lastItemIndex);
            return true;
        }
        onHome(e) {
            e.preventDefault();
            if (this._hasValueState) {
                this._focusValueState();
                return true;
            }
            this._moveItemSelection(this.selectedItemIndex, this.selectedItemIndex = 0);
            return true;
        }
        onEnd(e) {
            e.preventDefault();
            const lastItemIndex = this._getItems().length - 1;
            if (this._hasValueState && !lastItemIndex) {
                this._focusValueState();
                return true;
            }
            this._moveItemSelection(this.selectedItemIndex, this.selectedItemIndex = lastItemIndex);
            return true;
        }
        onTab() {
            if (this._isItemOnTarget()) {
                this.onItemSelected(this._selectedItem, true);
                return true;
            }
            return false;
        }
        toggle(bToggle, options) {
            const toggle = bToggle !== undefined ? bToggle : !this.isOpened();
            if (toggle) {
                this._getComponent().open = true;
            }
            else {
                this.close(options.preventFocusRestore);
            }
        }
        get _selectedItem() {
            return this._getNonGroupItems().find(item => item.selected);
        }
        _isScrollable() {
            const sc = this._getScrollContainer();
            return sc.offsetHeight < sc.scrollHeight;
        }
        close(preventFocusRestore = false) {
            const selectedItem = this._getItems() && this._getItems()[this.selectedItemIndex];
            this._getComponent().open = false;
            const picker = this._getPicker();
            picker.preventFocusRestore = preventFocusRestore;
            picker.open = false;
            if (selectedItem && selectedItem.focused) {
                selectedItem.focused = false;
            }
        }
        updateSelectedItemPosition(pos) {
            this.selectedItemIndex = pos;
        }
        onItemSelected(selectedItem, keyboardUsed) {
            const item = selectedItem;
            const nonGroupItems = this._getNonGroupItems();
            if (!item) {
                return;
            }
            this.accInfo = {
                isGroup: item.hasAttribute("ui5-suggestion-item-group"),
                currentPos: nonGroupItems.indexOf(item) + 1,
                listSize: nonGroupItems.length,
                itemText: item.text || "",
                additionalText: item.additionalText,
            };
            this._getComponent().onItemSelected(item, keyboardUsed);
            this._getComponent().open = false;
        }
        onItemSelect(item) {
            this._getComponent().onItemSelect(item);
        }
        /* Private methods */
        // Note: Split into two separate handlers
        onItemPress(e) {
            let pressedItem; // SuggestionListItem
            const isPressEvent = e.type === "ui5-item-click";
            // Only use the press e if the item is already selected, in all other cases we are listening for 'ui5-selection-change' from the list
            // Also we have to check if the selection-change is fired by the list's 'item-click' event handling, to avoid double handling on our side
            if ((isPressEvent && !e.detail.item.selected) || (this._handledPress && !isPressEvent)) {
                return;
            }
            if (isPressEvent && e.detail.item.selected) {
                pressedItem = e.detail.item;
                this._handledPress = true;
            }
            else {
                pressedItem = e.detail.selectedItems[0];
            }
            this.onItemSelected(pressedItem, false /* keyboardUsed */);
        }
        _onClose() {
            this._handledPress = false;
        }
        _isItemOnTarget() {
            return this.isOpened() && this.selectedItemIndex !== null && this.selectedItemIndex !== -1 && !this._isGroupItem;
        }
        get _isGroupItem() {
            const items = this._getItems();
            if (!items || !items[this.selectedItemIndex]) {
                return false;
            }
            return items[this.selectedItemIndex].hasAttribute("ui5-suggestion-item-group");
        }
        isOpened() {
            return !!(this._getPicker()?.open);
        }
        _handleItemNavigation(forward, index) {
            this.selectedItemIndex = index;
            if (!this._getItems().length) {
                return;
            }
            if (forward) {
                this._selectNextItem();
            }
            else {
                this._selectPreviousItem();
            }
        }
        _selectNextItem() {
            const itemsCount = this._getItems().length;
            const previousSelectedIdx = this.selectedItemIndex;
            if (this._hasValueState && previousSelectedIdx === -1 && !this.component._isValueStateFocused) {
                this._focusValueState();
                return;
            }
            if ((previousSelectedIdx === -1 && !this._hasValueState) || this.component._isValueStateFocused) {
                this._clearValueStateFocus();
                this.selectedItemIndex = -1;
            }
            if (previousSelectedIdx !== -1 && previousSelectedIdx + 1 > itemsCount - 1) {
                return;
            }
            this._moveItemSelection(previousSelectedIdx, ++this.selectedItemIndex);
        }
        _selectPreviousItem() {
            const items = this._getItems();
            const previousSelectedIdx = this.selectedItemIndex;
            if (this._hasValueState && previousSelectedIdx === 0 && !this.component._isValueStateFocused) {
                this.component.hasSuggestionItemSelected = false;
                this.component._isValueStateFocused = true;
                this.selectedItemIndex = 0;
                items[0].focused = false;
                if (items[0].hasAttribute("ui5-suggestion-item")) {
                    items[0].selected = false;
                }
                return;
            }
            if (this.component._isValueStateFocused) {
                this.component.focused = true;
                this.component._isValueStateFocused = false;
                this.selectedItemIndex = 0;
                return;
            }
            if (previousSelectedIdx === -1 || previousSelectedIdx === null) {
                return;
            }
            if (previousSelectedIdx - 1 < 0) {
                if (items[previousSelectedIdx].hasAttribute("ui5-suggestion-item") || items[previousSelectedIdx].hasAttribute("ui5-suggestion-item-custom")) {
                    items[previousSelectedIdx].selected = false;
                }
                items[previousSelectedIdx].focused = false;
                this.component.focused = true;
                this.component.hasSuggestionItemSelected = false;
                this.selectedItemIndex -= 1;
                return;
            }
            this._moveItemSelection(previousSelectedIdx, --this.selectedItemIndex);
        }
        _moveItemSelection(previousIdx, nextIdx) {
            const items = this._getItems();
            const currentItem = items[nextIdx];
            const previousItem = items[previousIdx];
            const nonGroupItems = this._getNonGroupItems();
            const isGroupItem = currentItem.hasAttribute("ui5-suggestion-item-group");
            if (!currentItem) {
                return;
            }
            this.component.focused = false;
            this._clearValueStateFocus();
            const selectedItem = this._getItems()[this.selectedItemIndex];
            this.accInfo = {
                isGroup: isGroupItem,
                currentPos: items.indexOf(currentItem) + 1,
                itemText: (isGroupItem ? selectedItem.headerText : selectedItem.text) || "",
            };
            if (currentItem.hasAttribute("ui5-suggestion-item") || currentItem.hasAttribute("ui5-suggestion-item-custom")) {
                this.accInfo.additionalText = currentItem.additionalText || "";
                this.accInfo.currentPos = nonGroupItems.indexOf(currentItem) + 1;
                this.accInfo.listSize = nonGroupItems.length;
            }
            if (previousItem) {
                previousItem.focused = false;
            }
            if (previousItem?.hasAttribute("ui5-suggestion-item") || previousItem?.hasAttribute("ui5-suggestion-item-custom")) {
                previousItem.selected = false;
            }
            if (currentItem) {
                currentItem.focused = true;
                if (!isGroupItem) {
                    currentItem.selected = true;
                }
                if (this.handleFocus) {
                    currentItem.focus();
                }
            }
            this.component.hasSuggestionItemSelected = true;
            this.onItemSelect(currentItem);
            if (!this._isItemIntoView(currentItem)) {
                const itemRef = this._isGroupItem ? currentItem.shadowRoot.querySelector("[ui5-li-group-header]") : currentItem;
                this._scrollItemIntoView(itemRef);
            }
        }
        _deselectItems() {
            const items = this._getItems();
            items.forEach(item => {
                if (item.hasAttribute("ui5-suggestion-item")) {
                    item.selected = false;
                }
                item.focused = false;
            });
        }
        _clearItemFocus() {
            const focusedItem = this._getItems().find(item => item.focused);
            if (focusedItem) {
                focusedItem.focused = false;
            }
        }
        _isItemIntoView(item) {
            const rectItem = item.getDomRef().getBoundingClientRect();
            const rectInput = this._getComponent().getDomRef().getBoundingClientRect();
            const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
            let headerHeight = 0;
            if (this._hasValueState) {
                const valueStateHeader = this._getPicker().querySelector("[slot=header]");
                headerHeight = valueStateHeader.getBoundingClientRect().height;
            }
            return (rectItem.top + Suggestions.SCROLL_STEP <= windowHeight) && (rectItem.top >= rectInput.top + headerHeight);
        }
        _scrollItemIntoView(item) {
            item.scrollIntoView({
                behavior: "auto",
                block: "nearest",
                inline: "nearest",
            });
        }
        _getScrollContainer() {
            if (!this._scrollContainer) {
                this._scrollContainer = this._getPicker().shadowRoot.querySelector(".ui5-popup-content");
            }
            return this._scrollContainer;
        }
        /**
         * Returns the items in 1D array.
         *
         */
        _getItems() {
            const suggestionComponent = this._getComponent();
            return suggestionComponent.getSlottedNodes("suggestionItems").flatMap(item => {
                return item.hasAttribute("ui5-suggestion-item-group") ? [item, ...item.items] : [item];
            });
        }
        _getNonGroupItems() {
            return this._getItems().filter(item => !item.hasAttribute("ui5-suggestion-item-group"));
        }
        _getComponent() {
            return this.component;
        }
        _getList() {
            return this._getPicker().querySelector("[ui5-list]");
        }
        _getListWidth() {
            return this._getList()?.offsetWidth;
        }
        _getPicker() {
            return this._getComponent().shadowRoot.querySelector("[ui5-responsive-popover]");
        }
        get itemSelectionAnnounce() {
            if (!this.accInfo) {
                return "";
            }
            if (this.accInfo.isGroup) {
                return `${Suggestions.i18nBundle.getText(i18nDefaults.LIST_ITEM_GROUP_HEADER)} ${this.accInfo.itemText}`;
            }
            const itemPositionText = Suggestions.i18nBundle.getText(i18nDefaults.LIST_ITEM_POSITION, this.accInfo.currentPos || 0, this.accInfo.listSize || 0);
            return `${this.accInfo.additionalText} ${itemPositionText}`;
        }
        hightlightInput(text, input) {
            return f(text, input);
        }
        get _hasValueState() {
            return this.component.hasValueStateMessage;
        }
        _focusValueState() {
            this.component._isValueStateFocused = true;
            this.component.focused = false;
            this.component.hasSuggestionItemSelected = false;
            this.selectedItemIndex = 0;
            this.component.value = this.component.typedInValue;
            this._deselectItems();
        }
        _clearValueStateFocus() {
            this.component._isValueStateFocused = false;
        }
        _clearSelectedSuggestionAndaccInfo() {
            this.accInfo = undefined;
            this.selectedItemIndex = 0;
        }
    }
    Suggestions.SCROLL_STEP = 60;
    Input.Input.SuggestionsClass = Suggestions;

    exports.default = Suggestions;

}));
