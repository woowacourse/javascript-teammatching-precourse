import { MAX_LENGTH_NAME, NOT_EXIST } from '../utils/constants.js';

export default class CrewCheck {
  constructor(name) {
    this.name = name;
  }

  checkEmpty() {
    return this.name !== '' && this.name.indexOf(' ') === NOT_EXIST;
  }

  checkLength() {
    return this.name.length <= MAX_LENGTH_NAME;
  }

  // 중복 체크하는거 추가해야됨

  checkAll() {
    return this.checkEmpty() && this.checkLength();
  }
}
