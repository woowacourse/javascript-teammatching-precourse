import CrewTab from './CrewTab/CrewTab.js';
import TeamTab from './TeamTab/TeamTab.js';
import { NAV_TEMPLATE } from './globalConstants.js';

const App = () => {
  const AppContainer = document.createElement('div');
  AppContainer.innerHTML = NAV_TEMPLATE;
  AppContainer.append(CrewTab(), TeamTab());

  return AppContainer;
};

export default App;
