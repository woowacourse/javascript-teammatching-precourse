import { $ } from '../utils/selector.js';
import { SELECTOR } from '../constant/constant.js';
import { crewTemplate } from '../templates/crew-template.js';
import Course from './course.js';

export default class CrewManage {
  constructor($state) {
    this.$target = $(`#${SELECTOR.ID.MAIN}`);
    this.$state = $state;
    this.setup();
    this.render();
  }

  addCrew() {
    const name = $(`#${SELECTOR.ID.CREW_NAME_INPUT}`).value;
    const validation = isValidCrewName(name);
    console.log(validation.valid);
    // if (!validation.valid) {
    // alert(validation.errorMessage);
    // return;
    // }
    // this.setStateOfCharge(charge);
  }

  setup() {}

  setAddEvent(crew) {
    // if (crew === 'FRONT') {
    //   this.$state.FRONT = new Course(crew);
    //   console.log(this.$state);
    // }
    // if (crew === 'BACK') {
    //   this.$state.BACK = new Course(crew);
    //   console.log(this.$state);
    // }
    $(`#${SELECTOR.ID.ADD_CREW_BUTTON}`).addEventListener('click', (e) => {
      e.preventDefault();
      this.addCrew();
    });
  }

  setEvent() {
    $(`#${SELECTOR.ID.FRONTEND_COURSE}`).addEventListener('click', (e) => {
      $(`#${SELECTOR.ID.CREW_ADD_SECTION}`).style.display = 'block';
      $(`#${SELECTOR.ID.CREW_TABLE_SECTION}`).style.display = 'block';
      $(`#${SELECTOR.ID.FRONTEND_COURSE}`).checked = true;
      this.setAddEvent('FRONT');
    });
    $(`#${SELECTOR.ID.BACKEND_COURSE}`).addEventListener('click', (e) => {
      $(`#${SELECTOR.ID.CREW_ADD_SECTION}`).style.display = 'block';
      $(`#${SELECTOR.ID.CREW_TABLE_SECTION}`).style.display = 'block';
      $(`#${SELECTOR.ID.BACKEND_COURSE}`).checked = true;
      this.setAddEvent('BACK');
    });
  }

  template() {
    return crewTemplate();
  }

  render() {
    this.$target.innerHTML = this.template();
    this.setEvent();
  }
}
