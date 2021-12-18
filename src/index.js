import Controller from './Controller.js';
import InitialElementsView from './views/InitialElementsView.js';
import TabView from './views/TabView.js';
import { on } from './utils/index.js';
import { EVENT_LISTENER_TYPE } from './constants.js';
import Store from './Store.js';
import CrewManagementView from './views/CrewManagementView.js';
import TeamManagementView from './views/TeamManagementView.js';

on(document, EVENT_LISTENER_TYPE.DOM_CONTENT_LOADED, main);

function main() {
  new InitialElementsView();

  const store = new Store();

  const views = {
    tabView: new TabView(),
    crewManagementView: new CrewManagementView(),
    teamManagementView: new TeamManagementView(),
  };

  new Controller(views, store);
}
