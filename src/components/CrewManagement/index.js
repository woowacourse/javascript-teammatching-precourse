import Component from '../../core/Component.js';
import { newElement } from '../../utils/dom.js';
import CourseSection from './CourseSection.js';
import CrewAddForm from './CrewAddForm.js';
import CrewList from './CrewList.js';

export default class CrewManagement extends Component {
  initState() {
    this.state = {
      selectedCourse: '',
    };
  }

  onChangeCourse(course) {
    this.setState({ selectedCourse: course });
  }

  initChildren() {
    const { selectedCourse } = this.state;
    this.children = [
      new CourseSection(newElement('<section id="course-section"/>'), {
        onChangeCourse: course => this.onChangeCourse(course),
      }),
      new CrewAddForm(newElement('<section id="crew-add-form"/>'), {
        selectedCourse,
      }),
      new CrewList(newElement('<section id="crew-list"/>'), {
        selectedCourse,
      }),
    ];
  }
}
