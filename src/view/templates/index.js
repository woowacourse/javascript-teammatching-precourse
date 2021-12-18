import { SELECTOR } from '../../constants.js';

export const createBoardHeader = () => `
	<header>
	<h1>우테코 크루와 팀 매칭 관리 보드</h1>
	<nav>
		<ul>
			<li>
				<button id="${SELECTOR.crewTabButtonId}">크루 관리</button>
			</li>
			<li>
				<button id="${SELECTOR.teamTabButtonId}">팀 매칭 관리</button>
			</li>
		</ul>
	</nav>
	</header>
`;
