import { isOver5Words } from "../../utils/valid.js";

export function clickAddCrewButton(e) {
  e.preventDefault();
  const $crewNameInput = document.getElementById("crew-name-input");
  const isCourseFrontEnd = document.getElementById("frontend-course").checked;

  if (isOver5Words($crewNameInput.value)) return;

  if (isCourseFrontEnd) {
    console.log("fix! 프론트엔드 목록에서 동일 이름 체크");
  } else {
    console.log("fix! 백엔드 목록에서 동일 이름 체크");
  }

  console.log($crewNameInput.value);
}
