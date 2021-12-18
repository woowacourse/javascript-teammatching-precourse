import { $ } from '../common/element.js';
import createHeader from './Header/Header.js';
import createMain from './Main/Main.js';

export default function createView() {
  const header = createHeader();
  $('app').append(header);
  createMain();
}
