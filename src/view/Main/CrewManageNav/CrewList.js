import { BUTTON, HEADER, LIST } from '../../../common/constant.js';
import { $, createHeader, createSection } from '../../../common/element.js';

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

function createCrewListTableBody() {
  return `
    <tbody>
      <tr>
        <td></td>
        <td></td>
        <td>
          <button id="delete-crew-buttton">${BUTTON.DELETE}</button>
        </td>
      </tr>
  `;
}

export default function createCrewList() {
  const crewList = createCrewListSection();
  const crewListHeader = createCrewListHeader();
  crewList.append(crewListHeader);

  let crewListTable = createCrewListTable();
  const crewListTableBody = createCrewListTableBody();
  crewListTable += crewListTableBody;
  crewList.innerHTML += crewListTable;

  $('crew-manage-nav').append(crewList);
}
