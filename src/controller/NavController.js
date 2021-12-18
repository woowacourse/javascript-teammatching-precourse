import { $ } from '../utils/dom.js';
import { getLocalStorage, setLocalStorage } from '../utils/commonLogics.js';
import { ID, INDEX, ERROR_MSG } from '../utils/constants.js';
import { template as navTemplate } from '../view/templates/nav-bar.js';
import CrewTabController from './CrewTabController.js';
import TeamTabController from './TeamTabController.js';

export default class NavController {
  constructor() {
    this.recentMenu;
    this.init();
  }

  init = () => {
    this.recentMenu = getLocalStorage('recentMenu');
    $(`#${ID.APP}`).innerHTML = navTemplate;

    this.loadRecentMenu(this.recentMenu);
    $(`#${ID.NAV}`).addEventListener('click', this.handleMenuBarClick);
  };

  loadRecentMenu = (recentMenu) => {
    if (recentMenu === INDEX.CREW_TAB) {
      new CrewTabController();
    }
    if (recentMenu === INDEX.TEAM_TAB) {
      new TeamTabController();
    }
  };

  handleMenuBarClick = (e) => {
    let clickedBtn = e.target.closest('button');
    if (!clickedBtn) return;
    this.initMenu(clickedBtn.id);
  };

  initMenu = (btnId) => {
    if (btnId === ID.CREW_TAB) {
      new CrewTabController();
      setLocalStorage('recentMenu', INDEX.CREW_TAB);
    }
    if (btnId === ID.TEAM_TAB) {
      new TeamTabController();
      setLocalStorage('recentMenu', INDEX.TEAM_TAB);
    }
  };
}
