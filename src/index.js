import $ from './utils/common/selector.js';
import { renderTabs } from './utils/common/renderTabs.js';
import { changeTab } from './utils/common/changeTab.js';
import { store } from './utils/common/store.js';

function teamMatching() {
  this.state = {
    crew: {
      frontend: [],
      backend: [],
    },
    teamMatching: {
      course: '',
      mission: '',
    },
  };

  this.init = () => {
    renderTabs(this.state);
    if (store.getData()) this.state = store.getData();
    this.initEventListeners();
  };

  this.initEventListeners = () => {
    $('nav').addEventListener('click', e => {
      if (e.target.classList.contains('nav-tab')) changeTab(e, this.state);
    });
  };
}

const team = new teamMatching();
team.init();
