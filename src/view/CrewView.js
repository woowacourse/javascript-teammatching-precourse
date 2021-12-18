import { DELETE_MESSAGE } from '../utils/constant.js';
import { $, siblings } from '../utils/DOM.js';
import { CREW_HEAD, CREW_TEMPLATE, getCrewList, getCrewRow } from '../utils/template.js';

export class CrewView {
  constructor() {
    this.$crewMain = $('#crew-main');
    this.addElements();
  }

  setOnRadioClick(fn) {
    this.$radioContainer.addEventListener('click', (e) => {
      const course = e.target.value;
      if (course === 'frontend' || course === 'backend') {
        fn(course);
      }
    });
  }

  setOnCrewAddButtonClick(fn, course) {
    // console.log(`$addCrewButton`, $addCrewButton);
    $('#add-crew-button').addEventListener('click', (e) => {
      e.preventDefault();
      const crewName = $('#crew-name-input').value;
      fn(crewName, course);
    });
  }

  setOnCrewDeleteButtonClick(fn, course) {
    this.$crewTableBody.addEventListener('click', (e) => {
      const $deleteButton = e.target.closest('#delete-crew-button');
      const $deleteButtonSiblings = siblings($deleteButton.parentNode);
      const crewName = $deleteButtonSiblings[1].innerText;
      if (window.confirm(DELETE_MESSAGE)) {
        fn(crewName, course);
      }
    });
  }

  showCourse(course, crewList) {
    this.$crewSection.innerHTML = getCrewList(course);
    this.$crewTable = $('#crew-table');
    this.$crewTableBody = $('#crew-table-body');
    this.showCrewList(crewList);
  }

  showCrewList(crewList) {
    if (crewList.length === 0) {
      this.$crewTableBody.innerHTML = '';
      return;
    }
    let crewTableBody = '';
    crewList.map((crew, index) => (crewTableBody += getCrewRow(index + 1, crew)));
    this.$crewTableBody.innerHTML = crewTableBody;
  }

  addElements() {
    this.$crewMain.innerHTML = CREW_TEMPLATE;
    this.$radioContainer = $('#radio-container');
    this.$frontEndRadioButton = $('#frontend-course');
    this.$backEndRadioButton = $('#backend-course');
    this.$crewSection = $('#crew-section');
  }
}
