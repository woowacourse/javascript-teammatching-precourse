import { renderTabs } from './utils/common/renderTabs.js';

function teamMatching() {
  this.state = {};

  this.init = () => {
    renderTabs();
    this.initEventListeners();
  };

  this.initEventListeners = () => {};
}

const team = new teamMatching();
team.init();
