import { STORAGE_KEY } from '../../utils/constants.js';
import { getLocalStorage, setLocalStorage } from '../../utils/LocalStorage.js';
import { isValidCrewName } from '../../utils/validation.js';
import { createCrewListTable } from '../../utils/domUtil.js';
import Component from '../core/Component.js';

export default class CrewManageContainer extends Component {
  init() {
    this.$state = {
      crews: getLocalStorage(STORAGE_KEY.CREW, {}),
      selectedCourse: '',
      isShowTable: false
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
    if (this.$state.selectedCourse) {
      this.$target.querySelector('#crew-manage').innerHTML = this.printCrewManageSection();
    }
    if (this.$state.isShowTable) {
      this.$target.querySelector('#crew-list').innerHTML = this.printCrewListSection();
    }
  }

  setEvent() {
    this.courseRadioClickHandler();
    this.crewManageClickHandler();
    this.crewDeleteClickHandler();
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
    <h3>${this.$state.selectedCourse === 'frontend' ? '프론트엔드' : '백엔드'} 크루 관리</h3>
    <form id="add-crew-form">
      <label>크루 이름</label>
      <input type="text" id="crew-name-input" />
      <button id="add-crew-buttton">확인</button>
    </form>
    `;
  }

  printCrewListSection() {
    const tableHeaders = ['', '크루', '관리'];
    return `
    <h3>${this.$state.selectedCourse === 'frontend' ? '프론트엔드' : '백엔드'} 크루 목록</h3>
    ${createCrewListTable(tableHeaders, this.$state.crews[this.$state.selectedCourse])}
    `;
  }

  courseRadioClickHandler() {
    this.addEvent('change', 'input[name="course"]', ({ target }) => {
      this.setState({ selectedCourse: target.value });

      this.$target.querySelector('#crew-manage').innerHTML = this.printCrewManageSection();
    });
  }

  crewManageClickHandler() {
    this.addEvent('submit', '#add-crew-form', (event) => {
      event.preventDefault();

      const name = this.$target.querySelector('#crew-name-input').value;
      const course = this.$state.selectedCourse;
      if (isValidCrewName(name, course)) {
        this.setState({
          crews: Object.assign(this.$state.crews, {
            [course]: this.$state.crews[course] ? [...this.$state.crews[course], name] : [name]
          }),
          isShowTable: true
        });
        this.saveCrewsInStroage();
        this.$target.querySelector('#crew-list').innerHTML = this.printCrewListSection();
      }
    });
  }

  crewDeleteClickHandler() {
    this.addEvent('click', '.delete-crew-buttton', ({ target }) => {
      const { index } = target.dataset;
      const course = this.$state.selectedCourse;
      console.log(index);
      console.log(this.$state.crews[course].filter((crew, crewIndex) => crewIndex !== Number.parseInt(index, 10)));
      this.setState({
        crews: Object.assign(this.$state.crews, {
          [course]: this.$state.crews[course].filter((crew, crewIndex) => crewIndex !== Number.parseInt(index, 10))
        })
      });
      this.saveCrewsInStroage();
    });
  }

  saveCrewsInStroage() {
    setLocalStorage(STORAGE_KEY.CREW, this.$state.crews);
  }
}
