import BaseController from "./BaseController";
import Device from "sap/ui/Device";
import XMLView from "sap/ui/core/mvc/XMLView";
import Fragment from "sap/ui/core/Fragment";
import ToolPage from "sap/tnt/ToolPage";
import SideNavigation from "sap/tnt/SideNavigation";
import Popover from "sap/m/Popover";
import WebCPopover from "@ui5/webcomponents/dist/Popover";
import { ShellBar$NotificationsClickEvent } from "sap/ui/webc/fiori/ShellBar";

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
}
