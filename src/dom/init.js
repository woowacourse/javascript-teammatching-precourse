import { createCourseSelector } from './crewManager/createCourseSelector.js';
import { createCrewManager } from './crewManager/createCrewManager.js';
import { createCrewTable } from './crewManager/createCrewTable.js';
import { createMenu } from './menu/menu.js';
import { createCourseMissionSelector } from './teamManager/createCourseMissionSelector.js';
import { createTeamManager } from './teamManager/createTeamManager.js';

export const initView = () => {
  createMenu();

  // createCourseSelector();
  // createCrewManager('프론트엔드');
  // createCrewTable('frontend');
  // createCourseMissionSelector();
  // createTeamManager('frontend', '숫자야구');
};
