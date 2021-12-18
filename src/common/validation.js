export const isEmpty = (value) => value === null || value === undefined || value === '' || value === 0;
export const isPositiveNumber = (number) => !isEmpty(number) && number >= 0;
export const isValidName = (string) => !isEmpty(string) && string.length > 0 && string.length < 6;
