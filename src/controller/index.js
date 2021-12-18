import TeamMatchingModel from '../model/TeamMachingModel.js';
import View from '../view/View.js';

class TeamMatchingController {
  constructor() {
    this.view = new View();
    this.model = new TeamMatchingModel();
  }
}

export default TeamMatchingController;
