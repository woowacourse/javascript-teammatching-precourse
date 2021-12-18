import { createElement } from '../../utils/dom-utils.js';
import { rematchCrew, showMatchingCrew } from '../../utils/template.js';

export default class MatchingStatus {
  constructor(type, mission, crew) {
    this.init(type, mission, crew);
    this.appendChildren();
  }

  init(type, mission, crew) {
    this.$section = createElement('section');
    this.$title = createElement('h3', `${type} ${mission} 조회`);
    this.$paragraph = createElement('p', '팀이 매칭되었습니다.');
    this.$matchingCrew = showMatchingCrew(crew);
    this.$form = rematchCrew();
  }

  appendChildren() {
    this.$section.append(this.$title, this.$paragraph);
    this.$section.innerHTML += this.$matchingCrew;
    this.$section.innerHTML += this.$form;
  }

  get component() {
    console.log(this.$section);
    return this.$section;
  }
}
