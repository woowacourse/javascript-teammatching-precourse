const isInteger = num => {
  let check = true;

  if (isNaN(num)) {
    check = false;
  } else if (Number(num) % 1 !== 0) {
    check = false;
  }

  return check;
};

const isPositiveInteger = num => {
  let check = true;

  if (!isInteger(num)) {
    check = false;
  } else if (parseInt(num, 10) < 1) {
    check = false;
  }

  return check;
};

const isValidMemberCount = num => {
  return num.length > 0 && isPositiveInteger(num);
};

export { isValidMemberCount };
