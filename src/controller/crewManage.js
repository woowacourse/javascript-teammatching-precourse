import { ERROR } from "../utils/constant.js";

export default class CrewManage{
  constructor(view, crews, valid) {
    this.view = view;
    this.crews = crews;
    this.valid = valid;
  }

  addFrontendCrew(name) {
    const isValid = this.valid.checkCrewName(name);
    if(isValid) {
      this.checkDuplication(this.crews.addFrontendCrew(name));
    } else {
      alert(ERROR.NAMEINPUT);
    }
    this.showFrontendList();
  }

  addBackendCrew(name){
    const isValid = this.valid.checkCrewName(name)
    if(isValid) {
      this.checkDuplication(this.crews.addBackendCrew(name));
    } else {
      alert(ERROR.NAMEINPUT);
    }
    this.showBackendList();
  }

  checkDuplication(isAdded) {
    if(!isAdded) {
      alert(ERROR.NAMEDUPLICATED);
    }
  }

  showFrontendList() {
    this.view.showCrewListAll(this.crews.frontend, true);
  }

  showBackendList() {
    this.view.showCrewListAll(this.crews.backend, false);
  }
  
  deleteFrontendCrew(name) {
    this.crews.deleteFrontendCrew(name);
    this.showFrontendList();
  }

  deleteBackendCrew(name) {
    this.crews.deleteBackendCrew(name);
    this.showBackendList();
  }
}
