import HeaderView from '../Views/headerView.js';

export default class HeaderController {
  constructor() {
    this.headerView = new HeaderView();
    this.headerView.render();
  }
}
