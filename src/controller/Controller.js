import Crew from '../model/Crew.js';
import { DOM, EVENT, RADIO_SELECT } from '../utils/constant.js';
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

  crewFrontendTemplateRender = () => {
    this.render.crewFrontendTemplate();
  };

  isCheckedRadioInput = ($radioInput) => {
    if ($radioInput.value === RADIO_SELECT.FRONTEND) {
      this.crewFrontendTemplateRender();
    }

    if ($radioInput.value === RADIO_SELECT.BACKEND) {
      console.log('backend');
    }
  };

  onChangeRadioInput = () => {
    const $$radioInputs = [...document.querySelectorAll(DOM.$$RADIO_INPUTS)];
    $$radioInputs.forEach(($radioInput) => {
      $radioInput.addEventListener('change', () => {
        this.isCheckedRadioInput($radioInput);
      });
    });
  };

  onClickCrewTabButton = () => {
    const $crewTab = document.querySelector(DOM.$CREW_TAP);
    $crewTab.addEventListener(EVENT.CLICK, () => {
      this.crewManageTemplateRender();
      this.onChangeRadioInput();
    });
  };

  main = () => {
    this.mainTemplateRender();
    this.onClickCrewTabButton();
  };
}
