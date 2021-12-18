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

  setManageButtonEvent() {
    document.querySelector('#add-crew-buttton').addEventListener('click', this.onClickAddCrew.bind(this));
    this.setCrewDeleteButtonEvent();
  }

  setCrewDeleteButtonEvent() {
    document.querySelectorAll('.delete-crew-buttton').forEach((button) => {
      button.addEventListener('click', this.onClickDeleteCrew.bind(this));
    });
  }

  onSelectCourseRadio(e) {
    this.course = e.target.value;
    this.view.updateOnSelectRadio(this.course, this.storage.crew);
    this.crewNameInput = document.querySelector('#crew-name-input');
    this.setManageButtonEvent();
  }

  onClickAddCrew(e) {
    e.preventDefault();
    const crewName = this.crewNameInput.value;
    this.storage.addCrew(this.course, crewName);
    this.view.updateOnManageCrew(this.course, this.storage.crew);
  }

  onClickDeleteCrew(e) {
    const { crewName } = e.target.dataset;
    this.storage.deleteCrew(this.course, crewName);
    this.view.updateOnManageCrew(this.course, this.storage.crew);
    this.setCrewDeleteButtonEvent();
  }
}
