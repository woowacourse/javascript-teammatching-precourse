import { $ } from '../utils/dom.js';
import { ID, INDEX, ERROR_MSG } from '../utils/constants.js';
import { template as crewTabTemplate } from '../view/templates/crew-tab.js';
import { getLocalStorage, setLocalStorage } from '../utils/commonLogics.js';

export default class CrewTabController {
  constructor() {
    // 0: 프론트, 1: 백엔드
    this.feCrews = [];
    this.beCrews = [];
    this.choice;
    this.init();
  }
  init = () => {
    this.choice = getLocalStorage('choice');
    $(`#${ID.MAIN}`).innerHTML = crewTabTemplate;

    this.loadRecentChoice(this.choice);
    $(`div`).addEventListener('click', this.handleCourseBarClick);
  };

  loadRecentChoice = (choice) => {
    if (choice === '0') {
      $(`#${ID.FRONTEND_COURSE}`).checked = true;
      this.feCrews = getLocalStorage('feCrews');
      console.log('this.feCrews');
      console.log(this.feCrews);
    }
    if (choice === '1') {
      $(`#${ID.BACKEND_COURSE}`).checked = true;
      this.beCrews = getLocalStorage('beCrews');
      console.log('this.beCrews');
      console.log(this.beCrews);
    }
  };

  handleCourseBarClick = (e) => {
    let clickedBtn = e.target.closest('input');
    if (!clickedBtn) return;
    this.initMenu(clickedBtn.id);
  };

  initMenu = (btnId) => {
    if (btnId === ID.FRONTEND_COURSE) {
      console.log('this.feCrews');
      console.log(this.feCrews);
      setLocalStorage('choice', '0');
    }
    if (btnId === ID.BACKEND_COURSE) {
      console.log('this.beCrews');
      console.log(this.beCrews);
      setLocalStorage('choice', '1');
    }
  };
}
