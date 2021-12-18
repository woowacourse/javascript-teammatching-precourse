import { createElement } from '../../utils/dom-utils.js';
import { crewNameForm } from '../../utils/template.js';

export default class CrweNameInput {
  constructor() {
    this.init();
    this.appendChildren();
  }

  init() {
    this.$section = createElement('section');
    this.$title = createElement('h3', '프론트엔드 크루 관리');
    this.$form = crewNameForm();
  }

  appendChildren() {
    this.$section.append(this.$title);
    this.$section.innerHTML += this.$form;
  }

  get component() {
    return this.$section;
  }
}
