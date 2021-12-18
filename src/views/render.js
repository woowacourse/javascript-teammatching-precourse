import {
  header,
  crewManageComponent,
  teamGenerateComponent,
  showCrewList,
} from "./view.js";
import { FRONT_END_CREW_LIST_KEY } from "../constants/constants.js";

export function initialRedering() {
  header();
  crewManageComponent();
  teamGenerateComponent();
  showCrewList(FRONT_END_CREW_LIST_KEY);
}
