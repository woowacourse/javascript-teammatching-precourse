import { createElement } from '../../utils/dom-utils.js';
import MissionChoice from './mission-choice.js';

export default class TeamManage {
  constructor() {
    this.init();
    this.appendChildren();
  }

  init() {
    this.$main = createElement('main');
    this.$missionChoiceSection = new MissionChoice();
  }

  appendChildren() {
    this.$main.append(this.$missionChoiceSection.component);
  }

  get component() {
    return this.$main;
  }
}
