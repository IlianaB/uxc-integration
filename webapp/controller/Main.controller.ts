import BaseController from "./BaseController";
import Device from "sap/ui/Device";
import XMLView from "sap/ui/core/mvc/XMLView";
import Fragment from "sap/ui/core/Fragment";
import ToolPage from "sap/tnt/ToolPage";
import SideNavigation from "sap/tnt/SideNavigation";
import Popover from "sap/m/Popover";

import WebCPopover from "@ui5/webcomponents/dist/Popover";
import { ShellBar$NotificationsClickEvent } from "sap/ui/webc/fiori/ShellBar";

import WebCUserMenu from "@ui5/webcomponents-fiori/dist/UserMenu";
import WebCUserSettingsDialog from "@ui5/webcomponents-fiori/dist/UserSettingsDialog";

// Icons
import "@ui5/webcomponents-icons/dist/menu2";
import "@ui5/webcomponents-icons/dist/sys-help";
import "@ui5/webcomponents-icons/dist/da";
import "@ui5/webcomponents-icons/dist/action-settings";
import "@ui5/webcomponents-icons/dist/official-service";
import "@ui5/webcomponents-icons/dist/message-information";
import "@ui5/webcomponents-icons/dist/palette";


/**
 * @namespace uxc.integration.controller
 */
export default class Main extends BaseController {
	useOverlayNav: boolean = false;

	onInit() {
		const params = new URLSearchParams(window.location.search);
		this.useOverlayNav = params.get("overlayNavigation") === "true";

		if (this.useOverlayNav) {
			const sideNav = this.getView().byId("sideNavigation") as SideNavigation;
			sideNav.setVisible(false)
		}
	}

	onMenuButtonClick(): void {
		if (!this.useOverlayNav) {
			const toolPage = this.getView().byId("toolPage") as ToolPage;
			toolPage.setSideExpanded(!toolPage.getSideExpanded());
		} else {
			const menuButton = this.getView().byId("toggleMenu").getDomRef() as HTMLElement;
			void this.openNavigationInOverlay(menuButton);
		}
	}

	async openNavigationInOverlay(menuButton: HTMLElement): Promise<void> {
		let popover = this.getView().byId("sideNavPopover") as Popover;
		if (!popover) {
			popover = await Fragment.load({
				id: this.getView().getId(),
				name: "uxc.integration.fragments.SideNavPopover",
				type: "XML",
				controller: this
			}) as Popover;

			this.getView().addDependent(popover);
			popover.setShowHeader(Device.system.phone);
		}

		if (popover.isOpen()) {
			popover.close();
		} else {
			popover.openBy(menuButton);
		}
	}

	onNotificationsClick(e: ShellBar$NotificationsClickEvent): void {
		const view = this.getView().byId("notificationsView") as XMLView;
		const popover = view.byId("notificationsPopover").getDomRef() as WebCPopover;

		e.preventDefault();
		popover.opener = e.getParameter("targetRef");
		popover.open = true;
	}

	async onProfileClick(): Promise<void> {
		const userMenu = this.getView().byId("userProfileMenu").getDomRef() as WebCUserMenu;
		userMenu.open = true;

		let settingsDialog = this.getView().byId("settings");
		if (!settingsDialog) {
			settingsDialog = await Fragment.load({
				id: this.getView().getId(),
				name: "uxc.integration.fragments.UserSettingsDialog",
				controller: this
			}) as unknown as WebCUserSettingsDialog;

			this.getView().addDependent(settingsDialog);
		}

		userMenu.addEventListener("item-click", async function (event) {
			const item = event?.detail.item.text;
			let settingsDialog = this.getView().byId("userSettingsDialog--settings") as WebCUserSettingsDialog;
			switch (item) {
				case "Setting":
					if (!settingsDialog.getOpen()) {
						settingsDialog.setOpen(true);
					}
			}
		}.bind(this));
	}
}
