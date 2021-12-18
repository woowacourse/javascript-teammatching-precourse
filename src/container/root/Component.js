import util from '../../common/index.js';

const { $ } = util.dom;

export default class Component {
  constructor(selector, props) {
    this.$element = $(selector);
    this.$props = props;

    this.initialized();
    this.render();
  }

  initialized() {}

  template() {
    return ``;
  }

  render() {
    this.$element.innerHTML = this.template();
    this.mount();
  }

  mount() {}
}
