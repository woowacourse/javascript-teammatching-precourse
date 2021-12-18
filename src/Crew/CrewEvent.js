import { CREW_BACK, CREW_FRONT, ERROR_MESSAGE } from '../utils/constants.js';
import CrewCheck from './CrewCheck.js';
// eslint-disable-next-line import/no-cycle
import CrewView from './CrewView.js';
import { HTML_OF_FRONT_CREW_INPUT, HTML_OF_BACK_CREW_INPUT, HTML_OF_CREW_TABLE, HTML_OF_FRONT_CHECKED_RADIO, HTML_OF_HEADER, HTML_OF_BACK_CHECKED_RADIO } from '../utils/html.js';

export default class CrewEvent {
  static addEvent() {
    this.addRadioEvent();
  }

  static addCrewEvent() {
    document.getElementById('add-crew-buttton').addEventListener('click', (e) => {
      e.preventDefault();
      const name = document.getElementById('crew-name-input').value;
      const crewCheck = new CrewCheck(name);

      this.checkResult(crewCheck, name);
    });
  }

  static checkResult(crewCheck, name) {
    if (crewCheck.checkAll()) {
      this.checkFrontBack(name);
    } else {
      alert(ERROR_MESSAGE);
    }
  }

  static checkFrontBack(name) {
    if (this.getCourse() === 'frontend') {
      this.storeFrontCrew(name, this.getCourse());
      CrewView.showFrontTable();
    } else if (this.getCourse() === 'backend') {
      this.storeBackCrew(name, this.getCourse());
      CrewView.showBackTable();
    }
  }

  static getCourse() {
    const courseLength = document.getElementsByName('course').length;
    let courseType = '';

    for (let i = 0; i < courseLength; i += 1) {
      if (document.getElementsByName('course')[i].checked === true) {
        courseType = document.getElementsByName('course')[i].value;
        return courseType;
      }
    }
  }

  static storeFrontCrew(name, course) {
    const crew = JSON.parse(localStorage.getItem(CREW_FRONT));

    if (localStorage.getItem(CREW_FRONT) === null) {
      localStorage.setItem(CREW_FRONT, JSON.stringify({ [name]: { course } }));
    } else {
      crew[name] = { course };
      localStorage.setItem(CREW_FRONT, JSON.stringify(crew));
    }
  }

  static storeBackCrew(name, course) {
    const crew = JSON.parse(localStorage.getItem(CREW_BACK));

    if (localStorage.getItem(CREW_BACK) === null) {
      localStorage.setItem(CREW_BACK, JSON.stringify({ [name]: { course } }));
    } else {
      crew[name] = { course };
      localStorage.setItem(CREW_BACK, JSON.stringify(crew));
    }
  }

  static addRadioEvent() {
    document.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = e.target.id;

      if (targetId === 'frontend-course') {
        document.getElementById('app').innerHTML = HTML_OF_HEADER + HTML_OF_FRONT_CHECKED_RADIO + HTML_OF_FRONT_CREW_INPUT + HTML_OF_CREW_TABLE;

        this.checkCanShowFront();
        this.addCrewEvent();
      }

      if (targetId === 'backend-course') {
        document.getElementById('app').innerHTML = HTML_OF_HEADER + HTML_OF_BACK_CHECKED_RADIO + HTML_OF_BACK_CREW_INPUT + HTML_OF_CREW_TABLE;

        this.checkCanShowBack();
        this.addCrewEvent();
      }
    });
  }

  static checkCanShowFront() {
    if (localStorage.getItem(CREW_FRONT) !== null) {
      CrewView.showFrontTable();
    }
  }

  static checkCanShowBack() {
    if (localStorage.getItem(CREW_BACK) !== null) {
      CrewView.showBackTable();
    }
  }
}
