sap.ui.define(['uxc/integration/thirdparty/webcomponents-fiori', 'uxc/integration/thirdparty/parameters-bundle.css', 'uxc/integration/thirdparty/event-strict', 'uxc/integration/thirdparty/getEffectiveScrollbarStyle', 'uxc/integration/thirdparty/ListItemBase', 'uxc/integration/thirdparty/Button2', 'uxc/integration/thirdparty/Theme', 'uxc/integration/thirdparty/i18n2', 'uxc/integration/thirdparty/Icons', 'uxc/integration/thirdparty/slim-arrow-down', 'uxc/integration/thirdparty/List', 'uxc/integration/thirdparty/i18n-defaults2', 'uxc/integration/thirdparty/ResponsivePopover', 'uxc/integration/thirdparty/parameters-bundle.css2', 'uxc/integration/thirdparty/ResponsivePopoverCommon.css', 'uxc/integration/thirdparty/willShowContent', 'uxc/integration/thirdparty/information', 'uxc/integration/thirdparty/ListItemTemplate', 'uxc/integration/thirdparty/Icon', 'uxc/integration/thirdparty/ListItemCustom', 'uxc/integration/thirdparty/Title', 'uxc/integration/thirdparty/nav-back', 'uxc/integration/thirdparty/parameters-bundle.css3', 'uxc/integration/thirdparty/i18n', 'uxc/integration/thirdparty/LocaleData', 'uxc/integration/thirdparty/FocusableElements', 'uxc/integration/thirdparty/AccessibilityTextsHelper', 'uxc/integration/thirdparty/toLowercaseEnumValue', 'uxc/integration/thirdparty/decline', 'uxc/integration/thirdparty/i18n-defaults3', 'uxc/integration/thirdparty/Popover2', 'uxc/integration/thirdparty/Dialog', 'uxc/integration/thirdparty/ListItemAdditionalText.css'], (function (webcomponentsBase, parametersBundle_css, eventStrict, getEffectiveScrollbarStyle, ListItemBase, Button, Theme, i18n, Icons, slimArrowDown, List, i18nDefaults, ResponsivePopover, parametersBundle_css$1, ResponsivePopoverCommon_css, willShowContent, information, ListItemTemplate, Icon, ListItemCustom, Title, navBack, parametersBundle_css$2, i18n$1, LocaleData, FocusableElements, AccessibilityTextsHelper, toLowercaseEnumValue, decline, i18nDefaults$1, Popover, Dialog, ListItemAdditionalText_css) { 'use strict';

    const name$3 = "slim-arrow-up";
    const pathData$3 = "M261.5 197q-6-6-11 0l-160 160q-5 5-11.5 5t-11.5-5-5-11.5 5-11.5l166-165q9-9 22-9t23 9l165 165q5 5 5 11t-5 11q-12 12-23 0z";
    const ltr$3 = false;
    const collection$3 = "SAP-icons-v4";
    const packageName$3 = "@ui5/webcomponents-icons";

    Icons.f(name$3, { pathData: pathData$3, ltr: ltr$3, collection: collection$3, packageName: packageName$3 });

    const name$2 = "slim-arrow-up";
    const pathData$2 = "M96 326q0-10 7-17l135-141q6-8 18-8 11 0 19 8l134 141q7 7 7 17 0 11-7.5 18.5T390 352q-10 0-18-8L256 223 140 344q-8 8-18 8-11 0-18.5-7.5T96 326z";
    const ltr$2 = false;
    const collection$2 = "SAP-icons-v5";
    const packageName$2 = "@ui5/webcomponents-icons";

    Icons.f(name$2, { pathData: pathData$2, ltr: ltr$2, collection: collection$2, packageName: packageName$2 });

    let a=null,l=Date.now();const s=300,D=g=>(u,i,e)=>{const o=e.value;return e.value=function(t){let n=false;if(t.target instanceof HTMLElement){const r=t.target.closest(g);r===a&&Date.now()-l>=s?n=true:r!==a&&(a=r,l=Date.now());}o.apply(this,[t,n]);},e};

    /**
     * Tabs placement of TabContainer.
     * @private
     */
    var TabContainerTabsPlacement;
    (function (TabContainerTabsPlacement) {
        /**
         * The tab strip is displayed above the tab content (Default)
         * @private
         */
        TabContainerTabsPlacement["Top"] = "Top";
        /**
         * The tab strip is displayed below the tab content
         * @private
         */
        TabContainerTabsPlacement["Bottom"] = "Bottom";
    })(TabContainerTabsPlacement || (TabContainerTabsPlacement = {}));
    var TabContainerTabsPlacement$1 = TabContainerTabsPlacement;

    /**
     * Different types of SemanticColor.
     * @public
     */
    var SemanticColor;
    (function (SemanticColor) {
        /**
         * Default color (brand color)
         * @public
         */
        SemanticColor["Default"] = "Default";
        /**
         * Positive color
         * @public
         */
        SemanticColor["Positive"] = "Positive";
        /**
         * Negative color
         * @public
         */
        SemanticColor["Negative"] = "Negative";
        /**
         * Critical color
         * @public
         */
        SemanticColor["Critical"] = "Critical";
        /**
         * Neutral color.
         * @public
         */
        SemanticColor["Neutral"] = "Neutral";
    })(SemanticColor || (SemanticColor = {}));
    var SemanticColor$1 = SemanticColor;

    /**
     * Tab layout of TabContainer.
     * @public
     */
    var TabLayout;
    (function (TabLayout) {
        /**
         * Inline type, the tab "main text" and "additionalText" are displayed horizotally.
         * @public
         */
        TabLayout["Inline"] = "Inline";
        /**
         * Standard type, the tab "main text" and "additionalText" are displayed vertically.
         * @public
         */
        TabLayout["Standard"] = "Standard";
    })(TabLayout || (TabLayout = {}));
    var TabLayout$1 = TabLayout;

    /**
     * Tabs overflow mode in TabContainer.
     * @public
     */
    var OverflowMode;
    (function (OverflowMode) {
        /**
         * End type is used if there should be only one overflow with hidden the tabs at the end of the tab container.
         * @public
         */
        OverflowMode["End"] = "End";
        /**
         * StartAndEnd type is used if there should be two overflows on both ends of the tab container.
         * @public
         */
        OverflowMode["StartAndEnd"] = "StartAndEnd";
    })(OverflowMode || (OverflowMode = {}));
    var OverflowMode$1 = OverflowMode;

    function TabContainerPopoverTemplate() {
        return (parametersBundle_css.jsxs(ResponsivePopover, { id: `${this._id}-overflowMenu`, horizontalAlign: "End", placement: "Bottom", contentOnlyOnDesktop: true, hideArrow: true, _hideHeader: true, class: "ui5-tab-container-responsive-popover", onDragStart: this._onDragStart, children: [parametersBundle_css.jsx(List.List, { selectionMode: "Single", separators: "None", onItemClick: this._onOverflowListItemClick, onMoveOver: this._onPopoverListMoveOver, onMove: this._onPopoverListMove, onKeyDown: this._onPopoverListKeyDown, children: this._popoverItemsFlat.map(item => item.overflowPresentation) }), parametersBundle_css.jsx("div", { slot: "footer", class: "ui5-responsive-popover-footer", children: parametersBundle_css.jsx(Button.Button, { design: "Transparent", onClick: this._closePopover, children: this.popoverCancelButtonText }) })] }));
    }

    function contentArea() {
        return (parametersBundle_css.jsx("div", { class: {
                "ui5-tc__content": true,
                "ui5-tc__content--collapsed": this._contentCollapsed,
            }, part: "content", children: parametersBundle_css.jsx("div", { class: "ui5-tc__contentItem", id: "ui5-tc-content", hidden: this._selectedTab?.effectiveHidden, role: "tabpanel", "aria-labelledby": this._selectedTab?._id, children: this.items.map(item => parametersBundle_css.jsx("slot", { name: item._effectiveSlotName })) }) }));
    }
    const defaultPartials = {
        contentArea,
    };
    function TabContainerTemplate(injectedPartials) {
        const partials = {
            ...defaultPartials,
            ...injectedPartials,
        };
        return (parametersBundle_css.jsxs(parametersBundle_css.Fragment, { children: [parametersBundle_css.jsxs("div", { class: {
                        "ui5-tc-root": true,
                        "ui5-tc--textOnly": this.textOnly,
                        "ui5-tc--withAdditionalText": this.withAdditionalText,
                        "ui5-tc--standardTabLayout": this.standardTabLayout,
                        "ui5-tc--noTabSelected": !this._selectedTab,
                    }, children: [this.tabsAtTheBottom && partials.contentArea.call(this), parametersBundle_css.jsxs("div", { class: "ui5-tc__header", id: `${this._id}-header`, onFocusIn: this._onHeaderFocusin, onDragStart: this._onDragStart, onDragEnter: this._onHeaderDragEnter, onDragOver: this._onHeaderDragOver, onDrop: this._onHeaderDrop, onDragLeave: this._onHeaderDragLeave, part: "tabstrip", children: [parametersBundle_css.jsx("div", { class: "ui5-tc__overflow ui5-tc__overflow--start", onClick: this._onOverflowClick, onKeyDown: this._onOverflowKeyDown, hidden: true, children: this.startOverflowButton.length ?
                                        parametersBundle_css.jsx("slot", { name: "startOverflowButton" })
                                        : // else
                                            parametersBundle_css.jsx(Button.Button, { endIcon: this.overflowMenuIcon, "data-ui5-stable": "overflow-start", tabindex: -1, tooltip: this.overflowMenuTitle, accessibilityAttributes: this.overflowBtnAccessibilityAttributes, children: this._startOverflowText }) }), parametersBundle_css.jsx("div", { id: `${this._id}-tabStrip`, class: "ui5-tc__tabStrip", role: "tablist", "aria-describedby": this.tablistAriaDescribedById, onClick: this._onTabStripClick, onKeyDown: this._onTabStripKeyDown, onKeyUp: this._onTabStripKeyUp, children: this.items.map(item => item.stripPresentation) }), parametersBundle_css.jsx("div", { class: "ui5-tc__overflow ui5-tc__overflow--end", onClick: this._onOverflowClick, onKeyDown: this._onOverflowKeyDown, hidden: true, children: this.overflowButton.length ?
                                        parametersBundle_css.jsx("slot", { name: "overflowButton" })
                                        :
                                            parametersBundle_css.jsx(Button.Button, { endIcon: this.overflowMenuIcon, "data-ui5-stable": "overflow-end", tabindex: -1, tooltip: this.overflowMenuTitle, accessibilityAttributes: this.overflowBtnAccessibilityAttributes, children: this._endOverflowText }) }), parametersBundle_css.jsx(List.DropIndicator, { orientation: "Vertical", ownerReference: this })] }), !this.tabsAtTheBottom && partials.contentArea.call(this), this.hasItems &&
                            parametersBundle_css.jsx("span", { id: `${this._id}-invisibleText`, class: "ui5-hidden-text", children: this.accInvisibleText })] }), TabContainerPopoverTemplate.call(this)] }));
    }

    Theme.p("@ui5/webcomponents-theming", "sap_horizon", async () => parametersBundle_css.defaultThemeBase);
    Theme.p("@ui5/webcomponents", "sap_horizon", async () => parametersBundle_css$1.defaultTheme);
    var tabContainerCss = `.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:block;width:100%}.ui5-tc-root{display:flex;flex-direction:column;width:100%;height:100%;font-family:"72override",var(--sapFontHeaderFamily);font-size:1rem}.ui5-tc__header{position:relative;display:flex;align-items:center;background-color:var(--_ui5-v2-10-0_tc_header_background);--ui5-v2-10-0_tc_header_active_background_color: var(--_ui5-v2-10-0_tc_header_background);height:var(--_ui5-v2-10-0_tc_header_height);box-shadow:var(--_ui5-v2-10-0_tc_header_box_shadow);box-sizing:border-box}:host([tabs-placement="Bottom"]) .ui5-tc__header{border-top:var(--_ui5-v2-10-0_tc_header_border_bottom)}:host([header-background-design="Transparent"]) .ui5-tc__header{background-color:transparent;--ui5-v2-10-0_tc_header_active_background_color: transparent;box-shadow:none;border-bottom:.0625rem solid var(--sapObjectHeader_BorderColor)}:host([header-background-design="Translucent"]) .ui5-tc__header{background-color:var(--_ui5-v2-10-0_tc_header_background_translucent);--ui5-v2-10-0_tc_header_active_background_color: var(--_ui5-v2-10-0_tc_header_background_translucent)}.ui5-tc-root.ui5-tc--textOnly .ui5-tc__header{height:var(--_ui5-v2-10-0_tc_header_height_text_only)}.ui5-tc-root.ui5-tc--textOnly.ui5-tc--withAdditionalText.ui5-tc--standardTabLayout .ui5-tc__header{height:var(--_ui5-v2-10-0_tc_header_height_text_with_additional_text)}.ui5-tc__tabStrip{flex:1;display:flex;overflow:hidden;box-sizing:border-box;position:relative;white-space:nowrap}.ui5-tc__separator:focus{outline:none}.ui5-tc__overflow{flex:0 0 0}.ui5-tc__overflow.ui5-tc__overflow--end{padding-inline-start:.188rem;margin-inline-end:1rem}.ui5-tc__overflow.ui5-tc__overflow--start{margin-inline-start:1rem}.ui5-tc__overflow[hidden]{display:none}.ui5-tc__overflow>[ui5-button]{border-radius:.75rem;height:1.5rem;--_ui5-v2-10-0_button_focused_border_radius: .75rem}.ui5-tc__overflow>[ui5-button]:not([active]){color:var(--_ui5-v2-10-0_tc_overflow_text_color)}.ui5-tc__overflow>[ui5-button]:not([active]):hover{color:var(--_ui5-v2-10-0_tc_overflow_text_color)}.ui5-tc__overflow>[ui5-button][focused]{outline-offset:.125rem;--_ui5-v2-10-0_button_focused_border: none;outline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor)}.ui5-tc-root.ui5-tc--textOnly .ui5-tc__content{height:calc(100% - var(--_ui5-v2-10-0_tc_header_height_text_only))}.ui5-tc__content{position:relative;display:flex;height:calc(100% - var(--_ui5-v2-10-0_tc_header_height));background-color:var(--_ui5-v2-10-0_tc_content_background);border-bottom:var(--_ui5-v2-10-0_tc_content_border_bottom);box-sizing:border-box}:host([tabs-placement="Bottom"]) .ui5-tc__content{border-top:var(--_ui5-v2-10-0_tc_content_border_bottom)}:host([content-background-design="Transparent"]) .ui5-tc__content{background-color:transparent}:host([content-background-design="Translucent"]) .ui5-tc__content{background-color:var(--_ui5-v2-10-0_tc_content_background_translucent)}:host([header-background-design="Transparent"]) .ui5-tc__content{border-bottom:none}.ui5-tc__content--collapsed{display:none}.ui5-tc--transparent .ui5-tc__content{background-color:transparent}.ui5-tc__contentItem{max-height:100%;display:flex;flex-grow:1;overflow:auto}.ui5-tc__contentItem[hidden]{display:none}.ui5-tc__header{padding:0}.ui5-tc__content{padding:1rem}:host([media-range="M"]) .ui5-tc__header,:host([media-range="L"]) .ui5-tc__header{padding:0 1rem}:host([media-range="M"]) .ui5-tc__content,:host([media-range="L"]) .ui5-tc__content{padding:1rem 2rem}:host([media-range="XL"]) .ui5-tc__header{padding:0 2rem}:host([media-range="XL"]) .ui5-tc__content{padding:1rem 3rem}.ui5-tc-root.ui5-tc--noTabSelected .ui5-tc__content{padding:0}
`;

    var __decorate$2 = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var TabContainer_1;
    const tabStyles = [];
    const PAGE_UP_DOWN_SIZE = 5;
    /**
     * @class
     *
     * ### Overview
     *
     * The `ui5-tabcontainer` represents a collection of tabs with associated content.
     * Navigation through the tabs changes the content display of the currently active content area.
     * A tab can be labeled with text only, or icons with text.
     *
     * ### Structure
     *
     * The `ui5-tabcontainer` can hold two types of entities:
     *
     * - `ui5-tab` - contains all the information on an item (text and icon)
     * - `ui5-tab-separator` - used to separate tabs with a line
     *
     * ### Hierarchies
     * Multiple sub tabs could be placed underneath one main tab. Nesting allows deeper hierarchies with indentations
     * to indicate the level of each nested tab. When a tab has both sub tabs and own content its click area is split
     * to allow the user to display the content or alternatively to expand / collapse the list of sub tabs.
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
     * `import "@ui5/webcomponents/dist/TabContainer.js";`
     *
     * `import "@ui5/webcomponents/dist/Tab.js";` (for `ui5-tab`)
     *
     * `import "@ui5/webcomponents/dist/TabSeparator.js";` (for `ui5-tab-separator`)
     * @constructor
     * @extends UI5Element
     * @public
     * @csspart content - Used to style the content of the component
     * @csspart tabstrip - Used to style the tabstrip of the component
     */
    let TabContainer = TabContainer_1 = class TabContainer extends webcomponentsBase.b {
        static registerTabStyles(styles) {
            tabStyles.push(styles);
        }
        constructor() {
            super();
            /**
             * Defines whether the tab content is collapsed.
             * @default false
             * @public
             */
            this.collapsed = false;
            /**
             * Defines the alignment of the content and the `additionalText` of a tab.
             *
             * **Note:**
             * The content and the `additionalText` would be displayed vertically by default,
             * but when set to `Inline`, they would be displayed horizontally.
             * @default "Standard"
             * @public
             */
            this.tabLayout = "Standard";
            /**
             * Defines the overflow mode of the header (the tab strip). If you have a large number of tabs, only the tabs that can fit on screen will be visible.
             * All other tabs that can 't fit on the screen are available in an overflow tab "More".
             *
             * **Note:**
             * Only one overflow at the end would be displayed by default,
             * but when set to `StartAndEnd`, there will be two overflows on both ends, and tab order will not change on tab selection.
             * @default "End"
             * @since 1.1.0
             * @public
             */
            this.overflowMode = "End";
            /**
             * Sets the background color of the Tab Container's header as `Solid`, `Transparent`, or `Translucent`.
             * @default "Solid"
             * @since 1.10.0
             * @public
             */
            this.headerBackgroundDesign = "Solid";
            /**
             * Sets the background color of the Tab Container's content as `Solid`, `Transparent`, or `Translucent`.
             * @default "Solid"
             * @since 1.10.0
             * @public
             */
            this.contentBackgroundDesign = "Solid";
            /**
             * Defines the placement of the tab strip relative to the actual tabs' content.
             *
             * **Note:** By default the tab strip is displayed above the tabs' content area and this is the recommended
             * layout for most scenarios. Set to `Bottom` only when the component is at the
             * bottom of the page and you want the tab strip to act as a menu.
             * @default "Top"
             * @since 1.0.0-rc.7
             * @private
             */
            this.tabsPlacement = "Top";
            /**
             * Defines if automatic tab selection is deactivated.
             *
             * **Note:** By default, if none of the child tabs have the `selected` property set, the first tab will be automatically selected.
             * Setting this property to `true` allows preventing this behavior.
             * @default false
             * @public
             * @since 2.9.0
             */
            this.noAutoSelection = false;
            this._animationRunning = false;
            this._contentCollapsed = false;
            this._startOverflowText = "0";
            this._endOverflowText = "More";
            this._popoverItemsFlat = [];
            this._itemsFlat = [];
            this._hasScheduledPopoverOpen = false;
            this._handleResizeBound = this._handleResize.bind(this);
            // Init ItemNavigation
            this._itemNavigation = new webcomponentsBase.f$1(this, {
                getItemsCallback: () => this._getFocusableRefs(),
                skipItemsSize: PAGE_UP_DOWN_SIZE,
            });
        }
        onBeforeRendering() {
            this._itemsFlat = this._flatten(this.items);
            if (!this._itemsFlat.length) {
                return;
            }
            // update selected tab
            const selectedTab = this._itemsFlat.find((tab) => !tab.isSeparator && tab.selected);
            if (selectedTab) {
                this._selectedTab = selectedTab;
            }
            else if (!this.noAutoSelection) {
                this._selectedTab = this._itemsFlat[0];
            }
            else {
                this._selectedTab = undefined;
            }
            walk(this.items, item => {
                if (!item.isSeparator) {
                    item._selectedTabReference = this._selectedTab;
                }
            });
            this._sendStripPresentationInfos(this.items);
            if (!this._animationRunning) {
                this._contentCollapsed = this.collapsed;
            }
        }
        onAfterRendering() {
            if (!this.items.length) {
                return;
            }
            this._setItemsForStrip();
            if (!this.shadowRoot.contains(document.activeElement)) {
                const focusStart = this._getRootTab(this._selectedTab);
                if (focusStart) {
                    this._itemNavigation.setCurrentItem(focusStart);
                }
            }
            if (this.responsivePopover?.open) {
                const popoverItems = this._getPopoverItemsFor(this._getPopoverOwner(this.responsivePopover.opener));
                if (popoverItems.length) {
                    this._setPopoverItems(popoverItems);
                }
                else {
                    this._closePopover();
                }
            }
        }
        onEnterDOM() {
            webcomponentsBase.f.register(this._getHeader(), this._handleResizeBound);
            List.p.subscribe(this);
            this._setDraggedElement = List.p.addSelfManagedArea(this);
            if (Theme.f$1()) {
                this.setAttribute("desktop", "");
            }
        }
        onExitDOM() {
            webcomponentsBase.f.deregister(this._getHeader(), this._handleResizeBound);
            List.p.unsubscribe(this);
            List.p.removeSelfManagedArea(this);
            this._setDraggedElement = undefined;
        }
        _handleResize() {
            if (this.responsivePopover && this.responsivePopover.open) {
                this._closePopover();
            }
            // invalidate
            this._width = this.offsetWidth;
            this._updateMediaRange(this._width);
        }
        _updateMediaRange(width) {
            this.mediaRange = webcomponentsBase.i$2.getCurrentRange(webcomponentsBase.i$2.RANGESETS.RANGE_4STEPS, width);
        }
        _sendStripPresentationInfos(items) {
            const setsize = this._getTabs().length;
            let posinset = 1;
            items.forEach(item => {
                let info = {
                    getElementInStrip: () => this.getDomRef().querySelector(`[id="${item._id}"]`),
                };
                if (!item.isSeparator) {
                    info = {
                        ...info,
                        isInline: this.tabLayout === TabLayout$1.Inline,
                        mixedMode: this.mixedMode,
                        posinset,
                        setsize,
                        isTopLevelTab: items.some(i => i === item),
                    };
                    posinset++;
                }
                item.receiveStripInfo(info);
            });
        }
        _onHeaderFocusin(e) {
            const tab = getTabInStrip(e.target);
            if (tab) {
                this._itemNavigation.setCurrentItem(tab.realTabReference);
            }
        }
        _onDragStart(e) {
            if (!e.dataTransfer || !(e.target instanceof HTMLElement)) {
                return;
            }
            e.dataTransfer.dropEffect = "move";
            e.dataTransfer.effectAllowed = "move";
            this._setDraggedElement(e.target.realTabReference);
        }
        _onHeaderDragEnter(e) {
            e.preventDefault();
        }
        _onHeaderDragOver(e, isLongDragOver) {
            if (!(e.target instanceof HTMLElement) || !e.target.closest("[data-ui5-stable=overflow-start],[data-ui5-stable=overflow-end],[role=tab],[role=separator]")) {
                this.dropIndicatorDOM.targetReference = null;
                return;
            }
            const draggedElement = List.p.getDraggedElement();
            const closestPosition = List.L([...this._getTabStrip().querySelectorAll(`[role="tab"]:not([hidden])`)], e.clientX, List.a.Horizontal);
            const overflowButton = e.target.closest("[data-ui5-stable=overflow-start],[data-ui5-stable=overflow-end]");
            let popoverTarget = null;
            if (overflowButton) {
                popoverTarget = overflowButton;
                e.preventDefault();
            }
            else if (closestPosition) {
                const dropTarget = closestPosition.element.realTabReference;
                if (dropTarget === draggedElement) {
                    closestPosition.placements = closestPosition.placements.filter(placement => placement !== List.r.On);
                }
                const { targetReference, placement } = List.i(e, this, closestPosition, dropTarget);
                this.dropIndicatorDOM.targetReference = targetReference;
                this.dropIndicatorDOM.placement = placement;
                if (placement === List.r.On && closestPosition.element.realTabReference.items.length) {
                    popoverTarget = closestPosition.element;
                }
                else if (!placement) {
                    this.dropIndicatorDOM.targetReference = null;
                }
            }
            if (popoverTarget && isLongDragOver) {
                this._showPopoverAt(popoverTarget, false, true);
            }
            else {
                this._closePopover();
            }
        }
        _onHeaderDrop(e) {
            if (e.target === this._getStartOverflowBtnDOM() || e.target === this._getEndOverflowBtnDOM()) {
                return;
            }
            List.m(e, this, this.dropIndicatorDOM.targetReference.realTabReference, this.dropIndicatorDOM.placement);
            this.dropIndicatorDOM.targetReference = null;
        }
        _moveHeaderItem(tab, e) {
            if (!tab.movable) {
                return;
            }
            const headerItems = this.items.map(item => item.getDomRefInStrip())
                .filter((item) => !item?.hasAttribute("hidden"));
            let positions = List.k(headerItems, tab.getDomRefInStrip(), e);
            positions = positions.map(({ element, placement }) => {
                while (element && element.realTabReference.hasAttribute("ui5-tab-separator") && placement === List.r.Before) {
                    element = headerItems.at(headerItems.indexOf(element) - 1);
                    placement = List.r.After;
                }
                while (element && element.realTabReference.hasAttribute("ui5-tab-separator") && placement === List.r.After) {
                    element = headerItems.at(headerItems.indexOf(element) + 1);
                    placement = List.r.Before;
                }
                return {
                    element,
                    placement,
                };
            });
            const acceptedPosition = positions.find(({ element, placement }) => {
                return !this.fireDecoratorEvent("move-over", {
                    source: {
                        element: tab,
                    },
                    destination: {
                        element: element.realTabReference,
                        placement,
                    },
                });
            });
            if (acceptedPosition) {
                this.fireDecoratorEvent("move", {
                    source: {
                        element: tab,
                    },
                    destination: {
                        element: acceptedPosition.element.realTabReference,
                        placement: acceptedPosition.placement,
                    },
                });
                tab.focus();
            }
        }
        _onHeaderDragLeave(e) {
            if (e.relatedTarget instanceof Node && this.shadowRoot.contains(e.relatedTarget)) {
                return;
            }
            this.dropIndicatorDOM.targetReference = null;
        }
        _onPopoverListMoveOver(e) {
            const { destination, source } = e.detail;
            const draggedElement = List.p.getDraggedElement();
            let destinationElement = destination.element.realTabReference;
            // workaround to simulate tree behavior
            if (e.detail.originalEvent instanceof KeyboardEvent) {
                const realTabReference = source.element.realTabReference;
                const siblings = this._findSiblings(realTabReference);
                let items = siblings;
                if (this.items.includes(realTabReference)) {
                    items = siblings.filter(sibling => {
                        return e.target.items.some(el => el.realTabReference === sibling);
                    });
                }
                const nextPosition = List.k(items, realTabReference, e.detail.originalEvent);
                destinationElement = nextPosition[0]?.element;
            }
            if (!destinationElement) {
                return;
            }
            if (destination.placement === List.r.On && (destinationElement.hasAttribute("ui5-tab-separator") || draggedElement === destinationElement)) {
                return;
            }
            if (draggedElement !== destinationElement && draggedElement.contains(destinationElement)) {
                return;
            }
            const placementAccepted = !this.fireDecoratorEvent("move-over", {
                source: {
                    element: draggedElement,
                },
                destination: {
                    element: destinationElement,
                    placement: destination.placement,
                },
            });
            if (placementAccepted) {
                e.preventDefault();
            }
            else {
                this.dropIndicatorDOM.targetReference = null;
            }
        }
        _onPopoverListMove(e) {
            const { destination, source } = e.detail;
            const draggedElement = List.p.getDraggedElement();
            let destinationElement = destination.element.realTabReference;
            // Workaround to simulate tree behavior
            if (e.detail.originalEvent instanceof KeyboardEvent) {
                const realTabReference = source.element.realTabReference;
                const siblings = this._findSiblings(realTabReference);
                let items = siblings;
                if (this.items.includes(realTabReference)) {
                    items = siblings.filter(sibling => {
                        return e.target.items.some(el => el.realTabReference === sibling);
                    });
                }
                const nextPosition = List.k(items, realTabReference, e.detail.originalEvent);
                destinationElement = nextPosition[0]?.element;
            }
            if (!destinationElement) {
                return;
            }
            e.preventDefault();
            this.fireDecoratorEvent("move", {
                source: {
                    element: draggedElement,
                },
                destination: {
                    element: destinationElement,
                    placement: destination.placement,
                },
            });
            this.dropIndicatorDOM.targetReference = null;
            draggedElement.focus();
        }
        _onPopoverListKeyDown(e) {
            if (webcomponentsBase.f$2(e)) {
                this._setDraggedElement(e.target.realTabReference);
            }
        }
        async _onTabStripClick(e) {
            const tab = getTabInStrip(e.target);
            if (!tab || tab.realTabReference.disabled) {
                return;
            }
            e.stopPropagation();
            e.preventDefault();
            if (e.target.hasAttribute("ui5-button")) {
                this._onTabExpandButtonClick(e);
                return;
            }
            if (!tab.realTabReference.hasOwnContent && tab.realTabReference.tabs.length) {
                await this._togglePopover(tab);
                return;
            }
            this._onHeaderItemSelect(tab);
        }
        async _onTabExpandButtonClick(e) {
            e.stopPropagation();
            e.preventDefault();
            let tabInstance;
            if (isTabInStrip(e.target)) {
                tabInstance = e.target;
            }
            else {
                tabInstance = getTabInStrip(e.target);
            }
            if (tabInstance) {
                tabInstance.focus();
            }
            let opener = e.target;
            if (e.type === "keydown" && !e.target.realTabReference.isSingleClickArea) {
                opener = e.target.querySelector(".ui5-tab-expand-button [ui5-button]");
            }
            // if clicked between the expand button and the tab
            if (!tabInstance) {
                this._onHeaderItemSelect(opener.parentElement);
                return;
            }
            await this._togglePopover(opener, true);
        }
        _setPopoverInitialFocus() {
            const selectedTabInOverflow = this._getSelectedTabInOverflow();
            const tab = selectedTabInOverflow || this._getFirstFocusableItemInOverflow();
            this.responsivePopover.initialFocus = `${tab.realTabReference._id}-li`;
        }
        _getSelectedTabInOverflow() {
            return this.responsivePopover.content[0].items.find(item => {
                return item.realTabReference && item.realTabReference.selected;
            });
        }
        _getFirstFocusableItemInOverflow() {
            return this.responsivePopover.content[0].items.find(item => item.classList.contains("ui5-tab-overflow-item"));
        }
        _findTabInOverflow(realTab) {
            if (!this.responsivePopover.open) {
                return undefined;
            }
            return this.responsivePopover.content[0].items.find(item => item.realTabReference === realTab);
        }
        _onTabStripKeyDown(e) {
            const tab = getTabInStrip(e.target);
            if (!tab) {
                return;
            }
            if (webcomponentsBase.f$2(e) && tab.realTabReference.movable && List.P(e.key)) {
                this._moveHeaderItem(tab.realTabReference, e);
                e.preventDefault();
                return;
            }
            if (tab.realTabReference.disabled) {
                return;
            }
            if (webcomponentsBase.b$1(e)) {
                if (tab.realTabReference.isSingleClickArea) {
                    this._onTabStripClick(e);
                }
                else {
                    this._onHeaderItemSelect(tab);
                }
            }
            if (webcomponentsBase.i(e)) {
                e.preventDefault(); // prevent scrolling
            }
            if (webcomponentsBase.P(e) || webcomponentsBase.D(e)) {
                if (tab.realTabReference.requiresExpandButton) {
                    this._onTabExpandButtonClick(e);
                }
                if (tab.realTabReference.isSingleClickArea) {
                    this._onTabStripClick(e);
                }
            }
        }
        _onTabStripKeyUp(e) {
            const tab = getTabInStrip(e.target);
            if (!tab || tab.realTabReference.disabled) {
                return;
            }
            if (webcomponentsBase.i(e)) {
                e.preventDefault();
                if (tab.realTabReference.isSingleClickArea) {
                    this._onTabStripClick(e);
                }
                else {
                    this._onHeaderItemSelect(tab);
                }
            }
        }
        _onHeaderItemSelect(tab) {
            if (!tab.hasAttribute("disabled")) {
                this._onItemSelect(tab.id);
            }
        }
        async _onOverflowListItemClick(e) {
            e.preventDefault(); // cancel the item selection
            this._onItemSelect(e.detail.item.id.slice(0, -3)); // strip "-li" from end of id
            this._closePopover();
            await Theme.f();
            const selectedTopLevel = this._getRootTab(this._selectedTab);
            selectedTopLevel?.getDomRefInStrip().focus();
        }
        /**
         * Returns all slotted tabs and their subTabs in a flattened array.
         * The order of tabs is depth-first.
         *
         * @public
         * @default []
         */
        get allItems() {
            return this._flatten(this.items);
        }
        _flatten(items) {
            const result = [];
            walk(items, item => {
                if (item.hasAttribute("ui5-tab") || item.hasAttribute("ui5-tab-separator")) {
                    result.push(item);
                }
            });
            return result;
        }
        _onItemSelect(selectedTabId) {
            const selectedTabIndex = this._itemsFlat.findIndex(item => item.__id === selectedTabId);
            const selectedTab = this._itemsFlat[selectedTabIndex];
            const selectionSuccessful = this.selectTab(selectedTab, selectedTabIndex);
            if (!selectionSuccessful) {
                return;
            }
            // update selected property on all items
            this._itemsFlat.forEach(item => {
                if (!item.isSeparator) {
                    item.selected = item === selectedTab;
                }
            });
        }
        /**
         * Fires the `tab-select` event and changes the internal reference for the currently selected tab.
         * If the event is prevented, the current tab is not changed.
         * @private
         * @param selectedTab selected tab instance
         * @param selectedTabIndex selected tab index for an array containing all tabs and sub tabs. **Note:** Use the method `allTabs` to get this array.
         * @returns true if the tab selection is successful, false if it was prevented
         */
        selectTab(selectedTab, selectedTabIndex) {
            if (!this.fireDecoratorEvent("tab-select", { tab: selectedTab, tabIndex: selectedTabIndex })) {
                return false;
            }
            // select the tab
            this._selectedTab = selectedTab;
            return true;
        }
        slideContentDown(element) {
            return webcomponentsBase.b$2(element).promise();
        }
        slideContentUp(element) {
            return webcomponentsBase.u$1(element).promise();
        }
        async _onOverflowClick(e) {
            if (e.target.classList.contains("ui5-tc__overflow")) {
                // the empty area in the overflow was clicked
                return;
            }
            const overflow = e.currentTarget;
            const isEndOverflow = overflow.classList.contains("ui5-tc__overflow--end");
            let opener;
            if (isEndOverflow) {
                opener = this.overflowButton[0] || this._getEndOverflowBtnDOM();
            }
            else {
                opener = this.startOverflowButton[0] || this._getStartOverflowBtnDOM();
            }
            await this._togglePopover(opener, true);
        }
        _sendOverflowPresentationInfos(items) {
            const semanticIcons = items
                .filter((item) => !item.isSeparator)
                .some(tab => tab.design !== SemanticColor$1.Default && tab.design !== SemanticColor$1.Neutral);
            walk(items, (item, level) => {
                item.receiveOverflowInfo({
                    getElementInOverflow: () => {
                        return this._findTabInOverflow(item);
                    },
                    style: {
                        [Theme.d$2("--_ui5-tab-indentation-level")]: level,
                        [Theme.d$2("--_ui5-tab-level-has-icon")]: semanticIcons ? "1" : "0",
                    },
                });
            });
        }
        async _onOverflowKeyDown(e) {
            const overflow = e.currentTarget;
            const isEndOverflow = overflow.classList.contains("ui5-tc__overflow--end");
            const isStartOverflow = overflow.classList.contains("ui5-tc__overflow--start");
            if (webcomponentsBase.P(e) || (isStartOverflow && webcomponentsBase.K(e)) || (isEndOverflow && webcomponentsBase.c(e))) {
                e.stopPropagation();
                e.preventDefault();
                await this._onOverflowClick(e);
            }
        }
        _setItemsForStrip() {
            const tabStrip = this._getTabStrip();
            let allItemsWidth = 0;
            const itemsDomRefs = this.items.map(item => item.getDomRefInStrip());
            // make sure the overflows are hidden
            this._getStartOverflow().setAttribute("hidden", "");
            this._getEndOverflow().setAttribute("hidden", "");
            // show all tabs
            for (let i = 0; i < itemsDomRefs.length; i++) {
                itemsDomRefs[i].removeAttribute("hidden");
                itemsDomRefs[i].removeAttribute("start-overflow");
                itemsDomRefs[i].removeAttribute("end-overflow");
            }
            itemsDomRefs.forEach(item => {
                allItemsWidth += this._getItemWidth(item);
            });
            const hasOverflow = tabStrip.offsetWidth < allItemsWidth;
            if (!hasOverflow) {
                return;
            }
            if (this.isModeStartAndEnd) {
                this._updateStartAndEndOverflow(itemsDomRefs);
                this._updateOverflowCounters();
            }
            else {
                this._updateEndOverflow(itemsDomRefs);
            }
        }
        _getRootTab(tab) {
            while (tab?.hasAttribute("ui5-tab")) {
                if (tab.parentElement.hasAttribute("ui5-tabcontainer")) {
                    break;
                }
                tab = tab.parentElement;
            }
            return tab;
        }
        _updateEndOverflow(itemsDomRefs) {
            // show end overflow
            this._getEndOverflow().removeAttribute("hidden");
            const selectedTab = this._getRootTab(this._selectedTab);
            const selectedTabDomRef = selectedTab?.getDomRefInStrip();
            const containerWidth = this._getTabStrip().offsetWidth;
            const selectedItemIndexAndWidth = this._getSelectedItemIndexAndWidth(itemsDomRefs, selectedTabDomRef);
            const lastVisibleTabIndex = this._findLastVisibleItem(itemsDomRefs, containerWidth, selectedItemIndexAndWidth.width);
            for (let i = lastVisibleTabIndex + 1; i < itemsDomRefs.length; i++) {
                itemsDomRefs[i].setAttribute("hidden", "");
                itemsDomRefs[i].setAttribute("end-overflow", "");
            }
            this._endOverflowText = this.overflowButtonText;
        }
        _updateStartAndEndOverflow(itemsDomRefs) {
            let containerWidth = this._getTabStrip().offsetWidth;
            const selectedTab = this._getRootTab(this._selectedTab);
            const selectedTabDomRef = selectedTab?.getDomRefInStrip();
            const selectedItemIndexAndWidth = this._getSelectedItemIndexAndWidth(itemsDomRefs, selectedTabDomRef);
            const hasStartOverflow = this._hasStartOverflow(containerWidth, itemsDomRefs, selectedItemIndexAndWidth);
            const hasEndOverflow = this._hasEndOverflow(containerWidth, itemsDomRefs, selectedItemIndexAndWidth);
            let firstVisible;
            let lastVisible;
            // has "end", but no "start" overflow
            if (!hasStartOverflow) {
                // show "end" overflow
                this._getEndOverflow().removeAttribute("hidden");
                // width is changed
                containerWidth = this._getTabStrip().offsetWidth;
                lastVisible = this._findLastVisibleItem(itemsDomRefs, containerWidth, selectedItemIndexAndWidth.width);
                for (let i = lastVisible + 1; i < itemsDomRefs.length; i++) {
                    itemsDomRefs[i].setAttribute("hidden", "");
                    itemsDomRefs[i].setAttribute("end-overflow", "");
                }
                return;
            }
            // has "start", but no "end" overflow
            if (!hasEndOverflow) {
                // show "start" overflow
                this._getStartOverflow().removeAttribute("hidden");
                // width is changed
                containerWidth = this._getTabStrip().offsetWidth;
                firstVisible = this._findFirstVisibleItem(itemsDomRefs, containerWidth, selectedItemIndexAndWidth.width);
                for (let i = firstVisible - 1; i >= 0; i--) {
                    itemsDomRefs[i].setAttribute("hidden", "");
                    itemsDomRefs[i].setAttribute("start-overflow", "");
                }
                return;
            }
            // show "start" overflow
            this._getStartOverflow().removeAttribute("hidden");
            // show "end" overflow
            this._getEndOverflow().removeAttribute("hidden");
            // width is changed
            containerWidth = this._getTabStrip().offsetWidth;
            firstVisible = this._findFirstVisibleItem(itemsDomRefs, containerWidth, selectedItemIndexAndWidth.width, selectedItemIndexAndWidth.index - 1);
            lastVisible = this._findLastVisibleItem(itemsDomRefs, containerWidth, selectedItemIndexAndWidth.width, firstVisible);
            for (let i = firstVisible - 1; i >= 0; i--) {
                itemsDomRefs[i].setAttribute("hidden", "");
                itemsDomRefs[i].setAttribute("start-overflow", "");
            }
            for (let i = lastVisible + 1; i < itemsDomRefs.length; i++) {
                itemsDomRefs[i].setAttribute("hidden", "");
                itemsDomRefs[i].setAttribute("end-overflow", "");
            }
        }
        _hasStartOverflow(containerWidth, itemsDomRefs, selectedItemIndexAndWidth) {
            if (selectedItemIndexAndWidth.index === 0) {
                return false;
            }
            let leftItemsWidth = 0;
            for (let i = selectedItemIndexAndWidth.index - 1; i >= 0; i--) {
                leftItemsWidth += this._getItemWidth(itemsDomRefs[i]);
            }
            let hasStartOverflow = containerWidth < leftItemsWidth + selectedItemIndexAndWidth.width;
            // if there is no "start" overflow, it has "end" overflow
            // check it again with the "end" overflow
            if (!hasStartOverflow) {
                this._getEndOverflow().removeAttribute("hidden");
                containerWidth = this._getTabStrip().offsetWidth;
                hasStartOverflow = containerWidth < leftItemsWidth + selectedItemIndexAndWidth.width;
                this._getEndOverflow().setAttribute("hidden", "");
            }
            return hasStartOverflow;
        }
        _hasEndOverflow(containerWidth, itemsDomRefs, selectedItemIndexAndWidth) {
            if (selectedItemIndexAndWidth.index >= itemsDomRefs.length) {
                return false;
            }
            let rightItemsWidth = 0;
            for (let i = selectedItemIndexAndWidth.index; i < itemsDomRefs.length; i++) {
                rightItemsWidth += this._getItemWidth(itemsDomRefs[i]);
            }
            let hasEndOverflow = containerWidth < rightItemsWidth + selectedItemIndexAndWidth.width;
            // if there is no "end" overflow, it has "start" overflow
            // check it again with the "start" overflow
            if (!hasEndOverflow) {
                this._getStartOverflow().removeAttribute("hidden");
                containerWidth = this._getTabStrip().offsetWidth;
                hasEndOverflow = containerWidth < rightItemsWidth + selectedItemIndexAndWidth.width;
                this._getStartOverflow().setAttribute("hidden", "");
            }
            return hasEndOverflow;
        }
        _getItemWidth(itemDomRef) {
            const styles = window.getComputedStyle(itemDomRef);
            const margins = Number.parseInt(styles.marginLeft) + Number.parseInt(styles.marginRight);
            return itemDomRef.offsetWidth + margins;
        }
        _getSelectedItemIndexAndWidth(itemsDomRefs, selectedTabDomRef) {
            if (!selectedTabDomRef) {
                return {
                    index: 0,
                    width: 0,
                };
            }
            let index = itemsDomRefs.indexOf(selectedTabDomRef);
            let width = selectedTabDomRef.offsetWidth;
            let selectedSeparator;
            if (itemsDomRefs[index - 1] && itemsDomRefs[index - 1].realTabReference.isSeparator) {
                selectedSeparator = itemsDomRefs[index - 1];
                width += this._getItemWidth(selectedSeparator);
            }
            itemsDomRefs.splice(index, 1);
            // if previous item is a separator - remove it
            if (selectedSeparator) {
                itemsDomRefs.splice(index - 1, 1);
                index--;
            }
            return {
                index,
                width,
            };
        }
        _findFirstVisibleItem(itemsDomRefs, containerWidth, selectedItemWidth, startIndex) {
            if (startIndex === undefined) {
                startIndex = itemsDomRefs.length - 1;
            }
            let lastVisible = startIndex + 1;
            for (let index = startIndex; index >= 0; index--) {
                const itemWidth = this._getItemWidth(itemsDomRefs[index]);
                if (containerWidth < selectedItemWidth + itemWidth) {
                    break;
                }
                selectedItemWidth += itemWidth;
                lastVisible = index;
            }
            return lastVisible;
        }
        _findLastVisibleItem(itemsDomRefs, containerWidth, selectedItemWidth, startIndex = 0) {
            let lastVisibleIndex = startIndex - 1;
            let index = startIndex;
            for (; index < itemsDomRefs.length; index++) {
                const itemWidth = this._getItemWidth(itemsDomRefs[index]);
                if (containerWidth < selectedItemWidth + itemWidth) {
                    break;
                }
                selectedItemWidth += itemWidth;
                lastVisibleIndex = index;
            }
            // if prev item is separator - hide it
            const prevItem = itemsDomRefs[index - 1];
            if (prevItem && prevItem.realTabReference.isSeparator) {
                lastVisibleIndex -= 1;
            }
            return lastVisibleIndex;
        }
        get isModeStartAndEnd() {
            return this.overflowMode === OverflowMode$1.StartAndEnd;
        }
        _updateOverflowCounters() {
            let startOverflowItemsCount = 0;
            let endOverflowItemsCount = 0;
            this._getTabs()
                .map(tab => tab.getDomRefInStrip())
                .forEach(tab => {
                if (tab.hasAttribute("start-overflow")) {
                    startOverflowItemsCount++;
                }
                if (tab.hasAttribute("end-overflow")) {
                    endOverflowItemsCount++;
                }
            });
            this._startOverflowText = `+${startOverflowItemsCount}`;
            this._endOverflowText = `+${endOverflowItemsCount}`;
        }
        _getFocusableRefs() {
            if (!this.getDomRef()) {
                return [];
            }
            const focusableRefs = [];
            if (!this._getStartOverflow().hasAttribute("hidden")) {
                focusableRefs.push(this.startOverflowButton[0] || this._getStartOverflowBtnDOM());
            }
            this._getTabs().forEach(tab => {
                const ref = tab.getDomRefInStrip();
                const focusable = ref && !ref.hasAttribute("hidden");
                if (focusable) {
                    focusableRefs.push(tab);
                }
            });
            if (!this._getEndOverflow().hasAttribute("hidden")) {
                focusableRefs.push(this.overflowButton[0] || this._getEndOverflowBtnDOM());
            }
            return focusableRefs;
        }
        _getHeader() {
            return this.shadowRoot.querySelector(`#${this._id}-header`);
        }
        _getTabs() {
            return this.items.filter((item) => !item.isSeparator);
        }
        _getPopoverOwner(opener) {
            if (opener === this._getStartOverflowBtnDOM() || opener.slot === "startOverflowButton") {
                return "start-overflow";
            }
            if (opener === this._getEndOverflowBtnDOM() || opener.slot === "overflowButton") {
                return "end-overflow";
            }
            return getTabInStrip(opener);
        }
        _getPopoverItemsFor(targetOwner) {
            if (targetOwner === "start-overflow") {
                return this.items.filter(item => {
                    const stripRef = item.getDomRefInStrip();
                    return stripRef && stripRef.hasAttribute("start-overflow");
                });
            }
            if (targetOwner === "end-overflow") {
                return this.items.filter(item => {
                    const stripRef = item.getDomRefInStrip();
                    return stripRef && stripRef.hasAttribute("end-overflow");
                });
            }
            return targetOwner.realTabReference.items;
        }
        _setPopoverItems(items) {
            this._sendOverflowPresentationInfos(items);
            const newItemsFlat = this._flatten(items);
            if (!webcomponentsBase.n$1(this._popoverItemsFlat, newItemsFlat)) {
                this._popoverItemsFlat = newItemsFlat;
            }
        }
        async _togglePopover(opener, setInitialFocus = false) {
            this.responsivePopover = await this._respPopover();
            if (this.responsivePopover.open) {
                this._closePopover();
            }
            else {
                await this._showPopoverAt(opener, setInitialFocus);
            }
        }
        async _showPopoverAt(opener, setInitialFocus = false, preventInitialFocus = false) {
            this._hasScheduledPopoverOpen = true;
            this._setPopoverItems(this._getPopoverItemsFor(this._getPopoverOwner(opener)));
            this.responsivePopover = await this._respPopover();
            if (setInitialFocus) {
                this._setPopoverInitialFocus();
            }
            if (this._hasScheduledPopoverOpen) {
                this.responsivePopover.preventInitialFocus = preventInitialFocus;
                this.responsivePopover.opener = opener;
                this.responsivePopover.open = true;
            }
        }
        get hasItems() {
            const tabs = this._getTabs();
            for (let i = 0; i < tabs.length; i++) {
                if (tabs[i].items.length > 0) {
                    return true;
                }
            }
            return false;
        }
        _getTabStrip() {
            return this.shadowRoot.querySelector(`#${this._id}-tabStrip`);
        }
        _getStartOverflow() {
            return this.shadowRoot.querySelector(".ui5-tc__overflow--start");
        }
        _getEndOverflow() {
            return this.shadowRoot.querySelector(".ui5-tc__overflow--end");
        }
        _getStartOverflowBtnDOM() {
            return this._getStartOverflow().querySelector("[ui5-button]");
        }
        _getEndOverflowBtnDOM() {
            return this._getEndOverflow().querySelector("[ui5-button]");
        }
        async _respPopover() {
            await Theme.f();
            return this.shadowRoot.querySelector(`#${this._id}-overflowMenu`);
        }
        _closePopover() {
            this._hasScheduledPopoverOpen = false;
            if (this.responsivePopover) {
                this.responsivePopover.open = false;
            }
        }
        get dropIndicatorDOM() {
            return this.shadowRoot.querySelector("[ui5-drop-indicator]");
        }
        _findSiblings(tab) {
            let parent;
            walk(this.items, item => {
                if (item.items && item.items.includes(tab)) {
                    parent = item;
                }
            });
            return (parent ?? this).items;
        }
        get mixedMode() {
            const tabs = this._getTabs();
            return tabs.some(item => item.icon) && tabs.some(item => item.text);
        }
        get textOnly() {
            return this._getTabs().every(item => !item.icon);
        }
        get withAdditionalText() {
            return this._getTabs().some(item => !!item.additionalText);
        }
        get standardTabLayout() {
            return this.tabLayout === TabLayout$1.Standard;
        }
        get previousIconACCName() {
            return TabContainer_1.i18nBundle.getText(i18nDefaults.TABCONTAINER_PREVIOUS_ICON_ACC_NAME);
        }
        get nextIconACCName() {
            return TabContainer_1.i18nBundle.getText(i18nDefaults.TABCONTAINER_NEXT_ICON_ACC_NAME);
        }
        get overflowMenuTitle() {
            return TabContainer_1.i18nBundle.getText(i18nDefaults.TABCONTAINER_OVERFLOW_MENU_TITLE);
        }
        get tabsAtTheBottom() {
            return this.tabsPlacement === TabContainerTabsPlacement$1.Bottom;
        }
        get overflowMenuIcon() {
            return this.tabsAtTheBottom ? "slim-arrow-up" : "slim-arrow-down";
        }
        get overflowButtonText() {
            return TabContainer_1.i18nBundle.getText(i18nDefaults.TABCONTAINER_END_OVERFLOW);
        }
        get popoverCancelButtonText() {
            return TabContainer_1.i18nBundle.getText(i18nDefaults.TABCONTAINER_POPOVER_CANCEL_BUTTON);
        }
        get accInvisibleText() {
            return TabContainer_1.i18nBundle.getText(i18nDefaults.TABCONTAINER_SUBTABS_DESCRIPTION);
        }
        get overflowBtnAccessibilityAttributes() {
            return {
                hasPopup: "menu",
            };
        }
        get tablistAriaDescribedById() {
            return this.hasItems ? `${this._id}-invisibleText` : undefined;
        }
    };
    __decorate$2([
        webcomponentsBase.s({ type: Boolean })
    ], TabContainer.prototype, "collapsed", void 0);
    __decorate$2([
        webcomponentsBase.s()
    ], TabContainer.prototype, "tabLayout", void 0);
    __decorate$2([
        webcomponentsBase.s()
    ], TabContainer.prototype, "overflowMode", void 0);
    __decorate$2([
        webcomponentsBase.s()
    ], TabContainer.prototype, "headerBackgroundDesign", void 0);
    __decorate$2([
        webcomponentsBase.s()
    ], TabContainer.prototype, "contentBackgroundDesign", void 0);
    __decorate$2([
        webcomponentsBase.s()
    ], TabContainer.prototype, "tabsPlacement", void 0);
    __decorate$2([
        webcomponentsBase.s({ type: Boolean })
    ], TabContainer.prototype, "noAutoSelection", void 0);
    __decorate$2([
        webcomponentsBase.s()
    ], TabContainer.prototype, "mediaRange", void 0);
    __decorate$2([
        webcomponentsBase.s({ type: Object })
    ], TabContainer.prototype, "_selectedTab", void 0);
    __decorate$2([
        webcomponentsBase.s({ type: Boolean, noAttribute: true })
    ], TabContainer.prototype, "_animationRunning", void 0);
    __decorate$2([
        webcomponentsBase.s({ type: Boolean, noAttribute: true })
    ], TabContainer.prototype, "_contentCollapsed", void 0);
    __decorate$2([
        webcomponentsBase.s({ noAttribute: true })
    ], TabContainer.prototype, "_startOverflowText", void 0);
    __decorate$2([
        webcomponentsBase.s({ noAttribute: true })
    ], TabContainer.prototype, "_endOverflowText", void 0);
    __decorate$2([
        webcomponentsBase.s({ type: Array })
    ], TabContainer.prototype, "_popoverItemsFlat", void 0);
    __decorate$2([
        webcomponentsBase.s({ type: Number, noAttribute: true })
    ], TabContainer.prototype, "_width", void 0);
    __decorate$2([
        webcomponentsBase.d({
            "default": true,
            type: HTMLElement,
            individualSlots: true,
            invalidateOnChildChange: {
                properties: true,
                slots: true,
            },
        })
    ], TabContainer.prototype, "items", void 0);
    __decorate$2([
        webcomponentsBase.d()
    ], TabContainer.prototype, "overflowButton", void 0);
    __decorate$2([
        webcomponentsBase.d()
    ], TabContainer.prototype, "startOverflowButton", void 0);
    __decorate$2([
        D("[data-ui5-stable=overflow-start],[data-ui5-stable=overflow-end],[role=tab]")
    ], TabContainer.prototype, "_onHeaderDragOver", null);
    __decorate$2([
        i18n.i("@ui5/webcomponents")
    ], TabContainer, "i18nBundle", void 0);
    TabContainer = TabContainer_1 = __decorate$2([
        webcomponentsBase.m({
            tag: "ui5-tabcontainer",
            languageAware: true,
            fastNavigation: true,
            styles: [
                tabStyles,
                tabContainerCss,
                ResponsivePopoverCommon_css.ResponsivePopoverCommonCss,
            ],
            renderer: parametersBundle_css.d,
            template: TabContainerTemplate,
        })
        /**
         * Fired when a tab is selected.
         * @param {Tab} tab The selected `tab`.
         * @param {Integer} tabIndex The selected `tab` index in the flattened array of all tabs and their subTabs, provided by the `allItems` getter.
         * @public
         * @since 2.0.0
         */
        ,
        eventStrict.l("tab-select", {
            bubbles: true,
            cancelable: true,
        })
        /**
         * Fired when element is being moved over the tab container.
         *
         * If the new position is valid, prevent the default action of the event using `preventDefault()`.
         * @param {object} source Contains information about the moved element under `element` property.
         * @param {object} destination Contains information about the destination of the moved element. Has `element` and `placement` properties.
         * @public
         * @since 2.0.0
         */
        ,
        eventStrict.l("move-over", {
            bubbles: true,
            cancelable: true,
        })
        /**
         * Fired when element is moved to the tab container.
         *
         * **Note:** `move` event is fired only if there was a preceding `move-over` with prevented default action.
         * @param {object} source Contains information about the moved element under `element` property.
         * @param {object} destination Contains information about the destination of the moved element. Has `element` and `placement` properties.
         * @public
         */
        ,
        eventStrict.l("move", {
            bubbles: true,
        })
    ], TabContainer);
    const isTabInStrip = (el) => el.localName === "div" && el.getAttribute("role") === "tab";
    const getTabInStrip = (el) => {
        while (el) {
            if (isTabInStrip(el)) {
                return el;
            }
            el = el.parentElement;
        }
        return false;
    };
    const _walk = (items, callback, level) => {
        [...items].forEach(item => {
            callback(item, level);
            if (item.hasAttribute("ui5-tab") && item.items) {
                _walk(item.items, callback, level + 1);
            }
        });
    };
    const walk = (items, callback) => {
        _walk(items, callback, 0);
    };
    TabContainer.define();
    var TabContainer$1 = TabContainer;

    function TabTemplate() {
        return (parametersBundle_css.jsxs("div", { id: this._id, class: "ui5-tab-root", "data-ui5-stable": this.stableDomRef, children: [parametersBundle_css.jsx("slot", { name: this._defaultSlotName }), this.tabs.map(tab => parametersBundle_css.jsx("slot", { name: tab._effectiveSlotName }))] }));
    }

    function additionalText() {
        return (parametersBundle_css.jsx("span", { class: this.stripClasses.additionalTextClasses, id: `${this._id}-additionalText`, children: this.additionalText }));
    }
    function TabInStripTemplate() {
        return (parametersBundle_css.jsxs("div", { id: this._id, class: this.stripClasses.itemClasses, tabindex: -1, role: "tab", "aria-roledescription": this._roleDescription, "aria-haspopup": this._ariaHasPopup, "aria-posinset": this._forcedPosinset, "aria-setsize": this._forcedSetsize, "aria-controls": "ui5-tc-content", "aria-selected": this.effectiveSelected, "aria-disabled": this.effectiveDisabled, "aria-labelledby": this.ariaLabelledBy, draggable: this.movable, onDragStart: this._ondragstart, onDragEnd: this._ondragend, ref: this.captureRef.bind(this), children: [this.icon &&
                    parametersBundle_css.jsx("div", { class: "ui5-tab-strip-item-icon-outer", children: parametersBundle_css.jsx(Icon.Icon, { id: `${this._id}-icon`, name: this.icon, class: "ui5-tab-strip-item-icon" }) }), this._designDescription &&
                    parametersBundle_css.jsx("div", { id: `${this._id}-designDescription`, class: "ui5-tab-strip-design-description", children: this._designDescription }), parametersBundle_css.jsxs("div", { class: "ui5-tab-strip-itemContent", children: [!this._isInline &&
                            additionalText.call(this), this.text &&
                            parametersBundle_css.jsxs("span", { class: "ui5-tab-strip-itemText", id: `${this._id}-text`, children: [this.semanticIconName && (parametersBundle_css.jsx(Icon.Icon, { class: this.semanticIconClasses, name: this.semanticIconName })), this.displayText, this.isSingleClickArea &&
                                        parametersBundle_css.jsx("span", { class: "ui5-tab-single-click-icon", children: parametersBundle_css.jsx(Icon.Icon, { name: slimArrowDown.slimArrowDown }) })] })] }), this.requiresExpandButton &&
                    parametersBundle_css.jsxs(parametersBundle_css.Fragment, { children: [parametersBundle_css.jsx("div", { class: "ui5-tab-expand-button-separator" }), parametersBundle_css.jsx("div", { class: "ui5-tab-expand-button", children: parametersBundle_css.jsx(Button.Button, { ref: this.captureButtonRef.bind(this), icon: slimArrowDown.slimArrowDown, design: "Transparent", tabindex: -1, disabled: this.disabled, tooltip: this.expandButtonTitle, accessibilityAttributes: this.expandBtnAccessibilityAttributes }) })] })] }));
    }

    function TabInOverflowTemplate() {
        return (parametersBundle_css.jsx(ListItemCustom.ListItemCustom, { id: `${this._id}-li`, class: this.overflowClasses, style: this._forcedStyleInOverflow, type: this.overflowState, disabled: this.effectiveDisabled, selected: this.selected, movable: this.movable, ref: this.captureRef.bind(this), children: parametersBundle_css.jsx("div", { class: "ui5-tab-overflow-itemContent-wrapper", children: parametersBundle_css.jsxs("div", { class: "ui5-tab-overflow-itemContent", children: [this.semanticIconName && (parametersBundle_css.jsx(Icon.Icon, { class: this.semanticIconClasses, name: this.semanticIconName })), this.icon && (parametersBundle_css.jsx(Icon.Icon, { name: this.icon })), this.text, this.additionalText && (parametersBundle_css.jsxs(parametersBundle_css.Fragment, { children: ["\u00A0(", this.additionalText, ")"] })), this._designDescription && (parametersBundle_css.jsx("div", { id: `${this._id}-designDescription`, class: "ui5-hidden-text", children: this._designDescription }))] }) }) }));
    }

    Theme.p("@ui5/webcomponents-theming", "sap_horizon", async () => parametersBundle_css.defaultThemeBase);
    Theme.p("@ui5/webcomponents", "sap_horizon", async () => parametersBundle_css$1.defaultTheme);
    var css = `:host{display:inline-block;width:100%}.ui5-tab-root{width:100%;height:100%}
`;

    Theme.p("@ui5/webcomponents-theming", "sap_horizon", async () => parametersBundle_css.defaultThemeBase);
    Theme.p("@ui5/webcomponents", "sap_horizon", async () => parametersBundle_css$1.defaultTheme);
    var stripCss = `.ui5-tab-semantic-icon{display:var(--_ui5-v2-10-0_tc_headerItemSemanticIcon_display);height:var(--_ui5-v2-10-0_tc_headerItemSemanticIcon_size);width:var(--_ui5-v2-10-0_tc_headerItemSemanticIcon_size);margin-inline-end:.5rem}.ui5-tab-semantic-icon--positive{color:var(--sapPositiveTextColor)}.ui5-tab-semantic-icon--negative{color:var(--sapNegativeTextColor)}.ui5-tab-semantic-icon--critical{color:var(--sapCriticalTextColor)}.ui5-tab-strip-item{height:var(--_ui5-v2-10-0_tc_header_height);color:var(--_ui5-v2-10-0_tc_headerItem_color);cursor:pointer;padding:0 var(--_ui5-v2-10-0_tc_headeritem_padding);font-size:var(--sapFontSmallSize);font-weight:var(--_ui5-v2-10-0_tc_headeritem_text_font_weight);position:relative;display:flex;align-items:center;justify-content:center;flex-shrink:0;min-width:2rem;max-width:100%;box-sizing:border-box;outline:none}.ui5-tab-strip-item[data-moving]{background-color:var(--ui5-v2-10-0_tc_header_active_background_color)}.ui5-tab-strip-itemText{position:relative;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ui5-tc__separator[hidden],.ui5-tab-strip-item[hidden],.ui5-tab-strip-item--textOnly[hidden],.ui5-tab-strip-item.ui5-tab-strip-item--textOnly.ui5-tab-strip-item--inline[hidden],.ui5-tab-strip-design-description{display:none}.ui5-tab-strip-itemContent{display:flex;height:100%;min-width:0;justify-content:center;flex-direction:column;border:var(--_ui5-v2-10-0_tc_headerItemContent_default_focus_border);border-radius:var(--_ui5-v2-10-0_tc_headerItemContent_focus_border_radius);transition:var(--_ui5-v2-10-0_tc_headerItem_transition)}.ui5-tab-expand-button{display:flex;flex-direction:column;justify-content:center;position:relative;z-index:1;background-color:var(--_ui5-v2-10-0_tc_header_background);padding-inline-end:.188rem}.ui5-tab-expand-button>[ui5-button]{height:1.5rem;min-width:1.5rem;margin-inline-start:var(--_ui5-v2-10-0_tc_headerItem_expand_button_margin_inline_start);--_ui5-v2-10-0_button_border_radius: var(--_ui5-v2-10-0_tc_headerItem_expand_button_border_radius);--_ui5-v2-10-0_button_focused_border_radius: var(--_ui5-v2-10-0_tc_headerItem_expand_button_border_radius)}.ui5-tab-expand-button>[ui5-button]:not([active]){color:var(--_ui5-v2-10-0_tc_headerItem_color)}.ui5-tab-strip-item--selected .ui5-tab-expand-button>[ui5-button]:not([active]){color:var(--_ui5-v2-10-0_tc_headerItem_text_selected_color)}.ui5-tab-expand-button>[ui5-button]:hover:not([active]){color:var(--_ui5-v2-10-0_tc_headerItem_text_selected_hover_color)}.ui5-tab-expand-button-separator{display:var(--_ui5-v2-10-0_tc_headerItem_expand_button_separator_display);position:relative;width:.0625rem;right:-.0625rem;height:.625rem;background:var(--sapTextColor);margin-inline-start:.0625rem;z-index:2;margin-left:.625rem}.ui5-tab-expand-button:hover{z-index:2}.ui5-tab-strip-item--selected .ui5-tab-expand-button-separator{background:var(--_ui5-v2-10-0_tc_headerItem_text_selected_color)}.ui5-tab-single-click-icon{margin-inline-start:var(--_ui5-v2-10-0_tc_headerItem_single_click_expand_button_margin_inline_start)}.ui5-tab-strip-item--selected.ui5-tab-strip-item--textOnly{color:var(--_ui5-v2-10-0_tc_headerItem_text_selected_color)}.ui5-tab-strip-item--selected.ui5-tab-strip-item--singleClickArea .ui5-tab-strip-itemText .ui5-tab-single-click-icon>[ui5-icon]{color:var(--_ui5-v2-10-0_tc_headerItem_text_selected_color)}.ui5-tab-strip-item--singleClickArea .ui5-tab-strip-itemText{display:flex;align-items:center}.ui5-tab-strip-item--singleClickArea .ui5-tab-strip-itemText .ui5-tab-single-click-icon{display:flex}.ui5-tab-strip-item--singleClickArea .ui5-tab-strip-itemText .ui5-tab-single-click-icon>[ui5-icon]{color:var(--_ui5-v2-10-0_tc_headerItem_color)}.ui5-tab-strip-item--textOnly:not(.ui5-tab-strip-item--twoClickArea):not(.ui5-tab-strip-item--selected):not(.ui5-tab-strip-item--negative):hover,.ui5-tab-strip-item--twoClickArea:not(.ui5-tab-strip-item--selected):not(.ui5-tab-strip-item--negative) .ui5-tab-strip-itemContent:hover,.ui5-tab-strip-item--singleClickArea:not(.ui5-tab-strip-item--selected):not(.ui5-tab-strip-item--disabled):hover .ui5-tab-single-click-icon>[ui5-icon]{color:var(--_ui5-v2-10-0_tc_headerItem_text_hover_color)}.ui5-tab-strip-item--selected.ui5-tab-strip-item--textOnly .ui5-tab-strip-itemContent:after,.ui5-tab-strip-item--selected.ui5-tab-strip-item--mixedMode .ui5-tab-strip-itemContent:after,.ui5-tab-strip-item--selected .ui5-tab-strip-item-icon-outer:after{content:"";position:absolute;bottom:0;left:0;right:0;border-bottom:var(--sapTab_Selected_Indicator_Dimension) solid var(--sapTab_ForegroundColor);border-radius:var(--_ui5-v2-10-0_tc_headerItemContent_border_radius);background-color:var(--_ui5-v2-10-0_tc_headerItemContent_border_bg);height:var(--_ui5-v2-10-0_tc_headerItemContent_border_height)}.ui5-tab-strip-item--selected.ui5-tab-strip-item--textOnly .ui5-tab-strip-itemContent:after,.ui5-tab-strip-item--selected.ui5-tab-strip-item--mixedMode .ui5-tab-strip-itemContent:after{left:var(--_ui5-v2-10-0_tc_headeritem_padding);right:var(--_ui5-v2-10-0_tc_headeritem_padding)}.ui5-tab-strip-item--selected .ui5-tab-strip-item-icon-outer:after{bottom:-.9375rem}.ui5-tab-strip-item--disabled{cursor:default;opacity:var(--sapContent_DisabledOpacity)}:host([desktop]) .ui5-tab-strip-item--textOnly:focus:not([data-moving]) .ui5-tab-strip-itemText:before,.ui5-tab-strip-item--textOnly:focus-visible:not([data-moving]) .ui5-tab-strip-itemText:before,:host([desktop]) .ui5-tab-strip-item--inline.ui5-tab-strip-item--textOnly:focus:not([data-moving]) .ui5-tab-strip-itemText:before,.ui5-tab-strip-item--inline.ui5-tab-strip-item--textOnly:focus-visible:not([data-moving]) .ui5-tab-strip-itemText:before{border-radius:var(--_ui5-v2-10-0_tc_headerItem_focus_border_radius);content:"";pointer-events:none;position:absolute;border:var(--_ui5-v2-10-0_tc_headerItem_focus_border);left:var(--_ui5-v2-10-0_tc_headerItem_text_focus_border_offset_left);right:var(--_ui5-v2-10-0_tc_headerItem_text_focus_border_offset_right);top:var(--_ui5-v2-10-0_tc_headerItem_text_focus_border_offset_top);bottom:var(--_ui5-v2-10-0_tc_headerItem_text_focus_border_offset_bottom)}:host([desktop]) .ui5-tab-strip-item--mixedMode:focus:not([data-moving]) .ui5-tab-strip-itemContent:before,.ui5-tab-strip-item--mixedMode:focus-visible:not([data-moving]) .ui5-tab-strip-itemContent:before{border-radius:var(--_ui5-v2-10-0_tc_headerItem_focus_border_radius);content:"";pointer-events:none;position:absolute;border:var(--_ui5-v2-10-0_tc_headerItem_focus_border);left:var(--_ui5-v2-10-0_tc_headerItem_mixed_mode_focus_border_offset_left);right:var(--_ui5-v2-10-0_tc_headerItem_mixed_mode_focus_border_offset_right);top:var(--_ui5-v2-10-0_tc_headerItem_mixed_mode_focus_border_offset_top);bottom:var(--_ui5-v2-10-0_tc_headerItem_mixed_mode_focus_border_offset_bottom)}:host([desktop]) .ui5-tab-strip-item--withIcon:focus:not([data-moving]) .ui5-tab-strip-item-icon-outer:before,.ui5-tab-strip-item--withIcon:focus-visible:not([data-moving]) .ui5-tab-strip-item-icon-outer:before{content:"";pointer-events:none;position:absolute;border:var(--_ui5-v2-10-0_tc_headerItem_focus_border);left:var(--_ui5-v2-10-0_tc_headerItem_focus_border_offset);right:var(--_ui5-v2-10-0_tc_headerItem_focus_border_offset);top:var(--_ui5-v2-10-0_tc_headerItem_focus_border_offset);bottom:var(--_ui5-v2-10-0_tc_headerItem_focus_border_offset);border-radius:var(--_ui5-v2-10-0_tc_headerItemIcon_focus_border_radius)}.ui5-tab-strip-item-icon-outer{display:flex;justify-content:center;align-items:center;position:relative;border:var(--_ui5-v2-10-0_tc_headerItemIcon_border);border-radius:50%;margin-inline-end:.25rem;height:var(--_ui5-v2-10-0_tc_item_icon_circle_size);width:var(--_ui5-v2-10-0_tc_item_icon_circle_size);pointer-events:none;background-color:var(--sapTab_Background)}.ui5-tab-strip-item-icon{width:var(--_ui5-v2-10-0_tc_item_icon_size);height:var(--_ui5-v2-10-0_tc_item_icon_size);color:var(--sapTab_IconColor);text-shadow:var(--sapContent_TextShadow);pointer-events:none}.ui5-tab-strip-item--selected .ui5-tab-strip-item-icon-outer{background-color:var(--sapTab_Selected_Background)}.ui5-tab-strip-item--selected .ui5-tab-strip-item-icon{color:var(--sapTab_Selected_IconColor);text-shadow:none}.ui5-tab-strip-itemAdditionalText+.ui5-tab-strip-itemText{display:flex}.ui5-tab-strip-itemAdditionalText-hidden{visibility:hidden;margin-top:1.25rem}.ui5-tab-strip-item--inline .ui5-tab-strip-itemAdditionalText+.ui5-tab-strip-itemText{display:inline}.ui5-tab-strip-item--withIcon .ui5-tab-strip-itemAdditionalText+.ui5-tab-strip-itemText{margin-block-start:var(--_ui5-v2-10-0_tc_item_add_text_margin_top)}.ui5-tab-strip-item--textOnly,.ui5-tab-strip-item.ui5-tab-strip-item--textOnly.ui5-tab-strip-item--inline{font-size:var(--sapFontSize);height:var(--_ui5-v2-10-0_tc_item_text_only_height);display:flex;align-items:center;line-height:var(--_ui5-v2-10-0_tc_item_text_line_height)}.ui5-tab-strip-item--textOnly .ui5-tab-strip-itemText{padding:0 .188rem}.ui5-tab-strip-item--textOnly.ui5-tab-strip-item--withAdditionalText{justify-content:flex-start;height:var(--_ui5-v2-10-0_tc_item_text_only_with_additional_text_height)}.ui5-tab-strip-item--mixedMode .ui5-tab-strip-itemText,.ui5-tab-strip-item--mixedMode .ui5-tab-strip-itemAdditionalText{display:inline-block;vertical-align:middle}.ui5-tab-strip-item--mixedMode .ui5-tab-strip-itemContent{flex-direction:row;align-items:center}.ui5-tab-strip-item--mixedMode .ui5-tab-strip-itemAdditionalText{font-size:1.5rem;margin-inline-end:.5rem}.ui5-tab-strip-item--mixedMode .ui5-tab-strip-itemText{color:var(--_ui5-v2-10-0_tc_mixedMode_itemText_color);font-family:var(--_ui5-v2-10-0_tc_mixedMode_itemText_font_family);font-size:var(--_ui5-v2-10-0_tc_mixedMode_itemText_font_size);font-weight:var(--_ui5-v2-10-0_tc_mixedMode_itemText_font_weight)}.ui5-tab-strip-item--positive.ui5-tab-strip-item--textOnly .ui5-tab-strip-itemText,.ui5-tab-strip-item--positive .ui5-tab-strip-item-icon-outer{color:var(--sapTab_Positive_TextColor);border-color:var(--sapTab_Positive_ForegroundColor)}.ui5-tab-strip-item--selected.ui5-tab-strip-item--positive.ui5-tab-strip-item--textOnly .ui5-tab-strip-itemText{color:var(--sapTab_Positive_Selected_TextColor)}.ui5-tab-strip-item--positive .ui5-tab-strip-item-icon{color:var(--sapTab_Positive_IconColor)}.ui5-tab-strip-item--positive.ui5-tab-strip-item--selected .ui5-tab-strip-item-icon-outer{background-color:var(--sapTab_Positive_Selected_Background);color:var(--_ui5-v2-10-0_tc_headerItemIcon_semantic_selected_color)}.ui5-tab-strip-item--positive.ui5-tab-strip-item--selected .ui5-tab-strip-item-icon{color:var(--sapTab_Positive_Selected_IconColor)}.ui5-tab-strip-item.ui5-tab-strip-item--neutral .ui5-tab-strip-itemContent:after,.ui5-tab-strip-item--neutral .ui5-tab-strip-item-icon-outer:after{border-color:var(--_ui5-v2-10-0_tc_headerItem_neutral_border_color);background-color:var(--_ui5-v2-10-0_tc_headerItem_neutral_border_bg)}.ui5-tab-strip-item--selected.ui5-tab-strip-item--neutral.ui5-tab-strip-item--textOnly .ui5-tab-strip-itemText{color:var(--sapTab_Neutral_Selected_TextColor)}.ui5-tab-strip-item.ui5-tab-strip-item--positive .ui5-tab-strip-itemContent:after,.ui5-tab-strip-item--positive .ui5-tab-strip-item-icon-outer:after{border-color:var(--sapTab_Positive_ForegroundColor);background-color:var(--_ui5-v2-10-0_tc_headerItem_positive_border_bg)}.ui5-tab-strip-item--negative.ui5-tab-strip-item--textOnly .ui5-tab-strip-itemText,.ui5-tab-strip-item--negative .ui5-tab-strip-item-icon-outer{color:var(--sapTab_Negative_TextColor);border-color:var(--sapTab_Negative_ForegroundColor)}.ui5-tab-strip-item--selected.ui5-tab-strip-item--negative.ui5-tab-strip-item--textOnly .ui5-tab-strip-itemText{color:var(--sapTab_Negative_Selected_TextColor)}.ui5-tab-strip-item--negative .ui5-tab-strip-item-icon{color:var(--sapTab_Negative_IconColor)}.ui5-tab-strip-item--negative.ui5-tab-strip-item--selected .ui5-tab-strip-item-icon-outer{background-color:var(--sapTab_Negative_Selected_Background)}.ui5-tab-strip-item--negative.ui5-tab-strip-item--selected .ui5-tab-strip-item-icon{color:var(--sapTab_Negative_Selected_IconColor)}.ui5-tab-strip-item.ui5-tab-strip-item--negative .ui5-tab-strip-itemContent:after,.ui5-tab-strip-item--negative .ui5-tab-strip-item-icon-outer:after{border-color:var(--sapTab_Negative_ForegroundColor);background-color:var(--_ui5-v2-10-0_tc_headerItem_negative_border_bg)}.ui5-tab-strip-item--critical.ui5-tab-strip-item--textOnly .ui5-tab-strip-itemText,.ui5-tab-strip-item--critical .ui5-tab-strip-item-icon-outer{color:var(--sapTab_Critical_TextColor);border-color:var(--sapTab_Critical_ForegroundColor)}.ui5-tab-strip-item--selected.ui5-tab-strip-item--critical.ui5-tab-strip-item--textOnly .ui5-tab-strip-itemText{color:var(--sapTab_Critical_Selected_TextColor)}.ui5-tab-strip-item--critical .ui5-tab-strip-item-icon{color:var(--sapTab_Critical_IconColor)}.ui5-tab-strip-item--critical.ui5-tab-strip-item--selected .ui5-tab-strip-item-icon-outer{background-color:var(--sapTab_Critical_Selected_Background)}.ui5-tab-strip-item--critical.ui5-tab-strip-item--selected .ui5-tab-strip-item-icon{color:var(--sapTab_Critical_Selected_IconColor)}.ui5-tab-strip-item.ui5-tab-strip-item--critical .ui5-tab-strip-itemContent:after,.ui5-tab-strip-item--critical .ui5-tab-strip-item-icon-outer:after{border-color:var(--sapTab_Critical_ForegroundColor);background-color:var(--_ui5-v2-10-0_tc_headerItem_critical_border_bg)}.ui5-tab-strip-item--neutral.ui5-tab-strip-item--textOnly .ui5-tab-strip-itemText,.ui5-tab-strip-item--neutral .ui5-tab-strip-item-icon-outer{color:var(--sapTab_Neutral_TextColor);border-color:var(--sapTab_Neutral_ForegroundColor)}.ui5-tab-strip-item--neutral .ui5-tab-strip-item-icon{color:var(--sapTab_Neutral_IconColor)}.ui5-tab-strip-item--neutral.ui5-tab-strip-item--selected .ui5-tab-strip-item-icon-outer{background-color:var(--sapTab_Neutral_Selected_Background)}.ui5-tab-strip-item--neutral.ui5-tab-strip-item--selected .ui5-tab-strip-item-icon{color:var(--sapTab_Neutral_Selected_IconColor)}.ui5-tab-strip-item.ui5-tab-strip-item--neutral .ui5-tab-strip-itemContent:after,.ui5-tab-strip-item--neutral .ui5-tab-strip-item-icon:after{border-color:var(--_ui5-v2-10-0_tc_headerItem_neutral_border_color);background-color:var(--_ui5-v2-10-0_tc_headerItem_neutral_border_bg)}.ui5-tab-strip-item--withIcon .ui5-tab-strip-itemContent .ui5-tab-strip-itemAdditionalText{padding:0}.ui5-tab-strip-item .ui5-tab-strip-itemAdditionalText{padding:0 .188rem;color:var(--_ui5-v2-10-0_tc_headerItem_additional_text_color);font-weight:var(--_ui5-v2-10-0_tc_headerItem_additional_text_font_weight)}.ui5-tab-strip-item.ui5-tab-strip-item--mixedMode .ui5-tab-strip-itemAdditionalText{color:var(--_ui5-v2-10-0_tc_headerItem_color)}
`;

    Theme.p("@ui5/webcomponents-theming", "sap_horizon", async () => parametersBundle_css.defaultThemeBase);
    Theme.p("@ui5/webcomponents", "sap_horizon", async () => parametersBundle_css$1.defaultTheme);
    var overflowCss = `.ui5-tab-semantic-icon{display:var(--_ui5-v2-10-0_tc_headerItemSemanticIcon_display);height:var(--_ui5-v2-10-0_tc_headerItemSemanticIcon_size);width:var(--_ui5-v2-10-0_tc_headerItemSemanticIcon_size);margin-inline-end:.5rem}.ui5-tab-semantic-icon--positive{color:var(--sapPositiveTextColor)}.ui5-tab-semantic-icon--negative{color:var(--sapNegativeTextColor)}.ui5-tab-semantic-icon--critical{color:var(--sapCriticalTextColor)}.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}.ui5-tab-overflow-item{color:var(--_ui5-v2-10-0_tc_overflowItem_default_color)}.ui5-tab-overflow-item--disabled{cursor:default;opacity:var(--sapContent_DisabledOpacity)}.ui5-tab-overflow-item[hidden]{display:none}.ui5-tab-overflow-item--positive:not(.ui5-tab-overflow-item--disabled) .ui5-tab-overflow-itemContent{color:var(--_ui5-v2-10-0_tc_overflowItem_positive_color)}.ui5-tab-overflow-item--negative:not(.ui5-tab-overflow-item--disabled) .ui5-tab-overflow-itemContent{color:var(--_ui5-v2-10-0_tc_overflowItem_negative_color)}.ui5-tab-overflow-item--critical:not(.ui5-tab-overflow-item--disabled) .ui5-tab-overflow-itemContent{color:var(--_ui5-v2-10-0_tc_overflowItem_critical_color)}.ui5-tab-overflow-item[active] .ui5-tab-overflow-itemContent{color:var(--sapList_Active_TextColor)}.ui5-tab-overflow-itemContent{display:flex;align-items:center;position:relative;height:var(--_ui5-v2-10-0_tc_item_text);pointer-events:none;font-size:.875rem}.ui5-tab-overflow-itemContent-wrapper{padding-inline-start:calc((calc(var(--_ui5-v2-10-0-tab-indentation-level) + var(--_ui5-v2-10-0-tab-level-has-icon) * var(--_ui5-v2-10-0_tc_overflowItem_additional, 0))) * (var(--_ui5-v2-10-0_tc_overflowItem_indent) + var(--_ui5-v2-10-0_tc_overflowItem_extra_indent)))}.ui5-tab-overflow-item .ui5-tab-semantic-icon{position:absolute;inset-inline-start:-1.25rem}.ui5-tab-overflow-item--selectedSubTab{background-color:var(--sapList_SelectionBackgroundColor)}.ui5-tab-overflow-item [ui5-icon]:not(.ui5-tab-semantic-icon){width:1.375rem;height:1.375rem;padding-inline-end:.75rem;color:var(--_ui5-v2-10-0_tc_overflowItem_current_color)}.ui5-tab-container-responsive-popover [ui5-li-custom][focused]::part(native-li):after{inset:var(--_ui5-v2-10-0_tc_overflowItem_focus_offset)}.ui5-tab-container-responsive-popover::part(content){padding:0}
`;

    var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var Tab_1;
    const DESIGN_DESCRIPTIONS = {
        [SemanticColor$1.Positive]: i18nDefaults.TAB_ARIA_DESIGN_POSITIVE,
        [SemanticColor$1.Negative]: i18nDefaults.TAB_ARIA_DESIGN_NEGATIVE,
        [SemanticColor$1.Neutral]: i18nDefaults.TAB_ARIA_DESIGN_NEUTRAL,
        [SemanticColor$1.Critical]: i18nDefaults.TAB_ARIA_DESIGN_CRITICAL,
    };
    /**
     * @class
     * The `ui5-tab` represents a selectable item inside a `ui5-tabcontainer`.
     * It defines both the item in the tab strip (top part of the `ui5-tabcontainer`) and the
     * content that is presented to the user once the tab is selected.
     * @abstract
     * @constructor
     * @extends UI5Element
     * @implements {ITab}
     * @public
     */
    let Tab = Tab_1 = class Tab extends webcomponentsBase.b {
        constructor() {
            super(...arguments);
            /**
             * Disabled tabs can't be selected.
             * @default false
             * @public
             */
            this.disabled = false;
            /**
             * Defines the component's design color.
             *
             * The design is applied to:
             *
             * - the component icon
             * - the `text` when the component overflows
             * - the tab selection line
             *
             * Available designs are: `"Default"`, `"Neutral"`, `"Positive"`, `"Critical"` and `"Negative"`.
             *
             * **Note:** The design depends on the current theme.
             * @default "Default"
             * @public
             */
            this.design = "Default";
            /**
             * Specifies if the component is selected.
             * @default false
             * @public
             */
            this.selected = false;
            /**
             * Defines if the tab is movable.
             *
             * @default false
             * @private
             */
            this.movable = false;
            this._isTopLevelTab = false;
        }
        set forcedTabIndex(val) {
            this.getDomRefInStrip().setAttribute("tabindex", val);
        }
        get forcedTabIndex() {
            return this.getDomRefInStrip().getAttribute("tabindex");
        }
        get displayText() {
            let text = this.text;
            if (this._isInline && this.additionalText) {
                text += ` (${this.additionalText})`;
            }
            return text;
        }
        get isSeparator() {
            return false;
        }
        get stripPresentation() {
            return webcomponentsBase.n(Tab_1.stripTemplate, this);
        }
        get overflowPresentation() {
            return webcomponentsBase.n(Tab_1.overflowTemplate, this);
        }
        get stableDomRef() {
            return this.getAttribute("stable-dom-ref") || `${this._id}-stable-dom-ref`;
        }
        get requiresExpandButton() {
            return this.items.length > 0 && this._isTopLevelTab && this.hasOwnContent;
        }
        get isSingleClickArea() {
            return this.items.length > 0 && this._isTopLevelTab && !this.hasOwnContent;
        }
        get isTwoClickArea() {
            return this.items.length > 0 && this._isTopLevelTab && this.hasOwnContent;
        }
        get isOnSelectedTabPath() {
            return this._selectedTabReference === this || this.tabs.some(subTab => subTab.isOnSelectedTabPath);
        }
        get _effectiveSlotName() {
            return this.isOnSelectedTabPath ? this._individualSlot : `disabled-${this._individualSlot}`;
        }
        get _defaultSlotName() {
            return this._selectedTabReference === this ? "" : "disabled-slot";
        }
        get hasOwnContent() {
            return willShowContent.t(this.content);
        }
        get expandBtnAccessibilityAttributes() {
            return {
                hasPopup: "menu",
            };
        }
        receiveStripInfo({ getElementInStrip, posinset, setsize, isInline, isTopLevelTab, mixedMode, }) {
            this._getElementInStrip = getElementInStrip;
            this._forcedPosinset = posinset;
            this._forcedSetsize = setsize;
            this._forcedMixedMode = mixedMode;
            this._isInline = isInline;
            this._isTopLevelTab = !!isTopLevelTab;
        }
        receiveOverflowInfo({ getElementInOverflow, style }) {
            this._getElementInOverflow = getElementInOverflow;
            this._forcedStyleInOverflow = style;
        }
        /**
         * Returns the DOM reference of the tab that is placed in the header.
         *
         * **Note:** Tabs, placed in the `items` slot of other tabs are not shown in the header. Calling this method on such tabs will return `undefined`.
         *
         * **Note:** If you need a DOM ref to the tab content please use the `getDomRef` method.
         * @public
         * @since 1.0.0-rc.16
         */
        getDomRefInStrip() {
            return this._getElementInStrip?.();
        }
        getFocusDomRef() {
            let focusedDomRef = this._getElementInOverflow?.();
            if (!focusedDomRef) {
                focusedDomRef = this._getElementInStrip?.();
            }
            return focusedDomRef;
        }
        async focus(focusOptions) {
            await Theme.f();
            return super.focus(focusOptions);
        }
        get isMixedModeTab() {
            return !this.icon && this._forcedMixedMode;
        }
        get isTextOnlyTab() {
            return !this.icon && !this._forcedMixedMode;
        }
        get isIconTab() {
            return !!this.icon;
        }
        get effectiveDisabled() {
            return this.disabled || undefined;
        }
        get effectiveSelected() {
            const subItemSelected = this.tabs.some(elem => elem.effectiveSelected);
            return this.selected || this._selectedTabReference === this || subItemSelected;
        }
        get effectiveHidden() {
            return !this.effectiveSelected;
        }
        get tabs() {
            return this.items.filter((tab) => !tab.isSeparator);
        }
        get ariaLabelledBy() {
            const labels = [];
            if (this.text) {
                labels.push(`${this._id}-text`);
            }
            if (this.additionalText) {
                labels.push(`${this._id}-additionalText`);
            }
            if (this.icon) {
                labels.push(`${this._id}-icon`);
            }
            if (this._designDescription) {
                labels.push(`${this._id}-designDescription`);
            }
            return labels.join(" ");
        }
        get stripClasses() {
            const classes = ["ui5-tab-strip-item"];
            if (this.effectiveSelected) {
                classes.push("ui5-tab-strip-item--selected");
            }
            if (this.disabled) {
                classes.push("ui5-tab-strip-item--disabled");
            }
            if (this._isInline) {
                classes.push("ui5-tab-strip-item--inline");
            }
            if (this.additionalText) {
                classes.push("ui5-tab-strip-item--withAdditionalText");
            }
            if (!this.icon && !this._forcedMixedMode) {
                classes.push("ui5-tab-strip-item--textOnly");
            }
            if (this.icon) {
                classes.push("ui5-tab-strip-item--withIcon");
            }
            if (!this.icon && this._forcedMixedMode) {
                classes.push("ui5-tab-strip-item--mixedMode");
            }
            if (this.design !== SemanticColor$1.Default) {
                classes.push(`ui5-tab-strip-item--${this.design.toLowerCase()}`);
            }
            if (this.isSingleClickArea) {
                classes.push(`ui5-tab-strip-item--singleClickArea`);
            }
            if (this.isTwoClickArea) {
                classes.push(`ui5-tab-strip-item--twoClickArea`);
            }
            return {
                itemClasses: classes.join(" "),
                additionalTextClasses: this.additionalTextClasses,
            };
        }
        get additionalTextClasses() {
            const classes = [];
            if (this.additionalText) {
                classes.push("ui5-tab-strip-itemAdditionalText");
            }
            if (this.icon && !this.additionalText) {
                classes.push("ui5-tab-strip-itemAdditionalText-hidden");
            }
            return classes.join(" ");
        }
        get expandButtonTitle() {
            return Tab_1.i18nBundle.getText(i18nDefaults.TABCONTAINER_END_OVERFLOW);
        }
        get _roleDescription() {
            return this.items.length > 0 ? Tab_1.i18nBundle.getText(i18nDefaults.TAB_SPLIT_ROLE_DESCRIPTION) : undefined;
        }
        get _ariaHasPopup() {
            return this.isSingleClickArea ? "menu" : undefined;
        }
        get semanticIconName() {
            switch (this.design) {
                case SemanticColor$1.Positive:
                    return "sys-enter-2";
                case SemanticColor$1.Negative:
                    return "error";
                case SemanticColor$1.Critical:
                    return "alert";
                default:
                    return null;
            }
        }
        get _designDescription() {
            if (this.design === SemanticColor$1.Default) {
                return null;
            }
            return Tab_1.i18nBundle.getText(DESIGN_DESCRIPTIONS[this.design]);
        }
        get semanticIconClasses() {
            const classes = ["ui5-tab-semantic-icon"];
            if (this.design !== SemanticColor$1.Default && this.design !== SemanticColor$1.Neutral) {
                classes.push(`ui5-tab-semantic-icon--${this.design.toLowerCase()}`);
            }
            return classes.join(" ");
        }
        get overflowClasses() {
            const classes = ["ui5-tab-overflow-item"];
            if (this.design !== SemanticColor$1.Default && this.design !== SemanticColor$1.Neutral) {
                classes.push(`ui5-tab-overflow-item--${this.design.toLowerCase()}`);
            }
            if (this.effectiveDisabled) {
                classes.push("ui5-tab-overflow-item--disabled");
            }
            if (this.selected) {
                classes.push("ui5-tab-overflow-item--selectedSubTab");
            }
            return classes.join(" ");
        }
        get overflowState() {
            return (this.disabled || this.isSingleClickArea) ? ListItemTemplate.ListItemType.Inactive : ListItemTemplate.ListItemType.Active;
        }
        static get stripTemplate() {
            return TabInStripTemplate;
        }
        static get overflowTemplate() {
            return TabInOverflowTemplate;
        }
        _ondragstart(e) {
            if (e.target instanceof HTMLElement) {
                e.target.setAttribute("data-moving", "");
            }
        }
        _ondragend(e) {
            if (e.target instanceof HTMLElement) {
                e.target.removeAttribute("data-moving");
            }
        }
        captureRef(ref) {
            if (ref) {
                ref.realTabReference = this;
            }
        }
        captureButtonRef(ref) {
            if (ref) {
                ref.tab = this;
            }
        }
    };
    __decorate$1([
        webcomponentsBase.s()
    ], Tab.prototype, "text", void 0);
    __decorate$1([
        webcomponentsBase.s({ type: Boolean })
    ], Tab.prototype, "disabled", void 0);
    __decorate$1([
        webcomponentsBase.s()
    ], Tab.prototype, "additionalText", void 0);
    __decorate$1([
        webcomponentsBase.s()
    ], Tab.prototype, "icon", void 0);
    __decorate$1([
        webcomponentsBase.s()
    ], Tab.prototype, "design", void 0);
    __decorate$1([
        webcomponentsBase.s({ type: Boolean })
    ], Tab.prototype, "selected", void 0);
    __decorate$1([
        webcomponentsBase.s({ type: Boolean })
    ], Tab.prototype, "movable", void 0);
    __decorate$1([
        webcomponentsBase.s({ type: Boolean })
    ], Tab.prototype, "_isTopLevelTab", void 0);
    __decorate$1([
        webcomponentsBase.s({ type: Object })
    ], Tab.prototype, "_selectedTabReference", void 0);
    __decorate$1([
        webcomponentsBase.d({
            type: Node,
            "default": true,
            invalidateOnChildChange: {
                properties: true,
                slots: false,
            },
        })
    ], Tab.prototype, "content", void 0);
    __decorate$1([
        webcomponentsBase.d({
            type: HTMLElement,
            individualSlots: true,
            invalidateOnChildChange: {
                properties: true,
                slots: false,
            },
        })
    ], Tab.prototype, "items", void 0);
    __decorate$1([
        i18n.i("@ui5/webcomponents")
    ], Tab, "i18nBundle", void 0);
    Tab = Tab_1 = __decorate$1([
        webcomponentsBase.m({
            tag: "ui5-tab",
            languageAware: true,
            renderer: parametersBundle_css.d,
            template: TabTemplate,
            styles: css,
        })
    ], Tab);
    Tab.define();
    TabContainer$1.registerTabStyles(stripCss);
    TabContainer$1.registerTabStyles(ListItemBase.draggableElementStyles);
    TabContainer$1.registerTabStyles(overflowCss);
    var Tab$1 = Tab;

    const name$1 = "globe";
    const pathData$1 = "M416 137l-6-9 3-9 19 21-9 9h-10l9-10zm-14 11l-3-8 4-7 5 8zm29 6q2 5 4 9.5t4 10.5l-9 8-15-3-5 16-19-8 11-17h24v-12zm3 41h9l-1 8zm-169 78l19 16v36l-47 46-2 6-7 29-1 12q0 1 .5 2t.5 2l-4 4q-4 0-5 1l-20-45q-3-11-4.5-26t-4.5-33l-28-25 25-31-11-14q-25 0-43-18l-7-5-7-8 11 20-7 3-15-30 3-26-6-20-18-11-4-11q0-6 8.5-16.5t20-20.5T134 93t17-7q9 0 19.5 6.5T189 99q-1 1-1 3 0 4 3 5l-16 36 20 4 16-16 28 2 6 15-16 17v11l9 1 5-8 18-12v8l8 13-9 9 6 5-13 1 5 10-26 13 4 17h-8l-4-17h-21l-3 6-9-4-13 14 11 12-1 14 12 8zm177-63q12 5 14 21.5t2 27.5q0 37-15 68.5T414 388q-3 0-3-7 0-9 3-26t3-34v-8l-2-9-14-23-38-9-10-21 7-33q8-2 17.5-3.5T402 206q2 2 5 2t6.5-.5 7.5-.5q5 0 10.5 1t10.5 2zM279 98q11-11 23-19t26-16q14 13 23 17-5 2-10 5.5T330 98l-18 29-9 6q-6 0-9.5-9t-3.5-8q-7 0-11 3-3-3-10-3-2 0-3 .5t-3 .5q7-10 16-19zm105 18l-11 2 4-16h12l2 8zM256 0q53 0 99.5 20T437 74.5t55 81.5 20 100-20 99.5-55 81.5-81.5 55-99.5 20-100-20-81.5-55T20 355.5 0 256t20-100 54.5-81.5T156 20 256 0zm0 480q46 0 87-17.5t71.5-48 48-71.5 17.5-87-17.5-87-48-71.5-71.5-48T256 32q-47 0-87.5 17.5t-71 48-48 71.5T32 256t17.5 87 48 71.5 71 48T256 480z";
    const ltr$1 = true;
    const collection$1 = "SAP-icons-v4";
    const packageName$1 = "@ui5/webcomponents-icons";

    Icons.f(name$1, { pathData: pathData$1, ltr: ltr$1, collection: collection$1, packageName: packageName$1 });

    const name = "globe";
    const pathData = "M256 0q53 0 99.5 20T437 75t55 81.5 20 99.5-20 99.5-55 81.5-81.5 55-99.5 20-99.5-20T75 437t-55-81.5T0 256t20-99.5T75 75t81.5-55T256 0zm146 400q27-28 43-65t16-79q0-34-10.5-65t-29-56T377 91t-57-29v41q0 11-7 18t-18 7h-71v39q0 11-7 18t-18 7h-42l54 64h84q11 0 18 7.5t7 18.5v70h7q25 0 44.5 13.5T402 400zM51 256q0 39 14 74t38 62 57 44.5 71 22.5v-53q-26-8-43.5-28.5T167 331L56 212q-5 23-5 44z";
    const ltr = true;
    const collection = "SAP-icons-v5";
    const packageName = "@ui5/webcomponents-icons";

    Icons.f(name, { pathData, ltr, collection, packageName });

    function UserSettingsItemTemplate() {
        const content = this.tabs.length > 0 && !this._hasSelectedPageView ?
            parametersBundle_css.jsx(TabContainer$1, { contentBackgroundDesign: "Transparent", class: "ui5-user-settings-item-tabs", onTabSelect: this._handleTabSelect, children: this.tabs.map(view => parametersBundle_css.jsx(Tab$1, { text: view.text, selected: view.selected, ref: this.captureRef.bind(view), children: parametersBundle_css.jsx("slot", { name: view._individualSlot }) })) })
            :
                parametersBundle_css.jsx(parametersBundle_css.Fragment, { children: this._selectedPageView ?
                        parametersBundle_css.jsx("div", { class: "ui5-user-settings-item-view-container", children: parametersBundle_css.jsx("slot", { name: this._selectedPageView._individualSlot }) })
                        :
                            null });
        const loadingState = parametersBundle_css.jsx("div", { class: "ui5-user-settings-item-loading-container", children: parametersBundle_css.jsx(ListItemBase.BusyIndicator, { active: this.loading, class: "ui5-user-settings-item-busy", delay: 0, "aria-description": this.loadingReason }) });
        return (parametersBundle_css.jsxs("div", { class: "ui5-user-settings-item", children: [parametersBundle_css.jsx("header", { class: "ui5-user-settings-item-header-container", tabindex: 0, children: parametersBundle_css.jsxs("div", { class: "ui5-user-settings-item-header", children: [parametersBundle_css.jsx(Button.Button, { icon: "nav-back", design: "Transparent", onClick: this._handleBackButtonClick, class: "ui5-user-settings-item-collapse-btn", style: { display: this._shouldShowBackButton ? "block" : "" } }), parametersBundle_css.jsx(Title, { level: "H2", size: "H4", children: this._hasSelectedPageView ? this._selectedPageView.text : this.headerText })] }) }), this.loading ? loadingState : content] }));
    }

    Theme.p("@ui5/webcomponents-theming", "sap_horizon", async () => parametersBundle_css.defaultThemeBase);
    Theme.p("@ui5/webcomponents-fiori", "sap_horizon", async () => parametersBundle_css$2.defaultTheme);
    var UserSettingsItemCss = `.ui5-user-settings-item{height:100%;display:flex;flex-direction:column}.ui5-user-settings-item-header-container{container-type:inline-size}.ui5-user-settings-item-header{display:flex;gap:.5rem;align-items:center;padding:1rem 1rem .5rem;font-size:var(--sapFontHeader5Size);font-family:var(--sapFontBoldFamily);border-bottom:.0625rem solid var(--sapList_BorderColor)}.ui5-user-settings-item-loading-container{position:relative}.ui5-user-settings-item-view-container,.ui5-user-settings-item-loading-container,.ui5-user-settings-item-tabs{flex:1;min-height:0}.ui5-user-settings-item-tabs::part(content){padding:0;border-bottom:0}.ui5-user-settings-item-view-container{overflow:auto}:host([disabled]){pointer-events:initial;opacity:initial}:host([disabled])::part(content){opacity:var(--_ui5-v2-10-0-listitembase_disabled_opacity)}.ui5-user-settings-item-busy{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:42;width:100%;height:100%;display:flex;justify-content:center;align-items:center;pointer-events:all}.ui5-user-settings-item-busy:not([active]){display:none}@media screen and (width >= 64rem){.ui5-user-settings-item-collapse-btn{display:none}}@container (width > 37.5rem){.ui5-user-settings-item-header{padding-inline:2rem}}
`;

    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    /**
     * @class
     * ### Overview
     *
     * The `ui5-user-settings-item` represents an item in the `ui5-user-settings-dialog`.
     *
     * ### ES6 Module Import
     * `import "@ui5/webcomponents-fiori/dist/UserSettingsItem.js";`
     *
     * You can disable the <code>UserSettingsItem</code> by setting the <code>enabled</code> property to <code>false</code>,
     * or use the <code>UserSettingsItem</code> in read-only mode by setting the <code>editable</code> property to false.
     *
     * <b>Note:</b> Disabled and read-only states shouldn't be used together.
     *
     * @constructor
     * @extends UI5Element
     * @experimental
     * @public
     * @since 2.8.0
     */
    let UserSettingsItem = class UserSettingsItem extends webcomponentsBase.b {
        constructor() {
            super(...arguments);
            /**
             * Defines the text of the user settings item.
             *
             * @public
             * @default ""
             */
            this.text = "";
            /**
             * Defines the tooltip of the component.
             *
             * A tooltip attribute should be provided to represent the meaning or function when the component is collapsed and only the icon is visible.
             * @default ""
             * @public
             */
            this.tooltip = "";
            /**
             * Shows item tab.
             *
             * @public
             * @default false
             */
            this.selected = false;
            /**
             * Defines whether the component is in disabled state.
             *
             * **Note:** A disabled component is completely noninteractive.
             * @default false
             * @public
             */
            this.disabled = false;
            /**
             * Indicates whether a loading indicator should be shown.
             * @default false
             * @public
             */
            this.loading = false;
            /**
             * Defines the icon of the component.
             *
             * @default "globe"
             * @public
             */
            this.icon = "globe";
        }
        get _hasSelectedPageView() {
            return this.pages.some(view => view.selected);
        }
        get _selectedPageView() {
            return this.pages.find(view => view.selected) || this.pages[0];
        }
        get ariaLabelledByText() {
            return `${this.text} ${this.accessibleName}`.trim();
        }
        get _tooltip() {
            return this.tooltip ? this.tooltip : this.text;
        }
        get _icon() {
            return this.icon;
        }
        _handleBackButtonClick() {
            if (this._shouldShowBackButton) {
                const selectedPageView = this._selectedPageView;
                const eventPrevented = !this.fireDecoratorEvent("selection-change", {
                    view: selectedPageView,
                });
                if (!eventPrevented) {
                    selectedPageView.selected = false;
                }
            }
            else {
                this.fireDecoratorEvent("_collapse");
            }
        }
        _handleTabSelect(e) {
            const tab = e.detail.tab;
            const tabView = tab.associatedSettingView;
            const eventPrevented = !this.fireDecoratorEvent("selection-change", {
                view: tabView,
            });
            if (eventPrevented) {
                e.preventDefault();
            }
            else {
                this.tabs.forEach(view => {
                    view.selected = false;
                });
                tabView.selected = true;
            }
        }
        get _shouldShowBackButton() {
            return !!(this._hasSelectedPageView && this._selectedPageView.secondary);
        }
        captureRef(ref) {
            if (ref) {
                ref.associatedSettingView = this;
            }
        }
    };
    __decorate([
        webcomponentsBase.s({ type: String })
    ], UserSettingsItem.prototype, "text", void 0);
    __decorate([
        webcomponentsBase.s({ type: String })
    ], UserSettingsItem.prototype, "tooltip", void 0);
    __decorate([
        webcomponentsBase.s({ type: String })
    ], UserSettingsItem.prototype, "headerText", void 0);
    __decorate([
        webcomponentsBase.s({ type: Boolean })
    ], UserSettingsItem.prototype, "selected", void 0);
    __decorate([
        webcomponentsBase.s({ type: Boolean })
    ], UserSettingsItem.prototype, "disabled", void 0);
    __decorate([
        webcomponentsBase.s({ type: Boolean })
    ], UserSettingsItem.prototype, "loading", void 0);
    __decorate([
        webcomponentsBase.s()
    ], UserSettingsItem.prototype, "loadingReason", void 0);
    __decorate([
        webcomponentsBase.s({ type: String })
    ], UserSettingsItem.prototype, "icon", void 0);
    __decorate([
        webcomponentsBase.s()
    ], UserSettingsItem.prototype, "accessibleName", void 0);
    __decorate([
        webcomponentsBase.d({
            type: HTMLElement,
            "default": true,
            individualSlots: true,
            invalidateOnChildChange: {
                properties: true,
                slots: false,
            },
        })
    ], UserSettingsItem.prototype, "tabs", void 0);
    __decorate([
        webcomponentsBase.d({
            type: HTMLElement,
            individualSlots: true,
            invalidateOnChildChange: {
                properties: true,
                slots: false,
            },
        })
    ], UserSettingsItem.prototype, "pages", void 0);
    UserSettingsItem = __decorate([
        webcomponentsBase.m({
            tag: "ui5-user-settings-item",
            renderer: parametersBundle_css.d,
            template: UserSettingsItemTemplate,
            styles: [getEffectiveScrollbarStyle.a(), UserSettingsItemCss],
        })
        /**
         * Fired when a selected view changed.
         * @param {UserSettingsView} view The selected `view`.
         * @public
         */
        ,
        eventStrict.l("selection-change", {
            cancelable: true,
        })
        /**
         *
         * @private
         */
        ,
        eventStrict.l("_collapse", {
            bubbles: true,
        })
    ], UserSettingsItem);
    UserSettingsItem.define();
    var UserSettingsItem$1 = UserSettingsItem;

    return UserSettingsItem$1;

}));
