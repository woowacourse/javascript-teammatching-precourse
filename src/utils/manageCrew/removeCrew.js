import { store } from '../common/store.js';
import { CONFIRM_MSG } from '../../constants/constants.js';
import { renderCrew } from './renderCrew.js';

export const removeCrew = (e, state, value) => {
  if (confirm(CONFIRM_MSG)) {
    const crewId = e.target.closest('tr').dataset.crewId;
    let crewArray = state.crew[value];

    crewArray = crewArray.filter(item => item.id !== crewId);
    state.crew[value] = crewArray;

    store.setData(state);
    renderCrew(state, value);
  }
};
