import { CREW } from './util/constant.js';
import { printCrewTable } from './print/printCrewTable.js';

export function courseSelect(e) {
    if (e.target.value === 'frontend') {
        CREW.COURSE = 'Frontend';
    }
    else if (e.target.value === 'backend') {
        CREW.COURSE = 'Backend';
    }

    const $crewManageTitle = document.querySelector('#crew-manage-title');
    const $crewListTitle = document.querySelector('#crew-list-title');
    const $crewManage = document.querySelector('#crew-manage');
    const $crewList = document.querySelector('#crew-list');

    $crewManage.classList.remove('hide');
    $crewManage.classList.add('show');
    $crewList.classList.remove('hide');
    $crewList.classList.add('show');
    $crewManageTitle.innerHTML = `${CREW.COURSE} 크루 관리`;
    $crewListTitle.innerHTML = `${CREW.COURSE} 크루 목록`;

    printCrewTable();
}