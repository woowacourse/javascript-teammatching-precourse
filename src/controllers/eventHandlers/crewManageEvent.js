import { isOver5Words, isDuplicateCrew } from "../../utils/valid.js";
import {
  FRONT_END_CREW_LIST_KEY,
  BACK_END_CREW_LIST_KEY,
} from "../../constants/constants.js";
import {
  setLocalStorageItem,
  setLocalStorageCrewList,
} from "../../utils/localStorage.js";
import { updateState } from "../../models/state.js";
import { showCrewList } from "../../views/view.js";
import { state } from "../../models/state.js";

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

export function clickDeleteCrewButton(e) {
  e.preventDefault();
  const isCourseFrontEnd = document.getElementById("frontend-course").checked;
  const targetCrew = e.target.id;
  if (confirm("정말 삭제하시겠습니까?")) {
    if (isCourseFrontEnd) {
      deleteCrew(FRONT_END_CREW_LIST_KEY, targetCrew);
    } else {
      deleteCrew(BACK_END_CREW_LIST_KEY, targetCrew);
    }
  }
}

export function deleteCrew(crewType, crew) {
  if (crewType === FRONT_END_CREW_LIST_KEY) {
    const newFrontCrewList = state.frontEndCrewList.filter((item) => {
      return item !== crew;
    });
    setLocalStorageItem(FRONT_END_CREW_LIST_KEY, newFrontCrewList);
    updateState();
    showCrewList(FRONT_END_CREW_LIST_KEY);
  } else {
    const newBackCrewList = state.backEndCrewList.filter((item) => {
      return item !== crew;
    });
    setLocalStorageItem(BACK_END_CREW_LIST_KEY, newBackCrewList);
    updateState();
    showCrewList(BACK_END_CREW_LIST_KEY);
  }
}
