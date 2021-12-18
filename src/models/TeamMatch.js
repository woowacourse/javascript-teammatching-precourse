export default class TeamMatch {
  constructor(teamList) {
    this._teamList = teamList;
    this._crewList = [];
  }

  setCrewList(crewList) {
    this._crewList = [...crewList];
    return this;
  }

  setTeamType(course, mission) {
    this._course = course;
    this._mission = mission;

    console.log(this);
    return this;
  }

  setMemberCount(memberNumber) {}

  get result() {
    return this._teamList[this._course][this._mission];
  }
}
