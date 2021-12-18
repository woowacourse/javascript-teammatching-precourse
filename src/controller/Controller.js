import View from '../view/View.js';
import ClickEventManager from './ClickEventManager.js';
import CrewManager from './CrewManager.js';
import { $, default as DOM } from '../utils/DOMUtils.js';

export default class Controller {
  constructor() {
    this.view = new View();
    new ClickEventManager($('#app'), this);
    this.generateManagers();
  }

  handleMenuClick(event) {
    DOM.showComponent(event.target.id);
  }

  generateManagers() {
    new CrewManager();
  }
}
