import Component from '../../core/Component.js';

export default class Header extends Component {
  template() {
    const { tabItems } = this.$props;

    return `
      <h1>우테코 크루와 팀 매칭 관리 보드</h1>
      <nav style="height: 35px">
        <ul style="list-style: none; padding: 0px;">
          ${this.getTabContents(tabItems)}
        </ul>
      </nav>
    `;
  }

  getTabContents(tabItems) {
    return `${tabItems
      .map(
        ({ seq, id, title }) => `
            <li data-seq="${seq}" style="float: left; margin-right: 15px;">
              <button id="${id}" class="tabButton">${title}</button>
            </li>
          `
      )
      .join('')}`;
  }

  setEvent() {
    const { changeTab } = this.$props;

    this.addEvent('click', '.tabButton', ({ target }) => {
      changeTab(Number(target.closest('[data-seq]').dataset.seq));
    });
  }
}
