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

export const onClickFrontEndInput = () => {
  const $section = document.getElementById("input-section");
  $section.innerHTML = "";
  $section.appendChild(createTitle(FRONT_END_INPUT_TITLE));
  $section.appendChild(createInputForm());
  resetListSection(FRONT_END_TABLE_TITLE);
};

export const onClickBackEndInput = () => {
  const $section = document.getElementById("input-section");
  $section.innerHTML = "";
  $section.appendChild(createTitle(BACK_END_INPUT_TITLE));
  $section.appendChild(createInputForm());
  resetListSection(BACK_END_TABLE_TITLE);
};
