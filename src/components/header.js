import Component from '../essential/component.js';

export default class Header extends Component {
  template() {
    return `
      <h1>우테코 크루와 팀 매칭 관리 보드</h1>
      <nav>
        <ul>
          <li>
            <input type="button" class="menuBtns" id="crew-tab" data-curr-menu="0" value="크루 관리"/>
          </li>
          <li>
          <input type="button" class="menuBtns" id="team-tab" data-curr-menu="1" value="팀 관리"/>
          </li>
        </ul>
      </nav>`;
  }

  setEvent() {
    this.addEvent('click', '.menuBtns', ({ target }) => {
      this.$props.selectMenu(Number(target.dataset.currMenu));
    });
  }
}
