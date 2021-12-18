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

  deleteTargetCrew = (targetName, targetCrew) => {
    const $targetElement = document.querySelector(DOM.$TR_TARGET_NAME(targetName));

    $targetElement.remove();
    // 현재 이부분이 잘 안된다.. . 다시 확인 필요
    // if (confirm('정말 삭제하실래요?')) {
    //   targetCrew.removeCrew(targetName);
    // }
  };

  onClickDeleteCrewButton = (targetCrew) => {
    const $$deleteCrewButtons = [...document.querySelectorAll(DOM.$DELETE_CREW_BUTTON)];

    $$deleteCrewButtons.forEach(($deleteCrewButton) => {
      $deleteCrewButton.addEventListener(EVENT.CLICK, () => {
        this.deleteTargetCrew($deleteCrewButton.dataset.targetName, targetCrew);
        return;
      });
    });
  };

  setCrewList = ($crewNameInput, targetCrew) => {
    targetCrew.setCrew($crewNameInput.value);
    this.crewTableTemplateRender(targetCrew);
    this.onClickDeleteCrewButton(targetCrew);
  };

  isValidateInput = (targetCrew) => {
    const input = new Input(this.render, targetCrew);
    const $crewNameInput = document.querySelector(DOM.$CREW_NAME_INPUT);
    !input.isBlank($crewNameInput) &&
      !input.isOverLengthSix($crewNameInput) &&
      !input.isDuplicate($crewNameInput) &&
      this.setCrewList($crewNameInput, targetCrew);
  };

  onClickAddCrewButton = (targetCrew) => {
    const $addCrewButton = document.querySelector(DOM.$ADD_CREW_BUTTON);
    $addCrewButton.addEventListener(EVENT.CLICK, (event) => {
      event.preventDefault();
      this.isValidateInput(targetCrew);
    });
  };

  teamSelectTemplateRender = () => {
    this.render.teamSelectTemplate();
  };

  crewTabTargetCheck = (eventTarget, $crewTab) => {
    if (eventTarget === $crewTab) {
      this.crewManageTemplateRender();

      return;
    }
  };

  crewRadioFrontTargetCheck = (eventTargetValue) => {
    if (eventTargetValue === RADIO_SELECT.FRONTEND) {
      this.crewFrontendTemplateRender();
      this.onClickAddCrewButton(this.frontCrew);

      return;
    }
  };

  crewRadioBackTargetCheck = (eventTargetValue) => {
    if (eventTargetValue === RADIO_SELECT.BACKEND) {
      this.crewBackendTemplateRender();
      this.onClickAddCrewButton(this.backCrew);

      return;
    }
  };

  teamTabTargetCheck = (eventTarget) => {
    const $teamTab = document.querySelector(DOM.$TEAM_TAP);
    if (eventTarget === $teamTab) {
      this.teamSelectTemplateRender();

      return;
    }
  };

  onClickCrewTabButton = () => {
    const $app = document.querySelector(DOM.$APP);
    const $crewTab = document.querySelector(DOM.$CREW_TAP);

    $app.addEventListener(EVENT.CLICK, (event) => {
      this.crewTabTargetCheck(event.target, $crewTab);
      this.crewRadioFrontTargetCheck(event.target.value);
      this.crewRadioBackTargetCheck(event.target.value);
      this.teamTabTargetCheck(event.target);
    });
  };

  main = () => {
    this.mainTemplateRender();
    this.onClickCrewTabButton();
  };
}
