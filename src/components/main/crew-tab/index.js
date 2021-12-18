import Component from '../../../core/Component.js';
import CourseForm from '../course-form/index.js';
import CrewAddForm from '../crew-add-form/index.js';

export default class CrewTab extends Component {
  template() {
    return `
      <section data-component="course-form"></section>
      <section data-component="crew-add-form"></section>
    `;
  }

  mounted() {
    const { data, setCourse, addCrew, deleteCrew } = this.$props;
    const $courseForm = this.$target.querySelector('[data-component="course-form"]');
    const $crewAddForm = this.$target.querySelector('[data-component="crew-add-form"]');

    new CourseForm($courseForm, { data, setCourse });
    if (data['crew_course'].frontend == 'checked') {
      new CrewAddForm($crewAddForm, { type: 'frontend', data, addCrew, deleteCrew });
    } else if (data['crew_course'].backend == 'checked') {
      new CrewAddForm($crewAddForm, { type: 'backend', data, addCrew, deleteCrew });
    }
  }
}
