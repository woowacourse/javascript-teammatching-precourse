import { MODEL_KEYS, TAB } from '../../lib/constants.js';
import Model from './Model.js';
export const GLOBAL_DATA_KEYS = {
  TAB: 'tab',
};
class Global extends Model {
  constructor(previousData) {
    super({ previousData, modelName: MODEL_KEYS.GLOBAL });
  }

  generateDefaultValue() {
    return {
      [`${GLOBAL_DATA_KEYS.TAB}`]: TAB.DEFAULT,
    };
  }

  getTab() {
    return this.getDataByKey(GLOBAL_DATA_KEYS.TAB);
  }

  setTab(tab) {
    this.setDataByKey(GLOBAL_DATA_KEYS.TAB, tab);
  }
}
export default Global;
