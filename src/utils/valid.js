import { ERR_MSG_NO_INPUT, ERR_MSG_OVER_5WORDS } from "../constants/constants.js";

export function isOver5Words(text) {
  if(text.length === 0) {
    alert(ERR_MSG_NO_INPUT);
    return true;
  }
  else if(text.length > 5) {
    alert(ERR_MSG_OVER_5WORDS);
    return true;
  }
  else return false;
}