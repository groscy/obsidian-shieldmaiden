import {Plugin, ItemView, WorkspaceLeaf, IconName} from 'obsidian';

// Shieldmaiden plugin constants
const VIEW_TYPE_SHIELDMAIDEN = "shieldmaiden-view";

export default class ObsidianShieldMaiden extends Plugin {
	async onload() {

		// Register the custom view
		this.registerView(
			VIEW_TYPE_SHIELDMAIDEN,
			(leaf) => new ShieldmaidenView(leaf)
		);

		// This creates an icon in the left ribbon.
		const ribbonIconEl = this.addRibbonIcon('shield', 'Open Shieldmaiden', (evt: MouseEvent) => {
			// Called when the user clicks the icon.
			this.activateView();
		});
		// Perform additional things with the ribbon
		ribbonIconEl.addClass('shieldmaiden-ribbon-class');

		this.addStatusBarItem().addClass('shieldmaiden-ribbon');

		// This adds a command to open Shieldmaiden view
		this.addCommand({
			id: 'open-shieldmaiden-view',
			name: 'Open Shieldmaiden',
			callback: () => {
				this.activateView();
			}
		});

	}

	onunload() {

	}

	async activateView() {
		const {workspace} = this.app;

		let leaf: WorkspaceLeaf | null;
		const leaves = workspace.getLeavesOfType(VIEW_TYPE_SHIELDMAIDEN);

		if (leaves.length > 0) {
			// A leaf with our view already exists, use that
			leaf = leaves[0];
		} else {
			// Our view could not be found in the workspace, create a new leaf
			// in the right sidebar for it
			leaf = workspace.getRightLeaf(false);
			if (leaf) {
				await leaf.setViewState({type: VIEW_TYPE_SHIELDMAIDEN, active: true});
			}
		}

		// "Reveal" the leaf in case it is in a collapsed sidebar
		if (leaf) {
			await workspace.revealLeaf(leaf);
		}
	}
}

class ShieldmaidenView extends ItemView {
	constructor(leaf: WorkspaceLeaf) {
		super(leaf);
	}

	getViewType() {
		return VIEW_TYPE_SHIELDMAIDEN;
	}

	getIcon(): IconName {
		return 'shield';
	}

	getDisplayText() {
		return "Shieldmaiden";
	}

	async onOpen() {
		const container = this.containerEl.children[1];
		container.empty();
		container.createEl("div", {
			cls: "shieldmaiden-view",
			attr: {
				style: "height: 100%; width: 100%; overflow: hidden; border-radius: 7px; border: 1 solid #DDD;",
			}
		}, (div) => {
			div.createEl("iframe", {
				attr: {
					src: "https://shieldmaiden.app",
					style: "width: 100%; height: 100%; overflow: hidden;",
					scrolling: "no",
					sandbox: "allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox",
				}
			});
		});
	}

	async onClose() {
		// Nothing to clean up
	}
}

