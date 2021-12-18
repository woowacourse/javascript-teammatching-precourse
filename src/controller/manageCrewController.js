import {
  BACK_END_INPUT_TITLE,
  BACK_END_TABLE_TITLE,
  FRONT_END_INPUT_TITLE,
  FRONT_END_TABLE_TITLE,
} from "../util/constant.js";
import {
  createInputForm,
  createTitle,
  resetListSection,
} from "../util/util.js";
import { crew } from "../component/crew.js";
import { renderMembers } from "../view/manageCrewView.js";

export const onClickAddFrontEnd = event => {
  event.preventDefault();
  const input = event.target.parentElement.querySelector("input");
  crew.frontEndMembers.push(input.value);
  input.value = "";
  renderMembers(crew.frontEndMembers);
};

export const onClickFrontEndInput = () => {
  const $section = document.getElementById("input-section");
  $section.innerHTML = "";
  $section.appendChild(createTitle(FRONT_END_INPUT_TITLE));
  $section.appendChild(createInputForm(onClickAddFrontEnd));
  resetListSection(FRONT_END_TABLE_TITLE);
  renderMembers(crew.frontEndMembers);
};

export const onClickBackEndInput = () => {
  const $section = document.getElementById("input-section");
  $section.innerHTML = "";
  $section.appendChild(createTitle(BACK_END_INPUT_TITLE));
  $section.appendChild(createInputForm());
  resetListSection(BACK_END_TABLE_TITLE);
  renderMembers(crew.backEndMembers);
};
