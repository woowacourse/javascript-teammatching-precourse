import { ELEMENT_SELECTOR, LOCAL_STORAGE_KEY } from './constants/index.js';
import { $ } from './utils/index.js';
import createStore from './flux/index.js';
import rootReducer from './reducers/index.js';
import Header from './components/Header.js';
import TabContent from './components/TabContent.js';

class TeamMatchingBoard {
  constructor() {
    this.$app = $(`#${ELEMENT_SELECTOR.IDS.APP}`);
    const initialState = this.loadDataFromLocalStorage();
    this.store = createStore(rootReducer, initialState);
    this.mountViews();
  }

  mountViews() {
    new Header(this.$app).mount();
    new TabContent(this.$app).mount();
  }

  loadDataFromLocalStorage() {
    const { CREW_MANAGE } = ELEMENT_SELECTOR.IDS;
    const json = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    const data = JSON.parse(json);
    return {
      tabPane: (data && data.tabPane) || { activeTabPaneId: CREW_MANAGE.PANE },
      crewManage: (data && data.crewManage) || {
        activeCourseId: CREW_MANAGE.FRONTEND_COURSE_RADIO,
      },
    };
  }
}

document.addEventListener('DOMContentLoaded', () => new TeamMatchingBoard());
