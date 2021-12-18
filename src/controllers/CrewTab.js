import CrewTabView from '../views/CrewTabView.js';

export default class CrewTab {
  constructor() {
    this.view = new CrewTabView();
  }

  initialize() {
    this.view.initialRender();
  }
}
