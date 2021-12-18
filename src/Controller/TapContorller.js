import { TAP_BUTTON_ID } from '../constants.js';
import CrewTapView from '../View/CrewTapView.js';
import TeamTapView from '../View/TeamTapView.js';
import CrewController from './CrewController.js';
import TeamController from './TeamController.js';

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
    new CrewController().bindEventListener();
    new TeamController().bindEventListener();
  }
}
