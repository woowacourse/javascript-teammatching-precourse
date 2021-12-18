import createSelect from './Select.js';

export default function createTeamManageNav() {
  const teamManageNav = document.createElement('div');
  teamManageNav.setAttribute('id', 'team-manage-nav');
  teamManageNav.style.display = 'none';

  const select = createSelect();
  teamManageNav.innerHTML += select;

  return teamManageNav;
}
