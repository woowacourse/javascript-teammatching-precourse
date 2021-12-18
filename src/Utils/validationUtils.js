export default class ValidationUtils {
  static checkInputName(text, list) {
    if (!text) throw new Error('이름을 입력해주세요.');
    if (text.length > 5) throw new Error('이름을 5글자 이하로 입력해주세요');
    if (list.includes(text)) throw new Error('동일한 크루 이름이 존재합니다.');
  }

  static checkInputNumber(number) {
    if (number <= 0) throw new Error('1이상으로 입력해주세요');
  }
}
