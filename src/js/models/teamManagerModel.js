import $ from '../utils/dom.js';
import store from '../utils/store.js';
import randomSuffle from './randomSuffle.js';

export const getSelectCourse = () => {
  const target = $('#course-select');
  return target.options[target.selectedIndex].text;
};

export const getSelectMission = () => {
  const target = $('#mission-select');
  return target.options[target.selectedIndex].text;
};

const addMember = (memberCount, crews) => {
  const team = [];
  while (memberCount) {
    team.push(crews.pop());
    memberCount -= 1;
  }
  return team;
};

export const findTeam = (teams, mission) => {
  return teams.some(teamMission => teamMission.name === mission && teamMission.team.length > 0);
};

export const matchTeam = (course, mission, memberCount) => {
  if (course === 'frontend') {
    const teams = [];
    const crews = store.getLocalStorage('FrontCrew').map(crew => crew.idx);
    let teamCount = Math.ceil(crews.length / memberCount);
    randomSuffle(crews);

    while (teamCount) {
      teams.push(addMember(memberCount, crews));
      teamCount -= 1;
    }
    console.log(teams);
  }
};
