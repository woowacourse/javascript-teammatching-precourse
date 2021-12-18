import Component from '../../essential/component.js';
import { STORAGE_CREWS_KEY } from '../../utils/constants.js';
import { loadFromStorage } from '../../utils/storage.js';

const HEAD = `
  <h3>프론트엔드 숫자야구게임 미션의 팀 매칭</h3>
    <div>
      <div>
        <p>아직 매칭된 팀이 없습니다. 팀을 매칭하겠습니까?</p>
        <form>
          <label>1팀당 인원 수</label>
          <input id="team-member-count-input" type="number" />
          <input type="button" id="match-team-button" value="팀 매칭" />
        </form>
      </div>
      <h4>크루 목록</h4>
      <ul>
`;

const BODY = crews =>
  `${crews
    .map(
      ({ name }, index) => `
      <li>${name}</li>`,
    )
    .join('')}`;

const TAIL = `
  </ul>
  </div>`;

export default class FrontMatching extends Component {
  setup() {
    this.$state = {
      crews: loadFromStorage(STORAGE_CREWS_KEY),
      mission: null,
      matchCrews: [],
    };
  }

  applyProps() {
    if (this.$props && this.$props.mission) {
      this.$state.mission = this.$props.mission;

      delete this.$props.mission;
    }
  }

  template() {
    return HEAD + BODY(this.$state.crews) + TAIL;
  }

  mounted() {}

  setEvent() {
    this.addEvent('click', '#match-team-button', () => {
      let numOfOneTeam = this.$('#team-member-count-input').value;
      let crewsName = objArray.map(crew => crew.name);
      let shuffleCrews = window.MissionUtils.Random.shuffle(crewsName);
      let matchCrews = [];
      for (let i = 0; i < shuffleCrews.length; i++) {
        for (let j = 0; j < numOfOneTeam; j++) {
          let tmp = [];
          tmp.push(shuffleCrews[i]);
        }
      }
    });
  }
}
