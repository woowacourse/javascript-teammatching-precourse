import { createElement } from '../utils/dom-utils.js';
import CrewManage from './crew-manage/index.js';
import Header from './header/header.js';

export default class App {
  constructor($app) {
    this.$app = $app;
    this.init();
    this.appendChild();
  }

  init() {
    this.$header = new Header();
    this.$crewManage = new CrewManage();
  }

  appendChild() {
    this.$app.append(this.$header.component, this.$crewManage.component);
  }
}
