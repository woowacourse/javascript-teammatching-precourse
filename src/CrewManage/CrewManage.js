import CrewManageTemplate from "./CrewManageTemplate.js";

export default class CrewManage {
  constructor() {
    this.template = CrewManageTemplate();
  }

  tabSection() {
    document.getElementById("app").innerHTML += this.template;
    return document.getElementById("crew-manage-main");
  }
}
