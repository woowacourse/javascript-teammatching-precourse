import Component from "../common/component.js";
import RadioButton from "./radioButton.js";

export default class RadioButtonSection extends Component {
  template() {
    return `
    ${this.getTitle()}
    <div></div>`;
  }

  getTitle() {
    return `<h3>${this.$props.title}</h3>`;
  }

  componentDidMount() {
    const { title, ...others } = this.$props;
    const $radioDiv = this.$target.querySelector("div");
    new RadioButton($radioDiv, { ...others });
  }
}
