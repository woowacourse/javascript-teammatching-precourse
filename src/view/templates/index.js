import { SELECTOR, OPTION } from '../../constants.js';

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

export const createCrewTableBodyWithData = crewMembers => `
	${crewMembers
    .map(
      (crewMember, index) => `
		<tr>
			<td>${index + 1}</td>
			<td>${crewMember.name}</td>
			<td>
				<button id="${SELECTOR.deleteCrewButttonId}">삭제</button>
			</td>
		</tr>
		`,
    )
    .join('')}
`;

export const createCrewTable = (course, crewMembers) => `
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
			${createCrewTableBodyWithData(crewMembers)}
		</tbody>
	</table>
`;

// 팀 매칭 관리 탭 관련 템플릿들
export const createCourseAndMissionSelectSection = () => `
	</section>
		<h3>팀 매칭을 관리할 코스, 미션을 선택하세요.</h3>
		<form>
			<select id="${SELECTOR.courseSelectId}">
				<option value="${OPTION.frontend}">프론트엔드</option>
				<option value="${OPTION.backend}">백엔드</option>
			</select>
			<select id="${SELECTOR.missionSelectId}">
				<option value="${OPTION.baseball}">숫자야구게임</option>
				<option value="${OPTION.racingcar}">자동차경주</option>
				<option value="${OPTION.lotto}">로또</option>
				<option value="${OPTION.shoppingCart}">장바구니</option>
				<option value="${OPTION.payments}">결제</option>
				<option value="${OPTION.subway}">지하철노선도</option>
				<option value="${OPTION.performance}">성능개선</option>
				<option value="${OPTION.deploy}">배포</option>
			</select>
			<button id="${SELECTOR.showTeamMatcherButtonId}">확인</button>
		</form>
	</section>
	<section id="${SELECTOR.teamMatchingContainer}"></section>
`;

const createListItemWithCrewMembers = crewMembers => `
	${crewMembers
    .map(
      member => `
		<li>${member.name}</li>
	`,
    )
    .join('')}
`;

export const createTeamMemberCountForm = (course, mission, crewMembers) => `
	<h3>${course} ${mission} 미션의 팀 매칭</h3>
	<div>
		<div>
			<p>아직 매칭된 팀이 없습니다. 팀을 매칭하겠습니까?</p>
			<form>
				<label>1팀당 인원 수</label>
				<input id="${SELECTOR.teamMemberCountInputId}" type="number" />
				<button id="${SELECTOR.matchTeamButtonId}">팀 매칭</button>
			</form>
		</div>
		<h4>크루 목록</h4>
		<ul>
			${createListItemWithCrewMembers(crewMembers)}
		</ul>
	</div>
`;

const createMatchingResults = matchResults => `
	${matchResults.map(
    result => `
			<li>${result.map(member => {
        if (!member) return '';
        return member.name;
      })}</li>
		`,
  )}
`;

export const createTeamMatchingResult = (course, mission, matchResults) => `
	<h3>${course} ${mission} 조회</h3>
	<p>팀이 매칭되었습니다.</p>
	<ul id="${SELECTOR.teamMatchResultUlId}">
		${createMatchingResults(matchResults)}
	</ul>
	<p>
		팀을 재매칭 하시겠습니까?
		<button id="${SELECTOR.rematchTeamButton}">재매칭</button>
	</p>
`;
