import { $ } from '../utils/dom.js';
import { ID, INDEX, ERROR_MSG } from '../utils/constants.js';
import { template as teamTabTemplate } from '../view/templates/team-tab.js';
import {
  getLocalStorage,
  getLocalStorage__Boolean,
  getLocalStorage__Choice,
  setLocalStorage,
} from '../utils/commonLogics.js';
import { clearInputs } from '../view/OutputView.js';

export default class TeamTabController {
  constructor() {
    this.feCrews;
    this.beCrews;

    this.isMatchEnd = false;
    this.courseChoice;
    this.missionChoice;
    this.matchResult;
    this.init();
  }
  init = () => {
    // load
    this.feCrews = getLocalStorage('feCrews');
    this.beCrews = getLocalStorage('beCrews');

    this.isMatchEnd = getLocalStorage__Boolean('isMatchEnd');
    this.courseChoice = getLocalStorage__Choice('courseChoice');
    this.missionChoice = getLocalStorage__Choice('missionChoice');
    this.matchResult = getLocalStorage('matchResult');

    // paint
    $(`#${ID.MAIN}`).innerHTML = teamTabTemplate;
    this.paintCrewsByChoice(this.courseChoice);

    if (this.isMatchEnd) {
      $(`#${ID.TEAM_MEMBER_COUNT_INPUT}`).disabled = true;
    }
    if (!this.isMatchEnd) {
      $(`#${ID.TEAM_MEMBER_COUNT_INPUT}`).disabled = false;
      $(`#${ID.MATCH_FORM}`).addEventListener('submit', this.handleMatchSubmit);
    }
    $(`#${ID.CHOICE_FORM}`).addEventListener('submit', this.handleChoiceSubmit);
    $(`#${ID.REMATCH_TEAM_BTN}`).addEventListener('click', this.handleRestart);
  };

  handleRestart = () => {
    this.isMatchEnd = true;
    $(`#${ID.TEAM_MEMBER_COUNT_INPUT}`).disabled = false;
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

    this.paintCrewsByChoice(this.$courseChoice.value);

    // update
    this.courseChoice = this.$courseChoice.value;
    this.missionChoice = this.$missionChoice.value;
    setLocalStorage('courseChoice', this.$courseChoice.value);
    setLocalStorage('missionChoice', this.$missionChoice.value);
  };

  handleMatchSubmit = (e) => {
    e.preventDefault();
    $(`#${ID.TEAM_MEMBER_COUNT_INPUT}`).disabled = true;
    this.isMatchEnd = true;

    this.$countInput = $(`#${ID.TEAM_MEMBER_COUNT_INPUT}`);

    if (this.$countInput < 1) {
      alert(ERROR_MSG.TEAM_TAB);
    } else {
      const slicedTeams = this.doTheMatch(
        this.courseChoice,
        parseInt(this.$countInput.value)
      );
      this.paintSlicedTeams(slicedTeams);
      clearInputs([this.$countInput]);
    }
  };

  paintSlicedTeams = (slicedTeams) => {
    $(`#${ID.TEAM_MATCH_RESULT}`).innerHTML = '';

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
