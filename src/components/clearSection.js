import { $ } from '../dom.js';

export default function ClearSection(selctionName) {
  let container = $(`${selctionName}`);
  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }
}