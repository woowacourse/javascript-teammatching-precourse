import { $, showBECrewManage, showFECrewManage } from '../utils/dom.js';

class crewController {
  constructor(view) {
    this.view = view;
    this.bindEvent();
  }

  test() {
    if ($('#frontend-course').checked) {
      console.log(this.view.getInput());
    }
    if ($('#backend-course').checked) {
      console.log(this.view.getInput());
    }
  }

  bindEvent() {
    $('#frontend-course').addEventListener('click', showFECrewManage);
    $('#backend-course').addEventListener('click', showBECrewManage);
    $('#add-crew-buttton').addEventListener('click', this.test.bind(this));
  }
}

export default crewController;
