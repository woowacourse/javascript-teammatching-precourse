import {
  renderAddCrewRadio,
  renderAddCrewForm,
  renderCrewTable,
  renderMain,
  renderCrewTableItems,
} from './view/render.js';
import { $ } from './util/dom.js';
import { FRONT_END, BACK_END } from './constants/constants.js';
import { makeCrewTemplate } from './core/manageCrew.js';

function App() {
  //$('head').innerHTML = `<link rel="stylesheet" href="src/css/style.css"/>`;
  renderMain();
  const handleClick = e => {
    changeTab(e);
    selectCourse(e);
  };

  const handleSumbit = e => {
    switch (e.target.id) {
      case 'add-crew-form':
        makeCrewTemplate(e);
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
        renderAddCrewRadio();
        break;
      case 'team-tab':
        break;
    }
  };

  $('#app').addEventListener('click', handleClick);
  $('#app').addEventListener('submit', handleSumbit);
}
new App();
