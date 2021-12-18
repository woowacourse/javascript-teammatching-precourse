import $ from './utils/common/selector.js';
import { renderTabs } from './utils/common/renderTabs.js';

function teamMatching() {
  this.state = {};

  this.init = () => {
    renderTabs();
    this.initEventListeners();
  };

  this.initEventListeners = () => {
    $('nav').addEventListener('click', e => {
      if (e.target.classList.contains('nav-tab')) {
        console.log('버튼');
      }
    });
  };
}

const team = new teamMatching();
team.init();
