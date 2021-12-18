import { ID, LOCAL_DB } from '../../constants/index.js';
import { getLocalStorage } from '../../utils/localStorage.js';
import { $ } from '../../utils/selector.js';
import { crewLists } from '../../utils/template.js';
import { isValidCount } from '../../utils/valid.js';

class TeamManage {
  constructor($target, course, mission) {
    this.$target = $target;
    this.course = course;
    this.mission = mission;

    this.addTemplate();
    this.selectDom();
    this.addEvent();
  }

  addTemplate() {
    this.$target.innerHTML = `
    <h3>${this.course} ${this.mission} 미션의 팀 매칭</h3>
    <div>
      <div>
        <p>아직 매칭된 팀이 없습니다. 팀을 매칭하겠습니까?</p>
        <form>
          <label>1팀당 인원 수</label>
          <input id=${ID.TEAM_MEMBER_COUNT_INPUT} type="number" />
          <button id=${ID.MATCH_TEAM_BUTTON}>팀 매칭</button>
        </form>
      </div>
      <h4>크루 목록</h4>
      <ul id=${ID.TEAM_CREW_LISTS}>
        ${crewLists(this.course)} 
      </ul>
    </div>
    `;
  }

  selectDom() {
    this.$countInput = $(`#${ID.TEAM_MEMBER_COUNT_INPUT}`);
    this.$matchButton = $(`#${ID.MATCH_TEAM_BUTTON}`);
    this.$teamCrewList = $(`#${ID.TEAM_CREW_LISTS}`);
  }

  addEvent() {
    this.$matchButton.addEventListener('click', this.clickButton.bind(this));
  }

  clickButton(e) {
    e.preventDefault();

    const crewCount = this.$teamCrewList.childElementCount;
    const matchCount = Number(this.$countInput.value);

    if (!isValidCount(crewCount, matchCount)) {
      return;
    }

    const teamCountArray = this.getTeamCountArray(crewCount, matchCount);
    const teamShuffleArray = this.getTeamShuffleList(crewCount, teamCountArray);
    teamShuffleArray.forEach(arr => {
      console.log(this.getTeamName(arr));
    });
  }

  getTeamCountArray(crewCount, matchCount) {
    const arr = [];
    let crew = crewCount;
    while (crew > matchCount) {
      crew = crew - matchCount;
      arr.push(matchCount);
    }

    for (let i = 0; i < arr.length; i++) {
      if (crew === 0) break;
      arr[i] += 1;
      crew--;
    }

    return arr;
  }

  getTeamShuffleList(crewCount, teamCountArray) {
    const shuffleIndexArray = MissionUtils.Random.shuffle(
      Array.from({ length: crewCount }, (v, i) => i)
    );

    const matchResultArray = [];
    for (let i = 0; i < teamCountArray.length; i++) {
      matchResultArray.push(shuffleIndexArray.slice(0, teamCountArray[i]));
      shuffleIndexArray.splice(0, teamCountArray[i]);
    }

    return matchResultArray;
  }

  getTeamName(arr) {
    if (this.course === '프론트엔드') {
      let crews = getLocalStorage(LOCAL_DB.CREW_FRONT);
      const crewBlock = [];
      crews.forEach((crew, i) => {
        if (arr.includes(i)) {
          crewBlock.push(crew);
        }
      });

      return crewBlock;
    }

    if (this.course === '백엔드') {
      let crews = getLocalStorage(LOCAL_DB.CREW_BACK);
      const crewBlock = [];
      crews.forEach((crew, i) => {
        if (arr.includes(i)) {
          crewBlock.push(crew);
        }
      });

      return crewBlock;
    }
  }
}

export default TeamManage;
