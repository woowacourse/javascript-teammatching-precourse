import { isValidCrewName } from '../utils/validations.js';
import CrewTabView from '../views/CrewTabView.js';

export default class CrewTab {
  constructor(storage) {
    this.view = new CrewTabView();
    this.storage = storage;
  }

  initialize() {
    this.view.initialRender();
    this.setRadioEvent();
  }

  setRadioEvent() {
    document.querySelectorAll('[type = radio]').forEach((radio) => {
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
    this.view.updateOnSelectRadio(this.course, this.storage.crew[this.course]);
    this.crewNameInput = document.querySelector('#crew-name-input');
    this.setManageButtonEvent();
  }

  onClickAddCrew(e) {
    e.preventDefault();
    const crewName = this.crewNameInput.value;
    if (!isValidCrewName(crewName, this.storage.crew[this.course])) return;
    this.storage.addCrew(this.course, crewName);
    this.view.updateOnManageCrew(this.storage.crew[this.course]);
    this.crewNameInput.value = '';
    this.setCrewDeleteButtonEvent();
  }

  onClickDeleteCrew(e) {
    const { crewName } = e.target.dataset;
    if (window.confirm('정말 삭제하시겠습니까?')) {
      this.storage.deleteCrew(this.course, crewName);
      this.view.updateOnManageCrew(this.storage.crew[this.course]);
      this.setCrewDeleteButtonEvent();
    }
  }
}
