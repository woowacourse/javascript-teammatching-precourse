import { printPage } from './printPage.js';
import { useTabButton } from './useTabButton.js';

printPage();

window.onload = function () {
    document.addEventListener('click', function (e) { useTabButton(e); });

    
}