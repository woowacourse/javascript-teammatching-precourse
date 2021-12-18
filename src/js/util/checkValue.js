import { $ } from './dom.js';

export const check = {
  crewNameDuplication(inputValue, crewList) {
    for (let crew in crewList) {
      if (crewList[crew].name === inputValue) {
        return true;
      }
    }
  },

  inputValueBlank(inputValue) {
    return inputValue === '';
  },

  inputValueLength(inputValue) {
    return inputValue.length > 5;
  },

  course() {
    let course = '';
    if ($('#frontend-course').checked) {
      course = 'frontCrew';
    } else {
      course = 'backCrew';
    }
    return course;
  },

  inputValueNotNum(inputValue) {
    const inputValueToArray = inputValue.split('');
    let checkNum = inputValueToArray.filter(x =>
      NUM.includes(parseInt(x, DECIMAL)),
    );
    return !(checkNum.length === inputValueToArray.length);
  },

  inputValueRange(inputValue, minValue) {
    return parseInt(inputValue, 10) < minValue;
  },
};
