import Component from '../../core/Component.js';
import { EVENT_TYPE } from '../../utils/constants.js';
import { $ } from '../../utils/dom.js';

export default class OptionSection extends Component {
  bindEvents() {
    this.appendRootEvents(EVENT_TYPE.SUBMIT, () => this.onSubmit());
  }

  onSubmit() {
    const course = $('#course-select > option:checked', this.$container).value;
    const mission = $(
      '#mission-select > option:checked',
      this.$container
    ).value;
    this.props.onChangeOption(course, mission);
  }

  render() {
    this.$container.innerHTML = `
      <h3>팀 매칭을 관리할 코스, 미션을 선택하세요.</h3>
      <form>
        <select id="course-select">
          <option value="frontend">프론트엔드</option>
          <option value="backend">백엔드</option>
        </select>
        <select id="mission-select">
          <option value="baseball">숫자야구게임</option>
          <option value="racingcar">자동차경주</option>
          <option value="lotto">로또</option>
          <option value="shopping-cart">장바구니</option>
          <option value="payments">결제</option>
          <option value="subway">지하철노선도</option>
          <option value="performance">성능개선</option>
          <option value="deploy">배포</option>
        </select>
        <button id="show-team-matcher-button">확인</button>
      </form>
      `;
  }
}
