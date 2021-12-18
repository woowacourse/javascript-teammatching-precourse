import MatchingManageView from "./matchingManageView.js";

export default class MatchingManage {
  constructor() {
    this.view = new MatchingManageView();
    this.$container = document.getElementById("app");
  }

  init = () => {};

  initPage = () => {
    this.view;
  };
}
