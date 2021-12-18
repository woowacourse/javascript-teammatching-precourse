import { getData } from '../utils/handleData.js';

export const validator = function validInputOrAlert(validation, input, error) {
  if (!validation(input)) {
    alert(error);
    return false;
  }
  return true;
};

export const isValidName = function checkNameValidity(str) {
  const courseData = getData('course') || {};
  const crews = Object.keys(courseData)
    .map((course) => courseData[course])
    .flat();
  return (
    !crews.includes(str) &&
    str.replace(/\s/g, '').length > 0 &&
    str.replace(/\s/g, '').length < 6
  );
};
