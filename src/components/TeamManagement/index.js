import Component from '../../core/Component.js';
import OptionSection from './OptionSection.js';
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
    ];
  }

  onChangeOption(course, mission) {
    this.setState({ course, mission });
  }
}
