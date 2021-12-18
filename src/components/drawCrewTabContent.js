import { buttonIdElementCreate, h3ElementCreate, inputElementCreate, labelElemntCreate,theadElementCreate } from '../createElement.js';
import { $ } from '../dom.js';
import CrewNameValidity from './crewNameValidity.js';
import { frontEndCrew,backEndCrew } from '../index.js';
import ClearSection from './clearSection.js';

function drawCourseSection() {
  ClearSection('main');
  const section = document.createElement('section');
  section.id = 'crew-manage-choose-course';
  const sectionTitle = h3ElementCreate('크루를 관리할 코스를 선택해주세요.');
  const sectionDiv = document.createElement('div');
  const frontRadioInput = inputElementCreate({ 'id': 'frontend-course', 'type': 'radio' });
  frontRadioInput.name = 'course';
  frontRadioInput.value = 'frontend';
  const frontRadioLabel = labelElemntCreate({ 'for': 'frontend','text':'프론트엔드' });
  const backRadioInput = inputElementCreate({ 'id': 'backend-course', 'type': 'radio' });
  backRadioInput.name = 'course';
  backRadioInput.value = 'backend';
  const backRadioLabel = labelElemntCreate({ 'for': 'backend', 'text': '백엔드' });
  sectionDiv.append(frontRadioInput, frontRadioLabel, backRadioInput, backRadioLabel);
  section.append(sectionTitle, sectionDiv);
  $('main').appendChild(section);
  const nextSection = document.createElement('section');
  nextSection.id = 'add-crew-member';
  $('main').appendChild(nextSection);
}
function chooseCourse() {
  const courses = document.getElementsByName('course');
  for (let i = 0; i < courses.length; i++){
    courses[i].addEventListener('click', drawCrewManageSelction);
  }
}
function drawCrewManageSelction(e) {
  ClearSection('#add-crew-member');
  const section = $('#add-crew-member');
  let course = (e.target.value==='frontend')?'프론트엔드':'백엔드';
  const sectionTitle = h3ElementCreate(`${course} 크루 관리`);
  const sectionForm = document.createElement('form');
  const label = labelElemntCreate({ 'text': '크루이름' });
  const crewNameInput = inputElementCreate({ 'id': 'crew-name-input', 'type': 'text' });
  const crewNameButton = buttonIdElementCreate({ 'id': 'add-crew-buttton', 'text': '확인' });
  sectionForm.append(label,crewNameInput,crewNameButton);
  section.append(sectionTitle, sectionForm);
  $('main').appendChild(section);
  const nextSection = document.createElement('section');
  nextSection.id = 'crew-member-table';
  $('main').appendChild(nextSection);
  $('#add-crew-buttton').addEventListener('click', function () { drawCrewTableSelection(course); });
}
function addCrewNameToList(mode, name) {
  let crew = (mode === '프론트엔드') ? frontEndCrew : backEndCrew;
  let course = (mode === '프론트엔드') ? 'frontend' : 'backend';
  crew.push(name);
  localStorage.setItem(course, JSON.stringify(crew));
}
function drawCrewTableSelection(course) {
  const name = $('#crew-name-input').value;
  if (CrewNameValidity(course, name)) {
    addCrewNameToList(course, name);
    ClearSection('#crew-member-table');
    const section = $('#crew-member-table');
    const sectionTitle = h3ElementCreate(`${course} 크루 목록`);
    const table = crewTableBasic(course);
    section.append(sectionTitle, table);
    $('main').appendChild(section);
  }
}
function crewTableBasic(course) {
  const table = document.createElement('table');
  table.setAttribute('id', 'crew-table');
  const thead = theadElementCreate(['', '크루', '관리']);
  const tbody = document.createElement('tbody');
  const crew = (course === '프론트엔드') ? frontEndCrew : backEndCrew;
  for (let i = 0; i < crew.length; i++){
    tbody.appendChild(crewTableContent(i, crew[i]));
  }
  table.append(thead, tbody);
  activateDeleteCrewButton();
  return table;
}
function crewTableContent(i, name) {
  const tr = document.createElement('tr');
  const td = document.createElement('td');
  const countTd = td.cloneNode(true);
  countTd.innerText = i + 1;
  const nameTd = td.cloneNode(true);
  nameTd.innerText = name;
  const buttonTd = td.cloneNode(true);
  buttonTd.innerHTML = '<button class="delete-crew-button" type="button">삭제</button>';
  tr.append(countTd, nameTd, buttonTd);
  return tr;
}
function activateDeleteCrewButton() {
  let deleteBtns = document.querySelectorAll('.delete-crew-button');
  for (let i = 0; i < deleteBtns.length; i++){
    deleteBtns[i].addEventListener('click', deleteCrew);
  }
}
function deleteCrew(e) {
  console.log(e.path);
}
export default function DrawCrewTabContent() {
  drawCourseSection();
  chooseCourse();
}