import TeamMathController from "../controller/TeamMatchController.js";
import { teamMatchTemplete } from "../util/dom/teamMatchTemplete.js";

export default class TeamMatchView extends TeamMathController {

  render() {
    this.teamMatchField.innerHTML = teamMatchTemplete;
    this.$app.append(this.teamMatchField);
  }

}