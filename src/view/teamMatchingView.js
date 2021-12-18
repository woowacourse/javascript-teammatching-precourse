import { matchingInfo } from "./utils/constants.js";
import { hideElement } from "./utils/setElement.js";

export default class TeamMatchingView {
  constructor() {
    this.render();
    this.hideAll();
  }

  render() {
    const $header = document.querySelector("#manage-header");
    const $render = document.createElement("main");
    $render.innerHTML = matchingInfo;
    $header.after($render);
  }

  hideAll() {
    hideElement(document.querySelector("#choose-course-mission"));
    hideElement(document.querySelector("#make-team-matching"));
    hideElement(document.querySelector("#matching-result"));
  }
}
