import { getLocalStorage } from '../../store.js';
import { woowaCrew } from '../../woowaCrew.js';
import { alertNameError, isValidName } from '../../validation.js';

export default function CrewNameForm(container) {
  this.template = (course) => {
    return `
          <h3>${course} 크루 관리</h3>
          <form>
            <label>크루 이름</label>
            <input type="text" id="crew-name-input"/>
            <button id="add-crew-button">확인</button>
          </form>
        `;
  };

  this;

  this.addEvent = (course) => {
    const addCrewButton = document.querySelector('#add-crew-button');
    addCrewButton.addEventListener('click', (e) => {
      e.preventDefault();
      const crewName = document.querySelector('#crew-name-input').value;

      if (!isValidName(getLocalStorage(course), crewName)) {
        alertNameError(getLocalStorage(course), crewName);
        return;
      }
      woowaCrew.addCrew(course, crewName);
    });
  };

  this.render = (course) => {
    container.innerHTML = this.template(course);
    this.addEvent(course);
  };
}
