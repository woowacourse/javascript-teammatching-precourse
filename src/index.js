import triggerEvent from './controller/tap.js';
import {
    triggerSelectCourse,
    triggerAddCrew,
    triggerDeleteCrew,
} from './controller/crew/manageCrew.js';

triggerEvent();
triggerSelectCourse();
triggerAddCrew();
triggerDeleteCrew();
