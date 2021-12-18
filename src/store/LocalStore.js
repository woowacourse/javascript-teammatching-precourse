import STORAGE_KEY from '../configs/key.js';
import { cloneObject } from '../utils/helper.js';

const INIT_DATA = {
  course: null,
  crewList: [],
  teamMatchCourse: null,
  teamMatchMission: null,
  matchedTeamList: [],
};

export default class LocalStore {
  static load() {
    return (
      JSON.parse(localStorage.getItem(STORAGE_KEY)) || cloneObject(INIT_DATA)
    );
  }

  static save(data) {
    const newData = {
      ...LocalStore.load(),
      ...data,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
  }

  static find(query, callback = () => false) {
    const { items } = LocalStore.load();
    const index = items.findIndex((item) => query(item));
    const result = items[index];

    return callback(result) || result;
  }

  static findAll(query, callback = () => false) {
    const { items } = LocalStore.load();
    const result = items.filter((item) => query(item));

    return callback(result) || result;
  }
}
