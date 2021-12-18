import TeamMatchingController from './controller/index.js';

class TeamMatchingBoard {
  constructor() {
    this.$teamMatchingController = new TeamMatchingController();
  }
}

new TeamMatchingBoard();
