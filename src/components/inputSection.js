import Component from "../common/component.js";

export default class InputSection extends Component {
  template() {
    return `
      <h3>${this.$props.title}</h3>
      <form>
        ${this.getLabel()}
        ${this.getInputTextbox()}
        ${this.getSubmitButton()}
      </form>
    `;
  }

  getLabel() {
    return `<label>${this.$props.label}</label>`;
  }

  getTableHeader() {
    return this.$props.tableHeaders
      .map((header) => `<th>${header}</th>`)
      .join("");
  }

  getInputTextbox() {
    return `<input type="text" />`;
  }

  getSubmitButton() {
    return `<button id="${this.$props.id}">확인</button>`;
  }
}
