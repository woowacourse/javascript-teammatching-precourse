import { CREW, FRONTCREW, BACKCREW } from "./util/constant.js";
import { printCrewTable } from './print/printCrewTable.js';
import { chceckCrewNameValid } from './checkValid/checkCrewNameValid.js';

export function addCrew() {
    let $crewNameInputValue = document.querySelector('#crew-name-input').value;

    if (chceckCrewNameValid($crewNameInputValue)) {
        if (CREW.COURSE === 'Frontend') {
            $crewNameInputValue = new FRONTCREW($crewNameInputValue);
            CREW.FRONTCREWLIST.push($crewNameInputValue);
        }
        else if (CREW.COURSE === 'Backend') {
            $crewNameInputValue = new BACKCREW($crewNameInputValue);
            CREW.BACKCREWLIST.push($crewNameInputValue);
        }
    }

    printCrewTable();


}
