class crewValidator {
  static isDuplicate({ crewName, crewList }) {
    if (crewList.some((crew) => crew === crewName)) {
      alert('중복된 크루 이름이 존재합니다.');
      return true;
    }
  }

  static isOverFiveCharacter(crewName) {
    if (crewName.length > 5) {
      alert('크루 이름은 최대 5글자까지 가능합니다.');
      return true;
    }
  }

  static isInvalidCrewName({ crewName, crewList }) {
    if (this.isDuplicate({ crewName, crewList })) return true;
    if (this.isOverFiveCharacter(crewName)) return true;
    return false;
  }
}

export default crewValidator;
