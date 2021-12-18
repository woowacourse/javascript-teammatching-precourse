import { createElement } from '../utils/dom-utils.js';
import Header from './header/header.js';

export default class App {
  constructor($app) {
    this.$app = $app;
    this.init();
    this.appendChild();
  }

  init() {
    this.$header = new Header();
  }

  appendChild() {
    this.$app.append(this.$header.component);
  }
}
