import TeamManageTemplate from "./TeamManageTemplate.js";

export default class TeamManage {
  constructor() {
    this.template = TeamManageTemplate();
    this.mainScreen = document.createElement("main");
    this.mainScreen.innerHTML = this.template;
    document.getElementById("app").append(this.mainScreen);
  }

  tabSection() {
    // return document.getElementById("team-manage-main");
    return this.mainScreen;
  }
}
