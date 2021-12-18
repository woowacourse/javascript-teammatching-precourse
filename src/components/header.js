import header from '../templates/header.js';
import $ from '../util/domSelector.js';
import { NAVIGATION } from '../constants/selector.js';
import crewManagement from '../routes/crewManagement.js';

export default class Header {
  constructor(target) {
    this.$target = target;
    this.render();
  }

  template() {
    return header();
  }

  setEvent() {
    $(`#${NAVIGATION.ID.CREW_TAB}`).addEventListener('click', () => {
      new crewManagement(this.$target);
    });
    $(`#${NAVIGATION.ID.TEAM_TAB}`).addEventListener('click', () => {
      console.log('team');
    });
  }

  render() {
    $(this.$target).innerHTML = this.template();
    this.setEvent();
  }
}
