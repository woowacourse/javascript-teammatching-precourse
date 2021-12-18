import { teamMatching } from '../../index.js';
import { getTeamManager } from '../domElement.js';

export const printResult = (course, mission) => {
  const teamManager = getTeamManager();
  const prevResult = document.getElementById('result-print');
  prevResult?.remove();
  const prevForm = document.getElementById('team-matching-form');
  prevForm?.remove();

  const result = document.createElement('div');

  result.setAttribute('id', 'result-print');
  result.append(createTitle(course, mission), createList());
  teamManager.append(result);
};

const createTitle = (course, mission) => {
  const container = document.createElement('div');
  const title = document.createElement('h3');
  const message = document.createElement('p');

  title.innerHTML = `${course} ${mission} 조회`;
  message.innerHTML = '팀이 매칭되었습니다.';
  container.append(title, message);

  return container;
};

const createList = () => {
  const list = document.createElement('ul');

  list.setAttribute('id', 'team-match-result');
  teamMatching.teams.forEach(team => {
    list.append(createItem(team.join(',')));
  });

  return list;
};

const createItem = members => {
  const item = document.createElement('li');

  item.innerHTML = members;

  return item;
};
