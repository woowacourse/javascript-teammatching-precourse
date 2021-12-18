import { TABS } from '../../constants/constants.js';
import { renderCrew } from './manageCrew/renderCrew.js';

export const changeTab = e => {
  const tab = e.target.innerText;
  console.log('tab: ', tab);

  if (tab === TABS.CREW_TAB) {
    renderCrew();
    return;
  }

  if (tab === TABS.TEAM_MATCHING_TAB) {
    return;
  }
};
