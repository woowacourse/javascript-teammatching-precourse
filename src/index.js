import Controller from './crewManage/Controller.js';
import InitPresent from './storage/initPresent.js';

export default class Final {
  constructor() {
    this.init = new InitPresent();
    this.controll = new Controller();
  }
}

const finalProject = new Final();
