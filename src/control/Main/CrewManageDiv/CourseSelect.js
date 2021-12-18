import { COURSE } from '../../../common/constant.js';
import { $ } from '../../../common/element.js';
import { createCrewList } from '../../../view/Main/CrewManageNav/CrewList.js';
import createCrewManage from '../../../view/Main/CrewManageNav/CrewManage.js';
import { crewAdd } from './CrewManage.js';

export function getStandard() {
  const radioButtons = document.getElementsByName('course');
  let standard = COURSE.FRONTEND;

  radioButtons.forEach((button) => {
    if (button.checked) {
      if (button.value === 'backend') {
        standard = COURSE.BACKEND;
      }
    }
  });

  return standard;
}

function onCourseClick() {
  createCrewManage();
  crewAdd();
  createCrewList();
}

export function selectCourse() {
  $('frontend-course').addEventListener('click', onCourseClick);
  $('backend-course').addEventListener('click', onCourseClick);
}
