import TeamMatchingController from './controller/index.js';
import CrewManageController from './controller/CrewManage.js';
import TeamMatchingManageController from './controller/TeamMatchingManage.js';

class TeamMatchingBoard {
  constructor() {
    this.$teamMatchingController = new TeamMatchingController();
    this.$crewManageController = new CrewManageController();
    this.$teamMatchingManageController = new TeamMatchingManageController();
  }
}

new TeamMatchingBoard();
