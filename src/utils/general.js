export const isObjectEmpty = object => Object.keys(object).length === 0;

export const generateObjectWithKey = (keyObject, defaultValue) => {
  const newObject = {};
  for (const [, value] of Object.entries(keyObject)) {
    newObject[value] = defaultValue;
  }
  return newObject;
};
