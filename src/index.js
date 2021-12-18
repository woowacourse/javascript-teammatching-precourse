import { ELEMENT_SELECTOR, LOCAL_STORAGE_KEY } from './constants/index.js';
import { $ } from './utils/index.js';
import createStore from './flux/index.js';
import rootReducer from './reducers/index.js';
import Header from './components/Header.js';

class TeamMatchingBoard {
  constructor() {
    this.$app = $(`#${ELEMENT_SELECTOR.IDS.APP}`);
    const initialState = this.loadDataFromLocalStorage();
    this.store = createStore(rootReducer, initialState);
    this.mountViews();
  }

  mountViews() {
    new Header(this.$app).mount();
  }

  loadDataFromLocalStorage() {
    const json = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    const data = JSON.parse(json);
    return {
      tabPane: (data && data.tabPane) || { activeTabPaneId: ELEMENT_SELECTOR.IDS.CREW_MANAGE.PANE },
    };
  }
}

document.addEventListener('DOMContentLoaded', () => new TeamMatchingBoard());
