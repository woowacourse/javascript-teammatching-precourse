import $ from '../util/$.js';
import {
  TAB_ID,
} from '../constant/constant.js';
import renderManageCrew from '../view/renderManageCrew.js';
import renderManageTeam from '../view/renderManageTeam.js';
import manageCrewHandler from './manageCrewHanlder.js';
import manageTeamHandler from './manageTeamHandler.js';

export default function tabHandler(manager) {
  const $crew = $(`#${TAB_ID.MANAGE_CREW}`);
  const $team = $(`#${TAB_ID.MANAGE_TEAM}`);

  $crew.addEventListener('click', () => {
    renderManageCrew(manager);
    manageCrewHandler(manager);
  });
  $team.addEventListener('click', () => {
    renderManageTeam(manager);
    manageTeamHandler(manager);
  });
}
