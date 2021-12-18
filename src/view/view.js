import { $ } from '../common/element.js';
import createHeader from './Header/Header.js';

export default function createView() {
  const header = createHeader();
  $('app').append(header);
}
