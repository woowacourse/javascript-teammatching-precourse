import { $ } from '../dom/constants.js';

export const renderInApp = (position, text) => {
  const $app = $('#app');

  $app.insertAdjacentHTML(position, text);
};

export const addCrewListTable = (position, text) => {
  const $crewTable = $('#crew-table tbody');

  $crewTable.insertAdjacentHTML(position, text);
};

export const defaultDisplay = () => {
  const $crewMain = $('#crew-main');
  const $teamMain = $('#team-main');

  $crewMain.style.display = 'none';
  $teamMain.style.display = 'none';
};

export const crewTab = () => {
  const $header = $('header');
  const $crewMain = $('#crew-main');
  const $teamMain = $('#team-main');

  $header.style.display = 'block';
  $crewMain.style.display = 'block';
  $teamMain.style.display = 'none';
};

export const teamTab = () => {
  const $header = $('header');
  const $crewMain = $('#crew-main');
  const $teamMain = $('#team-main');

  $header.style.display = 'block';
  $crewMain.style.display = 'none';
  $teamMain.style.display = 'block';
};

export const defaultRadioDisplay = () => {
  const $crewManageSection = $('#crew-manage-section');
  const $crewListSection = $('#crew-list-section');

  $crewManageSection.style.display = 'none';
  $crewListSection.style.display = 'none';
};

export const frontradioButton = () => {
  const $crewManageSection = $('#crew-manage-section');
  const $crewListSection = $('#crew-list-section');
  const $frontCrewTitle = $('#end-crew-title');
  const $frontCrewList = $('#end-crew-list');

  $crewManageSection.style.display = 'block';
  $crewListSection.style.display = 'block';
  $frontCrewTitle.innerHTML = '프론트엔드 크루 관리';
  $frontCrewList.innerHTML = '프론트엔드 크루 목록';
};

export const backradioButton = () => {
  const $crewManageSection = $('#crew-manage-section');
  const $crewListSection = $('#crew-list-section');
  const $backCrewTitle = $('#end-crew-title');
  const $backCrewList = $('#end-crew-list');

  $crewManageSection.style.display = 'block';
  $crewListSection.style.display = 'block';
  $backCrewTitle.innerHTML = '백엔드 크루 관리';
  $backCrewList.innerHTML = '백엔드 크루 목록';
};

export const frontInputChecked = () => {
  const $frontRadioButton = $('#frontend-course');
  const $backRadioButton = $('#backend-course');

  $frontRadioButton.setAttribute('checked', '');
  $backRadioButton.removeAttribute('checked');
};

export const backInputChecked = () => {
  const $frontRadioButton = $('#frontend-course');
  const $backRadioButton = $('#backend-course');

  $backRadioButton.setAttribute('checked', '');
  $frontRadioButton.removeAttribute('checked');
};
