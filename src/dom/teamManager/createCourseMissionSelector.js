import { noCrewException } from '../../exception.js';
import { teamMatching } from '../../index.js';
import { app, getTeamManager } from '../domElement.js';
import { createTeamManager } from './createTeamManager.js';

export const createCourseMissionSelector = () => {
  const manager = document.createElement('div');
  const teamManager = getTeamManager();

  manager.append(createTitle(), createSelectorForm());

  teamManager.append(manager);
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
  button.addEventListener('click', () => {
    if (noCrewException()) {
      return;
    }

    printTeamMatchingView();
  });

  return button;
};

const printTeamMatchingView = () => {
  const courseSelector = document.getElementById('course-select');
  const missionSelector = document.getElementById('mission-select');

  createTeamManager(
    courseSelector.options[courseSelector.selectedIndex].value,
    missionSelector.options[missionSelector.selectedIndex].value,
    courseSelector.options[courseSelector.selectedIndex].innerHTML,
    missionSelector.options[missionSelector.selectedIndex].innerHTML
  );
};
