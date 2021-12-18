import { start } from "../constants/doms.js";
import { initCrewDOM } from "./crewDOM.js";
import { initTeamDOM } from "./teamDOM.js";

export const initDOM = () => {
  document.body.innerHTML += start;
  initCrewDOM();
  initTeamDOM();
  hideSections();
};

export const hideSections = () => {
  const $crewSelectCourse = document.querySelector("#crew-select-course");
  const $crewManageInput = document.querySelector("#crew-manage-input");
  const $crewManageTable = document.querySelector("#crew-manage-table");
  const $teamSelectMission = document.querySelector("#team-select-mission");
  const $teamMatchBefore = document.querySelector("#team-mathing-before");
  const $teamMatchResult = document.querySelector("#team-match-result");

  const section = [$crewSelectCourse, $crewManageInput, $crewManageTable, $teamSelectMission, $teamMatchBefore, $teamMatchResult];
  section.forEach((area) => area.style.display = "none");
}