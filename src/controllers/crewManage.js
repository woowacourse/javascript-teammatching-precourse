import { $ } from '../utils/dom.js';
import { renderCrewManage, renderFrontEnd } from '../views/crewManageView.js';

const handleFrontEndCoures = () => {
  renderFrontEnd();
};

export const handleCrewManageTap = () => {
  renderCrewManage();

  $('#frontend-course').addEventListener('click', handleFrontEndCoures);
};
