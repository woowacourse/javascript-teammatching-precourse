import { $ } from '../util/dom.js';
import { check } from '../util/checkValue.js';
import { ALERT, CONFIRM } from '../constants/constants.js';
import { store } from '../store/store.js';
import { renderCrewTableItems } from '../view/renderCrewTab.js';

export const makeCrewTemplate = e => {
  e.preventDefault();
  const course = check.course();
  const crewName = $('#crew-name-input').value;
  const crewListLength = getCrewListLength(course);
  if (
    check.inputValueBlank(crewName) ||
    check.crewNameDuplication(crewName, store.getItem(course)) ||
    check.inputValueLength(crewName)
  ) {
    window.alert(ALERT);
    return;
  }
  addCrewLocalStorage(crewListLength + 1, crewName, course);
  renderCrewTableItems(course);
};

export const getCrewListLength = course => {
  const crewList = store.getItem(course);
  let crewListLength = 0;
  if (store.getItem(course) !== null) {
    crewListLength = crewList.length;
  }
  return crewListLength;
};

export const addCrewLocalStorage = (index, name, course) => {
  const crewList = store.getItem(course);
  const totalCrew = [];
  if (crewList !== null) {
    for (let crew in crewList) {
      totalCrew.push(crewList[crew]);
    }
  }
  totalCrew.push({ index: index, name: name });
  store.setItem(course, totalCrew);
};

export const confirmDeleteCrew = target => {
  if (window.confirm(CONFIRM)) {
    deleteCrew(target);
  }
};

export const deleteCrew = target => {
  const targetName =
    target.closest('tr').firstChild.nextSibling.nextSibling.nextSibling
      .innerText;
  const course = check.course();
  const crewList = store.getItem(course);
  const totalCrew = [];
  for (let crew in crewList) {
    if (crewList[crew].name !== targetName) {
      totalCrew.push(crewList[crew]);
    }
  }
  store.setItem(course, totalCrew);
  renderCrewTableItems(course);
};
