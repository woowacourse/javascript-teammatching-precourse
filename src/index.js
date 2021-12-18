import { $ } from './dom.js';
import { HEADER, MAIN } from './markup.js';
import DrawCrewTabContent from './components/drawCrewTabContent.js';
import DrawTeamTabContent from './components/drawTeamTabContent.js';

let frontEndCrew = [];
let backEndCrew = [];
export default {frontEndCrew,backEndCrew};

export class Board {
  drawMainTitle(){
    $('#app').innerHTML += HEADER;
    $('#app').innerHTML += MAIN;
  }
  tabButtonsEventListener() {
    $('#crew-tab').addEventListener('click',DrawCrewTabContent);
    $('#team-tab').addEventListener('click',DrawTeamTabContent);
  }
  crewListCheck() {
    if (localStorage.getItem('frontend')) {
      frontEndCrew = JSON.parse(localStorage.getItem('frontend'));
    }
    else {
      localStorage.setItem('frontend', JSON.stringify(frontEndCrew));
    }
    if (localStorage.getItem('backend')) {
      backEndCrew = JSON.parse(localStorage.getItem('backend'));
    }
    else {
      localStorage.setItem('backend', JSON.stringify(backEndCrew));
    }
  }
  start() {
    this.drawMainTitle();
    this.tabButtonsEventListener();
    this.crewListCheck();
  }
}
const board = new Board();
board.start();