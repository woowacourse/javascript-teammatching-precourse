import TeamMatcherController from './controller/teamMatcherController.js';

class App {
  constructor() {
    this.init();
  }

  init() {
    new TeamMatcherController();
  }
}

new App();
