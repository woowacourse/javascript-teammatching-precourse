import { matchingInfo } from "./utils/constants.js";
import { hideElement, showElement } from "./utils/setElement.js";

export default class TeamMatchingView {
  constructor() {
    this.render();
    this.hideAll();
  }

  render() {
    const $header = document.querySelector("#manage-header");
    const $render = document.createElement("main");
    $render.innerHTML = matchingInfo;
    $header.after($render);
  }

  hideAll() {
    hideElement(document.querySelector("#choose-course-mission"));
    hideElement(document.querySelector("#make-team-matching"));
    hideElement(document.querySelector("#matching-result"));
  }

  showSelected(selector) {
    const $selected = document.querySelector(selector);

    showElement($selected);
  }

  showSelectedMissionCourse(selector, course, mission) {
    const $selected = document.querySelector(selector);
    if (course === "frontend") {
      $selected.children[0].innerText = `프론트엔드 ${mission} 미션의 팀 매칭`;
      showElement($selected);
      return;
    }
    $selected.children[0].innerText = `백엔드 ${mission} 미션의 팀 매칭`;
    showElement($selected);
  }

  renderCrewList(crewList) {
    const $crewList = document.getElementById("show-list");
    $crewList.innerHTML = "";
    crewList.forEach((crew) => {
      $crewList.innerHTML += `<li>${crew}</li>`;
    });
  }

  renderMadeTeam(team) {
    if (team === undefined) {
      return;
    }
    hideElement(document.querySelector("#make-team-matching"));
    showElement(document.querySelector("#matching-result"));
    const $table = document.querySelector("#team-match-result");
    $table.innerHTML = "";
    team.forEach((el, idx) => {
      $table.innerHTML += `<li>${el.join(",")}</li>`;
    });
  }

  renderRetry() {
    showElement(document.querySelector("#make-team-matching"));
    hideElement(document.querySelector("#matching-result"));
  }
}
