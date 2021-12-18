import $ from '../util/$.js';
import {
  CREW_INPUT_ID,
  SECTION_ID,
} from '../constant/constant.js';

function showNextSection(dom) {
  const $copy = $(`#${dom}`);

  $copy.style.display = 'block';
}

function courseHandler(manager) {
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

export default function manageCrewHandler() {
  courseHandler();
}
