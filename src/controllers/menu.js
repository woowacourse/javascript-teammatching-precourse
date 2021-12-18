import HandleCrewManageTap from './crewManage.js';
import { $ } from '../utils/dom.js';

export const teamMatchingMenu = () => {
  $('#crew-tab').addEventListener('click', () => {
    new HandleCrewManageTap();
  });
};
