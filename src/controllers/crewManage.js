import { renderCrewManage } from '../views/crewManageView.js';

export default function HandleCrewManageTap() {
  this.init = () => {
    renderCrewManage();
  };

  this.init();
}
