import TeamManageTemplate from "./TeamManageTemplate.js";

export default class TeamManage {
  constructor() {
    this.template = TeamManageTemplate();
  }

  tabSection() {
    document.getElementById("app").innerHTML += this.template;
    return document.getElementById("team-manage-main");
  }
}
