import { DOM, TEMPLATE } from '../utils/constant.js';

export default class Render {
  constructor() {
    this.$app = document.querySelector(DOM.$APP);
  }

  mainTemplate = () => {
    this.$app.innerHTML = TEMPLATE.MAIN;
  };

  crewManageTemplate = () => {
    const $main = document.querySelector('main');
    const $section = document.createElement('section');
    $section.innerHTML = TEMPLATE.CREW_MANAGE;
    $main.appendChild($section);
  };
}
