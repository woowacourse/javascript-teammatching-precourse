import { crewInfo } from "./utils/constants.js";
import { hideElement, showElement } from "./utils/setElement.js";

export default class ManageCrewView {
  constructor() {
    this.render();
    this.hideAll();
  }

  render() {
    const $header = document.querySelector("#manage-header");
    const $render = document.createElement("main");
    $render.innerHTML = crewInfo;
    $header.after($render);
  }

  hideAll() {
    hideElement(document.querySelector("#choose-crew"));
    hideElement(document.querySelector("#crew-name"));
    hideElement(document.querySelector("#crew-list"));
  }

  showChooseCrew() {
    showElement(document.querySelector("#choose-crew"));
  }
}
