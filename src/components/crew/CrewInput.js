import { ID } from '../../constants/index.js';
import { $ } from '../../utils/selector.js';

class CrewInput {
  constructor($manageSection, $resultSection, courseName) {
    this.$manageSection = $manageSection;
    this.$resultSection = $resultSection;
    this.courseName = courseName;

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
    console.log(this.$nameInput.value);
  }
}

export default CrewInput;
