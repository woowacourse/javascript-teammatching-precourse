import { $ } from './dom.js';
import { HEADER, MAIN } from './markup.js';
import DrawCrewTabContent from './components/drawCrewTabContent.js';
import DrawTeamTabContent from './components/drawTeamTabContent.js';

export class Board {
  drawMainTitle(){
    $('#app').innerHTML += HEADER;
    $('#app').innerHTML += MAIN;
  }
  tabButtonsEventListener() {
    $('#crew-tab').addEventListener('click',DrawCrewTabContent);
    $('#team-tab').addEventListener('click',DrawTeamTabContent);
  }
  start() {
    this.drawMainTitle();
    this.tabButtonsEventListener();
  }
}
const board = new Board();
board.start();