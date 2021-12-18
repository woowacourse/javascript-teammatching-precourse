import CrewManageView from '../Views/crewManageView.js';

export default class CrewManageController {
  constructor() {
    this.crewManageView = new CrewManageView();
  }

  render() {
    this.crewManageView.render();
  }
}
