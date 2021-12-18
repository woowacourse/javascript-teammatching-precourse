import { createElement } from '../../utils/dom-utils.js';
import ChoiceCourse from './choice-course.js';

export default class CrewManage {
  constructor() {
    this.init();
    this.appendChildren();
  }

  init() {
    this.$main = createElement('main');
    this.$courseChoiceSection = new ChoiceCourse();
  }

  appendChildren() {
    this.$main.append(this.$courseChoiceSection.component);
  }

  get component() {
    return this.$main;
  }
}
