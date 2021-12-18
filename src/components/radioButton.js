import Component from "../common/component.js";

export default class RadioButton extends Component {
  template() {
    return this.getRadioButtons();
  }

  getRadioButtons() {
    return this.$props.buttonList
      .map((buttonInfo) => this.getRadioButton(buttonInfo))
      .join("");
  }

  getRadioButton(buttonInfo) {
    return `
    <input 
      type="radio" 
      id= ${buttonInfo.id} 
      name=${this.$props.name} 
      value=${buttonInfo.value}
      ${buttonInfo.id === this.$props.selected ? "checked" : ""}
    />
    <label for=${buttonInfo.value}>${buttonInfo.label}</label>`;
  }
}
