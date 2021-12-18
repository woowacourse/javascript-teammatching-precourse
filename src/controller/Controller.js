import View from '../view/View.js';
import ClickEventManager from './ClickEventManager.js';
import CrewManager from './CrewManager.js';
import { $, default as DOM } from '../utils/DOMUtils.js';
import { default as DB } from '../model/database.js';

export default class Controller {
  constructor() {
    this.view = new View();
    new ClickEventManager($('#app'), this);
    this.generateManagers();
    this.checkLocalStorage();
  }

  checkLocalStorage() {
    DB.init('frontendCrew');
    DB.init('backendCrew');
  }

  handleMenuClick(event) {
    DOM.showComponent(event.target.id);
  }

  generateManagers() {
    new CrewManager();
  }
}
