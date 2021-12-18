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
  CREW_TAB,
  TEAM_TAB,
  FRONT_END_RADIO,
  BACK_END_RADIO,
  CREW_NAME_INPUT,
  ADD_CREW_BUTTON,
  DELETE_CREW_BUTTON,
  COURSE_ID,
  COURSES,
  MISSION_ID,
  MISSIONS,
  CHECK_BUTTON_ID,
  CHECK_BUTTON_TEXT,
  MATCHING_FORM_LABEL,
  NO_MATCHING_P,
  MATCHING_FORM_BUTTON,
  MATCHING_FORM_BUTTON_TEXT,
  MATCHING_FORM_INPUT,
  CREW_LIST,
  MATCHING_P,
  MATCHING_RESULT,
  REMATCHING_BUTTON_TEXT,
  REMATCHING_TEXT,
  REMATCHING_BUTTON,
} from "./constant.js";
import {
  onClickBackEndDeleteButton,
  onClickBackEndInput,
  onClickFrontEndDeleteButton,
  onClickFrontEndInput,
} from "../controller/manageCrewController.js";
import {
  onClickCheckButton,
  onClickMatchingButton,
} from "../controller/manageTeamController.js";
import { crew } from "../component/crew.js";

export const initialize = () => {
  const $app = document.getElementById("app");
  $app.innerHTML = PUBLIC_HEADER;

  const $crewTab = document.getElementById(CREW_TAB);
  const $teamTab = document.getElementById(TEAM_TAB);
  $crewTab.addEventListener("click", onClickCrewTab);
  $teamTab.addEventListener("click", onClickTeamTab);
};

const onClickCrewTab = event => {
  event.preventDefault();
  resetSelectCourseSection();

  const clickedRadio = localStorage.getItem("radio-button");
  if (clickedRadio) {
    if (clickedRadio === FRONT_END) {
      document.getElementById(FRONT_END_RADIO).checked = true;
      onClickFrontEndInput();
    } else if (clickedRadio === BACK_END) {
      document.getElementById(BACK_END_RADIO).checked = true;
      onClickBackEndInput();
    }
  }
};

const onClickTeamTab = event => {
  event.preventDefault();
  resetSections();
  renderSelectMatchingSection();
};

const createInputFormLabel = () => {
  const label = document.createElement("label");
  label.innerText = INPUT_FORM_LABEL;

  return label;
};

const createInputFormInput = () => {
  const input = document.createElement("input");
  input.type = "text";
  input.id = CREW_NAME_INPUT;

  return input;
};

const createInputFormButton = event => {
  const button = document.createElement("button");
  button.type = "submit";
  button.id = ADD_CREW_BUTTON;
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

const createRadioInput = (value, id, event) => {
  const input = document.createElement("input");
  input.type = "radio";
  input.name = "course";
  input.id = id;
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
  div.appendChild(
    createRadioInput(FRONT_END, FRONT_END_RADIO, onClickFrontEndInput)
  );
  div.appendChild(createRadioLabel(FRONT_END, FRONT_END_TEXT));
  div.appendChild(
    createRadioInput(BACK_END, BACK_END_RADIO, onClickBackEndInput)
  );
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
  button.className = DELETE_CREW_BUTTON;
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

const createOption = optionInformation => {
  const [text, value] = optionInformation;
  const option = document.createElement("option");
  option.value = value;
  option.innerText = text;

  return option;
};

const createSelect = (id, options) => {
  const select = document.createElement("select");
  select.id = id;
  options.forEach(option => select.append(createOption(option)));

  return select;
};

const createCheckButton = () => {
  const button = document.createElement("button");
  button.id = CHECK_BUTTON_ID;
  button.innerText = CHECK_BUTTON_TEXT;
  button.add;
  button.addEventListener("click", onClickCheckButton);

  return button;
};

const createSelectForm = () => {
  const form = document.createElement("form");
  form.appendChild(createSelect(COURSE_ID, COURSES));
  form.appendChild(createSelect(MISSION_ID, MISSIONS));
  form.appendChild(createCheckButton());

  return form;
};

const renderSelectMatchingSection = () => {
  const $section = document.getElementById(FIRST_SECTION);
  $section.appendChild(createTitle(SELECT_TEAM_COURSE_TITLE));
  $section.appendChild(createSelectForm());
};

export const noMatchingTitleFrontEnd = name => {
  const title = MISSIONS.filter(mission => mission[1] === name)[0][0];
  const string = `프론트엔드 ${title} 미션의 팀 매칭`;

  return string;
};

export const matchingTitleFrontEnd = name => {
  const title = MISSIONS.filter(mission => mission[1] === name)[0][0];
  const string = `프론트엔드 ${title} 팀 조회`;

  return string;
};

export const noMatchingTitleBackEnd = name => {
  const title = MISSIONS.filter(mission => mission[1] === name)[0][0];
  const string = `백엔드 ${title} 미션의 팀 매칭`;

  return string;
};

const createNoMatchingFormLabel = () => {
  const label = document.createElement("label");
  label.innerText = MATCHING_FORM_LABEL;

  return label;
};

const createNoMatchingP = () => {
  const p = document.createElement("p");
  p.innerText = NO_MATCHING_P;

  return p;
};

export const createMatchingP = () => {
  const p = document.createElement("p");
  p.innerText = MATCHING_P;

  return p;
};

export const createResultUl = results => {
  const ul = document.createElement("ul");
  ul.id = MATCHING_RESULT;
  results.forEach(result => ul.appendChild(createLi(result.join(","))));

  return ul;
};

const createMatchingFormInput = () => {
  const input = document.createElement("input");
  input.id = MATCHING_FORM_INPUT;

  return input;
};

const createMatchingFormButton = () => {
  const button = document.createElement("button");
  button.id = MATCHING_FORM_BUTTON;
  button.innerText = MATCHING_FORM_BUTTON_TEXT;
  button.addEventListener("click", onClickMatchingButton);

  return button;
};

const createMatchingFormFrontEnd = () => {
  const form = document.createElement("form");
  form.appendChild(createNoMatchingFormLabel());
  form.appendChild(createMatchingFormInput());
  form.appendChild(createMatchingFormButton());

  return form;
};

const createNoMatchingFormContainer = () => {
  const div = document.createElement("div");
  div.appendChild(createNoMatchingP());
  div.appendChild(createMatchingFormFrontEnd());

  return div;
};

const createListHeader = () => {
  const h4 = document.createElement("h4");
  h4.innerText = CREW_LIST;

  return h4;
};

const createLi = member => {
  const li = document.createElement("li");
  li.innerText = member;

  return li;
};

const createCrewList = members => {
  const ul = document.createElement("ul");
  members.forEach(member => ul.appendChild(createLi(member)));

  return ul;
};

export const createNoMatchingContainer = course => {
  const div = document.createElement("div");
  let members;
  if (course === FRONT_END) {
    members = crew.frontEndMembers;
  } else if (course === BACK_END) {
    members = crew.backEndMembers;
  }
  div.appendChild(createNoMatchingFormContainer());
  div.appendChild(createListHeader());
  div.appendChild(createCrewList(members));

  return div;
};

const createReMatchingButton = () => {
  const button = document.createElement("button");
  button.id = REMATCHING_BUTTON;
  button.innerText = REMATCHING_BUTTON_TEXT;

  return button;
};

export const createReMatchingContainer = () => {
  const p = document.createElement("p");
  p.innerText = REMATCHING_TEXT;
  p.appendChild(createReMatchingButton());

  return p;
};
