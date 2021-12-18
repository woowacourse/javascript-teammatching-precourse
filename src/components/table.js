import Component from "../common/component.js";

export default class Table extends Component {
  template() {
    return `
      <h3>${this.$props.title}</h3>
      ${this.getOptionalButton()}
      <table border="1">
        ${this.getTableHeader()}
        ${this.getTableContents()}
      </table>
    `;
  }

  getTableHeader() {
    return `
    <thead>
      <tr>
      <td></td>
      ${this.headers.map((e) => `<td>${e}</td>`)}
      </tr>
    </thead>`;
  }

  getTableContents() {
    if (this.$props.tableContents === undefined) return "<tbody/>";
    return `<tbody>${this.$props.tableContents.map(this.getTableRow).join("")}
    </tbody>`;
  }

  getTableRow(entries, index) {
    return `
    <tr>
    <td>${index + 1}</td>
    ${entries.map((e) => `<td>${e}</td>`)}
    </tr>`;
  }
}
