import Component from "../common/component.js";

const SHOW_TEAM_MATCHER_BUTTON_ID = "show-team-matcher-button";

export default class SelectSection extends Component {
  template() {
    return this.getHeaderSection() + this.getFormSection();
  }

  getHeaderSection() {
    return `<h3>${this.$props.title}</h3>`;
  }

  getFormSection() {
    return `
    <form>
      ${this.getSelectSection(
        this.$props.courseSelectId,
        this.$props.courseOptions,
        this.$props.courseSelected
      )}
      ${this.getSelectSection(
        this.$props.missionSelectId,
        this.$props.missionOptions,
        this.$props.missionSelected
      )}
      <button id=${SHOW_TEAM_MATCHER_BUTTON_ID}>확인</button>
    </form>`;
  }

  getSelectSection(selectID, optionsList, value) {
    return `
    <select id=${selectID}>
      ${optionsList.map(
        (option) =>
          `<option 
          ${value === option.value ? "selected" : ""}
          value=${option.value}>${option.name}
          </option>`
      )}
    </select>`;
  }
}
