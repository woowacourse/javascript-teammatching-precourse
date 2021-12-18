import { $ } from '../common/element.js';
import style from '../common/style.js';
import createHeader from './Header/Header.js';

export default function createView() {
  document.head.innerHTML += style;
  const header = createHeader();
  $('app').append(header);
}
