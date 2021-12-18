import { handleCrewManageTap } from './crewManage.js';
import { $ } from '../utils/dom.js';

export const teamMatchingMenu = () => {
  $('#crew-tab').addEventListener('click', handleCrewManageTap);
};
