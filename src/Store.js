import { CREW_COURSE, LOCAL_STORAGE_KEY } from "./constants.js";

export default class Store {
  constructor() {
    this.storage = window.localStorage;
    this.checkCrewList();

    this.clickedTab = ''; // 탭 클릭 히스토리는 로컬 스토리지에서 관리하지 않는다. 앱이 재실행 되면 빈 문자열로 초기화한다.
  }

  checkCrewList() {
    const crewList = this.getCrewList();
    if (!crewList) this.setCrewList({ frontend: [], backend: [] });
  }

  getCrewList() {
    return JSON.parse(this.storage.getItem(LOCAL_STORAGE_KEY.CREW_LIST));
  }

  setCrewList(data) {
    this.storage.setItem(LOCAL_STORAGE_KEY.CREW_LIST, JSON.stringify(data));
  }

  addCrew({ selectedCourse, name }) {
    const crewList = this.getCrewList();
    if (selectedCourse === CREW_COURSE.FRONTEND) {
      crewList.frontend.push(name);
    } else {
      crewList.backend.push(name);
    }
    this.setCrewList(crewList);
  }

  deleteCrew({ value, course }) {
    const crewList = this.getCrewList();
    if (course === CREW_COURSE.FRONTEND) {
      crewList.frontend.splice(value - 1, 1);
    } else {
      crewList.backend.splice(value - 1, 1);
    }
    this.setCrewList(crewList);
  }

  teamMatching({ number, course }) {
    console.log(number, course);
    const crewList = this.getCrewList();
    console.log(crewList[course]);
    const foo = MissionUtils.Random.shuffle(crewList[course]);
    console.log(foo);
  }
}
