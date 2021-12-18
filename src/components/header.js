import header from '../templates/header.js';
import $ from '../util/domSelector.js';
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
      console.log('crew');
    });
    $(`#${NAVIGATION.ID.TEAM_TAB}`).addEventListener('click', () => {
      console.log('team');
    });
  }

  render() {
    this.template();
    this.setEvent();
  }
}
