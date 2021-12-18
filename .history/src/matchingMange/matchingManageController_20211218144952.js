import MatchingManageView from "./matchingManageView.js";

export default class matchingManageController {
  constructor() {
    this.view = new MatchingManageView();
    this.$container = document.getElementById("app");
  }

  init = () => {
    this.initPage();
  };

  initPage = () => {
    this.view.renderPage(this.$container);
  };
}
