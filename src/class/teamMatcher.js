import CrewManager from "./crewManager.js";

export default class TeamMatcher {
  constructor(courseIDList) {
    this.crewManagers = Object.fromEntries(
      courseIDList.map((k) => [k, new CrewManager(k)])
    );
  }

  addCrew(name, courseID) {
    return courseID in this.crewManagers
      ? this.crewManagers[courseID].addCrew(name)
      : false;
  }

  getCrews(courseID) {
    return courseID in this.crewManagers
      ? this.crewManagers[courseID].getCrews()
      : [];
  }

  removeCrew(name, courseID) {
    return courseID in this.crewManagers
      ? this.crewManagers[courseID].removeCrew(name)
      : false;
  }
}
