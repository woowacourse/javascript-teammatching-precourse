import {
  PUBLIC_HEADER,
  BACK_END,
  BACK_END_TEXT,
  FRONT_END,
  FRONT_END_TEXT,
  SELECT_COURSE_TITLE,
  INPUT_FORM_LABEL,
  INPUT_FORM_BUTTON,
  TABLE_BORDER,
  TABLE_HEADERS,
} from "./constant.js";
import {
  onClickBackEndInput,
  onClickFrontEndInput,
} from "../controller/manageCrewController.js";

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
  resetSelectCourseSection();
};

const onClickTeamTab = event => {
  event.preventDefault();
};

const createInputFormLabel = () => {
  const label = document.createElement("label");
  label.innerText = INPUT_FORM_LABEL;

  return label;
};

const createInputFormInput = () => {
  const input = document.createElement("input");
  input.type = "text";

  return input;
};

const createInputFormButton = () => {
  const button = document.createElement("button");
  button.type = "submit";
  button.innerText = INPUT_FORM_BUTTON;

  return button;
};

export const createInputForm = () => {
  const form = document.createElement("form");
  form.appendChild(createInputFormLabel());
  form.appendChild(createInputFormInput());
  form.appendChild(createInputFormButton());

  return form;
};

export const createTitle = title => {
  const h3 = document.createElement("h3");
  h3.innerText = title;

  return h3;
};

const createRadioInput = (value, event) => {
  const input = document.createElement("input");
  input.type = "radio";
  input.name = "course";
  input.value = value;
  input.addEventListener("click", event);

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
  div.appendChild(createRadioInput(FRONT_END, onClickFrontEndInput));
  div.appendChild(createRadioLabel(FRONT_END, FRONT_END_TEXT));
  div.appendChild(createRadioInput(BACK_END, onClickBackEndInput));
  div.appendChild(createRadioLabel(BACK_END, BACK_END_TEXT));

  return div;
};

const createHeader = header => {
  const th = document.createElement("th");
  th.innerText = header;

  return th;
};

const createHeaders = headers => {
  const tr = document.createElement("tr");
  headers.forEach(header => tr.appendChild(createHeader(header)));

  return tr;
};

const createThead = headers => {
  const thead = document.createElement("thead");
  thead.appendChild(createHeaders(headers));

  return thead;
};

const createTbody = () => {
  const tbody = document.createElement("tbody");

  return tbody;
};

const createMemberTable = () => {
  const table = document.createElement("table");
  table.border = TABLE_BORDER;
  table.appendChild(createThead(TABLE_HEADERS));
  table.appendChild(createTbody());

  return table;
};

export const resetListSection = title => {
  const $section = document.getElementById("list-section");
  $section.innerHTML = "";
  $section.appendChild(createTitle(title));
  $section.appendChild(createMemberTable());
};

const resetSelectCourseSection = () => {
  const $section = document.getElementById("course-section");
  $section.innerHTML = "";
  $section.appendChild(createTitle(SELECT_COURSE_TITLE));
  $section.appendChild(createRadioInputContainer());
};
