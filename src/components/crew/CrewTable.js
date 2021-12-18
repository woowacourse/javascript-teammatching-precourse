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
  }

  addTemplate() {
    this.$target.innerHTML = `
    <h3>${this.courseName} 크루 목록</h3>
      <table border="1">
        <thead>
         ${crewTableHeader()}
        </thead>
        <tbody>
          ${crewTableContents(this.courseName)}
        </tbody>
      </table>
    `;
  }
}

export default CrewTable;
