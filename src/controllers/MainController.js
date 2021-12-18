import { $ } from '../utils/dom.js';

import CrewManageView from '../views/CrewManageView.js';
import LayoutView from '../views/LayoutView.js';
import TabView from '../views/TabView.js';

export default {
  init() {
    LayoutView.setup($('#app'));
    TabView.setup($('#tab-view')).on('@changeTab', (e) => this.onChangeTabView(e.detail.tab));
    CrewManageView.setup($('main'));

    this.selectedTab = '크루 관리';
    this.renderView();
  },

  renderView() {
    switch (this.selectedTab) {
      case '크루 관리':
        CrewManageView.render();
        break;
      default:
        break;
    }
  },

  onChangeTabView(tab) {
    this.selectedTab = tab;
    this.renderView();
  },
};
