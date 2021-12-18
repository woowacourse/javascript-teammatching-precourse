export const isEmpty = (value) => value !== null && value !== '';

export const isLength = (value, [minimum, maximum]) =>
  value.length >= minimum && value.length <= maximum;

export const isPositiveNumber = (value) => /\d/g.test(value) && value > 0;

export const isUniqueName = (nameList, targetName) => {
  let isUnique = true;
  nameList.forEach(({ name: crewName }) => {
    if (crewName !== targetName) return true;

    isUnique = false;
    return false;
  });

  return isUnique;
};
