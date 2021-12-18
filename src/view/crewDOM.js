import { selectCourse, crewManage_input, crewManage_table } from "../constants/doms.js";
import { $crewTable } from "../constants/constants.js";

export const initCrewDOM = () => {
  document.body.innerHTML += selectCourse;
  document.body.innerHTML += crewManage_input;
  document.body.innerHTML += crewManage_table;
};

export const selectCourseDOM = () => {
  const $crewSelectCourse = document.querySelector("#crew-select-course");

  $crewSelectCourse.style.display = "block";
};

export const crewManageDOM = () => {
  const $crewManageInput = document.querySelector("#crew-select-course");
  const $crewManageTable = document.querySelector("#crew-manage-table");

  $crewManageInput.style.display = "block";
  $crewManageTable.style.display = "block";
};

export const addCrewDOM = (number, crew) => {
  const table = $crewTable.getElementsByTagName("tbody");
  const td = `
    <tr>
      <td>${number}</td>
      <td>${crew}</td>
      <td>
        <button id="delete-crew-buttton">삭제</button>
      </td>
    </tr>
  `;

  table.innerHTML = td;
};

export const deleteCrewDOM = (e) => {  
  //해당 버튼이 속한 td 삭제
};