import { isOver5Words, isDuplicateCrew } from "../../utils/valid.js";
import {
  FRONT_END_CREW_LIST_KEY,
  BACK_END_CREW_LIST_KEY,
} from "../../constants/constants.js";
import {
  getLocalStorageItem,
  setLocalStorageItem,
  setLocalStorageCrewList,
} from "../../utils/localStorage.js";

export function clickAddCrewButton(e) {
  e.preventDefault();
  const $crewNameInput = document.getElementById("crew-name-input");
  const isCourseFrontEnd = document.getElementById("frontend-course").checked;
  const newCrew = $crewNameInput.value;

  if (isOver5Words(newCrew)) return;

  if (isCourseFrontEnd) {
    if(isDuplicateCrew(FRONT_END_CREW_LIST_KEY, newCrew)) return;
    setLocalStorageCrewList(FRONT_END_CREW_LIST_KEY,newCrew);
  } else {
    if(isDuplicateCrew(BACK_END_CREW_LIST_KEY, newCrew)) return;
    setLocalStorageCrewList(BACK_END_CREW_LIST_KEY,newCrew);
  }
}