import Component from '../core/Component.js';

export default class Main extends Component {
  render() {
    this.$container.innerHTML = `${this.props.selectedMenu}`;
  }
}
