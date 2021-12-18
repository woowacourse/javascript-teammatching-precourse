import { app } from '../domElement.js';
import { teamMatching } from '../../index.js';

export const createCrewManager = type => {
  const manager = document.createElement('section');

  manager.setAttribute('id', 'crew-add-form');
  manager.append(createTitle(type), createForm(type));

  return manager;
};

const createTitle = type => {
  const title = document.createElement('h3');

  title.innerHTML = `${
    type === 'frontend' ? '프론트엔드' : '백엔드'
  } 크루 관리`;

  return title;
};

const createForm = type => {
  const form = document.createElement('div');
  const label = document.createElement('label');
  const nameInput = document.createElement('input');

  label.innerHTML = '크루 이름';
  nameInput.type = 'text';
  nameInput.setAttribute('id', 'crew-name-input');

  form.append(label, nameInput, createOkButton(type));

  return form;
};

const createOkButton = type => {
  const button = document.createElement('button');

  button.innerHTML = '확인';
  button.setAttribute('id', 'add-crew-buttton');
  button.addEventListener('click', () => {
    teamMatching.addCrew(type);
  });

  return button;
};
