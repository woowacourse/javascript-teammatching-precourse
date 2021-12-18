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
    this.$missionChoiceSection = new MissionChoice();
    this.$matchingStart = new MatchingStart('프론트엔드', '숫자야구미션', [
      '준',
      '포비'
    ]);
    this.$missionStauts = new MatchingStatus('프론트엔드', '숫자야구미션', [
      ['준', '포비']
    ]);
  }

  appendChildren() {
    this.$main.append(
      this.$missionChoiceSection.component,
      this.$matchingStart.component,
      this.$missionStauts.component
    );
  }

  get component() {
    return this.$main;
  }
}
