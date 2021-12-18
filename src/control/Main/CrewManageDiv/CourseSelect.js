import { $ } from '../../../common/element.js';
import { createCrewList } from '../../../view/Main/CrewManageNav/CrewList.js';
import createCrewManage from '../../../view/Main/CrewManageNav/CrewManage.js';
import crewAdd from './CrewManage.js';

function onCourseClick() {
  createCrewManage();
  crewAdd();
  createCrewList();
}

export default function selectCourse() {
  $('frontend-course').addEventListener('click', onCourseClick);
  $('backend-course').addEventListener('click', onCourseClick);
}
