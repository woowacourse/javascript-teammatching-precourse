import { frontEndCrewAdd, crewTable, backEndCrewAdd } from './dom.js';
import Crew from './Crew.js';
import { saveCrewToLocalStorage, getCrewsFromLocalStorage, saveCrewsToLocalStorage } from './utilsLocalStorage.js';

export const initCrewManage = () => {
  const frontEndButton = document.getElementById('frontend-course');
  const backEndButton = document.getElementById('backend-course');
  frontEndButton.addEventListener('click', () => showFrontEndCrew());
  backEndButton.addEventListener('click', () => showBackEndCrew());
};

const showFrontEndCrew = () => {
  removeAddCrew();
  cleanTable();
  document.getElementById('container').insertAdjacentHTML('afterend', frontEndCrewAdd);
  showCrewTable('frontEnd');

  const crewAddButton = document.getElementById('add-crew-buttton');
  crewAddButton.addEventListener('click', () => addCrew('frontEnd'));
};

const showBackEndCrew = () => {
  removeAddCrew();
  cleanTable();
  document.getElementById('container').insertAdjacentHTML('afterend', backEndCrewAdd);
  showCrewTable('backEnd');

  const crewAddButton = document.getElementById('add-crew-buttton');
  crewAddButton.addEventListener('click', () => addCrew('backEnd'));
};

const showCrewTable = (course) => {
  document.getElementById('CrewAdd').insertAdjacentHTML('afterend', crewTable);
  const crews = getCrewsFromLocalStorage('crew');
  const crew_Table = document.getElementById('crew-table');
  let index = 0;

  for (let crew of crews) {
    if (crew.course === course) {
      index += 1;
      crew_Table.insertAdjacentHTML('beforeend', crewTableRow(index, crew));
    }
  }

  initdeleteButton();
};

const addCrew = (course) => {
  const crewName = document.getElementById('crew-name-input').value;
  const crewTable = document.getElementById('crew-table');
  let crews = getCrewsFromLocalStorage('crew');

  const newCrew = new Crew(crewName, course);

  if (isNameValid(newCrew.name)) {
    saveCrewToLocalStorage('crew', newCrew);
    cleanTable();
    showCrewTable(course);
  }
  event.preventDefault();
};

const crewTableRow = (index, crew) => `
<tr>
    <td class = 'index'> ${index} </td>
    <td class = 'td-crew-name'> ${crew.name}</td>
    <td>
          <button id = 'delete-crew-buttton' name = 'delete-crew-buttton'>삭제</button>
    </td>
</tr>
`;

const removeAddCrew = () => {
  const contents = document.getElementById('CrewAdd');
  if (contents) {
    contents.innerHTML = '';
  }
};

const cleanTable = () => {
  const contents = document.getElementById('CrewAdd');
  const table = document.getElementById('crewTable');
  if (contents) {
    table.innerHTML = '';
  }
};

const initdeleteButton = () => {
  const deleteButtons = document.getElementsByName('delete-crew-buttton');
  for (let button of deleteButtons) {
    button.addEventListener('click', () => deleteCrew(button.parentElement.parentElement));
  }
};

const deleteCrew = (element) => {
  if (confirm('정말 삭제하시겠어요?? :< ')) {
    let crews = getCrewsFromLocalStorage('crew');
    const name = element.childNodes[3].innerText;
    let course = '';
    let index = 0;
    for (let i = 0; i < crews.length; i++) {
      if (crews[i].name === name) {
        index = i;
        course = crews[i].course;
        break;
      }
    }
    crews.splice(index, 1);
    saveCrewsToLocalStorage('crew', crews);
    cleanTable();
    showCrewTable(course);
  }
};

const isNameValid = (name) => {
  if (!isNameLengthUnderMaximum(name)) {
    return false;
  }
  if (!isNameAlreadyExist(name)) {
    return false;
  }
  return true;
};

const isNameLengthUnderMaximum = (name) => {
  console.log(name);
  if (name.length > 5) {
    alert('이름은 5글자 미만입니다');
    return false;
  }
  return true;
};

const isNameAlreadyExist = (name) => {
  let crews = getCrewsFromLocalStorage('crew');
  for (let i of crews) {
    if (i.name === name) {
      alert('이름이 이미 있어요');
      return false;
    }
  }
  return true;
};
