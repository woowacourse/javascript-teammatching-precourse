import TeamMathController from "../controller/TeamMatchController.js";
import { teamMatchFormTemplete, teamMatchTemplete } from "../util/dom/teamMatchTemplete.js";

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
      this.renderTeamMatcherFrom();
    })
  }

  renderTeamMatcherFrom() {
    const teamMatcherFormField = document.querySelector('#taem-matcher-form');
    teamMatcherFormField.innerHTML = teamMatchFormTemplete(this.locaTeamMatchOption);
    
  }




}