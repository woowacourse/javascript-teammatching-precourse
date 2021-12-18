// import { $, ID } from '../utils/constants.js';
// import { getLocalStorage } from '../utils/commonLogics';

export const clearInputs = (inputElements) => {
  inputElements.map((el) => {
    el.value = '';
  });
};
