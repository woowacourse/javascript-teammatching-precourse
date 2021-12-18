import { CrewController } from './controller/CrewController';
import { TeamController } from './controller/TeamController';

class App {
  constructor() {
    const model = new VendingMachineModel();
    this.coreView = new CoreView();

    const crewController = new CrewController(model, this.coreView);
    const teamController = new TeamController(model, this.coreView);
  }
}

const app = new App();
