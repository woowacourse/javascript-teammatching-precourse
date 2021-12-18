import store from '../store/index.js';
import { ID } from '../utils/constants.js';

class TeamMatchingModel {
  constructor() {
    this.tabMenu = {
      currentTabMenu: '',
      crewManageMenu: { currentCourse: '', frontend: [], backend: [] },
      teamManageMenu: {},
    };

    this.init();
  }

  init() {
    if (store.getLocalStorage()) {
      this.tabMenu = store.getLocalStorage();
      return;
    }

    store.setLocalStorage(this.tabMenu);
  }

  getLocalStorage() {
    return this.tabMenu;
  }

  getCourseInCrewMenu() {
    return this.tabMenu['crewManageMenu']['currentCourse'];
  }
  getCrewListInCrewMenu() {
    return this.tabMenu['crewManageMenu'][this.getCourseInCrewMenu()];
  }

  setLocalStorage(tabMenu) {
    this.tabMenu = tabMenu;
    store.setLocalStorage(this.tabMenu);
  }

  setCurrentTabMenu(currentTabMenu) {
    this.tabMenu['currentTabMenu'] = currentTabMenu;
    store.setLocalStorage(this.tabMenu);
  }

  getCurrentTabMenu() {
    return this.tabMenu['currentTabMenu'];
  }
}

export default TeamMatchingModel;
