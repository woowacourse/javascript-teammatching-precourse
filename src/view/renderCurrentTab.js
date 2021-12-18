import {
  STORAGE_KEY,
  TAB_ID,
} from '../constant/constant.js';
import tabHandler from '../eventHandler/tabHandler.js';
import renderManageCrew from '../view/renderManageCrew.js';
import renderManageTeam from './renderManageTeam.js';

export default function renderCurrentTab(manager) {
  const id = localStorage.getItem(STORAGE_KEY);

  if (id === null || id === TAB_ID.MANAGE_CREW) {
    renderManageCrew(manager);
    // manageCrewHandler(manager);
  }
  if (id === TAB_ID.MANAGE_TEAM) {
    renderManageTeam(manager);
    // manageTeamHandler(manager);
  }
}
