export const $ = (selector) => document.querySelector(selector);
export const $$ = (selector) => document.querySelectorAll(selector);

const show = (selector) => (document.querySelector(selector).style.display = 'block');
const hide = (selector) => (document.querySelector(selector).style.display = 'none');

export const showSelectManageCourse = () => {
  show('#manage-crew-course');
};

export const showCrewManage = () => {
  show('#manage-crew');
  show('#crew-list');
};

export const hideCrewManage = () => {
  hide('#manage-crew-course');
  hide('#manage-crew');
  hide('#crew-list');
};
