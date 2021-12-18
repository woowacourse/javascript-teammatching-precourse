import { ID } from '../constants/selector.js';

export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;

    this.addEvents();
  }

  addEvents() {
    document
      .getElementById(ID.TAB_CREW)
      .addEventListener('click', this.choiceTabCrew.bind(this));
    document
      .getElementById(ID.TAB_TEAM)
      .addEventListener('click', this.choiceTabTeam.bind(this));
  }

  choiceTabCrew() {
    this.view.renderCrewManage();
  }

  choiceTabTeam() {
    console.log('클릭');
    this.view.renderTeamMathcing();
  }
}
