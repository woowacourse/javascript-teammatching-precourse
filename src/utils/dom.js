export const $ = (selector) => document.querySelector(selector);
export const $$ = (selector) => document.querySelectorAll(selector);

const show = (selector) => (document.querySelector(selector).style.display = 'block');
const hide = (selector) => (document.querySelector(selector).style.display = 'none');

export const showSelectManageCourse = () => {
  show('#manage-crew-course');
};

export const showFECrewManage = () => {
  show('#manage-fe-crew');
  hide('#manage-be-crew');
  show('#fe-crew-list');
  hide('#be-crew-list');
};

export const showBECrewManage = () => {
  show('#manage-be-crew');
  hide('#manage-fe-crew');
  show('#be-crew-list');
  hide('#fe-crew-list');
};

export const hideCrewManage = () => {
  hide('#manage-crew-course');
  hide('#manage-fe-crew');
  hide('#manage-be-crew');
  hide('#fe-crew-list');
  hide('#be-crew-list');
};
