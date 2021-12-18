import { $ } from '../utils/DOM.js';
import { CREW_TEMPLATE, getCrewList } from '../utils/template.js';

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

  showCrewList(course, crewList) {
    this.$crewMain.innerHTML += getCrewList(course);
  }

  addElements() {
    this.$crewMain.innerHTML = CREW_TEMPLATE;
    this.$radioContainer = $('#radio-container');
    this.$frontEndRadioButton = $('#frontend-course');
    this.$backEndRadioButton = $('#backend-course');
  }
}
