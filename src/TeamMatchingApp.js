import { $ } from './utils/dom.js';
import NavController from './controller/NavController.js';

export default class TeamMatchingApp {
  constructor() {
    this.init();
  }

  init = () => {
    new NavController();
  };
}
