import setVisibility from '../../dom/utils/setVisibility.js';

export default class Panel {
	constructor(panel) {
		this.panel = panel;
	}

	getPanel() {
		return this.panel;
	}

	setVisibility(visible) {
		setVisibility(this.panel, visible);
	}
}
