export default class TeamMatchModel {

  toLocalTeamMatchOption(course, mission) {
    localStorage.setItem("TEAM_OPTION", JSON.stringify([course, mission]));
  }

  fromLocalTeamMatchOption() {
    const localTeamMatchOption = JSON.parse(localStorage.getItem("TEAM_OPTION"));
    
    return localTeamMatchOption;
  }

}