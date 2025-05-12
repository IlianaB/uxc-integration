/* eslint-disable @typescript-eslint/no-unsafe-call */

import BaseController from "./BaseController";
import Device from "sap/ui/Device";
import XMLView from "sap/ui/core/mvc/XMLView";
import Fragment from "sap/ui/core/Fragment";
import Title from "sap/m/Title";
import Text from "sap/m/Text";
import Dialog from "sap/m/Dialog";
import Popover from "sap/m/Popover";
import Button from "sap/m/Button";
import ToolPage from "sap/tnt/ToolPage";
import SideNavigation, { SideNavigation$ItemSelectEvent } from "sap/tnt/SideNavigation";
import NavigationListItem from "sap/tnt/NavigationListItem";

import WebCPopover from "@ui5/webcomponents/dist/Popover";
import { ShellBar$NotificationsClickEvent } from "sap/ui/webc/fiori/ShellBar";

import WebCUserMenu, { UserMenuItemClickEventDetail } from "@ui5/webcomponents-fiori/dist/UserMenu";
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

		let settingsDialog = this.getView().byId("settings") as Dialog;
		if (!settingsDialog) {
			settingsDialog = await Fragment.load({
				id: this.getView().getId(),
				name: "uxc.integration.fragments.UserSettingsDialog",
				controller: this
			}) as Dialog;

			this.getView().addDependent(settingsDialog);
		}

		userMenu.addEventListener("item-click", (event: Event) => {
			const customEvent = event as CustomEvent<UserMenuItemClickEventDetail>;
			const item = customEvent.detail?.item.text;
			const settingsDialog = this.getView().byId("userSettingsDialog--settings") as unknown as WebCUserSettingsDialog;

			switch (item) {
				case "Setting":
					// @ts-expect-error: getOpen is not in the type but exists at runtime
					if (!settingsDialog.getOpen()) {
						// @ts-expect-error: setOpen is not in the type but exists at runtime
						settingsDialog.setOpen(true);
					}
			}
		});
	}

	onItemSelect(event: SideNavigation$ItemSelectEvent): void {
		const item = event.getParameter("item") as NavigationListItem;
		const text = item.getText();

		const contentTitle = this.getView().byId("contentTitle") as Title;
		contentTitle.setText(text);

		// if in popover - close the popover
		const popover = this.getView().byId("sideNavPopover") as Popover;
		if (popover?.isOpen()) {
			popover.close();
		}
	}

	onQuickCreate(): void {
		const dialogContent = new Text({ text: "Create..." });
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
}
