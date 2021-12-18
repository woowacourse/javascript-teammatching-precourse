const isNaturalNumber = (number) => {
  if (parseInt(number, 10) > 0) {
    return true;
  }

  return false;
};

const isValidLengthName = (name) => {
  if (name.length > 5 || name.length <= 0) {
    return false;
  }
  return true;
};
export { isNaturalNumber, isValidLengthName };
