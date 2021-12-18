import Component from "../core/Component.js";

export default class Nav extends Component {
  setup() {
    console.log("Nav", this);
  }

  template() {
    return `
      <ul>
          <li>
          <button id="crew-tab">크루 관리</button>
          </li>
          <li>
          <button id="team-tab">팀 매칭 관리</button>
          </li>
      </ul>
    `;
  }

  mounted() {
    this.addEvent("click", this.$target, (e) => this.onClickChangeTab(e));
  }

  onClickChangeTab(e) {
    const { changeTab } = this.$props;
    const { tagName, id } = e.target;

    if (tagName === "BUTTON") changeTab(id);
  }
}
