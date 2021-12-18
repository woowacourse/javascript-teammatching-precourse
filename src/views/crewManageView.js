import { $ } from '../utils/dom.js';
import { crewManageTemplate } from '../utils/template.js';

const crewListTemplate = (crewName, index) => `
  <tr>
    <td>${index}</td>
    <td>${crewName}</td>
    <td>
      <button id="delete-crew-buttton">삭제</button>
    </td>
  </tr>
`;

export const renderCrewList = (crewList) => {
  $('#crew-table tbody').innerHTML = '';

  crewList.forEach((crewName, index) => {
    const crew = crewListTemplate(crewName, index + 1);
    $('#crew-table tbody').insertAdjacentHTML('beforeend', crew);
  });
};

export const renderFrontEnd = () => {
  $('#crew-manage-list').removeAttribute('hidden');
};

export const renderCrewManage = () => {
  $('#main-container').innerHTML = crewManageTemplate;
};
