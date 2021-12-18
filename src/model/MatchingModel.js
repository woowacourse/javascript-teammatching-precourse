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

  deleteCrewList(crewName, course) {
    if (course === 'frontend') {
      const index = this.frontEndCrewList.indexOf(crewName);
      this.frontEndCrewList.splice(index, 1);
      return this.frontEndCrewList;
    }
    const index = this.backsEndCrewList.indexOf(crewName);
    this.backsEndCrewList.splice(index, 1);
    return this.backEndCrewList;
  }
}
