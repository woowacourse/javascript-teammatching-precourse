import { app, getCrewManager, getTeamManager } from '../domElement.js';

export const createMenu = () => {
  const menu = document.createElement('header');

  menu.append(createTitle(), createMenuList());
  app.append(menu);
};

const createTitle = () => {
  const title = document.createElement('h1');

  title.innerHTML = '우테코 크루와 팀 매칭 관리 보드';

  return title;
};

const createMenuList = () => {
  const menu = document.createElement('nav');
  const menuList = document.createElement('ul');
  const crewManage = document.createElement('li');
  const teamManage = document.createElement('li');

  crewManage.appendChild(createCrewManageButton());
  teamManage.appendChild(createTeamManageButton());
  menuList.append(crewManage, teamManage);
  menu.append(menuList);

  return menu;
};

const createCrewManageButton = () => {
  const button = document.createElement('button');

  button.innerHTML = '크루 관리';
  button.setAttribute('id', 'crew-tab');
  button.addEventListener('click', () => {
    showOrHideTab('crew');
  });

  return button;
};

const createTeamManageButton = () => {
  const button = document.createElement('button');

  button.innerHTML = '팀 매칭 관리';
  button.setAttribute('id', 'team-tab');
  button.addEventListener('click', () => {
    showOrHideTab('team');
  });

  return button;
};

const showOrHideTab = type => {
  const crewManager = getCrewManager();
  const teamManager = getTeamManager();

  switch (type) {
    case 'crew':
      crewManager.style.display = 'block';
      teamManager.style.display = 'none';
      break;

    case 'team':
      teamManager.style.display = 'block';
      crewManager.style.display = 'none';
      break;
  }
};
