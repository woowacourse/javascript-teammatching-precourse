import CrewManager from "./crewManager.js";
import TeamManager from "./teamManager.js";

export default class TeamMatcher {
  constructor(courseIDList) {
    this.crewManagers = Object.fromEntries(
      courseIDList.map((k) => [k, new CrewManager(k)])
    );
    this.teamManager = new TeamManager();
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

  getTeam(courseId, missionId, numPerGroup) {
    return this.teamManager.getTeam(
      courseId,
      missionId,
      numPerGroup,
      this.getCrews(courseId)
    );
  }
}
