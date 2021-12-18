import Component from "../common/component.js";

export default class InputSection extends Component {
  template() {
    return `
      ${this.getTitle()}
      <form>
        ${this.getLabel()}
        ${this.getInputTextbox()}
        ${this.getSubmitButton()}
      </form>
    `;
  }

  getTitle() {
    return `
    <${this.$props.titleElementType}>
      ${this.$props.title}
    </${this.$props.titleElementType}>`;
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
    return `<input type=${this.$props.buttonType} />`;
  }

  getSubmitButton() {
    return `<button id="${this.$props.id}">확인</button>`;
  }
}
