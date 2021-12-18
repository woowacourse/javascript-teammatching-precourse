import { ID } from '../utils/constants.js';
import { $id } from '../utils/dom.js';
import { isValidCrewName } from '../utils/validation/index.js';

class CrewManageController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  initEventListener() {
    this.triggerCourseInputRadioClickEvent();
    this.triggerCrewNameAddFormSubmitEvent();
  }

  showScreen(currentTabMenu) {
    if (currentTabMenu === this.model.getCurrentTabMenu()) {
      return;
    }
    this.model.setCurrentTabMenu(currentTabMenu);
    this.view.showCrewCourseScreen();
    this.triggerCourseInputRadioClickEvent();
  }

  triggerCourseInputRadioClickEvent() {
    $id(ID.FRONTEND_COURSE).addEventListener('click', (e) => {
      const course = e.target.value;
      const tabMenu = this.model.getLocalStorage();
      tabMenu['crewManageMenu']['currentCourse'] = course;
      this.model.setLocalStorage(tabMenu);

      const crewList = this.model.getCrewListInCrewMenu();
      this.view.showCrewManageScreen(crewList, course);
      this.triggerCrewNameAddFormSubmitEvent();
    });

    $id(ID.BACKEND_COURSE).addEventListener('click', (e) => {
      const course = e.target.value;
      const tabMenu = this.model.getLocalStorage();
      tabMenu['crewManageMenu']['currentCourse'] = course;
      this.model.setLocalStorage(tabMenu);

      const crewList = this.model.getCrewListInCrewMenu();
      this.view.showCrewManageScreen(crewList, course);
      this.triggerCrewNameAddFormSubmitEvent();
    });
  }

  triggerCrewNameAddFormSubmitEvent() {
    $id(ID.CREW_NAME_FORM).addEventListener('submit', (e) => {
      e.preventDefault();

      const crewName = $id(ID.CREW_NAME_INPUT).value;
      const tabMenu = this.model.getLocalStorage();
      const crewList = this.model.getCrewListInCrewMenu();
      const currentMenu = this.model.getCourseInCrewMenu();

      if (isValidCrewName(crewList, crewName)) {
        tabMenu['crewManageMenu'][currentMenu].push(crewName);
        this.model.setLocalStorage(tabMenu);
        this.view.showCrewManageScreen(this.model.getCrewListInCrewMenu(), currentMenu);
      }
    });
  }
}

export default CrewManageController;
