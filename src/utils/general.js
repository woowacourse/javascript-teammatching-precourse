export const isObjectEmpty = object => Object.keys(object).length === 0;

export const convertObjectToArray = object => Object.entries(object);

export const generateObjectWithKey = (keyObject, defaultValue) => {
  const newObject = {};
  for (const [, value] of convertObjectToArray(keyObject)) {
    newObject[value] = defaultValue;
  }
  return newObject;
};
