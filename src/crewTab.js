import {
  FRONT_CREW_MANAGE_TEMPLATE,
  BACK_CREW_MANAGE_TEMPLATE,
} from './template.js';

import { getData, setData } from './localStorage.js';

export function getCourse() {
  const courseList = document.getElementsByName('course');
  const select = document.getElementById('course-select');

  select.addEventListener('change', (e) => {
    courseList.forEach((course) => {
      if (course.checked) {
        checkCourseView(course.value);
        inputName();
      }
    });
  });
}

export function checkCourseView(value) {
  const $crew = document.getElementById('crew-content');
  let front = document.createElement('div');
  front.setAttribute('id', 'front-div');
  let back = document.createElement('div');
  back.setAttribute('id', 'back-div');
  front.innerHTML = FRONT_CREW_MANAGE_TEMPLATE;
  back.innerHTML = BACK_CREW_MANAGE_TEMPLATE;
  if (value === 'frontend') {
    if (document.getElementById('back'))
      document.getElementById('back-div').outerHTML = '';
    if (!document.getElementById('front')) $crew.appendChild(front);
  }
  if (value === 'backend') {
    if (document.getElementById('front'))
      document.getElementById('front-div').outerHTML = '';
    if (!document.getElementById('back')) $crew.appendChild(back);
  }
}

export function inputName() {
  const nameButton = document.getElementById('add-crew-buttton');
  nameButton.addEventListener('click', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('crew-name-input').value;
    checkName(nameInput);
    addToList(nameInput);
  });
}
export function addToTable(crewMember) {
  const tableBody = document.querySelector('#crew-table > tbody');
  crewMember.forEach((member) => {
    tableBody.innerHTML += `<tr>
        <td>${member.id}</td>
        <td>${member.member}</td>
        <td>
          <button class="delete-crew-buttton">삭제</button>
        </td>
      </tr>`;
  });
  deleteMember();
}
export function addToList(_member) {
  if (_member == '') return;
  let crewMember = getData('crewMember');
  console.log(crewMember.length);
  let id = crewMember.length;
  crewMember.push({ id: id, member: _member });
  setData('crewMember', crewMember);
  addToTable(crewMember);
}

export function deleteMember() {
  let crewMember = getData('crewMember');
  const deleteBtn = document.getElementsByClassName('delete-crew-buttton');
  for (let btn of deleteBtn) {
    btn.addEventListener('click', (e) => {
      let checkOk = confirm('정말로 삭제하시겠습니까?');
      if (checkOk) {
        e.target.parentElement.parentElement.remove();
      }
      return;
    });
  }
}
export function checkName(nameInput) {
  if (nameInput <= 0) {
    alert('이름을 제대로 입력해 주십시오');
    return;
  }
}
