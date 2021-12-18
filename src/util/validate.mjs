const NAME_MAX_LENGTH = 5;

// 5자 넘어가면 검출되게
const errorMessage = message => {
  window.alert(message);
};

export const validateNameLength = name => name.length < NAME_MAX_LENGTH;

export const validateName = name => {
  if (!validateNameLength(name)) {
    errorMessage('5자 이하를 입력해주세요');
    return false;
  }
  return true;
};
