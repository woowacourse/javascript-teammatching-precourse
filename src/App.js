import CrewSelect from './components/crew/CrewSelect.js';
import { ID } from './constants/index.js';
import { $ } from './utils/selector.js';

class App {
  constructor($target) {
    this.$target = $target;

    this.addTemplate();
    this.selectDom();
    this.addEvent();
  }

  addTemplate() {
    this.$target.innerHTML = `
      <header id=${ID.TAB_CONTAINER}>
        <h1>우테코 크루와 팀 매칭 관리 보드</h1>
        <nav>
          <ul>
            <li>
              <button id=${ID.CREW_TAB}>크루 관리</button>
            </li>
            <li>
              <button id=${ID.TEAM_TAB}>팀 매칭 관리</button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id=${ID.SELECT_SECTION}></section>
        <section id=${ID.MANAGE_SECITON}></section>
        <section id=${ID.RESULT_SECTION}></section>
      </main>
  `;
  }

  selectDom() {
    this.$tabContainer = $(`#${ID.TAB_CONTAINER}`);
    this.$selectSection = $(`#${ID.SELECT_SECTION}`);
    this.$manageSection = $(`#${ID.MANAGE_SECITON}`);
    this.$resultSection = $(`#${ID.RESULT_SECTION}`);
  }

  addEvent() {
    this.$tabContainer.addEventListener('click', this.clickButton.bind(this));
  }

  clickButton(e) {
    const { id } = e.target;

    if (id === ID.CREW_TAB) {
      new CrewSelect(
        this.$selectSection,
        this.$manageSection,
        this.$resultSection
      );
    }
    if (id === ID.TEAM_TAB) {
      //
    }
  }
}

export default App;
