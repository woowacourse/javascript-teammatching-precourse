import { $, $$ } from '../Utils/common.js';
import { CLASS, ID } from '../Utils/constants.js';
import LocalStorageUtils from '../Utils/localStorageUtils.js';
import ValidationUtils from '../Utils/validationUtils.js';
import CrewManageView from '../Views/crewManageView.js';

export default class CrewManageController {
  constructor() {
    this.crewManageView = new CrewManageView();
    this.selectCourse;
  }

  render() {
    this.crewManageView.topSelctorRender();
    this.configureRadio();
  }

  configureRadio() {
    $(`#${ID.FRONT_RADIO}`).addEventListener('click', this.onClickRadio);
    $(`#${ID.BACKEND_RADIO}`).addEventListener('click', this.onClickRadio);
  }

  configureButton() {
    $(`#${ID.ADD_CREW_BUTTON}`).addEventListener('click', this.onClickAddButton);
    $$(`.${CLASS.DELETE_CREW_BUTTON}`).forEach((button) =>
      button.addEventListener('click', this.onClickDelete),
    );
  }

  onClickRadio = (event) => {
    this.crewManageView.bodyMainRender();
    this.selectCourse = event.target.id;
    const data = this.getSelectedData();
    this.crewManageView.renderTable(data);
    this.configureButton();
  };

  onClickAddButton = (event) => {
    event.preventDefault();
    const name = $(`#${ID.CREW_NAME_INPUT}`).value;
    this.AddNewName(name);
  };

  onClickDelete = (event) => {
    if (confirm('정말 삭제하시겠습니까?') === true) {
      this.deleteItem(event);
    }
  };

  getSelectedData() {
    let data;
    if (this.selectCourse === ID.FRONT_RADIO) {
      data = LocalStorageUtils.getItem(LocalStorageUtils.keys.frontCrewManage);
    } else {
      data = LocalStorageUtils.getItem(LocalStorageUtils.keys.BackendCrewManage);
    }
    return data ? data : [];
  }

  saveNewData(data) {
    if (this.selectCourse === ID.FRONT_RADIO) {
      LocalStorageUtils.setItem(LocalStorageUtils.keys.frontCrewManage, data);
    } else {
      LocalStorageUtils.setItem(LocalStorageUtils.keys.BackendCrewManage, data);
    }
  }

  saveInputName(name) {
    let data = this.getSelectedData();
    data.push(name);
    this.saveNewData(data);
  }

  AddNewName(name) {
    try {
      const originData = this.getSelectedData();
      ValidationUtils.checkInputName(name, originData);
      this.saveInputName(name);
      const data = this.getSelectedData();
      this.crewManageView.renderTable(data);
      this.configureButton();
    } catch (error) {
      alert(error.message);
    }
  }

  deleteItem(event) {
    const targetNumber = Number(event.path[2].childNodes[1].textContent);
    let data = this.getSelectedData();
    data.splice(targetNumber - 1, 1);
    this.saveNewData(data);
    this.crewManageView.renderTable(data);
    this.configureButton();
  }
}
