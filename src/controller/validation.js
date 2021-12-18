export const isNameLength = value => !(value.length > 5);

export const isEmpty = value => !(value === null || value.length === 0);

export const isSame = value => {
  const names = localStorage.getItem('crew').split(',');

  return names.includes(value);
};

export const validateInput = value => isNameLength(value) && isEmpty(value);
