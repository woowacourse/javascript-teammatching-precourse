import { $ } from '../utils/dom.js';
import { ID, INDEX, ERROR_MSG } from '../utils/constants.js';
import { template as teamTabTemplate } from '../view/templates/team-tab.js';
import {
  getLocalStorage,
  getLocalStorage__Coice,
  setLocalStorage,
} from '../utils/commonLogics.js';

export default class TeamTabController {
  constructor() {
    this.feCrews;
    this.beCrews;

    this.isMatchEnd = false;
    this.courseChoice = '0';
    this.missionChoice = '0';
    this.matchResult;
    this.init();
  }
  init = () => {
    // load
    this.feCrews = getLocalStorage('feCrews');
    this.beCrews = getLocalStorage('beCrews');

    this.isMatchEnd = getLocalStorage('isMatchEnd');
    this.courseChoice = getLocalStorage__Coice('courseChoice');
    this.missionChoice = getLocalStorage__Coice('missionChoice');
    this.matchResult = getLocalStorage('matchResult');

    // MissionUtils.Random.shuffle([1, 2, 3, 4, 5]);
    // paint
    $(`#${ID.MAIN}`).innerHTML = teamTabTemplate;
    // this.load

    this.courseChoice === '0'
      ? this.paintCrews(this.feCrews)
      : this.paintCrews(this.beCrews);

    $(`#${ID.MATCH_FORM}`).addEventListener('submit', this.handleMatchSubmit);
  };

  handleMatchSubmit = (e) => {
    e.preventDefault();
    this.$countInput = $(`#${ID.TEAM_MEMBER_COUNT_INPUT}`);
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
