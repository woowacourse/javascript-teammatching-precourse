export default class Input {
  constructor(render, targetCrew) {
    this.render = render;
    this.targetCrew = targetCrew;
  }

  isBlank = ($crewNameInput) => {
    if ($crewNameInput.value.trim().length === 0) {
      this.render.alertMessage('크루 이름을 입력해주세요.');

      return true;
    }
    return false;
  };

  isOverLengthSix = ($crewNameInput) => {
    if ($crewNameInput.value.length > 5) {
      this.render.alertMessage('크루 이름은 5글자를 초과할 수 없습니다.');

      return true;
    }

    return false;
  };

  isDuplicate = ($crewNameInput) => {
    if (this.targetCrew.getCrewList().find((crew) => crew === $crewNameInput.value)) {
      this.render.alertMessage('이미 존재하는 크루의 이름을 추가할 수 없습니다.');

      return true;
    }

    return false;
  };
}
