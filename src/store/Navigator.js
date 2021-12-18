import Store from '../core/Store.js';
import { saveToStorage, loadFromStorage } from '../utils/storage.js';
import { TAB } from '../constant/data.js';
import STORAGE from '../constant/storage.js';

class Navigator extends Store {
  init() {
    this.load();
  }

  load() {
    const loadedNavigator = loadFromStorage(STORAGE.NAVIGATOR);

    if (loadedNavigator !== null) {
      this.value = loadedNavigator;
    } else {
      this.value = {
        focusedTab: TAB.CREW,
      };
    }
  }

  save() {
    saveToStorage(STORAGE.NAVIGATOR, this.value);
  }

  navigateTo(newFocusedTab) {
    this.setValue({ focusedTab: newFocusedTab });
    this.save();
  }
}

export default new Navigator();
