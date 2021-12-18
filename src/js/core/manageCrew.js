import { $ } from '../util/dom.js';
import { check } from '../util/checkValue.js';
import { ALERT } from '../constants/constants.js';
import { store } from '../store/store.js';

export const makeCrewTemplate = e => {
  e.preventDefault();
  const course = check.course();
  const crewName = $('#crew-name-input').value;
  if (
    check.inputValueBlank(crewName) ||
    check.crewNameDuplication(crewName, store.getItem(course)) ||
    check.inputValueLength(crewName)
  ) {
    window.alert(ALERT);
    return;
  }
};
