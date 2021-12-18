import { $ } from '../../../common/element.js';
import createCrewManage from '../../../view/Main/CrewManageNav/CrewManage.js';

function onCourseClick() {
  createCrewManage();
}

export default function selectCourse() {
  $('frontend-course').addEventListener('click', onCourseClick);
  $('backend-course').addEventListener('click', onCourseClick);
}
