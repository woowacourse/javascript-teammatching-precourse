import {
  FRONT_END_CREW_LIST_KEY,
  BACK_END_CREW_LIST_KEY,
} from "../../constants/constants.js";
import {
  setLocalStorageItem,
  setLocalStorageCrewList,
} from "../../utils/localStorage.js";
import { state, updateState } from "../../models/state.js";
import {
  teamMatchingChoiceView,
  showCrewListForMatching,
  teamMatchingResult,
} from "../../views/view.js";
import { chunk } from "../../utils/array.js";

export function clickCourseMissionButton(e) {
  e.preventDefault();
  const $courseSelect = document.getElementById("course-select");
  const $missionSelect = document.getElementById("mission-select");
  let course = $courseSelect.value;
  let mission = $missionSelect.value;

  if (course === "프론트엔드") {
    teamMatchingChoiceView(FRONT_END_CREW_LIST_KEY);
    showCrewListForMatching(FRONT_END_CREW_LIST_KEY);
  } else {
    teamMatchingChoiceView(BACK_END_CREW_LIST_KEY);
    showCrewListForMatching(BACK_END_CREW_LIST_KEY);
  }
}

export function clickFrontTeamMatching(e) {
  e.preventDefault();
  const $teamMemberCountInput = document.getElementById(
    "team-member-count-input"
  );

  if ($teamMemberCountInput.value > state.frontEndCrewList.length) {
    alert("입력된 인원수가 전체 크루원보다 많습니다.");
    return;
  } else if ($teamMemberCountInput.value > state.frontEndCrewList.length / 2) {
    alert("해당 인원으로 팀을 나눌 수 없습니다.");
    return;
  }

  matching($teamMemberCountInput.value, state.frontEndCrewList);
}

export function clickBackTeamMatching(e) {
  e.preventDefault();
  const $teamMemberCountInput = document.getElementById(
    "team-member-count-input"
  );

  if ($teamMemberCountInput.value > state.BackEndCrewList.length) {
    alert("입력된 인원수가 전체 크루원보다 많습니다.");
    return;
  } else if ($teamMemberCountInput.value > state.BackEndCrewList.length / 2) {
    alert("해당 인원으로 팀을 나눌 수 없습니다.");
    return;
  }

  matching($teamMemberCountInput.value, state.backEndCrewList);
}

export function matching(number, crewList) {
  let tmpArray = [];
  for (let i = 0; i < crewList.length; i++) {
    tmpArray.push(i);
  }

  const newList = MissionUtils.Random.shuffle(tmpArray);

  let resultTeam = chunk(newList, number);
  console.log(resultTeam);

  teamMatchingResult(FRONT_END_CREW_LIST_KEY, resultTeam);
}
