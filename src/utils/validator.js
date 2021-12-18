export default class Validator {
  static isShorter(value, maxLength) {
    return maxLength >= value;
  }

  static isDuplicated(array, value) {
    return array.includes(value);
  }

  static isEmpty(value) {
    return value === '';
  }
}
