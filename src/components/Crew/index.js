import { $ } from "../../common/dom.js";
import Component from "../../core/Component.js";
import store, { setState } from "../../storage/Store.js";
import Course from "./Course.js";

export default class Crew extends Component {
  setup() {
    const state = store.getState();
    this.currentCourse = state.currentCourse;
  }

  mount() {
    console.log(this.currentCourse);
    if (this.currentCourse) {
      new Course($("#course-div"));
    }
    this.setEvent();
  }

  setEvent() {
    $("#frontend-course").addEventListener("click", this.onClick.bind(this));
    $("#backend-course").addEventListener("click", this.onClick.bind(this));
  }

  onClick(e) {
    setState("currentCourse", e.target.value);
  }

  template() {
    return `  
    <section id="crew-section">
        <div id="course-tab">
            <h3>크루를 관리할 코스를 선택해주세요</h3>
            <div>
            <input id="frontend-course" type="radio" name="course" value="frontend" />
            <label for="frontend">프론트엔드</label>
            <input id="backend-course" type="radio" name="course" value="backend" />
            <label for="backend">백엔드</label>
            </div>
        </div>
        <div id="course-div">
        </div>
    </section>
    `;
  }
}
