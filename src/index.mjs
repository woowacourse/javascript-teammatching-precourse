import {
  renderHeader,
  renderCourseChoice,
  renderInputCrewNameAndList
} from './view/index.mjs';

import {
  valueToString,
  setLogetCourseFrontEndOrBackEndcalStorage,
  getCourseFrontEndOrBackEnd,
  validateName
} from './util/index.mjs';

import FrontEnd from './model/FrontEnd.mjs';
import BackEnd from './model/BackEnd.mjs';

const FE = new FrontEnd();
const BE = new BackEnd();

window.addEventListener('DOMContentLoaded', () => {
  renderHeader();
});

// [크루 관리]
window.addEventListener('click', e => {
  if (e.target !== document.querySelector('#crew-tab')) return;
  if (window.document.querySelector('main')) return;
  renderCourseChoice();
});

// [크루 관리 - 코스 선택]
window.addEventListener('click', e => {
  if (e.target.type !== 'radio') return;
  const frontEndOrBackEndString = valueToString(e.target.value);

  renderInputCrewNameAndList(frontEndOrBackEndString);
  setLogetCourseFrontEndOrBackEndcalStorage(e.target.value);
});

// [크루 관리 - 코스 선택 - 크루 이름 등록]
// 현재 선택한 코스가 어디인지 파악 후 해당 코스에 이름을 추가한다.
window.addEventListener('click', e => {
  e.preventDefault();

  if (e.target !== document.querySelector('#add-crew-button')) return;
  const crewNameInput = document.querySelector('#crew-name-input').value;
  const curCourse = getCourseFrontEndOrBackEnd();
  const frontEndOrBackEndString = valueToString(curCourse);
  if (!validateName(crewNameInput)) return;

  if (curCourse === 'frontend') FE.setCrew(crewNameInput);
  if (curCourse === 'backend') BE.setCrew(crewNameInput);
  renderInputCrewNameAndList(frontEndOrBackEndString);
});

// [크루 관리 - 코스 선택 - 삭제]
// 해당 행 삭제, 크루 삭제
window.addEventListener('click', e => {
  [...document.querySelectorAll('.delete-crew-button')].forEach(button => {
    if (e.target === button && window.confirm('정말 지우시겠습니까?')) {
      const deleteCrew = e.target.parentNode.previousElementSibling.textContent;
      const curCourse = getCourseFrontEndOrBackEnd();
      const frontEndOrBackEndString = valueToString(curCourse);

      if (curCourse === 'frontend') FE.deleteCrew(deleteCrew);
      if (curCourse === 'backend') BE.deleteCrew(deleteCrew);
      renderInputCrewNameAndList(frontEndOrBackEndString);
    }
  });
});
