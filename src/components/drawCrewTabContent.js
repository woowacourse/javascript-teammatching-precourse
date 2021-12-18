import { buttonIdElementCreate, h3ElementCreate, inputElementCreate, labelElemntCreate,theadElementCreate } from '../createElement.js';
import { $ } from '../dom.js';
import CrewNameValidity from './crewNameValidity.js';
import CREW from '../index.js';

function drawCourseSection() {
  const section = document.createElement('section');
  const sectionTitle = h3ElementCreate('크루를 관리할 코스를 선택해주세요.');
  const sectionDiv = document.createElement('div');
  const frontRadioInput = inputElementCreate({ "id": "frontend-course", "type": "radio" })
  frontRadioInput.name = "course";
  frontRadioInput.value = "frontend";
  const frontRadioLabel = labelElemntCreate({ "for": "frontend","text":"프론트엔드" });
  const backRadioInput = inputElementCreate({ "id": "backend-course", "type": "radio" });
  backRadioInput.name = "course";
  backRadioInput.value = "backend";
  const backRadioLabel = labelElemntCreate({ "for": "backend","text":"백엔드" });
  sectionDiv.append(frontRadioInput, frontRadioLabel, backRadioInput, backRadioLabel);
  section.append(sectionTitle, sectionDiv);
  $('main').appendChild(section);
}
function chooseCourse() {
  const courses = document.getElementsByName("course");
  let checkedCourse = "";
  for (let i = 0; i < courses.length; i++){
    courses[i].addEventListener('click', drawCrewManageSelction);
  }
}
function drawCrewManageSelction(e) {
  let course = (e.target.value==="frontend")?"프론트엔드":"백엔드";
  const section = document.createElement('section');
  const sectionTitle = h3ElementCreate(`${course} 크루 관리`);
  const sectionForm = document.createElement('form');
  const label = labelElemntCreate({ "text": "크루이름" });
  const crewNameInput = inputElementCreate({ "id": "crew-name-input", "type": "text" });
  const crewNameButton = buttonIdElementCreate({ "id": "add-crew-button", "text": "확인" });
  sectionForm.append(label,crewNameInput,crewNameButton);
  section.append(sectionTitle, sectionForm);
  $('main').appendChild(section);
  $('#add-crew-button').addEventListener('click', function () { drawCrewTableSelection(course); });
}
function drawCrewTableSelection(course) {
  const name = $('#crew-name-input').value;
  if (CrewNameValidity(name)) {
    const section = document.createElement('section');
    const sectionTitle = h3ElementCreate(`${course} 크루 목록`);
    const table = crewTableBasic();
    section.append(sectionTitle, table);
    $('main').appendChild(section);
  }
}
function crewTableBasic() {
  const table = document.createElement('table');
  const thead = theadElementCreate(['', '크루', '관리']);
  const tbody = document.createElement('tbody');
  for (let i = 0; i < CREW.length; i++){
    tbody.appendChild(crewTableContent(CREW[i]));
  }
  table.append(thead, tbody);
  return table;
}
function crewTableContent(name) {
  const tr = document.createElement('tr');
  const td = document.createElement('td');
  const countTd = td.cloneNode(true);
  countTd.innerText = i + 1;
  const nameTd = td.cloneNode(true);
  nameTd.innerText = name;
  const buttonTd = td.cloneNode(true);
  buttonTd.innerHTML = `<button class="delete-crew-button" type="button">삭제</button>`;
  tr.append(countTd, nameTd, buttonTd);
  return tr;
}
export default function DrawCrewTabContent() {
  drawCourseSection();
  chooseCourse();
}