import { selectCourse, crewManage_input, crewManage_table } from "../constants/doms.js";

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
  const $crewManageInput = document.querySelector("#crew-manage-input");
  const $crewManageTable = document.querySelector("#crew-manage-table");

  $crewManageInput.style.display = "block";
  $crewManageTable.style.display = "block";
};

export const addCrewDOM = (number, crew) => {
  const table = document.getElementById("crew-table");
  
  const newRow = table.insertRow();

  const numberCell = newRow.insertCell(0);
  const nameCell = newRow.insertCell(1);
  const buttonCell = newRow.insertCell(2);

  numberCell.innerText = number;
  nameCell.innerText = crew;
  buttonCell.innerHTML = `<button id="delete-crew-buttton">삭제</button>`;
};

export const deleteCrewDOM = (e) => {  
  //해당 버튼이 속한 td 삭제
};