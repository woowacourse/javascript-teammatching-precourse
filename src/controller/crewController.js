import { $, $$, showCrewManage } from '../utils/dom.js';
import { feCrewList, beCrewList, store } from '../model/store.js';
import CrewValidator from '../validator/crewValidator.js';

class CrewController {
  constructor(view) {
    this.view = view;
    this.bindEvent();
  }

  addCrew() {
    const crewName = this.view.getInput();
    const crewList = $('#frontend-course').checked ? feCrewList : beCrewList;
    if (CrewValidator.isInvalidCrewName({ crewName, crewList })) {
      return;
    }

    if ($('#frontend-course').checked) {
      this.addFECrew(crewName);
      return;
    }
    this.addBECrew(crewName);
  }

  removeCrew(e) {
    if (!confirm('정말 삭제하시겠습니까?')) {
      return;
    }
    const crewArrIndex = Number(e.target.closest('tr').querySelector('td').innerText) - 1;
    if ($('#frontend-course').checked) {
      this.removeFECrew(crewArrIndex);
      return;
    }
    this.removeBECrew(crewArrIndex);
  }

  removeFECrew(crewArrIndex) {
    console.log(feCrewList);
    feCrewList.splice(crewArrIndex, 1);
    store.setLocalStorage('feCrewList', feCrewList);
    this.view.renderFECrewList();
  }

  removeBECrew(crewArrIndex) {
    console.log(beCrewList);
    beCrewList.splice(crewArrIndex, 1);
    store.setLocalStorage('beCrewList', beCrewList);
    this.view.renderBECrewList();
  }

  addFECrew(crewName) {
    feCrewList.push(crewName);
    store.setLocalStorage('feCrewList', feCrewList);
    this.view.renderFECrewList();
  }

  addBECrew(crewName) {
    beCrewList.push(crewName);
    store.setLocalStorage('beCrewList', beCrewList);
    this.view.renderBECrewList();
  }

  bindRemoveEvent() {
    $('#crew-table').addEventListener('click', (e) => {
      if (!e.target.classList.contains('delete-crew-buttton')) {
        return;
      }
      this.removeCrew(e);
    });
  }

  bindEvent() {
    $('#frontend-course').addEventListener('click', () => {
      showCrewManage();
      this.view.renderFECrewList();
      $('#manage-crew > h3').textContent = '프론트엔드 크루 관리';
      $('#crew-list > h3').textContent = '프론트엔드 크루 목록';
    });
    $('#backend-course').addEventListener('click', () => {
      showCrewManage();
      $('#manage-crew > h3').textContent = '백엔드 크루 관리';
      $('#crew-list > h3').textContent = '백엔드 크루 목록';
      this.view.renderBECrewList();
    });
    $('#add-crew-buttton').addEventListener('click', this.addCrew.bind(this));
    this.bindRemoveEvent();
  }
}

export default CrewController;
