import { createElement } from '../../utils/dom-utils.js';
import ChoiceCourse from './choice-course.js';
import CrweNameInput from './input.js';
import CrewStatus from './status.js';

export default class CrewManage {
  constructor() {
    this.init();
    this.appendChildren();
  }

  init() {
    this.$main = createElement('main');
    this.$courseChoiceSection = new ChoiceCourse();
    this.$empty = createElement('div');
  }

  appendChildren() {
    this.$main.append(this.$courseChoiceSection.component, this.$empty);
  }

  crewShow(type, crew) {
    this.$crewNameSection = new CrweNameInput(type);
    this.$crewStatus = new CrewStatus(type);
    this.$crewStatus.createTable(crew);
    this.$container = createElement('div');
    this.$container.append(
      this.$crewNameSection.component,
      this.$crewStatus.component
    );
    this.$main.replaceChild(this.$container, this.$main.lastElementChild);
  }

  get component() {
    return this.$main;
  }
}
