import $ from '../common/selector.js';
import { templates } from '../../constants/templates/crew.js';
import { addCrew } from './addCrew.js';

export const renderCrew = state => {
  const { inputCrew, crewTable, crew } = templates;

  const crewList = state.crew.frontend.map((item, i) => crew(item, i)).join('');

  $('#section_2').innerHTML = inputCrew;
  $('#section_3').innerHTML = crewTable;
  $('#crew_list').innerHTML = crewList;

  $('#add-crew-buttton').addEventListener('click', e => {
    e.preventDefault();
    addCrew(state);
  });
};
