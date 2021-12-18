import { ELEMENT_SELECTOR } from '../constants/index.js';
import { $ } from '../utils/index.js';
import FluxComponent from '../abstracts/fluxComponent.js';
import { tabContentTemplate } from '../templates/tabContent.js';
import CrewManage from './crew-manage/index.js';

class TabContent extends FluxComponent {
  activeTabPane = null;

  static template = () => tabContentTemplate();

  mountChildren() {
    const {CREW_MANAGE } = ELEMENT_SELECTOR.IDS;
    const { tabPane } = this.store.getState();
    if (this.activeTabPane) {
      this.activeTabPane.unmount();
    }
    if (tabPane.activeTabPaneId === CREW_MANAGE.PANE) {
      this.activeTabPane = new CrewManage(this.$view).mount();
    }
  }

  bindingElements() {
    this.$view = $(`#${ELEMENT_SELECTOR.IDS.TAB_CONTENT}`);
  }

  notify() {
    this.mountChildren();
  }
}

export default TabContent;
