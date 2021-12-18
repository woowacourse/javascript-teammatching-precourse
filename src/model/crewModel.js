import {
  getBackCrew,
  setBackCrew,
  getFrontCrew,
  setFrontCrew,
} from "../storage/localStorage.js";
import { isNaturalNumber } from "../utils/validCheck.js";

export default class CrewModel {
  constructor() {
    this.frontCrew = getFrontCrew();
    this.backCrew = getBackCrew();
  }

  addCrew(type, name) {
    if (type === "frontend") {
      if (!this.frontCrew.includes(name)) {
        this.frontCrew.push(name);
        this.frontCrew = setFrontCrew(this.frontCrew);
        return;
      }
      alert("동명 이인이 있습니다.");
      return;
    }
    if (!this.backCrew.includes(name)) {
      this.backCrew.push(name);
      this.backCrew = setBackCrew(this.backCrew);
      return;
    }
    alert("동명 이인이 있습니다.");
  }

  deleteCrew(type, name) {
    if (type === "frontend") {
      this.frontCrew.forEach((crew, idx) => {
        if (crew === name) {
          this.frontCrew.splice(idx, 1);
        }
      });
      this.frontCrew = setFrontCrew(this.frontCrew);
      return;
    }
    this.backCrew.forEach((crew, idx) => {
      if (crew === name) {
        this.backCrew.splice(idx, 1);
      }
    });
    this.backCrew = setBackCrew(this.backCrew);
  }

  matchTeam(type, number) {
    if (!this.isValidMember(number)) {
      return;
    }
    const team = new Array(parseInt(this.frontCrew.length / number, 10)).fill(
      []
    );
    const arr = type === "frontend" ? [...this.frontCrew] : [...this.backCrew];
    const pickArray = MissionUtils.Random.shuffle(
      Array.from({ length: this.frontCrew.length }, (v, i) => i)
    );

    pickArray.forEach((el, idx) => {
      team[idx % number].push(arr[el]);
      console.log(team);
    });
    console.log(team);
    return team;
  }

  isValidMember(number) {
    if (!isNaturalNumber(number)) {
      alert("올바른 값을 입력하세요.");
      return false;
    }
    if (parseInt(this.frontCrew.length / number, 10) < number) {
      alert("현재 인원으로 팀을 짤 수가 없습니다. 인원 수를 줄여보세요.");
      return false;
    }
    return true;
  }
}
