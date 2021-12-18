import View from '../view/view.js';
import CrewManage from './crewManage.js';
import TeamManage from './teamManage.js';
import Crews from '../model/crews.js';
import Validation from '../utils/validation.js';

export class Controller {
  constructor() {
    this.view = new View(this);
    this.valid = new Validation();
    this.crews = new Crews();
    this.crewManage = new CrewManage(this.view, this.crews, this.valid);
    this.teamManage = new TeamManage(this.crews, this.valid);
  }

  addCrew(name, isFrontend) {
    if (isFrontend) {
        this.crewManage.addFrontendCrew(name);
    } else {
        this.crewManage.addBackendCrew(name);
    }
  }

  showFrontendList() {
    this.crewManage.showFrontendList();
  }

  showBackendList() {
    this.crewManage.showBackendList();
  }

  deleteCrew(name, isFront) {
    if(isFront) {
      this.crewManage.deleteFrontendCrew(name);
    } else {
      this.crewManage.deleteBackendCrew(name);
    }
  }

  shuffleTeam(course, mission, groupNumber) {
    this.teamManage.shuffleTeam(course, mission, groupNumber);
  }
}
