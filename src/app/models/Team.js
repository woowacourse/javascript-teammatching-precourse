import { COURSE_SELECT_MAP, MISSION_SELECT_MAP, MODEL_KEYS } from '../../lib/constants.js';
import Model from './Model.js';

class Team extends Model {
  constructor(previousData) {
    super({ previousData, modelName: MODEL_KEYS.TEAM });
  }

  generateDefaultValue() {
    return {
      [`${COURSE_SELECT_MAP.프론트엔드}-${MISSION_SELECT_MAP.결제}`]: null,
      [`${COURSE_SELECT_MAP.프론트엔드}-${MISSION_SELECT_MAP.베이스볼}`]: null,
      [`${COURSE_SELECT_MAP.프론트엔드}-${MISSION_SELECT_MAP.레이싱카}`]: null,
      [`${COURSE_SELECT_MAP.프론트엔드}-${MISSION_SELECT_MAP.로또}`]: null,
      [`${COURSE_SELECT_MAP.프론트엔드}-${MISSION_SELECT_MAP.장바구니}`]: null,
      [`${COURSE_SELECT_MAP.프론트엔드}-${MISSION_SELECT_MAP.지하철노선도}`]: null,
      [`${COURSE_SELECT_MAP.프론트엔드}-${MISSION_SELECT_MAP.퍼포먼스}`]: null,
      [`${COURSE_SELECT_MAP.백엔드}-${MISSION_SELECT_MAP.결제}`]: null,
      [`${COURSE_SELECT_MAP.백엔드}-${MISSION_SELECT_MAP.베이스볼}`]: null,
      [`${COURSE_SELECT_MAP.백엔드}-${MISSION_SELECT_MAP.레이싱카}`]: null,
      [`${COURSE_SELECT_MAP.백엔드}-${MISSION_SELECT_MAP.로또}`]: null,
      [`${COURSE_SELECT_MAP.백엔드}-${MISSION_SELECT_MAP.장바구니}`]: null,
      [`${COURSE_SELECT_MAP.백엔드}-${MISSION_SELECT_MAP.지하철노선도}`]: null,
      [`${COURSE_SELECT_MAP.백엔드}-${MISSION_SELECT_MAP.퍼포먼스}`]: null,
    };
  }

  getTeam(course, mission) {
    return this.getDataByKey(`${course}-${mission}`);
  }

  makeTeam(crewList, count) {
    const teamCount = Math.ceil(crewList.length / count);
    const shuffled = MissionUtils.Random.shuffle([...crewList.map((_, idx) => idx)]);
    console.log(teamCount);
  }

  setTeam(course, mission, team) {
    this.setDataByKey(`${course}-${mission}`, team);
  }
}
export default Team;
