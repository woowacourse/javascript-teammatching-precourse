import { BUTTON, HEADER, LIST } from '../../../common/constant.js';
import { $, createHeader, createSection } from '../../../common/element.js';
import { getLocalStorage } from '../../../common/localStorage.js';
import { crewDelete } from '../../../control/Main/CrewManageDiv/CrewManage.js';

function createCrewListSection() {
  const crewListSection = createSection();
  crewListSection.setAttribute('id', 'crew-list');

  return crewListSection;
}

function createCrewListHeader() {
  return createHeader('h3', HEADER.CREW_LIST);
}

function createCrewListTable() {
  return `
    <table id="crew-table" border="1">
      <thead>
        <tr>
          <th></th>
          <th>${LIST.CREW}</th>
          <th>${LIST.MANAGE}</th>
          </tr>
      </thead>
  `;
}

function createCrewListTableData(idx, name) {
  return `
    <tbody>
      <tr>
        <td>${idx}</td>
        <td>${name}</td>
        <td>
          <button class="delete-crew-button" data-crew-name="${name}">${BUTTON.DELETE}</button>
        </td>
      </tr>
  `;
}

function createCrewListTableBodyRows() {
  let crewListTableBodyRows = '';
  let idx = 1;

  const crews = JSON.parse(getLocalStorage('crew'));
  crews.forEach((crew) => {
    // eslint-disable-next-line prefer-destructuring
    const name = crew.name;
    const data = createCrewListTableData(idx, name);
    crewListTableBodyRows += data;
    idx += 1;
  });

  return crewListTableBodyRows;
}

function createProductListTableBody() {
  if (getLocalStorage('crew')) {
    return createCrewListTableBodyRows();
  }
  return '';
}

export function createCrewList() {
  const crewList = createCrewListSection();
  const crewListHeader = createCrewListHeader();
  crewList.append(crewListHeader);
  let crewListTable = createCrewListTable();
  const crewListTableBody = createProductListTableBody();
  crewListTable += crewListTableBody;
  crewList.innerHTML += crewListTable;
  $('crew-manage-nav').append(crewList);

  if (getLocalStorage('crew')) {
    crewDelete();
  }
}

export function updateCrewList() {
  const oldCrewList = $('crew-manage-nav').lastChild;
  oldCrewList.remove();
  createCrewList();
  crewDelete();
}
