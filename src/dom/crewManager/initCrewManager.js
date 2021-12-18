import { app } from '../domElement.js';

export const initCrewManager = () => {
  const crewManager = document.createElement('div');

  crewManager.setAttribute('id', 'crew-manager');
  crewManager.style.display = 'none';

  app.append(crewManager);
};
