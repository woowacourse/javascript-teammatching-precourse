class MatchingValidator {
  static isNegative(memberCount) {
    if (memberCount < 0) {
      alert('1 이상의 정수를 입력해주세요.');
      return;
    }
  }

  static isInvalidMemberCount(memberCount) {
    if (this.isNegative(memberCount)) return true;
    return false;
  }
}

export default MatchingValidator;
