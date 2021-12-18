import { CREW_LIST_TITLE, CREW_TABLE, DELETE_BUTTON, MAIN } from '../constants.js';
import makeElement from './makeElement.js';
import makeSection from './makeSection.js';

const makeTableHeader = () => {
  const $thead = makeElement('thead');
  const $tr = makeElement('tr');
  CREW_TABLE.forEach((head) => {
    const $th = makeElement('th', head);
    $tr.appendChild($th);
  });

  $thead.appendChild($tr);
  return $thead;
};

const makeDeleteButonTd = (idx) => {
  const $buttonTd = makeElement('td');
  const $deleteButton = makeElement('button', DELETE_BUTTON.text);
  $deleteButton.className = DELETE_BUTTON.className;
  $deleteButton.dataset['index'] = idx;

  $buttonTd.appendChild($deleteButton);
  return $buttonTd;
};

const makeTableBodyRow = (name, index) => {
  const $tr = makeElement('tr');
  const $indexTd = makeElement('td', index + 1);
  const $nameTd = makeElement('td', name);
  const $buttonTd = makeDeleteButonTd(index);

  $tr.appendChild($indexTd);
  $tr.appendChild($nameTd);
  $tr.appendChild($buttonTd);

  return $tr;
};

const makeTableBody = (crewList) => {
  const $tbody = makeElement('tbody');

  crewList.forEach((crew, idx) => {
    $tbody.appendChild(makeTableBodyRow(crew, idx));
  });

  return $tbody;
};

const makeTable = (course, crewManager) => {
  const $table = makeElement('table');
  $table.setAttribute('border', 1);
  $table.appendChild(makeTableHeader());
  $table.appendChild(makeTableBody(crewManager.getCrewList(course)));

  return $table;
};

const removeSection = () => {
  const $prevTable = document.querySelector('table');
  if (!$prevTable) return;

  const $section = $prevTable.closest('section');
  if (!$section) return;

  $section.remove();
};

const printCrewList = (course, crewManager) => {
  removeSection();
  const $main = document.querySelector(MAIN);
  const $table = makeTable(course, crewManager);
  const $section = makeSection(CREW_LIST_TITLE, $table);
  $section.dataset.course = course;

  $main.appendChild($section);
};

export default printCrewList;
