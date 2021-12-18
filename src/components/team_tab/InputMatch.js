import Component from "../../core/Component.js";

export default class InputMatch extends Component {
  setup() {
    console.log("InputMatch", this);
  }

  template() {
    const { selectedCourse, selectedMission, currentCrews } = this.$props;
    return `
        <h3>${selectedCourse.text} ${selectedMission.text} 미션의 팀 매칭</h3>
        <div>
        <div>
            <p>아직 매칭된 팀이 없습니다. 팀을 매칭하겠습니까?</p>
            <form>
            <label>1팀당 인원 수</label>
            <input type="number" id="team-member-count-input"/>
            <button id="match-team-button">팀 매칭</button>
            </form>
        </div>
        <h4>크루 목록</h4>
        <ul>
            ${currentCrews
              .map((crew) => {
                return `<li>${crew}</li>`;
              })
              .join("")}
        </ul>
        </div>
    `;
  }

  mounted() {
    this.addEvent("submit", this.$target, (e) => this.onSubmitHandler(e));
  }

  onSubmitHandler(e) {
    e.preventDefault();
    const { setTeamNumbers, currentCrews, setMatchedTeam } = this.$props;
    const numbers = document.querySelector("#team-member-count-input").value;

    if (numbers === "") {
      window.alert(`인원 수를 입력해주세요.`);
      return;
    }
    if (Number(numbers) <= 0) {
      window.alert(`1이상의 인원 수를 입력해주세요.`);
      return;
    }

    setMatchedTeam({
      matchedTeam: this.getMatchedTeam({
        numbers: Number(numbers),
        currentCrews,
      }),
    });

    setTeamNumbers({ teamNumbers: Number(numbers) });
  }

  getMatchedTeam({ numbers, currentCrews }) {
    const maxLength = currentCrews.length;
    const shuffleBox = Array(maxLength)
      .fill(null)
      .map((v, idx) => idx);
    const randomShuffleBox = MissionUtils.Random.shuffle(shuffleBox);

    const boxCnt = Math.floor(maxLength / numbers);

    let result = [];

    while (randomShuffleBox.length) {
      const spliceBox = randomShuffleBox.splice(0, numbers);

      if (spliceBox.length < numbers) {
        spliceBox.forEach((num, idx) => {
          if (currentCrews[num]) {
            result[idx].push(currentCrews[num]);
          }
        });

        break;
      }

      result.push(spliceBox.map((num) => currentCrews[num]));
    }

    return result;
  }
}
