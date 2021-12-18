import {
  BACK_END,
  BACK_END_INPUT_TITLE,
  BACK_END_TABLE_TITLE,
  CONFIRM_MESSAGE,
  FRONT_END,
  FRONT_END_INPUT_TITLE,
  FRONT_END_TABLE_TITLE,
  SECOND_SECTION,
} from "../util/constant.js";
import {
  createInputForm,
  createTitle,
  resetListSection,
} from "../util/util.js";
import { crew } from "../component/crew.js";
import {
  renderBackEndMembers,
  renderFrontEndMembers,
} from "../view/manageCrewView.js";
import {
  checkBackEndCrewInput,
  checkFrontEndCrewInput,
} from "../util/validation.js";

const saveFrontEndMembers = () => {
  localStorage.setItem("frontEnd", crew.frontEndMembers);
};

const saveBackEndMembers = () => {
  localStorage.setItem("backEnd", crew.backEndMembers);
};

export const onClickAddFrontEnd = event => {
  event.preventDefault();
  const input = event.target.parentElement.querySelector("input");
  if (checkFrontEndCrewInput(input.value)) {
    crew.frontEndMembers.push(input.value);
    input.value = "";
    saveFrontEndMembers();
    renderFrontEndMembers(crew.frontEndMembers);
  }
};

export const onClickAddBackEnd = event => {
  event.preventDefault();
  const input = event.target.parentElement.querySelector("input");
  if (checkBackEndCrewInput(input.value)) {
    crew.backEndMembers.push(input.value);
    input.value = "";
    saveBackEndMembers();
    renderBackEndMembers(crew.backEndMembers);
  }
};

export const onClickFrontEndInput = () => {
  const $section = document.getElementById(SECOND_SECTION);
  $section.innerHTML = "";
  $section.appendChild(createTitle(FRONT_END_INPUT_TITLE));
  $section.appendChild(createInputForm(onClickAddFrontEnd));
  resetListSection(FRONT_END_TABLE_TITLE);
  renderFrontEndMembers(crew.frontEndMembers);
  localStorage["radio-button"] = FRONT_END;
};

export const onClickBackEndInput = () => {
  const $section = document.getElementById(SECOND_SECTION);
  $section.innerHTML = "";
  $section.appendChild(createTitle(BACK_END_INPUT_TITLE));
  $section.appendChild(createInputForm(onClickAddBackEnd));
  resetListSection(BACK_END_TABLE_TITLE);
  renderBackEndMembers(crew.backEndMembers);
  localStorage["radio-button"] = BACK_END;
};

export const onClickFrontEndDeleteButton = event => {
  event.preventDefault();
  const ok = confirm(CONFIRM_MESSAGE);
  if (ok) {
    const name =
      event.target.parentElement.parentElement.querySelector("#name").innerText;
    crew.frontEndMembers = crew.frontEndMembers.filter(
      member => member !== name
    );
    saveFrontEndMembers();
    renderFrontEndMembers(crew.frontEndMembers);
  }
};

export const onClickBackEndDeleteButton = event => {
  event.preventDefault();
  const ok = confirm(CONFIRM_MESSAGE);
  if (ok) {
    const name =
      event.target.parentElement.parentElement.querySelector("#name").innerText;
    crew.backEndMembers = crew.backEndMembers.filter(member => member !== name);
    saveBackEndMembers();
    renderBackEndMembers(crew.backEndMembers);
  }
};
