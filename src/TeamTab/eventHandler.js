import Course from '../Models/course.js';
import Mission from '../Models/Mission.js';
import { getDom } from '../utils/handleDOM.js';
import {
  ID_COURSE_SELECT,
  ID_MATCH_INPUT,
  ID_MISSION_SELECT,
} from './constants.js';

export const checkMatch = function handleShowMissionInput(renderResult) {
  const courseInput = getDom(`#${ID_COURSE_SELECT}`);
  const missionInput = getDom(`#${ID_MISSION_SELECT}`);

  const members = Mission.getTeamsFromStorage(
    courseInput.value,
    missionInput.value
  );
  console.log(members);
  const course = new Course(courseInput.value);

  renderResult(members, course);
};

// export const getMatchData = function getMatchDataObject() {};

export const handleMatchTeams = function handleMatchTeamSubmit(renderResult) {
  const courseInput = getDom(`#${ID_COURSE_SELECT}`);
  const missionInput = getDom(`#${ID_MISSION_SELECT}`);
  const minInput = getDom(`#${ID_MATCH_INPUT}`);

  const course = new Course(courseInput.value);
  const mission = new Mission(missionInput.value, course);
  mission.matchTeams(minInput.value * 1);
  console.log(mission.teams);
  renderResult(mission.teams, course);
};
