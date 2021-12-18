import Crew from "../domain/Crew/Crew.js";
import crewNameValid from "../util/crewNameValid.js";

const frontCrew = new Crew();
const backCrew = new Crew();

function manageCrew(value) {
    const main = document.querySelector("main");
    const selectCourse = document.createElement("section");

    frontCrew.getFromLocalStorage("프론트엔드");
    backCrew.getFromLocalStorage("백엔드");

    selectCourse.innerHTML = `
          <h3>${value} 크루 관리</h3>
          <form>
            <label>크루 이름</label>
            <input id="crew-name-input" type="text" />
            <button id="add-crew-buttton">확인</button>
          </form>
          <h3>${value} 크루 목록</h3>
          <table id="crew-table" border="1">
            <thead>
              <tr>
                <th></th>
                <th>크루</th>
                <th>관리</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>`

    if(document.querySelectorAll("section").length === 1) {
        main.appendChild(selectCourse);
    }
    else {
        document.querySelectorAll("section")[1].innerHTML = selectCourse.innerHTML;
    }

    document.getElementById("add-crew-buttton").onclick = (e) => {
        e.preventDefault();
        addCrew(document.getElementById("crew-name-input").value, value);
    }

    displayCrewList(value);
}

function addCrew(name, value) {
    if(!crewNameValid(name)) {
        alert("잘못된 크루 이름입니다.");
    }
    else {
        if(value === "프론트엔드") {
            frontCrew.addCrew(name, value);
        }
        else {
            backCrew.addCrew(name, value);
        }
        displayCrewList(value);
    }
}

window.deleteCrew = (index, value) => {
    let res = window.confirm("정말 삭제하시겠습니까?");

    if(res) {
        if (value === "프론트엔드") {
            frontCrew.deleteCrew(index, value);
        } else {
            backCrew.deleteCrew(index, value);
        }
        displayCrewList(value);
    }
}

function displayFrontCrewList() {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    let i = 0;

    frontCrew.getCrewList().map((item) => {
        i++;
        tbody.innerHTML += `
            <tr>
                <td>${i}</td>
                <td>${item}</td>
                <td>
                    <button class="delete-crew-buttton" onclick="deleteCrew(${i-1}, '프론트엔드')">삭제</button>
                </td>
            </tr>`
    });
}

function displayBackCrewList() {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    let i = 0;

    backCrew.getCrewList().map((item) => {
        i++;
        tbody.innerHTML += `
            <tr>
                <td>${i}</td>
                <td>${item}</td>
                <td>
                    <button class="delete-crew-buttton" onclick="deleteCrew(${i-1}, '백엔드')">삭제</button>
                </td>
            </tr>`
    });
}

function displayCrewList(value) {
    if(value === "프론트엔드") {
        displayFrontCrewList();
    }
    else {
        displayBackCrewList();
    }

    //bindDeleteCrewEvent();
}
/*
function bindDeleteCrewEvent() {
    const deleteButtons = document.getElementsByClassName("delete-crew-buttton");
    for() {
        deleteButtons.onclick
    }
    deleteCrew(i, '프론트엔드');
}
*/
export default manageCrew;
