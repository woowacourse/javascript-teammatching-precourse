import { COURSE_LIST } from './constants.js';

export const handlerCourseSelect = (e, renderForm) => {
  renderForm(COURSE_LIST[e.target.value]);
};
