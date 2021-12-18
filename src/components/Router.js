import Component from '../core/Component.js';

export default class Router extends Component {
  render() {
    this.switchRoute();
  }

  switchRoute() {
    const location = this.getLocation();

    [...this.$target.children].forEach((child) => {
      const { style, dataset } = child;
      const { path } = dataset;

      style.display = path === location ? null : 'none';
    });
  }

  getLocation() {
    const { location } = this.props;

    return location;
  }
}
