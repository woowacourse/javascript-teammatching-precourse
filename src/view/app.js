import { ID } from '../constants/selector.js';
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
    this.$emptyContainer = createElement('div');
    this.$crewManage = new CrewManage();
    this.$teamMatching = new TeamManage();
  }

  renderCrewManage() {
    this.$app.replaceChild(
      this.$crewManage.component,
      this.$app.lastElementChild
    );
  }

  renderTeamMathcing() {
    this.$app.replaceChild(
      this.$teamMatching.component,
      this.$app.lastElementChild
    );
  }

  crewShow(type, crew) {
    this.$crewManage.crewShow(type, crew);
  }
  appendChild() {
    this.$app.append(this.$header.component, this.$emptyContainer);
  }
}
