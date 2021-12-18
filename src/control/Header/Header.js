import { $ } from '../../common/element.js';

function onTabClick(event) {
  const target = event.target.id;

  if (target === 'crew-tab') {
    $('crew-manage-nav').style.display = 'block';
    $('team-manage-nav').style.display = 'none';
  } else if (target === 'team-tab') {
    $('team-manage-nav').style.display = 'block';
    $('crew-manage-nav').style.display = 'none';
  }
}

export default function selectNav() {
  $('crew-tab').addEventListener('click', onTabClick);
  $('team-tab').addEventListener('click', onTabClick);
}
