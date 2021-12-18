/* eslint-disable radix */
import TeamMatcher from "../class/teamMatcher.js";
import Component from "../common/component.js";
import HeaderSection from "./headerSection.js";
import InputSection from "./inputSection.js";
import RadioButtonSection from "./radioButtonSection.js";
import Table from "./table.js";

const courseIdToTitle = {
  "frontend-course": "프런트엔드",
  "backend-course": "백엔드",
};
const ADD_CREW_BUTTON_ID = "add-crew-buttton";
const ADD_CREW_INPUT_ID = "crew-name-input";
const DELETE_CREW_BUTTON_CLASS = "delete-crew-buttton";
const CREW_TAB_ID = "crew-tab";
const TEAM_TAB_ID = "team-tab";

export default class App extends Component {
  initialize() {
    this.$teamMatcher = new TeamMatcher(Object.keys(courseIdToTitle));
    this.$state = {
      activeTab: CREW_TAB_ID,
      activeCourse: "",
      crews: [],
    };
  }

  template() {
    return `
      <header></header>
      <main>
        <section></section>
        <section></section>
        <section></section>
      </main>
    `;
  }

  componentDidMount() {
    this.mountHeader();
    this.mountRadioSection();

    if (this.$state.activeCourse !== "") {
      this.mountInputSection();
      this.mountTableSection();
    }
  }

  mountHeader() {
    const $headerSelector = document.querySelector("header");
    new HeaderSection($headerSelector, {
      title: "우테코 크루와 팀 매칭 관리 보드",
      buttonList: [
        { name: "크루 관리", id: CREW_TAB_ID },
        { name: "팀 매칭 관리", id: TEAM_TAB_ID },
      ],
    });
  }

  mountRadioSection() {
    const $sectionSelector = document.querySelectorAll("section")[0];

    new RadioButtonSection($sectionSelector, {
      title: "크루를 관리할 코스를 선택해주세요",
      name: "course",
      selected: this.$state.activeCourse,
      buttonList: [
        { id: "frontend-course", value: "frontend", label: "프런트엔드" },
        { id: "backend-course", value: "backend", label: "백엔드" },
      ],
    });
  }

  mountInputSection() {
    const $sectionSelector = document.querySelectorAll("section")[1];

    new InputSection($sectionSelector, {
      title: `${courseIdToTitle[this.$state.activeCourse]} 크루 관리`,
      titleElementType: "h3",
      label: "크루 이름",
      inputType: "text",
      buttonId: ADD_CREW_BUTTON_ID,
      inputId: ADD_CREW_INPUT_ID,
    });
  }

  mountTableSection() {
    const $sectionSelector = document.querySelectorAll("section")[2];
    new Table($sectionSelector, {
      title: `${courseIdToTitle[this.$state.activeCourse]} 크루 관리 목록`,
      tableContents: this.$state.crews,
    });
  }

  setEvent() {
    this.$target.addEventListener("click", this.onClickButton.bind(this));
  }

  onClickButton(event) {
    event.preventDefault();

    const { target } = event;

    if (target.name === "course") this.setActiveCourse(target.id);
    else if (target.id === ADD_CREW_BUTTON_ID) this.onClickAddCrew();
    else if (target.className === DELETE_CREW_BUTTON_CLASS)
      this.onClickRemoveCrew(target.value);
  }

  setActiveCourse(courseID) {
    this.setState({
      activeCourse: courseID,
      crews: this.$teamMatcher.getCrews(courseID),
    });
  }

  onClickAddCrew() {
    const userInput = document.getElementById(ADD_CREW_INPUT_ID).value;

    this.$teamMatcher.addCrew(userInput, this.$state.activeCourse);
    this.setState({
      crews: this.$teamMatcher.getCrews(this.$state.activeCourse),
    });
  }

  onClickRemoveCrew(crewName) {
    this.$teamMatcher.removeCrew(crewName, this.$state.activeCourse);
    this.setState({
      crews: this.$teamMatcher.getCrews(this.$state.activeCourse),
    });
  }
}
