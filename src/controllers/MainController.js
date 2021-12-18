import { $ } from '../utils/dom.js';

import LayoutView from '../views/LayoutView.js';
import TabView from '../views/TabView.js';
import CrewManageView from '../views/CrewManageView.js';
import MatchingManageView from '../views/MatchingManageView.js';

import CrewManageModel from '../models/CrewManageModel.js';

export default {
  init() {
    LayoutView.setup($('#app'));
    TabView.setup($('#tab-view')).on('@changeTab', (e) => this.onChangeTabView(e.detail.tab));
    CrewManageView.setup($('main'))
      .on('@changeCourse', (e) => this.onChangeCourse(e.detail.course))
      .on('@submitCrewName', (e) => this.onSubmitCrew(e.detail))
      .on('@deleteCrew', (e) => this.onDeleteCrew(e.detail));
    MatchingManageView.setup($('main')).on('@submitCourseAndMission', (e) =>
      this.onSubmitCourseAndMission(e.detail),
    );
    this.selectedTab = '크루 관리';
    this.renderView();
  },

  renderView() {
    switch (this.selectedTab) {
      case '크루 관리':
        CrewManageView.render();
        break;
      case '팀 매칭 관리':
        MatchingManageView.render();
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
    CrewManageView.render();
  },

  onSubmitCrew(crew) {
    CrewManageModel.add(crew);
    this.renderView();
  },

  onDeleteCrew(crew) {
    const confirmFlag = confirm('정말 삭제하시겠습니까?');
    if (!confirmFlag) {
      return;
    }
    CrewManageModel.delete(crew);
    this.renderView();
  },

  onSubmitCourseAndMission({ course, mission }) {
    MatchingManageView.setCourse(course);
    MatchingManageView.setMission(mission);
  },
};
