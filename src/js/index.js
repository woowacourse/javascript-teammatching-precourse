import $ from './utils/dom.js';
import { renderInitHTML, renderCrewManager, renderTeamManager } from './views/renderHTML.js';
import HandleCrewManager from './controllers/handleCrewManager.js';
import HandleTeamManager from './controllers/handleTeamManager.js';

export default function TeamMatchingApp() {
  this.init = () => {
    renderInitHTML();
  };

  $('#app').addEventListener('click', e => {
    if (e.target.id === 'crew-tab') {
      renderCrewManager();
      new HandleCrewManager();
    }
    if (e.target.id === 'team-tab') {
      renderTeamManager();
      new HandleTeamManager();
    }
  });
}

const app = new TeamMatchingApp();
app.init();
