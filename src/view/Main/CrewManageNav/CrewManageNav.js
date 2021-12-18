import createCourseSelect from './CourseSelect.js';

export default function createCrewManageNav() {
  const crewManageNav = document.createElement('div');
  const courseSelect = createCourseSelect();
  crewManageNav.append(courseSelect);

  return crewManageNav;
}
