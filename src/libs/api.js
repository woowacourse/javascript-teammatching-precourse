import { KEY } from "./key.js";

export default class Api {
  setup() {
    const data = {
      currentTabId: "crew-tab",
      tabIdList: ["crew-tab", "team-tab"],
      checkedCrewCourse: undefined,
      frontends: [],
      backends: [],
      selectedCourse: undefined,
      selectedMission: undefined,
      teamNumbers: undefined,
    };

    if (!this.getTeamMatching()) {
      localStorage.setItem(KEY, JSON.stringify(data));
    }
  }

  getTeamMatching() {
    return JSON.parse(localStorage.getItem(KEY));
  }

  setTeamMatching(payload) {
    const newData = {
      ...this.getTeamMatching(),
      ...payload,
    };
    localStorage.setItem(KEY, JSON.stringify(newData));
  }
}
