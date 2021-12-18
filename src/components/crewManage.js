import { $ } from '../utils/selector.js';
import { SELECTOR } from '../constant/constant.js';
import { crewTemplate } from '../templates/crew-template.js';
import { isValidCrewName } from '../utils/validate.js';
import { setStateToLocalStorage } from '../utils/localStorage.js';

export default class CrewManage {
  constructor($state) {
    this.$target = $(`#${SELECTOR.ID.MAIN}`);
    this.$state = $state;
    this.setup();
    this.render();
  }

  setStateOfCrew(crew, course) {
    course.crews.push(crew);
    setStateToLocalStorage(this.$state);
  }

  addCrew(course) {
    const name = $(`#${SELECTOR.ID.CREW_NAME_INPUT}`).value.trim();
    const validation = isValidCrewName(name, course);
    if (!validation.valid) {
      alert(validation.ERROR_MESSAGE);
      return;
    }
    this.setStateOfCrew(name, course);
  }

  setup() {}

  setAddEvent(course) {
    $(`#${SELECTOR.ID.ADD_CREW_BUTTON}`).addEventListener('click', (e) => {
      e.preventDefault();
      this.addCrew(course);
    });
  }

  setEvent() {
    $(`#${SELECTOR.ID.FRONTEND_COURSE}`).addEventListener('click', (e) => {
      $(`#${SELECTOR.ID.CREW_ADD_SECTION}`).style.display = 'block';
      $(`#${SELECTOR.ID.CREW_TABLE_SECTION}`).style.display = 'block';
      $(`#${SELECTOR.ID.FRONTEND_COURSE}`).checked = true;
      this.setAddEvent(this.$state.front);
    });
    $(`#${SELECTOR.ID.BACKEND_COURSE}`).addEventListener('click', (e) => {
      $(`#${SELECTOR.ID.CREW_ADD_SECTION}`).style.display = 'block';
      $(`#${SELECTOR.ID.CREW_TABLE_SECTION}`).style.display = 'block';
      $(`#${SELECTOR.ID.BACKEND_COURSE}`).checked = true;
      this.setAddEvent(this.$state.backend);
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
