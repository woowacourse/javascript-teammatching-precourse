import { createElement } from '../../utils/dom-utils.js';
import { selectMissionForm } from '../../utils/template.js';

export default class MissionChoice {
  constructor() {
    this.init();
    this.appendChildren();
  }

  init() {
    this.$section = createElement('section');
    this.$title = createElement(
      'h3',
      '팀 매칭을 관리할 코스, 미션을 선택하세요'
    );
    this.$form = selectMissionForm();
  }

  appendChildren() {
    this.$section.append(this.$title);
    this.$section.innerHTML += this.$form;
  }

  get component() {
    return this.$section;
  }
}
