import { KEY } from "./key.js";

export default class Api {
  setup() {
    const data = {
      currentTabId: "crew-tab",
      tabIdList: ["crew-tab", "team-tab"],
      checkedCrewCourse: undefined,
      frontends: [],
      backends: [],
      selectedCourse: {
        value: "frontend",
        text: "프론트엔드",
        selectedIndex: 0,
      },
      selectedMission: {
        value: "baseball",
        text: "숫자야구게임",
        selectedIndex: 0,
      },
      teamNumbers: undefined,
      matchedTeam: [],
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
