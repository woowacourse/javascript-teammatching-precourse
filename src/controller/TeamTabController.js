import { $ } from '../utils/dom.js';
import { ID, INDEX, ERROR_MSG } from '../utils/constants.js';
import { template as teamTabTemplate } from '../view/templates/team-tab.js';
import {
  getLocalStorage,
  getLocalStorage__Choice,
  setLocalStorage,
} from '../utils/commonLogics.js';

// - 코스와 미션을 선택해 확인을 눌러 매칭 시작화면을 그린다.

export default class TeamTabController {
  constructor() {
    this.feCrews;
    this.beCrews;

    this.isMatchEnd = false;
    // this.courseChoice = '0';
    // this.missionChoice = '0';
    this.courseChoice;
    this.missionChoice;
    this.matchResult;
    this.init();
  }
  init = () => {
    // load
    this.feCrews = getLocalStorage('feCrews');
    this.beCrews = getLocalStorage('beCrews');

    this.isMatchEnd = getLocalStorage('isMatchEnd');
    this.courseChoice = getLocalStorage__Choice('courseChoice');
    this.missionChoice = getLocalStorage__Choice('missionChoice');
    this.matchResult = getLocalStorage('matchResult');

    // paint
    $(`#${ID.MAIN}`).innerHTML = teamTabTemplate;
    // this.load
    this.paintCrewsByChoice(this.courseChoice);

    $(`#${ID.MATCH_FORM}`).addEventListener('submit', this.handleMatchSubmit);
    $(`#${ID.CHOICE_FORM}`).addEventListener('submit', this.handleChoiceSubmit);
  };

  paintCrewsByChoice = (courseChoice) => {
    $(`#${ID.CREW_LIST}`).innerHTML = '';
    if (courseChoice === 'frontend') {
      this.paintCrews(this.feCrews);
    }
    if (courseChoice === 'backend') {
      this.paintCrews(this.beCrews);
    }
  };

  handleChoiceSubmit = (e) => {
    e.preventDefault();
    this.$courseChoice = $(`#${ID.COURSE_SELECT}`);
    this.$missionChoice = $(`#${ID.MISSION_SELECT}`);
    // console.log(this.$courseChoice.value, this.$missionChoice.value);

    this.paintCrewsByChoice(this.$courseChoice.value);

    // update
    this.courseChoice = this.$courseChoice.value;
    this.missionChoice = this.$missionChoice.value;
    setLocalStorage('courseChoice', this.$courseChoice.value);
    setLocalStorage('missionChoice', this.$missionChoice.value);
  };

  handleMatchSubmit = (e) => {
    e.preventDefault();
    this.$countInput = $(`#${ID.TEAM_MEMBER_COUNT_INPUT}`);
    const slicedTeams = this.doTheMatch(
      this.courseChoice,
      parseInt(this.$countInput.value)
    );

    this.paintSlicedTeams(slicedTeams);
  };

  paintSlicedTeams = (slicedTeams) => {
    console.log(slicedTeams);
    slicedTeams.map((team) => {
      const names = team.map((crew) => crew.name).join();
      const $li = document.createElement('li');
      $li.innerHTML = names;
      $(`#${ID.TEAM_MATCH_RESULT}`).append($li);
    });
  };

  doTheMatch = (courseChoice, countInput) => {
    let team;
    let input = countInput;

    if (courseChoice === 'frontend') {
      team = this.feCrews;
    }
    if (courseChoice === 'backend') {
      team = this.beCrews;
    }

    while (team.length % input < countInput) {
      input += 1;
    }
    const indices = team.map((crew) => team.indexOf(crew));
    const shuffledIndices = MissionUtils.Random.shuffle(indices);

    let teams = [];
    let i,
      j,
      temp,
      chunk = input;

    for (i = 0, j = team.length; i < j; i += chunk) {
      temp = shuffledIndices.slice(i, i + chunk);
      teams.push(temp);
    }

    let slicedTeams = [];
    teams.map((idxes) => {
      let temp = [];
      idxes.map((idx) => {
        team.map((crew) => {
          if (team.indexOf(crew) === idx) {
            temp.push(crew);
          }
        });
      });
      slicedTeams.push(temp);
    });
    return slicedTeams;
  };

  paintCrews = (crews) => {
    crews.map((crew) => this.paintCrew(crew.name));
  };
  paintCrew = (name) => {
    const $li = document.createElement('li');
    $li.innerHTML = name;
    $(`#${ID.CREW_LIST}`).appendChild($li);
  };
}
