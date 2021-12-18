import Component from './components/core/Component.js';
import Menu from './components/Menu.js';

export default class App extends Component {
  init() {}

  template() {
    return `
      <header id=""></header>
      <main id=""></main>
    `;
  }

  mounted() {
    this.mountMenuComponent();
  }

  mountMenuComponent() {
    const menuContainer = document.querySelector('#menu-container');
    new Menu(menuContainer, {});
  }
}
