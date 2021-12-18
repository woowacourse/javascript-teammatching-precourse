import TeamMatchingModel from '../model/TeamMachingModel.js';
import { ID } from '../utils/constants.js';
import View from '../view/View.js';
import CrewManageController from './CrewManageController.js';
import TeamManageController from './TeamManageController.js';

class TeamMatchingController {
  constructor() {
    this.model = new TeamMatchingModel();
    this.view = new View();
    this.currentTabMenu = this.model.getCurrentTabMenu();

    this.crewManageController = new CrewManageController(this.model, this.view);
    this.teamManageController = new TeamManageController(this.model, this.view);
    this.init();
  }

  init() {
    this.initDOM();
    this.triggerTabMenuClickEvent();

    if (this.currentTabMenu === ID.CREW_TAB) {
      this.crewManageController.showScreen();
      return;
    }
    if (this.currentTabMenu === ID.TEAM_TAB) {
      this.teamManageController.showScreen();
      return;
    }
  }

  initDOM() {
    this.$crew_menu = document.getElementById(ID.CREW_TAB);
    this.$team_menu = document.getElementById(ID.TEAM_TAB);
  }

  triggerTabMenuClickEvent() {
    this.$crew_menu.addEventListener('click', () => {
      this.crewManageController.showScreen(ID.CREW_TAB);
    });

    this.$team_menu.addEventListener('click', () => {
      this.teamManageController.showScreen(ID.TEAM_TAB);
    });
  }
}

export default TeamMatchingController;
