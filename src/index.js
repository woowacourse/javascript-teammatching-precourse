import $ from './utils/common/selector.js';
import { renderTabs } from './utils/common/renderTabs.js';
import { changeTab } from './utils/common/changeTab.js';

function teamMatching() {
  this.state = {
    crew: {
      frontEnd: [],
      backEnd: [],
    },
    teamMatching: {},
  };

  this.init = () => {
    renderTabs(this.state);
    this.initEventListeners();
  };

  this.initEventListeners = () => {
    $('nav').addEventListener('click', e => {
      if (e.target.classList.contains('nav-tab')) {
        changeTab(e, this.state);
      }
    });
  };
}

const team = new teamMatching();
team.init();
