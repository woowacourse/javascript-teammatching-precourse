import header from '../templates/header.js';
import $ from '../util/domSelector.js';
import CrewManagement from './crewManagement.js';
import TeamManagement from './teamManagement.js';
import { NAVIGATION } from '../constants/selector.js';

export default class Header {
  constructor(app) {
    this.$target = app;
    this.render();
  }

  template() {
    $(this.$target).innerHTML = header();
  }

  setEvent() {
    $(`#${NAVIGATION.ID.CREW_TAB}`).addEventListener('click', () => {
      new CrewManagement(this.$target);
    });
    $(`#${NAVIGATION.ID.TEAM_TAB}`).addEventListener('click', () => {
      new TeamManagement(this.$target);
    });
  }

  render() {
    this.template();
    this.setEvent();
  }
}
