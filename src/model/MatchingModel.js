export class MatchingModel {
  frontEndCrewList = [];
  backEndCrewList = [];

  addCrewList(crewName, course) {
    if (course === 'frontend') {
      this.frontEndCrewList.push(crewName);
      return this.frontEndCrewList;
    }
    this.backsEndCrewList.push(crewName);
    return this.backEndCrewList;
  }
}
