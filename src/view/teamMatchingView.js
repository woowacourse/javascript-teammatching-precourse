import { matchingInfo } from "./utils/constants.js";

export default class TeamMatchingView {
  constructor() {
    this.render();
  }

  render() {
    const $header = document.querySelector("#manage-header");
    const $render = document.createElement("main");
    $render.innerHTML = matchingInfo;
    $header.after($render);
  }
}
