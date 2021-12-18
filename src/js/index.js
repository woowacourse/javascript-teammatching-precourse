import {
  renderAddCrewRadio,
  renderAddCrewForm,
  renderCrewTable,
  renderCrewMain,
  renderCrewTableItems,
} from './view/renderCrewTab.js';
import {
  renderTeamMain,
  renderSelectCourseAndMission,
  renderTeams,
} from './view/renderTeamTab.js';
import { $ } from './util/dom.js';
import { FRONT_END, BACK_END } from './constants/constants.js';
import { makeCrewTemplate, confirmDeleteCrew } from './core/manageCrew.js';
import {
  makeTeamTemplate,
  makeRandomTeam,
  checkcourseTeam,
  checkMission,
} from './core/manageTeam.js';
import { checkExistTeam } from './core/manageTeam.js';

function App() {
  //$('head').innerHTML = `<link rel="stylesheet" href="src/css/style.css"/>`;
  const handleClick = e => {
    changeTab(e);
    selectCourse(e);
    switch (e.target.id) {
      case 'crew-delete-button':
        confirmDeleteCrew(e.target);
        break;
      case 'rematch-team-button':
        makeRandomTeam(checkcourseTeam(), checkMission(), numberOfPeople);
        renderTeams();
        break;
    }
  };

  const handleSumbit = e => {
    switch (e.target.id) {
      case 'add-crew-form':
        makeCrewTemplate(e);
        break;
      case 'select-course-and-mission':
        checkExistTeam(e);
        break;
      case 'team-member-count-form':
        makeTeamTemplate(e);
        break;
    }
  };

  const selectCourse = e => {
    switch (e.target.id) {
      case 'frontend-course':
        renderAddCrewForm(FRONT_END);
        renderCrewTable(FRONT_END);
        renderCrewTableItems('frontCrew');
        break;
      case 'backend-course':
        renderAddCrewForm(BACK_END);
        renderCrewTable(BACK_END);
        renderCrewTableItems('backCrew');
        break;
    }
  };

  const changeTab = e => {
    switch (e.target.id) {
      case 'crew-tab':
        renderCrewMain();
        renderAddCrewRadio();
        break;
      case 'team-tab':
        renderTeamMain();
        renderSelectCourseAndMission();
        break;
    }
  };

  $('#app').addEventListener('click', handleClick);
  $('#app').addEventListener('submit', handleSumbit);
}
new App();
