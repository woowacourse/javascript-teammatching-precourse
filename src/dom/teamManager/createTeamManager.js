import { teamMatching } from '../../index.js';
import { app, getTeamManager } from '../domElement.js';

export const createTeamManager = (course, mission, courseName, missionName) => {
  const teamManager = getTeamManager();
  const prevManager = document.getElementById('team-matching-form');
  prevManager?.remove();
  const manager = document.createElement('section');

  manager.setAttribute('id', 'team-matching-form');
  manager.append(
    createTitle(courseName, missionName),
    createForm(course, mission),
    createCrewList(course)
  );
  teamManager.append(manager);
};

const createTitle = (course, mission) => {
  const container = document.createElement('div');
  const title = document.createElement('h3');
  const question = document.createElement('p');

  question.innerHTML = '아직 매칭된 팀이 없습니다. 팀을 매칭하겠습니까?';
  title.innerHTML = `${course} ${mission} 미션의 팀 매칭`;
  container.append(title, question);

  return container;
};

const createForm = (course, mission) => {
  const form = document.createElement('div');
  const label = document.createElement('label');
  const numberInput = document.createElement('input');

  label.innerHTML = '1팀당 인원 수';
  numberInput.type = 'number';
  numberInput.setAttribute('id', 'team-member-count-input');
  form.append(label, numberInput, createTeamMatchingButton(course, mission));

  return form;
};

const createTeamMatchingButton = (course, mission) => {
  const matchingButton = document.createElement('button');

  matchingButton.innerHTML = '팀 매칭';
  matchingButton.setAttribute('id', 'match-team-button');
  matchingButton.addEventListener('click', () => {
    teamMatching.matchingTeam(course, mission);
  });

  return matchingButton;
};

const createCrewList = course => {
  const container = document.createElement('div');
  const title = document.createElement('h4');
  const list = document.createElement('ul');

  title.innerHTML = '크루 목록';

  teamMatching.crews[course].forEach(crew => {
    list.appendChild(createCrewItem(crew));
  });
  container.append(title, list);

  return container;
};

const createCrewItem = crew => {
  const crewItem = document.createElement('li');

  crewItem.innerHTML = crew;

  return crewItem;
};
