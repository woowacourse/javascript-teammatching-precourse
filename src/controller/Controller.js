import View from '../view/View.js';
import ClickEventManager from './ClickEventManager.js';
import { $, default as DOM } from '../utils/DOMUtils.js';
import { default as DB } from '../model/database.js';

export default class Controller {
  constructor() {
    this.view = new View();
    new ClickEventManager($('#app'), this);
    this.checkLocalStorage();
  }

  checkLocalStorage() {
    DB.init('frontendCrew');
    DB.init('backendCrew');
    DB.init('frontendMission', {
      baseball: [],
      racingcar: [],
      lotto: [],
      'shopping-cart': [],
      payments: [],
      subway: [],
      performance: [],
      deploy: [],
    });
    DB.init('backendMission', {
      baseball: [],
      racingcar: [],
      lotto: [],
      'shopping-cart': [],
      payments: [],
      subway: [],
      performance: [],
      deploy: [],
    });
  }

  handleMenuClick(event) {
    DOM.showComponent(event.target.id);
  }
}
