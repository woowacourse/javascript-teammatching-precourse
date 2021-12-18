import { SELECTOR, STORAGE_KEY } from '../constants.js';
import Store from '../utils/store.js';

class TabModel {
  constructor() {
    this.$currentTab = Store.getLocalStorage(STORAGE_KEY.currentTab) || SELECTOR.crewTabButtonId;
  }

  getCurrentTab() {
    return this.$currentTab;
  }

  setCurrentTab(tabName) {
    this.$currentTab = tabName;
    Store.setLocalStorage(STORAGE_KEY.currentTab, tabName);
  }
}

export default TabModel;
