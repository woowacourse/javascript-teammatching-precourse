import Component from '../core/Component.js';

export default class Header extends Component {
  template() {
    return `
    <h1>우테코 크루와 팀 매칭 관리 보드</h1>
    <nav>
      <ul>
        <li>
          <button>크루 관리</button>
        </li>
        <li>
          <button>팀 매칭 관리</button>
        </li>
      </ul>
    </nav>
    `;
  }
}
