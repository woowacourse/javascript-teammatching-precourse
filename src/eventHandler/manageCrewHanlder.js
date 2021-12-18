import $ from '../util/$.js';
import {
  CREW_INPUT_ID,
  SECTION_ID,
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

function onCrewAdd(event, manager) {
  event.preventDefault();
  const name = $(`#${CREW_INPUT_ID.NAME_INPUT}`).value;
  const course = $('input[name="course"]:checked').value;

  manager.addCrew({ course, name });
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
