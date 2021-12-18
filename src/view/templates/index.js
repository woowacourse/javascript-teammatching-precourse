import { SELECTOR } from '../../constants.js';

// 메인 앱 관련 템플릿들
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

// 크루 관리 탭 관련 템플릿들
export const createCourseSelectSection = () => `
	<section>
	<h3>크루를 관리할 코스를 선택해주세요</h3>
	<div id="${SELECTOR.courseSelectContainer}">
		<input id="${SELECTOR.frontendCourseRadioInputId}" type="radio" name="course" value="frontend" />
		<label for="frontend">프론트엔드</label>
		<input id="${SELECTOR.backendCourseRadioInputId}" type="radio" name="course" value="backend" />
		<label for="backend">백엔드</label>
	</div>
	</section>
	<section id="${SELECTOR.crewManageFormContainer}"></section>
	<section id="${SELECTOR.crewTableContainer}"></section>
`;

export const createCrewCreateForm = course => `
  <section>
    <h3>${course} 크루 관리</h3>
    <form>
      <label>크루 이름</label>
      <input id="${SELECTOR.crewNameInputId}" type="text" />
      <button id="${SELECTOR.addCrewButttonId}">확인</button>
    </form>
  </section>
`;

export const createCrewTable = course => `
	<h3>${course} 크루 목록</h3>
	<table id="${SELECTOR.crewTableId}" border="1">
		<thead>
			<tr>
				<th></th>
				<th>크루</th>
				<th>관리</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>1</td>
				<td>준</td>
				<td>
					<button id="${SELECTOR.deleteCrewButttonId}">삭제</button>
				</td>
			</tr>
		</tbody>
	</table>
`;

// 팀 매칭 관리 탭 관련 템플릿들
export const createCourseAndMissionSelectSection = () => `
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
`;
