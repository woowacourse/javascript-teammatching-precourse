import $ from '../utils/dom.js';
import store from '../utils/store.js';
import { ERROR, CONFIRM } from '../utils/constants.js';
import { Crew, deleteCrew } from '../models/crewManagerModel.js';
import { renderFrontManager, renderBackManager, resetCrewInput, renderFrontCrew, renderBackCrew } from '../views/crewManagerView.js';
import alertError from '../views/alertError.js';

export default function HandleCrewManager() {
  this.frontCrew = [];
  this.backCrew = [];
  this.idx = 0;
  this.course = '';
  this.init = () => {
    if (store.getLocalStorage('FrontCrew')) {
      this.frontCrew = store.getLocalStorage('FrontCrew');
    }
    if (store.getLocalStorage('BackCrew')) {
      this.backCrew = store.getLocalStorage('BackCrew');
    }
  };

  const isDuplicate = crewName => {
    if (this.course === 'front') {
      return this.frontCrew.some(crew => crew.name === crewName);
    }
    if (this.course === 'back') {
      return this.backCrew.some(crew => crew.name === crewName);
    }
    return false;
  };

  const isOverFive = crewName => {
    return crewName.length > 5;
  };

  const isValidName = crewName => {
    if (crewName === '') {
      return alertError(ERROR.INPUT_BLANK);
    }
    if (isDuplicate(crewName)) {
      return alertError(ERROR.SAME_NAME_EXISTS);
    }
    if (isOverFive(crewName)) {
      return alertError(ERROR.NAME_CANT_OVER_FIVE_LENGTH);
    }
    return true;
  };

  $('#frontend-course').addEventListener('click', () => {
    this.course = 'front';
    renderFrontManager();
    // render테이블
  });

  $('#backend-course').addEventListener('click', () => {
    this.course = 'back';
    renderBackManager();
  });

  $('#add-crew-buttton').addEventListener('click', e => {
    e.preventDefault();
    const crewName = $('#crew-name-input').value;

    if (this.course === 'front' && isValidName(crewName)) {
      this.frontCrew.push(new Crew(crewName));
      store.setLocalStorage('FrontCrew', this.frontCrew);
      renderFrontCrew();
      resetCrewInput();
      return;
    }
    if (this.course === 'back' && isValidName(crewName)) {
      this.backCrew.push(new Crew(crewName));
      store.setLocalStorage('BackCrew', this.backCrew);
      renderBackCrew();
      resetCrewInput();
      return;
    }
    resetCrewInput();
  });

  $('#crew-list').addEventListener('click', e => {
    if (e.target.id === 'delete-crew-buttton' && confirm(CONFIRM.REALLY_DELETE)) {
      deleteCrew(e, this.course);
    }
    if (this.course === 'front') {
      renderFrontCrew();
    }
    if (this.course === 'back') {
      renderBackCrew();
    }
  });

  this.init();
}
