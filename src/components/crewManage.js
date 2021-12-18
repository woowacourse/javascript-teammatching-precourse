import { $ } from '../utils/selector.js';
import { SELECTOR } from '../constant/constant.js';
import { crewRadioTemplate } from '../templates/crew-radio-template.js';
import { crewTemplate } from '../templates/crew-template.js';

export default class CrewManage {
  constructor($state) {
    this.$target = $(`#${SELECTOR.ID.MAIN}`);
    this.$state = $state;
    this.setup();
    this.render();
  }

  setup() {}

  setEvent() {
    $(`#${SELECTOR.ID.FRONTEND_COURSE}`).addEventListener('click', (e) => {
      this.$target.innerHTML += crewTemplate();
      $(`#${SELECTOR.ID.FRONTEND_COURSE}`).checked = true;
    });
    $(`#${SELECTOR.ID.BACKEND_COURSE}`).addEventListener('click', (e) => {
      this.$target.innerHTML += crewTemplate();
      $(`#${SELECTOR.ID.BACKEND_COURSE}`).checked = true;
    });
  }

  template() {
    return crewRadioTemplate();
  }

  render() {
    this.$target.innerHTML = this.template();
    this.setEvent();
  }
}
