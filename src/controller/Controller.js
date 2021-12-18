import View from '../view/View.js';
import ClickEventManager from './ClickEventManager.js';
import { $, default as DOM } from '../utils/DOMUtils.js';

export default class Controller {
  constructor() {
    this.view = new View();
    new ClickEventManager($('#app'), this);
  }

  handleMenuClick(event) {
    DOM.showComponent(event.target.id);
  }
}
