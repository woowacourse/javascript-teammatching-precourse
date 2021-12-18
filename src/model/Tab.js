import { SELECTOR } from '../constants.js';

class TabModel {
  constructor() {
    this.$currentTab = SELECTOR.crewTabButtonId;
  }

  getCurrentTab() {
    return this.$currentTab;
  }

  setCurrentTab(tabName) {
    this.$currentTab = tabName;
  }
}

export default TabModel;
