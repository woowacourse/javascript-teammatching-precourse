import CrewPresent from '../crewManage/present.js';
import TabPresent from '../tab/present.js';
import TeamPresent from '../teamMaching/present.js';

export default class InitPresent {
  constructor() {
    this.$crewDiv = new CrewPresent();
    this.$teamDiv = new TeamPresent();
    this.$tabDiv = new TabPresent();
    this.$body = document.querySelector('body');
    this.setClickEvent();
  }

  setClickEvent() {
    this.setCrewDiv();
    this.setTeamDiv();

    this.$crewDiv = document.querySelector('#crew-div');
    this.$teamDiv = document.querySelector('#team-div');

    this.$crewDiv.style.visibility = 'visible';
    this.$teamDiv.style.visibility = 'hidden';
    this.$body.insertBefore(this.$crewDiv, this.$body.childNodes[1]);
  }

  setCrewDiv() {
    console.log(this.$tabDiv.crewBtn);
    this.$tabDiv.crewBtn.addEventListener('click', e => {
      e.preventDefault();
      console.log('click');

      this.$crewDiv.style.visibility = 'visible';
      this.$teamDiv.style.visibility = 'hidden';

      this.$body.insertBefore(this.$crewDiv, this.$body.childNodes[1]);
    });
  }

  setTeamDiv() {
    console.log(this.$tabDiv.teamBtn);
    this.$tabDiv.teamBtn.addEventListener('click', e => {
      console.log('click');
      e.preventDefault();

      this.$teamDiv.style.visibility = 'visible';
      this.$crewDiv.style.visibility = 'hidden';

      this.$body.insertBefore(this.$teamDiv, this.$body.childNodes[1]);
    });
  }
}
