import CrewView from './view/crewView.js';
import CrewController from './controller/crewController.js';
import {
  $,
  $$,
  hideCrewManage,
  hideMatchingTab,
  showMatchingSelect,
  showSelectManageCourse,
} from './utils/dom.js';
import MatchingView from './view/matchingView.js';
import MatchingController from './controller/matchingController.js';

class App {
  constructor() {
    this.initView();
    this.renderTab();
    this.renderCrewView();
    this.initController();
    this.bindEvent();
  }

  initView() {
    this.crewView = new CrewView();
    this.matchingView = new MatchingView();
  }

  initController() {
    this.crewController = new CrewController(this.crewView);
    this.matchingController = new MatchingController(this.matchingView);
  }

  renderTab() {
    $('#app').insertAdjacentHTML('beforeend', this.template());
  }

  renderCrewView() {
    $('main').insertAdjacentHTML('beforeend', this.crewView.manageCourseTemplate());
    $('main').insertAdjacentHTML('beforeend', this.crewView.manageCrewTemplate());
    $('main').insertAdjacentHTML('beforeend', this.crewView.crewListTemplate());
    $('main').insertAdjacentHTML('beforeend', this.matchingView.matchingSelectTemplate());
    $('main').insertAdjacentHTML('beforeend', this.matchingView.matchingInputTemplate());
    $('main').insertAdjacentHTML('beforeend', this.matchingView.matchingResultTemplate());
    hideCrewManage();
    hideMatchingTab();
  }

  template() {
    return `
    <header>
      <h1>우테코 크루와 팀 매칭 관리 보드</h1>
      <nav>
        <ul>
          <li>
            <button id="crew-tab">크루 관리</button>
          </li>
          <li>
            <button id="team-tab">팀 매칭 관리</button>
          </li>
        </ul>
      </nav>
    </header>
    <main></main>    
  `;
  }

  bindEvent() {
    $('#crew-tab').addEventListener('click', () => {
      showSelectManageCourse();
      hideMatchingTab();
    });
    $('#team-tab').addEventListener('click', () => {
      showMatchingSelect();
      hideCrewManage();
    });
    this.preventFormsubmit();
  }

  preventFormsubmit() {
    $$('form').forEach((form) =>
      addEventListener('submit', (e) => {
        e.preventDefault();
      })
    );
  }
}

new App();
