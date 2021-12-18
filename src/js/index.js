import $ from './utils/dom.js';
import { renderInitHTML, renderCrewManager, renderTeamManager } from './views/renderHTML.js';

export default function TeamMatchingApp() {
  this.init = () => {
    renderInitHTML();
  };

  $('#app').addEventListener('click', e => {
    if (e.target.id === 'crew-tab') {
      renderCrewManager();
    }
    if (e.target.id === 'team-tab') {
      renderTeamManager();
    }
  });
}

const app = new TeamMatchingApp();
app.init();
