import Component from '../abstracts/component.js';
import { ELEMENT_SELECTOR } from '../constants/index.js';
import { $ } from '../utils/index.js';
import { headerTemplate } from '../templates/header.js';
import { updateActiveTabPaneAction } from '../reducers/tabPaneReducer.js';
import Store from '../flux/store.js';

class Header extends Component {
  static template = () => headerTemplate();

  registerEventListeners() {
    const { TAB_MENU } = ELEMENT_SELECTOR.IDS;
    $(`#${TAB_MENU}`).addEventListener('click', (e) => this.handleClickTabMenuButton(e));
  }

  handleClickTabMenuButton(e) {
    if (e.target.tagName !== 'BUTTON') {
      return;
    }
    const activeTabPaneId = e.target.getAttribute('data-tab-pane-id');
    Store.instance.dispatch(updateActiveTabPaneAction(activeTabPaneId));
  }
}

export default Header;
