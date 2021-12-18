import { TEAM_TAP_ID } from '../constants.js';
import TeamModel from '../Model/TeamModel.js';
import TeamInput from '../UserInput/TeamInput.js';
import TeamTapView from '../View/TeamTapView.js';

export default class TeamController {
  constructor() {
    this.teamView = new TeamTapView();
    this.teamModel = new TeamModel();
  }

  bindEventListener() {
    document.addEventListener('click', (event) => {
      const { id } = event.target;
      if (id === TEAM_TAP_ID.showTeamButton) {
        event.preventDefault();
        const teamInput = new TeamInput();
        const team = teamInput.getSelectTeam();
        const mission = teamInput.getSelectMission();
        const userList = this.teamModel.getUserList(team, mission);
        if (userList.length === 0) {
          this.teamView.teamMatchingView(team);
        }
      }
    });
  }
}
