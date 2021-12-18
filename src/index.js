import { $ } from './dom.js';
import { HEADER } from './markup.js';

export class Board {
  drawMainTitle(){
    $('#app').innerHTML += HEADER;
  }
}
const board = new Board();
board.drawMainTitle();