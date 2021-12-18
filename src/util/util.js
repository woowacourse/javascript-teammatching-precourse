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
  DELETE_BUTTON,
  FIRST_SECTION,
  THIRD_SECTION,
  SECOND_SECTION,
  SELECT_TEAM_COURSE_TITLE,
} from "./constant.js";
import {
  onClickBackEndDeleteButton,
  onClickBackEndInput,
  onClickFrontEndDeleteButton,
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

  const clickedRadio = localStorage.getItem("radio-button");
  if (clickedRadio) {
    document.getElementById(clickedRadio).checked = true;
    if (clickedRadio === FRONT_END) {
      onClickFrontEndInput();
    } else if (clickedRadio === BACK_END) {
      onClickBackEndInput();
    }
  }
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

const createInputFormButton = event => {
  const button = document.createElement("button");
  button.type = "submit";
  button.innerText = INPUT_FORM_BUTTON;
  button.addEventListener("click", event);

  return button;
};

export const createInputForm = event => {
  const form = document.createElement("form");
  form.appendChild(createInputFormLabel());
  form.appendChild(createInputFormInput());
  form.appendChild(createInputFormButton(event));

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
  input.id = value;
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

const createIndexTd = text => {
  const td = document.createElement("td");
  td.innerText = text;

  return td;
};

const createNameTd = text => {
  const td = document.createElement("td");
  td.innerText = text;
  td.id = "name";

  return td;
};

const createDeleteButton = event => {
  const button = document.createElement("button");
  button.innerText = DELETE_BUTTON;
  button.addEventListener("click", event);

  return button;
};

const createButtonTd = event => {
  const td = document.createElement("td");
  td.appendChild(createDeleteButton(event));

  return td;
};

export const createFrontEndTableRaw = (member, index) => {
  const tr = document.createElement("tr");
  tr.appendChild(createIndexTd(index));
  tr.appendChild(createNameTd(member));
  tr.appendChild(createButtonTd(onClickFrontEndDeleteButton));

  return tr;
};

export const createBackEndTableRaw = (member, index) => {
  const tr = document.createElement("tr");
  tr.appendChild(createIndexTd(index));
  tr.appendChild(createNameTd(member));
  tr.appendChild(createButtonTd(onClickBackEndDeleteButton));

  return tr;
};

export const resetListSection = title => {
  const $section = document.getElementById(THIRD_SECTION);
  $section.innerHTML = "";
  $section.appendChild(createTitle(title));
  $section.appendChild(createMemberTable());
};

const resetSections = () => {
  const $first = document.getElementById(FIRST_SECTION);
  const $second = document.getElementById(SECOND_SECTION);
  const $third = document.getElementById(THIRD_SECTION);
  $first.innerHTML = "";
  $second.innerHTML = "";
  $third.innerHTML = "";
};

const resetSelectCourseSection = () => {
  const $section = document.getElementById(FIRST_SECTION);
  $section.innerHTML = "";
  $section.appendChild(createTitle(SELECT_COURSE_TITLE));
  $section.appendChild(createRadioInputContainer());
};

const createSelectForm = () => {
  const form = document.createElement("form");
};

const renderSelectMatchingSection = () => {
  const $section = document.getElementById(FIRST_SECTION);
  $section.appendChild(createTitle(SELECT_TEAM_COURSE_TITLE));
  $section.appendChild(createSelectForm());
};
