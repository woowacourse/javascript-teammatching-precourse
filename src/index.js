import { printPage } from './printPage.js';
import { useTabButton } from './useTabButton.js';
import { courseSelect } from './courseSelect.js';
import { FRONTCREW, CREW } from './constant.js';
import { addCrew } from './addCrew.js';
import { printCrewTable } from './printCrewTable.js';
import { deleteCrew } from './deleteCrew.js';

printPage();

window.onload = function () {
    document.addEventListener('click', function (e) { useTabButton(e) });

    const $crewTabSelectCourse = document.querySelector('#crew-tab-select-course');
    $crewTabSelectCourse.addEventListener('click', function(e){ courseSelect(e) })

    const $addCrewButtton = document.querySelector('#add-crew-buttton')
    $addCrewButtton.addEventListener('click', function(){
        addCrew()
    })

    const $crewTable = document.querySelector('#crew-table')
    $crewTable.addEventListener('click',function(e){ deleteCrew(e) }) 


}