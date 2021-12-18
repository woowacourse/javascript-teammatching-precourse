import { $ } from '../../common/element.js';
import createCrewManageNav from './CrewManageNav/CrewManageNav.js';
import createTeamManageNav from './TeamManageNav/TeamManageNav.js';

export default function createMain() {
  const crewManageNav = createCrewManageNav();
  const teamManageNav = createTeamManageNav();
  $('app').append(crewManageNav, teamManageNav);
}
