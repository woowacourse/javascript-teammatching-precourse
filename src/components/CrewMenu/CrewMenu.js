import Component from '../../core/Component.js';
import SelectCourse from './sections/SelectCourse.js';
import { $ } from '../../utils/helper.js';
import CrewManage from './sections/CrewManage.js';
import CrewList from './sections/CrewList.js';
import LocalStore from '../../store/LocalStore.js';

export default class CrewMenu extends Component {
  setup() {
    const { course, crewList } = LocalStore.load();
    this.state = { course, crewList };
  }

  template() {
    return `
      <section id='select-course'></section>
      <section id='crew-manage'></section>
      <section id='crew-list'></section>
    `;
  }

  afterMounted() {
    const {
      selectCourse,
      addCrew,
      deleteCrew,
      state: { course, crewList },
    } = this;

    new SelectCourse($('#select-course'), {
      course,
      selectCourse: selectCourse.bind(this),
    });
    new CrewManage($('#crew-manage'), {
      course,
      crewList,
      addCrew: addCrew.bind(this),
    });
    new CrewList($('#crew-list'), {
      course,
      crewList,
      deleteCrew: deleteCrew.bind(this),
    });
  }

  selectCourse(course) {
    const req = { course };

    LocalStore.save(req);
    this.setState(req);
  }

  addCrew(name) {
    const crewInfo = {
      course: this.state.course,
      id: Date.now(),
      name,
    };
    const req = { crewList: [...this.state.crewList, crewInfo] };

    LocalStore.save(req);
    this.setState(req);
  }

  deleteCrew(id) {
    const newCrewList = [...this.state.crewList];
    const index = newCrewList.findIndex((crew) => crew.id === id);
    newCrewList.splice(index, 1);
    const req = { crewList: newCrewList };

    LocalStore.save(req);
    this.setState(req);
  }
}
