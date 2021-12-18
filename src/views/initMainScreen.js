import { $ } from '../utils/dom.js';
import { mainTemplate } from '../utils/template.js';

export const initMainScreen = () => {
  $('#app').innerHTML = mainTemplate;
};
