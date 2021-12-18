import { $, $$ } from '../Utils/common.js';
import { CLASS, ID } from '../Utils/constants.js';
import LocalStorageUtils from '../Utils/localStorageUtils.js';
import ValidationUtils from '../Utils/validationUtils.js';
import TeamMatchView from '../Views/teamMatchView.js';

export default class TeamMatchController {
  constructor() {
    this.teamMatchView = new TeamMatchView();
  }

  render() {
    this.teamMatchView.render();
  }
}
