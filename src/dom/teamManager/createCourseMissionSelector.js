import { teamMatching } from '../../index.js';
import { app } from '../domElement.js';

export const createCourseMissionSelector = () => {
  const manager = document.createElement('div');

  manager.append(createTitle(), createSelectorForm());

  app.append(manager);
};

const createTitle = () => {
  const title = document.createElement('h3');

  title.innerHTML = '팀 매칭을 관리할 코스, 미션을 선택하세요.';

  return title;
};

const createSelectorForm = () => {
  const form = document.createElement('div');

  form.append(
    createCourseSelector(),
    createMissionSelector(),
    createSelectButton()
  );

  return form;
};

const createCourseSelector = () => {
  const selector = document.createElement('select');

  selector.setAttribute('id', 'course-select');
  teamMatching.courses.forEach(course => {
    selector.appendChild(createOption(course.name, course.value));
  });

  return selector;
};

const createMissionSelector = () => {
  const selector = document.createElement('select');

  selector.setAttribute('id', 'mission-select');
  teamMatching.missions.forEach(mission => {
    selector.appendChild(createOption(mission.name, mission.value));
  });

  return selector;
};

const createOption = (name, value) => {
  const option = document.createElement('option');

  option.innerHTML = name;
  option.value = value;

  return option;
};

const createSelectButton = () => {
  const button = document.createElement('button');

  button.innerHTML = '확인';
  button.setAttribute('id', 'show-team-matcher-button');

  return button;
};
