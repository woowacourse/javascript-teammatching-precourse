import $ from '../common/selector.js';
import { teamTemplates } from '../../constants/templates/team.js';

export const renderTeamMatching = state => {
  const { body, crew } = teamTemplates;
  const course = state.teamMatching.course;
  const mission = state.teamMatching.mission;

  const crewList = state.crew[course]
    .map((item, i) => crew(item.name))
    .join('');

  $('#section_2').innerHTML = body(course, mission);
  $('#team_crew_list').innerHTML = crewList;
};
