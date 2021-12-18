export const isValidCrewName = (name) => {
  return isNotNull(name) && isNotDuplicate(name);
};

const isNotNull = (input) => {
  return input != '';
};

const isNotDuplicate = (name) => {
  const productsName = getStateFromLocalStorage().products.map(
    (item) => item.name
  );
  return !productsName.includes(name);
};
