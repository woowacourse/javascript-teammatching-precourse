import { FRONTEND_COURSE, FRONTEND_KR, BACKEND_KR, FRONTEND, BACKEND } from '../constants/index.js';

export const htmlToElement = (html) => {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  return template.content.firstChild;
};

export const $ = (selector) => {
  const collection = document.querySelectorAll(selector);
  if (collection.length === 0) {
    return null;
  }
  if (collection.length === 1) {
    return collection[0];
  }
  return collection;
};

export const getTrimedInputValues = ($inputs) => {
  return $inputs.map(($input) => $input.value.trim());
};

export const clearInputs = ($inputs) => {
  $inputs.forEach(($input) => {
    $input.value = '';
  });
};

export const getCourseNameById = (activeCourseId) => {
  return activeCourseId === FRONTEND_COURSE ? FRONTEND_KR : BACKEND_KR;
};

export const getCourseById = (activeCourseId) => {
  return activeCourseId === FRONTEND_COURSE ? FRONTEND : BACKEND;
};
