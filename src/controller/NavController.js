import { $ } from '../utils/dom.js';
import { getLocalStorage, setLocalStorage } from '../utils/commonLogics.js';
import { ID, INDEX, ERROR_MSG } from '../utils/constants.js';
import { template as navTemplate } from '../view/templates/nav-bar.js';
import CrewTabController from './CrewTabController.js';
import TeamTabController from './TeamTabController.js';

// - 상단에 탭 메뉴가 존재하며 클릭하면 각 화면을 랜더링한다.
//   - 크루 관리 탭
//   - 팀 매칭 관리 탭

export default class NavController {
  constructor() {
    this.recentMenu;
    this.init();
  }

  init = () => {
    this.recentMenu = getLocalStorage('recentMenu');
    $(`#${ID.APP}`).innerHTML = navTemplate;

    // this.loadRecentMenu(this.recentMenu);
    $(`#${ID.NAV}`).addEventListener('click', this.handleMenuBarClick);
  };

  // loadRecentMenu = (recentMenu) => {
  //   if (recentMenu === INDEX.PRODUCT_ADD_MENU) {
  //     new ProductAddController();
  //   }
  //   if (recentMenu === INDEX.VENDING_MACHINE_MANAGE_MENU) {
  //     new VendingMachineManageController();
  //   }
  //   if (recentMenu === INDEX.PRODUCT_PURCHASE_MENU) {
  //     new ProductPurchaseController();
  //   }
  // };

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
