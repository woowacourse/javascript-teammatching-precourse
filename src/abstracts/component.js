import { htmlToElement } from '../utils/index.js';

class Component {
  static template = () => '';

  constructor($container) {
    this.$container = $container;
  }

  mount() {
    this.$view = htmlToElement(this.constructor.template());
    this.render();
    this.registerEventListeners();
    this.mountChildren();
    return this;
  }

  unmount() {
    this.unmountChildren();
    this.$container.childNodes.forEach((node) => {
      if (node !== this.$view) {
        return;
      }
      this.$container.removeChild(node);
    });
  }

  render() {
    this.$container.childNodes.forEach((node) => {
      if (node !== this.$view) {
        return;
      }
      this.$container.removeChild(node);
    });
    this.$container.appendChild(this.$view);
    this.bindingElements();
  }

  bindingElements() {}

  registerEventListeners() {}

  mountChildren() {}

  unmountChildren() {}
}

export default Component;
