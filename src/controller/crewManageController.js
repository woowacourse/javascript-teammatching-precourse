import { $ } from './utils.js';
import { SELECTOR } from '../constants/constants.js';
import { crewTableHeaderTemplate, crewTableRowTemplate } from '../constants/template.js';

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

  addCrewAddButtonEvent() {
    $(SELECTOR.crewAddButton).addEventListener('click', event => this.addCrew(event));
  }

  selectCourse() {
    const selectedRadioValue = document.querySelector(
      `input[name=${SELECTOR.radioName}]:checked`,
    ).value;
    const selectedCourseName = document.querySelector(`label[for=${selectedRadioValue}]`).innerHTML;
    this.view.renderSelectedCourseContents(selectedCourseName);
    this.model.selectCourse(selectedCourseName);
    this.addCrewAddButtonEvent();
    this.initTable();
  }

  addCrew(event) {
    event.preventDefault();
    const crewName = document.querySelector('input[type="text"]').value;
    this.model.addCrewInSelectedCourse(crewName);
    this.initTable();
    this.view.clearInput(document.querySelector('input[type="text"]'));
  }

  initTable() {
    const table = $(SELECTOR.crewTable);
    const selectedCourseCrewList = this.model.getSelectedCourse().crewList;
    this.view.clearTable(table);
    this.view.addTableHeader(table, crewTableHeaderTemplate);
    selectedCourseCrewList.forEach((crew, index) =>
      this.view.addTableRow(table, crewTableRowTemplate(index + 1, crew)),
    );
    this.addAllDeleteCrewButtonEvent();
  }

  addAllDeleteCrewButtonEvent() {
    const allButtons = document.querySelectorAll(`.${SELECTOR.crewDeleteButton}`);
    console.log(allButtons);
  }
}
