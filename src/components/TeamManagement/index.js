import Component from '../../core/Component.js';
import OptionSection from './OptionSection.js';
import TeamMatchingStatus from './TeamMatchingStatus.js';
import { newElement } from '../../utils/dom.js';

export default class TeamManagement extends Component {
  initState() {
    this.state = {
      course: '',
      mission: '',
    };
  }

  initChildren() {
    this.children = [
      new OptionSection(newElement('<section id="option-section"/>'), {
        onChangeOption: (course, mission) =>
          this.onChangeOption(course, mission),
      }),
      new TeamMatchingStatus(
        newElement('<section id="team-status-section"/>'),
        {
          course: this.state.course,
          mission: this.state.mission,
        }
      ),
    ];
  }

  onChangeOption(course, mission) {
    this.setState({ course, mission });
  }
}
