import { $ } from './utils.js';
import { SELECTOR } from '../constants/constants.js';

export default class CrewManager {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    this.addEventListeners();
  }

  getRadioInputs() {
    return document.querySelectorAll(`input[name=${SELECTOR.radioName}]`);
  }

  addEventListeners() {
    this.getRadioInputs().forEach(input =>
      input.addEventListener('change', () => this.selectCourse()),
    );
  }

  selectCourse() {
    const selected = document.querySelector(`input[name=${SELECTOR.radioName}]:checked`).value;
    this.view.renderSelectedCourseContents(
      document.querySelector(`label[for=${selected}]`).innerHTML,
    );
  }
}
