import { teamMatching } from '../../index.js';
import { app } from '../domElement.js';

export const createCrewTable = type => {
  app.append(createTitle(type), createTable(type));
};

const createTitle = type => {
  const title = document.createElement('h3');

  title.innerHTML = `${type} 크루 목록`;

  return title;
};

const createTable = type => {
  const table = document.createElement('table');

  table.border = '1';
  table.setAttribute('id', 'crew-table');
  table.append(createTableHead(), createTableBody(type));

  return table;
};

const createTableHead = () => {
  const tableHead = document.createElement('thead');

  tableHead.innerHTML = `
    <tr>
      <th></th>
      <th>크루</th>
      <th>관리</th>
    </tr>
  `;

  return tableHead;
};

const createTableBody = type => {
  const tableBody = document.createElement('tbody');

  teamMatching.crews[type].forEach((crew, index) => {
    tableBody.appendChild(createTableDataRow(crew, index));
  });

  return tableBody;
};

const createTableDataRow = (crewName, index) => {
  const row = document.createElement('tr');
  const indexCell = document.createElement('td');
  const nameCell = document.createElement('td');
  const buttonCell = document.createElement('td');

  indexCell.innerHTML = index + 1;
  nameCell.innerHTML = crewName;
  buttonCell.appendChild(createDeleteButton(crewName));
  row.append(indexCell, nameCell, buttonCell);

  return row;
};

const createDeleteButton = crewName => {
  const deleteButton = document.createElement('button');

  deleteButton.innerHTML = '삭제';
  deleteButton.setAttribute('class', 'delete-crew-buttton');
  // TODO : 크루 삭제 버튼을 눌렀을 때

  return deleteButton;
};
