import { CONSTANTS } from '../../constants/constants.js';
import Component from '../../core/Component.js';
import { storageManager } from '../../utils/data-tools.js';

export default class CrewList extends Component {
  init() {
    const { state } = this._props;
    state.add(this);
  }

  htmlTemplate() {
    const { state } = this._props;

    return `
    <h3>프론트엔드 크루 목록</h3>
    <table border="1" id="crew-table">
      <thead>
        <tr>
          <th></th>
          <th>크루</th>
          <th>관리</th>
        </tr>
      </thead>
      <tbody>
        ${state.value
          .map(
            ({ name }, index) => `
          <tr data-id="${name}">
            <td>${index + 1}</td>
            <td>${name}</td>
            <td><button class="delete-crew-buttton">삭제</button></td>
          </tr>`
          )
          .join('')}
      </tbody>
    </table>
    `;
  }

  bindEvents() {
    this.addEvent(
      'click',
      '.delete-crew-buttton',
      this.handelRemoveCrew.bind(this)
    );
  }

  handelRemoveCrew(event) {
    if (confirm('정말 해당 크루를 목록에서 삭제하시겠습니까?') === false) {
      return false;
    }

    const { crewManager, state } = this._props;
    const targetCrewName = event.target.closest('tr[data-id]').dataset.id;

    const updateList = crewManager.remove(targetCrewName).list;
    storageManager.set(CONSTANTS.STORAGE_KEY_CREW, updateList);

    state.value = crewManager.filterList;
  }
}
