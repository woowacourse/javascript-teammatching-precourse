import { COURSE, DOM, MODEL_KEYS, PLAIN_TEXT } from '../../lib/constants.js';
import Model from './Model.js';
export const INPUTS_DATA_KEY = {
  [`${COURSE.FRONTEND}`]: 'crew-name-frontend',
  [`${COURSE.BACKEND}`]: 'crew-name-backend',
  [`${DOM.COURSE_RADIO_NAME}`]: 'radio-name',
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
}
export default Inputs;
