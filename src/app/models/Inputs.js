import {
  COURSE,
  COURSE_SELECT_MAP,
  DOM,
  MISSION_SELECT_MAP,
  MODEL_KEYS,
  PLAIN_TEXT,
} from '../../lib/constants.js';
import Model from './Model.js';
export const INPUTS_DATA_KEY = {
  [`${COURSE.FRONTEND}`]: 'crew-name-frontend',
  [`${COURSE.BACKEND}`]: 'crew-name-backend',
  [`${DOM.COURSE_RADIO_NAME}`]: 'radio-name',
  [`${DOM.MISSION_SELECT_ID}`]: 'mission-select',
  [`${DOM.COURSE_SELECT_ID}`]: 'course-select',
  [`${DOM.TEAM_MEMBER_COUNT_INPUT_ID}`]: 'team-member-count-input',
};
class Inputs extends Model {
  constructor(previousData) {
    super({ previousData, modelName: MODEL_KEYS.INPUTS });
  }

  generateDefaultValue() {
    return {
      [`${INPUTS_DATA_KEY[COURSE.FRONTEND]}`]: PLAIN_TEXT,
      [`${INPUTS_DATA_KEY[COURSE.BACKEND]}`]: PLAIN_TEXT,
      [`${INPUTS_DATA_KEY[DOM.COURSE_RADIO_NAME]}`]: PLAIN_TEXT,
      [`${INPUTS_DATA_KEY[DOM.MISSION_SELECT_ID]}`]: MISSION_SELECT_MAP.베이스볼,
      [`${INPUTS_DATA_KEY[DOM.COURSE_SELECT_ID]}`]: COURSE_SELECT_MAP.프론트엔드,
      [`${INPUTS_DATA_KEY[DOM.TEAM_MEMBER_COUNT_INPUT_ID]}`]: PLAIN_TEXT,
    };
  }

  setInputByIdAttribute(id, value) {
    this.setDataByKey(INPUTS_DATA_KEY[id], value);
  }

  setInputByNameAttribute(name, value) {
    this.setDataByKey(INPUTS_DATA_KEY[name], value);
  }

  getCrewInputsModel() {
    return {
      courseName: this.getDataByKey(INPUTS_DATA_KEY[DOM.COURSE_RADIO_NAME]),
      frontendInput: this.getDataByKey(INPUTS_DATA_KEY[COURSE.FRONTEND]),
      backendInput: this.getDataByKey(INPUTS_DATA_KEY[COURSE.BACKEND]),
    };
  }

  getCourseAndMissionInput() {
    return {
      course: this.getDataByKey(INPUTS_DATA_KEY[DOM.COURSE_SELECT_ID]),
      mission: this.getDataByKey(INPUTS_DATA_KEY[DOM.MISSION_SELECT_ID]),
    };
  }

  getTeamMemberCountInput() {
    return {
      count: this.getDataByKey(INPUTS_DATA_KEY[DOM.TEAM_MEMBER_COUNT_INPUT_ID]),
    };
  }
}
export default Inputs;
