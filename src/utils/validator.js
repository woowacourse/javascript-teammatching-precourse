export function isNotEmpty(input) {
  return input.replace(/ /gi, '') !== '';
}

export function isNotOverFive(input) {
  return input.length <= 5;
}

export function isValidName(input) {
  return isNotEmpty(input) && isNotOverFive(input);
}
