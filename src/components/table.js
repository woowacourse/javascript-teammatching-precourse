import Component from "../common/component.js";

export default class Table extends Component {
  template() {
    return `
      <h3>${this.$props.title}</h3>
      <table border="1">
        ${this.getTableHeader()}
        ${this.getTableContents()}
      </table>
    `;
  }

  getTableHeader() {
    const headers = ["크루", "관리"];
    return `
    <thead>
      <tr>
      <td></td>
      ${headers.map((e) => `<td>${e}</td>`).join("")}
      </tr>
    </thead>`;
  }

  getTableContents() {
    if (this.$props.tableContents === undefined) return "<tbody/>";
    return `<tbody>${this.$props.tableContents.map(this.getTableRow).join("")}
    </tbody>`;
  }

  getTableRow(entry, index) {
    return `
    <tr>
    <td>${index + 1}</td>
    <td>${entry}</td>
    <td><button class="delete-crew-buttton">삭제</button></td>
    </tr>`;
  }
}
