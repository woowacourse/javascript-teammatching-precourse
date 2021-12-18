import Component from '../../core/Component.js';
import CrewStore from '../../stores/CrewStore.js';
import { removeCrewAction } from '../../actions/crew.js';
import { isConfirmedRemove } from '../../utils/validation.js';
import { generateCrewTable } from '../../templates/crewManagement.js';
import { COURSE_NAME, EVENT_TYPE } from '../../utils/constants.js';

export default class CrewList extends Component {
  getGlobalState() {
    return CrewStore.getState();
  }

  bindEvents() {
    this.appendRootEvents(EVENT_TYPE.CLICK, event =>
      this.onClickRemoveButton(event)
    );
  }

  onClickRemoveButton({ target }) {
    if (target.className !== 'delete-crew-buttton') return;
    const name = target.dataset.crewName;
    if (!isConfirmedRemove(name)) return;
    return CrewStore.dispatch(
      removeCrewAction({ course: this.props.selectedCourse, name })
    );
  }

  render() {
    const { selectedCourse } = this.props;
    const crewList = this.getGlobalState()[selectedCourse];
    this.$container.innerHTML = selectedCourse
      ? `
      <h3>${COURSE_NAME[selectedCourse]} 크루 목록</h3>
      <table id="crew-table" border="1">
        <thead>
          <tr>
            <th></th>
            <th>크루</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
        ${generateCrewTable(crewList)}
        </tbody>
      </table>
      `
      : '';
  }
}
