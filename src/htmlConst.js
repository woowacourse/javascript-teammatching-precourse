import { setMenuObjectFlag, getMenuObject, getMenueObjectKey } from './setMenuObject.js';
import {
  CrewTabTrueFlag, CrewTabFalseFlag, TeamTabTrueFlag, TeamTabFalseFlag,
} from './Consts.js';

export const $manageCrew = document.querySelector('#manage-crew');
export const $manageTeam = document.querySelector('#manage-team');
export const $crewTabButton = document.querySelector('#crew-tab');
export const $teamTabButton = document.querySelector('#team-tab');

$crewTabButton.addEventListener('click', (e) => {
  e.preventDefault();
  setMenuObjectFlag(CrewTabTrueFlag, TeamTabFalseFlag);
  displayTab();
});

$teamTabButton.addEventListener('click', (e) => {
  e.preventDefault();
  setMenuObjectFlag(CrewTabFalseFlag, TeamTabTrueFlag);
  displayTab();
});

export const displayTab = () => {
  const menuObject = getMenuObject();
  const menuObjectKey = getMenueObjectKey();
  console.log(menuObject, menuObjectKey);

  if (menuObject == null) {
    displayNone();
  } else if (menuObject[menuObjectKey[0]] == CrewTabTrueFlag) {
    displayCrewTab();
  } else if (menuObject[menuObjectKey[1]] == TeamTabTrueFlag) {
    displayTeamTab();
  }
};

const displayNone = () => {
  $manageCrew.style.display = 'none';
  $manageTeam.style.display = 'none';
};
const displayCrewTab = () => {
  $manageCrew.style.display = '';
  $manageTeam.style.display = 'none';
};
const displayTeamTab = () => {
  $manageCrew.style.display = 'none';
  $manageTeam.style.display = '';
};
