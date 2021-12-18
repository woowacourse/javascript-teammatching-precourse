import { createElement } from '../utils/dom-utils.js';
import CrewManage from './crew-manage/index.js';
import Header from './header/header.js';
import TeamManage from './team-matching/index.js';

export default class App {
  constructor($app) {
    this.$app = $app;
    this.init();
    this.appendChild();
  }

  init() {
    this.$header = new Header();
    this.$crewManage = new CrewManage();
    this.$teamMatching = new TeamManage();
  }

  appendChild() {
    this.$app.append(this.$header.component, this.$teamMatching.component);
  }
}
