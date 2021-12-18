import { CrewController } from './controller/CrewController.js';
import { TeamController } from './controller/TeamController.js';
import { MatchingModel } from './model/MatchingModel.js';
import { CoreView } from './view/CoreView.js';

class App {
  constructor() {
    const model = new MatchingModel();
    this.coreView = new CoreView();

    const crewController = new CrewController(model, this.coreView);
    const teamController = new TeamController(model, this.coreView);
    this.controllerArray = [crewController, teamController];
    this.triggerAllEvents();
  }

  triggerAllEvents() {
    this.controllerArray.map((controller) => controller.triggerEvent());
  }
}

const app = new App();
