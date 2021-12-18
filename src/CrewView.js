import { HTML_OF_HEADER, HTML_OF_CREW_RADIO, HTML_OF_CREW_TABLE } from './utils/html.js';

export default class CrewView {
  static render() {
    this.showPage();
  }

  static showPage() {
    document.getElementById('app').innerHTML = HTML_OF_HEADER + HTML_OF_CREW_RADIO;
  }

  static showFrontTable() {
    const crewFront = JSON.parse(localStorage.getItem('CrewFront'));

    document.getElementById('crew-table').innerHTML = `${HTML_OF_CREW_TABLE}
            ${Object.keys(crewFront)
              .map(
                (name, index) => `            
            <tr class="product-manage-item">
            <td>${index + 1}</td>
            <td>${name}</td>
            <td>
              <button id="delete-crew-buttton">삭제</button>
            </td>
            </tr>`
              )
              .join('')}`;
  }

  static showBackTable() {
    const crewBack = JSON.parse(localStorage.getItem('CrewBack'));

    document.getElementById('crew-table').innerHTML = `${HTML_OF_CREW_TABLE}
        ${Object.keys(crewBack)
          .map(
            (name, index) => `            
        <tr class="product-manage-item">
        <td>${index + 1}</td>
        <td class="name" data-name="${name}">${name}</td>
        <td>
          <button class="delete-button" id="delete-crew-buttton">삭제</button>
        </td>
        </tr>`
          )
          .join('')}`;
  }
}
