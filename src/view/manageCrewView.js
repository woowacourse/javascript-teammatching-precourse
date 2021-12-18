import { crewInfo } from "./utils/constants.js";

export default class ManageCrewView {
  constructor() {
    this.render();
  }

  render() {
    const $header = document.querySelector("#manage-header");
    const $render = document.createElement("main");
    $render.innerHTML = crewInfo;
    $header.after($render);
  }
}
