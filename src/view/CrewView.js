import { $ } from '../utils/DOM.js';
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

  showCourse(course, crewList) {
    this.$crewMain.innerHTML += getCrewList(course);
    console.log(`getCrewList(course)`, getCrewList(course));
    this.$crewTable = $('#crew-table');
    this.$crewTableBody = $('#crew-table-body');
    this.showCrewList(crewList);
  }

  showCrewList(crewList) {
    if (crewList.length !== 0) {
      let crewTableBody = '';
      crewList.map((crew, index) => (crewTableBody += getCrewRow(index + 1, crew)));
      this.$crewTableBody.innerHTML = crewTableBody;
    }
  }

  addElements() {
    this.$crewMain.innerHTML = CREW_TEMPLATE;
    this.$radioContainer = $('#radio-container');
    this.$frontEndRadioButton = $('#frontend-course');
    this.$backEndRadioButton = $('#backend-course');
  }
}
