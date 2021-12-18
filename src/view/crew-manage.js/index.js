import { createElement } from '../../utils/dom-utils.js';
import ChoiceCourse from './choice-course.js';
import CrweNameInput from './input.js';
import CrewStatus from './status.js';

export default class CrewManage {
  constructor() {
    this.defaultRadio = '프론트엔드';
    this.init();
    this.appendChildren();
    this.createCrewStatusTable(['준']);
  }

  init() {
    this.$main = createElement('main');
    this.$courseChoiceSection = new ChoiceCourse();
    this.$crewNameSection = new CrweNameInput(this.defaultRadio);
    this.$crewStatus = new CrewStatus(this.defaultRadio);
  }

  appendChildren() {
    this.$main.append(
      this.$courseChoiceSection.component,
      this.$crewNameSection.component,
      this.$crewStatus.component
    );
  }

  createCrewStatusTable(crew) {
    this.$crewStatus.createTable(crew);
  }

  get component() {
    return this.$main;
  }
}
