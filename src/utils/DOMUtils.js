import { default as UT } from './utils.js';
import { default as DB } from '../model/database.js';

export const $ = selector => document.querySelector(selector);

const DOMUtils = {
  hideComponents: () => {
    Array.from($('#component').children).forEach(menu => (menu.style.display = 'none'));
  },

  showComponent: id => {
    DOMUtils.hideComponents();

    $(UT.changeIdToComponent(id)).style.display = 'block';
  },

  showModuleComponent: (id, courseType) => {
    $(id).style.display = 'block';

    $('#crew-manage-title').innerHTML = `${courseType} 크루 관리`;
    $('#crew-list-title').innerHTML = `${courseType} 크루 목록`;
  },

  showCrewList: courseType => {
    $('#crew-list-tbody').innerHTML = DB.load(`${courseType}Crew`)
      .map(
        (name, index) => `
          <tr>
            <td>${index + 1}</td>
            <td>${name}</td>
            <td>
                <button data-action="crewDelete" id="delete-crew-buttton">삭제</button>
            </td>
          </tr>
      `,
      )
      .join('');
  },
};

export default DOMUtils;
