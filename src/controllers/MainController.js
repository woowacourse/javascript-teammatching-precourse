import { $ } from '../utils/dom.js';

import LayoutView from '../views/LayoutView.js';
import TabView from '../views/TabView.js';

export default {
  init() {
    LayoutView.setup($('#app'));
    TabView.setup($('#tab-view')).on('@changeTab', (e) => this.onChangeTabView(e.detail.tab));

    this.selectedTab = '크루 관리';
  },

  onChangeTabView(tab) {
    this.selectedTab = tab;
  },
};
