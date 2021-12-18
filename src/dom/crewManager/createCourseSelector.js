import { app, getCrewManager } from '../domElement.js';
import { createCrewManager } from './createCrewManager.js';
import { createCrewTable } from './createCrewTable.js';

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

  selectFrontend(courseSelector);
  selectBackend(courseSelector);

  return courseSelector;
};

const selectFrontend = courseSelector => {
  const input = document.createElement('input');
  const label = document.createElement('label');

  input.type = 'radio';
  input.name = 'course';
  input.value = 'frontend';
  input.setAttribute('id', 'frontend-course');
  input.onclick = () => {
    selectCourse();
  };
  label.innerHTML = '프론트엔드';
  label.setAttribute('for', 'frontend-course');

  courseSelector.append(input, label);
};

const selectBackend = courseSelector => {
  const input = document.createElement('input');
  const label = document.createElement('label');

  input.type = 'radio';
  input.name = 'course';
  input.value = 'backend';
  input.setAttribute('id', 'backend-course');
  input.onclick = () => {
    selectCourse();
  };
  label.innerHTML = '백엔드';
  label.setAttribute('for', 'backend-course');

  courseSelector.append(input, label);
};

const selectCourse = () => {
  const crewManager = getCrewManager();
  const selectedCourse = document.querySelector(
    'input[name="course"]:checked'
  ).value;

  const prevForm = document.getElementById('crew-add-form');
  prevForm?.remove();

  crewManager.append(
    createCrewManager(selectedCourse),
    createCrewTable(selectedCourse)
  );
};
