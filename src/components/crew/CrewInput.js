import { ID, LOCAL_DB } from '../../constants/index.js';
import { getLocalStorage, saveLocalStorage } from '../../utils/localStorage.js';
import { $ } from '../../utils/selector.js';
import { isValidCrewName } from '../../utils/valid.js';

class CrewInput {
  constructor($manageSection, courseName, state) {
    this.$manageSection = $manageSection;
    this.courseName = courseName;
    this.state = state;

    this.addTemplate();
    this.selectDom();
    this.addEvent();
  }

  addTemplate() {
    this.$manageSection.innerHTML = `
      <h3>${this.courseName} 크루 관리</h3>
      <form>
        <label>크루 이름</label>
        <input id=${ID.CREW_NAME_INPUT} type="text" />
        <button id=${ID.ADD_CREW_BUTTON}>확인</button>
      </form>
    `;
  }

  selectDom() {
    this.$nameInput = $(`#${ID.CREW_NAME_INPUT}`);
    this.$addButton = $(`#${ID.ADD_CREW_BUTTON}`);
  }

  addEvent() {
    this.$addButton.addEventListener('click', this.clickButton.bind(this));
  }

  clickButton(e) {
    e.preventDefault();

    const { value } = this.$nameInput;
    if (!isValidCrewName(value, this.courseName)) {
      return;
    }

    this.updateLocalStorage(value);
    this.state.updateState();
  }

  updateLocalStorage(value) {
    if (this.courseName === '프론트엔드') {
      const crew = getLocalStorage(LOCAL_DB.CREW_FRONT);
      saveLocalStorage(LOCAL_DB.CREW_FRONT, [...crew, value]);
    }

    if (this.courseName === '백엔드') {
      const crew = getLocalStorage(LOCAL_DB.CREW_BACK);
      saveLocalStorage(LOCAL_DB.CREW_BACK, [...crew, value]);
    }
  }
}

export default CrewInput;
