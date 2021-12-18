import { createElement } from '../../utils/dom-utils.js';
import { crewNameForm } from '../../utils/template.js';

export default class CrweNameInput {
  constructor(type) {
    this.init(type);
    this.appendChildren();
  }

  init(type) {
    this.$section = createElement('section');
    this.$title = createElement('h3', `${type} 크루 관리`);
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
