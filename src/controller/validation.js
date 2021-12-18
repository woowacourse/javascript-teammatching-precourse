export const isNameLength = (value) => {
  return value.length > 5 ? false : true;
};

export const isEmpty = (value) => {
  return value === null || value.length === 0 ? false : true;
};

export const isSame = (value) => {
  const names = localStorage.getItem("crew").split(",");
  
  return names.includes(value);
};

export const validateInput = (value) => {
  console.log(isNameLength(value) , isEmpty(value) , isSame(value));
  return isNameLength(value) && isEmpty(value) && isSame(value);
};