import Component from './component.js';
import Store from '../flux/store.js';

class FluxComponent extends Component {
  constructor($container) {
    super($container);
    this.store = Store.instance;
  }

  mount() {
    super.mount();
    this.unsubscribe = this.store.subscribe(this);
    return this;
  }

  unmount() {
    super.unmount();
    this.unsubscribe();
  }

  shouldNotify() {
    return true;
  }

  notify() {}
}

export default FluxComponent;
