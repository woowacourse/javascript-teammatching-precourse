import Component from './components/root/Component.js';
import Header from './components/Header.js';
import Main from './components/Main.js';

export default class App extends Component {
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
}
