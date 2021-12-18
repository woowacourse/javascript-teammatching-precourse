import { $, showMatchingInput } from '../utils/dom.js';

class matchingController {
  constructor(view) {
    this.view = view;
    this.bindEvent();
  }

  bindEvent() {
    $('#show-team-matcher-button').addEventListener('click', () => {
      showMatchingInput();
      this.view.renderMatchingInput();
    });
  }
}

export default matchingController;
