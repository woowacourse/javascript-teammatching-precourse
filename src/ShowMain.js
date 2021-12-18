import { HTML_OF_HEADER } from './utils/html.js';

export default function showMain() {
  document.getElementById('app').innerHTML += HTML_OF_HEADER;
}
