import {
  clickCrewManage,
  clickTeamGenerate,
} from "./eventHandlers/tabClickEvents.js";
import {
  clickAddCrewButton,
  checkedFrontendButton,
  checkedBackendButton,
  clickDeleteCrewButton,
} from "./eventHandlers/crewManageEvent.js";
import {
  clickCourseMissionButton,
  clickFrontTeamMatching,
  clickBackTeamMatching
} from "./eventHandlers/teamMatchingEvent.js";
import { FRONT_END_CREW_LIST_KEY } from "../constants/constants.js";

export function initialEvent() {
  tabEvent();
  addCrewButton();
  checkedCourseButton();
  choiceCourseMission();
}

export function tabEvent() {
  const $crewTab = document.getElementById("crew-tab");
  const $teamTab = document.getElementById("team-tab");

  $crewTab.addEventListener("click", clickCrewManage);
  $teamTab.addEventListener("click", clickTeamGenerate);
}

export function checkedCourseButton() {
  const $frontendCourse = document.getElementById("frontend-course");
  const $backendCourse = document.getElementById("backend-course");

  $frontendCourse.addEventListener("change", checkedFrontendButton);
  $backendCourse.addEventListener("change", checkedBackendButton);
}

export function addCrewButton() {
  const $addCrewButtton = document.getElementById("add-crew-buttton");

  $addCrewButtton.addEventListener("click", clickAddCrewButton);
}

export function deleteCrewButton() {
  document.querySelectorAll(".delete-crew-buttton").forEach((item) => {
    item.addEventListener("click", clickDeleteCrewButton);
  });
}

export function choiceCourseMission() {
  const $showTeamMatcherButton = document.getElementById(
    "show-team-matcher-button"
  );

  $showTeamMatcherButton.addEventListener("click", clickCourseMissionButton);
}

export function choicePeopleNumber(crewType) {
  const $matchTeamButton = document.getElementById("match-team-button");

  if (crewType === FRONT_END_CREW_LIST_KEY)
    $matchTeamButton.addEventListener("click", clickFrontTeamMatching);
  else  $matchTeamButton.addEventListener("click", clickBackTeamMatching);
}
