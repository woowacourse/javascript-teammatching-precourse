import { ID } from '../utils/constants.js';
import { TAB_MENUS_TEMPLATE } from '../utils/template/index.js';

class View {
  constructor() {
    this.init();
  }

  init() {
    this.$app = document.getElementById(ID.APP);

    this.showTabMenuScreen();
  }

  showTabMenuScreen() {
    this.$app.innerHTML = TAB_MENUS_TEMPLATE;
  }
}

export default View;
