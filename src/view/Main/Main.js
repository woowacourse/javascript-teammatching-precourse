import { $ } from '../../common/element.js';
import createCrewManageNav from './CrewManageNav/CrewManageNav.js';

function removeOld(nav) {
  if (nav) {
    nav.remove();
  }
}

export default function createMain(target) {
  const tab = target.id;
  let nav = '';

  if (tab === 'crew-tab') {
    nav = createCrewManageNav();
    removeOld($('crew-manage-nav'));
  }

  $('app').append(nav);
}
