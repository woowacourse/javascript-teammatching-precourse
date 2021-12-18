import { ERROR_MSG } from '../../constants/constants.js';
import { NAME_MAX_LENGTH } from '../../constants/constants.js';

export const inputCrewNameValidation = (name, crewArray) => {
  const validation = {
    isError: false,
    inValidText: '',
  };

  if (!name) {
    validation.isError = true;
    validation.inValidText = ERROR_MSG.INPUT_NAME;
    return validation;
  }

  if (name.length > NAME_MAX_LENGTH) {
    validation.isError = true;
    validation.inValidText = ERROR_MSG.OVER_NAME_LENGTH;
    return validation;
  }

  let isDuplicate = crewArray.find(item => item.name === name);

  if (isDuplicate) {
    validation.isError = true;
    validation.inValidText = ERROR_MSG.DUPLICATE_NAME;
    return validation;
  }

  return validation;
};
