import { CLASS, ID } from '../constants/selector.js';
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
    this.addEventChoiceMission();
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
    this.addEventsToRemoveButton();
  };

  addEventsToRemoveButton() {
    document
      .querySelectorAll(`.${CLASS.DELETE_CREW_BUTTON}`)
      .forEach((button) => {
        button.addEventListener('click', this.removeCrew);
      });
  }

  removeCrew = (e) => {
    const memberNameToRemove = e.target.value;
    const result = confirm('정말로 삭제하시겠습니까?');
    if (result) {
      this.model.removeMember(memberNameToRemove);
      this.view.updateCrewTable(this.field, this.model.getCrew(this.field));
      this.addEventsToRemoveButton();
    }
  };

  addEventChoiceMission = () => {
    document
      .getElementById(ID.TEAM_MATCHING_SEARCH_BUTTON)
      .addEventListener('click', this.searchTeam);
  };

  searchTeam = () => {
    this.matchingType = document.getElementById(
      ID.TEAM_MATCHING_COURSE_CHOICE
    ).value;
    this.matchingMission = document.getElementById(
      ID.TEAM_MATCHING_MISSION_CHOICE
    ).value;
    if (this.matchingType === 'frontend') {
      this.matchingType = ID.COURSE_CHOICE_FRONT;
    }
    if (this.matchingType === 'backend') {
      this.matchingType = ID.COURSE_CHOICE_BACK;
    }
    this.view.matchingStart(
      this.matchingType,
      this.matchingMission,
      this.model.getCrew(this.matchingType)
    );
    document
      .getElementById(ID.TEAM_MATCH_BUTTON)
      .addEventListener('click', this.startTeamMatching);
  };

  startTeamMatching = (e) => {
    e.preventDefault();
    const numberOfMember = document.getElementById(
      ID.TEAM_MEMEBER_COUNT_INPUT
    ).value;
    this.model.teamMatch(
      this.matchingType,
      this.matchingMission,
      numberOfMember
    );
    this.view.showMatching(
      this.matchingType,
      this.matchingMission,
      this.model.getTeams(this.matchingType, this.matchingMission)
    );
    this.addEventstoRematch();
  };

  addEventstoRematch() {
    document
      .getElementById(ID.REMATCH_BUTTON)
      .addEventListener('click', this.rematch);
  }

  rematch = () => {
    this.model.removeTeams(this.matchingType, this.matchingMission);
    this.view.matchingStart(
      this.matchingType,
      this.matchingMission,
      this.model.getCrew(this.matchingType)
    );
    document
      .getElementById(ID.TEAM_MATCH_BUTTON)
      .addEventListener('click', this.startTeamMatching);
  };
}
