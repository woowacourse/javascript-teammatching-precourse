import CrewTabView from '../views/CrewTabView.js';

export default class CrewTab {
  constructor(storage) {
    this.view = new CrewTabView();
    this.storage = storage;
  }

  initialize() {
    this.view.initialRender();
    this.courseRadio = document.querySelectorAll('[type = radio]');
    this.setRadioEvent();
  }

  setRadioEvent() {
    this.courseRadio.forEach((radio) => {
      radio.addEventListener('click', this.onSelectCourseRadio.bind(this));
    });
  }

  setAddButtonEvent() {
    this.addCrewButton.addEventListener('click', this.onClickAddCrew.bind(this));
  }

  onSelectCourseRadio(e) {
    this.course = e.target.value;
    this.view.updateOnSelectRadio(this.course, ['소이', '재이', '병현']);
    this.crewNameInput = document.querySelector('#crew-name-input');
    this.addCrewButton = document.querySelector('#add-crew-buttton');
    this.setAddButtonEvent();
  }

  onClickAddCrew(e) {
    e.preventDefault();
    const crewName = this.crewNameInput.value;
    this.storage.addCrew(this.course, crewName);
  }
}
