export default class TeamModel {
  constructor() {
    this.torage = this.setStorage('frontTeam');
    this.backStorage = this.setStorage('backTeam');
  }

  setStorage(storageName) {
    const storage = JSON.parse(localStorage.getItem(storageName));
    if (storage) {
      return storage;
    }
    const init = [];
    localStorage.setItem(storageName, JSON.stringify(init));
    return init;
  }

  getUserList(selectTeam, selectMission) {
    const storage = this.getTeamStorage(selectTeam);
    let list = [];
    storage?.forEach(({ mission, userList }) => {
      if (mission === selectMission) {
        list = userList;
      }
    });

    return list;
  }

  getTeamStorage(selectTeam) {
    if (selectTeam === 'frontend') {
      return this.frontStorage;
    }

    return this.backStorage;
  }
}
