import store from '../../lib/store.js';

class Model {
  constructor({ previousData, modelName }) {
    this.$data = {};
    this.$modelName = modelName;
    this.initializeData(previousData);
  }

  initializeData(previousData) {
    this.$data = previousData ? previousData : this.generateDefaultValue();
    this.setDataInStore();
  }

  generateDefaultValue() {
    return {};
  }

  getDataByKey(key) {
    return this.$data[key];
  }

  setDataByKey(key, value) {
    this.$data[key] = value;
    this.setDataInStore();
  }

  setDataInStore() {
    store.setLocalStorage(this.$modelName, this.$data);
  }
}
export default Model;
