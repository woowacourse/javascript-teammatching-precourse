import { printPage } from './printPage.js';
import { useTabButton } from './useTabButton.js';
import { courseSelect } from './courseSelect.js'

printPage();

window.onload = function () {
    document.addEventListener('click', function (e) { useTabButton(e) });

    const $crewTabSelectCourse = document.querySelector('#crew-tab-select-course');
    $crewTabSelectCourse.addEventListener('click', function(e){ courseSelect(e) })
}