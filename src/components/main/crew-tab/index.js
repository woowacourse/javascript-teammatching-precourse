import Component from '../../../core/Component.js';
import CourseForm from '../course-form/index.js';

export default class CrewTab extends Component {
  template() {
    return `
      <section data-component="course-form"></section>
    `;
  }
  mounted() {
    const { data, setCourse } = this.$props;
    const $courseForm = this.$target.querySelector('[data-component="course-form"]');
    new CourseForm($courseForm, { data, setCourse });
  }
}
