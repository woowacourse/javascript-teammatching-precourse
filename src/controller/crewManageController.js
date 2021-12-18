import { $, validation } from './utils.js';
import { SELECTOR } from '../constants/constants.js';
import { crewTableHeaderTemplate, crewTableRowTemplate } from '../constants/template.js';

export default class CrewManager {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    this.model.clearSelectedCourse();
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
    const selectedCourseCrewList = this.model.getSelectedCourse().crewList;
    if (validation.isCrewNameValid(selectedCourseCrewList, crewName)) {
      this.model.addCrewInSelectedCourse(crewName);
      this.initTable();
      this.view.clearInput(document.querySelector('input[type="text"]'));
    }
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
    allButtons.forEach(button =>
      button.addEventListener('click', () => this.deleteCrew(button.dataset.target)),
    );
  }

  deleteCrew(crewName) {
    const allCourse = this.model.getAllCourse();
    const deleteConfirm = window.confirm('정말 삭제하시겠습니까?');
    if (deleteConfirm) {
      const selectedCourse = allCourse.find(e => e.name === this.model.selectedCourse);
      const deletedCrewList = selectedCourse.crewList.filter(e => e !== crewName);
      selectedCourse.crewList = deletedCrewList;
      this.model.setAllCourse(allCourse);
      this.initTable();
    }
  }
}
