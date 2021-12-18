import Crew from "../domain/Crew/Crew.js";

const frontCrew = new Crew();
const backCrew = new Crew();

function manageCrew(value) {
    const main = document.querySelector("main");
    const selectCourse = document.createElement("section");

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
    if(value === "프론트엔드") {
        frontCrew.addCrew(name);
    }
    else {
        backCrew.addCrew(name);
    }
    displayCrewList(value);
}

function deleteCrew(index, value) {
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
                    <button class="delete-crew-buttton" onclick="deleteCrew(${i}, '프론트엔드')">삭제</button>
                </td>
            </tr>`
    });
}

function displayBackCrewList() {
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";

    backCrew.getCrewList().map((item) => {
        tbody.innerHTML += `
            <tr>
                <td>${item.index}</td>
                <td>${item.name}</td>
                <td>
                    <button class="delete-crew-buttton" onclick="deleteCrew(${item.index})">삭제</button>
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
}

export default manageCrew;
