import { teamMatchingMenu } from './controllers/menu.js';
import { initMainScreen } from './views/initMainScreen.js';

export default function TeamMatchingApp() {
  this.init = () => {
    initMainScreen();
    teamMatchingMenu();
  };
}

const app = new TeamMatchingApp();
app.init();
