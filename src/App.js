import { TAB_MENU, ID } from './constants/index.js';
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
      tabData: {},
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
    const { curTab, tabItems, tabData } = this.$state;
    const { changeTab } = this;
    const $header = this.$target.querySelector('[data-component="header"]');
    const $main = this.$target.querySelector(`[data-component="${curTab}"]`);

    new Header($header, { tabItems, changeTab: changeTab.bind(this) });
    new Main($main, { tabID: curTab, tabData });
  }

  changeTab(seq) {
    const tabItems = [...this.$state.tabItems];
    const index = tabItems.findIndex(v => v.seq === seq);
    const tabID = tabItems[index].id;

    this.setState({ curTab: tabID });
  }
}
