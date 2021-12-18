// import { $, ID } from '../utils/constants.js';

export const clearInputs = (inputElements) => {
  inputElements.map((el) => {
    el.value = '';
  });
};
