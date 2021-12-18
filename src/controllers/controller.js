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
    this.addEventsToCrewManage();
  }

  choiceTabTeam() {
    this.view.renderTeamMathcing();
  }

  addEventsToCrewManage() {
    document
      .getElementById(ID.CHOICE_CREW)
      .addEventListener('click', this.crewManage.bind(this));
  }

  crewManage = (e) => {
    if (e.target.id === ID.COURSE_CHOICE_FRONT) {
      this.view.crewShow('프론트엔드', ['포비', '준']);
      document
        .getElementById(ID.ADD_CREW_BUTTON)
        .addEventListener('click', this.addCrew.bind(this));
    }
    if (e.target.id === ID.COURSE_CHOCIE_BACK) {
      this.view.crewShow('백엔드', ['포비', '쿤']);
    }
  };

  addCrew = (e) => {
    e.preventDefault();
  };
}
