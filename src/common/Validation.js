import { ALERT, CONFIRM } from "../constants/const.js";

export default class Validation {
  isEmtpyInput(name) {
    if (name === "") {
      alert(ALERT.DEFAULT + ALERT.EMPTY);
      return false;
    }
    return true;
  }

  isConfirm() {
    if (confirm(CONFIRM.DELETE) === true) {
      return true;
    } else {
      return;
    }
  }
}
