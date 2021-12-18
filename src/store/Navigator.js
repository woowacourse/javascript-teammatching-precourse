import Store from '../core/Store.js';
import { TAB } from '../constant/data.js';

class Navigator extends Store {
  init() {
    this.value = {
      focusedTab: TAB.CREW,
    };
  }

  navigateTo(newFocusedTab) {
    this.setValue({ focusedTab: newFocusedTab });
    // console.log(newFocusedTab);
  }
}

export default new Navigator();
