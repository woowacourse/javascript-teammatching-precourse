import Storage from '../../store/Storage.js';
import { $, $addEvent } from '../../common/dom.js';

export default class Component {
  constructor(selector, props) {
    this.$element = $(selector);
    this.$props = props;
    this.$storage = Storage;
    this.$storage.subscribe(this.render.bind(this));

    this.initialized();
    this.render();
    this.setEvents();
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

  eventSetter() {
    return [];
  }

  setEvents() {
    const registed = this.eventSetter();
    registed.forEach(({ type, callback, $element }) => {
      $addEvent($element || this.$element, type, callback);
    });
  }
}
