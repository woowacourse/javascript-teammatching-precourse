export const checkValidName = (crews, name) => {
  if (isDuplicatedName(crews, name)) {
    throw Error("이름이 중복되었습니다");
  }
  if (isEmpty(name)) {
    throw Error("이름은 공백이 될수 없습니다");
  }
  if (isOverValidLength(name)) {
    throw Error("이름은 5글자 이하로 입력해주세요");
  }
};

const isDuplicatedName = (crews, name) => {
  return crews.includes(name);
};

const isEmpty = (name) => {
  return name.length === 0;
};

const isOverValidLength = (name) => {
  return name.length > 5;
};
