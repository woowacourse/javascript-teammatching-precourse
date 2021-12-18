const NAME_MAX_LENGTH = 5;

// 5자 넘어가면 검출되게
export const validateName = name => {
  if (name.length > NAME_MAX_LENGTH) {
    window.alert('5자 이하를 입력해주세요');
    return false;
  }
  return true;
};
