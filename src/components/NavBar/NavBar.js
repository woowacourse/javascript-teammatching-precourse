import Component from '../../core/Component.js';

export default class NavBar extends Component {
  template() {
    return `
    <ul>
      <li>
        <button id='crew-tab'>크루 관리</button>
      </li>
      <li>
        <button id='team-tab'>팀 매칭 관리</button>
      </li>
    </ul>
    `;
  }

  setPath(selector, to) {
    this.addEvent('click', selector, () => {
      this.props.navigate(to);
    });
  }

  setEvent() {
    this.setPath('#crew-tab', 'crew');
    this.setPath('#team-tab', 'team');
  }
}
