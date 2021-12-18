import { app, getCrewManager } from '../domElement.js';

export const createCourseSelector = () => {
  const section = document.createElement('section');
  const crewManager = getCrewManager();

  section.append(createTitle(), createSelector());

  crewManager.appendChild(section);
};

const createTitle = () => {
  const title = document.createElement('h3');

  title.innerHTML = '크루를 관리할 코스를 선택해주세요';

  return title;
};

const createSelector = () => {
  const courseSelector = document.createElement('div');

  courseSelector.innerHTML = `
    <input type="radio" name="course" value="frontend" id="frontend-course"/>
    <label for="frontend-course">프론트엔드</label>
    <input type="radio" name="course" value="backend" id="backend-course"/>
    <label for="backend-course">백엔드</label>
  `;

  return courseSelector;
};
