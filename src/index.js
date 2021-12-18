import triggerEvent from './controller/tap.js';
import {
    triggerSelectCourse,
    triggerAddCrew,
    triggerDeleteCrew,
} from './controller/manageCrew/manageCrew.js';
import { triggerMatchTeam } from './controller/manageTeam/manageTeam.js';

triggerEvent();
triggerSelectCourse();
triggerAddCrew();
triggerDeleteCrew();
triggerMatchTeam();
