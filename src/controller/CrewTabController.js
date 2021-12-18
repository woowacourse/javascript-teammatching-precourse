import { $ } from '../utils/dom.js';
import { ID, INDEX, CLASS, ERROR_MSG } from '../utils/constants.js';
import { template as crewTabTemplate } from '../view/templates/crew-tab.js';
import { getLocalStorage, setLocalStorage } from '../utils/commonLogics.js';
import Crew from '../model/Crew.js';
import { clearInputs } from '../view/OutputView.js';

export default class CrewTabController {
  constructor() {
    // 0: 프론트, 1: 백엔드
    this.feCrews = [];
    this.beCrews = [];
    this.choice;
    this.init();
  }
  init = () => {
    this.choice = getLocalStorage('choice');
    this.feCrews = getLocalStorage('feCrews');
    this.beCrews = getLocalStorage('beCrews');

    // paint
    $(`#${ID.MAIN}`).innerHTML = crewTabTemplate;
    this.loadRecentChoice(this.choice);

    $(`div`).addEventListener('click', this.handleCourseBarClick);
    $('form').addEventListener('submit', this.handleCrewNameSubmit);
  };

  handleCrewNameSubmit = (e) => {
    e.preventDefault();
    this.$nameInput = $(`#${ID.CREW_NAME_INPUT}`);
    this.validate(this.$nameInput.value, this.choice);
  };

  validate = (name, choice) => {
    const isValid = this.validateHelper(name, choice);
    if (!isValid) {
      alert(ERROR_MSG.CREW_TAB);
    }
    if (isValid) {
      // createCrew
      const newId =
        this.choice === '0' ? this.feCrews.length + 1 : this.beCrews.length + 1;
      const newCrew = this.createCrew(newId, name);

      this.paintCrew(newCrew);

      // update
      this.choice === '0' ? this.feCrews.push(newCrew) : this.beCrews.push(newCrew);

      // set
      setLocalStorage('feCrews', this.feCrews);
      setLocalStorage('beCrews', this.beCrews);
      clearInputs([this.$nameInput]);
    }
  };
  paintCrew = ({ id, name }) => {
    const $table = $(`tbody`);
    const $tr = document.createElement('tr');
    // $tr.classList.add(CLASS.PRODUCT_MANAGE_ITEM);
    $tr.innerHTML = `
      <td>${id}</td>
      <td>${name}</td>
      <td><button class=${CLASS.DELETE_CREW_BTN}>삭제</button></td>
    `;
    $table.appendChild($tr);
  };

  createCrew = (id, name) => {
    return new Crew(id, name);
  };

  validateHelper = (name, choice) => {
    if (name.length > 5) {
      return false;
    }
    if (choice === '0') {
      return !this.feCrews.includes(name);
    }
    if (choice === '1') {
      return !this.beCrews.includes(name);
    }
    return true;
  };

  loadRecentChoice = (choice) => {
    if (choice === '0') {
      $(`#${ID.FRONTEND_COURSE}`).checked = true;
      this.feCrews.map((crew) => this.paintCrew(crew));
    }
    if (choice === '1') {
      $(`#${ID.BACKEND_COURSE}`).checked = true;
      this.beCrews.map((crew) => this.paintCrew(crew));
    }
  };

  handleCourseBarClick = (e) => {
    let clickedBtn = e.target.closest('input');
    if (!clickedBtn) return;
    this.initMenu(clickedBtn.id);
  };

  initMenu = (btnId) => {
    if (btnId === ID.FRONTEND_COURSE) {
      this.choice = '0';
      $(`tbody`).innerHTML = '';
      this.feCrews.map((crew) => this.paintCrew(crew));
      setLocalStorage('choice', '0');
    }
    if (btnId === ID.BACKEND_COURSE) {
      this.choice = '1';
      $(`tbody`).innerHTML = '';
      this.beCrews.map((crew) => this.paintCrew(crew));
      setLocalStorage('choice', '1');
    }
  };
}
