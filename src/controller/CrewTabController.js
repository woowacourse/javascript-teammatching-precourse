import { $ } from '../utils/dom.js';
import { ID, INDEX, ERROR_MSG } from '../utils/constants.js';
import { template as crewTabTemplate } from '../view/templates/crew-tab.js';

export default class CrewTabController {
  constructor() {
    // this.products = [];
    this.init();
  }
  init = () => {
    $(`#${ID.MAIN}`).innerHTML = crewTabTemplate;
  };
}
