import CrewTab from './CrewTab/CrewTab.js';
import { ID_CREW_TAB_BUTTON, ID_TEAM_TAB_BUTTON } from './globalConstants.js';
import TeamTab from './TeamTab/TeamTab.js';
import Header from './Header/Header.js';
import { customCreateElement } from './utils/createElements.js';
import { getDom } from './utils/handleDOM.js';

const App = () => {
  const AppContainer = document.createElement('div');

  // functions
  const getMatchingTab = function returnIdMatchingTab(id) {
    if (id === ID_CREW_TAB_BUTTON) return CrewTab;
    if (id === ID_TEAM_TAB_BUTTON) return TeamTab;
  };

  const renderTab = function changeTab(e) {
    const container = getDom('#tab-container');
    const tab = getMatchingTab(e.target.id);
    container.innerHTML = '';
    container.append(tab());
  };

  const TabSectionContainer = customCreateElement({
    tag: 'div',
    id: 'tab-container',
  });

  AppContainer.append(Header({ renderTab }), TabSectionContainer);

  return AppContainer;
};

export default App;
