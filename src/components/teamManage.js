import { teamTemplate } from '../templates/team-template.js';
import { $ } from '../utils/selector.js';
import { SELECTOR } from '../constant/constant.js';

export default class TeamManage {
  constructor($state) {
    this.$target = $(`#${SELECTOR.ID.MAIN}`);
    this.$state = $state;
    this.setup();
    this.render();
  }

  setup() {}

  setEvent() {}

  template() {
    return teamTemplate();
  }

  render() {
    this.$target.innerHTML = this.template();
    this.setEvent();
  }
}
