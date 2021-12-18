import { getLocalStorageItem } from "../utils/localStorage.js";
import {
  FRONT_END_CREW_LIST_KEY,
  BACK_END_CREW_LIST_KEY,
} from "../constants/constants.js";

export let state = {
  frontEndCrewList: [],
  backEndCrewList: [],
};

export function updateState() {
  if (getLocalStorageItem(FRONT_END_CREW_LIST_KEY) !== null)
    state.frontEndCrewList = getLocalStorageItem(FRONT_END_CREW_LIST_KEY);
  if (getLocalStorageItem(BACK_END_CREW_LIST_KEY) !== null)
    state.backEndCrewList = getLocalStorageItem(BACK_END_CREW_LIST_KEY);
}
