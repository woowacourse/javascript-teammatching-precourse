import Component from '../core/Component.js';
import NavBar from './NavBar/NavBar.js';
import Router from './Router.js';
import { $ } from '../utils/helper.js';

export default class App extends Component {
  setup() {
    this.state = { location: 'crew' };
  }

  template() {
    return `
    <header>
      <h1>우테코 크루와 팀 매칭 관리 보드</h1>
      <nav id='nav-bar'></nav>
    </header>
    <main id='main-wrapper'>
      <section id='crew-container' data-path='crew'>crew</section>
      <section id='team-container' data-path='team'>team</section> 
    </main>
    `;
  }

  afterMounted() {
    new NavBar($('#nav-bar'), {
      navigate: this.navigate.bind(this),
    });
    new Router($('#main-wrapper'), {
      location: this.state.location,
    });
  }

  navigate(to) {
    this.setState({ location: to });
  }
}
