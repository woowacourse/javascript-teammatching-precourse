import { ELEMENT_SELECTOR } from '../constants/index.js';
import { $ } from '../utils/index.js';
import FluxComponent from '../abstracts/fluxComponent.js';
import { tabContentTemplate } from '../templates/tabContent.js';

class TabContent extends FluxComponent {
  activeTabPane = null;

  static template = () => tabContentTemplate();

  mountChildren() {
    const { tabPane } = this.store.getState();
    if (this.activeTabPane) {
      this.activeTabPane.unmount();
    }
  }

  bindingElements() {
    this.$view = $(`.${ELEMENT_SELECTOR.IDS.TAB_CONTENT}`);
  }

  notify() {
    this.mountChildren();
  }
}

export default TabContent;
