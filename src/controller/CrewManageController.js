import { CLASS, ID } from '../utils/constants.js';
import { $class, $id } from '../utils/dom.js';
import { isValidCrewName } from '../utils/validation/index.js';

class CrewManageController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
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
      this.changeTabMenuLocalStorage(course);
      const crewList = this.model.getCrewListInCrewMenu();
      this.view.showCrewManageScreen(crewList, course);
      this.initCrewManageEventListener();
    });
    $id(ID.BACKEND_COURSE).addEventListener('click', (e) => {
      const course = e.target.value;
      this.changeTabMenuLocalStorage(course);
      const crewList = this.model.getCrewListInCrewMenu();
      this.view.showCrewManageScreen(crewList, course);
      this.initCrewManageEventListener();
    });
  }

  initCrewManageEventListener() {
    this.triggerCrewNameAddFormSubmitEvent();
    this.triggerDeleteCrewNameEvent();
  }

  changeTabMenuLocalStorage(course) {
    const tabMenu = this.model.getLocalStorage();
    tabMenu['crewManageMenu']['currentCourse'] = course;
    this.model.setLocalStorage(tabMenu);
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
        this.view.changeCrewListScreen(this.model.getCrewListInCrewMenu());
        this.view.resetInputValue($id(ID.CREW_NAME_INPUT));
      }
    });
  }

  deleteCrewLogic(position) {
    const tabMenu = this.model.getLocalStorage();
    const currentCourse = this.model.getCourseInCrewMenu();
    const crewList = this.model.getCrewListInCrewMenu();
    crewList.splice(position, 1);
    tabMenu['crewManageMenu'][currentCourse] = crewList;
    this.model.setLocalStorage(tabMenu);
    this.view.changeCrewListScreen(this.model.getCrewListInCrewMenu());
  }

  triggerDeleteCrewNameEvent() {
    const deleteCrewButtons = Array.from($class(CLASS.DELETE_CREW_BUTTON));
    deleteCrewButtons.map((button) => {
      button.addEventListener('click', (e) => {
        if (confirm('정말 삭제하시겠습니까?')) {
          this.deleteCrewLogic(e.target.id);
        }
      });
    });
  }
}

export default CrewManageController;
