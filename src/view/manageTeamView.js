import { teamMatching } from "../component/teamMatching.js";
import { BACK_END, FRONT_END, SECOND_SECTION } from "../util/constant.js";
import {
  createMatchingP,
  createNoMatchingContainer,
  createReMatchingContainer,
  createResultUl,
  createTitle,
  matchingTitleFrontEnd,
  noMatchingTitleBackEnd,
  noMatchingTitleFrontEnd,
} from "../util/util.js";

export const renderFrontEndMission = (mission, matchingResult) => {
  if (matchingResult === null) {
    renderNoMatchingMissionFrontEnd(mission);
  } else {
    renderResultMissionFrontEnd(mission, matchingResult);
  }
};

export const renderBackEndMission = (mission, matchingResult) => {
  if (matchingResult === null) {
    renderNoMatchingMissionBackEnd(mission);
  }
};

const renderNoMatchingMissionFrontEnd = mission => {
  const $section = document.getElementById(SECOND_SECTION);
  $section.innerHTML = "";
  $section.appendChild(createTitle(noMatchingTitleFrontEnd(mission)));
  $section.appendChild(createNoMatchingContainer(FRONT_END));
};

const renderNoMatchingMissionBackEnd = mission => {
  const $section = document.getElementById(SECOND_SECTION);
  $section.innerHTML = "";
  $section.appendChild(createTitle(noMatchingTitleBackEnd(mission)));
  $section.appendChild(createNoMatchingContainer(BACK_END));
};

export const renderResultMissionFrontEnd = (mission, matchingResult) => {
  const $section = document.getElementById(SECOND_SECTION);
  $section.innerHTML = "";
  $section.appendChild(createTitle(matchingTitleFrontEnd(mission)));
  $section.appendChild(createMatchingP());
  $section.appendChild(createResultUl(matchingResult));
  $section.appendChild(createReMatchingContainer());
};

export const renderResultMissionBackEnd = (mission, matchingResult) => {
  const $section = document.getElementById(SECOND_SECTION);
  $section.innerHTML = "";
  $section.appendChild(createTitle(matchingTitleBackEnd(mission)));
  $section.appendChild(createMatchingP());
  $section.appendChild(createResultUl(matchingResult));
  $section.appendChild(createReMatchingContainer());
};
