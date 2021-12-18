import { DOM, LENGTH_CHECK, TEMPLATE } from '../utils/constant.js';

export default class Render {
  constructor() {
    this.$app = document.querySelector(DOM.$APP);
  }

  mainTemplate = () => {
    this.$app.innerHTML = TEMPLATE.MAIN;
  };

  crewManageTemplate = () => {
    const $main = document.querySelector(DOM.$MAIN);
    $main.innerHTML = TEMPLATE.CREW_MANAGE;
  };

  checkLastChild = ($main, $section) => {
    if ($main.childElementCount === LENGTH_CHECK.ONE) {
      $main.appendChild($section);

      return;
    }

    $main.removeChild($main.lastChild);
    $main.appendChild($section);
  };

  crewFrontendTemplate = () => {
    const $main = document.querySelector(DOM.$MAIN);
    const $section = document.createElement(DOM.$SECTION);
    $section.innerHTML = TEMPLATE.CREW_FRONTEND;
    this.checkLastChild($main, $section);
  };

  crewBackendTemplate = () => {
    const $main = document.querySelector(DOM.$MAIN);
    const $section = document.createElement(DOM.$SECTION);
    $section.innerHTML = TEMPLATE.CREW_BACKEND;
    this.checkLastChild($main, $section);
  };
}
