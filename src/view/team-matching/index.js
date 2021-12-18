import { createElement } from '../../utils/dom-utils.js';
import MissionChoice from './mission-choice.js';
import MatchingStart from './team-matching-start.js';
import MatchingStatus from './team-matching-status.js';

export default class TeamManage {
  constructor() {
    this.init();
    this.appendChildren();
  }

  init() {
    this.$main = createElement('main');
    this.$emptyContainer = createElement('div');
    this.$missionChoiceSection = new MissionChoice();
  }

  appendChildren() {
    this.$main.append(
      this.$missionChoiceSection.component,
      this.$emptyContainer
    );
  }

  matchingStart(type, mission, crew) {
    this.$matchingStart = new MatchingStart(type, mission, crew);
    this.$main.replaceChild(
      this.$matchingStart.component,
      this.$main.lastElementChild
    );
  }

  showMatching(type, mission, crew) {
    this.$matchingStatus = new MatchingStatus(type, mission, crew);
    this.$main.replaceChild(
      this.$matchingStatus.component,
      this.$main.lastElementChild
    );
  }

  get component() {
    return this.$main;
  }
}
