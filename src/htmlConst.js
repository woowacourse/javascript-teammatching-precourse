import { setMenuObjectFlag, getMenuObject, getMenueObjectKey } from './setMenuObject.js';
import {
    CrewTabTrueFlag, CrewTabFalseFlag, TeamTabTrueFlag, TeamTabFalseFlag,
} from './Consts.js';
import { checkNameNull, checkNameLength, checkDuplicate } from './checkName.js';
import { pushCrewObject } from './pushCrewObject.js';
import { displayCrewTable } from './displayCrewTable.js';

export const $manageCrew = document.querySelector('#manage-crew');
export const $manageTeam = document.querySelector('#manage-team');
export const $crewTabButton = document.querySelector('#crew-tab');
export const $teamTabButton = document.querySelector('#team-tab');
export const $addCrewButton = document.querySelector('#add-crew-buttton');
export const $crewNameInput = document.querySelector('#crew-name-input');
export const $frontendCourseRadioButton = document.querySelector('#frontend-course');
export const $backendCourseRadioButton = document.querySelector('#backend-course');
export const $crewTable = document.querySelector('#crew-table');
export const $deleteCrewButtton = document.querySelectorAll('.delete-crew-buttton');





$addCrewButton.addEventListener('click', (e) => {
    e.preventDefault();
    const courseName = getCourseName();
    const crewName = $crewNameInput.value;
    if (!checkNameNull(crewName) || !checkNameLength(crewName) || !checkDuplicate(crewName, courseName)) return;
    pushCrewObject(courseName, crewName);
    displayCrewTable(courseName);
});

const getCourseName = () => {
    if ($frontendCourseRadioButton.checked) return $frontendCourseRadioButton.value;
    return $backendCourseRadioButton.value;
};

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
    $crewTable.style.display = 'none';
    $manageCrew.style.display = 'none';
    $manageTeam.style.display = 'none';
};
const displayCrewTab = () => {
    $crewTable.style.display = 'none';
    $manageCrew.style.display = '';
    $manageTeam.style.display = 'none';
};
const displayTeamTab = () => {
    $crewTable.style.display = 'none';
    $manageCrew.style.display = 'none';
    $manageTeam.style.display = '';
};
