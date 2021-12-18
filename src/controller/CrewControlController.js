import CrewControlModel from "../model/CrewControlModel.js";

export default class CrewControlController {
  constructor($app) {
    this.$app = $app;
    this.crewControlView = new CrewControlModel();
    this.crewControlField = document.createElement('div');
    this.render();
    this.selectCourse();
  }



}