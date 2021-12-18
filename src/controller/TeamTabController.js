import { $ } from '../utils/dom.js';
import { ID, INDEX, ERROR_MSG } from '../utils/constants.js';

import { template as teamTabTemplate } from '../view/templates/team-tab.js';

export default class TeamTabController {
  constructor() {
    // this.products = [];
    this.init();
  }
  init = () => {
    $(`#${ID.MAIN}`).innerHTML = teamTabTemplate;
  };
}
