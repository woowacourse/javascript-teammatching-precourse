import { TAP_BUTTON_ID, TEAM_TAP_ID } from '../constants.js';
import CrewModel from '../Model/CrewModel.js';
import TapView from './TapView.js';

export default class TeamTapView extends TapView {
  render() {
    this.template();
  }

  template() {
    this.app.innerHTML = `
    <header>
    	<h1>우테코 크루와 팀 매칭 관리 보드</h1>
    	<nav>
      	<ul>
        	<li>
          	<button id=${TAP_BUTTON_ID.crew}>크루 관리</button>
        	</li>
        	<li>
          	<button id=${TAP_BUTTON_ID.team}>팀 매칭 관리</button>
        	</li>
      	</ul>
    	</nav>
  	</header>
  	<main>
    	<section>
      	<h3>팀 매칭을 관리할 코스, 미션을 선택하세요.</h3>
      	<form>
        	<select id=${TEAM_TAP_ID.selectCourse}>
          	<option value="frontend">프론트엔드</option>
          	<option value="backend">백엔드</option>
        	</select>
        	<select id=${TEAM_TAP_ID.selectMission}>
          	<option value="baseball">숫자야구게임</option>
          	<option value="racingcar">자동차경주</option>
          	<option value="lotto">로또</option>
          	<option value="shopping-cart">장바구니</option>
          	<option value="payments">결제</option>
          	<option value="subway">지하철</option>
          	<option value="performance">성능개선</option>
          	<option value="deploy">배포</option>
        	</select>
        	<button id=${TEAM_TAP_ID.showTeamButton}>확인</button>
      	</form>
    	</section>
    	<section id="team-matching">
    	</section>
    	<section id="team-matched">
    	</section>
  	</main>
		`;
  }

  teamMatchingView(team) {
    const storage = new CrewModel().getStorage(team);
    document.getElementById('team-matching').innerHTML = `
		<h3>프론트엔드 숫자야구게임 미션의 팀 매칭</h3>
      <div>
        <div>
          <p>아직 매칭된 팀이 없습니다. 팀을 매칭하겠습니까?</p>
          <form>
            <label>1팀당 인원 수</label>
            <input type="number" id=${TEAM_TAP_ID.memberCount}/>
            <button id=${TEAM_TAP_ID.teamMatchButton}>팀 매칭</button>
          </form>
        </div>
        <h4>크루 목록</h4>
        <ul id=${TEAM_TAP_ID.teamResult}>
				${storage
          .map(({ index, name }) => {
            if (index) {
              return `
						<li>${name}</li>
						`;
            }
            return '';
          })
          .join('')}
        </ul>
      </div>`;
  }

  teamMatchedView() {
    document.getElementById('team-matched').innerHTML = `
		<h3>프론트엔드 숫자야구게임 조회</h3>
      <p>팀이 매칭되었습니다.</p>
      <ul>
        <li>준,포코</li>
      </ul>
      <p>
        팀을 재매칭 하시겠습니까?
        <button id=${TEAM_TAP_ID.rematchButton}>재매칭</button>
      </p>`;
  }
}
