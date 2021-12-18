import { ID } from '../constants/selector.js';
import { validateName } from '../utils/validate.js';

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
      this.field = ID.COURSE_CHOICE_FRONT;
      this.view.crewShow(this.field, this.model.getCrew(this.field));
      document
        .getElementById(ID.ADD_CREW_BUTTON)
        .addEventListener('click', this.addCrew);
    }
    if (e.target.id === ID.COURSE_CHOICE_BACK) {
      this.field = ID.COURSE_CHOICE_BACK;
      this.view.crewShow(this.field, this.model.getCrew(this.field));
      document
        .getElementById(ID.ADD_CREW_BUTTON)
        .addEventListener('click', this.addCrew);
    }
  };

  addCrew = (e) => {
    e.preventDefault();
    const member = document.getElementById(ID.CREW_NAME_INPUT).value;
    const error = validateName(member, this.model.names);
    if (error) {
      return this.view.reportError(error);
    }
    this.model.addMember(this.field, member);
    this.view.updateCrewTable(this.field, this.model.getCrew(this.field));
  };
}
