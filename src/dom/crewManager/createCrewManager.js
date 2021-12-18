import { app } from '../domElement.js';

export const createCrewManager = type => {
  const manager = document.createElement('section');

  manager.append(createTitle(type), createForm(type));
  app.appendChild(manager);
};

const createTitle = type => {
  const title = document.createElement('h3');

  title.innerHTML = `${type} 크루 관리`;

  return title;
};

const createForm = type => {
  const form = document.createElement('div');
  const label = document.createElement('label');
  const nameInput = document.createElement('input');
  const button = document.createElement('button');

  label.innerHTML = '크루 이름';
  nameInput.type = 'text';
  nameInput.setAttribute('id', 'crew-name-input');
  button.innerHTML = '확인';
  button.setAttribute('id', 'add-crew-buttton');
  form.append(label, nameInput, button);

  return form;
};
