export default class TeamMatch {
  constructor(teamList) {
    this._teamList = teamList;
    this._crewList = [];

    this._course = '';
    this._mission = '';
  }

  setCrewList(crewList) {
    this._crewList = [...crewList];
    return this;
  }

  setTeamType(course, mission) {
    this._course = course;
    this._mission = mission;

    return this;
  }

  setMemberCount(memberNumber) {}

  get crewList() {
    return this._crewList.filter(({ course }) => course === this._course);
  }

  get result() {
    const targetObject = this._teamList[this._course][this._mission];
    if (!targetObject) return [];
    return targetObject;
  }
}
