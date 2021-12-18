import { $ } from '../../common/element.js';

function onTabClick(event) {
  const target = event.target.id;

  if (target === 'crew-tab') {
    $('crew-manage-nav').style.display = 'block';
  }
}

export default function selectNav() {
  $('crew-tab').addEventListener('click', onTabClick);
  $('team-tab').addEventListener('click', onTabClick);
}
