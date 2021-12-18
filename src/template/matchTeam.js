import Crew from "../domain/Crew/Crew.js";
import memberCountValid from "../util/memberCountValid.js";

const frontCrew = new Crew();
const backCrew = new Crew();

function matchTeam(course, mission) {
    const main = document.querySelector("main");
    const selectCourse = document.createElement("section");

    frontCrew.getFromLocalStorage("프론트엔드");
    backCrew.getFromLocalStorage("백엔드");

    selectCourse.innerHTML = `
      <h3>${course} ${mission} 미션의 팀 매칭</h3>
      <div>
        <div>
          <p>아직 매칭된 팀이 없습니다. 팀을 매칭하겠습니까?</p>
          <form>
            <label>1팀당 인원 수</label>
            <input id="team-member-count-input" type="number" />
            <button id="match-team-button">팀 매칭</button>
          </form>
        </div>
        <h4>크루 목록</h4>
        <ul>
        </ul>
      </div>`

    if(document.querySelectorAll("section").length === 1) {
        main.appendChild(selectCourse);
    }
    else {
        document.querySelectorAll("section")[1].innerHTML = selectCourse.innerHTML;
    }

    document.getElementById("match-team-button").onclick = () => displayMatchTeam(selectCourse);
    displayCrewList(course);
}

function displayCrewList(course) {
    const ul = document.querySelectorAll("ul");

    if(course === "프론트엔드") {
        frontCrew.getCrewList().map((item) => {
            ul[1].innerHTML += `
            <li>${item}</li>
        `
        });
    }
    else {
        backCrew.getCrewList().map((item) => {
            ul[1].innerHTML += `
            <li>${item}</li>
        `
        });
    }
}

function displayMatchTeam(selectCourse) {
    const memberCount = document.getElementById("team-member-count-input");

    if(!memberCountValid(memberCount.value)) {
        alert("잘못된 입력입니다.");
        return false;
    }

    frontCrew.getFromLocalStorage("프론트엔드");
    backCrew.getFromLocalStorage("백엔드");

    selectCourse.innerHTML = `
      <h3>${course} ${mission} 팀 조회</h3>
      <div>
        <div>
          <p>팀이 매칭되었습니다.</p>
          <ul id="team-match-result">
          </ul>
          <p>
            팀을 재매칭 하시겠습니까?
            <button id="rematch-team-button">재매칭</button>
          </p>
        </div>
      </div>`

    randomMatchTeam(memberCount.value);
}

function randomMatchTeam(input) {
    const ul = document.querySelectorAll("ul");
    ul[1].innerHTML += "";
}

export default matchTeam;
