import { CLASS, ID, LOCAL_DB, MESSAGE } from '../../constants/index.js';
import { getLocalStorage, saveLocalStorage } from '../../utils/localStorage.js';
import { $ } from '../../utils/selector.js';
import { crewTableContents, crewTableHeader } from '../../utils/template.js';

class CrewTable {
  constructor($target, courseName, state) {
    this.$target = $target;
    this.courseName = courseName;
    this.state = state;
    this.state.event.subscribe(this.render.bind(this));

    this.render();
  }

  render() {
    this.addTemplate();
    this.selectDom();
    this.addEvent();
  }

  addTemplate() {
    this.$target.innerHTML = `
    <h3>${this.courseName} 크루 목록</h3>
      <table border="1" id=${ID.CREW_TABLE}>
        <thead>
         ${crewTableHeader()}
        </thead>
        <tbody>
          ${crewTableContents(this.courseName)}
        </tbody>
      </table>
    `;
  }

  selectDom() {
    this.$tableContainer = $(`#${ID.CREW_TABLE}`);
  }

  addEvent() {
    this.$tableContainer.addEventListener('click', this.clickButton.bind(this));
  }

  clickButton(e) {
    if (!e.target.classList.contains(CLASS.DELETE_CREW_BUTTON)) {
      return;
    }
    if (!confirm(MESSAGE.DELETE_CONFIRM)) {
      return;
    }

    const tr = e.target.closest('tr');
    const index = Number(tr.children[0].dataset.index);
    this.updateLocalStorage(index);
    this.render();
  }

  updateLocalStorage(index) {
    if (this.courseName === '프론트엔드') {
      const crew = getLocalStorage(LOCAL_DB.CREW_FRONT);
      crew.splice(index, 1);
      saveLocalStorage(LOCAL_DB.CREW_FRONT, crew);
    }

    if (this.courseName === '백엔드') {
      const crew = getLocalStorage(LOCAL_DB.CREW_BACK);
      crew.splice(index, 1);
      saveLocalStorage(LOCAL_DB.CREW_BACK, crew);
    }
  }
}

export default CrewTable;
