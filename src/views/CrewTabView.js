import crewTabTemplate from '../templates/crew-tab-template.js';

export default class CrewTabView {
  constructor() {
    this.contentContainer = document.querySelector('#content-container');
  }

  initialRender() {
    this.contentContainer.innerHTML = crewTabTemplate.main;
  }
}
