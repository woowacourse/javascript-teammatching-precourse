import Component from './core/Component.js';
import Header from './components/Header.js';
import Main from './components/Main.js';
import { newElement } from './utils/dom.js';
import { MENU } from './utils/constants.js';

export default class App extends Component {
  initState() {
    this.state = { selectedMenu: MENU.CREW_MANAGE };
  }

  onChangeMenu(menu) {
    this.setState({ selectedMenu: menu });
  }

  initChildren() {
    this.children = [
      new Header(newElement('<header id="header"/>'), {
        onChangeMenu: menu => this.onChangeMenu(menu),
      }),
      new Main(newElement('<main id="main"/>'), {
        selectedMenu: this.state.selectedMenu,
      }),
    ];
  }
}
