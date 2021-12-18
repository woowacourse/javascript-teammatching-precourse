import { APP } from '../constants.js';
import makeElement from './makeElement.js';

const makeMain = () => {
  const $main = makeElement('main');

  return $main;
};

const printMain = () => {
  const $app = document.getElementById(APP);
  $app.appendChild(makeMain());
};

export default printMain;
