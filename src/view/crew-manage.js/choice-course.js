import { createElement } from '../../utils/dom-utils.js';
import { choiceCourseRadioBox } from '../../utils/template.js';

export default class ChoiceCourse {
  constructor() {
    this.init();
    this.appendChildren();
  }

  init() {
    this.$section = createElement('section');
    this.$title = createElement('h3', '크루를 관리할 코스를 선택해주세요');
    this.$radioBox = choiceCourseRadioBox();
  }

  appendChildren() {
    this.$section.innerHTML += this.$radioBox;
  }

  get component() {
    return this.$section;
  }
}
