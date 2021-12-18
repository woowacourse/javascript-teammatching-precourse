import $ from '../common/selector.js';
import { store } from '../common/store.js';
import { inputCrewNameValidation } from './inputCrewNameValidation.js';
import { renderCrew } from './renderCrew.js';

export const addCrew = (state, value) => {
  const crewName = $('#crew-name-input').value.trim();
  const crewArray = state.crew[value];
  const { isError, inValidText } = inputCrewNameValidation(crewName, crewArray);

  if (isError) {
    alert(inValidText);
    $('#crew-name-input').value = '';
    return;
  }

  crewArray.push({
    id: Date.now().toString(),
    name: crewName,
  });
  state.crew[value] = crewArray;

  store.setData(state);
  renderCrew(state, value);
};
