import { $, $$, showCrewManage } from '../utils/dom.js';
import { feCrewList, beCrewList, store } from '../model/store.js';

class crewController {
  constructor(view) {
    this.view = view;
    this.bindEvent();
  }

  addCrew() {
    const crewNameFE = this.view.getInputFE();
    const crewNameBE = this.view.getInputBE();
    // 예외처리 작업 필요

    if ($('#frontend-course').checked) {
      this.addFECrew(crewNameFE);
      return;
    }
    this.addBECrew(crewNameBE);
  }

  addFECrew(crewName) {
    feCrewList.push(crewName);
    store.setLocalStorage('feCrewList', feCrewList);
  }

  addBECrew(crewName) {
    beCrewList.push(crewName);
    store.setLocalStorage('beCrewList', beCrewList);
  }

  bindEvent() {
    $('#frontend-course').addEventListener('click', () => {
      showCrewManage();
      $('#manage-crew > h3').textContent = '프론트엔드 크루 관리';
      $('#crew-list > h3').textContent = '프론트엔드 크루 목록';
    });
    $('#backend-course').addEventListener('click', () => {
      showCrewManage();
      $('#manage-crew > h3').textContent = '백엔드 크루 관리';
      $('#crew-list > h3').textContent = '백엔드 크루 목록';
    });
    $('#add-crew-buttton').addEventListener('click', this.addCrew.bind(this));
  }
}

export default crewController;
