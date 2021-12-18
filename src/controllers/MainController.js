import CrewManageModel from '../models/CrewManageModel.js';
import { $ } from '../utils/dom.js';

import CrewManageView from '../views/CrewManageView.js';
import LayoutView from '../views/LayoutView.js';
import TabView from '../views/TabView.js';

export default {
  init() {
    LayoutView.setup($('#app'));
    TabView.setup($('#tab-view')).on('@changeTab', (e) => this.onChangeTabView(e.detail.tab));
    CrewManageView.setup($('main'))
      .on('@changeCourse', (e) => this.onChangeCourse(e.detail.course))
      .on('@submitCrewName', (e) => this.onSubmitCrew(e.detail));

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

  onChangeCourse(course) {
    CrewManageView.setCourse(course);
  },

  onSubmitCrew(crew) {
    CrewManageModel.add(crew);
  },
};
