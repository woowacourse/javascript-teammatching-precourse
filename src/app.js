import Component from './essential/component.js';
import { initStorageIfNull } from './utils/storage.js';
import Header from './components/header.js';
import CrewManage from './components/crew-manage/index.js';
import TeamMatching from './components/team-matching/index.js';
import { STORAGE_CREWS_KEY } from './utils/constants.js';

const CONTENT = `
  <header></header>
  <main></main>
`;

export default class App extends Component {
  setup() {
    this.initAllStorageIfNull();
    this.$state = {
      currMenu: 0,
    };
  }

  template() {
    return CONTENT;
  }

  mounted() {
    new Header(this.$('header'), {
      selectMenu: this.selectMenu.bind(this),
    });

    this.mountMain();
  }

  mountMain() {
    const $main = this.$('main');

    switch (this.$state.currMenu) {
      case 0:
        new CrewManage($main);
        break;
      case 1:
        new TeamMatching($main);
        break;
    }
  }

  initAllStorageIfNull() {
    initStorageIfNull(STORAGE_CREWS_KEY, []);
  }

  selectMenu(currMenu) {
    this.setState({ currMenu });
  }
}
