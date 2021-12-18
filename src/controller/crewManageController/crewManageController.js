import CrewManageView from '../../view/crewManageView/crewManageView.js';

export default class CrewManageController {
  constructor(model) {
    this.model = model;
    this.view = new CrewManageView();
  }

  init() {
    this.view.init();
    // this.view.renderSelectCourse();
  }
}
