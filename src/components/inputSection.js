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

  getInputTextbox() {
    return `<input type=${this.$props.inputType} id=${this.$props.inputId}/>`;
  }

  getSubmitButton() {
    return `<button id="${this.$props.buttonId}">확인</button>`;
  }
}
