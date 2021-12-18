import $ from '../common/selector.js';
import { crewTemplates } from '../../constants/templates/crew.js';
import { addCrew } from './addCrew.js';
import { removeCrew } from './removeCrew.js';

export const renderCrew = async (state, value) => {
  const { inputCrew, crewTable, crew } = crewTemplates;
  const crewList = state.crew[value].map((item, i) => crew(item, i)).join('');

  $('#section_2').innerHTML = inputCrew(value);
  $('#section_3').innerHTML = crewTable(value);
  $('#crew_list').innerHTML = crewList;

  $('#add-crew-buttton').addEventListener('click', e => {
    e.preventDefault();
    addCrew(state, value);
  });

  $('#crew_list').addEventListener('click', e => {
    if (e.target.classList.contains('delete-crew-buttton')) {
      removeCrew(e, state, value);
    }
  });
};
