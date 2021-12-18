import { DOM } from '../../lib/constants.js';
import { $, isValidCount } from '../../lib/utils.js';

class TeamMatchingController {
  constructor({ view, teamModel, crewModel, inputsModel }) {
    this.$view = view;
    this.$inputsModel = inputsModel;
    this.$crewModel = crewModel;
    this.$teamModel = teamModel;
    this.bindEventHandler();
  }

  bindEventHandler() {
    $(DOM.SHOW_TEAM_MATCHER_FORM_ID).addEventListener(
      'input',
      this.onInputShowTeamMatcherForm.bind(this)
    );
    $(DOM.SHOW_TEAM_MATCHER_FORM_ID).addEventListener(
      'submit',
      this.onSubmitShowTeamMatcherForm.bind(this)
    );
  }

  onInputShowTeamMatcherForm(e) {
    const {
      target: { id, value },
    } = e;
    this.mutateModelWithNewSelectInput(id, value);
  }

  mutateModelWithNewSelectInput(id, value) {
    this.$inputsModel.setInputByIdAttribute(id, value);
  }

  onSubmitShowTeamMatcherForm(e) {
    e.preventDefault();
    const { course, mission } = this.$inputsModel.getCourseAndMissionInput();
    const team = this.$teamModel.getTeam(course, mission);
    if (team) {
      this.renderMatchedTeam(course, mission, team);
      this.bindMatchedTeamHandler();
    }

    if (team === null) {
      this.renderViewNotMatchedTeam(course, mission);
      this.bindNotMatchedTeamHandler();
    }
  }

  renderViewMatchedTeam(course, mission, team) {
    this.$view.renderMatchedTeam(course, mission, team);
  }

  renderViewNotMatchedTeam(course, mission) {
    const crewList = this.$crewModel.getAllCrewList();
    this.$view.renderNotMatchedTeam(course, mission, [...crewList]);
  }

  bindMatchedTeamHandler() {
    $(DOM.REMATCH_TEAM_BUTTON).addEventListener('click', this.onClickRematchButton.bind(this));
  }

  onClickRematchButton() {}

  bindNotMatchedTeamHandler() {
    $(DOM.TEAM_MEMBER_COUNT_FORM_ID).addEventListener(
      'input',
      this.onInputTeamMemberCountForm.bind(this)
    );
    $(DOM.TEAM_MEMBER_COUNT_FORM_ID).addEventListener(
      'submit',
      this.onSubmitTeamMemberCountForm.bind(this)
    );
  }

  onInputTeamMemberCountForm(e) {
    const {
      target: { value, id },
    } = e;
    this.$inputsModel.setInputByIdAttribute(id, value);
  }

  onSubmitTeamMemberCountForm(e) {
    e.preventDefault();
    const crewList = this.$crewModel.getAllCrewList();
    const { count } = this.$inputsModel.getTeamMemberCountInput();
    try {
      if (isValidCount(Number(count))) {
        const team = this.$teamModel.makeTeam(crewList, Number(count));
        this.mutateModelWithNewTeam(team);
      }
    } catch (error) {
      alert(error);
    }

    // 섞어서 팀으로 분배한다.
  }

  mutateModelWithNewTeam(team) {
    const { course, mission } = this.$inputsModel.getCourseAndMissionInput();
    this.$teamModel.setTeam(course, mission, team);
  }
}
export default TeamMatchingController;
