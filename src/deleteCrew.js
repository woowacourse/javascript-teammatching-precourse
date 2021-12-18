import { CREW } from './util/constant.js'
import { printCrewTable } from './print/printCrewTable.js';

export function deleteCrew(e) {
    if (e.target.className === 'delete-crew-buttton') {
        const $crewName = e.target.dataset.crewname;

        if (CREW.COURSE === 'Frontend') {
            CREW.FRONTCREWLIST = CREW.FRONTCREWLIST.filter(e => e.name !== $crewName);
        }
        else if (CREW.COURSE === 'Backend') {
            CREW.BACKCREWLIST = CREW.BACKCREWLIST.filter(e => e.name !== $crewName);
        }
        printCrewTable();
    }
}