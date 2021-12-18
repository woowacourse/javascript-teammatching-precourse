import Crew from '../model/Crew.js';
import Input from '../model/Input.js';
import { DOM, EVENT, RADIO_SELECT } from '../utils/constant.js';
import Render from '../view/Render.js';

export default class Controller {
  constructor() {
    this.render = new Render();
    this.frontCrew = new Crew();
    this.backCrew = new Crew();
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

  crewBackendTemplateRender = () => {
    this.render.crewBackendTemplate();
  };

  crewTableTemplateRender = (targetCrew) => {
    this.render.crewTableTemplate(targetCrew);
  };

  setCrewList = ($crewNameInput, targetCrew) => {
    targetCrew.setCrew($crewNameInput.value);
    this.crewTableTemplateRender(targetCrew);
  };

  isValidateInput = (targetCrew) => {
    const input = new Input(this.render, targetCrew);
    const $crewNameInput = document.querySelector('#crew-name-input');
    !input.isBlank($crewNameInput) &&
      !input.isOverLengthSix($crewNameInput) &&
      !input.isDuplicate($crewNameInput) &&
      this.setCrewList($crewNameInput, targetCrew);
  };

  onClickAddCrewButton = (targetCrew) => {
    const $addCrewButton = document.querySelector('#add-crew-button');
    $addCrewButton.addEventListener('click', (event) => {
      event.preventDefault();
      this.isValidateInput(targetCrew);
    });
  };

  isCheckedRadioInput = ($radioInput) => {
    if ($radioInput.value === RADIO_SELECT.FRONTEND) {
      this.crewFrontendTemplateRender();
      this.onClickAddCrewButton(this.frontCrew);
    }

    if ($radioInput.value === RADIO_SELECT.BACKEND) {
      this.crewBackendTemplateRender();
      this.onClickAddCrewButton(this.backCrew);
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
