import Crew from '../model/Crew.js';
import { DOM, EVENT } from '../utils/constant.js';
import Render from '../view/Render.js';

export default class Controller {
  constructor() {
    this.render = new Render();
    this.frontCrew = new Crew();
  }

  mainTemplateRender = () => {
    this.render.mainTemplate();
  };

  crewManageTemplateRender = () => {
    this.render.crewManageTemplate();
  };

  onClickCrewTabButton = () => {
    const $crewTab = document.querySelector(DOM.$CREW_TAP);
    $crewTab.addEventListener(EVENT.CLICK, () => {
      this.crewManageTemplateRender();
    });
  };

  main = () => {
    this.mainTemplateRender();
    this.onClickCrewTabButton();
  };
}
