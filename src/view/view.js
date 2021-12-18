import { $ } from '../utils/selector.js';
import CREW from '../model/crew.js';
import TEAM from '../model/team.js';
import { Td, Tr, TdButton, ButtonById, Header, Div } from '../component/component.js';

export default class View {
  constructor(controller) {
    this.app = $('#app');
    this.crewTab = ButtonById('크루관리','crew-tab');
    this.teamTab = ButtonById('팀 매칭 관리', 'team-tab');
    this.crewMainSection = Div(CREW);
    this.teamMainSection = Div(TEAM);
    this.tbody = null;
    this.table = null;
    this.controller = controller
    this.init();
  }
  
  init() {
    this.Header = Header([this.crewTab, this.teamTab]);
    this.app.append(this.Header, this.crewMainSection, this.teamMainSection);
    this.buttonHandler();
    $('#frontend-course').checked = true;
    this.table = $('#crew-table');
    this.tbody = $('#crew-tbody');
    this.cleantable();
    this.hideAllSection();
    this.showCrewSection();
  }

  hideAllSection() {
    this.crewMainSection.style.display = 'none';
    this.teamMainSection.style.display = 'none';
  }

  showCrewSection() {
    this.crewMainSection.style.display = 'block';
  }

  showTeamSection() {
    this.teamMainSection.style.display = 'block';
  }

  crewTapHandler() {
    this.crewTab.addEventListener('click', e => {
      e.preventDefault();
      this.hideAllSection();
      this.showCrewSection();
    });
  }

  teamTapHandler() {
    this.teamTab.addEventListener('click', e => {
      e.preventDefault();
      this.hideAllSection();
      this.showTeamSection();
    });
  }
  
  buttonHandler() {
    this.crewTapHandler();
    this.teamTapHandler();
    this.frontendRadioHandler();
    this.backendRadioHandler();
    this.nameButtonHandler();
    this.selectButtonHandler();
    this.matchButtonHandler();
  }
  
  frontendRadioHandler() {
    $('#frontend-course').addEventListener('click', e => {
      $('#crew-subtitle-manage').innerHTML = '프론트엔드 크루 관리'; 
      $('#crew-subtitle-list').innerHTML = '프론트엔드 크루 목록';
      this.controller.showFrontendList();
    })
  }

  backendRadioHandler() {
    $('#backend-course').addEventListener('click', e => {
      $('#crew-subtitle-manage').innerHTML = '백엔드 크루 관리';
      $('#crew-subtitle-list').innerHTML = '백엔드 크루 목록';
      this.controller.showBackendList();
    })
  }

  nameButtonHandler() {
    $('#add-crew-button').addEventListener('click', e => {
      e.preventDefault();
      this.controller.addCrew($('#crew-name-input').value, $('#frontend-course').checked);
    })
  }

  selectButtonHandler() {
    $('#show-team-matcher-button').addEventListener('click', e => {
      e.preventDefault();
      this.controller.shuffleTeam();
    //   console.log);
    //   console.log();
    })
  }

  matchButtonHandler() {
    $('#match-team-button').addEventListener('click', e => {
      e.preventDefault();
      const course = $('#course-select').value;
      const mission = $('#mission-select').value;
      const groupNumber = $('#team-member-count-input').value;
      this.controller.shuffleTeam(course, mission, groupNumber);
    })
  }

  showCrewListAll(crews, isFront) {
    this.cleantable();
    if (crews.length > 0) {
      for (let i = 0; i < crews.length; i += 1) {
        this.attachNewCrew(i+1, crews[i], isFront);
      }
    }
    this.table.appendChild(this.tbody);
  }

  cleantable() {
    this.tbody.innerHTML = ``;
  }

  attachNewCrew(index, crew, isFront) {
    const crewTr = Tr([
        Td(index),
        Td(crew),
        TdButton(this.controller, crew, isFront),
    ]);
    this.tbody.appendChild(crewTr);
  }


}
