import CrewPresent from '../crewManage/present.js';
import TabPresent from '../tab/present.js';
import TeamPresent from '../teamMaching/present.js';
import CrewController from '../crewManage/Controller.js';
import TeamController from '../teamMaching/Controller.js';

export default class InitPresent {
  constructor() {
    this.$teamDiv = new TeamPresent();
    this.$crewDiv = new CrewPresent();
    this.$tabDiv = new TabPresent();
    this.crewCon = new CrewController();
    this.teamCon = new TeamController();
    this.$app = document.querySelector('#app');
    this.$crewSection = document.querySelector('#crew-section');
    this.$teamSection = document.querySelectorAll('.team-section');
    this.setClickEvent();
  }

  setClickEvent() {
    this.setCrewDiv();
    this.setTeamDiv();

    this.$crewDiv = document.querySelector('#crew-div');
    this.$teamDiv = document.querySelector('#team-div');

    this.$crewDiv.style.visibility = 'visible';
    this.$teamDiv.style.visibility = 'hidden';
    this.$app.insertBefore(this.$crewDiv, this.$app.childNodes[1]);
  }

  setCrewDiv() {
    this.$tabDiv.crewBtn.addEventListener('click', e => {
      e.preventDefault();

      this.$crewDiv.style.visibility = 'visible';
      this.$crewSection.style.visibility = 'visible';
      this.$teamDiv.style.visibility = 'hidden';
      this.$teamSection.forEach(section => {
        section.style.visibility = 'hidden';
      });

      this.$app.insertBefore(this.$crewDiv, this.$app.childNodes[1]);
    });
  }

  setTeamDiv() {
    this.$tabDiv.teamBtn.addEventListener('click', e => {
      e.preventDefault();

      this.teamCon.addPeopleList(this.crewCon.getPeopleList());
      this.$teamDiv.style.visibility = 'visible';
      this.$crewSection.style.visibility = 'hidden';
      this.$crewDiv.style.visibility = 'hidden';

      this.$app.insertBefore(this.$teamDiv, this.$app.childNodes[1]);
    });
  }
}
