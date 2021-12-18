import $ from './selector.js';
import { TABS } from '../../constants/constants.js';
import { renderRadioButtons } from '../manageCrew/renderRadioButtons.js';
import { renderCrew } from '../manageCrew/renderCrew.js';

export const changeTab = (e, state) => {
  const tab = e.target.innerText;
  console.log('tab: ', tab);

  if (tab === TABS.CREW_TAB) {
    renderRadioButtons();
    $('#frontend-course').addEventListener('click', e => {
      renderCrew(state);
    });
    return;
  }

  if (tab === TABS.TEAM_MATCHING_TAB) {
    return;
  }
};
