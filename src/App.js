import CrewTab from './CrewTab/CrewTab.js';
import TeamTab from './TeamTab/TeamTab.js';
import Header from './Header/Header.js';

const App = () => {
  const AppContainer = document.createElement('div');

  AppContainer.append(Header(), CrewTab(), TeamTab());

  return AppContainer;
};

export default App;
