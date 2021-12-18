const isSame = (names, inputName) => {
  return names.find((name) => name === inputName);
};

const isEmpty = (name) => {
  return !name;
};

const isMoreThanFive = (name) => {
  return name.length > 5;
};

export const isValidName = (names, inputName) => {
  return (
    !isEmpty(inputName) &&
    !isMoreThanFive(inputName) &&
    !isSame(names, inputName)
  );
};

export const alertNameError = (names, inputName) => {
  if (isEmpty(inputName)) {
    alert('이름을 입력해주세요');
  }
  if (isMoreThanFive(inputName)) {
    alert('5자 이하의 이름을 입력해주세요');
  }
  if (isSame(names, inputName)) {
    alert('이미 존재하는 이름입니다');
  }
};
