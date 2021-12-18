import { TAB_MENU, ID, COURSE_TYPE } from './constants/index.js';
import Component from './core/Component.js';
import Header from './components/header/Header.js';
import Main from './components/main/Main.js';

export default class App extends Component {
  setup() {
    if (!localStorage.getItem('state')) this.init();
    else this.getLocalStorageState();
  }

  init() {
    this.$state = {
      curTab: ID.CREW_TAB,
      tabItems: TAB_MENU.map(({ id, title }, index) => ({ seq: index, id, title })),
      data: {
        crew_course: { frontend: '', backend: '' },
        frontend: ['준', '요'],
        backend: ['하'],
      },
    };
  }

  getLocalStorageState() {
    this.$state = JSON.parse(localStorage.getItem('state'));
  }

  template() {
    const { curTab } = this.$state;
    return `
        <header data-component="header"></header>
        <main data-component="${curTab}"></main>
      `;
  }

  mounted() {
    const { curTab, tabItems, data } = this.$state;
    const { changeTab, setCourse, addCrew, deleteCrew } = this;
    const $header = this.$target.querySelector('[data-component="header"]');
    const $main = this.$target.querySelector(`[data-component="${curTab}"]`);

    new Header($header, { tabItems, changeTab: changeTab.bind(this) });
    new Main($main, {
      tabID: curTab,
      data,
      setCourse: setCourse.bind(this),
      addCrew: addCrew.bind(this),
      deleteCrew: deleteCrew.bind(this),
    });
  }

  changeTab(seq) {
    const tabItems = [...this.$state.tabItems];
    const index = tabItems.findIndex(v => v.seq === seq);
    const tabID = tabItems[index].id;

    this.setState({ curTab: tabID });
  }

  setCourse(course) {
    const { data } = this.$state;
    this.setState({
      data: {
        ...data,
        crew_course: course,
      },
    });
  }

  addCrew(courseType, name) {
    const { data } = this.$state;

    if (courseType === 'frontend') {
      this.setState({ data: { ...data, frontend: [...data.frontend, name] } });
    } else if (courseType === 'backend') {
      this.setState({ data: { ...data, backend: [...data.backend, name] } });
    }
  }

  deleteCrew(courseType, name) {
    const crews = [];

    if (courseType === 'frontend') {
      crews = [...this.$state.data.frontend];
      crews.splice(
        crews.findIndex(v => v === name),
        1
      );
      this.setState({
        data: { ...data, frontend: crews },
      });
    } else if (courseType === 'backend') {
      crews = [...this.$state.data.backend];
      crews.splice(
        crews.findIndex(v => v === name),
        1
      );
      this.setState({ data: { ...data, backend: crews } });
    }
  }
}
