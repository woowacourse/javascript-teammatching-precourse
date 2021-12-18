import {
  clickCrewManage,
  clickTeamGenerate,
} from "./eventHandlers/tabClickEvents.js";

export function initialEvent() {
  tabEvent();
}

export function tabEvent() {
  const $crewTab = document.getElementById("crew-tab");
  const $teamTab = document.getElementById("team-tab");

  $crewTab.addEventListener("click", clickCrewManage);
  $teamTab.addEventListener("click", clickTeamGenerate);
}