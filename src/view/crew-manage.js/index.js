import { createElement } from '../../utils/dom-utils.js';
import ChoiceCourse from './choice-course.js';
import CrweNameInput from './input.js';

export default class CrewManage {
  constructor() {
    this.init();
    this.appendChildren();
  }

  init() {
    this.$main = createElement('main');
    this.$courseChoiceSection = new ChoiceCourse();
    this.$crewNameSection = new CrweNameInput();
  }

  appendChildren() {
    this.$main.append(
      this.$courseChoiceSection.component,
      this.$crewNameSection.component
    );
  }

  get component() {
    return this.$main;
  }
}
