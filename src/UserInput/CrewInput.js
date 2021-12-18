import { CREW_TAP_ID } from '../constants.js';
import CrewTapView from '../View/CrewTapView.js';

export default class CrewInput {
  constructor() {
    this.select = this.getSelectValue();
  }

  getSelectValue() {
    const selectEls = document.getElementsByName('course');
    let selectValue = '';
    selectEls.forEach((selectEl) => {
      if (selectEl.checked) {
        selectValue = selectEl.value;
      }
    });

    return selectValue;
  }

  getCrewName() {
    return document.getElementById(CREW_TAP_ID.crewName).value.trim();
  }

  isValidNameLength() {
    const crewName = this.getCrewName();
    if (crewName.length < 1 || crewName.length > 5) {
      return false;
    }

    return true;
  }

  isSameName(storage) {
    const crewName = this.getCrewName();
    let result = false;
    storage.forEach(({ name }) => {
      if (name === crewName) {
        result = true;
      }
    });

    return result;
  }

  isValidCrewName(storage) {
    if (!this.isValidNameLength()) {
      return 0;
    }
    if (this.isSameName(storage)) {
      return 1;
    }

    return true;
  }
}
