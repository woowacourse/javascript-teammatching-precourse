import {
  PUBLIC_HEADER,
  BACK_END,
  BACK_END_TEXT,
  FRONT_END,
  FRONT_END_TEXT,
  SELECT_COURSE_TITLE,
} from "./constant.js";

export const initialize = () => {
  const $app = document.getElementById("app");
  $app.innerHTML = PUBLIC_HEADER;

  const $crewTab = document.getElementById("crew-tab");
  const $teamTab = document.getElementById("team-tab");
  $crewTab.addEventListener("click", onClickCrewTab);
  $teamTab.addEventListener("click", onClickTeamTab);
};

const onClickCrewTab = event => {
  event.preventDefault();
  const $main = document.querySelector("main");
  $main.innerHTML = "";
  $main.appendChild(createSelectCourseSection());
};

const onClickTeamTab = event => {
  event.preventDefault();
};

const createTitle = title => {
  const h3 = document.createElement("h3");
  h3.innerText = title;

  return h3;
};

const createRadioInput = (value, event) => {
  const input = document.createElement("input");
  input.type = "radio";
  input.name = "course";
  input.value = value;

  return input;
};

const createRadioLabel = (value, text) => {
  const label = document.createElement("label");
  label.for = value;
  label.innerText = text;

  return label;
};

const createRadioInputContainer = () => {
  const div = document.createElement("div");
  div.appendChild(createRadioInput(FRONT_END));
  div.appendChild(createRadioLabel(FRONT_END, FRONT_END_TEXT));
  div.appendChild(createRadioInput(BACK_END));
  div.appendChild(createRadioLabel(BACK_END, BACK_END_TEXT));

  return div;
};

const createSelectCourseSection = () => {
  const section = document.createElement("section");
  section.appendChild(createTitle(SELECT_COURSE_TITLE));
  section.appendChild(createRadioInputContainer());

  return section;
};
