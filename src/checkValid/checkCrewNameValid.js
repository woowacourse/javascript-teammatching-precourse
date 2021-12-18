import { CREW, ERROR } from '../util/constant.js';

export function chceckCrewNameValid($crewNameInputValue) {
    if ($crewNameInputValue.trim() === '') {
        alert(ERROR.CREW_NAME_EMPTY_ERROR);
        return false;
    }
    else if ($crewNameInputValue.length > 5) {
        alert(ERROR.CREW_NAME_LENGTH_ERROR);
        return false;
    }
    else if (CREW.COURSE === 'Frontend' && CREW.FRONTCREWLIST.length > 0 && CREW.FRONTCREWLIST.indexOf($crewNameInputValue) === -1) {
        alert(ERROR.CREW_NAME_DUPLICATE_ERROR);
        return false;
    }
    else if (CREW.COURSE === 'Backend' && CREW.BACKCREWLIST.length > 0 && CREW.BACKCREWLIST.indexOf($crewNameInputValue) === -1) {
        alert(ERROR.CREW_NAME_DUPLICATE_ERROR);
        return false;
    }
    return true;
}