import Component from '../../essential/component.js';
import Header from './header.js';
import FrontMatching from './front-matching.js';
import FrontResult from './front-result.js';

const CONTENT = `
  <div data-component="header"></div>
  <div data-component="table"></div>
`;

export default class TeamMatching extends Component {
  template() {
    return CONTENT;
  }

  mounted() {
    this.$children.header = new Header(this.$('[data-component="header"]'), {
      selectCourseType: this.selectCourseType.bind(this),
    });
  }

  selectCourseType(sendInfo) {
    this.$children.frontMatching = new FrontMatching(this.$('[data-component="table"]'), {
      getResult: this.getResult.bind(this),
    });
    this.$children.frontMatching.setProps(sendInfo);
  }

  getResult(matchTeams) {
    this.$children.frontResult = new FrontResult(this.$('[data-component="table"]'));
    this.$children.frontResult.setProps(matchTeams);
  }
}
