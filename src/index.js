import triggerTapEvent from './controller/tap.js';
import {
    triggerSelectCourse,
    triggerAddCrew,
    triggerDeleteCrew,
} from './controller/manageCrew/manageCrew.js';
import {
    triggerShowTeam,
    triggerMatchTeam,
    triggerRematchTeam,
} from './controller/manageTeam/manageTeam.js';

triggerTapEvent();
triggerSelectCourse();
triggerAddCrew();
triggerDeleteCrew();
triggerShowTeam();
triggerMatchTeam();
triggerRematchTeam();
