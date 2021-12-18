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

  showCourseManageComponent: (id, courseType) => {
    $(id).style.display = 'block';

    $('#crew-manage-title').innerHTML = `${courseType} 크루 관리`;
    $('#crew-list-title').innerHTML = `${courseType} 크루 목록`;
  },

  showMatchedComponent: id => {
    Array.from($('#case-mached-component').children).forEach(
      component => (component.style.display = 'none'),
    );

    $(id).style.display = 'block';
  },

  getCourseType: () => {
    let courseType = '';

    const ele = document.getElementsByName('course');

    for (let i = 0; i < ele.length; i++) {
      if (ele[i].getAttribute('checked')) courseType = ele[i].value;
    }

    return courseType;
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
