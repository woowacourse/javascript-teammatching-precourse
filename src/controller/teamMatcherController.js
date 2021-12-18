import { $ } from '../utils/domElementTool.js';
import { SELECTOR } from '../data/selector.js';
import { getCrewInputErrorMessage } from './getErrorMessage.js';
import { showAlert } from '../utils/showAlert.js';
import CrewManager from '../model/crewManager.js';
import TabMenuController from './tabMenuController.js';

export default class TeamMatcherController {
  constructor() {
    this.init();
  }

  init() {
    this.tabMenu = new TabMenuController();
    this.createModels();
    this.setEvent();
  }

  createModels() {
    this.crewManager = new CrewManager();
  }

  setEvent() {
    $('form').addEventListener('submit', this.handleInputCrew.bind(this));
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
}
