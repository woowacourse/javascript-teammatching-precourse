import Component from '../../essential/component.js';
import FrontTable from './front-table.js';

const CONTENT = `
  <h3>크루를 관리할 코스를 선택해주세요</h3>
  <div>
    <input type="radio" id="frontend-course" name="course-type" value="frontend"/>
    <label for="frontend">프론트엔드</label>
    <input type="radio" id="backend-course" name="course-type" value="backend" />
    <label for="backend">백엔드</label>
  </div>
  <div data-component="manage"></div>
  <div data-component="table"></div>
`;

export default class Header extends Component {
  template() {
    return CONTENT;
  }

  setEvent() {
    this.addEvent('click', 'input[name=course-type]', () => {
      let selectCourse = this.$('input[name=course-type]').value;

      this.$props.selectCourseType(selectCourse);
    });
  }
}
