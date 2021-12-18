import { KEY_TAB_CREW, KEY_TAB_TEAM, ACTION_ONCLICK } from './const.js';
import { TEMPLATE_TEAM, TEMPLATE_CREW } from './components/template/index.js';
import setVisibility from './dom/utils/setVisibility.js';

export default class TeamMathcing {
	constructor() {
		this.app = document.getElementById('app');
		this.app.insertAdjacentHTML('beforeend', this.initNav());
		this.app.insertAdjacentHTML('beforeend', this.initPanel());

		this.panel = document.getElementsByTagName('main');
		[...this.panel].forEach((content, i) => setVisibility(content, i === 0));

		this.app.onclick = this.onClick.bind(this);
	}

	initNav() {
		return `
		<header>
			<h1>우테코 크루와 팀 매칭 관리 보드</h1>
			<nav>
				<ul>
					<li>
						<button id="${KEY_TAB_CREW}-id" data-action="${ACTION_ONCLICK}" data-key="${KEY_TAB_CREW}">크루 관리</button>
					</li>
					<li>
						<button id="${KEY_TAB_TEAM}-id" data-action="${ACTION_ONCLICK}" data-key="${KEY_TAB_TEAM}">팀 매칭 관리</button>
					</li>
				</ul>
			</nav>
  	</header>
		`;
	}

	initPanel() {
		return `
			${TEMPLATE_CREW}
			${TEMPLATE_TEAM}
		`;
	}

	[ACTION_ONCLICK](e, key) {
		[...this.panel].forEach((content) =>
			setVisibility(content, content.dataset.key === key)
		);
	}

	onClick(event) {
		const { action, key } = event.target.dataset;

		if (action && key) this[action](event, key);
	}

	render() {
		return '<div>TEST</div>';
	}
}

new TeamMathcing();
