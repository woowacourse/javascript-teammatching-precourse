import {
  clickCrewManage,
  clickTeamGenerate,
} from "./eventHandlers/tabClickEvents.js";
import { clickAddCrewButton } from "./eventHandlers/crewManageEvent.js";

export function initialEvent() {
  tabEvent();
  addCrewButton();
}

export function tabEvent() {
  const $crewTab = document.getElementById("crew-tab");
  const $teamTab = document.getElementById("team-tab");

  $crewTab.addEventListener("click", clickCrewManage);
  $teamTab.addEventListener("click", clickTeamGenerate);
}

export function addCrewButton() {
  const $addCrewButtton = document.getElementById("add-crew-buttton");

  $addCrewButtton.addEventListener("click", clickAddCrewButton);
}
