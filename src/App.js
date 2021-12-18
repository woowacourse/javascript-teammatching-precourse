import Component from './components/root/Component.js';
import Header from './components/Header.js';
import Main from './components/Main.js';
import { isEmpty } from './common/valid.js';
import { CURRENT_TAB, HIDDEN } from './constants/index.js';

export default class App extends Component {
  initialized() {
    this.initStorage();
  }

  template() {
    return `
      <header></header>
      <main></main>
    `;
  }

  mount() {
    new Header('header', this.$props);
    new Main('main', this.$props);
  }

  initStorage() {
    if (!isEmpty(this.$storage.read(CURRENT_TAB))) return;
    const initialState = {
      currentTab: '',
      selected: '',
      'frontend-course': [],
      'backend-course': [],
      mission: {},
      teams: {},
      matched: HIDDEN,
      nonMatched: HIDDEN,
    };
    const keys = Object.keys(initialState);
    keys.forEach(key => this.$storage.create(key, initialState[key], false));
  }
}
