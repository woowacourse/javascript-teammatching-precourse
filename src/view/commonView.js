import { commonView } from "./utils/constants.js";

export default class CommonView {
  constructor() {}

  init() {
    const $app = document.querySelector("#app");
    const $header = document.createElement("div");
    $header.innerHTML = commonView;
    $app.after($header);
  }
}
