import { DOM, MODEL_KEYS, PLAIN_TEXT } from '../../lib/constants.js';
import Model from './Model.js';
export const INPUTS_DATA_KEY = {
  [`${DOM.CREW_NAME_INPUT_ID}`]: 'crew-name',
  [`${DOM.COURSE_RADIO_NAME}`]: 'radio-name',
};
class Inputs extends Model {
  constructor(previousData) {
    super({ previousData, modelName: MODEL_KEYS.INPUTS });
  }

  generateDefaultValue() {
    return {
      [`${INPUTS_DATA_KEY[DOM.CREW_NAME_INPUT_ID]}`]: PLAIN_TEXT,
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
      radioName: this.getDataByKey(INPUTS_DATA_KEY[DOM.COURSE_RADIO_NAME]),
    };
  }
}
export default Inputs;
