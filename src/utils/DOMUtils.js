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

  showMatchedComponent: (id, courseType, missionType) => {
    Array.from($('#case-mached-component').children).forEach(
      component => (component.style.display = 'none'),
    );

    $(id).style.display = 'block';

    $('#team-matching-title').innerHTML = `
        ${UT.EnglishToKorean(courseType)} ${UT.EnglishToKorean(missionType)} 미션의 팀 매칭
      `;
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
      ?.map(
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

  showCrewUnorderedList: courseType => {
    $('#crew-ul').innerHTML = DB.load(`${courseType}Crew`)
      .map(name => `<li>${name}</li>`)
      .join('');
  },

  showMatchedCrewUnorderedList: (courseType, missionType) => {
    $('#team-match-result').innerHTML = DB.load(`${courseType}Mission`)
      [missionType].map(name => `<li>${name}</li>`)
      .join('');
  },
};

export default DOMUtils;
