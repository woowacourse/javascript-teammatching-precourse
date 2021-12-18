import { app } from '../domElement.js';

export const initTeamManager = () => {
  const teamManager = document.createElement('div');

  teamManager.setAttribute('id', 'team-manager');
  teamManager.style.display = 'none';

  app.append(teamManager);
};
