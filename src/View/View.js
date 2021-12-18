import Tab from "./template/Tab.js";
import { ID } from "../constant/constant.js";

export default class View {
  constructor() {
    this.app = document.getElementById("app");
    this.tab = document.createElement("div");
    this.tab.innerHTML = Tab;
    this.app.append(this.tab);
  }
}
