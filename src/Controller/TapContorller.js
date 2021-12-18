import { TAP_BUTTON_ID } from '../constants.js';
import CrewTapView from '../View/CrewTapView.js';
import TeamTapView from '../View/TeamTapView.js';

export default class TapController {
  constructor() {
    this.crewView = new CrewTapView();
    this.teamView = new TeamTapView();
  }

  bindEventListener() {
    document.addEventListener('click', (event) => {
      const { id } = event.target;
      if (id === TAP_BUTTON_ID.crew) {
        this.crewView.render();
      }
      if (id === TAP_BUTTON_ID.team) {
        this.teamView.render();
      }
    });
  }
}
