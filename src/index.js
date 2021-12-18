import { initMainScreen } from './views/initMainScreen.js';

export default function TeamMatchingApp() {
  this.init = () => {
    initMainScreen();
  };
}

const app = new TeamMatchingApp();
app.init();
