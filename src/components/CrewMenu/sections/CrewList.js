import Component from '../../../core/Component.js';

export default class CrewList extends Component {
  template() {
    const { course, crewList } = this.props;
    const filteredCrewList = crewList.filter((crew) => crew.course === course);

    return (
      course &&
      `
      <h3>
        ${course === 'frontend' ? '프론트엔드' : '백엔드'} 크루 목록
      </h3>
      <table border="1" id='crew-table'>
        <thead>
          <tr>
            <th></th>
            <th>크루</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
          ${filteredCrewList.reduce((acc, crew, idx) => {
            return `
            ${acc}
            <tr data-id='${crew.id}' data-name='${crew.name}'>
              <td>${idx + 1}</td>
              <td>${crew.name}</td>
              <td>
                <button class='delete-crew-buttton'>삭제</button>
              </td>
            </tr>
          `;
          }, '')}
        </tbody>
      </table>
      `
    );
  }

  setEvent() {
    this.addEvent('click', '.delete-crew-buttton', ({ target }) => {
      const $tr = target.closest('tr');
      const { id } = $tr.dataset;
      const result = window.confirm('정말 삭제하시겠습니까?');

      if (result) this.props.deleteCrew(Number(id));
    });
  }
}
