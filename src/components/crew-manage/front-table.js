import Component from '../../essential/component.js';
import Crew from '../../model/crew.js';
import * as CONSTANTS from '../../utils/constants.js';
import { loadFromStorage, saveToStorage } from '../../utils/storage.js';

const HEAD = `
  <h3>프론트엔드 크루 관리</h3>
      <form>
        <label>크루 이름</label>
        <input id="crew-name-input" type="text" />
        <input type="button" id="add-crew-buttton" value="확인" />
      </form>
      <h3>프론트엔드 크루 목록</h3>
      <table id="crew-table" border="1">
        <thead>
        <tr>
            <th></th>
            <th>크루</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
`;

const BODY = crews =>
  `${crews
    .map(
      ({ name, course }, index) => `
      <tr class="crew-manage">
        <td class="crew-manage-index">${Number(index) + 1}</td>
        <td class="crew-manage-name">${name}</td>
        <td
        data-crew-index="${index}" data-crew-name="${name}"
        data-crew-course="${course}">
        <input type="button" class="remove-button" value="삭제하기" />
        </td>
      </tr>`,
    )
    .join('')}`;

const TAIL = `
    </tbody>
  </table>
`;

export default class FrontTable extends Component {
  setup() {
    this.$state = {
      crews: loadFromStorage(CONSTANTS.STORAGE_CREWS_KEY),
    };
  }

  applyProps() {
    if (this.$props && this.$props.crew) {
      let crew = this.$props.crew;

      this.$state.crews.push(crew);
      saveToStorage(CONSTANTS.STORAGE_CREWS_KEY, this.$state.crews);

      delete this.$props.crew;
    }
  }

  template() {
    return HEAD + BODY(this.$state.crews) + TAIL;
  }

  setEvent() {
    this.addEvent('click', '.remove-button', ({ target }) => {
      if (!window.confirm(CONSTANTS.CONFIRM_CREW_DELETE)) {
        return false;
      }

      let index = target.parentElement.dataset.crewIndex;
      let crews = this.$state.crews;

      crews.splice(index, 1);
      saveToStorage(CONSTANTS.STORAGE_CREWS_KEY, this.$state.crews);

      this.render();
    });
  }
}
