import { ERROR } from "../utils/constant.js";

export default class TeamManage {
  constructor(crews, valid) {
    this.crews = crews   
    this.valid = valid
  }
  
  shuffleTeam(course, mission, groupNumber) {
    const crewNumber = this.crews.frontend.length;
    const isValid = this.valid.checkNumber(groupNumber,crewNumber);
    if(isValid) {
      console.log(MissionUtils.Random.shuffle(Array.from(Array(crewNumber).keys())));
    } else {
      alert(ERROR.GROUPNUMBERINPUT);
    }
  }
}