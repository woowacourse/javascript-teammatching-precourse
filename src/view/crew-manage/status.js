import { createElement } from '../../utils/dom-utils.js';
import { crewStatusTable } from '../../utils/template.js';

export default class CrewStatus {
  constructor(type) {
    this.init(type);
    this.appendChildren();
  }

  init(type) {
    this.$section = createElement('section');
    this.$title = createElement('h3', `${type} 크루 목록`);
    this.$container = createElement('div');
  }

  appendChildren() {
    this.$section.append(this.$title, this.$container);
  }

  createTable(crew) {
    this.$crewTable = crewStatusTable(crew);
    this.$container.innerHTML = this.$crewTable;
  }

  get component() {
    return this.$section;
  }
}
