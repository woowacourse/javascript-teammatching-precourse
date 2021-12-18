const isNaturalNumber = (number) => {
  if (parseInt(number, 10) > 0) {
    return true;
  }

  return false;
};

export { isNaturalNumber };
