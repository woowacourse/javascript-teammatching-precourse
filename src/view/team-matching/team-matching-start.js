import { createElement } from '../../utils/dom-utils.js';
import { selectNumberOfCrew, showCrew } from '../../utils/template.js';

export default class MatchingStart {
  constructor(type, mission, crew) {
    this.init(type, mission, crew);
    this.appendChildren();
  }

  init(type, mission, crew) {
    this.$section = createElement('section');
    this.$title = createElement('h3', `${type} ${mission} 미션의 팀매칭`);
    this.$div = createElement('div');
    this.$paragraph = createElement(
      'p',
      '아직 매칭된 팀이 없습니다. 팀을 매칭하겠습니까?'
    );
    this.$form = selectNumberOfCrew();
    this.$status = showCrew(crew);
  }

  appendChildren() {
    this.$div.appendChild(this.$paragraph);
    this.$div.innerHTML += this.$form;
    this.$div.innerHTML += this.$status;
    this.$section.append(this.$title, this.$div);
  }

  get component() {
    return this.$section;
  }
}
