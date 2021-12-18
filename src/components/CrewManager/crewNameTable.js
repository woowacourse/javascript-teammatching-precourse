import { getLocalStorage } from '../../store.js';
import { woowaCrew } from '../../woowaCrew.js';

export default function CrewTable(container) {
  this.template = (course) => {
    return `
          <h3>${course} 크루 목록</h3>
          <table border="1" id="crew-table">
            <thead>
             ${this.crewTableHeader()}
            </thead>
            <tbody id="crew-table-body">
            </tbody>
          </table>
        `;
  };

  this.crewTableHeader = () => {
    return `
      <tr>
        <th></th>
        <th>크루</th>
        <th>관리</th>
      </tr>
    `;
  };

  this.crewTableData = (index, name) => {
    return `
      <tr>
        <td>${index}</td>
        <td>${name}</td>
        <td>
          <button class"delete-crew-button">삭제</button>
        </td>
      </tr>
    `;
  };

  this.renderNames = (names) => {
    const tableBody = document.querySelector('#crew-table-body');
    const tableData = names
      .map((name, index) => this.crewTableData(index + 1, name))
      .join('');

    tableBody.innerHTML = tableData;
  };

  this.initTable = (course) => {
    if (getLocalStorage(course)) {
      woowaCrew.initCrew(course);
    }
    this.renderNames(woowaCrew.getCrew(course));
  };

  this.render = (course) => {
    container.innerHTML = this.template(course);
    this.initTable(course);
  };
}
