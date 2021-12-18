import $ from '../common/selector.js';
import { teamTemplates } from '../../constants/templates/team.js';
import { renderTeamMatching } from './renderTeamMatching.js';

export const renderSelectBox = state => {
  const { common, header } = teamTemplates;

  $('main').innerHTML = common;
  $('#section_1').innerHTML = header;

  $('#course-select').addEventListener('change', e => {
    state.teamMatching.course = e.target.value;
    store.setData(state);
  });

  $('#mission-select').addEventListener('change', e => {
    state.teamMatching.mission = e.target.value;
    store.setData(state);
  });

  $('#show-team-matcher-button').addEventListener('click', e => {
    e.preventDefault();
    renderTeamMatching(state);
  });
};
