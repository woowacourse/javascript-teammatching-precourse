import { createCourseSelector } from './crewManager/createCourseSelector.js';
import { createCrewManager } from './crewManager/createCrewManager.js';
import { createCrewTable } from './crewManager/createCrewTable.js';
import { initCrewManager } from './crewManager/initCrewManager.js';
import { createMenu } from './menu/menu.js';
import { createCourseMissionSelector } from './teamManager/createCourseMissionSelector.js';
import { createTeamManager } from './teamManager/createTeamManager.js';
import { initTeamManager } from './teamManager/initTeamManager.js';

export const initView = () => {
  createMenu();
  initCrewManager();
  initTeamManager();
  createCourseSelector();
  createCourseMissionSelector();

  // createCrewManager('프론트엔드');
  // createCrewTable('frontend');
  // createTeamManager('frontend', '숫자야구');
};
