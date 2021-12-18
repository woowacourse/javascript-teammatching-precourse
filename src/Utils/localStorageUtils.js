export default class LocalStorageUtils {
  static keys = {
    frontCrewManage: 'FrontCrewManage',
    BackendCrewManage: 'BackendCrewManage',
  };

  static getItem = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };

  static setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
}
