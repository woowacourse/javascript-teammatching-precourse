import { isOver5Words, isDuplicateCrew } from "../../utils/valid.js";
import {
  FRONT_END_CREW_LIST_KEY,
  BACK_END_CREW_LIST_KEY,
} from "../../constants/constants.js";
import { setLocalStorageCrewList } from "../../utils/localStorage.js";
import { updateState } from "../../models/state.js";
import { showCrewList } from "../../views/view.js";

export function checkedFrontendButton(e) {
  const $crewManageTitle = document.getElementById("crew-manage-title");
  const $crewMagageList = document.getElementById("crew-magage-list");

  $crewManageTitle.innerText = "프론트엔드 크루 관리";
  $crewMagageList.innerText = "프론트엔드 크루 목록";

  showCrewList(FRONT_END_CREW_LIST_KEY);
}

export function checkedBackendButton(e) {
  const $crewManageTitle = document.getElementById("crew-manage-title");
  const $crewMagageList = document.getElementById("crew-magage-list");

  $crewManageTitle.innerText = "백엔드 크루 관리";
  $crewMagageList.innerText = "백엔드 크루 목록";

  showCrewList(BACK_END_CREW_LIST_KEY);
}

export function clickAddCrewButton(e) {
  e.preventDefault();
  const $crewNameInput = document.getElementById("crew-name-input");
  const isCourseFrontEnd = document.getElementById("frontend-course").checked;
  const newCrew = $crewNameInput.value;

  if (isOver5Words(newCrew)) return;

  if (isCourseFrontEnd) {
    if (isDuplicateCrew(FRONT_END_CREW_LIST_KEY, newCrew)) return;
    setLocalStorageCrewList(FRONT_END_CREW_LIST_KEY, newCrew);
    updateState();
    showCrewList(FRONT_END_CREW_LIST_KEY);
  } else {
    if (isDuplicateCrew(BACK_END_CREW_LIST_KEY, newCrew)) return;
    setLocalStorageCrewList(BACK_END_CREW_LIST_KEY, newCrew);
    updateState();
    showCrewList(BACK_END_CREW_LIST_KEY);
  }
}
