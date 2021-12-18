import { $ } from '../utils/selector.js';
import { SELECTOR } from '../constant/constant.js';
import CrewManage from './crewManage.js';
import TeamManage from './teamManage.js';
import { headerTemplate } from '../templates/header-template.js';

export default class Menu {
  constructor($target) {
    this.$target = $target;
    this.$state;
    this.setup();
    this.render();
  }

  setup() {}

  setEvent() {
    $(`#${SELECTOR.ID.CREW_TAB}`).addEventListener('click', () => {
      this.$state = new CrewManage(this.$state).$state;
    });

    $(`#${SELECTOR.ID.TEAM_TAB}`).addEventListener('click', () => {
      this.$state = new TeamManage(this.$state).$state;
    });
  }

  template() {
    return headerTemplate();
  }

  render() {
    this.$target.innerHTML = this.template();
    this.setEvent();
  }
}
