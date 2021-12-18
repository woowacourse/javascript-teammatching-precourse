/* eslint-disable no-restricted-globals */
/* eslint-disable radix */
import TeamMatcher from "../class/teamMatcher.js";
import Component from "../common/component.js";
import HeaderSection from "./headerSection.js";
import InputSection from "./inputSection.js";
import RadioButtonSection from "./radioButtonSection.js";
import SelectSection from "./selectSection.js";
import Table from "./table.js";
import UnmatchedSelection from "./unmatchedSection.js";

const courseIdToTitle = {
  frontend: "프런트엔드",
  backend: "백엔드",
};

const missionIdToTitle = {
  baseball: "숫자야구게임",
  racingcar: "자동차경주",
  lotto: "로또",
  "shopping-cart": "장바구니",
  payments: "결제",
  subway: "지하철노선도",
  performance: "성능개선",
  deploy: "배포",
};

const courseOptions = [
  { value: "frontend", name: "프런트엔드" },
  { value: "backend", name: "백엔드" },
];

const missionOptions = [
  { name: "숫자야구게임", value: "baseball" },
  { name: "자동차경주", value: "racingcar" },
  { name: "로또", value: "lotto" },
  { name: "장바구니", value: "shopping-cart" },
  { name: "결제", value: "payments" },
  { name: "지하철노선도", value: "subway" },
  { name: "성능개선", value: "performance" },
  { name: "배포", value: "deploy" },
];
const ADD_CREW_BUTTON_ID = "add-crew-buttton";
const ADD_CREW_INPUT_ID = "crew-name-input";
const DELETE_CREW_BUTTON_CLASS = "delete-crew-buttton";
const CREW_TAB_ID = "crew-tab";
const TEAM_TAB_ID = "team-tab";
const SHOW_TEAM_MATCHER_BUTTON_ID = "show-team-matcher-button";
const COURSE_SELECT_ID = "course-select";
const MISSION_SELECT_ID = "mission-select";
const TEAM_MEMBER_COUNT_INPUT_ID = "team-member-count-input";
const MATCH_TEAM_BUTTON_ID = "match-team-button";
const MAX_NAME_LENGTH = 5;

export default class App extends Component {
  initialize() {
    this.$teamMatcher = new TeamMatcher(Object.keys(courseIdToTitle));
    this.$state = {
      activeTab: CREW_TAB_ID,
      activeRadioCourse: "",
      activeSelectCourse: "",
      activeSelectMission: "",
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

    if (this.$state.activeTab === CREW_TAB_ID) this.mountCrewSection();
    else this.mountTeamSection();
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

  mountCrewSection() {
    this.mountRadioSection();

    if (this.$state.activeRadioCourse !== "") {
      this.mountInputSection();
      this.mountTableSection();
    }
  }

  mountTeamSection() {
    this.mountSelectSection();
    if (this.$state.activeSelectCourse !== "") {
      this.mountUnmatchedResult();
    }
  }

  mountUnmatchedResult() {
    const $sectionSelector = document.querySelectorAll("section")[1];

    new UnmatchedSelection($sectionSelector, {
      missionName: missionIdToTitle[this.$state.activeSelectMission],
      courseName: courseIdToTitle[this.$state.activeSelectCourse],
      crews: this.$teamMatcher.getCrews(this.$state.activeSelectCourse),
    });
  }

  mountRadioSection() {
    const $sectionSelector = document.querySelectorAll("section")[0];

    new RadioButtonSection($sectionSelector, {
      title: "크루를 관리할 코스를 선택해주세요",
      name: "course",
      selected: this.$state.activeRadioCourse,
      buttonList: [
        { id: "frontend-course", value: "frontend", label: "프런트엔드" },
        { id: "backend-course", value: "backend", label: "백엔드" },
      ],
    });
  }

  mountSelectSection() {
    const $sectionSelector = document.querySelectorAll("section")[0];

    new SelectSection($sectionSelector, {
      title: "팀 매칭을 관리할 코스, 미션을 선택하세요.",
      courseSelectId: COURSE_SELECT_ID,
      courseOptions,
      courseSelected: this.$state.activeSelectCourse,
      missionSelectId: MISSION_SELECT_ID,
      missionOptions,
      missionSelected: this.$state.activeSelectMission,
    });
  }

  mountInputSection() {
    const $sectionSelector = document.querySelectorAll("section")[1];

    new InputSection($sectionSelector, {
      title: `${courseIdToTitle[this.$state.activeRadioCourse]} 크루 관리`,
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
      title: `${courseIdToTitle[this.$state.activeRadioCourse]} 크루 관리 목록`,
      tableContents: this.$teamMatcher.getCrews(this.$state.activeRadioCourse),
    });
  }

  setEvent() {
    this.$target.addEventListener("click", this.onClickButton.bind(this));
  }

  onClickButton(event) {
    event.preventDefault();

    const { target } = event;

    if (target.name === "course") this.setactiveRadioCourse(target.value);
    else if (target.id === ADD_CREW_BUTTON_ID) this.onClickAddCrew();
    else if (target.className === DELETE_CREW_BUTTON_CLASS) {
      this.onClickRemoveCrew(target.value);
    } else if (target.id === CREW_TAB_ID || target.id === TEAM_TAB_ID) {
      this.setState({ activeTab: target.id });
    } else if (target.id === SHOW_TEAM_MATCHER_BUTTON_ID) {
      this.onClickShowTeamMatcher();
    } else if (target.id === MATCH_TEAM_BUTTON_ID) {
      this.onClickCreateTeam();
    }
  }

  setactiveRadioCourse(courseID) {
    this.setState({
      activeRadioCourse: courseID,
    });
  }

  onClickAddCrew() {
    const userInput = document.getElementById(ADD_CREW_INPUT_ID).value;

    if (this.isInvalidLength(userInput)) {
      alert("1-5글자 사이의 이름 입력");
      return;
    }
    const created = this.$teamMatcher.addCrew(
      userInput,
      this.$state.activeRadioCourse
    );

    if (!created) alert("이름 반복");
    this.render();
  }

  isInvalidLength(name) {
    return name.length === 0 || name.length > MAX_NAME_LENGTH;
  }

  onClickRemoveCrew(crewName) {
    if (!confirm("삭제하겠습니다?")) return;
    this.$teamMatcher.removeCrew(crewName, this.$state.activeRadioCourse);
    this.render();
  }

  onClickShowTeamMatcher() {
    const activeSelectCourse = document.getElementById(COURSE_SELECT_ID).value;
    const activeSelectMission =
      document.getElementById(MISSION_SELECT_ID).value;
    this.setState({ activeSelectCourse, activeSelectMission });
  }

  onClickCreateTeam() {
    const { value } = document.getElementById(TEAM_MEMBER_COUNT_INPUT_ID);
    console.log(
      this.$teamMatcher.getTeam(
        this.$state.activeSelectCourse,
        this.$state.activeSelectMission,
        value
      )
    );
  }
}
