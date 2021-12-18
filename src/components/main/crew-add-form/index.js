import Component from '../../../core/Component.js';
import CrewTable from '../crew-table/index.js';
import { ID, COURSE_TYPE } from '../../../constants/index.js';

export default class CrewAddForm extends Component {
  template() {
    return `
      <section>
        <h3>${COURSE_TYPE[this.$props.type]} 크루 관리</h3>
        <form>
          <label>크루 이름</label>
          <input type="text" id=${ID.CREW_NAME_INPUT} />
          <button id=${ID.ADD_CREW_BUTTON}>확인</button>
        </form>
      </section>
      <section data-component="crew-table"></section>
    `;
  }

  mounted() {
    const { data, type } = this.$props;

    const $crewTable = this.$target.querySelector('[data-component="crew-table"]');
    new CrewTable($crewTable, { type, data: data[type] });
  }

  setEvent() {
    const { type, addCrew } = this.$props;

    this.addEvent('click', `#${ID.ADD_CREW_BUTTON}`, () => {
      const $name = this.$target.querySelector(`#${ID.CREW_NAME_INPUT}`).value;
      addCrew(type, $name);
    });
  }
}
