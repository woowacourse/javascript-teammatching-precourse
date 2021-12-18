import $ from '../util/$.js';
import {
  TAB_ID,
} from '../constant/constant.js';
import renderManageCrew from '../view/renderManageCrew.js';
import renderManageTeam from '../view/renderManageTeam.js';

export default function tabHandler() {
  const $crew = $(`#${TAB_ID.MANAGE_CREW}`);
  const $team = $(`#${TAB_ID.MANAGE_TEAM}`);

  $crew.addEventListener('click', () => {
    renderManageCrew();
    // manageCrewHandler();
  });
  $team.addEventListener('click', () => {
    renderManageTeam();
    // manageTeamHandler();
  });
}
