import { $ } from "../../common/dom.js";
import Validation from "../../common/Validation.js";
import { COURSE } from "../../constants/const.js";
import Component from "../../core/Component.js";
import store, { setState } from "../../storage/Store.js";

export default class Course extends Component {
  setup() {
    const state = store.getState();
    this.validation = new Validation();
    this.currentCourse = state.currentCourse;

    if (this.currentCourse === "frontend") {
      this.crewList = state.frontend;
    } else {
      this.crewList = state.backend;
    }
  }

  getInput() {
    const input = $("#crew-name-input").value;
    if (input.length >= 6) {
      alert("너무 긴 크루 명입니다.");
      return;
    }
    return input;
  }

  mount() {
    this.setEvent();
  }

  setEvent() {
    $("#add-crew-button").addEventListener("click", this.addCrew.bind(this));
    document
      .querySelectorAll(".delete-crew-button")
      .forEach((btn) =>
        btn.addEventListener("click", this.deleteCrew.bind(this))
      );
  }

  addCrew(e) {
    const index = this.crewList.length + 1;
    const name = this.getInput();

    e.preventDefault();
    if (!this.validation.isEmtpyInput(name)) {
      return;
    }

    this.crewList.push({ index, name });
    setState(this.currentCourse, this.crewList);
  }

  deleteCrew(e) {
    if (!this.validation.isConfirm()) {
      return;
    }

    e.preventDefault();
    this.index = Number(e.target.closest("[data-seq]").dataset.seq);
    const newCrewList = this.crewList.filter((v) => {
      return Number(v.index) !== this.index;
    });
    setState(this.currentCourse, newCrewList);
  }

  template() {
    return `  
        <div>
        <h3>${COURSE[this.currentCourse]} 크루 관리</h3>
            <form>
            <label>크루 이름</label>
            <input id="crew-name-input" type="text" />
            <button id="add-crew-button" >확인</button>
            </form>
        </div>
        <div>
            <h3>${COURSE[this.currentCourse]} 크루 목록</h3>
            <table id="screw-table" border="1">
            <thead>
                <tr>
                <th></th>
                <th>크루</th>
                <th>관리</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                ${this.crewList
                  .map(
                    ({ index, name }) => `
                <tr data-seq="${index}">
                    <td>${index}</td>
                    <td>${name}</td>
                    <td>
                    <button class="delete-crew-button">삭제</button>
                </td>
                </tr>
                `
                  )
                  .join("")}
                </tr>
            </tbody>
            </table>
        </div>
    `;
  }
}
