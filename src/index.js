import { printPage } from './printPage.js';
import { useTabButton } from './useTabButton.js';
import { courseSelect } from './courseSelect.js';
import { FRONTCREW, CREW } from './constant.js';

printPage();

window.onload = function () {
    document.addEventListener('click', function (e) { useTabButton(e) });

    const $addCrewButtton = document.querySelector('#add-crew-buttton')
    $addCrewButtton.addEventListener('click', function(){
        
    })

    const $crewTabSelectCourse = document.querySelector('#crew-tab-select-course');
    $crewTabSelectCourse.addEventListener('click', function(e){ courseSelect(e) })


}