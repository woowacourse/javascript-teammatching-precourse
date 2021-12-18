import createCourseSelect from './CourseSelect.js';
import createCourseManage from './CrewManage.js';

export default function createCrewManageNav() {
  const crewManageNav = document.createElement('div');
  const courseSelect = createCourseSelect();
  const crewManage = createCourseManage();
  crewManageNav.append(courseSelect);
  crewManageNav.innerHTML += crewManage;

  return crewManageNav;
}
