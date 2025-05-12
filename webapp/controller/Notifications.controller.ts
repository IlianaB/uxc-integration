import BaseController from "./BaseController";
import NotificationList from "sap/m/NotificationList";
import IllustratedMessage from "sap/m/IllustratedMessage";

// Icons & Illustrations
import "@ui5/webcomponents-icons/dist/sort";
import "@ui5/webcomponents-icons/dist/action-settings";
import "@ui5/webcomponents-icons/dist/crm-sales";
import "@ui5/webcomponents-icons/dist/expense-report";
import "@ui5/webcomponents-fiori/dist/illustrations/NoNotifications";

/**
 * @namespace uxc.integration.controller
 */
export default class Notifications extends BaseController {
	public onClearAllNotifications(): void {
		const oView = this.getView();
		const oNotificationList = oView.byId("notificationsPopoverList") as NotificationList;
		const oEmptyMessage = oView.byId("emptyNotificationsMessage") as IllustratedMessage;

		// Hide the notifications list
		if (oNotificationList && oNotificationList.setVisible) {
			oNotificationList.setVisible(false);
		}

		// Show the empty message
		if (oEmptyMessage && oEmptyMessage.setVisible) {
			oEmptyMessage.setVisible(true);
		}
	}
}
