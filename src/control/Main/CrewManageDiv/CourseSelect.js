import { $ } from '../../../common/element.js';
import createCrewList from '../../../view/Main/CrewManageNav/CrewList.js';
import createCrewManage from '../../../view/Main/CrewManageNav/CrewManage.js';

function onCourseClick() {
  createCrewManage();
  createCrewList();
}

export default function selectCourse() {
  $('frontend-course').addEventListener('click', onCourseClick);
  $('backend-course').addEventListener('click', onCourseClick);
}
