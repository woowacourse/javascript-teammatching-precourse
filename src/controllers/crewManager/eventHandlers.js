import { ALERT_MSG, OPTIONS } from "../../utils/constants.js";
import { showBackendSection } from "../../views/crewManager/backendCourse.js";
import { showFrontendSection } from "../../views/crewManager/frontendCourse.js";
import { checkCrewName } from "./checkCrewName.js";
import { addCrew, deleteCrew } from "./crewDataController.js";
import { getCourseValue } from "./getCourseValue.js";
import {
  showFrontEndCrews,
  showBackEndCrews,
} from "../../views/crewManager/showTable.js";

const onClickAddCrewButton = () => {
  const $addButton = document.getElementById("add-crew-buttton");

  $addButton.onclick = e => {
    e.preventDefault();
    const crewName = document.getElementById("crew-name-input");

    if (checkCrewName(crewName.value)) {
      addCrew(getCourseValue(), crewName.value);
      if (getCourseValue() === "frontend") {
        showFrontEndCrews();
      } else if (getCourseValue() === "backend") {
        showBackEndCrews();
      }
      crewName.value = "";
    } else {
      alert(ALERT_MSG.wrongName);
    }
  };
};

const onClickDeleteCrewButton = () => {
  const $deleteButtons = document.getElementsByClassName("delete-crew-button");

  for (let i = 0; i < $deleteButtons.length; i++) {
    $deleteButtons[i].onclick = () => {
      if (confirm(ALERT_MSG.askDeleteElement)) {
        deleteCrew($deleteButtons[i].id);
        if (getCourseValue() === "frontend") {
          showFrontEndCrews();
        } else if (getCourseValue() === "backend") {
          showBackEndCrews();
        }
      }
    };
  }
};

const selectFrontendCourse = () => {
  showFrontendSection();
  showFrontEndCrews();
  onClickAddCrewButton();
};

const selectBackendCourse = () => {
  showBackendSection();
  showBackEndCrews();
  onClickAddCrewButton();
};

const selectCourseEvent = () => {
  const $radioButtons = document.getElementsByName("course");

  for (let i = 0; i < $radioButtons.length; i++) {
    const { course } = OPTIONS;

    $radioButtons[i].addEventListener("click", () => {
      if ($radioButtons[i].value === course[0]) {
        selectFrontendCourse();
      } else if ($radioButtons[i].value === course[1]) {
        selectBackendCourse();
      }
    });
  }
};

export { selectCourseEvent, onClickDeleteCrewButton };
