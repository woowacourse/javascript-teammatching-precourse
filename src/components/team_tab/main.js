import Component from "../../core/Component.js";
import SelectOption from "./SelectOption.js";
import InputMatch from "./InputMatch.js";
import MatchedTeam from "./MatchedTeam.js";

import Api from "../../libs/api.js";

export default class TeamTab extends Component {
  setup() {
    this.callAPI = new Api();
    this.initCallAPI();
    console.log("TeamTab", this);
  }

  initCallAPI() {
    this.callAPI.setup();
    this.$state = this.callAPI.getTeamMatching();
  }

  template() {
    return `
      <section id="select-option"></section>
      <section id="input-match"></section>

      <!-- 팀 매칭이 된 경우 -->
      <section id="matched-team"></section>
    `;
  }

  mounted() {
    const {
      setSelectedOption,
      setTeamNumbers,
      getCurrentCrews,
      setMatchedTeam,
      $state: {
        selectedCourse,
        selectedMission,
        frontends,
        backends,
        matchedTeam,
        teamNumbers,
      },
    } = this;
    const $selectOption = document.querySelector("#select-option");
    const $inputMatch = document.querySelector("#input-match");
    const $matchedTeam = document.querySelector("#matched-team");

    console.log("****selectedCourse", selectedCourse);

    new SelectOption($selectOption, {
      setSelectedOption: setSelectedOption.bind(this),
      selectedCourse,
      selectedMission,
    });

    if (!selectedCourse) return;
    const currentCrews = getCurrentCrews({
      course: selectedCourse.value,
      frontends,
      backends,
    });

    new InputMatch($inputMatch, {
      selectedCourse,
      selectedMission,
      setTeamNumbers: setTeamNumbers.bind(this),
      setMatchedTeam: setMatchedTeam.bind(this),
      currentCrews,
    });

    new MatchedTeam($matchedTeam, {
      matchedTeam,
      setMatchedTeam: setMatchedTeam.bind(this),
      teamNumbers,
      currentCrews,
    });
  }

  setSelectedOption(props) {
    const payload = { ...props };
    this.callAPI.setTeamMatching(payload);
    this.setState(payload);
  }

  setTeamNumbers(props) {
    const payload = { ...props };
    this.callAPI.setTeamMatching(payload);
    this.setState(payload);
  }

  getCurrentCrews({ course, frontends, backends }) {
    if (course === "frontend") return frontends;
    if (course === "backend") return backends;
  }

  setMatchedTeam(props) {
    const payload = { ...props };
    this.callAPI.setTeamMatching(payload);
    this.setState(payload);
  }
}
