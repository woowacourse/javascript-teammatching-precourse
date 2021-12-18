import $ from '../util/domSelector.js';
import TeamManagement from './teamManagement.js';
import header from '../templates/header.js';
import CrewInput from '../components/crewInput.js';
import CrewPrint from '../components/crewPrint.js';
import crewManagement from '../templates/crewManagement.js';
import crewPrint from '../templates/crewPrint.js';
import { NAVIGATION, CREW_MANAGEMENT } from '../constants/selector.js';
import { setLocalStorage, getLocalStorage } from '../store.js';
import { crewInputValid } from '../util/valid.js';

export default class CrewManagement {
  constructor(target) {
    this.$target = target;
    this.initialize('frontend');
  }

  initialize(course) {
    this.crewNames = this.getCrewName(course);
    this.render(course);
  }

  mounted() {
    new CrewInput();
    new CrewPrint();
  }

  template() {
    return `
    ${header()}
    ${crewManagement()}
    ${crewPrint(this.crewNames)}
    `;
  }

  getCrewName(course) {
    return getLocalStorage(course) || [];
  }

  setCrewName(course, crewName) {
    setLocalStorage(course, [...this.crewNames, crewName]);
    this.crewNames = this.getCrewName(course);
  }

  getCourse() {
    if ($(`#${CREW_MANAGEMENT.ID.FRONTEND_COURSE}`).checked) {
      return $(`#${CREW_MANAGEMENT.ID.FRONTEND_COURSE}`).value;
    }
    return $(`#${CREW_MANAGEMENT.ID.BACKEND_COURSE}`).value;
  }

  headerEvent() {
    $(`#${NAVIGATION.ID.TEAM_TAB}`).addEventListener('click', () => {
      new TeamManagement(this.$target);
    });
  }

  inputEvent(course) {
    $(`#${CREW_MANAGEMENT.ID.ADD_CREW_BUTTON}`).addEventListener('click', event => {
      event.preventDefault();
      const crewName = $(`#${CREW_MANAGEMENT.ID.CREW_NAME_INPUT}`).value;
      $(`#${CREW_MANAGEMENT.ID.CREW_NAME_INPUT}`).value = '';
      if (crewInputValid(crewName, this.crewNames)) {
        this.setCrewName(course, crewName);
      }
      this.initialize(this.getCourse());
    });
  }

  deleteEvent() {
    $(`.${CREW_MANAGEMENT.CLASS.DELETE_CREW_BUTTON}`).addEventListener('click', event => {
      event.preventDefault();
      console.log('delete');
      this.initialize(this.getCourse());
    });
  }

  setEvent(course) {
    this.headerEvent();
    this.inputEvent(course);
    this.deleteEvent();
  }

  render(course) {
    this.mounted();
    $(this.$target).innerHTML = this.template();
    this.setEvent(course);
  }
}
