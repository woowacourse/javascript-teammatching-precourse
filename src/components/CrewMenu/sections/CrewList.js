import Component from '../../../core/Component.js';
import { COURSE, CONFIRM_MESSAGE } from '../../../configs/contants.js';

export default class CrewList extends Component {
  template() {
    const { course, crewList } = this.props;
    const filteredCrewList = crewList.filter((crew) => crew.course === course);

    const row = (idx, id, name) => `
      <tr data-id='${id}' data-name='${name}'>
        <td>${idx + 1}</td>
        <td>${name}</td>
        <td>
          <button class='delete-crew-buttton'>삭제</button>
        </td>
      </tr>
    `;

    const table = (list) => `
      <table border="1" id='crew-table'>
        <thead>
          <tr>
            <th></th>
            <th>크루</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
          ${list.reduce(
            (acc, crew, idx) => `${acc}${row(idx, crew.id, crew.name)}`,
            ''
          )}
        </tbody>
      </table>
    `;

    return (
      course &&
      `
      <h3>${COURSE[course].string} 크루 목록</h3>
      ${table(filteredCrewList)}
      
      `
    );
  }

  setEvent() {
    this.addEvent('click', '.delete-crew-buttton', ({ target }) => {
      const $tr = target.closest('tr');
      const { id } = $tr.dataset;
      const result = window.confirm(CONFIRM_MESSAGE.DELETE);

      if (result) this.props.deleteCrew(Number(id));
    });
  }
}
