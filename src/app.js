import crewView from './view/crewView.js';
import crewController from './controller/crewController.js';
import { $, $$, hideCrewManage, showSelectManageCourse } from './utils/dom.js';

class App {
  constructor() {
    this.initView();
    this.renderTab();
    this.renderCrewView();
    this.initController();
    this.bindEvent();
  }

  initView() {
    this.crewView = new crewView();
  }

  initController() {
    this.crewController = new crewController(this.crewView);
  }

  renderTab() {
    $('#app').insertAdjacentHTML('beforeend', this.template());
  }

  renderCrewView() {
    $('main').insertAdjacentHTML('beforeend', this.crewView.manageCourseTemplate());
    $('main').insertAdjacentHTML('beforeend', this.crewView.manageCrewTemplate());
    $('main').insertAdjacentHTML('beforeend', this.crewView.crewListTemplate());
    hideCrewManage();
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
    $('#crew-tab').addEventListener('click', showSelectManageCourse);
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
