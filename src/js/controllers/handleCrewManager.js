import $ from '../utils/dom.js';
import store from '../utils/store.js';
import { Crew, deleteCrew } from '../models/crewManagerModel.js';
import { renderFrontManager, renderBackManager, resetCrewInput, renderFrontCrew, renderBackCrew } from '../views/crewManagerView.js';
import alertError from '../views/alertError.js';

export default function HandleCrewManager() {
  this.frontCrew = [];
  this.backCrew = [];
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
      return alertError('크루명을 입력하지 않았습니다. 다시 입력하세요.');
    }
    if (isDuplicate(crewName)) {
      return alertError('동일한 이름의 크루가 있습니다. 다시 입력하세요.');
    }
    if (isOverFive(crewName)) {
      return alertError('이름은 5자를 초과할 수 없습니다. 다시 입력하세요.');
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
    if (e.target.id === 'delete-crew-buttton' && confirm('정말 삭제하시겠습니까?')) {
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
