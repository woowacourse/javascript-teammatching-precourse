import { $ } from './utils.js';
import { SELECTOR } from '../constants/constants.js';

export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.view.renderCrewManageTab();
  }

  addEventListeners() {}
}
