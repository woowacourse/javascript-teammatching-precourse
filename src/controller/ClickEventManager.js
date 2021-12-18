import { $, default as DOM } from '../utils/DOMUtils.js';
import { default as DB } from '../model/database.js';

export default class ClickEventManager {
  constructor(element, controller) {
    this._element = element;
    element.onclick = this.onClick.bind(this);
    this.controller = controller;
  }

  crewTab(event) {
    this.controller.handleMenuClick(event);
  }

  teamTab(event) {
    this.controller.handleMenuClick(event);
  }

  frontendRadioButton() {
    DOM.showCourseManageComponent('#crew-manager-component', '프론트엔드');

    $('#frontend-course').setAttribute('checked', 'checked');
    $('#backend-course').removeAttribute('checked');

    DOM.showCrewList(DOM.getCourseType());
  }

  backendRadioButton() {
    DOM.showCourseManageComponent('#crew-manager-component', '백엔드');

    $('#backend-course').setAttribute('checked', 'checked');
    $('#frontend-course').removeAttribute('checked');

    DOM.showCrewList(DOM.getCourseType());
  }

  createCrew() {
    let courseType = DOM.getCourseType();

    DB.save(`${courseType}Crew`, $('#crew-name-input').value);

    $('#crew-name-input').value = '';

    DOM.showCrewList(courseType);
  }

  crewDelete(event) {
    const keyName = `${DOM.getCourseType()}Crew`;
    const temporaryCrew = [...DB.load(keyName)];
    const targetIndex = Array.from(event.path[2].children).shift().innerText;

    if (!window.confirm('정말 삭제하시겠습니까?')) return;

    temporaryCrew.splice(targetIndex - 1, 1);

    DB.overwrite(keyName, temporaryCrew);

    DOM.showCrewList(DOM.getCourseType());
  }

  showTeamMatcher() {
    const [courseType, missionType] = [$('#course-select').value, $('#mission-select').value];

    const hasCrew = DB.load(`${courseType}Mission`)[missionType].length;

    if (hasCrew) {
      DOM.showMatchedComponent('#ok-mached-component', courseType, missionType);
    } else {
      DOM.showMatchedComponent('#not-mached-component', courseType, missionType);

      DOM.showCrewUnorderedList($('#course-select').value);
    }
  }

  // matchTeam() {
  //   console.log($('#team-member-count-input').value);

  //   console.log(DB.load(`${$('#course-select').value}Crew`));
  // }

  onClick(event) {
    event.preventDefault();

    let action = event.target.dataset.action;
    if (action) {
      this[action](event);
    }
  }
}
