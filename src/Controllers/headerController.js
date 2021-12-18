import { $ } from '../Utils/common.js';
import { ID } from '../Utils/constants.js';
import HeaderView from '../Views/headerView.js';
import CrewManageController from './crewManageController.js';

export default class HeaderController {
  constructor() {
    this.headerView = new HeaderView();
    this.crewManageController = new CrewManageController();
    this.headerView.render();
    this.configureButtons();
  }

  configureButtons() {
    $(`#${ID.CREW_TAB}`).addEventListener('click', this.onClickCrewTab);
    $(`#${ID.TEAM_TAB}`).addEventListener('click', this.onClickTeamTab);
  }

  onClickCrewTab = () => {
    this.crewManageController.render();
  };

  onClickTeamTab = () => {};
}
