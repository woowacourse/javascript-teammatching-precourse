import { $ } from '../utils/domElementTool.js';
import { SELECTOR } from '../data/selector.js';
import { MESSAGE } from '../data/constants.js';
import { getCrewInputErrorMessage } from './getErrorMessage.js';
import { showAlert } from '../utils/showAlert.js';
import { setLocalStorage, getLocalStorage } from '../utils/localStorage.js';
import TeamMatcherView from '../view/teamMatcherView.js';
import CrewManager from '../model/crewManager.js';
import TabMenuController from './tabMenuController.js';

export default class TeamMatcherController {
  constructor() {
    this.init();
  }

  init() {
    this.tabMenu = new TabMenuController();
    this.createModels();
    this.veiw = new TeamMatcherView(this.crewManager.crew);
    this.initPage();
    this.setEvent();
  }

  initPage() {
    this.veiw.renderCrewList(this.crewManager.crew['frontend']);
  }

  createModels() {
    this.crewManager = new CrewManager(getLocalStorage());
  }

  setEvent() {
    $('form').addEventListener('submit', this.handleInputCrew.bind(this));
    $(`#${SELECTOR.CREW_TABLE}`).addEventListener('click', this.handleDeleteCrew.bind(this));
  }

  handleInputCrew(e) {
    e.preventDefault();
    const course = this.getCourse();
    const name = $(`#${SELECTOR.CREW_NAME_INPUT}`).value;

    const crewList = this.crewManager.crew[course];
    const errorMessage = getCrewInputErrorMessage(crewList, name);

    if (errorMessage) {
      showAlert(errorMessage);
      return;
    }

    this.crewManager.add(course, name);
    this.veiw.renderCrewList(crewList);
    setLocalStorage(this.crewManager.crew);
  }

  getCourse() {
    if ($(`#${SELECTOR.FRONTEND_COURSE_INPUT}`).checked) {
      return 'frontend';
    }

    if ($(`#${SELECTOR.BACKEND_COURSE_INPUT}`).checked) {
      return 'backend';
    }

    return null;
  }

  handleDeleteCrew(e) {
    if (e.target.id === SELECTOR.DELETE_CREW_BUTTON) {
      const course = this.getCourse();
      const name = e.target.closest('tr').childNodes[3].innerText;

      if (confirm(MESSAGE.CONFIRM_DELETE)) {
        this.crewManager.delete(course, name);
      }

      this.veiw.renderCrewList(this.crewManager.crew[course]);
      setLocalStorage(this.crewManager.crew);
    }
  }
}
