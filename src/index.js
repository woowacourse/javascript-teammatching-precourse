import TeamMatchingController from './controller/index.js';
import CrewManageController from './controller/CrewManage.js';

class TeamMatchingBoard {
  constructor() {
    this.$teamMatchingController = new TeamMatchingController();
    this.$crewManageController = new CrewManageController();
  }
}

new TeamMatchingBoard();
