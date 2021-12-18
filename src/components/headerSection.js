import Component from "../common/component.js";

export default class HeaderSection extends Component {
  template() {
    return this.getHeaderSection() + this.getNavSection();
  }

  getHeaderSection() {
    return `<h1>${this.$props.title}</h1>`;
  }

  getNavSection() {
    return `
    <nav><ul>
      ${this.getButtonsList()}
    </ul><nav>`;
  }

  getButtonsList() {
    return this.$props.buttonList
      .map((button) => this.getSingleButtonItem(button.name, button.id))
      .join("");
  }

  getSingleButtonItem(buttonName, buttonId) {
    return `<li><button class="tab" id=${buttonId}>${buttonName}</button></li>`;
  }
}
