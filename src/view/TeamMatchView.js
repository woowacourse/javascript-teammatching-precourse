import TeamMathController from "../controller/TeamMatchController.js";
import { crewListTemplete, teamMatchFormTemplete, teamMatchTemplete } from "../util/dom/teamMatchTemplete.js";

export default class TeamMatchView extends TeamMathController {

  render() {
    this.teamMatchField.innerHTML = teamMatchTemplete;
    this.$app.append(this.teamMatchField);
  }


  teamMatchOption() {
    const courseSelect = this.teamMatchField.querySelector('#course-select');
    const missionSelect = this.teamMatchField.querySelector('#mission-select');
    this.teamMatchField.querySelector('#show-team-matcher-button').addEventListener('click', (e) => {
      e.preventDefault();
      this.course = courseSelect.value;
      this.mission = missionSelect.value;
      this.setTeamMatchOption();
      this.getTeamMatchOption();
      this.renderTeamMatcherFrom();
    })
  }

  renderTeamMatcherFrom() {
    const teamMatcherFormField = this.teamMatchField.querySelector('#taem-matcher-form');
    teamMatcherFormField.innerHTML = teamMatchFormTemplete(this.locaTeamMatchOption);
    this.renderCrewList();
    this.teamPersonCount();
  }

  renderCrewList() {
    const crewListField = this.teamMatchField.querySelector('#crew-list');
    const divFragment = document.createElement('ul');
    this.crewListTemplete = this.localCrewList.map(crew  => crewListTemplete(crew)).join('');
    divFragment.innerHTML = this.crewListTemplete;
    crewListField.append(divFragment);
  }

  teamPersonCount() {
    this.teamMatchField.querySelector('#match-team-button').addEventListener('click', (e) => {
      e.preventDefault();
      this.personCount = e.target.previousSibling.previousSibling.value;
      this.setMatchMission();
    })
  }


}