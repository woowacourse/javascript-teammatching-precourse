import renderCrewTable from '../views/renderCrewTable.js';
import showConfirm from '../views/showConfirm.js';
import store from './store.js';
import getCourseTitle from '../modules/getCourseTitle.js';
import { CREW_STORAGE_INDEX_START, INDEX_KEY } from '../constants/constants.js';

function updateIndex(crewStorage) {
  crewStorage.forEach((item, index) => {
    item[INDEX_KEY] = index + 1;
  });
  return crewStorage;
}

export default function updateStorage(index, storageType) {
  if (showConfirm()) {
    let crewStorage = store.getLocalStorage(storageType);
    crewStorage.splice(index, 1);
    store.setLocalStoreage(storageType, updateIndex(crewStorage));
    renderCrewTable(getCourseTitle(storageType), storageType);
  }
}
