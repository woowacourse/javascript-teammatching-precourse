import Component from '../core/Component.js';
import Header from './Header.js';
import { ID } from '../constant/selector.js';

export default class App extends Component {
  mount() {
    this.header = new Header(this.$element.querySelector(`#${ID.HEADER}`));
  }

  template() {
    return `
      <header id="${ID.HEADER}"></header>
      <main></main>
    `;
  }
}
