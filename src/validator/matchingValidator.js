class MatchingValidator {
  static isNegative(memberCount) {
    if (memberCount < 0) {
      alert('1 이상의 정수를 입력해주세요.');
      return true;
    }
  }

  static isFloat(memberCount) {
    if (!Number.isInteger(memberCount)) {
      alert('1 이상의 정수를 입력해주세요.');
      return true;
    }
  }

  static isBlank(memberCount) {
    if (memberCount === 0) {
      alert('1 이상의 정수를 입력해주세요.');
      return true;
    }
  }

  static isInvalidMemberCount(memberCount) {
    if (this.isNegative(memberCount)) return true;
    if (this.isFloat(memberCount)) return true;
    if (this.isBlank(memberCount)) return true;
    return false;
  }
}

export default MatchingValidator;
