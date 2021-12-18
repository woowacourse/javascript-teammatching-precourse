import CrewControlModel from "../model/CrewControlModel.js";

export default class CrewControlController {
  constructor($app) {
    this.$app = $app;
    this.crewControlView = new CrewControlModel();
    this.crewControlField = document.createElement('div');
    this.render();
    this.selectCourse();
  }

  setLocalCrewName() {
    this.crewControlView.toLocalCrewName(this.course, this.crewName);
  }

  getLocalFrontCrew() {
    this.frontCrew = this.crewControlView.fromLocalFrontCrew();
  }

  getLocalBackCrew() {
    this.backCrew = this.crewControlView.fromLocalBackCrew();
  }

  setDeleteCrew() {
    this.crewControlView.handleDeleteCrew(this.course, this.deleteCrewIndex);
  }

}