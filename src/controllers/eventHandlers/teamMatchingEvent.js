import {
  FRONT_END_CREW_LIST_KEY,
  BACK_END_CREW_LIST_KEY,
} from "../../constants/constants.js";
import {
  setLocalStorageItem,
  setLocalStorageCrewList,
} from "../../utils/localStorage.js";
import { state, updateState } from "../../models/state.js";
import { teamMatchingChoiceView } from "../../views/view.js";

export function clickCourseMissionButton(e) {
  e.preventDefault();
  teamMatchingChoiceView();
}

export function clickTeamMatching(e) {
  e.preventDefault();
  const $teamMemberCountInput = document.getElementById(
    "team-member-count-input"
  );

  console.log($teamMemberCountInput.value);
}
