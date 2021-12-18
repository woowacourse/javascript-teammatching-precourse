import { STORAGE_KEY } from '../../utils/constants.js';
import { getLocalStorage } from '../../utils/LocalStorage.js';
import Component from '../core/Component.js';

export default class CrewManageContainer extends Component {
  init() {
    this.$state = {
      crews: getLocalStorage(STORAGE_KEY.CREW, {}),
      selected: ''
    };
  }

  template() {
    return `
      <section id="select-course"></section>
      <section id="crew-manage"></section>
      <section id="crew-list"></section>
    `;
  }

  mounted() {
    this.$target.querySelector('#select-course').innerHTML = this.printSelectCourseSection();
  }

  setEvent() {
    this.courseRadioClickHandler();
    this.crewManageClickHandler();
  }

  printSelectCourseSection() {
    return `
    <h3>크루를 관리할 코스를 선택해주세요</h3>
    <div>
      <input type="radio" name="course" value="frontend" id="frontend-course" />
      <label for="frontend">프론트엔드</label>
      <input type="radio" name="course" value="backend" id="backend-course" />
      <label for="backend">백엔드</label>
    </div>
    `;
  }

  printCrewManageSection() {
    return `
    <h3>프론트엔드 크루 관리</h3>
    <form id="add-crew-form">
      <label>크루 이름</label>
      <input type="text" id="crew-name-input" />
      <button id="add-crew-buttton">확인</button>
    </form>
    `;
  }

  courseRadioClickHandler() {
    this.addEvent('change', 'input[name="course"]', ({ target }) => {
      this.setState({ selected: target.value });

      this.$target.querySelector('#crew-manage').innerHTML = this.printCrewManageSection();
    });
  }

  crewManageClickHandler() {
    this.addEvent('submit', '#add-crew-form', (event) => {
      event.preventDefault();

      const name = this.$target.querySelector('#crew-name-input').value;
      console.log(name);
    });
  }
}
