import Component from '../../essential/component.js';
import Crew from '../../model/crew.js';
import * as CONSTANTS from '../../utils/constants.js';
import { loadFromStorage, saveToStorage } from '../../utils/storage.js';
import FrontTable from './front-table.js';
const CONTENT = `
  <h3>프론트엔드 크루 관리</h3>
      <form>
        <label>크루 이름</label>
        <input id="crew-name-input" type="text" />
        <input type="button" id="add-crew-buttton" value="확인" />
      </form>
      <div data-component="crew-list"></div>
`;

export default class FrontManage extends Component {
  template() {
    return CONTENT;
  }

  addCrew() {
    this.$props.sendCrew(new Crew(this.$('#crew-name-input').value, 'frontend'));
  }

  setEvent() {
    this.addEvent('click', '#add-crew-buttton', () => {
      // if (!this.checkValidation()) {
      //   alert(CONSTANTS.INVALID_NAME_INPUT);
      //   return false;
      // }

      this.addCrew();
    });
  }
}
