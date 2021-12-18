import store from '../store/index.js';
import { ID } from '../utils/constants.js';

class TeamMatchingModel {
  constructor() {
    this.tabMenu = {
      currentTabMenu: ID.CREW_TAB,
      crewManageMenu: {},
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
}

export default TeamMatchingModel;
