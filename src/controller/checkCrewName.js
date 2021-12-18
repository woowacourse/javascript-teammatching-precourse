import {
  NOT_BLANK,
  NOT_DUPLICATE_CREW_NAME,
  NOT_VALID_LENGTH_CREW_NAME,
  ONLY_KOREAN,
} from "../constant/alertMessage.js";
import Crew from "../model/Crew.js";

const isValidLength = name => name.length <= 5;

const isBlank = name => name.length === 0;

const isKorean = name => {
  const notKorean = /[^가-힝]/g.test(name);
  return notKorean;
};

const isDuplicate = (name, course) => {
  const currentCrewList = Crew.getCurrentCrewList(course);
  const isExist = currentCrewList.filter(crew => crew.name === name);
  return isExist.length;
};

export const checkValidCrewName = (name, course) => {
  const removeBlankName = name.replace(/\s*/g, "");
  if (isBlank(removeBlankName)) {
    alert(NOT_BLANK);
    return false;
  }

  if (!isValidLength(removeBlankName)) {
    alert(NOT_VALID_LENGTH_CREW_NAME);
    return false;
  }

  if (isKorean(removeBlankName)) {
    alert(ONLY_KOREAN);
    return false;
  }

  if (isDuplicate(removeBlankName, course)) {
    alert(NOT_DUPLICATE_CREW_NAME);
    return false;
  }

  return true;
};
