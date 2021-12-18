import Component from '../../../core/Component.js';
import { $ } from '../../../utils/helper.js';

export default class CrewManage extends Component {
  template() {
    const { course } = this.props;

    return (
      course &&
      `
      <h3>
        ${course === 'frontend' ? '프론트엔드' : '백엔드'} 크루 관리
      </h3>
      <form>
        <label>크루 이름</label>
        <input type="text" id="crew-name-input" />
        <button id='add-crew-button'>확인</button>
      </form>
    `
    );
  }

  setEvent() {
    this.addEvent('click', '#add-crew-button', () => {
      const { course, crewList, addCrew } = this.props;
      const name = $('#crew-name-input').value.trim();

      if (name.length > 5) {
        alert('크루 이름은 최대 5글자까지 가능합니다.');

        return;
      }

      if (
        crewList.filter((crew) => crew.course === course && crew.name === name)
          .length > 0
      ) {
        alert('동일한 이름의 크루는 추가할 수 없습니다.');

        return;
      }

      addCrew(name);
    });
  }
}
