import { $ } from '../../common/element.js';
import createCrewManageNav from './CrewManageNav/CrewManageNav.js';

export default function createMain() {
  const crewManageNav = createCrewManageNav();
  $('app').append(crewManageNav);
}
