import { $ } from '../../common/element.js';
import createMain from '../../view/Main/Main.js';

function onTabClick(event) {
  createMain(event.target);
}

export default function selectNav() {
  $('crew-tab').addEventListener('click', onTabClick);
  $('team-tab').addEventListener('click', onTabClick);
}
