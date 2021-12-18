import View from '../view/View.js';
import ClickEventManager from './ClickEventManager.js';
import { $ } from '../utils/DOMUtils.js';

export default class Controller {
  constructor() {
    this.view = new View();
    new ClickEventManager($('#app'), this);
  }
}
