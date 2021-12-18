import Manager from './manager/Manager.js';
import renderCurrentTab from './view/renderCurrentTab.js';

function initTeamMatching() {
  const manager = new Manager();
  renderCurrentTab(manager);
}

initTeamMatching();
