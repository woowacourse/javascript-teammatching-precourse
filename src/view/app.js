import { createElement } from '../utils/dom-utils.js';

export default class App {
  constructor($app) {
    this.$app = $app;
    this.init();
    this.appendChild();
  }

  init() {
    this.$header = createElement('h1', '우테코 크루와 팀 매칭 관리 보드');
  }

  appendChild() {
    this.$app.append(this.$header);
  }
}
