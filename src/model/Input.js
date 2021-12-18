import { LENGTH_CHECK, ERROR_MESSSAGE, NUMBER } from '../utils/constant.js';

export default class Input {
  constructor(render, targetCrew) {
    this.render = render;
    this.targetCrew = targetCrew;
  }

  isBlank = ($crewNameInput) => {
    if ($crewNameInput.value.trim().length === LENGTH_CHECK.ZERO) {
      this.render.alertMessage(ERROR_MESSSAGE.BLANK_NAME);

      return true;
    }
    return false;
  };

  isOverLengthSix = ($crewNameInput) => {
    if ($crewNameInput.value.length > LENGTH_CHECK.FIVE) {
      this.render.alertMessage(ERROR_MESSSAGE.OVER_SIX_LENGTH);

      return true;
    }

    return false;
  };

  isDuplicate = ($crewNameInput) => {
    if (this.targetCrew.getCrewList().find((crew) => crew[NUMBER.ONE] === $crewNameInput.value)) {
      this.render.alertMessage(ERROR_MESSSAGE.NO_DUPLICATE);

      return true;
    }

    return false;
  };
}
