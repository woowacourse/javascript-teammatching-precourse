import Component from '../../../core/Component.js';

export default class SelectCourse extends Component {
  template() {
    const { course } = this.props;

    return `
      <h3>크루를 관리할 코스를 선택해주세요</h3>
      <div>
        <input type="radio" name="course" value="frontend" id='frontend-course' ${
          course === 'frontend' && 'checked'
        }/>
        <label for="frontend">프론트엔드</label>
        <input type="radio" name="course" value="backend" id='backend-course' ${
          course === 'backend' && 'checked'
        }/>
        <label for="backend">백엔드</label>
      </div>
    `;
  }

  setEvent() {
    const { selectCourse } = this.props;

    this.addEvent('click', '#frontend-course', ({ target }) => {
      selectCourse(target.value);
    });

    this.addEvent('click', '#backend-course', ({ target }) => {
      selectCourse(target.value);
    });
  }
}
