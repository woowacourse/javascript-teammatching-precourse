import { start, selectMission } from "./constants/doms.js";

class TeamMatching {
  constructor() {
    this.initEventLister();

  }

  initEventLister() {
    const section = document.createElement('section');
    section.innerHTML = selectMission;
    document.body.innerHTML = selectMission
  }
}

new TeamMatching();