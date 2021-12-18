import HeaderTemplate from "./HeaderTemplate.js";

export default class Woowacourse {
  constructor() {
    this.makeHeader();
  }

  makeHeader() {
    document.getElementById("app").innerHTML = HeaderTemplate();
  }
}

const woowacourse = new Woowacourse();
