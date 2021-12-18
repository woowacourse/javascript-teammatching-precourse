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

export const createMain = () => `
	<main id="${SELECTOR.tabContentMain}"></main>
`;

export const createCourseSelectSection = () => `
	<section>
	<h3>크루를 관리할 코스를 선택해주세요</h3>
	<div>
		<input type="radio" name="course" value="frontend" />
		<label for="frontend">프론트엔드</label>
		<input type="radio" name="course" value="backend" />
		<label for="backend">백엔드</label>
	</div>
	</section>
`;

export const createCourseAndMissionSelectSection = () => `
	<section>
	<h3>팀 매칭을 관리할 코스, 미션을 선택하세요.</h3>
	<form>
		<select>
			<option>프론트엔드</option>
			<option>백엔드</option>
		</select>
		<select>
			<option>숫자야구게임</option>
		</select>
		<button>확인</button>
	</form>
	</section>
`;
