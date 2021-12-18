import createCourseSelect from './CourseSelect.js';
import createCrewList from './CrewList.js';
import createCourseManage from './CrewManage.js';

export default function createCrewManageNav() {
  const crewManageNav = document.createElement('div');
  crewManageNav.setAttribute('id', 'crew-manage-nav');
  const courseSelect = createCourseSelect();
  crewManageNav.append(courseSelect);

  const crewManage = createCourseManage();
  crewManageNav.innerHTML += crewManage;
  const crewList = createCrewList();
  crewManageNav.append(crewList);

  return crewManageNav;
}
