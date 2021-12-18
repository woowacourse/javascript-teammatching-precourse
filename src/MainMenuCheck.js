import CrewView from './Crew/CrewView.js';
import TeamView from './Team/TeamView.js';

export default class MainMenuCheck {
  static checkFirstMenu(targetId) {
    if (targetId === 'crew-tab') {
      CrewView.render();
      // CrewEvent.addEvent();
    }
  }

  static checkSecondMenu(targetId) {
    if (targetId === 'team-tab') {
      TeamView.render();
    }
  }
}
