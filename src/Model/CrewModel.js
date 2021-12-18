export default class CrewModel {
  constructor() {
    this.frontStorage = this.setStorage('frontCrew');
    this.backStorage = this.setStorage('backCrew');
  }

  setStorage(storageName) {
    const storage = JSON.parse(localStorage.getItem(storageName));
    if (storage) {
      return storage;
    }
    const init = [{ index: 0, name: null }];
    localStorage.setItem('frontcrew', JSON.stringify(init));
    return init;
  }

  getStorage(selectValue) {
    if (selectValue === 'frontend') {
      return this.frontStorage;
    }

    return this.backStorage;
  }

  addStorage(selectValue, crewName) {
    const storage = this.getStorage(selectValue);
    console.log(storage);
    const lastCrew = storage[storage.length - 1];
    const newCrew = { index: lastCrew.index + 1, name: crewName };
    const newStorage = [...storage, newCrew];
    if (selectValue === 'frontend') {
      localStorage.setItem('frontCrew', JSON.stringify(newStorage));
      this.frontStorage = newStorage;
    }
    if (selectValue === 'backend') {
      localStorage.setItem('backCrew', JSON.stringify(newStorage));
      this.backStorage = newStorage;
    }
  }

  deleteStorage(selectValue, crewName) {
    const storage = this.getStorage(selectValue);
    const newStorage = [];
    storage.forEach((crewInfo) => {
      if (crewInfo.name !== crewName) {
        newStorage.push(crewInfo);
      }
    });
    if (selectValue === 'frontend') {
      localStorage.setItem('frontCrew', JSON.stringify(newStorage));
      this.frontStorage = newStorage;
    }
    if (selectValue === 'backend') {
      localStorage.setItem('backCrew', JSON.stringify(newStorage));
      this.backStorage = newStorage;
    }
  }
}
