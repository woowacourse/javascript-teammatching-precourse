import { DOM, LENGTH_CHECK, TEMPLATE } from '../utils/constant.js';

export default class Render {
  constructor() {
    this.$app = document.querySelector(DOM.$APP);
  }

  alertMessage = (message) => {
    alert(message);
  };

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

  crewTableTemplate = (targetCrew) => {
    const $tbody = document.querySelector(DOM.$TBODY);
    const $tr = document.createElement('tr');
    const targetName = targetCrew.getLastCrew();
    $tr.dataset.targetName = targetName;
    $tr.innerHTML = TEMPLATE.CREW_TD(targetCrew.getLastCrewIndex(), targetName);
    $tbody.appendChild($tr);
  };
}
