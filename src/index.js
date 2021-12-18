import { printPage } from './print/printPage.js';
import { useTabButton } from './util/useTabButton.js';
import { courseSelect } from './courseSelect.js';
import { addCrew } from './addCrew.js';
import { deleteCrew } from './deleteCrew.js';

printPage();

window.onload = function () {
    document.addEventListener('click', function (e) { useTabButton(e) });

    const $crewTabSelectCourse = document.querySelector('#crew-tab-select-course');
    $crewTabSelectCourse.addEventListener('click', function (e) { courseSelect(e) });

    const $addCrewButtton = document.querySelector('#add-crew-buttton');
    $addCrewButtton.addEventListener('click', addCrew);

    const $crewTable = document.querySelector('#crew-table');
    $crewTable.addEventListener('click', function (e) { deleteCrew(e) });
}