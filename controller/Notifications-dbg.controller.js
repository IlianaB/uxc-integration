sap.ui.define(["uxc/integration/controller/BaseController", "uxc/integration/thirdparty/@ui5/webcomponents-icons/dist/sort", "uxc/integration/thirdparty/@ui5/webcomponents-icons/dist/action-settings", "uxc/integration/thirdparty/@ui5/webcomponents-icons/dist/crm-sales", "uxc/integration/thirdparty/@ui5/webcomponents-icons/dist/expense-report", "uxc/integration/thirdparty/@ui5/webcomponents-fiori/dist/illustrations/NoNotifications"], function (__BaseController, ___ui5_webcomponents_icons_dist_sort, ___ui5_webcomponents_icons_dist_action_settings, ___ui5_webcomponents_icons_dist_crm_sales, ___ui5_webcomponents_icons_dist_expense_report, ___ui5_webcomponents_fiori_dist_illustrations_NoNotifications) {
  "use strict";

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  /* eslint-disable @typescript-eslint/no-unsafe-call */
  const BaseController = _interopRequireDefault(__BaseController); // UI5 Web Components
  /**
   * @namespace uxc.integration.controller
   */
  const Notifications = BaseController.extend("uxc.integration.controller.Notifications", {
    onClearAllNotifications: function _onClearAllNotifications() {
      const oView = this.getView();
      const oNotificationList = oView.byId("notificationsPopoverList");
      const oEmptyMessage = oView.byId("emptyNotificationsMessage");

      // @ts-expect-error: WebCFNotificationList does not have a setVisible method
      if (oNotificationList && oNotificationList.setVisible) {
        // @ts-expect-error: WebCFNotificationList does not have a setVisible method
        oNotificationList.setVisible(false);
      }

      // @ts-expect-error: WebCFIllustratedMessage does not have a setVisible method
      if (oEmptyMessage && oEmptyMessage.setVisible) {
        // @ts-expect-error: WebCFIllustratedMessage does not have a setVisible method
        oEmptyMessage.setVisible(true);
      }
      const oAppViewModel = this.getView().getModel("appView");
      if (oAppViewModel) {
        oAppViewModel.setProperty("/notificationsCount", 0);
      }
    }
  });
  return Notifications;
});
//# sourceMappingURL=Notifications-dbg.controller.js.map
