import {
  BACKEND_STORAGE_NAME,
  BACK_END_COURSE_NAME,
  BACK_END_TABLE_NAME,
  FROINTEND_STORAGE_NAME,
  FRONT_END_COURSE_NAME,
  FRONT_END_TABLE_NAME,
} from '../constants/constants.js';
import { $ } from '../dom/dom.js';
import handleCrewAddEvent from '../modules/handleCrewAddEvent.js';
import handleCrewDeleteEvent from '../modules/handleCrewDeleteEvent.js';
import renderCourseCrewManage from '../views/renderCourseCrewManage.js';
import renderCrewSelector from '../views/renderCrewSelector.js';
import renderCrewTable from '../views/renderCrewTable.js';

export default function controlCrewManage() {
  renderCrewSelector();
  $('#frontend-course').addEventListener('click', (e) => {
    renderCourseCrewManage(FRONT_END_COURSE_NAME);
    renderCrewTable(FRONT_END_TABLE_NAME, FROINTEND_STORAGE_NAME);
    handleCrewAddEvent(FROINTEND_STORAGE_NAME);
    handleCrewDeleteEvent(FROINTEND_STORAGE_NAME);
  });
  $('#backend-course').addEventListener('click', (e) => {
    renderCourseCrewManage(BACK_END_COURSE_NAME);
    renderCrewTable(BACK_END_TABLE_NAME, BACKEND_STORAGE_NAME);
    handleCrewAddEvent(BACKEND_STORAGE_NAME);
    handleCrewDeleteEvent(BACKEND_STORAGE_NAME);
  });
}
