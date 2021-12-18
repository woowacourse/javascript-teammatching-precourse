import { APP } from '../constants.js';
import makeHeader from './makeHeader.js';

const printHeader = () => {
  const $app = document.getElementById(APP);
  $app.appendChild(makeHeader());
};

export default printHeader;
