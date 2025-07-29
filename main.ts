import {Plugin, ItemView, WorkspaceLeaf, IconName} from 'obsidian';

// Shieldmaiden plugin constants
const VIEW_TYPE_SHIELDMAIDEN = "shieldmaiden-view";

export default class ObsidianShieldMaiden extends Plugin {
	async onload() {

		this.registerView(
			VIEW_TYPE_SHIELDMAIDEN,
			(leaf) => new ShieldmaidenView(leaf)
		);

		const ribbonIconEl = this.addRibbonIcon('shield', 'Open Shieldmaiden', (evt: MouseEvent) => {
			this.activateView();
		});

		ribbonIconEl.addClass('shieldmaiden-ribbon-class');

		this.addStatusBarItem().addClass('shieldmaiden-ribbon');

		this.addCommand({
			id: 'open-shieldmaiden-view',
			name: 'Open in Sidebar',
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
			leaf = leaves[0];
		} else {
			leaf = workspace.getRightLeaf(false);
			if (leaf) {
				await leaf.setViewState({type: VIEW_TYPE_SHIELDMAIDEN, active: true});
			}
		}

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

