import { createElement } from '../../utils/dom-utils.js';
import { navBar } from '../../utils/template.js';

export default class Header {
  constructor() {
    this.create();
    this.appendChild();
  }

  create() {
    this.$header = createElement('header');
    this.$title = createElement('h1', '우테코 크루와 팀 매칭 관리 보드');
    this.$navBar = navBar();
  }

  appendChild() {
    this.$header.append(this.$title);
    this.$header.innerHTML += this.$navBar;
  }

  get component() {
    return this.$header;
  }
}
