export default class Store {
  constructor() {
    this.storage = window.localStorage;

    this.clickedTab = ''; // 탭 클릭 히스토리는 로컬 스토리지에서 관리하지 않는다. 앱이 재실행 되면 빈 문자열로 초기화한다.
  }
}
