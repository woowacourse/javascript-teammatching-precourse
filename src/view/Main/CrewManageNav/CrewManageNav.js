import createCourseSelect from './CourseSelect.js';

export default function createCrewManageNav() {
  const crewManageNav = document.createElement('div');
  crewManageNav.setAttribute('id', 'crew-manage-nav');
  crewManageNav.style.display = 'none';

  const courseSelect = createCourseSelect();
  crewManageNav.append(courseSelect);

  return crewManageNav;
}
