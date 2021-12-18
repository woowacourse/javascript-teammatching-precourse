import $ from '../common/selector.js';
import { teamTemplates } from '../../constants/templates/team.js';

export const renderTeamMatching = state => {
  const { body } = teamTemplates;
  const course = state.teamMatching.course;
  const mission = state.teamMatching.mission;

  $('#section_2').innerHTML = body(course, mission);
};
