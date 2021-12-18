import { ERR_MSG_DUPLICATE_NAME, ERR_MSG_NO_INPUT, ERR_MSG_OVER_5WORDS } from "../constants/constants.js";
import { getLocalStorageItem } from "./localStorage.js";

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

export function isDuplicateCrew(key, crew) {
  const crewList = getLocalStorageItem(key);
  let isDuplicate = false;
  if(crewList === null) return isDuplicate;
  crewList.map((item) => {
    if(item === crew) isDuplicate = true;
  })
  if(isDuplicate) alert(ERR_MSG_DUPLICATE_NAME);
  return isDuplicate;
}