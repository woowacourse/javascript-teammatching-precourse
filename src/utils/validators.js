import { default as DB } from '../model/database.js';

export const isValidName = (string, courseType) => {
  if (isBlank(string)) return alert('빈칸으로 제출 할 수 없습니다.');
  if (isIncludeSpace(string)) return alert('공백을 포함해서 제출 할 수 없습니다.');
  if (hasSpecial(string)) return alert('특수문자를 포함할 수 없습니다.');
  if (isDuplicated(string, courseType)) return alert('이미 같은 이름이 존재합니다.');
  if (isOverFiveLetter(string)) return alert('5자 초과하는 이름은 입력할 수 없습니다.');

  return true;
};

const isBlank = string => {
  return string.length === 0;
};

const isIncludeSpace = string => {
  return /\s/g.test(string);
};

const hasSpecial = string => {
  return string.split('').some(char => /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/g.test(char));
};

const isDuplicated = (string, courseType) => {
  return DB.load(`${courseType}Crew`).some(name => name === string);
};

const isOverFiveLetter = string => {
  return string.length > 5;
};
