export const isNaturalNum = (numString) => {
  if (/[^0-9]+/.test(numString)) {
    return false;
  }
  const num = parseInt(numString, 10);
  if (num === 0) {
    return false;
  }
  return true;
};

export const isEmptyString = (str) => {
  return !str || /^\s*$/.test(str);
};
