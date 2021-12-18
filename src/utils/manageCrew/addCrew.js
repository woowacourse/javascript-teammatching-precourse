import $ from '../common/selector.js';
import { store } from '../common/store.js';
import { renderCrew } from './renderCrew.js';

export const addCrew = state => {
  const crewName = $('#crew-name-input').value.trim();
  const crewArray = state.crew.frontend;

  crewArray.push({
    id: Date.now().toString(),
    name: crewName,
  });
  state.crew.frontend = crewArray;

  store.setData(state);
  renderCrew(state);
};
