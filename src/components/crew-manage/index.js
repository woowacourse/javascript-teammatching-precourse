import Component from '../../essential/component.js';
import FrontManage from './front-manage.js';
import Header from './header.js';
import FrontTable from './front-table.js';

const CONTENT = `
  <div data-component="header"></div>
  <div data-component="table"></div>
`;

export default class CrewManage extends Component {
  template() {
    return CONTENT;
  }

  mounted() {
    this.$children.header = new Header(this.$('[data-component="header"]'), {
      selectCourseType: this.selectCourseType.bind(this),
    });
  }

  selectCourseType(course) {
    if (course == 'frontend') {
      this.$children.addCrew = new FrontManage(this.$('[data-component="table"]'), {
        sendCrew: this.sendCrew.bind(this),
      });
      this.$children.frontTable = new FrontTable(this.$('[data-component="table"]'));
    }
  }

  sendCrew(crew) {
    this.$children.frontTable.setProps({ crew });
  }
}
