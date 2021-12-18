import { $ } from '../Utils/common.js';
import { ID } from '../Utils/constants.js';
import LocalStorageUtils from '../Utils/localStorageUtils.js';
import CrewManageView from '../Views/crewManageView.js';

export default class CrewManageController {
  constructor() {
    this.crewManageView = new CrewManageView();
  }

  render() {
    this.crewManageView.topSelctorRender();
    this.configureRadio();
  }

  configureRadio() {
    $(`#${ID.FRONT_RADIO}`).addEventListener('click', this.onClickRadio);
    $(`#${ID.BACKEND_RADIO}`).addEventListener('click', this.onClickRadio);
  }

  onClickRadio = (event) => {
    this.crewManageView.bodyMainRender();
    const data = this.getSelectedData(event.target.id);
    this.crewManageView.renderTable(data);
  };

  getSelectedData(id) {
    let data;
    if (id === ID.FRONT_RADIO) {
      data = LocalStorageUtils.getItem(LocalStorageUtils.keys.frontCrewManage);
    } else {
      data = LocalStorageUtils.getItem(LocalStorageUtils.keys.BackendCrewManage);
    }
    return data ? data : [];
  }
}
