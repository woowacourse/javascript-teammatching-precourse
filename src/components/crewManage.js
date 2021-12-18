import { $ } from '../utils/selector.js';
import { SELECTOR } from '../constant/constant.js';
import { crewRadioTemplate } from '../templates/crew-radio-template.js';

export default class CrewManage {
  constructor($state) {
    this.$target = $(`#${SELECTOR.ID.MAIN}`);
    this.$state = $state;
    this.setup();
    this.render();
  }

  setup() {}

  setEvent() {}

  template() {
    return crewRadioTemplate();
  }

  render() {
    this.$target.innerHTML = this.template();
    this.setEvent();
  }
}
