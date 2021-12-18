import { $ } from '../utils/dom.js';
import { renderCrewManage } from '../views/crewManageView.js';
import HandleFrontEndCoures from './crewManage.js';

const handleCrewManageTap = () => {
  renderCrewManage();

  $('#frontend-course').addEventListener('click', () => new HandleFrontEndCoures());
};

export const teamMatchingMenu = () => {
  $('#crew-tab').addEventListener('click', handleCrewManageTap);
};
