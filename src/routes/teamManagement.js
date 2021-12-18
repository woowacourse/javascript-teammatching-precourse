import $ from '../util/domSelector.js';
import CrewManagement from './crewManagement.js';
import header from '../templates/header.js';
import teamManagement from '../templates/teamManagement.js';
import { NAVIGATION } from '../constants/selector.js';

export default class TeamManagement {
  constructor(target) {
    this.$target = target;
    this.initialize();
  }

  initialize() {
    this.render();
  }

  template() {
    return `
      ${header()}
      ${teamManagement()}
      `;
  }

  headerEvent() {
    $(`#${NAVIGATION.ID.CREW_TAB}`).addEventListener('click', () => {
      new CrewManagement(this.$target);
    });
  }

  setEvent() {
    this.headerEvent();
  }

  render() {
    $(this.$target).innerHTML = this.template();
    this.setEvent();
  }
}
