sap.ui.define(["uxc/integration/controller/BaseController", "sap/ui/Device", "sap/ui/core/Fragment", "sap/ui/model/json/JSONModel", "sap/base/Log", "sap/m/Text", "sap/m/Button", "sap/m/Dialog", "uxc/integration/thirdparty/@ui5/webcomponents-icons/dist/menu2", "uxc/integration/thirdparty/@ui5/webcomponents-icons/dist/sys-help", "uxc/integration/thirdparty/@ui5/webcomponents-icons/dist/da", "uxc/integration/thirdparty/@ui5/webcomponents-icons/dist/action-settings", "uxc/integration/thirdparty/@ui5/webcomponents-icons/dist/official-service", "uxc/integration/thirdparty/@ui5/webcomponents-icons/dist/message-information", "uxc/integration/thirdparty/@ui5/webcomponents-icons/dist/palette"], function (__BaseController, Device, Fragment, JSONModel, Log, Text, Button, Dialog, ___ui5_webcomponents_icons_dist_menu2, ___ui5_webcomponents_icons_dist_sys_help, ___ui5_webcomponents_icons_dist_da, ___ui5_webcomponents_icons_dist_action_settings, ___ui5_webcomponents_icons_dist_official_service, ___ui5_webcomponents_icons_dist_message_information, ___ui5_webcomponents_icons_dist_palette) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  /* eslint-disable @typescript-eslint/no-unsafe-call */
  const BaseController = _interopRequireDefault(__BaseController);
  /**
   * @namespace uxc.integration.controller
   */
  const App = BaseController.extend("uxc.integration.controller.App", {
    constructor: function constructor() {
      BaseController.prototype.constructor.apply(this, arguments);
      this.useOverlayNav = false;
      this.userMenuListenerAdded = false;
    },
    /**
     * Called when the controller is instantiated.
     */
    onInit: function _onInit() {
      Log.setLevel(Log.Level.ERROR);
      this.applyContentDensity();
      this.initViewModel();
      this.initOverlayNav();
    },
    onAfterRendering: function _onAfterRendering() {
      // Temporary fix for the issue with the side navigation not scrolling to the top
      // Scroll the SideNavigation's NavigationList to the top
      setTimeout(() => {
        const sideNav = this.getView().byId("sideNavigation");
        if (sideNav) {
          // Find the DOM element with class 'sapTntNL'
          const navList = sideNav.getDomRef()?.querySelector(".sapTntNL");
          if (navList) {
            navList.scrollTop = 0;
          }
        }
      }, 0);
    },
    /**
     * Applies the content density mode to the view.
     */
    applyContentDensity: function _applyContentDensity() {
      this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
    },
    /**
     * Initializes the view model.
     * This is used to set the initial state of the app.
     */
    initViewModel: function _initViewModel() {
      const appViewModel = new JSONModel({
        notificationsCount: 10 // initial count
      });
      this.getView().setModel(appViewModel, "appView");
    },
    /**
     * Called when the view is created.
     * This is used to initialize the overlay navigation.
     */
    initOverlayNav: function _initOverlayNav() {
      const params = new URLSearchParams(window.location.search);
      this.useOverlayNav = params.get("overlayNavigation") === "true";
      if (this.useOverlayNav) {
        const sideNav = this.getView().byId("sideNavigation");
        sideNav.setVisible(false);
      }
    },
    /**
     * Called when the user clicks on the menu button.
     * This is used to toggle the side navigation.
     */
    onMenuButtonClick: async function _onMenuButtonClick() {
      if (!this.useOverlayNav) {
        const toolPage = this.getView().byId("toolPage");
        toolPage.setSideExpanded(!toolPage.getSideExpanded());
      } else {
        const menuButton = this.getView().byId("toggleMenu").getDomRef();
        await this.openNavigationInOverlay(menuButton);
      }
    },
    /**
     * Closes the side navigation on phone devices for better UX.
     */
    closeSideNavigationOnPhone: function _closeSideNavigationOnPhone() {
      if (Device.system.phone && !this.useOverlayNav) {
        const toolPage = this.getView().byId("toolPage");
        toolPage.setSideExpanded(false);
      }
    },
    /**
     * Called when the user clicks on the logo button.
     */
    onLogoClick: function _onLogoClick() {
      const sideNav = this.getView().byId("sideNavigation");
      const contentTitle = this.getView().byId("contentTitle");
      sideNav.setSelectedKey("home");
      contentTitle.setText("Home");
      this.closeSideNavigationOnPhone();
    },
    /**
     * Called when opening the side navigation in overlay mode.
     */
    openNavigationInOverlay: async function _openNavigationInOverlay(menuButton) {
      let popover = this.getView().byId("sideNavPopover");
      if (!popover) {
        popover = await Fragment.load({
          id: this.getView().getId(),
          name: "uxc.integration.fragments.SideNavPopover",
          type: "XML",
          controller: this
        });
        this.getView().addDependent(popover);
        popover.setShowHeader(Device.system.phone);
      }
      if (popover.isOpen()) {
        popover.close();
      } else {
        popover.openBy(menuButton);
      }
    },
    /**
     * Called when opening the notifications popover.
     */
    onNotificationsClick: function _onNotificationsClick(e) {
      const view = this.getView().byId("notificationsView");
      const popover = view.byId("notificationsPopover").getDomRef();
      e.preventDefault();
      popover.opener = e.getParameter("targetRef");
      popover.open = true;
    },
    /**
     * Called when the user clicks on the profile button.
     * This is used to open the user settings dialog.
     */
    onProfileClick: async function _onProfileClick() {
      const userMenu = this.getView().byId("userProfileMenu").getDomRef();
      userMenu.open = true;
      let settingsDialog = this.getView().byId("settings");
      if (!settingsDialog) {
        const dialogFragment = await Fragment.load({
          id: this.getView().getId(),
          name: "uxc.integration.fragments.UserSettingsDialog",
          controller: this
        });
        // Add as dependent (expects UI5Element)
        this.getView().addDependent(dialogFragment);
        settingsDialog = dialogFragment;
      }
      if (!this.userMenuListenerAdded) {
        userMenu.addEventListener("item-click", event => {
          const customEvent = event;
          const item = customEvent.detail?.item.text;
          const settingsDialog = this.getView().byId("userSettingsDialog--settings");
          switch (item) {
            case "Setting":
              // @ts-expect-error: getOpen is not in the type but exists at runtime
              if (!settingsDialog.getOpen()) {
                // @ts-expect-error: setOpen is not in the type but exists at runtime
                settingsDialog.setOpen(true);
              }
          }
        });
        this.userMenuListenerAdded = true;
      }
    },
    /**
     * Called when an item is selected in the side navigation.
     */
    onItemSelect: function _onItemSelect(event) {
      const item = event.getParameter("item");
      const key = item.getKey();
      const text = item.getText();

      // Update the title
      const contentTitle = this.getView().byId("contentTitle");
      contentTitle.setText(text);

      // Set the selectedKey to avoid the warning
      const sideNav = this.getView().byId("sideNavigation");
      sideNav.setSelectedKey(key);

      // if in popover - close the popover
      const popover = this.getView().byId("sideNavPopover");
      if (popover?.isOpen()) {
        popover.close();
      }
      this.closeSideNavigationOnPhone();
    },
    /**
     * Called when the user clicks on quick create button.
     */
    onQuickCreate: function _onQuickCreate() {
      const dialogContent = new Text({
        text: "Create..."
      });
      dialogContent.addStyleClass("sapUiSmallMargin");
      const dialog = new Dialog({
        title: "Quick Create",
        content: dialogContent,
        beginButton: new Button({
          text: "Create",
          type: "Emphasized",
          press: () => {
            dialog.close();
          }
        }),
        endButton: new Button({
          text: "Close",
          press: () => {
            dialog.close();
          }
        }),
        afterClose: () => {
          dialog.destroy();
        }
      });
      this.getView().addDependent(dialog);
      dialog.open();
    }
  });
  return App;
});
//# sourceMappingURL=App-dbg.controller.js.map
