import Component from '../../essential/component.js';

const HEAD = `
  <h3>프론트엔드 숫자야구게임 조회</h3>
  <p>팀이 매칭되었습니다.</p>
  <ul></ul>`;

const BODY = matchCrews =>
  `${crews
    .map(
      ({ name }, index) => `
    <li>${name}</li>`,
    )
    .join('')}`;

const TAIL = `
  </ul>
  <p>
    팀을 재매칭 하시겠습니까?
    <button id="rematch-team-button">재매칭</button>
  </p>`;

export default class FrontResult extends Component {
  setup() {
    this.$state = {
      matchCrews: [],
    };
  }

  applyProps() {
    if (this.$props && this.$props.matchCrews) {
      this.$state.matchCrews = this.$props.matchCrews;

      delete this.$props.matchCrews;
    }
  }

  template() {
    return HEAD + BODY(this.$state.matchCrews) + TAIL;
  }

  mounted() {}

  setEvent() {
    this.addEvent('click', '#rematch-team-button', () => {});
  }
}
