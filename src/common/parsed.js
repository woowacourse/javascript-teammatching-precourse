import { DOM } from '../constants/index.js';

export const setSelected = (value, target, string) => (target === value ? string : '');
export const getCourse = course =>
  course === 'frontend' ? DOM.FRONTEND_COURSE : DOM.BACKEND_COURSE;
