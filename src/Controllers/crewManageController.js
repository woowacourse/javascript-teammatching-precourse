import { $ } from '../Utils/common.js';
import { ID } from '../Utils/constants.js';
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
  };
}
