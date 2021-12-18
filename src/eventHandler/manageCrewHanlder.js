import $ from '../util/$.js';
import {
  CREW_INPUT_ID,
  SECTION_ID,
  TABLE_ID,
  CREW_TABLE_INDEX,
} from '../constant/constant.js';

function showNextSection(dom) {
  const $copy = $(`#${dom}`);

  $copy.style.display = 'block';
}

function courseHandler() {
  const $front = $(`#${CREW_INPUT_ID.FRONT_COURSE_INPUT}`);
  const $back = $(`#${CREW_INPUT_ID.BACK_COURSE_INPUT}`);

  $front.addEventListener('click', () => {
    showNextSection(SECTION_ID.CREW_ADD);
    showNextSection(SECTION_ID.CREW_LIST);
  });
  $back.addEventListener('click', () => {
    showNextSection(SECTION_ID.CREW_ADD);
    showNextSection(SECTION_ID.CREW_LIST);
  });
}

function onDelete(event, manager) {
  const $crewNode = event.target.parentNode.parentNode.children;
  const crewToDelete = {
    index: $crewNode[CREW_TABLE_INDEX.CREW_INDEX].textContent,
    name: $crewNode[CREW_TABLE_INDEX.NAME_INDEX].textContent,
  };
  manager.deleteCrew($crewNode[0].parentNode, crewToDelete);
}

function deleteHandler(manager) {
  const $delete = document.querySelectorAll(`.${CREW_INPUT_ID.DELETE_BUTTON}`);

  $delete.forEach(($crew) => {
    $crew.addEventListener('click', (event) => onDelete(event, manager));
  });
}

function onCrewAdd(event, manager) {
  event.preventDefault();
  const name = $(`#${CREW_INPUT_ID.NAME_INPUT}`).value;
  const course = $('input[name="course"]:checked').value;

  const newCrew = manager.addCrew({ course, name });
  if (newCrew) {
    newCrew.renderTable($(`#${TABLE_ID}`));
    deleteHandler(manager);
  }
}

function nameHanlder(manager) {
  const $input = $(`#${CREW_INPUT_ID.ADD_BUTTON}`);

  $input.addEventListener('click', (event) => {
    onCrewAdd(event, manager);
  });
}

export default function manageCrewHandler(manager) {
  courseHandler();
  nameHanlder(manager);
}
