export default class TeamMatchModel {

  toLocalTeamMatchOption(course, mission) {
    localStorage.setItem("TEAM_OPTION", JSON.stringify([course, mission]));
  }

  fromLocalTeamMatchOption() {
    const localTeamMatchOption = JSON.parse(localStorage.getItem("TEAM_OPTION"));

    return localTeamMatchOption;
  }

  fromLocalCrewLost() {
    const localTeamMatchOption = JSON.parse(localStorage.getItem("TEAM_OPTION"));
    let rnederTeamList;
    if (localTeamMatchOption) {
      if (localTeamMatchOption[0] === 'frontend') {
        rnederTeamList = JSON.parse(localStorage.getItem("FRONT_CREW"));
      } else if (localTeamMatchOption[0] === 'backend') {
        rnederTeamList = JSON.parse(localStorage.getItem("BACK_CREW"));
      }
    }

    return rnederTeamList;
  }

  handleMatchMission(matchOption, crewList, count) {
    console.log(matchOption, crewList, count)
    // const randomCrewList = MissionUtils.Random.sufffle([1, 2, 3, 4]);
    // console.log(randomCrewList)
  }

}