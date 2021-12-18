import $ from '../util/domSelector.js';
import header from '../templates/header.js';
import crewManagement from '../templates/crewManagement.js';
import { NAVIGATION, CREW_MANAGEMENT } from '../constants/selector.js';
import { NAME } from '../constants/constants.js';
import { setLocalStorage, getLocalStorage } from '../store.js';
import { crewInputValid } from '../util/valid.js';

export default class CrewManagement {
  constructor(target) {
    this.$target = target;
    this.initialize();
  }

  initialize() {
    this.crewNames = this.getCrewName();
    this.render();
  }

  template() {
    return `
    ${header()}
    ${crewManagement()}
    `;
  }

  getCrewName() {
    return getLocalStorage(NAME.CREW) || [];
  }

  setCrewName(crewName) {
    setLocalStorage(NAME.CREW, [...this.crewNames, crewName]);
    this.crewNames = this.getCrewName();
  }

  getCourse() {
    if ($(`#${CREW_MANAGEMENT.ID.FRONTEND_COURSE}`).checked) {
      return $(`#${CREW_MANAGEMENT.ID.FRONTEND_COURSE}`).value;
    }
    return $(`#${CREW_MANAGEMENT.ID.BACKEND_COURSE}`).value;
  }

  headerEvent() {
    $(`#${NAVIGATION.ID.CREW_TAB}`).addEventListener('click', () => {
      this.initialize();
    });
    $(`#${NAVIGATION.ID.TEAM_TAB}`).addEventListener('click', () => {
      console.log('team');
    });
  }

  setEvent() {
    $(`#${CREW_MANAGEMENT.ID.ADD_CREW_BUTTON}`).addEventListener('click', event => {
      event.preventDefault();
      const crewName = {
        course: this.getCourse(),
        name: $(`#${CREW_MANAGEMENT.ID.CREW_NAME_INPUT}`).value,
      };
      $(`#${CREW_MANAGEMENT.ID.CREW_NAME_INPUT}`).value = '';
      if (crewInputValid(crewName, this.crewNames)) {
        this.setCrewName(crewName);
      }
    });
  }

  render() {
    $(this.$target).innerHTML = this.template();
    this.setEvent();
    this.headerEvent();
  }
}
