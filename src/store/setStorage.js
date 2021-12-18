import { CREW_STORAGE_INDEX_START } from '../constants/constants.js';
import store from './store.js';

function createCrewNameObject(crewName, index) {
  const crewObject = {
    name: crewName,
    index: index,
  };
  return crewObject;
}

function computeIndex(courseStorage) {
  return courseStorage.length + 1;
}

export default function setStorage(crewName, courseType) {
  let courseStorage = store.getLocalStorage(courseType);
  let index = CREW_STORAGE_INDEX_START;
  if (courseStorage) {
    index = computeIndex(courseStorage);
    courseStorage.push(createCrewNameObject(crewName, index));
    store.setLocalStoreage(courseType, courseStorage);
  } else {
    store.setLocalStoreage(courseType, [createCrewNameObject(crewName, index)]);
  }
}
