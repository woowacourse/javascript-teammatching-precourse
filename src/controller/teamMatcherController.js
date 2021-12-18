import TabMenuController from "./tabMenuController.js";

export default class TeamMatcherController {
  constructor() {
    this.init();
  }

  init() {
    this.tabMenu = new TabMenuController();
  }
}
